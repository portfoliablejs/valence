import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Molecules/Toast [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-toast`,children:(0,c.jsx)(r.code,{children:`ds-toast`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-toast`}),` component is an interactive, presentational `,(0,c.jsx)(r.strong,{children:`controlled`}),` Molecule designed to render floating system notification banners and status updates. It includes optional left "Close" `,(0,c.jsx)(r.code,{children:`ds-button`}),` actions, optional right "Never show this again" text buttons, complete accessibility syncing, and robust localizable attribute controls.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host binds attributes (`,(0,c.jsx)(r.code,{children:`visible`}),`, `,(0,c.jsx)(r.code,{children:`case-title`}),`, `,(0,c.jsx)(r.code,{children:`show-close`}),`, `,(0,c.jsx)(r.code,{children:`show-never-show`}),`, `,(0,c.jsx)(r.code,{children:`aria-label`}),`, `,(0,c.jsx)(r.code,{children:`label-*`}),`) downstream to trigger entry/exit slide animations, inject message strings, and configure translation labels.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Events Out:`}),` User clicks on the toast body, the close button, or the never-show button emit customized event streams prefixed with `,(0,c.jsx)(r.code,{children:`ds-toast-`}),` upstream.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["ds-toast (Shadow DOM Composition)"]
        Component["ds-toast"]
        CloseBtn["ds-button (Close)"]
        NeverBtn["ds-button (Never)"]
    end

    State -->|"1. State In: visible / case-title / labels"| Component
    Component -->|"2. Event Out: ds-toast-click"| State
    CloseBtn -->|"3. Event Out: ds-toast-close"| State
    NeverBtn -->|"4. Event Out: ds-toast-never-show"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
    style CloseBtn fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style NeverBtn fill:#ffffff,stroke:#cbd5e1,color:#0f172a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-toast`}),` component can receive custom formatted HTML structures or text nodes inside its default slot if the `,(0,c.jsx)(r.code,{children:`case-title`}),` attribute is omitted, fallback-projecting content.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`Text / Inline HTML`}),(0,c.jsxs)(`td`,{children:[`Primary notification text projected if `,(0,c.jsx)(r.code,{children:`case-title`}),` attribute is omitted.`]}),(0,c.jsx)(`td`,{children:`Renders empty and collapses text block dimensions.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsToastState {
  visible: boolean;
  caseTitle?: string;
  showClose: boolean;
  showNeverShow: boolean;
  ariaLabel?: string;
  labelNeverShow?: string;
  labelClose?: string;
}

export interface DsToastSubAtomicHooks {
  '--ds-toast-bg'?: string;
  '--ds-toast-color'?: string;
  '--ds-toast-border-width'?: string;
  '--ds-toast-border-color'?: string;
  '--ds-toast-padding'?: string;
  '--ds-toast-radius'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`visible`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`visible`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`true`})}),(0,c.jsx)(`td`,{children:`Controls the visible entry/exit translate and opacity animation states.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`caseTitle`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`case-title`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`undefined`})}),(0,c.jsx)(`td`,{children:`Primary text string rendered inside the notification container.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`showClose`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`show-close`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`true`})}),(0,c.jsx)(`td`,{children:`Toggles display of the left close icon button.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`showNeverShow`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`show-never-show`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`true`})}),(0,c.jsx)(`td`,{children:`Toggles display of the right "Never show this again" text button.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`labelNeverShow`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`label-never-show`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'Never show this again'`})}),(0,c.jsx)(`td`,{children:`Overriding localization string for the right text button.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`labelClose`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`label-close`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'Close notification'`})}),(0,c.jsx)(`td`,{children:`Overriding localization string for the left close button aria-label.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-toast-click`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ visible: boolean }`})}),(0,c.jsx)(`td`,{children:`Dispatched when users click on the main toast container.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-toast-close`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:`Dispatched when users click the left close button, closing the overlay.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-toast-never-show`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`None`})}),(0,c.jsx)(`td`,{children:`Dispatched when users select the right never-show trigger, setting permanent client blocks.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toast-bg`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-bg)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-card-bg)`})]}),(0,c.jsx)(`td`,{children:`Overrides backdrop surface background colors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toast-color`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-text-primary)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-white)`})]}),(0,c.jsx)(`td`,{children:`Overrides text and button foreground colors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toast-border-width`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--border-width-thin)`})}),(0,c.jsx)(`td`,{children:`Overrides outer boundary stroke frame thickness.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toast-border-color`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`var(--color-card-border)`}),` / `,(0,c.jsx)(r.code,{children:`var(--color-surface-border)`})]}),(0,c.jsx)(`td`,{children:`Overrides bounding frame border line colors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toast-padding`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--space-xs) var(--space-md)`})}),(0,c.jsx)(`td`,{children:`Overrides internal container padding margins.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-toast-radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-pill)`})}),(0,c.jsx)(`td`,{children:`Overrides corner curvature bounds.`})]})]})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Polite Announcements:`}),` Employs an internal `,(0,c.jsx)(r.code,{children:`role="status"`}),` and `,(0,c.jsx)(r.code,{children:`aria-live="polite"`}),` element wrapper so assistive screen-reader software cleanly triggers notification announcements without interrupting user focus.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`ARIA Host Scrubbing:`}),` Automatically purges Light DOM `,(0,c.jsx)(r.code,{children:`aria-label`}),` custom attributes on host custom elements and projects them down onto the focusable checkbox.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Access Syncing:`}),` Uses a `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` on the HTML root element to capture visual preferences:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Adjusts default track contrast and shifts unchecked knobs to dark grays.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces strict AAA binary layouts (solid black backdrops with bordered white outlines).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dyslexia`}),`: Overrides track label typefaces with Comic Sans MS.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Forces immediate 0ms entry/exit translations.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Employs Windows active system colors (`,(0,c.jsx)(r.code,{children:`Canvas`}),` and `,(0,c.jsx)(r.code,{children:`CanvasText`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-toast';

const toast = document.createElement('ds-toast');
toast.setAttribute('case-title', 'Resume reading: Agentic AI Design Study');
toast.setAttribute('show-close', 'true');
toast.setAttribute('show-never-show', 'true');

// Binding custom translations
toast.setAttribute('label-never-show', 'Não mostrar novamente');
toast.setAttribute('label-close', 'Fechar notificação');

toast.addEventListener('ds-toast-never-show', () => {
  localStorage.setItem('block-agentic-study-toast', 'true');
});

document.body.appendChild(toast);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};