import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{t as r}from"./Button-BPRmLUND.js";import{t as i}from"./Divider-BuLgpbB-.js";import{t as a}from"./Breadcrumb-BBuerVUF.js";var o,s=e((()=>{o=`:host{z-index:var(--z-overlay,1000);pointer-events:none;padding:0 40px;display:block;position:fixed;top:30px;left:0;right:0}.header-container{justify-content:space-between;align-items:center;display:flex}.header-left,.header-right{align-items:center;gap:var(--space-sm,8px);pointer-events:auto;display:flex}ds-breadcrumb{margin-left:var(--space-lg,16px)}#home-btn[hidden]{display:none}`})),c,l=e((()=>{s(),a(),r(),i(),c=class extends HTMLElement{static get observedAttributes(){return[`view`,`current-label`]}constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.innerHTML=`
      <style>${o}</style>
      <header class="header-container">
        <div class="header-left">
          <ds-button variant="floating" icon="return" aria-label="Go Back" id="home-btn"></ds-button>
          <ds-breadcrumb id="breadcrumb"></ds-breadcrumb>
        </div>
        <div class="header-right">
          <ds-mode-toggle id="mode-toggle"></ds-mode-toggle>
          <ds-divider></ds-divider>
          <ds-button variant="icon" icon="accessibility" aria-label="Accessibility" id="a11y-btn"></ds-button>
          <ds-button variant="icon" icon="language" aria-label="Language" id="lang-btn"></ds-button>
        </div>
      </header>
    `,this.bindEvents()}attributeChangedCallback(e,t,n){t!==n&&this.render()}connectedCallback(){this.render()}render(){let e=this.getAttribute(`view`)||`home`,t=this.getAttribute(`current-label`)||``,n=this.shadowRoot.getElementById(`home-btn`),r=this.shadowRoot.getElementById(`breadcrumb`);e===`home`?(n.hidden=!0,r.setAttribute(`visible`,`false`)):(n.hidden=!1,r.setAttribute(`visible`,`true`),r.setAttribute(`current-label`,t))}bindEvents(){let e=e=>this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}));this.shadowRoot.getElementById(`home-btn`).addEventListener(`click`,()=>e(`ds-home-click`)),this.shadowRoot.getElementById(`a11y-btn`).addEventListener(`click`,()=>e(`ds-a11y-click`)),this.shadowRoot.getElementById(`lang-btn`).addEventListener(`click`,()=>e(`ds-lang-click`)),this.shadowRoot.getElementById(`mode-toggle`).addEventListener(`ds-mode-change`,e=>{this.dispatchEvent(new CustomEvent(`ds-mode-change`,{detail:e.detail,bubbles:!0,composed:!0}))}),this.shadowRoot.getElementById(`breadcrumb`).addEventListener(`ds-breadcrumb-home`,()=>e(`ds-home-click`))}},customElements.get(`ds-header`)||customElements.define(`ds-header`,c)})),u,d,f,p,m;e((()=>{n(),l(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Organisms/Header`,tags:[`autodocs`],argTypes:{view:{control:{type:`select`},options:[`home`,`case`,`about`],description:`Controls the visibility of the back button and breadcrumb.`},currentLabel:{control:`text`,description:`The text for the current page in the breadcrumb (for "case" or "about" views).`}},args:{onHomeClick:u(),onA11yClick:u(),onLangClick:u(),onModeChange:u()},render:e=>t`
    <div style="padding: 20px; background: #f9f9f9; height: 150px; position: relative;">
      <ds-header 
        view="${e.view}" 
        current-label="${e.currentLabel}"
        @ds-home-click="${e.onHomeClick}"
        @ds-a11y-click="${e.onA11yClick}"
        @ds-lang-click="${e.onLangClick}"
        @ds-mode-change="${t=>e.onModeChange(t.detail)}">
      </ds-header>
    </div>
  `},f={args:{view:`home`}},p={args:{view:`case`,currentLabel:`Agentic AI Design`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    view: 'home'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    view: 'case',
    currentLabel: 'Agentic AI Design'
  }
}`,...p.parameters?.docs?.source}}},m=[`HomeView`,`CaseView`]}))();export{p as CaseView,f as HomeView,m as __namedExportsOrder,d as default};