import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{t as r}from"./MetricCard-Cs1lcyIF.js";import{n as i}from"./Thumbnail-xr-fiF6Q.js";import{t as a}from"./AudioPlayer-QCuET2it.js";import{t as o}from"./CaseNavigator-BWAs9KtW.js";import{t as s}from"./Summary-Cy68rjLC.js";import{n as c,r as l,t as u}from"./Article-SBzzMx-Y.js";var d,f=e((()=>{d=`:host{box-sizing:border-box;background-color:var(--color-bg,#fff);width:100%;min-height:100vh;color:var(--color-text-primary,#000);contain:layout paint style;display:block}:host([disabled]){cursor:not-allowed!important}.case-reader-container{gap:var(--space-xl,24px);max-width:var(--size-max-width-xl,1280px);padding:var(--space-lg,16px);box-sizing:border-box;grid-template-columns:1fr;margin:0 auto;display:grid}.hero-column{will-change:transform, opacity;width:100%;transition:transform var(--anim-slow,.4s) var(--ease-fluid,cubic-bezier(.16, 1, .3, 1)), opacity var(--anim-slow,.4s) var(--ease-fluid,cubic-bezier(.16, 1, .3, 1));justify-content:center;align-items:center;display:flex}.hero-column ds-thumbnail{--ds-thumbnail-max-height:calc((100vh - 120px) * .7);--ds-thumbnail-max-width:336px;width:100%}.article-column{will-change:transform;width:100%;min-width:0;transition:transform var(--anim-slow,.4s) var(--ease-fluid,cubic-bezier(.16, 1, .3, 1))}@media (width>=1024px){.case-reader-container{align-items:start;gap:var(--space-xxl,32px);padding:var(--space-xl,24px) var(--space-xxl,32px);grid-template-columns:336px 1fr}.hero-column{top:var(--space-xl,24px);position:sticky}:host([scrolled]) .hero-column{opacity:0;pointer-events:none;transform:translate(-120%)}:host([scrolled]) .article-column{transform:translateX(calc(-168px - (var(--space-xxl,32px) / 2)))}}:host([a11y-dark-mode]){background-color:var(--color-player-bg,#101218);color:var(--color-text-primary,#fff)}:host([a11y-high-contrast]){color:#fff!important;background-color:#000!important}:host([a11y-forced-colors]){forced-color-adjust:none!important;color:canvastext!important;background-color:canvas!important}@media (forced-colors:active){:host{forced-color-adjust:none!important;color:canvastext!important;background-color:canvas!important}}:host([a11y-reduce-motion]) .hero-column,:host([a11y-reduce-motion]) .article-column{opacity:1!important;transition:none!important;transform:none!important}`})),p,m=e((()=>{f(),l(),i(),u(),p=class extends HTMLElement{static get observedAttributes(){return`aria-label.case-id.scroll-threshold.category.brand.model.color.screen-image.device-src.custom-only.kicker.title-text.primary-label.primary-icon.secondary1-label.secondary2-label.show-kicker.show-title.show-social-share.show-social-linkedin.show-social-x.show-social-facebook.show-action-primary.show-action-secondary1.show-action-secondary2.show-summary.show-player.show-toc.show-navigator`.split(`.`)}constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.innerHTML=`
      <style>
        ${d}
        ${c}
      </style>
      <main class="case-reader-container" role="main">
        <aside class="hero-column">
          <ds-thumbnail class="hero-thumbnail"></ds-thumbnail>
        </aside>
        <section class="article-column">
          <ds-article class="main-article">
            <slot name="summary" slot="summary"></slot>
            <slot name="player" slot="player"></slot>
            <slot></slot>
            <slot name="navigator" slot="navigator"></slot>
          </ds-article>
        </section>
      </main>
    `,this.container=this.shadowRoot.querySelector(`.case-reader-container`),this.thumbnailEl=this.shadowRoot.querySelector(`.hero-thumbnail`),this.articleEl=this.shadowRoot.querySelector(`.main-article`),this._onScroll=this._onScroll.bind(this),this._ticking=!1}connectedCallback(){this._observeRootAccessibility(),window.addEventListener(`scroll`,this._onScroll,{passive:!0}),this.render()}disconnectedCallback(){this._themeObserver&&this._themeObserver.disconnect(),window.removeEventListener(`scroll`,this._onScroll)}attributeChangedCallback(e,t,n){t!==n&&this.render()}_observeRootAccessibility(){let e=this.ownerDocument.documentElement,t=()=>{this.toggleAttribute(`a11y-dark-mode`,e.classList.contains(`a11y-dark-mode`)),this.toggleAttribute(`a11y-high-contrast`,e.classList.contains(`a11y-high-contrast`)),this.toggleAttribute(`a11y-large-text`,e.classList.contains(`a11y-large-text`)),this.toggleAttribute(`a11y-dyslexia`,e.classList.contains(`a11y-dyslexia`)),this.toggleAttribute(`a11y-reduce-motion`,e.classList.contains(`a11y-reduce-motion`)),this.toggleAttribute(`a11y-focus-mode`,e.classList.contains(`a11y-focus-mode`)),this.toggleAttribute(`a11y-forced-colors`,e.classList.contains(`a11y-forced-colors`))};t(),this._themeObserver=new MutationObserver(t),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`class`]})}_onScroll(){this._ticking||=(window.requestAnimationFrame(()=>{let e=parseInt(this.getAttribute(`scroll-threshold`)||`100`,10),t=window.scrollY>e;this.hasAttribute(`scrolled`)!==t&&this.toggleAttribute(`scrolled`,t),this._ticking=!1}),!0)}_delegateAriaLabel(){let e=this.getAttribute(`aria-label`);e&&(this.container.setAttribute(`aria-label`,e),this.removeAttribute(`aria-label`))}_syncThumbnailProps(){let e=this.getAttribute(`case-id`)||`default`;this.thumbnailEl.style.setProperty(`view-transition-name`,`case-thumb-${e}`),[`category`,`brand`,`model`,`color`,`screen-image`,`device-src`].forEach(e=>{this.hasAttribute(e)?this.thumbnailEl.setAttribute(e,this.getAttribute(e)):this.thumbnailEl.removeAttribute(e)}),this.hasAttribute(`custom-only`)?this.thumbnailEl.setAttribute(`custom-only`,``):this.thumbnailEl.removeAttribute(`custom-only`)}_syncArticleProps(){[`kicker`,`title-text`,`primary-label`,`primary-icon`,`secondary1-label`,`secondary2-label`,`show-kicker`,`show-title`,`show-social-share`,`show-social-linkedin`,`show-social-x`,`show-social-facebook`,`show-action-primary`,`show-action-secondary1`,`show-action-secondary2`,`show-summary`,`show-player`,`show-toc`,`show-navigator`].forEach(e=>{this.hasAttribute(e)?this.articleEl.setAttribute(e,this.getAttribute(e)):this.articleEl.removeAttribute(e)})}render(){this._delegateAriaLabel(),this._syncThumbnailProps(),this._syncArticleProps()}},customElements.get(`ds-case-reader-view`)||customElements.define(`ds-case-reader-view`,p)})),h,g,_,v;e((()=>{n(),m(),s(),a(),o(),r(),{expect:h}=__STORYBOOK_MODULE_TEST__,g={title:`Templates/CaseReaderView`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"A structural Atomic Design Template orchestrating the two-column case study reader view. Integrates a hero sticky `<ds-thumbnail>` alongside the complete `<ds-article>` reading organism."}}},argTypes:{caseId:{name:`case-id`,control:{type:`text`},description:`Unique identifier used for shared-element SPA View Transitions.`,table:{category:`Hero Thumbnail`}},category:{name:`category`,control:{type:`select`},options:[`mobile`,`desktop`,`tablet`,`wearable`],table:{category:`Hero Thumbnail`}},brand:{name:`brand`,control:{type:`text`},table:{category:`Hero Thumbnail`}},model:{name:`model`,control:{type:`text`},table:{category:`Hero Thumbnail`}},color:{name:`color`,control:{type:`text`},table:{category:`Hero Thumbnail`}},screenImage:{name:`screen-image`,control:{type:`text`},table:{category:`Hero Thumbnail`}},customOnly:{name:`custom-only`,control:{type:`boolean`},table:{category:`Hero Thumbnail`}},kicker:{name:`kicker`,control:{type:`text`},table:{category:`Article Metadata`}},titleText:{name:`title-text`,control:{type:`text`},table:{category:`Article Metadata`}},primaryLabel:{name:`primary-label`,control:{type:`text`},table:{category:`Article Actions`}},primaryIcon:{name:`primary-icon`,control:{type:`text`},table:{category:`Article Actions`}},secondary1Label:{name:`secondary1-label`,control:{type:`text`},table:{category:`Article Actions`}},secondary2Label:{name:`secondary2-label`,control:{type:`text`},table:{category:`Article Actions`}},showKicker:{name:`show-kicker`,control:{type:`boolean`},table:{category:`Article Visibility`}},showTitle:{name:`show-title`,control:{type:`boolean`},table:{category:`Article Visibility`}},showSocialShare:{name:`show-social-share`,control:{type:`boolean`},table:{category:`Article Visibility`}},showSocialLinkedin:{name:`show-social-linkedin`,control:{type:`boolean`},table:{category:`Article Visibility`}},showSocialX:{name:`show-social-x`,control:{type:`boolean`},table:{category:`Article Visibility`}},showSocialFacebook:{name:`show-social-facebook`,control:{type:`boolean`},table:{category:`Article Visibility`}},showActionPrimary:{name:`show-action-primary`,control:{type:`boolean`},table:{category:`Article Visibility`}},showActionSecondary1:{name:`show-action-secondary1`,control:{type:`boolean`},table:{category:`Article Visibility`}},showActionSecondary2:{name:`show-action-secondary2`,control:{type:`boolean`},table:{category:`Article Visibility`}},showSummary:{name:`show-summary`,control:{type:`boolean`},table:{category:`Article Visibility`}},showPlayer:{name:`show-player`,control:{type:`boolean`},table:{category:`Article Visibility`}},showToc:{name:`show-toc`,control:{type:`boolean`},table:{category:`Article Visibility`}},showNavigator:{name:`show-navigator`,control:{type:`boolean`},table:{category:`Article Visibility`}},scrollThreshold:{name:`scroll-threshold`,control:{type:`number`},description:`Scroll offset Y threshold (px) triggering the structural position shift.`,table:{category:`Scroll Interaction`}}},args:{caseId:`holofante`,category:`mobile`,brand:`apple`,model:`Apple iPhone 13`,color:`Midnight`,screenImage:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop`,customOnly:!1,kicker:`2026 • HOLOFANTE R&D LAB`,titleText:`Agentic AI Design`,primaryLabel:`Pitch`,primaryIcon:`play-fill`,secondary1Label:`Repository`,secondary2Label:`Demo`,showKicker:!0,showTitle:!0,showSocialShare:!0,showSocialLinkedin:!0,showSocialX:!0,showSocialFacebook:!0,showActionPrimary:!0,showActionSecondary1:!0,showActionSecondary2:!0,showSummary:!0,showPlayer:!0,showToc:!0,showNavigator:!0,scrollThreshold:100},render:e=>t`
    <ds-case-reader-view
      case-id="${e.caseId}"
      category="${e.category}"
      brand="${e.brand}"
      model="${e.model}"
      color="${e.color}"
      screen-image="${e.screenImage}"
      ?custom-only="${e.customOnly}"
      kicker="${e.kicker}"
      title-text="${e.titleText}"
      primary-label="${e.primaryLabel}"
      primary-icon="${e.primaryIcon}"
      secondary1-label="${e.secondary1Label}"
      secondary2-label="${e.secondary2Label}"
      show-kicker="${e.showKicker}"
      show-title="${e.showTitle}"
      show-social-share="${e.showSocialShare}"
      show-social-linkedin="${e.showSocialLinkedin}"
      show-social-x="${e.showSocialX}"
      show-social-facebook="${e.showSocialFacebook}"
      show-action-primary="${e.showActionPrimary}"
      show-action-secondary1="${e.showActionSecondary1}"
      show-action-secondary2="${e.showActionSecondary2}"
      show-summary="${e.showSummary}"
      show-player="${e.showPlayer}"
      show-toc="${e.showToc}"
      show-navigator="${e.showNavigator}"
      scroll-threshold="${e.scrollThreshold}"
    >
      <!-- SLOTTED KPI SUMMARY BLOCK -->
      <ds-summary
        slot="summary"
        text="Holofante is an agentic AI platform designed for automated UI orchestration. By leveraging web components and edge rendering, it delivers dynamic layout generation with zero runtime performance penalties."
      >
        <ds-metric-card value="+143%" label="Increase in session duration" variant="success"></ds-metric-card>
        <ds-metric-card value="US$ 5/mo" label="Fixed infrastructure cost"></ds-metric-card>
        <ds-metric-card value="0.9s" label="FCP Performance"></ds-metric-card>
        <ds-metric-card value="92/100" label="WCAG AA Compliance"></ds-metric-card>
      </ds-summary>

      <!-- SLOTTED AUDIO PLAYER BLOCK -->
      <ds-audio-player slot="player" duration="184" time="0" label-reader="Reader"></ds-audio-player>

      <!-- SLOTTED ARTICLE BODY COPY -->
      <h2 id="sec-architecture">Agentic AI System Architecture</h2>
      <p class="p1">
        Lorem ipsum dolor sit amet, <strong>consectetur bold text</strong> and <em>italicized emphasis</em>. You can also combine <mark>highlighted text</mark>, <del>strikethrough text</del>, and inline code like <code>const pipeline = new AIStream();</code>.
      </p>

      <h3 id="sec-execution">Execution Pipeline & Code Controls</h3>
      <p class="p1">
        Below is an example configuration file processed by our edge worker pipeline:
      </p>

<pre><code class="language-typescript">// TypeScript Generic Pipeline Configuration
export interface AgentConfig<T> {
  id: string;
  model: T;
  maxTokens: number;
  temperature: number;
}

export class AgentOrchestrator {
  public async initialize(): Promise<void> {
    console.log("Agentic pipeline initialized successfully.");
  }
}</code></pre>

      <h3 id="sec-metrics">Performance & Benchmarks</h3>
      <p class="p1">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <!-- SLOTTED FLOATING CASE NAVIGATOR DOCK -->
      <ds-case-navigator slot="navigator" current-index="1" total-cases="4"></ds-case-navigator>
    </ds-case-reader-view>
  `},_={play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-case-reader-view`);await t(`Verify hero thumbnail renders inside host Shadow DOM`,async()=>{let e=n.shadowRoot.querySelector(`ds-thumbnail`);h(e).toBeTruthy()}),await t(`Verify full ds-article organism is mounted with slotted sub-components`,async()=>{let e=n.shadowRoot.querySelector(`ds-article`);h(e).toBeTruthy(),h(e.getAttribute(`title-text`)).toBe(`Agentic AI Design`);let t=n.querySelector(`ds-summary`),r=n.querySelector(`ds-audio-player`),i=n.querySelector(`ds-case-navigator`);h(t).toBeTruthy(),h(r).toBeTruthy(),h(i).toBeTruthy()})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step
  }) => {
    const template = canvasElement.querySelector('ds-case-reader-view');
    await step('Verify hero thumbnail renders inside host Shadow DOM', async () => {
      const thumbnail = template.shadowRoot.querySelector('ds-thumbnail');
      expect(thumbnail).toBeTruthy();
    });
    await step('Verify full ds-article organism is mounted with slotted sub-components', async () => {
      const article = template.shadowRoot.querySelector('ds-article');
      expect(article).toBeTruthy();
      expect(article.getAttribute('title-text')).toBe('Agentic AI Design');
      const summary = template.querySelector('ds-summary');
      const player = template.querySelector('ds-audio-player');
      const navigator = template.querySelector('ds-case-navigator');
      expect(summary).toBeTruthy();
      expect(player).toBeTruthy();
      expect(navigator).toBeTruthy();
    });
  }
}`,..._.parameters?.docs?.source}}},v=[`DefaultView`]}))();export{_ as DefaultView,v as __namedExportsOrder,g as default};