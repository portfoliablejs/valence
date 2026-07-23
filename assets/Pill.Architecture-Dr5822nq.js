import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/Pill [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-pill`,children:(0,c.jsx)(r.code,{children:`ds-pill`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-pill`}),` component is a `,(0,c.jsx)(r.strong,{children:`controlled / presentational`}),` Atom designed to render compact information tag badges, categories, or real-time auto-refreshing device and browser network telemetry diagnostics.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host binds attributes (`,(0,c.jsx)(r.code,{children:`variant`}),`, `,(0,c.jsx)(r.code,{children:`label`}),`, `,(0,c.jsx)(r.code,{children:`show-pulse`}),`, `,(0,c.jsx)(r.code,{children:`pulse-color`}),`, `,(0,c.jsx)(r.code,{children:`telemetry-type`}),`, `,(0,c.jsx)(r.code,{children:`aria-label`}),`) to alter design variant presentation, override static tags, or select live telemetry tracking targets.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Passive Browser Interception:`}),` When `,(0,c.jsx)(r.code,{children:`variant="telemetry"`}),` is mapped, the component subscribes directly to low-overhead browser diagnostic APIs (e.g., Performance API, Network Information, resizing loops, or Battery Level state events) to update internal text nodes.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Events Out:`}),` As a passive category tag, this component emits no action-oriented events and does not register native form focus states.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["ds-pill"]
    end

    State -->|"1. State In: variant / label / show-pulse / telemetry-type"| Component

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-pill`}),` component projects light DOM text nodes inside its default slot layout. However, if a static `,(0,c.jsx)(r.code,{children:`label`}),` attribute is specified or if the telemetry variant triggers dynamic updates, the default slot contents are suppressed in favor of state-driven overrides.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`Text / Inline HTML`}),(0,c.jsx)(`td`,{children:`Fallback text category descriptor displayed when no explicit attributes are configured.`}),(0,c.jsx)(`td`,{children:`Remains empty and collapses label wrapper geometry.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export type DsPillTelemetryMetric = 
  | 'rtt' 
  | 'network-type' 
  | 'downlink' 
  | 'online-status' 
  | 'fps' 
  | 'viewport' 
  | 'memory' 
  | 'battery';

export interface DsPillState {
  variant: 'default' | 'telemetry';
  label?: string;
  showPulse: boolean;
  pulseColor?: string;
  telemetryType?: DsPillTelemetryMetric;
  ariaLabel?: string;
}

export interface DsPillSubAtomicHooks {
  '--ds-pill-font'?: string;
  '--ds-pill-padding'?: string;
  '--ds-pill-bg'?: string;
  '--ds-pill-border-width'?: string;
  '--ds-pill-border-color'?: string;
  '--ds-pill-color'?: string;
  '--ds-pill-radius'?: string;
  '--ds-pill-pulse-color'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`variant`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`variant`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'default' | 'telemetry'`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'default'`})}),(0,c.jsx)(`td`,{children:`Configures basic presentation badge mode vs dark telemetry HUD styles.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Immutable text string mapping. Overrides slot projections.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`showPulse`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`show-pulse`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Toggles display of the pulsing status indicator dot.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`pulseColor`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`pulse-color`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Overrides the status dot background-color fill.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`telemetryType`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`telemetry-type`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'rtt'`})}),(0,c.jsx)(`td`,{children:`Selects dynamic browser Web API data stream for automatic text rendering.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ariaLabel`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`aria-label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Directly mapped to status announcers for screen readers.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:`This component is strictly presentational and does not emit custom events.`})]})})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-pill-font`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--font-family)`}),` / `,(0,c.jsx)(r.code,{children:`var(--font-mono)`})]}),(0,c.jsx)(`td`,{children:`Overrides typeface families inside label elements.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-pill-padding`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--space-xs) var(--space-sm)`})}),(0,c.jsx)(`td`,{children:`Overrides internal spacing gaps.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-pill-bg`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-card-bg)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-overlay-dark)`})]}),(0,c.jsx)(`td`,{children:`Overrides structural badge container background fills.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-pill-border-width`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--border-width-thin)`})}),(0,c.jsx)(`td`,{children:`Overrides outline boundary border frame strokes.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-pill-border-color`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-card-border)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-overlay-light)`})]}),(0,c.jsx)(`td`,{children:`Overrides bounding frame border line colors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-pill-color`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-gray-dark)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-white)`})]}),(0,c.jsx)(`td`,{children:`Overrides label text foreground paint values.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-pill-radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-pill)`})}),(0,c.jsx)(`td`,{children:`Overrides corner layout curvature parameters.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-pill-pulse-color`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--color-success)`})}),(0,c.jsx)(`td`,{children:`Overrides animated live status indicator dot background paint.`})]})]})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Screen Reader Announcement:`}),` Leverages `,(0,c.jsx)(r.code,{children:`role="status"`}),` on the custom element wrapper to prompt screen readers to gracefully read telemetry updates without seizing user focus.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Internal State Observer:`}),` Monitors `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` class adjustments through a `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` to sync accessibility modes instantly:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Enhances background contrast ratios.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Maps pure black backdrops and thick white boundaries.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dyslexia`}),`: Forces dyslexia-accessible typefaces.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Halts animated status pulsing loops.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Employs high-contrast active system system colors (`,(0,c.jsx)(r.code,{children:`Canvas`}),`, `,(0,c.jsx)(r.code,{children:`CanvasText`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-pill';

const pill = document.createElement('ds-pill');
pill.setAttribute('variant', 'telemetry');
pill.setAttribute('telemetry-type', 'fps');
pill.setAttribute('show-pulse', '');

// Clean custom property style overrides
pill.style.setProperty('--ds-pill-radius', '2px');
pill.style.setProperty('--ds-pill-bg', 'rgba(0, 0, 0, 0.95)');

document.body.appendChild(pill);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};