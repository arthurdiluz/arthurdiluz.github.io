#!/usr/bin/env node

import { fileTypeFromFile } from "file-type";
import { readdir, stat } from "fs/promises";
import { extname, join, resolve } from "path";
import sharp from "sharp";

const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff"];
const SUPPORTED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/bmp",
  "image/tiff",
];
const IMAGE_DIR = "public/assets/images";
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB limit

function isPathSafe(filePath: string, basePath: string): boolean {
  const resolvedPath = resolve(filePath);
  const resolvedBasePath = resolve(basePath);
  return resolvedPath.startsWith(resolvedBasePath);
}

async function validateImageFile(filePath: string): Promise<boolean> {
  try {
    // Path traversal protection
    if (!isPathSafe(filePath, IMAGE_DIR)) {
      throw new Error(`Path traversal attempt detected: ${filePath}`);
    }

    // File size check
    const stats = await stat(filePath);
    if (stats.size > MAX_FILE_SIZE) {
      throw new Error(
        `File too large: ${(stats.size / 1024 / 1024).toFixed(
          2
        )}MB exceeds 10MB limit`
      );
    }

    // MIME type validation
    const fileType = await fileTypeFromFile(filePath);
    if (!fileType || !SUPPORTED_MIME_TYPES.includes(fileType.mime)) {
      throw new Error(
        `Invalid or unsupported MIME type: ${fileType?.mime || "unknown"}`
      );
    }

    // Extension validation (double check)
    const ext = extname(filePath).toLowerCase();
    if (!SUPPORTED_EXTENSIONS.includes(ext)) {
      throw new Error(`Unsupported file extension: ${ext}`);
    }

    return true;
  } catch (error) {
    throw new Error(
      `Validation failed: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

async function optimizeImage(filePath: string): Promise<void> {
  try {
    const ext = extname(filePath).toLowerCase();

    //! Skip if already webp to avoid conversion loops
    if (ext === ".webp") {
      console.log(`⏭️  Skipping ${filePath} (already WebP)`);
      return;
    }

    // Comprehensive validation
    try {
      await validateImageFile(filePath);
    } catch (validationError) {
      console.log(
        `⏭️  Skipping ${filePath}: ${
          validationError instanceof Error
            ? validationError.message
            : String(validationError)
        }`
      );
      return;
    }

    const outputPath = filePath.replace(ext, ".webp");

    console.log(`🔄 Converting ${filePath} -> WebP`);

    await sharp(filePath)
      .webp({
        quality: 90,
        effort: 4,
      })
      .toFile(outputPath);

    console.log(`✅ Optimized: ${outputPath}`);
  } catch (error) {
    console.error(
      `❌ Error optimizing ${filePath}:`,
      error instanceof Error ? error.message : String(error)
    );
  }
}

async function walkDirectory(dir: string): Promise<string[]> {
  const imageFiles: string[] = [];

  try {
    const entries = await readdir(dir);

    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stats = await stat(fullPath);

      if (stats.isDirectory()) {
        const subFiles = await walkDirectory(fullPath);
        imageFiles.push(...subFiles);
      } else if (stats.isFile()) {
        const ext = extname(fullPath).toLowerCase();
        // Filter images directly during traversal (single-pass)
        if (SUPPORTED_EXTENSIONS.includes(ext)) {
          imageFiles.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(
      `❌ Error reading directory ${dir}:`,
      error instanceof Error ? error.message : String(error)
    );
  }

  return imageFiles;
}

async function main(): Promise<void> {
  console.log("🚀 Starting image optimization...\n");

  try {
    const imageFiles = await walkDirectory(IMAGE_DIR);

    if (imageFiles.length === 0) {
      console.log("ℹ️  No images found to optimize");
      return;
    }

    console.log(`📁 Found ${imageFiles.length} images to process\n`);

    //? Process images in parallel with concurrency limit
    const CONCURRENCY = 4;
    for (let i = 0; i < imageFiles.length; i += CONCURRENCY) {
      const batch = imageFiles.slice(i, i + CONCURRENCY);
      await Promise.all(batch.map(optimizeImage));
    }

    console.log("\n✨ Image optimization complete!");
  } catch (error) {
    console.error(
      "❌ Fatal error:",
      error instanceof Error ? error.message : String(error)
    );
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(
    "❌ Unexpected error:",
    error instanceof Error ? error.message : String(error)
  );
  process.exit(1);
});
