import css from './article.css?inline';
import '../../sub-atomic/Iconography/Iconography.js';
import '../../atoms/Button/Button.js';
import '../../atoms/Toc/Toc.js';
import '../../atoms/Thumbnail/Thumbnail.js';
import '../../molecules/Tooltip/Tooltip.js';

// Import Prism.js Core & All Common Language Grammars
import Prism from 'prismjs';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup'; // HTML / XML
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-yaml';

export class Article extends HTMLElement {
  static get observedAttributes() {
    return [
      'aria-label',
      'kicker',
      'title-text',
      'primary-label',
      'primary-icon',
      'secondary1-label',
      'secondary2-label',
      'show-kicker',
      'show-title',
      'show-social-share',
      'show-social-linkedin',
      'show-social-x',
      'show-social-facebook',
      'show-action-primary',
      'show-action-secondary1',
      'show-action-secondary2',
      'show-summary',
      'show-player',
      'show-toc',
      'show-navigator'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._onScroll = this._onScroll.bind(this);
    this._animateScrollProgress = this._animateScrollProgress.bind(this);
    this._thumbnailProgress = 0;
    this._targetThumbnailProgress = 0;
    this._scrollRaf = null;
    
    // Single compressed line Shadow DOM string including <ds-toc> floating element
    this.shadowRoot.innerHTML = `<style>${css}</style><article class="ds-article"><ds-toc class="article-toc" target-selector="ds-article"></ds-toc><section class="article-body-layout"><div class="thumbnail-column"><slot name="thumbnail"></slot></div><div class="content-column"><header class="article-header"><div class="kicker-container"><span class="kicker-text"></span></div><div class="title-row"><h1 class="article-title"></h1><div class="social-actions"><div class="tooltip-wrapper wrapper-share"><ds-button variant="icon" icon="share" icon-variant="outline" class="btn-share" aria-label="Share"></ds-button><ds-tooltip text="Share" position="bottom"></ds-tooltip></div><div class="tooltip-wrapper wrapper-linkedin"><ds-button variant="icon" icon="linkedin" icon-variant="outline" class="btn-linkedin" aria-label="LinkedIn"></ds-button><ds-tooltip text="LinkedIn" position="bottom"></ds-tooltip></div><div class="tooltip-wrapper wrapper-x"><ds-button variant="icon" icon="x" icon-variant="outline" class="btn-x" aria-label="X"></ds-button><ds-tooltip text="X" position="bottom"></ds-tooltip></div><div class="tooltip-wrapper wrapper-facebook"><ds-button variant="icon" icon="facebook" icon-variant="outline" class="btn-facebook" aria-label="Facebook"></ds-button><ds-tooltip text="Facebook" position="bottom"></ds-tooltip></div></div></div><div class="main-actions"><div class="tooltip-wrapper primary-wrapper"><ds-button variant="primary" class="btn-primary" icon="play-fill"></ds-button><ds-tooltip class="tooltip-primary" text="Watch Pitch" position="bottom" show-kbd kbd-label="Enter" kbd-key="Enter"></ds-tooltip></div><div class="tooltip-wrapper secondary1-wrapper"><ds-button variant="secondary" class="btn-secondary1"></ds-button><ds-tooltip class="tooltip-secondary1" text="Repository" position="bottom"></ds-tooltip></div><div class="tooltip-wrapper secondary2-wrapper"><ds-button variant="secondary" class="btn-secondary2"></ds-button><ds-tooltip class="tooltip-secondary2" text="Live Demo" position="bottom"></ds-tooltip></div></div></header><section class="article-summary-container"><slot name="summary"></slot></section><section class="article-player-container"><slot name="player"></slot></section><section class="article-body"><slot></slot></section></div></section><footer class="article-navigator"><div class="navigator-container"><slot name="navigator"></slot></div></footer></article>`;

    this.kickerEl = this.shadowRoot.querySelector('.kicker-text');
    this.titleEl = this.shadowRoot.querySelector('.article-title');
    this.tocEl = this.shadowRoot.querySelector('.article-toc');
    
    this.kickerContainer = this.shadowRoot.querySelector('.kicker-container');
    this.titleRow = this.shadowRoot.querySelector('.title-row');
    
    this.wrapperShare = this.shadowRoot.querySelector('.wrapper-share');
    this.wrapperLinkedin = this.shadowRoot.querySelector('.wrapper-linkedin');
    this.wrapperX = this.shadowRoot.querySelector('.wrapper-x');
    this.wrapperFacebook = this.shadowRoot.querySelector('.wrapper-facebook');
    
    this.mainActions = this.shadowRoot.querySelector('.main-actions');
    this.wrapperPrimary = this.shadowRoot.querySelector('.primary-wrapper');
    this.wrapperSecondary1 = this.shadowRoot.querySelector('.secondary1-wrapper');
    this.wrapperSecondary2 = this.shadowRoot.querySelector('.secondary2-wrapper');

    this.summaryContainer = this.shadowRoot.querySelector('.article-summary-container');
    this.playerContainer = this.shadowRoot.querySelector('.article-player-container');
    this.navigatorContainer = this.shadowRoot.querySelector('.article-navigator');
    this.bodySlot = this.shadowRoot.querySelector('.article-body slot:not([name])');
    this.thumbnailColumn = this.shadowRoot.querySelector('.thumbnail-column');
    this.contentColumn = this.shadowRoot.querySelector('.content-column');
    this.bodyLayout = this.shadowRoot.querySelector('.article-body-layout');
    this.articleRoot = this.shadowRoot.querySelector('.ds-article');
    
    this.btnPrimary = this.shadowRoot.querySelector('.btn-primary');
    this.tooltipPrimary = this.shadowRoot.querySelector('.tooltip-primary');
    
    this.btnSecondary1 = this.shadowRoot.querySelector('.btn-secondary1');
    this.tooltipSecondary1 = this.shadowRoot.querySelector('.tooltip-secondary1');
    
    this.btnSecondary2 = this.shadowRoot.querySelector('.btn-secondary2');
    this.tooltipSecondary2 = this.shadowRoot.querySelector('.tooltip-secondary2');

    this._bindEvents();
  }

  connectedCallback() {
    if (!document.getElementById('ds-article-styles')) {
      const tag = document.createElement('style');
      tag.id = 'ds-article-styles';
      tag.textContent = css;
      document.head.appendChild(tag);
    }

    this._observeRootAccessibility();
    this._setupSlotAndMutationObservers();
    window.addEventListener('scroll', this._onScroll, { passive: true });
    this._onScroll();
    this.render();
    this._highlightCodeBlocks();

    // Trigger TOC heading scan once slotted content is attached
    setTimeout(() => {
      if (this.tocEl && typeof this.tocEl.scanHeadings === 'function') {
        this.tocEl.scanHeadings();
      }
    }, 100);
  }

  disconnectedCallback() {
    if (this._themeObserver) this._themeObserver.disconnect();
    if (this._contentObserver) this._contentObserver.disconnect();
    if (this._scrollRaf) {
      cancelAnimationFrame(this._scrollRaf);
      this._scrollRaf = null;
    }
    window.removeEventListener('scroll', this._onScroll, { passive: true });
  }

  attributeChangedCallback() {
    this.render();
  }

  _bindEvents() {
    this.btnPrimary.addEventListener('click', () => this.dispatchEvent(new CustomEvent('ds-article-action', { detail: { action: 'primary' }, bubbles: true, composed: true })));
    this.btnSecondary1.addEventListener('click', () => this.dispatchEvent(new CustomEvent('ds-article-action', { detail: { action: 'secondary1' }, bubbles: true, composed: true })));
    this.btnSecondary2.addEventListener('click', () => this.dispatchEvent(new CustomEvent('ds-article-action', { detail: { action: 'secondary2' }, bubbles: true, composed: true })));
    
    this.shadowRoot.querySelector('.btn-share').addEventListener('click', () => this.dispatchEvent(new CustomEvent('ds-article-share', { detail: { platform: 'native' }, bubbles: true, composed: true })));
    this.shadowRoot.querySelector('.btn-linkedin').addEventListener('click', () => this.dispatchEvent(new CustomEvent('ds-article-share', { detail: { platform: 'linkedin' }, bubbles: true, composed: true })));
    this.shadowRoot.querySelector('.btn-x').addEventListener('click', () => this.dispatchEvent(new CustomEvent('ds-article-share', { detail: { platform: 'x' }, bubbles: true, composed: true })));
    this.shadowRoot.querySelector('.btn-facebook').addEventListener('click', () => this.dispatchEvent(new CustomEvent('ds-article-share', { detail: { platform: 'facebook' }, bubbles: true, composed: true })));
  }

  _onScroll() {
    if (!this.thumbnailColumn || !this.articleRoot || !this.bodyLayout) return;

    const threshold = 120;
    const transitionRange = 240;
    const rawProgress = (window.scrollY - threshold) / transitionRange;
    const clamped = Math.min(1, Math.max(0, rawProgress));
    const easedTarget = this._easeInOutCubic(clamped);

    this._targetThumbnailProgress = easedTarget;
    if (!this._scrollRaf) {
      this._scrollRaf = requestAnimationFrame(this._animateScrollProgress);
    }
  }

  _animateScrollProgress() {
    this._scrollRaf = null;

    const delta = this._targetThumbnailProgress - this._thumbnailProgress;
    if (Math.abs(delta) <= 0.001) {
      this._thumbnailProgress = this._targetThumbnailProgress;
    } else {
      this._thumbnailProgress += delta * 0.2;
    }

    this._applyThumbnailProgress(this._thumbnailProgress);

    if (Math.abs(this._targetThumbnailProgress - this._thumbnailProgress) > 0.001) {
      this._scrollRaf = requestAnimationFrame(this._animateScrollProgress);
    }
  }

  _applyThumbnailProgress(progress) {
    const hidden = progress >= 0.98;
    const retracted = progress >= 0.95;

    this.thumbnailColumn.classList.toggle('thumbnail-hidden', hidden);
    this.articleRoot.classList.toggle('thumbnail-retracted', retracted);
    this.bodyLayout.classList.toggle('thumbnail-retracted', retracted);

    const normalized = progress.toFixed(3);
    this.articleRoot.style.setProperty('--ds-article-thumbnail-progress', normalized);
    this.bodyLayout.style.setProperty('--ds-article-thumbnail-progress', normalized);
  }

  _easeInOutCubic(value) {
    if (value < 0.5) {
      return 4 * value * value * value;
    }

    return 1 - Math.pow(-2 * value + 2, 3) / 2;
  }

  _observeRootAccessibility() {
    const root = this.ownerDocument.documentElement;
    const sync = () => {
      this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
      this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
      this.toggleAttribute('a11y-large-text', root.classList.contains('a11y-large-text'));
      this.toggleAttribute('a11y-dyslexia', root.classList.contains('a11y-dyslexia'));
      this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
      this.toggleAttribute('a11y-focus-mode', root.classList.contains('a11y-focus-mode'));
      this.toggleAttribute('a11y-forced-colors', root.classList.contains('a11y-forced-colors'));
    };

    sync();
    this._themeObserver = new MutationObserver(sync);
    this._themeObserver.observe(root, { attributes: true, attributeFilter: ['class'] });
  }

  _setupSlotAndMutationObservers() {
    const slots = this.shadowRoot.querySelectorAll('slot');
    slots.forEach((slot) => {
      slot.addEventListener('slotchange', () => {
        this._highlightCodeBlocks();
        if (this.tocEl && typeof this.tocEl.scanHeadings === 'function') {
          this.tocEl.scanHeadings();
        }
      });
    });

    this._contentObserver = new MutationObserver(() => {
      this._highlightCodeBlocks();
      if (this.tocEl && typeof this.tocEl.scanHeadings === 'function') {
        this.tocEl.scanHeadings();
      }
    });
    this._contentObserver.observe(this, { childList: true, subtree: true });
  }

  /* Language Detection Engine (Class match + Syntax Heuristics) */
  _detectLanguage(codeText, codeElement) {
    const className = codeElement?.className || '';
    const classMatch = className.match(/(?:lang|language)-([a-zA-Z0-9+#-]+)/i);
    if (classMatch && classMatch[1]) {
      const alias = classMatch[1].toLowerCase();
      const normalize = {
        'c++': 'cpp',
        'cpp': 'cpp',
        'rust': 'rust',
        'rs': 'rust',
        'js': 'javascript',
        'ts': 'typescript',
        'py': 'python',
        'html': 'markup',
        'sh': 'bash',
        'shell': 'bash'
      };
      return normalize[alias] || alias;
    }

    const code = codeText.trim();
    if (/^\s*<[!a-zA-Z]/i.test(code) || /<\/[a-zA-Z]+>/i.test(code)) return 'markup';
    if (/(#include|std::|template\s*<)/i.test(code)) return 'cpp';
    if (/(fn |let mut |match |pub struct |impl )/i.test(code)) return 'rust';
    if (/(def |self\.|elif |import numpy|print\()/i.test(code)) return 'python';
    if (/(SELECT .* FROM|INSERT INTO|UPDATE .* SET|CREATE TABLE)/i.test(code)) return 'sql';
    if (/([a-zA-Z0-9_-]+\s*\{[\s\S]*?[a-zA-Z-]+\s*:)/i.test(code)) return 'css';
    if (/^\s*(\$|sudo|npm|yarn|git|cd|mkdir)/i.test(code)) return 'bash';

    return 'javascript';
  }

  _formatLangBadgeName(alias) {
    const map = {
      js: 'JavaScript',
      javascript: 'JavaScript',
      ts: 'TypeScript',
      typescript: 'TypeScript',
      py: 'Python',
      python: 'Python',
      html: 'HTML',
      markup: 'HTML',
      css: 'CSS',
      sh: 'Shell',
      bash: 'Shell',
      sql: 'SQL',
      json: 'JSON',
      cpp: 'C++',
      c: 'C',
      rust: 'Rust',
      java: 'Java',
      go: 'Go',
      ruby: 'Ruby',
      yaml: 'YAML'
    };
    return map[alias] || alias.toUpperCase();
  }

  /* Prism Tokenization & Badge Injection with Flattened Slot Traversal */
  _highlightCodeBlocks() {
    const slots = Array.from(this.shadowRoot.querySelectorAll('slot'));
    const assignedNodes = slots.flatMap((slot) => slot.assignedElements({ flatten: true }));
    const directChildren = Array.from(this.children);
    const combinedElements = Array.from(new Set([...assignedNodes, ...directChildren]));

    const preBlocks = [];
    combinedElements.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.matches('pre')) {
          preBlocks.push(node);
        }
        preBlocks.push(...node.querySelectorAll('pre'));
      }
    });

    preBlocks.forEach((pre) => {
      if (pre.dataset.highlighted === 'true') return;

      const targetCode = pre.querySelector('code') || pre;
      const rawText = targetCode.textContent || '';
      if (!rawText.trim()) return;

      const langKey = this._detectLanguage(rawText, targetCode);
      const grammar = Prism.languages[langKey] || Prism.languages.javascript;

      targetCode.innerHTML = Prism.highlight(rawText, grammar, langKey);

      if (!pre.querySelector('.code-lang-badge')) {
        const badge = document.createElement('span');
        badge.className = 'code-lang-badge';
        badge.textContent = this._formatLangBadgeName(langKey);
        pre.appendChild(badge);
      }

      pre.dataset.highlighted = 'true';
    });
  }

  render() {
    this._delegateAriaLabel();
    
    this.kickerEl.textContent = this.getAttribute('kicker') || '';
    this.titleEl.textContent = this.getAttribute('title-text') || '';
    
    const pLabel = this.getAttribute('primary-label') || 'Primary';
    const s1Label = this.getAttribute('secondary1-label') || 'Secondary';
    const s2Label = this.getAttribute('secondary2-label') || 'Secondary';

    this.btnPrimary.textContent = pLabel;
    this.tooltipPrimary.setAttribute('text', pLabel);
    
    this.btnSecondary1.textContent = s1Label;
    this.tooltipSecondary1.setAttribute('text', s1Label);
    
    this.btnSecondary2.textContent = s2Label;
    this.tooltipSecondary2.setAttribute('text', s2Label);

    if (this.hasAttribute('primary-icon')) {
      this.btnPrimary.setAttribute('icon', this.getAttribute('primary-icon'));
    }

    this.kickerContainer.style.display = this.getAttribute('show-kicker') === 'false' ? 'none' : 'block';
    this.titleEl.style.display = this.getAttribute('show-title') === 'false' ? 'none' : 'block';
    
    this.wrapperShare.style.display = this.getAttribute('show-social-share') === 'false' ? 'none' : 'inline-flex';
    this.wrapperLinkedin.style.display = this.getAttribute('show-social-linkedin') === 'false' ? 'none' : 'inline-flex';
    this.wrapperX.style.display = this.getAttribute('show-social-x') === 'false' ? 'none' : 'inline-flex';
    this.wrapperFacebook.style.display = this.getAttribute('show-social-facebook') === 'false' ? 'none' : 'inline-flex';
    
    this.wrapperPrimary.style.display = this.getAttribute('show-action-primary') === 'false' ? 'none' : 'inline-flex';
    this.wrapperSecondary1.style.display = this.getAttribute('show-action-secondary1') === 'false' ? 'none' : 'inline-flex';
    this.wrapperSecondary2.style.display = this.getAttribute('show-action-secondary2') === 'false' ? 'none' : 'inline-flex';

    const showAnyAction = this.getAttribute('show-action-primary') !== 'false' || this.getAttribute('show-action-secondary1') !== 'false' || this.getAttribute('show-action-secondary2') !== 'false';
    this.mainActions.style.display = showAnyAction ? 'flex' : 'none';

    this.summaryContainer.style.display = this.getAttribute('show-summary') === 'false' ? 'none' : 'block';
    this.playerContainer.style.display = this.getAttribute('show-player') === 'false' ? 'none' : 'block';
    if (this.tocEl) {
      this.tocEl.style.display = this.getAttribute('show-toc') === 'false' ? 'none' : 'block';
    }
    this.navigatorContainer.style.display = this.getAttribute('show-navigator') === 'false' ? 'none' : 'flex';
  }

  _delegateAriaLabel() {
    const ariaLabel = this.getAttribute('aria-label');
    if (ariaLabel) {
      const articleEl = this.shadowRoot.querySelector('.ds-article');
      if (articleEl) {
        articleEl.setAttribute('aria-label', ariaLabel);
      }
      this.removeAttribute('aria-label');
    }
  }
}

if (!customElements.get('ds-article')) {
  customElements.define('ds-article', Article);
}