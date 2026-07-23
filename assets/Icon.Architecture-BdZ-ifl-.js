import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";import{t as o}from"./Icon.stories-zjOZVUH1.js";function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Atoms/Icon [v1.0.0]/Architecture`}),`
`,(0,l.jsx)(r.h1,{id:`ds-icon`,children:(0,l.jsx)(r.code,{children:`ds-icon`})}),`
`,(0,l.jsxs)(r.p,{children:[`The `,(0,l.jsx)(r.code,{children:`ds-icon`}),` component is a `,(0,l.jsx)(r.strong,{children:`stateless / presentational`}),` Atom designed to render vector graphics from a standardized system iconography registry, supporting outlined and filled variants, automatic RTL flipping, and high-contrast system overrides.`]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,l.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,l.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,l.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host application binds primitive attributes (`,(0,l.jsx)(r.code,{children:`name`}),`, `,(0,l.jsx)(r.code,{children:`variant`}),`, `,(0,l.jsx)(r.code,{children:`size`}),`, `,(0,l.jsx)(r.code,{children:`color`}),`) or sub-atomic custom CSS property overrides onto the host element.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Registry Resolution:`}),` `,(0,l.jsx)(r.code,{children:`ds-icon`}),` queries `,(0,l.jsx)(r.code,{children:`ICON_REGISTRY`}),` using the `,(0,l.jsx)(r.code,{children:`name`}),` attribute and renders the matching outline or fill SVG path markup inside the Shadow DOM.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Encapsulated Presentation:`}),` SVG viewbox scaling, stroke geometry, and theme mode overrides are encapsulated inside the Shadow DOM.`]}),`
`]}),`
`,(0,l.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / Parent Component"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["ds-icon"]
    end

    State -->|"1. State In: name / variant / size / color"| Component
    Component -->|"2. Render Output: Scalable SVG Graphic"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,l.jsxs)(r.p,{children:[`The `,(0,l.jsx)(r.code,{children:`ds-icon`}),` component is a self-contained presentational primitive and does not expose public slots.`]}),`
`,(0,l.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Slot Name`}),(0,l.jsx)(`th`,{children:`Type / Allowed Children`}),(0,l.jsx)(`th`,{children:`Description`}),(0,l.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,l.jsx)(`tbody`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`default`})}),(0,l.jsx)(`td`,{children:`None`}),(0,l.jsx)(`td`,{children:`Internal vector SVG path markup only; host text or DOM children are not rendered.`}),(0,l.jsx)(`td`,{children:`Renders registered SVG vector path`})]})})]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-typescript`,children:`export interface DsIconState {
  name: string;
  variant?: 'outline' | 'fill';
  size?: number;
  color?: string;
}

export interface DsIconSubAtomicHooks {
  '--ds-icon-size'?: string;
  '--ds-icon-stroke-width'?: string;
  '--ds-icon-fill'?: string;
  '--ds-icon-stroke'?: string;
}
`})}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,l.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Property`}),(0,l.jsx)(`th`,{children:`Attribute`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`name`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`name`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`undefined`})}),(0,l.jsxs)(`td`,{children:[`Selects the icon vector path geometry from `,(0,l.jsx)(r.code,{children:`ICON_REGISTRY`}),`.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`variant`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`variant`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'outline' \\| 'fill'`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'outline'`})}),(0,l.jsx)(`td`,{children:`Toggles between stroked outline paths and solid filled geometry.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`size`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`size`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`number`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`24`})}),(0,l.jsxs)(`td`,{children:[`Bounding box dimension in pixels (maps to `,(0,l.jsx)(r.code,{children:`--ds-icon-size`}),`).`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`color`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`color`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'currentColor'`})}),(0,l.jsx)(`td`,{children:`Sets direct text color on the host element for CSS inheritance.`})]})]})]}),`
`,(0,l.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Event Name`}),(0,l.jsx)(`th`,{children:`Bubbles / Composed`}),(0,l.jsx)(`th`,{children:`Detail Payload`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsx)(`tbody`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:`None`}),(0,l.jsx)(`td`,{children:`N/A`}),(0,l.jsx)(`td`,{children:`N/A`}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`ds-icon`}),` is a presentational vector atom and does not emit custom interaction events.`]})]})})]}),`
`,(0,l.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`CSS Custom Property`}),(0,l.jsx)(`th`,{children:`Fallback Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-icon-size`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`24px`})}),(0,l.jsx)(`td`,{children:`Overrides outer bounding box width and height dimensions.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-icon-stroke-width`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`2`})}),(0,l.jsx)(`td`,{children:`Overrides SVG stroke vector weight.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-icon-fill`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`none`}),` / `,(0,l.jsx)(r.code,{children:`currentColor`})]}),(0,l.jsx)(`td`,{children:`Overrides vector interior fill state depending on active variant.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-icon-stroke`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`currentColor`}),` / `,(0,l.jsx)(r.code,{children:`none`})]}),(0,l.jsx)(`td`,{children:`Overrides vector outline stroke color depending on active variant.`})]})]})]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Decorative SVGs:`}),` The internal `,(0,l.jsx)(r.code,{children:`<svg>`}),` primitive always renders with `,(0,l.jsx)(r.code,{children:`aria-hidden="true"`}),` to prevent screen readers from announcing decorative graphics.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Directional RTL Mirroring:`}),` Listens to `,(0,l.jsx)(r.code,{children:`dir="rtl"`}),` on `,(0,l.jsx)(r.code,{children:`document.documentElement`}),` via `,(0,l.jsx)(r.code,{children:`MutationObserver`}),` and applies `,(0,l.jsx)(r.code,{children:`[dir-rtl]`}),` to mirror directional icons (e.g., chevrons, arrows, volume, and playback controls) along the X-axis using `,(0,l.jsx)(r.code,{children:`transform: scaleX(-1)`}),`.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Global Accessibility Propagation:`}),` Observes `,(0,l.jsx)(r.code,{children:`document.documentElement`}),` class changes to handle high contrast and forced color modes:`,`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Forces vector stroke to inherit `,(0,l.jsx)(r.code,{children:`currentColor`}),` and strips background fills.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Complies with OS-level Forced Colors Mode by mapping strokes to `,(0,l.jsx)(r.code,{children:`currentColor`}),` and filled variants to `,(0,l.jsx)(r.code,{children:`CanvasText`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/Iconography.js';

// Search Icon (Outline)
const searchIcon = document.createElement('ds-icon');
searchIcon.setAttribute('name', 'search');
searchIcon.setAttribute('size', '24');

// Bookmark Icon (Filled Variant with Sub-Atomic Overrides)
const bookmarkIcon = document.createElement('ds-icon');
bookmarkIcon.setAttribute('name', 'bookmark');
bookmarkIcon.setAttribute('variant', 'fill');
bookmarkIcon.style.setProperty('--ds-icon-size', '32px');
bookmarkIcon.style.setProperty('--ds-icon-stroke-width', '1.5');

document.body.appendChild(searchIcon);
document.body.appendChild(bookmarkIcon);
`})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=i(),a(),r(),o()}))();export{c as default};