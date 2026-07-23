import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{t as r}from"./Breadcrumb-CSqM7-VQ.js";import{t as i}from"./NavigationMenu-COspel2-.js";var a,o=e((()=>{a=`:host,.header-shell{box-sizing:border-box;width:100%;max-width:100%;display:block;overflow:visible}.header-content{align-items:center;gap:var(--ds-header-gap,var(--space-lg,16px));width:100%;min-height:var(--ds-header-min-height,var(--size-height-sm,44px));padding:var(--ds-header-padding,24px 28px);box-sizing:border-box;display:flex;overflow:visible}.breadcrumb-region{flex:auto;justify-content:flex-start;align-items:center;min-width:0;display:flex;overflow:visible}.navigation-region{flex:none;justify-content:flex-end;align-items:center;margin-left:auto;display:flex;overflow:visible}.breadcrumb-region[hidden]{display:none}`})),s,c,l=e((()=>{o(),r(),i(),s=[`language-tooltip`,`language-kbd-label`,`language-kbd-key`,`language-kbd-show-plus`,`language-aria-label`,`accessibility-tooltip`,`accessibility-kbd-label`,`accessibility-kbd-key`,`accessibility-kbd-show-plus`,`accessibility-aria-label`,`about-tooltip`,`about-kbd-label`,`about-kbd-key`,`about-kbd-show-plus`,`about-aria-label`,`avatar-src`,`avatar-alt`,`disabled`],c=class extends HTMLElement{static get observedAttributes(){return[`aria-label`,`show-breadcrumb`,`show-language-menu`,...s]}constructor(){super(),this.attachShadow({mode:`open`}),this._breadcrumbItems=null,this._breadcrumbMenuItems=null,this.shadowRoot.innerHTML=`
      <style>${a}</style>
      <header class="header-shell" aria-label="Header">
        <div class="header-content">
          <div class="breadcrumb-region">
            <ds-breadcrumb></ds-breadcrumb>
          </div>
          <div class="navigation-region">
            <ds-navigation-menu></ds-navigation-menu>
          </div>
        </div>
      </header>
    `}connectedCallback(){this.headerEl=this.shadowRoot.querySelector(`.header-shell`),this.breadcrumbRegion=this.shadowRoot.querySelector(`.breadcrumb-region`),this.navigationRegion=this.shadowRoot.querySelector(`.navigation-region`),this.breadcrumbEl=this.shadowRoot.querySelector(`ds-breadcrumb`),this.navigationEl=this.shadowRoot.querySelector(`ds-navigation-menu`),this.render()}attributeChangedCallback(e,t,n){t!==n&&this.headerEl&&this.render()}get breadcrumbItems(){return this._breadcrumbItems}set breadcrumbItems(e){this._breadcrumbItems=Array.isArray(e)?e:null,this.render()}get breadcrumbMenuItems(){return this._breadcrumbMenuItems}set breadcrumbMenuItems(e){this._breadcrumbMenuItems=Array.isArray(e)?e:null,this.render()}get showBreadcrumb(){return this.getAttribute(`show-breadcrumb`)!==`false`}set showBreadcrumb(e){this.setAttribute(`show-breadcrumb`,e?`true`:`false`)}get showLanguageMenu(){return this.getAttribute(`show-language-menu`)!==`false`}set showLanguageMenu(e){this.setAttribute(`show-language-menu`,e?`true`:`false`)}_forwardNavigationAttributes(){s.forEach(e=>{this.hasAttribute(e)?this.navigationEl.setAttribute(e,this.getAttribute(e)||``):this.navigationEl.removeAttribute(e)})}_syncLanguageVisibility(){let e=this.showLanguageMenu,t=this.navigationEl.shadowRoot;if(!t)return;let n=t.querySelector(`.menu-item-language`),r=t.querySelector(`.language-menu`);n&&(n.style.display=e?``:`none`),!e&&r&&r.removeAttribute(`open`)}render(){this.headerEl&&(this.headerEl.setAttribute(`aria-label`,this.getAttribute(`aria-label`)||`Header`),this.breadcrumbRegion.hidden=!this.showBreadcrumb,this.breadcrumbEl.visible=this.showBreadcrumb,Array.isArray(this._breadcrumbItems)&&(this.breadcrumbEl.items=this._breadcrumbItems),this.breadcrumbEl.menuItems=this._breadcrumbMenuItems,this._forwardNavigationAttributes(),this._syncLanguageVisibility())}},customElements.get(`ds-header`)||customElements.define(`ds-header`,c)})),u,d,f,p,m,h,g,_;e((()=>{n(),l(),{expect:u,fn:d}=__STORYBOOK_MODULE_TEST__,f=[{id:`home`,label:`Home`,hasMenu:!1},{id:`work`,label:`Work`,hasMenu:!0,menuItems:[{id:`case-study-a`,label:`Case Study A`},{id:`case-study-b`,label:`Case Study B`},{id:`case-study-c`,label:`Case Study C`}]},{id:`current`,label:`Valence Header`,hasMenu:!1}],p={title:`Organisms/Header`,component:`ds-header`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"Presentational header organism that composes `ds-breadcrumb` on the far left and `ds-navigation-menu` on the far right. The component remains state-dumb by accepting breadcrumb data and visibility toggles from the host app while forwarding interaction events from its child molecules."}}},argTypes:{breadcrumbItems:{control:!1,description:`Array of breadcrumb item objects passed through to the composed breadcrumb molecule.`,table:{category:`Composition`}},breadcrumbMenuItems:{control:!1,description:`Optional fallback menu items array for breadcrumb contextual menus.`,table:{category:`Composition`}},showBreadcrumb:{control:`boolean`,description:`Toggles the breadcrumb region on the far left.`,table:{category:`Core`,defaultValue:{summary:`true`}}},showLanguageMenu:{control:`boolean`,description:`Toggles the language action inside the composed navigation menu.`,table:{category:`Core`,defaultValue:{summary:`true`}}},avatarSrc:{control:`text`,description:`Pass-through avatar image source for the navigation menu.`,table:{category:`Navigation Menu`}},avatarAlt:{control:`text`,description:`Pass-through avatar alternative text for the navigation menu.`,table:{category:`Navigation Menu`}},onBreadcrumbHome:{action:`ds-breadcrumb-home`,description:`Event forwarded when the breadcrumb home item is activated.`,table:{category:`Events`}},onBreadcrumbReturn:{action:`ds-breadcrumb-return`,description:`Event forwarded when the breadcrumb return control is activated.`,table:{category:`Events`}},onBreadcrumbSelect:{action:`ds-breadcrumb-select`,description:`Event forwarded when a breadcrumb item or item menu option is selected.`,table:{category:`Events`}},onLanguage:{action:`ds-navigation-menu-language`,description:`Event forwarded when the navigation menu language button is activated.`,table:{category:`Events`}},onAccessibility:{action:`ds-navigation-menu-accessibility`,description:`Event forwarded when the accessibility button is activated.`,table:{category:`Events`}},onAbout:{action:`ds-navigation-menu-about`,description:`Event forwarded when the avatar button is activated.`,table:{category:`Events`}},onLanguageSelect:{action:`ds-navigation-menu-language-select`,description:`Event forwarded when a language option is selected.`,table:{category:`Events`}},onAccessibilitySelect:{action:`ds-navigation-menu-accessibility-select`,description:`Event forwarded when an accessibility option is selected.`,table:{category:`Events`}}},args:{breadcrumbItems:f,breadcrumbMenuItems:[{id:`overview`,label:`Overview`},{id:`details`,label:`Details`},{id:`results`,label:`Results`}],showBreadcrumb:!0,showLanguageMenu:!0,avatarSrc:`https://thispersondoesnotexist.com/random-person.jpeg`,avatarAlt:`Profile face`,onBreadcrumbHome:d(),onBreadcrumbReturn:d(),onBreadcrumbSelect:d(),onLanguage:d(),onAccessibility:d(),onAbout:d(),onLanguageSelect:d(),onAccessibilitySelect:d()},render:e=>t`
    <div style="width: 100%; min-height: 500px; padding: 0 0 180px; background: var(--color-bg, #ffffff); box-sizing: border-box; overflow-x: hidden; overflow-y: visible;">
      <ds-header
        .breadcrumbItems=${e.breadcrumbItems}
        .breadcrumbMenuItems=${e.breadcrumbMenuItems}
        .showBreadcrumb=${e.showBreadcrumb}
        .showLanguageMenu=${e.showLanguageMenu}
        avatar-src=${e.avatarSrc}
        avatar-alt=${e.avatarAlt}
        @ds-breadcrumb-home=${e.onBreadcrumbHome}
        @ds-breadcrumb-return=${e.onBreadcrumbReturn}
        @ds-breadcrumb-select=${e.onBreadcrumbSelect}
        @ds-navigation-menu-language=${e.onLanguage}
        @ds-navigation-menu-accessibility=${e.onAccessibility}
        @ds-navigation-menu-about=${e.onAbout}
        @ds-navigation-menu-language-select=${e.onLanguageSelect}
        @ds-navigation-menu-accessibility-select=${e.onAccessibilitySelect}>
      </ds-header>
    </div>
  `},m={parameters:{docs:{description:{story:`Default header composition stretched across the viewport. Shows the intended far-left breadcrumb and far-right navigation alignment for app-level page chrome while preserving enough canvas height for opened contextual menus.`}}},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-header`);await t(`Verify both composed molecules are rendered and aligned`,async()=>{let e=n.shadowRoot.querySelector(`.breadcrumb-region`),t=n.shadowRoot.querySelector(`.navigation-region`),r=n.shadowRoot.querySelector(`ds-breadcrumb`),i=n.shadowRoot.querySelector(`ds-navigation-menu`);u(e.hidden).toBe(!1),u(r).toBeTruthy(),u(i).toBeTruthy(),u(t.getBoundingClientRect().left).toBeGreaterThan(e.getBoundingClientRect().left)})}},h={parameters:{docs:{description:{story:`Header variant for views that do not expose hierarchy. The breadcrumb region is removed while the navigation menu remains pinned to the far right across the full viewport width.`}}},args:{showBreadcrumb:!1},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-header`);await t(`Verify the breadcrumb region is hidden`,async()=>{let e=n.shadowRoot.querySelector(`.breadcrumb-region`);u(e.hidden).toBe(!0)})}},g={parameters:{docs:{description:{story:`Header variant for apps that manage locale outside the top bar. The breadcrumb remains visible while the navigation menu suppresses the language action and keeps the remaining controls intact within the full-width header shell.`}}},args:{showLanguageMenu:!1},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-header`);await t(`Verify the navigation menu hides the language action`,async()=>{let e=n.shadowRoot.querySelector(`ds-navigation-menu`).shadowRoot.querySelector(`.menu-item-language`);u(getComputedStyle(e).display).toBe(`none`)})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default header composition stretched across the viewport. Shows the intended far-left breadcrumb and far-right navigation alignment for app-level page chrome while preserving enough canvas height for opened contextual menus.'
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const header = canvasElement.querySelector('ds-header');
    await step('Verify both composed molecules are rendered and aligned', async () => {
      const breadcrumbRegion = header.shadowRoot.querySelector('.breadcrumb-region');
      const navigationRegion = header.shadowRoot.querySelector('.navigation-region');
      const breadcrumb = header.shadowRoot.querySelector('ds-breadcrumb');
      const navigation = header.shadowRoot.querySelector('ds-navigation-menu');
      expect(breadcrumbRegion.hidden).toBe(false);
      expect(breadcrumb).toBeTruthy();
      expect(navigation).toBeTruthy();
      expect(navigationRegion.getBoundingClientRect().left).toBeGreaterThan(breadcrumbRegion.getBoundingClientRect().left);
    });
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Header variant for views that do not expose hierarchy. The breadcrumb region is removed while the navigation menu remains pinned to the far right across the full viewport width.'
      }
    }
  },
  args: {
    showBreadcrumb: false
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const header = canvasElement.querySelector('ds-header');
    await step('Verify the breadcrumb region is hidden', async () => {
      const breadcrumbRegion = header.shadowRoot.querySelector('.breadcrumb-region');
      expect(breadcrumbRegion.hidden).toBe(true);
    });
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Header variant for apps that manage locale outside the top bar. The breadcrumb remains visible while the navigation menu suppresses the language action and keeps the remaining controls intact within the full-width header shell.'
      }
    }
  },
  args: {
    showLanguageMenu: false
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const header = canvasElement.querySelector('ds-header');
    await step('Verify the navigation menu hides the language action', async () => {
      const navigation = header.shadowRoot.querySelector('ds-navigation-menu');
      const languageItem = navigation.shadowRoot.querySelector('.menu-item-language');
      expect(getComputedStyle(languageItem).display).toBe('none');
    });
  }
}`,...g.parameters?.docs?.source}}},_=[`Complete`,`NoBreadcrumb`,`NoLanguageMenu`]}))();export{m as Complete,h as NoBreadcrumb,g as NoLanguageMenu,_ as __namedExportsOrder,p as default};