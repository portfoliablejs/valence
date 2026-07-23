import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Molecules/Tooltip [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-tooltip`,children:(0,c.jsx)(r.code,{children:`ds-tooltip`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-tooltip`}),` component is a `,(0,c.jsx)(r.strong,{children:`presentational / controlled`}),` Molecule designed to render floating descriptive caption text overlays and keyboard shortcut hints (`,(0,c.jsx)(r.code,{children:`ds-kbd`}),`). It automatically anchors to preceding sibling elements inside the Light DOM, passively intercepts hover/focus events, and implements complete accessibility observers.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host binds properties (`,(0,c.jsx)(r.code,{children:`text`}),`, `,(0,c.jsx)(r.code,{children:`position`}),`, `,(0,c.jsx)(r.code,{children:`visible`}),`, `,(0,c.jsx)(r.code,{children:`show-kbd`}),`, `,(0,c.jsx)(r.code,{children:`kbd-label`}),`, `,(0,c.jsx)(r.code,{children:`kbd-show-plus`}),`, `,(0,c.jsx)(r.code,{children:`kbd-key`}),`) downstream to control caption content, positions, and nested keyboard layouts.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Passive Parent Observation:`}),` During `,(0,c.jsx)(r.code,{children:`connectedCallback()`}),`, the tooltip automatically binds event listeners to its preceding sibling element or parent node to passively toggle its own `,(0,c.jsx)(r.code,{children:`visible`}),` state during hover (`,(0,c.jsx)(r.code,{children:`mouseenter`}),` / `,(0,c.jsx)(r.code,{children:`mouseleave`}),`) and focus (`,(0,c.jsx)(r.code,{children:`focusin`}),` / `,(0,c.jsx)(r.code,{children:`focusout`}),`) cycles.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Events Out:`}),` As a purely passive presentation overlay, `,(0,c.jsx)(r.code,{children:`ds-tooltip`}),` emits no customized event streams.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Parent["Parent Sibling (e.g. ds-button)"]
        direction TB
        State["Action Target / Hover Scope"]
    end

    subgraph WebComp["ds-tooltip (Shadow DOM Composition)"]
        Component["ds-tooltip"]
        KbdAtom["ds-kbd"]
    end

    State -->|"1. Passive Hover / Focus Event Trigger"| Component
    Component -->|"2. Updates Visibility & Projects Sub-Atoms"| KbdAtom

    %% Styling
    style Parent fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
    style KbdAtom fill:#ffffff,stroke:#cbd5e1,color:#0f172a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-tooltip`}),` component completely seals its Shadow DOM bounds, projecting no slotted light DOM contents to preserve strict spatial coordinate math and layout bounds.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`None`}),(0,c.jsx)(`td`,{children:`Encapsulated layout primitives only; host elements are not projected.`}),(0,c.jsx)(`td`,{children:`Renders standard tooltip caption text and nested shortcut keys.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsTooltipState {
  text: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  visible: boolean;
  showKbd: boolean;
  kbdLabel?: string;
  kbdShowPlus?: boolean;
  kbdKey?: string;
}

export interface DsTooltipSubAtomicHooks {
  '--ds-tooltip-bg'?: string;
  '--ds-tooltip-radius'?: string;
  '--ds-tooltip-border-width'?: string;
  '--ds-tooltip-border-color'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`text`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`text`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`''`})}),(0,c.jsx)(`td`,{children:`The descriptive message text content displayed inside the container body.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`position`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`position`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'bottom' | 'top' | 'left' | 'right'`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'bottom'`})}),(0,c.jsx)(`td`,{children:`Determines the direction where the overlay anchors relative to its target element parent.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`visible`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`visible`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Explicit override forcing the tooltip to display.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`showKbd`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`show-kbd`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Toggles display of the nested shortcut key atom.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`kbdLabel`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`kbd-label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsxs)(`td`,{children:[`Keyboard modifier string passed down to the child `,(0,c.jsx)(r.code,{children:`ds-kbd`}),` component.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`kbdShowPlus`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`kbd-show-plus`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Toggles the combination plus operator inside the shortcut atom.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`kbdKey`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`kbd-key`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`The secondary alphanumeric key passed into the shortcut atom.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:`This component is strictly presentational and does not emit custom events.`})]})})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-tooltip-bg`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-overlay-dark)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-card-bg)`})]}),(0,c.jsx)(`td`,{children:`Overrides background surface container backdrop colors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-tooltip-radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-md)`})}),(0,c.jsx)(`td`,{children:`Overrides layout corner border-radius curves.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-tooltip-border-width`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--border-width-thin)`})}),(0,c.jsx)(`td`,{children:`Overrides outer boundary stroke frame thickness.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-tooltip-border-color`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`transparent`}),` / `,(0,c.jsx)(r.code,{children:`rgba(255, 255, 255, 0.15)`})]}),(0,c.jsx)(`td`,{children:`Overrides outer border boundary edge colors.`})]})]})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Decorative Regions:`}),` The internal container carries `,(0,c.jsx)(r.code,{children:`role="tooltip"`}),` and dynamically synchronizes `,(0,c.jsx)(r.code,{children:`aria-hidden`}),` Based on visible attributes.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Auto focus trigger:`}),` Tooltip script automatically assigns `,(0,c.jsx)(r.code,{children:`tabindex="0"`}),` to host triggers lacking tabindex to guarantee standard keyboard focus-visible traversal can execute triggers.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Disabled Suppression:`}),` Passive MutationObserver tracks parent target `,(0,c.jsx)(r.code,{children:`disabled`}),` attributes. When a parent triggers a disabled state, any active tooltips are instantly hidden and suppressed.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Access Syncing:`}),` Uses a `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` on the HTML root element to capture visual preferences:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Adjusts default track contrast and shifts unchecked knobs to dark grays.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces strict AAA binary layouts (pure white background with bordered black outlines and text).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dyslexia`}),`: Overrides tooltip label typefaces with Comic Sans MS.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Forces immediate 0ms snappings and halts pointer slide animations.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Employs Windows active system colors (`,(0,c.jsx)(r.code,{children:`Canvas`}),`, `,(0,c.jsx)(r.code,{children:`CanvasText`}),` and `,(0,c.jsx)(r.code,{children:`Highlight`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-tooltip';

const button = document.createElement('button');
button.textContent = 'Save Project';

const tooltip = document.createElement('ds-tooltip');
tooltip.setAttribute('text', 'Save active file changes');
tooltip.setAttribute('show-kbd', '');
tooltip.setAttribute('kbd-label', '⌘ Cmd');
tooltip.setAttribute('kbd-show-plus', '');
tooltip.setAttribute('kbd-key', 'S');

// Clean sub-atomic overrides
tooltip.style.setProperty('--ds-tooltip-radius', '2px');
tooltip.style.setProperty('--ds-tooltip-bg', 'rgba(0, 0, 0, 0.9)');

document.body.appendChild(button);
document.body.appendChild(tooltip); // Tooltip anchors automatically to its preceding sibling
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};