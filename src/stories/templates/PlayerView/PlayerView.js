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

const VIDEO_CONTROL_LABEL_ATTRIBUTES = [
  'label-play',
  'label-pause',
  'label-cc-on',
  'label-cc-off',
  'label-mute',
  'label-unmute',
  'label-speed',
  'label-return'
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
      'data-mobile-breakpoint',
      ...HEADER_NAVIGATION_ATTRIBUTES,
      ...VIDEO_CONTROL_LABEL_ATTRIBUTES,
      ...THUMBNAIL_FRAME_ATTRIBUTES,
      'muted',
      'autoplay',
      'loop',
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
    this._subtitleSrc = '';
    this._subtitleSourceCandidates = [];
    this._subtitleResolutionToken = 0;
    this._videoSourceCandidates = [];
    this._videoResolutionToken = 0;
    this._subtitleCues = [];
    this._activeSubtitleCueIndex = -1;
    this._isMediaReady = false;
    this._lastVideoSrc = '';
    this._resolvedVideoSrc = '';
    this._videoFallbackApplied = false;
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
    this.headerWrapEl = this.shadowRoot.querySelector('.header-wrap');
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
    this._subtitleResolutionToken += 1;
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

  get stageGap() {
    return this.getAttribute('stage-gap') || 'clamp(10px, 1.6vw, 18px)';
  }

  get thumbnailWidth() {
    const configuredWidth = this.getAttribute('thumbnail-width');
    if (configuredWidth) return configuredWidth;

    return this.getAttribute('data-mobile-breakpoint') === 'true'
      ? 'min(calc(100vw - 32px), 390px)'
      : 'min(calc(100vw - 32px), 720px)';
  }

  get thumbnailHeight() {
    const configuredHeight = this.getAttribute('thumbnail-height');
    if (configuredHeight) return configuredHeight;

    return this.getAttribute('data-mobile-breakpoint') === 'true'
      ? 'min(calc((100vw - 32px) * 0.606), 237px)'
      : 'min(calc((100vw - 32px) * 0.606), 436px)';
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

  _buildVideoSourceCandidates(src) {
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

  _normalizeVideoUrl(value) {
    const normalized = String(value || '').trim();
    if (!normalized) return '';

    try {
      return new URL(normalized, window.location.href).href;
    } catch {
      return normalized;
    }
  }

  _hardReloadVideoElement(nextSrc) {
    const videoEl = this.thumbnailEl?.shadowRoot?.querySelector('.screen-cover-video');
    if (!(videoEl instanceof HTMLVideoElement)) return;

    const requestedSrc = this._normalizeVideoUrl(nextSrc);
    if (!requestedSrc) return;

    const activeSrc = this._normalizeVideoUrl(videoEl.currentSrc || videoEl.src);
    if (activeSrc === requestedSrc && videoEl.readyState >= 1) {
      return;
    }

    const shouldAutoplay = this.hasAttribute('autoplay');
    const isMuted = this.hasAttribute('muted')
      ? this.getAttribute('muted') === 'true'
      : false;

    videoEl.pause();
    videoEl.removeAttribute('src');
    videoEl.load();
    videoEl.src = requestedSrc;
    videoEl.muted = isMuted;
    videoEl.autoplay = shouldAutoplay;
    videoEl.preload = 'auto';
    videoEl.load();
    if (!shouldAutoplay) {
      videoEl.pause();
    }
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
    this.dispatchEvent(new CustomEvent('ds-player-ui-visibility-change', {
      bubbles: true,
      composed: true,
      detail: { visible }
    }));
    console.debug('[ds-player-view] _setUiVisible request', {
      visible,
      isPlaying: this._isPlaying,
      isPlayTransitionPending: this._isPlayTransitionPending
    });
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
    this._applyMediaAttributes();
    void this._syncVideoSourceFromAttributes();

    const thumbnailVideo = this.thumbnailEl?.shadowRoot?.querySelector('.screen-cover-video');
    if (!thumbnailVideo) return;

    if (this.videoEl !== thumbnailVideo) {
      this._unbindVideoEvents();
      this.videoEl = thumbnailVideo;
      this._isMediaReady = false;
      this._syncLoaderVisibility();
      this._bindVideoEvents();
    }

    this._applySubtitleTrack();
    this._syncControlState();
    this._syncSeekFromVideo();
  }

  _applyMediaAttributes() {
    if (!this.thumbnailEl) return;

    if (this.videoSrc !== this._lastVideoSrc) {
      this._lastVideoSrc = this.videoSrc;
      this._isMediaReady = false;
      this._resolvedVideoSrc = '';
      this._videoSourceCandidates = this._buildVideoSourceCandidates(this.videoSrc);
      this._syncLoaderVisibility();
    }

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

  async _resolveVideoSourceCandidate() {
    for (const candidate of this._videoSourceCandidates) {
      try {
        const response = await fetch(candidate, { cache: 'no-store' });
        if (response.ok) {
          return candidate;
        }
      } catch {
        // Try the next candidate.
      }
    }

    return '';
  }

  async _syncVideoSourceFromAttributes() {
    if (!this.thumbnailEl) return;

    const nextSrc = String(this.videoSrc || '').trim();
    console.debug('[ds-player-view] video source sync start', {
      nextSrc,
      currentAttr: this.thumbnailEl.getAttribute('screen-video') || '',
      resolvedVideoSrc: this._resolvedVideoSrc,
      lastVideoSrc: this._lastVideoSrc,
      candidateCount: this._videoSourceCandidates.length
    });
    if (!nextSrc) {
      this._resolvedVideoSrc = '';
      this.thumbnailEl.removeAttribute('screen-video');
      console.warn('[ds-player-view] video source cleared');
      return;
    }

    if (this._resolvedVideoSrc && this._lastVideoSrc === nextSrc && this.thumbnailEl.getAttribute('screen-video') === this._resolvedVideoSrc) {
      return;
    }

    if (nextSrc !== this._lastVideoSrc) {
      this._lastVideoSrc = nextSrc;
      this._videoSourceCandidates = this._buildVideoSourceCandidates(nextSrc);
      this._resolvedVideoSrc = '';
      this._videoFallbackApplied = false;
      this._isMediaReady = false;
      this._syncLoaderVisibility();
    }

    const resolutionToken = ++this._videoResolutionToken;
    const resolvedVideoSrc = await this._resolveVideoSourceCandidate();
    if (resolutionToken !== this._videoResolutionToken) {
      return;
    }

    this._resolvedVideoSrc = resolvedVideoSrc || nextSrc;
    console.debug('[ds-player-view] video source resolved', {
      requestedSrc: nextSrc,
      resolvedVideoSrc: this._resolvedVideoSrc,
      usedFallback: this._resolvedVideoSrc !== nextSrc,
      candidateCount: this._videoSourceCandidates.length
    });
    this.thumbnailEl.setAttribute('screen-video', this._resolvedVideoSrc);
    this._hardReloadVideoElement(this._resolvedVideoSrc);
    this._scheduleVideoSync();
  }

  _buildSubtitleSourceCandidates(src) {
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

  _parseSubtitleTimestamp(value) {
    const normalized = String(value || '').trim().replace(',', '.');
    if (!normalized) return Number.NaN;

    const parts = normalized.split(':').map((part) => part.trim());
    if (parts.length < 2 || parts.length > 3) return Number.NaN;

    const seconds = Number.parseFloat(parts.pop());
    const minutes = Number.parseInt(parts.pop() || '0', 10);
    const hours = Number.parseInt(parts.pop() || '0', 10);
    if ([seconds, minutes, hours].some((part) => Number.isNaN(part))) return Number.NaN;

    return (hours * 3600) + (minutes * 60) + seconds;
  }

  async _resolveSubtitleSourceCandidate() {
    for (const candidate of this._subtitleSourceCandidates) {
      try {
        const response = await fetch(candidate, { cache: 'no-store' });
        if (!response.ok) continue;

        const contentType = String(response.headers.get('content-type') || '').toLowerCase();
        const body = await response.text();
        if (contentType.includes('text/vtt') || body.trimStart().startsWith('WEBVTT')) {
          return candidate;
        }
      } catch {
        // Try the next candidate.
      }
    }

    return '';
  }

  _parseSubtitleCues(vttText) {
    const text = String(vttText || '').replace(/^\uFEFF/, '');
    const lines = text.split(/\r?\n/);
    const cues = [];
    let index = 0;

    while (index < lines.length) {
      const line = String(lines[index] || '').trim();

      if (!line || line === 'WEBVTT') {
        index += 1;
        continue;
      }

      if (line.startsWith('NOTE')) {
        index += 1;
        while (index < lines.length && String(lines[index] || '').trim()) {
          index += 1;
        }
        continue;
      }

      let timingLine = line;
      if (!timingLine.includes('-->')) {
        const nextLine = String(lines[index + 1] || '').trim();
        if (!nextLine.includes('-->')) {
          index += 1;
          continue;
        }
        timingLine = nextLine;
        index += 1;
      }

      const timingMatch = timingLine.match(/^([^\s]+)\s+-->\s+([^\s]+)/);
      if (!timingMatch) {
        index += 1;
        continue;
      }

      const start = this._parseSubtitleTimestamp(timingMatch[1]);
      const end = this._parseSubtitleTimestamp(timingMatch[2]);
      index += 1;

      const cueLines = [];
      while (index < lines.length && String(lines[index] || '').trim()) {
        cueLines.push(lines[index]);
        index += 1;
      }

      const cueText = cueLines.join('\n').replace(/<[^>]*>/g, '').trim();
      if (Number.isFinite(start) && Number.isFinite(end) && end > start && cueText) {
        cues.push({ start, end, text: cueText });
      }

      index += 1;
    }

    return cues.sort((left, right) => left.start - right.start);
  }

  _setSubtitleStateFromCurrentTime(forceHide = false) {
    if (!this.subtitleEl) return;

    const captionsEnabled = this._subtitleEnabled && this.controlsEl.getAttribute('cc-enabled') === 'true';
    if (forceHide || !captionsEnabled || !this._subtitleCues.length || !this.videoEl) {
      this._activeSubtitleCueIndex = -1;
      this._setSubtitleVisible(false);
      return;
    }

    const currentTime = this.videoEl.currentTime || 0;
    const cueIndex = this._subtitleCues.findIndex((cue) => currentTime >= cue.start && currentTime < cue.end);
    if (cueIndex === -1) {
      this._activeSubtitleCueIndex = -1;
      this._setSubtitleVisible(false);
      return;
    }

    const cue = this._subtitleCues[cueIndex];
    if (cueIndex !== this._activeSubtitleCueIndex) {
      this._activeSubtitleCueIndex = cueIndex;
      this._renderSubtitle(cue.text);
    } else {
      this.subtitleEl.setAttribute('visible', 'true');
    }
  }

  async _syncSubtitleSourceFromAttributes() {
    if (!this.videoEl) return;

    const nextSrc = String(this.getAttribute('subtitle-src') || '').trim();
    console.debug('[ds-player-view][subtitle] sync start', {
      nextSrc,
      previousSrc: this._subtitleSrc,
      subtitleEnabled: this._subtitleEnabled,
      currentShowCC: this.controlsEl?.getAttribute('show-cc') || null
    });
    if (nextSrc === this._subtitleSrc) {
      console.debug('[ds-player-view][subtitle] sync skipped because source is unchanged', {
        nextSrc
      });
      return;
    }

    this._subtitleSrc = nextSrc;
    this._subtitleSourceCandidates = this._buildSubtitleSourceCandidates(nextSrc);
    this._subtitleCues = [];
    this._activeSubtitleCueIndex = -1;

    if (!nextSrc) {
      this._subtitleEnabled = false;
      this.controlsEl.setAttribute('show-cc', 'false');
      this.subtitleLayerEl.hidden = true;
      this._setSubtitleVisible(false);
      this._updateCCState(false);
      console.debug('[ds-player-view][subtitle] no subtitle source, hiding CC', {
        nextSrc,
        showCC: this.controlsEl.getAttribute('show-cc'),
        subtitleEnabled: this._subtitleEnabled
      });
      return;
    }

    const resolutionToken = ++this._subtitleResolutionToken;
    const resolvedSubtitleSrc = await this._resolveSubtitleSourceCandidate();
    if (resolutionToken !== this._subtitleResolutionToken) {
      return;
    }

    if (!resolvedSubtitleSrc) {
      this._subtitleEnabled = false;
      this.controlsEl.setAttribute('show-cc', 'false');
      this.subtitleLayerEl.hidden = true;
      this._setSubtitleVisible(false);
      this._updateCCState(false);
      console.debug('[ds-player-view][subtitle] subtitle source could not be resolved, hiding CC', {
        nextSrc,
        candidates: this._subtitleSourceCandidates,
        showCC: this.controlsEl.getAttribute('show-cc')
      });
      return;
    }

    try {
      const response = await fetch(resolvedSubtitleSrc, { cache: 'no-store' });
      if (!response.ok) throw new Error(`subtitle-fetch-${response.status}`);

      const vttText = await response.text();
      const parsedCues = this._parseSubtitleCues(vttText);
      if (resolutionToken !== this._subtitleResolutionToken) {
        return;
      }

      this._subtitleEnabled = parsedCues.length > 0;
      this._subtitleCues = parsedCues;
      this.controlsEl.setAttribute('show-cc', this._subtitleEnabled ? 'true' : 'false');
      this.subtitleLayerEl.hidden = !this._subtitleEnabled;
      console.debug('[ds-player-view][subtitle] subtitle fetch/parse complete', {
        resolvedSubtitleSrc,
        cueCount: parsedCues.length,
        subtitleEnabled: this._subtitleEnabled,
        showCC: this.controlsEl.getAttribute('show-cc')
      });

      if (!this._subtitleEnabled) {
        this._setSubtitleVisible(false);
        this._updateCCState(false);
        return;
      }

      this._setSubtitleStateFromCurrentTime();
    } catch {
      if (resolutionToken !== this._subtitleResolutionToken) {
        return;
      }

      this._subtitleEnabled = false;
      this._subtitleCues = [];
      this.controlsEl.setAttribute('show-cc', 'false');
      this.subtitleLayerEl.hidden = true;
      this._setSubtitleVisible(false);
      this._updateCCState(false);
      console.debug('[ds-player-view][subtitle] subtitle fetch/parse failed, hiding CC', {
        nextSrc,
        candidates: this._subtitleSourceCandidates,
        showCC: this.controlsEl.getAttribute('show-cc')
      });
    }
  }

  _syncLoaderVisibility() {
    if (!this.loaderEl) return;
    this.loaderEl.setAttribute('visible', this._isMediaReady ? 'false' : 'true');
  }

  _applySubtitleTrack() {
    if (!this.videoEl) return;

    void this._syncSubtitleSourceFromAttributes();
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
      this._setSubtitleStateFromCurrentTime(true);
      this._setUiVisible(true);
      this._clearUIHideTimer();
    };
    this._onTimeUpdate = () => {
      this._syncSeekFromVideo();
      this._setSubtitleStateFromCurrentTime();
    };
    this._onLoadedMetadata = () => {
      this._isMediaReady = true;
      this._syncLoaderVisibility();
      this._syncSeekFromVideo();
      this._syncDuration();
      this._setSubtitleStateFromCurrentTime();
    };
    this._onCanPlay = () => {
      this._isMediaReady = true;
      this._syncLoaderVisibility();
      this._setSubtitleStateFromCurrentTime();
    };
    this._onVideoError = (event) => {
      const currentSrc = String(this.videoEl?.currentSrc || this.videoEl?.src || '').trim();
      const currentPath = (() => {
        if (!currentSrc) return '';
        try {
          return new URL(currentSrc, window.location.href).pathname || currentSrc;
        } catch {
          return currentSrc;
        }
      })();
      const fallbackSrc = currentPath.startsWith('/src/content/')
        ? `/templates${currentPath}`
        : currentPath.startsWith('src/content/')
          ? `/templates/${currentPath}`
          : '';

      console.warn('[ds-player-view] video error', {
        src: currentSrc,
        path: currentPath,
        networkState: this.videoEl?.networkState,
        readyState: this.videoEl?.readyState,
        errorCode: this.videoEl?.error?.code || null,
        errorMessage: this.videoEl?.error?.message || '',
        eventType: event?.type || 'error',
        fallbackSrc,
        fallbackApplied: this._videoFallbackApplied
      });

      if (this._videoFallbackApplied || !fallbackSrc || !this.thumbnailEl) {
        return;
      }

      this._videoFallbackApplied = true;
      this._resolvedVideoSrc = fallbackSrc;
      this.thumbnailEl.setAttribute('screen-video', fallbackSrc);
      this.thumbnailEl.shadowRoot?.querySelector('.screen-cover-video')?.load?.();
      console.debug('[ds-player-view] retrying video with template fallback', {
        requestedSrc: currentSrc,
        fallbackSrc
      });
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
    this.videoEl.addEventListener('error', this._onVideoError);
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
      this.videoEl.removeEventListener('error', this._onVideoError);
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
        if (!this._subtitleEnabled || !this._subtitleCues.length) return;
        const nextEnabled = this.controlsEl.getAttribute('cc-enabled') !== 'true';
        this.controlsEl.setAttribute('cc-enabled', nextEnabled ? 'true' : 'false');
        if (!nextEnabled) {
          this._setSubtitleVisible(false);
        } else {
          this._setSubtitleStateFromCurrentTime();
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

  _applyHeaderReturnOnlyMode(isUiHidden) {
    if (!this.headerEl) return;

    this.headerEl.showNavigationRegion = !isUiHidden;
    this.headerEl.showLanguageMenu = !isUiHidden;

    const breadcrumbEl = this.headerEl.shadowRoot?.querySelector('ds-breadcrumb');
    const breadcrumbRoot = breadcrumbEl?.shadowRoot;
    if (!breadcrumbRoot) return;

    const returnWrapper = breadcrumbRoot.querySelector('.crumb-return-wrapper');
    const nonReturnNodes = breadcrumbRoot.querySelectorAll('.crumb-home-btn, .crumb-item-wrapper, .crumb-separator');

    if (returnWrapper instanceof HTMLElement) {
      returnWrapper.style.display = '';
      returnWrapper.style.opacity = '1';
      returnWrapper.style.visibility = 'visible';
      returnWrapper.style.pointerEvents = 'auto';
    }

    nonReturnNodes.forEach((node) => {
      if (!(node instanceof HTMLElement)) return;
      if (isUiHidden) {
        node.style.display = 'none';
        node.style.opacity = '0';
        node.style.visibility = 'hidden';
        node.style.pointerEvents = 'none';
      } else {
        node.style.display = '';
        node.style.opacity = '';
        node.style.visibility = '';
        node.style.pointerEvents = '';
      }
    });
  }

  render() {
    if (!this.layoutEl || !this.thumbnailEl || !this.controlsEl || !this.seekBarEl || !this.headerEl) return;

    const isUiHidden = this.hasAttribute('ui-hidden');
    const isMobileBreakpoint = this.getAttribute('data-mobile-breakpoint') === 'true';
    console.debug('[ds-player-view] render', {
      isUiHidden,
      isPlaying: this._isPlaying,
      isPlayTransitionPending: this._isPlayTransitionPending,
      videoSrc: this.videoSrc,
      subtitleSrc: this.subtitleSrc,
      headerWrapBefore: this.headerWrapEl ? this.headerWrapEl.hidden : null,
      headerBefore: this.headerEl.hidden
    });
    this.layoutEl.setAttribute('aria-label', this.getAttribute('aria-label') || 'Player view template');
    if (!isUiHidden && !this._isPlaying && !this._isPlayTransitionPending) {
      this._setUiVisible(true);
    }
    if (this.headerWrapEl) {
      this.headerWrapEl.hidden = false;
    }
    if (isMobileBreakpoint) {
      this.headerEl.setAttribute('data-mobile-breakpoint', 'true');
      this.controlsEl.setAttribute('data-mobile-breakpoint', 'true');
    } else {
      this.headerEl.removeAttribute('data-mobile-breakpoint');
      this.controlsEl.removeAttribute('data-mobile-breakpoint');
    }
    this.headerEl.showBreadcrumb = this.showBreadcrumb;
    this.headerEl.showNavigationRegion = true;
    this.headerEl.showLanguageMenu = true;
    this.headerEl.breadcrumbItems = this._buildBreadcrumbItems();
    this.headerEl.hidden = false;
    this.headerEl.style.display = '';
    this._applyHeaderReturnOnlyMode(isUiHidden || isMobileBreakpoint);
    console.debug('[ds-player-view] header hidden applied', {
      isUiHidden,
      headerWrapHidden: this.headerWrapEl ? this.headerWrapEl.hidden : null,
      headerHidden: this.headerEl.hidden,
      showBreadcrumb: this.headerEl.showBreadcrumb,
      breadcrumbCount: Array.isArray(this.headerEl.breadcrumbItems) ? this.headerEl.breadcrumbItems.length : 0
    });
    this._forwardAttributes(this.headerEl, HEADER_NAVIGATION_ATTRIBUTES);
    this._forwardAttributes(this.controlsEl, VIDEO_CONTROL_LABEL_ATTRIBUTES);
    this._forwardAttributes(this.thumbnailEl, THUMBNAIL_FRAME_ATTRIBUTES);
    this._syncLoaderVisibility();
    this.style.setProperty('--player-view-stage-gap', this.stageGap);
    this.style.setProperty('--player-view-thumbnail-width', this.thumbnailWidth);
    this.style.setProperty('--player-view-thumbnail-height', this.thumbnailHeight);
    this.style.setProperty('--player-view-controls-width', this.controlsWidth);
    this.style.setProperty('--player-view-viewport-padding', this.viewportPadding);
    this.style.setProperty('--player-view-viewport-inline-padding', this.getAttribute('viewport-inline-padding') || 'clamp(16px, 3vw, 40px)');
    this.style.setProperty('--player-view-viewport-bottom-padding', this.getAttribute('viewport-bottom-padding') || 'clamp(20px, 3vh, 32px)');
    this.thumbnailEl.removeAttribute('screen-image');
    this.thumbnailEl.removeAttribute('custom-only');
    this.thumbnailEl.setAttribute('max-height', this.thumbnailHeight);
    this.controlsEl.setAttribute('show-cc', this._subtitleEnabled ? 'true' : 'false');
    this.controlsEl.setAttribute('cc-enabled', 'false');
    console.debug('[ds-player-view][render][cc] controls visibility sync', {
      subtitleSrc: this.subtitleSrc,
      subtitleEnabled: this._subtitleEnabled,
      showCC: this.controlsEl.getAttribute('show-cc'),
      ccEnabled: this.controlsEl.getAttribute('cc-enabled')
    });
    this.seekBarEl.setAttribute('show-tooltip', isMobileBreakpoint ? 'false' : 'true');
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

    if (this._subtitleEnabled) {
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
