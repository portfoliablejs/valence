import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Organisms/Header/Changelog`}),`
`,(0,c.jsx)(r.h1,{id:`changelog`,children:`Changelog`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`100---2026-07-23`,children:`[1.0.0] - 2026-07-23`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`initial-release`,children:`Initial Release`}),`
`,(0,c.jsxs)(r.p,{children:[`The stable debut of the `,(0,c.jsx)(r.code,{children:`ds-header`}),` layout organism. This component establishes a full-width presentational header shell that composes `,(0,c.jsx)(r.code,{children:`ds-breadcrumb`}),` and `,(0,c.jsx)(r.code,{children:`ds-navigation-menu`}),` into a single app-level chrome surface while preserving a strict dumb-component contract.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`added`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Viewport-Width Header Shell:`}),` Created `,(0,c.jsx)(r.code,{children:`<ds-header>`}),` as a full-width organism that stretches across the viewport and maintains explicit left/right edge anchoring for its composed regions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Molecule Composition Contract:`}),` Integrated `,(0,c.jsx)(r.code,{children:`ds-breadcrumb`}),` on the far left and `,(0,c.jsx)(r.code,{children:`ds-navigation-menu`}),` on the far right using a rigid flex layout intended for smart-app page framing.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Presentational Visibility Toggles:`}),` Added `,(0,c.jsx)(r.code,{children:`show-breadcrumb`}),` and `,(0,c.jsx)(r.code,{children:`show-language-menu`}),` booleans so the host application can suppress optional UI regions without introducing smart behavior into the component itself.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Navigation Attribute Forwarding:`}),` Implemented pass-through forwarding for avatar, tooltip, keyboard shortcut, aria-label, and disabled-state props into the child navigation menu.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Storybook Coverage:`}),` Added `,(0,c.jsx)(r.code,{children:`Complete`}),`, `,(0,c.jsx)(r.code,{children:`NoBreadcrumb`}),`, and `,(0,c.jsx)(r.code,{children:`NoLanguageMenu`}),` stories with explicit descriptions validating alignment and optional-region behavior.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Export Surface Completion:`}),` Filled the missing `,(0,c.jsx)(r.code,{children:`src/stories/organisms/Header/Header.js`}),` module expected by the package entry export map.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Contextual Menu Canvas Clipping:`}),` Increased the Header story canvas height and bottom breathing room so the navigation menu popovers can open without being visually cut off in the preview.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsxs)(r.em,{children:[`This changelog is specific to the `,(0,c.jsx)(r.code,{children:`<ds-header>`}),` component. For design system global releases, refer to the main `,(0,c.jsx)(r.a,{href:`?path=/docs/getting-started-changelog--docs`,children:`Getting Started/Changelog`}),`.`]})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};