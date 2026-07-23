import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/KBD [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-kbd`,children:(0,c.jsx)(r.code,{children:`ds-kbd`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-kbd`}),` component is a `,(0,c.jsx)(r.strong,{children:`presentational`}),` Atom designed to render keyboard shortcuts, key combinations, and modifier cues within tooltips, command palettes, and inline text documentation.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host application binds modifier key labels through slot boundaries, and secondary key values through attributes (`,(0,c.jsx)(r.code,{children:`variant`}),`, `,(0,c.jsx)(r.code,{children:`key`}),`, `,(0,c.jsx)(r.code,{children:`show-plus`}),`) to configure combination display behavior.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Events Out:`}),` As a purely passive presentational component, `,(0,c.jsx)(r.code,{children:`ds-kbd`}),` does not register external input bindings, trigger action-oriented events, or capture focus states.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["ds-kbd"]
    end

    State -->|"1. State In: variant / key / show-plus"| Component

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-kbd`}),` component accepts standard text-based modifier labels or graphic glyphs in its default slot. When configured as a multi-key shortcut via the `,(0,c.jsx)(r.code,{children:`show-plus`}),` attribute, the internal layout engine appends a non-translatable `,(0,c.jsx)(r.code,{children:`+`}),` operator and an alphanumeric trailing key structure directly into the Shadow DOM container.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`Text / HTML Subtree`}),(0,c.jsxs)(`td`,{children:[`Primary keyboard key label (e.g., `,(0,c.jsx)(r.code,{children:`⌥ Option`}),`, `,(0,c.jsx)(r.code,{children:`Ctrl`}),`).`]}),(0,c.jsx)(`td`,{children:`Remains empty and collapses inline geometry.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsKbdState {
  variant: 'default' | 'inverted';
  showPlus: boolean;
  key?: string;
}

export interface DsKbdSubAtomicHooks {
  '--ds-kbd-bg'?: string;
  '--ds-kbd-border-width'?: string;
  '--ds-kbd-border-color'?: string;
  '--ds-kbd-radius'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`variant`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`variant`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'default' | 'inverted'`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'default'`})}),(0,c.jsxs)(`td`,{children:[`The visual rendering mode. Use `,(0,c.jsx)(r.code,{children:`inverted`}),` for high-contrast dark container overlays.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`showPlus`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`show-plus`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Activates trailing modifier layout configurations for multi-key shortcuts.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`key`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`key`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Alphanumeric character to display in multi-key combination chains.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:`This component is strictly presentational and does not emit custom events.`})]})})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-kbd-bg`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-surface)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-card-bg)`})]}),(0,c.jsx)(`td`,{children:`Overrides background surface container backdrop colors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-kbd-border-width`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--border-width-thin)`})}),(0,c.jsx)(`td`,{children:`Overrides outer boundary stroke frame thickness.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-kbd-border-color`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--color-kbd-border)`})}),(0,c.jsx)(`td`,{children:`Overrides outer border boundary edge colors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-kbd-radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-sm)`})}),(0,c.jsx)(`td`,{children:`Overrides layout corner border radius geometry.`})]})]})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`ARIA Semantics:`}),` Uses passive host wrapper tags containing semantic `,(0,c.jsx)(r.code,{children:`<kbd>`}),` structures inside the Shadow DOM boundary for proper screen reader translation.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Accessibility Propagation:`}),` Listens to class changes on `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` using a `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` to sync accessibility modes across the shadow boundary:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Adjusts backdrop contrast scales.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Installs binary `,(0,c.jsx)(r.code,{children:`#000000`}),` / `,(0,c.jsx)(r.code,{children:`#FFFFFF`}),` WCAG AAA boundaries.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dyslexia`}),`: Enforces dyslexia-friendly typeface mappings and spacing.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Applies system active `,(0,c.jsx)(r.code,{children:`Canvas`}),` and `,(0,c.jsx)(r.code,{children:`CanvasText`}),` palettes for Windows High Contrast Mode.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Forces standard zero-duration animation transitions.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-kbd';

const kbd = document.createElement('ds-kbd');
kbd.textContent = '⌥ Option';
kbd.setAttribute('show-plus', '');
kbd.setAttribute('key', 'P');

// Overriding default style tokens cleanly
kbd.style.setProperty('--ds-kbd-radius', '4px');
kbd.style.setProperty('--ds-kbd-bg', 'var(--color-gray-xlight)');

document.body.appendChild(kbd);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};