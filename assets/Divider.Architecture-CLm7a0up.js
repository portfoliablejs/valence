import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";import{t as o}from"./Divider.stories-B-cv-L9S.js";function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Atoms/Divider [v1.0.0]/Architecture`}),`
`,(0,l.jsx)(r.h1,{id:`ds-divider`,children:(0,l.jsx)(r.code,{children:`ds-divider`})}),`
`,(0,l.jsxs)(r.p,{children:[`The `,(0,l.jsx)(r.code,{children:`ds-divider`}),` component is a `,(0,l.jsx)(r.strong,{children:`stateless / presentational`}),` Atom designed to separate content blocks horizontally or vertically while handling semantic accessibility delegation and sub-atomic custom token overrides.`]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,l.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,l.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,l.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host application binds layout attributes (`,(0,l.jsx)(r.code,{children:`orientation`}),`, `,(0,l.jsx)(r.code,{children:`aria-label`}),`) or custom CSS property overrides onto the host element.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Internal Delegation:`}),` `,(0,l.jsx)(r.code,{children:`ds-divider`}),` delegates `,(0,l.jsx)(r.code,{children:`aria-label`}),` and `,(0,l.jsx)(r.code,{children:`aria-orientation`}),` attributes down to its internal Shadow DOM primitive (`,(0,l.jsx)(r.code,{children:`role="separator"`}),`) and scrubs `,(0,l.jsx)(r.code,{children:`aria-label`}),` from the host element to eliminate redundant ARIA warnings.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Encapsulated Presentation:`}),` Layout geometry, margin boundaries, and color transitions are encapsulated inside the Shadow DOM.`]}),`
`]}),`
`,(0,l.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / Layout Container"]
        direction TB
        State["Layout Container / Page Shell"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["ds-divider"]
    end

    State -->|"1. State In: orientation / aria-label"| Component
    Component -->|"2. Render Output: Separator Rule"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,l.jsxs)(r.p,{children:[`The `,(0,l.jsx)(r.code,{children:`ds-divider`}),` component is a purely structural visual primitive and does not expose public slots.`]}),`
`,(0,l.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Slot Name`}),(0,l.jsx)(`th`,{children:`Type / Allowed Children`}),(0,l.jsx)(`th`,{children:`Description`}),(0,l.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,l.jsx)(`tbody`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`default`})}),(0,l.jsx)(`td`,{children:`None`}),(0,l.jsx)(`td`,{children:`Internal separator line primitive only; host child content is not rendered.`}),(0,l.jsx)(`td`,{children:`Renders structural rule primitive`})]})})]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-typescript`,children:`export interface DsDividerState {
  orientation: 'horizontal' | 'vertical';
  ariaLabel?: string;
}

export interface DsDividerSubAtomicHooks {
  '--ds-divider-color'?: string;
  '--ds-divider-thickness'?: string;
  '--ds-divider-margin'?: string;
}
`})}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,l.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Property`}),(0,l.jsx)(`th`,{children:`Attribute`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`orientation`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`orientation`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'horizontal' | 'vertical'`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'horizontal'`})}),(0,l.jsx)(`td`,{children:`Determines whether the separator rule renders horizontally or vertically.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ariaLabel`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`aria-label`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`undefined`})}),(0,l.jsx)(`td`,{children:`Accessibility label delegated down to the internal primitive and scrubbed from the host tag.`})]})]})]}),`
`,(0,l.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Event Name`}),(0,l.jsx)(`th`,{children:`Bubbles / Composed`}),(0,l.jsx)(`th`,{children:`Detail Payload`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsx)(`tbody`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:`None`}),(0,l.jsx)(`td`,{children:`N/A`}),(0,l.jsx)(`td`,{children:`N/A`}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`ds-divider`}),` is a static layout component and does not emit custom interaction events.`]})]})})]}),`
`,(0,l.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`CSS Custom Property`}),(0,l.jsx)(`th`,{children:`Fallback Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-divider-color`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--color-surface-border)`})}),(0,l.jsx)(`td`,{children:`Overrides separator background line stroke color.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-divider-thickness`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--border-width-thin)`})}),(0,l.jsx)(`td`,{children:`Overrides separator rule thickness (height when horizontal, width when vertical).`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-divider-margin`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--space-md) 0`})}),(0,l.jsx)(`td`,{children:`Overrides outer spatial spacing margin bounds.`})]})]})]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Role & ARIA Scrubbing:`}),` The internal primitive carries `,(0,l.jsx)(r.code,{children:`role="separator"`}),`. Passing an `,(0,l.jsx)(r.code,{children:`aria-label`}),` to `,(0,l.jsx)(r.code,{children:`<ds-divider>`}),` delegates `,(0,l.jsx)(r.code,{children:`aria-label`}),` and `,(0,l.jsx)(r.code,{children:`aria-orientation`}),` directly to the internal `,(0,l.jsx)(r.code,{children:`.divider-root`}),` element and automatically purges `,(0,l.jsx)(r.code,{children:`aria-label`}),` from the host custom element tag.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Global Accessibility Propagation:`}),` Listens to class changes on `,(0,l.jsx)(r.code,{children:`document.documentElement`}),` via `,(0,l.jsx)(r.code,{children:`MutationObserver`}),` to sync accessibility modes onto host custom element attributes:`,`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Adjusts rule line stroke contrast against dark surfaces.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces strict binary black stroke bounds.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Maps system active `,(0,l.jsx)(r.code,{children:`CanvasText`}),` palette in Windows High Contrast Mode.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Suppresses background color transition durations.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-divider';

// Horizontal Section Separator
const horizontalDivider = document.createElement('ds-divider');
horizontalDivider.setAttribute('orientation', 'horizontal');
horizontalDivider.setAttribute('aria-label', 'Main section break');

// Vertical Content Separator with Sub-Atomic Overrides
const verticalDivider = document.createElement('ds-divider');
verticalDivider.setAttribute('orientation', 'vertical');
verticalDivider.style.setProperty('--ds-divider-color', 'var(--color-accent)');
verticalDivider.style.setProperty('--ds-divider-thickness', '2px');

document.body.appendChild(horizontalDivider);
document.body.appendChild(verticalDivider);
`})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=i(),a(),r(),o()}))();export{c as default};