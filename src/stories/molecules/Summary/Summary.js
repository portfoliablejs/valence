import css from './summary.css?inline';
import '../../sub-atomic/Iconography/Iconography';
import '../MetricCard/MetricCard';

export class AiSummary extends HTMLElement {
  static get observedAttributes() {
    return ['text', 'active'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._hasTyped = false;

    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <div class="summary">
        <div class="summary-header-header">
          <ds-icon name="ask-ai" size="14"></ds-icon>
          <span class="header-label">AI Summary</span>
        </div>
        <p class="summary-text" aria-live="polite"></p>
        <div class="summary-metrics-grid">
          <slot></slot>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    const t = typeof window.t === 'function' ? window.t : (k) => k;
    this.shadowRoot.querySelector('.header-label').textContent = t('AI Summary');
    this.checkActiveState();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'active' && newValue === 'true') {
      this.checkActiveState();
    }
  }

  checkActiveState() {
    if (this.getAttribute('active') === 'true' && !this._hasTyped) {
      this._hasTyped = true;
      this.startTypingEffect();
    }
  }

  startTypingEffect() {
    const textEl = this.shadowRoot.querySelector('.summary-text');
    const gridEl = this.shadowRoot.querySelector('.summary-metrics-grid');
    const fullText = this.getAttribute('text') || '';
    
    textEl.textContent = '';
    
    const dots = document.createElement('span');
    dots.className = 'ai-thinking-dots';
    textEl.appendChild(dots);
    
    let dotCount = 0;
    const thinkInt = setInterval(() => {
      dotCount = (dotCount + 1) % 4;
      dots.textContent = '.'.repeat(dotCount);
    }, 300);

    setTimeout(() => {
      clearInterval(thinkInt);
      dots.remove();
      textEl.classList.add('typing');
      
      let charIdx = 0;
      const typeChar = () => {
        if (charIdx < fullText.length) {
          textEl.textContent += fullText.charAt(charIdx);
          charIdx++;
          setTimeout(typeChar, 15); 
        } else {
          textEl.classList.remove('typing');
          
          // Reveal Metrics
          gridEl.classList.add('show-grid');
          const slottedMetrics = this.shadowRoot.querySelector('slot').assignedElements();
          slottedMetrics.forEach((card, i) => {
            setTimeout(() => card.classList.add('show'), 50 + (i * 150));
          });
        }
      };
      typeChar();
    }, 1200);
  }
}

if (!customElements.get('ds-summary')) {
  customElements.define('ds-summary', AiSummary);
}