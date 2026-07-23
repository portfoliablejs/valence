import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/Subtitle [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-subtitle`,children:(0,c.jsx)(r.code,{children:`ds-subtitle`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-subtitle`}),` component is an interactive, presentational `,(0,c.jsx)(r.strong,{children:`controlled`}),` Atom designed for overlay media captions and real-time screen reader announcements. It supports free pointer-dragging repositioning, incorporates CSS-driven fade animations, and implements polite ARIA announcements.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host shell binds properties (`,(0,c.jsx)(r.code,{children:`text`}),`, `,(0,c.jsx)(r.code,{children:`visible`}),`, `,(0,c.jsx)(r.code,{children:`aria-label`}),`) to render caption strings and trigger visibility transitions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Events Out:`}),` Captures mouse/pointer events inside the custom element to support free drag coordinate mapping, dispatching tracking events (`,(0,c.jsx)(r.code,{children:`ds-subtitle-dragstart`}),`, `,(0,c.jsx)(r.code,{children:`ds-subtitle-dragend`}),`) upstream.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["ds-subtitle"]
    end

    State -->|"1. State In: text / visible / aria-label"| Component
    Component -->|"2. Event Out: ds-subtitle-dragstart / ds-subtitle-dragend"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-subtitle`}),` component can consume WebVTT cue text via standard light DOM slots when no explicit `,(0,c.jsx)(r.code,{children:`text`}),` attribute is provided, fallback-rendering subtitle structures dynamically.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`Text / Inline HTML`}),(0,c.jsxs)(`td`,{children:[`WebVTT cue content projected dynamically if `,(0,c.jsx)(r.code,{children:`text`}),` attribute is omitted.`]}),(0,c.jsx)(`td`,{children:`Renders empty and collapses subtitle overlay geometry.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsSubtitleState {
  text?: string;
  visible: boolean;
  ariaLabel?: string;
}

export interface DsSubtitleSubAtomicHooks {
  '--ds-subtitle-font'?: string;
  '--ds-subtitle-padding'?: string;
  '--ds-subtitle-bg'?: string;
  '--ds-subtitle-color'?: string;
  '--ds-subtitle-radius'?: string;
  '--ds-subtitle-border-width'?: string;
  '--ds-subtitle-border-color'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`text`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`text`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`The caption string content to be displayed in the overlay bounds.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`visible`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`visible`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Toggles display visible states. Triggers internal transition classes.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ariaLabel`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`aria-label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Accessible caption label delegated down for screen readers.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-subtitle-dragstart`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ x: number, y: number }`})}),(0,c.jsx)(`td`,{children:`Emitted when the user grabs and initiates pointer-drag repositioning.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-subtitle-dragend`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ x: number, y: number }`})}),(0,c.jsx)(`td`,{children:`Emitted when users release pointer dragging across the viewport.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-subtitle-font`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--font-family)`})}),(0,c.jsx)(`td`,{children:`Overrides typeface family.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-subtitle-padding`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--space-xs) var(--space-sm)`})}),(0,c.jsx)(`td`,{children:`Overrides internal caption container padding margins.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-subtitle-bg`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-gray-dark)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-player-bg)`})]}),(0,c.jsx)(`td`,{children:`Overrides caption container background fill colors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-subtitle-color`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--color-white)`})}),(0,c.jsx)(`td`,{children:`Overrides text foreground paint colors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-subtitle-radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-sm)`})}),(0,c.jsx)(`td`,{children:`Overrides corner curvature dimensions.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-subtitle-border-width`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--border-width-none)`}),` / `,(0,c.jsx)(r.code,{children:`var(--border-width-thin)`})]}),(0,c.jsx)(`td`,{children:`Overrides outer boundary border thickness.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-subtitle-border-color`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`transparent`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-card-border)`})]}),(0,c.jsx)(`td`,{children:`Overrides outer bounding frame outline colors.`})]})]})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Aria Role Contract:`}),` Incorporates `,(0,c.jsx)(r.code,{children:`aria-live="polite"`}),` directly on internal subtitle wrappers, prompting screen readers to immediately capture VTT cue updates without breaking page context.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`ARIA Host Scrubbing:`}),` Automatically scrubs the Light DOM host attribute `,(0,c.jsx)(r.code,{children:`aria-label`}),` and delegates it down to the internal text container.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Accessibility Propagation:`}),` Integrates `,(0,c.jsx)(r.code,{children:`_observeRootAccessibility`}),` to sync viewport visual preferences:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Shifts background colors to dark media player HUD tokens.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces strict AAA binary contrast ratios (thick black borders with solid white backgrounds).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dyslexia`}),`: Forces Comic Sans MS fonts for dyslexia accommodations.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Forces instant 0ms visibility transitions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Employs Windows active system colors (`,(0,c.jsx)(r.code,{children:`Canvas`}),` and `,(0,c.jsx)(r.code,{children:`CanvasText`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-subtitle';

const subtitle = document.createElement('ds-subtitle');
subtitle.setAttribute('text', 'Hello, and welcome to this case study!');
subtitle.setAttribute('visible', 'true');
subtitle.setAttribute('aria-label', 'English captions');

// Clean sub-atomic overrides
subtitle.style.setProperty('--ds-subtitle-bg', 'rgba(0, 0, 0, 0.85)');
subtitle.style.setProperty('--ds-subtitle-color', 'yellow');

document.body.appendChild(subtitle);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};