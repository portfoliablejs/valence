import css from './audio-player.css?inline';
import '../../sub-atomic/Iconography/Iconography.js';
import '../../atoms/Button/Button.js';
import '../../atoms/SeekBar/SeekBar.js';
import '../../atoms/Kbd/Kbd.js';
import '../../atoms/Divider/Divider.js';
import '../Tooltip/Tooltip.js';

export class AudioPlayer extends HTMLElement {
  static get observedAttributes() {
    return [
      'playing',
      'time',
      'duration',
      'speed',
      'hide-on-scroll',
      'auto-scroll',
      'volume',
      'muted',
      'variant'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isDraggingVolume = false;

    // Compressed HTML template string prevents ghost text nodes inside Shadow DOM layouts
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="case-audio-player" tabindex="0" role="region" aria-label="Audio Player"><div class="audio-player-header"><span>Reader</span></div><div class="audio-player-controls-row"><div class="tooltip-wrapper"><ds-button tabindex="0" variant="icon" class="play-btn" icon="play-fill" aria-label="Play"></ds-button><ds-tooltip class="play-tooltip" text="Play" show-kbd="" kbd-label="⇧ Shift" kbd-show-plus="" kbd-key="p" position="top"></ds-tooltip></div><ds-seek-bar class="audio-seek" percent="0" show-tooltip="false" aria-label="Audio position"></ds-seek-bar><span class="audio-time-label">0:00 / 0:00</span><ds-divider orientation="vertical"></ds-divider><div class="volume-container"><div class="tooltip-wrapper"><ds-button tabindex="0" variant="icon" class="volume-btn" icon="volume-on" aria-label="Mute sound"></ds-button><ds-tooltip class="volume-tooltip" text="Mute" show-kbd="" kbd-label="⇧ Shift" kbd-show-plus="" kbd-key="m" position="top"></ds-tooltip></div><div class="volume-seek-wrapper tooltip-wrapper"><ds-seek-bar class="volume-seek" percent="100" show-tooltip="false" aria-label="Volume level"></ds-seek-bar><ds-tooltip class="volume-seek-tooltip" text="Volume" position="top"></ds-tooltip></div></div><ds-divider orientation="vertical"></ds-divider><div class="tooltip-wrapper"><ds-button tabindex="0" variant="icon" class="speed-btn" icon="playback-1x" aria-label="Playback speed"></ds-button><ds-tooltip class="speed-tooltip" text="Speed" show-kbd="" kbd-label="⇧ Shift" kbd-show-plus="" kbd-key="s" position="top"></ds-tooltip></div><div class="tooltip-wrapper"><ds-button tabindex="0" variant="icon" class="hide-btn" icon="eye-open" aria-label="Hide while scrolling"></ds-button><ds-tooltip class="hide-tooltip" text="Hide while scrolling" show-kbd="" kbd-label="⇧ Shift" kbd-show-plus="" kbd-key="h" position="top"></ds-tooltip></div><div class="tooltip-wrapper"><ds-button tabindex="0" variant="icon" class="autoscroll-btn" icon="autoscroll" aria-label="Auto-scroll with audio"></ds-button><ds-tooltip class="autoscroll-tooltip" text="Auto-scroll with audio" show-kbd="" kbd-label="⇧ Shift" kbd-show-plus="" kbd-key="a" position="top"></ds-tooltip></div></div></div>`;

    this.playBtn = this.shadowRoot.querySelector('.play-btn');
    this.playTooltip = this.shadowRoot.querySelector('.play-tooltip');

    this.volumeContainer = this.shadowRoot.querySelector('.volume-container');
    this.volumeBtn = this.shadowRoot.querySelector('.volume-btn');
    this.volumeTooltip = this.shadowRoot.querySelector('.volume-tooltip');
    this.volumeSeekBar = this.shadowRoot.querySelector('.volume-seek');

    this.speedBtn = this.shadowRoot.querySelector('.speed-btn');
    this.speedTooltip = this.shadowRoot.querySelector('.speed-tooltip');
    
    this.hideBtn = this.shadowRoot.querySelector('.hide-btn');
    this.hideTooltip = this.shadowRoot.querySelector('.hide-tooltip');
    
    this.autoscrollBtn = this.shadowRoot.querySelector('.autoscroll-btn');
    this.autoscrollTooltip = this.shadowRoot.querySelector('.autoscroll-tooltip');

    this.audioSeekBar = this.shadowRoot.querySelector('.audio-seek');
    this.timeLabel = this.shadowRoot.querySelector('.audio-time-label');

    this._onKeyDown = this._onKeyDown.bind(this);
    this._onWindowMouseUp = this._onWindowMouseUp.bind(this);

    this.volumeContainer.addEventListener('mouseleave', () => {
      if (!this.isDraggingVolume) {
        this.volumeContainer.classList.remove('is-expanded');
      }
    });

    const collapseVolume = () => this.volumeContainer.classList.remove('is-expanded');

    this.playBtn.addEventListener('click', () => {
      collapseVolume();
      const nextState = !(this.getAttribute('playing') === 'true');
      this.setAttribute('playing', nextState.toString());
      this.dispatchEvent(new CustomEvent('ds-audio-play-toggle', { detail: { playing: nextState }, bubbles: true, composed: true }));
    });

    this.volumeBtn.addEventListener('click', () => {
      let nextMuted = !(this.getAttribute('muted') === 'true');
      let currentVolume = parseFloat(this.getAttribute('volume'));
      if (isNaN(currentVolume)) currentVolume = 100;

      if (currentVolume === 0) {
        this.setAttribute('volume', '100');
        nextMuted = false;
      }

      this.setAttribute('muted', nextMuted.toString());
      this.dispatchEvent(new CustomEvent('ds-audio-mute-toggle', { detail: { muted: nextMuted }, bubbles: true, composed: true }));
    });

    this.speedBtn.addEventListener('click', () => {
      collapseVolume();
      const speeds = ['0.75X', '1X', '1.25X', '1.5X', '1.75X', '2X'];
      const current = this.getAttribute('speed') || '1X';
      const idx = speeds.indexOf(current);
      const nextSpeed = speeds[(idx + 1) % speeds.length];
      this.setAttribute('speed', nextSpeed);
      this.dispatchEvent(new CustomEvent('ds-audio-speed-cycle', { detail: { speed: nextSpeed }, bubbles: true, composed: true }));
    });

    this.hideBtn.addEventListener('click', () => {
      collapseVolume();
      const nextState = !(this.getAttribute('hide-on-scroll') === 'true');
      this.setAttribute('hide-on-scroll', nextState.toString());
      this.dispatchEvent(new CustomEvent('ds-audio-hide-toggle', { detail: { hideOnScroll: nextState }, bubbles: true, composed: true }));
    });

    this.autoscrollBtn.addEventListener('click', () => {
      collapseVolume();
      const nextState = !(this.getAttribute('auto-scroll') === 'true');
      this.setAttribute('auto-scroll', nextState.toString());
      this.dispatchEvent(new CustomEvent('ds-audio-autoscroll-toggle', { detail: { autoScroll: nextState }, bubbles: true, composed: true }));
    });

    this.volumeSeekBar.addEventListener('mousedown', () => {
      this.isDraggingVolume = true;
      this.volumeContainer.classList.add('is-expanded');
    });

    this.volumeSeekBar.addEventListener('touchstart', () => {
      this.isDraggingVolume = true;
      this.volumeContainer.classList.add('is-expanded');
    }, { passive: true });

    this.audioSeekBar.addEventListener('ds-seek', (e) => {
      collapseVolume();
      const duration = parseFloat(this.getAttribute('duration')) || 0;
      const newTime = (e.detail.percent / 100) * duration;
      this.setAttribute('time', newTime.toString());

      this.dispatchEvent(new CustomEvent('ds-audio-seek', { detail: { percent: e.detail.percent }, bubbles: true, composed: true }));
    });

    this.volumeSeekBar.addEventListener('ds-seek', (e) => {
      this.setAttribute('volume', e.detail.percent.toString());
      if (e.detail.percent > 0) {
        this.setAttribute('muted', 'false');
      }
      this.dispatchEvent(new CustomEvent('ds-audio-volume-change', { detail: { volume: e.detail.percent }, bubbles: true, composed: true }));
    });
  }

  connectedCallback() {
    this._observeRootAccessibility();
    this.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('mouseup', this._onWindowMouseUp);
    window.addEventListener('touchend', this._onWindowMouseUp);
    this.render();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
    this.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('mouseup', this._onWindowMouseUp);
    window.removeEventListener('touchend', this._onWindowMouseUp);
  }

  attributeChangedCallback() {
    this.render();
  }

  _onWindowMouseUp(e) {
    if (this.isDraggingVolume) {
      this.isDraggingVolume = false;
      if (e && e.clientX !== undefined) {
        const rect = this.volumeContainer.getBoundingClientRect();
        const isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (!isInside) {
          this.volumeContainer.classList.remove('is-expanded');
        }
      } else {
        this.volumeContainer.classList.remove('is-expanded');
      }
    }
  }

  // Relative Seek Command
  _seekRelative(seconds) {
    const time = parseFloat(this.getAttribute('time')) || 0;
    const duration = parseFloat(this.getAttribute('duration')) || 0;
    if (duration === 0) return;
    
    let newTime = Math.max(0, Math.min(duration, time + seconds));
    const percent = (newTime / duration) * 100;
    
    this.setAttribute('time', newTime.toString());
    this.audioSeekBar.setAttribute('percent', percent.toString());
    this.dispatchEvent(new CustomEvent('ds-audio-seek', { detail: { percent }, bubbles: true, composed: true }));
  }

  // Relative Volume Command
  _volumeRelative(amount) {
    let volume = parseFloat(this.getAttribute('volume'));
    if (isNaN(volume)) volume = 100;
    if (this.getAttribute('muted') === 'true') volume = 0;

    let newVolume = Math.max(0, Math.min(100, volume + amount));
    this.setAttribute('volume', newVolume.toString());
    
    if (newVolume > 0) {
      this.setAttribute('muted', 'false');
    }
    
    this.volumeSeekBar.setAttribute('percent', newVolume.toString());
    this.dispatchEvent(new CustomEvent('ds-audio-volume-change', { detail: { volume: newVolume }, bubbles: true, composed: true }));
  }

  _onKeyDown(e) {
    // Legacy Shift Modifiers
    if (e.shiftKey) {
      const key = e.key.toUpperCase();
      if (key === 'P') { e.preventDefault(); this.playBtn.click(); }
      else if (key === 'S') { e.preventDefault(); this.speedBtn.click(); }
      else if (key === 'H') { e.preventDefault(); this.hideBtn.click(); }
      else if (key === 'A') { e.preventDefault(); this.autoscrollBtn.click(); }
      else if (key === 'M') { e.preventDefault(); this.volumeBtn.click(); }
      return; 
    }

    const active = this.shadowRoot.activeElement;
    const playerContainer = this.shadowRoot.querySelector('.case-audio-player');
    const isPlayerFocused = active === playerContainer;
    const isButtonFocused = active && active.tagName.toLowerCase() === 'ds-button';
    
    // Complete Enter & Space execution
    if (e.key === 'Enter' || e.key === ' ') {
      if (isButtonFocused) {
        e.preventDefault();
        active.click();
      } else if (isPlayerFocused) {
        e.preventDefault();
        this.playBtn.click();
      }
    }

    // Complete Global Player Arrows Traversal
    if (isPlayerFocused) {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        this._seekRelative(5);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this._seekRelative(-5);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this._volumeRelative(5);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        this._volumeRelative(-5);
      }
    }
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

  formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  _getSpeedIcon(speed) {
    const normalized = String(speed).toLowerCase().replace('x', '').replace('.', '-');
    const iconName = `playback-${normalized}x`;
    const validIcons = ['playback-0-75x', 'playback-1x', 'playback-1-25x', 'playback-1-5x', 'playback-1-75x', 'playback-2x'];
    return validIcons.includes(iconName) ? iconName : 'playback-1x';
  }

  render() {
    const isPlaying = this.getAttribute('playing') === 'true';
    const time = parseFloat(this.getAttribute('time')) || 0;
    const duration = parseFloat(this.getAttribute('duration')) || 0;
    const speed = this.getAttribute('speed') || '1X';
    const hideOnScroll = this.getAttribute('hide-on-scroll') === 'true';
    const autoScroll = this.getAttribute('auto-scroll') === 'true';
    const isMuted = this.getAttribute('muted') === 'true';
    
    let rawVolume = parseFloat(this.getAttribute('volume'));
    if (isNaN(rawVolume)) rawVolume = 100;
    const effectiveVolume = isMuted ? 0 : rawVolume;

    const progress = duration > 0 ? (time / duration) * 100 : 0;

    // Play/Pause
    this.playBtn.setAttribute('icon', isPlaying ? 'pause-fill' : 'play-fill');
    this.playBtn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
    if (this.playTooltip) {
      this.playTooltip.setAttribute('text', isPlaying ? 'Pause' : 'Play');
    }

    // Audio Position
    this.audioSeekBar.setAttribute('percent', progress.toString());
    this.timeLabel.textContent = `${this.formatTime(time)} / ${this.formatTime(duration)}`;

    // Volume Dynamic Iconography
    let volumeIcon = 'volume-high';
    if (isMuted || effectiveVolume === 0) volumeIcon = 'volume-mute';
    else if (effectiveVolume < 33) volumeIcon = 'volume-low';
    else if (effectiveVolume < 67) volumeIcon = 'volume-medium';

    const muteLabel = (isMuted || effectiveVolume === 0) ? 'Unmute' : 'Mute';
    this.volumeBtn.setAttribute('icon', volumeIcon);
    this.volumeBtn.setAttribute('aria-label', muteLabel);
    if (this.volumeTooltip) {
      this.volumeTooltip.setAttribute('text', muteLabel);
    }
    this.volumeSeekBar.setAttribute('percent', effectiveVolume.toString());

    // Speed Control
    this.speedBtn.setAttribute('icon', this._getSpeedIcon(speed));
    this.speedBtn.setAttribute('aria-label', `Playback speed ${speed}`);
    if (this.speedTooltip) {
      this.speedTooltip.setAttribute('text', `Speed (${speed})`);
    }

    // Scroll States
    this.hideBtn.setAttribute('icon', hideOnScroll ? 'eye-closed' : 'eye-open');
    this.hideBtn.classList.toggle('is-active', hideOnScroll);
    if (this.hideTooltip) {
      this.hideTooltip.setAttribute('text', hideOnScroll ? 'Show while scrolling' : 'Hide while scrolling');
    }

    this.autoscrollBtn.setAttribute('icon', autoScroll ? 'autoscroll' : 'autoscroll-closed');
    this.autoscrollBtn.classList.toggle('is-active', autoScroll);
    if (this.autoscrollTooltip) {
      this.autoscrollTooltip.setAttribute('text', autoScroll ? 'Disable auto-scroll' : 'Auto-scroll with audio');
    }
  }
}

if (!customElements.get('ds-audio-player')) {
  customElements.define('ds-audio-player', AudioPlayer);
}