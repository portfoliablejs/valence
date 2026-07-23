import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Sub-atomic/Accessibility`}),`
`,(0,c.jsx)(r.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,c.jsxs)(r.p,{children:[`The Accessibility system provides global theme overrides, high-contrast tokens, typography adjustments, motion suppressions, and focus indicators across Valence. Applied as root-level modifier classes on the `,(0,c.jsx)(r.code,{children:`<html>`}),` element, these accessibility features ensure the platform remains inclusive, WCAG AA/AAA compliant, and adaptable to individual user preferences.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`color--contrast-system`,children:`Color & Contrast System`}),`
`,(0,c.jsxs)(r.p,{children:[`To eliminate theme complexity and prevent color transition drift, theme overrides alter four core semantic roles (`,(0,c.jsx)(r.code,{children:`--color-bg`}),`, `,(0,c.jsx)(r.code,{children:`--color-surface`}),`, `,(0,c.jsx)(r.code,{children:`--color-text-primary`}),`, and `,(0,c.jsx)(r.code,{children:`--color-surface-border`}),`) rather than individual component primitives.`]}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Modifier Class`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Overridden Tokens`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Values`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Compliance & Usage Guidelines`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.a11y-dark-mode`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`--color-bg`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`--color-surface`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`--color-text-primary`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`--color-text-secondary`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`--color-surface-border`})]}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`#101218`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`#1C1C1E`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`#FFFFFF`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`#F5F5F5`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`rgba(255, 255, 255, 0.12)`})]}),(0,c.jsx)(`td`,{children:`WCAG AA compliant dark mode environment designed for low-light conditions and eye-strain reduction.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.a11y-high-contrast`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`--color-bg`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`--color-surface`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`--color-text-primary`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`--color-surface-border`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`--border-width-thin`})]}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`#000000`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`#000000`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`#FFFFFF`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`#FFFFFF`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`2px`})]}),(0,c.jsx)(`td`,{children:`Maximum WCAG AAA binary contrast ratio (21:1) using solid white borders and black surfaces for low-vision users.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`typography--reading-preferences`,children:`Typography & Reading Preferences`}),`
`,(0,c.jsx)(r.p,{children:`Typography modifiers adjust scale multipliers and font families to aid users with dyslexia or low vision.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Modifier Class`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Target Elements`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Property Overrides`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Usage Guidelines`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.a11y-large-text`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`h1`}),`, `,(0,c.jsx)(`code`,{children:`h2`}),`, `,(0,c.jsx)(`code`,{children:`h3`}),`, `,(0,c.jsx)(`code`,{children:`.p1`}),`, `,(0,c.jsx)(`code`,{children:`.p2`})]}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`font-size: 48px / 40px / 28px / 22px / 20px`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`--font-scale-multiplier: 1.25`})]}),(0,c.jsx)(`td`,{children:`Increases baseline typography hierarchy by 25% across heading and body levels for improved legibility.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.a11y-dyslexia`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`*`}),` (All elements)`]}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`font-family: "Comic Sans MS", cursive, sans-serif`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`letter-spacing: 0.05em`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`word-spacing: 0.1em`})]}),(0,c.jsx)(`td`,{children:`Applies informal, heavily weighted letterforms and increased character/word spacing to assist dyslexic readers.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`motion--focus-states`,children:`Motion & Focus States`}),`
`,(0,c.jsx)(r.p,{children:`Motion and focus state modifiers allow users to suppress vestibulocochlear motion triggers and enforce high-visibility keyboard focus indicators.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Modifier Class`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`CSS Variables / Properties`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Value`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Usage Guidelines`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.a11y-reduce-motion`})}),(0,c.jsx)(`td`,{children:(0,c.jsxs)(r.p,{children:[(0,c.jsx)(`code`,{children:`--component-transition`}),(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(`code`,{children:`--btn-active-scale`}),`, `,(0,c.jsx)(`code`,{children:`--btn-hover-scale`}),(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(`code`,{children:`animation-duration`}),`, `,(0,c.jsx)(`code`,{children:`transition-duration`}),(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(`code`,{children:`scroll-behavior`})]})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`all 0s linear !important`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`1`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`0s !important`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`auto !important`})]}),(0,c.jsx)(`td`,{children:`Forces a 0-second duration on all keyframe animations, transitions, and smooth scrolling for motion sensitivity (preventing WebKit/Safari drop bugs).`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.a11y-focus-mode`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`--a11y-focus-outline`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`--a11y-focus-offset`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`--preview-focus-outline`})]}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`4px solid var(--color-accent)`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`4px`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`4px solid var(--color-accent)`})]}),(0,c.jsx)(`td`,{children:`Forces prominent 4px high-visibility focus rings on all interactive components during keyboard navigation.`})]})]})]}),`
`,(0,c.jsxs)(r.blockquote,{children:[`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:`Note`}),`: `,(0,c.jsx)(r.code,{children:`--preview-focus-outline`}),` is strictly for previewing focus states inside Storybook iframe viewports.`]}),`
`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsxs)(r.h3,{id:`screen-reader-live-region-debugging-a11y-show-live-regions`,children:[`Screen Reader Live Region Debugging (`,(0,c.jsx)(r.code,{children:`.a11y-show-live-regions`}),`)`]}),`
`,(0,c.jsxs)(r.p,{children:[`Dynamic UI announcements (such as toast notifications, form validation summaries, and status updates) rely on `,(0,c.jsx)(r.code,{children:`aria-live`}),`, `,(0,c.jsx)(r.code,{children:`role="alert"`}),`, or `,(0,c.jsx)(r.code,{children:`role="status"`}),` to inform assistive technology users of page changes without shifting focus.`]}),`
`,(0,c.jsxs)(r.p,{children:[`Because live regions are non-visual by nature, enabling `,(0,c.jsx)(r.code,{children:`.a11y-show-live-regions`}),` in Storybook draws a `,(0,c.jsx)(r.strong,{children:`2px dashed pink outline`}),` (`,(0,c.jsx)(r.code,{children:`#ff007f`}),`) around all live region containers and overlays a programmatic label showing the active politeness setting (`,(0,c.jsx)(r.code,{children:`aria-live="polite"`}),` vs `,(0,c.jsx)(r.code,{children:`aria-live="assertive"`}),`).`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<!-- Example rendered live region under debugger mode -->
<div role="status" aria-live="polite" class="toast-container">
  <!-- Highlighted with 2px dashed #ff007f outline and "📢 ARIA-LIVE (polite)" badge -->
  Profile updated successfully.
</div>
`})}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage Guidelines`}),`
`,(0,c.jsxs)(r.p,{children:[`Accessibility modifier classes are applied directly to the root `,(0,c.jsx)(r.code,{children:`<html>`}),` node (`,(0,c.jsx)(r.code,{children:`document.documentElement`}),`). Multiple accessibility modifiers can be active simultaneously (e.g., combining `,(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),` with `,(0,c.jsx)(r.code,{children:`.a11y-large-text`}),` and `,(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`).`]}),`
`,(0,c.jsx)(r.h3,{id:`toggling-accessibility-modes-in-javascript`,children:`Toggling Accessibility Modes in JavaScript`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`// Enable Dark Mode & Large Text Mode
document.documentElement.classList.add('a11y-dark-mode', 'a11y-large-text');

// Enable High-Visibility Focus Mode
document.documentElement.classList.add('a11y-focus-mode');

// Disable Reduced Motion
document.documentElement.classList.remove('a11y-reduce-motion');

`})}),`
`,(0,c.jsx)(r.h2,{id:`cross-browser-web-component-support`,children:`Cross-Browser Web Component Support`}),`
`,(0,c.jsxs)(r.p,{children:[`CSS pseudo-class `,(0,c.jsx)(r.code,{children:`:host-context()`}),` is unsupported in WebKit (Safari / iOS) and causes style rules to fail silently. To achieve universal compatibility across Chrome, Safari, and Firefox, Web Components observe accessibility classes on `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` using a `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` and reflect them down as boolean attributes onto host elements (`,(0,c.jsx)(r.code,{children:`<ds-button a11y-dark-mode>`}),`).`]}),`
`,(0,c.jsxs)(r.blockquote,{children:[`
`,(0,c.jsxs)(r.p,{children:[`CSS within the Shadow DOM then targets standard `,(0,c.jsx)(r.code,{children:`:host([a11y-*])`}),` attribute selectors.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`synchronizing-root-accessibility-to-host-attributes`,children:`Synchronizing Root Accessibility to Host Attributes`}),`
`,(0,c.jsx)(r.p,{children:`Web Components set up an observer to reflect root modifier classes across all six system states automatically:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`_observeRootAccessibility() {
  const root = this.ownerDocument.documentElement;

  const sync = () => {
    this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
    this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
    this.toggleAttribute('a11y-large-text', root.classList.contains('a11y-large-text'));
    this.toggleAttribute('a11y-dyslexia', root.classList.contains('a11y-dyslexia'));
    this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
    this.toggleAttribute('a11y-focus-mode', root.classList.contains('a11y-focus-mode'));
  };

  sync(); // Initial execution on mount

  this._themeObserver = new MutationObserver(sync);
  this._themeObserver.observe(root, {
    attributes: true,
    attributeFilter: ['class'],
  });
}

`})}),`
`,(0,c.jsx)(r.h3,{id:`targeting-accessibility-states-in-component-css`,children:`Targeting Accessibility States in Component CSS`}),`
`,(0,c.jsxs)(r.p,{children:[`Target host attributes inside internal component stylesheets rather than using `,(0,c.jsx)(r.code,{children:`:host-context()`}),`:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* Dark mode primary button state transition */
:host([a11y-dark-mode]) .variant-primary {
  background: var(--custom-bg, var(--color-white));
  color: var(--color-player-bg, #101218);
}
:host([a11y-dark-mode]) .variant-primary:hover:not(:disabled) {
  background-color: var(--custom-hover-bg, var(--color-gray-xlight));
}

/* High Contrast mode interactive inversion on hover */
:host([a11y-high-contrast]) .variant-secondary:hover:not(:disabled),
:host([a11y-high-contrast]) .variant-floating:hover:not(:disabled) {
  background: #FFFFFF !important;
  color: #000000 !important;
  border-color: #FFFFFF !important;
}

/* Dyslexia mode typography overrides */
:host([a11y-dyslexia]) button {
  font-family: "Comic Sans MS", cursive, sans-serif !important;
  letter-spacing: 0.05em !important;
  word-spacing: 0.1em !important;
}
`})}),`
`,(0,c.jsxs)(r.p,{children:[`Target host attributes inside internal component stylesheets rather than using `,(0,c.jsx)(r.code,{children:`:host-context()`}),`:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* High Contrast floating surface override */
:host([a11y-high-contrast]) .variant-floating {
  background: transparent !important;
  color: var(--color-black) !important;
  border: var(--border-width-medium) var(--border-style-solid) var(--color-black) !important;
  box-shadow: var(--shadow-none) !important;
}

/* Dyslexia mode typography overrides */
:host([a11y-dyslexia]) button {
  font-family: "Comic Sans MS", cursive, sans-serif !important;
  letter-spacing: 0.05em !important;
  word-spacing: 0.1em !important;
}

`})}),`
`,(0,c.jsx)(r.h3,{id:`supporting-focus-tokens-in-web-components`,children:`Supporting Focus Tokens in Web Components`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`button:focus-visible {
  outline: var(--a11y-focus-outline, 3px solid var(--color-accent));
  outline-offset: var(--a11y-focus-offset, 2px);
}

`})}),`
`,(0,c.jsx)(r.h3,{id:`supporting-reduced-motion-in-custom-styles`,children:`Supporting Reduced Motion in Custom Styles`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`button {
  transition: var(--component-transition, transform var(--anim-fast) var(--ease-fluid));
}

/* Reduced motion scale safety */
button:hover {
  transform: scale(var(--btn-hover-scale, 1.02));
}

`})}),`
`,(0,c.jsx)(r.h2,{id:`aria-attribute-delegation--host-scrubbing`,children:`ARIA Attribute Delegation & Host Scrubbing`}),`
`,(0,c.jsxs)(r.p,{children:[`To prevent markup compliance violations (`,(0,c.jsx)(r.code,{children:`aria-prohibited-attr`}),`) on generic custom elements, components acting as structural wrappers for interactive native primitives must ingest and delegate accessibility properties.`]}),`
`,(0,c.jsxs)(r.p,{children:[`When a component receives an `,(0,c.jsx)(r.code,{children:`aria-label`}),` or similar descriptive property, it mirrors the value to its focusable internal shadow node and scrubs it from the host tag before rendering finishes:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`if (ariaLabel) {
  this.buttonEl.setAttribute('aria-label', ariaLabel);
  this.removeAttribute('aria-label'); // Keeps outer host markup compliant
}

`})}),`
`,(0,c.jsx)(r.h2,{id:`color-vision-deficiency--low-vision-simulation`,children:`Color Vision Deficiency & Low Vision Simulation`}),`
`,(0,c.jsx)(r.p,{children:`The Storybook environment includes SVG color matrix transformation filters that allow designers and developers to verify visual contrast and state distinctions for users with color vision deficiencies.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Deficiency Mode`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Root Class`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Underlying SVG Filter / CSS`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Visual Impact & Audit Goal`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Deuteranopia`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.a11y-cb-deuteranopia`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`filter: url('#deuteranopia')`})}),(0,c.jsx)(`td`,{children:`Green weakness (~5% of males). Verifies red/green state indicators do not rely solely on hue.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Protanopia`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.a11y-cb-protanopia`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`filter: url('#protanopia')`})}),(0,c.jsx)(`td`,{children:`Red weakness (~2.5% of males). Ensures red alerts and error borders maintain luminance contrast.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Tritanopia`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.a11y-cb-tritanopia`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`filter: url('#tritanopia')`})}),(0,c.jsx)(`td`,{children:`Blue weakness (rare). Verifies blue accents and focus rings remain distinct from dark gray backgrounds.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Achromatopsia`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.a11y-cb-achromatopsia`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`filter: grayscale(100%)`})}),(0,c.jsx)(`td`,{children:`Total colorblindness. Tests that all state changes rely on iconography, shape, or text labels—never color alone.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Low Vision / Blur`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.a11y-cb-blur`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`filter: blur(2px)`})}),(0,c.jsx)(`td`,{children:`Simulates cataracts or low visual acuity. Verifies target size separation and structural clarity.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`keyboard-interaction--testing-best-practices`,children:`Keyboard Interaction & Testing Best Practices`}),`
`,(0,c.jsxs)(r.p,{children:[`When building custom Web Components that act as interactive widgets (`,(0,c.jsx)(r.code,{children:`role="checkbox"`}),`, `,(0,c.jsx)(r.code,{children:`role="button"`}),`):`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Single Source of Truth`}),`: Prefer listening to `,(0,c.jsx)(r.code,{children:`keydown`}),` events to catch `,(0,c.jsx)(r.code,{children:`Space`}),` and `,(0,c.jsx)(r.code,{children:`Enter`}),` keypresses, calling `,(0,c.jsx)(r.code,{children:`e.preventDefault()`}),` to prevent standard page scrolling.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Testing in Storybook`}),`: When writing Storybook `,(0,c.jsx)(r.code,{children:`play`}),` functions for Web Components in iframe environments, prefer using `,(0,c.jsx)(r.code,{children:`fireEvent.keyDown(component, { key: ' ' })`}),` over `,(0,c.jsx)(r.code,{children:`userEvent.keyboard(' ')`}),`. This ensures the event reaches the element directly regardless of active window focus and avoids synthetic double-click event simulation.`]}),`
`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`windows-forced-colors-mode--high-contrast-system-overrides`,children:`Windows Forced Colors Mode & High Contrast System Overrides`}),`
`,(0,c.jsxs)(r.p,{children:[`When Forced Colors Mode (such as Windows High Contrast Mode) is enabled via OS settings or simulated in Storybook (`,(0,c.jsx)(r.code,{children:`forcedColors: true`}),`), the browser overrides custom author colors, background fills, and CSS custom properties with system palette colors (`,(0,c.jsx)(r.code,{children:`Canvas`}),`, `,(0,c.jsx)(r.code,{children:`CanvasText`}),`, `,(0,c.jsx)(r.code,{children:`Highlight`}),`, `,(0,c.jsx)(r.code,{children:`ButtonText`}),`, etc.).`]}),`
`,(0,c.jsx)(r.h3,{id:`system-color-keyword-mapping`,children:`System Color Keyword Mapping`}),`
`,(0,c.jsx)(r.p,{children:`Components must maintain clear visual boundaries and text contrast under Forced Colors Mode without breaking when standard background colors are stripped.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`System Color Keyword`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Default Rendering`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Component Target Area`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`Canvas`})}),(0,c.jsx)(`td`,{children:`System background color (e.g., Pitch Black or Pure White)`}),(0,c.jsx)(`td`,{children:`Card, modal, and popover background fills.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`CanvasText`})}),(0,c.jsx)(`td`,{children:`System primary text color`}),(0,c.jsx)(`td`,{children:`Headings, body copy, and icons.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`Highlight`})}),(0,c.jsx)(`td`,{children:`System selected / active highlight color`}),(0,c.jsx)(`td`,{children:`Selected tab indicators, active states, and focus rings.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`HighlightText`})}),(0,c.jsx)(`td`,{children:`System text color rendered over Highlight background`}),(0,c.jsx)(`td`,{children:`Active button text and selected menu item copy.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`ButtonText`})}),(0,c.jsx)(`td`,{children:`System button text color`}),(0,c.jsx)(`td`,{children:`Interactive control labels.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`GrayText`})}),(0,c.jsx)(`td`,{children:`System disabled element text color`}),(0,c.jsx)(`td`,{children:`Disabled buttons, muted captions, and inactive form fields.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`common-causes-of-disappearing-components`,children:`Common Causes of "Disappearing" Components`}),`
`,(0,c.jsx)(r.p,{children:`If a component vanishes or loses its structure when Forced Colors Mode is toggled:`}),`
`,(0,c.jsxs)(r.ol,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Missing Transparent Borders`}),`: In Forced Colors Mode, background colors are flattened to `,(0,c.jsx)(r.code,{children:`Canvas`}),`. Elements like cards or input fields without a `,(0,c.jsx)(r.code,{children:`border`}),` property become invisible.`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Fix`}),`: Declare a transparent border on the default element state (`,(0,c.jsx)(r.code,{children:`border: 1px solid transparent`}),`). In forced colors mode, the system converts `,(0,c.jsx)(r.code,{children:`transparent`}),` borders to `,(0,c.jsx)(r.code,{children:`CanvasText`}),` borders automatically!`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Icons relying on CSS Fill instead of `,(0,c.jsx)(r.code,{children:`currentColor`})]}),`: SVGs using static hex codes vanish or clash against high-contrast canvases.`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Fix`}),`: Ensure SVG icons use `,(0,c.jsx)(r.code,{children:`stroke: currentColor`}),` or `,(0,c.jsx)(r.code,{children:`fill: currentColor`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Focus Rings using `,(0,c.jsx)(r.code,{children:`box-shadow`})]}),`: Forced Colors Mode strips all `,(0,c.jsx)(r.code,{children:`box-shadow`}),` styles.`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Fix`}),`: Always use native `,(0,c.jsx)(r.code,{children:`outline`}),` or `,(0,c.jsx)(r.code,{children:`:focus-visible`}),` with `,(0,c.jsx)(r.code,{children:`outline: 3px solid transparent`}),` so the browser renders system focus indicators.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`component-css-pattern-for-forced-colors-compatibility`,children:`Component CSS Pattern for Forced Colors Compatibility`}),`
`,(0,c.jsxs)(r.p,{children:[`Add forced color rules to your Web Component stylesheets under `,(0,c.jsx)(r.code,{children:`:host([a11y-forced-colors])`}),` or `,(0,c.jsx)(r.code,{children:`@media (forced-colors: active)`}),`:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* 1. Base control structure (always include transparent borders) */
.button,
.card-container,
.input-control {
  border: var(--border-width-thin) var(--border-style-solid) transparent;
}

/* 2. Forced Colors Mode Overrides */
:host([a11y-forced-colors]) .button,
@media (forced-colors: active) {
  /* Use system keywords so elements don't collapse into the canvas */
  .card-container {
    background-color: Canvas !important;
    color: CanvasText !important;
    border-color: CanvasText !important;
  }

  .button-primary {
    background-color: Highlight !important;
    color: HighlightText !important;
    border-color: Highlight !important;
  }

  .button:disabled,
  :host([disabled]) .button {
    color: GrayText !important;
    border-color: GrayText !important;
    opacity: 1 !important; /* Opacity can cause illegibility in high contrast */
  }

  /* Ensure focus rings remain visible when box-shadow is stripped */
  .button:focus-visible {
    outline: 3px solid Highlight !important;
    outline-offset: 2px;
  }
}
`})}),`
`,(0,c.jsx)(r.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Root Level Activation`}),`: Always attach `,(0,c.jsx)(r.code,{children:`a11y-*`}),` classes to `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` (`,(0,c.jsx)(r.code,{children:`<html>`}),`) so CSS custom variable cascading propagates reliably into all Shadow DOM and Light DOM trees.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Cross-Browser Shadow DOM`}),`: Avoid `,(0,c.jsx)(r.code,{children:`:host-context()`}),`. Use host attribute reflection (`,(0,c.jsx)(r.code,{children:`:host([a11y-*])`}),`) via `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` for universal browser support (especially Safari).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Focus Indicators`}),`: Never set `,(0,c.jsx)(r.code,{children:`outline: none`}),` on focusable controls without providing a high-contrast fallback that honors `,(0,c.jsx)(r.code,{children:`--a11y-focus-outline`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`System Preference Syncing`}),`: Wire runtime toggles to listen to native OS media queries like `,(0,c.jsx)(r.code,{children:`(prefers-reduced-motion: reduce)`}),` and `,(0,c.jsx)(r.code,{children:`(prefers-color-scheme: dark)`}),` as baseline defaults.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};