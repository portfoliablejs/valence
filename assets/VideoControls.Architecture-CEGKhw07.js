import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Molecules/Video Controls [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-video-controls`,children:(0,c.jsx)(r.code,{children:`ds-video-controls`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-video-controls`}),` component is an interactive `,(0,c.jsx)(r.strong,{children:`controlled`}),` Molecule designed to render quality, highly accessible playback buttons for floating, compact overlay video systems. It aggregates custom `,(0,c.jsx)(r.code,{children:`ds-button`}),` Atoms (configured as `,(0,c.jsx)(r.code,{children:`variant="floating"`}),` and `,(0,c.jsx)(r.code,{children:`icon-variant="fill"`}),` switches) and nested `,(0,c.jsx)(r.code,{children:`ds-tooltip`}),` cues.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host binds attributes (`,(0,c.jsx)(r.code,{children:`playing`}),`, `,(0,c.jsx)(r.code,{children:`muted`}),`, `,(0,c.jsx)(r.code,{children:`cc-enabled`}),`, `,(0,c.jsx)(r.code,{children:`speed`}),`, `,(0,c.jsx)(r.code,{children:`label-*`}),`) downstream to swap control icons, toggle active highlighting, and configure translations.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Events Out (`,(0,c.jsx)(r.code,{children:`ds-video-action`}),`):`]}),` Selecting any control switch fires a unified custom event payload indicating the selected action name (`,(0,c.jsx)(r.code,{children:`'play-pause'`}),`, `,(0,c.jsx)(r.code,{children:`'mute'`}),`, `,(0,c.jsx)(r.code,{children:`'cc'`}),`, `,(0,c.jsx)(r.code,{children:`'speed'`}),`, or `,(0,c.jsx)(r.code,{children:`'stop'`}),`) upstream for video state management.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["ds-video-controls (Shadow DOM Composition)"]
        Component["ds-video-controls"]
        CcBtn["ds-button (CC)"]
        MuteBtn["ds-button (Mute)"]
        SpeedBtn["ds-button (Speed)"]
        PlayBtn["ds-button (Play)"]
        StopBtn["ds-button (Stop)"]
    end

    State -->|"1. State In: playing / muted / cc-enabled / speed / labels"| Component
    Component -->|"2. Render Icons"| CcBtn
    Component -->|"2. Render Icons"| MuteBtn
    Component -->|"2. Render Icons"| SpeedBtn
    Component -->|"2. Render Icons"| PlayBtn
    Component -->|"2. Render Icons"| StopBtn
    
    CcBtn -->|"3. Event Out: ds-video-action { action: 'cc' }"| State
    MuteBtn -->|"3. Event Out: ds-video-action { action: 'mute' }"| State
    SpeedBtn -->|"3. Event Out: ds-video-action { action: 'speed' }"| State
    PlayBtn -->|"3. Event Out: ds-video-action { action: 'play-pause' }"| State
    StopBtn -->|"3. Event Out: ds-video-action { action: 'stop' }"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
    style CcBtn fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style MuteBtn fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style SpeedBtn fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style PlayBtn fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style StopBtn fill:#ffffff,stroke:#cbd5e1,color:#0f172a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-video-controls`}),` component seals its internal layouts completely, nesting all button and tooltip structures directly within its Shadow DOM boundaries. No public slot targets are exposed.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`None`}),(0,c.jsx)(`td`,{children:`Projects no content. Control buttons are fully encapsulated.`}),(0,c.jsx)(`td`,{children:`Renders standard captions, mute, speed, play, and return buttons.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsVideoControlsState {
  playing: boolean;
  muted: boolean;
  ccEnabled: boolean;
  speed: '0.75X' | '1X' | '1.25X' | '1.5X' | '1.75X' | '2X';
}

export interface DsVideoControlsLabels {
  'label-play'?: string;
  'label-pause'?: string;
  'label-cc-on'?: string;
  'label-cc-off'?: string;
  'label-mute'?: string;
  'label-unmute'?: string;
  'label-speed'?: string;
  'label-return'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`playing`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`playing`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Sets play/pause visualization state.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`muted`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`muted`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Sets active volume mute visualization state.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ccEnabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`cc-enabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Sets active captions (CC) highlighting visualization state.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`speed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`speed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'1X'`})}),(0,c.jsxs)(`td`,{children:[`Configures active speed rate gauge (`,(0,c.jsx)(r.code,{children:`'0.75X'`}),`, `,(0,c.jsx)(r.code,{children:`'1X'`}),`, etc.).`]})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-video-action`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ action: DsVideoControlsAction }`})}),(0,c.jsx)(`td`,{children:`Dispatched when users select any button trigger on the toolbar, passing action keywords upstream.`})]})})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsxs)(r.p,{children:[`This composite molecule overrides sub-atomic properties on child `,(0,c.jsx)(r.code,{children:`ds-button`}),` elements to ensure unified sizes:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`ds-button`}),`: Overridden to use `,(0,c.jsx)(r.code,{children:`variant="floating"`}),` and `,(0,c.jsx)(r.code,{children:`icon-variant="fill"`}),` to guarantee round, compact clickable targets.`]}),`
`]}),`
`,(0,c.jsx)(r.p,{children:`Additional mobile-responsive layout custom overrides:`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`CSS Custom Property`}),(0,c.jsx)(`th`,{children:`Fallback Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-video-controls-bg`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--color-player-bg)`})}),(0,c.jsx)(`td`,{children:`Overrides background color on mobile views.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-video-controls-border-width`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--border-width-thin)`})}),(0,c.jsx)(`td`,{children:`Overrides container border thickness on mobile views.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-video-controls-border-color`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--color-bg)`})}),(0,c.jsx)(`td`,{children:`Overrides container border line color on mobile views.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-video-controls-radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`50px`})}),(0,c.jsx)(`td`,{children:`Overrides container border corner rounding on mobile views.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`--ds-video-controls-shadow`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0 10px 30px rgba(0,0,0,0.15)`})}),(0,c.jsx)(`td`,{children:`Overrides container drop shadows.`})]})]})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Button Delegation:`}),` Replaces legacy markup with compliant `,(0,c.jsx)(r.code,{children:`<ds-button>`}),` wrappers, enabling native keyboard focus loops, hover scaling, and keyboard triggers.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Screen Reader Isolation:`}),` Employs nested tooltip descriptions with keyboard shortcuts (`,(0,c.jsx)(r.code,{children:`show-kbd="true"`}),` and `,(0,c.jsx)(r.code,{children:`kbd-label`}),`). Screen readers are instructed to ignore background decorative graphics.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Zero i18n Localization:`}),` Supports complete multi-language overrides by exposing custom `,(0,c.jsx)(r.code,{children:`label-[control]`}),` attributes (e.g., `,(0,c.jsx)(r.code,{children:`label-play`}),`, `,(0,c.jsx)(r.code,{children:`label-cc-on`}),`) directly.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Access Syncing:`}),` MutationObserver on document roots reflects global setting cascades downstream as host element boolean flags:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Swaps container background to matching dark player HUD tokens.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces strict AAA monochrome borders and outlines.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dyslexia`}),`: Adjusts tooltip typeface families.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Disables hovering scale transitions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-forced-colors`}),`: Employs active Windows system color maps.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-video-controls';

const controls = document.createElement('ds-video-controls');
controls.setAttribute('playing', 'true');
controls.setAttribute('cc-enabled', 'true');
controls.setAttribute('speed', '1.5X');

// Customized translations
controls.setAttribute('label-play', 'Iniciar');
controls.setAttribute('label-pause', 'Pausar');

controls.addEventListener('ds-video-action', (e) => {
  console.log('Action selected:', e.detail.action);
});

document.body.appendChild(controls);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};