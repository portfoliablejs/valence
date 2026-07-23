import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/Tab [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-tab`,children:(0,c.jsx)(r.code,{children:`ds-tab`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-tab`}),` component is an interactive, presentational `,(0,c.jsx)(r.strong,{children:`controlled`}),` Atom designed to render tab triggers inside tablist widgets. It includes native key event hooks, supports dual slot/attribute label configuration, handles disabled states, and implements root class accessibility observer syncs.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host binds attributes (`,(0,c.jsx)(r.code,{children:`label`}),`, `,(0,c.jsx)(r.code,{children:`active`}),`, `,(0,c.jsx)(r.code,{children:`disabled`}),`, `,(0,c.jsx)(r.code,{children:`aria-label`}),`) to render label contents, toggle selection highlights, or block interaction events.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Events Out (`,(0,c.jsx)(r.code,{children:`ds-tab-click`}),`):`]}),` Captures mouse clicks to dispatch unified cross-boundary events indicating which tab index has been focused and triggered.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["ds-tab"]
    end

    State -->|"1. State In: label / active / disabled"| Component
    Component -->|"2. Event Out: ds-tab-click"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-tab`}),` component exposes its default slot to receive raw strings or HTML tags for visual layout labels. When a direct `,(0,c.jsx)(r.code,{children:`label`}),` attribute is defined on the host custom element, it completely overrides the projected slot contents.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`Text / HTML Subtree`}),(0,c.jsx)(`td`,{children:`Primary text or icon label projected inside the tab button wrapper.`}),(0,c.jsxs)(`td`,{children:[`Falls back to the `,(0,c.jsx)(r.code,{children:`label`}),` attribute or remains empty.`]})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsTabState {
  label?: string;
  active: boolean;
  disabled: boolean;
  ariaLabel?: string;
}

export interface DsTabSubAtomicHooks {
  '--ds-tab-bg'?: string;
  '--ds-tab-color'?: string;
  '--ds-tab-font'?: string;
  '--ds-tab-padding'?: string;
  '--ds-tab-radius'?: string;
  '--ds-tab-hover-color'?: string;
  '--ds-tab-hover-bg'?: string;
  '--ds-tab-active-color'?: string;
  '--ds-tab-active-bg'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Custom text string mapped to button content. Overrides slot projections.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`active`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`active`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsxs)(`td`,{children:[`Toggles active visualization. Sets `,(0,c.jsx)(r.code,{children:`aria-selected`}),` and forces `,(0,c.jsx)(r.code,{children:`tabindex="0"`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsxs)(`td`,{children:[`Disables clicks, strips focus maps, and sets `,(0,c.jsx)(r.code,{children:`aria-disabled`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ariaLabel`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`aria-label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Accessible tag description delegated down into internal buttons.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-tab-click`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ active: boolean, label: string }`})}),(0,c.jsx)(`td`,{children:`Fires on user click interactions, passing current states upstream.`})]})})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-tab-bg`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`transparent`})}),(0,c.jsx)(`td`,{children:`Overrides baseline tab container background color.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-tab-color`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--color-text-secondary)`})}),(0,c.jsx)(`td`,{children:`Overrides baseline label text color.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-tab-font`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--font-family)`})}),(0,c.jsx)(`td`,{children:`Overrides label text font family.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-tab-padding`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--space-xs) var(--space-md)`})}),(0,c.jsx)(`td`,{children:`Overrides baseline container margins.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-tab-radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-md)`})}),(0,c.jsx)(`td`,{children:`Overrides boundary corner radius curves.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-tab-hover-color`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--color-black)`})}),(0,c.jsx)(`td`,{children:`Overrides text color when hovered.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-tab-hover-bg`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--color-gray-xlight)`})}),(0,c.jsx)(`td`,{children:`Overrides background color when hovered.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-tab-active-color`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--color-white)`})}),(0,c.jsx)(`td`,{children:`Overrides active text foreground colors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-tab-active-bg`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--color-black)`})}),(0,c.jsx)(`td`,{children:`Overrides active backdrop background colors.`})]})]})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Semantics & Focusing:`}),` Employs an internal `,(0,c.jsx)(r.code,{children:`<button>`}),` with `,(0,c.jsx)(r.code,{children:`role="tab"`}),` to handle focus paths correctly. Tab index is set to `,(0,c.jsx)(r.code,{children:`0`}),` (active) and `,(0,c.jsx)(r.code,{children:`-1`}),` (inactive) for standard keyboard focus flows.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`ARIA Host Scrubbing:`}),` Automatically purges Light DOM `,(0,c.jsx)(r.code,{children:`aria-label`}),` tags and projects them cleanly onto the focusable button.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Access Syncing:`}),` Uses a `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` on the HTML root to synchronize visual settings:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Swaps inactive font palettes and maps active containers to pure white.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces clear AAA solid fills with inverted text.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dyslexia`}),`: Forces Comic Sans MS font overrides.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Disables transitions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Overrides backgrounds via system `,(0,c.jsx)(r.code,{children:`Canvas`}),` and selected fills via `,(0,c.jsx)(r.code,{children:`Highlight`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-tab';

const tab = document.createElement('ds-tab');
tab.setAttribute('label', 'Analytics HUD');
tab.setAttribute('active', 'true');
tab.setAttribute('aria-label', 'View system statistics');

// Clean sub-atomic overrides
tab.style.setProperty('--ds-tab-radius', '4px');
tab.style.setProperty('--ds-tab-active-bg', 'var(--color-success)');

tab.addEventListener('ds-tab-click', (e) => {
  console.log('Tab selected. Value:', e.detail.label);
});

document.body.appendChild(tab);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};