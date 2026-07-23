import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { glob } from 'glob';

const MOCKUP_GLOB = 'src/stories/assets/mockups/**/*.avif';
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'stories', 'atoms', 'Thumbnail', 'thumbnail-manifest.generated.js');

const ALPHA_THRESHOLD = 22;
const MAX_ANALYSIS_SIDE = 384;
const MIN_INTERNAL_HOLE_AREA_RATIO = 0.001;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function buildTransparentMask(raw, width, height) {
  const total = width * height;
  const transparent = new Uint8Array(total);

  for (let i = 0; i < total; i += 1) {
    const alpha = raw[(i * 4) + 3];
    transparent[i] = alpha <= ALPHA_THRESHOLD ? 1 : 0;
  }

  return transparent;
}

function markOutsideTransparent(transparent, width, height) {
  const total = width * height;
  const outside = new Uint8Array(total);
  const queue = [];

  const push = (x, y) => {
    const idx = (y * width) + x;
    if (!transparent[idx] || outside[idx]) return;
    outside[idx] = 1;
    queue.push(idx);
  };

  for (let x = 0; x < width; x += 1) {
    push(x, 0);
    push(x, height - 1);
  }

  for (let y = 0; y < height; y += 1) {
    push(0, y);
    push(width - 1, y);
  }

  for (let cursor = 0; cursor < queue.length; cursor += 1) {
    const idx = queue[cursor];
    const x = idx % width;
    const y = (idx / width) | 0;

    if (x > 0) push(x - 1, y);
    if (x + 1 < width) push(x + 1, y);
    if (y > 0) push(x, y - 1);
    if (y + 1 < height) push(x, y + 1);
  }

  return outside;
}

function findLargestInternalHole(transparent, outside, width, height) {
  const total = width * height;
  const visited = new Uint8Array(total);

  let bestArea = 0;
  let bestMinX = 0;
  let bestMinY = 0;
  let bestMaxX = 0;
  let bestMaxY = 0;
  let bestPixels = null;

  for (let i = 0; i < total; i += 1) {
    if (!transparent[i] || outside[i] || visited[i]) continue;

    let area = 0;
    let minX = width;
    let minY = height;
    let maxX = 0;
    let maxY = 0;
    const queue = [i];
    const pixels = [];
    visited[i] = 1;

    for (let cursor = 0; cursor < queue.length; cursor += 1) {
      const idx = queue[cursor];
      const x = idx % width;
      const y = (idx / width) | 0;

      pixels.push(idx);
      area += 1;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;

      const tryVisit = (nx, ny) => {
        if (nx < 0 || ny < 0 || nx >= width || ny >= height) return;
        const nIdx = (ny * width) + nx;
        if (!transparent[nIdx] || outside[nIdx] || visited[nIdx]) return;
        visited[nIdx] = 1;
        queue.push(nIdx);
      };

      tryVisit(x - 1, y);
      tryVisit(x + 1, y);
      tryVisit(x, y - 1);
      tryVisit(x, y + 1);
    }

    if (area > bestArea) {
      bestArea = area;
      bestMinX = minX;
      bestMinY = minY;
      bestMaxX = maxX;
      bestMaxY = maxY;
      bestPixels = pixels;
    }
  }

  if (!bestPixels || bestArea < (total * MIN_INTERNAL_HOLE_AREA_RATIO)) {
    return null;
  }

  return { bestArea, bestMinX, bestMinY, bestMaxX, bestMaxY, bestPixels };
}

function estimateCornerRadiusPercent(holeMask, width, height, minX, minY, maxX, maxY) {
  const boxWidth = (maxX - minX) + 1;
  const boxHeight = (maxY - minY) + 1;
  const minSide = Math.max(1, Math.min(boxWidth, boxHeight));

  const rowInsetFromLeft = (y) => {
    for (let x = minX; x <= maxX; x += 1) {
      if (holeMask[(y * width) + x]) return x - minX;
    }
    return boxWidth;
  };

  const rowInsetFromRight = (y) => {
    for (let x = maxX; x >= minX; x -= 1) {
      if (holeMask[(y * width) + x]) return maxX - x;
    }
    return boxWidth;
  };

  const colInsetFromTop = (x) => {
    for (let y = minY; y <= maxY; y += 1) {
      if (holeMask[(y * width) + x]) return y - minY;
    }
    return boxHeight;
  };

  const colInsetFromBottom = (x) => {
    for (let y = maxY; y >= minY; y -= 1) {
      if (holeMask[(y * width) + x]) return maxY - y;
    }
    return boxHeight;
  };

  const sampleDepth = Math.max(4, Math.min(28, Math.floor(minSide * 0.14)));
  const estimateCornerRadiusPx = (horizontalInset, verticalInset, baseY, baseX, yStep, xStep) => {
    let horizontalMax = 0;
    let verticalMax = 0;

    for (let i = 0; i < sampleDepth; i += 1) {
      const y = baseY + (i * yStep);
      const x = baseX + (i * xStep);
      const hInset = horizontalInset(y);
      const vInset = verticalInset(x);
      if (hInset > horizontalMax) horizontalMax = hInset;
      if (vInset > verticalMax) verticalMax = vInset;
    }

    return (horizontalMax + verticalMax) / 2;
  };

  const corners = [
    estimateCornerRadiusPx(rowInsetFromLeft, colInsetFromTop, minY, minX, 1, 1),
    estimateCornerRadiusPx(rowInsetFromRight, colInsetFromTop, minY, maxX, 1, -1),
    estimateCornerRadiusPx(rowInsetFromLeft, colInsetFromBottom, maxY, minX, -1, 1),
    estimateCornerRadiusPx(rowInsetFromRight, colInsetFromBottom, maxY, maxX, -1, -1),
  ];

  const avgInset = corners.reduce((acc, val) => acc + val, 0) / corners.length;
  const normalizedInset = avgInset / minSide;
  const hasRoundedCorners = avgInset >= 2 && normalizedInset > 0.012;

  if (!hasRoundedCorners) return '0%';
  return `${clamp(normalizedInset * 100, 0, 24).toFixed(3)}%`;
}

async function analyzeFile(filePath) {
  const input = sharp(filePath, { limitInputPixels: false }).ensureAlpha();
  const metadata = await input.metadata();
  if (!metadata.width || !metadata.height) return null;

  const scale = Math.min(1, MAX_ANALYSIS_SIDE / Math.max(metadata.width, metadata.height));
  const width = Math.max(2, Math.round(metadata.width * scale));
  const height = Math.max(2, Math.round(metadata.height * scale));

  const { data, info } = await input
    .resize(width, height, { fit: 'fill' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const transparent = buildTransparentMask(data, info.width, info.height);
  const outside = markOutsideTransparent(transparent, info.width, info.height);
  const hole = findLargestInternalHole(transparent, outside, info.width, info.height);

  if (!hole) return null;

  const boxWidth = (hole.bestMaxX - hole.bestMinX) + 1;
  const boxHeight = (hole.bestMaxY - hole.bestMinY) + 1;
  const total = info.width * info.height;

  const holeMask = new Uint8Array(total);
  for (const idx of hole.bestPixels) holeMask[idx] = 1;

  const screenRadius = estimateCornerRadiusPercent(
    holeMask,
    info.width,
    info.height,
    hole.bestMinX,
    hole.bestMinY,
    hole.bestMaxX,
    hole.bestMaxY
  );

  return {
    bounds: {
      top: Number(((hole.bestMinY / info.height) * 100).toFixed(4)),
      left: Number(((hole.bestMinX / info.width) * 100).toFixed(4)),
      width: Number(((boxWidth / info.width) * 100).toFixed(4)),
      height: Number(((boxHeight / info.height) * 100).toFixed(4)),
    },
    screenRadius,
    edgeBleed: {
      x: Number(clamp((100 / info.width) * 1.6, 0.08, 0.65).toFixed(4)),
      y: Number(clamp((100 / info.height) * 1.6, 0.08, 0.65).toFixed(4)),
    },
  };
}

async function generateManifest() {
  const files = await glob(MOCKUP_GLOB);
  files.sort((a, b) => a.localeCompare(b));

  const manifest = {};
  let analyzed = 0;
  let skipped = 0;

  for (const file of files) {
    try {
      const result = await analyzeFile(file);
      if (!result) {
        skipped += 1;
        continue;
      }

      const normalizedKey = `/${file.replace(/\\/g, '/')}`;
      manifest[normalizedKey] = result;
      analyzed += 1;
    } catch (err) {
      skipped += 1;
      console.warn(`Skipped ${file}: ${err.message}`);
    }
  }

  const output = `// Auto-generated by scripts/generate-thumbnail-manifest.js\n// Do not edit manually.\n\nconst THUMBNAIL_MANIFEST = ${JSON.stringify(manifest, null, 2)};\n\nexport default THUMBNAIL_MANIFEST;\n`;

  await fs.writeFile(OUTPUT_FILE, output, 'utf8');
  console.log(`Generated thumbnail manifest: ${analyzed} analyzed, ${skipped} skipped.`);
}

generateManifest().catch((err) => {
  console.error('Failed to generate thumbnail manifest:', err);
  process.exitCode = 1;
});
