import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/Icon [v1.0.0]/Changelog`}),`
`,(0,c.jsx)(r.h1,{id:`changelog`,children:`Changelog`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`100---2026-07-16`,children:`[1.0.0] - 2026-07-16`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`initial-release`,children:`Initial Release`}),`
`,(0,c.jsx)(r.h3,{id:`added`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Initial Component Implementation:`}),` First stable release of `,(0,c.jsx)(r.code,{children:`<ds-icon>`}),` featuring:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`System Icon Registry:`}),` Unified `,(0,c.jsx)(r.code,{children:`ICON_REGISTRY`}),` offering comprehensive media controls, volume gauges, navigation chevrons, user actions, quality badges, and system utility icons.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Variant Controls:`}),` Dual-mode vector path support for `,(0,c.jsx)(r.code,{children:`outline`}),` and `,(0,c.jsx)(r.code,{children:`fill`}),` variants.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Directional RTL Mirroring:`}),` Automatic horizontal flipping (`,(0,c.jsx)(r.code,{children:`transform: scaleX(-1)`}),`) for navigation and directional icons when `,(0,c.jsx)(r.code,{children:`dir="rtl"`}),` is detected on the root document.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Sub-Atomic Token Hooks:`}),` Component-specific CSS custom property overrides for sizing, stroke weight, fill, and stroke color (`,(0,c.jsx)(r.code,{children:`--ds-icon-size`}),`, `,(0,c.jsx)(r.code,{children:`--ds-icon-stroke-width`}),`, `,(0,c.jsx)(r.code,{children:`--ds-icon-fill`}),`, `,(0,c.jsx)(r.code,{children:`--ds-icon-stroke`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Root Context Observer (`,(0,c.jsx)(r.code,{children:`_observeRootContext`}),`):`]}),` Integrated `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` listening to root document attribute and class changes to synchronize RTL directionality, high contrast, and forced colors.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`WCAG AAA & Forced Colors Support:`}),` Complete Windows Forced Colors Mode compatibility utilizing system `,(0,c.jsx)(r.code,{children:`CanvasText`}),` and `,(0,c.jsx)(r.code,{children:`currentColor`}),` mappings.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Storybook CSF3 Integration:`}),` Story controls in `,(0,c.jsx)(r.code,{children:`Icon.stories.js`}),` featuring range controls for stroke weight and size, variant selectors, and container color inheritance validation.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Screen Reader Announce Prevention:`}),` Enforces `,(0,c.jsx)(r.code,{children:`aria-hidden="true"`}),` on inner SVG elements to guarantee decorative presentational isolation.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Container Text Color Inheritance:`}),` Sets host `,(0,c.jsx)(r.code,{children:`color: inherit`}),` ensuring icons cleanly inherit typography colors from parent wrappers.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsxs)(r.em,{children:[`This changelog is specific to the `,(0,c.jsx)(r.code,{children:`<ds-icon>`}),` component. For design system global releases, refer to the main `,(0,c.jsx)(r.a,{href:`?path=/docs/getting-started-changelog--docs`,children:`Getting Started/Changelog`}),`.`]})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};