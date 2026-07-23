import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Organisms/Article/Changelog`}),`
`,(0,c.jsx)(r.h1,{id:`changelog`,children:`Changelog`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`unreleased---2026-07-23`,children:`[Unreleased] - 2026-07-23`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`changed`,children:`Changed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Scroll Transition Model:`}),` Reworked the thumbnail retraction interaction from a binary threshold/class toggle into a smooth, progress-driven scroll transition. Thumbnail width, opacity, position, and layout gap now interpolate continuously for both scroll-down and scroll-up.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Transition Feel:`}),` Introduced eased progress updates to make the retraction/expansion motion read as a single fluid interaction rather than a snap between open/retracted states.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Body Content Bounce:`}),` Removed scroll-linked transform/opacity effects from article body children so paragraph and content items no longer appear to bounce while the thumbnail retracts/returns.`]}),`
`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`100---2026-07-21`,children:`[1.0.0] - 2026-07-21`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`initial-release`,children:`Initial Release`}),`
`,(0,c.jsxs)(r.p,{children:[`The stable debut of the `,(0,c.jsx)(r.code,{children:`ds-article`}),` layout organism. This component standardizes the presentation shell for long-form case studies, integrating headers, granular sharing mechanics, AI summaries, audio readers, bottom case navigators, and parsed markdown body content into a single unified DOM block.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`added`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Layout Shell Engine:`}),` Created `,(0,c.jsx)(r.code,{children:`<ds-article>`}),` to orchestrate complex reading layouts dynamically via slot projection (`,(0,c.jsx)(r.code,{children:`summary`}),`, `,(0,c.jsx)(r.code,{children:`player`}),`, `,(0,c.jsx)(r.code,{children:`navigator`}),`, `,(0,c.jsx)(r.code,{children:`default`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Action & Social Tooltips:`}),` Integrated pre-wired `,(0,c.jsx)(r.code,{children:`ds-button`}),` and `,(0,c.jsx)(r.code,{children:`ds-tooltip`}),` structures into the Shadow DOM header. Added bottom-aligned tooltips to social icons and a KBD-enabled tooltip for the primary action button.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Comprehensive Visibility Toggles:`}),` Implemented a granular suite of `,(0,c.jsx)(r.code,{children:`show-*`}),` boolean attributes allowing the host application to conditionally hide or display any specific social icon (`,(0,c.jsx)(r.code,{children:`show-social-linkedin`}),`), action button, or slot container block without altering the DOM tree.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Root Class Syncing:`}),` Configured passive `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` on `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` reflecting global setting cascades (`,(0,c.jsx)(r.code,{children:`a11y-dark-mode`}),`, `,(0,c.jsx)(r.code,{children:`a11y-high-contrast`}),`, `,(0,c.jsx)(r.code,{children:`a11y-large-text`}),`, etc.) downstream as host element boolean attributes.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed-1`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Markdown Light DOM Resolution:`}),` Engineered exhaustive `,(0,c.jsx)(r.code,{children:`::slotted()`}),` rules within `,(0,c.jsx)(r.code,{children:`article.css`}),` ensuring slotted `,(0,c.jsx)(r.code,{children:`<ul>`}),`, `,(0,c.jsx)(r.code,{children:`<ol>`}),`, `,(0,c.jsx)(r.code,{children:`<blockquote>`}),`, `,(0,c.jsx)(r.code,{children:`<pre>`}),`, `,(0,c.jsx)(r.code,{children:`<code>`}),`, and `,(0,c.jsx)(r.code,{children:`<table>`}),` elements gracefully inherit global typography resets and appropriate vertical rhythm geometry natively from the host app without requiring deep Shadow DOM CSS penetrations.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Sub-Atomic Token Hooks:`}),` Established strictly prefixed structural variables (`,(0,c.jsx)(r.code,{children:`--ds-article-max-width`}),`, `,(0,c.jsx)(r.code,{children:`--ds-article-title-color`}),`, `,(0,c.jsx)(r.code,{children:`--ds-article-social-color`}),`) conforming to architecture standards.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Dumb Component Architecture:`}),` Replaced hard-coded data dependencies with declarative properties. The component now accepts flat Markdown/HTML via the default slot, totally decoupling it from internal application payload parsers or `,(0,c.jsx)(r.code,{children:`data.js`}),`.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsxs)(r.em,{children:[`This changelog is specific to the `,(0,c.jsx)(r.code,{children:`<ds-article>`}),` component. For design system global releases, refer to the main `,(0,c.jsx)(r.a,{href:`?path=/docs/getting-started-changelog--docs`,children:`Getting Started/Changelog`}),`.`]})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};