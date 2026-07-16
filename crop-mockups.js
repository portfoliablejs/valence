import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'node:fs/promises';

async function cropAndTrimAvifs() {
  const files = await glob('src/stories/assets/mockups/**/*.avif');
  console.log(`Analyzing ${files.length} AVIF files...\n`);

  let processed = 0;
  let skipped = 0;

  for (const file of files) {
    try {
      const image = sharp(file, { limitInputPixels: false });
      const metadata = await image.metadata();

      // 1. Memory Safety: Downscale huge images (>10k px) so libheif doesn't break the 2GB RAM limit
      if (metadata.width > 10000 || metadata.height > 10000) {
        image.resize({
          width: metadata.width > metadata.height ? 10000 : undefined,
          height: metadata.height >= metadata.width ? 10000 : undefined,
          fit: 'inside',
          withoutEnlargement: true
        });
      }

      // 2. Perform trim in memory buffer
      const trimmedBuffer = await image.trim().toBuffer();
      
      // 3. Compare trimmed dimensions against original dimensions
      const trimmedMeta = await sharp(trimmedBuffer).metadata();

      const needsCropping = 
        trimmedMeta.width !== metadata.width || 
        trimmedMeta.height !== metadata.height;

      if (needsCropping) {
        // Save only if padding was removed
        await fs.writeFile(file, trimmedBuffer);
        processed++;
        console.log(`Trimmed: ${file} (${metadata.width}x${metadata.height} -> ${trimmedMeta.width}x${trimmedMeta.height})`);
      } else {
        // Skip instantly if already perfectly cropped
        skipped++;
        console.log(`Already trimmed (skipped): ${file}`);
      }

    } catch (err) {
      console.error(`Error processing ${file}: ${err.message}`);
    }
  }

  console.log(`\nDone! Trimmed ${processed} images. Skipped ${skipped} already-cropped images.`);
}

cropAndTrimAvifs().catch(console.error);