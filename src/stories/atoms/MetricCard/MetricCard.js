import css from './metric-card.css?inline';
import '../../sub-atomic/Iconography/Iconography.js';

export class MetricCard extends HTMLElement {
  static get observedAttributes() {
    return [
      'value',
      'label',
      'prefix',
      'suffix',
      'variant',
      'treatment',
      'size',
      'trend',
      'icon',
      'aria-label',
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // Compressed template string prevents ghost text nodes inside Shadow DOM layouts
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="summary-metric-card" role="group" aria-roledescription="metric"><div class="value-container"><ds-icon class="trend-icon" style="display:none;"></ds-icon><span class="metric-prefix"></span><span class="metric-value"></span><span class="metric-suffix"></span></div><div class="label-container"><ds-icon class="label-icon" style="display:none;"></ds-icon><span class="metric-label"></span></div></div>`;
  }

  connectedCallback() {
    this.cardEl = this.shadowRoot.querySelector('.summary-metric-card');
    this.valueEl = this.shadowRoot.querySelector('.metric-value');
    this.labelEl = this.shadowRoot.querySelector('.metric-label');
    this.prefixEl = this.shadowRoot.querySelector('.metric-prefix');
    this.suffixEl = this.shadowRoot.querySelector('.metric-suffix');
    this.trendIconEl = this.shadowRoot.querySelector('.trend-icon');
    this.labelIconEl = this.shadowRoot.querySelector('.label-icon');
    
    this.render();
    this._observeRootAccessibility();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue && this.cardEl) {
      this.render();
    }
  }

  _observeRootAccessibility() {
    const root = this.ownerDocument.documentElement;
    const sync = () => {
      this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
      this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
      this.toggleAttribute('a11y-large-text', root.classList.contains('a11y-large-text'));
      this.toggleAttribute('a11y-dyslexia', root.classList.contains('a11y-dyslexia'));
      this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
      this.toggleAttribute('a11y-focus-mode', root.classList.contains('a11y-focus-mode'));
      this.toggleAttribute('a11y-forced-colors', root.classList.contains('a11y-forced-colors'));
    };

    sync();
    this._themeObserver = new MutationObserver(sync);
    this._themeObserver.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  render() {
    if (!this.cardEl) return;

    const val = this.getAttribute('value') || '--';
    const lbl = this.getAttribute('label') || 'Metric';
    const prefix = this.getAttribute('prefix') || '';
    const suffix = this.getAttribute('suffix') || '';
    const trend = this.getAttribute('trend');
    const icon = this.getAttribute('icon');

    // Values & Units
    this.valueEl.textContent = val;
    this.labelEl.textContent = lbl;

    if (prefix) {
      this.prefixEl.textContent = prefix;
      this.prefixEl.style.display = 'inline';
    } else {
      this.prefixEl.textContent = '';
      this.prefixEl.style.display = 'none';
    }

    if (suffix) {
      this.suffixEl.textContent = suffix;
      this.suffixEl.style.display = 'inline';
    } else {
      this.suffixEl.textContent = '';
      this.suffixEl.style.display = 'none';
    }

    // Trend Icon Rendering
    if (trend) {
      this.trendIconEl.style.display = 'inline-flex';
      if (trend === 'up') {
        this.trendIconEl.setAttribute('name', 'arrow-right');
        this.trendIconEl.style.transform = 'rotate(-45deg)';
      } else if (trend === 'down') {
        this.trendIconEl.setAttribute('name', 'arrow-right');
        this.trendIconEl.style.transform = 'rotate(45deg)';
      } else {
        this.trendIconEl.setAttribute('name', 'arrow-right');
        this.trendIconEl.style.transform = 'rotate(0deg)';
      }
    } else {
      this.trendIconEl.style.display = 'none';
    }

    // Optional Label Icon Rendering
    if (icon) {
      this.labelIconEl.setAttribute('name', icon);
      this.labelIconEl.setAttribute('size', '14');
      this.labelIconEl.style.display = 'inline-flex';
    } else {
      this.labelIconEl.style.display = 'none';
    }

    // ARIA Delegation & Host Scrubbing Pattern
    const ariaLabel = this.getAttribute('aria-label');
    if (ariaLabel) {
      this.cardEl.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label');
    } else {
      const fullText = `${prefix}${val}${suffix}${lbl}`;
      this.cardEl.setAttribute('aria-label', fullText.trim());
    }
  }
}

if (!customElements.get('ds-metric-card')) {
  customElements.define('ds-metric-card', MetricCard);
}