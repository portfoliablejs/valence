import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Molecules/Audio Player [v1.0.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-audio-player`,children:(0,c.jsx)(r.code,{children:`ds-audio-player`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-audio-player`}),` component is an interactive `,(0,c.jsx)(r.strong,{children:`controlled`}),` Molecule designed to manage audio reading tracks, speed variations, volume settings, and synchronized viewport auto-scrolling. It orchestrates nested custom `,(0,c.jsx)(r.code,{children:`ds-button`}),`, `,(0,c.jsx)(r.code,{children:`ds-seek-bar`}),`, `,(0,c.jsx)(r.code,{children:`ds-divider`}),`, and `,(0,c.jsx)(r.code,{children:`ds-tooltip`}),` Atoms, implementing dynamic pointer-drag and keyboard-traversal controls.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host shell binds properties (`,(0,c.jsx)(r.code,{children:`playing`}),`, `,(0,c.jsx)(r.code,{children:`time`}),`, `,(0,c.jsx)(r.code,{children:`duration`}),`, `,(0,c.jsx)(r.code,{children:`speed`}),`, `,(0,c.jsx)(r.code,{children:`hide-on-scroll`}),`, `,(0,c.jsx)(r.code,{children:`auto-scroll`}),`, `,(0,c.jsx)(r.code,{children:`volume`}),`, `,(0,c.jsx)(r.code,{children:`muted`}),`, `,(0,c.jsx)(r.code,{children:`variant`}),`) and customized translation tags (`,(0,c.jsx)(r.code,{children:`label-*`}),`) to direct the player layout state.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Events Out:`}),` User interactions with buttons or sliders emit clean customized event streams prefixed with `,(0,c.jsx)(r.code,{children:`ds-audio-`}),` carrying immutable detail payloads upstream.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart TD
    subgraph Host["Host Application / App Shell"]
        direction TB
        State["State Manager / Component Host"]
    end

    subgraph WebComp["ds-audio-player (Shadow DOM Composition)"]
        Component["ds-audio-player"]
        PlayBtn["ds-button (Play)"]
        SeekSlider["ds-seek-bar (Progress)"]
        VolSlider["ds-seek-bar (Volume)"]
        SpeedBtn["ds-button (Speed)"]
    end

    State -->|"1. State In: playing / time / speed / labels"| Component
    Component -->|"2. Render State Updates"| PlayBtn
    Component -->|"2. Render State Updates"| SeekSlider
    Component -->|"2. Render State Updates"| VolSlider
    Component -->|"2. Render State Updates"| SpeedBtn
    
    PlayBtn -->|"3. User Click: ds-audio-play-toggle"| State
    SeekSlider -->|"3. User Seek: ds-audio-seek"| State
    VolSlider -->|"3. User Volume: ds-audio-volume-change"| State
    SpeedBtn -->|"3. User Click: ds-audio-speed-cycle"| State

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style State fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style Component fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
    style PlayBtn fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style SeekSlider fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style VolSlider fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style SpeedBtn fill:#ffffff,stroke:#cbd5e1,color:#0f172a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-audio-player`}),` component is structurally sealed, wrapping its interactive controls directly inside its Shadow DOM boundaries. No public slot targets are exposed to guarantee consistent control-row alignment and click behaviors.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`None`}),(0,c.jsx)(`td`,{children:`Projects no content. Control buttons and timelines are fully encapsulated.`}),(0,c.jsx)(`td`,{children:`Renders standard play/pause buttons, seek-bar slides, and floating tooltips.`})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsAudioPlayerState {
  playing: boolean;
  time: number;
  duration: number;
  speed: '0.75X' | '1X' | '1.25X' | '1.5X' | '1.75X' | '2X';
  hideOnScroll: boolean;
  autoScroll: boolean;
  volume: number;
  muted: boolean;
  variant: 'default' | 'scrolled';
}

export interface DsAudioPlayerLabels {
  'label-reader'?: string;
  'label-play'?: string;
  'label-pause'?: string;
  'label-mute'?: string;
  'label-unmute'?: string;
  'label-speed'?: string;
  'label-hide'?: string;
  'label-show'?: string;
  'label-autoscroll-on'?: string;
  'label-autoscroll-off'?: string;
  'label-volume'?: string;
  'label-volume-level'?: string;
  'label-audio-pos'?: string;
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,c.jsx)(r.h3,{id:`properties--attributes`,children:`Properties & Attributes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Property`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type`}),(0,c.jsx)(`th`,{children:`Default`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`playing`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`playing`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Toggles the active playback rendering state.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`time`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`time`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`number`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0`})}),(0,c.jsx)(`td`,{children:`Current playback progression location in seconds.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`duration`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`duration`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`number`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0`})}),(0,c.jsx)(`td`,{children:`Total length duration of the audio reading track in seconds.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`speed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`speed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`string`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'1X'`})}),(0,c.jsxs)(`td`,{children:[`Selects playback velocity multipliers (`,(0,c.jsx)(r.code,{children:`'0.75X'`}),`, `,(0,c.jsx)(r.code,{children:`'1X'`}),`, `,(0,c.jsx)(r.code,{children:`'1.25X'`}),`, etc.).`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`hideOnScroll`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`hide-on-scroll`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`When enabled, instructs host wrappers to slide out of view during page scrolls.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`autoScroll`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`auto-scroll`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`true`})}),(0,c.jsx)(`td`,{children:`Enables auto-scrolling synchronization across text content panels.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`volume`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`volume`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`number`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`100`})}),(0,c.jsx)(`td`,{children:`Active volume percentage (from 0 to 100).`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`muted`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`muted`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`false`})}),(0,c.jsx)(`td`,{children:`Mutes/unmutes active output. Forces volume seek percent to 0 when true.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`variant`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`variant`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'default' \\| 'scrolled'`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`'default'`})}),(0,c.jsx)(`td`,{children:`Toggles standard full-width panels vs compact scrolled floating pill swappers.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`emitted-custom-events`,children:`Emitted Custom Events`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Event Name`}),(0,c.jsx)(`th`,{children:`Bubbles / Composed`}),(0,c.jsx)(`th`,{children:`Detail Payload`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-audio-play-toggle`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ playing: boolean }`})}),(0,c.jsx)(`td`,{children:`Emitted when users trigger play/pause clicks or spacebar strokes.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-audio-mute-toggle`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ muted: boolean }`})}),(0,c.jsx)(`td`,{children:`Emitted when users toggle active volume mutes.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-audio-speed-cycle`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ speed: string }`})}),(0,c.jsx)(`td`,{children:`Emitted when users cycle playback velocity selections.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-audio-hide-toggle`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ hideOnScroll: boolean }`})}),(0,c.jsx)(`td`,{children:`Emitted when users toggle scroll hide constraints.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-audio-autoscroll-toggle`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ autoScroll: boolean }`})}),(0,c.jsx)(`td`,{children:`Emitted when users toggle auto-scrolling view anchors.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-audio-seek`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ percent: number }`})}),(0,c.jsx)(`td`,{children:`Emitted continuously when dragging, touching, or keying main timeline slides.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-audio-volume-change`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`true`}),` / `,(0,c.jsx)(r.code,{children:`true`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`{ volume: number }`})}),(0,c.jsx)(`td`,{children:`Emitted continuously when adjusting volume slides.`})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,c.jsx)(r.p,{children:`This composite molecule encapsulates nested Atom sub-atomic overrides to align colors and spacing parameters:`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`ds-divider`}),` margin: `,(0,c.jsx)(r.code,{children:`--ds-divider-margin`}),` is overridden to `,(0,c.jsx)(r.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`ds-seek-bar`}),` colors: `,(0,c.jsx)(r.code,{children:`--ds-seek-bar-fill-bg`}),`, `,(0,c.jsx)(r.code,{children:`--ds-seek-bar-knob-bg`}),`, and `,(0,c.jsx)(r.code,{children:`--ds-seek-bar-track-bg`}),` are cleanly set on `,(0,c.jsx)(r.code,{children:`.volume-seek`}),` elements.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--host-aria-delegation`,children:`Accessibility & Host ARIA Delegation`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Screen Reader Announcement:`}),` Assigns `,(0,c.jsx)(r.code,{children:`role="region"`}),` and `,(0,c.jsx)(r.code,{children:`aria-label="Audio Player"`}),` on the container, managing aria-live elements for timeline progression.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Keyboard Hotkeys:`}),` Focus on the entire component activates arrow-key hotkey navigation (`,(0,c.jsx)(r.code,{children:`ArrowRight`}),` / `,(0,c.jsx)(r.code,{children:`ArrowLeft`}),` seek relative seconds; `,(0,c.jsx)(r.code,{children:`ArrowUp`}),` / `,(0,c.jsx)(r.code,{children:`ArrowDown`}),` increments volume parameters). Native button controls support standard focus paths and `,(0,c.jsx)(r.code,{children:`Enter`}),` / `,(0,c.jsx)(r.code,{children:`Space`}),` executions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Zero i18n Localization:`}),` Fully translates screen-reader announcers, tooltips, and play descriptions by binding `,(0,c.jsx)(r.code,{children:`label-[control]`}),` attributes downstream.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Global Access Syncing:`}),` MutationObserver on document roots reflects global setting cascades downstream as host element boolean flags:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dark-mode`}),`: Shifts background elements to dark gray player HUD tokens.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`: Enforces strict AAA borders and monochrome layouts.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-dyslexia`}),`: Forces Comic Sans MS fonts.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`: Disables volume expand transitions and snatches layout coordinates instantly.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(r.h3,{id:`basic-integration-example`,children:`Basic Integration Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-audio-player';

const player = document.createElement('ds-audio-player');
player.setAttribute('time', '45');
player.setAttribute('duration', '180');
player.setAttribute('volume', '75');

// Binding custom translations
player.setAttribute('label-reader', 'Leitor de Áudio');
player.setAttribute('label-play', 'Iniciar');
player.setAttribute('label-pause', 'Pausar');

player.addEventListener('ds-audio-play-toggle', (e) => {
  console.log('Player toggled. Is playing:', e.detail.playing);
});

document.body.appendChild(player);
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};