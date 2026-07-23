import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Molecules/Navigation Menu [v1.1.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-navigation-menu`,children:`ds-navigation-menu`}),`
`,(0,c.jsx)(r.p,{children:`The ds-navigation-menu component is a controlled molecule for compact top-bar navigation actions. It composes icon buttons, tooltips, and contextual menus to expose language and accessibility controls while emitting semantic events to the host app.`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsx)(r.p,{children:`State In / Events Out contract:`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`State In: Host attributes configure labels, tooltip content, avatar source, disabled state, and accessibility labeling.`}),`
`,(0,c.jsx)(r.li,{children:`Events Out: Interaction emits immutable custom events for menu triggers and item selection.`}),`
`,(0,c.jsx)(r.li,{children:`Encapsulated State: Internal menu open state and menu item toggles are managed in-component and reported outward.`}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
  Host["Host App"] -->|"Attributes / Props"| Nav["&lt;ds-navigation-menu&gt;"]
  Nav -->|"ds-navigation-menu-language"| Host
  Nav -->|"ds-navigation-menu-accessibility"| Host
  Nav -->|"ds-navigation-menu-about"| Host
  Nav -->|"ds-navigation-menu-language-select"| Host
  Nav -->|"ds-navigation-menu-accessibility-select"| Host
`}),`
`,(0,c.jsx)(r.h2,{id:`composition`,children:`Composition`}),`
`,(0,c.jsx)(r.p,{children:`The component has no slots. It composes existing system components inside its Shadow DOM:`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`ds-button (icon variant, fill icons)`}),`
`,(0,c.jsx)(r.li,{children:`ds-divider (vertical separator)`}),`
`,(0,c.jsx)(r.li,{children:`ds-tooltip (button helper labels + kbd hints)`}),`
`,(0,c.jsx)(r.li,{children:`ds-contextual-menu (language and accessibility menus)`}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`internal-structure`,children:`Internal Structure`}),`
`,(0,c.jsxs)(r.ol,{children:[`
`,(0,c.jsx)(r.li,{children:`Left profile group: circular avatar button + about tooltip.`}),`
`,(0,c.jsx)(r.li,{children:`Vertical separator: ds-divider orientation="vertical".`}),`
`,(0,c.jsx)(r.li,{children:`Right action group:`}),`
`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`Language icon button + tooltip + contextual menu.`}),`
`,(0,c.jsx)(r.li,{children:`Accessibility icon button + tooltip + contextual menu.`}),`
`]}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface NavigationMenuLanguageItem {
  id: string;
  label: string;
  control: 'check';
  selected: boolean;
  showIcon?: boolean;
  checkHasBackground?: boolean;
  category?: 'main';
}

export interface NavigationMenuAccessibilityItem {
  id: string;
  label: string;
  icon: string;
  control: 'toggle' | 'check';
  active?: boolean;
  selected?: boolean;
  showIcon?: boolean;
  showKbd?: boolean;
  kbd?: string;
  kbdShowPlus?: boolean;
  kbdKey?: string;
  category?: 'main' | 'subcategory';
}
`})}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`attributes`,children:`Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`language-tooltip`}),(0,c.jsx)(`td`,{children:`string`}),(0,c.jsx)(`td`,{children:`Language`}),(0,c.jsx)(`td`,{children:`Language button tooltip text.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`language-kbd-label`}),(0,c.jsx)(`td`,{children:`string`}),(0,c.jsx)(`td`,{children:`Ctrl`}),(0,c.jsx)(`td`,{children:`Language button tooltip primary key label.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`language-kbd-key`}),(0,c.jsx)(`td`,{children:`string`}),(0,c.jsx)(`td`,{children:`L`}),(0,c.jsx)(`td`,{children:`Language button tooltip secondary key.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`language-kbd-show-plus`}),(0,c.jsx)(`td`,{children:`boolean attr`}),(0,c.jsx)(`td`,{children:`true`}),(0,c.jsx)(`td`,{children:`Shows plus operator in language tooltip.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`language-aria-label`}),(0,c.jsx)(`td`,{children:`string`}),(0,c.jsx)(`td`,{children:`Language`}),(0,c.jsx)(`td`,{children:`ARIA label for language button.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`accessibility-tooltip`}),(0,c.jsx)(`td`,{children:`string`}),(0,c.jsx)(`td`,{children:`Accessibility`}),(0,c.jsx)(`td`,{children:`Accessibility button tooltip text.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`accessibility-kbd-label`}),(0,c.jsx)(`td`,{children:`string`}),(0,c.jsx)(`td`,{children:`Ctrl`}),(0,c.jsx)(`td`,{children:`Accessibility button tooltip primary key label.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`accessibility-kbd-key`}),(0,c.jsx)(`td`,{children:`string`}),(0,c.jsx)(`td`,{children:`A`}),(0,c.jsx)(`td`,{children:`Accessibility button tooltip secondary key.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`accessibility-kbd-show-plus`}),(0,c.jsx)(`td`,{children:`boolean attr`}),(0,c.jsx)(`td`,{children:`true`}),(0,c.jsx)(`td`,{children:`Shows plus operator in accessibility tooltip.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`accessibility-aria-label`}),(0,c.jsx)(`td`,{children:`string`}),(0,c.jsx)(`td`,{children:`Accessibility`}),(0,c.jsx)(`td`,{children:`ARIA label for accessibility button.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`about-tooltip`}),(0,c.jsx)(`td`,{children:`string`}),(0,c.jsx)(`td`,{children:`About`}),(0,c.jsx)(`td`,{children:`About tooltip text.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`about-kbd-label`}),(0,c.jsx)(`td`,{children:`string`}),(0,c.jsx)(`td`,{children:`Ctrl`}),(0,c.jsx)(`td`,{children:`About tooltip primary key label.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`about-kbd-key`}),(0,c.jsx)(`td`,{children:`string`}),(0,c.jsx)(`td`,{children:`I`}),(0,c.jsx)(`td`,{children:`About tooltip secondary key.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`about-kbd-show-plus`}),(0,c.jsx)(`td`,{children:`boolean attr`}),(0,c.jsx)(`td`,{children:`true`}),(0,c.jsx)(`td`,{children:`Shows plus operator in about tooltip.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`about-aria-label`}),(0,c.jsx)(`td`,{children:`string`}),(0,c.jsx)(`td`,{children:`About`}),(0,c.jsx)(`td`,{children:`ARIA label for avatar button.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`avatar-src`}),(0,c.jsx)(`td`,{children:`string`}),(0,c.jsx)(`td`,{children:`https://thispersondoesnotexist.com/random-person.jpeg`}),(0,c.jsx)(`td`,{children:`Avatar image source.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`avatar-alt`}),(0,c.jsx)(`td`,{children:`string`}),(0,c.jsx)(`td`,{children:`Profile face`}),(0,c.jsx)(`td`,{children:`Avatar image alt text.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`disabled`}),(0,c.jsx)(`td`,{children:`boolean attr`}),(0,c.jsx)(`td`,{children:`false`}),(0,c.jsx)(`td`,{children:`Disables all menu triggers and avatar action.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-events`,children:`Emitted Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`ds-navigation-menu-language`}),(0,c.jsx)(`td`,{children:`true / true`}),(0,c.jsx)(`td`,{children:`-`}),(0,c.jsx)(`td`,{children:`Language icon button clicked.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`ds-navigation-menu-accessibility`}),(0,c.jsx)(`td`,{children:`true / true`}),(0,c.jsx)(`td`,{children:`-`}),(0,c.jsx)(`td`,{children:`Accessibility icon button clicked.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`ds-navigation-menu-about`}),(0,c.jsx)(`td`,{children:`true / true`}),(0,c.jsx)(`td`,{children:`-`}),(0,c.jsx)(`td`,{children:`Avatar button clicked.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`ds-navigation-menu-language-select`}),(0,c.jsx)(`td`,{children:`true / true`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`{ id, item }`})}),(0,c.jsx)(`td`,{children:`Language menu item selected.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`ds-navigation-menu-accessibility-select`}),(0,c.jsx)(`td`,{children:`true / true`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`{ id, item, items }`})}),(0,c.jsx)(`td`,{children:`Accessibility item toggled/selected.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-hooks`,children:`Sub-Atomic CSS Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Custom Property`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`--ds-navigation-menu-gap`}),(0,c.jsx)(`td`,{children:`var(--space-sm)`}),(0,c.jsx)(`td`,{children:`Horizontal spacing between groups.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`--ds-navigation-contextual-width`}),(0,c.jsx)(`td`,{children:`260px`}),(0,c.jsx)(`td`,{children:`Shared width for both contextual menus.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`--ds-navigation-icon-color`}),(0,c.jsx)(`td`,{children:`var(--color-gray-dark)`}),(0,c.jsx)(`td`,{children:`Icon button foreground tone.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`--ds-navigation-icon-hover-bg`}),(0,c.jsx)(`td`,{children:`rgba(0, 0, 0, 0.08)`}),(0,c.jsx)(`td`,{children:`Icon button hover surface.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`--ds-navigation-icon-active-bg`}),(0,c.jsx)(`td`,{children:`rgba(0, 0, 0, 0.14)`}),(0,c.jsx)(`td`,{children:`Icon button active surface.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`--ds-navigation-avatar-border`}),(0,c.jsx)(`td`,{children:`var(--color-surface-border)`}),(0,c.jsx)(`td`,{children:`Avatar border color.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`--ds-navigation-avatar-border-hover`}),(0,c.jsx)(`td`,{children:`var(--color-gray-light)`}),(0,c.jsx)(`td`,{children:`Avatar hover border color.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`--ds-navigation-avatar-bg`}),(0,c.jsx)(`td`,{children:`var(--color-bg)`}),(0,c.jsx)(`td`,{children:`Avatar background fill.`})]})]})]}),`
`,(0,c.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`ARIA labels are delegated to focusable internal controls.`}),`
`,(0,c.jsx)(r.li,{children:`Menu tooltips are suppressed while corresponding contextual menu is open.`}),`
`,(0,c.jsx)(r.li,{children:`Accessibility classes are reflected from document.documentElement via MutationObserver.`}),`
`,(0,c.jsx)(r.li,{children:`Forced colors, high contrast, reduced motion, and dyslexia mode are supported by host-reflected attributes.`}),`
`]}),`
`,(0,c.jsx)(r.h2,{id:`integration-example`,children:`Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-navigation-menu';

const nav = document.createElement('ds-navigation-menu');
nav.setAttribute('language-tooltip', 'Idioma');
nav.setAttribute('accessibility-tooltip', 'Acessibilidade');

nav.addEventListener('ds-navigation-menu-language-select', (e) => {
  console.log('Language:', e.detail.id);
});

nav.addEventListener('ds-navigation-menu-accessibility-select', (e) => {
  console.log('Accessibility update:', e.detail);
});

document.body.appendChild(nav);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};