#!/usr/bin/env node

import { readdir, stat } from "fs/promises";
import { extname, join } from "path";
import sharp from "sharp";

const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff"];
const IMAGE_DIR = "public/assets/images";

async function optimizeImage(filePath) {
  try {
    const ext = extname(filePath).toLowerCase();

    //! Skip if already webp to avoid conversion loops
    if (ext === ".webp") {
      console.log(`⏭️  Skipping ${filePath} (already WebP)`);
      return;
    }

    if (!SUPPORTED_EXTENSIONS.includes(ext)) {
      console.log(`⏭️  Skipping ${filePath} (unsupported format)`);
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
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
}

async function walkDirectory(dir) {
  const files = [];

  try {
    const entries = await readdir(dir);

    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stats = await stat(fullPath);

      if (stats.isDirectory()) {
        const subFiles = await walkDirectory(fullPath);
        files.push(...subFiles);
      } else if (stats.isFile()) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`❌ Error reading directory ${dir}:`, error.message);
  }

  return files;
}

async function main() {
  console.log("🚀 Starting image optimization...\n");

  try {
    const imageFiles = await walkDirectory(IMAGE_DIR);
    const imagesToOptimize = imageFiles.filter((file) =>
      SUPPORTED_EXTENSIONS.includes(extname(file).toLowerCase())
    );

    if (imagesToOptimize.length === 0) {
      console.log("ℹ️  No images found to optimize");
      return;
    }

    console.log(`📁 Found ${imagesToOptimize.length} images to process\n`);

    //? Process images in parallel with concurrency limit
    const CONCURRENCY = 4;
    for (let i = 0; i < imagesToOptimize.length; i += CONCURRENCY) {
      const batch = imagesToOptimize.slice(i, i + CONCURRENCY);
      await Promise.all(batch.map(optimizeImage));
    }

    console.log("\n✨ Image optimization complete!");
  } catch (error) {
    console.error("❌ Fatal error:", error.message);
    process.exit(1);
  }
}

main();
