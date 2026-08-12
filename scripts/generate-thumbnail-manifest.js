import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { glob } from 'glob';

const MOCKUP_GLOB = 'src/stories/assets/mockups/**/*.avif';
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'stories', 'atoms', 'Thumbnail', 'thumbnail-manifest.generated.js');
const CACHE_FILE = path.join(process.cwd(), 'scripts', '.thumbnail-manifest.cache.json');
const OVERRIDES_FILE = path.join(process.cwd(), 'scripts', 'thumbnail-manifest.overrides.json');
const CACHE_VERSION = 4;

const DEFAULT_ALPHA_THRESHOLD = 22;
const DEFAULT_MAX_ANALYSIS_SIDE = 384;
const MIN_INTERNAL_HOLE_AREA_RATIO = 0.001;
const BOUNDARY_PAD_PX_BY_CATEGORY = {
  desktop: 0,
  mobile: 2,
  tablet: 1,
  television: 1,
  wearable: 1,
};
const ALPHA_THRESHOLD_BY_CATEGORY = {
  desktop: 22,
  mobile: 28,
  tablet: 24,
  television: 22,
  wearable: 22,
};
const MAX_ANALYSIS_SIDE_BY_CATEGORY = {
  desktop: 384,
  mobile: 640,
  tablet: 512,
  television: 384,
  wearable: 384,
};
const EDGE_BLEED_SCALE_BY_CATEGORY = {
  desktop: 1.6,
  mobile: 2.0,
  tablet: 1.8,
  television: 1.6,
  wearable: 1.6,
};
const EDGE_BLEED_MAX_BY_CATEGORY = {
  desktop: 0.65,
  mobile: 0.9,
  tablet: 0.8,
  television: 0.65,
  wearable: 0.65,
};
const EDGE_BLEED_TOP_RATIO_BY_CATEGORY = {
  desktop: 1,
  mobile: 0.42,
  tablet: 0.8,
  television: 1,
  wearable: 1,
};
const RADIUS_SCALE_BY_CATEGORY = {
  desktop: 1,
  mobile: 0.9,
  tablet: 0.96,
  television: 1,
  wearable: 1,
};

async function readFileSignature(filePath) {
  const stat = await fs.stat(filePath);
  return `${stat.size}:${Math.trunc(stat.mtimeMs)}`;
}

async function loadManifestCache() {
  try {
    const raw = await fs.readFile(CACHE_FILE, 'utf8');
    const parsed = JSON.parse(raw);

    if (!parsed || typeof parsed !== 'object') {
      return { version: CACHE_VERSION, entries: {} };
    }

    if (parsed.version !== CACHE_VERSION || !parsed.entries || typeof parsed.entries !== 'object') {
      return { version: CACHE_VERSION, entries: {} };
    }

    return parsed;
  } catch {
    return { version: CACHE_VERSION, entries: {} };
  }
}

async function saveManifestCache(cache) {
  await fs.writeFile(CACHE_FILE, `${JSON.stringify(cache, null, 2)}\n`, 'utf8');
}

async function loadManifestOverrides() {
  try {
    const raw = await fs.readFile(OVERRIDES_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      console.warn('Manifest overrides ignored: root JSON must be an object keyed by manifest path.');
      return {};
    }
    return parsed;
  } catch {
    return {};
  }
}

function isPlainObject(value) {
  return value != null && typeof value === 'object' && !Array.isArray(value);
}

function deepMerge(base, patch) {
  if (!isPlainObject(base) || !isPlainObject(patch)) {
    return patch;
  }

  const result = { ...base };
  for (const [key, value] of Object.entries(patch)) {
    if (isPlainObject(value) && isPlainObject(result[key])) {
      result[key] = deepMerge(result[key], value);
    } else {
      result[key] = value;
    }
  }

  return result;
}

function applyManifestOverrides(manifest, overrides) {
  const patchedManifest = { ...manifest };

  const overrideEntries = Object.entries(overrides);
  const exactEntries = overrideEntries.filter(([key]) => !key.includes('*'));
  const wildcardEntries = overrideEntries.filter(([key]) => key.includes('*'));

  for (const [manifestKey, patch] of exactEntries) {
    if (!isPlainObject(patch)) {
      console.warn(`Manifest override ignored for ${manifestKey}: entry must be an object.`);
      continue;
    }

    if (!patchedManifest[manifestKey]) {
      console.warn(`Manifest override key not found in generated manifest: ${manifestKey}`);
      continue;
    }

    patchedManifest[manifestKey] = deepMerge(patchedManifest[manifestKey], patch);
  }

  for (const [patternKey, patch] of wildcardEntries) {
    if (!isPlainObject(patch)) {
      console.warn(`Manifest wildcard override ignored for ${patternKey}: entry must be an object.`);
      continue;
    }

    const escapedPattern = patternKey
      .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
      .replace(/\*/g, '.*');
    const matcher = new RegExp(`^${escapedPattern}$`);

    let matchCount = 0;
    for (const manifestKey of Object.keys(patchedManifest)) {
      if (!matcher.test(manifestKey)) continue;
      patchedManifest[manifestKey] = deepMerge(patchedManifest[manifestKey], patch);
      matchCount += 1;
    }

    if (matchCount === 0) {
      console.warn(`Manifest wildcard override matched no keys: ${patternKey}`);
    }
  }

  return patchedManifest;
}

function resolveCategoryFromPath(filePath) {
  if (filePath.includes('/desktop/')) return 'desktop';
  if (filePath.includes('/tablet/')) return 'tablet';
  if (filePath.includes('/television/')) return 'television';
  if (filePath.includes('/wearable/')) return 'wearable';
  return 'mobile';
}

function resolveAnalysisConfig(category) {
  return {
    alphaThreshold: ALPHA_THRESHOLD_BY_CATEGORY[category] ?? DEFAULT_ALPHA_THRESHOLD,
    maxAnalysisSide: MAX_ANALYSIS_SIDE_BY_CATEGORY[category] ?? DEFAULT_MAX_ANALYSIS_SIDE,
    boundaryPadPx: BOUNDARY_PAD_PX_BY_CATEGORY[category] ?? BOUNDARY_PAD_PX_BY_CATEGORY.mobile,
    edgeBleedScale: EDGE_BLEED_SCALE_BY_CATEGORY[category] ?? EDGE_BLEED_SCALE_BY_CATEGORY.mobile,
    edgeBleedMax: EDGE_BLEED_MAX_BY_CATEGORY[category] ?? EDGE_BLEED_MAX_BY_CATEGORY.mobile,
    edgeBleedTopRatio: EDGE_BLEED_TOP_RATIO_BY_CATEGORY[category] ?? EDGE_BLEED_TOP_RATIO_BY_CATEGORY.mobile,
    radiusScale: RADIUS_SCALE_BY_CATEGORY[category] ?? RADIUS_SCALE_BY_CATEGORY.mobile,
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function buildTransparentMask(raw, width, height, alphaThreshold) {
  const total = width * height;
  const transparent = new Uint8Array(total);

  for (let i = 0; i < total; i += 1) {
    const alpha = raw[(i * 4) + 3];
    transparent[i] = alpha <= alphaThreshold ? 1 : 0;
  }

  return transparent;
}

function median(values) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

function detectNotchAnchor(holeMask, width, height, minX, minY, maxX, maxY) {
  const boxWidth = (maxX - minX) + 1;
  const boxHeight = (maxY - minY) + 1;

  if (boxWidth < 48 || boxHeight < 96) return null;

  const rowStats = [];
  for (let y = minY; y <= maxY; y += 1) {
    let rowMinX = Number.POSITIVE_INFINITY;
    let rowMaxX = Number.NEGATIVE_INFINITY;

    for (let x = minX; x <= maxX; x += 1) {
      if (!holeMask[(y * width) + x]) continue;
      if (x < rowMinX) rowMinX = x;
      if (x > rowMaxX) rowMaxX = x;
    }

    if (!Number.isFinite(rowMinX) || !Number.isFinite(rowMaxX)) {
      rowStats.push(null);
      continue;
    }

    rowStats.push({
      y,
      rowMinX,
      rowMaxX,
      rowWidth: (rowMaxX - rowMinX) + 1,
      rowCenterX: (rowMinX + rowMaxX) / 2,
    });
  }

  const baselineStart = Math.floor(boxHeight * 0.38);
  const baselineEnd = Math.floor(boxHeight * 0.82);
  const baselineWidths = rowStats
    .slice(baselineStart, Math.max(baselineStart + 1, baselineEnd))
    .filter(Boolean)
    .map((row) => row.rowWidth);

  if (baselineWidths.length < 8) return null;

  const baselineWidth = median(baselineWidths);
  const topSampleRows = Math.max(8, Math.floor(boxHeight * 0.24));
  const topRows = rowStats.slice(0, topSampleRows).filter(Boolean);
  if (!topRows.length) return null;

  const narrowestTopRow = topRows.reduce((best, row) => (row.rowWidth < best.rowWidth ? row : best), topRows[0]);
  const reductionRatio = (baselineWidth - narrowestTopRow.rowWidth) / baselineWidth;
  if (reductionRatio < 0.1) return null;

  const centerX = (minX + maxX) / 2;
  const centerOffsetRatio = Math.abs(narrowestTopRow.rowCenterX - centerX) / boxWidth;
  if (centerOffsetRatio > 0.08) return null;

  let notchEndRow = null;
  for (let i = 0; i < rowStats.length; i += 1) {
    const row = rowStats[i];
    if (!row) continue;
    if (row.rowWidth >= (baselineWidth * 0.95)) {
      notchEndRow = row;
      break;
    }
  }

  if (!notchEndRow) return null;

  const notchDepthPx = Math.max(1, notchEndRow.y - minY);
  if (notchDepthPx > Math.floor(boxHeight * 0.22)) return null;

  return {
    screenImageAnchor: { x: 50, y: 1.2 },
    notch: {
      widthPct: Number(clamp((narrowestTopRow.rowWidth / boxWidth) * 100, 0, 100).toFixed(4)),
      depthPct: Number(clamp((notchDepthPx / boxHeight) * 100, 0, 100).toFixed(4)),
      centerXPct: Number(clamp(((narrowestTopRow.rowCenterX - minX) / boxWidth) * 100, 0, 100).toFixed(4)),
    },
  };
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

function estimateCornerRadiusData(holeMask, width, height, minX, minY, maxX, maxY) {
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

  if (!hasRoundedCorners) {
    return {
      averagePct: 0,
      cornersPct: {
        topLeft: 0,
        topRight: 0,
        bottomLeft: 0,
        bottomRight: 0,
      },
    };
  }

  const cornerPercents = corners.map((cornerInsetPx) => clamp((cornerInsetPx / minSide) * 100, 0, 24));

  return {
    averagePct: clamp(normalizedInset * 100, 0, 24),
    cornersPct: {
      topLeft: cornerPercents[0],
      topRight: cornerPercents[1],
      bottomLeft: cornerPercents[2],
      bottomRight: cornerPercents[3],
    },
  };
}

function formatRadiusPercent(radiusNumber, scale = 1) {
  if (!Number.isFinite(radiusNumber) || radiusNumber <= 0) {
    return '0%';
  }

  const scaled = clamp(radiusNumber * scale, 0, 24);
  return `${scaled.toFixed(3)}%`;
}

function formatCornerRadiusPercentObject(cornersPct, scale = 1) {
  return {
    topLeft: formatRadiusPercent(cornersPct?.topLeft ?? 0, scale),
    topRight: formatRadiusPercent(cornersPct?.topRight ?? 0, scale),
    bottomLeft: formatRadiusPercent(cornersPct?.bottomLeft ?? 0, scale),
    bottomRight: formatRadiusPercent(cornersPct?.bottomRight ?? 0, scale),
  };
}

async function analyzeFile(filePath) {
  const category = resolveCategoryFromPath(filePath);
  const config = resolveAnalysisConfig(category);

  const input = sharp(filePath, { limitInputPixels: false }).ensureAlpha();
  const metadata = await input.metadata();
  if (!metadata.width || !metadata.height) return null;

  const scale = Math.min(1, config.maxAnalysisSide / Math.max(metadata.width, metadata.height));
  const width = Math.max(2, Math.round(metadata.width * scale));
  const height = Math.max(2, Math.round(metadata.height * scale));

  const { data, info } = await input
    .resize(width, height, { fit: 'fill' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const transparent = buildTransparentMask(data, info.width, info.height, config.alphaThreshold);
  const outside = markOutsideTransparent(transparent, info.width, info.height);
  const hole = findLargestInternalHole(transparent, outside, info.width, info.height);

  if (!hole) return null;

  const boxWidth = (hole.bestMaxX - hole.bestMinX) + 1;
  const boxHeight = (hole.bestMaxY - hole.bestMinY) + 1;
  const total = info.width * info.height;
  const boundaryPadPx = config.boundaryPadPx;

  const paddedMinX = clamp(hole.bestMinX - boundaryPadPx, 0, info.width - 1);
  const paddedMinY = clamp(hole.bestMinY - boundaryPadPx, 0, info.height - 1);
  const paddedMaxX = clamp(hole.bestMaxX + boundaryPadPx, 0, info.width - 1);
  const paddedMaxY = clamp(hole.bestMaxY + boundaryPadPx, 0, info.height - 1);
  const paddedBoxWidth = (paddedMaxX - paddedMinX) + 1;
  const paddedBoxHeight = (paddedMaxY - paddedMinY) + 1;

  const holeMask = new Uint8Array(total);
  for (const idx of hole.bestPixels) holeMask[idx] = 1;

  const notchMeta = category === 'mobile'
    ? detectNotchAnchor(
      holeMask,
      info.width,
      info.height,
      hole.bestMinX,
      hole.bestMinY,
      hole.bestMaxX,
      hole.bestMaxY
    )
    : null;

  const radiusData = estimateCornerRadiusData(
    holeMask,
    info.width,
    info.height,
    hole.bestMinX,
    hole.bestMinY,
    hole.bestMaxX,
    hole.bestMaxY
  );
  const screenRadius = formatRadiusPercent(radiusData.averagePct, config.radiusScale);
  const screenRadiusCorners = formatCornerRadiusPercentObject(radiusData.cornersPct, config.radiusScale);

  const baseBleedX = Number(clamp((100 / info.width) * config.edgeBleedScale, 0.08, config.edgeBleedMax).toFixed(4));
  const baseBleedY = Number(clamp((100 / info.height) * config.edgeBleedScale, 0.08, config.edgeBleedMax).toFixed(4));
  const topRatio = clamp(config.edgeBleedTopRatio, 0, 2);
  const topBleed = Number((baseBleedY * topRatio).toFixed(4));
  const bottomBleed = Number((baseBleedY * (2 - topRatio)).toFixed(4));

  const result = {
    bounds: {
      top: Number(((paddedMinY / info.height) * 100).toFixed(4)),
      left: Number(((paddedMinX / info.width) * 100).toFixed(4)),
      width: Number(((paddedBoxWidth / info.width) * 100).toFixed(4)),
      height: Number(((paddedBoxHeight / info.height) * 100).toFixed(4)),
    },
    screenRadius,
    screenRadiusCorners,
    screenFit: 'contain',
    edgeBleed: {
      x: baseBleedX,
      y: baseBleedY,
      top: topBleed,
      right: baseBleedX,
      bottom: bottomBleed,
      left: baseBleedX,
    },
  };

  if (notchMeta?.screenImageAnchor) {
    result.screenImageAnchor = notchMeta.screenImageAnchor;
  }

  if (notchMeta?.notch) {
    result.notch = notchMeta.notch;
  }

  return result;
}

async function generateManifest() {
  const files = await glob(MOCKUP_GLOB);
  files.sort((a, b) => a.localeCompare(b));
  const manifestOverrides = await loadManifestOverrides();

  const existingCache = await loadManifestCache();
  const nextCacheEntries = {};

  const manifest = {};
  let analyzed = 0;
  let skipped = 0;
  let fastSkipped = 0;

  for (const file of files) {
    const normalizedKey = `/${file.replace(/\\/g, '/')}`;

    try {
      const signature = await readFileSignature(file);
      const cachedEntry = existingCache.entries[normalizedKey];

      if (cachedEntry?.signature === signature && (cachedEntry.status === 'analyzed' || cachedEntry.status === 'no-window')) {
        nextCacheEntries[normalizedKey] = cachedEntry;
        fastSkipped += 1;

        if (cachedEntry.status === 'analyzed' && cachedEntry.result) {
          manifest[normalizedKey] = cachedEntry.result;
        } else {
          skipped += 1;
        }

        continue;
      }

      const result = await analyzeFile(file);
      if (!result) {
        nextCacheEntries[normalizedKey] = {
          signature,
          status: 'no-window',
        };
        skipped += 1;
        continue;
      }

      manifest[normalizedKey] = result;
      nextCacheEntries[normalizedKey] = {
        signature,
        status: 'analyzed',
        result,
      };
      analyzed += 1;
    } catch (err) {
      skipped += 1;
      console.warn(`Skipped ${file}: ${err.message}`);
    }
  }

  await saveManifestCache({
    version: CACHE_VERSION,
    entries: nextCacheEntries,
  });

  const finalManifest = applyManifestOverrides(manifest, manifestOverrides);
  const output = `// Auto-generated by scripts/generate-thumbnail-manifest.js\n// Do not edit manually.\n\nconst THUMBNAIL_MANIFEST = ${JSON.stringify(finalManifest, null, 2)};\n\nexport default THUMBNAIL_MANIFEST;\n`;

  await fs.writeFile(OUTPUT_FILE, output, 'utf8');
  console.log(`Generated thumbnail manifest: ${analyzed} analyzed, ${skipped} skipped, ${fastSkipped} fast-skipped.`);
}

generateManifest().catch((err) => {
  console.error('Failed to generate thumbnail manifest:', err);
  process.exitCode = 1;
});
