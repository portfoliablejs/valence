import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{r,t as i}from"./if-defined-CceMvhO9.js";import{t as a}from"./Toggle-BaHVfDHK.js";var o,s,c,l,u,d,f,p;e((()=>{n(),i(),a(),{expect:o,userEvent:s,fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Atoms/Toggle [v1.0.0]`,component:`ds-toggle`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"`ds-toggle` is an universal interactive binary and text toggle switch layout atoms. Can be used for Mode Switchers (On/Off Code), \nenlarge font size (A/A+), and has `show-icon` for Accessibility."}}},decorators:[e=>t`
      <div class="canvas-buffer" style="padding: 40px; display: flex; justify-content: center; align-items: center; box-sizing: border-box;">
        ${e()}
      </div>
    `],args:{checked:!1,disabled:!1,showIcon:!0,textOn:``,textOff:``,ariaLabel:``,onToggleChange:c()},argTypes:{checked:{name:`checked`,description:`Controls the active boolean state of the toggle.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`false`}}},disabled:{name:`disabled`,description:`Suspends component interaction entirely.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`false`}}},showIcon:{name:`show-icon`,description:`Determines if the internal visual status indicator renders inside the sliding knob.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`true`}}},textOn:{name:`text-on`,description:`Label mapped explicitly to the active (checked) bounding zone.`,control:`text`,table:{category:`Component: Dynamic Text Layout`}},textOff:{name:`text-off`,description:`Label mapped explicitly to the passive (unchecked) bounding zone.`,control:`text`,table:{category:`Component: Dynamic Text Layout`}},ariaLabel:{name:`ariaLabel`,description:`Required screen reader descriptor mapped to the native hidden checkbox.`,control:`text`,table:{category:`Component: Accessibility`}},onToggleChange:{name:`ds-toggle-change`,action:`ds-toggle-change`,table:{category:`Events`}},toggleCheckedColor:{name:`checkedBackgroundColor`,description:`Sub-atomic modifier overriding the active state track fill (--ds-toggle-checked-bg).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`}}},render:e=>{let n=[e.toggleCheckedColor?`--ds-toggle-checked-bg: ${e.toggleCheckedColor};`:``].join(` `).trim();return t`
      <ds-toggle
        ?checked=${e.checked}
        ?disabled=${e.disabled}
        show-icon=${r(e.showIcon?`true`:`false`)}
        text-on=${r(e.textOn||void 0)}
        text-off=${r(e.textOff||void 0)}
        aria-label=${r(e.ariaLabel)}
        style=${r(n||void 0)}
        @ds-toggle-change=${t=>e.onToggleChange(t.detail)}>
      </ds-toggle>
    `}},u={args:{checked:!1,showIcon:!0,ariaLabel:`Enable standard notifications`},play:async({canvasElement:e,args:t,step:n})=>{let r=e.querySelector(`ds-toggle`),i=r.shadowRoot.querySelector(`.component-root`),a=r.shadowRoot.querySelector(`input`);await n(`Verify ARIA delegation clears host markup`,async()=>{o(r.getAttribute(`aria-label`)).toBeNull(),o(a.getAttribute(`aria-label`)).toBe(`Enable standard notifications`)}),await n(`Hover toggle to verify interaction feedback`,async()=>{await s.hover(i)}),await n(`Verify keyboard focus capability`,async()=>{a.focus(),o(r.shadowRoot.activeElement).toBe(a)}),await n(`Trigger layout activation via user event selection`,async()=>{await s.click(i),await new Promise(e=>setTimeout(e,0)),o(t.onToggleChange).toHaveBeenCalledWith({checked:!0})})}},d={args:{checked:!0,textOn:`Code`,textOff:`Code`,showIcon:!1,ariaLabel:`Toggle billing cycle`}},f={args:{checked:!1,textOn:`Active`,textOff:``,showIcon:!0,ariaLabel:`Status switch control panel`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    showIcon: true,
    ariaLabel: 'Enable standard notifications'
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const component = canvasElement.querySelector('ds-toggle');
    const root = component.shadowRoot.querySelector('.component-root');
    const input = component.shadowRoot.querySelector('input');
    await step('Verify ARIA delegation clears host markup', async () => {
      expect(component.getAttribute('aria-label')).toBeNull();
      expect(input.getAttribute('aria-label')).toBe('Enable standard notifications');
    });
    await step('Hover toggle to verify interaction feedback', async () => {
      await userEvent.hover(root);
    });
    await step('Verify keyboard focus capability', async () => {
      input.focus();
      expect(component.shadowRoot.activeElement).toBe(input);
    });
    await step('Trigger layout activation via user event selection', async () => {
      await userEvent.click(root);
      await new Promise(resolve => setTimeout(resolve, 0));
      expect(args.onToggleChange).toHaveBeenCalledWith({
        checked: true
      });
    });
  }
}`,...u.parameters?.docs?.source},description:{story:`Standard pill switch configuration verifying baseline operational parameters.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    textOn: 'Code',
    textOff: 'Code',
    showIcon: false,
    ariaLabel: 'Toggle billing cycle'
  }
}`,...d.parameters?.docs?.source},description:{story:`Subtle, programmatic dark overlay blend directly on the active track only when text mode 
is engaged, we deepen the underlying background color slightly, pushing the mathematical contrast ratio over the 4.5:1 line.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    textOn: 'Active',
    textOff: '',
    showIcon: true,
    ariaLabel: 'Status switch control panel'
  }
}`,...f.parameters?.docs?.source},description:{story:`Single state text block boundary layouts with absolute dynamic width adaptations.`,...f.parameters?.docs?.description}}},p=[`SwitchDefault`,`TextSegmentMode`,`TextSingleOnly`]}))();export{u as SwitchDefault,d as TextSegmentMode,f as TextSingleOnly,p as __namedExportsOrder,l as default};