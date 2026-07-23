import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/TOC [v1.1.0]/Changelog`}),`
`,(0,c.jsx)(r.h1,{id:`changelog`,children:`Changelog`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`110---2026-07-22`,children:`[1.1.0] - 2026-07-22`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`webkit-layer-isolation--contents-header-standard`,children:`WebKit Layer Isolation & CONTENTS Header Standard`}),`
`,(0,c.jsxs)(r.p,{children:[`Synchronized `,(0,c.jsx)(r.code,{children:`ds-toc`}),` with the `,(0,c.jsx)(r.code,{children:`ds-contextual-menu`}),` v1.1.0 scrollbar refactor. Updated default popover title headers to `,(0,c.jsx)(r.code,{children:`'CONTENTS'`}),`, linked sub-atomic height tokens to inner scroll viewports, and resolved WebKit layer freeze bugs when opening the minimap overlay.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`refactored`,children:`Refactored`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Default Header Title:`}),` Configured `,(0,c.jsx)(r.code,{children:`updateAttributes()`}),` to default `,(0,c.jsx)(r.code,{children:`title-text`}),` to `,(0,c.jsx)(r.code,{children:`'CONTENTS'`}),`, ensuring popover menus render clear header titles unless explicitly overridden.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Height Token Mapping:`}),` Linked `,(0,c.jsx)(r.code,{children:`--ds-toc-max-height`}),` to both `,(0,c.jsx)(r.code,{children:`--ds-contextual-menu-max-height`}),` and `,(0,c.jsx)(r.code,{children:`--ds-contextual-menu-scroll-max-height`}),` inside `,(0,c.jsx)(r.code,{children:`toc.css`}),`, ensuring long lists clip properly at custom viewport boundaries.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Safari Layer Freeze on Reveal:`}),` Added `,(0,c.jsx)(r.code,{children:`will-change: opacity, transform`}),` to `,(0,c.jsx)(r.code,{children:`.toc-menu`}),` and attached a micro-layout flush (`,(0,c.jsx)(r.code,{children:`void offsetHeight`}),`) inside `,(0,c.jsx)(r.code,{children:`attributeChangedCallback`}),` when `,(0,c.jsx)(r.code,{children:`opened`}),` switches to `,(0,c.jsx)(r.code,{children:`true`}),`, forcing WebKit to re-bind nested scrollbar composite layers cleanly.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`added`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`13-Item Overflow Testing:`}),` Updated standard mock heading pools to 13 default items and introduced the `,(0,c.jsx)(r.code,{children:`ThirteenItemsOverflow`}),` story with automated play interaction tests.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`100---2026-07-20`,children:`[1.0.0] - 2026-07-20`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`initial-release`,children:`Initial Release`}),`
`,(0,c.jsxs)(r.p,{children:[`The stable debut of the Table of Contents Atom (`,(0,c.jsx)(r.code,{children:`ds-toc`}),`) featuring an Apple-like minimap strip, automatic DOM heading scanning (`,(0,c.jsx)(r.code,{children:`<h1>`}),`–`,(0,c.jsx)(r.code,{children:`<h4>`}),`), `,(0,c.jsx)(r.code,{children:`IntersectionObserver`}),` section tracking, and contextual popover menu integration.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`summary-of-changes`,children:`Summary of Changes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Classification`}),(0,c.jsx)(`th`,{children:`Scope / Context`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Added`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-toc`})}),(0,c.jsx)(`td`,{children:`Initial stable release of the Table of Contents navigation atom.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Added`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`scanHeadings()`})}),(0,c.jsx)(`td`,{children:`Configured automated query scanning for page heading tags with auto-generated anchor IDs.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Added`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`_setupIntersectionObserver()`})}),(0,c.jsx)(`td`,{children:`Bound dynamic scroll observer to highlight active minimap lines and menu options.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Added`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`_observeRootAccessibility`})}),(0,c.jsx)(`td`,{children:`Configured passive root accessibility observer syncing dark, high contrast, reduce motion, and Forced Colors modes.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`added-1`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Apple-like Minimap Strip:`}),` Created proportional thin bar indicators mapped to document heading depth levels.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Contextual Overlay Integration:`}),` Integrated nested `,(0,c.jsx)(r.code,{children:`<ds-contextual-menu>`}),` with smooth section scrolling and "Scroll to top" triggers.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Storybook Workspace:`}),` Configured story suite with interactive Controls, active heading states, and automated `,(0,c.jsx)(r.code,{children:`play`}),` tests.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsxs)(r.em,{children:[`This changelog is specific to the `,(0,c.jsx)(r.code,{children:`<ds-toc>`}),` component. For design system global releases, refer to the main `,(0,c.jsx)(r.a,{href:`?path=/docs/getting-started-changelog--docs`,children:`Getting Started/Changelog`}),`.`]})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};