import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{t as r}from"./SliderDot-DzCFPTbO.js";import{t as i}from"./SearchInput-cNgg58kK.js";var a,o=e((()=>{a=`:host{display:inline-block}.slider-dots-container{align-items:center;gap:var(--space-md,12px);background:var(--overlay-glass-bg,#ebebf099);-webkit-backdrop-filter:blur(var(--overlay-glass-blur,12px));padding:14px var(--space-xl,24px);border-radius:var(--radius-pill,100px);border:1px solid var(--color-card-border,#0000000d);transition:transform var(--speed-fast,.2s) ease;display:flex}.slider-dots-wrapper{align-items:center;gap:var(--space-md,12px);max-width:300px;transition:max-width var(--speed-slow,.4s) ease, opacity var(--speed-normal,.3s) ease, margin var(--speed-slow,.4s) ease;display:flex;overflow:hidden}:host([search-expanded=true]) .slider-dots-wrapper{opacity:0;pointer-events:none;max-width:0;margin-left:-12px}`})),s,c=e((()=>{o(),r(),i(),s=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this._dots=0,this._activeIndex=0,this.shadowRoot.innerHTML=`
      <style>${a}</style>
      <div class="slider-dots-container">
        <ds-search-input></ds-search-input>
        <div class="slider-dots-wrapper"></div>
      </div>
    `,this.dotsWrapper=this.shadowRoot.querySelector(`.slider-dots-wrapper`),this.searchInput=this.shadowRoot.querySelector(`ds-search-input`),this.searchInput.addEventListener(`ds-search-input`,e=>{this.dispatchEvent(new CustomEvent(`ds-search-input`,{detail:e.detail,bubbles:!0,composed:!0}))}),this.searchInput.addEventListener(`click`,e=>{let t=this.searchInput.getAttribute(`expanded`)===`true`;this.setAttribute(`search-expanded`,t.toString())})}static get observedAttributes(){return[`dots`,`active-index`]}attributeChangedCallback(){this.render()}set dots(e){let t=parseInt(e,10);this._dots=isNaN(t)?0:t,this.render()}get dots(){return this._dots}set activeIndex(e){let t=parseInt(e,10);this._activeIndex=isNaN(t)?0:t,this.render()}get activeIndex(){return this._activeIndex}render(){this.dots=this.getAttribute(`dots`)||0,this.activeIndex=this.getAttribute(`active-index`)||0,this.dotsWrapper.innerHTML=``;for(let e=0;e<this.dots;e++){let t=document.createElement(`ds-slider-dot`);t.setAttribute(`aria-label`,`Go to slide ${e+1}`),e===this.activeIndex&&(t.setAttribute(`active`,`true`),t.setAttribute(`aria-current`,`true`)),t.addEventListener(`ds-dot-click`,()=>{this.dispatchEvent(new CustomEvent(`ds-dot-select`,{detail:{index:e},bubbles:!0,composed:!0}))}),this.dotsWrapper.appendChild(t)}}},customElements.get(`ds-slider-dots`)||customElements.define(`ds-slider-dots`,s)})),l,u,d,f;e((()=>{n(),c(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Molecules/SliderDots`,tags:[`autodocs`],argTypes:{dots:{control:{type:`number`,min:1,max:10}},activeIndex:{control:{type:`number`,min:0}}},args:{onDotSelect:l(),onSearch:l()},render:e=>t`
    <ds-slider-dots 
      dots="${e.dots}" 
      active-index="${e.activeIndex}"
      @ds-dot-select="${t=>e.onDotSelect(t.detail.index)}"
      @ds-search-input="${t=>e.onSearch(t.detail.value)}">
    </ds-slider-dots>
  `},d={args:{dots:4,activeIndex:0}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    dots: 4,
    activeIndex: 0
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};