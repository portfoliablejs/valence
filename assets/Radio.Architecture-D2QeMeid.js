import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/Radio [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-radio`,children:(0,c.jsx)(r.code,{children:`ds-radio`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-radio`}),` component is an interactive, presentational `,(0,c.jsx)(r.strong,{children:`controlled`}),` Atom designed to render minimalist circular vector selection choices. It incorporates spring-physics hover/active transitions, full keyboard trigger listeners, validation fault styling, and root-level accessibility syncing.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host shell binds attributes (`,(0,c.jsx)(r.code,{children:`selected`}),`, `,(0,c.jsx)(r.code,{children:`disabled`}),`, `,(0,c.jsx)(r.code,{children:`invalid`}),`, `,(0,c.jsx)(r.code,{children:`aria-label`}),`) to toggle selection marks, suppress focus paths, or apply error indicators.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Events Out:`}),` Captures user clicks or standard form interaction keys (`,(0,c.jsx)(r.code,{children:`Space`}),`, `,(0,c.jsx)(r.code,{children:`Enter`}),`) to internally toggle selection attributes and delegates native events upstream.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["ds-radio"]
    end

    State -->|"1. State In: selected / disabled / invalid"| Component
    Component -->|"2. Event Out: click / keydown"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-radio`}),` component encapsulates its high-contrast SVG path indicators directly within its Shadow DOM boundary and does not support projected slot content to preserve spatial layout alignment.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`None`}),(0,c.jsx)(`td`,{children:`Encapsulated SVG paths only; host elements are not projected.`}),(0,c.jsx)(`td`,{children:`Renders circular radio outline and scaling indicator dot.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsRadioState {
  selected: boolean;
  disabled: boolean;
  invalid: boolean;
  ariaLabel?: string;
}

export interface DsRadioSubAtomicHooks {
  '--ds-radio-size'?: string;
  '--ds-radio-color'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`selected`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`selected`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsxs)(`td`,{children:[`Toggles selection state and animates the inner scale dot. Reflects to `,(0,c.jsx)(r.code,{children:`aria-checked`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsxs)(`td`,{children:[`Disables interactive states, strips keyboard focus, and reflects to `,(0,c.jsx)(r.code,{children:`aria-disabled`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`invalid`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`invalid`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsxs)(`td`,{children:[`Triggers failure states using error token values. Reflects to `,(0,c.jsx)(r.code,{children:`aria-invalid`}),`.`]})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`click`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`MouseEvent`})}),(0,c.jsx)(`td`,{children:`Native click events fired when the custom element is hovered and triggered.`})]})})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-radio-size`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--size-icon-sm)`})}),(0,c.jsx)(`td`,{children:`Overrides outer bounding box height and width parameters.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-radio-color`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--color-accent)`})}),(0,c.jsx)(`td`,{children:`Overrides active circle outlines and centering dot fill colors.`})]})]})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Aria Role Contract:`}),` Assigns `,(0,c.jsx)(r.code,{children:`role="radio"`}),` and sets `,(0,c.jsx)(r.code,{children:`tabindex="0"`}),` on the custom element wrapper to comply with form control navigation specs.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Keyboard Navigation:`}),` Full support for `,(0,c.jsx)(r.code,{children:`Space`}),` and `,(0,c.jsx)(r.code,{children:`Enter`}),` key presses.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Access Propagation:`}),` Monitors the document root utilizing a `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` to reflect accessibility class settings onto host attributes:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Calibrates core colors for appropriate dark contrast.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces strict binary styling boundaries.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Disables centering scale animations.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Employs Windows active system colors (`,(0,c.jsx)(r.code,{children:`Highlight`}),` for selected marks; `,(0,c.jsx)(r.code,{children:`GrayText`}),` for disabled elements).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-radio';

const radio = document.createElement('ds-radio');
radio.setAttribute('selected', '');
radio.setAttribute('aria-label', 'Select primary theme layout');

// Clean sub-atomic overrides
radio.style.setProperty('--ds-radio-size', '20px');
radio.style.setProperty('--ds-radio-color', 'var(--color-success)');

radio.addEventListener('click', () => {
  console.log('Radio clicked. Selected status:', radio.hasAttribute('selected'));
});

document.body.appendChild(radio);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};