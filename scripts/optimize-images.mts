#!/usr/bin/env node

import { fileTypeFromFile } from "file-type";
import { readdir, stat } from "fs/promises";
import { extname, join, resolve } from "path";
import sharp from "sharp";

enum ErrorType {
  TRANSIENT = "transient",
  PERMANENT = "permanent",
  SECURITY = "security",
}

interface RetryConfig {
  maxRetries: number;
  baseDelay: number;
  maxDelay: number;
  exponentialBase: number;
}

const SUPPORTED_EXTENSIONS: Array<string> = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".bmp",
  ".tiff",
];
const SUPPORTED_MIME_TYPES: Array<string> = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/bmp",
  "image/tiff",
];
const IMAGE_DIR: string = "public/assets/images";
const MAX_FILE_SIZE: number = 10 * 1024 * 1024; //? 10MB limit

const RETRY_CONFIG: RetryConfig = {
  maxRetries: 3,
  baseDelay: 1000, //? 1 second
  maxDelay: 8000, //? 8 seconds max
  exponentialBase: 2,
};

function isPathSafe(filePath: string, basePath: string): boolean {
  const resolvedPath = resolve(filePath);
  const resolvedBasePath = resolve(basePath);
  return resolvedPath.startsWith(resolvedBasePath);
}

function categorizeError(error: Error): ErrorType {
  const message = error.message.toLowerCase();

  //? Security-related errors (validation failures)
  if (
    message.includes("path traversal") ||
    message.includes("file too large") ||
    message.includes("unsupported") ||
    message.includes("validation failed")
  ) {
    return ErrorType.SECURITY;
  }

  //? Permanent errors (corrupted files, format issues)
  if (
    message.includes("input file missing") ||
    message.includes("input file is empty") ||
    message.includes("input buffer contains unsupported image format") ||
    message.includes("premature end of input") ||
    message.includes("corrupt") ||
    message.includes("invalid")
  ) {
    return ErrorType.PERMANENT;
  }

  //? Transient errors (memory, locks, temporary issues)
  if (
    message.includes("memory") ||
    message.includes("lock") ||
    message.includes("busy") ||
    message.includes("timeout") ||
    message.includes("enoent") ||
    message.includes("disk space") ||
    message.includes("resource temporarily unavailable")
  ) {
    return ErrorType.TRANSIENT;
  }

  return ErrorType.TRANSIENT;
}

function calculateRetryDelay(attempt: number): number {
  const delay =
    RETRY_CONFIG.baseDelay * Math.pow(RETRY_CONFIG.exponentialBase, attempt);
  return Math.min(delay, RETRY_CONFIG.maxDelay);
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function validateImageFile(filePath: string): Promise<boolean> {
  try {
    //? Path traversal protection
    if (!isPathSafe(filePath, IMAGE_DIR)) {
      throw new Error(`Path traversal attempt detected: ${filePath}`);
    }

    //? File size check
    const stats = await stat(filePath);
    if (stats.size > MAX_FILE_SIZE) {
      throw new Error(
        `File too large: ${(stats.size / 1024 / 1024).toFixed(
          2
        )}MB exceeds 10MB limit`
      );
    }

    //? MIME type validation
    const fileType = await fileTypeFromFile(filePath);
    if (!fileType || !SUPPORTED_MIME_TYPES.includes(fileType.mime)) {
      throw new Error(
        `Invalid or unsupported MIME type: ${fileType?.mime || "unknown"}`
      );
    }

    //? Extension validation (double check)
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

async function optimizeImageWithRetry(
  filePath: string,
  outputPath: string,
  attempt: number = 0
): Promise<void> {
  try {
    await sharp(filePath)
      .webp({
        quality: 90,
        effort: 4,
      })
      .toFile(outputPath);

    if (attempt > 0) {
      console.log(
        `✅ Optimized: ${outputPath} (succeeded after ${attempt} retries)`
      );
    } else {
      console.log(`✅ Optimized: ${outputPath}`);
    }
  } catch (error) {
    const sharpError =
      error instanceof Error ? error : new Error(String(error));
    const errorType = categorizeError(sharpError);

    //! Don't retry security or permanent errors
    if (errorType === ErrorType.SECURITY || errorType === ErrorType.PERMANENT) {
      throw sharpError;
    }

    //? Retry transient errors
    if (
      errorType === ErrorType.TRANSIENT &&
      attempt < RETRY_CONFIG.maxRetries
    ) {
      const delay = calculateRetryDelay(attempt);
      console.log(
        `🔄 Retry ${attempt + 1}/${
          RETRY_CONFIG.maxRetries
        } for ${filePath} in ${delay}ms (${errorType} error: ${
          sharpError.message
        })`
      );
      await sleep(delay);
      return optimizeImageWithRetry(filePath, outputPath, attempt + 1);
    }

    //? Max retries reached or unknown error type
    throw new Error(
      `Failed after ${attempt} retries (${errorType}): ${sharpError.message}`
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

    await optimizeImageWithRetry(filePath, outputPath);
  } catch (error) {
    const finalError =
      error instanceof Error ? error : new Error(String(error));
    const errorType = categorizeError(finalError);

    console.error(
      `❌ Error optimizing ${filePath} [${errorType}]:`,
      finalError.message
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
        //? Filter images directly during traversal (single-pass)
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

    let successCount = 0;
    let failureCount = 0;

    //? Process images in parallel with concurrency limit
    const CONCURRENCY = 4;
    for (let i = 0; i < imageFiles.length; i += CONCURRENCY) {
      const batch = imageFiles.slice(i, i + CONCURRENCY);

      //? Process batch and track results
      const results = await Promise.allSettled(batch.map(optimizeImage));

      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          successCount++;
        } else {
          failureCount++;
          console.error(
            `❌ Failed to process ${batch[index]}: ${result.reason}`
          );
        }
      });
    }

    console.log(`\n📊 Image optimization summary:`);
    console.log(`  ✅ Success: ${successCount} images`);
    console.log(`  ❌ Failed: ${failureCount} images`);

    // Don't fail the build unless all images failed
    if (successCount === 0 && failureCount > 0) {
      console.warn(
        "⚠️  All image optimizations failed, but build will continue"
      );
      console.warn("📝 Consider checking image files and Sharp installation");
    } else {
      console.log("✨ Image optimization complete!");
    }
  } catch (error: unknown) {
    // Catch critical errors but don't fail the build
    console.error(
      "❌ Critical error in image optimization:",
      error instanceof Error ? error.message : String(error)
    );
    console.warn("⚠️  Image optimization failed, but build will continue");
    console.warn("📝 Images will not be optimized in this build");

    // Don't exit with error code to avoid failing the build
    // process.exit(1); // Removed - let build continue
  }
}

main().catch((error: unknown) => {
  console.error(
    "❌ Unexpected error in image optimization:",
    error instanceof Error ? error.message : String(error)
  );
  console.warn("⚠️  Build will continue without image optimization");
  // Don't exit with error code - let build continue
  // process.exit(1);
});
