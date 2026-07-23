import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{r,t as i}from"./if-defined-CceMvhO9.js";import{t as a}from"./Tooltip-tNDa5pRh.js";var o,s,c,l,u,d,f,p;e((()=>{n(),i(),a(),{expect:o,userEvent:s}=__STORYBOOK_MODULE_TEST__,c={title:`Molecules/Tooltip [v1.0.0]`,component:`ds-tooltip`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`An interactive overlay component that anchors to a target element 
to display helpful descriptive text and keyboard shortcut hints.`}}},decorators:[e=>t`
      <div style="
        padding: 50px 100px;
        display: flex; 
        justify-content: center; 
        align-items: center; 
        box-sizing: border-box;
      ">
        ${e()}
      </div>
    `],argTypes:{text:{name:`text`,description:`The descriptive message text content displayed inside the container body.`,control:`text`,table:{category:`Core & Variant Controls`}},showKbd:{name:`showKbd`,description:`The exclusive toggle switch to activate or deactivate the sub-atomic keyboard indicator.`,control:`boolean`,table:{category:`Core & Variant Controls`,defaultValue:{summary:`false`}}},kbdLabel:{name:`kbdLabel`,description:`The primary shortcut modifier value passed down to the internal kbd component.`,control:{type:`select`},options:[`⌥ Option`,`⎇ Alt`,`⇧ Shift`,`⌘ Cmd`,`Ctrl`,`Esc`,`Backspace`],if:{arg:`showKbd`},table:{category:`Core & Variant Controls`}},kbdShowPlus:{name:`kbdShowPlus`,description:`Toggles a combination plus operator inside the shortcut atom container.`,control:`boolean`,if:{arg:`showKbd`},table:{category:`Core & Variant Controls`,defaultValue:{summary:`false`}}},kbdKey:{name:`kbdKey`,description:`The secondary action key bound to multi-key shortcut chains.`,control:`text`,if:{arg:`showKbd`},table:{category:`Core & Variant Controls`}},position:{name:`position`,description:`Determines the direction where the overlay anchors relative to its target element parent.`,control:{type:`select`},options:[`bottom`,`top`,`left`,`right`],table:{category:`Core & Variant Controls`,defaultValue:{summary:`bottom`}}},radius:{name:`radius`,control:`text`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--radius-md)`}}},backgroundColor:{name:`backgroundColor`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-overlay-dark)`}}}},render:e=>{let n=[e.radius?`--ds-tooltip-radius: ${e.radius};`:``,e.backgroundColor?`--ds-tooltip-bg: ${e.backgroundColor};`:``].join(` `).trim();return t`
      <div 
        id="hover-container"
        tabindex="0"
        style="position: relative; display: inline-flex; justify-content: center; align-items: center; width: 140px; height: 50px; background: var(--color-gray-xlight, #eee); border-radius: var(--radius-sm, 4px); cursor: pointer; user-select: none; font-family: var(--font-family); font-size: 13px; font-weight: 500;">
        Hover Me
        <ds-tooltip 
          text="${e.text}" 
          ?show-kbd="${e.showKbd}"
          kbd-label="${r(e.kbdLabel)}"
          ?kbd-show-plus="${e.kbdShowPlus}"
          kbd-key="${r(e.kbdKey)}"
          position="${e.position||`bottom`}"
          style=${r(n||void 0)}>
        </ds-tooltip>
      </div>
    `}},l={args:{text:`Save Project`,showKbd:!0,kbdLabel:`⌘ Cmd`,kbdShowPlus:!0,kbdKey:`s`,position:`bottom`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#hover-container`),r=e.querySelector(`ds-tooltip`);await t(`Verify tooltip is hidden by default initially`,async()=>{o(r.hasAttribute(`visible`)).toBe(!1)}),await t(`Hover parent container and assert automatic visibility activation`,async()=>{await s.hover(n),o(r.hasAttribute(`visible`)).toBe(!0);let e=r.shadowRoot.querySelector(`.tooltip-kbd`);o(e.getAttribute(`key`)).toBe(`s`)}),await t(`Unhover parent container and ensure visibility safely clears out`,async()=>{await s.unhover(n),o(r.hasAttribute(`visible`)).toBe(!1)}),await t(`Focus parent via keyboard and ensure accessibility triggers visibility`,async()=>{n.focus(),o(r.hasAttribute(`visible`)).toBe(!0),n.blur()})}},u={args:{text:`Exit Fullscreen`,showKbd:!0,kbdLabel:`Esc`,kbdShowPlus:!1,position:`top`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-tooltip`);await t(`Verify positional constraint matches Top`,async()=>{o(n.getAttribute(`position`)).toBe(`top`),o(n.hasAttribute(`kbd-show-plus`)).toBe(!1)})}},d={args:{text:`Delete Permanently`,showKbd:!1,position:`left`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#hover-container`),r=e.querySelector(`ds-tooltip`);await t(`Trigger hover actions to inspect shortcut components`,async()=>{await s.hover(n);let e=r.shadowRoot.querySelector(`.tooltip-kbd`);o(e.style.display).toBe(`none`)})}},f={args:{text:`Share Profile`,showKbd:!1,position:`right`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-tooltip`);await t(`Verify spatial alignment targets the right axis`,async()=>{o(n.getAttribute(`position`)).toBe(`right`)})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Save Project',
    showKbd: true,
    kbdLabel: '⌘ Cmd',
    kbdShowPlus: true,
    kbdKey: 's',
    position: 'bottom'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const container = canvasElement.querySelector('#hover-container');
    const tooltip = canvasElement.querySelector('ds-tooltip');
    await step('Verify tooltip is hidden by default initially', async () => {
      expect(tooltip.hasAttribute('visible')).toBe(false);
    });
    await step('Hover parent container and assert automatic visibility activation', async () => {
      await userEvent.hover(container);
      expect(tooltip.hasAttribute('visible')).toBe(true);
      const innerKbd = tooltip.shadowRoot.querySelector('.tooltip-kbd');
      expect(innerKbd.getAttribute('key')).toBe('s');
    });
    await step('Unhover parent container and ensure visibility safely clears out', async () => {
      await userEvent.unhover(container);
      expect(tooltip.hasAttribute('visible')).toBe(false);
    });
    await step('Focus parent via keyboard and ensure accessibility triggers visibility', async () => {
      container.focus();
      expect(tooltip.hasAttribute('visible')).toBe(true);
      container.blur();
    });
  }
}`,...l.parameters?.docs?.source},description:{story:`Bottom-positioned tooltip with a multi-key shortcut combination. Includes full tests for hover and keyboard focus triggers.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Exit Fullscreen',
    showKbd: true,
    kbdLabel: 'Esc',
    kbdShowPlus: false,
    position: 'top'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tooltip = canvasElement.querySelector('ds-tooltip');
    await step('Verify positional constraint matches Top', async () => {
      expect(tooltip.getAttribute('position')).toBe('top');
      expect(tooltip.hasAttribute('kbd-show-plus')).toBe(false);
    });
  }
}`,...u.parameters?.docs?.source},description:{story:`Top-positioned tooltip featuring a single-key shortcut (e.g., Escape) without a plus modifier.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Delete Permanently',
    showKbd: false,
    position: 'left'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const container = canvasElement.querySelector('#hover-container');
    const tooltip = canvasElement.querySelector('ds-tooltip');
    await step('Trigger hover actions to inspect shortcut components', async () => {
      await userEvent.hover(container);
      const innerKbd = tooltip.shadowRoot.querySelector('.tooltip-kbd');
      expect(innerKbd.style.display).toBe('none');
    });
  }
}`,...d.parameters?.docs?.source},description:{story:`Left-positioned tooltip containing only text, with keyboard indicators completely hidden.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Share Profile',
    showKbd: false,
    position: 'right'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const tooltip = canvasElement.querySelector('ds-tooltip');
    await step('Verify spatial alignment targets the right axis', async () => {
      expect(tooltip.getAttribute('position')).toBe('right');
    });
  }
}`,...f.parameters?.docs?.source},description:{story:`Right-positioned tooltip containing only text, ideal for sidebars and compact columns.`,...f.parameters?.docs?.description}}},p=[`BottomPositionWithCombo`,`TopPositionSingleKey`,`LeftPositionTextOnly`,`RightPositionTextOnly`]}))();export{l as BottomPositionWithCombo,d as LeftPositionTextOnly,f as RightPositionTextOnly,u as TopPositionSingleKey,p as __namedExportsOrder,c as default};