import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{r,t as i}from"./if-defined-CceMvhO9.js";var a,o=e((()=>{a=`:host{display:inline-flex}kbd{font-family:var(--font-family);background:var(--ds-kbd-bg,var(--color-surface));border:var(--ds-kbd-border-width,var(--border-width-thin)) var(--border-style-solid) var(--ds-kbd-border-color,var(--color-kbd-border));border-radius:var(--ds-kbd-radius,var(--radius-sm));align-items:center;gap:var(--space-xs);box-sizing:border-box;font-weight:600;line-height:1;font-size:calc(10px * var(--font-scale-multiplier,1));color:var(--color-text-secondary);padding:3px 6px;display:inline-flex}.key{text-transform:uppercase}:host([a11y-dark-mode]) kbd{background:var(--ds-kbd-bg,var(--color-card-bg));border-color:var(--ds-kbd-border-color,var(--color-kbd-border));color:var(--color-text-primary)!important}:host([variant=inverted]) kbd{background:var(--ds-kbd-bg,var(--color-overlay-light));border-color:var(--ds-kbd-border-color,var(--color-tooltip-kbd-border));color:var(--color-white)}#combo-container:empty{display:none}:host([a11y-high-contrast]) kbd{color:#fff!important;border:var(--border-width-thin) var(--border-style-solid) #fff!important;background:#000!important}:host([a11y-dyslexia]) kbd{letter-spacing:.05em!important;word-spacing:.1em!important;font-family:Comic Sans MS,Comic Sans,cursive,sans-serif!important}@media (prefers-reduced-motion:reduce){kbd,*{transition-duration:0s!important;transition-delay:0s!important;animation-duration:0s!important;animation-delay:0s!important}}:host([a11y-reduce-motion]) kbd,:host([a11y-reduce-motion]) *{transition-duration:0s!important;transition-delay:0s!important;animation-duration:0s!important;animation-delay:0s!important}:host([a11y-forced-colors]) kbd{forced-color-adjust:none!important;color:canvastext!important;border:var(--border-width-thin) var(--border-style-solid) CanvasText!important;background:canvas!important}@media (forced-colors:active){kbd{forced-color-adjust:none!important;color:canvastext!important;border:var(--border-width-thin) var(--border-style-solid) CanvasText!important;background:canvas!important}}`})),s,c=e((()=>{o(),s=class extends HTMLElement{static get observedAttributes(){return[`variant`,`key`,`show-plus`]}constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.innerHTML=`<style>${a}</style><kbd><slot></slot><span id="combo-container"></span></kbd>`}connectedCallback(){this._observeRootAccessibility(),this.render()}disconnectedCallback(){this._themeObserver&&this._themeObserver.disconnect()}attributeChangedCallback(e,t,n){t!==n&&this.render()}render(){let e=this.shadowRoot.getElementById(`combo-container`);if(!e)return;let t=this.hasAttribute(`show-plus`),n=this.getAttribute(`key`);t&&n?e.innerHTML=`
        <span class="plus" aria-hidden="true">+</span>
        <span class="key">${n}</span>
      `:e.innerHTML=``}_observeRootAccessibility(){let e=this.ownerDocument.documentElement,t=()=>{this.toggleAttribute(`a11y-dark-mode`,e.classList.contains(`a11y-dark-mode`)),this.toggleAttribute(`a11y-high-contrast`,e.classList.contains(`a11y-high-contrast`)),this.toggleAttribute(`a11y-dyslexia`,e.classList.contains(`a11y-dyslexia`)),this.toggleAttribute(`a11y-large-text`,e.classList.contains(`a11y-large-text`)),this.toggleAttribute(`a11y-reduce-motion`,e.classList.contains(`a11y-reduce-motion`)),this.toggleAttribute(`a11y-focus-mode`,e.classList.contains(`a11y-focus-mode`)),this.toggleAttribute(`a11y-forced-colors`,e.classList.contains(`a11y-forced-colors`))};t(),this._themeObserver=new MutationObserver(t),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`class`]})}},customElements.get(`ds-kbd`)||customElements.define(`ds-kbd`,s)})),l,u,d,f,p,m;e((()=>{n(),i(),c(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={title:`Atoms/KBD [v1.0.0]`,component:`ds-kbd`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A presentational keyboard indicator used to render standalone key commands or multi-key combinations. Frequently embedded in tooltips, search palettes, and inline documentation.`}}},decorators:[e=>t`
      <div class="canvas-buffer" style="
        display: flex; 
        justify-content: center; 
        align-items: center; 
        box-sizing: border-box;
      ">
        ${e()}
      </div>
    `],argTypes:{variant:{name:`variant`,description:`Determines the visual rendering and thematic style variation parameters.`,control:{type:`select`},options:[`default`,`inverted`],table:{category:`Component: Core`,defaultValue:{summary:`default`}}},label:{name:`label`,description:`Slotted template content representing the modifier or primary key.`,control:{type:`select`},options:[`⌥ Option`,`⎇ Alt`,`⇧ Shift`,`⌘ Cmd`,`Ctrl`,`Esc`,`Backspace`],table:{category:`Component: Core`}},showPlus:{name:`showPlus`,description:`Toggles the addition of an internal combination operator.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`false`}}},key:{name:`key`,description:`The alphanumeric trailing key triggered in multi-key combination chains.`,control:`text`,if:{arg:`showPlus`},table:{category:`Component: Core`}},radius:{name:`radius`,description:`Sub-atomic modifier overriding corner bounding geometry variables.`,control:`text`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--radius-sm)`}}},backgroundColor:{name:`backgroundColor`,description:`Sub-atomic modifier overriding default backdrop pattern shading.`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-gray-xlight) / var(--color-overlay-light)`}}},borderWidth:{name:`borderWidth`,description:`Sub-atomic modifier overriding boundary stroke thickness.`,control:`text`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--border-width-thin)`}}},borderColor:{name:`borderColor`,description:`Sub-atomic modifier overriding frame boundary colors.`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-kbd-border) / var(--color-tooltip-kbd-border)`}}}},render:e=>{let n=[e.radius?`--ds-kbd-radius: ${e.radius};`:``,e.backgroundColor?`--ds-kbd-bg: ${e.backgroundColor};`:``,e.borderWidth?`--ds-kbd-border-width: ${e.borderWidth};`:``,e.borderColor?`--ds-kbd-border-color: ${e.borderColor};`:``].join(` `).trim();return t`
      <ds-kbd 
        variant=${e.variant||`default`}
        ?show-plus=${e.showPlus}
        key=${r(e.showPlus?e.key:void 0)}
        style=${r(n||void 0)}>
        ${e.label}
      </ds-kbd>
    `}},d={args:{variant:`default`,label:`Backspace`,showPlus:!1},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-kbd`);await t(`Verify structural attributes pass cleanly and combination parameters remain unattached`,async()=>{l(n.getAttribute(`variant`)).toBe(`default`),l(n.hasAttribute(`show-plus`)).toBe(!1),l(n.textContent.trim()).toBe(`Backspace`)}),await t(`Verify inner shadow root container layout primitives render correctly`,async()=>{let e=n.shadowRoot.querySelector(`.kbd`)||n.shadowRoot.firstElementChild;l(e).not.toBeNull()})}},f={args:{variant:`inverted`,label:`Esc`,showPlus:!1},parameters:{backgrounds:{default:`dark`}},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-kbd`);await t(`Verify inverse markup attributes match dark workspace targets`,async()=>{l(n.getAttribute(`variant`)).toBe(`inverted`),l(n.textContent.trim()).toBe(`Esc`)})}},p={args:{variant:`default`,label:`⇧ Shift`,showPlus:!0,key:`p`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-kbd`);await t(`Verify combination attributes pass cleanly to host component`,async()=>{l(n.hasAttribute(`show-plus`)).toBe(!0),l(n.getAttribute(`key`)).toBe(`p`)}),await t(`Verify dynamic operator and key elements pass into internal shadow scope`,async()=>{let e=n.shadowRoot.querySelector(`.key`);l(e).not.toBeNull(),l(e.textContent.trim()).toBe(`p`)})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    label: 'Backspace',
    showPlus: false
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-kbd');
    await step('Verify structural attributes pass cleanly and combination parameters remain unattached', async () => {
      expect(component.getAttribute('variant')).toBe('default');
      expect(component.hasAttribute('show-plus')).toBe(false);
      expect(component.textContent.trim()).toBe('Backspace');
    });
    await step('Verify inner shadow root container layout primitives render correctly', async () => {
      const primitive = component.shadowRoot.querySelector('.kbd') || component.shadowRoot.firstElementChild;
      expect(primitive).not.toBeNull();
    });
  }
}`,...d.parameters?.docs?.source},description:{story:`Standard baseline story setup validating content passing, tracking variables, and operational interaction logic.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inverted',
    label: 'Esc',
    showPlus: false
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-kbd');
    await step('Verify inverse markup attributes match dark workspace targets', async () => {
      expect(component.getAttribute('variant')).toBe('inverted');
      expect(component.textContent.trim()).toBe('Esc');
    });
  }
}`,...f.parameters?.docs?.source},description:{story:`Secondary inverted configuration mapped to transparent and overlay design tokens for dark context containers.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    label: '⇧ Shift',
    showPlus: true,
    key: 'p'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-kbd');
    await step('Verify combination attributes pass cleanly to host component', async () => {
      expect(component.hasAttribute('show-plus')).toBe(true);
      expect(component.getAttribute('key')).toBe('p');
    });
    await step('Verify dynamic operator and key elements pass into internal shadow scope', async () => {
      const internalKeySpan = component.shadowRoot.querySelector('.key');
      expect(internalKeySpan).not.toBeNull();
      expect(internalKeySpan.textContent.trim()).toBe('p');
    });
  }
}`,...p.parameters?.docs?.source},description:{story:`Multi-key combination chaining featuring a secondary alphanumeric key property and dynamic operator indicator.`,...p.parameters?.docs?.description}}},m=[`StandaloneKey`,`Inverted`,`MultiKeyCombination`]}))();export{f as Inverted,p as MultiKeyCombination,d as StandaloneKey,m as __namedExportsOrder,u as default};