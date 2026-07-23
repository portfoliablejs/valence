import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{r,t as i}from"./if-defined-CceMvhO9.js";var a,o=e((()=>{a=`:host{font-family:var(--font-family);box-sizing:border-box;display:inline-flex;position:relative}.slider-dot{width:var(--ds-slider-dot-size,var(--size-icon-sm,12px));height:var(--ds-slider-dot-size,var(--size-icon-sm,12px));border-radius:var(--ds-slider-dot-radius,var(--radius-circle));background-color:var(--ds-slider-dot-bg,var(--color-gray-xlight));border:var(--ds-slider-dot-border-width,var(--border-width-none)) var(--border-style-solid) var(--ds-slider-dot-border-color,transparent);cursor:pointer;box-sizing:border-box;transition:var(--component-transition,background-color var(--anim-normal) var(--ease-standard), transform var(--anim-fast) var(--anim-spring), border-color var(--anim-fast) var(--ease-standard));outline:none;flex-shrink:0;margin:0;padding:0}.slider-dot.active,:host([active=true]) .slider-dot{background-color:var(--ds-slider-dot-active-bg,var(--color-gray-dark));transform:scale(var(--btn-hover-scale,1.2))}.slider-dot:focus-visible{outline:var(--a11y-focus-outline,var(--border-width-medium) var(--border-style-solid) var(--color-accent));outline-offset:var(--a11y-focus-offset,2px)}.slider-dot:hover{background-color:var(--ds-slider-dot-hover-bg,var(--color-gray-med))}:host([a11y-dark-mode]) .slider-dot{background-color:var(--ds-slider-dot-bg,var(--color-gray-med))}:host([a11y-dark-mode]) .slider-dot.active,:host([a11y-dark-mode][active=true]) .slider-dot{background-color:var(--ds-slider-dot-active-bg,var(--color-white))}:host([a11y-high-contrast]) .slider-dot{border:var(--border-width-medium) var(--border-style-solid) var(--color-black)!important;color:var(--color-black)!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;background:0 0!important}:host([a11y-high-contrast]) .slider-dot.active,:host([a11y-high-contrast][active=true]) .slider-dot{background:var(--color-black)!important}:host([a11y-dyslexia]) .slider-dot{letter-spacing:.05em!important;word-spacing:.1em!important;font-family:Comic Sans MS,Comic Sans,cursive,sans-serif!important}@media (prefers-reduced-motion:reduce){.slider-dot,*{transition-duration:0s!important;transition-delay:0s!important;animation-duration:0s!important;animation-delay:0s!important}}:host([a11y-reduce-motion]) .slider-dot,:host([a11y-reduce-motion]) *{transition-duration:0s!important;transition-delay:0s!important;animation-duration:0s!important;animation-delay:0s!important}:host([a11y-forced-colors]) .slider-dot{forced-color-adjust:none!important;border:var(--border-width-thin) var(--border-style-solid) CanvasText!important;background-color:canvastext!important}:host([a11y-forced-colors]) .slider-dot.active,:host([a11y-forced-colors][active=true]) .slider-dot{forced-color-adjust:none!important;background-color:highlight!important;border-color:highlight!important}:host([a11y-forced-colors]) .slider-dot:focus-visible{outline-offset:2px!important;outline:3px solid highlight!important}@media (forced-colors:active){.slider-dot{forced-color-adjust:none!important;border:var(--border-width-thin) var(--border-style-solid) CanvasText!important;background-color:canvastext!important}.slider-dot.active,:host([active=true]) .slider-dot{forced-color-adjust:none!important;background-color:highlight!important;border-color:highlight!important}.slider-dot:focus-visible{outline-offset:2px!important;outline:3px solid highlight!important}}`})),s,c=e((()=>{o(),s=class extends HTMLElement{static get observedAttributes(){return[`active`,`aria-label`]}constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.innerHTML=`<style>${a}</style><button class="slider-dot" type="button"></button>`}connectedCallback(){this.buttonEl=this.shadowRoot.querySelector(`.slider-dot`),this._handleClick=this._handleClick.bind(this),this.buttonEl&&this.buttonEl.addEventListener(`click`,this._handleClick),this.updateAttributes(),this._observeRootAccessibility()}disconnectedCallback(){this.buttonEl&&this.buttonEl.removeEventListener(`click`,this._handleClick),this._themeObserver&&this._themeObserver.disconnect()}attributeChangedCallback(e,t,n){e===`aria-label`&&n===null||this.buttonEl&&t!==n&&this.updateAttributes()}_handleClick(e){this.dispatchEvent(new CustomEvent(`ds-dot-click`,{bubbles:!0,composed:!0,detail:{active:this.hasAttribute(`active`)&&this.getAttribute(`active`)!==`false`}}))}_observeRootAccessibility(){let e=this.ownerDocument.documentElement,t=()=>{this.toggleAttribute(`a11y-dark-mode`,e.classList.contains(`a11y-dark-mode`)),this.toggleAttribute(`a11y-high-contrast`,e.classList.contains(`a11y-high-contrast`)),this.toggleAttribute(`a11y-dyslexia`,e.classList.contains(`a11y-dyslexia`)),this.toggleAttribute(`a11y-large-text`,e.classList.contains(`a11y-large-text`)),this.toggleAttribute(`a11y-reduce-motion`,e.classList.contains(`a11y-reduce-motion`)),this.toggleAttribute(`a11y-forced-colors`,e.classList.contains(`a11y-forced-colors`))};t(),this._themeObserver=new MutationObserver(t),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`class`]})}updateAttributes(){let e=this.hasAttribute(`active`)&&this.getAttribute(`active`)!==`false`,t=this.getAttribute(`aria-label`)||`Go to slide`;this.buttonEl.className=`slider-dot${e?` active`:``}`,this.buttonEl.setAttribute(`aria-current`,e?`true`:`false`),t&&(this.buttonEl.setAttribute(`aria-label`,t),this.removeAttribute(`aria-label`))}},customElements.get(`ds-slider-dot`)||customElements.define(`ds-slider-dot`,s)})),l,u,d,f,p,m,h;e((()=>{n(),i(),c(),{expect:l,fn:u,userEvent:d}=__STORYBOOK_MODULE_TEST__,f={title:`Atoms/Slider Dot [v1.0.0]`,component:`ds-slider-dot`,tags:[`autodocs`],parameters:{layout:`centered`,controls:{sort:`requiredFirst`},docs:{description:{component:"An interactive pagination dot used to navigate between slides. It is fully keyboard accessible, utilizing a native `<button>` element internally to handle focus and `Enter`/`Space` key presses automatically."}}},decorators:[e=>t`
      <div class="canvas-buffer" style="
        display: flex; 
        justify-content: center; 
        align-items: center; 
        box-sizing: border-box;
      ">
        ${e()}
      </div>
    `],argTypes:{active:{name:`active`,description:`Sets the dot to its active, scaled-up state.`,control:`boolean`,table:{category:`SliderDot: Core`,defaultValue:{summary:`false`}}},ariaLabel:{name:`ariaLabel`,description:`Crucial accessibility label delegated directly to internal primitives to keep host clean.`,control:`text`,table:{category:`SliderDot: Core`,defaultValue:{summary:`Go to slide 2`}}},size:{name:`size`,description:`Sub-atomic modifier overriding default diameter geometry (--ds-slider-dot-size).`,control:`text`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`12px`}}},backgroundColor:{name:`backgroundColor`,description:`Sub-atomic modifier overriding default baseline background color (--ds-slider-dot-bg).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-gray-xlight)`}}},activeColor:{name:`activeColor`,description:`Sub-atomic modifier overriding active state background color (--ds-slider-dot-active-bg).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-gray-dark)`}}},onClick:{name:`onClick`,description:`Fires when clicked. View output in the Storybook "Actions" tab.`,action:`clicked`,table:{category:`SUB-ATOMIC PROPS`,subcategory:`Events`}}},args:{onClick:u()},render:e=>{let n=[e.size?`--ds-slider-dot-size: ${e.size};`:``,e.backgroundColor?`--ds-slider-dot-bg: ${e.backgroundColor};`:``,e.activeColor?`--ds-slider-dot-active-bg: ${e.activeColor};`:``].join(` `).trim();return t`
      <ds-slider-dot
        ?active=${e.active}
        aria-label=${r(e.ariaLabel)}
        style=${r(n||void 0)}
        @ds-dot-click=${e.onClick}>
      </ds-slider-dot>
    `}},p={args:{active:!1,ariaLabel:`Go to slide 2`},play:async({canvasElement:e,step:t,args:n})=>{let r=e.querySelector(`ds-slider-dot`);await t(`Verify structural parameters pass cleanly and host scrubbing executes flawlessly`,async()=>{l(r.hasAttribute(`active`)&&r.getAttribute(`active`)!==`false`).toBe(!1),l(r.getAttribute(`aria-label`)).toBeNull()}),await t(`Verify inner shadow layout primitives receive delegated aria attributes`,async()=>{let e=r.shadowRoot.querySelector(`.slider-dot`);l(e.getAttribute(`aria-label`)).toBe(`Go to slide 2`),l(e.getAttribute(`aria-current`)).toBe(`false`)}),await t(`Verify click events trigger custom ds-dot-click event`,async()=>{let e=r.shadowRoot.querySelector(`.slider-dot`);await d.click(e),l(n.onClick).toHaveBeenCalled()})}},m={args:{active:!0,ariaLabel:`Current slide, slide 1`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-slider-dot`);await t(`Verify active state reflection on internal shadow DOM primitive`,async()=>{let e=n.shadowRoot.querySelector(`.slider-dot`);l(e.classList.contains(`active`)).toBe(!0),l(e.getAttribute(`aria-current`)).toBe(`true`),l(e.getAttribute(`aria-label`)).toBe(`Current slide, slide 1`)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Standard baseline story setup validating content passing, tracking variables, and operational interaction logic.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Validates the component when rendered in an active slide pagination state.`,...m.parameters?.docs?.description}}},h=[`Inactive`,`Active`]}))();export{m as Active,p as Inactive,h as __namedExportsOrder,f as default};