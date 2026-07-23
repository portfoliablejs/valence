import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Molecules/Summary/Changelog`}),`
`,(0,c.jsx)(r.h1,{id:`changelog`,children:`Changelog`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`100---2026-07-20`,children:`[1.0.0] - 2026-07-20`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`initial-release`,children:`Initial Release`}),`
`,(0,c.jsxs)(r.p,{children:[`The stable debut of the presentational summary molecule (`,(0,c.jsx)(r.code,{children:`ds-summary`}),`) featuring audio-player glassmorphic styling, localizable text attributes, typing animations, controllable metric grid toggles, and full Storybook metrics integration.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`added`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Presentational Summary Molecule:`}),` Created `,(0,c.jsx)(r.code,{children:`<ds-summary>`}),` composing slotted `,(0,c.jsx)(r.code,{children:`ds-metric-card`}),` children.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Glassmorphic Audio-Player Styling:`}),` Aligned container borders, padding, radii, and backdrop filters with `,(0,c.jsx)(r.code,{children:`audio-player.css`}),` design token specifications.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Header Label & Icon Clean Up:`}),` Removed AI icon in favor of clean typographic header defaulting to `,(0,c.jsx)(r.code,{children:`"Summary"`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Metrics Toggle Prop:`}),` Added `,(0,c.jsx)(r.code,{children:`show-metrics`}),` boolean attribute allowing host applications to turn the slotted metric cards grid on and off.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Full Storybook Metrics Control Integration:`}),` Exposed controls for all slotted `,(0,c.jsx)(r.code,{children:`ds-metric-card`}),` props directly inside the Storybook controls panel.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Upstream Completion Event:`}),` Added `,(0,c.jsx)(r.code,{children:`ds-summary-complete`}),` CustomEvent payload emitted when typing animation finishes.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Root Class Syncing:`}),` Configured passive `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` on `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` reflecting global setting cascades (`,(0,c.jsx)(r.code,{children:`a11y-dark-mode`}),`, `,(0,c.jsx)(r.code,{children:`a11y-high-contrast`}),`, `,(0,c.jsx)(r.code,{children:`a11y-large-text`}),`, etc.) downstream as host element boolean attributes.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Sub-Atomic Token Hooks:`}),` Refactored generic variables in `,(0,c.jsx)(r.code,{children:`summary.css`}),` to adhere to the `,(0,c.jsx)(r.code,{children:`--ds-summary-*`}),` layout standard (`,(0,c.jsx)(r.code,{children:`--ds-summary-bg`}),`, `,(0,c.jsx)(r.code,{children:`--ds-summary-border-color`}),`, `,(0,c.jsx)(r.code,{children:`--ds-summary-header-color`}),`, `,(0,c.jsx)(r.code,{children:`--ds-summary-text-color`}),`, `,(0,c.jsx)(r.code,{children:`--ds-summary-padding`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Preview Canvas Clean Up:`}),` Removed canvas prewire wrapper tags from Storybook stories so `,(0,c.jsx)(r.code,{children:`<ds-summary>`}),` renders directly inside iframe viewports.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsxs)(r.em,{children:[`This changelog is specific to the `,(0,c.jsx)(r.code,{children:`<ds-summary>`}),` component. For design system global releases, refer to the main `,(0,c.jsx)(r.a,{href:`?path=/docs/getting-started-changelog--docs`,children:`Getting Started/Changelog`}),`.`]})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};