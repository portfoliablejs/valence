// src/stories/molecules/GalleryItem/GalleryItem.js
import css from './gallery-item.css?inline';
import '../../atoms/Pill/Pill.js';
import '../../sub-atomic/Iconography/Iconography.js';

export class GalleryItem extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'short-desc', 'read-time', 'thumb-src', 'aspect-ratio', 'is-protected', 'is-unlocked', 'has-video', 'has-repo', 'has-live'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <div class="case-thumb-wrapper" tabindex="0" role="button">
        <img class="case-thumb-img" alt="">
      </div>
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

  render() {
    const title = this.getAttribute('title') || 'Case Title';
    const shortDesc = this.getAttribute('short-desc') || '';
    const readTime = this.getAttribute('read-time') || '';
    const thumbSrc = this.getAttribute('thumb-src') || '';
    const aspectRatio = this.getAttribute('aspect-ratio');
    
    // *** THE FIX IS HERE: Use hasAttribute() for clean boolean checks ***
    const isProtected = this.hasAttribute('is-protected');
    const isUnlocked = this.hasAttribute('is-unlocked');
    const hasVideo = this.hasAttribute('has-video');
    const hasRepo = this.hasAttribute('has-repo');
    const hasLive = this.hasAttribute('has-live');

    const isLocked = isProtected && !isUnlocked;

    // Frame Logic
    if (aspectRatio) {
        this.thumbWrapper.style.aspectRatio = aspectRatio.replace(':', ' / ');
    } else {
        this.thumbWrapper.style.aspectRatio = '9 / 19.5'; // Default portrait
    }

    // Image
    const imgEl = this.shadowRoot.querySelector('.case-thumb-img');
    imgEl.src = thumbSrc;
    imgEl.alt = `Thumbnail for ${title}`;
    imgEl.classList.toggle('locked-thumb-img', isLocked);

    // Text
    this.shadowRoot.querySelector('.title-text').textContent = isLocked ? 'Protected Case' : title;
    
    const descEl = this.shadowRoot.querySelector('.gallery-item-shortdesc');
    descEl.textContent = isLocked ? 'Protected content placeholder.' : shortDesc;
    descEl.classList.toggle('locked-shortdesc', isLocked);

    // Read Time
    const readTimeEl = this.shadowRoot.querySelector('.gallery-read-time');
    this.shadowRoot.querySelector('.read-time-text').textContent = readTime;
    readTimeEl.style.display = (isLocked || !readTime) ? 'none' : 'flex';

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
      if (hasVideo) pillsContainer.innerHTML += `<ds-pill label="${t('btn_pitch')}"></ds-pill>`;
      if (hasRepo) pillsContainer.innerHTML += `<ds-pill label="${t('btn_repo')}"></ds-pill>`;
      if (hasLive) pillsContainer.innerHTML += `<ds-pill label="${t('btn_demo')}"></ds-pill>`;
    }
  }
}

if (!customElements.get('ds-gallery-item')) {
  customElements.define('ds-gallery-item', GalleryItem);
}