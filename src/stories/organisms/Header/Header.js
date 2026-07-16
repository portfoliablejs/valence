// src/stories/organisms/Header/Header.js (Corrected)

import css from './header.css?inline';
import '../../molecules/Breadcrumb/Breadcrumb.js';
import '../../atoms/Button/Button.js';
import '../../atoms/Divider/Divider.js';

export class Header extends HTMLElement {
  // --- Tell the browser which attributes to watch for changes ---
  static get observedAttributes() {
    return ['view', 'current-label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <header class="header-container">
        <div class="header-left">
          <ds-button variant="floating" icon="return" aria-label="Go Back" id="home-btn"></ds-button>
          <ds-breadcrumb id="breadcrumb"></ds-breadcrumb>
        </div>
        <div class="header-right">
          <ds-mode-toggle id="mode-toggle"></ds-mode-toggle>
          <ds-divider></ds-divider>
          <ds-button variant="icon" icon="accessibility" aria-label="Accessibility" id="a11y-btn"></ds-button>
          <ds-button variant="icon" icon="language" aria-label="Language" id="lang-btn"></ds-button>
        </div>
      </header>
    `;
    this.bindEvents();
  }

  // --- When an observed attribute changes, this function is called ---
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }
  
  connectedCallback() {
    this.render();
  }

  // --- This component now manages its own internals ---
  render() {
    const view = this.getAttribute('view') || 'home';
    const currentLabel = this.getAttribute('current-label') || '';

    const homeBtn = this.shadowRoot.getElementById('home-btn');
    const breadcrumb = this.shadowRoot.getElementById('breadcrumb');

    if (view === 'home') {
      homeBtn.hidden = true;
      breadcrumb.setAttribute('visible', 'false');
    } else {
      homeBtn.hidden = false;
      breadcrumb.setAttribute('visible', 'true');
      breadcrumb.setAttribute('current-label', currentLabel);
    }
  }

  bindEvents() {
    // --- This logic remains the same, dispatching events outwards ---
    const dispatch = (eventName) => this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true }));
    
    this.shadowRoot.getElementById('home-btn').addEventListener('click', () => dispatch('ds-home-click'));
    this.shadowRoot.getElementById('a11y-btn').addEventListener('click', () => dispatch('ds-a11y-click'));
    this.shadowRoot.getElementById('lang-btn').addEventListener('click', () => dispatch('ds-lang-click'));
    this.shadowRoot.getElementById('mode-toggle').addEventListener('ds-mode-change', (e) => {
        this.dispatchEvent(new CustomEvent('ds-mode-change', { detail: e.detail, bubbles: true, composed: true }));
    });
    this.shadowRoot.getElementById('breadcrumb').addEventListener('ds-breadcrumb-home', () => dispatch('ds-home-click'));
  }
}
if (!customElements.get('ds-header')) customElements.define('ds-header', Header);