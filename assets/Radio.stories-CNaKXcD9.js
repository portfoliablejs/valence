import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{r,t as i}from"./if-defined-2H52cT6K.js";import{t as a}from"./Radio-EaFF5nsn.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i(),a(),{expect:o,userEvent:s,fireEvent:c}=__STORYBOOK_MODULE_TEST__,l={title:`Atoms/Radio`,component:`ds-radio`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A minimalist presentational vector graphic atom used to indicate single-select radio button choices. Features spring-physics animations, full keyboard/click toggling, disabled/invalid states, accessibility observer sync, and sub-atomic style overrides.`}}},decorators:[e=>t`
      <div class="canvas-buffer" style="
        display: flex; 
        justify-content: center; 
        align-items: center; 
        box-sizing: border-box;
      ">
        ${e()}
      </div>
    `],argTypes:{selected:{name:`selected`,description:`Toggles the active selection state and animated appearance of the radio inner dot.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`false`}}},disabled:{name:`disabled`,description:`Disables user interactions and applies muted visual opacity tokens.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`false`}}},invalid:{name:`invalid`,description:`Applies error state styling using --color-error for form validation feedback.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`false`}}},ariaLabel:{name:`ariaLabel`,description:`Crucial accessibility label assigned for screen reader announcements.`,control:`text`,table:{category:`Component: Core`}},color:{name:`color`,description:`Sub-atomic modifier overriding default SVG stroke and fill vector colors.`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-accent)`}}},size:{name:`size`,description:`Sub-atomic modifier overriding outer bounding box dimensions.`,control:`text`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--size-icon-sm)`}}}},render:e=>{let n=[e.color?`--custom-color: ${e.color};`:``,e.size?`--custom-size: ${e.size};`:``].join(` `).trim();return t`
      <ds-radio
        ?selected=${e.selected}
        ?disabled=${e.disabled}
        ?invalid=${e.invalid}
        aria-label=${r(e.ariaLabel)}
        style=${r(n||void 0)}>
      </ds-radio>
    `}},u={args:{selected:!1,disabled:!1,invalid:!1,ariaLabel:`Unselected radio option`}},d={args:{selected:!0,disabled:!1,invalid:!1,ariaLabel:`Selected radio option`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-radio`);await t(`Verify initial selected state and ARIA attributes`,async()=>{o(n.hasAttribute(`selected`)).toBe(!0),o(n.getAttribute(`aria-checked`)).toBe(`true`)}),await t(`Simulate click to unselect`,async()=>{await s.click(n),o(n.hasAttribute(`selected`)).toBe(!1),o(n.getAttribute(`aria-checked`)).toBe(`false`)}),await t(`Simulate keyboard spacebar press to re-select`,async()=>{c.keyDown(n,{key:` `,code:`Space`}),o(n.hasAttribute(`selected`)).toBe(!0),o(n.getAttribute(`aria-checked`)).toBe(`true`)})}},f={args:{selected:!0,disabled:!0,invalid:!1,ariaLabel:`Disabled radio choice`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-radio`);await t(`Verify disabled attributes and focus prevention`,async()=>{o(n.hasAttribute(`disabled`)).toBe(!0),o(n.getAttribute(`aria-disabled`)).toBe(`true`),o(n.getAttribute(`tabindex`)).toBe(`-1`)}),await t(`Verify interactions are suppressed when disabled`,async()=>{await s.click(n,{pointerEventsCheck:0}),o(n.hasAttribute(`selected`)).toBe(!0)})}},p={args:{selected:!1,disabled:!1,invalid:!0,ariaLabel:`Selection required`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-radio`);await t(`Verify invalid attribute reflection`,async()=>{o(n.getAttribute(`aria-invalid`)).toBe(`true`)})}},m={args:{selected:!0,disabled:!1,invalid:!1,ariaLabel:`Custom success radio`,color:`var(--color-success)`,size:`var(--size-icon-xl)`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false,
    invalid: false,
    ariaLabel: 'Unselected radio option'
  }
}`,...u.parameters?.docs?.source},description:{story:`State 1: Unselected / Rest State`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    disabled: false,
    invalid: false,
    ariaLabel: 'Selected radio option'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-radio');
    await step('Verify initial selected state and ARIA attributes', async () => {
      expect(component.hasAttribute('selected')).toBe(true);
      expect(component.getAttribute('aria-checked')).toBe('true');
    });
    await step('Simulate click to unselect', async () => {
      await userEvent.click(component);
      expect(component.hasAttribute('selected')).toBe(false);
      expect(component.getAttribute('aria-checked')).toBe('false');
    });
    await step('Simulate keyboard spacebar press to re-select', async () => {
      fireEvent.keyDown(component, {
        key: ' ',
        code: 'Space'
      });
      expect(component.hasAttribute('selected')).toBe(true);
      expect(component.getAttribute('aria-checked')).toBe('true');
    });
  }
}`,...d.parameters?.docs?.source},description:{story:`State 2: Selected State with automated interaction test`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    disabled: true,
    invalid: false,
    ariaLabel: 'Disabled radio choice'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-radio');
    await step('Verify disabled attributes and focus prevention', async () => {
      expect(component.hasAttribute('disabled')).toBe(true);
      expect(component.getAttribute('aria-disabled')).toBe('true');
      expect(component.getAttribute('tabindex')).toBe('-1');
    });
    await step('Verify interactions are suppressed when disabled', async () => {
      await userEvent.click(component, {
        pointerEventsCheck: 0
      });
      expect(component.hasAttribute('selected')).toBe(true);
    });
  }
}`,...f.parameters?.docs?.source},description:{story:`State 3: Disabled Unselected & Selected States`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    disabled: false,
    invalid: true,
    ariaLabel: 'Selection required'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-radio');
    await step('Verify invalid attribute reflection', async () => {
      expect(component.getAttribute('aria-invalid')).toBe('true');
    });
  }
}`,...p.parameters?.docs?.source},description:{story:`State 4: Invalid / Validation Error State`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    disabled: false,
    invalid: false,
    ariaLabel: 'Custom success radio',
    color: 'var(--color-success)',
    size: 'var(--size-icon-xl)'
  }
}`,...m.parameters?.docs?.source},description:{story:`State 5: Sub-Atomic Styled Custom Tokens Override`,...m.parameters?.docs?.description}}},h=[`Unselected`,`Selected`,`Disabled`,`InvalidState`,`CustomStyled`]}))();export{m as CustomStyled,f as Disabled,p as InvalidState,d as Selected,u as Unselected,h as __namedExportsOrder,l as default};