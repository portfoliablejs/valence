import mermaid from 'mermaid';

// Inside your Mermaid setup file (e.g., MermaidDiagram.js)
mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif', // Matches var(--font-family)
  flowchart: {
    htmlLabels: true,
    padding: 20, // Adds comfortable horizontal breathing room inside node boxes
  },
});

export class MermaidDiagram extends HTMLElement {
  async connectedCallback() {
    const rawChart = this.getAttribute('chart') || this.textContent.trim();
    if (!rawChart) return;

    const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
    try {
      const { svg } = await mermaid.render(id, rawChart);
      this.innerHTML = svg;
    } catch (error) {
      console.error('Mermaid rendering failed:', error);
    }
  }
}

if (!customElements.get('mermaid-diagram')) {
  customElements.define('mermaid-diagram', MermaidDiagram);
}