import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";import{t as o}from"./Button.stories-DAR9bqUJ.js";function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Atoms/Button [v1.0.0]/Architecture`}),`
`,(0,l.jsx)(r.h1,{id:`ds-button`,children:(0,l.jsx)(r.code,{children:`ds-button`})}),`
`,(0,l.jsxs)(r.p,{children:[`The `,(0,l.jsx)(r.code,{children:`ds-button`}),` component is an `,(0,l.jsx)(r.strong,{children:`atomic, multi-use action primitive`}),` in the Valence Design System. Within the `,(0,l.jsx)(r.code,{children:`portfoliable`}),` web application shell, it serves as a core action target across multiple views and composite molecules, such as primary call-to-actions in the Case Reader, external repository links, media controls in `,(0,l.jsx)(r.code,{children:`ds-video-player`}),`, and social share triggers.`]}),`
`,(0,l.jsx)(`br`,{}),`
`,(0,l.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,l.jsx)(`br`,{}),`
`,(0,l.jsx)(r.h3,{id:`unidirectional-data-flow--state-synchronization`,children:`Unidirectional Data Flow & State Synchronization`}),`
`,(0,l.jsxs)(r.p,{children:[`The component follows a strict `,(0,l.jsx)(r.strong,{children:`State In / Events Out`}),` lifecycle model:`]}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`State In (Observed Attributes):`}),` The component observes changes to core state attributes (`,(0,l.jsx)(r.code,{children:`variant`}),`, `,(0,l.jsx)(r.code,{children:`aria-label`}),`, `,(0,l.jsx)(r.code,{children:`disabled`}),`, `,(0,l.jsx)(r.code,{children:`icon`}),`, `,(0,l.jsx)(r.code,{children:`icon-variant`}),`, `,(0,l.jsx)(r.code,{children:`icon-position`}),`). When attributes mutate, `,(0,l.jsx)(r.code,{children:`updateAttributes()`}),` updates the internal Shadow DOM button element and the child `,(0,l.jsx)(r.code,{children:`<ds-icon>`}),` tag.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Events Out (Native Interaction):`}),` User interaction triggers standard `,(0,l.jsx)(r.code,{children:`click`}),` events emitted from the host.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Encapsulation:`}),` The component handles internal focus styling and ARIA delegation without exposing its inner Shadow DOM subtree.`]}),`
`]}),`
`,(0,l.jsx)(`mermaid-diagram`,{chart:`
flowchart LR
    subgraph Host["Host Application / Composite Container"]
        direction TB
        App["App Shell / Molecule"]
    end

    subgraph WebComp["ds-button (Shadow DOM)"]
        HostTag["&lt;ds-button&gt;"]
        ButtonEl["&lt;button&gt;"]
        IconEl["&lt;ds-icon&gt;"]
        SlotEl["&lt;slot&gt;"]
    end

    subgraph Composite["ds-tooltip (Optional)"]
        Tooltip["&lt;ds-tooltip&gt;"]
    end

    App -->|"1. State Attributes<br/><code>variant, icon, disabled</code>"| HostTag
    HostTag -->|"2. Updates Attributes"| ButtonEl
    HostTag -->|"3. Configures Size & Variant"| IconEl
    HostTag -->|"4. Directs Label Content"| SlotEl
    ButtonEl -->|"5. Emits Interaction Events"| App
    HostTag -.->|"Hover / Focus Sync"| Tooltip

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style Composite fill:#f0fdf4,stroke:#22c55e,stroke-width:2px,color:#14532d
    style HostTag fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style ButtonEl fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
    style IconEl fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
    style SlotEl fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
    style Tooltip fill:#ffffff,stroke:#86efac,color:#14532d
`}),`
`,(0,l.jsx)(`br`,{}),`
`,(0,l.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,l.jsx)(r.h3,{id:`internal-shadow-dom-structure`,children:`Internal Shadow DOM Structure`}),`
`,(0,l.jsx)(r.p,{children:`The Shadow DOM template is intentionally compressed on a single line to prevent unwanted whitespace text nodes around slot projections:`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-html`,children:`<style>\${css}</style>
<button type="button">
  <ds-icon class="btn-icon" style="display: none;"></ds-icon>
  <slot></slot>
</button>
`})}),`
`,(0,l.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Slot Name`}),(0,l.jsx)(`th`,{children:`Allowed Children`}),(0,l.jsx)(`th`,{children:`Description`}),(0,l.jsx)(`th`,{children:`Fallback / Variant Behavior`})]})}),(0,l.jsx)(`tbody`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`default`})}),(0,l.jsxs)(`td`,{children:[`Text node, `,(0,l.jsx)(r.code,{children:`<span>`})]}),(0,l.jsx)(`td`,{children:`Primary textual button label injected by the host application.`}),(0,l.jsxs)(`td`,{children:[`Rendered in `,(0,l.jsx)(r.code,{children:`primary`}),`, `,(0,l.jsx)(r.code,{children:`secondary`}),`, and `,(0,l.jsx)(r.code,{children:`text`}),` variants. Ignored when `,(0,l.jsx)(r.code,{children:`variant="icon"`}),` or `,(0,l.jsx)(r.code,{children:`variant="floating"`}),`.`]})]})})]}),`
`,(0,l.jsx)(`br`,{}),`
`,(0,l.jsx)(r.h3,{id:`iconography--tooltip-synergy`,children:`Iconography & Tooltip Synergy`}),`
`,(0,l.jsxs)(r.ol,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsxs)(r.strong,{children:[`Child `,(0,l.jsx)(r.code,{children:`<ds-icon>`}),` Mechanics:`]}),` When the `,(0,l.jsx)(r.code,{children:`icon`}),` attribute is present, `,(0,l.jsx)(r.code,{children:`ds-button`}),` automatically displays the internal `,(0,l.jsx)(r.code,{children:`<ds-icon>`}),` component. It calculates icon sizing dynamically: circular variants (`,(0,l.jsx)(r.code,{children:`icon`}),` and `,(0,l.jsx)(r.code,{children:`floating`}),`) receive `,(0,l.jsx)(r.code,{children:`size="20"`}),`, while pill and text variants receive `,(0,l.jsx)(r.code,{children:`size="14"`}),`.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Icon Position Reversal:`}),` Setting `,(0,l.jsx)(r.code,{children:`icon-position="right"`}),` sets flex direction to `,(0,l.jsx)(r.code,{children:`row-reverse`}),` on the internal button container.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Tooltip Composite Pattern:`}),` When paired with `,(0,l.jsx)(r.code,{children:`<ds-tooltip>`}),`, hovering or focusing the button activates the tooltip's `,(0,l.jsx)(r.code,{children:`visible`}),` attribute to display helper text and keyboard shortcuts.`]}),`
`]}),`
`,(0,l.jsx)(`br`,{}),`
`,(0,l.jsx)(r.h2,{id:`api-contract`,children:`API Contract`}),`
`,(0,l.jsx)(r.h3,{id:`observed-attributes--properties`,children:`Observed Attributes & Properties`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Property / Attribute`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`variant`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'primary' | 'secondary' | 'text' | 'icon' | 'floating'`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'primary'`})}),(0,l.jsx)(`td`,{children:`Determines visual presentation, geometry, and hover scaling behaviors.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`label`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`''`})}),(0,l.jsxs)(`td`,{children:[`Slotted textual content passed into default `,(0,l.jsx)(r.code,{children:`<slot>`}),`.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`aria-label`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`null`})}),(0,l.jsxs)(`td`,{children:[`Accessibility label delegated to internal `,(0,l.jsx)(r.code,{children:`<button>`}),` and scrubbed from host tag.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`disabled`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`boolean`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`false`})}),(0,l.jsxs)(`td`,{children:[`Disables interactivity, updates cursor to `,(0,l.jsx)(r.code,{children:`not-allowed`}),`, and lowers opacity.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`icon`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`string`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`null`})}),(0,l.jsxs)(`td`,{children:[`Name of the icon to render inside internal `,(0,l.jsx)(r.code,{children:`<ds-icon>`}),`.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`icon-variant`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'outline' | 'fill'`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'outline'`})}),(0,l.jsxs)(`td`,{children:[`Sets the icon rendering style (`,(0,l.jsx)(r.code,{children:`fill`}),` vs default outline).`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`icon-position`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'left' | 'right'`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`'left'`})}),(0,l.jsx)(`td`,{children:`Determines icon placement relative to slotted label text.`})]})]})]}),`
`,(0,l.jsx)(`br`,{}),`
`,(0,l.jsx)(r.h3,{id:`emitted-events`,children:`Emitted Events`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Event Name`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Bubbles / Composed`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsx)(`tbody`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`click`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`MouseEvent`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`true`}),` / `,(0,l.jsx)(r.code,{children:`true`})]}),(0,l.jsx)(`td`,{children:`Native DOM click event dispatched when the user activates an enabled button.`})]})})]}),`
`,(0,l.jsx)(`br`,{}),`
`,(0,l.jsx)(r.h3,{id:`sub-atomic-css-custom-property-hooks`,children:`Sub-Atomic CSS Custom Property Hooks`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`CSS Variable`}),(0,l.jsx)(`th`,{children:`Fallback Token Default`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--btn-radius`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`var(--radius-pill)`}),` or `,(0,l.jsx)(r.code,{children:`var(--radius-circle)`})]}),(0,l.jsx)(`td`,{children:`Overrides default button corner rounding.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--btn-bg`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`var(--color-black)`}),` or `,(0,l.jsx)(r.code,{children:`transparent`})]}),(0,l.jsx)(`td`,{children:`Overrides background surface fill color.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--btn-hover-bg`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`var(--color-gray-dark)`}),` or `,(0,l.jsx)(r.code,{children:`rgba(0,0,0,0.12)`})]}),(0,l.jsx)(`td`,{children:`Overrides hover state background fill.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--btn-active-bg`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`var(--color-black)`}),` or `,(0,l.jsx)(r.code,{children:`rgba(0,0,0,0.18)`})]}),(0,l.jsx)(`td`,{children:`Overrides active state background fill.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--btn-border-width`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`var(--border-width-thin)`}),` or `,(0,l.jsx)(r.code,{children:`var(--border-width-medium)`})]}),(0,l.jsx)(`td`,{children:`Overrides button border stroke width.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--btn-border-color`})}),(0,l.jsxs)(`td`,{children:[(0,l.jsx)(r.code,{children:`var(--color-black)`}),` or `,(0,l.jsx)(r.code,{children:`var(--color-gray-light)`})]}),(0,l.jsx)(`td`,{children:`Overrides button border color.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--btn-hover-scale`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`1.02`})}),(0,l.jsx)(`td`,{children:`Hover state scale transform multiplier.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`--btn-active-scale`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`0.95`})}),(0,l.jsx)(`td`,{children:`Active click state scale transform multiplier.`})]})]})]}),`
`,(0,l.jsx)(`br`,{}),`
`,(0,l.jsxs)(r.h2,{id:`a11y-engine`,children:[(0,l.jsx)(r.code,{children:`a11y`}),` Engine`]}),`
`,(0,l.jsx)(r.h3,{id:`1-aria-delegation--host-scrubbing`,children:`1. ARIA Delegation & Host Scrubbing`}),`
`,(0,l.jsxs)(r.p,{children:[`When `,(0,l.jsx)(r.code,{children:`aria-label`}),` is applied to `,(0,l.jsx)(r.code,{children:`<ds-button>`}),` in HTML, `,(0,l.jsx)(r.code,{children:`updateAttributes()`}),` delegates the attribute down to the internal shadow `,(0,l.jsx)(r.code,{children:`<button>`}),` element and scrubs `,(0,l.jsx)(r.code,{children:`aria-label`}),` from the host tag. This prevents browser screen readers and automated accessibility checkers from reporting `,(0,l.jsx)(r.code,{children:`aria-prohibited-attr`}),` on non-interactive custom element wrappers.`]}),`
`,(0,l.jsxs)(r.h3,{id:`2-root-mutation-observer-_observerootaccessibility`,children:[`2. Root Mutation Observer (`,(0,l.jsx)(r.code,{children:`_observeRootAccessibility`}),`)`]}),`
`,(0,l.jsxs)(r.p,{children:[`During `,(0,l.jsx)(r.code,{children:`connectedCallback()`}),`, `,(0,l.jsx)(r.code,{children:`ds-button`}),` instantiates a `,(0,l.jsx)(r.code,{children:`MutationObserver`}),` on `,(0,l.jsx)(r.code,{children:`document.documentElement`}),`. It reflects root accessibility classes as host boolean attributes:`]}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsxs)(`th`,{children:[`Root Class (`,(0,l.jsx)(r.code,{children:`<html>`}),`)`]}),(0,l.jsx)(`th`,{children:`Reflected Host Attribute`}),(0,l.jsx)(`th`,{children:`CSS Styling Reaction`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`.a11y-dark-mode`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`a11y-dark-mode`})}),(0,l.jsx)(`td`,{children:`Inverts surface tokens, using high-luminosity borders and dark player backgrounds.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`.a11y-high-contrast`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`a11y-high-contrast`})}),(0,l.jsxs)(`td`,{children:[`Forces binary 21:1 contrast ratios (`,(0,l.jsx)(r.code,{children:`#000000`}),` / `,(0,l.jsx)(r.code,{children:`#FFFFFF`}),`), bold weight (`,(0,l.jsx)(r.code,{children:`700`}),`), and outline rings.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`.a11y-forced-colors`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`a11y-forced-colors`})}),(0,l.jsxs)(`td`,{children:[`Applies system active theme variables (`,(0,l.jsx)(r.code,{children:`Canvas`}),`, `,(0,l.jsx)(r.code,{children:`CanvasText`}),`, `,(0,l.jsx)(r.code,{children:`Highlight`}),`, `,(0,l.jsx)(r.code,{children:`HighlightText`}),`) under `,(0,l.jsx)(r.code,{children:`forced-color-adjust: none`}),`.`]})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`.a11y-dyslexia`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`a11y-dyslexia`})}),(0,l.jsx)(`td`,{children:`Replaces font family with Comic Sans and increases letter and word spacing.`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`.a11y-reduce-motion`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(r.code,{children:`a11y-reduce-motion`})}),(0,l.jsxs)(`td`,{children:[`Forces transition and animation durations to `,(0,l.jsx)(r.code,{children:`0s`}),`.`]})]})]})]}),`
`,(0,l.jsx)(`br`,{}),`
`,(0,l.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r.h3,{id:`example-a-primary-cta-button-case-reader-view`,children:`Example A: Primary CTA Button (Case Reader View)`}),`
`,(0,l.jsx)(r.p,{children:`Used inside the Case Reader to launch the primary video presentation:`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-button';

const container = document.createElement('div');
container.innerHTML = \`
  <ds-button 
    variant="primary" 
    icon="play" 
    icon-position="left">
    Play Video
  </ds-button>
\`;

const button = container.querySelector('ds-button');
button.addEventListener('click', () => {
  appShell.openVideoPlayer();
});
`})}),`
`,(0,l.jsx)(r.h3,{id:`example-b-floating-control-button-with-keyboard-shortcut-video-player`,children:`Example B: Floating Control Button with Keyboard Shortcut (Video Player)`}),`
`,(0,l.jsxs)(r.p,{children:[`Used inside `,(0,l.jsx)(r.code,{children:`ds-video-player`}),` controls as an elevated overlay action:`]}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-javascript`,children:`import 'valence/ds-button';
import 'valence/ds-tooltip';

const wrapper = document.createElement('div');
wrapper.style.position = 'relative';

wrapper.innerHTML = \`
  <ds-button 
    variant="floating" 
    icon="play" 
    aria-label="Play Video">
  </ds-button>

  <ds-tooltip 
    text="Play Video" 
    position="top" 
    show-kbd 
    kbd-label="Esc">
  </ds-tooltip>
\`;

const btn = wrapper.querySelector('ds-button');
const tooltip = wrapper.querySelector('ds-tooltip');

btn.addEventListener('mouseenter', () => tooltip.setAttribute('visible', 'true'));
btn.addEventListener('mouseleave', () => tooltip.removeAttribute('visible'));
`})}),`
`,(0,l.jsx)(r.h3,{id:`example-c-icon-only-action-social-sharing`,children:`Example C: Icon-Only Action (Social Sharing)`}),`
`,(0,l.jsx)(r.p,{children:`Used inside header toolbars and case cards to trigger share links:`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-javascript`,children:`const shareBtn = document.createElement('ds-button');
shareBtn.setAttribute('variant', 'icon');
shareBtn.setAttribute('icon', 'share');
shareBtn.setAttribute('aria-label', 'Share case study');

shareBtn.addEventListener('click', async () => {
  if (navigator.share) {
    await navigator.share({ title: document.title, url: window.location.href });
  }
});
`})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=i(),a(),r(),o()}))();export{c as default};