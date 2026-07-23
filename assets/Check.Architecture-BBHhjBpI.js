import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";import{t as o}from"./Check.stories-V1cgJi80.js";function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Atoms/Check [v1.0.0]/Architecture`}),`
`,(0,l.jsx)(r.h1,{id:`ds-check`,children:(0,l.jsx)(r.code,{children:`ds-check`})}),`
`,(0,l.jsxs)(r.p,{children:[`The `,(0,l.jsx)(r.code,{children:`ds-check`}),` component is a `,(0,l.jsx)(r.strong,{children:`controlled / presentational`}),` Atom designed to render vector graphic selection indicators with optional surface background containers, built-in keyboard/click toggling, and accessibility synchronization.`]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,l.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,l.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,l.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host application or parent component binds primitive attributes (`,(0,l.jsx)(r.code,{children:`selected`}),`, `,(0,l.jsx)(r.code,{children:`has-background`}),`, `,(0,l.jsx)(r.code,{children:`disabled`}),`, `,(0,l.jsx)(r.code,{children:`aria-label`}),`) to control rendering state.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`User Interactions:`}),` Click and keyboard events (`,(0,l.jsx)(r.code,{children:`Space`}),`, `,(0,l.jsx)(r.code,{children:`Enter`}),`) dynamically toggle state and update internal accessibility attributes (`,(0,l.jsx)(r.code,{children:`aria-checked`}),`, `,(0,l.jsx)(r.code,{children:`aria-disabled`}),`).`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Encapsulated State:`}),` Visual presentation and SVG animation choreography are encapsulated within the Shadow DOM.`]}),`
`]}),`
`,(0,l.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / Parent Form"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["ds-check"]
    end

    State -->|"1. State In: selected / disabled / has-background"| Component
    Component -->|"2. Interaction Event: click / keydown"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,l.jsxs)(r.p,{children:[`The `,(0,l.jsx)(r.code,{children:`ds-check`}),` component is a self-contained visual primitive that encapsulates its vector graphics directly inside its Shadow DOM. It does not expose public slots, ensuring uniform geometric alignment, stroke thickness, and animation keyframes across all instances.`]}),`
`,(0,l.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Slot Name`}),(0,l.jsx)(`th`,{children:`Type / Allowed Children`}),(0,l.jsx)(`th`,{children:`Description`}),(0,l.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,l.jsx)(`tbody`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`default`})}),(0,l.jsx)(`td`,{children:`None`}),(0,l.jsx)(`td`,{children:`Internal vector graphics only; host text content is not rendered.`}),(0,l.jsx)(`td`,{children:`Renders internal SVG mark`})]})})]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-typescript`,children:`export interface DsCheckState {
  selected: boolean;
  hasBackground: boolean;
  disabled: boolean;
  ariaLabel?: string;
}

export interface DsCheckSubAtomicHooks {
  '--ds-check-size'?: string;
  '--ds-check-color'?: string;
  '--ds-check-bg'?: string;
  '--ds-check-border-color'?: string;
}
`})}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,l.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Property`}),(0,l.jsx)(`th`,{children:`Attribute`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`selected`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`selected`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`boolean`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`false`})}),(0,l.jsx)(`td`,{children:`Toggles active selection state and animated checkmark visibility.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`hasBackground`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`has-background`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`boolean`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`false`})}),(0,l.jsx)(`td`,{children:`Activates outer surface container background and structural border ring.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`disabled`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`disabled`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`boolean`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`false`})}),(0,l.jsx)(`td`,{children:`Suppresses user interactions, removes tab focus, and applies opacity token.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ariaLabel`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`aria-label`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`undefined`})}),(0,l.jsx)(`td`,{children:`Accessibility label delegated to component role contract.`})]})]})]}),`
`,(0,l.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Event Name`}),(0,l.jsx)(`th`,{children:`Bubbles / Composed`}),(0,l.jsx)(`th`,{children:`Detail Payload`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsx)(`tbody`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`click`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`true`}),` / `,(0,l.jsx)(r.code,{children:`true`})]}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`MouseEvent`})}),(0,l.jsx)(`td`,{children:`Native click interaction toggles selection state when not disabled.`})]})})]}),`
`,(0,l.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`CSS Custom Property`}),(0,l.jsx)(`th`,{children:`Fallback Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-check-size`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--size-icon-sm)`})}),(0,l.jsxs)(`td`,{children:[`Overrides outer bounding box dimensions (`,(0,l.jsx)(r.code,{children:`width`}),` and `,(0,l.jsx)(r.code,{children:`height`}),`).`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-check-color`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--color-accent)`})}),(0,l.jsx)(`td`,{children:`Overrides checkmark SVG stroke vector color.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-check-bg`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--color-surface)`})}),(0,l.jsxs)(`td`,{children:[`Overrides background surface container fill when `,(0,l.jsx)(r.code,{children:`has-background`}),` is active.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-check-border-color`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--color-gray-light)`})}),(0,l.jsxs)(`td`,{children:[`Overrides container border ring color when `,(0,l.jsx)(r.code,{children:`has-background`}),` is active.`]})]})]})]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Role Delegation:`}),` Automatically initializes `,(0,l.jsx)(r.code,{children:`role="checkbox"`}),` on the host custom element.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`ARIA Attribute Sync:`}),` Real-time updates sync `,(0,l.jsx)(r.code,{children:`aria-checked`}),` and `,(0,l.jsx)(r.code,{children:`aria-disabled`}),` based on host attribute changes.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Keyboard Interaction:`}),` Supports full keyboard navigation with `,(0,l.jsx)(r.code,{children:`Tab`}),` focusing (`,(0,l.jsx)(r.code,{children:`tabindex="0"`}),`) and trigger handling via `,(0,l.jsx)(r.code,{children:`Space`}),`, `,(0,l.jsx)(r.code,{children:`Spacebar`}),`, or `,(0,l.jsx)(r.code,{children:`Enter`}),` keys.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Global Accessibility Propagation:`}),` Integrates `,(0,l.jsx)(r.code,{children:`_observeRootAccessibility`}),` using a `,(0,l.jsx)(r.code,{children:`MutationObserver`}),` on `,(0,l.jsx)(r.code,{children:`document.documentElement`}),` to synchronize global accessibility flags:`,`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Adjusts surface boundary contrast.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces strict binary contrast overrides.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Maps system active `,(0,l.jsx)(r.code,{children:`Highlight`}),` and `,(0,l.jsx)(r.code,{children:`GrayText`}),` palettes for Windows High Contrast Mode.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Completely suppresses transition durations and delays for reduced motion preferences.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-check';

const check = document.createElement('ds-check');
check.setAttribute('selected', '');
check.setAttribute('has-background', '');
check.setAttribute('aria-label', 'Accept terms and conditions');

// Apply sub-atomic style overrides via CSS custom properties
check.style.setProperty('--ds-check-color', 'var(--color-success)');
check.style.setProperty('--ds-check-size', '24px');

check.addEventListener('click', () => {
  console.log('Check toggled. Is selected:', check.hasAttribute('selected'));
});

document.body.appendChild(check);
`})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=i(),a(),r(),o()}))();export{c as default};