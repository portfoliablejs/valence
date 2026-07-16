import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/Check [v1.0.0]/Changelog`}),`
`,(0,c.jsx)(r.h1,{id:`changelog`,children:`Changelog`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`100---2026-07-16`,children:`[1.0.0] - 2026-07-16`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`initial-release`,children:`Initial Release`}),`
`,(0,c.jsx)(r.h3,{id:`added`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Initial Component Implementation:`}),` First stable release of `,(0,c.jsx)(r.code,{children:`<ds-check>`}),` featuring:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Selection & Surface Containers:`}),` Controlled `,(0,c.jsx)(r.code,{children:`selected`}),` state with smooth scale/opacity SVG stroke transitions, and optional `,(0,c.jsx)(r.code,{children:`has-background`}),` surface container framing.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Sub-Atomic Token Hooks:`}),` Component-specific CSS custom property overrides for sizing, vector color, background container fill, and border ring color (`,(0,c.jsx)(r.code,{children:`--ds-check-size`}),`, `,(0,c.jsx)(r.code,{children:`--ds-check-color`}),`, `,(0,c.jsx)(r.code,{children:`--ds-check-bg`}),`, `,(0,c.jsx)(r.code,{children:`--ds-check-border-color`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Keyboard Navigation & Event Handlers:`}),` Native `,(0,c.jsx)(r.code,{children:`click`}),` toggling alongside `,(0,c.jsx)(r.code,{children:`Space`}),`, `,(0,c.jsx)(r.code,{children:`Spacebar`}),`, and `,(0,c.jsx)(r.code,{children:`Enter`}),` keyboard trigger support.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Root Accessibility Observer (`,(0,c.jsx)(r.code,{children:`_observeRootAccessibility`}),`):`]}),` Integrated `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` on `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` to automatically sync global accessibility modes onto host custom element attributes.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`WCAG AAA & Forced Colors Support:`}),` High-contrast overrides, reduced-motion suppression, dark mode sync, and Windows Forced Colors Mode system palette mapping (`,(0,c.jsx)(r.code,{children:`Highlight`}),`, `,(0,c.jsx)(r.code,{children:`GrayText`}),`).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Storybook CSF3 Integration:`}),` Story controls in `,(0,c.jsx)(r.code,{children:`Check.stories.js`}),` featuring complete sub-atomic control knobs (`,(0,c.jsx)(r.code,{children:`color`}),`, `,(0,c.jsx)(r.code,{children:`size`}),`, `,(0,c.jsx)(r.code,{children:`bg`}),`, `,(0,c.jsx)(r.code,{children:`borderColor`}),`) and automated interaction testing via `,(0,c.jsx)(r.code,{children:`play`}),` functions.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Shadow DOM Layout Nodes:`}),` Compressed inner HTML template string to eliminate ghost text nodes inside Shadow DOM layouts.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Keyboard & Disabled Focus Handling:`}),` Suppressed click/keydown interaction processing and automatically assigned `,(0,c.jsx)(r.code,{children:`tabindex="-1"`}),` when the `,(0,c.jsx)(r.code,{children:`disabled`}),` attribute is present.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsxs)(r.em,{children:[`This changelog is specific to the `,(0,c.jsx)(r.code,{children:`<ds-check>`}),` component. For design system global releases, refer to the main `,(0,c.jsx)(r.a,{href:`?path=/docs/getting-started-changelog--docs`,children:`Getting Started/Changelog`}),`.`]})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};