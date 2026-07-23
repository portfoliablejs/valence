import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{t as r}from"./GalleryItem-C4V72iOe.js";var i,a=e((()=>{i=`:host{box-sizing:border-box;transform-origin:50%;will-change:transform;width:100%;height:auto;transition:transform .28s cubic-bezier(.22,1,.36,1);display:block;overflow:visible;transform:scale(1)}:host(.is-dragging){transform:scale(.97)}:host([a11y-reduce-motion]){transition:none}:host([a11y-reduce-motion].is-dragging){transform:scale(1)}.gallery-viewport{cursor:grab;-webkit-user-select:none;user-select:none;touch-action:pan-y;box-sizing:border-box;width:100%;overflow:hidden visible}.gallery-viewport.is-dragging{cursor:grabbing}.gallery-track{align-items:flex-end;gap:var(--gallery-item-gap,clamp(32px, 4vw, 72px));will-change:transform;box-sizing:border-box;width:max-content;display:flex;transform:translate(0,0)}.gallery-track.is-dragging,:host([a11y-reduce-motion]) .gallery-track,:host([a11y-reduce-motion]) .gallery-viewport,:host([a11y-reduce-motion]) .gallery-track.is-dragging{transition:none!important}`})),o,s,c,l,u,d=e((()=>{a(),r(),o=`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop`,s=[{title:`Agentic AI Design`,shortDesc:`A concept case study exploring interface generation and product choreography.`,readTime:`3 min`,thumbSrc:o,thumbCategory:`mobile`,thumbBrand:`apple`,thumbModel:`Apple iPhone 12`,thumbColor:`Black`,hasVideo:!0,hasRepo:!0,hasLive:!0},{title:`Wrist Companion`,shortDesc:`A compact wearable case with quick-glance controls and motion-first navigation.`,readTime:`2 min`,thumbSrc:o,thumbCategory:`wearable`,thumbBrand:`apple`,thumbModel:`Apple Watch Series 6`,thumbColor:`Silver`,aspectRatio:`1:1`,hasVideo:!1,hasRepo:!0,hasLive:!1},{title:`Mobile Checkout`,shortDesc:`A phone-first flow tuned for high-throughput purchasing without visual clutter.`,readTime:`4 min`,thumbSrc:o,thumbCategory:`mobile`,thumbBrand:`apple`,thumbModel:`Apple iPhone 12`,thumbColor:`Blue`,hasVideo:!0,hasRepo:!1,hasLive:!0},{title:`Quiet Metrics`,shortDesc:`A restrained dashboard story with clear hierarchy and lightweight motion.`,readTime:`5 min`,thumbSrc:o,thumbCategory:`desktop`,thumbBrand:`apple`,thumbModel:`Apple iMac 24`,thumbColor:`Silver`,aspectRatio:`16:9`,hasVideo:!1,hasRepo:!0,hasLive:!0},{title:`Field Notes`,shortDesc:`A research archive tuned for dense browsing and quick visual scanning.`,readTime:`3 min`,thumbSrc:o,thumbCategory:`desktop`,thumbBrand:`apple`,thumbModel:`Apple iMac 24`,thumbColor:`Green`,aspectRatio:`4:3`,hasVideo:!0,hasRepo:!1,hasLive:!1},{title:`Pocket System`,shortDesc:`A smaller companion layout with the same content language and brand system.`,readTime:`2 min`,thumbSrc:o,thumbCategory:`mobile`,thumbBrand:`apple`,thumbModel:`Apple iPhone 12`,thumbColor:`Red`,hasVideo:!1,hasRepo:!0,hasLive:!1},{title:`Release Preview`,shortDesc:`A launch-ready presentation card with a denser balance of data and image.`,readTime:`6 min`,thumbSrc:o,thumbCategory:`desktop`,thumbBrand:`apple`,thumbModel:`Apple iMac 24`,thumbColor:`Blue`,aspectRatio:`16:9`,hasVideo:!0,hasRepo:!0,hasLive:!0},{title:`Studio Cut`,shortDesc:`A visual edit that keeps the gallery movement tight and intentional.`,readTime:`4 min`,thumbSrc:o,thumbCategory:`wearable`,thumbBrand:`apple`,thumbModel:`Apple Watch SE`,thumbColor:`Midnight`,aspectRatio:`1:1`,hasVideo:!1,hasRepo:!0,hasLive:!0}],c=`minimal`,l={minimal:{dragOverscrollMax:64,dragOverscrollTension:180,dragFollowFactor:.28,dragPointerMultiplier:.85,edgeReturnDuration:420,edgeReturnEasing:`cubic-bezier(0.22, 1, 0.36, 1)`}},u=class extends HTMLElement{static get observedAttributes(){return[`item-count`,`engine`]}constructor(){super(),this.attachShadow({mode:`open`}),this._items=null,this._engine=c,this._themeObserver=null,this._dragState=null,this._suppressNextClick=!1,this._offsetX=0,this._velocityX=0,this._momentumFrame=null,this._lastPointerSample=null,this._focusedItemIndex=0,this._dragPointerId=null,this._pointerStartX=0,this._pointerStartOffset=0,this._isDragging=!1,this._boundPointerDown=this._handlePointerDown.bind(this),this._boundPointerMove=this._handlePointerMove.bind(this),this._boundPointerUp=this._handlePointerUp.bind(this),this._boundResize=this._handleResize.bind(this),this._boundClickCapture=this._handleClickCapture.bind(this),this._boundKeyDown=this._handleKeyDown.bind(this),this.shadowRoot.innerHTML=`
            <style>${i}</style>
            <div class="gallery-viewport" id="galleryViewport" tabindex="0" role="region" aria-label="Gallery">
                <div class="gallery-track" id="galleryTrack"></div>
            </div>
        `,this.viewport=this.shadowRoot.getElementById(`galleryViewport`),this.track=this.shadowRoot.getElementById(`galleryTrack`)}connectedCallback(){this.viewport.addEventListener(`pointerdown`,this._boundPointerDown),this.viewport.addEventListener(`click`,this._boundClickCapture,!0),this.viewport.addEventListener(`keydown`,this._boundKeyDown),window.addEventListener(`resize`,this._boundResize),this._observeRootAccessibility(),this.render(),this._syncOffsetToBounds(!0)}disconnectedCallback(){this.viewport.removeEventListener(`pointerdown`,this._boundPointerDown),this.viewport.removeEventListener(`click`,this._boundClickCapture,!0),this.viewport.removeEventListener(`keydown`,this._boundKeyDown),window.removeEventListener(`resize`,this._boundResize),this._stopMomentum(),this._detachPointerListeners(),this._themeObserver&&=(this._themeObserver.disconnect(),null)}attributeChangedCallback(e,t,n){if(e===`item-count`&&t!==n){this.render(),this._syncOffsetToBounds(!0);return}e===`engine`&&t!==n&&(this._engine=this._normalizeEngine(n),this._syncOffsetToBounds(!0))}get itemCount(){let e=Number.parseInt(this.getAttribute(`item-count`)||``,10);return Number.isNaN(e)?5:Math.max(1,Math.min(e,s.length))}set itemCount(e){if(e==null||e===``){this.removeAttribute(`item-count`);return}this.setAttribute(`item-count`,String(e))}get engine(){return this._engine}set engine(e){let t=this._normalizeEngine(e);if(this._engine=t,e==null||e===``){this.removeAttribute(`engine`);return}this.setAttribute(`engine`,t)}get items(){return(Array.isArray(this._items)?this._items:s).slice(0,this.itemCount)}set items(e){this._items=Array.isArray(e)?e:null,this.render(),this._syncOffsetToBounds(!0)}_normalizeEngine(e){let t=String(e||``).trim().toLowerCase();return l[t]?t:c}_getEngineConfig(){let e=l[this._engine]||l[c];return this.hasAttribute(`a11y-reduce-motion`)?{dragOverscrollMax:0,dragOverscrollTension:e.dragOverscrollTension,dragFollowFactor:1,dragPointerMultiplier:1,edgeReturnDuration:0,edgeReturnEasing:`linear`}:e}_observeRootAccessibility(){let e=this.ownerDocument.documentElement,t=()=>{this.toggleAttribute(`a11y-reduce-motion`,e.classList.contains(`a11y-reduce-motion`))};t(),this._themeObserver=new MutationObserver(t),this._themeObserver.observe(e,{attributes:!0,attributeFilter:[`class`]})}render(){if(!this.track)return;let e=Array.isArray(this._items)?this._items.slice(0,this.itemCount):s.slice(0,this.itemCount);this.track.innerHTML=``,e.forEach((e,t)=>{let n=document.createElement(`ds-gallery-item`);n.setAttribute(`title`,e.title||`Case ${t+1}`),n.setAttribute(`short-desc`,e.shortDesc||``),n.setAttribute(`read-time`,e.readTime||``),n.setAttribute(`thumb-src`,e.thumbSrc||``),e.thumbCategory&&n.setAttribute(`thumb-category`,e.thumbCategory),e.thumbBrand&&n.setAttribute(`thumb-brand`,e.thumbBrand),e.thumbModel&&n.setAttribute(`thumb-model`,e.thumbModel),e.thumbColor&&n.setAttribute(`thumb-color`,e.thumbColor),e.thumbDeviceSrc&&n.setAttribute(`thumb-device-src`,e.thumbDeviceSrc),e.aspectRatio&&n.setAttribute(`aspect-ratio`,e.aspectRatio),e.hasVideo&&n.setAttribute(`has-video`,``),e.hasRepo&&n.setAttribute(`has-repo`,``),e.hasLive&&n.setAttribute(`has-live`,``),e.isProtected&&n.setAttribute(`is-protected`,``),e.isUnlocked&&n.setAttribute(`is-unlocked`,``),n.setAttribute(`data-gallery-index`,String(t)),this.track.appendChild(n)}),this._focusedItemIndex=Math.min(this._focusedItemIndex,Math.max(0,e.length-1)),this._applyTransform(this._clampOffset(this._offsetX),!1)}_getGalleryItems(){return Array.from(this.track?.querySelectorAll(`ds-gallery-item`)||[])}_getItemThumb(e){return e?.shadowRoot?.querySelector(`.case-thumb-wrapper`)||null}_focusItem(e){let t=this._getGalleryItems();if(!t.length)return;let n=Math.max(0,Math.min(e,t.length-1)),r=this._getItemThumb(t[n]);r&&(this._focusedItemIndex=n,r.focus({preventScroll:!0}))}_getFocusedItemIndex(){let e=(this.shadowRoot.activeElement||this.ownerDocument.activeElement)?.closest?.(`ds-gallery-item`);if(!e)return this._focusedItemIndex;let t=this._getGalleryItems().indexOf(e);return t>=0?t:this._focusedItemIndex}_handleKeyDown(e){let t=e.key;if(![`ArrowLeft`,`ArrowRight`,`Home`,`End`,`Enter`,` `].includes(t))return;let n=this._getGalleryItems();if(!n.length)return;let r=this._getFocusedItemIndex();if(t===`ArrowRight`){e.preventDefault(),this._focusItem(r+1);return}if(t===`ArrowLeft`){e.preventDefault(),this._focusItem(r-1);return}if(t===`Home`){e.preventDefault(),this._focusItem(0);return}if(t===`End`){e.preventDefault(),this._focusItem(n.length-1);return}if(t===`Enter`||t===` `){e.preventDefault();let t=n[r],i=this._getItemThumb(t);i&&i.click()}}_handleResize(){this._syncOffsetToBounds(!0)}_handlePointerDown(e){e.button!==0||!this.viewport||!this.track||(this._stopMomentum(),this._dragPointerId=e.pointerId,this._pointerStartX=e.clientX,this._pointerStartOffset=this._offsetX,this._isDragging=!0,this._dragState={moved:!1},this.viewport.setPointerCapture(e.pointerId),this.viewport.classList.add(`is-dragging`),this.track.classList.add(`is-dragging`),this.classList.add(`is-dragging`),this.track.style.transition=`none`,this._lastPointerSample={x:e.clientX,time:e.timeStamp||performance.now()},this._velocityX=0,window.addEventListener(`pointermove`,this._boundPointerMove),window.addEventListener(`pointerup`,this._boundPointerUp),window.addEventListener(`pointercancel`,this._boundPointerUp))}_handlePointerMove(e){if(!this._isDragging||e.pointerId!==this._dragPointerId)return;let t=this._getEngineConfig(),n=e.clientX-this._pointerStartX,r=this._pointerStartOffset+n*t.dragPointerMultiplier,i=this._projectDragOffset(r,t),a=e.timeStamp||performance.now();if(this._dragState.moved=this._dragState.moved||Math.abs(n)>3,this._lastPointerSample){let t=Math.max(8,a-this._lastPointerSample.time),n=(e.clientX-this._lastPointerSample.x)/t;this._velocityX=this._velocityX*.75+n*.25}this._lastPointerSample={x:e.clientX,time:a};let o=this._offsetX+(i-this._offsetX)*t.dragFollowFactor;this._applyTransform(o,!1),e.preventDefault()}_handlePointerUp(e){if(!this._isDragging||e.pointerId!==this._dragPointerId)return;this._suppressNextClick=!!this._dragState?.moved,this._detachPointerListeners(),this.viewport.classList.remove(`is-dragging`),this.track.classList.remove(`is-dragging`),this.classList.remove(`is-dragging`);let t=this._getEngineConfig(),n=this._clampOffset(this._offsetX),r=n!==this._offsetX,i=!this.hasAttribute(`a11y-reduce-motion`)&&r;this._applyTransform(n,i,i?t.edgeReturnDuration:void 0,i?t.edgeReturnEasing:void 0),this._isDragging=!1,this._dragPointerId=null,this._lastPointerSample=null}_handleClickCapture(e){this._suppressNextClick&&=(e.preventDefault(),e.stopImmediatePropagation(),!1)}_detachPointerListeners(){if(window.removeEventListener(`pointermove`,this._boundPointerMove),window.removeEventListener(`pointerup`,this._boundPointerUp),window.removeEventListener(`pointercancel`,this._boundPointerUp),this.viewport&&this._dragPointerId!=null)try{this.viewport.releasePointerCapture(this._dragPointerId)}catch{}}_projectDragOffset(e,t=this._getEngineConfig()){let n=this._minOffset();return e>0?0+this._smoothOverscroll(e-0,t):e<n?n+this._smoothOverscroll(e-n,t):e}_smoothOverscroll(e,t=this._getEngineConfig()){let n=Math.abs(e);if(!n)return 0;let r=t.dragOverscrollMax*(1-Math.exp(-n/t.dragOverscrollTension));return Math.sign(e)*r}_minOffset(){let e=this.viewport?this.viewport.clientWidth:0,t=this.track?this.track.scrollWidth:0;return Math.min(0,e-t)}_clampOffset(e){return Math.min(0,Math.max(this._minOffset(),e))}_applyTransform(e,t,n,r){if(this._offsetX=e,!this.track)return;let i=typeof n==`number`?`${n}ms`:`240ms`,a=r||`cubic-bezier(0.22, 1, 0.36, 1)`;this.track.style.transition=t?`transform ${i} ${a}`:`none`,this.track.style.transform=`translate3d(${e}px, 0, 0)`}_syncOffsetToBounds(e=!1){let t=e&&!this.hasAttribute(`a11y-reduce-motion`);this._applyTransform(this._clampOffset(this._offsetX),t)}_stopMomentum(){this._momentumFrame!=null&&(cancelAnimationFrame(this._momentumFrame),this._momentumFrame=null)}},customElements.get(`ds-gallery`)||customElements.define(`ds-gallery`,u)})),f,p,m,h,g,_,v,y,b;e((()=>{n(),d(),r(),{expect:f,fireEvent:p,fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Organisms/Gallery [v1.0.0]`,component:`ds-gallery`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"The `ds-gallery` organism renders a generated row of `ds-gallery-item` cards and lets the user drag the strip horizontally with a soft, Apple-like overscroll feel. Use `item-count` to control how many gallery items are rendered, with five items as the default."}}},argTypes:{engine:{name:`engine`,control:`text`,description:`Motion preset used for drag follow, overscroll, and edge-return timing.`,table:{category:`Component: Motion`,defaultValue:{summary:`minimal`}}},itemCount:{name:`item-count`,control:{type:`range`,min:1,max:8,step:1},description:`Controls how many GalleryItem cards are rendered by the gallery.`,table:{category:`Component: Core Controls`,defaultValue:{summary:`5`}}},itemGap:{name:`item-gap`,control:`text`,description:`Horizontal gap between gallery items.`,table:{category:`Component: Layout`,defaultValue:{summary:`100px`}}},onCaseSelect:{action:`ds-case-select`,description:`Fires when a generated GalleryItem thumbnail is selected.`,table:{category:`Events`}}},args:{engine:`minimal`,itemCount:5,itemGap:`100px`,onCaseSelect:m()},render:e=>t`
    <div style="min-height: 100vh; width: 100%; padding: 0 50px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; background: transparent;">
      <div style="width: 100%;">
        <ds-gallery
          style="width: 100%; --gallery-item-gap: ${e.itemGap};"
          .engine=${e.engine}
          .itemCount=${e.itemCount}
          @ds-case-select=${e.onCaseSelect}
        ></ds-gallery>
      </div>
    </div>
  `},g={parameters:{docs:{description:{story:`The default gallery renders five generated GalleryItem cards and keeps the strip flush without any outer padding.`}}},play:async({canvasElement:e,args:t,step:n})=>{let r=e.querySelector(`ds-gallery`);await n(`Render the default five GalleryItem cards`,async()=>{f(r).toBeTruthy(),f(r.shadowRoot.querySelectorAll(`ds-gallery-item`).length).toBe(5)}),await n(`Bubble a selection event from the first item`,async()=>{let e=r.shadowRoot.querySelector(`ds-gallery-item`).shadowRoot.querySelector(`.case-thumb-wrapper`);p.click(e),f(t.onCaseSelect).toHaveBeenCalled()}),await n(`Support arrow and enter navigation from the gallery viewport`,async()=>{let e=r.shadowRoot.querySelector(`.gallery-viewport`);e.focus(),p.keyDown(e,{key:`ArrowRight`}),f(r.shadowRoot.activeElement?.shadowRoot?.activeElement||r.shadowRoot.activeElement).toBeTruthy(),p.keyDown(e,{key:`Enter`})})}},_={args:{itemCount:3},parameters:{docs:{description:{story:`A compact gallery variant that proves the item-count prop can reduce the row to three cards.`}}},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-gallery`);await t(`Render only three generated items`,async()=>{f(n.shadowRoot.querySelectorAll(`ds-gallery-item`).length).toBe(3)})}},v={args:{itemCount:8},parameters:{docs:{description:{story:`An extended gallery that fills the track with the full internal item pool and confirms the generated cards scale cleanly.`}}},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-gallery`);await t(`Render the full eight-item pool`,async()=>{f(n.shadowRoot.querySelectorAll(`ds-gallery-item`).length).toBe(8)})}},y={args:{itemCount:5},parameters:{docs:{description:{story:`Exercises the drag physics by pulling past the leading edge and verifying the overscroll stays restrained before settling back into place.`}}},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-gallery`),r=n.shadowRoot.querySelector(`.gallery-viewport`),i=n.shadowRoot.querySelector(`.gallery-track`);await t(`Pull the gallery beyond the left edge`,async()=>{p.pointerDown(r,{button:0,pointerId:1,clientX:120,clientY:120}),p.pointerMove(window,{pointerId:1,clientX:380,clientY:120}),f(i.style.transform).not.toBe(`translate3d(0px, 0, 0)`),f(i.style.transform).toContain(`px`),p.pointerUp(window,{pointerId:1})}),await t(`Snap the gallery back to the resting position`,async()=>{f(i.style.transform).toBe(`translate3d(0px, 0, 0)`)})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The default gallery renders five generated GalleryItem cards and keeps the strip flush without any outer padding.'
      }
    }
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const gallery = canvasElement.querySelector('ds-gallery');
    await step('Render the default five GalleryItem cards', async () => {
      expect(gallery).toBeTruthy();
      expect(gallery.shadowRoot.querySelectorAll('ds-gallery-item').length).toBe(5);
    });
    await step('Bubble a selection event from the first item', async () => {
      const firstItem = gallery.shadowRoot.querySelector('ds-gallery-item');
      const thumb = firstItem.shadowRoot.querySelector('.case-thumb-wrapper');
      fireEvent.click(thumb);
      expect(args.onCaseSelect).toHaveBeenCalled();
    });
    await step('Support arrow and enter navigation from the gallery viewport', async () => {
      const viewport = gallery.shadowRoot.querySelector('.gallery-viewport');
      viewport.focus();
      fireEvent.keyDown(viewport, {
        key: 'ArrowRight'
      });
      expect(gallery.shadowRoot.activeElement?.shadowRoot?.activeElement || gallery.shadowRoot.activeElement).toBeTruthy();
      fireEvent.keyDown(viewport, {
        key: 'Enter'
      });
    });
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    itemCount: 3
  },
  parameters: {
    docs: {
      description: {
        story: 'A compact gallery variant that proves the item-count prop can reduce the row to three cards.'
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const gallery = canvasElement.querySelector('ds-gallery');
    await step('Render only three generated items', async () => {
      expect(gallery.shadowRoot.querySelectorAll('ds-gallery-item').length).toBe(3);
    });
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    itemCount: 8
  },
  parameters: {
    docs: {
      description: {
        story: 'An extended gallery that fills the track with the full internal item pool and confirms the generated cards scale cleanly.'
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const gallery = canvasElement.querySelector('ds-gallery');
    await step('Render the full eight-item pool', async () => {
      expect(gallery.shadowRoot.querySelectorAll('ds-gallery-item').length).toBe(8);
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    itemCount: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'Exercises the drag physics by pulling past the leading edge and verifying the overscroll stays restrained before settling back into place.'
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const gallery = canvasElement.querySelector('ds-gallery');
    const viewport = gallery.shadowRoot.querySelector('.gallery-viewport');
    const track = gallery.shadowRoot.querySelector('.gallery-track');
    await step('Pull the gallery beyond the left edge', async () => {
      fireEvent.pointerDown(viewport, {
        button: 0,
        pointerId: 1,
        clientX: 120,
        clientY: 120
      });
      fireEvent.pointerMove(window, {
        pointerId: 1,
        clientX: 380,
        clientY: 120
      });
      expect(track.style.transform).not.toBe('translate3d(0px, 0, 0)');
      expect(track.style.transform).toContain('px');
      fireEvent.pointerUp(window, {
        pointerId: 1
      });
    });
    await step('Snap the gallery back to the resting position', async () => {
      expect(track.style.transform).toBe('translate3d(0px, 0, 0)');
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`ThreeItems`,`EightItems`,`SoftEdgeDrag`]}))();export{g as Default,v as EightItems,y as SoftEdgeDrag,_ as ThreeItems,b as __namedExportsOrder,h as default};