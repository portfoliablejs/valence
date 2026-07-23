import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/Loader [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-loader`,children:(0,c.jsx)(r.code,{children:`ds-loader`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-loader`}),` component is a `,(0,c.jsx)(r.strong,{children:`presentational`}),` Atom designed to render a circular loading spinner with robust accessibility support, semantic layout overrides, and full synchronization with application state shells.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host application binds primitive attributes (`,(0,c.jsx)(r.code,{children:`visible`}),`, `,(0,c.jsx)(r.code,{children:`aria-label`}),`, `,(0,c.jsx)(r.code,{children:`size`}),`) to control rendering states and dimensions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Events Out:`}),` As a presentational indicator, the component is completely stateless and passive, emitting no action-oriented custom events. It relies entirely on screen-reader polite announcers inside its Shadow DOM boundaries.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["ds-loader"]
    end

    State -->|"1. State In: visible / aria-label / size"| Component

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-loader`}),` component is a self-contained visual indicator that completely encapsulates its spinning graphics. It does not expose public slot targets to ensure strict uniformity across visual layout environments.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`None`}),(0,c.jsx)(`td`,{children:`Internal circular vectors only; host content is not projected.`}),(0,c.jsx)(`td`,{children:`Renders standard loading spinner graphics inside the shadow root.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsLoaderState {
  visible: boolean;
  ariaLabel: string;
  size?: string;
}

export interface DsLoaderSubAtomicHooks {
  '--ds-loader-size'?: string;
  '--ds-loader-bg'?: string;
  '--ds-loader-radius'?: string;
  '--ds-loader-color'?: string;
  '--ds-loader-shadow'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`visible`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`visible`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`true`})}),(0,c.jsx)(`td`,{children:`Toggles the structural opacity, pointer-events, and visibility states.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ariaLabel`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`aria-label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'Loading'`})}),(0,c.jsx)(`td`,{children:`The accessible text read aloud by screen readers. Automatically delegated down.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`size`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`size`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsxs)(`td`,{children:[`Optional layout size override. Maps directly to `,(0,c.jsx)(r.code,{children:`--loader-size`}),` token.`]})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:`This component is strictly presentational and does not emit custom events.`})]})})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-loader-size`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--size-height-lg)`})}),(0,c.jsx)(`td`,{children:`Overrides the outer bounding box dimensions of the spinner.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-loader-bg`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-bg)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-card-bg)`})]}),(0,c.jsx)(`td`,{children:`Overrides the circular backdrop surface background color.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-loader-radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-circle)`})}),(0,c.jsx)(`td`,{children:`Overrides the outer container's boundary border-radius.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-loader-color`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--color-text-primary)`})}),(0,c.jsx)(`td`,{children:`Overrides the active rotating vector stroke foreground color.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-loader-shadow`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--shadow-md)`})}),(0,c.jsx)(`td`,{children:`Overrides outer backdrop boundary box-shadow dimensions.`})]})]})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Polite Announcements:`}),` Employs an internal `,(0,c.jsx)(r.code,{children:`role="status"`}),` and `,(0,c.jsx)(r.code,{children:`aria-live="polite"`}),` element wrapper so assistive screen-reader software cleanly triggers updates during buffering.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`ARIA Host Scrubbing:`}),` Automatically scrubs the Light DOM host attribute `,(0,c.jsx)(r.code,{children:`aria-label`}),` and delegates it into the internal Shadow DOM node, eliminating light validation warnings.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Accessibility Propagation:`}),` Integrates `,(0,c.jsx)(r.code,{children:`_observeRootAccessibility`}),` to monitor class modifications on the document root element:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Swaps backdrop shadows and base contrast maps.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Installs forced binary boundaries and high-contrast borders.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Instantly disables rotation keyframe transitions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Overrides stroke vectors using active Windows system palette bindings (`,(0,c.jsx)(r.code,{children:`CanvasText`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-loader';

const loader = document.createElement('ds-loader');
loader.setAttribute('visible', 'true');
loader.setAttribute('aria-label', 'Video study resources are buffering...');

// Clean custom property style overrides
loader.style.setProperty('--ds-loader-bg', 'var(--color-surface-card)');
loader.style.setProperty('--ds-loader-color', 'var(--color-accent-blue)');

document.body.appendChild(loader);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};