import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Organisms/Contextual Menu [v1.1.0]/Changelog`}),`
`,(0,c.jsx)(r.h1,{id:`changelog`,children:`Changelog`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`110---2026-07-22`,children:`[1.1.0] - 2026-07-22`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`webkit-scroll-engine-isolation--safari-tab-switch-fix`,children:`WebKit Scroll Engine Isolation & Safari Tab Switch Fix`}),`
`,(0,c.jsx)(r.p,{children:`Architecturally decoupled the scrolling engine from the flexbox layout container inside the Shadow DOM to resolve macOS Safari / WebKit composite layer bugs where native overlay scrollbars bled through and custom scroll thumbs froze upon switching browser tabs or hiding/showing popovers.`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`refactored`,children:`Refactored`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Viewport Engine Decoupling:`}),` Introduced a block-level `,(0,c.jsx)(r.code,{children:`.menu-scroll-viewport`}),` container inside the Shadow DOM to handle `,(0,c.jsx)(r.code,{children:`overflow-y`}),` and scrollbar rendering, completely isolating scroll mechanics from the inner `,(0,c.jsx)(r.code,{children:`.menu-content`}),` flexbox layout.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Unconditional WebKit Styling:`}),` Applied `,(0,c.jsx)(r.code,{children:`::-webkit-scrollbar`}),` pseudo-element rules unconditionally (without `,(0,c.jsx)(r.code,{children:`@supports`}),` feature queries) to force WebKit in Safari 17+ to opt out of native `,(0,c.jsx)(r.code,{children:`NSScroller`}),` overlay tracks completely.`]}),`
`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Documentation Refactor:`}),` Updated `,(0,c.jsx)(r.code,{children:`ContextualMenu.Architecture.mdx`}),` to document the block-level viewport scroll isolation, WebKit overlay scrollbar re-binding strategy, and new sub-atomic CSS custom property hooks (`,(0,c.jsx)(r.code,{children:`--ds-contextual-menu-max-height`}),`, `,(0,c.jsx)(r.code,{children:`--ds-contextual-menu-scroll-max-height`}),`, `,(0,c.jsx)(r.code,{children:`--ds-contextual-menu-scrollbar-color`}),`).`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Safari Tab-Switch & Reveal Scrollbar Freeze:`}),` Added `,(0,c.jsx)(r.code,{children:`_forceScrollbarRebind()`}),`, executing a temporary `,(0,c.jsx)(r.code,{children:`overflowY`}),` reset (`,(0,c.jsx)(r.code,{children:`hidden`}),` $\\rightarrow$ layout flush $\\rightarrow$ `,(0,c.jsx)(r.code,{children:`auto`}),`) triggered on `,(0,c.jsx)(r.code,{children:`visibilitychange`}),` tab focus and `,(0,c.jsx)(r.code,{children:`open`}),` attribute changes. This cleanly destroys phantom native overlay tracks without destroying DOM trees or duplicating GPU VRAM layers.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Lenis Smooth-Scroll Conflict:`}),` Added `,(0,c.jsx)(r.code,{children:`data-lenis-prevent`}),` attributes and bound `,(0,c.jsx)(r.code,{children:`wheel`}),` event `,(0,c.jsx)(r.code,{children:`stopPropagation()`}),` to `,(0,c.jsx)(r.code,{children:`.menu-scroll-viewport`}),`, stopping parent smooth-scroll engines from hijacking internal menu scroll events.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Box-Shadow Preservation:`}),` Guaranteed host and card `,(0,c.jsx)(r.code,{children:`box-shadow`}),` values remain completely unclipped while constraining internal vertical scroll heights.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`added`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Max Height Sub-Atomic Token:`}),` Bound `,(0,c.jsx)(r.code,{children:`max-height`}),` attribute to `,(0,c.jsx)(r.code,{children:`--ds-contextual-menu-max-height`}),` and `,(0,c.jsx)(r.code,{children:`--ds-contextual-menu-scroll-max-height`}),`, allowing parent components (such as `,(0,c.jsx)(r.code,{children:`ds-toc`}),`) to dynamically cap popover menu heights.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Storybook Overflow Testing:`}),` Added `,(0,c.jsx)(r.code,{children:`ScrollableOverflowMenu`}),` story with automated play steps testing vertical scroll mechanics and layer stability.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`100---2026-07-20`,children:`[1.0.0] - 2026-07-20`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`initial-release`,children:`Initial Release`}),`
`,(0,c.jsxs)(r.p,{children:[`The stable debut of the presentational settings contextual popover menu organism (`,(0,c.jsx)(r.code,{children:`ds-contextual-menu`}),`) featuring dynamic item generation, hierarchical category divider syncs, and comprehensive accessibility coverage.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`summary-of-changes`,children:`Summary of Changes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Classification`}),(0,c.jsx)(`th`,{children:`Scope / Context`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Added`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-contextual-menu`})}),(0,c.jsx)(`td`,{children:`Initial stable release of the popover menu card organism.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Added`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-contextual-menu`})}),(0,c.jsxs)(`td`,{children:[`Configured dynamic, programmatic `,(0,c.jsx)(r.code,{children:`items`}),` mapping with automated subcategory sections and divider insertions.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Added`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`_observeRootAccessibility`})}),(0,c.jsx)(`td`,{children:`Configured passive root observer syncing dark mode, high contrast, dyslexia, reduce-motion, and Windows Forced Colors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Fixed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`contextual-menu.css`})}),(0,c.jsxs)(`td`,{children:[`Remapped custom style parameters to standardized `,(0,c.jsx)(r.code,{children:`--ds-contextual-menu-*`}),` design tokens instead of generic `,(0,c.jsx)(r.code,{children:`--custom-*`}),` variables.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Fixed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ContextualMenu.stories.js`})}),(0,c.jsx)(`td`,{children:`Suffix-aligned storybook title and updated sub-atomic controllers to bind to standard variables inside templates.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`added-1`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Interactive Popover Organism:`}),` Created `,(0,c.jsx)(r.code,{children:`<ds-contextual-menu>`}),` aggregating nested setting rows and horizontal divider atoms.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Robust Role Mapping:`}),` Assigned spec-compliant `,(0,c.jsx)(r.code,{children:`role="menu"`}),` on cards, `,(0,c.jsx)(r.code,{children:`role="presentation"`}),` on layout headers, and `,(0,c.jsx)(r.code,{children:`role="menuitem"`}),` or `,(0,c.jsx)(r.code,{children:`role="menuitemcheckbox"`}),`/`,(0,c.jsx)(r.code,{children:`role="menuitemradio"`}),` on nested setting rows to meet strict WCAG standards.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Root Context Syncing:`}),` MutationObserver on document roots reflects global setting cascades downstream as host element boolean flags.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Thematic Overrides:`}),` Bound menu card width, min-width, background, and corner rounded radius variables to standard `,(0,c.jsx)(r.code,{children:`--ds-contextual-menu-*`}),` properties.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Storybook Workspace:`}),` Configured complete interactive Controls and detailed CSF3 stories inside `,(0,c.jsx)(r.code,{children:`ContextualMenu.stories.js`}),`.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed-1`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Sub-Atomic Story Mapping:`}),` Synchronized Storybook override controllers to output precise `,(0,c.jsx)(r.code,{children:`--ds-contextual-menu-*`}),` custom styles.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsxs)(r.em,{children:[`This changelog is specific to the `,(0,c.jsx)(r.code,{children:`<ds-contextual-menu>`}),` component. For design system global releases, refer to the main `,(0,c.jsx)(r.a,{href:`?path=/docs/getting-started-changelog--docs`,children:`Getting Started/Changelog`}),`.`]})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};