import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Contributing/Documenting: Components`}),`
`,(0,c.jsx)(r.h1,{id:`component-documentation--source-structure-standards`,children:`Component Documentation & Source Structure Standards`}),`
`,(0,c.jsx)(r.p,{children:`This document defines the architectural guidelines, file organization rules, design token integration standards, and Storybook best practices required for documenting Valence design system components.`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`1-anatomy-of-a-standard-component-file-set`,children:`1. Anatomy of a Standard Component File Set`}),`
`,(0,c.jsxs)(r.p,{children:[`Every Atomic design system component exists as a self-contained folder under its hierarchy (`,(0,c.jsx)(r.code,{children:`Atoms`}),`, `,(0,c.jsx)(r.code,{children:`Molecules`}),`, `,(0,c.jsx)(r.code,{children:`Organisms`}),`). Each component folder consists of three core files following a strict naming convention:`]}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`File Pattern`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Role & Responsibility`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Primary Standards Reference`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:(0,c.jsx)(r.code,{children:`[component-name].css`})})}),(0,c.jsx)(`td`,{children:`Encapsulated Shadow DOM layout, variants, states, and accessibility themes.`}),(0,c.jsx)(`td`,{children:`Stateography, Chromography, Curvography, Accessibility CSS`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:(0,c.jsx)(r.code,{children:`[ComponentName].js`})})}),(0,c.jsx)(`td`,{children:`Web Component JavaScript class, attribute observed lifecycle, theme observer.`}),(0,c.jsx)(`td`,{children:`Web Component Architecture, ARIA Delegation`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:(0,c.jsx)(r.code,{children:`[ComponentName].stories.js`})})}),(0,c.jsxs)(`td`,{children:[`Storybook CSF3 configuration, Controls schema, and automated `,(0,c.jsx)(`code`,{children:`play`}),` tests.`]}),(0,c.jsx)(`td`,{children:`Storybook Testing, Autodocs Configuration`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsxs)(r.h2,{id:`2-stylesheet-structure-guidelines-css`,children:[`2. Stylesheet Structure Guidelines (`,(0,c.jsx)(r.code,{children:`*.css`}),`)`]}),`
`,(0,c.jsx)(r.p,{children:`Component stylesheets strictly consume sub-atomic design tokens to ensure full compliance across visual states, light mode, dark mode, high contrast mode, and color vision deficiency simulations.`}),`
`,(0,c.jsx)(r.h3,{id:`section-order--organization`,children:`Section Order & Organization`}),`
`,(0,c.jsx)(r.p,{children:`Component stylesheets must organize rules into logical blocks using standardised section headers:`}),`
`,(0,c.jsxs)(r.ol,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Host Geometry (`,(0,c.jsx)(r.code,{children:`:host`}),`, `,(0,c.jsx)(r.code,{children:`:host([disabled])`}),`)`]}),`: Define inline display, root positioning, and host-level disabled cursor states.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Base Primitive Structure`}),`: Structural flex properties, resets, token transitions, focus indicators, and layout gaps.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Interactive States (Stateography)`}),`: Standard `,(0,c.jsx)(r.code,{children:`:focus`}),`, `,(0,c.jsx)(r.code,{children:`:focus-visible`}),`, `,(0,c.jsx)(r.code,{children:`:hover`}),`, and `,(0,c.jsx)(r.code,{children:`:disabled`}),` rules.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Light Mode Variant Styles`}),`: Visual definitions for default surface variants (`,(0,c.jsx)(r.code,{children:`primary`}),`, `,(0,c.jsx)(r.code,{children:`secondary`}),`, `,(0,c.jsx)(r.code,{children:`text`}),`, `,(0,c.jsx)(r.code,{children:`icon`}),`, `,(0,c.jsx)(r.code,{children:`floating`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Accessibility Overrides`}),`: Dedicated attribute blocks for `,(0,c.jsx)(r.code,{children:`:host([a11y-dark-mode])`}),`, `,(0,c.jsx)(r.code,{children:`:host([a11y-high-contrast])`}),`, and `,(0,c.jsx)(r.code,{children:`:host([a11y-forced-colors])`}),` / `,(0,c.jsx)(r.code,{children:`@media (forced-colors: active)`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Typography, Motion & Vision Suppression`}),`: Dyslexia mode overrides (`,(0,c.jsx)(r.code,{children:`:host([a11y-dyslexia])`}),`), Reduced Motion suppression blocks (`,(0,c.jsx)(r.code,{children:`:host([a11y-reduce-motion])`}),`), and Colorblindness matrix compatibility.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`key-css-rules--pitfalls`,children:`Key CSS Rules & Pitfalls`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:`Disabled States & Cursors`}),`: Avoid placing `,(0,c.jsx)(r.code,{children:`pointer-events: none`}),` on internal focusable primitives (`,(0,c.jsx)(r.code,{children:`<button>`}),`, `,(0,c.jsx)(r.code,{children:`<input>`}),`) as it prevents browser hover detection and suppresses `,(0,c.jsx)(r.code,{children:`cursor: not-allowed`}),`. Rely on native `,(0,c.jsx)(r.code,{children:`disabled`}),` attributes alongside host cursor definitions:`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`:host([disabled]) {
  cursor: not-allowed !important;
}

button:disabled,
:host([disabled]) button {
  opacity: var(--opacity-disabled, 0.38);
  cursor: not-allowed !important;
}
`})}),`
`,(0,c.jsxs)(r.blockquote,{children:[`
`,(0,c.jsxs)(r.p,{children:[`Note: Declare attribute-reflected host selectors and native `,(0,c.jsx)(r.code,{children:`@media`}),` queries in separate blocks to avoid CSS parsing errors)*:`]}),`
`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* Forced Colors Mode Override Pattern */

/* 1. Attribute Reflected State (Storybook / DOM Toggle) */
:host([a11y-forced-colors]) .variant-primary {
  forced-color-adjust: none !important;
  background: Highlight !important;
  color: HighlightText !important;
  border: var(--border-width-thin) var(--border-style-solid) Highlight !important;
}

/* 2. Native OS Media Query */
@media (forced-colors: active) {
  .variant-primary {
    forced-color-adjust: none !important;
    background: Highlight !important;
    color: HighlightText !important;
    border: var(--border-width-thin) var(--border-style-solid) Highlight !important;
  }
}

`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.p,{children:[`Storybook provides global toolbar controls that attach root classes onto `,(0,c.jsx)(r.code,{children:`document.documentElement`}),`. These trigger real-time simulations for accessibility modes and visual debugging utilities:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Theme & Visual Modes`}),`: Dark mode (`,(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`), High Contrast mode (`,(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`), and Forced Colors mode (`,(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Reading & Navigation Preferences`}),`: Large Text (`,(0,c.jsx)(r.code,{children:`.a11y-large-text`}),`), Dyslexia font (`,(0,c.jsx)(r.code,{children:`.a11y-dyslexia`}),`), Reduced Motion (`,(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`), and High-Visibility Focus Rings (`,(0,c.jsx)(r.code,{children:`.a11y-focus-mode`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Assistive Technology Debuggers`}),`: Live Region Debugger (`,(0,c.jsx)(r.code,{children:`.a11y-show-live-regions`}),`) visually highlights `,(0,c.jsx)(r.code,{children:`[aria-live]`}),`, `,(0,c.jsx)(r.code,{children:`[role="alert"]`}),`, and `,(0,c.jsx)(r.code,{children:`[role="status"]`}),` elements with a dashed pink outline (`,(0,c.jsx)(r.code,{children:`#ff007f`}),`) and programmatic politeness badge to inspect dynamic screen reader announcements during audits.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Vision Deficiency Simulators`}),`: SVG color matrix transformation filters for Deuteranopia, Protanopia, Tritanopia, Achromatopsia, and Low Vision Blur.`]}),`
`]}),`
`,(0,c.jsxs)(r.h2,{id:`4-web-component-implementation-guidelines-js`,children:[`4. Web Component Implementation Guidelines (`,(0,c.jsx)(r.code,{children:`*.js`}),`)`]}),`
`,(0,c.jsx)(r.p,{children:`Web Components encapsulate Shadow DOM boundaries and observe global DOM mutations to pass root accessibility states down to shadow nodes.`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Dynamic Announcements & Live Regions`}),`: Components that render dynamic status updates or notifications (such as toasts, alerts, or progress bars) must explicitly define `,(0,c.jsx)(r.code,{children:`role="status"`}),` / `,(0,c.jsx)(r.code,{children:`aria-live="polite"`}),` or `,(0,c.jsx)(r.code,{children:`role="alert"`}),` / `,(0,c.jsx)(r.code,{children:`aria-live="assertive"`}),` on their internal Shadow DOM wrapper:`]}),`
`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`// For polite status updates (e.g., toast notification, search results count)
<div class="toast-wrapper" role="status" aria-live="polite">
  <slot></slot>
</div>

`})}),`
`,(0,c.jsx)(r.h3,{id:`component-class-template-requirements`,children:`Component Class Template Requirements`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Observed Attributes`}),`: Core state attributes must be explicitly declared in `,(0,c.jsx)(r.code,{children:`static get observedAttributes()`}),`:`]}),`
`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`static get observedAttributes() {
  return ['variant', 'aria-label', 'disabled', 'icon', 'icon-position'];
}

`})}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Layout Slot Hygiene`}),`: Template strings inside `,(0,c.jsx)(r.code,{children:`constructor()`}),` must be compressed to eliminate whitespace text nodes around slots and icons:`]}),`
`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`constructor() {
  super();
  this.attachShadow({ mode: 'open' });
  this.shadowRoot.innerHTML = \`<style>\${css}</style><button type="button"><ds-icon class="btn-icon" style="display: none;"></ds-icon><slot></slot></button>\`;
}

`})}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Accessibility Root Reflection Observer`}),`: Web Components observe root `,(0,c.jsx)(r.code,{children:`<html>`}),` class changes via a `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` to reflect boolean attributes onto the host element (including `,(0,c.jsx)(r.code,{children:`a11y-forced-colors`}),`), bypassing Safari's lack of `,(0,c.jsx)(r.code,{children:`:host-context()`}),` support:`]}),`
`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`_observeRootAccessibility() {
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

`})}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`ARIA Delegation & Host Scrubbing`}),`: Descriptive ARIA properties like `,(0,c.jsx)(r.code,{children:`aria-label`}),` applied to custom host elements must be delegated to the internal focusable control and scrubbed from the host wrapper tag to prevent `,(0,c.jsx)(r.code,{children:`aria-prohibited-attr`}),` validation errors:`]}),`
`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`if (ariaLabel) {
  this.buttonEl.setAttribute('aria-label', ariaLabel);
  this.removeAttribute('aria-label');
}

`})}),`
`,(0,c.jsxs)(r.h2,{id:`5-storybook-configuration--testing-standards-storiesjs`,children:[`5. Storybook Configuration & Testing Standards (`,(0,c.jsx)(r.code,{children:`*.stories.js`}),`)`]}),`
`,(0,c.jsx)(r.p,{children:`Stories document component usage options, provide interactive Controls, and execute automated interaction testing.`}),`
`,(0,c.jsx)(r.h3,{id:`story-metadata--argtypes-layout`,children:`Story Metadata & ArgTypes Layout`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Meta Configuration`}),`: Enable `,(0,c.jsx)(r.code,{children:`autodocs`}),` and centered layout decorators.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Categorized ArgTypes Schema`}),`: Group Storybook controls into clear category and subcategory tables with a clear `,(0,c.jsx)(r.code,{children:`description`}),` for `,(0,c.jsx)(r.strong,{children:`every Story`}),`:`]}),`
`]}),`
`,(0,c.jsxs)(r.ol,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Core & Variant Controls`}),`: Variant selectors, label text, ARIA input strings, disabled toggles.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Sub-Atomic Props`}),`: Dynamic CSS custom property overrides (`,(0,c.jsx)(r.code,{children:`radius`}),`, `,(0,c.jsx)(r.code,{children:`backgroundColor`}),`, `,(0,c.jsx)(r.code,{children:`borderWidth`}),`, `,(0,c.jsx)(r.code,{children:`borderColor`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Event Listeners`}),`: Actions mapped to event triggers (like `,(0,c.jsx)(r.code,{children:`onClick`}),`).`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`storybook-play-functions--interaction-testing`,children:`Storybook Play Functions & Interaction Testing`}),`
`,(0,c.jsxs)(r.p,{children:[`Interaction tests verify states, keyboard focus, ARIA attribute delegation, and tooltip triggers using `,(0,c.jsx)(r.code,{children:`storybook/test`}),` utilities:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`export const PrimaryButton = {
  args: {
    variant: 'primary',
    label: 'Play Video',
    hasIcon: true,
    icon: 'play',
    iconPosition: 'left',
  },
  play: async ({ canvasElement, step }) => {
    const button = canvasElement.querySelector('ds-button');

    await step('Hover button to verify interaction feedback', async () => {
      await userEvent.hover(button);
    });

    await step('Verify keyboard focus capability', async () => {
      const internalButton = button.shadowRoot.querySelector('button');
      internalButton.focus();
      expect(document.activeElement).toBe(button);
    });

    await step('Click primary action target', async () => {
      await userEvent.click(button);
    });
  },
};

`})}),`
`,(0,c.jsx)(r.h2,{id:`6-documentation-checklist-for-system-components`,children:`6. Documentation Checklist for System Components`}),`
`,(0,c.jsx)(r.p,{children:`When introducing or updating a design system component, ensure all mandatory checklist criteria are met:`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[`
`,(0,c.jsxs)(r.p,{children:[`[ ] `,(0,c.jsxs)(r.strong,{children:[`Styles (`,(0,c.jsx)(r.code,{children:`*.css`}),`)`]}),`:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[`[ ] Consumes sub-atomic variables (`,(0,c.jsx)(r.code,{children:`var(--color-*)`}),`, `,(0,c.jsx)(r.code,{children:`var(--space-*)`}),`, `,(0,c.jsx)(r.code,{children:`var(--radius-*)`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[`[ ] Implements `,(0,c.jsx)(r.code,{children:`:focus-visible`}),` with high-contrast accessibility focus rings.`]}),`
`,(0,c.jsxs)(r.li,{children:[`[ ] Declares dark mode (`,(0,c.jsx)(r.code,{children:`:host([a11y-dark-mode])`}),`) and 21:1 high contrast mode (`,(0,c.jsx)(r.code,{children:`:host([a11y-high-contrast])`}),`) state scales.`]}),`
`,(0,c.jsxs)(r.li,{children:[`[ ] Defines explicit system keywords (`,(0,c.jsx)(r.code,{children:`Canvas`}),`, `,(0,c.jsx)(r.code,{children:`CanvasText`}),`, `,(0,c.jsx)(r.code,{children:`Highlight`}),`) and `,(0,c.jsx)(r.code,{children:`forced-color-adjust: none !important`}),` under separate `,(0,c.jsx)(r.code,{children:`:host([a11y-forced-colors])`}),` and `,(0,c.jsx)(r.code,{children:`@media (forced-colors: active)`}),` blocks.`]}),`
`,(0,c.jsx)(r.li,{children:`[ ] Tested under vision deficiency simulator modes (Deuteranopia, Protanopia, Tritanopia, Achromatopsia).`}),`
`,(0,c.jsxs)(r.li,{children:[`[ ] Preserves `,(0,c.jsx)(r.code,{children:`cursor: not-allowed !important`}),` on disabled states without hiding cursors.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[`
`,(0,c.jsxs)(r.p,{children:[`[ ] `,(0,c.jsxs)(r.strong,{children:[`JavaScript (`,(0,c.jsx)(r.code,{children:`*.js`}),`)`]}),`:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[`[ ] `,(0,c.jsx)(r.code,{children:`observedAttributes`}),` syncing configured.`]}),`
`,(0,c.jsx)(r.li,{children:`[ ] Shadow DOM HTML strings compressed onto a single line without extraneous whitespace.`}),`
`,(0,c.jsxs)(r.li,{children:[`[ ] `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` active on `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` for cross-browser WebKit support.`]}),`
`,(0,c.jsxs)(r.li,{children:[`[ ] Reflects `,(0,c.jsx)(r.code,{children:`a11y-forced-colors`}),` attribute in `,(0,c.jsx)(r.code,{children:`_observeRootAccessibility()`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[`[ ] `,(0,c.jsx)(r.code,{children:`aria-label`}),` delegated down to internal primitives and scrubbed from host tag.`]}),`
`,(0,c.jsxs)(r.li,{children:[`[ ] Defines `,(0,c.jsx)(r.code,{children:`role="status"`}),` (`,(0,c.jsx)(r.code,{children:`aria-live="polite"`}),`) or `,(0,c.jsx)(r.code,{children:`role="alert"`}),` (`,(0,c.jsx)(r.code,{children:`aria-live="assertive"`}),`) on dynamic status/notification wrappers.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[`
`,(0,c.jsxs)(r.p,{children:[`[ ] `,(0,c.jsxs)(r.strong,{children:[`Storybook (`,(0,c.jsx)(r.code,{children:`*.stories.js`}),`)`]}),`:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[`[ ] `,(0,c.jsx)(r.code,{children:`tags: ['autodocs']`}),` enabled.`]}),`
`,(0,c.jsx)(r.li,{children:`[ ] Sub-atomic control overrides configured.`}),`
`,(0,c.jsxs)(r.li,{children:[`[ ] Automated `,(0,c.jsx)(r.code,{children:`play`}),` function tests cover hover, focus, and click steps.`]}),`
`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};