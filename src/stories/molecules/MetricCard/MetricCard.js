import css from './metric-card.css?inline';

export class MetricCard extends HTMLElement {
  static get observedAttributes() {
    return ['value', 'label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <div class="summary-metric-card" role="group" aria-roledescription="metric">
        <span class="metric-value"></span>
        <span class="metric-label"></span>
      </div>
    `;
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
    const valueEl = this.shadowRoot.querySelector('.metric-value');
    const labelEl = this.shadowRoot.querySelector('.metric-label');

    valueEl.textContent = this.getAttribute('value') || '--';
    labelEl.textContent = this.getAttribute('label') || 'Metric';
    
    // A11y: Read as "18 days to first deliverable"
    this.shadowRoot.querySelector('.summary-metric-card').setAttribute(
      'aria-label', 
      `${this.getAttribute('value')} ${this.getAttribute('label')}`
    );
  }
}

if (!customElements.get('ds-metric-card')) {
  customElements.define('ds-metric-card', MetricCard);
}