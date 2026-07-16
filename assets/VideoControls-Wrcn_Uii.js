import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./Tooltip-DSc1R1lO.js";var n,r=e((()=>{n=`:host{flex-direction:column;gap:20px;display:flex}@media (width<=768px){:host{background-color:var(--color-player-bg,#101218);border:1px solid var(--color-bg,#fff);padding:10px var(--space-xl,24px);border-radius:50px;flex-direction:row;box-shadow:0 10px 30px #00000026}}.icon-btn{cursor:pointer;width:33px;height:33px;color:var(--color-gray-med,#777);background:0 0;border:none;border-radius:50%;justify-content:center;align-items:center;padding:0;display:flex;position:relative}.icon-btn:focus-visible{outline:3px solid var(--color-accent,#2b71f0);outline-offset:2px}.icon-btn:hover circle[fill=white]{fill:var(--color-gray-xlight,#d9d9d9)}.icon-btn:active{transform:scale(.95)}.speed-text{font-family:var(--font-family,sans-serif);fill:var(--color-black,#000);font-size:12px;font-weight:700}.cc-text{font-family:var(--font-family,sans-serif);font-size:10px;font-weight:700}.cc-text.filled{fill:var(--color-black,#000)}.cc-text.outlined{fill:var(--color-white,#fff)}`})),i,a=e((()=>{r(),t(),i=class extends HTMLElement{static get observedAttributes(){return[`playing`,`muted`,`cc-enabled`,`speed`]}constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.innerHTML=`
      <style>${n}</style>
      
      <button class="icon-btn" id="btn-cc" aria-label="Toggle Captions">
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
          <g class="cc-on" style="display: none;">
            <circle cx="16.5" cy="16.5" r="16.5" fill="white" />
            <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" class="cc-text filled">CC</text>
          </g>
          <g class="cc-off">
            <circle cx="16.5" cy="16.5" r="15.5" stroke="white" stroke-width="2" />
            <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" class="cc-text outlined">CC</text>
          </g>
        </svg>
        <ds-tooltip text="Captions" kbd="C" show-kbd="true" position="right"></ds-tooltip>
      </button>

      <button class="icon-btn" id="btn-mute" aria-label="Toggle Mute">
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
          <circle cx="16.5" cy="16.5" r="16.5" fill="white" />
          <path d="M12 14H15L19 11V22L15 19H12V14Z" fill="black" />
          <line class="mute-slash" x1="10" y1="10" x2="23" y2="23" stroke="black" stroke-width="2" style="display: none;" />
        </svg>
        <ds-tooltip text="Mute" kbd="M" show-kbd="true" position="right"></ds-tooltip>
      </button>

      <button class="icon-btn" id="btn-speed" aria-label="Playback Speed">
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
          <circle cx="16.5" cy="16.5" r="16.5" fill="white" />
          <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" class="speed-text">1X</text>
        </svg>
        <ds-tooltip text="Speed" kbd="S" show-kbd="true" position="right"></ds-tooltip>
      </button>

      <button class="icon-btn" id="btn-play" aria-label="Play or Pause">
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
          <circle cx="16.5" cy="16.5" r="16.5" fill="white" />
          <g class="icon-pause" style="display: none;">
            <rect x="12" y="11" width="3" height="11" fill="black" />
            <rect x="18" y="11" width="3" height="11" fill="black" />
          </g>
          <g class="icon-play">
            <path d="M13 10L23 16.5L13 23V10Z" fill="black" />
          </g>
        </svg>
        <ds-tooltip class="play-tooltip" text="Play" kbd="Space" show-kbd="true" position="right"></ds-tooltip>
      </button>

      <button class="icon-btn" id="btn-stop" aria-label="Return to Case">
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
          <circle cx="16.5" cy="16.5" r="16.5" fill="white" />
          <path d="M20 16.5H13M13 16.5L16 13.5M13 16.5L16 19.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <ds-tooltip text="Return" kbd="X" show-kbd="true" position="right"></ds-tooltip>
      </button>
    `,this.bindEvents()}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}bindEvents(){let e=e=>{this.dispatchEvent(new CustomEvent(`ds-video-action`,{detail:{action:e},bubbles:!0,composed:!0}))};this.shadowRoot.getElementById(`btn-cc`).addEventListener(`click`,()=>e(`cc`)),this.shadowRoot.getElementById(`btn-mute`).addEventListener(`click`,()=>e(`mute`)),this.shadowRoot.getElementById(`btn-speed`).addEventListener(`click`,()=>e(`speed`)),this.shadowRoot.getElementById(`btn-play`).addEventListener(`click`,()=>e(`play-pause`)),this.shadowRoot.getElementById(`btn-stop`).addEventListener(`click`,()=>e(`stop`)),this.shadowRoot.querySelectorAll(`.icon-btn`).forEach(e=>{let t=e.querySelector(`ds-tooltip`);e.addEventListener(`mouseenter`,()=>t.setAttribute(`visible`,`true`)),e.addEventListener(`mouseleave`,()=>t.setAttribute(`visible`,`false`)),e.addEventListener(`focus`,()=>t.setAttribute(`visible`,`true`)),e.addEventListener(`blur`,()=>t.setAttribute(`visible`,`false`))})}render(){let e=this.getAttribute(`playing`)===`true`,t=this.getAttribute(`muted`)===`true`,n=this.getAttribute(`cc-enabled`)===`true`,r=this.getAttribute(`speed`)||`1X`;this.shadowRoot.querySelector(`.icon-play`).style.display=e?`none`:`block`,this.shadowRoot.querySelector(`.icon-pause`).style.display=e?`block`:`none`,this.shadowRoot.querySelector(`.play-tooltip`).setAttribute(`text`,e?`Pause`:`Play`),this.shadowRoot.querySelector(`.mute-slash`).style.display=t?`block`:`none`,this.shadowRoot.querySelector(`.cc-on`).style.display=n?`block`:`none`,this.shadowRoot.querySelector(`.cc-off`).style.display=n?`none`:`block`,this.shadowRoot.querySelector(`.speed-text`).textContent=r}},customElements.get(`ds-video-controls`)||customElements.define(`ds-video-controls`,i)}));export{a as t};