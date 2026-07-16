import css from './thumbnail.css?inline';

export function buildDeviceCatalog() {
  let globModules = {};

  try {
    globModules = import.meta.glob('/src/stories/assets/mockups/**/*.avif', {
      eager: true,
      query: '?url',
      import: 'default',
    });
  } catch (err) {
    console.error('[ds-thumbnail] Failed to glob mockup assets:', err);
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
    };
  }

  return catalog;
}

export const DEVICE_CATALOG = buildDeviceCatalog();

/* ==========================================================================
   STATIC MANIFEST REGISTRY (PRODUCTION / OPTION A)
   ========================================================================== */
let globalManifest = {};

/**
 * Register pre-calculated bounds & mask URLs for static production builds.
 * @param {Record<string, { bounds: { top: number, left: number, width: number, height: number }, url?: string }>} manifest 
 */
export function registerDeviceManifest(manifest) {
  globalManifest = { ...globalManifest, ...manifest };
}

/* ==========================================================================
   AUTO-MASK GENERATOR (DEV / EDITOR MODE)
   ========================================================================== */
const maskCache = new Map();

export function generateDeviceMask(imgUrl) {
  if (!imgUrl) return Promise.resolve(null);
  
  // 1. Check static pre-generated manifest (Production Hit)
  if (globalManifest[imgUrl] || (window.__THUMBNAIL_MANIFEST__ && window.__THUMBNAIL_MANIFEST__[imgUrl])) {
    return Promise.resolve(globalManifest[imgUrl] || window.__THUMBNAIL_MANIFEST__[imgUrl]);
  }

  // 2. Check dynamic memory cache (Dev Hit)
  if (maskCache.has(imgUrl)) return Promise.resolve(maskCache.get(imgUrl));

  // 3. Fallback to runtime canvas flood-fill
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = async () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      if (!w || !h) return resolve(null);

      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      const totalPixels = w * h;
      const visited = new Uint8Array(totalPixels);
      const queue = [];

      // Seed image boundary edges
      for (let x = 0; x < w; x++) {
        queue.push(x);
        queue.push((h - 1) * w + x);
      }
      for (let y = 0; y < h; y++) {
        queue.push(y * w);
        queue.push(y * w + (w - 1));
      }

      for (let i = 0; i < queue.length; i++) {
        visited[queue[i]] = 1;
      }

      // Flood fill outer transparent background
      let head = 0;
      while (head < queue.length) {
        const idx = queue[head++];
        const alpha = data[idx * 4 + 3];

        if (alpha < 180) {
          const x = idx % w;
          const y = Math.floor(idx / w);

          if (x > 0 && !visited[idx - 1]) { visited[idx - 1] = 1; queue.push(idx - 1); }
          if (x < w - 1 && !visited[idx + 1]) { visited[idx + 1] = 1; queue.push(idx + 1); }
          if (y > 0 && !visited[idx - w]) { visited[idx - w] = 1; queue.push(idx - w); }
          if (y < h - 1 && !visited[idx + w]) { visited[idx + w] = 1; queue.push(idx + w); }
        }
      }

      // Identify initial inner screen cutout (increased alpha threshold to 245 for anti-aliased glass)
      const innerCutout = new Uint8Array(totalPixels);
      for (let i = 0; i < totalPixels; i++) {
        const alpha = data[i * 4 + 3];
        const isOuterBg = visited[i] === 1;

        if (!isOuterBg && alpha < 245) {
          innerCutout[i] = 1;
        }
      }

      // Dilate inner cutout by 2px in ALL directions (including straight edges)
      const radius = 2;
      const dilatedMask = new Uint8Array(totalPixels);

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const idx = y * w + x;
          if (innerCutout[idx] === 1) {
            for (let dy = -radius; dy <= radius; dy++) {
              for (let dx = -radius; dx <= radius; dx++) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                  const nIdx = ny * w + nx;
                  // Expand under the bezel, but never into the outer background
                  if (visited[nIdx] !== 1) {
                    dilatedMask[nIdx] = 1;
                  }
                }
              }
            }
          }
        }
      }

      // NOW calculate bounds on the dilated mask so straight edges aren't clipped off
      let minX = w, maxX = 0, minY = h, maxY = 0;
      let hasCutout = false;

      for (let i = 0; i < totalPixels; i++) {
        if (dilatedMask[i] === 1) {
          hasCutout = true;
          const x = i % w;
          const y = Math.floor(i / w);
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }

      if (!hasCutout) return resolve(null);

      // Crop canvas to the fully dilated screen bounds
      const cropW = maxX - minX + 1;
      const cropH = maxY - minY + 1;

      const maskCanvas = document.createElement('canvas');
      maskCanvas.width = cropW;
      maskCanvas.height = cropH;
      const maskCtx = maskCanvas.getContext('2d');
      const maskImgData = maskCtx.createImageData(cropW, cropH);
      const maskPixels = maskImgData.data;

      for (let y = 0; y < cropH; y++) {
        for (let x = 0; x < cropW; x++) {
          const srcIdx = (minY + y) * w + (minX + x);
          const destIdx = (y * cropW + x) * 4;

          if (dilatedMask[srcIdx] === 1) {
            maskPixels[destIdx + 0] = 255;
            maskPixels[destIdx + 1] = 255;
            maskPixels[destIdx + 2] = 255;
            maskPixels[destIdx + 3] = 255;
          }
        }
      }

      maskCtx.putImageData(maskImgData, 0, 0);

      // FAST BLOB CONVERSION (Low memory footprint in Editor Mode)
      const maskBlobUrl = await new Promise((res) => {
        maskCanvas.toBlob((blob) => res(URL.createObjectURL(blob)), 'image/png');
      });

      const result = {
        url: maskBlobUrl,
        bounds: {
          top: (minY / h) * 100,
          left: (minX / w) * 100,
          width: (cropW / w) * 100,
          height: (cropH / h) * 100,
        },
      };

      maskCache.set(imgUrl, result);
      resolve(result);
    };

    img.onerror = () => resolve(null);
    img.src = imgUrl;
  });
}
/* ==========================================================================
   WEB COMPONENT
   ========================================================================== */
export class Thumbnail extends HTMLElement {
  static get observedAttributes() {
    return [
      'category',
      'brand',
      'model',
      'color',
      'screen-image',
      'custom-only',
      'disabled',
      'aria-label',
      'max-height'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `<style>${css}</style><div class="frame-container" tabindex="0"><img class="screen-cover" alt="Screen Cover Content" /><img class="device-image" alt="Device Frame Mockup" /></div>`;

    this.container = this.shadowRoot.querySelector('.frame-container');
    this.imgEl = this.shadowRoot.querySelector('.device-image');
    this.screenEl = this.shadowRoot.querySelector('.screen-cover');
  }

  connectedCallback() {
    this._observeRootAccessibility();
    this.render();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
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
    const catKeys = Object.keys(DEVICE_CATALOG);
    if (catKeys.length === 0) return '';

    const cat = this.getAttribute('category') || (catKeys.includes('mobile') ? 'mobile' : catKeys[0]);
    const catData = DEVICE_CATALOG[cat] || Object.values(DEVICE_CATALOG)[0];
    if (!catData) return '';

    const brandKeys = Object.keys(catData);
    const brand = this.getAttribute('brand') || brandKeys[0];
    const brandData = catData[brand] || Object.values(catData)[0];
    if (!brandData) return '';

    const modelKeys = Object.keys(brandData);
    const modelKey = this.getAttribute('model') || modelKeys[0];
    const modelData = brandData[modelKey] || Object.values(brandData)[0];
    if (!modelData) return '';

    const colorKeys = Object.keys(modelData.colors || {});
    const colorKey = this.getAttribute('color') || colorKeys[0];
    const colorData = modelData.colors ? (modelData.colors[colorKey] || Object.values(modelData.colors)[0]) : null;

    if (!colorData) return '';
    return colorData.url || '';
  }

  async _updateMask(deviceUrl) {
    const isCustomOnly = this.hasAttribute('custom-only');

    if (isCustomOnly || !deviceUrl) {
      this.screenEl.style.removeProperty('--screen-top');
      this.screenEl.style.removeProperty('--screen-left');
      this.screenEl.style.removeProperty('--screen-width');
      this.screenEl.style.removeProperty('--screen-height');
      this.screenEl.style.removeProperty('-webkit-mask-image');
      this.screenEl.style.removeProperty('mask-image');
      return;
    }

    const maskData = await generateDeviceMask(deviceUrl);
    if (maskData) {
      this.screenEl.style.setProperty('--screen-top', `${maskData.bounds.top}%`);
      this.screenEl.style.setProperty('--screen-left', `${maskData.bounds.left}%`);
      this.screenEl.style.setProperty('--screen-width', `${maskData.bounds.width}%`);
      this.screenEl.style.setProperty('--screen-height', `${maskData.bounds.height}%`);

      if (maskData.url) {
        this.screenEl.style.setProperty('-webkit-mask-image', `url("${maskData.url}")`);
        this.screenEl.style.setProperty('mask-image', `url("${maskData.url}")`);
      } else {
        this.screenEl.style.removeProperty('-webkit-mask-image');
        this.screenEl.style.removeProperty('mask-image');
      }
    }
  }

  render() {
    const screenImage = this.getAttribute('screen-image') || '';
    const isCustomOnly = this.hasAttribute('custom-only');
    const isDisabled = this.hasAttribute('disabled');
    const ariaLabel = this.getAttribute('aria-label') || 'Thumbnail Mockup';
    const maxHeight = this.getAttribute('max-height');

    this.screenEl.src = screenImage;

    if (maxHeight) {
      this.style.setProperty('--custom-max-height', maxHeight);
    } else {
      this.style.removeProperty('--custom-max-height');
    }

    if (!isCustomOnly) {
      const deviceUrl = this._resolveAssetPath();
      this.imgEl.src = deviceUrl;
      this.imgEl.alt = ariaLabel;
      this._updateMask(deviceUrl);
    } else {
      this._updateMask(null);
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