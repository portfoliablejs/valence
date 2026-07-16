import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`getting-started/Portfoliable Integration`}),`
`,(0,c.jsx)(r.h1,{id:`portfoliable-application-integration-guide`,children:`Portfoliable Application Integration Guide`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`portfoliable`}),` application is an open-source, web-native portfolio builder designed as a single-page Web Component shell (`,(0,c.jsx)(r.code,{children:`AppShell`}),`). It dynamically consumes, orchestrates, and renders templates from the `,(0,c.jsx)(r.strong,{children:`Valence Design System`}),` (`,(0,c.jsx)(r.code,{children:`ds-*`}),` Web Components).`]}),`
`,(0,c.jsx)(r.p,{children:`This document serves as the primary integration guide explaining how the host application interacts with Valence components, passes data through shadow boundaries, manages global accessibility cascades, and handles runtime state transitions.`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`1-application-architecture--component-shell`,children:`1. Application Architecture & Component Shell`}),`
`,(0,c.jsxs)(r.p,{children:[`The application entrypoint (`,(0,c.jsx)(r.code,{children:`src/main.js`}),`) mounts the root Web Component (`,(0,c.jsx)(r.code,{children:`<app-shell>`}),`) directly into the DOM viewport. `,(0,c.jsx)(r.code,{children:`AppShell`}),` encapsulated inside `,(0,c.jsx)(r.code,{children:`src/App.js`}),` maintains application state and renders Valence components into dedicated view containers (`,(0,c.jsx)(r.code,{children:`#view-home`}),`, `,(0,c.jsx)(r.code,{children:`#view-case`}),`, `,(0,c.jsx)(r.code,{children:`#view-about`}),`).`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart TD
    subgraph Entry ["DOM Mountpoint (main.js)"]
        AppShell["&lt;app-shell&gt; (AppShell Class)"]
    end

    subgraph Shell ["App Shell Shadow DOM Boundary"]
        Header["&lt;ds-header id='app-header'&gt;"]
        Main["&lt;main&gt; Viewport Container"]
        Toast["&lt;ds-toast id='app-toast'&gt;"]
        ModalContainer["#modal-container"]
        VideoPlayer["&lt;ds-video-player id='video-player'&gt;"]
    end

    subgraph Views ["Dynamic View Containers"]
        HomeView["#view-home (&lt;ds-gallery&gt;)"]
        CaseView["#view-case (#case-slider-container)"]
    end

    subgraph Components ["Valence Component Instances"]
        GalleryItem["&lt;ds-gallery-item&gt;"]
        CaseSlide["&lt;ds-case-slide&gt;"]
        Modals["&lt;ds-modal&gt; / &lt;ds-item-row&gt;"]
    end

    AppShell --> Header
    AppShell --> Main
    AppShell --> Toast
    AppShell --> ModalContainer
    AppShell --> VideoPlayer

    Main --> HomeView
    Main --> CaseView

    HomeView --> GalleryItem
    CaseView --> CaseSlide
    ModalContainer --> Modals

    %% Styling
    style Entry fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style Shell fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style Views fill:#f0fdf4,stroke:#22c55e,stroke-width:2px,color:#14532d
    style Components fill:#ffffff,stroke:#cbd5e1,color:#0f172a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`2-component-consumption-model`,children:`2. Component Consumption Model`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`portfoliable`}),` shell communicates with Valence custom elements using three primary web standards:`]}),`
`,(0,c.jsx)(r.h3,{id:`a-primitive-html-attributes`,children:`A. Primitive HTML Attributes`}),`
`,(0,c.jsx)(r.p,{children:`Application state values are passed downstream by setting standard HTML attributes on custom elements during rendering cycles:`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Component`}),(0,c.jsx)(`th`,{children:`Attribute`}),(0,c.jsx)(`th`,{children:`Type / Values`}),(0,c.jsx)(`th`,{children:`Application Source State`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`<ds-header>`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`view`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`'home' | 'case' | 'about'`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`this.state.currentView`})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`<ds-header>`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`current-label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`string`})}),(0,c.jsxs)(`td`,{children:[`Active case title from `,(0,c.jsx)(`code`,{children:`portfolioCases`})]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`<ds-gallery-item>`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`title`}),`, `,(0,c.jsx)(`code`,{children:`short-desc`}),`, `,(0,c.jsx)(`code`,{children:`read-time`}),`, `,(0,c.jsx)(`code`,{children:`thumb-src`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`string`})}),(0,c.jsxs)(`td`,{children:[`Localized case metadata resolved via `,(0,c.jsx)(`code`,{children:`this.getLang()`})]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`<ds-gallery-item>`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`device`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`'iphone-17' | 'iphone-12' | 'apple-watch'`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`caseData.deviceClass`})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`<ds-gallery-item>`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`has-video`}),`, `,(0,c.jsx)(`code`,{children:`has-repo`}),`, `,(0,c.jsx)(`code`,{children:`has-live`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`'true' | 'false'`})}),(0,c.jsx)(`td`,{children:`Boolean presence of URLs or video assets in case schema`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`<ds-case-slide>`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`title`}),`, `,(0,c.jsx)(`code`,{children:`year`}),`, `,(0,c.jsx)(`code`,{children:`thumb-src`}),`, `,(0,c.jsx)(`code`,{children:`device`})]}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`string`})}),(0,c.jsx)(`td`,{children:`Case study attributes mapped for slide layout`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`<ds-toast>`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`visible`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`'true' | 'false'`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`this.state.toast.visible`})})]})]})]}),`
`,(0,c.jsx)(r.h3,{id:`b-shadow-dom-slot-injection`,children:`B. Shadow DOM Slot Injection`}),`
`,(0,c.jsxs)(r.p,{children:[`For complex, formatted content (such as rich case study bodies, code snippets, or inline telemetry cards), `,(0,c.jsx)(r.code,{children:`AppShell`}),` injects HTML subtrees directly into component `,(0,c.jsx)(r.code,{children:`<slot>`}),` targets:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`// Example: Injecting rich localized HTML into <ds-case-slide> slot
const slide = document.createElement('ds-case-slide');
slide.dataset.caseId = caseData.id;
slide.setAttribute('title', this.getLang(caseData.title));

// Choose executive vs recruiter content based on app state
const descContent = this.state.isRecruiterMode ? caseData.descRecruiter : caseData.desc;

// Slot injection target
slide.innerHTML = \`<div slot="description">\${this.getLang(descContent)}</div>\`;

`})}),`
`,(0,c.jsxs)(r.h3,{id:`c-upstream-custom-events-ds-`,children:[`C. Upstream Custom Events (`,(0,c.jsx)(r.code,{children:`ds-*`}),`)`]}),`
`,(0,c.jsxs)(r.p,{children:[`User actions inside Valence components dispatch custom DOM events prefixed with `,(0,c.jsx)(r.code,{children:`ds-`}),`. `,(0,c.jsx)(r.code,{children:`AppShell`}),` listens to these events on its shadow root to mutate global application state:`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsxs)(r.h2,{id:`3-internationalization-i18n-pipeline`,children:[`3. Internationalization (`,(0,c.jsx)(r.code,{children:`i18n`}),`) Pipeline`]}),`
`,(0,c.jsxs)(r.p,{children:[`Multilingual support is managed via a lightweight `,(0,c.jsx)(r.code,{children:`i18n.js`}),` module and localized data schemas in `,(0,c.jsx)(r.code,{children:`data.js`}),`.`]}),`
`,(0,c.jsx)(r.h3,{id:`multilingual-data-definition-schema`,children:`Multilingual Data Definition Schema`}),`
`,(0,c.jsx)(r.p,{children:`Case study records define string attributes using a two-locale dictionary helper:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`// src/data.js
const i18n = (en, pt) => ({ en, pt });

export const holofante = {
  id: "holofante",
  title: i18n("Agentic AI Design", "Design de IA Agêntica"),
  shortDesc: i18n("DesignOps automation cuts delivery latency by 70%.", "Automação de DesignOps reduz a latência de entrega em 70%."),
  readTime: i18n("3 min", "3 min"),
  // ...
};

`})}),`
`,(0,c.jsx)(r.h3,{id:`runtime-translation-resolution`,children:`Runtime Translation Resolution`}),`
`,(0,c.jsxs)(r.p,{children:[`When rendering Valence components, `,(0,c.jsx)(r.code,{children:`AppShell`}),` invokes `,(0,c.jsx)(r.code,{children:`this.getLang(property)`}),` to evaluate the user's active locale (`,(0,c.jsx)(r.code,{children:`window.currentLang`}),`):`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`// Language resolution helper inside AppShell
getLang(prop) {
  if (prop && prop[this.state.lang]) {
    return prop[this.state.lang];
  }
  return (prop && prop['en']) ? prop['en'] : prop;
}

`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`4-dual-persona-content-injection-executive-vs-recruiter`,children:`4. Dual-Persona Content Injection (Executive vs. Recruiter)`}),`
`,(0,c.jsxs)(r.p,{children:[`To serve both executive hiring managers and technical recruiters, `,(0,c.jsx)(r.code,{children:`portfoliable`}),` dynamically mutates the content slotted into `,(0,c.jsx)(r.code,{children:`<ds-case-slide>`}),` based on `,(0,c.jsx)(r.code,{children:`this.state.isRecruiterMode`}),`:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{children:`┌──────────────────────────────────────────────────────────────────────────┐
│                             ds-header                                    │
│  [Executive Mode] <----------------------------------> [Recruiter Mode]  │
└────────────────────────────────────┬─────────────────────────────────────┘
                                     │
                             ds-mode-change
                                     │
                                     v
                       AppShell.setState({ isRecruiterMode })
                                     │
            ┌────────────────────────┴────────────────────────┐
            ▼                                                 ▼
   [Executive View: desc]                          [Recruiter View: descRecruiter]
   - Business Impact Metrics                       - System Architecture Flowcharts
   - User Experience Storytelling                  - Client Runtime Memory Models
   - High-contrast Asset Cards                     - Async Telemetry & Code Snippets

`})}),`
`,(0,c.jsxs)(r.p,{children:[`When switching modes, `,(0,c.jsx)(r.code,{children:`AppShell`}),` clears and re-populates the `,(0,c.jsx)(r.code,{children:`#case-slider-container`}),` children, swapping the slotted HTML template passed into `,(0,c.jsx)(r.code,{children:`<ds-case-slide>`}),` without altering component wrapper attributes.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsxs)(r.h2,{id:`5-global-accessibility-a11y-propagation-engine`,children:[`5. Global Accessibility (`,(0,c.jsx)(r.code,{children:`a11y`}),`) Propagation Engine`]}),`
`,(0,c.jsxs)(r.p,{children:[`Accessibility settings configured inside `,(0,c.jsx)(r.code,{children:`<ds-modal id="a11y-modal">`}),` are stored in `,(0,c.jsx)(r.code,{children:`localStorage`}),` and synchronized across the entire DOM root.`]}),`
`,(0,c.jsx)(r.h3,{id:`state-mutation--class-cascade`,children:`State Mutation & Class Cascade`}),`
`,(0,c.jsxs)(r.p,{children:[`When a user toggles an accessibility setting, `,(0,c.jsx)(r.code,{children:`_handleA11yChange()`}),` mutates `,(0,c.jsx)(r.code,{children:`this.state.a11y`}),` and calls `,(0,c.jsx)(r.code,{children:`applyA11ySettings()`}),`:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`// Reflects a11y preferences onto document.documentElement as root classes
applyA11ySettings() {
  const htmlEl = document.documentElement;
  const settings = this.state.a11y;
  
  Object.entries(settings).forEach(([key, value]) => {
    // Converts camelCase to kebab-case (e.g. darkMode -> a11y-dark-mode)
    const className = \`a11y-\${key.replace(/([A-Z])/g, '-$1').toLowerCase()}\`;
    htmlEl.classList.toggle(className, value);
  });
}

`})}),`
`,(0,c.jsx)(r.h3,{id:`valence-component-shadow-dom-observation`,children:`Valence Component Shadow DOM Observation`}),`
`,(0,c.jsxs)(r.p,{children:[`Every Valence Web Component executes `,(0,c.jsx)(r.code,{children:`_observeRootAccessibility()`}),` during `,(0,c.jsx)(r.code,{children:`connectedCallback()`}),`. A `,(0,c.jsx)(r.code,{children:`MutationObserver`}),` monitors `,(0,c.jsx)(r.code,{children:`document.documentElement`}),` for class changes and reflects boolean attributes onto the component host tag:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-javascript`,children:`// Inside every Valence component class (e.g., Button.js, Header.js)
_observeRootAccessibility() {
  const root = this.ownerDocument.documentElement;
  const sync = () => {
    this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
    this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
    this.toggleAttribute('a11y-large-text', root.classList.contains('a11y-large-text'));
    this.toggleAttribute('a11y-dyslexia', root.classList.contains('a11y-dyslexia'));
    this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
    this.toggleAttribute('a11y-forced-colors', root.classList.contains('a11y-forced-colors'));
  };

  sync();
  this._themeObserver = new MutationObserver(sync);
  this._themeObserver.observe(root, { attributes: true, attributeFilter: ['class'] });
}

`})}),`
`,(0,c.jsx)(r.p,{children:`This decoupled observer pattern ensures that all active design system components update their visual styling instantly without requiring full-page re-renders or main-thread state cycles.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};