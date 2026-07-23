import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{t as r}from"./ComboTabs-D1TKZYxT.js";var i,a=e((()=>{i=`:host{display:block}.combo-asset-card{background-color:var(--color-card-bg,#f2f2f7);border:1px solid var(--color-card-border,#0000000d);border-radius:var(--radius-lg,16px);padding:var(--space-xl,24px);margin:var(--space-xxxxl,80px) 0;gap:var(--space-lg,16px);flex-direction:column;display:flex}.combo-content{gap:var(--space-lg,16px);flex-direction:column;display:none}.combo-content.active{display:flex}`})),o,s=e((()=>{a(),r(),o=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.innerHTML=`
      <style>${i}</style>
      <div class="combo-asset-card">
        <ds-combo-tabs></ds-combo-tabs>
        <div class="content-container"> 
          <slot></slot>
        </div>
      </div>
    `,this.tabsEl=this.shadowRoot.querySelector(`ds-combo-tabs`),this.tabsEl.addEventListener(`ds-tab-change`,e=>this.updateContent(e.detail.activeId))}connectedCallback(){setTimeout(()=>this.initializeTabs(),0)}initializeTabs(){let e=[];this.querySelectorAll(`[slot]`).forEach(t=>{e.push({id:t.slot,label:t.getAttribute(`data-label`)||t.slot})}),this.tabsEl.tabs=e,e.length>0&&this.updateContent(e[0].id)}updateContent(e){this.querySelectorAll(`[slot]`).forEach(t=>{t.classList.toggle(`active`,t.slot===e)})}},customElements.get(`ds-combo-card`)||customElements.define(`ds-combo-card`,o)})),c,l,u;e((()=>{n(),s(),c={title:`Organisms/ComboCard`,tags:[`autodocs`]},l={render:()=>t`
    <ds-combo-card>
      <div slot="dashboard" data-label="Dashboard">Content for Dashboard</div>
      <div slot="history" data-label="History">Content for History</div>
      <div slot="download" data-label="Download">Content for Download</div>
    </ds-combo-card>
  `},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ds-combo-card>
      <div slot="dashboard" data-label="Dashboard">Content for Dashboard</div>
      <div slot="history" data-label="History">Content for History</div>
      <div slot="download" data-label="Download">Content for Download</div>
    </ds-combo-card>
  \`
}`,...l.parameters?.docs?.source}}},u=[`WithTabs`]}))();export{l as WithTabs,u as __namedExportsOrder,c as default};