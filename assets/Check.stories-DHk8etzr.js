import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{r,t as i}from"./if-defined-2H52cT6K.js";import{t as a}from"./Check-DkfxMg1p.js";var o,s,c,l,u,d,f,p,m,h=e((()=>{n(),i(),a(),{expect:o,userEvent:s,fireEvent:c}=__STORYBOOK_MODULE_TEST__,l={title:`Atoms/Check [v1.0.0]`,component:`ds-check`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A minimalist presentational vector graphic atom used to indicate selection or completion states. Features optional background container framing, smooth CSS animations, full keyboard/click toggling, disabled states, and sub-atomic style overrides.`}}},decorators:[e=>t`
      <div class="canvas-buffer" style="
        display: flex; 
        justify-content: center; 
        align-items: center; 
        box-sizing: border-box;
      ">
        ${e()}
      </div>
    `],argTypes:{selected:{name:`selected`,description:`Toggles the active selection state and animated appearance of the checkmark.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`false`}}},hasBackground:{name:`hasBackground`,description:`Activates an outer surface container background and structural border ring around the checkmark.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`false`}}},disabled:{name:`disabled`,description:`Disables user interactions and applies muted visual opacity tokens.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`false`}}},ariaLabel:{name:`ariaLabel`,description:`Crucial accessibility label delegated directly to internal primitives to keep host clean.`,control:`text`,table:{category:`Component: Core`}},color:{name:`color`,description:`Sub-atomic modifier overriding default SVG stroke vector color (--ds-check-color).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-accent)`}}},size:{name:`size`,description:`Sub-atomic modifier overriding outer bounding box dimensions (--ds-check-size).`,control:`text`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--size-icon-sm)`}}},bg:{name:`bg`,description:`Sub-atomic modifier overriding surface container background color (--ds-check-bg).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-surface)`}}},borderColor:{name:`borderColor`,description:`Sub-atomic modifier overriding container border ring color (--ds-check-border-color).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-gray-light)`}}}},render:e=>{let n=[e.color?`--ds-check-color: ${e.color};`:``,e.size?`--ds-check-size: ${e.size};`:``,e.bg?`--ds-check-bg: ${e.bg};`:``,e.borderColor?`--ds-check-border-color: ${e.borderColor};`:``].join(` `).trim();return t`
      <ds-check
        ?selected=${e.selected}
        ?has-background=${e.hasBackground}
        ?disabled=${e.disabled}
        aria-label=${r(e.ariaLabel)}
        style=${r(n||void 0)}>
      </ds-check>
    `}},u={args:{selected:!0,hasBackground:!1,disabled:!1,ariaLabel:`Toggle task completion`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-check`);await t(`Verify initial selected state and ARIA attributes`,async()=>{o(n.hasAttribute(`selected`)).toBe(!0),o(n.getAttribute(`aria-checked`)).toBe(`true`),o(n.getAttribute(`aria-disabled`)).toBe(`false`)}),await t(`Simulate a mouse click to unselect the check`,async()=>{await s.click(n),o(n.hasAttribute(`selected`)).toBe(!1),o(n.getAttribute(`aria-checked`)).toBe(`false`)}),await t(`Simulate another click to re-select it`,async()=>{await s.click(n),o(n.hasAttribute(`selected`)).toBe(!0),o(n.getAttribute(`aria-checked`)).toBe(`true`)}),await t(`Simulate a keyboard spacebar press to unselect it again`,async()=>{c.keyDown(n,{key:` `,code:`Space`}),o(n.hasAttribute(`selected`)).toBe(!1),o(n.getAttribute(`aria-checked`)).toBe(`false`)})}},d={args:{selected:!0,hasBackground:!0,disabled:!1,ariaLabel:`Checkbox option with surface container`}},f={args:{selected:!0,hasBackground:!0,disabled:!0,ariaLabel:`Disabled completed item`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-check`);await t(`Verify initial disabled ARIA attributes and focus prevention`,async()=>{o(n.hasAttribute(`disabled`)).toBe(!0),o(n.getAttribute(`aria-disabled`)).toBe(`true`),o(n.getAttribute(`tabindex`)).toBe(`-1`)}),await t(`Verify click events are ignored when disabled`,async()=>{await s.click(n,{pointerEventsCheck:0}),o(n.hasAttribute(`selected`)).toBe(!0)})}},p={args:{selected:!0,hasBackground:!0,disabled:!1,ariaLabel:`Custom success indicator`,color:`#ffffff`,size:`2.5rem`,bg:`#10b981`,borderColor:`#059669`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    hasBackground: false,
    disabled: false,
    ariaLabel: 'Toggle task completion'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-check');
    await step('Verify initial selected state and ARIA attributes', async () => {
      expect(component.hasAttribute('selected')).toBe(true);
      expect(component.getAttribute('aria-checked')).toBe('true');
      expect(component.getAttribute('aria-disabled')).toBe('false');
    });
    await step('Simulate a mouse click to unselect the check', async () => {
      await userEvent.click(component);
      expect(component.hasAttribute('selected')).toBe(false);
      expect(component.getAttribute('aria-checked')).toBe('false');
    });
    await step('Simulate another click to re-select it', async () => {
      await userEvent.click(component);
      expect(component.hasAttribute('selected')).toBe(true);
      expect(component.getAttribute('aria-checked')).toBe('true');
    });
    await step('Simulate a keyboard spacebar press to unselect it again', async () => {
      fireEvent.keyDown(component, {
        key: ' ',
        code: 'Space'
      });
      expect(component.hasAttribute('selected')).toBe(false);
      expect(component.getAttribute('aria-checked')).toBe('false');
    });
  }
}`,...u.parameters?.docs?.source},description:{story:`Default isolated check icon state.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    hasBackground: true,
    disabled: false,
    ariaLabel: 'Checkbox option with surface container'
  }
}`,...d.parameters?.docs?.source},description:{story:`Checkmark framed inside a surface container box with border outline.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    hasBackground: true,
    disabled: true,
    ariaLabel: 'Disabled completed item'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-check');
    await step('Verify initial disabled ARIA attributes and focus prevention', async () => {
      expect(component.hasAttribute('disabled')).toBe(true);
      expect(component.getAttribute('aria-disabled')).toBe('true');
      expect(component.getAttribute('tabindex')).toBe('-1');
    });
    await step('Verify click events are ignored when disabled', async () => {
      await userEvent.click(component, {
        pointerEventsCheck: 0
      });
      expect(component.hasAttribute('selected')).toBe(true);
    });
  }
}`,...f.parameters?.docs?.source},description:{story:`Disabled state story validating disabled attributes and interaction suppression.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    hasBackground: true,
    disabled: false,
    ariaLabel: 'Custom success indicator',
    color: '#ffffff',
    size: '2.5rem',
    bg: '#10b981',
    borderColor: '#059669'
  }
}`,...p.parameters?.docs?.source},description:{story:`Sub-atomic style override configuration demonstrating all 4 custom hooks.`,...p.parameters?.docs?.description}}},m=[`Default`,`WithBackground`,`Disabled`,`CustomStyled`]}));h();export{p as CustomStyled,u as Default,f as Disabled,d as WithBackground,m as __namedExportsOrder,l as default,h as t};