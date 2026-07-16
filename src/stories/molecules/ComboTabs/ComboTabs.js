import css from './combo-tabs.css?inline';
import '../../atoms/Tab/Tab'; // Import the new Tab atom

export class ComboTabs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._tabs = [];
    this._activeId = null;

    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <div class="combo-tabs" role="tablist"></div>
    `;
  }

  set tabs(data) {
    this._tabs = data;
    if (!this._activeId && data.length > 0) {
      this._activeId = data[0].id;
    }
    this.render();
  }

  get tabs() { return this._tabs; }

  set activeId(id) {
    this._activeId = id;
    this.render();
  }

  get activeId() { return this._activeId; }

  handleTabClick(id) {
    this.activeId = id;
    this.dispatchEvent(new CustomEvent('ds-tab-change', {
      detail: { activeId: id },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const container = this.shadowRoot.querySelector('.combo-tabs');
    container.innerHTML = '';

    this._tabs.forEach((tab, index) => {
      const tabEl = document.createElement('ds-tab');
      const isActive = this._activeId === tab.id;
      
      tabEl.setAttribute('label', tab.label);
      tabEl.setAttribute('active', isActive.toString());
      
      tabEl.addEventListener('ds-tab-click', () => this.handleTabClick(tab.id));
      
      // Keyboard navigation
      tabEl.addEventListener('keydown', (e) => {
        let nextIndex = index;
        if (e.key === 'ArrowRight') nextIndex = (index + 1) % this._tabs.length;
        if (e.key === 'ArrowLeft') nextIndex = (index - 1 + this._tabs.length) % this._tabs.length;

        if (nextIndex !== index) {
          e.preventDefault();
          const nextId = this._tabs[nextIndex].id;
          this.handleTabClick(nextId);
          setTimeout(() => {
            const newActiveTab = container.children[nextIndex];
            if (newActiveTab && newActiveTab.focusTab) newActiveTab.focusTab();
          }, 0);
        }
      });

      container.appendChild(tabEl);
    });
  }
}

if (!customElements.get('ds-combo-tabs')) {
  customElements.define('ds-combo-tabs', ComboTabs);
}