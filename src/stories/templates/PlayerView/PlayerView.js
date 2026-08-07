import css from './playerview.css?inline';
import typographyCss from '../../sub-atomic/Typography/typography.css?inline';
import '../../organisms/Header/Header.js';
import '../../atoms/SeekBar/SeekBar.js';
import '../../atoms/Thumbnail/Thumbnail.js';
import '../../atoms/Loader/Loader.js';
import '../../atoms/Subtitle/Subtitle.js';
import '../../molecules/VideoControls/VideoControls.js';

const DEFAULT_VIDEO_SRC = 'https://cdn.pixabay.com/video/2023/07/12/171274-845168276_tiny.mp4';
const THUMBNAIL_FRAME_ATTRIBUTES = [
  'category',
  'brand',
  'model',
  'color',
  'device-src',
  'custom-only'
];

const HEADER_NAVIGATION_ATTRIBUTES = [
  'language-tooltip',
  'language-kbd-label',
  'language-kbd-key',
  'language-kbd-show-plus',
  'language-aria-label',
  'accessibility-tooltip',
  'accessibility-kbd-label',
  'accessibility-kbd-key',
  'accessibility-kbd-show-plus',
  'accessibility-aria-label',
  'about-tooltip',
  'about-kbd-label',
  'about-kbd-key',
  'about-kbd-show-plus',
  'about-aria-label',
  'avatar-src',
  'avatar-alt',
  'disabled'
];

export class PlayerView extends HTMLElement {
  static get observedAttributes() {
    return [
      'aria-label',
      'video-src',
      'subtitle-src',
      'title',
      'case-title',
      'video-title',
      'show-breadcrumb',
      ...HEADER_NAVIGATION_ATTRIBUTES,
      ...THUMBNAIL_FRAME_ATTRIBUTES,
      'muted',
      'autoplay',
      'loop',
      'show-controls',
      'stage-gap',
      'thumbnail-width',
      'thumbnail-height',
      'controls-width',
      'viewport-padding'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._track = null;
    this._caseMenuItems = [];
    this._videoMenuItems = [];
    this._caseMenuHeader = 'Case studies';
    this._caseMenuCategory = 'SELECT CASE';
    this._videoMenuHeader = 'Videos';
    this._videoMenuCategory = 'SELECT VIDEO';
    this._caseMenuIcon = '';
    this._caseMenuIconVariant = 'fill';
    this._caseMenuShowIcon = false;
    this._videoMenuIcon = '';
    this._videoMenuIconVariant = 'fill';
    this._videoMenuShowIcon = false;
    this._subtitleEnabled = false;
    this._isMediaReady = false;
    this._lastVideoSrc = '';
    this._isPlaying = false;
    this._isPlayTransitionPending = false;
    this._playTransitionToken = 0;
    this._playStartDelayMs = 420;
    this._seekProgressFrame = null;
    this._uiHideTimer = null;
    this._uiHideDelayMs = 1800;

    this.shadowRoot.innerHTML = `
      <style>${typographyCss}</style>
      <style>${css}</style>
      <section class="playerview-layout" aria-label="Player view template">
        <div class="header-wrap">
          <ds-header></ds-header>
        </div>
        <div class="top-seek-wrap">
          <ds-seek-bar variant="top-bar" percent="0" tooltip-format="time" aria-label="Video timeline"></ds-seek-bar>
        </div>
        <div class="media-stage">
          <div class="thumbnail-shell">
            <ds-thumbnail></ds-thumbnail>
            <div class="loader-shell">
              <ds-loader visible="true" aria-label="Loading video" size="52"></ds-loader>
            </div>
          </div>
          <div class="controls-shell">
            <ds-video-controls></ds-video-controls>
          </div>
        </div>
        <div class="subtitle-layer" hidden>
          <ds-subtitle visible="false"></ds-subtitle>
        </div>
      </section>
    `;

    this.seekBarEl = this.shadowRoot.querySelector('ds-seek-bar');
    this.thumbnailEl = this.shadowRoot.querySelector('ds-thumbnail');
    this.loaderEl = this.shadowRoot.querySelector('ds-loader');
    this.controlsEl = this.shadowRoot.querySelector('ds-video-controls');
    this.headerEl = this.shadowRoot.querySelector('ds-header');
    this.subtitleLayerEl = this.shadowRoot.querySelector('.subtitle-layer');
    this.subtitleEl = this.shadowRoot.querySelector('ds-subtitle');
    this.layoutEl = this.shadowRoot.querySelector('.playerview-layout');
    this.videoEl = null;
  }

  connectedCallback() {
    this._observeRootAccessibility();
    this._bindPointerActivity();
    this.render();
    this._scheduleVideoSync();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
    this._stopSeekProgressLoop();
    this._playTransitionToken += 1;
    this._isPlayTransitionPending = false;
    this._unbindPointerActivity();
    this._clearUIHideTimer();
    this._unbindVideoEvents();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
      this._scheduleVideoSync();
    }
  }

  get videoSrc() {
    return this.getAttribute('video-src') || DEFAULT_VIDEO_SRC;
  }

  get subtitleSrc() {
    return this.getAttribute('subtitle-src') || '';
  }

  get caseTitle() {
    return this.getAttribute('case-title') || 'Case';
  }

  get videoTitle() {
    return this.getAttribute('video-title') || this.getAttribute('title') || 'Video';
  }

  get showBreadcrumb() {
    return this.getAttribute('show-breadcrumb') !== 'false';
  }

  get caseMenuItems() {
    return this._caseMenuItems;
  }

  set caseMenuItems(items) {
    this._caseMenuItems = Array.isArray(items) ? items : [];
    this.render();
  }

  get videoMenuItems() {
    return this._videoMenuItems;
  }

  set videoMenuItems(items) {
    this._videoMenuItems = Array.isArray(items) ? items : [];
    this.render();
  }

  set caseMenuHeader(value) {
    this._caseMenuHeader = typeof value === 'string' && value.trim().length > 0 ? value : 'Case studies';
    this.render();
  }

  set caseMenuCategory(value) {
    this._caseMenuCategory = typeof value === 'string' && value.trim().length > 0 ? value : 'SELECT CASE';
    this.render();
  }

  set videoMenuHeader(value) {
    this._videoMenuHeader = typeof value === 'string' && value.trim().length > 0 ? value : 'Videos';
    this.render();
  }

  set videoMenuCategory(value) {
    this._videoMenuCategory = typeof value === 'string' && value.trim().length > 0 ? value : 'SELECT VIDEO';
    this.render();
  }

  set caseMenuIcon(value) {
    this._caseMenuIcon = typeof value === 'string' ? value.trim() : '';
    this.render();
  }

  set caseMenuIconVariant(value) {
    this._caseMenuIconVariant = typeof value === 'string' && value.trim().length > 0 ? value : 'fill';
    this.render();
  }

  set caseMenuShowIcon(value) {
    this._caseMenuShowIcon = typeof value === 'boolean' ? value : false;
    this.render();
  }

  set videoMenuIcon(value) {
    this._videoMenuIcon = typeof value === 'string' ? value.trim() : '';
    this.render();
  }

  set videoMenuIconVariant(value) {
    this._videoMenuIconVariant = typeof value === 'string' && value.trim().length > 0 ? value : 'fill';
    this.render();
  }

  set videoMenuShowIcon(value) {
    this._videoMenuShowIcon = typeof value === 'boolean' ? value : false;
    this.render();
  }

  get showControls() {
    return !this.hasAttribute('show-controls') || this.getAttribute('show-controls') !== 'false';
  }

  get stageGap() {
    return this.getAttribute('stage-gap') || 'clamp(10px, 1.6vw, 18px)';
  }

  get thumbnailWidth() {
    return this.getAttribute('thumbnail-width') || '390px';
  }

  get thumbnailHeight() {
    return this.getAttribute('thumbnail-height') || 'min(72vh, 600px)';
  }

  get controlsWidth() {
    return this.getAttribute('controls-width') || '220px';
  }

  get viewportPadding() {
    return this.getAttribute('viewport-padding') || 'clamp(64px, 8vh, 96px)';
  }

  _forwardAttributes(target, attributes) {
    attributes.forEach((attributeName) => {
      if (this.hasAttribute(attributeName)) {
        target.setAttribute(attributeName, this.getAttribute(attributeName) || '');
      } else {
        target.removeAttribute(attributeName);
      }
    });
  }

  _buildBreadcrumbItems() {
    return [
      { id: 'home', label: 'Home', hasMenu: false },
      {
        id: 'case',
        label: this.caseTitle,
        hasMenu: this._caseMenuItems.length > 0,
        menuItems: this._caseMenuItems,
        menuHeader: this._caseMenuHeader,
        subcategoryTitle: this._caseMenuCategory,
        menuItemIcon: this._caseMenuIcon,
        menuItemIconVariant: this._caseMenuIconVariant,
        menuItemShowIcon: this._caseMenuShowIcon
      },
      {
        id: 'video',
        label: this.videoTitle,
        hasMenu: this._videoMenuItems.length > 0,
        menuItems: this._videoMenuItems,
        menuHeader: this._videoMenuHeader,
        subcategoryTitle: this._videoMenuCategory,
        menuItemIcon: this._videoMenuIcon,
        menuItemIconVariant: this._videoMenuIconVariant,
        menuItemShowIcon: this._videoMenuShowIcon
      }
    ];
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

  _scheduleVideoSync() {
    if (this._videoSyncFrame) {
      cancelAnimationFrame(this._videoSyncFrame);
    }

    this._videoSyncFrame = requestAnimationFrame(() => {
      this._videoSyncFrame = null;
      this._syncVideoSurface();
    });
  }

  _bindPointerActivity() {
    if (!this.layoutEl || this._onPointerMoveBound) return;

    this._onPointerMoveBound = () => {
      if (!this._isPlaying) return;
      this._setUiVisible(true);
      this._scheduleUIHide();
    };

    this.layoutEl.addEventListener('mousemove', this._onPointerMoveBound);
  }

  _unbindPointerActivity() {
    if (!this.layoutEl || !this._onPointerMoveBound) return;
    this.layoutEl.removeEventListener('mousemove', this._onPointerMoveBound);
    this._onPointerMoveBound = null;
  }

  _setUiVisible(visible) {
    this.toggleAttribute('ui-hidden', !visible);
  }

  _clearUIHideTimer() {
    if (this._uiHideTimer) {
      clearTimeout(this._uiHideTimer);
      this._uiHideTimer = null;
    }
  }

  _scheduleUIHide() {
    this._clearUIHideTimer();
    if (!this._isPlaying) return;

    this._uiHideTimer = setTimeout(() => {
      if (this._isPlaying) {
        this._setUiVisible(false);
      }
      this._uiHideTimer = null;
    }, this._uiHideDelayMs);
  }

  _waitMs(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async _playAfterUiTransition() {
    if (!this.videoEl || !this.videoEl.paused) return;

    const transitionToken = ++this._playTransitionToken;
    this._isPlayTransitionPending = true;

    await this._waitMs(this._playStartDelayMs);
    if (transitionToken !== this._playTransitionToken) {
      this._isPlayTransitionPending = false;
      return;
    }

    if (!this.videoEl || !this.videoEl.paused) {
      this._isPlayTransitionPending = false;
      return;
    }

    this.videoEl.play().catch(() => {
      this._isPlayTransitionPending = false;
    });
  }

  _startSeekProgressLoop() {
    if (this._seekProgressFrame !== null) return;

    const tick = () => {
      if (!this.videoEl || this.videoEl.paused || this.videoEl.ended) {
        this._seekProgressFrame = null;
        return;
      }

      this._syncSeekFromVideo();
      this._seekProgressFrame = requestAnimationFrame(tick);
    };

    this._seekProgressFrame = requestAnimationFrame(tick);
  }

  _stopSeekProgressLoop() {
    if (this._seekProgressFrame !== null) {
      cancelAnimationFrame(this._seekProgressFrame);
      this._seekProgressFrame = null;
    }
  }

  _syncVideoSurface() {
    const thumbnailVideo = this.thumbnailEl?.shadowRoot?.querySelector('.screen-cover-video');
    if (!thumbnailVideo) return;

    if (this.videoEl !== thumbnailVideo) {
      this._unbindVideoEvents();
      this.videoEl = thumbnailVideo;
      this._isMediaReady = false;
      this._syncLoaderVisibility();
      this._bindVideoEvents();
    }

    this._applyMediaAttributes();
    this._applySubtitleTrack();
    this._syncControlState();
    this._syncSeekFromVideo();
  }

  _applyMediaAttributes() {
    if (!this.thumbnailEl) return;

    if (this.videoSrc !== this._lastVideoSrc) {
      this._lastVideoSrc = this.videoSrc;
      this._isMediaReady = false;
      this._syncLoaderVisibility();
    }

    this.thumbnailEl.setAttribute('screen-video', this.videoSrc);
    this.thumbnailEl.removeAttribute('screen-image');
    this.thumbnailEl.setAttribute('aria-label', this.getAttribute('aria-label') || 'Player view thumbnail');
    this.thumbnailEl.setAttribute('max-height', this.thumbnailHeight);

    if (this.hasAttribute('muted')) {
      this.thumbnailEl.setAttribute('muted', this.getAttribute('muted'));
    }

    if (this.hasAttribute('autoplay')) {
      this.thumbnailEl.setAttribute('autoplay', this.getAttribute('autoplay'));
    }

    if (this.hasAttribute('loop')) {
      this.thumbnailEl.setAttribute('loop', this.getAttribute('loop'));
    }

    if (this.thumbnailEl.shadowRoot) {
      const video = this.thumbnailEl.shadowRoot.querySelector('.screen-cover-video');
      if (video) {
        video.controls = false;
        video.muted = this.hasAttribute('muted') ? this.getAttribute('muted') === 'true' : false;
        video.loop = this.getAttribute('loop') === 'true';
        video.playsInline = true;
        video.preload = 'metadata';
      }
    }
  }

  _syncLoaderVisibility() {
    if (!this.loaderEl) return;
    this.loaderEl.setAttribute('visible', this._isMediaReady ? 'false' : 'true');
  }

  _applySubtitleTrack() {
    if (!this.videoEl) return;

    const currentTrack = this._track;
    if (currentTrack) {
      currentTrack.remove();
      this._track = null;
    }

    const subtitleSrc = this.subtitleSrc;
    this._subtitleEnabled = Boolean(subtitleSrc);
    this.controlsEl.setAttribute('show-cc', this._subtitleEnabled ? 'true' : 'false');
    this.subtitleLayerEl.hidden = !this._subtitleEnabled;

    if (!subtitleSrc) {
      this._setSubtitleVisible(false);
      this._updateCCState(false);
      return;
    }

    const track = document.createElement('track');
    track.kind = 'captions';
    track.src = subtitleSrc;
    track.srclang = this.getAttribute('subtitle-lang') || 'en';
    track.label = this.getAttribute('subtitle-label') || 'Captions';
    track.default = false;
    this.videoEl.appendChild(track);
    this._track = track;

    const pollForTrack = () => {
      const textTrack = this.videoEl?.textTracks && this.videoEl.textTracks[0];
      if (!textTrack) {
        this._trackRetry = window.setTimeout(pollForTrack, 120);
        return;
      }

      textTrack.mode = this.controlsEl.getAttribute('cc-enabled') === 'true' ? 'hidden' : 'disabled';
      textTrack.oncuechange = () => {
        const activeCue = textTrack.activeCues && textTrack.activeCues[0];
        if (activeCue && textTrack.mode === 'hidden') {
          const cleanText = activeCue.text.replace(/<[^>]*>/g, '');
          this._renderSubtitle(cleanText);
        } else {
          this._setSubtitleVisible(false);
        }
      };
    };

    pollForTrack();
  }

  _setSubtitleVisible(visible) {
    if (!this.subtitleEl) return;
    this.subtitleEl.setAttribute('visible', visible ? 'true' : 'false');
  }

  _renderSubtitle(text) {
    if (!this.subtitleEl) return;

    this.subtitleEl.setAttribute('text', text);
    this.subtitleEl.setAttribute('aria-label', 'Video captions');
    this.subtitleEl.setAttribute('visible', 'true');
  }

  _updateCCState(enabled) {
    this.controlsEl.setAttribute('cc-enabled', enabled ? 'true' : 'false');
    if (!enabled) {
      this._setSubtitleVisible(false);
    }
  }

  _bindVideoEvents() {
    if (!this.videoEl) return;

    this._onVideoPlaying = () => {
      this._isMediaReady = true;
      this._syncLoaderVisibility();
      this._isPlaying = true;
      this._isPlayTransitionPending = false;
      this.controlsEl.setAttribute('playing', 'true');
      this._syncSeekFromVideo();
      this._syncDuration();
      this._startSeekProgressLoop();
      this._setUiVisible(true);
      this._scheduleUIHide();
    };
    this._onVideoPause = () => {
      this._isPlaying = false;
      this._isPlayTransitionPending = false;
      this.controlsEl.setAttribute('playing', 'false');
      this._syncSeekFromVideo();
      this._syncDuration();
      this._stopSeekProgressLoop();
      this._setUiVisible(true);
      this._clearUIHideTimer();
    };
    this._onVideoWaiting = () => {
      this._isPlaying = false;
      this._isPlayTransitionPending = false;
      this.controlsEl.setAttribute('playing', 'false');
      this._stopSeekProgressLoop();
      this._setUiVisible(true);
      this._clearUIHideTimer();
    };
    this._onVideoEnded = () => {
      this._isPlaying = false;
      this._isPlayTransitionPending = false;
      this.controlsEl.setAttribute('playing', 'false');
      this.seekBarEl.setAttribute('percent', '100');
      this._syncDuration();
      this._stopSeekProgressLoop();
      this._setUiVisible(true);
      this._clearUIHideTimer();
    };
    this._onTimeUpdate = () => this._syncSeekFromVideo();
    this._onLoadedMetadata = () => {
      this._isMediaReady = true;
      this._syncLoaderVisibility();
      this._syncSeekFromVideo();
      this._syncDuration();
    };
    this._onCanPlay = () => {
      this._isMediaReady = true;
      this._syncLoaderVisibility();
    };
    this._onVideoLoadStart = () => {
      this._isMediaReady = false;
      this._syncLoaderVisibility();
    };
    this._onRateChange = () => {
      const rate = this.videoEl.playbackRate || 1;
      this.controlsEl.setAttribute('speed', `${rate}X`);
    };
    this._onVolumeChange = () => {
      this.controlsEl.setAttribute('muted', this.videoEl.muted ? 'true' : 'false');
    };

    this.videoEl.addEventListener('playing', this._onVideoPlaying);
    this.videoEl.addEventListener('pause', this._onVideoPause);
    this.videoEl.addEventListener('waiting', this._onVideoWaiting);
    this.videoEl.addEventListener('ended', this._onVideoEnded);
    this.videoEl.addEventListener('timeupdate', this._onTimeUpdate);
    this.videoEl.addEventListener('loadedmetadata', this._onLoadedMetadata);
    this.videoEl.addEventListener('canplay', this._onCanPlay);
    this.videoEl.addEventListener('loadstart', this._onVideoLoadStart);
    this.videoEl.addEventListener('ratechange', this._onRateChange);
    this.videoEl.addEventListener('volumechange', this._onVolumeChange);

    this.controlsEl.addEventListener('ds-video-action', this._onControlActionBound || (this._onControlActionBound = (event) => this._handleControlAction(event)));
    this.seekBarEl.addEventListener('ds-seek', this._onSeekBound || (this._onSeekBound = (event) => this._handleSeek(event)));
  }

  _unbindVideoEvents() {
    if (this.videoEl) {
      this.videoEl.removeEventListener('playing', this._onVideoPlaying);
      this.videoEl.removeEventListener('pause', this._onVideoPause);
      this.videoEl.removeEventListener('waiting', this._onVideoWaiting);
      this.videoEl.removeEventListener('ended', this._onVideoEnded);
      this.videoEl.removeEventListener('timeupdate', this._onTimeUpdate);
      this.videoEl.removeEventListener('loadedmetadata', this._onLoadedMetadata);
      this.videoEl.removeEventListener('canplay', this._onCanPlay);
      this.videoEl.removeEventListener('loadstart', this._onVideoLoadStart);
      this.videoEl.removeEventListener('ratechange', this._onRateChange);
      this.videoEl.removeEventListener('volumechange', this._onVolumeChange);
    }

    if (this.controlsEl && this._onControlActionBound) {
      this.controlsEl.removeEventListener('ds-video-action', this._onControlActionBound);
    }

    if (this.seekBarEl && this._onSeekBound) {
      this.seekBarEl.removeEventListener('ds-seek', this._onSeekBound);
    }
  }

  _syncControlState() {
    if (!this.videoEl) return;

    this.controlsEl.setAttribute('playing', this.videoEl.paused ? 'false' : 'true');
    this.controlsEl.setAttribute('muted', this.videoEl.muted ? 'true' : 'false');
    this.controlsEl.setAttribute('speed', `${this.videoEl.playbackRate || 1}X`);
    this.controlsEl.setAttribute('cc-enabled', this.controlsEl.getAttribute('cc-enabled') === 'true' ? 'true' : 'false');
  }

  _syncSeekFromVideo() {
    if (!this.videoEl || !this.seekBarEl) return;

    const duration = this.videoEl.duration || 0;
    const currentTime = this.videoEl.currentTime || 0;
    const percent = duration > 0 ? (currentTime / duration) * 100 : 0;
    this.seekBarEl.setAttribute('percent', String(Math.max(0, Math.min(100, percent))));
  }

  _syncDuration() {
    if (!this.videoEl || !this.seekBarEl) return;

    const duration = this.videoEl.duration || 0;
    if (duration > 0 && Number.isFinite(duration)) {
      this.seekBarEl.setAttribute('duration', String(duration));
    } else {
      this.seekBarEl.removeAttribute('duration');
    }
  }

  _handleSeek(event) {
    if (!this.videoEl) return;

    const duration = this.videoEl.duration || 0;
    if (!duration) return;

    const percent = Number(event.detail?.percent ?? 0);
    this.videoEl.currentTime = (Math.max(0, Math.min(100, percent)) / 100) * duration;
  }

  _handleControlAction(event) {
    if (!this.videoEl) return;

    const action = event.detail?.action;
    switch (action) {
      case 'play-pause':
        if (this.videoEl.paused) {
          if (this._isPlayTransitionPending) {
            this._playTransitionToken += 1;
            this._isPlayTransitionPending = false;
            break;
          }
          this._playAfterUiTransition();
        } else {
          this._playTransitionToken += 1;
          this._isPlayTransitionPending = false;
          this.videoEl.pause();
        }
        break;
      case 'mute':
        this.videoEl.muted = !this.videoEl.muted;
        break;
      case 'speed': {
        const currentRate = this.videoEl.playbackRate || 1;
        const nextRate = currentRate === 1 ? 1.5 : currentRate === 1.5 ? 2 : 1;
        this.videoEl.playbackRate = nextRate;
        break;
      }
      case 'cc': {
        if (!this._subtitleEnabled || !this.videoEl.textTracks || !this.videoEl.textTracks[0]) return;
        const textTrack = this.videoEl.textTracks[0];
        const nextEnabled = this.controlsEl.getAttribute('cc-enabled') !== 'true';
        this.controlsEl.setAttribute('cc-enabled', nextEnabled ? 'true' : 'false');
        textTrack.mode = nextEnabled ? 'hidden' : 'disabled';
        if (!nextEnabled) {
          this._setSubtitleVisible(false);
        }
        break;
      }
      case 'stop':
        this.videoEl.pause();
        this.videoEl.currentTime = 0;
        this.seekBarEl.setAttribute('percent', '0');
        this.dispatchEvent(new CustomEvent('ds-breadcrumb-return', {
          bubbles: true,
          composed: true
        }));
        break;
      default:
        break;
    }
  }

  render() {
    if (!this.layoutEl || !this.thumbnailEl || !this.controlsEl || !this.seekBarEl || !this.headerEl) return;

    this.layoutEl.setAttribute('aria-label', this.getAttribute('aria-label') || 'Player view template');
    if (!this._isPlaying && !this._isPlayTransitionPending) {
      this._setUiVisible(true);
    }
    this.headerEl.showBreadcrumb = this.showBreadcrumb;
    this.headerEl.showNavigationRegion = true;
    this.headerEl.breadcrumbItems = this._buildBreadcrumbItems();
    this._forwardAttributes(this.headerEl, HEADER_NAVIGATION_ATTRIBUTES);
    this._forwardAttributes(this.thumbnailEl, THUMBNAIL_FRAME_ATTRIBUTES);
    this._syncLoaderVisibility();
    this.style.setProperty('--player-view-stage-gap', this.stageGap);
    this.style.setProperty('--player-view-thumbnail-width', this.thumbnailWidth);
    this.style.setProperty('--player-view-thumbnail-height', this.thumbnailHeight);
    this.style.setProperty('--player-view-controls-width', this.controlsWidth);
    this.style.setProperty('--player-view-viewport-padding', this.viewportPadding);
    this.style.setProperty('--player-view-viewport-inline-padding', this.getAttribute('viewport-inline-padding') || 'clamp(16px, 3vw, 40px)');
    this.style.setProperty('--player-view-viewport-bottom-padding', this.getAttribute('viewport-bottom-padding') || 'clamp(20px, 3vh, 32px)');
    this.thumbnailEl.setAttribute('screen-video', this.videoSrc);
    this.thumbnailEl.removeAttribute('screen-image');
    this.thumbnailEl.removeAttribute('custom-only');
    this.thumbnailEl.setAttribute('max-height', this.thumbnailHeight);
    this.controlsEl.toggleAttribute('hidden', !this.showControls);
    this.controlsEl.setAttribute('show-cc', this.subtitleSrc ? 'true' : 'false');
    this.controlsEl.setAttribute('cc-enabled', 'false');
    this.seekBarEl.setAttribute('variant', 'top-bar');
    this.seekBarEl.setAttribute('aria-label', this.getAttribute('seek-aria-label') || 'Video timeline');

    if (this.hasAttribute('muted')) {
      this.thumbnailEl.setAttribute('muted', this.getAttribute('muted'));
    } else {
      this.thumbnailEl.removeAttribute('muted');
    }

    if (this.hasAttribute('autoplay')) {
      this.thumbnailEl.setAttribute('autoplay', this.getAttribute('autoplay'));
    } else {
      this.thumbnailEl.removeAttribute('autoplay');
    }

    if (this.hasAttribute('loop')) {
      this.thumbnailEl.setAttribute('loop', this.getAttribute('loop'));
    } else {
      this.thumbnailEl.removeAttribute('loop');
    }

    if (this.subtitleSrc) {
      this.subtitleLayerEl.hidden = false;
    } else {
      this.subtitleLayerEl.hidden = true;
      this._setSubtitleVisible(false);
    }
  }
}

if (!customElements.get('ds-player-view')) {
  customElements.define('ds-player-view', PlayerView);
}
