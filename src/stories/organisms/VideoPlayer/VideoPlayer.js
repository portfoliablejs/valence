import css from './video-player.css?inline';
import '../../molecules/VideoControls/VideoControls.js';
import '../../atoms/Loader/Loader.js';
import '../../atoms/Subtitle/Subtitle.js';

export class VideoPlayer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <div class="player-wrapper">
        <video id="main-video" playsinline preload="metadata"></video>
        <img id="player-phone-frame" class="phone-frame-overlay" alt="Phone Frame">
        <ds-loader visible="true"></ds-loader>
        
        <!-- The Subtitle Atom: Mounted inside the player wrapper -->
        <div class="subtitle-layer" style="position: absolute; bottom: 80px; width: 100%; z-index: 50; display: none;">
          <ds-subtitle visible="false"></ds-subtitle>
        </div>
        
        <ds-video-controls></ds-video-controls>
      </div>
    `;
    this.video = this.shadowRoot.getElementById('main-video');
    this.controls = this.shadowRoot.querySelector('ds-video-controls');
    this.loader = this.shadowRoot.querySelector('ds-loader');
    this.subtitleLayer = this.shadowRoot.querySelector('.subtitle-layer');
    this.subtitle = this.shadowRoot.querySelector('ds-subtitle');
    this.frame = this.shadowRoot.getElementById('player-phone-frame');
    
    this._ccEnabled = false;
    this.bindEvents();
  }

  set caseData(data) {
    if (!data) return;
    this._caseData = data;
    this.render();
  }

  play() {
    this.video.play().catch(err => console.error("Video play failed:", err));
  }

  pause() {
    this.video.pause();
  }

  render() {
    if (!this._caseData) return; 
    const lang = window.currentLang || 'en';
    const getLang = (prop) => (prop && prop[lang]) ? prop[lang] : (prop && prop['en'] ? prop['en'] : '');

    this.video.src = getLang(this._caseData.videoSrc);
    this.frame.src = this._caseData.frameSrc;
    
    if (this._caseData.frameSrc) {
       this.frame.style.display = 'block';
    } else {
       this.frame.style.display = 'none';
    }

    // Handle VTT Subtitle Track Loading
    const oldTrack = this.video.querySelector('track');
    if (oldTrack) oldTrack.remove();

    const vttSrc = getLang(this._caseData.vttSrc);
    if (vttSrc) {
      const track = document.createElement('track');
      track.kind = 'captions';
      track.src = vttSrc;
      track.srclang = lang;
      track.default = false; // Prevents native browser subtitles from rendering over ds-subtitle
      this.video.appendChild(track);

      this._initSubtitleSync();
    }
  }

  /**
   * Bridges the native <track> element to the ds-subtitle Atom
   */
  _initSubtitleSync() {
    // We must wait for the track to be fully parsed by the browser
    const setupTextTrack = () => {
      const textTrack = this.video.textTracks && this.video.textTracks[0];
      if (!textTrack) return false;

      // 'hidden' mode tells the browser to process cue events, but NOT render native UI boxes
      textTrack.mode = this._ccEnabled ? 'hidden' : 'disabled';
      this.subtitleLayer.style.display = this._ccEnabled ? 'block' : 'none';

      textTrack.oncuechange = () => {
        const activeCue = textTrack.activeCues && textTrack.activeCues[0];
        
        if (activeCue && textTrack.mode === 'hidden') {
          // Strip out formatting (<b>, <i>, <v Name>)
          const cleanText = activeCue.text.replace(/<[^>]*>/g, "");
          
          // Push text down into the stateless atom
          this.subtitle.setAttribute('text', cleanText);
          this.subtitle.setAttribute('visible', 'true');
        } else {
          this.subtitle.setAttribute('visible', 'false');
        }
      };
      return true;
    };

    if (!setupTextTrack()) {
      let waited = 0;
      const intervalId = setInterval(() => {
        if (setupTextTrack() || waited > 3000) clearInterval(intervalId);
        waited += 150;
      }, 150);
    }
  }

  bindEvents() {
    this.video.addEventListener('playing', () => {
      this.controls.setAttribute('playing', 'true');
      this.loader.setAttribute('visible', 'false');
    });
    this.video.addEventListener('pause', () => this.controls.setAttribute('playing', 'false'));
    this.video.addEventListener('waiting', () => this.loader.setAttribute('visible', 'true'));
    this.video.addEventListener('ended', () => this.dispatchEvent(new CustomEvent('ds-video-ended')));

    this.controls.addEventListener('ds-video-action', (e) => {
      switch(e.detail.action) {
        case 'play-pause':
          this.video.paused ? this.play() : this.pause();
          break;
        case 'stop':
          this.pause();
          this.dispatchEvent(new CustomEvent('ds-video-close'));
          break;
        case 'cc':
          this._ccEnabled = !this._ccEnabled;
          const track = this.video.textTracks && this.video.textTracks[0];
          if (track) {
            track.mode = this._ccEnabled ? 'hidden' : 'disabled';
            this.subtitleLayer.style.display = this._ccEnabled ? 'block' : 'none';
            if (!this._ccEnabled) {
              this.subtitle.setAttribute('visible', 'false');
            }
          }
          // Assuming your controls molecule exposes a way to toggle the CC icon
          this.controls.setAttribute('cc-enabled', this._ccEnabled ? 'true' : 'false');
          break;
      }
    });
  }
}

if (!customElements.get('ds-video-player')) customElements.define('ds-video-player', VideoPlayer);