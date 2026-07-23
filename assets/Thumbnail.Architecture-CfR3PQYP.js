import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/Thumbnail [v1.1.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-thumbnail`,children:(0,c.jsx)(r.code,{children:`ds-thumbnail`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-thumbnail`}),` component is a presentational `,(0,c.jsx)(r.strong,{children:`controlled / dynamic`}),` Atom designed to render realistic device frame mockups (mobiles, tablets, desktops, and wearables) while embedding a screenshot image beneath native hardware bezels. It now uses a `,(0,c.jsx)(r.strong,{children:`manifest-first geometry pipeline`}),` (precomputed bounds, corner radius, and edge bleed) for production performance, with an idle-time runtime fallback analyzer only when manifest data is missing.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host shell binds properties (`,(0,c.jsx)(r.code,{children:`category`}),`, `,(0,c.jsx)(r.code,{children:`brand`}),`, `,(0,c.jsx)(r.code,{children:`model`}),`, `,(0,c.jsx)(r.code,{children:`color`}),`, `,(0,c.jsx)(r.code,{children:`screen-image`}),`, `,(0,c.jsx)(r.code,{children:`custom-only`}),`, `,(0,c.jsx)(r.code,{children:`max-height`}),`, `,(0,c.jsx)(r.code,{children:`disabled`}),`) downstream to configure device mockups, inject screen graphics, or toggle bezel cancellations.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Geometry Resolution Engine:`}),` The component resolves screen geometry from prebuilt `,(0,c.jsx)(r.code,{children:`thumbnail-manifest.generated.js`}),` entries keyed by source mockup paths. Each entry provides: bounds (`,(0,c.jsx)(r.code,{children:`top/left/width/height`}),`), optional `,(0,c.jsx)(r.code,{children:`maskUrl`}),`, inferred `,(0,c.jsx)(r.code,{children:`screenRadius`}),`, and anti-fringe `,(0,c.jsx)(r.code,{children:`edgeBleed`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Runtime Fallback (Lightweight):`}),` If a manifest entry is incomplete, the component performs a capped-resolution alpha scan in idle time (`,(0,c.jsx)(r.code,{children:`requestIdleCallback`}),`) and caches results per device URL to avoid repeated work.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Events Out:`}),` As a passive visual mockup card, this component emits no customized event streams and does not manage action-oriented form values.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["ds-thumbnail"]
    end

    State -->|"1. State In: category / brand / model / screen-image"| Component

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-thumbnail`}),` component is fully sealed, managing nested image covers, background overlays, and device assets directly within its Shadow DOM boundary to maintain precise coordinates and scale dimensions.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`None`}),(0,c.jsx)(`td`,{children:`Encapsulated layout primitives only; host elements are not projected.`}),(0,c.jsx)(`td`,{children:`Renders device frames and nested screenshot covers in the Shadow DOM.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsThumbnailState {
  category: 'mobile' | 'desktop' | 'tablet' | 'television' | 'wearable';
  brand: string;
  model: string;
  color: string;
  screenImage: string;
  deviceSrc?: string;
  customOnly: boolean;
  maxHeight?: string;
  disabled: boolean;
  ariaLabel?: string;
}

export interface DsThumbnailSubAtomicHooks {
  '--ds-thumbnail-max-height'?: string;
  '--ds-thumbnail-screen-radius'?: string;
}

export interface DsThumbnailManifestEntry {
  bounds: { top: number; left: number; width: number; height: number };
  screenRadius?: string;
  maskUrl?: string;
  edgeBleed?: { x: number; y: number };
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`category`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`category`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'mobile'`})}),(0,c.jsxs)(`td`,{children:[`Hardware form factor classification (e.g., `,(0,c.jsx)(r.code,{children:`'mobile'`}),`, `,(0,c.jsx)(r.code,{children:`'desktop'`}),`).`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`brand`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`brand`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'apple'`})}),(0,c.jsx)(`td`,{children:`Ecosystem filter used to filter model options.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`model`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`model`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'Apple iPhone 13'`})}),(0,c.jsx)(`td`,{children:`Specific device frame asset matching the file tree.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`color`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`color`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'Midnight'`})}),(0,c.jsx)(`td`,{children:`Hardware bezel body color scheme.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`screenImage`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`screen-image`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Mandatory screenshot image mapped beneath the transparent screen bezel windows.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`deviceSrc`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`device-src`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Optional direct frame URL override that bypasses category/brand/model/color catalog resolution.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`customOnly`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`custom-only`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Toggles bezel rendering, letting the screen screenshot image render unconstrained.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`maxHeight`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`max-height`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsxs)(`td`,{children:[`Constraint height limit mapping to `,(0,c.jsx)(r.code,{children:`--ds-thumbnail-max-height`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsxs)(`td`,{children:[`Marks the focus shell as non-interactive (`,(0,c.jsx)(r.code,{children:`aria-disabled=true`}),`, removes tabindex).`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ariaLabel`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`aria-label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'Thumbnail Mockup'`})}),(0,c.jsx)(`td`,{children:`Delegated to inner focusable container and device image alt metadata.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:`This component is strictly presentational and does not emit custom events.`})]})})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-thumbnail-max-width`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`N/A`})}),(0,c.jsx)(`td`,{children:`Deprecated in implementation; width is intrinsic to the selected frame asset and container layout.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-thumbnail-max-height`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`100%`})}),(0,c.jsx)(`td`,{children:`Overrides maximum container height limits.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-thumbnail-screen-radius`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`8px`}),` / `,(0,c.jsx)(r.code,{children:`var(--radius-md)`})]}),(0,c.jsx)(`td`,{children:`Overrides screenshot clipping corners to match physical hardware curves.`})]})]})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Aria Role Contract:`}),` Assigns `,(0,c.jsx)(r.code,{children:`tabindex="0"`}),` on the focusable frame container. Alt descriptions applied to custom elements are delegated down as image descriptions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Access Syncing:`}),` Integrates `,(0,c.jsx)(r.code,{children:`_observeRootAccessibility`}),` to monitor HTML document root class settings:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Propagates host accessibility state.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Removes visual filters and preserves readability.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Disables transitions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Applies forced-color-safe behavior.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`performance-notes`,children:`Performance Notes`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Primary Path:`}),` Build-time manifest entries are loaded synchronously from `,(0,c.jsx)(r.code,{children:`thumbnail-manifest.generated.js`}),` with no canvas work during render.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Fallback Path:`}),` Runtime alpha analysis runs only when entries are absent/incomplete and is memoized by device URL.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Render Safety:`}),` Async geometry updates are sequence-guarded to prevent stale async writes during rapid attribute changes.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Edge Refinement:`}),` `,(0,c.jsx)(r.code,{children:`edgeBleed`}),` expands computed bounds slightly to hide white seams caused by semi-transparent anti-aliased bezel edges.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-thumbnail';

const thumb = document.createElement('ds-thumbnail');
thumb.setAttribute('category', 'mobile');
thumb.setAttribute('brand', 'apple');
thumb.setAttribute('model', 'Apple iPhone 13');
thumb.setAttribute('color', 'Midnight');
thumb.setAttribute('screen-image', 'https://my-app.com/assets/screenshot.png');

// Clean sub-atomic overrides
thumb.style.setProperty('--ds-thumbnail-max-height', '450px');
thumb.style.setProperty('--ds-thumbnail-screen-radius', '12px');

document.body.appendChild(thumb);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};