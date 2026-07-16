// src/stories/organisms/ComboCard/ComboCard.js
import css from './combo-card.css?inline';
import '../ComboTabs/ComboTabs.js';

export class ComboCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <div class="combo-asset-card">
        <ds-combo-tabs></ds-combo-tabs>
        <div class="content-container">
          <slot></slot>
        </div>
      </div>
    `;
    this.tabsEl = this.shadowRoot.querySelector('ds-combo-tabs');
    this.tabsEl.addEventListener('ds-tab-change', (e) => this.updateContent(e.detail.activeId));
  }

  connectedCallback() {
    // Let the browser parse the initial slotted content
    setTimeout(() => this.initializeTabs(), 0);
  }

  initializeTabs() {
    const tabs = [];
    this.querySelectorAll('[slot]').forEach(el => {
      tabs.push({ id: el.slot, label: el.getAttribute('data-label') || el.slot });
    });
    this.tabsEl.tabs = tabs;
    if (tabs.length > 0) {
      this.updateContent(tabs[0].id);
    }
  }

  updateContent(activeId) {
    this.querySelectorAll('[slot]').forEach(el => {
      el.classList.toggle('active', el.slot === activeId);
    });
  }
}
if (!customElements.get('ds-combo-card')) customElements.define('ds-combo-card', ComboCard);