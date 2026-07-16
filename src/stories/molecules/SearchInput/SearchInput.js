import css from './search-input.css?inline';
import '../../molecules/Tooltip/Tooltip';
import '../../sub-atomic/Iconography/Iconography';

export class SearchInput extends HTMLElement {
  static get observedAttributes() {
    return ['expanded', 'placeholder'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <div class="slider-search-wrapper">
        <button class="btn-case-search" aria-label="Search cases" aria-expanded="false">
          <div class="icon-container icon-search">
            <ds-icon name="search" size="18"></ds-icon>
          </div>
          <div class="icon-container icon-close">
            <ds-icon name="close" size="18"></ds-icon>
          </div>
          <ds-tooltip text="Search" kbd="⌘ K" position="top" class="search-tooltip"></ds-tooltip>
        </button>
        <input type="text" class="case-search-input" autocomplete="off">
      </div>
    `;

    this.btnEl = this.shadowRoot.querySelector('.btn-case-search');
    this.inputEl = this.shadowRoot.querySelector('.case-search-input');
    this.tooltipEl = this.shadowRoot.querySelector('.search-tooltip');

    // Toggle Expansion
    this.btnEl.addEventListener('click', () => {
      const isExpanded = this.getAttribute('expanded') === 'true';
      this.setAttribute('expanded', (!isExpanded).toString());
      
      if (!isExpanded) {
        // Wait for transition to start before focusing
        setTimeout(() => this.inputEl.focus(), 50);
      } else {
        this.inputEl.value = '';
        this.dispatchEvent(new CustomEvent('ds-search-input', { detail: { value: '' }, bubbles: true }));
      }
    });

    // Tooltip Hover Logic
    this.btnEl.addEventListener('mouseenter', () => {
      if (this.getAttribute('expanded') !== 'true') {
        this.tooltipEl.setAttribute('visible', 'true');
      }
    });
    this.btnEl.addEventListener('mouseleave', () => {
      this.tooltipEl.setAttribute('visible', 'false');
    });

    // Input Event
    this.inputEl.addEventListener('input', (e) => {
      this.dispatchEvent(new CustomEvent('ds-search-input', {
        detail: { value: e.target.value },
        bubbles: true,
        composed: true
      }));
    });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const isExpanded = this.getAttribute('expanded') === 'true';
    const placeholder = this.getAttribute('placeholder') || 'Search cases...';

    this.btnEl.setAttribute('aria-expanded', isExpanded.toString());
    this.inputEl.setAttribute('placeholder', placeholder);
    
    // Hide tooltip immediately if expanded
    if (isExpanded) {
      this.tooltipEl.setAttribute('visible', 'false');
    }
  }
}

if (!customElements.get('ds-search-input')) {
  customElements.define('ds-search-input', SearchInput);
}