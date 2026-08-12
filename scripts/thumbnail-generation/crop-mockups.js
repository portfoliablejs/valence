import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'node:fs/promises';

const CACHE_FILE = 'scripts/thumbnail-generation/.crop-mockups.cache.json';

async function loadCache() {
  try {
    const raw = await fs.readFile(CACHE_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

async function saveCache(cache) {
  await fs.writeFile(CACHE_FILE, `${JSON.stringify(cache, null, 2)}\n`, 'utf8');
}

async function readFileSignature(file) {
  const stat = await fs.stat(file);
  return `${stat.size}:${Math.trunc(stat.mtimeMs)}`;
}

async function cropAndTrimAvifs() {
  const files = await glob('src/stories/assets/mockups/**/*.avif');
  console.log(`Analyzing ${files.length} AVIF files...\n`);

  const cache = await loadCache();

  let processed = 0;
  let skipped = 0;
  let fastSkipped = 0;

  for (const file of files) {
    try {
      const signature = await readFileSignature(file);
      const cachedEntry = cache[file];

      // Fast path: file unchanged and previously confirmed already-trimmed.
      if (cachedEntry?.signature === signature && cachedEntry?.status === 'already-trimmed') {
        fastSkipped++;
        continue;
      }

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
        const newSignature = await readFileSignature(file);
        cache[file] = {
          signature: newSignature,
          status: 'trimmed'
        };
        processed++;
        console.log(`Trimmed: ${file} (${metadata.width}x${metadata.height} -> ${trimmedMeta.width}x${trimmedMeta.height})`);
      } else {
        cache[file] = {
          signature,
          status: 'already-trimmed'
        };
        // Skip instantly if already perfectly cropped
        skipped++;
        console.log(`Already trimmed (skipped): ${file}`);
      }

    } catch (err) {
      console.error(`Error processing ${file}: ${err.message}`);
    }
  }

  await saveCache(cache);

  console.log(`\nDone! Trimmed ${processed} images. Skipped ${skipped} already-cropped images. Fast-skipped ${fastSkipped} unchanged files.`);
}

cropAndTrimAvifs().catch(console.error);