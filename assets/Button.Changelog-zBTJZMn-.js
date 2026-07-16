import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/Button [v1.0.0]/Changelog`}),`
`,(0,c.jsx)(r.h1,{id:`changelog`,children:`Changelog`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`100---2026-07-16`,children:`[1.0.0] - 2026-07-16`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`initial-release`,children:`Initial Release`}),`
`,(0,c.jsx)(r.h3,{id:`added`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Initial Component Implementation:`}),` First stable release of `,(0,c.jsx)(r.code,{children:`<ds-button>`}),` featuring:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Core Variants:`}),` Base variants (`,(0,c.jsx)(r.code,{children:`primary`}),`, `,(0,c.jsx)(r.code,{children:`secondary`}),`, `,(0,c.jsx)(r.code,{children:`text`}),`, `,(0,c.jsx)(r.code,{children:`icon`}),`, `,(0,c.jsx)(r.code,{children:`floating`}),`) with custom hover and active scaling transforms.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Iconography Integration:`}),` Nested `,(0,c.jsx)(r.code,{children:`<ds-icon>`}),` support with dynamic size scaling (`,(0,c.jsx)(r.code,{children:`20px`}),` for circular variants; `,(0,c.jsx)(r.code,{children:`14px`}),` for pill/inline variants), outline/fill variant controls (`,(0,c.jsx)(r.code,{children:`icon-variant`}),`), and right-side layout alignment (`,(0,c.jsx)(r.code,{children:`icon-position="right"`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Sub-Atomic Token Hooks:`}),` Custom property overrides for radii, surface colors, borders, and interaction scales (`,(0,c.jsx)(r.code,{children:`--btn-radius`}),`, `,(0,c.jsx)(r.code,{children:`--btn-bg`}),`, `,(0,c.jsx)(r.code,{children:`--btn-hover-bg`}),`, `,(0,c.jsx)(r.code,{children:`--btn-active-bg`}),`, `,(0,c.jsx)(r.code,{children:`--btn-border-width`}),`, `,(0,c.jsx)(r.code,{children:`--btn-border-color`}),`, `,(0,c.jsx)(r.code,{children:`--btn-hover-scale`}),`, `,(0,c.jsx)(r.code,{children:`--btn-active-scale`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Root Accessibility Observer (`,(0,c.jsx)(r.code,{children:`_observeRootAccessibility`}),`):`]}),` Integrated `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` on `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` to automatically sync global accessibility modes onto host attributes.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`WCAG AAA & Forced Colors Support:`}),` Built-in high-contrast mode (21:1 binary contrast ratio), dyslexia typography overrides, reduced motion suppression, and native Windows Forced Colors Mode system palette mapping (`,(0,c.jsx)(r.code,{children:`Highlight`}),`, `,(0,c.jsx)(r.code,{children:`Canvas`}),`, `,(0,c.jsx)(r.code,{children:`CanvasText`}),`).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Storybook CSF3 Integration:`}),` Interactive story controls (`,(0,c.jsx)(r.code,{children:`Button.stories.js`}),`) and automated interaction `,(0,c.jsx)(r.code,{children:`play`}),` function tests using `,(0,c.jsx)(r.code,{children:`storybook/test`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[(0,c.jsx)(r.code,{children:`portfoliable`}),` Application Integration:`]}),` Deployed across case study readers, header controls, modal triggers, and video player overlays.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Host ARIA Delegation:`}),` Automatically scrubs `,(0,c.jsx)(r.code,{children:`aria-label`}),` from the host custom element tag after delegating it down to the internal `,(0,c.jsx)(r.code,{children:`<button>`}),` primitive to eliminate `,(0,c.jsx)(r.code,{children:`aria-prohibited-attr`}),` validation warnings.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Disabled Host Cursor:`}),` Enforces `,(0,c.jsx)(r.code,{children:`cursor: not-allowed`}),` on the host element when disabled to prevent default pointer cursor hover states.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsxs)(r.em,{children:[`This changelog is specific to the `,(0,c.jsx)(r.code,{children:`<ds-button>`}),` component. For design system global releases, refer to the main `,(0,c.jsx)(r.a,{href:`?path=/docs/getting-started-changelog--docs`,children:`Getting Started/Changelog`}),`.`]})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};