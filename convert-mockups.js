import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'node:fs/promises';

const MAX_AVIF_DIMENSION = 16384;

async function fileExists(path) {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

async function convertPngToAvif() {
  const files = await glob('src/stories/assets/mockups/**/*.png');

  console.log(`Found ${files.length} PNG files total...`);

  let skipped = 0;
  let converted = 0;

  for (const file of files) {
    const outputFilePath = file.replace(/\.png$/i, '.avif');

    // Skip if AVIF already exists from previous run
    if (await fileExists(outputFilePath)) {
      skipped++;
      continue;
    }

    try {
      const pipeline = sharp(file, { limitInputPixels: false });
      const metadata = await pipeline.metadata();

      // Check if dimensions exceed HEIF/AVIF limit (16,384px)
      if (metadata.width > MAX_AVIF_DIMENSION || metadata.height > MAX_AVIF_DIMENSION) {
        console.log(`Resizing large image (${metadata.width}x${metadata.height}): ${file}`);
        pipeline.resize({
          width: metadata.width > metadata.height ? MAX_AVIF_DIMENSION : undefined,
          height: metadata.height >= metadata.width ? MAX_AVIF_DIMENSION : undefined,
          fit: 'inside',
          withoutEnlargement: true
        });
      }

      await pipeline
        .toFormat('avif', { quality: 80 })
        .toFile(outputFilePath);

      converted++;
      console.log(`Converted: ${file} -> ${outputFilePath}`);
    } catch (err) {
      console.error(`Failed to convert ${file}:`, err.message);
    }
  }

  console.log(`\nDone! Converted ${converted} images, skipped ${skipped} existing AVIFs.`);
}

convertPngToAvif().catch(console.error);