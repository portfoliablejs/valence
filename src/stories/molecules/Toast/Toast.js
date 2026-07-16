import css from './toast.css?inline';
import '../../atoms/Button/Button.js';

export class Toast extends HTMLElement {
  static get observedAttributes() {
    return ['visible', 'aria-label', 'case-title', 'show-close', 'show-never-show'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // Compressed single-line template string with default hidden buttons
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="toast-container" role="status" aria-live="polite" tabindex="0"><ds-button variant="icon" icon="close" aria-label="Close notification" class="toast-close-btn" hidden></ds-button><span class="toast-text"><slot></slot></span><ds-button variant="text" class="toast-never-btn" hidden>Never show this again</ds-button></div>`;

    this._handleClick = this._handleClick.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleNeverShow = this._handleNeverShow.bind(this);
  }

  connectedCallback() {
    this.containerEl = this.shadowRoot.querySelector('.toast-container');
    this.textEl = this.shadowRoot.querySelector('.toast-text');
    this.closeBtnEl = this.shadowRoot.querySelector('.toast-close-btn');
    this.neverBtnEl = this.shadowRoot.querySelector('.toast-never-btn');

    if (this.containerEl) {
      this.containerEl.addEventListener('click', this._handleClick);
    }
    if (this.closeBtnEl) {
      this.closeBtnEl.addEventListener('click', this._handleClose);
    }
    if (this.neverBtnEl) {
      this.neverBtnEl.addEventListener('click', this._handleNeverShow);
    }

    this.updateAttributes();
    this._observeRootAccessibility();
  }

  disconnectedCallback() {
    if (this.containerEl) {
      this.containerEl.removeEventListener('click', this._handleClick);
    }
    if (this.closeBtnEl) {
      this.closeBtnEl.removeEventListener('click', this._handleClose);
    }
    if (this.neverBtnEl) {
      this.neverBtnEl.removeEventListener('click', this._handleNeverShow);
    }
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'aria-label' && newValue === null) return;

    if (this.containerEl && oldValue !== newValue) {
      this.updateAttributes();
    }
  }

  _handleClick(e) {
    this.dispatchEvent(new CustomEvent('ds-toast-click', {
      bubbles: true,
      composed: true,
      detail: { visible: this.getAttribute('visible') === 'true' }
    }));
  }

  _handleClose(e) {
    e.stopPropagation();
    this.setAttribute('visible', 'false');
    this.dispatchEvent(new CustomEvent('ds-toast-close', {
      bubbles: true,
      composed: true
    }));
  }

  _handleNeverShow(e) {
    e.stopPropagation();
    this.setAttribute('visible', 'false');
    this.dispatchEvent(new CustomEvent('ds-toast-never-show', {
      bubbles: true,
      composed: true
    }));
  }

  _observeRootAccessibility() {
    const root = this.ownerDocument.documentElement;
    const sync = () => {
      this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
      this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
      this.toggleAttribute('a11y-dyslexia', root.classList.contains('a11y-dyslexia'));
      this.toggleAttribute('a11y-large-text', root.classList.contains('a11y-large-text'));
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

  updateAttributes() {
    const ariaLabel = this.getAttribute('aria-label') || 'Notification';
    const caseTitle = this.getAttribute('case-title');
    const showClose = this.hasAttribute('show-close') && this.getAttribute('show-close') !== 'false';
    const showNeverShow = this.hasAttribute('show-never-show') && this.getAttribute('show-never-show') !== 'false';

    if (caseTitle && this.textEl) {
      this.textEl.textContent = caseTitle;
    }

    if (this.closeBtnEl) {
      this.closeBtnEl.toggleAttribute('hidden', !showClose);
    }

    if (this.neverBtnEl) {
      this.neverBtnEl.toggleAttribute('hidden', !showNeverShow);
    }

    // ARIA Delegation & Host Scrubbing
    if (ariaLabel && this.containerEl) {
      this.containerEl.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label');
    }
  }
}

if (!customElements.get('ds-toast')) {
  customElements.define('ds-toast', Toast);
}