import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{r,t as i}from"./if-defined-2H52cT6K.js";import{t as a}from"./SliderDot-DzCFPTbO.js";var o,s,c,l,u,d,f;e((()=>{n(),i(),a(),{expect:o,fn:s,userEvent:c}=__STORYBOOK_MODULE_TEST__,l={title:`Atoms/Slider Dot`,component:`ds-slider-dot`,tags:[`autodocs`],parameters:{layout:`centered`,controls:{sort:`requiredFirst`},docs:{description:{component:"An interactive pagination dot used to navigate between slides. It is fully keyboard accessible, utilizing a native `<button>` element internally to handle focus and `Enter`/`Space` key presses automatically."}}},decorators:[e=>t`
      <div class="canvas-buffer" style="
        display: flex; 
        justify-content: center; 
        align-items: center; 
        box-sizing: border-box;
      ">
        ${e()}
      </div>
    `],argTypes:{active:{name:`active`,description:`Sets the dot to its active, scaled-up state.`,control:`boolean`,table:{category:`SliderDot: Core`,defaultValue:{summary:`false`}}},ariaLabel:{name:`ariaLabel`,description:`Crucial accessibility label delegated directly to internal primitives to keep host clean.`,control:`text`,table:{category:`SliderDot: Core`,defaultValue:{summary:`Go to slide 2`}}},size:{name:`size`,description:`Sub-atomic modifier overriding default diameter geometry.`,control:`text`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`12px`}}},backgroundColor:{name:`backgroundColor`,description:`Sub-atomic modifier overriding default baseline background color.`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-gray-xlight)`}}},activeColor:{name:`activeColor`,description:`Sub-atomic modifier overriding active state background color.`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-gray-dark)`}}},onClick:{name:`onClick`,description:`Fires when clicked. View output in the Storybook "Actions" tab.`,action:`clicked`,table:{category:`SUB-ATOMIC PROPS`,subcategory:`Events`}}},args:{onClick:s()},render:e=>{let n=[e.size?`--custom-size: ${e.size};`:``,e.backgroundColor?`--custom-bg: ${e.backgroundColor};`:``,e.activeColor?`--custom-active-bg: ${e.activeColor};`:``].join(` `).trim();return t`
      <ds-slider-dot
        ?active=${e.active}
        aria-label=${r(e.ariaLabel)}
        style=${r(n||void 0)}
        @ds-dot-click=${e.onClick}>
      </ds-slider-dot>
    `}},u={args:{active:!1,ariaLabel:`Go to slide 2`},play:async({canvasElement:e,step:t,args:n})=>{let r=e.querySelector(`ds-slider-dot`);await t(`Verify structural parameters pass cleanly and host scrubbing executes flawlessly`,async()=>{o(r.hasAttribute(`active`)&&r.getAttribute(`active`)!==`false`).toBe(!1),o(r.getAttribute(`aria-label`)).toBeNull()}),await t(`Verify inner shadow layout primitives receive delegated aria attributes`,async()=>{let e=r.shadowRoot.querySelector(`.slider-dot`);o(e.getAttribute(`aria-label`)).toBe(`Go to slide 2`),o(e.getAttribute(`aria-current`)).toBe(`false`)}),await t(`Verify click events trigger custom ds-dot-click event`,async()=>{let e=r.shadowRoot.querySelector(`.slider-dot`);await c.click(e),o(n.onClick).toHaveBeenCalled()})}},d={args:{active:!0,ariaLabel:`Current slide, slide 1`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-slider-dot`);await t(`Verify active state reflection on internal shadow DOM primitive`,async()=>{let e=n.shadowRoot.querySelector(`.slider-dot`);o(e.classList.contains(`active`)).toBe(!0),o(e.getAttribute(`aria-current`)).toBe(`true`),o(e.getAttribute(`aria-label`)).toBe(`Current slide, slide 1`)})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    active: false,
    ariaLabel: 'Go to slide 2'
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const component = canvasElement.querySelector('ds-slider-dot');
    await step('Verify structural parameters pass cleanly and host scrubbing executes flawlessly', async () => {
      expect(component.hasAttribute('active') && component.getAttribute('active') !== 'false').toBe(false);
      expect(component.getAttribute('aria-label')).toBeNull(); // Confirms attribute host-purging worked
    });
    await step('Verify inner shadow layout primitives receive delegated aria attributes', async () => {
      const buttonEl = component.shadowRoot.querySelector('.slider-dot');
      expect(buttonEl.getAttribute('aria-label')).toBe('Go to slide 2');
      expect(buttonEl.getAttribute('aria-current')).toBe('false');
    });
    await step('Verify click events trigger custom ds-dot-click event', async () => {
      const buttonEl = component.shadowRoot.querySelector('.slider-dot');
      await userEvent.click(buttonEl);
      expect(args.onClick).toHaveBeenCalled();
    });
  }
}`,...u.parameters?.docs?.source},description:{story:`Standard baseline story setup validating content passing, tracking variables, and operational interaction logic.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    active: true,
    ariaLabel: 'Current slide, slide 1'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-slider-dot');
    await step('Verify active state reflection on internal shadow DOM primitive', async () => {
      const buttonEl = component.shadowRoot.querySelector('.slider-dot');
      expect(buttonEl.classList.contains('active')).toBe(true);
      expect(buttonEl.getAttribute('aria-current')).toBe('true');
      expect(buttonEl.getAttribute('aria-label')).toBe('Current slide, slide 1');
    });
  }
}`,...d.parameters?.docs?.source},description:{story:`Validates the component when rendered in an active slide pagination state.`,...d.parameters?.docs?.description}}},f=[`Inactive`,`Active`]}))();export{d as Active,u as Inactive,f as __namedExportsOrder,l as default};