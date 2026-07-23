import css from './summary.css?inline';
import '../../sub-atomic/Iconography/Iconography.js';
import '../../atoms/MetricCard/MetricCard.js';

export class Summary extends HTMLElement {
  static get observedAttributes() {
    return ['text', 'active', 'label-header', 'show-metrics', 'aria-label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._hasTyped = false;

    // Compressed Shadow DOM HTML string (AI icon removed)
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="summary-block" role="region" aria-label="Summary"><div class="summary-header"><span class="header-label"></span></div><p class="summary-text" aria-live="polite"></p><div class="summary-metrics-grid"><slot></slot></div></div>`;

    this.blockEl = this.shadowRoot.querySelector('.summary-block');
    this.headerLabelEl = this.shadowRoot.querySelector('.header-label');
    this.textEl = this.shadowRoot.querySelector('.summary-text');
    this.gridEl = this.shadowRoot.querySelector('.summary-metrics-grid');
  }

  get showMetrics() {
    return this.getAttribute('show-metrics') !== 'false';
  }

  set showMetrics(val) {
    this.setAttribute('show-metrics', val ? 'true' : 'false');
  }

  connectedCallback() {
    this._observeRootAccessibility();
    this.render();
    this.checkActiveState();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
    if (this._typeTimeout) clearTimeout(this._typeTimeout);
    if (this._thinkInterval) clearInterval(this._thinkInterval);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (name === 'active' && newValue === 'true') {
      this.checkActiveState();
    } else {
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
    this._themeObserver.observe(root, { attributes: true, attributeFilter: ['class'] });
  }

  checkActiveState() {
    if (this.getAttribute('active') === 'true' && !this._hasTyped) {
      this._hasTyped = true;
      this.startTypingEffect();
    }
  }

  startTypingEffect() {
    const fullText = this.getAttribute('text') || '';
    this.textEl.textContent = '';
    
    const dots = document.createElement('span');
    dots.className = 'ai-thinking-dots';
    this.textEl.appendChild(dots);
    
    let dotCount = 0;
    this._thinkInterval = setInterval(() => {
      dotCount = (dotCount + 1) % 4;
      dots.textContent = '.'.repeat(dotCount);
    }, 300);

    this._typeTimeout = setTimeout(() => {
      clearInterval(this._thinkInterval);
      dots.remove();
      this.textEl.classList.add('typing');
      
      let charIdx = 0;
      const typeChar = () => {
        if (charIdx < fullText.length) {
          this.textEl.textContent += fullText.charAt(charIdx);
          charIdx++;
          this._typeTimeout = setTimeout(typeChar, 15); 
        } else {
          this.textEl.classList.remove('typing');
          
          if (this.showMetrics) {
            this.gridEl.classList.add('show-grid');
            const slottedMetrics = this.shadowRoot.querySelector('slot').assignedElements();
            slottedMetrics.forEach((card, i) => {
              setTimeout(() => card.classList.add('show'), 50 + (i * 150));
            });
          }

          this.dispatchEvent(new CustomEvent('ds-summary-complete', {
            detail: { text: fullText },
            bubbles: true,
            composed: true
          }));
        }
      };
      typeChar();
    }, 1200);
  }

  render() {
    const labelHeader = this.getAttribute('label-header') || 'Summary';
    const text = this.getAttribute('text') || '';
    const isActive = this.getAttribute('active') === 'true';
    const showMetrics = this.showMetrics;

    if (this.headerLabelEl) {
      this.headerLabelEl.textContent = labelHeader;
    }

    // ARIA Delegation & Host Scrubbing
    const ariaLabel = this.getAttribute('aria-label');
    if (ariaLabel) {
      if (this.blockEl) this.blockEl.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label');
    } else if (this.blockEl) {
      this.blockEl.setAttribute('aria-label', labelHeader);
    }

    // Metrics Visibility Control
    if (this.gridEl) {
      if (showMetrics) {
        this.gridEl.style.display = 'grid';
        if (!isActive || this._hasTyped) {
          this.gridEl.classList.add('show-grid');
          const slottedMetrics = this.shadowRoot.querySelector('slot').assignedElements();
          slottedMetrics.forEach(card => card.classList.add('show'));
        }
      } else {
        this.gridEl.style.display = 'none';
        this.gridEl.classList.remove('show-grid');
      }
    }

    // Static text rendering when typing animation is inactive or completed
    if (!isActive || this._hasTyped) {
      if (this.textEl && !this.textEl.classList.contains('typing')) {
        this.textEl.textContent = text;
      }
    }
  }
}

if (!customElements.get('ds-summary')) {
  customElements.define('ds-summary', Summary);
}