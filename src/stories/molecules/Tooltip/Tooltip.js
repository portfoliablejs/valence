import css from './tooltip.css?inline';
import '../../atoms/Kbd/Kbd';

export class Tooltip extends HTMLElement {
  static get observedAttributes() {
    return ['text', 'position', 'visible', 'show-kbd', 'kbd-label', 'kbd-show-plus', 'kbd-key'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // Compressed template string prevents ghost text nodes inside Shadow DOM layouts
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="action-tooltip" role="tooltip" aria-hidden="true"><span class="tooltip-text"></span><ds-kbd variant="inverted" class="tooltip-kbd" style="display: none;"></ds-kbd></div>`;
  }

  connectedCallback() {
    this._observeRootAccessibility();
    this._attachParentEventListeners();
    this.render();
  }

  disconnectedCallback() {
    if (this._themeObserver) this._themeObserver.disconnect();
    if (this._parentObserver) this._parentObserver.disconnect();
    this._detachParentEventListeners();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  _attachParentEventListeners() {
    this._targetElement = this.previousElementSibling || this.parentElement || (this.getRootNode() && this.getRootNode().host);

    if (this._targetElement) {
      // Ensure target element is programmatically focusable for testing focus triggers
      if (!this._targetElement.hasAttribute('tabindex')) {
        this._targetElement.setAttribute('tabindex', '0');
      }

      this._showTooltip = () => {
        const isDisabled = this._targetElement.hasAttribute('disabled') || this._targetElement.disabled === true;
        if (!isDisabled) {
          this.setAttribute('visible', '');
        }
      };

      this._hideTooltip = () => this.removeAttribute('visible');

      this._targetElement.addEventListener('mouseenter', this._showTooltip);
      this._targetElement.addEventListener('mouseleave', this._hideTooltip);
      this._targetElement.addEventListener('focusin', this._showTooltip);
      this._targetElement.addEventListener('focusout', this._hideTooltip);

      this._parentObserver = new MutationObserver(() => {
        const isDisabled = this._targetElement.hasAttribute('disabled') || this._targetElement.disabled === true;
        if (isDisabled) {
          this.removeAttribute('visible');
        }
      });

      this._parentObserver.observe(this._targetElement, {
        attributes: true,
        attributeFilter: ['disabled']
      });
    }
  }

  _detachParentEventListeners() {
    if (this._targetElement) {
      this._targetElement.removeEventListener('mouseenter', this._showTooltip);
      this._targetElement.removeEventListener('mouseleave', this._hideTooltip);
      this._targetElement.removeEventListener('focusin', this._showTooltip);
      this._targetElement.removeEventListener('focusout', this._hideTooltip);
    }
  }

  render() {
    const textEl = this.shadowRoot.querySelector('.tooltip-text');
    const kbdEl = this.shadowRoot.querySelector('.tooltip-kbd');
    const tooltipEl = this.shadowRoot.querySelector('.action-tooltip');

    textEl.textContent = this.getAttribute('text') || '';
    
    const visible = this.hasAttribute('visible');
    const showKbd = this.hasAttribute('show-kbd');

    if (showKbd) {
      kbdEl.style.display = 'inline-flex';
      kbdEl.textContent = this.getAttribute('kbd-label') || '';
      
      if (this.hasAttribute('kbd-show-plus')) {
        kbdEl.setAttribute('show-plus', '');
      } else {
        kbdEl.removeAttribute('show-plus');
      }

      if (this.getAttribute('kbd-key')) {
        kbdEl.setAttribute('key', this.getAttribute('kbd-key'));
      } else {
        kbdEl.removeAttribute('key');
      }
    } else {
      kbdEl.style.display = 'none';
    }

    tooltipEl.setAttribute('aria-hidden', (!visible).toString());
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
}

if (!customElements.get('ds-tooltip')) {
  customElements.define('ds-tooltip', Tooltip);
}