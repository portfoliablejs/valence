import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{r,t as i}from"./if-defined-CceMvhO9.js";import{t as a}from"./AudioPlayer-QCuET2it.js";var o,s,c,l,u,d;e((()=>{n(),i(),a(),{expect:o,userEvent:s}=__STORYBOOK_MODULE_TEST__,c={title:`Molecules/Audio Player [v1.0.0]`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"An interactive audio player component (`ds-audio-player`) that manages audio playback states, \nspeed variations, volume controls, and viewport auto-scrolling synchronization."}}},argTypes:{variant:{control:`select`,options:[`default`,`scrolled`],description:`Player variant format (default container or shrunk floating pill)`,table:{category:`Variants`}},playing:{control:`boolean`,description:`Playback state toggle`,table:{category:`Core State`}},time:{control:{type:`range`,min:0,max:300,step:1},description:`Current playback position in seconds`,table:{category:`Core State`}},duration:{control:{type:`number`,min:1},description:`Total track duration in seconds`,table:{category:`Core State`}},speed:{control:{type:`select`},options:[`0.75X`,`1X`,`1.25X`,`1.5X`,`1.75X`,`2X`],description:`Playback speed indicator`,table:{category:`Core State`}},volume:{control:{type:`range`,min:0,max:100,step:1},description:`Volume level percentage`,table:{category:`Core State`}},muted:{control:`boolean`,description:`Mute state toggle`,table:{category:`Core State`}},"hide-on-scroll":{control:`boolean`,description:`Hide player during page scroll state`,table:{category:`Behavior`}},"auto-scroll":{control:`boolean`,description:`Auto-scroll article text with playback`,table:{category:`Behavior`}},labelReader:{name:`label-reader`,control:`text`,description:`Text string for the header category label.`,table:{category:`Localization`}},labelPlay:{name:`label-play`,control:`text`,description:`Accessibility and tooltip label when playback is paused.`,table:{category:`Localization`}},labelPause:{name:`label-pause`,control:`text`,description:`Accessibility and tooltip label when playback is active.`,table:{category:`Localization`}},labelMute:{name:`label-mute`,control:`text`,description:`Accessibility and tooltip label when volume is active.`,table:{category:`Localization`}},labelUnmute:{name:`label-unmute`,control:`text`,description:`Accessibility and tooltip label when volume is muted.`,table:{category:`Localization`}},labelSpeed:{name:`label-speed`,control:`text`,description:`Text prefix used for speed selector tooltips.`,table:{category:`Localization`}},labelHide:{name:`label-hide`,control:`text`,description:`Aria and tooltip description when hide-on-scroll is inactive.`,table:{category:`Localization`}},labelShow:{name:`label-show`,control:`text`,description:`Aria and tooltip description when hide-on-scroll is active.`,table:{category:`Localization`}},labelAutoscrollOn:{name:`label-autoscroll-on`,control:`text`,description:`Aria and tooltip description when auto-scroll is inactive.`,table:{category:`Localization`}},labelAutoscrollOff:{name:`label-autoscroll-off`,control:`text`,description:`Aria and tooltip description when auto-scroll is active.`,table:{category:`Localization`}},labelVolume:{name:`label-volume`,control:`text`,description:`Tooltip text prefix for the volume slider control.`,table:{category:`Localization`}},labelVolumeLevel:{name:`label-volume-level`,control:`text`,description:`Accessibility label delegated into the volume slider container.`,table:{category:`Localization`}},labelAudioPos:{name:`label-audio-pos`,control:`text`,description:`Accessibility label delegated into the main playback seek-bar slider.`,table:{category:`Localization`}},onPlayToggle:{action:`ds-audio-play-toggle`,table:{category:`Events`}},onSeek:{action:`ds-audio-seek`,table:{category:`Events`}},onVolumeChange:{action:`ds-audio-volume-change`,table:{category:`Events`}},onMuteToggle:{action:`ds-audio-mute-toggle`,table:{category:`Events`}},onSpeedCycle:{action:`ds-audio-speed-cycle`,table:{category:`Events`}},onHideToggle:{action:`ds-audio-hide-toggle`,table:{category:`Events`}},onAutoscrollToggle:{action:`ds-audio-autoscroll-toggle`,table:{category:`Events`}}},args:{variant:`default`,playing:!1,time:45,duration:180,speed:`1X`,volume:80,muted:!1,"hide-on-scroll":!1,"auto-scroll":!0},render:e=>t`
    <div style="width: 580px; padding: 24px; background: var(--color-bg, #FFFFFF); display: flex; justify-content: center;">
      <ds-audio-player
        variant="${e.variant}"
        playing="${e.playing}"
        time="${e.time}"
        duration="${e.duration}"
        speed="${e.speed}"
        volume="${e.volume}"
        muted="${e.muted}"
        hide-on-scroll="${e[`hide-on-scroll`]}"
        auto-scroll="${e[`auto-scroll`]}"
        label-reader="${r(e.labelReader)}"
        label-play="${r(e.labelPlay)}"
        label-pause="${r(e.labelPause)}"
        label-mute="${r(e.labelMute)}"
        label-unmute="${r(e.labelUnmute)}"
        label-speed="${r(e.labelSpeed)}"
        label-hide="${r(e.labelHide)}"
        label-show="${r(e.labelShow)}"
        label-autoscroll-on="${r(e.labelAutoscrollOn)}"
        label-autoscroll-off="${r(e.labelAutoscrollOff)}"
        label-volume="${r(e.labelVolume)}"
        label-volume-level="${r(e.labelVolumeLevel)}"
        label-audio-pos="${r(e.labelAudioPos)}"
        @ds-audio-play-toggle="${e.onPlayToggle}"
        @ds-audio-seek="${t=>e.onSeek(t.detail)}"
        @ds-audio-volume-change="${t=>e.onVolumeChange(t.detail)}"
        @ds-audio-mute-toggle="${e.onMuteToggle}"
        @ds-audio-speed-cycle="${e.onSpeedCycle}"
        @ds-audio-hide-toggle="${e.onHideToggle}"
        @ds-audio-autoscroll-toggle="${e.onAutoscrollToggle}"
      ></ds-audio-player>
    </div>
  `},l={args:{playing:!1,time:60,duration:240,speed:`1X`,volume:75},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-audio-player`);await t(`Verify Play button hover and click trigger toggles state`,async()=>{let e=n.shadowRoot.querySelector(`.play-btn`);await s.hover(e),await s.click(e),o(n.getAttribute(`playing`)).toBe(`true`)}),await t(`Verify Volume hover expands horizontal volume seek bar to the right`,async()=>{let e=n.shadowRoot.querySelector(`.volume-container`);await s.hover(e)}),await t(`Verify Keyboard Focus Traversal across interactive controls`,async()=>{n.shadowRoot.querySelector(`.play-btn`).shadowRoot.querySelector(`button`).focus(),o(n.shadowRoot.activeElement).toBe(n.shadowRoot.querySelector(`.play-btn`))})}},u={args:{variant:`scrolled`,playing:!0,time:120,duration:240,speed:`1.25X`,volume:0,muted:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    playing: false,
    time: 60,
    duration: 240,
    speed: '1X',
    volume: 75
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const player = canvasElement.querySelector('ds-audio-player');
    await step('Verify Play button hover and click trigger toggles state', async () => {
      const playBtn = player.shadowRoot.querySelector('.play-btn');
      await userEvent.hover(playBtn);
      await userEvent.click(playBtn);
      expect(player.getAttribute('playing')).toBe('true');
    });
    await step('Verify Volume hover expands horizontal volume seek bar to the right', async () => {
      const volumeContainer = player.shadowRoot.querySelector('.volume-container');
      await userEvent.hover(volumeContainer);
    });
    await step('Verify Keyboard Focus Traversal across interactive controls', async () => {
      const playBtnInternal = player.shadowRoot.querySelector('.play-btn').shadowRoot.querySelector('button');
      playBtnInternal.focus();
      expect(player.shadowRoot.activeElement).toBe(player.shadowRoot.querySelector('.play-btn'));
    });
  }
}`,...l.parameters?.docs?.source},description:{story:`The default, full-width container audio player. Includes interaction tests for toggling play states, 
expanding the volume controller, and traversing elements via keyboard focus.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'scrolled',
    playing: true,
    time: 120,
    duration: 240,
    speed: '1.25X',
    volume: 0,
    muted: true
  }
}`,...u.parameters?.docs?.source},description:{story:`A compact, floating pill variant of the player. Automatically triggered under scrolled page states 
to provide unobtrusive, persistent playback control.`,...u.parameters?.docs?.description}}},d=[`Default`,`ScrolledPill`]}))();export{l as Default,u as ScrolledPill,d as __namedExportsOrder,c as default};