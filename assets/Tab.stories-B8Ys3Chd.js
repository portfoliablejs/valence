import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{r,t as i}from"./if-defined-CceMvhO9.js";import{t as a}from"./Tab-C7J2fqkF.js";var o,s,c,l,u,d,f;e((()=>{n(),i(),a(),{expect:o,fn:s,userEvent:c}=__STORYBOOK_MODULE_TEST__,l={title:`Atoms/Tab [v1.0.0]`,component:`ds-tab`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:'An interactive navigation tab control designed for switching views within a tablist widget. Fully accessible with dynamic `role="tab"`, `aria-selected`, and `tabindex` state tracking.'}}},decorators:[e=>t`
      <div 
        class="canvas-buffer" 
        role="tablist" 
        aria-label="Tab Navigation Container" 
        style="
          display: flex; 
          justify-content: center; 
          align-items: center; 
          box-sizing: border-box;
        ">
        ${e()}
      </div>
    `],argTypes:{label:{name:`label`,description:`Slotted template content or attribute label delivered cleanly to internal primitives.`,control:`text`,table:{category:`Component: Core`}},active:{name:`active`,description:`Controls the selected visual state and aria-selected tracking parameter.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`false`}}},disabled:{name:`disabled`,description:`Forces non-actionable interaction parameters across the tab button surface.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`false`}}},ariaLabel:{name:`ariaLabel`,description:`Crucial accessibility label delegated directly to internal primitives to keep host clean.`,control:`text`,table:{category:`Component: Core`}},radius:{name:`radius`,description:`Sub-atomic modifier overriding corner bounding geometry variables (--ds-tab-radius).`,control:`text`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--radius-md)`}}},textColor:{name:`textColor`,description:`Sub-atomic modifier overriding default baseline tab text color (--ds-tab-color).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-text-secondary)`}}},activeColor:{name:`activeColor`,description:`Sub-atomic modifier overriding active state background shading (--ds-tab-active-bg).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-black)`}}}},args:{onClick:s()},render:e=>{let n=[e.radius?`--ds-tab-radius: ${e.radius};`:``,e.textColor?`--ds-tab-color: ${e.textColor};`:``,e.activeColor?`--ds-tab-active-bg: ${e.activeColor};`:``].join(` `).trim();return t`
      <ds-tab
        label=${r(e.label)}
        ?active=${e.active}
        ?disabled=${e.disabled}
        aria-label=${r(e.ariaLabel)}
        style=${r(n||void 0)}
        @ds-tab-click=${e.onClick}>
      </ds-tab>
    `}},u={args:{label:`Project Dashboard`,active:!1,disabled:!1,ariaLabel:`Project Dashboard View Tab`},play:async({canvasElement:e,step:t,args:n})=>{let r=e.querySelector(`ds-tab`);await t(`Verify structural parameters pass cleanly and host scrubbing executes flawlessly`,async()=>{o(r.hasAttribute(`active`)&&r.getAttribute(`active`)!==`false`).toBe(!1),o(r.getAttribute(`aria-label`)).toBeNull()}),await t(`Verify inner shadow layout primitives receive delegated ARIA attributes and tabindex`,async()=>{let e=r.shadowRoot.querySelector(`button`);o(e.getAttribute(`role`)).toBe(`tab`),o(e.getAttribute(`aria-selected`)).toBe(`false`),o(e.getAttribute(`tabindex`)).toBe(`-1`),o(e.getAttribute(`aria-label`)).toBe(`Project Dashboard View Tab`),o(e.textContent).toBe(`Project Dashboard`)}),await t(`Verify click events dispatch the custom ds-tab-click event payload`,async()=>{let e=r.shadowRoot.querySelector(`button`);await c.click(e),o(n.onClick).toHaveBeenCalled()})}},d={args:{label:`Project History`,active:!0,disabled:!1,ariaLabel:`Project History View Tab`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-tab`);await t(`Verify active ARIA state and focusable tabindex on inner button primitive`,async()=>{let e=n.shadowRoot.querySelector(`button`);o(e.classList.contains(`active`)).toBe(!0),o(e.getAttribute(`aria-selected`)).toBe(`true`),o(e.getAttribute(`tabindex`)).toBe(`0`),o(e.getAttribute(`aria-label`)).toBe(`Project History View Tab`)})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Project Dashboard',
    active: false,
    disabled: false,
    ariaLabel: 'Project Dashboard View Tab'
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const component = canvasElement.querySelector('ds-tab');
    await step('Verify structural parameters pass cleanly and host scrubbing executes flawlessly', async () => {
      expect(component.hasAttribute('active') && component.getAttribute('active') !== 'false').toBe(false);
      expect(component.getAttribute('aria-label')).toBeNull(); // Confirms attribute host-purging worked
    });
    await step('Verify inner shadow layout primitives receive delegated ARIA attributes and tabindex', async () => {
      const buttonEl = component.shadowRoot.querySelector('button');
      expect(buttonEl.getAttribute('role')).toBe('tab');
      expect(buttonEl.getAttribute('aria-selected')).toBe('false');
      expect(buttonEl.getAttribute('tabindex')).toBe('-1');
      expect(buttonEl.getAttribute('aria-label')).toBe('Project Dashboard View Tab');
      expect(buttonEl.textContent).toBe('Project Dashboard');
    });
    await step('Verify click events dispatch the custom ds-tab-click event payload', async () => {
      const buttonEl = component.shadowRoot.querySelector('button');
      await userEvent.click(buttonEl);
      expect(args.onClick).toHaveBeenCalled();
    });
  }
}`,...u.parameters?.docs?.source},description:{story:`Standard baseline story setup validating content passing, tracking variables, and operational interaction logic.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Project History',
    active: true,
    disabled: false,
    ariaLabel: 'Project History View Tab'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-tab');
    await step('Verify active ARIA state and focusable tabindex on inner button primitive', async () => {
      const buttonEl = component.shadowRoot.querySelector('button');
      expect(buttonEl.classList.contains('active')).toBe(true);
      expect(buttonEl.getAttribute('aria-selected')).toBe('true');
      expect(buttonEl.getAttribute('tabindex')).toBe('0');
      expect(buttonEl.getAttribute('aria-label')).toBe('Project History View Tab');
    });
  }
}`,...d.parameters?.docs?.source},description:{story:`Active tab state configuration verifying active CSS classes, aria-selected="true", and tabindex="0".`,...d.parameters?.docs?.description}}},f=[`Default`,`Active`]}))();export{d as Active,u as Default,f as __namedExportsOrder,l as default};