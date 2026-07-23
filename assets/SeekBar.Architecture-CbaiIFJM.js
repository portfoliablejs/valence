import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/Seek Bar [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-seek-bar`,children:(0,c.jsx)(r.code,{children:`ds-seek-bar`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-seek-bar`}),` component is an interactive, highly accessible `,(0,c.jsx)(r.strong,{children:`controlled`}),` Atom slider designed for media timelines, volume controllers, and custom playback mixers. It is backed by a mouse-tracking `,(0,c.jsx)(r.code,{children:`ds-tooltip`}),` molecule, incorporates spring-physics animations, and supports right-to-left layout orientations.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host binds properties (`,(0,c.jsx)(r.code,{children:`percent`}),`, `,(0,c.jsx)(r.code,{children:`variant`}),`, `,(0,c.jsx)(r.code,{children:`disabled`}),`, `,(0,c.jsx)(r.code,{children:`show-tooltip`}),`, `,(0,c.jsx)(r.code,{children:`tooltip-text`}),`, `,(0,c.jsx)(r.code,{children:`show-kbd`}),`, `,(0,c.jsx)(r.code,{children:`kbd-label`}),`, `,(0,c.jsx)(r.code,{children:`aria-label`}),`) downstream to configure timeline positions, track variants, or customize tooltip indicators.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Events Out (`,(0,c.jsx)(r.code,{children:`ds-seek`}),`):`]}),` Dispatch custom events containing the current percent calculation when users drag, touch, or click along the active container bounds.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["ds-seek-bar"]
    end

    State -->|"1. State In: percent / variant / disabled"| Component
    Component -->|"2. Event Out: ds-seek"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-seek-bar`}),` component is structurally sealed, wrapping its tracks, fills, handle knobs, and floating tooltip elements directly inside its Shadow DOM boundaries. No public slot targets are exposed to ensure robust click-target calculations.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`None`}),(0,c.jsx)(`td`,{children:`Encapsulated layout primitives only; host elements are not projected.`}),(0,c.jsx)(`td`,{children:`Renders sliding progress fills, handle knobs, and nested tooltip.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsSeekBarState {
  percent: number;
  variant: 'default' | 'top-bar' | 'vertical';
  disabled: boolean;
  showTooltip: boolean;
  tooltipText?: string;
  showKbd?: boolean;
  kbdLabel?: string;
  ariaLabel?: string;
}

export interface DsSeekBarSubAtomicHooks {
  '--ds-seek-bar-track-bg'?: string;
  '--ds-seek-bar-fill-bg'?: string;
  '--ds-seek-bar-knob-bg'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`percent`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`percent`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`number`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0`})}),(0,c.jsxs)(`td`,{children:[`Active progression value (from 0 to 100). Sets `,(0,c.jsx)(r.code,{children:`aria-valuenow`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`variant`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`variant`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'default' | 'top-bar' | 'vertical'`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'default'`})}),(0,c.jsx)(`td`,{children:`Configures embedded inline, full-width top-viewport, or vertical slider geometries.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsxs)(`td`,{children:[`Suppresses touch, mouse, and keyboard events, hides the tooltip, and sets `,(0,c.jsx)(r.code,{children:`aria-disabled`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`showTooltip`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`show-tooltip`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`true`})}),(0,c.jsx)(`td`,{children:`Controls rendering of the floating tracking tooltip.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`tooltipText`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`tooltip-text`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Custom text prefix or override rendered inside the floating tooltip.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`showKbd`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`show-kbd`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Toggles shortcut key indicator inside the hover tooltip.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`kbdLabel`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`kbd-label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsxs)(`td`,{children:[`Shortcut label passed downstream to tooltip `,(0,c.jsx)(r.code,{children:`ds-kbd`}),` atoms.`]})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-seek`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ percent: number }`})}),(0,c.jsx)(`td`,{children:`Emitted continuously in real-time when the user is dragging, touching, or keying slider inputs.`})]})})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-seek-bar-track-bg`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`rgba(0, 0, 0, 0.12)`}),` / `,(0,c.jsx)(r.code,{children:`rgba(255, 255, 255, 0.2)`})]}),(0,c.jsx)(`td`,{children:`Overrides background color of the unfilled timeline track.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-seek-bar-fill-bg`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-accent)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-white)`})]}),(0,c.jsx)(`td`,{children:`Overrides background color of the completed track fill.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-seek-bar-knob-bg`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-accent)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-white)`})]}),(0,c.jsx)(`td`,{children:`Overrides background color of the draggable handle knob.`})]})]})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Aria Role Contract:`}),` Delegates `,(0,c.jsx)(r.code,{children:`role="slider"`}),`, `,(0,c.jsx)(r.code,{children:`aria-valuemin="0"`}),`, and `,(0,c.jsx)(r.code,{children:`aria-valuemax="100"`}),` to the internal sliding container.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Keyboard Navigation:`}),` Fully supports `,(0,c.jsx)(r.code,{children:`ArrowRight`}),`, `,(0,c.jsx)(r.code,{children:`ArrowUp`}),` (increment), `,(0,c.jsx)(r.code,{children:`ArrowLeft`}),`, `,(0,c.jsx)(r.code,{children:`ArrowDown`}),` (decrement), `,(0,c.jsx)(r.code,{children:`PageUp`}),` (+10%), `,(0,c.jsx)(r.code,{children:`PageDown`}),` (-10%), `,(0,c.jsx)(r.code,{children:`Home`}),` (0%), and `,(0,c.jsx)(r.code,{children:`End`}),` (100%) interactions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Bi-directional Support:`}),` Automatically tracks root-level `,(0,c.jsx)(r.code,{children:`dir="rtl"`}),` mutations on `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` to invert dragging orientations and key translations.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Access Syncing:`}),` Employs a `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` to toggle accessibility classes as boolean host attributes:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Adjusts default track contrast boundaries.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces strict binary tracks and bordered knobs.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Disables track expansion transitions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Employs Windows active system colors (`,(0,c.jsx)(r.code,{children:`Highlight`}),` for fills; `,(0,c.jsx)(r.code,{children:`HighlightText`}),` for knobs; `,(0,c.jsx)(r.code,{children:`CanvasText`}),` for tracks).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-seek-bar';

const seek = document.createElement('ds-seek-bar');
seek.setAttribute('percent', '35');
seek.setAttribute('aria-label', 'Timeline seeker');
seek.setAttribute('show-kbd', '');
seek.setAttribute('kbd-label', 'Space');

// Custom design token overrides
seek.style.setProperty('--ds-seek-bar-track-bg', 'rgba(255, 255, 255, 0.1)');
seek.style.setProperty('--ds-seek-bar-fill-bg', 'var(--color-success)');

seek.addEventListener('ds-seek', (e) => {
  console.log('User seeking to:', e.detail.percent);
});

document.body.appendChild(seek);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};