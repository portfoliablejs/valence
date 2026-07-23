import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/Slider Dot [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-slider-dot`,children:(0,c.jsx)(r.code,{children:`ds-slider-dot`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-slider-dot`}),` component is a `,(0,c.jsx)(r.strong,{children:`presentational / controlled`}),` Atom designed to render compact pagination dots. It is fully accessible, utilizes native `,(0,c.jsx)(r.code,{children:`<button>`}),` primitives inside its Shadow DOM boundaries, and triggers unified custom events when clicked.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host binds attributes (`,(0,c.jsx)(r.code,{children:`active`}),`, `,(0,c.jsx)(r.code,{children:`aria-label`}),`) to toggle active scales or provide accessible text strings.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Events Out (`,(0,c.jsx)(r.code,{children:`ds-dot-click`}),`):`]}),` Dispatches standard customized events when user interactions click and trigger a slide transition.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["ds-slider-dot"]
    end

    State -->|"1. State In: active / aria-label"| Component
    Component -->|"2. Event Out: ds-dot-click"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-slider-dot`}),` component completely seals its Shadow DOM bounds and projects no light DOM content to preserve uniform spacing, layout alignment, and hit targets inside carousel containers.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`None`}),(0,c.jsx)(`td`,{children:`Encapsulated button primitive only; host text is not rendered.`}),(0,c.jsx)(`td`,{children:`Renders standard round pagination button graphics.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsSliderDotState {
  active: boolean;
  ariaLabel: string;
}

export interface DsSliderDotSubAtomicHooks {
  '--ds-slider-dot-size'?: string;
  '--ds-slider-dot-radius'?: string;
  '--ds-slider-dot-bg'?: string;
  '--ds-slider-dot-border-width'?: string;
  '--ds-slider-dot-border-color'?: string;
  '--ds-slider-dot-active-bg'?: string;
  '--ds-slider-dot-hover-bg'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`active`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`active`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsxs)(`td`,{children:[`Toggles active scale-up styling. Automatically maps to `,(0,c.jsx)(r.code,{children:`aria-current`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ariaLabel`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`aria-label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'Go to slide'`})}),(0,c.jsx)(`td`,{children:`Accessible description delegated into internal button elements.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-dot-click`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ active: boolean }`})}),(0,c.jsx)(`td`,{children:`Dispatched when users click the pagination button, signaling a page index swap.`})]})})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-slider-dot-size`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--size-icon-sm)`})}),(0,c.jsx)(`td`,{children:`Overrides diameter width and height geometries.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-slider-dot-radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-circle)`})}),(0,c.jsx)(`td`,{children:`Overrides circular border bounding radius.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-slider-dot-bg`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-gray-xlight)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-gray-med)`})]}),(0,c.jsx)(`td`,{children:`Overrides standard backdrop container colors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-slider-dot-active-bg`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-gray-dark)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-white)`})]}),(0,c.jsx)(`td`,{children:`Overrides backdrop colors when active is mapped.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-slider-dot-hover-bg`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--color-gray-med)`})}),(0,c.jsx)(`td`,{children:`Overrides backdrop colors during mouse hover interactions.`})]})]})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Button Delegation:`}),` Uses an internal `,(0,c.jsx)(r.code,{children:`<button type="button">`}),` to support native keyboard focus paths, spacebar trigger activation, and correct user flows.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`ARIA Host Scrubbing:`}),` Automatically scrubs standard Light DOM `,(0,c.jsx)(r.code,{children:`aria-label`}),` attributes applied to host nodes and delegates them down to the focusable button.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Access Syncing:`}),` Leverages `,(0,c.jsx)(r.code,{children:`_observeRootAccessibility`}),` to track HTML root class adjustments:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Shifts inactive dots to higher contrast gray palettes.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces clear borders and filled circles for AAA compliance.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Disables spring-scaling transitions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Overrides backgrounds via system `,(0,c.jsx)(r.code,{children:`CanvasText`}),` (inactive) and `,(0,c.jsx)(r.code,{children:`Highlight`}),` (active).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-slider-dot';

const dot = document.createElement('ds-slider-dot');
dot.setAttribute('active', 'true');
dot.setAttribute('aria-label', 'Go to slide 4');

// Clean sub-atomic overrides
dot.style.setProperty('--ds-slider-dot-size', '16px');
dot.style.setProperty('--ds-slider-dot-active-bg', 'var(--color-success)');

dot.addEventListener('ds-dot-click', (e) => {
  console.log('Slide dot clicked! Active state:', e.detail.active);
});

document.body.appendChild(dot);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};