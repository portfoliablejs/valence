import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Sub-atomic/Stateography`}),`
`,(0,c.jsx)(r.h1,{id:`stateography`,children:`Stateography`}),`
`,(0,c.jsx)(r.p,{children:`The Stateography system governs interactive behavior, visual state transitions, and accessibility attribute mapping across Valence components. Standardizing state representation ensures predictable user interactions, seamless Shadow DOM attribute reflection, and full compliance with WCAG AA/AAA guidelines.`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`interactive-state-scale`,children:`Interactive State Scale`}),`
`,(0,c.jsx)(r.p,{children:`Valence components support six standardized interaction states to provide immediate visual feedback for user actions.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`State`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`CSS Selector / Variable`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Visual Behavior / Token Fallback`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Usage Guidelines`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Rest (Default)`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`:host`}),` / baseline element`]}),(0,c.jsxs)(`td`,{children:[`Default component tokens (e.g., `,(0,c.jsx)(`code`,{children:`var(--color-black)`}),`, `,(0,c.jsx)(`code`,{children:`var(--opacity-solid)`}),`).`]}),(0,c.jsx)(`td`,{children:`Unengaged resting state of an interactive control.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Hover`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`:hover:not(:disabled)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--custom-hover-bg, rgba(0, 0, 0, var(--opacity-faint)))`})}),(0,c.jsx)(`td`,{children:`Pointer cursor feedback when hovering over interactive targets.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Active / Pressed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`:active:not(:disabled)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`transform: scale(var(--btn-active-scale, 0.95))`})}),(0,c.jsx)(`td`,{children:`Tactile push/press feedback during mouse or touch down events.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Focus (Keyboard)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`:focus-visible`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`outline: var(--a11y-focus-outline, 3px solid var(--color-accent))`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`outline-offset: var(--a11y-focus-offset, 2px)`})]}),(0,c.jsx)(`td`,{children:`High-visibility focus indicator reserved exclusively for keyboard navigation.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Disabled`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`:disabled`}),` / `,(0,c.jsx)(`code`,{children:`:host([disabled])`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`opacity: var(--opacity-disabled, 0.38); cursor: not-allowed !important;`})}),(0,c.jsxs)(`td`,{children:[`Non-actionable state suppressing interactive pointer actions while rendering `,(0,c.jsx)(`code`,{children:`cursor: not-allowed`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Loading / Busy`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`:host([loading])`}),` / `,(0,c.jsx)(`code`,{children:`[aria-busy="true"]`})]}),(0,c.jsx)(`td`,{children:`Spinner replacement or translucent mask; pointer interaction locked.`}),(0,c.jsx)(`td`,{children:`Asynchronous processing state awaiting server response or async completion.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`dark-mode--high-contrast-interactive-states`,children:`Dark Mode & High Contrast Interactive States`}),`
`,(0,c.jsx)(r.p,{children:`In addition to Light Mode defaults, components must explicitly declare accessible hover and active state transitions under dark and high-contrast environments to preserve visual contrast and affordance.`}),`
`,(0,c.jsxs)(r.h3,{id:`dark-mode-state-scale-hosta11y-dark-mode`,children:[`Dark Mode State Scale (`,(0,c.jsx)(r.code,{children:`:host([a11y-dark-mode])`}),`)`]}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Variant`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Rest State`}),(0,c.jsxs)(`th`,{style:{textAlign:`left`},children:[`Hover State (`,(0,c.jsx)(`code`,{children:`:hover:not(:disabled)`}),`)`]}),(0,c.jsxs)(`th`,{style:{textAlign:`left`},children:[`Active State (`,(0,c.jsx)(`code`,{children:`:active:not(:disabled)`}),`)`]})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Primary`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`bg: var(--color-white)`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`text: #101218`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`bg: var(--color-gray-xlight)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`bg: var(--color-gray-light)`})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Secondary`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`bg: transparent`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`border: var(--color-surface-border)`})]}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`bg: rgba(255, 255, 255, 0.16)`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`border: var(--color-white)`})]}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`bg: rgba(255, 255, 255, 0.28)`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`border: var(--color-white)`})]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Text / Icon`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`text: var(--color-text-secondary)`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`bg: var(--color-overlay-light)`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`text: var(--color-white)`})]}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`bg: rgba(255, 255, 255, 0.22)`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`text: var(--color-white)`})]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Floating`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`bg: var(--color-player-bg)`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`text: var(--color-white)`})]}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`bg: #1C1C1E`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`border: var(--color-white)`})]}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`bg: #323232`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`border: var(--color-white)`})]})]})]})]}),`
`,(0,c.jsxs)(r.h3,{id:`high-contrast-mode-state-scale-hosta11y-high-contrast`,children:[`High Contrast Mode State Scale (`,(0,c.jsx)(r.code,{children:`:host([a11y-high-contrast])`}),`)`]}),`
`,(0,c.jsx)(r.p,{children:`High Contrast Mode guarantees binary 21:1 WCAG AAA contrast ratio using solid fill inversions and explicit outline rings.`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* High Contrast Primary State Colors (Solid Inversion) */
:host([a11y-high-contrast]) .variant-primary {
  background: #FFFFFF !important;
  color: #000000 !important;
  border: var(--border-width-medium) var(--border-style-solid) #FFFFFF !important;
  box-shadow: var(--shadow-none) !important;
}
:host([a11y-high-contrast]) .variant-primary:hover:not(:disabled) {
  background: #000000 !important;
  color: #FFFFFF !important;
  border-color: #FFFFFF !important;
  outline: 2px solid #FFFFFF !important;
  outline-offset: 1px;
}
:host([a11y-high-contrast]) .variant-primary:active:not(:disabled) {
  background: #FFFFFF !important;
  color: #000000 !important;
  outline: 4px solid #FFFFFF !important;
  outline-offset: 2px;
}

/* High Contrast Hover (Inverse Fill) */
:host([a11y-high-contrast]) .variant-secondary:hover:not(:disabled),
:host([a11y-high-contrast]) .variant-text:hover:not(:disabled),
:host([a11y-high-contrast]) .variant-icon:hover:not(:disabled),
:host([a11y-high-contrast]) .variant-floating:hover:not(:disabled) {
  background: #FFFFFF !important;
  color: #000000 !important;
  border-color: #FFFFFF !important;
}

/* High Contrast Disabled State */
:host([a11y-high-contrast]) button:disabled,
:host([a11y-high-contrast][disabled]) button {
  opacity: 0.5 !important;
  border-style: dashed !important;
  border-color: #FFFFFF !important;
  color: #FFFFFF !important;
  background: transparent !important;
}

`})}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--aria-state-mapping`,children:`Accessibility & ARIA State Mapping`}),`
`,(0,c.jsx)(r.p,{children:`Interactive states must be reflected semantically to assistive technologies via standardized ARIA attributes and host-level DOM attributes.`}),`
`,(0,c.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage Guidelines`}),`
`,(0,c.jsx)(r.p,{children:`Always construct Web Component stylesheets using state-aware design tokens and fallback variables. Ensure state changes incorporate choreography timing tokens.`}),`
`,(0,c.jsx)(r.h3,{id:`component-css-state-implementation`,children:`Component CSS State Implementation`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* Ensure the host tag itself displays cursor: not-allowed when disabled */
:host([disabled]) {
  cursor: not-allowed !important;
}

/* Base resting structure */
button {
  background: var(--custom-bg, var(--color-black));
  transition: var(--component-transition, 
              transform var(--anim-fast) var(--ease-fluid),
              background-color var(--anim-fast) var(--ease-fluid),
              opacity var(--anim-fast) var(--ease-fluid));
}

/* Hover state override */
button:hover:not(:disabled) {
  background-color: var(--custom-hover-bg, rgba(0, 0, 0, var(--opacity-faint)));
}

/* Active / Pressed state feedback */
button:active:not(:disabled) {
  transform: scale(var(--btn-active-scale, 0.95));
  background-color: var(--custom-active-bg, rgba(0, 0, 0, 0.18));
}

/* Focus-visible ring */
button:focus-visible {
  outline: var(--a11y-focus-outline, 3px solid var(--color-accent));
  outline-offset: var(--a11y-focus-offset, 2px);
  border-radius: var(--radius-sm);
}

/* Disabled state */
button:disabled,
:host([disabled]) button {
  opacity: var(--opacity-disabled, 0.38);
  cursor: not-allowed !important;
}


`})}),`
`,(0,c.jsx)(r.h2,{id:`shadow-dom-attribute-reflection--state-synchronization`,children:`Shadow DOM Attribute Reflection & State Synchronization`}),`
`,(0,c.jsxs)(r.p,{children:[`Because pseudo-classes like `,(0,c.jsx)(r.code,{children:`:host-context()`}),` are unsupported in WebKit/Safari, Web Components must observe global document modifier classes and reflect them directly onto host state attributes.`]}),`
`,(0,c.jsx)(r.h3,{id:`javascript-state-synchronization-pattern`,children:`JavaScript State Synchronization Pattern`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`export class BaseComponent extends HTMLElement {
  connectedCallback() {
    this._observeRootAccessibility();
    this.updateAttributes();
  }

  _observeRootAccessibility() {
    const root = this.ownerDocument.documentElement;
    const sync = () => {
      this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
      this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
      this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
    };

    sync();
    this._themeObserver = new MutationObserver(sync);
    this._themeObserver.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  updateAttributes() {
    const ariaLabel = this.getAttribute('aria-label');
    const disabled = this.hasAttribute('disabled');

    if (this.internalControl) {
      this.internalControl.disabled = disabled;
    }

    // ARIA Label Delegation & Host Scrubbing Pattern
    if (ariaLabel && this.internalControl) {
      this.internalControl.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label'); // Scrub host to prevent duplicate or prohibited attributes
    }
  }
}


`})}),`
`,(0,c.jsx)(r.h2,{id:`sub-atomic-property-overrides`,children:`Sub-Atomic Property Overrides`}),`
`,(0,c.jsx)(r.p,{children:`Stateography allows runtime hover and active customizations using sub-atomic variable overrides:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.variant-interactive {
  /* Dynamic hover and active background overrides with token fallbacks */
  background-color: var(--custom-bg, var(--color-black));
}

.variant-interactive:hover:not(:disabled) {
  background-color: var(--custom-hover-bg, var(--color-gray-dark));
}

.variant-interactive:active:not(:disabled) {
  background-color: var(--custom-active-bg, var(--color-black));
}


`})}),`
`,(0,c.jsx)(r.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Explicit Focus Isolation`}),`: Never use `,(0,c.jsx)(r.code,{children:`:focus`}),` alone for interactive outlines; rely on `,(0,c.jsx)(r.code,{children:`:focus-visible`}),` so mouse clicks do not trigger focus rings while preserving keyboard visibility.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Disabled Cursor Preservation`}),`: Avoid `,(0,c.jsx)(r.code,{children:`pointer-events: none`}),` on internal interactive primitives (`,(0,c.jsx)(r.code,{children:`<button>`}),`) so the browser can capture mouse hover and display `,(0,c.jsx)(r.code,{children:`cursor: not-allowed !important;`}),`. Native `,(0,c.jsx)(r.code,{children:`disabled`}),` attributes automatically prevent click and keypress execution.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Host Scrubbing`}),`: When accepting accessible labels on custom element host wrappers, delegate the attribute to the internal native primitive and scrub the host tag.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Motion Suppression Compliance`}),`: Ensure active scale transforms (e.g., `,(0,c.jsx)(r.code,{children:`--btn-active-scale`}),`) evaluate to `,(0,c.jsx)(r.code,{children:`1`}),` when `,(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),` is active.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};