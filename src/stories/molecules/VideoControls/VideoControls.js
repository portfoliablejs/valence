import css from './video-controls.css?inline';
import '../../molecules/Tooltip/Tooltip';
import '../../atoms/Button/Button.js';
import '../../atoms/Icon/Iconography.js';

export class VideoControls extends HTMLElement {
  static get observedAttributes() {
    return [
      'playing', 'muted', 'cc-enabled', 'speed',
      'label-play', 'label-pause', 'label-cc-on', 'label-cc-off',
      'label-mute', 'label-unmute', 'label-speed', 'label-return'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // Tightly compressed single line structure completely purges ghost spacing nodes from layouts
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="video-controls-container"><div class="tooltip-wrapper"><ds-button variant="floating" icon-variant="fill" id="btn-cc" icon="subtitle-closed" aria-label="Toggle Captions"></ds-button><ds-tooltip class="cc-tooltip" text="Captions" kbd-label="C" show-kbd="true" position="right"></ds-tooltip></div><div class="tooltip-wrapper"><ds-button variant="floating" icon-variant="fill" id="btn-mute" icon="volume-on" aria-label="Toggle Mute"></ds-button><ds-tooltip class="mute-tooltip" text="Mute" kbd-label="M" show-kbd="true" position="right"></ds-tooltip></div><div class="tooltip-wrapper"><ds-button variant="floating" icon-variant="fill" id="btn-speed" icon="playback-1x" aria-label="Playback Speed"></ds-button><ds-tooltip class="speed-tooltip" text="Speed" kbd-label="S" show-kbd="true" position="right"></ds-tooltip></div><div class="tooltip-wrapper"><ds-button variant="floating" icon-variant="fill" id="btn-play" icon="play" aria-label="Play or Pause"></ds-button><ds-tooltip class="play-tooltip" text="Play" kbd-label="Space" show-kbd="true" position="right"></ds-tooltip></div><div class="tooltip-wrapper"><ds-button variant="floating" icon-variant="fill" id="btn-stop" icon="arrow-left" aria-label="Return to Case"></ds-button><ds-tooltip class="stop-tooltip" text="Return" kbd-label="Esc" show-kbd="true" position="right"></ds-tooltip></div></div>`;

    this.bindEvents();
  }

  connectedCallback() {
    this._observeRootAccessibility();
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
  }

  bindEvents() {
    const dispatch = (action) => {
      this.dispatchEvent(new CustomEvent('ds-video-action', { 
        detail: { action }, 
        bubbles: true, 
        composed: true 
      }));
    };

    this.shadowRoot.getElementById('btn-cc').addEventListener('click', () => dispatch('cc'));
    this.shadowRoot.getElementById('btn-mute').addEventListener('click', () => dispatch('mute'));
    this.shadowRoot.getElementById('btn-speed').addEventListener('click', () => dispatch('speed'));
    this.shadowRoot.getElementById('btn-play').addEventListener('click', () => dispatch('play-pause'));
    this.shadowRoot.getElementById('btn-stop').addEventListener('click', () => dispatch('stop'));
  }

  _getSpeedIcon(speed) {
    const normalized = String(speed).toLowerCase().replace('x', '').replace('.', '-');
    const iconName = `playback-${normalized}x`;
    const validIcons = ['playback-0-75x', 'playback-1x', 'playback-1-25x', 'playback-1-5x', 'playback-1-75x', 'playback-2x'];
    return validIcons.includes(iconName) ? iconName : 'playback-1x';
  }

  _observeRootAccessibility() {
    const root = this.ownerDocument.documentElement;
    const sync = () => {
      this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
      this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
      this.toggleAttribute('a11y-large-text', root.classList.contains('a11y-large-text'));
      this.toggleAttribute('a11y-dyslexia', root.classList.contains('a11y-dyslexia'));
      this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
      this.toggleAttribute('a11y-focus-mode', root.classList.contains('a11y-focus-mode'));
      this.toggleAttribute('a11y-forced-colors', root.classList.contains('a11y-forced-colors'));
    };

    sync();
    this._themeObserver = new MutationObserver(sync);
    this._themeObserver.observe(root, { attributes: true, attributeFilter: ['class'] });
  }

  render() {
    const isPlaying = this.getAttribute('playing') === 'true';
    const isMuted = this.getAttribute('muted') === 'true';
    const isCC = this.getAttribute('cc-enabled') === 'true';
    const speed = this.getAttribute('speed') || '1X';

    // Ingest multi-locale translation bindings
    const labelPlay = this.getAttribute('label-play') || 'Play';
    const labelPause = this.getAttribute('label-pause') || 'Pause';
    const labelCcOn = this.getAttribute('label-cc-on') || 'Captions On';
    const labelCcOff = this.getAttribute('label-cc-off') || 'Captions';
    const labelMute = this.getAttribute('label-mute') || 'Mute';
    const labelUnmute = this.getAttribute('label-unmute') || 'Unmute';
    const labelSpeed = this.getAttribute('label-speed') || 'Speed';
    const labelReturn = this.getAttribute('label-return') || 'Return';

    // Playback Toggle Element Allocation
    const playBtn = this.shadowRoot.getElementById('btn-play');
    const playTooltip = this.shadowRoot.querySelector('.play-tooltip');
    if (playBtn) {
      playBtn.setAttribute('icon', isPlaying ? 'pause' : 'play');
      playBtn.setAttribute('aria-label', isPlaying ? labelPause : labelPlay);
    }
    if (playTooltip) {
      playTooltip.setAttribute('text', isPlaying ? labelPause : labelPlay);
    }

    // Audio Control Element Allocation
    const muteBtn = this.shadowRoot.getElementById('btn-mute');
    const muteTooltip = this.shadowRoot.querySelector('.mute-tooltip');
    if (muteBtn) {
      muteBtn.setAttribute('icon', isMuted ? 'volume-mute' : 'volume-on');
      muteBtn.setAttribute('aria-label', isMuted ? labelUnmute : labelMute);
    }
    if (muteTooltip) {
      muteTooltip.setAttribute('text', isMuted ? labelUnmute : labelMute);
    }

    // Subtitle / Closed Caption Element Allocation
    const ccBtn = this.shadowRoot.getElementById('btn-cc');
    const ccTooltip = this.shadowRoot.querySelector('.cc-tooltip');
    if (ccBtn) {
      ccBtn.setAttribute('icon', isCC ? 'subtitle-on' : 'subtitle-closed');
      ccBtn.setAttribute('aria-label', isCC ? labelCcOn : labelCcOff);
    }
    if (ccTooltip) {
      ccTooltip.setAttribute('text', isCC ? labelCcOn : labelCcOff);
    }

    // Playback Rate Gauge Element Allocation
    const speedBtn = this.shadowRoot.getElementById('btn-speed');
    const speedTooltip = this.shadowRoot.querySelector('.speed-tooltip');
    if (speedBtn) {
      speedBtn.setAttribute('icon', this._getSpeedIcon(speed));
      speedBtn.setAttribute('aria-label', `${labelSpeed} ${speed}`);
    }
    if (speedTooltip) {
      speedTooltip.setAttribute('text', `${labelSpeed} (${speed})`);
    }

    // Termination / Return Navigation Element Allocation
    const stopBtn = this.shadowRoot.getElementById('btn-stop');
    const stopTooltip = this.shadowRoot.querySelector('.stop-tooltip');
    if (stopBtn) {
      stopBtn.setAttribute('icon', 'arrow-left');
      stopBtn.setAttribute('aria-label', labelReturn);
    }
    if (stopTooltip) {
      stopTooltip.setAttribute('text', labelReturn);
    }
  }
}

if (!customElements.get('ds-video-controls')) {
  customElements.define('ds-video-controls', VideoControls);
}