import mermaidCss from './mermaid.css?raw';

let mermaidLoaderPromise;

async function getMermaid() {
  if (!mermaidLoaderPromise) {
    mermaidLoaderPromise = import('mermaid').then((module) => {
      const mermaidRuntime = module.default ?? module;
      mermaidRuntime.initialize({
        startOnLoad: false,
        theme: 'base',
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
    this._rawChart = this.getAttribute('chart') || this.textContent.trim();
    if (!this._rawChart) return;

    this._themeObserver = new MutationObserver(() => this._render());
    this._themeObserver.observe(this.ownerDocument.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    await this._render();
  }

  disconnectedCallback() {
    this._themeObserver?.disconnect();
  }

  _getThemeVariables() {
    const root = this.ownerDocument.documentElement;
    const styles = getComputedStyle(root);
    const readToken = (name, fallback) => styles.getPropertyValue(name).trim() || fallback;

    if (root.classList.contains('a11y-forced-colors')) {
      return {
        primaryColor: 'Canvas',
        primaryTextColor: 'CanvasText',
        primaryBorderColor: 'CanvasText',
        lineColor: 'CanvasText',
        secondaryColor: 'Canvas',
        tertiaryColor: 'Canvas'
      };
    }

    const darkMode = root.classList.contains('a11y-dark-mode');
    const highContrast = root.classList.contains('a11y-high-contrast');
    return {
      primaryColor: highContrast ? '#000000' : readToken('--color-surface', darkMode ? '#1C1C1E' : '#F2F2F7'),
      primaryTextColor: highContrast ? '#FFFFFF' : readToken('--color-text-primary', darkMode ? '#FFFFFF' : '#000000'),
      primaryBorderColor: highContrast ? '#FFFFFF' : readToken('--color-surface-border', 'rgba(0, 0, 0, 0.15)'),
      lineColor: highContrast ? '#FFFFFF' : readToken('--color-text-secondary', darkMode ? '#B2B2B2' : '#323232'),
      secondaryColor: highContrast ? '#000000' : readToken('--color-bg', darkMode ? '#101218' : '#FFFFFF'),
      tertiaryColor: highContrast ? '#000000' : readToken('--color-surface', darkMode ? '#1C1C1E' : '#F2F2F7')
    };
  }

  async _render() {
    if (!this._rawChart) return;

    const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
    try {
      const mermaid = await getMermaid();
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        themeVariables: this._getThemeVariables()
      });
      const { svg } = await mermaid.render(id, this._rawChart);
      this.replaceChildren();
      const style = document.createElement('style');
      style.textContent = mermaidCss;
      this.append(style);
      this.insertAdjacentHTML('beforeend', svg);
      this._applyThemeStyles();
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

  _applyThemeStyles() {
      const variables = this._getThemeVariables();
      this.querySelectorAll('.node rect, .node circle, .node polygon, .node path, .actor').forEach((element) => {
        element.style.setProperty('fill', variables.primaryColor, 'important');
        element.style.setProperty('stroke', variables.primaryBorderColor, 'important');
      });
      this.querySelectorAll('.cluster rect').forEach((element) => {
        element.style.setProperty('fill', variables.secondaryColor, 'important');
        element.style.setProperty('stroke', variables.primaryBorderColor, 'important');
      });
      this.querySelectorAll('.label text, .node foreignObject, .actor text, .messageText, .labelText, text').forEach((element) => {
        element.style.setProperty('fill', variables.primaryTextColor, 'important');
        element.style.setProperty('color', variables.primaryTextColor, 'important');
      });
      this.querySelectorAll('.edgePath .path, .flowchart-link').forEach((element) => {
        element.style.setProperty('stroke', variables.lineColor, 'important');
        element.style.setProperty('fill', 'none', 'important');
      });
      this.querySelectorAll('marker path').forEach((element) => {
        element.style.setProperty('stroke', variables.lineColor, 'important');
        element.style.setProperty('fill', variables.lineColor, 'important');
      });
  }
}

if (!customElements.get('mermaid-diagram')) {
  customElements.define('mermaid-diagram', MermaidDiagram);
}