// src/stories/molecules/GalleryItem/GalleryItem.js
import css from './gallery-item.css?inline';
import '../../atoms/Pill/Pill.js';
import '../../atoms/Thumbnail/Thumbnail.js';
import '../../sub-atomic/Iconography/Iconography.js';

export class GalleryItem extends HTMLElement {
  static get observedAttributes() {
    return [
      'title',
      'short-desc',
      'read-time',
      'thumb-src',
      'aspect-ratio',
      'thumb-category',
      'thumb-brand',
      'thumb-model',
      'thumb-color',
      'thumb-device-src',
      'thumb-custom-only',
      'show-title',
      'show-short-desc',
      'show-read-time',
      'show-thumbnail',
      'is-protected',
      'is-unlocked',
      'has-video',
      'has-repo',
      'has-live',
    ];
  }

  getCategoryHeight(category) {
    const map = {
      wearable: '26vh',
      mobile: '40vh',
      tablet: '46vh',
      desktop: '32vh',
      television: '30vh',
    };

    const baseHeight = map[category] || '40vh';
    return `calc(${baseHeight} * 1.25)`;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <ds-thumbnail class="case-thumb-wrapper" tabindex="0" role="button"></ds-thumbnail>
      <div class="gallery-item-meta">
        <div class="gallery-item-text">
          <div class="gallery-item-title-wrapper">
            <h4 class="gallery-item-title">
              <ds-icon class="lock-icon" size="14" style="display: none;"></ds-icon>
              <span class="title-text"></span>
            </h4>
            <span class="gallery-read-time">
              <ds-icon name="play" size="10"></ds-icon>
              <span class="read-time-text"></span>
            </span>
          </div>
          <p class="gallery-item-shortdesc"></p>
        </div>
        <div class="gallery-item-pills"></div>
      </div>
    `;

    this.thumbWrapper = this.shadowRoot.querySelector('.case-thumb-wrapper');
    
    this.thumbWrapper.addEventListener('click', () => this.dispatchSelect());
    this.thumbWrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.dispatchSelect();
      }
    });
  }

  dispatchSelect() {
    this.dispatchEvent(new CustomEvent('ds-case-select', { bubbles: true, composed: true }));
  }

  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }

  parseToggleAttr(name, defaultValue = true) {
    const raw = this.getAttribute(name);
    if (raw === null) return defaultValue;

    const normalized = String(raw).trim().toLowerCase();
    if (['false', '0', 'off', 'no'].includes(normalized)) return false;
    if (['true', '1', 'on', 'yes', ''].includes(normalized)) return true;

    return defaultValue;
  }

  render() {
    const title = this.getAttribute('title') || 'Case Title';
    const shortDesc = this.getAttribute('short-desc') || '';
    const readTime = this.getAttribute('read-time') || '';
    const thumbSrc = this.getAttribute('thumb-src') || '';
    const thumbCategory = this.getAttribute('thumb-category') || 'mobile';
    const thumbBrand = this.getAttribute('thumb-brand') || 'apple';
    const thumbModel = this.getAttribute('thumb-model') || 'Apple iPhone 12';
    const thumbColor = this.getAttribute('thumb-color') || 'Black';
    const thumbDeviceSrc = this.getAttribute('thumb-device-src') || '';
    const thumbCustomOnly = this.hasAttribute('thumb-custom-only');
    const aspectRatio = this.getAttribute('aspect-ratio');
    const showTitle = this.parseToggleAttr('show-title', true);
    const showShortDesc = this.parseToggleAttr('show-short-desc', true);
    const showReadTime = this.parseToggleAttr('show-read-time', true);
    const showThumbnail = this.parseToggleAttr('show-thumbnail', true);

    const isProtected = this.hasAttribute('is-protected');
    const isUnlocked = this.hasAttribute('is-unlocked');
    const hasVideo = this.hasAttribute('has-video');
    const hasRepo = this.hasAttribute('has-repo');
    const hasLive = this.hasAttribute('has-live');

    const isLocked = isProtected && !isUnlocked;

    // Frame Logic
    if (thumbCustomOnly && aspectRatio) {
      this.thumbWrapper.style.aspectRatio = aspectRatio.replace(':', ' / ');
    } else {
      this.thumbWrapper.style.removeProperty('aspect-ratio');
    }

    this.thumbWrapper.style.setProperty('--device-h-gallery', this.getCategoryHeight(thumbCategory));

    // Thumbnail atom
    this.thumbWrapper.setAttribute('screen-image', thumbSrc);
    this.thumbWrapper.setAttribute('category', thumbCategory);
    this.thumbWrapper.setAttribute('brand', thumbBrand);
    this.thumbWrapper.setAttribute('model', thumbModel);
    this.thumbWrapper.setAttribute('color', thumbColor);
    if (thumbDeviceSrc) {
      this.thumbWrapper.setAttribute('device-src', thumbDeviceSrc);
    } else {
      this.thumbWrapper.removeAttribute('device-src');
    }
    if (thumbCustomOnly) {
      this.thumbWrapper.setAttribute('custom-only', '');
    } else {
      this.thumbWrapper.removeAttribute('custom-only');
    }
    this.thumbWrapper.setAttribute('max-height', 'var(--device-h-gallery, 55vh)');
    this.thumbWrapper.setAttribute('aria-label', `Thumbnail for ${title}`);
    this.thumbWrapper.classList.toggle('locked-thumb', isLocked);
    this.thumbWrapper.style.display = showThumbnail ? 'inline-flex' : 'none';
    if (showThumbnail) {
      this.thumbWrapper.setAttribute('tabindex', '0');
      this.thumbWrapper.setAttribute('role', 'button');
      this.thumbWrapper.removeAttribute('aria-hidden');
    } else {
      this.thumbWrapper.removeAttribute('tabindex');
      this.thumbWrapper.removeAttribute('role');
      this.thumbWrapper.setAttribute('aria-hidden', 'true');
    }

    // Text
    const titleEl = this.shadowRoot.querySelector('.gallery-item-title');
    this.shadowRoot.querySelector('.title-text').textContent = isLocked ? 'Protected Case' : title;
    titleEl.style.display = showTitle ? 'flex' : 'none';
    
    const descEl = this.shadowRoot.querySelector('.gallery-item-shortdesc');
    descEl.textContent = isLocked ? 'Protected content placeholder.' : shortDesc;
    descEl.classList.toggle('locked-shortdesc', isLocked);
    descEl.style.display = showShortDesc ? 'block' : 'none';

    // Read Time
    const readTimeEl = this.shadowRoot.querySelector('.gallery-read-time');
    this.shadowRoot.querySelector('.read-time-text').textContent = readTime;
    readTimeEl.style.display = (!showReadTime || isLocked || !readTime) ? 'none' : 'flex';

    // Lock Icon
    const lockIcon = this.shadowRoot.querySelector('.lock-icon');
    if (isProtected) {
      lockIcon.setAttribute('name', isUnlocked ? 'lock-open' : 'lock-closed');
      lockIcon.style.display = 'inline-flex';
    } else {
      lockIcon.style.display = 'none';
    }

    // Pills
    const pillsContainer = this.shadowRoot.querySelector('.gallery-item-pills');
    pillsContainer.innerHTML = '';
    if (!isLocked) {
      const t = typeof window.t === 'function' ? window.t : (k) => k;
      if (hasVideo) pillsContainer.innerHTML += `<ds-pill label="${t('pitch')}"></ds-pill>`;
      if (hasRepo) pillsContainer.innerHTML += `<ds-pill label="${t('repo')}"></ds-pill>`;
      if (hasLive) pillsContainer.innerHTML += `<ds-pill label="${t('demo')}"></ds-pill>`;
    }
  }
}

if (!customElements.get('ds-gallery-item')) {
  customElements.define('ds-gallery-item', GalleryItem);
}