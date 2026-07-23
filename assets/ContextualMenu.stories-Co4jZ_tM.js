import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./ContextualMenu-MilY6z_-.js";var n,r,i,a,o,s,c,l,u,d,f,p,m;e((()=>{t(),{userEvent:n,within:r,expect:i,fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Organisms/Contextual Menu [v1.1.0]`,component:`ds-contextual-menu`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"The `ds-contextual-menu` component is a floating popover organism rendering contextual actions. It utilizes `<ds-item-row>` for rendering items and supports category dividers and customized subcategories."}}},argTypes:{open:{control:`boolean`,description:`Toggles open/closed visibility state.`,table:{category:`Component: Core Controls`,defaultValue:{summary:`true`}}},headerText:{control:`text`,description:`Custom header text displayed at the top of the contextual menu.`,table:{category:`Component: Core Controls`,defaultValue:{summary:`ACTIONS`}}},hideHeader:{control:`boolean`,description:`Hides the header text bar entirely.`,table:{category:`Component: Core Controls`,defaultValue:{summary:`false`}}},hideClose:{control:`boolean`,description:`Hides the top-right close button trigger.`,table:{category:`Component: Core Controls`,defaultValue:{summary:`false`}}},showScrollbar:{control:`boolean`,description:`Explicit boolean prop override for vertical scrollbar visibility. Overrides default >10 items threshold rule.`,table:{category:`Component: Core Controls`,defaultValue:{summary:`auto (itemCount > 10)`}}},showSubcategory:{control:`boolean`,description:`Toggles visibility of the subcategory section.`,table:{category:`Component: Subcategories`,defaultValue:{summary:`false`}}},subcategoryTitle:{control:`text`,description:`Custom header title for the subcategory section.`,table:{category:`Component: Subcategories`,defaultValue:{summary:`PREFERENCES`}}},itemCount:{control:{type:`range`,min:1,max:15,step:1},description:`Dynamically controls the number of <ds-item-row> items rendered inside the preview iframe.`,table:{category:`Component: Dynamic Item Generator`,defaultValue:{summary:`5`}}},ariaLabel:{control:`text`,description:`Accessible ARIA label delegated to internal shadow DOM container.`,table:{category:`Component: Core Controls`,defaultValue:{summary:`Contextual Actions Menu`}}},customWidth:{control:`text`,description:"Sub-atomic property override for card width (`--ds-contextual-menu-width`).",table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`260px`}}},maxHeight:{control:`text`,description:"Sub-atomic property override for card height limits (`--ds-contextual-menu-max-height`).",table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`none`}}},customBg:{control:`color`,description:"Sub-atomic property override for surface background (`--ds-contextual-menu-bg`).",table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-bg)`}}},customRadius:{control:`text`,description:"Sub-atomic property override for corner radius (`--ds-contextual-menu-radius`).",table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--radius-lg)`}}},onClose:{action:`ds-close`,description:`Event emitted when the top-right close button is activated.`,table:{category:`Events`}},onSelect:{action:`ds-select`,description:`Event emitted when any item row is clicked.`,table:{category:`Events`}}},args:{open:!0,headerText:`ACTIONS`,hideHeader:!1,hideClose:!1,showScrollbar:void 0,showSubcategory:!0,subcategoryTitle:`PREFERENCES`,itemCount:5,ariaLabel:`Contextual Actions Menu`,customWidth:`260px`,maxHeight:``,onClose:a(),onSelect:a()}},s=[{id:`autoscroll`,label:`Auto-scroll from here`,icon:`autoscroll`,showKbd:!0,kbd:`⌥`,kbdShowPlus:!0,kbdKey:`A`,control:`none`,category:`main`},{id:`copy-link`,label:`Copy link`,icon:`link`,showKbd:!0,kbd:`⌘`,kbdShowPlus:!0,kbdKey:`C`,control:`none`,category:`main`},{id:`email-lio`,label:`Email Lio`,icon:`email`,control:`none`,category:`main`},{id:`dark-mode`,label:`Dark Theme`,icon:`moon`,control:`toggle`,active:!1,category:`subcategory`},{id:`notifications`,label:`Enable Alerts`,icon:`flag-shield`,control:`check`,selected:!0,checkHasBackground:!0,category:`subcategory`},{id:`primary-opt`,label:`Set Default`,icon:`check`,control:`radio`,selected:!0,category:`main`},{id:`share`,label:`Share Document`,icon:`share`,showKbd:!0,kbd:`⇧`,kbdShowPlus:!0,kbdKey:`S`,control:`none`,category:`main`},{id:`language`,label:`Translate Page`,icon:`language`,control:`check`,selected:!1,checkHasBackground:!0,category:`subcategory`},{id:`lock-access`,label:`Restricted Action`,icon:`lock-closed`,disabled:!0,control:`none`,category:`main`},{id:`ask-ai`,label:`Ask AI Assistant`,icon:`ask-ai`,showKbd:!0,kbd:`⌘`,kbdShowPlus:!0,kbdKey:`K`,control:`none`,category:`main`},{id:`export-pdf`,label:`Export as PDF`,icon:`file`,control:`none`,category:`main`},{id:`print`,label:`Print Document`,icon:`print`,control:`none`,category:`main`},{id:`archive`,label:`Archive Record`,icon:`archive`,control:`none`,category:`main`},{id:`delete`,label:`Delete Record`,icon:`trash`,control:`none`,category:`main`},{id:`settings`,label:`System Settings`,icon:`gear`,control:`none`,category:`main`}],c=e=>{let t=document.createElement(`ds-contextual-menu`);if(e.open?t.setAttribute(`open`,``):t.removeAttribute(`open`),e.headerText&&t.setAttribute(`header-text`,e.headerText),e.ariaLabel&&t.setAttribute(`aria-label`,e.ariaLabel),e.subcategoryTitle&&t.setAttribute(`subcategory-title`,e.subcategoryTitle),e.maxHeight&&t.setAttribute(`max-height`,e.maxHeight),e.showScrollbar!==void 0&&e.showScrollbar!==null?t.setAttribute(`show-scrollbar`,String(e.showScrollbar)):t.removeAttribute(`show-scrollbar`),e.hideHeader?t.setAttribute(`hide-header`,``):t.removeAttribute(`hide-header`),e.hideClose?t.setAttribute(`hide-close`,``):t.removeAttribute(`hide-close`),e.showSubcategory?t.setAttribute(`show-subcategory`,``):t.removeAttribute(`show-subcategory`),e.customWidth&&t.style.setProperty(`--ds-contextual-menu-width`,e.customWidth),e.customBg&&t.style.setProperty(`--ds-contextual-menu-bg`,e.customBg),e.customRadius&&t.style.setProperty(`--ds-contextual-menu-radius`,e.customRadius),e.items&&Array.isArray(e.items))t.items=e.items;else{let n=Math.max(1,Math.min(e.itemCount||5,s.length));t.items=s.slice(0,n)}return t.addEventListener(`ds-close`,t=>e.onClose(t)),t.addEventListener(`ds-select`,t=>e.onSelect(t.detail)),t},l={render:c,args:{open:!0,headerText:`ACTIONS`,hideHeader:!1,hideClose:!1,showSubcategory:!0,subcategoryTitle:`PREFERENCES`,itemCount:5,customWidth:`260px`},play:async({canvasElement:e,step:t})=>{let r=e.querySelector(`ds-contextual-menu`);await t(`Verify shadow root elements render successfully`,async()=>{i(r).toBeTruthy();let e=r.shadowRoot.querySelector(`.close-btn`);i(e).toBeTruthy()}),await t(`Hover first item row to verify interaction feedback`,async()=>{let e=r.shadowRoot.querySelector(`ds-item-row`);e&&await n.hover(e)}),await t(`Click close button trigger and verify menu closes`,async()=>{let e=r.shadowRoot.querySelector(`.close-btn`);e&&e.style.display!==`none`&&(await n.click(e),i(r.hasAttribute(`open`)).toBe(!1))})}},u={render:c,args:{open:!0,headerText:`ACTIONS`,hideHeader:!1,hideClose:!1,showSubcategory:!1,customWidth:`240px`,items:[{id:`ask-ai`,label:`Ask AI about it`,icon:`ask-ai`,showIcon:!0,control:`none`},{id:`autoscroll`,label:`Auto-scroll from here`,icon:`autoscroll`,showIcon:!0,control:`none`},{id:`copy-link`,label:`Copy link`,icon:`link`,showIcon:!0,control:`none`},{id:`email-author`,label:`Email Author`,icon:`email`,showIcon:!0,control:`none`},{id:`share`,label:`Share`,icon:`share`,showIcon:!0,control:`none`}]},play:async({canvasElement:e,step:t})=>{let r=e.querySelector(`ds-contextual-menu`);await t(`Verify shadow root elements render successfully`,async()=>{i(r).toBeTruthy();let e=r.shadowRoot.querySelector(`.menu-title`);i(e.textContent).toBe(`ACTIONS`)}),await t(`Hover AI action row and trigger click event`,async()=>{let e=r.shadowRoot.querySelectorAll(`ds-item-row`);i(e.length).toBe(5),await n.hover(e[0]),await n.click(e[0])})}},d={render:c,args:{open:!0,hideHeader:!0,hideClose:!0,showSubcategory:!1,customWidth:`240px`,items:[{id:`e-reader`,label:`Building an e-reader`,icon:`chevron-right`,showIcon:!0,control:`none`},{id:`ux-wrist`,label:`UX on Wrist`,icon:`chevron-right`,showIcon:!0,control:`none`},{id:`redesign`,label:`US$400k Redesign`,icon:`chevron-right`,showIcon:!0,control:`none`}]},play:async({canvasElement:e,step:t})=>{let r=e.querySelector(`ds-contextual-menu`);await t(`Verify header bar is concealed`,async()=>{i(r).toBeTruthy();let e=r.shadowRoot.querySelector(`.menu-header`);i(e.style.display).toBe(`none`)}),await t(`Interact with list items`,async()=>{let e=r.shadowRoot.querySelectorAll(`ds-item-row`);i(e.length).toBe(3),await n.hover(e[1]),await n.click(e[1])})}},f={render:c,args:{open:!0,headerText:`ACCESSIBILITY`,hideHeader:!1,hideClose:!1,showSubcategory:!0,subcategoryTitle:`VISUALS`,customWidth:`320px`,items:[{id:`text-size`,label:`Text Size`,icon:`text-size`,showIcon:!0,showKbd:!0,kbd:`⌥`,kbdShowPlus:!1,kbdKey:`T`,control:`none`,category:`main`},{id:`dyslexia-font`,label:`Dyslexia Font`,icon:`accessibility`,showIcon:!0,showKbd:!0,kbd:`⌥`,kbdShowPlus:!1,kbdKey:`Y`,control:`toggle`,active:!1,category:`main`},{id:`dark-mode`,label:`Dark Mode`,icon:`moon`,showIcon:!0,showKbd:!0,kbd:`⌥`,kbdShowPlus:!1,kbdKey:`D`,control:`toggle`,active:!0,category:`subcategory`},{id:`high-contrast`,label:`High Contrast`,icon:`high-contrast`,showIcon:!0,showKbd:!0,kbd:`⌥`,kbdShowPlus:!1,kbdKey:`C`,control:`toggle`,active:!1,category:`subcategory`},{id:`reduce-motion`,label:`Reduce Motion`,icon:`motion-play`,showIcon:!0,showKbd:!0,kbd:`⌥`,kbdShowPlus:!1,kbdKey:`M`,control:`toggle`,active:!1,category:`subcategory`},{id:`tab-navigation`,label:`TAB Navigation`,icon:`tab-nav-left`,showIcon:!0,showKbd:!0,kbd:`⌥`,kbdShowPlus:!1,kbdKey:`F`,control:`toggle`,active:!1,category:`subcategory`}]},play:async({canvasElement:e,step:t})=>{let r=e.querySelector(`ds-contextual-menu`);await t(`Verify header title and subcategory grouping render`,async()=>{i(r).toBeTruthy();let e=r.shadowRoot.querySelector(`.menu-title`);i(e.textContent).toBe(`ACCESSIBILITY`);let t=r.shadowRoot.querySelector(`.subcategory-title`);i(t).toBeTruthy(),i(t.textContent).toBe(`VISUALS`)}),await t(`Toggle Dark Mode switch option`,async()=>{let e=r.shadowRoot.querySelectorAll(`ds-item-row`),t=Array.from(e).find(e=>e.getAttribute(`label`)===`Dark Mode`);i(t).toBeTruthy(),await n.click(t)})}},p={render:c,args:{open:!0,headerText:`CONTENTS`,hideHeader:!1,hideClose:!0,showSubcategory:!1,customWidth:`280px`,maxHeight:`260px`,items:[{id:`sec-top`,label:`Scroll to top`,control:`none`},{id:`sec-1`,label:`Heading Level 1 - Complete Architecture`,control:`none`},{id:`sec-2`,label:`Heading Level 2 - Code & Controls`,control:`none`},{id:`sec-3`,label:`Heading Level 3 - Lists & Task Lists`,control:`none`},{id:`sec-4`,label:`  Unordered List`,control:`none`},{id:`sec-5`,label:`  Ordered List`,control:`none`},{id:`sec-6`,label:`  GFM Task List`,control:`none`},{id:`sec-7`,label:`Heading Level 4 - Collapsible Sections`,control:`none`},{id:`sec-8`,label:`Data Summary Table`,control:`none`},{id:`sec-9`,label:`Media & Figures`,control:`none`},{id:`sec-10`,label:`Code Execution Samples`,control:`none`},{id:`sec-11`,label:`Footnotes & References`,control:`none`},{id:`sec-12`,label:`Appendix A - Token Schemas`,control:`none`},{id:`sec-13`,label:`Appendix B - Performance Benchmarks`,control:`none`}]},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-contextual-menu`);await t(`Verify scrollable container has overflow-y enabled via single source of truth rule`,async()=>{i(n).toBeTruthy();let e=n.shadowRoot.querySelector(`.menu-content`);i(e).toBeTruthy(),i(e.classList.contains(`is-scrollable`)).toBe(!0);let t=window.getComputedStyle(e);i(t.overflowY).toBe(`auto`),i(e.scrollHeight).toBeGreaterThan(e.clientHeight)}),await t(`Simulate scrolling action inside the content container`,async()=>{let e=n.shadowRoot.querySelector(`.menu-content`);e.scrollTop=120,i(e.scrollTop).toBeGreaterThan(0)})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    headerText: 'ACTIONS',
    hideHeader: false,
    hideClose: false,
    showSubcategory: true,
    subcategoryTitle: 'PREFERENCES',
    itemCount: 5,
    customWidth: '260px'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const menu = canvasElement.querySelector('ds-contextual-menu');
    await step('Verify shadow root elements render successfully', async () => {
      expect(menu).toBeTruthy();
      const closeBtn = menu.shadowRoot.querySelector('.close-btn');
      expect(closeBtn).toBeTruthy();
    });
    await step('Hover first item row to verify interaction feedback', async () => {
      const firstItemRow = menu.shadowRoot.querySelector('ds-item-row');
      if (firstItemRow) {
        await userEvent.hover(firstItemRow);
      }
    });
    await step('Click close button trigger and verify menu closes', async () => {
      const closeBtn = menu.shadowRoot.querySelector('.close-btn');
      if (closeBtn && closeBtn.style.display !== 'none') {
        await userEvent.click(closeBtn);
        expect(menu.hasAttribute('open')).toBe(false);
      }
    });
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    headerText: 'ACTIONS',
    hideHeader: false,
    hideClose: false,
    showSubcategory: false,
    customWidth: '240px',
    items: [{
      id: 'ask-ai',
      label: 'Ask AI about it',
      icon: 'ask-ai',
      showIcon: true,
      control: 'none'
    }, {
      id: 'autoscroll',
      label: 'Auto-scroll from here',
      icon: 'autoscroll',
      showIcon: true,
      control: 'none'
    }, {
      id: 'copy-link',
      label: 'Copy link',
      icon: 'link',
      showIcon: true,
      control: 'none'
    }, {
      id: 'email-author',
      label: 'Email Author',
      icon: 'email',
      showIcon: true,
      control: 'none'
    }, {
      id: 'share',
      label: 'Share',
      icon: 'share',
      showIcon: true,
      control: 'none'
    }]
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const menu = canvasElement.querySelector('ds-contextual-menu');
    await step('Verify shadow root elements render successfully', async () => {
      expect(menu).toBeTruthy();
      const headerTitle = menu.shadowRoot.querySelector('.menu-title');
      expect(headerTitle.textContent).toBe('ACTIONS');
    });
    await step('Hover AI action row and trigger click event', async () => {
      const itemRows = menu.shadowRoot.querySelectorAll('ds-item-row');
      expect(itemRows.length).toBe(5);
      await userEvent.hover(itemRows[0]);
      await userEvent.click(itemRows[0]);
    });
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    hideHeader: true,
    hideClose: true,
    showSubcategory: false,
    customWidth: '240px',
    items: [{
      id: 'e-reader',
      label: 'Building an e-reader',
      icon: 'chevron-right',
      showIcon: true,
      control: 'none'
    }, {
      id: 'ux-wrist',
      label: 'UX on Wrist',
      icon: 'chevron-right',
      showIcon: true,
      control: 'none'
    }, {
      id: 'redesign',
      label: 'US$400k Redesign',
      icon: 'chevron-right',
      showIcon: true,
      control: 'none'
    }]
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const menu = canvasElement.querySelector('ds-contextual-menu');
    await step('Verify header bar is concealed', async () => {
      expect(menu).toBeTruthy();
      const headerBar = menu.shadowRoot.querySelector('.menu-header');
      expect(headerBar.style.display).toBe('none');
    });
    await step('Interact with list items', async () => {
      const itemRows = menu.shadowRoot.querySelectorAll('ds-item-row');
      expect(itemRows.length).toBe(3);
      await userEvent.hover(itemRows[1]);
      await userEvent.click(itemRows[1]);
    });
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    headerText: 'ACCESSIBILITY',
    hideHeader: false,
    hideClose: false,
    showSubcategory: true,
    subcategoryTitle: 'VISUALS',
    customWidth: '320px',
    items: [{
      id: 'text-size',
      label: 'Text Size',
      icon: 'text-size',
      showIcon: true,
      showKbd: true,
      kbd: '⌥',
      kbdShowPlus: false,
      kbdKey: 'T',
      control: 'none',
      category: 'main'
    }, {
      id: 'dyslexia-font',
      label: 'Dyslexia Font',
      icon: 'accessibility',
      showIcon: true,
      showKbd: true,
      kbd: '⌥',
      kbdShowPlus: false,
      kbdKey: 'Y',
      control: 'toggle',
      active: false,
      category: 'main'
    }, {
      id: 'dark-mode',
      label: 'Dark Mode',
      icon: 'moon',
      showIcon: true,
      showKbd: true,
      kbd: '⌥',
      kbdShowPlus: false,
      kbdKey: 'D',
      control: 'toggle',
      active: true,
      category: 'subcategory'
    }, {
      id: 'high-contrast',
      label: 'High Contrast',
      icon: 'high-contrast',
      showIcon: true,
      showKbd: true,
      kbd: '⌥',
      kbdShowPlus: false,
      kbdKey: 'C',
      control: 'toggle',
      active: false,
      category: 'subcategory'
    }, {
      id: 'reduce-motion',
      label: 'Reduce Motion',
      icon: 'motion-play',
      showIcon: true,
      showKbd: true,
      kbd: '⌥',
      kbdShowPlus: false,
      kbdKey: 'M',
      control: 'toggle',
      active: false,
      category: 'subcategory'
    }, {
      id: 'tab-navigation',
      label: 'TAB Navigation',
      icon: 'tab-nav-left',
      showIcon: true,
      showKbd: true,
      kbd: '⌥',
      kbdShowPlus: false,
      kbdKey: 'F',
      control: 'toggle',
      active: false,
      category: 'subcategory'
    }]
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const menu = canvasElement.querySelector('ds-contextual-menu');
    await step('Verify header title and subcategory grouping render', async () => {
      expect(menu).toBeTruthy();
      const headerTitle = menu.shadowRoot.querySelector('.menu-title');
      expect(headerTitle.textContent).toBe('ACCESSIBILITY');
      const subcategoryHeader = menu.shadowRoot.querySelector('.subcategory-title');
      expect(subcategoryHeader).toBeTruthy();
      expect(subcategoryHeader.textContent).toBe('VISUALS');
    });
    await step('Toggle Dark Mode switch option', async () => {
      const itemRows = menu.shadowRoot.querySelectorAll('ds-item-row');
      const darkModeRow = Array.from(itemRows).find(row => row.getAttribute('label') === 'Dark Mode');
      expect(darkModeRow).toBeTruthy();
      await userEvent.click(darkModeRow);
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    headerText: 'CONTENTS',
    hideHeader: false,
    hideClose: true,
    showSubcategory: false,
    customWidth: '280px',
    maxHeight: '260px',
    items: [{
      id: 'sec-top',
      label: 'Scroll to top',
      control: 'none'
    }, {
      id: 'sec-1',
      label: 'Heading Level 1 - Complete Architecture',
      control: 'none'
    }, {
      id: 'sec-2',
      label: 'Heading Level 2 - Code & Controls',
      control: 'none'
    }, {
      id: 'sec-3',
      label: 'Heading Level 3 - Lists & Task Lists',
      control: 'none'
    }, {
      id: 'sec-4',
      label: '  Unordered List',
      control: 'none'
    }, {
      id: 'sec-5',
      label: '  Ordered List',
      control: 'none'
    }, {
      id: 'sec-6',
      label: '  GFM Task List',
      control: 'none'
    }, {
      id: 'sec-7',
      label: 'Heading Level 4 - Collapsible Sections',
      control: 'none'
    }, {
      id: 'sec-8',
      label: 'Data Summary Table',
      control: 'none'
    }, {
      id: 'sec-9',
      label: 'Media & Figures',
      control: 'none'
    }, {
      id: 'sec-10',
      label: 'Code Execution Samples',
      control: 'none'
    }, {
      id: 'sec-11',
      label: 'Footnotes & References',
      control: 'none'
    }, {
      id: 'sec-12',
      label: 'Appendix A - Token Schemas',
      control: 'none'
    }, {
      id: 'sec-13',
      label: 'Appendix B - Performance Benchmarks',
      control: 'none'
    }]
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const menu = canvasElement.querySelector('ds-contextual-menu');
    await step('Verify scrollable container has overflow-y enabled via single source of truth rule', async () => {
      expect(menu).toBeTruthy();
      const contentEl = menu.shadowRoot.querySelector('.menu-content');
      expect(contentEl).toBeTruthy();
      expect(contentEl.classList.contains('is-scrollable')).toBe(true);
      const computedStyle = window.getComputedStyle(contentEl);
      expect(computedStyle.overflowY).toBe('auto');
      expect(contentEl.scrollHeight).toBeGreaterThan(contentEl.clientHeight);
    });
    await step('Simulate scrolling action inside the content container', async () => {
      const contentEl = menu.shadowRoot.querySelector('.menu-content');
      contentEl.scrollTop = 120;
      expect(contentEl.scrollTop).toBeGreaterThan(0);
    });
  }
}`,...p.parameters?.docs?.source},description:{story:`4. Scrollable Overflow Menu
Tests internal vertical scrolling, itemCount > 10 trigger, max-height caps, overscroll isolation, and inset scrollbars.`,...p.parameters?.docs?.description}}},m=[`Default`,`ActionsMenu`,`CaseStudyNavigation`,`AccessibilityPanel`,`ScrollableOverflowMenu`]}))();export{f as AccessibilityPanel,u as ActionsMenu,d as CaseStudyNavigation,l as Default,p as ScrollableOverflowMenu,m as __namedExportsOrder,o as default};