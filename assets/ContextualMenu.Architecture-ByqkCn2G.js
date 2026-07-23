import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Organisms/Contextual Menu [v1.1.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-contextual-menu`,children:(0,c.jsx)(r.code,{children:`ds-contextual-menu`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-contextual-menu`}),` component is an interactive, presentational `,(0,c.jsx)(r.strong,{children:`controlled`}),` Organism designed to render floating action popovers, settings panels, or navigation menus. It dynamically instantiates, configures, and projects child `,(0,c.jsx)(r.code,{children:`<ds-item-row>`}),` Molecules, handling hierarchical category dividers, keyboard focus traps, and root class accessibility observer syncs.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host binds configuration properties (`,(0,c.jsx)(r.code,{children:`open`}),`, `,(0,c.jsx)(r.code,{children:`header-text`}),`, `,(0,c.jsx)(r.code,{children:`hide-header`}),`, `,(0,c.jsx)(r.code,{children:`hide-close`}),`, `,(0,c.jsx)(r.code,{children:`show-subcategory`}),`, `,(0,c.jsx)(r.code,{children:`subcategory-title`}),`, `,(0,c.jsx)(r.code,{children:`aria-label`}),`) and an array of `,(0,c.jsx)(r.code,{children:`items`}),` data objects downstream to build lists and toggle visibility states.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Events Out:`}),` User clicks on the close button trigger a `,(0,c.jsx)(r.code,{children:`ds-close`}),` event, while click interactions on any nested item rows emit a consolidated `,(0,c.jsx)(r.code,{children:`ds-select`}),` event with current state details.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart TD
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["ds-contextual-menu (Shadow DOM Composition)"]
        Component["ds-contextual-menu"]
        CloseBtn["ds-button (Close)"]
        ItemRow["ds-item-row (Repeated)"]
        Divider["ds-divider (Horizontal)"]
    end

    State -->|"1. State In: open / items / show-subcategory / titles"| Component
    Component -->|"2. Updates Visibility"| CloseBtn
    Component -->|"3. Instantiates & Binds Items"| ItemRow
    Component -->|"4. Appends Dividers"| Divider
    
    CloseBtn -->|"5. Event Out: ds-close"| State
    ItemRow -->|"6. Propagates Action: ds-select"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
    style CloseBtn fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style ItemRow fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Divider fill:#ffffff,stroke:#cbd5e1,color:#0f172a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-contextual-menu`}),` component completely seals its Shadow DOM bounds. To prevent WebKit compositor bugs on macOS Safari, scrolling overflow is structurally isolated inside a block-level `,(0,c.jsx)(r.code,{children:`.menu-scroll-viewport`}),` container, while child item rows and dividers are rendered inside a nested `,(0,c.jsx)(r.code,{children:`.menu-content`}),` flexbox layout. No public slots are projected.`]}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsContextualMenuItem {
  id: string;
  label: string;
  icon?: string;
  showIcon?: boolean;
  iconVariant?: 'outline' | 'fill';
  showKbd?: boolean;
  kbd?: string;
  kbdVariant?: 'default' | 'inverted';
  kbdShowPlus?: boolean;
  kbdKey?: string;
  control?: 'toggle' | 'check' | 'radio' | 'none';
  checkHasBackground?: boolean;
  active?: boolean;
  selected?: boolean;
  disabled?: boolean;
  toggleTextOn?: string;
  toggleTextOff?: string;
  category: 'main' | 'subcategory';
}

export interface DsContextualMenuState {
  items: DsContextualMenuItem[];
  open: boolean;
  headerText?: string;
  hideHeader: boolean;
  hideClose: boolean;
  showSubcategory: boolean;
  subcategoryTitle: string;
  ariaLabel?: string;
}

export interface DsContextualMenuSubAtomicHooks {
  '--ds-contextual-menu-width'?: string;
  '--ds-contextual-menu-min-width'?: string;
  '--ds-contextual-menu-bg'?: string;
  '--ds-contextual-menu-radius'?: string;
  '--ds-contextual-menu-max-height'?: string;
  '--ds-contextual-menu-scroll-max-height'?: string;
  '--ds-contextual-menu-scrollbar-color'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`items`})}),(0,c.jsx)(`td`,{children:`N/A`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`DsContextualMenuItem[]`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`[]`})}),(0,c.jsx)(`td`,{children:`Programmatic array of row items configuration data. Re-renders on update.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`open`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`open`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Toggles popover visible entry/exit translate and scale animation states.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`headerText`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`header-text`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'ACTIONS'`})}),(0,c.jsx)(`td`,{children:`Title string displayed inside the top header text bar.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`hideHeader`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`hide-header`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Hides the top header text bar entirely.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`hideClose`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`hide-close`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Hides the top-right close icon button.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`showSubcategory`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`show-subcategory`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Toggles display of the secondary subcategory preferences section.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`subcategoryTitle`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`subcategory-title`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'PREFERENCES'`})}),(0,c.jsx)(`td`,{children:`Title string displayed inside the secondary subcategory header.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ariaLabel`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`aria-label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Accessible tag description delegated down into the menu card.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-close`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:`Dispatched when the top close icon button is clicked, signaling a popover dismissal.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-select`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ id: string, control: string, active: boolean, selected: boolean, label: string }`})}),(0,c.jsx)(`td`,{children:`Dispatched when any item row option triggers, passing updated state values upstream.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-contextual-menu-width`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`260px`})}),(0,c.jsx)(`td`,{children:`Overrides menu card width limits.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-contextual-menu-min-width`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`220px`})}),(0,c.jsx)(`td`,{children:`Overrides menu card minimum width constraints.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-contextual-menu-bg`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-bg)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-card-bg)`})]}),(0,c.jsx)(`td`,{children:`Overrides backdrop surface background colors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-contextual-menu-radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-lg)`})}),(0,c.jsx)(`td`,{children:`Overrides backdrop corner rounded boundaries.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-contextual-menu-max-height`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`none`})}),(0,c.jsx)(`td`,{children:`Caps overall host custom element max height.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-contextual-menu-scroll-max-height`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`320px`})}),(0,c.jsx)(`td`,{children:`Caps vertical scrolling height limit for item list viewports.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-contextual-menu-scrollbar-color`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`#D9D9D9`})}),(0,c.jsx)(`td`,{children:`Overrides custom scrollbar thumb fill colors.`})]})]})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Aria Role Contract:`}),` Assigns `,(0,c.jsx)(r.code,{children:`role="menu"`}),` on the container card, and applies `,(0,c.jsx)(r.code,{children:`role="presentation"`}),` to intermediate dividers and headers. Each generated list row is assigned `,(0,c.jsx)(r.code,{children:`role="menuitem"`}),`, `,(0,c.jsx)(r.code,{children:`role="menuitemcheckbox"`}),`, or `,(0,c.jsx)(r.code,{children:`role="menuitemradio"`}),` based on its form control parameters to strictly comply with WCAG standards.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`ARIA Host Scrubbing:`}),` Automatically purges Light DOM `,(0,c.jsx)(r.code,{children:`aria-label`}),` custom attributes on the host custom element and projects them down onto the container.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Disable Highlighting:`}),` Applies native `,(0,c.jsx)(r.code,{children:`user-select: none`}),` across header titles to prevent unwanted text selections during clicks.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Access Syncing:`}),` Uses a `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` on the HTML root element to capture visual preferences:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Swaps container background to matching dark player HUD tokens and redefines `,(0,c.jsx)(r.code,{children:`--color-surface`}),` locally.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces strict AAA monochrome borders and outlines.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dyslexia`}),`: Overrides tooltip typeface families.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Disables entering translations and scale transitions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Employs active Windows system color maps (`,(0,c.jsx)(r.code,{children:`Canvas`}),` and `,(0,c.jsx)(r.code,{children:`CanvasText`}),`).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Scroll Engine & WebKit Layer Isolation:`}),` Attaches `,(0,c.jsx)(r.code,{children:`data-lenis-prevent`}),` and an explicit `,(0,c.jsx)(r.code,{children:`wheel`}),` listener to `,(0,c.jsx)(r.code,{children:`.menu-scroll-viewport`}),` to isolate smooth-scroll libraries (such as Lenis) from popover scrolling. Listens to `,(0,c.jsx)(r.code,{children:`visibilitychange`}),` and `,(0,c.jsx)(r.code,{children:`open`}),` state transitions to execute `,(0,c.jsx)(r.code,{children:`_forceScrollbarRebind()`}),`, safely resetting `,(0,c.jsx)(r.code,{children:`overflowY`}),` (`,(0,c.jsx)(r.code,{children:`hidden`}),` -> reflow -> `,(0,c.jsx)(r.code,{children:`auto`}),`) to destroy native WebKit overlay scrollbars without creating GPU texture ghosts or frozen thumb snapshots.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-contextual-menu';

const menu = document.createElement('ds-contextual-menu');
menu.setAttribute('header-text', 'ACCESSIBILITY');
menu.setAttribute('show-subcategory', '');
menu.setAttribute('open', '');

menu.items = [
  { id: 'text-size', label: 'Large Text', icon: 'text-size', control: 'none', category: 'main' },
  { id: 'dark-mode', label: 'Dark Theme', icon: 'moon', control: 'toggle', active: true, category: 'subcategory' }
];

// Clean sub-atomic overrides
menu.style.setProperty('--ds-contextual-menu-width', '320px');
menu.style.setProperty('--ds-contextual-menu-radius', '8px');

menu.addEventListener('ds-select', (e) => {
  console.log('Option chosen:', e.detail.id, 'Active:', e.detail.active);
});

document.body.appendChild(menu);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};