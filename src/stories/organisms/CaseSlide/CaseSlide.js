// src/stories/organisms/CaseSlide/CaseSlide.js
import css from './case-slide.css?inline';
// No new component imports needed for this update

export class CaseSlide extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <div class="case-layout">
        <div class="case-media">
          <img id="thumb-img" src="" alt="">
        </div>
        <div class="case-info-container">
          <div class="case-info-scroll">
            <div class="case-info-content">
              <h3 id="year-label"></h3>
              <h2 id="title-label"></h2>
              <slot name="actions"></slot>
              <slot name="ai-summary"></slot>
              <slot name="audio-player"></slot>
              <div class="description-body">
                <slot name="description"></slot>
              </div>
            </div>
          </div>
        </div>
        <div class="case-toc" id="toc-container"></div>
      </div>
    `;
    this.scrollContainer = this.shadowRoot.querySelector('.case-info-scroll');
    this.scrollContainer.addEventListener('scroll', () => {
      this.toggleAttribute('scrolled', this.scrollContainer.scrollTop > 50);
      this._updateActiveTOC();
    });
  }

  static get observedAttributes() { return ['title', 'year', 'thumb-src', 'device']; }

  attributeChangedCallback() { this.render(); }
  connectedCallback() {
    this.render();
    // Use a timeout to ensure slotted content is available
    setTimeout(() => this._buildTOC(), 50);
  }

  _buildTOC() {
    const tocContainer = this.shadowRoot.getElementById('toc-container');
    tocContainer.innerHTML = ''; // Clear existing
    
    const descriptionSlot = this.shadowRoot.querySelector('slot[name="description"]');
    const headings = descriptionSlot.assignedElements({ flatten: true })
      .flatMap(el => Array.from(el.querySelectorAll('h3')));

    if (headings.length === 0) return;

    headings.forEach((h3, i) => {
      const tocItem = document.createElement('div');
      tocItem.className = 'toc-item';
      tocItem.innerHTML = `<div class="toc-text-wrapper"><div class="toc-text">${h3.innerText}</div></div><span class="toc-dash"></span>`;
      tocItem.addEventListener('click', () => {
        h3.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      tocContainer.appendChild(tocItem);
    });
    this._updateActiveTOC();
  }

  _updateActiveTOC() {
    const tocItems = this.shadowRoot.querySelectorAll('.toc-item');
    if (tocItems.length === 0) return;

    const descriptionSlot = this.shadowRoot.querySelector('slot[name="description"]');
    const headings = descriptionSlot.assignedElements({ flatten: true })
      .flatMap(el => Array.from(el.querySelectorAll('h3')));

    let currentActive = -1;
    headings.forEach((h3, i) => {
      const rect = h3.getBoundingClientRect();
      // Highlight if the heading is near the top of the viewport
      if (rect.top < window.innerHeight / 2) {
        currentActive = i;
      }
    });

    tocItems.forEach((item, i) => {
      item.classList.toggle('active', i === currentActive);
    });
  }

  render() {
    this.shadowRoot.querySelector('#title-label').textContent = this.getAttribute('title');
    this.shadowRoot.querySelector('#year-label').textContent = this.getAttribute('year');
    this.shadowRoot.querySelector('#thumb-img').src = this.getAttribute('thumb-src');
    this.shadowRoot.querySelector('#thumb-img').alt = `Thumbnail for ${this.getAttribute('title')}`;
    const device = this.getAttribute('device') || 'iphone-17';
    const deviceAspectRatioMap = {
      'iphone-17': '1 / 2.15', 'iphone-12': '1 / 2.1', 'apple-watch': '1 / 1.6'
    };
    this.shadowRoot.querySelector('.case-media').style.setProperty('--device-aspect-ratio', deviceAspectRatioMap[device] || '1 / 2.03');
  }
}
if (!customElements.get('ds-case-slide')) customElements.define('ds-case-slide', CaseSlide);