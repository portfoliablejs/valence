import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Sub-atomic/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`web-component-architecture`,children:`Web Component Architecture`}),`
`,(0,c.jsx)(r.p,{children:`The Web Component Architecture document defines platform-wide technical standards, Shadow DOM encapsulation patterns, state management strategies, and accessibility delegation protocols across Valence components.`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`core-architectural-principles`,children:`Core Architectural Principles`}),`
`,(0,c.jsx)(r.p,{children:`Valence Web Components adhere to four architectural tenets to guarantee cross-browser compatibility, framework-agnostic integration, and strict design token encapsulation.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Principle`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Implementation Standard`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Architectural Purpose`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Shadow DOM Encapsulation`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:(0,c.jsx)(r.code,{children:`this.attachShadow({ mode: 'open' })`})})}),(0,c.jsx)(`td`,{children:`Isolates internal DOM structure and prevents application CSS leakages.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Sub-Atomic Property Overrides`})}),(0,c.jsx)(`td`,{children:(0,c.jsxs)(`code`,{children:[`var(--custom-`,(0,c.jsx)(r.em,{children:`, var(--token-`}),`))`]})}),(0,c.jsx)(`td`,{children:`Allows component instance customization without breaking design token encapsulation.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Root Class Reflection`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`MutationObserver`}),` on `,(0,c.jsx)(`code`,{children:`document.documentElement`})]}),(0,c.jsxs)(`td`,{children:[`Bypasses lack of `,(0,c.jsx)(`code`,{children:`:host-context()`}),` support in Safari/WebKit browsers.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`ARIA Delegation & Scrubbing`})}),(0,c.jsx)(`td`,{children:`Attribute delegation to internal focusable nodes`}),(0,c.jsxs)(`td`,{children:[`Prevents `,(0,c.jsx)(`code`,{children:`aria-prohibited-attr`}),` violations on custom element host tags.`]})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`shadow-dom--css-token-encapsulation`,children:`Shadow DOM & CSS Token Encapsulation`}),`
`,(0,c.jsxs)(r.p,{children:[`Components consume scoped CSS via template literal injection or imported stylesheets. CSS custom variables cascade through the Shadow root boundary, allowing global sub-atomic tokens (`,(0,c.jsx)(r.code,{children:`--color-*`}),`, `,(0,c.jsx)(r.code,{children:`--space-*`}),`, `,(0,c.jsx)(r.code,{children:`--radius-*`}),`) to style internal shadow trees seamlessly.`]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-fallback-override-pattern`,children:`Sub-Atomic Fallback Override Pattern`}),`
`,(0,c.jsx)(r.p,{children:`To permit one-off customizations (or Storybook Control overrides) while maintaining token fallback integrity, component styles consume fallback variables:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* Custom background override with design token default */
.button-primary {
  background: var(--custom-bg, var(--color-black));
  border-radius: var(--custom-radius, var(--radius-pill));
  border: var(--custom-border-width, var(--border-width-thin)) 
          var(--border-style-solid) 
          var(--custom-border-color, var(--color-black));
}

`})}),`
`,(0,c.jsx)(r.h2,{id:`cross-browser-accessibility--theme-reflection`,children:`Cross-Browser Accessibility & Theme Reflection`}),`
`,(0,c.jsxs)(r.p,{children:[`The CSS pseudo-class `,(0,c.jsx)(r.code,{children:`:host-context()`}),` is unsupported in Safari and WebKit environments. To guarantee universal compatibility across Chrome, Safari, and Firefox, Web Components observe class mutations on `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` and reflect active accessibility modes directly onto host attributes.`]}),`
`,(0,c.jsx)(r.h3,{id:`mutationobserver-sync-pattern`,children:`MutationObserver Sync Pattern`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`_observeRootAccessibility() {
  const root = this.ownerDocument.documentElement;

  const sync = () => {
    this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
    this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
    this.toggleAttribute('a11y-dyslexia', root.classList.contains('a11y-dyslexia'));
    this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
  };

  sync(); // Initial execution on mount

  this._themeObserver = new MutationObserver(sync);
  this._themeObserver.observe(root, {
    attributes: true,
    attributeFilter: ['class'],
  });
}

disconnectedCallback() {
  if (this._themeObserver) {
    this._themeObserver.disconnect();
  }
}

`})}),`
`,(0,c.jsx)(r.h3,{id:`host-attribute-styling-pattern`,children:`Host Attribute Styling Pattern`}),`
`,(0,c.jsxs)(r.p,{children:[`Components target boolean host attributes within internal stylesheets rather than relying on `,(0,c.jsx)(r.code,{children:`:host-context()`}),`:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* Dark mode floating element states */
:host([a11y-dark-mode]) .variant-floating {
  background: var(--custom-bg, var(--color-player-bg, #101218)) !important;
  color: var(--color-white) !important;          
  border: var(--border-width-medium) var(--border-style-solid) var(--color-surface-border) !important;
  box-shadow: var(--shadow-none) !important;
}
:host([a11y-dark-mode]) .variant-floating:hover:not(:disabled) {
  background-color: var(--custom-hover-bg, #1C1C1E) !important;
  border-color: var(--color-white) !important;
}

/* Dyslexia mode overrides */
:host([a11y-dyslexia]) button {
  font-family: "Comic Sans MS", "Comic Sans", cursive, sans-serif !important;
  letter-spacing: 0.05em !important;
  word-spacing: 0.1em !important;
}
`})}),`
`,(0,c.jsx)(r.h2,{id:`aria-delegation--host-attribute-scrubbing`,children:`ARIA Delegation & Host Attribute Scrubbing`}),`
`,(0,c.jsxs)(r.p,{children:[`When generic Web Component tags receive descriptive properties like `,(0,c.jsx)(r.code,{children:`aria-label`}),`, leaving these attributes on the outer host element can trigger accessibility compliance errors (`,(0,c.jsx)(r.code,{children:`aria-prohibited-attr`}),`).`]}),`
`,(0,c.jsx)(r.p,{children:`Valence components delegate ARIA properties to internal focusable nodes and scrub the host tag during lifecycle rendering updates.`}),`
`,(0,c.jsx)(r.h3,{id:`aria-delegation-lifecycle-pattern`,children:`ARIA Delegation Lifecycle Pattern`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`updateAttributes() {
  const ariaLabel = this.getAttribute('aria-label');
  const disabled = this.hasAttribute('disabled');

  if (this.buttonEl) {
    this.buttonEl.disabled = disabled;
  }

  // Delegate aria-label to internal primitive and scrub host element
  if (ariaLabel) {
    if (this.buttonEl) {
      this.buttonEl.setAttribute('aria-label', ariaLabel);
    }
    this.removeAttribute('aria-label'); // Keeps outer host DOM compliant
  }
}

`})}),`
`,(0,c.jsx)(r.h2,{id:`layout--slot-hygiene`,children:`Layout & Slot Hygiene`}),`
`,(0,c.jsx)(r.p,{children:`To prevent unwanted whitespace or layout shifts caused by empty text nodes between HTML slot tags, component template rendering strings are compressed without extraneous whitespace surrounding shadow DOM primitives:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`constructor() {
  super();
  this.attachShadow({ mode: 'open' });
  
  // Compressed template string prevents ghost text nodes inside Shadow DOM layouts
  this.shadowRoot.innerHTML = \`<style>\${css}</style><button type="button"><ds-icon class="btn-icon" style="display: none;"></ds-icon><slot></slot></button>\`;
}

`})}),`
`,(0,c.jsx)(r.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Memory Management`}),`: Always call `,(0,c.jsx)(r.code,{children:`this._themeObserver.disconnect()`}),` inside `,(0,c.jsx)(r.code,{children:`disconnectedCallback()`}),` to prevent memory leaks when components unmount.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Observed Attributes Syncing`}),`: List core properties (`,(0,c.jsx)(r.code,{children:`variant`}),`, `,(0,c.jsx)(r.code,{children:`disabled`}),`, `,(0,c.jsx)(r.code,{children:`aria-label`}),`, `,(0,c.jsx)(r.code,{children:`icon`}),`) inside `,(0,c.jsx)(r.code,{children:`static get observedAttributes()`}),` and trigger `,(0,c.jsx)(r.code,{children:`updateAttributes()`}),` on change.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Universal Safari Support`}),`: Never use `,(0,c.jsx)(r.code,{children:`:host-context()`}),`. Always reflect root accessibility modifier classes to host boolean attributes (`,(0,c.jsx)(r.code,{children:`:host([a11y-*])`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Clean Shadow DOM`}),`: Always delegate host accessibility attributes (`,(0,c.jsx)(r.code,{children:`aria-label`}),`) down to native interactive primitives (`,(0,c.jsx)(r.code,{children:`<button>`}),`, `,(0,c.jsx)(r.code,{children:`<input>`}),`) and remove them from the host wrapper tag.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};