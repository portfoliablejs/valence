// src/stories/molecules/SliderDots/SliderDots.js

import css from './slider-dots.css?inline';
import '../../atoms/SliderDot/SliderDot.js';
import '../SearchInput/SearchInput.js';

export class SliderDots extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._dots = 0;
    this._activeIndex = 0;

    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <div class="slider-dots-container">
        <ds-search-input></ds-search-input>
        <div class="slider-dots-wrapper"></div>
      </div>
    `;

    this.dotsWrapper = this.shadowRoot.querySelector('.slider-dots-wrapper');
    this.searchInput = this.shadowRoot.querySelector('ds-search-input');

    this.searchInput.addEventListener('ds-search-input', (e) => {
      this.dispatchEvent(new CustomEvent('ds-search-input', { detail: e.detail, bubbles: true, composed: true }));
    });
    
    this.searchInput.addEventListener('click', (e) => {
        const isExpanded = this.searchInput.getAttribute('expanded') === 'true';
        this.setAttribute('search-expanded', isExpanded.toString());
    });
  }

  static get observedAttributes() { return ['dots', 'active-index']; }

  attributeChangedCallback() { this.render(); }

  set dots(value) {
    const num = parseInt(value, 10);
    this._dots = isNaN(num) ? 0 : num;
    this.render();
  }
  get dots() { return this._dots; }

  set activeIndex(value) {
    const num = parseInt(value, 10);
    this._activeIndex = isNaN(num) ? 0 : num;
    this.render();
  }
  get activeIndex() { return this._activeIndex; }

  render() {
    this.dots = this.getAttribute('dots') || 0;
    this.activeIndex = this.getAttribute('active-index') || 0;

    this.dotsWrapper.innerHTML = '';
    for (let i = 0; i < this.dots; i++) {
      const dot = document.createElement('ds-slider-dot');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      if (i === this.activeIndex) {
        dot.setAttribute('active', 'true');
        dot.setAttribute('aria-current', 'true');
      }
      dot.addEventListener('ds-dot-click', () => {
        this.dispatchEvent(new CustomEvent('ds-dot-select', { detail: { index: i }, bubbles: true, composed: true }));
      });
      this.dotsWrapper.appendChild(dot);
    }
  }
}

if (!customElements.get('ds-slider-dots')) {
  customElements.define('ds-slider-dots', SliderDots);
}