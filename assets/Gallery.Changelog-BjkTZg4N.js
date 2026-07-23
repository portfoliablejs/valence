import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Organisms/Gallery [v1.0.0]/Changelog`}),`
`,(0,c.jsx)(r.h1,{id:`changelog`,children:`Changelog`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`100---2026-07-23`,children:`[1.0.0] - 2026-07-23`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`minimal-motion-engine-prop`,children:`Minimal Motion Engine Prop`}),`
`,(0,c.jsxs)(r.p,{children:[`This release makes the gallery motion profile configurable through an `,(0,c.jsx)(r.code,{children:`engine`}),` prop while preserving the current minimal tuning as the default. The gallery keeps its restrained, minimalistic interaction model, but the motion contract is now explicit and reusable.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`summary-of-changes`,children:`Summary of Changes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Classification`}),(0,c.jsx)(`th`,{children:`Scope / Context`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Changed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Gallery.js`})}),(0,c.jsxs)(`td`,{children:[`Exposed gallery motion tuning as an `,(0,c.jsx)(r.code,{children:`engine`}),` property/attribute with a default value of `,(0,c.jsx)(r.code,{children:`minimal`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Changed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Gallery.js`})}),(0,c.jsx)(`td`,{children:`Read drag follow, overscroll, and edge-return timing from the selected motion engine instead of inline constants.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Changed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Gallery.stories.js`})}),(0,c.jsxs)(`td`,{children:[`Added the `,(0,c.jsx)(r.code,{children:`engine`}),` story arg so Storybook mirrors the public gallery API.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Added`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`Gallery.Architecture.mdx`}),` / `,(0,c.jsx)(r.code,{children:`Gallery.Changelog.mdx`})]}),(0,c.jsx)(`td`,{children:`Added component architecture and changelog documentation for the gallery organism.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Fixed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`a11y-reduce-motion`})}),(0,c.jsx)(`td`,{children:`Gallery now mirrors the global reduced-motion preference and suppresses shrink/transition motion when the mode is active.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`changed`,children:`Changed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Motion Contract:`}),` The gallery now derives drag behavior from a named motion engine instead of fixed inline tuning values.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Default Preset:`}),` The `,(0,c.jsx)(r.code,{children:`minimal`}),` engine remains the default so the gallery keeps its restrained feel out of the box.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Storybook Surface:`}),` Story controls now include the motion engine prop alongside item count and gap spacing.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`added`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Architecture Documentation:`}),` Added a component architecture document covering state flow, API contract, accessibility, and host integration.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Changelog Documentation:`}),` Added release notes for the gallery organism so future motion updates can be tracked in one place.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Reduced Motion Compliance:`}),` Added a no-motion path that disables the gallery's shrink animation and animated edge-return behavior when `,(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),` is active.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsxs)(r.em,{children:[`This changelog is specific to the `,(0,c.jsx)(r.code,{children:`<ds-gallery>`}),` component. For design system global releases, refer to the main Getting Started changelog.`]})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};