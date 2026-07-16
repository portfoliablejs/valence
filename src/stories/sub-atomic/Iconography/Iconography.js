const css = `
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size, 24px);
    height: var(--icon-size, 24px);
    color: inherit;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: var(--icon-fill, none);
    stroke: var(--icon-stroke, currentColor);
    stroke-width: var(--icon-stroke-width, 2);
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: all var(--anim-fast, 0.2s) ease;
  }

  /* Solid / Filled variant styling rules */
  :host([variant="fill"]) svg,
  :host([variant="filled"]) svg,
  :host([name$="-fill"]) svg,
  :host([name$="-filled"]) svg {
    fill: var(--icon-fill, currentColor);
    stroke: var(--icon-stroke, none);
  }

  /* 
    RTL Icon Flipping Rules
    Flips strictly directional icons horizontally in Right-to-Left environments.
    Safari-compliant: Targets host boolean attributes instead of :host-context()
  */
  :host([dir-rtl]):is(
    [name="chevron-left"], [name="chevron-right"],
    [name="arrow-left"], [name="arrow-right"], [name="arrow-left-long"],
    [name="return"], [name="stop-return"],
    [name="skip-next"], [name="skip-previous"],
    [name="forward-5"], [name="forward-10"],
    [name="backward-5"], [name="backward-10"],
    [name="tab-nav-left"], [name="tab-nav-right"],
    [name="external-link"],
    [name="volume-on"], [name="volume-closed"], [name="volume-mute"], [name="volume-low"], [name="volume-medium"], [name="volume-high"]
  ) svg {
    transform: scaleX(-1);
  }

  /* ==========================================================================
     100% SELF-CONTAINED FORCED COLORS & HIGH CONTRAST MODE
     ========================================================================== */

  /* 1. Native Operating System Forced Colors Mode */
  @media (forced-colors: active) {
    :host {
      /* Force host to strictly inherit the parent container's computed color, 
         overriding any inline style="color: ..." set by JS.
         This guarantees the icon automatically shifts whenever the parent hovers/focuses. */
      color: inherit !important;
    }

    svg,
    svg text {
      stroke: currentColor !important;
      fill: none !important;
      forced-color-adjust: auto;
    }

    /* Filled icons mirror currentColor for solid fills */
    :host([variant="fill"]) svg,
    :host([variant="filled"]) svg,
    :host([name$="-fill"]) svg,
    :host([name$="-filled"]) svg {
      fill: currentColor !important;
      stroke: none !important;
    }
  }

  /* 2. Synthetic Storybook Accessibility Mode (.a11y-forced-colors & .a11y-high-contrast) */
  :host([a11y-forced-colors]),
  :host([a11y-high-contrast]) {
    color: inherit !important;
  }

  :host([a11y-forced-colors]) svg,
  :host([a11y-high-contrast]) svg,
  :host([a11y-forced-colors]) svg text,
  :host([a11y-high-contrast]) svg text {
    stroke: currentColor !important;
    fill: none !important;
  }

  :host([a11y-forced-colors]):is([variant="fill"], [variant="filled"], [name$="-fill"], [name$="-filled"]) svg,
  :host([a11y-high-contrast]):is([variant="fill"], [variant="filled"], [name$="-fill"], [name$="-filled"]) svg {
    fill: currentColor !important;
    stroke: none !important;
  }
`;

export const ICON_REGISTRY = {
  /* Media & Player Controls - Outlined & Filled */
  'play': `<path d="M6 4l14 8-14 8V4z"/>`,
  'play-fill': `<polygon points="5 3 19 12 5 21 5 3"/>`,
  'pause': `<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>`,
  'pause-fill': `<rect x="5" y="3" width="5" height="18" rx="1.5"/><rect x="14" y="3" width="5" height="18" rx="1.5"/>`,
  'motion-play': `<polygon points="5 3 19 12 5 21 5 3"></polygon>`,
  'skip-next': `<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>`,
  'skip-previous': `<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="5" x2="5" y2="19"></line>`,
  'forward-10': `<path d="M8.97 15.53V8.63a.03.03 0 0 0-.06-.03s-.97 1.38-1.56 1.79"/><rect x="10.95" y="8.45" width="4.28" height="7.08" rx="2.14"/><polyline points="20.41 5.78 19.44 9.02 16.2 8.04"/><path d="M19.45 8.98a8.22 8.22 0 1 0 .34 4.97"/>`,
  'forward-5': `<path d="M13.5 8.62H10.12v3.1h1.8a2.1 2.1 0 1 1 0 4.2H10.05"/><polyline points="20.41 5.78 19.44 9.02 16.2 8.04"/><path d="M19.45 8.98a8.22 8.22 0 1 0 .34 4.97"/>`,
  'backward-10': `<path d="M9.97 15.53V8.63a.03.03 0 0 0-.06-.03s-.97 1.38-1.56 1.79"/><rect x="11.2" y="8.45" width="4.28" height="7.08" rx="2.14"/><polyline points="3.59 5.78 4.56 9.02 7.8 8.04"/><path d="M4.55 8.98a8.22 8.22 0 1 1-.34 4.97"/>`,
  'backward-5': `<path d="M13.5 8.62H10.12v3.1h1.8a2.1 2.1 0 1 1 0 4.2H10.05"/><polyline points="3.59 5.78 4.56 9.02 7.8 8.04"/><path d="M4.55 8.98a8.22 8.22 0 1 1-.34 4.97"/>`,
  
  /* Graduated Volume Controls */
  'volume-mute': `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>`,
  'volume-low': `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>`,
  'volume-medium': `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>`,
  'volume-high': `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M14.5 10a2.5 2.5 0 0 1 0 4"></path><path d="M17.5 7.5a6 6 0 0 1 0 9"></path><path d="M20.5 5a10 10 0 0 1 0 14"></path>`,
  
  /* Legacy & Helper Volume States */
  'volume-on': `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>`,
  'volume-closed': `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="21" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="21" y2="15"></line>`,
  
  'subtitle-on': `<rect x="3" y="5" width="18" height="14" rx="3"></rect><path d="M7 15h3M14 15h3M7 11h10"></path>`,
  'subtitle-closed': `<rect x="3" y="5" width="18" height="14" rx="3"></rect><path d="M7 15h3M14 15h3M7 11h10"></path><line x1="4" y1="4" x2="20" y2="20"></line>`,
  'autoscroll': `<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>`,
  'autoscroll-closed': `<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline><line x1="4" y1="4" x2="20" y2="20"></line>`,

  'fullscreen-enter': `<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>`,
  'fullscreen-exit': `<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>`,
  'repeat': `<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>`,
  'shuffle': `<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>`,
  'pip': `<rect x="2" y="4" width="20" height="16" rx="3"></rect><rect x="12" y="11" width="8" height="7" rx="1"></rect>`,

  /* Playback Speed (Standardized Gauge Icons) */
  'playback-0-75x': `<path d="M5 17a8.5 8.5 0 1 1 14 0"/><circle cx="12" cy="14" r="1.5"/><line x1="12" y1="14" x2="7" y2="17"/>`,
  'playback-1x': `<path d="M5 17a8.5 8.5 0 1 1 14 0"/><circle cx="12" cy="14" r="1.5"/><line x1="12" y1="14" x2="12" y2="7"/>`,
  'playback-1-25x': `<path d="M5 17a8.5 8.5 0 1 1 14 0"/><circle cx="12" cy="14" r="1.5"/><line x1="12" y1="14" x2="16.5" y2="9.5"/>`,
  'playback-1-5x': `<path d="M5 17a8.5 8.5 0 1 1 14 0"/><circle cx="12" cy="14" r="1.5"/><line x1="12" y1="14" x2="18" y2="14"/>`,
  'playback-1-75x': `<path d="M5 17a8.5 8.5 0 1 1 14 0"/><circle cx="12" cy="14" r="1.5"/><line x1="12" y1="14" x2="17" y2="17"/>`,
  'playback-2x': `<path d="M5 17a8.5 8.5 0 1 1 14 0"/><circle cx="12" cy="14" r="1.5"/><line x1="12" y1="14" x2="17" y2="17"/><path d="M19 7l2-2M15 4l2-2"/>`,

  /* Video Quality Controls (Standardized Badge Badges) */
  'video-quality': `<rect x="2" y="4" width="20" height="16" rx="3"></rect><path d="M12 18v2M8 20h8"></path><circle cx="12" cy="11" r="2.5"></circle>`,
  'hd': `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="9" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">HD</text>`,
  'quality-auto': `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="14.8" font-size="6.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">AUTO</text>`,
  'quality-240p': `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="7.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">240p</text>`,
  'quality-360p': `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="7.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">360p</text>`,
  'quality-480p': `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="7.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">480p</text>`,
  'quality-720p': `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="7.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">720p</text>`,
  'quality-1080p': `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="14.5" font-size="6" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">1080p</text>`,
  'quality-1440p': `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="14.5" font-size="6" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">1440p</text>`,
  'quality-2k': `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="9" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">2K</text>`,
  'quality-4k': `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="9" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">4K</text>`,

  /* Navigation & Layout */
  'tab-nav-left': `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>`,
  'tab-nav-right': `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="15" y1="3" x2="15" y2="21"></line>`,
  'chevron-right': `<path d="M9 18l6-6-6-6"/>`,
  'chevron-left': `<path d="M15 18l-6-6 6-6"/>`,
  'chevron-up': `<path d="M18 15l-6-6-6 6"/>`,
  'chevron-down': `<path d="M6 9l6 6 6-6"/>`,
  'arrow-right': `<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>`,
  'arrow-left': `<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>`,
  'arrow-left-long': `<line x1="22" y1="12" x2="2" y2="12"></line><polyline points="9 19 2 12 9 5"></polyline>`,
  'return': `<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>`,
  'stop-return': `<path d="M20 16.5H13M13 16.5L16 13.5M13 16.5L16 19.5"/>`,
  'menu': `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`,
  'more-horizontal': `<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>`,
  'more-vertical': `<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>`,
  'external-link': `<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>`,
  'drag-handle': `<circle cx="9" cy="6" r="1.5" fill="currentColor" stroke="none"/><circle cx="9" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="9" cy="18" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="6" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="18" r="1.5" fill="currentColor" stroke="none"/>`,
  
  /* System & Accessibility - Outlined & Filled */
  'search': `<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,
  'close': `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,
  'check': `<polyline points="20 6 9 17 4 12"></polyline>`,
  'check-circle': `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>`,
  'check-circle-fill': `<circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="Canvas" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  'info': `<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,
  'info-fill': `<circle cx="12" cy="12" r="10"/><path d="M12 8v.01M12 11v5" stroke="Canvas" stroke-width="2.5" stroke-linecap="round"/>`,
  'alert-circle': `<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>`,
  'alert-circle-fill': `<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16v.01" stroke="Canvas" stroke-width="2.5" stroke-linecap="round"/>`,
  
  'lock-closed': `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>`,
  'lock-closed-fill': `<path d="M17 11V7A5 5 0 0 0 7 11v0H3v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11h-4z"/>`,
  'lock-open': `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>`,
  'eye-open': `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`,
  'eye-closed': `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="4" y1="4" x2="20" y2="20"></line>`,
  
  'text-size': `<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>`,
  'language': `<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path>`,
  'accessibility': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="7" r="2" fill="currentColor" stroke="none"/><path d="M7 11h10M12 11v5m0 0l-3 5m3-5l3 5" stroke-linecap="round"/>`,
  'high-contrast': `<circle cx="12" cy="12" r="9"/><path d="M12 3v18a9 9 0 0 0 0-18z"/>`,
  'sun': `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`,
  'sun-fill': `<circle cx="12" cy="12" r="6"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  'moon': `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`,
  'moon-fill': `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`,
  'settings': `<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,
  'filter': `<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>`,

  /* Actions & Sharing - Outlined & Filled */
  'plus': `<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>`,
  'minus': `<line x1="5" y1="12" x2="19" y2="12"></line>`,
  'edit': `<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>`,
  'trash': `<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>`,
  'trash-fill': `<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14zm-3-4H8a2 2 0 0 0-2 2v2h12V4a2 2 0 0 0-2-2z"/>`,
  'copy': `<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>`,
  'download': `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>`,
  'upload': `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>`,
  'bookmark': `<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>`,
  'bookmark-fill': `<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>`,
  'share': `<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>`,
  'email': `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>`,
  'link': `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>`,
  'ask-ai': `<rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8.01" y2="16" /><line x1="16" y1="16" x2="16.01" y2="16" />`,

  /* User & Account - Outlined & Filled */
  'user': `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>`,
  'user-fill': `<path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.42 0-8 2.24-8 5v2h16v-2c0-2.76-3.58-5-8-5z"/>`,
  'users': `<path d="M17 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path><path d="M21 21v-2a4 4 0 0 0-3-3.87"></path><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path><path d="M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"></path>`,
  'user-plus': `<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>`,

  /* Data & Files - Outlined & Filled */
  'file': `<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>`,
  'file-fill': `<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7z"/>`,
  'folder': `<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>`,
  'folder-fill': `<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v11z"/>`,
  'image': `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>`,
  'paperclip': `<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>`,

  /* Social & Shields */
  'linkedin': `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>`,
  'x': `<path d="M4 4l11.73 16h5L9 4H4z"></path><path d="M4 20l6.76-6.76"></path><path d="M20 4l-6.76 6.76"></path>`,
  'facebook': `<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>`,
  'flag-shield': `<path d="M4 19V5a2 2 0 0 1 2-2h13.4a1 1 0 0 1 .8 1.6l-3 4.4H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2-2H6a2 2 0 0 1-2-2z"></path>`,
  'pirate-shield': `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>`
};

class Icon extends HTMLElement {
  static get observedAttributes() { return ['name', 'size', 'color', 'variant']; }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<style>${css}</style><svg viewBox="0 0 24 24" aria-hidden="true" part="icon-svg"></svg>`;
  }

  connectedCallback() {
    this._observeRootContext();
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) { this.render(); }
  }

  _observeRootContext() {
    const root = this.ownerDocument.documentElement;

    const sync = () => {
      const isRtl = root.getAttribute('dir') === 'rtl';
      this.toggleAttribute('dir-rtl', isRtl);
      this.toggleAttribute('a11y-forced-colors', root.classList.contains('a11y-forced-colors'));
      this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
    };

    sync();

    this._contextObserver = new MutationObserver(sync);
    this._contextObserver.observe(root, {
      attributes: true,
      attributeFilter: ['dir', 'class'],
    });
  }

  disconnectedCallback() {
    if (this._contextObserver) {
      this._contextObserver.disconnect();
    }
  }

  render() {
    const svgEl = this.shadowRoot.querySelector('svg');
    const name = this.getAttribute('name');
    const size = this.getAttribute('size');
    const color = this.getAttribute('color');

    if (size) this.style.setProperty('--icon-size', `${size}px`);
    if (color) this.style.color = color;

    if (name && ICON_REGISTRY[name]) {
      svgEl.innerHTML = ICON_REGISTRY[name];
    } else {
      svgEl.innerHTML = '';
    }
  }
}

if (!customElements.get('ds-icon')) {
  customElements.define('ds-icon', Icon);
}