import css from './video-controls.css?inline';
import '../../molecules/Tooltip/Tooltip';

export class VideoControls extends HTMLElement {
  static get observedAttributes() {
    return ['playing', 'muted', 'cc-enabled', 'speed'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      
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
    `;

    this.bindEvents();
  }

  // ... (rest of the class remains the same as previous step)
  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }

  bindEvents() {
    const dispatch = (action) => {
      this.dispatchEvent(new CustomEvent('ds-video-action', { detail: { action }, bubbles: true, composed: true }));
    };

    this.shadowRoot.getElementById('btn-cc').addEventListener('click', () => dispatch('cc'));
    this.shadowRoot.getElementById('btn-mute').addEventListener('click', () => dispatch('mute'));
    this.shadowRoot.getElementById('btn-speed').addEventListener('click', () => dispatch('speed'));
    this.shadowRoot.getElementById('btn-play').addEventListener('click', () => dispatch('play-pause'));
    this.shadowRoot.getElementById('btn-stop').addEventListener('click', () => dispatch('stop'));

    const buttons = this.shadowRoot.querySelectorAll('.icon-btn');
    buttons.forEach(btn => {
      const tooltip = btn.querySelector('ds-tooltip');
      btn.addEventListener('mouseenter', () => tooltip.setAttribute('visible', 'true'));
      btn.addEventListener('mouseleave', () => tooltip.setAttribute('visible', 'false'));
      btn.addEventListener('focus', () => tooltip.setAttribute('visible', 'true'));
      btn.addEventListener('blur', () => tooltip.setAttribute('visible', 'false'));
    });
  }

  render() {
    const isPlaying = this.getAttribute('playing') === 'true';
    const isMuted = this.getAttribute('muted') === 'true';
    const isCC = this.getAttribute('cc-enabled') === 'true';
    const speed = this.getAttribute('speed') || '1X';

    this.shadowRoot.querySelector('.icon-play').style.display = isPlaying ? 'none' : 'block';
    this.shadowRoot.querySelector('.icon-pause').style.display = isPlaying ? 'block' : 'none';
    this.shadowRoot.querySelector('.play-tooltip').setAttribute('text', isPlaying ? 'Pause' : 'Play');

    this.shadowRoot.querySelector('.mute-slash').style.display = isMuted ? 'block' : 'none';

    this.shadowRoot.querySelector('.cc-on').style.display = isCC ? 'block' : 'none';
    this.shadowRoot.querySelector('.cc-off').style.display = isCC ? 'none' : 'block';

    this.shadowRoot.querySelector('.speed-text').textContent = speed;
  }
}

if (!customElements.get('ds-video-controls')) {
  customElements.define('ds-video-controls', VideoControls);
}