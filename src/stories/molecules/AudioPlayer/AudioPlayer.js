import css from './audio-player.css?inline';
import '../../atoms/Icon/Iconography.js';
import '../../atoms/Button/Button.js';
import '../../atoms/SeekBar/SeekBar.js';
import '../../atoms/KBD/Kbd.js';
import '../../atoms/Divider/Divider.js';
import '../Tooltip/Tooltip.js';

const SPEED_TOKENS = ['0.75X', '1X', '1.25X', '1.5X', '1.75X', '2X'];

export class AudioPlayer extends HTMLElement {
  static get observedAttributes() {
    return [
      'audio-src',
      'src',
      'data-audio-src',
      'preload',
      'playing',
      'time',
      'duration',
      'speed',
      'hide-on-scroll',
      'auto-scroll',
      'volume',
      'muted',
      'variant',
      'label-reader',
      'label-play',
      'label-pause',
      'label-mute',
      'label-unmute',
      'label-speed',
      'label-hide',
      'label-show',
      'label-autoscroll-on',
      'label-autoscroll-off',
      'label-volume',
      'label-volume-level',
      'label-audio-pos'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isDraggingVolume = false;
    this._audioSrc = '';
    this._audioSourceCandidates = [];
    this._audioSourceIndex = 0;
    this._isSyncingFromAudio = false;
    this._pendingPlayPromise = null;
    this._deferredDisconnectPause = null;
    this.audioEl = document.createElement('audio');
    this.audioEl.preload = this.getAttribute('preload') || 'metadata';

    // Compressed HTML template string prevents ghost text nodes inside Shadow DOM layouts
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="case-audio-player" tabindex="0" role="region" aria-label="Audio Player"><div class="audio-player-header"><span class="header-label">Reader</span></div><div class="audio-player-controls-row"><div class="tooltip-wrapper"><ds-button tabindex="0" variant="tertiary" has-text="false" has-icon class="play-btn" icon="play-fill" aria-label="Play"></ds-button><ds-tooltip class="play-tooltip" text="Play" show-kbd="" kbd-label="⇧ Shift" kbd-show-plus="" kbd-key="p" position="bottom"></ds-tooltip></div><ds-seek-bar class="audio-seek" percent="0" show-tooltip="false" aria-label="Audio position"></ds-seek-bar><span class="audio-time-label">0:00 / 0:00</span><ds-divider orientation="vertical"></ds-divider><div class="volume-container"><div class="tooltip-wrapper"><ds-button tabindex="0" variant="tertiary" has-text="false" has-icon class="volume-btn" icon="volume-on" aria-label="Mute sound"></ds-button><ds-tooltip class="volume-tooltip" text="Mute" show-kbd="" kbd-label="⇧ Shift" kbd-show-plus="" kbd-key="m" position="bottom"></ds-tooltip></div><div class="volume-seek-wrapper tooltip-wrapper"><ds-seek-bar class="volume-seek" percent="100" show-tooltip="false" aria-label="Volume level"></ds-seek-bar><ds-tooltip class="volume-seek-tooltip" text="Volume" position="bottom"></ds-tooltip></div></div><ds-divider orientation="vertical"></ds-divider><div class="tooltip-wrapper"><ds-button tabindex="0" variant="tertiary" has-text="false" has-icon class="speed-btn" icon="playback-1x" aria-label="Playback speed"></ds-button><ds-tooltip class="speed-tooltip" text="Speed" show-kbd="" kbd-label="⇧ Shift" kbd-show-plus="" kbd-key="s" position="bottom"></ds-tooltip></div><div class="tooltip-wrapper"><ds-button tabindex="0" variant="tertiary" has-text="false" has-icon class="hide-btn" icon="eye-open" aria-label="Hide while scrolling"></ds-button><ds-tooltip class="hide-tooltip" text="Hide while scrolling" show-kbd="" kbd-label="⇧ Shift" kbd-show-plus="" kbd-key="h" position="bottom"></ds-tooltip></div><div class="tooltip-wrapper"><ds-button tabindex="0" variant="tertiary" has-text="false" has-icon class="autoscroll-btn" icon="autoscroll" aria-label="Auto-scroll with audio"></ds-button><ds-tooltip class="autoscroll-tooltip" text="Auto-scroll with audio" show-kbd="" kbd-label="⇧ Shift" kbd-show-plus="" kbd-key="a" position="bottom"></ds-tooltip></div></div></div>`;

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
      this._togglePlayback();
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
      this._syncAudioStateFromAttributes('muted');
      this.dispatchEvent(new CustomEvent('ds-audio-mute-toggle', { detail: { muted: nextMuted }, bubbles: true, composed: true }));
    });

    this.speedBtn.addEventListener('click', () => {
      collapseVolume();
      const current = this.getAttribute('speed') || '1X';
      const idx = SPEED_TOKENS.indexOf(current);
      const nextSpeed = SPEED_TOKENS[(idx + 1 + SPEED_TOKENS.length) % SPEED_TOKENS.length];
      this.setAttribute('speed', nextSpeed);
      this._syncAudioStateFromAttributes('speed');
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
      this._setAttributeIfChanged('time', newTime.toString());
      if (this.audioEl && Number.isFinite(newTime)) {
        this.audioEl.currentTime = newTime;
      }

      this.dispatchEvent(new CustomEvent('ds-audio-seek', { detail: { percent: e.detail.percent }, bubbles: true, composed: true }));
    });

    this.volumeSeekBar.addEventListener('ds-seek', (e) => {
      this.setAttribute('volume', e.detail.percent.toString());
      if (e.detail.percent > 0) {
        this.setAttribute('muted', 'false');
      }
      this._syncAudioStateFromAttributes('volume');
      this.dispatchEvent(new CustomEvent('ds-audio-volume-change', { detail: { volume: e.detail.percent }, bubbles: true, composed: true }));
    });

    this._onAudioLoadedMetadata = () => {
      this._debugLog('loadedmetadata', {
        src: this._audioSrc,
        duration: this.audioEl.duration,
        readyState: this.audioEl.readyState,
        networkState: this.audioEl.networkState
      });
      this.dispatchEvent(new CustomEvent('ds-audio-metadata', {
        detail: {
          duration: Number.isFinite(this.audioEl.duration) ? this.audioEl.duration : 0,
          currentTime: Number.isFinite(this.audioEl.currentTime) ? this.audioEl.currentTime : 0
        },
        bubbles: true,
        composed: true
      }));
      this._isSyncingFromAudio = true;
      this._setAttributeIfChanged('duration', String(this.audioEl.duration || 0));
      this._setAttributeIfChanged('time', String(this.audioEl.currentTime || 0));
      this._isSyncingFromAudio = false;
      this.render();
    };

    this._onAudioTimeUpdate = () => {
      const duration = Number.isFinite(this.audioEl.duration) ? this.audioEl.duration : 0;
      const currentTime = Number.isFinite(this.audioEl.currentTime) ? this.audioEl.currentTime : 0;
      this._isSyncingFromAudio = true;
      this._setAttributeIfChanged('time', String(currentTime));
      if (duration > 0) {
        this._setAttributeIfChanged('duration', String(duration));
      }
      this._isSyncingFromAudio = false;
      this.dispatchEvent(new CustomEvent('ds-audio-timeupdate', {
        detail: {
          time: currentTime,
          duration,
          progress: duration > 0 ? (currentTime / duration) : 0
        },
        bubbles: true,
        composed: true
      }));
      this.render();
    };

    this._onAudioPlay = () => {
      this._debugLog('play event', {
        currentTime: this.audioEl.currentTime,
        readyState: this.audioEl.readyState,
        paused: this.audioEl.paused
      });
      this._pendingPlayPromise = null;
      this._isSyncingFromAudio = true;
      this._setAttributeIfChanged('playing', 'true');
      this._isSyncingFromAudio = false;
      this.render();
    };

    this._onAudioPause = () => {
      this._debugLog('pause event', {
        currentTime: this.audioEl.currentTime,
        ended: this.audioEl.ended,
        readyState: this.audioEl.readyState
      });
      this._pendingPlayPromise = null;
      this._isSyncingFromAudio = true;
      this._setAttributeIfChanged('playing', 'false');
      this._isSyncingFromAudio = false;
      this.render();
    };

    this._onAudioEnded = () => {
      this._debugLog('ended event', {
        duration: this.audioEl.duration,
        currentTime: this.audioEl.currentTime
      });
      this._pendingPlayPromise = null;
      this._isSyncingFromAudio = true;
      this._setAttributeIfChanged('playing', 'false');
      this._setAttributeIfChanged('time', String(this.audioEl.duration || 0));
      this._isSyncingFromAudio = false;
      this.dispatchEvent(new CustomEvent('ds-audio-ended', { bubbles: true, composed: true }));
      this.render();
    };

    this._onAudioError = () => {
      const wantsPlay = this.getAttribute('playing') === 'true';
      this._debugWarn('error event', {
        src: this.audioEl.currentSrc || this._audioSrc,
        code: this.audioEl.error?.code || 0,
        message: this.audioEl.error?.message || 'n/a',
        networkState: this.audioEl.networkState,
        readyState: this.audioEl.readyState
      });

      if (this._tryNextAudioSourceCandidate(wantsPlay)) {
        return;
      }

      this._pendingPlayPromise = null;
      this._isSyncingFromAudio = true;
      this._setAttributeIfChanged('playing', 'false');
      this._isSyncingFromAudio = false;
      this.dispatchEvent(new CustomEvent('ds-audio-error', {
        detail: { code: this.audioEl.error?.code || 0 },
        bubbles: true,
        composed: true
      }));
      this.render();
    };

    this.audioEl.addEventListener('loadedmetadata', this._onAudioLoadedMetadata);
    this.audioEl.addEventListener('canplay', () => {
      this._debugLog('canplay event', {
        src: this.audioEl.currentSrc || this._audioSrc,
        readyState: this.audioEl.readyState,
        networkState: this.audioEl.networkState
      });
    });
    this.audioEl.addEventListener('timeupdate', this._onAudioTimeUpdate);
    this.audioEl.addEventListener('play', this._onAudioPlay);
    this.audioEl.addEventListener('pause', this._onAudioPause);
    this.audioEl.addEventListener('ended', this._onAudioEnded);
    this.audioEl.addEventListener('error', this._onAudioError);
  }

  connectedCallback() {
    if (this._deferredDisconnectPause !== null) {
      clearTimeout(this._deferredDisconnectPause);
      this._deferredDisconnectPause = null;
    }

    this.headerLabel = this.shadowRoot.querySelector('.header-label');
    this._observeRootAccessibility();
    this.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('mouseup', this._onWindowMouseUp);
    window.addEventListener('touchend', this._onWindowMouseUp);
    this._syncAudioSourceFromAttributes();
    this._syncAudioStateFromAttributes();
    this._debugLog('connected', {
      attrs: {
        audioSrc: this.getAttribute('audio-src'),
        src: this.getAttribute('src'),
        dataAudioSrc: this.getAttribute('data-audio-src')
      },
      resolvedSrc: this._resolveAudioSrc(),
      locationHref: typeof window !== 'undefined' ? window.location.href : ''
    });
    this.render();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
    this.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('mouseup', this._onWindowMouseUp);
    window.removeEventListener('touchend', this._onWindowMouseUp);

    // Defer pause to avoid interrupting playback during same-tick DOM reparenting.
    if (this._deferredDisconnectPause !== null) {
      clearTimeout(this._deferredDisconnectPause);
    }
    this._deferredDisconnectPause = setTimeout(() => {
      this._deferredDisconnectPause = null;
      if (this.isConnected) return;
      if (this.audioEl) {
        this.audioEl.pause();
      }
    }, 0);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    if (name === 'audio-src' || name === 'src' || name === 'data-audio-src') {
      this._syncAudioSourceFromAttributes();
    }

    if (name === 'preload' && this.audioEl) {
      this.audioEl.preload = newValue || 'metadata';
    }

    if (!this._isSyncingFromAudio) {
      this._syncAudioStateFromAttributes(name);
    }

    this.render();
  }

  _setAttributeIfChanged(name, value) {
    if (this.getAttribute(name) !== value) {
      this.setAttribute(name, value);
    }
  }

  _debugEnabled() {
    if (this.hasAttribute('debug-audio')) return true;
    if (typeof window !== 'undefined' && window.PORTFOLIABLE_AUDIO_DEBUG === true) return true;
    return false;
  }

  _debugLog(message, detail = null) {
    if (!this._debugEnabled()) return;
    if (detail === null) {
      console.log('[ds-audio-player]', message);
      return;
    }
    console.log('[ds-audio-player]', message, detail);
  }

  _debugWarn(message, detail = null) {
    if (!this._debugEnabled()) return;
    if (detail === null) {
      console.warn('[ds-audio-player]', message);
      return;
    }
    console.warn('[ds-audio-player]', message, detail);
  }

  _resolveAudioSrc() {
    const rawSrc = this.getAttribute('audio-src')
      || this.getAttribute('src')
      || this.getAttribute('data-audio-src')
      || '';
    return String(rawSrc).trim();
  }

  _parseSpeedValue(token) {
    const parsed = Number.parseFloat(String(token || '').toLowerCase().replace('x', ''));
    if (!Number.isFinite(parsed) || parsed <= 0) {
      return 1;
    }
    return parsed;
  }

  _buildAudioSourceCandidates(src) {
    const normalized = String(src || '').trim();
    if (!normalized) return [];

    const candidates = [normalized];
    if (normalized.startsWith('/src/content/')) {
      candidates.push(`/templates${normalized}`);
    }
    if (normalized.startsWith('src/content/')) {
      candidates.push(`/templates/${normalized}`);
    }

    return [...new Set(candidates.map((item) => item.trim()).filter(Boolean))];
  }

  _applyAudioSourceCandidate() {
    const candidate = this._audioSourceCandidates[this._audioSourceIndex] || '';
    if (!candidate) return false;

    this.audioEl.src = candidate;
    this.audioEl.load();
    this._debugLog('audio source applied', {
      candidate,
      index: this._audioSourceIndex,
      total: this._audioSourceCandidates.length,
      currentSrc: this.audioEl.currentSrc || candidate,
      preload: this.audioEl.preload
    });

    return true;
  }

  _tryNextAudioSourceCandidate(wantsPlay = false) {
    const nextIndex = this._audioSourceIndex + 1;
    if (nextIndex >= this._audioSourceCandidates.length) {
      return false;
    }

    this._audioSourceIndex = nextIndex;
    const nextCandidate = this._audioSourceCandidates[this._audioSourceIndex] || '';
    this._debugWarn('retrying audio source candidate', {
      nextCandidate,
      index: this._audioSourceIndex,
      total: this._audioSourceCandidates.length
    });

    const applied = this._applyAudioSourceCandidate();
    if (applied && wantsPlay) {
      this._syncAudioStateFromAttributes('playing');
    }

    return applied;
  }

  _syncAudioSourceFromAttributes() {
    if (!this.audioEl) return;

    const nextSrc = this._resolveAudioSrc();
    this._debugLog('sync source request', {
      nextSrc,
      previousSrc: this._audioSrc,
      locationHref: typeof window !== 'undefined' ? window.location.href : ''
    });
    if (nextSrc === this._audioSrc) {
      return;
    }

    this._audioSrc = nextSrc;
    this._audioSourceCandidates = this._buildAudioSourceCandidates(nextSrc);
    this._audioSourceIndex = 0;

    if (!nextSrc) {
      this._debugWarn('empty audio source, playback disabled');
      this.audioEl.pause();
      this.audioEl.removeAttribute('src');
      this.audioEl.load();

      this._isSyncingFromAudio = true;
      this._setAttributeIfChanged('playing', 'false');
      this._setAttributeIfChanged('time', '0');
      this._setAttributeIfChanged('duration', '0');
      this._isSyncingFromAudio = false;
      return;
    }

    this._debugLog('audio source candidates prepared', {
      candidates: this._audioSourceCandidates
    });
    this._applyAudioSourceCandidate();

    this._isSyncingFromAudio = true;
    this._setAttributeIfChanged('playing', 'false');
    this._setAttributeIfChanged('time', '0');
    this._isSyncingFromAudio = false;
  }

  _syncAudioStateFromAttributes(changedName = '') {
    if (!this.audioEl) return;

    if (!changedName || changedName === 'time') {
      const time = Number.parseFloat(this.getAttribute('time')) || 0;
      if (Number.isFinite(time) && Math.abs((this.audioEl.currentTime || 0) - time) > 0.35) {
        this.audioEl.currentTime = Math.max(0, time);
      }
    }

    if (!changedName || changedName === 'speed') {
      this.audioEl.playbackRate = this._parseSpeedValue(this.getAttribute('speed') || '1X');
    }

    if (!changedName || changedName === 'muted') {
      this.audioEl.muted = this.getAttribute('muted') === 'true';
    }

    if (!changedName || changedName === 'volume') {
      let rawVolume = Number.parseFloat(this.getAttribute('volume'));
      if (!Number.isFinite(rawVolume)) rawVolume = 100;
      const clampedVolume = Math.min(100, Math.max(0, rawVolume));
      this.audioEl.volume = clampedVolume / 100;
    }

    if (!changedName || changedName === 'playing') {
      const wantsPlay = this.getAttribute('playing') === 'true';
      this._debugLog('sync playing state', {
        changedName,
        wantsPlay,
        paused: this.audioEl.paused,
        src: this.audioEl.currentSrc || this._audioSrc,
        readyState: this.audioEl.readyState,
        networkState: this.audioEl.networkState
      });
      if (wantsPlay && !this.audioEl.paused) {
        return;
      }
      if (!wantsPlay && this.audioEl.paused) {
        return;
      }
      if (wantsPlay) {
        const playAttempt = this.audioEl.play();
        this._pendingPlayPromise = playAttempt;
        if (playAttempt?.catch) {
          playAttempt.catch((error) => {
            if (this._pendingPlayPromise !== playAttempt) return;
            this._debugWarn('play() rejected', {
              name: error?.name || 'unknown',
              message: error?.message || 'unknown',
              src: this.audioEl.currentSrc || this._audioSrc,
              readyState: this.audioEl.readyState,
              networkState: this.audioEl.networkState
            });
            this._pendingPlayPromise = null;
            this._isSyncingFromAudio = true;
            this._setAttributeIfChanged('playing', 'false');
            this._isSyncingFromAudio = false;
            this.render();
          });
        }
      } else {
        this.audioEl.pause();
      }
    }
  }

  _togglePlayback() {
    if (!this._audioSrc) {
      this._debugWarn('toggle requested without audio source');
      return;
    }
    const nextState = this.audioEl.paused;
    this.setAttribute('playing', nextState ? 'true' : 'false');
    this.dispatchEvent(new CustomEvent('ds-audio-play-toggle', { detail: { playing: nextState }, bubbles: true, composed: true }));
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
    const time = this.audioEl ? this.audioEl.currentTime : (parseFloat(this.getAttribute('time')) || 0);
    const duration = this.audioEl && Number.isFinite(this.audioEl.duration)
      ? this.audioEl.duration
      : (parseFloat(this.getAttribute('duration')) || 0);
    if (duration === 0) return;
    
    let newTime = Math.max(0, Math.min(duration, time + seconds));
    const percent = (newTime / duration) * 100;
    
    this._setAttributeIfChanged('time', newTime.toString());
    if (this.audioEl) {
      this.audioEl.currentTime = newTime;
    }
    this.audioSeekBar.setAttribute('percent', percent.toString());
    this.dispatchEvent(new CustomEvent('ds-audio-seek', { detail: { percent }, bubbles: true, composed: true }));
  }

  // Relative Volume Command
  _volumeRelative(amount) {
    let volume = parseFloat(this.getAttribute('volume'));
    if (isNaN(volume)) volume = 100;
    if (this.getAttribute('muted') === 'true') volume = 0;

    let newVolume = Math.max(0, Math.min(100, volume + amount));
    this._setAttributeIfChanged('volume', newVolume.toString());
    
    if (newVolume > 0) {
      this._setAttributeIfChanged('muted', 'false');
    }

    this._syncAudioStateFromAttributes('volume');
    
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

    // Fetch localizable strings
    const labelReader = this.getAttribute('label-reader') || '';
    const labelPlay = this.getAttribute('label-play') || '';
    const labelPause = this.getAttribute('label-pause') || '';
    const labelMute = this.getAttribute('label-mute') || '';
    const labelUnmute = this.getAttribute('label-unmute') || '';
    const labelSpeed = this.getAttribute('label-speed') || '';
    const labelHide = this.getAttribute('label-hide') || '';
    const labelShow = this.getAttribute('label-show') || '';
    const labelAutoscrollOn = this.getAttribute('label-autoscroll-on') || '';
    const labelAutoscrollOff = this.getAttribute('label-autoscroll-off') || '';
    const labelVolume = this.getAttribute('label-volume') || '';
    const labelVolumeLevel = this.getAttribute('label-volume-level') || '';
    const labelAudioPos = this.getAttribute('label-audio-pos') || '';

    // Header label
    if (this.headerLabel) {
      this.headerLabel.textContent = labelReader;
    }

    let rawVolume = parseFloat(this.getAttribute('volume'));
    if (isNaN(rawVolume)) rawVolume = 100;
    const effectiveVolume = isMuted ? 0 : rawVolume;

    const progress = duration > 0 ? (time / duration) * 100 : 0;

    // Play/Pause
    const activePlayLabel = isPlaying ? labelPause : labelPlay;
    this.playBtn.setAttribute('icon', isPlaying ? 'pause-fill' : 'play-fill');
    this.playBtn.setAttribute('aria-label', activePlayLabel);
    if (this.playTooltip) {
      this.playTooltip.setAttribute('text', activePlayLabel);
    }

    // Audio Position
    this.audioSeekBar.setAttribute('percent', progress.toString());
    this.audioSeekBar.setAttribute('aria-label', labelAudioPos);
    this.timeLabel.textContent = `${this.formatTime(time)} / ${this.formatTime(duration)}`;

    // Volume Dynamic Iconography
    let volumeIcon = 'volume-high';
    if (isMuted || effectiveVolume === 0) volumeIcon = 'volume-mute';
    else if (effectiveVolume < 33) volumeIcon = 'volume-low';
    else if (effectiveVolume < 67) volumeIcon = 'volume-medium';

    const activeMuteLabel = (isMuted || effectiveVolume === 0) ? labelUnmute : labelMute;
    this.volumeBtn.setAttribute('icon', volumeIcon);
    this.volumeBtn.setAttribute('aria-label', activeMuteLabel);
    if (this.volumeTooltip) {
      this.volumeTooltip.setAttribute('text', activeMuteLabel);
    }
    this.volumeSeekBar.setAttribute('percent', effectiveVolume.toString());
    this.volumeSeekBar.setAttribute('aria-label', labelVolumeLevel);
    
    const volSeekTooltip = this.shadowRoot.querySelector('.volume-seek-tooltip');
    if (volSeekTooltip) {
      volSeekTooltip.setAttribute('text', labelVolume);
    }

    // Speed Control
    this.speedBtn.setAttribute('icon', this._getSpeedIcon(speed));
    this.speedBtn.setAttribute('aria-label', `${labelSpeed} ${speed}`);
    if (this.speedTooltip) {
      this.speedTooltip.setAttribute('text', `${labelSpeed} (${speed})`);
    }

    // Scroll States — icon/label reflect current state, not the action on click
    this.hideBtn.setAttribute('icon', hideOnScroll ? 'eye-open' : 'eye-closed');
    this.hideBtn.classList.toggle('is-active', hideOnScroll);
    const activeHideLabel = hideOnScroll ? labelHide : labelShow;
    this.hideBtn.setAttribute('aria-label', activeHideLabel);
    this.hideBtn.toggleAttribute('disabled', autoScroll);
    if (this.hideTooltip) {
      this.hideTooltip.setAttribute('text', activeHideLabel);
    }

    this.autoscrollBtn.setAttribute('icon', autoScroll ? 'autoscroll' : 'autoscroll-closed');
    this.autoscrollBtn.classList.toggle('is-active', autoScroll);
    const activeAutoscrollLabel = autoScroll ? labelAutoscrollOff : labelAutoscrollOn;
    this.autoscrollBtn.setAttribute('aria-label', activeAutoscrollLabel);
    if (this.autoscrollTooltip) {
      this.autoscrollTooltip.setAttribute('text', activeAutoscrollLabel);
    }

    this.toggleAttribute('has-audio-src', this._audioSrc.length > 0);
  }
}

if (!customElements.get('ds-audio-player')) {
  customElements.define('ds-audio-player', AudioPlayer);
}
