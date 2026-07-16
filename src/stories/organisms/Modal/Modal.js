import css from './modal.css?inline';
import '../../atoms/Button/Button';

export class Modal extends HTMLElement {
  static get observedAttributes() { return ['open', 'title', 'hide-backdrop']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <div class="glass-overlay" aria-hidden="true">
        <div class="a11y-modal" role="dialog" aria-modal="true">
          <div class="popup-header">
            <span class="popup-title"></span>
            <ds-button variant="close" aria-label="Close" class="close-btn"></ds-button>
          </div>
          <div class="modal-content"><slot></slot></div>
        </div>
      </div>
    `;
    this.overlay = this.shadowRoot.querySelector('.glass-overlay');
    this.closeBtn = this.shadowRoot.querySelector('.close-btn');
    const close = () => {
      this.setAttribute('open', 'false');
      this.dispatchEvent(new CustomEvent('ds-modal-close', { bubbles: true, composed: true }));
    };
    this.closeBtn.addEventListener('click', close);
    this.overlay.addEventListener('click', (e) => { if (e.target === this.overlay) close(); });
  }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }
  render() {
    this.shadowRoot.querySelector('.popup-title').textContent = this.getAttribute('title') || 'Modal';
    const isOpen = this.getAttribute('open') === 'true';
    this.overlay.setAttribute('aria-hidden', (!isOpen).toString());
  }
}
if (!customElements.get('ds-modal')) customElements.define('ds-modal', Modal);