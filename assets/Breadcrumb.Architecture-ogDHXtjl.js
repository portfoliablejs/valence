import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";import{t as o}from"./Breadcrumb.stories-BeykcHpk.js";function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Molecules/Breadcrumb [v1.0.0]/Architecture`}),`
`,(0,l.jsx)(r.h1,{id:`ds-breadcrumb`,children:(0,l.jsx)(r.code,{children:`ds-breadcrumb`})}),`
`,(0,l.jsxs)(r.p,{children:[`The `,(0,l.jsx)(r.code,{children:`ds-breadcrumb`}),` component is a `,(0,l.jsx)(r.strong,{children:`stateless (controlled)`}),` Molecule designed for top-level hierarchy navigation in Single Page Applications (SPAs)[cite: 5]. It renders breadcrumb stacks, provides return/back shortcuts, and supports item-level contextual popover menus for sibling navigation[cite: 5].`]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,l.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,l.jsxs)(r.p,{children:[`The component strictly implements the `,(0,l.jsx)(r.strong,{children:`Unidirectional Data Flow`}),` pattern[cite: 5]:`]}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsxs)(r.strong,{children:[`State In (`,(0,l.jsx)(r.code,{children:`.items`}),`):`]}),` The host application manages navigation state and feeds the active crumb stack into the component via property binding[cite: 5].`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsxs)(r.strong,{children:[`Events Out (`,(0,l.jsx)(r.code,{children:`ds-breadcrumb-*`}),`):`]}),` User interactions (clicking crumb buttons, pressing backspace, or selecting items from a contextual menu) dispatch custom DOM events containing full context payloads[cite: 5].`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`No Internal State Mutation:`}),` The component never truncates its own item stack, modifies history, or manipulates URL parameters internally[cite: 5].`]}),`
`]}),`
`,(0,l.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host SPA / App Shell"]
        direction TB
        Router["Router / State Owner"]
    end

    subgraph WebComp["Controlled Web Component"]
        Breadcrumb["ds-breadcrumb"]
    end

    Router -->|"1. State In<br/>.items = [...]"| Breadcrumb
    Breadcrumb -->|"2. Event Out<br/>ds-breadcrumb-select"| Router

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style Router fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Breadcrumb fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,l.jsxs)(r.p,{children:[`The `,(0,l.jsx)(r.code,{children:`ds-breadcrumb`}),` component seals its Shadow DOM bounds, dynamically constructing and nesting return buttons, item wrappers, separators, and popover menus inside its shadow root navigation container[cite: 5].`]}),`
`,(0,l.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Slot Name`}),(0,l.jsx)(`th`,{children:`Type / Allowed Children`}),(0,l.jsx)(`th`,{children:`Description`}),(0,l.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,l.jsx)(`tbody`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`default`})}),(0,l.jsx)(`td`,{children:`None`}),(0,l.jsx)(`td`,{children:`Projects no content. Crumb structure and contextual popover menus are fully encapsulated in the Shadow DOM.`}),(0,l.jsxs)(`td`,{children:[`Renders standard breadcrumb items bound via `,(0,l.jsx)(r.code,{children:`.items`}),` property or fallback attributes.`]})]})})]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`data-model--contextual-menu-rules`,children:`Data Model & Contextual Menu Rules`}),`
`,(0,l.jsx)(r.h3,{id:`item-object-schema`,children:`Item Object Schema`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-typescript`,children:`export interface BreadcrumbItem {
  id: string;               // Unique route or item identifier
  label: string;            // Text label displayed on the crumb button
  hasMenu?: boolean;        // Explicit override for contextual menu visibility
  menuItems?: MenuItem[];   // Custom dropdown items specific to this crumb
  menuHeader?: string;      // Presentational header label for popover
  subcategoryTitle?: string;// Presentational category title
}

export interface MenuItem {
  id: string;               // Unique menu item selection identifier
  label: string;            // Display label in the popover list
}
`})}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,l.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Property`}),(0,l.jsx)(`th`,{children:`Attribute`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`items`})}),(0,l.jsx)(`td`,{children:`—`}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`Array<BreadcrumbItem>`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`null`})}),(0,l.jsx)(`td`,{children:`Primary array of breadcrumb items defining the active stack.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`menuItems`})}),(0,l.jsx)(`td`,{children:`—`}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`Array<MenuItem>`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`null`})}),(0,l.jsxs)(`td`,{children:[`Fallback global menu options for items with `,(0,l.jsx)(r.code,{children:`hasMenu: true`}),`.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`visible`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`visible`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`boolean`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`true`})}),(0,l.jsx)(`td`,{children:`Toggles the component visibility and layout animation state.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`itemCount`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`item-count`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`number`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`3`})}),(0,l.jsxs)(`td`,{children:[`Fallback item count indicator when `,(0,l.jsx)(r.code,{children:`.items`}),` is omitted.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`currentLabel`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`current-label`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'Item Title'`})}),(0,l.jsxs)(`td`,{children:[`Fallback label for the final crumb when `,(0,l.jsx)(r.code,{children:`.items`}),` is omitted.`]})]})]})]}),`
`,(0,l.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Event Name`}),(0,l.jsx)(`th`,{children:`Bubbles / Composed`}),(0,l.jsx)(`th`,{children:`Detail Payload`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ds-breadcrumb-select`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`true`}),` / `,(0,l.jsx)(r.code,{children:`true`})]}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`{ id, label, index, item, selectedMenuItem? }`})}),(0,l.jsx)(`td`,{children:`Emitted when a crumb button or a contextual menu item is clicked.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ds-breadcrumb-return`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`true`}),` / `,(0,l.jsx)(r.code,{children:`true`})]}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`{ remainingCount, remainingItems, targetItem }`})}),(0,l.jsxs)(`td`,{children:[`Emitted when the back arrow button or `,(0,l.jsx)(r.code,{children:`Backspace`}),` key is triggered.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ds-breadcrumb-home`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`true`}),` / `,(0,l.jsx)(r.code,{children:`true`})]}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`{ id, item }`})}),(0,l.jsxs)(`td`,{children:[`Emitted when the root `,(0,l.jsx)(r.code,{children:`Home`}),` crumb button is clicked.`]})]})]})]}),`
`,(0,l.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`CSS Custom Property`}),(0,l.jsx)(`th`,{children:`Fallback Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-breadcrumb-gap`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--space-xs, 4px)`})}),(0,l.jsx)(`td`,{children:`Overrides horizontal spacing gap between crumb items and return button.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-breadcrumb-separator-color`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--color-text-muted, #777777)`})}),(0,l.jsx)(`td`,{children:`Overrides separator icon and text colors.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-breadcrumb-item-opacity`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`var(--opacity-medium, 0.6)`})}),(0,l.jsx)(`td`,{children:`Overrides default opacity of non-hovered crumb items.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--ds-breadcrumb-menu-width`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`260px`})}),(0,l.jsx)(`td`,{children:`Overrides contextual menu popover width.`})]})]})]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`ARIA Scrubbing:`}),` Purges host-level `,(0,l.jsx)(r.code,{children:`aria-label`}),` attributes and delegates them downstream onto the internal Shadow DOM `,(0,l.jsx)(r.code,{children:`<nav>`}),` container[cite: 5].`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Keyboard Navigation:`}),` Full arrow key navigation (`,(0,l.jsx)(r.code,{children:`ArrowLeft`}),` / `,(0,l.jsx)(r.code,{children:`ArrowRight`}),` between crumb buttons, `,(0,l.jsx)(r.code,{children:`ArrowDown`}),` to enter popover menus, and `,(0,l.jsx)(r.code,{children:`Backspace`}),` shortcut for return navigation)[cite: 5].`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Global Accessibility Propagation:`}),` Listens to class changes on `,(0,l.jsx)(r.code,{children:`document.documentElement`}),` via `,(0,l.jsx)(r.code,{children:`MutationObserver`}),` to sync accessibility modes[cite: 5]:`,`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Adjusts separator and text contrast ratios[cite: 5].`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces maximum luminosity boundaries[cite: 5].`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Disables spring deceleration physics and slide transitions[cite: 5].`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-dyslexia`}),`: Overrides typography stack with high-legibility letter spacing[cite: 5].`]}),`
`]}),`
`]}),`
`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=i(),a(),r(),o()}))();export{c as default};