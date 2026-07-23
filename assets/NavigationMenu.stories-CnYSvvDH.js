import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{t as r}from"./NavigationMenu-COspel2-.js";var i,a,o,s,c,l,u,d;e((()=>{n(),r(),{expect:i,fn:a,userEvent:o}=__STORYBOOK_MODULE_TEST__,s={title:`Molecules/Navigation Menu [v1.1.0]`,component:`ds-navigation-menu`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Top navigation molecule with avatar, icon actions, tooltips, and contextual menus for language and accessibility controls.`}}},argTypes:{languageTooltip:{control:`text`,table:{category:`Tooltips`}},languageKbdLabel:{control:`text`,table:{category:`Tooltips`}},languageKbdKey:{control:`text`,table:{category:`Tooltips`}},languageKbdShowPlus:{control:`boolean`,table:{category:`Tooltips`,defaultValue:{summary:`true`}}},languageAriaLabel:{control:`text`,table:{category:`Accessibility`}},accessibilityTooltip:{control:`text`,table:{category:`Tooltips`}},accessibilityKbdLabel:{control:`text`,table:{category:`Tooltips`}},accessibilityKbdKey:{control:`text`,table:{category:`Tooltips`}},accessibilityKbdShowPlus:{control:`boolean`,table:{category:`Tooltips`,defaultValue:{summary:`true`}}},accessibilityAriaLabel:{control:`text`,table:{category:`Accessibility`}},aboutTooltip:{control:`text`,table:{category:`Tooltips`}},aboutKbdLabel:{control:`text`,table:{category:`Tooltips`}},aboutKbdKey:{control:`text`,table:{category:`Tooltips`}},aboutKbdShowPlus:{control:`boolean`,table:{category:`Tooltips`,defaultValue:{summary:`true`}}},aboutAriaLabel:{control:`text`,table:{category:`Accessibility`}},avatarSrc:{control:`text`,table:{category:`Avatar`}},avatarAlt:{control:`text`,table:{category:`Avatar`}},disabled:{control:`boolean`,table:{category:`Core`,defaultValue:{summary:`false`}}},onLanguage:{action:`ds-navigation-menu-language`,table:{category:`Events`}},onAccessibility:{action:`ds-navigation-menu-accessibility`,table:{category:`Events`}},onAbout:{action:`ds-navigation-menu-about`,table:{category:`Events`}},onLanguageSelect:{action:`ds-navigation-menu-language-select`,table:{category:`Events`}},onAccessibilitySelect:{action:`ds-navigation-menu-accessibility-select`,table:{category:`Events`}}},args:{languageTooltip:`Language`,languageKbdLabel:`Ctrl`,languageKbdKey:`L`,languageKbdShowPlus:!0,languageAriaLabel:`Language`,accessibilityTooltip:`Accessibility`,accessibilityKbdLabel:`Ctrl`,accessibilityKbdKey:`A`,accessibilityKbdShowPlus:!0,accessibilityAriaLabel:`Accessibility`,aboutTooltip:`About`,aboutKbdLabel:`Ctrl`,aboutKbdKey:`I`,aboutKbdShowPlus:!0,aboutAriaLabel:`About`,avatarSrc:`https://thispersondoesnotexist.com/random-person.jpeg`,avatarAlt:`Profile face`,disabled:!1,onLanguage:a(),onAccessibility:a(),onAbout:a(),onLanguageSelect:a(),onAccessibilitySelect:a()},render:e=>t`
    <div style="padding: 16px; min-height: 560px; width: fit-content; display: inline-flex; align-items: flex-start; background: var(--color-bg, #ffffff);">
      <ds-navigation-menu
        language-tooltip=${e.languageTooltip}
        language-kbd-label=${e.languageKbdLabel}
        language-kbd-key=${e.languageKbdKey}
        ?language-kbd-show-plus=${e.languageKbdShowPlus}
        language-aria-label=${e.languageAriaLabel}

        accessibility-tooltip=${e.accessibilityTooltip}
        accessibility-kbd-label=${e.accessibilityKbdLabel}
        accessibility-kbd-key=${e.accessibilityKbdKey}
        ?accessibility-kbd-show-plus=${e.accessibilityKbdShowPlus}
        accessibility-aria-label=${e.accessibilityAriaLabel}

        about-tooltip=${e.aboutTooltip}
        about-kbd-label=${e.aboutKbdLabel}
        about-kbd-key=${e.aboutKbdKey}
        ?about-kbd-show-plus=${e.aboutKbdShowPlus}
        about-aria-label=${e.aboutAriaLabel}

        avatar-src=${e.avatarSrc}
        avatar-alt=${e.avatarAlt}
        ?disabled=${e.disabled}
        @ds-navigation-menu-language=${e.onLanguage}
        @ds-navigation-menu-accessibility=${e.onAccessibility}
        @ds-navigation-menu-about=${e.onAbout}
        @ds-navigation-menu-language-select=${e.onLanguageSelect}
        @ds-navigation-menu-accessibility-select=${e.onAccessibilitySelect}>
      </ds-navigation-menu>
    </div>
  `},c={parameters:{docs:{description:{story:`Default navigation menu with avatar, language menu, and accessibility menu. Includes interaction checks for open/close behavior, alignment, and tooltip visibility states.`}}},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-navigation-menu`),r=n.shadowRoot.querySelector(`.language-btn`),a=n.shadowRoot.querySelector(`.accessibility-btn`),s=n.shadowRoot.querySelector(`.avatar-button`),c=n.shadowRoot.querySelector(`.language-tooltip`),l=n.shadowRoot.querySelector(`.accessibility-tooltip`),u=n.shadowRoot.querySelector(`.language-menu`),d=n.shadowRoot.querySelector(`.accessibility-menu`);await t(`Verify avatar appears on the left and menus are initially closed`,async()=>{let e=n.shadowRoot.querySelector(`.menu-profile`).querySelector(`.menu-item`);i(e.contains(s)).toBe(!0),i(u.hasAttribute(`open`)).toBe(!1),i(d.hasAttribute(`open`)).toBe(!1)}),await t(`Open language menu and choose Portuguese`,async()=>{await o.click(r),i(u.hasAttribute(`open`)).toBe(!0),i(getComputedStyle(c).display).toBe(`none`);let e=u.shadowRoot.querySelector(`.close-btn`),t=d.shadowRoot.querySelector(`.close-btn`);i(e).toBeTruthy(),i(t).toBeTruthy();let n=u.shadowRoot.querySelector(`.menu-card`),a=d.shadowRoot.querySelector(`.menu-card`);i(getComputedStyle(n).width).toBe(getComputedStyle(a).width);let s=Array.from(u.shadowRoot.querySelectorAll(`ds-item-row`)).find(e=>e.getAttribute(`label`)===`Portuguese`);i(s).toBeTruthy();let l=s.shadowRoot.querySelector(`.a11y-row`);await o.click(l),i(u.hasAttribute(`open`)).toBe(!1)}),await t(`Open accessibility menu and toggle Text Size`,async()=>{await o.click(a),i(d.hasAttribute(`open`)).toBe(!0),i(getComputedStyle(l).display).toBe(`none`);let e=d.getBoundingClientRect(),t=a.getBoundingClientRect();i(e.top).toBeGreaterThan(t.bottom-1),i(Math.abs(e.right-t.right)).toBeLessThan(2);let n=Array.from(d.shadowRoot.querySelectorAll(`ds-item-row`)).find(e=>e.getAttribute(`label`)===`Text Size`);i(n).toBeTruthy();let r=n.shadowRoot.querySelector(`.a11y-row`);await o.click(r),i(d.hasAttribute(`open`)).toBe(!0)}),await t(`Click avatar button to emit about action and close menus`,async()=>{await o.click(s),i(u.hasAttribute(`open`)).toBe(!1),i(d.hasAttribute(`open`)).toBe(!1),i(getComputedStyle(c).display).not.toBe(`none`),i(getComputedStyle(l).display).not.toBe(`none`)})}},l={parameters:{docs:{description:{story:`Localized variant demonstrating translated tooltip labels and the same interactive behavior for both contextual menus.`}}},args:{languageTooltip:`Idioma`,languageKbdLabel:`Ctrl`,languageKbdKey:`L`,accessibilityTooltip:`Acessibilidade`,accessibilityKbdLabel:`Ctrl`,accessibilityKbdKey:`A`,aboutTooltip:`Sobre`,aboutKbdLabel:`Ctrl`,aboutKbdKey:`I`,languageAriaLabel:`Idioma`,accessibilityAriaLabel:`Acessibilidade`,aboutAriaLabel:`Sobre`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-navigation-menu`),r=n.shadowRoot.querySelector(`.language-btn`),a=n.shadowRoot.querySelector(`.language-tooltip`),s=n.shadowRoot.querySelector(`.accessibility-btn`);await t(`Verify localized tooltip labels are applied`,async()=>{i(a.getAttribute(`text`)).toBe(`Idioma`)}),await t(`Open localized language menu and select English`,async()=>{await o.click(r);let e=n.shadowRoot.querySelector(`.language-menu`);i(e.hasAttribute(`open`)).toBe(!0);let t=Array.from(e.shadowRoot.querySelectorAll(`ds-item-row`)).find(e=>e.getAttribute(`label`)===`English`);i(t).toBeTruthy();let a=t.shadowRoot.querySelector(`.a11y-row`);await o.click(a),i(e.hasAttribute(`open`)).toBe(!1)}),await t(`Open accessibility menu from localized scenario`,async()=>{await o.click(s);let e=n.shadowRoot.querySelector(`.accessibility-menu`);i(e.hasAttribute(`open`)).toBe(!0)})}},u={parameters:{docs:{description:{story:`Focused interaction story for language menu single-select check behavior. Verifies that selection changes from English to Portuguese and menu closes after selection.`}}},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-navigation-menu`),r=n.shadowRoot.querySelector(`.language-btn`);await t(`Open language menu`,async()=>{await o.click(r);let e=n.shadowRoot.querySelector(`.language-menu`);i(e.hasAttribute(`open`)).toBe(!0)}),await t(`Verify English starts selected`,async()=>{let e=n.shadowRoot.querySelector(`.language-menu`),t=Array.from(e.shadowRoot.querySelectorAll(`ds-item-row`)).find(e=>e.getAttribute(`label`)===`English`);i(t).toBeTruthy(),i(t.hasAttribute(`selected`)).toBe(!0)}),await t(`Select Portuguese and verify close`,async()=>{let e=n.shadowRoot.querySelector(`.language-menu`),t=Array.from(e.shadowRoot.querySelectorAll(`ds-item-row`)).find(e=>e.getAttribute(`label`)===`Portuguese`);i(t).toBeTruthy();let r=t.shadowRoot.querySelector(`.a11y-row`);await o.click(r),i(e.hasAttribute(`open`)).toBe(!1)}),await t(`Re-open and confirm Portuguese is selected`,async()=>{await o.click(r);let e=n.shadowRoot.querySelector(`.language-menu`),t=Array.from(e.shadowRoot.querySelectorAll(`ds-item-row`)).find(e=>e.getAttribute(`label`)===`Portuguese`),a=Array.from(e.shadowRoot.querySelectorAll(`ds-item-row`)).find(e=>e.getAttribute(`label`)===`English`);i(t.hasAttribute(`selected`)).toBe(!0),i(a.hasAttribute(`selected`)).toBe(!1)})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default navigation menu with avatar, language menu, and accessibility menu. Includes interaction checks for open/close behavior, alignment, and tooltip visibility states.'
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const nav = canvasElement.querySelector('ds-navigation-menu');
    const languageBtn = nav.shadowRoot.querySelector('.language-btn');
    const accessibilityBtn = nav.shadowRoot.querySelector('.accessibility-btn');
    const avatarBtn = nav.shadowRoot.querySelector('.avatar-button');
    const languageTooltip = nav.shadowRoot.querySelector('.language-tooltip');
    const accessibilityTooltip = nav.shadowRoot.querySelector('.accessibility-tooltip');
    const languageMenu = nav.shadowRoot.querySelector('.language-menu');
    const accessibilityMenu = nav.shadowRoot.querySelector('.accessibility-menu');
    await step('Verify avatar appears on the left and menus are initially closed', async () => {
      const firstGroup = nav.shadowRoot.querySelector('.menu-profile');
      const firstMenuItem = firstGroup.querySelector('.menu-item');
      expect(firstMenuItem.contains(avatarBtn)).toBe(true);
      expect(languageMenu.hasAttribute('open')).toBe(false);
      expect(accessibilityMenu.hasAttribute('open')).toBe(false);
    });
    await step('Open language menu and choose Portuguese', async () => {
      await userEvent.click(languageBtn);
      expect(languageMenu.hasAttribute('open')).toBe(true);
      expect(getComputedStyle(languageTooltip).display).toBe('none');
      const languageCloseBtn = languageMenu.shadowRoot.querySelector('.close-btn');
      const accessibilityCloseBtn = accessibilityMenu.shadowRoot.querySelector('.close-btn');
      expect(languageCloseBtn).toBeTruthy();
      expect(accessibilityCloseBtn).toBeTruthy();
      const languageCard = languageMenu.shadowRoot.querySelector('.menu-card');
      const accessibilityCard = accessibilityMenu.shadowRoot.querySelector('.menu-card');
      expect(getComputedStyle(languageCard).width).toBe(getComputedStyle(accessibilityCard).width);
      const ptRow = Array.from(languageMenu.shadowRoot.querySelectorAll('ds-item-row')).find(row => row.getAttribute('label') === 'Portuguese');
      expect(ptRow).toBeTruthy();
      const ptRowAction = ptRow.shadowRoot.querySelector('.a11y-row');
      await userEvent.click(ptRowAction);
      expect(languageMenu.hasAttribute('open')).toBe(false);
    });
    await step('Open accessibility menu and toggle Text Size', async () => {
      await userEvent.click(accessibilityBtn);
      expect(accessibilityMenu.hasAttribute('open')).toBe(true);
      expect(getComputedStyle(accessibilityTooltip).display).toBe('none');
      const menuRect = accessibilityMenu.getBoundingClientRect();
      const buttonRect = accessibilityBtn.getBoundingClientRect();
      expect(menuRect.top).toBeGreaterThan(buttonRect.bottom - 1);
      expect(Math.abs(menuRect.right - buttonRect.right)).toBeLessThan(2);
      const textSizeRow = Array.from(accessibilityMenu.shadowRoot.querySelectorAll('ds-item-row')).find(row => row.getAttribute('label') === 'Text Size');
      expect(textSizeRow).toBeTruthy();
      const textSizeAction = textSizeRow.shadowRoot.querySelector('.a11y-row');
      await userEvent.click(textSizeAction);
      expect(accessibilityMenu.hasAttribute('open')).toBe(true);
    });
    await step('Click avatar button to emit about action and close menus', async () => {
      await userEvent.click(avatarBtn);
      expect(languageMenu.hasAttribute('open')).toBe(false);
      expect(accessibilityMenu.hasAttribute('open')).toBe(false);
      expect(getComputedStyle(languageTooltip).display).not.toBe('none');
      expect(getComputedStyle(accessibilityTooltip).display).not.toBe('none');
    });
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Localized variant demonstrating translated tooltip labels and the same interactive behavior for both contextual menus.'
      }
    }
  },
  args: {
    languageTooltip: 'Idioma',
    languageKbdLabel: 'Ctrl',
    languageKbdKey: 'L',
    accessibilityTooltip: 'Acessibilidade',
    accessibilityKbdLabel: 'Ctrl',
    accessibilityKbdKey: 'A',
    aboutTooltip: 'Sobre',
    aboutKbdLabel: 'Ctrl',
    aboutKbdKey: 'I',
    languageAriaLabel: 'Idioma',
    accessibilityAriaLabel: 'Acessibilidade',
    aboutAriaLabel: 'Sobre'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const nav = canvasElement.querySelector('ds-navigation-menu');
    const languageBtn = nav.shadowRoot.querySelector('.language-btn');
    const languageTooltip = nav.shadowRoot.querySelector('.language-tooltip');
    const accessibilityBtn = nav.shadowRoot.querySelector('.accessibility-btn');
    await step('Verify localized tooltip labels are applied', async () => {
      expect(languageTooltip.getAttribute('text')).toBe('Idioma');
    });
    await step('Open localized language menu and select English', async () => {
      await userEvent.click(languageBtn);
      const languageMenu = nav.shadowRoot.querySelector('.language-menu');
      expect(languageMenu.hasAttribute('open')).toBe(true);
      const enRow = Array.from(languageMenu.shadowRoot.querySelectorAll('ds-item-row')).find(row => row.getAttribute('label') === 'English');
      expect(enRow).toBeTruthy();
      const enRowAction = enRow.shadowRoot.querySelector('.a11y-row');
      await userEvent.click(enRowAction);
      expect(languageMenu.hasAttribute('open')).toBe(false);
    });
    await step('Open accessibility menu from localized scenario', async () => {
      await userEvent.click(accessibilityBtn);
      const accessibilityMenu = nav.shadowRoot.querySelector('.accessibility-menu');
      expect(accessibilityMenu.hasAttribute('open')).toBe(true);
    });
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Focused interaction story for language menu single-select check behavior. Verifies that selection changes from English to Portuguese and menu closes after selection.'
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const nav = canvasElement.querySelector('ds-navigation-menu');
    const languageBtn = nav.shadowRoot.querySelector('.language-btn');
    await step('Open language menu', async () => {
      await userEvent.click(languageBtn);
      const languageMenu = nav.shadowRoot.querySelector('.language-menu');
      expect(languageMenu.hasAttribute('open')).toBe(true);
    });
    await step('Verify English starts selected', async () => {
      const languageMenu = nav.shadowRoot.querySelector('.language-menu');
      const enRow = Array.from(languageMenu.shadowRoot.querySelectorAll('ds-item-row')).find(row => row.getAttribute('label') === 'English');
      expect(enRow).toBeTruthy();
      expect(enRow.hasAttribute('selected')).toBe(true);
    });
    await step('Select Portuguese and verify close', async () => {
      const languageMenu = nav.shadowRoot.querySelector('.language-menu');
      const ptRow = Array.from(languageMenu.shadowRoot.querySelectorAll('ds-item-row')).find(row => row.getAttribute('label') === 'Portuguese');
      expect(ptRow).toBeTruthy();
      const ptRowAction = ptRow.shadowRoot.querySelector('.a11y-row');
      await userEvent.click(ptRowAction);
      expect(languageMenu.hasAttribute('open')).toBe(false);
    });
    await step('Re-open and confirm Portuguese is selected', async () => {
      await userEvent.click(languageBtn);
      const languageMenu = nav.shadowRoot.querySelector('.language-menu');
      const ptRow = Array.from(languageMenu.shadowRoot.querySelectorAll('ds-item-row')).find(row => row.getAttribute('label') === 'Portuguese');
      const enRow = Array.from(languageMenu.shadowRoot.querySelectorAll('ds-item-row')).find(row => row.getAttribute('label') === 'English');
      expect(ptRow.hasAttribute('selected')).toBe(true);
      expect(enRow.hasAttribute('selected')).toBe(false);
    });
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`PortugueseExample`,`LanguageMenuBehavior`]}))();export{c as Default,u as LanguageMenuBehavior,l as PortugueseExample,d as __namedExportsOrder,s as default};