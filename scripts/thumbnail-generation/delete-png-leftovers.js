import fs from 'node:fs/promises';
import { glob } from 'glob';

function hasDryRunFlag() {
  return process.argv.includes('--dry-run');
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function deletePngLeftovers() {
  const dryRun = hasDryRunFlag();
  const pngFiles = await glob('src/stories/assets/mockups/**/*.png');

  console.log(`Found ${pngFiles.length} PNG files total...`);

  let deleted = 0;
  let keptNoAvif = 0;
  let alreadyClean = 0;

  for (const pngPath of pngFiles) {
    const avifPath = pngPath.replace(/\.png$/i, '.avif');
    const avifExists = await fileExists(avifPath);

    if (!avifExists) {
      keptNoAvif += 1;
      continue;
    }

    if (dryRun) {
      alreadyClean += 1;
      console.log(`[dry-run] Would delete: ${pngPath}`);
      continue;
    }

    await fs.unlink(pngPath);
    deleted += 1;
    console.log(`Deleted PNG leftover: ${pngPath}`);
  }

  if (dryRun) {
    console.log(`\nDone! Would delete ${alreadyClean} PNG leftovers. Kept ${keptNoAvif} PNG files without matching AVIF.`);
    return;
  }

  console.log(`\nDone! Deleted ${deleted} PNG leftovers. Kept ${keptNoAvif} PNG files without matching AVIF.`);
}

deletePngLeftovers().catch((err) => {
  console.error('Failed to delete PNG leftovers:', err);
  process.exitCode = 1;
});
