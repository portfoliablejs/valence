import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{t as r}from"./GalleryItem-DoPz6Em9.js";var i,a=e((()=>{i=`:host{width:100%;height:100%;display:flex}.gallery-container{cursor:grab;scrollbar-width:none;will-change:transform;flex-grow:1;align-items:flex-end;gap:100px;padding:15vh 8vw 120px;display:flex;overflow:auto hidden}.gallery-container::-webkit-scrollbar{display:none}.gallery-container.dragging{cursor:grabbing;scroll-behavior:auto}::slotted(ds-gallery-item:first-child){margin-left:max(8vw,50vw - 720px)}`})),o,s=e((()=>{a(),o=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.innerHTML=`
            <style>${i}</style>
            <div class="gallery-container" id="gallery">
                <slot></slot>
            </div>
        `,this.container=this.shadowRoot.getElementById(`gallery`)}connectedCallback(){this._setupDrag(),this._setupWheelScroll()}_setupDrag(){let e=!1,t,n;this.container.addEventListener(`mousedown`,r=>{e=!0,this.container.classList.add(`dragging`),t=r.pageX-this.container.offsetLeft,n=this.container.scrollLeft}),this.container.addEventListener(`mouseleave`,()=>{e=!1,this.container.classList.remove(`dragging`)}),this.container.addEventListener(`mouseup`,()=>{e=!1,this.container.classList.remove(`dragging`)}),this.container.addEventListener(`mousemove`,r=>{if(!e)return;r.preventDefault();let i=(r.pageX-this.container.offsetLeft-t)*2;this.container.scrollLeft=n-i})}_setupWheelScroll(){this.container.addEventListener(`wheel`,e=>{Math.abs(e.deltaX)>Math.abs(e.deltaY)&&(e.preventDefault(),this.container.scrollLeft+=e.deltaX)},{passive:!1})}},customElements.get(`ds-gallery`)||customElements.define(`ds-gallery`,o)})),c,l,u;e((()=>{n(),s(),r(),c={title:`Organisms/Gallery`,tags:[`autodocs`]},l={render:()=>t`
    <div style="height: 100vh; width: 100vw; position: relative;">
      <ds-gallery>
        <ds-gallery-item title="Case One" short-desc="Description for one." read-time="3 min" thumb-src="/holofante.avif"></ds-gallery-item>
        <ds-gallery-item title="Case Two" short-desc="Description for two." read-time="2 min" thumb-src="/testamentus.avif" device="apple-watch"></ds-gallery-item>
        <ds-gallery-item title="Case Three" short-desc="Description for three." read-time="4 min" thumb-src="/consulta.avif" device="iphone-12"></ds-gallery-item>
        <ds-gallery-item title="Case Four" short-desc="Description for four." read-time="3 min" thumb-src="/cassiwatch.avif"></ds-gallery-item>
      </ds-gallery>
    </div>
  `},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height: 100vh; width: 100vw; position: relative;">
      <ds-gallery>
        <ds-gallery-item title="Case One" short-desc="Description for one." read-time="3 min" thumb-src="/holofante.avif"></ds-gallery-item>
        <ds-gallery-item title="Case Two" short-desc="Description for two." read-time="2 min" thumb-src="/testamentus.avif" device="apple-watch"></ds-gallery-item>
        <ds-gallery-item title="Case Three" short-desc="Description for three." read-time="4 min" thumb-src="/consulta.avif" device="iphone-12"></ds-gallery-item>
        <ds-gallery-item title="Case Four" short-desc="Description for four." read-time="3 min" thumb-src="/cassiwatch.avif"></ds-gallery-item>
      </ds-gallery>
    </div>
  \`
}`,...l.parameters?.docs?.source}}},u=[`Default`]}))();export{l as Default,u as __namedExportsOrder,c as default};