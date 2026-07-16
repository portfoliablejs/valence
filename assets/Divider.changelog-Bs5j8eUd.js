import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/Divider [v1.0.0]/Changelog`}),`
`,(0,c.jsx)(r.h1,{id:`changelog`,children:`Changelog`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`100---2026-07-16`,children:`[1.0.0] - 2026-07-16`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`initial-release`,children:`Initial Release`}),`
`,(0,c.jsx)(r.h3,{id:`added`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Initial Component Implementation:`}),` First stable release of `,(0,c.jsx)(r.code,{children:`<ds-divider>`}),` featuring:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Structural Orientations:`}),` Support for both `,(0,c.jsx)(r.code,{children:`horizontal`}),` and `,(0,c.jsx)(r.code,{children:`vertical`}),` layout axes with standard flexible container sizing.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Sub-Atomic Token Hooks:`}),` Component-specific CSS custom property overrides for stroke color, rule thickness, and spatial margins (`,(0,c.jsx)(r.code,{children:`--ds-divider-color`}),`, `,(0,c.jsx)(r.code,{children:`--ds-divider-thickness`}),`, `,(0,c.jsx)(r.code,{children:`--ds-divider-margin`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Root Accessibility Observer (`,(0,c.jsx)(r.code,{children:`_observeRootAccessibility`}),`):`]}),` Integrated `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` on `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` to automatically sync global accessibility modes onto host custom element attributes.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`WCAG AAA & Forced Colors Support:`}),` High-contrast overrides, reduced motion suppression, dark mode contrast mapping, and Windows Forced Colors Mode system palette mapping (`,(0,c.jsx)(r.code,{children:`CanvasText`}),`).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Storybook CSF3 Integration:`}),` Story controls in `,(0,c.jsx)(r.code,{children:`Divider.stories.js`}),` featuring sub-atomic knobs (`,(0,c.jsx)(r.code,{children:`color`}),`, `,(0,c.jsx)(r.code,{children:`thickness`}),`, `,(0,c.jsx)(r.code,{children:`margin`}),`) and automated interaction testing via `,(0,c.jsx)(r.code,{children:`play`}),` functions validating host attribute scrubbing and internal ARIA propagation.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Host ARIA Delegation & Infinite Reflection Guard:`}),` Automatically scrubs `,(0,c.jsx)(r.code,{children:`aria-label`}),` from the host custom element tag after delegating it to the inner `,(0,c.jsx)(r.code,{children:`.divider-root`}),` primitive, with a guard in `,(0,c.jsx)(r.code,{children:`attributeChangedCallback`}),` preventing infinite loop reflections when `,(0,c.jsx)(r.code,{children:`aria-label`}),` is removed.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Shadow DOM Layout Nodes:`}),` Compressed inner HTML template string into a single line to eliminate anonymous whitespace text nodes in Shadow DOM layouts.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsxs)(r.em,{children:[`This changelog is specific to the `,(0,c.jsx)(r.code,{children:`<ds-divider>`}),` component. For design system global releases, refer to the main `,(0,c.jsx)(r.a,{href:`?path=/docs/getting-started-changelog--docs`,children:`Getting Started/Changelog`}),`.`]})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};