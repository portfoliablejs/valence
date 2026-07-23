import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/Toggle [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-toggle`,children:(0,c.jsx)(r.code,{children:`ds-toggle`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-toggle`}),` component is an interactive, presentational `,(0,c.jsx)(r.strong,{children:`controlled`}),` Atom switch designed for binary selection, view toggles, and accessibility switches. It features hardware-accelerated pointer drag tracking, dynamic text label width adjustments, and root class accessibility observer syncs.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host binds attributes (`,(0,c.jsx)(r.code,{children:`checked`}),`, `,(0,c.jsx)(r.code,{children:`disabled`}),`, `,(0,c.jsx)(r.code,{children:`show-icon`}),`, `,(0,c.jsx)(r.code,{children:`text-on`}),`, `,(0,c.jsx)(r.code,{children:`text-off`}),`, `,(0,c.jsx)(r.code,{children:`aria-label`}),`) downstream to toggle toggle checks, block interactions, or render textual cues.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Events Out (`,(0,c.jsx)(r.code,{children:`ds-toggle-change`}),`):`]}),` Fires a custom event indicating when selection states change via drags, swipes, or keyboard focus interactions.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["ds-toggle"]
    end

    State -->|"1. State In: checked / disabled / text-on"| Component
    Component -->|"2. Event Out: ds-toggle-change"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-toggle`}),` component is closed, exposing a default `,(0,c.jsx)(r.code,{children:`<slot>`}),` only to project native fallbacks. All visual tracks, fills, text label overlays, and sliders are nested cleanly within its Shadow DOM boundary.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`None`}),(0,c.jsx)(`td`,{children:`Projected inline DOM elements are hidden; styling is fully encapsulated.`}),(0,c.jsx)(`td`,{children:`Renders sliding mechanical tracks, label containers, and knob icons.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsToggleState {
  checked: boolean;
  disabled: boolean;
  showIcon: boolean;
  textOn?: string;
  textOff?: string;
  ariaLabel?: string;
}

export interface DsToggleSubAtomicHooks {
  '--ds-toggle-knob-size'?: string;
  '--ds-toggle-width'?: string;
  '--ds-toggle-height'?: string;
  '--ds-toggle-radius'?: string;
  '--ds-toggle-bg'?: string;
  '--ds-toggle-border-width'?: string;
  '--ds-toggle-border-color'?: string;
  '--ds-toggle-checked-bg'?: string;
  '--ds-toggle-knob-bg'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`checked`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`checked`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Toggles active binary state. Syncs with nested input checkbox.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Disables pointer drag, click triggers, and keyboard focus paths.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`showIcon`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`show-icon`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`true`})}),(0,c.jsx)(`td`,{children:`Toggles visual line/tick state indicators inside the mechanical sliding knob.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`textOn`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`text-on`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Explicit label text mapped to the active checked track zone.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`textOff`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`text-off`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Explicit label text mapped to the passive unchecked track zone.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ariaLabel`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`aria-label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Accessible tag description mapped to hidden switch checkbox element.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-toggle-change`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ checked: boolean }`})}),(0,c.jsx)(`td`,{children:`Dispatched when states are flipped via clicks, touch gestures, or keyboard switches.`})]})})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toggle-knob-size`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`26px`})}),(0,c.jsx)(`td`,{children:`Overrides circular sliding knob diameter.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toggle-width`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`52px`})}),(0,c.jsx)(`td`,{children:`Overrides track boundary horizontal width.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toggle-height`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--size-height-sm)`})}),(0,c.jsx)(`td`,{children:`Overrides track boundary vertical height.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toggle-radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-pill)`})}),(0,c.jsx)(`td`,{children:`Overrides track container corner border-radius.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toggle-bg`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-gray-xlight)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-surface)`})]}),(0,c.jsx)(`td`,{children:`Overrides unchecked track background color.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toggle-border-width`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--border-width-thin)`})}),(0,c.jsx)(`td`,{children:`Overrides track outline frame stroke thickness.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toggle-border-color`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-gray-light)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-surface-border)`})]}),(0,c.jsx)(`td`,{children:`Overrides track outline frame boundary colors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toggle-checked-bg`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--color-accent)`})}),(0,c.jsx)(`td`,{children:`Overrides checked track background fills.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toggle-knob-bg`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-white)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-gray-dark)`})]}),(0,c.jsx)(`td`,{children:`Overrides sliding knob background fill colors.`})]})]})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Focus & Role Contracts:`}),` Places a hidden `,(0,c.jsx)(r.code,{children:`<input type="checkbox" role="switch">`}),` inside the Shadow DOM to delegate screen reader announcements and support focus flows.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`ARIA Host Scrubbing:`}),` Automatically purges Light DOM `,(0,c.jsx)(r.code,{children:`aria-label`}),` custom attributes on the host custom element and projects them down to the focusable checkbox.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Access Syncing:`}),` Uses a `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` on the HTML root element to capture visual preferences:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Adjusts default track contrast and shifts unchecked knobs to dark grays.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces clear AAA solid black tracks and bordered white knobs.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dyslexia`}),`: Overrides track label typefaces with Comic Sans MS.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Forces immediate 0ms snappings and halts pointer drag tracking.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Employs Windows active system colors (`,(0,c.jsx)(r.code,{children:`Canvas`}),`, `,(0,c.jsx)(r.code,{children:`Highlight`}),`, `,(0,c.jsx)(r.code,{children:`HighlightText`}),`, `,(0,c.jsx)(r.code,{children:`GrayText`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-toggle';

const toggle = document.createElement('ds-toggle');
toggle.setAttribute('text-on', 'ON');
toggle.setAttribute('text-off', 'OFF');
toggle.setAttribute('checked', '');
toggle.setAttribute('aria-label', 'System audio toggle');

// Clean sub-atomic overrides
toggle.style.setProperty('--ds-toggle-radius', '2px');
toggle.style.setProperty('--ds-toggle-checked-bg', 'var(--color-success)');

toggle.addEventListener('ds-toggle-change', (e) => {
  console.log('Toggle flipped! Checked status:', e.detail.checked);
});

document.body.appendChild(toggle);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};