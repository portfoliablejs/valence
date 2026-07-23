import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";import{t as o}from"./CaseNavigator.stories-rc_oJ-1K.js";function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Molecules/Case Navigator [v1.0.0]/Architecture`}),`
`,(0,l.jsx)(r.h1,{id:`ds-case-navigator`,children:(0,l.jsx)(r.code,{children:`ds-case-navigator`})}),`
`,(0,l.jsxs)(r.p,{children:[`The `,(0,l.jsx)(r.code,{children:`ds-case-navigator`}),` component is a `,(0,l.jsx)(r.strong,{children:`composite`}),` Molecule designed for sequential case study navigation, inline autocomplete search filtering, and global keyboard shortcut orchestration.`]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,l.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,l.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,l.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host application binds current index position, total case count, search queries, and localized label maps.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsxs)(r.strong,{children:[`Events Out (`,(0,l.jsx)(r.code,{children:`ds-*`}),`):`]}),` Navigation triggers dispatch custom DOM events (`,(0,l.jsx)(r.code,{children:`ds-case-select`}),`, `,(0,l.jsx)(r.code,{children:`ds-case-prev`}),`, `,(0,l.jsx)(r.code,{children:`ds-case-next`}),`, `,(0,l.jsx)(r.code,{children:`ds-search-input`}),`, `,(0,l.jsx)(r.code,{children:`ds-search-select`}),`) containing immutable detail payloads.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Encapsulated State:`}),` The component maintains internal highlight index positioning for autocomplete filtering without mutating host router state directly.`]}),`
`]}),`
`,(0,l.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Router"]
    end

    subgraph WebComp["Valence Web Component"]
        Component["<ds-case-navigator>"]
    end

    State -->|"1. State In<br/><code>current-index, value</code>"| Component
    Component -->|"2. Event Out<br/><code>ds-case-select, ds-search-select</code>"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,l.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,l.jsxs)(r.p,{children:[`The `,(0,l.jsx)(r.code,{children:`ds-case-navigator`}),` component encapsulates Shadow DOM child components (`,(0,l.jsx)(r.code,{children:`ds-button`}),`, `,(0,l.jsx)(r.code,{children:`ds-divider`}),`, `,(0,l.jsx)(r.code,{children:`ds-tooltip`}),`) to construct a self-contained action bar.`]}),`
`,(0,l.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Slot Name`}),(0,l.jsx)(`th`,{children:`Type / Allowed Children`}),(0,l.jsx)(`th`,{children:`Description`}),(0,l.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,l.jsx)(`tbody`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`default`})}),(0,l.jsx)(`td`,{children:`None`}),(0,l.jsx)(`td`,{children:`Encapsulated layout molecule; internal structure is completely managed via component attributes and properties.`}),(0,l.jsx)(`td`,{children:`Renders standard search bar, vertical divider, and previous/next action buttons.`})]})})]}),`
`,(0,l.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-typescript`,children:`export interface CaseNavigatorItem {
  id: string;
  title: string;
  snippet?: string;
}

export interface CaseNavigatorEventDetail {
  index?: number;
  value?: string;
  item?: CaseNavigatorItem;
  id?: string;
}
`})}),`
`,(0,l.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,l.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Property`}),(0,l.jsx)(`th`,{children:`Attribute`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`currentIndex`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`current-index`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`number`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`0`})}),(0,l.jsx)(`td`,{children:`Zero-based index of the currently active case study.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`totalCases`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`total-cases`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`number`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`1`})}),(0,l.jsx)(`td`,{children:`Total number of available case studies.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`searchExpanded`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`search-expanded`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`boolean`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`false`})}),(0,l.jsx)(`td`,{children:`Toggles the expanded state of the collapsible inline search field.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`disabled`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`disabled`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`boolean`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`false`})}),(0,l.jsx)(`td`,{children:`Disables all interactive controls and keyboard triggers.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`value`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`value`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`''`})}),(0,l.jsx)(`td`,{children:`Query string bound to the inline search text input.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`placeholder`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`placeholder`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'Search cases...'`})}),(0,l.jsx)(`td`,{children:`Localized placeholder displayed inside the search input.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`labelPrev`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`label-prev`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'Previous'`})}),(0,l.jsx)(`td`,{children:`Text label displayed on the Previous action button.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`labelNext`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`label-next`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'Next'`})}),(0,l.jsx)(`td`,{children:`Text label displayed on the Next action button.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`searchAriaLabel`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`search-aria-label`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'Search cases'`})}),(0,l.jsxs)(`td`,{children:[`Accessible label assigned to search controls (avoids `,(0,l.jsx)(r.code,{children:`aria-valid-attr`}),` violations).`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`prevAriaLabel`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`prev-aria-label`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'Previous case'`})}),(0,l.jsx)(`td`,{children:`Accessible label assigned to the Previous navigation button.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`nextAriaLabel`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`next-aria-label`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'Next case'`})}),(0,l.jsx)(`td`,{children:`Accessible label assigned to the Next navigation button.`})]})]})]}),`
`,(0,l.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Event Name`}),(0,l.jsx)(`th`,{children:`Bubbles / Composed`}),(0,l.jsx)(`th`,{children:`Detail Payload`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ds-case-select`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`true`}),` / `,(0,l.jsx)(r.code,{children:`true`})]}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`{ index: number }`})}),(0,l.jsx)(`td`,{children:`Emitted when either Previous or Next navigation actions are executed.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ds-case-prev`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`true`}),` / `,(0,l.jsx)(r.code,{children:`true`})]}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`{ index: number }`})}),(0,l.jsx)(`td`,{children:`Emitted specifically when the Previous case action is triggered.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ds-case-next`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`true`}),` / `,(0,l.jsx)(r.code,{children:`true`})]}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`{ index: number }`})}),(0,l.jsx)(`td`,{children:`Emitted specifically when the Next case action is triggered.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ds-search-input`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`true`}),` / `,(0,l.jsx)(r.code,{children:`true`})]}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`{ value: string }`})}),(0,l.jsx)(`td`,{children:`Emitted when the search query input changes.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ds-search-select`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`true`}),` / `,(0,l.jsx)(r.code,{children:`true`})]}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`{ item: CaseNavigatorItem, id: string }`})}),(0,l.jsx)(`td`,{children:`Emitted when an item from the autocomplete dropdown menu is selected.`})]})]})]}),`
`,(0,l.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`CSS Custom Property`}),(0,l.jsx)(`th`,{children:`Fallback Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-case-navigator-bg`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--color-surface)`})}),(0,l.jsx)(`td`,{children:`Overrides main container background fill.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-case-navigator-menu-bg`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--color-surface)`})}),(0,l.jsx)(`td`,{children:`Overrides autocomplete floating menu background fill.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-case-navigator-radius`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--radius-pill)`})}),(0,l.jsx)(`td`,{children:`Overrides outer container corner radius geometry.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-case-navigator-border-color`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--color-surface-border)`})}),(0,l.jsx)(`td`,{children:`Overrides container border outline color.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-case-navigator-padding`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--space-xs) var(--space-md)`})}),(0,l.jsx)(`td`,{children:`Overrides internal padding dimensions.`})]})]})]}),`
`,(0,l.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`ARIA Scrubbing & Valid Attribute Names:`}),` Generic `,(0,l.jsx)(r.code,{children:`aria-label`}),` on host elements is scrubbed and delegated to internal controls. Custom accessibility label props use valid attribute names (`,(0,l.jsx)(r.code,{children:`search-aria-label`}),`, `,(0,l.jsx)(r.code,{children:`prev-aria-label`}),`, `,(0,l.jsx)(r.code,{children:`next-aria-label`}),`) to comply with strict W3C validation.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Dynamic Role Management:`}),` The autocomplete container dynamically attaches `,(0,l.jsx)(r.code,{children:`role="listbox"`}),` and `,(0,l.jsx)(r.code,{children:`aria-label="Search suggestions"`}),` only when option items are present, preventing `,(0,l.jsx)(r.code,{children:`aria-prohibited-attr`}),` and `,(0,l.jsx)(r.code,{children:`aria-required-children`}),` failures when hidden.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Keyboard Navigation:`}),` Full support for `,(0,l.jsx)(r.code,{children:`Space`}),` and `,(0,l.jsx)(r.code,{children:`Enter`}),` execution on buttons. Global shortcut listeners manage single-key (`,(0,l.jsx)(r.code,{children:`S`}),`, `,(0,l.jsx)(r.code,{children:`X`}),`, `,(0,l.jsx)(r.code,{children:`←`}),`, `,(0,l.jsx)(r.code,{children:`→`}),`) and multi-key combinations (`,(0,l.jsx)(r.code,{children:`Cmd+F`}),`, `,(0,l.jsx)(r.code,{children:`Cmd+←`}),`, `,(0,l.jsx)(r.code,{children:`Cmd+→`}),`).`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Global Accessibility Propagation:`}),` Listens to class changes on `,(0,l.jsx)(r.code,{children:`document.documentElement`}),` via `,(0,l.jsx)(r.code,{children:`MutationObserver`}),` to sync accessibility modes (`,(0,l.jsx)(r.code,{children:`.a11y-dark-mode`}),`, `,(0,l.jsx)(r.code,{children:`.a11y-high-contrast`}),`, `,(0,l.jsx)(r.code,{children:`.a11y-large-text`}),`, `,(0,l.jsx)(r.code,{children:`.a11y-dyslexia`}),`, `,(0,l.jsx)(r.code,{children:`.a11y-reduce-motion`}),`, `,(0,l.jsx)(r.code,{children:`.a11y-forced-colors`}),`).`]}),`
`]}),`
`,(0,l.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-case-navigator';

const navigator = document.createElement('ds-case-navigator');
navigator.setAttribute('current-index', '0');
navigator.setAttribute('total-cases', '5');

navigator.results = [
  { id: 'case-1', title: 'Agentic AI Design', snippet: 'DesignOps automation cuts delivery latency...' },
  { id: 'case-2', title: 'Design System Architecture', snippet: 'Universal web component design tokens...' }
];

navigator.addEventListener('ds-case-select', (e) => {
  console.log('Navigated to case index:', e.detail.index);
});

navigator.addEventListener('ds-search-select', (e) => {
  console.log('Selected search result:', e.detail.item);
});

document.body.appendChild(navigator);
`})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=i(),a(),r(),o()}))();export{c as default};