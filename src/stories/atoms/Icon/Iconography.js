/* ==========================================================================
   Iconography.js
   ========================================================================== */
const css = `
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--ds-icon-size, 24px);
    height: var(--ds-icon-size, 24px);
    color: inherit;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: var(--ds-icon-fill, none);
    stroke: var(--ds-icon-stroke, currentColor);
    stroke-width: var(--ds-icon-stroke-width, 2);
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: all var(--anim-fast, 0.2s) ease;
  }

  /* Solid / Filled variant styling rules */
  :host([variant="fill"]) svg,
  :host([variant="filled"]) svg {
    fill: var(--ds-icon-fill, currentColor);
    stroke: var(--ds-icon-stroke, none);
  }

  /* RTL Icon Flipping Rules */
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
     FORCED COLORS & HIGH CONTRAST MODE
     ========================================================================== */

  @media (forced-colors: active) {
    :host {
      color: inherit !important;
    }

    svg,
    svg text {
      stroke: currentColor !important;
      fill: none !important;
      forced-color-adjust: auto;
    }

    :host([variant="fill"]) svg,
    :host([variant="filled"]) svg {
      fill: currentColor !important;
      stroke: none !important;
    }
  }

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

  :host([a11y-forced-colors]):is([variant="fill"], [variant="filled"]) svg,
  :host([a11y-high-contrast]):is([variant="fill"], [variant="filled"]) svg {
    fill: currentColor !important;
    stroke: none !important;
  }
`;

/**
 * Standardized System Icon Registry
 * Every icon provides both an 'outline' and 'fill' path variant.
 */
export const ICON_REGISTRY = {
  /* Media & Player Controls */
  'play': {
    outline: `<path d="M6 4l14 8-14 8V4z"/>`,
    fill: `<polygon points="5 3 19 12 5 21 5 3"/>`
  },
  'pause': {
    outline: `<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>`,
    fill: `<rect x="5" y="3" width="5" height="18" rx="1.5"/><rect x="14" y="3" width="5" height="18" rx="1.5"/>`
  },
  'motion-play': {
    outline: `<polygon points="6 4 18 12 6 20 6 4"/>`,
    fill: `<polygon points="5 3 19 12 5 21 5 3"/>`
  },
  'skip-next': {
    outline: `<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>`,
    fill: `<polygon points="4 3 16 12 4 21 4 3"/><rect x="17" y="3" width="3" height="18" rx="1"/>`
  },
  'skip-previous': {
    outline: `<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="5" x2="5" y2="19"/>`,
    fill: `<polygon points="20 21 8 12 20 3 20 21"/><rect x="4" y="3" width="3" height="18" rx="1"/>`
  },
  'forward-10': {
    outline: `<path d="M8.97 15.53V8.63a.03.03 0 0 0-.06-.03s-.97 1.38-1.56 1.79"/><rect x="10.95" y="8.45" width="4.28" height="7.08" rx="2.14"/><polyline points="20.41 5.78 19.44 9.02 16.2 8.04"/><path d="M19.45 8.98a8.22 8.22 0 1 0 .34 4.97"/>`,
    fill: `<path d="M8.97 15.53V8.63a.03.03 0 0 0-.06-.03s-.97 1.38-1.56 1.79" stroke="Canvas" stroke-width="1.5"/><rect x="10.95" y="8.45" width="4.28" height="7.08" rx="2.14" fill="none" stroke="Canvas" stroke-width="1.5"/><path d="M19.45 8.98a8.22 8.22 0 1 0 .34 4.97" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><polygon points="20.41 5.78 19.44 9.02 16.2 8.04"/>`
  },
  'forward-5': {
    outline: `<path d="M13.5 8.62H10.12v3.1h1.8a2.1 2.1 0 1 1 0 4.2H10.05"/><polyline points="20.41 5.78 19.44 9.02 16.2 8.04"/><path d="M19.45 8.98a8.22 8.22 0 1 0 .34 4.97"/>`,
    fill: `<path d="M13.5 8.62H10.12v3.1h1.8a2.1 2.1 0 1 1 0 4.2H10.05" fill="none" stroke="Canvas" stroke-width="2" stroke-linecap="round"/><path d="M19.45 8.98a8.22 8.22 0 1 0 .34 4.97" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><polygon points="20.41 5.78 19.44 9.02 16.2 8.04"/>`
  },
  'backward-10': {
    outline: `<path d="M9.97 15.53V8.63a.03.03 0 0 0-.06-.03s-.97 1.38-1.56 1.79"/><rect x="11.2" y="8.45" width="4.28" height="7.08" rx="2.14"/><polyline points="3.59 5.78 4.56 9.02 7.8 8.04"/><path d="M4.55 8.98a8.22 8.22 0 1 1-.34 4.97"/>`,
    fill: `<path d="M9.97 15.53V8.63a.03.03 0 0 0-.06-.03s-.97 1.38-1.56 1.79" stroke="Canvas" stroke-width="1.5"/><rect x="11.2" y="8.45" width="4.28" height="7.08" rx="2.14" fill="none" stroke="Canvas" stroke-width="1.5"/><path d="M4.55 8.98a8.22 8.22 0 1 1-.34 4.97" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><polygon points="3.59 5.78 4.56 9.02 7.8 8.04"/>`
  },
  'backward-5': {
    outline: `<path d="M13.5 8.62H10.12v3.1h1.8a2.1 2.1 0 1 1 0 4.2H10.05"/><polyline points="3.59 5.78 4.56 9.02 7.8 8.04"/><path d="M4.55 8.98a8.22 8.22 0 1 1-.34 4.97"/>`,
    fill: `<path d="M13.5 8.62H10.12v3.1h1.8a2.1 2.1 0 1 1 0 4.2H10.05" fill="none" stroke="Canvas" stroke-width="2" stroke-linecap="round"/><path d="M4.55 8.98a8.22 8.22 0 1 1-.34 4.97" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><polygon points="3.59 5.78 4.56 9.02 7.8 8.04"/>`
  },

  /* Graduated Volume Controls */
  'volume-mute': {
    outline: `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>`,
    fill: `<polygon points="11 4 6 8.5 2 8.5 2 15.5 6 15.5 11 20 11 4"/>`
  },
  'volume-low': {
    outline: `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>`,
    fill: `<polygon points="11 4 6 8.5 2 8.5 2 15.5 6 15.5 11 20 11 4"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`
  },
  'volume-medium': {
    outline: `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>`,
    fill: `<polygon points="11 4 6 8.5 2 8.5 2 15.5 6 15.5 11 20 11 4"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`
  },
  'volume-high': {
    outline: `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M14.5 10a2.5 2.5 0 0 1 0 4"></path><path d="M17.5 7.5a6 6 0 0 1 0 9"></path><path d="M20.5 5a10 10 0 0 1 0 14"></path>`,
    fill: `<polygon points="11 4 6 8.5 2 8.5 2 15.5 6 15.5 11 20 11 4"/><path d="M14.5 10a2.5 2.5 0 0 1 0 4M17.5 7.5a6 6 0 0 1 0 9M20.5 5a10 10 0 0 1 0 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`
  },
  'volume-on': {
    outline: `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>`,
    fill: `<polygon points="11 4 6 8.5 2 8.5 2 15.5 6 15.5 11 20 11 4"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`
  },
  'volume-closed': {
    outline: `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="21" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="21" y2="15"></line>`,
    fill: `<polygon points="11 4 6 8.5 2 8.5 2 15.5 6 15.5 11 20 11 4"/><path d="M21 9l-6 6M15 9l6 6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`
  },

  /* Captions, Autoscroll & Display Controls */
  'subtitle-on': {
    outline: `<rect x="3" y="5" width="18" height="14" rx="3"></rect><path d="M7 15h3M14 15h3M7 11h10"></path>`,
    fill: `<rect x="2" y="4" width="20" height="16" rx="3"/><path d="M7 15h3M14 15h3M7 11h10" stroke="Canvas" stroke-width="2" stroke-linecap="round"/>`
  },
  'subtitle-closed': {
    outline: `<rect x="3" y="5" width="18" height="14" rx="3"></rect><path d="M7 15h3M14 15h3M7 11h10"></path><line x1="4" y1="4" x2="20" y2="20"></line>`,
    fill: `<rect x="2" y="4" width="20" height="16" rx="3"/><path d="M7 15h3M14 15h3M7 11h10" stroke="Canvas" stroke-width="2" stroke-linecap="round"/><line x1="3" y1="3" x2="21" y2="21" stroke="Canvas" stroke-width="2.5" stroke-linecap="round"/>`
  },
  'autoscroll': {
    outline: `<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>`,
    fill: `<polygon points="12 19 6 13 18 13"/><polygon points="12 12 6 6 18 6"/>`
  },
  'autoscroll-closed': {
    outline: `<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline><line x1="4" y1="4" x2="20" y2="20"></line>`,
    fill: `<polygon points="12 19 6 13 18 13"/><polygon points="12 12 6 6 18 6"/><line x1="3" y1="3" x2="21" y2="21" stroke="Canvas" stroke-width="2.5" stroke-linecap="round"/>`
  },
  'fullscreen-enter': {
    outline: `<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>`,
    fill: `<path d="M3 3h6v3H6v3H3V3zm18 0h-6v3h3v3h3V3zM3 21h6v-3H6v-3H3v6zm18 0h-6v-3h3v-3h3v6z"/>`
  },
  'fullscreen-exit': {
    outline: `<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>`,
    fill: `<path d="M9 3v6H3V6h3V3h3zm6 0v6h6V6h-3V3h-3zM9 21v-6H3v3h3v3h3zm6 0v-6h6v3h-3v3h-3z"/>`
  },
  'repeat': {
    outline: `<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>`,
    fill: `<polygon points="17 1 23 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><polygon points="7 23 1 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>`
  },
  'shuffle': {
    outline: `<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>`,
    fill: `<polygon points="16 2 22 2 22 8"/><polygon points="22 16 22 22 16 22"/><path d="M4 20L21 3M15 15l6 6M4 4l5 5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>`
  },
  'pip': {
    outline: `<rect x="2" y="4" width="20" height="16" rx="3"></rect><rect x="12" y="11" width="8" height="7" rx="1"></rect>`,
    fill: `<rect x="2" y="4" width="20" height="16" rx="3"/><rect x="11" y="10" width="9" height="8" rx="1.5" fill="Canvas" stroke="currentColor" stroke-width="1"/>`
  },

  /* Playback Speed Gauges */
  'playback-0-75x': {
    outline: `<path d="M5 17a8.5 8.5 0 1 1 14 0"/><circle cx="12" cy="14" r="1.5"/><line x1="12" y1="14" x2="7" y2="17"/>`,
    fill: `<path d="M12 3a9.5 9.5 0 0 0-7.6 15.2l1.6-1.2A7.5 7.5 0 1 1 18 17l1.6 1.2A9.5 9.5 0 0 0 12 3z"/><path d="M12 14l-5 3" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="12" cy="14" r="2.5"/>`
  },
  'playback-1x': {
    outline: `<path d="M5 17a8.5 8.5 0 1 1 14 0"/><circle cx="12" cy="14" r="1.5"/><line x1="12" y1="14" x2="12" y2="7"/>`,
    fill: `<path d="M12 3a9.5 9.5 0 0 0-7.6 15.2l1.6-1.2A7.5 7.5 0 1 1 18 17l1.6 1.2A9.5 9.5 0 0 0 12 3z"/><path d="M12 14V7" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="12" cy="14" r="2.5"/>`
  },
  'playback-1-25x': {
    outline: `<path d="M5 17a8.5 8.5 0 1 1 14 0"/><circle cx="12" cy="14" r="1.5"/><line x1="12" y1="14" x2="16.5" y2="9.5"/>`,
    fill: `<path d="M12 3a9.5 9.5 0 0 0-7.6 15.2l1.6-1.2A7.5 7.5 0 1 1 18 17l1.6 1.2A9.5 9.5 0 0 0 12 3z"/><path d="M12 14l4.5-4.5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="12" cy="14" r="2.5"/>`
  },
  'playback-1-5x': {
    outline: `<path d="M5 17a8.5 8.5 0 1 1 14 0"/><circle cx="12" cy="14" r="1.5"/><line x1="12" y1="14" x2="18" y2="14"/>`,
    fill: `<path d="M12 3a9.5 9.5 0 0 0-7.6 15.2l1.6-1.2A7.5 7.5 0 1 1 18 17l1.6 1.2A9.5 9.5 0 0 0 12 3z"/><path d="M12 14h6" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="12" cy="14" r="2.5"/>`
  },
  'playback-1-75x': {
    outline: `<path d="M5 17a8.5 8.5 0 1 1 14 0"/><circle cx="12" cy="14" r="1.5"/><line x1="12" y1="14" x2="17" y2="17"/>`,
    fill: `<path d="M12 3a9.5 9.5 0 0 0-7.6 15.2l1.6-1.2A7.5 7.5 0 1 1 18 17l1.6 1.2A9.5 9.5 0 0 0 12 3z"/><path d="M12 14l5 3" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="12" cy="14" r="2.5"/>`
  },
  'playback-2x': {
    outline: `<path d="M5 17a8.5 8.5 0 1 1 14 0"/><circle cx="12" cy="14" r="1.5"/><line x1="12" y1="14" x2="17" y2="17"/><path d="M19 7l2-2M15 4l2-2"/>`,
    fill: `<path d="M12 3a9.5 9.5 0 0 0-7.6 15.2l1.6-1.2A7.5 7.5 0 1 1 18 17l1.6 1.2A9.5 9.5 0 0 0 12 3z"/><path d="M12 14l5 3M19 7l2-2M15 4l2-2" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="12" cy="14" r="2.5"/>`
  },

  /* Video Quality Badges */
  'video-quality': {
    outline: `<rect x="2" y="4" width="20" height="16" rx="3"></rect><path d="M12 18v2M8 20h8"></path><circle cx="12" cy="11" r="2.5"></circle>`,
    fill: `<rect x="2" y="4" width="20" height="16" rx="3"/><circle cx="12" cy="11" r="2.5" fill="Canvas"/><path d="M12 18v2M8 20h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`
  },
  'hd': {
    outline: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="9" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">HD</text>`,
    fill: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="9" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="Canvas" stroke="none">HD</text>`
  },
  'quality-auto': {
    outline: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="14.8" font-size="6.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">AUTO</text>`,
    fill: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="14.8" font-size="6.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="Canvas" stroke="none">AUTO</text>`
  },
  'quality-240p': {
    outline: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="7.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">240p</text>`,
    fill: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="7.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="Canvas" stroke="none">240p</text>`
  },
  'quality-360p': {
    outline: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="7.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">360p</text>`,
    fill: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="7.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="Canvas" stroke="none">360p</text>`
  },
  'quality-480p': {
    outline: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="7.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">480p</text>`,
    fill: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="7.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="Canvas" stroke="none">480p</text>`
  },
  'quality-720p': {
    outline: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="7.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">720p</text>`,
    fill: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="7.5" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="Canvas" stroke="none">720p</text>`
  },
  'quality-1080p': {
    outline: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="14.5" font-size="6" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">1080p</text>`,
    fill: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="14.5" font-size="6" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="Canvas" stroke="none">1080p</text>`
  },
  'quality-1440p': {
    outline: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="14.5" font-size="6" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">1440p</text>`,
    fill: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="14.5" font-size="6" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="Canvas" stroke="none">1440p</text>`
  },
  'quality-2k': {
    outline: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="9" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">2K</text>`,
    fill: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="9" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="Canvas" stroke="none">2K</text>`
  },
  'quality-4k': {
    outline: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="9" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">4K</text>`,
    fill: `<rect x="2" y="4" width="20" height="16" rx="3"/><text x="12" y="15" font-size="9" font-weight="700" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" fill="Canvas" stroke="none">4K</text>`
  },

  /* Navigation & Layout */
  'tab-nav-left': {
    outline: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>`,
    fill: `<path d="M3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><line x1="9" y1="3" x2="9" y2="21" stroke="Canvas" stroke-width="2"/>`
  },
  'tab-nav-right': {
    outline: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="15" y1="3" x2="15" y2="21"></line>`,
    fill: `<path d="M3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><line x1="15" y1="3" x2="15" y2="21" stroke="Canvas" stroke-width="2"/>`
  },
  'chevron-right': {
    outline: `<path d="M9 18l6-6-6-6"/>`,
    fill: `<polygon points="9 18 16 12 9 6 9 18"/>`
  },
  'chevron-left': {
    outline: `<path d="M15 18l-6-6 6-6"/>`,
    fill: `<polygon points="15 18 8 12 15 6 15 18"/>`
  },
  'chevron-up': {
    outline: `<path d="M18 15l-6-6-6 6"/>`,
    fill: `<polygon points="18 15 12 8 6 15 18 15"/>`
  },
  'chevron-down': {
    outline: `<path d="M6 9l6 6 6-6"/>`,
    fill: `<polygon points="6 9 12 16 18 9 6 9"/>`
  },
  'arrow-right': {
    outline: `<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>`,
    fill: `<path d="M19.7 11.3l-6-6A1 1 0 0 0 12.3 6.7L16.6 11H5a1 1 0 0 0 0 2h11.6l-4.3 4.3a1 1 0 1 0 1.4 1.4l6-6a1 1 0 0 0 0-1.4z"/>`
  },
  'arrow-left': {
    outline: `<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>`,
    fill: `<path d="M4.3 11.3l6-6a1 1 0 0 1 1.4 1.4L7.4 11H19a1 1 0 0 1 0 2H7.4l4.3 4.3a1 1 0 0 1-1.4 1.4l-6-6a1 1 0 0 1 0-1.4z"/>`
  },
  'arrow-left-long': {
    outline: `<line x1="22" y1="12" x2="2" y2="12"></line><polyline points="9 19 2 12 9 5"></polyline>`,
    fill: `<path d="M1.3 11.3l7-7a1 1 0 0 1 1.4 1.4L4.4 11H22a1 1 0 0 1 0 2H4.4l5.3 5.3a1 1 0 0 1-1.4 1.4l-7-7a1 1 0 0 1 0-1.4z"/>`
  },
  'return': {
    outline: `<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>`,
    fill: `<path d="M4.3 11.3l6-6a1 1 0 0 1 1.4 1.4L7.4 11H19a1 1 0 0 1 0 2H7.4l4.3 4.3a1 1 0 0 1-1.4 1.4l-6-6a1 1 0 0 1 0-1.4z"/>`
  },
  'stop-return': {
    outline: `<path d="M20 16.5H13M13 16.5L16 13.5M13 16.5L16 19.5"/>`,
    fill: `<path d="M20 15.5h-7l2.5-2.5a1 1 0 0 0-1.4-1.4l-4.2 4.2a1 1 0 0 0 0 1.4l4.2 4.2a1 1 0 0 0 1.4-1.4L13 17.5h7a1 1 0 0 0 0-2z"/>`
  },
  'menu': {
    outline: `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`,
    fill: `<rect x="3" y="5" width="18" height="3" rx="1.5"/><rect x="3" y="11.5" width="18" height="3" rx="1.5"/><rect x="3" y="18" width="18" height="3" rx="1.5"/>`
  },
  'more-horizontal': {
    outline: `<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>`,
    fill: `<circle cx="12" cy="12" r="2.5"/><circle cx="19" cy="12" r="2.5"/><circle cx="5" cy="12" r="2.5"/>`
  },
  'more-vertical': {
    outline: `<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>`,
    fill: `<circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="5" r="2.5"/><circle cx="12" cy="19" r="2.5"/>`
  },
  'external-link': {
    outline: `<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>`,
    fill: `<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6v2H5v11h11v-6h2z"/><polygon points="14 3 22 3 22 11 19.2 8.2 11.4 16 10 14.6 17.8 6.8"/>`
  },
  'drag-handle': {
    outline: `<circle cx="9" cy="6" r="1.5" fill="currentColor" stroke="none"/><circle cx="9" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="9" cy="18" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="6" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="18" r="1.5" fill="currentColor" stroke="none"/>`,
    fill: `<circle cx="9" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="9" cy="18" r="2"/><circle cx="15" cy="6" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="15" cy="18" r="2"/>`
  },

  /* System & Accessibility */
  'search': {
    outline: `<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,
    fill: `<path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>`
  },
  'close': {
    outline: `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,
    fill: `<path d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.12 5.71a1 1 0 0 0-1.42 1.42L10.59 12l-4.89 4.88a1 1 0 0 0 1.42 1.42L12 13.41l4.88 4.89a1 1 0 0 0 1.42-1.42L13.41 12l4.89-4.88a1 1 0 0 0 0-1.41z"/>`
  },
  'check': {
    outline: `<polyline points="20 6 9 17 4 12"></polyline>`,
    fill: `<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>`
  },
  'check-circle': {
    outline: `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>`,
    fill: `<circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="Canvas" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`
  },
  'info': {
    outline: `<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`,
    fill: `<circle cx="12" cy="12" r="10"/><path d="M12 8v.01M12 11v5" stroke="Canvas" stroke-width="2.5" stroke-linecap="round"/>`
  },
  'alert-circle': {
    outline: `<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>`,
    fill: `<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16v.01" stroke="Canvas" stroke-width="2.5" stroke-linecap="round"/>`
  },
  'lock-closed': {
    outline: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>`,
    fill: `<path d="M17 11V7A5 5 0 0 0 7 11v0H3v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11h-4z"/>`
  },
  'lock-open': {
    outline: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>`,
    fill: `<path d="M17 11V7A5 5 0 0 0 7 11a1 1 0 0 1 2 0 7 7 0 0 0-14 0v4H3v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11h-4z"/>`
  },
  'eye-open': {
    outline: `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`,
    fill: `<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 13a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>`
  },
  'eye-closed': {
    outline: `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="4" y1="4" x2="20" y2="20"></line>`,
    fill: `<path d="M12 4.5c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M12 19.5c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`
  },
  'text-size': {
    outline: `<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>`,
    fill: `<path d="M3 4h18v3h-7.5v13h-3V7H3V4zM8 18h8v2H8v-2z"/>`
  },
  'language': {
    outline: `<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>`,
    fill: `<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke="Canvas" stroke-width="2"/>`
  },
  'accessibility': {
    outline: `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="7" r="2" fill="currentColor" stroke="none"/><path d="M7 11h10M12 11v5m0 0l-3 5m3-5l3 5" stroke-linecap="round"/>`,
    fill: `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="7" r="1.8" fill="Canvas"/><path d="M7 11h10M12 11v5m0 0l-3 5m3-5l3 5" stroke-Canvas" stroke-width="2" stroke-linecap="round"/>`
  },
  'high-contrast': {
    outline: `<circle cx="12" cy="12" r="9"/><path d="M12 3v18a9 9 0 0 0 0-18z"/>`,
    fill: `<circle cx="12" cy="12" r="10"/><path d="M12 2v20a10 10 0 0 0 0-20z" fill="Canvas"/>`
  },
  'sun': {
    outline: `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`,
    fill: `<circle cx="12" cy="12" r="6"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`
  },
  'moon': {
    outline: `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`,
    fill: `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`
  },
  'settings': {
    outline: `<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>`,
    fill: `<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/><circle cx="12" cy="12" r="3.5" fill="Canvas"/>`
  },
  'filter': {
    outline: `<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>`,
    fill: `<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>`
  },

  /* Actions & Sharing */
  'plus': {
    outline: `<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>`,
    fill: `<path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/>`
  },
  'minus': {
    outline: `<line x1="5" y1="12" x2="19" y2="12"></line>`,
    fill: `<rect x="4" y="10.5" width="16" height="3" rx="1.5"/>`
  },
  'edit': {
    outline: `<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>`,
    fill: `<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>`
  },
  'trash': {
    outline: `<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>`,
    fill: `<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14zm-3-4H8a2 2 0 0 0-2 2v2h12V4a2 2 0 0 0-2-2z"/>`
  },
  'copy': {
    outline: `<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>`,
    fill: `<path d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/>`
  },
  'download': {
    outline: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>`,
    fill: `<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>`
  },
  'upload': {
    outline: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>`,
    fill: `<path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2v2h14v-2H5z"/>`
  },
  'bookmark': {
    outline: `<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>`,
    fill: `<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>`
  },
  'share': {
    outline: `<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>`,
    fill: `<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81a3 3 0 1 0-3-3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9a3 3 0 1 0 0 6c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65a3 3 0 1 0 3-3z"/>`
  },
  'email': {
    outline: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>`,
    fill: `<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>`
  },
  'link': {
    outline: `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>`,
    fill: `<path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>`
  },
  'ask-ai': {
    outline: `<rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8.01" y2="16" /><line x1="16" y1="16" x2="16.01" y2="16" />`,
    fill: `<rect x="3" y="10" width="18" height="11" rx="2"/><circle cx="12" cy="4" r="2.5"/><path d="M12 6.5v3.5" stroke="Canvas" stroke-width="2"/><circle cx="8" cy="15.5" r="1.5" fill="Canvas"/><circle cx="16" cy="15.5" r="1.5" fill="Canvas"/>`
  },

  /* User & Account */
  'user': {
    outline: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>`,
    fill: `<path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.42 0-8 2.24-8 5v2h16v-2c0-2.76-3.58-5-8-5z"/>`
  },
  'users': {
    outline: `<path d="M17 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path><path d="M21 21v-2a4 4 0 0 0-3-3.87"></path><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path><path d="M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"></path>`,
    fill: `<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-.32 0-.63.05-.91.14A5.98 5.98 0 0 1 16 11zm1 2c-1.2 0-2.26.42-3.1 1.11A6.97 6.97 0 0 1 21 19v2h2v-2c0-2.21-1.79-4-4-4zM8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>`
  },
  'user-plus': {
    outline: `<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>`,
    fill: `<path d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm11-5v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z"/>`
  },

  /* Data & Files */
  'file': {
    outline: `<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>`,
    fill: `<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7z"/>`
  },
  'folder': {
    outline: `<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>`,
    fill: `<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v11z"/>`
  },
  'image': {
    outline: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>`,
    fill: `<path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2.5 13.5l-3.5-4.5-2.5 3-1.5-2L6 18h13.5zM8.5 10c-.83 0-1.5-.67-1.5-1.5S7.67 7 8.5 7s1.5.67 1.5 1.5S9.33 10 8.5 10z"/>`
  },
  'paperclip': {
    outline: `<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>`,
    fill: `<path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.48-2.02-4.5-4.5-4.5S6 2.52 6 5v12.5c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5V6h-2.5z"/>`
  },

  /* Social & Shields */
  'linkedin': {
    outline: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>`,
    fill: `<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>`
  },
  'x': {
    outline: `<path d="M4 4l11.73 16h5L9 4H4z"></path><path d="M4 20l6.76-6.76"></path><path d="M20 4l-6.76 6.76"></path>`,
    fill: `<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>`
  },
  'facebook': {
    outline: `<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>`,
    fill: `<path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.77 5.6c1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>`
  },
  'flag-shield': {
    outline: `<path d="M4 19V5a2 2 0 0 1 2-2h13.4a1 1 0 0 1 .8 1.6l-3 4.4H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2-2H6a2 2 0 0 1-2-2z"></path>`,
    fill: `<path d="M14.4 6L14 4H4v17h2v-7h5.6l.4 2h8V6h-5.6z"/>`
  },
  'pirate-shield': {
    outline: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>`,
    fill: `<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>`
  }
};

class Icon extends HTMLElement {
  static get observedAttributes() { 
    return ['name', 'variant', 'size', 'color']; 
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<style>${css}</style><svg viewBox="0 0 24 24" aria-hidden="true" part="icon-svg"></svg>`;
  }

  connectedCallback() {
    this._observeRootContext();
    this._updateStyles();
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) { 
      if (name === 'size' || name === 'color') {
        this._updateStyles();
      } else {
        this.render(); 
      }
    }
  }

  _updateStyles() {
    const size = this.getAttribute('size');
    const color = this.getAttribute('color');

    if (size) {
      this.style.setProperty('--ds-icon-size', isNaN(size) ? size : `${size}px`);
    }
    if (color) {
      this.style.color = color;
    }
  }

  _observeRootContext() {
    const root = this.ownerDocument.documentElement;

    const sync = () => {
      const isRtl = root.getAttribute('dir') === 'rtl';
      this.toggleAttribute('dir-rtl', isRtl);
      this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
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
    if (!svgEl) return;

    const name = this.getAttribute('name');
    const variant = this.getAttribute('variant') || 'outline';

    const entry = ICON_REGISTRY[name];

    if (entry) {
      if (typeof entry === 'object' && entry !== null) {
        svgEl.innerHTML = (variant === 'fill' || variant === 'filled') ? (entry.fill || entry.outline) : entry.outline;
      } else {
        svgEl.innerHTML = entry;
      }
    } else {
      svgEl.innerHTML = '';
    }
  }
}

if (!customElements.get('ds-icon')) {
  customElements.define('ds-icon', Icon);
}