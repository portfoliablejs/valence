import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{t as r}from"./Button-BPRmLUND.js";import{t as i}from"./AudioPlayer--K8mrROn.js";import{t as a}from"./MetricCard-BsNW5It3.js";import{t as o}from"./Summary-CVv0HilC.js";var s,c=e((()=>{s=`:host{justify-content:center;align-items:center;width:100vw;height:100vh;display:flex;overflow:hidden}.case-layout{width:100%;max-width:1300px;height:100%;transition:gap .8s var(--anim-ease);justify-content:center;align-items:center;gap:80px;padding:0 8vw;display:flex}.case-media{height:75vh;max-height:700px;aspect-ratio:var(--device-aspect-ratio,1 / 2.03);transition:margin .8s var(--anim-ease), opacity .6s ease, transform .8s var(--anim-ease);flex-shrink:0;position:relative}.case-media img{object-fit:contain;width:100%;height:100%}.case-info-container{max-width:700px;height:100vh;transition:max-width .8s var(--anim-ease);flex:1;position:relative}.case-info-scroll{scrollbar-width:none;height:100%;padding:15vh 0 80px;overflow-y:auto}.case-info-scroll::-webkit-scrollbar{display:none}:host([scrolled]) .case-layout{gap:0}:host([scrolled]) .case-media{opacity:0;pointer-events:none;margin-left:-36.75vh;transform:translate(-15vw)}:host([scrolled]) .case-info-container{max-width:63vw}.case-toc{align-items:flex-end;gap:var(--space-md);z-index:var(--z-dropdown);flex-direction:column;display:flex;position:absolute;top:50%;right:3vw;transform:translateY(-50%)}.toc-item{justify-content:flex-end;align-items:center;gap:var(--space-md);cursor:pointer;opacity:.3;transition:opacity var(--speed-fast) ease;display:flex}.toc-item:hover,.toc-item.active{opacity:1}.toc-dash{background-color:var(--color-gray-med);width:10px;height:2px;transition:width var(--speed-normal) ease, background-color var(--speed-normal) ease;border-radius:2px}.toc-item.active .toc-dash{background-color:var(--color-black);width:18px}.toc-text-wrapper{max-width:0;transition:max-width var(--speed-normal) ease;direction:rtl;overflow:hidden}.case-toc:hover .toc-text-wrapper{max-width:250px}.toc-text{color:var(--color-gray-dark);text-align:right;white-space:normal;width:200px;padding-right:var(--space-md);opacity:0;transition:opacity var(--speed-slow) ease, transform var(--speed-slow) ease;direction:ltr;font-size:13px;font-weight:500;transform:translate(10px)}.case-toc:hover .toc-text{opacity:1;transform:translate(0)}`})),l,u=e((()=>{c(),l=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.innerHTML=`
      <style>${s}</style>
      <div class="case-layout">
        <div class="case-media">
          <img id="thumb-img" src="" alt="">
        </div>
        <div class="case-info-container">
          <div class="case-info-scroll">
            <div class="case-info-content">
              <h3 id="year-label"></h3>
              <h2 id="title-label"></h2>
              <slot name="actions"></slot>
              <slot name="ai-summary"></slot>
              <slot name="audio-player"></slot>
              <div class="description-body">
                <slot name="description"></slot>
              </div>
            </div>
          </div>
        </div>
        <div class="case-toc" id="toc-container"></div>
      </div>
    `,this.scrollContainer=this.shadowRoot.querySelector(`.case-info-scroll`),this.scrollContainer.addEventListener(`scroll`,()=>{this.toggleAttribute(`scrolled`,this.scrollContainer.scrollTop>50),this._updateActiveTOC()})}static get observedAttributes(){return[`title`,`year`,`thumb-src`,`device`]}attributeChangedCallback(){this.render()}connectedCallback(){this.render(),setTimeout(()=>this._buildTOC(),50)}_buildTOC(){let e=this.shadowRoot.getElementById(`toc-container`);e.innerHTML=``;let t=this.shadowRoot.querySelector(`slot[name="description"]`).assignedElements({flatten:!0}).flatMap(e=>Array.from(e.querySelectorAll(`h3`)));t.length!==0&&(t.forEach((t,n)=>{let r=document.createElement(`div`);r.className=`toc-item`,r.innerHTML=`<div class="toc-text-wrapper"><div class="toc-text">${t.innerText}</div></div><span class="toc-dash"></span>`,r.addEventListener(`click`,()=>{t.scrollIntoView({behavior:`smooth`,block:`start`})}),e.appendChild(r)}),this._updateActiveTOC())}_updateActiveTOC(){let e=this.shadowRoot.querySelectorAll(`.toc-item`);if(e.length===0)return;let t=this.shadowRoot.querySelector(`slot[name="description"]`).assignedElements({flatten:!0}).flatMap(e=>Array.from(e.querySelectorAll(`h3`))),n=-1;t.forEach((e,t)=>{e.getBoundingClientRect().top<window.innerHeight/2&&(n=t)}),e.forEach((e,t)=>{e.classList.toggle(`active`,t===n)})}render(){this.shadowRoot.querySelector(`#title-label`).textContent=this.getAttribute(`title`),this.shadowRoot.querySelector(`#year-label`).textContent=this.getAttribute(`year`),this.shadowRoot.querySelector(`#thumb-img`).src=this.getAttribute(`thumb-src`),this.shadowRoot.querySelector(`#thumb-img`).alt=`Thumbnail for ${this.getAttribute(`title`)}`;let e=this.getAttribute(`device`)||`iphone-17`;this.shadowRoot.querySelector(`.case-media`).style.setProperty(`--device-aspect-ratio`,{"iphone-17":`1 / 2.15`,"iphone-12":`1 / 2.1`,"apple-watch":`1 / 1.6`}[e]||`1 / 2.03`)}},customElements.get(`ds-case-slide`)||customElements.define(`ds-case-slide`,l)})),d,f,p,m;e((()=>{n(),u(),o(),a(),i(),r(),d={title:`Organisms/CaseSlide`,tags:[`autodocs`],parameters:{layout:`fullscreen`},argTypes:{title:{control:`text`},year:{control:`text`},thumbSrc:{control:`text`},device:{control:{type:`select`},options:[`iphone-17`,`apple-watch`,`iphone-12`]},scrolled:{control:`boolean`}}},f=`
  <p>This is the first paragraph of a long description. It sets the stage for the case study, providing context and background information. The text will continue, allowing for scrolling to test the component's behavior.</p>
  <h3>First Major Section</h3>
  <p>Content under the first major section. This paragraph elaborates on the challenges and the initial approach taken to solve the problem. It's important to have enough text to demonstrate the scroll spy functionality of the Table of Contents.</p>
  <p>Another paragraph to add more length. We can discuss user research, initial findings, and the pivot towards the final solution. The more content we have, the better we can test the scroll effects.</p>
  <h3>Second Major Section</h3>
  <p>This section details the design and development process. It can include technical details, framework choices, and collaboration stories. The TOC on the right should highlight this section as you scroll past it.</p>
  <p>Final paragraph to conclude the case study, summarizing the results and the impact of the project. This ensures the scroll container has a definitive end.</p>
`,p={args:{title:`Agentic AI Design`,year:`2026 ∙ Holofante R&D lab`,thumbSrc:`/holofante.avif`,device:`iphone-17`,scrolled:!1},render:e=>t`
    <ds-case-slide 
      title="${e.title}" 
      year="${e.year}" 
      thumb-src="${e.thumbSrc}" 
      device="${e.device}"
      ?scrolled="${e.scrolled}">
      
      <div slot="actions">
        <ds-button variant="primary" icon="play">Pitch</ds-button>
        <ds-button variant="secondary" icon="link">Repo</ds-button>
      </div>

      <ds-summary slot="ai-summary" text="This is an AI-generated summary of the case study, highlighting the key achievements and outcomes of the project." active="true">
        <ds-metric-card value="18 → 5.3" label="Days to deliverable"></ds-metric-card>
        <ds-metric-card value="10h+" label="Weekly hours recovered"></ds-metric-card>
      </ds-summary>

      <ds-audio-player slot="audio-player" duration="180" time="45"></ds-audio-player>

      <div slot="description">${f}</div>

    </ds-case-slide>
  `},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Agentic AI Design',
    year: '2026 ∙ Holofante R&D lab',
    thumbSrc: '/holofante.avif',
    device: 'iphone-17',
    scrolled: false
  },
  render: args => html\`
    <ds-case-slide 
      title="\${args.title}" 
      year="\${args.year}" 
      thumb-src="\${args.thumbSrc}" 
      device="\${args.device}"
      ?scrolled="\${args.scrolled}">
      
      <div slot="actions">
        <ds-button variant="primary" icon="play">Pitch</ds-button>
        <ds-button variant="secondary" icon="link">Repo</ds-button>
      </div>

      <ds-summary slot="ai-summary" text="This is an AI-generated summary of the case study, highlighting the key achievements and outcomes of the project." active="true">
        <ds-metric-card value="18 → 5.3" label="Days to deliverable"></ds-metric-card>
        <ds-metric-card value="10h+" label="Weekly hours recovered"></ds-metric-card>
      </ds-summary>

      <ds-audio-player slot="audio-player" duration="180" time="45"></ds-audio-player>

      <div slot="description">\${longDescription}</div>

    </ds-case-slide>
  \`
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,d as default};