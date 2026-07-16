import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{r,t as i}from"./if-defined-2H52cT6K.js";import{t as a}from"./Button-BPRmLUND.js";var o,s=e((()=>{o=`:host{width:max-content;max-width:100%;z-index:var(--z-max,10000);opacity:0;visibility:hidden;transition:var(--component-transition,opacity var(--anim-slow) var(--ease-fluid), transform var(--anim-slow) var(--ease-fluid), visibility var(--anim-slow) var(--ease-fluid));font-family:var(--font-family);box-sizing:border-box;margin:0 auto;display:inline-block;position:relative;transform:translateY(-16px)}:host([visible=true]){opacity:1;visibility:visible;transform:translateY(0)}.toast-container{background:var(--custom-bg,var(--color-bg));color:var(--custom-color,var(--color-text-primary));border:var(--custom-border-width,var(--border-width-thin)) var(--border-style-solid) var(--custom-border-color,var(--color-card-border));padding:var(--custom-padding,var(--space-xs) var(--space-md));border-radius:var(--custom-radius,var(--radius-pill));font-size:calc(13px * var(--font-scale-multiplier,1));box-shadow:var(--shadow-lg);align-items:center;gap:var(--space-sm);cursor:pointer;box-sizing:border-box;min-height:36px;transition:transform var(--anim-fast) var(--ease-fluid);font-weight:500;display:flex}.toast-container:has(.toast-close-btn:not([hidden])){padding-left:var(--space-xs,4px)}.toast-container:has(.toast-close-btn[hidden]){padding-left:var(--space-lg,16px)}.toast-container:has(.toast-never-btn:not([hidden])){padding-right:var(--space-md,12px)}.toast-container:has(.toast-never-btn[hidden]){padding-right:var(--space-lg,16px)}.toast-container:hover{transform:translateY(-2px)}.toast-close-btn{flex-shrink:0}.toast-close-btn[hidden],.toast-never-btn[hidden]{display:none!important}.toast-text{white-space:nowrap;display:inline-block}.toast-never-btn{white-space:nowrap;opacity:var(--opacity-high);transition:opacity var(--anim-fast) var(--ease-fluid);flex-shrink:0}.toast-never-btn:hover{opacity:var(--opacity-solid,1)}:host([a11y-dark-mode]) .toast-container{background-color:var(--custom-bg,var(--color-card-bg));color:var(--color-white);border-color:var(--color-surface-border)}:host([a11y-high-contrast]) .toast-container{color:#fff!important;border:var(--border-width-medium) var(--border-style-solid) #fff!important;box-shadow:none!important;background:#000!important}:host([a11y-dyslexia]) .toast-container{letter-spacing:.05em!important;word-spacing:.1em!important;font-family:Comic Sans MS,Comic Sans,cursive,sans-serif!important}@media (prefers-reduced-motion:reduce){:host,.toast-container,*{transition-duration:0s!important;transition-delay:0s!important;animation-duration:0s!important}}:host([a11y-reduce-motion]),:host([a11y-reduce-motion]) .toast-container,:host([a11y-reduce-motion]) *{transition-duration:0s!important;transition-delay:0s!important;animation-duration:0s!important}:host([a11y-forced-colors]) .toast-container{forced-color-adjust:none!important;color:canvastext!important;border:var(--border-width-thin) var(--border-style-solid) CanvasText!important;background-color:canvas!important}@media (forced-colors:active){.toast-container{forced-color-adjust:none!important;color:canvastext!important;border:var(--border-width-thin) var(--border-style-solid) CanvasText!important;background-color:canvas!important}}`})),c,l=e((()=>{s(),a(),c=class extends HTMLElement{static get observedAttributes(){return[`visible`,`aria-label`,`case-title`,`show-close`,`show-never-show`]}constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.innerHTML=`<style>${o}</style><div class="toast-container" role="status" aria-live="polite" tabindex="0"><ds-button variant="icon" icon="close" aria-label="Close notification" class="toast-close-btn" hidden></ds-button><span class="toast-text"><slot></slot></span><ds-button variant="text" class="toast-never-btn" hidden>Never show this again</ds-button></div>`,this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleNeverShow=this._handleNeverShow.bind(this)}connectedCallback(){this.containerEl=this.shadowRoot.querySelector(`.toast-container`),this.textEl=this.shadowRoot.querySelector(`.toast-text`),this.closeBtnEl=this.shadowRoot.querySelector(`.toast-close-btn`),this.neverBtnEl=this.shadowRoot.querySelector(`.toast-never-btn`),this.containerEl&&this.containerEl.addEventListener(`click`,this._handleClick),this.closeBtnEl&&this.closeBtnEl.addEventListener(`click`,this._handleClose),this.neverBtnEl&&this.neverBtnEl.addEventListener(`click`,this._handleNeverShow),this.updateAttributes(),this._observeRootAccessibility()}disconnectedCallback(){this.containerEl&&this.containerEl.removeEventListener(`click`,this._handleClick),this.closeBtnEl&&this.closeBtnEl.removeEventListener(`click`,this._handleClose),this.neverBtnEl&&this.neverBtnEl.removeEventListener(`click`,this._handleNeverShow),this._themeObserver&&this._themeObserver.disconnect()}attributeChangedCallback(e,t,n){e===`aria-label`&&n===null||this.containerEl&&t!==n&&this.updateAttributes()}_handleClick(e){this.dispatchEvent(new CustomEvent(`ds-toast-click`,{bubbles:!0,composed:!0,detail:{visible:this.getAttribute(`visible`)===`true`}}))}_handleClose(e){e.stopPropagation(),this.setAttribute(`visible`,`false`),this.dispatchEvent(new CustomEvent(`ds-toast-close`,{bubbles:!0,composed:!0}))}_handleNeverShow(e){e.stopPropagation(),this.setAttribute(`visible`,`false`),this.dispatchEvent(new CustomEvent(`ds-toast-never-show`,{bubbles:!0,composed:!0}))}_observeRootAccessibility(){let e=this.ownerDocument.documentElement,t=()=>{this.toggleAttribute(`a11y-dark-mode`,e.classList.contains(`a11y-dark-mode`)),this.toggleAttribute(`a11y-high-contrast`,e.classList.contains(`a11y-high-contrast`)),this.toggleAttribute(`a11y-dyslexia`,e.classList.contains(`a11y-dyslexia`)),this.toggleAttribute(`a11y-large-text`,e.classList.contains(`a11y-large-text`)),this.toggleAttribute(`a11y-reduce-motion`,e.classList.contains(`a11y-reduce-motion`)),this.toggleAttribute(`a11y-focus-mode`,e.classList.contains(`a11y-focus-mode`)),this.toggleAttribute(`a11y-forced-colors`,e.classList.contains(`a11y-forced-colors`))};t(),this._themeObserver=new MutationObserver(t),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`class`]})}updateAttributes(){let e=this.getAttribute(`aria-label`)||`Notification`,t=this.getAttribute(`case-title`),n=this.hasAttribute(`show-close`)&&this.getAttribute(`show-close`)!==`false`,r=this.hasAttribute(`show-never-show`)&&this.getAttribute(`show-never-show`)!==`false`;t&&this.textEl&&(this.textEl.textContent=t),this.closeBtnEl&&this.closeBtnEl.toggleAttribute(`hidden`,!n),this.neverBtnEl&&this.neverBtnEl.toggleAttribute(`hidden`,!r),e&&this.containerEl&&(this.containerEl.setAttribute(`aria-label`,e),this.removeAttribute(`aria-label`))}},customElements.get(`ds-toast`)||customElements.define(`ds-toast`,c)})),u,d,f,p,m,h,g,_,v;e((()=>{n(),i(),l(),{expect:u,fn:d,userEvent:f}=__STORYBOOK_MODULE_TEST__,p={title:`Molecules/Toast`,component:`ds-toast`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:'`ds-toast` is a floating notification molecule used for dynamic system announcements. Features optional left "Close" `ds-button` `variant="icon"`, optional right "Never show this again" `ds-button` `variant="text"` with muted opacity, and `role="status"` / `aria-live="polite"` for assistive technology compatibility.'}}},decorators:[e=>t`
      <div class="canvas-buffer" style="display: flex; justify-content: center; align-items: center; box-sizing: border-box;">
        ${e()}
      </div>
    `],argTypes:{visible:{name:`visible`,description:`Controls visibility and entry/exit animation state.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`true`}}},caseTitle:{name:`caseTitle`,description:`Text string rendered inside the notification container.`,control:`text`,table:{category:`Component: Core`}},showClose:{name:`showClose`,description:`Toggles the left close icon button.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`true`}}},showNeverShow:{name:`showNeverShow`,description:`Toggles the right "Never show this again" text button.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`true`}}},ariaLabel:{name:`ariaLabel`,description:`Accessibility label delegated to internal live region primitive.`,control:`text`,table:{category:`Component: Core`,defaultValue:{summary:`Resume case reader`}}},backgroundColor:{name:`backgroundColor`,description:`Sub-atomic modifier overriding default surface background.`,control:`color`,table:{category:`Sub-Atomic Overrides`}},textColor:{name:`textColor`,description:`Sub-atomic modifier overriding default text color.`,control:`color`,table:{category:`Sub-Atomic Overrides`}},onToastClick:{name:`onToastClick`,description:`Fires when the main toast body is clicked.`,action:`ds-toast-click`,table:{category:`SUB-ATOMIC PROPS`,subcategory:`Events`}},onClose:{name:`onClose`,description:`Fires when the left close icon button is clicked.`,action:`ds-toast-close`,table:{category:`SUB-ATOMIC PROPS`,subcategory:`Events`}},onNeverShow:{name:`onNeverShow`,description:`Fires when the "Never show this again" text button is clicked.`,action:`ds-toast-never-show`,table:{category:`SUB-ATOMIC PROPS`,subcategory:`Events`}}},args:{onToastClick:d(),onClose:d(),onNeverShow:d()},render:e=>{let n=[e.backgroundColor?`--custom-bg: ${e.backgroundColor};`:``,e.textColor?`--custom-color: ${e.textColor};`:``].join(` `).trim();return t`
      <ds-toast
        visible=${e.visible?`true`:`false`}
        case-title=${r(e.caseTitle)}
        ?show-close=${e.showClose}
        ?show-never-show=${e.showNeverShow}
        aria-label=${r(e.ariaLabel)}
        style=${r(n||void 0)}
        @ds-toast-click=${e.onToastClick}
        @ds-toast-close=${e.onClose}
        @ds-toast-never-show=${e.onNeverShow}>
      </ds-toast>
    `}},m={args:{visible:!0,caseTitle:`Resume: Agentic AI Design`,showClose:!0,showNeverShow:!0,ariaLabel:`Resume reading Agentic AI Design case study`},play:async({canvasElement:e,step:t,args:n})=>{let r=e.querySelector(`ds-toast`);await t(`Verify structural attributes pass cleanly and host scrubbing executes`,async()=>{u(r.getAttribute(`visible`)).toBe(`true`),u(r.getAttribute(`aria-label`)).toBeNull()}),await t(`Verify both buttons are visible in shadow root`,async()=>{let e=r.shadowRoot.querySelector(`.toast-close-btn`),t=r.shadowRoot.querySelector(`.toast-never-btn`);u(e.hasAttribute(`hidden`)).toBe(!1),u(t.hasAttribute(`hidden`)).toBe(!1)}),await t(`Verify clicking left close icon button triggers ds-toast-close event`,async()=>{let e=r.shadowRoot.querySelector(`.toast-close-btn`);await f.click(e),u(n.onClose).toHaveBeenCalled()}),await t(`Verify clicking "Never show this again" text button triggers ds-toast-never-show event`,async()=>{let e=r.shadowRoot.querySelector(`.toast-never-btn`);await f.click(e),u(n.onNeverShow).toHaveBeenCalled()})}},h={args:{visible:!0,caseTitle:`Resume: Agentic AI Design`,showClose:!0,showNeverShow:!1,ariaLabel:`Resume reading Agentic AI Design case study`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-toast`);await t(`Verify only left close icon button is rendered`,async()=>{let e=n.shadowRoot.querySelector(`.toast-close-btn`),t=n.shadowRoot.querySelector(`.toast-never-btn`);u(e.hasAttribute(`hidden`)).toBe(!1),u(t.hasAttribute(`hidden`)).toBe(!0)})}},g={args:{visible:!0,caseTitle:`Resume: Agentic AI Design`,showClose:!1,showNeverShow:!0,ariaLabel:`Resume reading Agentic AI Design case study`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-toast`);await t(`Verify only right text button is rendered`,async()=>{let e=n.shadowRoot.querySelector(`.toast-close-btn`),t=n.shadowRoot.querySelector(`.toast-never-btn`);u(e.hasAttribute(`hidden`)).toBe(!0),u(t.hasAttribute(`hidden`)).toBe(!1)})}},_={args:{visible:!0,caseTitle:`Resume: Agentic AI Design`,showClose:!1,showNeverShow:!1,ariaLabel:`Resume reading Agentic AI Design case study`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-toast`);await t(`Verify both buttons are hidden`,async()=>{let e=n.shadowRoot.querySelector(`.toast-close-btn`),t=n.shadowRoot.querySelector(`.toast-never-btn`);u(e.hasAttribute(`hidden`)).toBe(!0),u(t.hasAttribute(`hidden`)).toBe(!0)})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    caseTitle: 'Resume: Agentic AI Design',
    showClose: true,
    showNeverShow: true,
    ariaLabel: 'Resume reading Agentic AI Design case study'
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const component = canvasElement.querySelector('ds-toast');
    await step('Verify structural attributes pass cleanly and host scrubbing executes', async () => {
      expect(component.getAttribute('visible')).toBe('true');
      expect(component.getAttribute('aria-label')).toBeNull();
    });
    await step('Verify both buttons are visible in shadow root', async () => {
      const closeBtn = component.shadowRoot.querySelector('.toast-close-btn');
      const neverBtn = component.shadowRoot.querySelector('.toast-never-btn');
      expect(closeBtn.hasAttribute('hidden')).toBe(false);
      expect(neverBtn.hasAttribute('hidden')).toBe(false);
    });
    await step('Verify clicking left close icon button triggers ds-toast-close event', async () => {
      const closeBtn = component.shadowRoot.querySelector('.toast-close-btn');
      await userEvent.click(closeBtn);
      expect(args.onClose).toHaveBeenCalled();
    });
    await step('Verify clicking "Never show this again" text button triggers ds-toast-never-show event', async () => {
      const neverBtn = component.shadowRoot.querySelector('.toast-never-btn');
      await userEvent.click(neverBtn);
      expect(args.onNeverShow).toHaveBeenCalled();
    });
  }
}`,...m.parameters?.docs?.source},description:{story:`Full toast configuration with both the left close button and right "Never show this again" button active.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    caseTitle: 'Resume: Agentic AI Design',
    showClose: true,
    showNeverShow: false,
    ariaLabel: 'Resume reading Agentic AI Design case study'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-toast');
    await step('Verify only left close icon button is rendered', async () => {
      const closeBtn = component.shadowRoot.querySelector('.toast-close-btn');
      const neverBtn = component.shadowRoot.querySelector('.toast-never-btn');
      expect(closeBtn.hasAttribute('hidden')).toBe(false);
      expect(neverBtn.hasAttribute('hidden')).toBe(true);
    });
  }
}`,...h.parameters?.docs?.source},description:{story:`Toast configuration rendering ONLY the left close icon button.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    caseTitle: 'Resume: Agentic AI Design',
    showClose: false,
    showNeverShow: true,
    ariaLabel: 'Resume reading Agentic AI Design case study'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-toast');
    await step('Verify only right text button is rendered', async () => {
      const closeBtn = component.shadowRoot.querySelector('.toast-close-btn');
      const neverBtn = component.shadowRoot.querySelector('.toast-never-btn');
      expect(closeBtn.hasAttribute('hidden')).toBe(true);
      expect(neverBtn.hasAttribute('hidden')).toBe(false);
    });
  }
}`,...g.parameters?.docs?.source},description:{story:`Toast configuration rendering ONLY the right "Never show this again" text button.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    caseTitle: 'Resume: Agentic AI Design',
    showClose: false,
    showNeverShow: false,
    ariaLabel: 'Resume reading Agentic AI Design case study'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-toast');
    await step('Verify both buttons are hidden', async () => {
      const closeBtn = component.shadowRoot.querySelector('.toast-close-btn');
      const neverBtn = component.shadowRoot.querySelector('.toast-never-btn');
      expect(closeBtn.hasAttribute('hidden')).toBe(true);
      expect(neverBtn.hasAttribute('hidden')).toBe(true);
    });
  }
}`,..._.parameters?.docs?.source},description:{story:`Clean toast notification rendering NO interactive buttons.`,..._.parameters?.docs?.description}}},v=[`Default`,`JustCloseButton`,`JustNeverShowButton`,`ToastOnly`]}))();export{m as Default,h as JustCloseButton,g as JustNeverShowButton,_ as ToastOnly,v as __namedExportsOrder,p as default};