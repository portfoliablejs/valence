import css from './thumbnail.css?inline';
import PRECOMPUTED_THUMBNAIL_MANIFEST from './thumbnail-manifest.generated.js';

/* ==========================================================================
   1. DEVICE CATALOG (DEV & STORYBOOK CONTROLS)
   ========================================================================== */
export function buildDeviceCatalog() {
  let globModules = {};

  try {
    globModules = import.meta.glob('/src/stories/assets/mockups/**/*.avif', {
      eager: true,
      query: '?url',
      import: 'default',
    });
  } catch (err) {
    // Soft fallback if globbing is unavailable or asset directory is empty
  }

  const catalog = {};

  for (const [filePath, fileUrl] of Object.entries(globModules)) {
    const cleanPath = filePath.replace(/\\/g, '/');
    const mockupsIdx = cleanPath.indexOf('mockups/');
    if (mockupsIdx === -1) continue;

    const relativePath = cleanPath.substring(mockupsIdx + 8); 
    const parts = relativePath.split('/');
    if (parts.length < 3) continue;

    const category = parts[0];
    const brand = parts[1];
    const fileName = parts[parts.length - 1];

    const intermediateDirs = parts.slice(2, parts.length - 1);
    const modelDirs = intermediateDirs.filter(
      (dir) => !/^(device|device closed|device open|device with shadow)$/i.test(dir)
    );

    const modelName = modelDirs.length > 0 ? modelDirs.join(' - ') : parts[2];

    let variantName = fileName.replace(/\.avif$/i, '');
    if (modelName) {
      const cleanModelStr = modelName.split(' - ')[0];
      const modelRegex = new RegExp(cleanModelStr.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'gi');
      variantName = variantName.replace(modelRegex, '').replace(/^[\s—–-]+|[\s—–-]+$/g, '').trim();
    }
    if (!variantName) {
      variantName = fileName.replace(/\.avif$/i, '');
    }

    if (!catalog[category]) catalog[category] = {};
    if (!catalog[category][brand]) catalog[category][brand] = {};
    if (!catalog[category][brand][modelName]) {
      catalog[category][brand][modelName] = { colors: {} };
    }

    catalog[category][brand][modelName].colors[variantName] = { 
      base: fileName,
      url: typeof fileUrl === 'string' ? fileUrl : (fileUrl?.default || filePath),
      sourcePath: cleanPath,
    };
  }

  return catalog;
}

// Exported for Storybook controls & dynamic decorators
export const DEVICE_CATALOG = buildDeviceCatalog();

/* ==========================================================================
   2. STATIC MANIFEST REGISTRY (PRODUCTION OPTIMIZATION)
   ========================================================================== */
let globalManifest = { ...PRECOMPUTED_THUMBNAIL_MANIFEST };
const RUNTIME_GEOMETRY_CACHE = new Map();

const ALPHA_THRESHOLD = 22;
const MAX_ANALYSIS_SIDE = 384;
const MIN_INTERNAL_HOLE_AREA_RATIO = 0.001;

/**
 * Register pre-calculated bounds & mask URLs for fast production rendering.
 */
export function registerDeviceManifest(manifest) {
  globalManifest = { ...globalManifest, ...manifest };
}

function parseManifestRadius(manifestEntry) {
  if (!manifestEntry) return null;

  const candidate = manifestEntry.screenRadius ?? manifestEntry.radius ?? manifestEntry?.bounds?.radius;
  if (candidate == null || candidate === '') return null;

  if (typeof candidate === 'number' && Number.isFinite(candidate)) {
    return `${candidate}%`;
  }

  if (typeof candidate === 'string') {
    const trimmed = candidate.trim();
    if (trimmed) return trimmed;
  }

  return null;
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => resolve(image);
    image.onerror = (err) => reject(err);
    image.src = url;
  });
}

function inferWindowGeometryFromAlpha(image) {
  const srcWidth = image.naturalWidth || image.width;
  const srcHeight = image.naturalHeight || image.height;
  if (!srcWidth || !srcHeight) return null;

  const scale = Math.min(1, MAX_ANALYSIS_SIDE / Math.max(srcWidth, srcHeight));
  const width = Math.max(2, Math.round(srcWidth * scale));
  const height = Math.max(2, Math.round(srcHeight * scale));
  const total = width * height;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return null;

  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(image, 0, 0, width, height);

  const data = ctx.getImageData(0, 0, width, height).data;
  const transparent = new Uint8Array(total);
  for (let i = 0; i < total; i += 1) {
    const alpha = data[(i * 4) + 3];
    transparent[i] = alpha <= ALPHA_THRESHOLD ? 1 : 0;
  }

  const outside = new Uint8Array(total);
  const queue = [];

  const pushIfTransparent = (x, y) => {
    const idx = y * width + x;
    if (!transparent[idx] || outside[idx]) return;
    outside[idx] = 1;
    queue.push(idx);
  };

  for (let x = 0; x < width; x += 1) {
    pushIfTransparent(x, 0);
    pushIfTransparent(x, height - 1);
  }

  for (let y = 0; y < height; y += 1) {
    pushIfTransparent(0, y);
    pushIfTransparent(width - 1, y);
  }

  for (let cursor = 0; cursor < queue.length; cursor += 1) {
    const idx = queue[cursor];
    const x = idx % width;
    const y = (idx / width) | 0;

    if (x > 0) pushIfTransparent(x - 1, y);
    if (x + 1 < width) pushIfTransparent(x + 1, y);
    if (y > 0) pushIfTransparent(x, y - 1);
    if (y + 1 < height) pushIfTransparent(x, y + 1);
  }

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
    const componentQueue = [i];
    const componentPixels = [];
    visited[i] = 1;

    for (let cursor = 0; cursor < componentQueue.length; cursor += 1) {
      const idx = componentQueue[cursor];
      const x = idx % width;
      const y = (idx / width) | 0;

      componentPixels.push(idx);
      area += 1;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;

      const tryVisit = (nx, ny) => {
        if (nx < 0 || ny < 0 || nx >= width || ny >= height) return;
        const nIdx = ny * width + nx;
        if (!transparent[nIdx] || outside[nIdx] || visited[nIdx]) return;
        visited[nIdx] = 1;
        componentQueue.push(nIdx);
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
      bestPixels = componentPixels;
    }
  }

  if (!bestArea || bestArea < (total * MIN_INTERNAL_HOLE_AREA_RATIO) || !bestPixels) {
    return null;
  }

  const holeMask = new Uint8Array(total);
  for (const idx of bestPixels) {
    holeMask[idx] = 1;
  }

  const boxWidth = (bestMaxX - bestMinX) + 1;
  const boxHeight = (bestMaxY - bestMinY) + 1;
  const minSide = Math.min(boxWidth, boxHeight);

  const rowInsetFromLeft = (y) => {
    for (let x = bestMinX; x <= bestMaxX; x += 1) {
      if (holeMask[(y * width) + x]) return x - bestMinX;
    }
    return boxWidth;
  };

  const rowInsetFromRight = (y) => {
    for (let x = bestMaxX; x >= bestMinX; x -= 1) {
      if (holeMask[(y * width) + x]) return bestMaxX - x;
    }
    return boxWidth;
  };

  const colInsetFromTop = (x) => {
    for (let y = bestMinY; y <= bestMaxY; y += 1) {
      if (holeMask[(y * width) + x]) return y - bestMinY;
    }
    return boxHeight;
  };

  const colInsetFromBottom = (x) => {
    for (let y = bestMaxY; y >= bestMinY; y -= 1) {
      if (holeMask[(y * width) + x]) return bestMaxY - y;
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

  const cornerRadiiPx = [
    estimateCornerRadiusPx(rowInsetFromLeft, colInsetFromTop, bestMinY, bestMinX, 1, 1),
    estimateCornerRadiusPx(rowInsetFromRight, colInsetFromTop, bestMinY, bestMaxX, 1, -1),
    estimateCornerRadiusPx(rowInsetFromLeft, colInsetFromBottom, bestMaxY, bestMinX, -1, 1),
    estimateCornerRadiusPx(rowInsetFromRight, colInsetFromBottom, bestMaxY, bestMaxX, -1, -1),
  ];

  const averageInset = cornerRadiiPx.reduce((acc, val) => acc + val, 0) / cornerRadiiPx.length;
  const normalizedInset = averageInset / Math.max(1, minSide);
  const hasRoundedCorners = averageInset >= 2 && normalizedInset > 0.012;
  const radiusPercent = hasRoundedCorners
    ? Math.max(0, Math.min(normalizedInset * 100, 24))
    : 0;

  return {
    bounds: {
      top: (bestMinY / height) * 100,
      left: (bestMinX / width) * 100,
      width: (boxWidth / width) * 100,
      height: (boxHeight / height) * 100,
    },
    screenRadius: `${radiusPercent.toFixed(3)}%`,
    edgeBleed: {
      x: Math.min(0.65, Math.max(0.08, (100 / width) * 1.6)),
      y: Math.min(0.65, Math.max(0.08, (100 / height) * 1.6)),
    },
    hasRoundedCorners,
  };
}

function getRuntimeGeometry(deviceUrl) {
  if (!deviceUrl) return Promise.resolve(null);

  if (RUNTIME_GEOMETRY_CACHE.has(deviceUrl)) {
    return RUNTIME_GEOMETRY_CACHE.get(deviceUrl);
  }

  const job = loadImage(deviceUrl)
    .then((image) => inferWindowGeometryFromAlpha(image))
    .catch(() => null);

  RUNTIME_GEOMETRY_CACHE.set(deviceUrl, job);
  return job;
}

function runWhenIdle(task) {
  return new Promise((resolve) => {
    const scheduler = typeof window !== 'undefined' ? window : null;

    if (scheduler && typeof scheduler.requestIdleCallback === 'function') {
      scheduler.requestIdleCallback(() => resolve(task()), { timeout: 900 });
      return;
    }

    setTimeout(() => resolve(task()), 0);
  });
}

/* ==========================================================================
   3. WEB COMPONENT CLASS
   ========================================================================== */
export class Thumbnail extends HTMLElement {
  static get observedAttributes() {
    return [
      'category',
      'brand',
      'model',
      'color',
      'screen-image',
      'device-src',
      'custom-only',
      'disabled',
      'aria-label',
      'max-height'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // Single compressed line Shadow DOM string per design system guidelines
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="frame-container" tabindex="0"><img class="screen-cover" alt="Screen Cover Content" loading="eager" /><img class="device-image" alt="Device Frame Mockup" loading="lazy" /></div>`;

    this.container = this.shadowRoot.querySelector('.frame-container');
    this.imgEl = this.shadowRoot.querySelector('.device-image');
    this.screenEl = this.shadowRoot.querySelector('.screen-cover');
    this._renderSeq = 0;
  }

  connectedCallback() {
    this._observeRootAccessibility();
    this.render();
  }

  disconnectedCallback() {
    if (this._themeObserver) this._themeObserver.disconnect();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  _observeRootAccessibility() {
    const root = this.ownerDocument.documentElement;
    const sync = () => {
      this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
      this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
      this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
      this.toggleAttribute('a11y-forced-colors', root.classList.contains('a11y-forced-colors'));
    };

    sync();
    this._themeObserver = new MutationObserver(sync);
    this._themeObserver.observe(root, { attributes: true, attributeFilter: ['class'] });
  }

  _resolveAssetPath() {
    const directSrc = this.getAttribute('device-src');
    if (directSrc) {
      const fileName = directSrc.split('/').pop() || '';
      return {
        url: directSrc,
        sourcePath: directSrc,
        base: fileName,
      };
    }

    const catKeys = Object.keys(DEVICE_CATALOG);
    if (catKeys.length === 0) return null;

    const cat = this.getAttribute('category') || (catKeys.includes('mobile') ? 'mobile' : catKeys[0]);
    const catData = DEVICE_CATALOG[cat] || Object.values(DEVICE_CATALOG)[0];
    if (!catData) return null;

    const brandKeys = Object.keys(catData);
    const brand = this.getAttribute('brand') || brandKeys[0];
    const brandData = catData[brand] || Object.values(catData)[0];
    if (!brandData) return null;

    const modelKeys = Object.keys(brandData);
    const modelKey = this.getAttribute('model') || modelKeys[0];
    const modelData = brandData[modelKey] || Object.values(brandData)[0];
    if (!modelData) return null;

    const colorKeys = Object.keys(modelData.colors || {});
    const colorKey = this.getAttribute('color') || colorKeys[0];
    const colorData = modelData.colors ? (modelData.colors[colorKey] || Object.values(modelData.colors)[0]) : null;

    if (!colorData) return null;
    return {
      url: colorData.url || '',
      sourcePath: colorData.sourcePath || '',
      base: colorData.base || '',
    };
  }

  _getManifestEntry(deviceUrl, sourcePath, baseFileName) {
    const runtimeManifest = window.__THUMBNAIL_MANIFEST__ || {};
    return (
      globalManifest[sourcePath] ||
      runtimeManifest[sourcePath] ||
      globalManifest[deviceUrl] ||
      runtimeManifest[deviceUrl] ||
      globalManifest[baseFileName] ||
      runtimeManifest[baseFileName] ||
      null
    );
  }

  _resetScreenGeometry() {
    this.screenEl.style.removeProperty('--screen-top');
    this.screenEl.style.removeProperty('--screen-left');
    this.screenEl.style.removeProperty('--screen-width');
    this.screenEl.style.removeProperty('--screen-height');
    this.screenEl.style.removeProperty('--ds-thumbnail-screen-radius');
    this.screenEl.style.removeProperty('-webkit-mask-image');
    this.screenEl.style.removeProperty('mask-image');
  }

  _applyBounds(bounds, maskUrl, screenRadius, edgeBleed = null) {
    if (!bounds) return;

    const bleedX = Number.isFinite(Number(edgeBleed?.x)) ? Number(edgeBleed.x) : 0;
    const bleedY = Number.isFinite(Number(edgeBleed?.y)) ? Number(edgeBleed.y) : 0;

    const safeTop = Math.max(0, bounds.top - bleedY);
    const safeLeft = Math.max(0, bounds.left - bleedX);
    const safeWidth = Math.max(0, Math.min(100 - safeLeft, bounds.width + (bleedX * 2)));
    const safeHeight = Math.max(0, Math.min(100 - safeTop, bounds.height + (bleedY * 2)));

    this.screenEl.style.setProperty('--screen-top', `${safeTop}%`);
    this.screenEl.style.setProperty('--screen-left', `${safeLeft}%`);
    this.screenEl.style.setProperty('--screen-width', `${safeWidth}%`);
    this.screenEl.style.setProperty('--screen-height', `${safeHeight}%`);

    if (screenRadius != null && screenRadius !== '') {
      this.screenEl.style.setProperty('--ds-thumbnail-screen-radius', String(screenRadius));
    } else {
      this.screenEl.style.removeProperty('--ds-thumbnail-screen-radius');
    }

    if (maskUrl) {
      this.screenEl.style.setProperty('-webkit-mask-image', `url("${maskUrl}")`);
      this.screenEl.style.setProperty('mask-image', `url("${maskUrl}")`);
    } else {
      this.screenEl.style.removeProperty('-webkit-mask-image');
      this.screenEl.style.removeProperty('mask-image');
    }
  }

  async _resolveRuntimeGeometry(deviceUrl, manifestEntry, renderSeq) {
    const runtimeGeometry = await runWhenIdle(() => getRuntimeGeometry(deviceUrl));
    if (renderSeq !== this._renderSeq) return;

    const bounds = manifestEntry?.bounds || runtimeGeometry?.bounds;
    const maskUrl = manifestEntry?.maskUrl || runtimeGeometry?.maskUrl;
    const screenRadius = parseManifestRadius(manifestEntry) ?? runtimeGeometry?.screenRadius;

    if (bounds) {
      this._applyBounds(bounds, maskUrl, screenRadius, manifestEntry?.edgeBleed || runtimeGeometry?.edgeBleed || null);
    }
  }

  render() {
    this._renderSeq += 1;
    const renderSeq = this._renderSeq;

    const screenImage = this.getAttribute('screen-image') || '';
    const isCustomOnly = this.hasAttribute('custom-only');
    const isDisabled = this.hasAttribute('disabled');
    const ariaLabel = this.getAttribute('aria-label') || 'Thumbnail Mockup';
    const maxHeight = this.getAttribute('max-height');

    this.screenEl.src = screenImage;

    if (maxHeight) {
      this.style.setProperty('--ds-thumbnail-max-height', maxHeight);
    } else {
      this.style.removeProperty('--ds-thumbnail-max-height');
    }

    if (isCustomOnly) {
      this._resetScreenGeometry();
      this.imgEl.removeAttribute('src');
    } else {
      const deviceAsset = this._resolveAssetPath();
      const deviceUrl = deviceAsset?.url || '';
      const sourcePath = deviceAsset?.sourcePath || '';
      const baseFileName = deviceAsset?.base || '';

      if (deviceUrl) {
        this.imgEl.src = deviceUrl;
        this.imgEl.alt = ariaLabel;

        const manifestEntry = this._getManifestEntry(deviceUrl, sourcePath, baseFileName);
        const manifestRadius = parseManifestRadius(manifestEntry);

        if (manifestEntry?.bounds) {
          this._applyBounds(manifestEntry.bounds, manifestEntry.maskUrl, manifestRadius, manifestEntry?.edgeBleed || null);
        } else {
          this._resetScreenGeometry();
        }

        const shouldAnalyzeRuntime = !manifestEntry?.bounds || (!manifestEntry?.maskUrl && manifestRadius == null);
        if (shouldAnalyzeRuntime) {
          this._resolveRuntimeGeometry(deviceUrl, manifestEntry, renderSeq);
        }
      } else {
        this._resetScreenGeometry();
      }
    }

    if (isDisabled) {
      this.container.classList.add('disabled');
      this.container.setAttribute('aria-disabled', 'true');
      this.container.removeAttribute('tabindex');
    } else {
      this.container.classList.remove('disabled');
      this.container.removeAttribute('aria-disabled');
      this.container.setAttribute('tabindex', '0');
    }

    if (this.hasAttribute('aria-label')) {
      this.container.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label');
    }
  }
}

if (!customElements.get('ds-thumbnail')) {
  customElements.define('ds-thumbnail', Thumbnail);
}