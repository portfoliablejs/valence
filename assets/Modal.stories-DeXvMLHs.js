import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{t as r}from"./Button-BPRmLUND.js";import{t as i}from"./Divider-BuLgpbB-.js";import{t as a}from"./ItemRow-t0KNGSdO.js";var o,s=e((()=>{o=`:host{display:block}.glass-overlay{background:var(--overlay-glass-bg,#0000001a);-webkit-backdrop-filter:blur(var(--overlay-glass-blur,6px));z-index:var(--z-overlay,1500);opacity:0;pointer-events:none;transition:opacity var(--anim-normal) var(--anim-ease);justify-content:center;align-items:center;display:flex;position:fixed;inset:0}:host([open=true]) .glass-overlay{opacity:1;pointer-events:auto}:host([hide-backdrop=true]) .glass-overlay{-webkit-backdrop-filter:none;opacity:1;pointer-events:auto;background:0 0;width:100%;height:auto;padding:20px;position:relative}.a11y-modal{background:var(--color-bg,#fff);border-radius:var(--radius-md,8px);width:100%;max-width:400px;padding:var(--space-md,12px);opacity:0;transition:opacity var(--anim-normal) var(--anim-ease), transform var(--anim-normal) var(--anim-spring);font-family:var(--font-family,sans-serif);box-sizing:border-box;transform:translateY(20px)scale(.95);box-shadow:0 20px 40px #0000001a}:host([open=true]) .a11y-modal{opacity:1;transform:translateY(0)scale(1)}:host([hide-backdrop=true]) .a11y-modal{margin:0 auto}:host([hide-backdrop=true]:not([open=true])) .a11y-modal{opacity:0;pointer-events:none;transform:translateY(20px)scale(.95)}.popup-header{border-bottom:1px solid var(--color-card-border,#0000000d);margin-bottom:var(--space-sm,8px);justify-content:space-between;align-items:center;padding:0 4px 8px;display:flex}.popup-title{text-transform:uppercase;color:var(--color-gray-med,#777);letter-spacing:.05em;font-size:10px;font-weight:700}.modal-content{flex-direction:column;gap:2px;display:flex}`})),c,l=e((()=>{s(),r(),c=class extends HTMLElement{static get observedAttributes(){return[`open`,`title`,`hide-backdrop`]}constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.innerHTML=`
      <style>${o}</style>
      <div class="glass-overlay" aria-hidden="true">
        <div class="a11y-modal" role="dialog" aria-modal="true">
          <div class="popup-header">
            <span class="popup-title"></span>
            <ds-button variant="close" aria-label="Close" class="close-btn"></ds-button>
          </div>
          <div class="modal-content"><slot></slot></div>
        </div>
      </div>
    `,this.overlay=this.shadowRoot.querySelector(`.glass-overlay`),this.closeBtn=this.shadowRoot.querySelector(`.close-btn`);let e=()=>{this.setAttribute(`open`,`false`),this.dispatchEvent(new CustomEvent(`ds-modal-close`,{bubbles:!0,composed:!0}))};this.closeBtn.addEventListener(`click`,e),this.overlay.addEventListener(`click`,t=>{t.target===this.overlay&&e()})}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}render(){this.shadowRoot.querySelector(`.popup-title`).textContent=this.getAttribute(`title`)||`Modal`;let e=this.getAttribute(`open`)===`true`;this.overlay.setAttribute(`aria-hidden`,(!e).toString())}},customElements.get(`ds-modal`)||customElements.define(`ds-modal`,c)})),u,d,f,p,m,h;e((()=>{n(),l(),a(),i(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Organisms/Modal`,tags:[`autodocs`],argTypes:{title:{control:`text`},open:{control:`boolean`},hideBackdrop:{control:`boolean`}},args:{onClose:u()}},f=t`
  <style>
    .a11y-options { display: flex; flex-direction: column; gap: 2px; }
    .a11y-category-title {
      font-size: 10px; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.05em; color: var(--color-gray-light);
      padding: 4px var(--space-sm) 2px var(--space-sm); margin-top: 2px; display: block;
      font-family: var(--font-family, sans-serif);
    }
    .a11y-category-title.mt-group { margin-top: var(--space-md); }
  </style>
`,p={args:{title:`Accessibility`,open:!0,hideBackdrop:!0},render:e=>t`
    <div style="padding: 20px; background: var(--color-card-bg); border-radius: 12px;">
      <ds-modal title="${e.title}" open="${e.open}" hide-backdrop="${e.hideBackdrop}" @ds-modal-close="${e.onClose}">
        ${f}
        <div class="a11y-options">
          <span class="a11y-category-title mt-group">Typography</span>
          <ds-item-row icon="play" label="Text Size" kbd="⇧ T" control="font-size"></ds-item-row>
          <ds-item-row icon="play" label="Dyslexia Font" kbd="⇧ Y" control="toggle"></ds-item-row>
          
          <ds-divider style="margin: 4px 0;"></ds-divider>
          
          <span class="a11y-category-title">Visuals</span>
          <ds-item-row icon="eye-closed" label="Dark Mode" kbd="⇧ D" control="toggle"></ds-item-row>
          <ds-item-row icon="eye-open" label="High Contrast" kbd="⇧ C" control="toggle" active="true"></ds-item-row>
          
          <ds-divider style="margin: 4px 0;"></ds-divider>
          
          <span class="a11y-category-title mt-group">Motion & Focus</span>
          <ds-item-row icon="play" label="Reduce Motion" kbd="⇧ M" control="toggle"></ds-item-row>
          <ds-item-row icon="play" label="TAB Nav" kbd="⇧ F" control="toggle"></ds-item-row>

          <ds-divider style="margin: 4px 0;"></ds-divider>

          <span class="a11y-category-title mt-group">Example Check Row</span>
          <ds-item-row icon="check" label="Enable Feature" control="check" selected="true"></ds-item-row>
        </div>
      </ds-modal>
    </div>
  `},m={args:{title:`Language`,open:!0,hideBackdrop:!0},render:e=>t`
    <div style="padding: 20px; background: var(--color-card-bg); border-radius: 12px;">
      <ds-modal title="${e.title}" open="${e.open}" hide-backdrop="${e.hideBackdrop}" @ds-modal-close="${e.onClose}">
        ${f}
        <div class="a11y-options">
          <ds-item-row icon="language" label="English" control="check" selected="true"></ds-item-row>
          <ds-divider style="margin: 4px 0;"></ds-divider>
          <ds-item-row icon="language" label="Português" control="check"></ds-item-row>
        </div>
      </ds-modal>
    </div>
  `},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Accessibility',
    open: true,
    hideBackdrop: true
  },
  render: args => html\`
    <div style="padding: 20px; background: var(--color-card-bg); border-radius: 12px;">
      <ds-modal title="\${args.title}" open="\${args.open}" hide-backdrop="\${args.hideBackdrop}" @ds-modal-close="\${args.onClose}">
        \${modalStyles}
        <div class="a11y-options">
          <span class="a11y-category-title mt-group">Typography</span>
          <ds-item-row icon="play" label="Text Size" kbd="⇧ T" control="font-size"></ds-item-row>
          <ds-item-row icon="play" label="Dyslexia Font" kbd="⇧ Y" control="toggle"></ds-item-row>
          
          <ds-divider style="margin: 4px 0;"></ds-divider>
          
          <span class="a11y-category-title">Visuals</span>
          <ds-item-row icon="eye-closed" label="Dark Mode" kbd="⇧ D" control="toggle"></ds-item-row>
          <ds-item-row icon="eye-open" label="High Contrast" kbd="⇧ C" control="toggle" active="true"></ds-item-row>
          
          <ds-divider style="margin: 4px 0;"></ds-divider>
          
          <span class="a11y-category-title mt-group">Motion & Focus</span>
          <ds-item-row icon="play" label="Reduce Motion" kbd="⇧ M" control="toggle"></ds-item-row>
          <ds-item-row icon="play" label="TAB Nav" kbd="⇧ F" control="toggle"></ds-item-row>

          <ds-divider style="margin: 4px 0;"></ds-divider>

          <span class="a11y-category-title mt-group">Example Check Row</span>
          <ds-item-row icon="check" label="Enable Feature" control="check" selected="true"></ds-item-row>
        </div>
      </ds-modal>
    </div>
  \`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Language',
    open: true,
    hideBackdrop: true
  },
  render: args => html\`
    <div style="padding: 20px; background: var(--color-card-bg); border-radius: 12px;">
      <ds-modal title="\${args.title}" open="\${args.open}" hide-backdrop="\${args.hideBackdrop}" @ds-modal-close="\${args.onClose}">
        \${modalStyles}
        <div class="a11y-options">
          <ds-item-row icon="language" label="English" control="check" selected="true"></ds-item-row>
          <ds-divider style="margin: 4px 0;"></ds-divider>
          <ds-item-row icon="language" label="Português" control="check"></ds-item-row>
        </div>
      </ds-modal>
    </div>
  \`
}`,...m.parameters?.docs?.source}}},h=[`AccessibilityMenu`,`LanguageMenu`]}))();export{p as AccessibilityMenu,m as LanguageMenu,h as __namedExportsOrder,d as default};