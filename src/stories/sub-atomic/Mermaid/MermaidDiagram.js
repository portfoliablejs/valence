import mermaidCss from './mermaid.css?raw';

let mermaidLoaderPromise;

async function getMermaid() {
  if (!mermaidLoaderPromise) {
    mermaidLoaderPromise = import('mermaid').then((module) => {
      const mermaidRuntime = module.default ?? module;
      mermaidRuntime.initialize({
        startOnLoad: false,
        theme: 'default',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
        flowchart: {
          htmlLabels: true,
          padding: 20,
        },
      });

      return mermaidRuntime;
    });
  }

  return mermaidLoaderPromise;
}

export class MermaidDiagram extends HTMLElement {
  async connectedCallback() {
    const rawChart = this.getAttribute('chart') || this.textContent.trim();
    if (!rawChart) return;

    const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
    try {
      const mermaid = await getMermaid();
      const { svg } = await mermaid.render(id, rawChart);
      this.innerHTML = `<style>${mermaidCss}</style>${svg}`;
    } catch (error) {
      console.error('Mermaid rendering failed:', error);
      const fallbackText = String(this.getAttribute('error-text') || '').trim() || 'Unable to render diagram.';
      this.innerHTML = `<p class="mermaid-error" role="alert">${fallbackText}</p>`;
      this.dispatchEvent(new CustomEvent('ds-mermaid-error', {
        detail: { message: fallbackText },
        bubbles: true,
        composed: true
      }));
    }
  }
}

if (!customElements.get('mermaid-diagram')) {
  customElements.define('mermaid-diagram', MermaidDiagram);
}