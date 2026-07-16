import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";import{t as o}from"./Breadcrumb.stories-DjErRHlG.js";function s(e){let r={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`molecules/Breadcrumb/Architecture`}),`
`,(0,l.jsxs)(r.h1,{id:`breadcrumb-ds-breadcrumb`,children:[`Breadcrumb (`,(0,l.jsx)(r.code,{children:`ds-breadcrumb`}),`)`]}),`
`,(0,l.jsxs)(r.p,{children:[`The `,(0,l.jsx)(r.code,{children:`ds-breadcrumb`}),` component is a `,(0,l.jsx)(r.strong,{children:`stateless (controlled)`}),` web component designed for top-level hierarchy navigation in Single Page Applications (SPAs). It renders breadcrumb stacks, provides return/back shortcuts, and supports item-level contextual popover menus for sibling navigation.`]}),`
`,(0,l.jsx)(r.h2,{id:`architectural-principles`,children:`Architectural Principles`}),`
`,(0,l.jsx)(`br`,{}),`
`,(0,l.jsx)(r.h3,{id:`fully-controlled-data-flow`,children:`Fully Controlled Data Flow`}),`
`,(0,l.jsxs)(r.p,{children:[`The component strictly implements the `,(0,l.jsx)(r.strong,{children:`Unidirectional Data Flow`}),` pattern:`]}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsxs)(r.strong,{children:[`State In (`,(0,l.jsx)(r.code,{children:`.items`}),`):`]}),` The host application (Vite, React, Vue, or Vanilla SPA) manages navigation state and feeds the active crumb stack into the component via property binding.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsxs)(r.strong,{children:[`Events Out (`,(0,l.jsx)(r.code,{children:`ds-breadcrumb-*`}),`):`]}),` User interactions (clicking crumb buttons, pressing backspace, or selecting items from a contextual menu) dispatch custom DOM events containing full context payloads.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`No Internal State Mutation:`}),` The component never truncates its own item stack, modifies history, or manipulates URL parameters internally.`]}),`
`]}),`
`,(0,l.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host SPA / App Shell"]
        direction TB
        Router["Router / State Owner"]
    end

    subgraph WebComp["Controlled Web Component"]
        Breadcrumb["<ds-breadcrumb>"]
    end

    Router -->|"1. State In<br/><code>.items = [...]</code>"| Breadcrumb
    Breadcrumb -->|"2. Event Out<br/><code>ds-breadcrumb-select</code>"| Router

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style Router fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Breadcrumb fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
`}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`data-model--contextual-menu-rules`,children:`Data Model & Contextual Menu Rules`}),`
`,(0,l.jsx)(r.h3,{id:`item-object-schema`,children:`Item Object Schema`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-typescript`,children:`interface BreadcrumbItem {
  id: string;               // Unique route or item identifier
  label: string;            // Text label displayed on the crumb button
  hasMenu?: boolean;        // Explicit override for contextual menu visibility
  menuItems?: MenuItem[];   // Custom dropdown items specific to this crumb
}

interface MenuItem {
  id: string;               // Unique menu item selection identifier
  label: string;            // Display label in the popover list
}

`})}),`
`,(0,l.jsx)(r.h3,{id:`contextual-menu-visibility-rules`,children:`Contextual Menu Visibility Rules`}),`
`,(0,l.jsxs)(r.p,{children:[`A contextual menu is rendered for a given crumb item `,(0,l.jsx)(r.strong,{children:`if and only if`}),`:`]}),`
`,(0,l.jsxs)(r.ol,{children:[`
`,(0,l.jsxs)(r.li,{children:[`The item is `,(0,l.jsx)(r.strong,{children:`not`}),` the root home item (`,(0,l.jsx)(r.code,{children:`index > 0`}),`).`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`hasMenu`}),` is `,(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:`true`})}),` (or omitted when menu options are supplied).`]}),`
`,(0,l.jsxs)(r.li,{children:[`Menu items are available (supplied via `,(0,l.jsx)(r.code,{children:`item.menuItems`}),` or global `,(0,l.jsx)(r.code,{children:`breadcrumb.menuItems`}),`).`]}),`
`]}),`
`,(0,l.jsxs)(r.blockquote,{children:[`
`,(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:`Rule:`}),` Setting `,(0,l.jsx)(r.code,{children:`hasMenu: false`}),` on an item object `,(0,l.jsx)(r.strong,{children:`guarantees`}),` that no contextual menu will render for that specific crumb, regardless of global component configuration.`]}),`
`]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`component-api`,children:`Component API`}),`
`,(0,l.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Property`}),(0,l.jsx)(`th`,{children:`Attribute`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`items`})}),(0,l.jsx)(`td`,{children:`—`}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`Array<BreadcrumbItem>`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`null`})}),(0,l.jsx)(`td`,{children:`Primary array of breadcrumb items defining the active stack.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`menuItems`})}),(0,l.jsx)(`td`,{children:`—`}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`Array<MenuItem>`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`null`})}),(0,l.jsxs)(`td`,{children:[`Fallback global menu options for items with `,(0,l.jsx)(r.code,{children:`hasMenu: true`}),`.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`visible`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`visible`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`boolean`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`true`})}),(0,l.jsx)(`td`,{children:`Toggles the component visibility and layout animation state.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`itemCount`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`item-count`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`number`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`3`})}),(0,l.jsxs)(`td`,{children:[`Fallback item count indicator when `,(0,l.jsx)(r.code,{children:`.items`}),` is omitted.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`currentLabel`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`current-label`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'Item Title'`})}),(0,l.jsxs)(`td`,{children:[`Fallback label for the final crumb when `,(0,l.jsx)(r.code,{children:`.items`}),` is omitted.`]})]})]})]}),`
`,(0,l.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Event Name`}),(0,l.jsx)(`th`,{children:`Bubbles / Composed`}),(0,l.jsx)(`th`,{children:`Detail Payload`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ds-breadcrumb-select`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`true`}),` / `,(0,l.jsx)(r.code,{children:`true`})]}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`{ id, label, index, item, selectedMenuItem? }`})}),(0,l.jsx)(`td`,{children:`Emitted when a crumb button or a contextual menu item is clicked.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ds-breadcrumb-return`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`true`}),` / `,(0,l.jsx)(r.code,{children:`true`})]}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`{ remainingCount, remainingItems, targetItem }`})}),(0,l.jsxs)(`td`,{children:[`Emitted when the back arrow button or `,(0,l.jsx)(r.code,{children:`Backspace`}),` key is triggered.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`ds-breadcrumb-home`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`true`}),` / `,(0,l.jsx)(r.code,{children:`true`})]}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`{ id, item }`})}),(0,l.jsxs)(`td`,{children:[`Emitted when the root `,(0,l.jsx)(r.code,{children:`Home`}),` crumb button is clicked.`]})]})]})]}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`spa-integration-examples`,children:`SPA Integration Examples`}),`
`,(0,l.jsx)(r.h3,{id:`example-a-static-view-without-contextual-menu-eg-about`,children:`Example A: Static View without Contextual Menu (e.g., "About")`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-javascript`,children:`const breadcrumb = document.querySelector('ds-breadcrumb');

// 2 items: Home -> About (Explicitly disables contextual menu)
breadcrumb.items = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Page', hasMenu: false }
];

`})}),`
`,(0,l.jsx)(r.h3,{id:`example-b-dynamic-view-with-sibling-contextual-navigation-eg-case-studies`,children:`Example B: Dynamic View with Sibling Contextual Navigation (e.g., "Case Studies")`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-javascript`,children:`const breadcrumb = document.querySelector('ds-breadcrumb');

// Dynamic case study stack with contextual menu enabled for switching sibling cases
breadcrumb.items = [
  { id: 'home', label: 'Home' },
  { 
    id: 'case-alpha', 
    label: 'Case Study Alpha', 
    hasMenu: true,
    menuItems: [
      { id: 'case-alpha', label: 'Case Study Alpha' },
      { id: 'case-beta', label: 'Case Study Beta' },
      { id: 'case-gamma', label: 'Case Study Gamma' }
    ]
  }
];

// Handle user navigation events in the host SPA
breadcrumb.addEventListener('ds-breadcrumb-select', (e) => {
  const { id } = e.detail;
  router.navigate(\`/cases/\${id}\`);
});

breadcrumb.addEventListener('ds-breadcrumb-return', () => {
  router.navigate('/home');
});

breadcrumb.addEventListener('ds-breadcrumb-home', () => {
  router.navigate('/home');
});

`})}),`
`,(0,l.jsx)(r.hr,{}),`
`,(0,l.jsx)(r.h2,{id:`accessibility-a11y-features`,children:`Accessibility (a11y) Features`}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Keyboard Focus Navigation:`}),` Full arrow key navigation (`,(0,l.jsx)(r.code,{children:`ArrowLeft`}),` / `,(0,l.jsx)(r.code,{children:`ArrowRight`}),` between crumb buttons, `,(0,l.jsx)(r.code,{children:`ArrowDown`}),` to enter popover menus, and `,(0,l.jsx)(r.code,{children:`Backspace`}),` shortcut for return navigation).`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Root Mode Adaptability:`}),` Listens to class mutations on `,(0,l.jsx)(r.code,{children:`<html>`}),` to adapt styling for accessibility settings:`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Adjusts separator and text contrast ratios.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces maximum luminosity boundaries.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Disables spring deceleration physics and slide transitions.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`.a11y-dyslexia`}),`: Overrides typography stack with high-legibility letter spacing.`]}),`
`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=i(),a(),r(),o()}))();export{c as default};