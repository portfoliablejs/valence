import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Sub-atomic/Formography`}),`
`,(0,c.jsx)(r.h1,{id:`formography`,children:`Formography`}),`
`,(0,c.jsx)(r.p,{children:`The Formography system defines design standards, structural geometry, validation state behaviors, and accessibility requirements across Valence form controls (inputs, textareas, selects, checkboxes, radios, and switches).`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`form-control-sizing--target-bounds`,children:`Form Control Sizing & Target Bounds`}),`
`,(0,c.jsxs)(r.p,{children:[`Form elements leverage `,(0,c.jsx)(r.code,{children:`Sizography`}),` height tokens to align predictably on horizontal layout grids while meeting WCAG touch target recommendations.`]}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Size Token`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Control Height`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Internal Padding`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Usage Guidelines`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--size-height-sm)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`32px`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--space-xs) var(--space-sm)`})}),(0,c.jsx)(`td`,{children:`Compact form layouts, inline table controls, search bars.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`strong`,{children:`Default: `}),(0,c.jsx)(`code`,{children:`var(--size-height-md)`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`40px`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--space-xs) var(--space-md)`})}),(0,c.jsx)(`td`,{children:`Standard form inputs, select dropdowns, and text inputs.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--size-height-lg)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`48px`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--space-sm) var(--space-lg)`})}),(0,c.jsx)(`td`,{children:`Prominent mobile-first inputs and search interfaces (WCAG AAA touch target).`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`validation--feedback-states`,children:`Validation & Feedback States`}),`
`,(0,c.jsxs)(r.p,{children:[`Formography standardizes validation semantics across four structural states: `,(0,c.jsx)(r.strong,{children:`Default / Rest`}),`, `,(0,c.jsx)(r.strong,{children:`Focus`}),`, `,(0,c.jsx)(r.strong,{children:`Error / Invalid`}),`, and `,(0,c.jsx)(r.strong,{children:`Success / Valid`}),`.`]}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`State`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Border & Focus Color`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Background / Icon Token`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Accessibility Requirement`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Rest`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--color-gray-light)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--color-bg)`})}),(0,c.jsxs)(`td`,{children:[`Label associated via `,(0,c.jsx)(`code`,{children:`for`}),` or `,(0,c.jsx)(`code`,{children:`aria-labelledby`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Active / Focus`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--color-accent)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`outline: 3px solid var(--color-accent)`})}),(0,c.jsxs)(`td`,{children:[`Visible focus ring via `,(0,c.jsx)(`code`,{children:`:focus-visible`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Invalid / Error`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--color-error)`})}),(0,c.jsxs)(`td`,{children:[`Helper text in `,(0,c.jsx)(`code`,{children:`var(--color-error)`})]}),(0,c.jsxs)(`td`,{children:[`Requires `,(0,c.jsx)(`code`,{children:`aria-invalid="true"`}),` and `,(0,c.jsx)(`code`,{children:`aria-describedby="[error-id]"`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Valid / Success`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--color-success)`})}),(0,c.jsx)(`td`,{children:`Optional checkmark icon`}),(0,c.jsx)(`td`,{children:`Communicates valid input criteria upon blur or submit.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage Guidelines`}),`
`,(0,c.jsxs)(r.p,{children:[`Construct form inputs using sub-atomic border, sizing, and color tokens. Ensure label containers and helper messages maintain standard spatial hierarchy (`,(0,c.jsx)(r.code,{children:`--space-xs`}),` gaps).`]}),`
`,(0,c.jsx)(r.h3,{id:`text-input-css-implementation`,children:`Text Input CSS Implementation`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  width: 100%;
}

.input-control {
  height: var(--size-height-md);
  padding: 0 var(--space-md);
  font-family: var(--font-family);
  font-size: 16px;
  color: var(--color-black);
  background: var(--custom-bg, var(--color-bg));
  border: var(--border-width-thin) var(--border-style-solid) var(--color-gray-light);
  border-radius: var(--custom-radius, var(--radius-md));
  transition: border-color var(--anim-fast) var(--ease-fluid),
              box-shadow var(--anim-fast) var(--ease-fluid);
}

/* Active Focus State */
.input-control:focus-visible {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(43, 113, 240, 0.2);
}

/* Invalid / Error State */
.input-control[aria-invalid="true"] {
  border-color: var(--color-error);
}

.input-control[aria-invalid="true"]:focus-visible {
  box-shadow: 0 0 0 3px rgba(255, 59, 48, 0.2);
}

/* Disabled State */
.input-control:disabled {
  opacity: var(--opacity-disabled);
  background: var(--color-card-bg);
  cursor: not-allowed;
}

`})}),`
`,(0,c.jsx)(r.h2,{id:`accessible-form-anatomy`,children:`Accessible Form Anatomy`}),`
`,(0,c.jsx)(r.p,{children:`Every interactive form control must maintain an explicit, accessible structure connecting labels, inputs, and feedback messages.`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<div class="form-field">
  <!-- Explicit Label Binding -->
  <label for="email-input" class="p2" style="font-weight: 600; color: var(--color-black);">
    Email Address
  </label>
  
  <!-- Native Primitive Control -->
  <input 
    id="email-input"
    type="email" 
    class="input-control" 
    placeholder="user@valence.design"
    aria-invalid="true"
    aria-describedby="email-error"
  />

  <!-- Validation Feedback Message -->
  <span id="email-error" class="p2" style="color: var(--color-error); font-size: 14px;">
    Please enter a valid email address.
  </span>
</div>

`})}),`
`,(0,c.jsx)(r.h2,{id:`high-contrast--dyslexia-mode-overrides`,children:`High Contrast & Dyslexia Mode Overrides`}),`
`,(0,c.jsxs)(r.p,{children:[`In high-contrast mode, form controls rely on high-visibility solid borders (`,(0,c.jsx)(r.code,{children:`--border-width-medium`}),`) rather than subtle background fills.`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* High Contrast Mode Overrides */
:host([a11y-high-contrast]) .input-control {
  background: #000000 !important;
  color: #FFFFFF !important;
  border: var(--border-width-medium) var(--border-style-solid) #FFFFFF !important;
}

:host([a11y-high-contrast]) .input-control:focus-visible {
  outline: 4px solid #FFFFFF !important;
  outline-offset: 2px;
}

/* Dyslexia Mode Overrides */
:host([a11y-dyslexia]) .input-control {
  font-family: "Comic Sans MS", cursive, sans-serif !important;
  letter-spacing: 0.05em !important;
}

`})}),`
`,(0,c.jsx)(r.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Never Rely Solely on Color`}),`: When communicating an invalid input state, pair `,(0,c.jsx)(r.code,{children:`--color-error`}),` borders with explanatory error text and an `,(0,c.jsx)(r.code,{children:`aria-invalid="true"`}),` attribute.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Form Association`}),`: Always link labels to input fields using `,(0,c.jsx)(r.code,{children:`for="[id]"`}),` or nested structural markup. Avoid orphan form controls.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Helper Text Programmatic Association`}),`: Always link helper or error messages to input fields using `,(0,c.jsx)(r.code,{children:`aria-describedby="[message-id]"`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Keyboard Navigation & Traps`}),`: Ensure form fields support standard `,(0,c.jsx)(r.code,{children:`Tab`}),` and `,(0,c.jsx)(r.code,{children:`Shift+Tab`}),` flows without trapping focus inside custom shadow DOM boundaries.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};