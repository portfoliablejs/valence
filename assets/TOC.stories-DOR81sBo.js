import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{t as r}from"./ContextualMenu-MilY6z_-.js";var i,a=e((()=>{i=`:host{position:var(--ds-toc-position,fixed);top:var(--ds-toc-top,50%);right:var(--ds-toc-right,var(--space-xl,24px));bottom:var(--ds-toc-bottom,auto);left:var(--ds-toc-left,auto);transform:var(--ds-toc-transform,translateY(-50%));z-index:var(--z-dropdown,50);width:fit-content;margin:0;display:block}.toc-wrapper{flex-direction:column;justify-content:center;align-items:flex-end;display:flex;position:relative}.minimap-strip{align-items:flex-end;gap:var(--ds-toc-line-gap,16px);padding:var(--space-xs,4px);cursor:pointer;-webkit-user-select:none;user-select:none;transition:opacity var(--anim-fast,.2s) var(--ease-fluid);flex-direction:column;display:flex}.minimap-line{height:var(--ds-toc-line-height,1.5px);background-color:var(--ds-toc-line-color,var(--color-gray-xlight,#d9d9d9));border-radius:var(--radius-pill,100px);transition:width var(--anim-fast,.2s) var(--ease-fluid), background-color var(--anim-fast,.2s) var(--ease-fluid), height var(--anim-fast,.2s) var(--ease-fluid)}.minimap-line[data-level="1"]{width:26px}.minimap-line[data-level="2"]{width:18px}.minimap-line[data-level="3"]{width:12px}.minimap-line[data-level="4"]{width:8px}.minimap-line.active{background-color:var(--ds-toc-line-active-color,var(--color-black,#000));height:2px}.toc-wrapper:hover .minimap-strip,:host([opened]) .minimap-strip{opacity:0;pointer-events:none}.toc-menu{opacity:0;visibility:hidden;pointer-events:none;transition:opacity var(--anim-fast,.2s) var(--ease-fluid), transform var(--anim-fast,.2s) var(--ease-fluid), visibility var(--anim-fast,.2s) var(--ease-fluid);z-index:var(--z-dropdown,50);will-change:opacity, transform;--ds-contextual-menu-max-height:var(--ds-toc-max-height,min(380px, 70vh));--ds-contextual-menu-scroll-max-height:var(--ds-toc-max-height,min(380px, 70vh));position:absolute;top:50%;right:0;transform:translateY(-50%)scale(.98)}.toc-wrapper:hover .toc-menu,:host([opened]) .toc-menu{opacity:1;visibility:visible;pointer-events:auto;transform:translateY(-50%)scale(1)}:host([a11y-dark-mode]) .minimap-line{background-color:var(--color-gray-dark,#323232)}:host([a11y-dark-mode]) .minimap-line.active{background-color:var(--color-white,#fff)}:host([a11y-high-contrast]) .minimap-line{background-color:#fff!important;height:2.5px!important}:host([a11y-reduce-motion]) .minimap-line,:host([a11y-reduce-motion]) .minimap-strip,:host([a11y-reduce-motion]) .toc-menu{transition:none!important;transform:none!important}:host([a11y-forced-colors]) .minimap-line{background-color:canvastext!important}@media (forced-colors:active){.minimap-line{background-color:canvastext!important}}`})),o,s=e((()=>{a(),r(),o=class extends HTMLElement{static get observedAttributes(){return[`opened`,`target-selector`,`title-text`,`aria-label`,`max-height`]}constructor(){super(),this.attachShadow({mode:`open`}),this._items=[],this._activeId=null,this._boundHandleMenuSelect=this._handleMenuSelect.bind(this),this._boundHandleMenuClose=this._handleMenuClose.bind(this),this._boundHandleWindowScroll=this._handleWindowScroll.bind(this),this.shadowRoot.innerHTML=`<style>${i}</style><div class="toc-wrapper"><div class="minimap-strip" part="minimap" aria-hidden="true"></div><ds-contextual-menu class="toc-menu" part="menu" open hide-close></ds-contextual-menu></div>`,this.wrapperEl=this.shadowRoot.querySelector(`.toc-wrapper`),this.minimapEl=this.shadowRoot.querySelector(`.minimap-strip`),this.menuEl=this.shadowRoot.querySelector(`.toc-menu`)}get items(){return this._items}set items(e){Array.isArray(e)&&(this._items=e,this._updateMenuAndMinimap(),this._setupIntersectionObserver())}get opened(){return this.hasAttribute(`opened`)}set opened(e){this.toggleAttribute(`opened`,!!e)}connectedCallback(){this.menuEl&&(this.menuEl.addEventListener(`ds-select`,this._boundHandleMenuSelect),this.menuEl.addEventListener(`ds-close`,this._boundHandleMenuClose)),window.addEventListener(`scroll`,this._boundHandleWindowScroll,{passive:!0}),this._items.length===0?this.scanHeadings():(this._updateMenuAndMinimap(),this._setupIntersectionObserver()),this.updateAttributes(),this._observeRootAccessibility()}disconnectedCallback(){this._themeObserver&&this._themeObserver.disconnect(),this._intersectionObserver&&this._intersectionObserver.disconnect(),window.removeEventListener(`scroll`,this._boundHandleWindowScroll),this.menuEl&&(this.menuEl.removeEventListener(`ds-select`,this._boundHandleMenuSelect),this.menuEl.removeEventListener(`ds-close`,this._boundHandleMenuClose))}attributeChangedCallback(e,t,n){t!==n&&(e===`target-selector`?this.scanHeadings():(this.updateAttributes(),e===`opened`&&this.opened&&this.menuEl&&this.menuEl.scrollViewport&&this.menuEl.scrollViewport.offsetHeight))}_observeRootAccessibility(){let e=this.ownerDocument.documentElement,t=()=>{this.toggleAttribute(`a11y-dark-mode`,e.classList.contains(`a11y-dark-mode`)),this.toggleAttribute(`a11y-high-contrast`,e.classList.contains(`a11y-high-contrast`)),this.toggleAttribute(`a11y-large-text`,e.classList.contains(`a11y-large-text`)),this.toggleAttribute(`a11y-dyslexia`,e.classList.contains(`a11y-dyslexia`)),this.toggleAttribute(`a11y-reduce-motion`,e.classList.contains(`a11y-reduce-motion`)),this.toggleAttribute(`a11y-focus-mode`,e.classList.contains(`a11y-focus-mode`)),this.toggleAttribute(`a11y-forced-colors`,e.classList.contains(`a11y-forced-colors`))};t(),this._themeObserver=new MutationObserver(t),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`class`]})}updateAttributes(){let e=this.getAttribute(`aria-label`)||`Table of Contents`,t=this.getAttribute(`title-text`)??`CONTENTS`,n=this.getAttribute(`max-height`)||`min(380px, 70vh)`;this.style.setProperty(`--ds-toc-max-height`,n),this.menuEl&&(this.menuEl.setAttribute(`max-height`,n),t?(this.menuEl.setAttribute(`header-text`,t),this.menuEl.removeAttribute(`hide-header`)):this.menuEl.setAttribute(`hide-header`,``),this.menuEl.setAttribute(`aria-label`,e)),e&&this.removeAttribute(`aria-label`)}scanHeadings(){let e=this.getAttribute(`target-selector`)||`main, article, body`,t=document.querySelector(e)||document.body,n=Array.from(t.querySelectorAll(`h1, h2, h3, h4`));this._items=n.map((e,t)=>{e.id||=`ds-toc-heading-${t}-${e.textContent.toLowerCase().replace(/[^\w]+/g,`-`)}`;let n=e.textContent.trim();return{id:e.id,label:n,text:n,level:parseInt(e.tagName.substring(1),10)}}),this._updateMenuAndMinimap(),this._setupIntersectionObserver()}_handleWindowScroll(){if(!(!this._items||this._items.length===0)&&window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-30){let e=this._items[this._items.length-1];this._setActiveHeading(e.id)}}_setupIntersectionObserver(){this._intersectionObserver&&this._intersectionObserver.disconnect(),this._intersectionObserver=new IntersectionObserver(e=>{window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-30||e.forEach(e=>{e.isIntersecting&&this._setActiveHeading(e.target.id)})},{rootMargin:`-5% 0px -50% 0px`,threshold:0}),this._items.forEach(e=>{let t=document.getElementById(e.id);t&&this._intersectionObserver.observe(t)})}_setActiveHeading(e){if(this._activeId!==e&&(this._activeId=e,this.minimapEl.querySelectorAll(`.minimap-line`).forEach(t=>{t.classList.toggle(`active`,t.dataset.id===e)}),this.menuEl&&Array.isArray(this.menuEl.items))){let t=this.menuEl.items.map(t=>({...t,active:t.id===e,selected:t.id===e}));this.menuEl.items=t}}_updateMenuAndMinimap(){if(!this.minimapEl||!this.menuEl)return;this.minimapEl.innerHTML=this._items.map(e=>{let t=e.label||e.text||``;return`
        <div 
          class="minimap-line ${e.id===this._activeId||e.active===!0||e.selected===!0?`active`:``}" 
          data-level="${e.level||1}" 
          data-id="${e.id}"
          title="${t}">
        </div>
      `}).join(``);let e=[{id:`scroll-top`,label:`Scroll to top`,showIcon:!1,showKbd:!1,control:`none`,category:`main`},...this._items.map(e=>{let t=e.label||e.text||``,n=Math.max(0,(e.level||1)-1),r=`\xA0\xA0`.repeat(n),i=e.id===this._activeId||e.active===!0||e.selected===!0;return{id:e.id,label:`${r}${t}`,showIcon:!1,showKbd:!1,control:`none`,active:i,selected:i,category:`main`}})];this.menuEl.items=e}_handleMenuSelect(e){let t=e.detail;if(!t||!t.id)return;if(t.id===`scroll-top`){window.scrollTo({top:0,behavior:`smooth`}),this.dispatchEvent(new CustomEvent(`ds-toc-scroll-top`,{bubbles:!0,composed:!0}));return}let n=document.getElementById(t.id);n&&(n.scrollIntoView({behavior:`smooth`}),this._setActiveHeading(t.id),this.dispatchEvent(new CustomEvent(`ds-toc-select`,{bubbles:!0,composed:!0,detail:{id:t.id,label:t.label}})))}_handleMenuClose(){this.opened=!1}},customElements.get(`ds-toc`)||customElements.define(`ds-toc`,o)})),c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{n(),s(),{userEvent:c,within:l,expect:u,fn:d}=__STORYBOOK_MODULE_TEST__,f=[{id:`sales`,label:`Sales Overview`,level:1},{id:`new-quote`,label:`New Quote Creation`,level:2},{id:`manual-dispatch`,label:`Manual Quote Dispatch`,level:3},{id:`edit-quote`,label:`Edit Existing Quote`,level:3},{id:`when-not-to-send`,label:`When Not to Send Quote`,level:3},{id:`quote-preview`,label:`Quote Preview & Validation`,level:2},{id:`quote-acceptance`,label:`Quote Acceptance & Data Entry`,level:2},{id:`contract-generation`,label:`Contract Generation`,level:1},{id:`legal-compliance`,label:`Legal Terms & Compliance`,level:2},{id:`billing-schedule`,label:`Billing & Payment Schedule`,level:2},{id:`sla-coverage`,label:`SLA & Support Coverage`,level:2},{id:`appendix-a`,label:`Appendix A - Rate Card Token Maps`,level:1},{id:`appendix-b`,label:`Appendix B - Signature Sign-off`,level:1}],p={title:`Atoms/TOC [v1.1.0]`,component:`ds-toc`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`A presentational Table of Contents Atom supporting an Apple-like minimap strip, hover expandable contextual menu with custom item rows, smooth section scrolling, and scroll-to-top actions.`}}},argTypes:{opened:{control:`boolean`,table:{category:`Core`}},"title-text":{control:`text`,table:{category:`Core`}},"target-selector":{control:!1,table:{category:`Core`}},"--ds-toc-position":{control:`text`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-toc-top":{control:`text`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-toc-right":{control:`text`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-toc-max-height":{control:`text`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-toc-line-color":{control:`color`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-toc-line-active-color":{control:`color`,table:{category:`SUB-ATOMIC PROPS`}}},args:{opened:!1,"title-text":`CONTENTS`,"--ds-toc-position":`absolute`,"--ds-toc-top":`50%`,"--ds-toc-right":`24px`,"--ds-toc-max-height":`380px`,"--ds-toc-line-color":`#D9D9D9`,"--ds-toc-line-active-color":`#000000`},render:e=>{let n=[e[`--ds-toc-position`]?`--ds-toc-position: ${e[`--ds-toc-position`]};`:``,e[`--ds-toc-top`]?`--ds-toc-top: ${e[`--ds-toc-top`]};`:``,e[`--ds-toc-right`]?`--ds-toc-right: ${e[`--ds-toc-right`]};`:``,e[`--ds-toc-max-height`]?`--ds-toc-max-height: ${e[`--ds-toc-max-height`]};`:``,e[`--ds-toc-line-color`]?`--ds-toc-line-color: ${e[`--ds-toc-line-color`]};`:``,e[`--ds-toc-line-active-color`]?`--ds-toc-line-active-color: ${e[`--ds-toc-line-active-color`]};`:``].filter(Boolean);return t`
      <!-- Container provides physical height context for Storybook rendering -->
      <div style="position: relative; min-height: 480px; width: 100%; box-sizing: border-box;">
        <ds-toc
          style=${n.length>0?n.join(` `):void 0}
          ?opened=${e.opened}
          title-text=${e[`title-text`]||void 0}
          .items=${f}>
        </ds-toc>
      </div>
    `}},m={args:{opened:!1}},h={args:{opened:!0},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-toc`);await t(`Verify TOC menu renders internally when opened`,async()=>{let e=n.shadowRoot.querySelector(`.toc-menu`);u(e).toBeTruthy()}),await t(`Verify 13 heading items populated in preview iframe`,async()=>{u(n.items.length).toBe(13)}),await t(`Select menu heading item and verify event dispatch`,async()=>{let e=n.shadowRoot.querySelector(`.toc-menu`),t=!1;n.addEventListener(`ds-toc-select`,e=>{e.detail.id&&(t=!0)}),e.dispatchEvent(new CustomEvent(`ds-select`,{bubbles:!0,composed:!0,detail:{id:`new-quote`,label:`New Quote Creation`}})),u(t).toBe(!0)})}},g={args:{opened:!0,"title-text":`CONTENTS`,"--ds-toc-max-height":`360px`},render:e=>{let n=[e[`--ds-toc-position`]?`--ds-toc-position: ${e[`--ds-toc-position`]};`:``,e[`--ds-toc-top`]?`--ds-toc-top: ${e[`--ds-toc-top`]};`:``,e[`--ds-toc-right`]?`--ds-toc-right: ${e[`--ds-toc-right`]};`:``,e[`--ds-toc-max-height`]?`--ds-toc-max-height: ${e[`--ds-toc-max-height`]};`:``].filter(Boolean);return t`
      <div style="position: relative; min-height: 520px; width: 100%; box-sizing: border-box;">
        <ds-toc
          style=${n.length>0?n.join(` `):void 0}
          ?opened=${e.opened}
          title-text=${e[`title-text`]||void 0}
          .items=${f}>
        </ds-toc>
      </div>
    `},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-toc`);await t(`Verify 13 heading items populate into TOC custom element`,async()=>{u(n).toBeTruthy(),u(n.items.length).toBe(13)}),await t(`Verify internal contextual menu renders with CONTENTS header`,async()=>{let e=n.shadowRoot.querySelector(`.toc-menu`);u(e).toBeTruthy(),u(e.getAttribute(`header-text`)).toBe(`CONTENTS`)})}},_={args:{opened:!0},render:e=>{let n=f.map((e,t)=>t===1?{...e,active:!0}:e);return t`
      <div style="position: relative; min-height: 480px; width: 100%; box-sizing: border-box;">
        <ds-toc
          style="--ds-toc-position: absolute; --ds-toc-top: 50%; --ds-toc-right: 24px;"
          ?opened=${e.opened}
          title-text=${e[`title-text`]||void 0}
          .items=${n}>
        </ds-toc>
      </div>
    `}},v={args:{opened:!0,"title-text":`CONTENTS`,"--ds-toc-max-height":`220px`}},y={args:{opened:!1,"--ds-toc-position":`absolute`,"--ds-toc-top":`20%`,"--ds-toc-line-color":`#2B71F0`,"--ds-toc-line-active-color":`#FF3B30`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    opened: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    opened: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const toc = canvasElement.querySelector('ds-toc');
    await step('Verify TOC menu renders internally when opened', async () => {
      const menu = toc.shadowRoot.querySelector('.toc-menu');
      expect(menu).toBeTruthy();
    });
    await step('Verify 13 heading items populated in preview iframe', async () => {
      expect(toc.items.length).toBe(13);
    });
    await step('Select menu heading item and verify event dispatch', async () => {
      const menu = toc.shadowRoot.querySelector('.toc-menu');
      let selectEventFired = false;
      toc.addEventListener('ds-toc-select', e => {
        if (e.detail.id) selectEventFired = true;
      });
      menu.dispatchEvent(new CustomEvent('ds-select', {
        bubbles: true,
        composed: true,
        detail: {
          id: 'new-quote',
          label: 'New Quote Creation'
        }
      }));
      expect(selectEventFired).toBe(true);
    });
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    opened: true,
    'title-text': 'CONTENTS',
    '--ds-toc-max-height': '360px'
  },
  render: args => {
    const styleArray = [args['--ds-toc-position'] ? \`--ds-toc-position: \${args['--ds-toc-position']};\` : '', args['--ds-toc-top'] ? \`--ds-toc-top: \${args['--ds-toc-top']};\` : '', args['--ds-toc-right'] ? \`--ds-toc-right: \${args['--ds-toc-right']};\` : '', args['--ds-toc-max-height'] ? \`--ds-toc-max-height: \${args['--ds-toc-max-height']};\` : ''].filter(Boolean);
    const styleString = styleArray.length > 0 ? styleArray.join(' ') : undefined;
    return html\`
      <div style="position: relative; min-height: 520px; width: 100%; box-sizing: border-box;">
        <ds-toc
          style=\${styleString}
          ?opened=\${args.opened}
          title-text=\${args['title-text'] || undefined}
          .items=\${mockHeadings}>
        </ds-toc>
      </div>
    \`;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const toc = canvasElement.querySelector('ds-toc');
    await step('Verify 13 heading items populate into TOC custom element', async () => {
      expect(toc).toBeTruthy();
      expect(toc.items.length).toBe(13);
    });
    await step('Verify internal contextual menu renders with CONTENTS header', async () => {
      const menu = toc.shadowRoot.querySelector('.toc-menu');
      expect(menu).toBeTruthy();
      expect(menu.getAttribute('header-text')).toBe('CONTENTS');
    });
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    opened: true
  },
  render: args => {
    const headingsWithActive = mockHeadings.map((h, i) => i === 1 ? {
      ...h,
      active: true
    } : h);
    return html\`
      <div style="position: relative; min-height: 480px; width: 100%; box-sizing: border-box;">
        <ds-toc
          style="--ds-toc-position: absolute; --ds-toc-top: 50%; --ds-toc-right: 24px;"
          ?opened=\${args.opened}
          title-text=\${args['title-text'] || undefined}
          .items=\${headingsWithActive}>
        </ds-toc>
      </div>
    \`;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    opened: true,
    'title-text': 'CONTENTS',
    '--ds-toc-max-height': '220px'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    opened: false,
    '--ds-toc-position': 'absolute',
    '--ds-toc-top': '20%',
    '--ds-toc-line-color': '#2B71F0',
    '--ds-toc-line-active-color': '#FF3B30'
  }
}`,...y.parameters?.docs?.source}}},b=[`ClosedMinimap`,`OpenedMenu`,`ThirteenItemsOverflow`,`WithActiveHeading`,`CustomMaxHeight`,`SubAtomicTokenOverrides`]}))();export{m as ClosedMinimap,v as CustomMaxHeight,h as OpenedMenu,y as SubAtomicTokenOverrides,g as ThirteenItemsOverflow,_ as WithActiveHeading,b as __namedExportsOrder,p as default};