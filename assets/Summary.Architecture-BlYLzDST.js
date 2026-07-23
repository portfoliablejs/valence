import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";import{t as o}from"./Summary.stories-CmViqGQ2.js";function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Molecules/Summary/Architecture`}),`
`,(0,l.jsx)(r.h1,{id:`ds-summary`,children:(0,l.jsx)(r.code,{children:`ds-summary`})}),`
`,(0,l.jsxs)(r.p,{children:[`The `,(0,l.jsx)(r.code,{children:`ds-summary`}),` component is a `,(0,l.jsx)(r.strong,{children:`stateless (presentational)`}),` Molecule designed for rendering summaries, executive briefs, and key case study findings using glassmorphic audio-player container styles and controllable slotted metric grids.`]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,l.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,l.jsxs)(r.p,{children:[`The component strictly implements the `,(0,l.jsx)(r.strong,{children:`Unidirectional Data Flow`}),` pattern:`]}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsxs)(r.strong,{children:[`State In (`,(0,l.jsx)(r.code,{children:`text`}),`, `,(0,l.jsx)(r.code,{children:`active`}),`, `,(0,l.jsx)(r.code,{children:`label-header`}),`, `,(0,l.jsx)(r.code,{children:`show-metrics`}),`):`]}),` The host application binds primitive text and active state attributes downstream onto the host element.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsxs)(r.strong,{children:[`Events Out (`,(0,l.jsx)(r.code,{children:`ds-summary-complete`}),`):`]}),` Emits a custom DOM event when the dynamic typing sequence finishes rendering text and reveals slotted metric cards.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Passive Presentation:`}),` The component contains zero business logic and relies on direct attribute bindings for localizable header labels.`]}),`
`]}),`
`,(0,l.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host SPA / App Shell"]
        direction TB
        State["App State / i18n Pipeline"]
    end

    subgraph WebComp["Presentational Web Component"]
        Summary["ds-summary"]
    end

    State -->|"1. State In<br/>text = '...', active = true, show-metrics = true"| Summary
    Summary -->|"2. Event Out<br/>ds-summary-complete"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Summary fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,l.jsxs)(r.p,{children:[`The `,(0,l.jsx)(r.code,{children:`ds-summary`}),` component provides a default `,(0,l.jsx)(r.code,{children:`<slot>`}),` channel inside a two-column CSS grid to project `,(0,l.jsx)(r.code,{children:`ds-metric-card`}),` child atoms.`]}),`
`,(0,l.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Slot Name`}),(0,l.jsx)(`th`,{children:`Type / Allowed Children`}),(0,l.jsx)(`th`,{children:`Description`}),(0,l.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,l.jsx)(`tbody`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`default`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ds-metric-card`})}),(0,l.jsx)(`td`,{children:`Projects summary KPI cards into a 2-column grid beneath the primary text body.`}),(0,l.jsxs)(`td`,{children:[`Collapses grid wrapper if no metric cards are slotted or if `,(0,l.jsx)(r.code,{children:`show-metrics="false"`}),`.`]})]})})]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,l.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Property`}),(0,l.jsx)(`th`,{children:`Attribute`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`text`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`text`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`''`})}),(0,l.jsx)(`td`,{children:`Primary summary body copy rendered inside the block.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`active`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`active`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`boolean`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`false`})}),(0,l.jsxs)(`td`,{children:[`When set to `,(0,l.jsx)(r.code,{children:`true`}),`, triggers the thinking dots and typing animation sequence.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`labelHeader`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`label-header`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'Summary'`})}),(0,l.jsx)(`td`,{children:`Localizable header title displayed at the top of the block.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`showMetrics`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`show-metrics`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`boolean`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`true`})}),(0,l.jsx)(`td`,{children:`Toggles visibility of the slotted metric cards grid.`})]})]})]}),`
`,(0,l.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Event Name`}),(0,l.jsx)(`th`,{children:`Bubbles / Composed`}),(0,l.jsx)(`th`,{children:`Detail Payload`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsx)(`tbody`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ds-summary-complete`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`true`}),` / `,(0,l.jsx)(r.code,{children:`true`})]}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`{ text: string }`})}),(0,l.jsx)(`td`,{children:`Emitted when the dynamic typing animation finishes and reveals slotted metric cards.`})]})})]}),`
`,(0,l.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`CSS Custom Property`}),(0,l.jsx)(`th`,{children:`Fallback Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-summary-bg`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--overlay-glass-bg, rgba(235, 235, 240, 0.6))`})}),(0,l.jsx)(`td`,{children:`Overrides background container surface color.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-summary-border-color`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--color-surface-border, rgba(0, 0, 0, 0.08))`})}),(0,l.jsx)(`td`,{children:`Overrides summary block border color.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-summary-header-color`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--color-accent, #2B71F0)`})}),(0,l.jsx)(`td`,{children:`Overrides header label font color.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-summary-text-color`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--color-black, #000000)`})}),(0,l.jsx)(`td`,{children:`Overrides summary body copy font color.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-summary-padding`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`12px 16px`})}),(0,l.jsx)(`td`,{children:`Overrides internal container padding.`})]})]})]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`ARIA Scrubbing:`}),` Purges host-level `,(0,l.jsx)(r.code,{children:`aria-label`}),` attributes and delegates them downstream onto the internal Shadow DOM summary container.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Live Regions:`}),` Renders `,(0,l.jsx)(r.code,{children:`aria-live="polite"`}),` on the summary text container to inform screen readers as dynamic typing updates finish.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Global Accessibility Propagation:`}),` Listens to class changes on `,(0,l.jsx)(r.code,{children:`document.documentElement`}),` via `,(0,l.jsx)(r.code,{children:`MutationObserver`}),` to sync accessibility modes:`,`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Adjusts glass container, border, and text contrast levels.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces solid black background and 2px solid white borders.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-large-text`}),`: Scales body copy font size to 18px and header to 13px.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-dyslexia`}),`: Applies high-legibility letter spacing and font stacks.`]}),`
`]}),`
`]}),`
`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=i(),a(),r(),o()}))();export{c as default};