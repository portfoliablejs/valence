import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{t as r}from"./AudioPlayer--K8mrROn.js";var i,a,o,s,c,l;e((()=>{n(),r(),{expect:i,userEvent:a}=__STORYBOOK_MODULE_TEST__,o={title:`Molecules/Audio Player`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"An interactive audio player component (`ds-audio-player`) that manages audio playback states, \nspeed variations, volume controls, and viewport auto-scrolling synchronization."}}},argTypes:{variant:{control:`select`,options:[`default`,`scrolled`],description:`Player variant format (default container or shrunk floating pill)`,table:{category:`Variants`}},playing:{control:`boolean`,description:`Playback state toggle`,table:{category:`Core State`}},time:{control:{type:`range`,min:0,max:300,step:1},description:`Current playback position in seconds`,table:{category:`Core State`}},duration:{control:{type:`number`,min:1},description:`Total track duration in seconds`,table:{category:`Core State`}},speed:{control:{type:`select`},options:[`0.75X`,`1X`,`1.25X`,`1.5X`,`1.75X`,`2X`],description:`Playback speed indicator`,table:{category:`Core State`}},volume:{control:{type:`range`,min:0,max:100,step:1},description:`Volume level percentage`,table:{category:`Core State`}},muted:{control:`boolean`,description:`Mute state toggle`,table:{category:`Core State`}},"hide-on-scroll":{control:`boolean`,description:`Hide player during page scroll state`,table:{category:`Behavior`}},"auto-scroll":{control:`boolean`,description:`Auto-scroll article text with playback`,table:{category:`Behavior`}},onPlayToggle:{action:`ds-audio-play-toggle`,table:{category:`Events`}},onSeek:{action:`ds-audio-seek`,table:{category:`Events`}},onVolumeChange:{action:`ds-audio-volume-change`,table:{category:`Events`}},onMuteToggle:{action:`ds-audio-mute-toggle`,table:{category:`Events`}},onSpeedCycle:{action:`ds-audio-speed-cycle`,table:{category:`Events`}},onHideToggle:{action:`ds-audio-hide-toggle`,table:{category:`Events`}},onAutoscrollToggle:{action:`ds-audio-autoscroll-toggle`,table:{category:`Events`}}},args:{variant:`default`,playing:!1,time:45,duration:180,speed:`1X`,volume:80,muted:!1,"hide-on-scroll":!1,"auto-scroll":!0},render:e=>t`
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
        @ds-audio-play-toggle="${e.onPlayToggle}"
        @ds-audio-seek="${t=>e.onSeek(t.detail)}"
        @ds-audio-volume-change="${t=>e.onVolumeChange(t.detail)}"
        @ds-audio-mute-toggle="${e.onMuteToggle}"
        @ds-audio-speed-cycle="${e.onSpeedCycle}"
        @ds-audio-hide-toggle="${e.onHideToggle}"
        @ds-audio-autoscroll-toggle="${e.onAutoscrollToggle}"
      ></ds-audio-player>
    </div>
  `},s={args:{playing:!1,time:60,duration:240,speed:`1X`,volume:75},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-audio-player`);await t(`Verify Play button hover and click trigger toggles state`,async()=>{let e=n.shadowRoot.querySelector(`.play-btn`);await a.hover(e),await a.click(e),i(n.getAttribute(`playing`)).toBe(`true`)}),await t(`Verify Volume hover expands horizontal volume seek bar to the right`,async()=>{let e=n.shadowRoot.querySelector(`.volume-container`);await a.hover(e)}),await t(`Verify Keyboard Focus Traversal across interactive controls`,async()=>{n.shadowRoot.querySelector(`.play-btn`).shadowRoot.querySelector(`button`).focus(),i(n.shadowRoot.activeElement).toBe(n.shadowRoot.querySelector(`.play-btn`))})}},c={args:{variant:`scrolled`,playing:!0,time:120,duration:240,speed:`1.25X`,volume:0,muted:!0}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:`The default, full-width container audio player. Includes interaction tests for toggling play states, 
expanding the volume controller, and traversing elements via keyboard focus.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'scrolled',
    playing: true,
    time: 120,
    duration: 240,
    speed: '1.25X',
    volume: 0,
    muted: true
  }
}`,...c.parameters?.docs?.source},description:{story:`A compact, floating pill variant of the player. Automatically triggered under scrolled page states 
to provide unobtrusive, persistent playback control.`,...c.parameters?.docs?.description}}},l=[`Default`,`ScrolledPill`]}))();export{s as Default,c as ScrolledPill,l as __namedExportsOrder,o as default};