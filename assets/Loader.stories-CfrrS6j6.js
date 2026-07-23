import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{r,t as i}from"./if-defined-CceMvhO9.js";import{t as a}from"./Loader-DPPtVI4E.js";var o,s,c,l,u;e((()=>{n(),i(),a(),{expect:o}=__STORYBOOK_MODULE_TEST__,s={title:`Atoms/Loader [v1.0.0]`,component:`ds-loader`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:'`ds-loader` is a circular SVG spinner used to indicate loading or buffering states. It includes `role="status"` and `aria-live="polite"` to ensure screen readers announce the loading state properly.'}}},decorators:[e=>t`
      <div class="canvas-buffer" style="
        display: flex; 
        justify-content: center; 
        align-items: center; 
        box-sizing: border-box;
      ">
        ${e()}
      </div>
    `],argTypes:{visible:{name:`visible`,description:`Toggles the opacity and visibility of the loader.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`true`}}},ariaLabel:{name:`ariaLabel`,description:`Crucial accessibility label delegated directly to internal primitives to keep host clean.`,control:`text`,table:{category:`Component: Core`,defaultValue:{summary:`Video is buffering...`}}},size:{name:`size`,description:`Controls the outer bounding box dimensions of the spinner container.`,control:`text`,table:{category:`Component: Core`,defaultValue:{summary:`48px`}}},backgroundColor:{name:`backgroundColor`,description:`Sub-atomic modifier overriding default backdrop pattern shading.`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-bg)`}}},iconColor:{name:`iconColor`,description:`Sub-atomic modifier overriding default stroke icon foreground color.`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-text-primary)`}}}},render:e=>{let n=[e.backgroundColor?`--ds-loader-bg: ${e.backgroundColor};`:``,e.iconColor?`--ds-loader-color: ${e.iconColor};`:``].join(` `).trim();return t`
      <ds-loader
        visible=${e.visible?`true`:`false`}
        aria-label=${r(e.ariaLabel)}
        size=${r(e.size)}
        style=${r(n||void 0)}>
      </ds-loader>
    `}},c={args:{visible:!0,ariaLabel:`Video is buffering...`,size:`48px`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-loader`);await t(`Verify structural attributes pass cleanly and host scrubbing executes flawlessly`,async()=>{o(n.getAttribute(`visible`)).toBe(`true`),o(n.getAttribute(`aria-label`)).toBeNull()}),await t(`Verify inner shadow layout primitives receive the delegated attribute and accessible text`,async()=>{let e=n.shadowRoot.querySelector(`.video-loader`),t=n.shadowRoot.querySelector(`.sr-only`);o(e.getAttribute(`aria-label`)).toBe(`Video is buffering...`),o(t.textContent).toBe(`Video is buffering...`),o(e.getAttribute(`role`)).toBe(`status`)})}},l={args:{...c.args,visible:!1,ariaLabel:`Content loaded`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-loader`);await t(`Verify hidden aria state applied to internal shadow primitive`,async()=>{let e=n.shadowRoot.querySelector(`.video-loader`);o(e.getAttribute(`aria-hidden`)).toBe(`true`)})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    ariaLabel: 'Video is buffering...',
    size: '48px'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-loader');
    await step('Verify structural attributes pass cleanly and host scrubbing executes flawlessly', async () => {
      expect(component.getAttribute('visible')).toBe('true');
      expect(component.getAttribute('aria-label')).toBeNull();
    });
    await step('Verify inner shadow layout primitives receive the delegated attribute and accessible text', async () => {
      const loaderEl = component.shadowRoot.querySelector('.video-loader');
      const srOnlyEl = component.shadowRoot.querySelector('.sr-only');
      expect(loaderEl.getAttribute('aria-label')).toBe('Video is buffering...');
      expect(srOnlyEl.textContent).toBe('Video is buffering...');
      expect(loaderEl.getAttribute('role')).toBe('status');
    });
  }
}`,...c.parameters?.docs?.source},description:{story:`Standard baseline story setup validating content passing, tracking variables, and operational interaction logic.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...DefaultBaseline.args,
    visible: false,
    ariaLabel: 'Content loaded'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-loader');
    await step('Verify hidden aria state applied to internal shadow primitive', async () => {
      const loaderEl = component.shadowRoot.querySelector('.video-loader');
      expect(loaderEl.getAttribute('aria-hidden')).toBe('true');
    });
  }
}`,...l.parameters?.docs?.source},description:{story:`Validates state updates when the component enters a hidden configuration.`,...l.parameters?.docs?.description}}},u=[`DefaultBaseline`,`HiddenState`]}))();export{c as DefaultBaseline,l as HiddenState,u as __namedExportsOrder,s as default};