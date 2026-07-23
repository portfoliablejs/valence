import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Organisms/Gallery [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-gallery`,children:(0,c.jsx)(r.code,{children:`ds-gallery`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-gallery`}),` organism is a controlled horizontal case-study strip that composes `,(0,c.jsx)(r.code,{children:`ds-gallery-item`}),` molecules and keeps drag motion, keyboard focus, and layout orchestration inside the Shadow DOM.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component follows the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` Host applications provide `,(0,c.jsx)(r.code,{children:`item-count`}),`, `,(0,c.jsx)(r.code,{children:`engine`}),`, an optional `,(0,c.jsx)(r.code,{children:`items`}),` array, and the gallery gap through `,(0,c.jsx)(r.code,{children:`--gallery-item-gap`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Events Out (`,(0,c.jsx)(r.code,{children:`ds-case-select`}),`):`]}),` Child gallery items emit selection intent through a bubbling, composed custom event that reaches the gallery host.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Derived Presentation State:`}),` Drag offset, focus index, and the `,(0,c.jsx)(r.code,{children:`is-dragging`}),` host state are derived entirely from local interaction state.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Router"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["<ds-gallery>"]
    end

    State -->|"1. State In
 item-count, engine, items, --gallery-item-gap"| Component
    Component -->|"2. Event Out
 ds-case-select"| State

    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`ds-gallery`}),` uses a sealed Shadow DOM wrapper. It does not expose any public slots and creates its `,(0,c.jsx)(r.code,{children:`ds-gallery-item`}),` children internally.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`None`}),(0,c.jsxs)(`td`,{children:[`All gallery cards are generated internally as `,(0,c.jsx)(r.code,{children:`ds-gallery-item`}),` children.`]}),(0,c.jsxs)(`td`,{children:[`Renders the default or provided gallery data set when `,(0,c.jsx)(r.code,{children:`items`}),` is omitted.`]})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`itemCount`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`item-count`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`number`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`5`})}),(0,c.jsx)(`td`,{children:`Controls how many generated gallery cards are rendered.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`engine`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`engine`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'minimal'`})}),(0,c.jsx)(`td`,{children:`Selects the motion preset used for drag follow, overscroll, and edge-return timing.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`a11y-reduce-motion`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`a11y-reduce-motion`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Mirrors the global reduced-motion preference and disables gallery scale/transition motion.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`items`})}),(0,c.jsx)(`td`,{children:`n/a`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Array<object> \\| null`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`null`})}),(0,c.jsx)(`td`,{children:`Optional item source override used instead of the default gallery data set.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-case-select`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{}`})}),(0,c.jsxs)(`td`,{children:[`Surfaced when a nested `,(0,c.jsx)(r.code,{children:`ds-gallery-item`}),` is activated by click, Enter, or Space.`]})]})})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--gallery-item-gap`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`clamp(32px, 4vw, 72px)`})}),(0,c.jsx)(`td`,{children:`Controls horizontal spacing between gallery items.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-integration`,children:`Accessibility & Host Integration`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Keyboard Navigation:`}),` The gallery viewport is focusable and supports Arrow Left / Right, Home, End, Enter, and Space.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Pointer Experience:`}),` The viewport uses `,(0,c.jsx)(r.code,{children:`touch-action: pan-y`}),` so horizontal drag can be handled by the component without blocking vertical page scrolling.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Host State Reflection:`}),` The gallery toggles `,(0,c.jsx)(r.code,{children:`is-dragging`}),` on the host and viewport during pointer interaction so the whole component can animate as a unit.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Reduced Motion Compliance:`}),` When the root document carries `,(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`, the gallery reflects that state to the host, removes scale/transition animations, and uses a non-animated release path.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Focus Delegation:`}),` Keyboard selection moves focus into the active `,(0,c.jsx)(r.code,{children:`ds-gallery-item`}),` thumbnail surface without leaving the gallery context.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`integration-example`,children:`Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/src/stories/organisms/Gallery/Gallery.js';

const gallery = document.createElement('ds-gallery');
gallery.engine = 'minimal';
gallery.itemCount = 5;
gallery.style.setProperty('--gallery-item-gap', '100px');

gallery.addEventListener('ds-case-select', () => {
  console.log('Open the selected case study');
});

document.body.appendChild(gallery);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};