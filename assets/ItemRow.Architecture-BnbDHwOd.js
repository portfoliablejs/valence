import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Molecules/Item Row [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-item-row`,children:(0,c.jsx)(r.code,{children:`ds-item-row`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-item-row`}),` component is an interactive, presentational `,(0,c.jsx)(r.strong,{children:`controlled`}),` Molecule designed to render uniform, highly accessible list rows, settings items, and navigation blocks. It aggregates custom leading `,(0,c.jsx)(r.code,{children:`ds-icon`}),` and trailing `,(0,c.jsx)(r.code,{children:`ds-kbd`}),` Atoms on the left/center, while housing configurable form `,(0,c.jsx)(r.code,{children:`ds-toggle`}),`, `,(0,c.jsx)(r.code,{children:`ds-check`}),`, or `,(0,c.jsx)(r.code,{children:`ds-radio`}),` Controls on the right.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host application binds styling variables, keyboard modifiers, and active form states (`,(0,c.jsx)(r.code,{children:`label`}),`, `,(0,c.jsx)(r.code,{children:`icon`}),`, `,(0,c.jsx)(r.code,{children:`show-icon`}),`, `,(0,c.jsx)(r.code,{children:`control`}),`, `,(0,c.jsx)(r.code,{children:`active`}),`, `,(0,c.jsx)(r.code,{children:`selected`}),`, `,(0,c.jsx)(r.code,{children:`disabled`}),`) downstream.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Events Out (`,(0,c.jsx)(r.code,{children:`ds-row-click`}),`):`]}),` Captures mouse clicks or spacebar/enter strokes across the container surface, toggling attributes depending on active right-side controls, and dispatches unified event payloads.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart TD
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["ds-item-row (Shadow DOM Composition)"]
        Component["ds-item-row"]
        IconAtom["ds-icon (Leading)"]
        KbdAtom["ds-kbd (Center)"]
        ControlContainer["Control Container"]
        ActiveControl["ds-toggle / ds-check / ds-radio"]
    end

    State -->|"1. State In: label / icon / control / active / selected"| Component
    Component -->|"2. Directs Leading Icon"| IconAtom
    Component -->|"3. Directs Keyboard Info"| KbdAtom
    Component -->|"4. Appends Form Widget"| ControlContainer
    ControlContainer -->|"5. Syncs Widget States"| ActiveControl

    Component -->|"6. Event Out: ds-row-click"| State
    ActiveControl -->|"6. Change Interceptor: ds-row-click"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
    style IconAtom fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style KbdAtom fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style ControlContainer fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style ActiveControl fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-item-row`}),` component encapsulates its content structure inside Shadow DOM blocks, keeping the layout compact and aligned. No public slots are projected to ensure that nested label truncation and control columns behave uniformly.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`None`}),(0,c.jsx)(`td`,{children:`Encapsulated layout primitives only; host elements are not projected.`}),(0,c.jsx)(`td`,{children:`Renders leading icons, labels, shortcuts, and custom interactive form controls.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export type DsItemRowControlType = 'toggle' | 'check' | 'radio' | 'none';

export interface DsItemRowState {
  label: string;
  showIcon?: boolean;
  icon?: string;
  iconVariant?: 'outline' | 'fill';
  showKbd?: boolean;
  kbd?: string;
  kbdVariant?: 'default' | 'inverted';
  kbdShowPlus?: boolean;
  kbdKey?: string;
  control?: DsItemRowControlType;
  checkHasBackground?: boolean;
  active?: boolean;
  selected?: boolean;
  disabled?: boolean;
  toggleTextOn?: string;
  toggleTextOff?: string;
}

export interface DsItemRowSubAtomicHooks {
  '--ds-icon-size'?: string;
  '--ds-toggle-width'?: string;
  '--ds-toggle-height'?: string;
  '--ds-toggle-knob-size'?: string;
  '--ds-check-size'?: string;
  '--ds-radio-size'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`''`})}),(0,c.jsx)(`td`,{children:`Primary text string rendered as the left aligned label.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`showIcon`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`show-icon`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Toggles visibility of the left leading icon.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`icon`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`icon`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsxs)(`td`,{children:[`Registry identifier passed downstream to the nested `,(0,c.jsx)(r.code,{children:`ds-icon`}),` component.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`iconVariant`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`icon-variant`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'outline' | 'fill'`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'outline'`})}),(0,c.jsxs)(`td`,{children:[`Vector rendering variant passed to the leading `,(0,c.jsx)(r.code,{children:`ds-icon`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`showKbd`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`show-kbd`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsxs)(`td`,{children:[`Toggles rendering of the keyboard shortcut `,(0,c.jsx)(r.code,{children:`ds-kbd`}),` component.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`kbd`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`kbd`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsxs)(`td`,{children:[`Primary modifier shortcut key passed downstream to `,(0,c.jsx)(r.code,{children:`ds-kbd`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`control`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`control`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'toggle' | 'check' | 'radio' | 'none'`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'none'`})}),(0,c.jsx)(`td`,{children:`Determines whether a form switch, checkbox, or radio button mounts on the right.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`active`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`active`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsxs)(`td`,{children:[`Toggle state of the row when `,(0,c.jsx)(r.code,{children:`control="toggle"`}),` is active.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`selected`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`selected`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsxs)(`td`,{children:[`Selection state of the row when `,(0,c.jsx)(r.code,{children:`control="check"`}),` or `,(0,c.jsx)(r.code,{children:`control="radio"`}),` is active.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Blocks all mouse/touch interactions, strips keyboard focus, and disables child controls.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-row-click`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ control: string, active: boolean, selected: boolean, label: string }`})}),(0,c.jsx)(`td`,{children:`Dispatched when the row container is clicked or activated via key binds. Passes current state upstream.`})]})})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsx)(r.p,{children:`This composite molecule overrides sub-atomic variables on nested components to ensure proportional scaling inside navigation cards:`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`ds-toggle`}),`: overrides track size and knob size using `,(0,c.jsx)(r.code,{children:`--ds-toggle-width: 44px`}),`, `,(0,c.jsx)(r.code,{children:`--ds-toggle-height: 24px`}),`, and `,(0,c.jsx)(r.code,{children:`--ds-toggle-knob-size: 18px`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`ds-check`}),`: overrides bounding box size using `,(0,c.jsx)(r.code,{children:`--ds-check-size: 20px`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`ds-radio`}),`: overrides bounding box size using `,(0,c.jsx)(r.code,{children:`--ds-radio-size: 20px`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`ds-icon`}),`: overrides leading icon size using `,(0,c.jsx)(r.code,{children:`--ds-icon-size: var(--size-icon-md, 20px)`}),`.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Aria Roles & Traversal:`}),` When `,(0,c.jsx)(r.code,{children:`control="none"`}),`, delegates `,(0,c.jsx)(r.code,{children:`role="button"`}),` and `,(0,c.jsx)(r.code,{children:`tabindex="0"`}),` to the row container for focus-visible navigation. When form controls are active, the row is treated as a passive grouping, delegating focus directly into nested `,(0,c.jsx)(r.code,{children:`ds-toggle`}),`, `,(0,c.jsx)(r.code,{children:`ds-check`}),`, or `,(0,c.jsx)(r.code,{children:`ds-radio`}),` elements.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`ARIA Host Scrubbing:`}),` Automatically purges Light DOM `,(0,c.jsx)(r.code,{children:`aria-label`}),` tags and applies them downstream directly onto focusable primitives.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Access Syncing:`}),` MutationObserver on document roots reflects global setting cascades downstream as host element boolean flags:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Adjusts default hover background contrast boundaries.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces strict AAA border separators.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dyslexia`}),`: Overrides row label typefaces with Comic Sans MS.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Forces immediate 0ms hover backgrounds.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Employs Windows active system colors (`,(0,c.jsx)(r.code,{children:`Canvas`}),`, `,(0,c.jsx)(r.code,{children:`Highlight`}),`, and `,(0,c.jsx)(r.code,{children:`HighlightText`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-item-row';

const row = document.createElement('ds-item-row');
row.setAttribute('label', 'Enable Subtitles');
row.setAttribute('show-icon', '');
row.setAttribute('icon', 'language');
row.setAttribute('control', 'toggle');
row.setAttribute('active', 'true');
row.setAttribute('toggle-text-on', 'ON');
row.setAttribute('toggle-text-off', 'OFF');

row.addEventListener('ds-row-click', (e) => {
  console.log('Row clicked! Form switch status:', e.detail.active);
});

document.body.appendChild(row);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};