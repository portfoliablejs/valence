import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{r,t as i}from"./if-defined-2H52cT6K.js";import{t as a}from"./Pill-CXQ3gjz_.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{n(),i(),a(),{expect:o}=__STORYBOOK_MODULE_TEST__,s={title:`Atoms/Pill`,component:`ds-pill`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`
A compact informational tag used for metadata, categorization, or real-time device telemetry data.
When configured with \`variant="telemetry"\`, it can automatically read and update directly from browser APIs.
        `}}},decorators:[e=>t`
      <div 
        class="canvas-buffer" 
        style="
          display: flex; 
          justify-content: center; 
          align-items: center; 
          padding: 24px;
        "
      >
        ${e()}
      </div>
    `],argTypes:{variant:{name:`variant`,description:`Determines visual rendering and thematic style configuration.`,control:{type:`select`},options:[`default`,`telemetry`],table:{category:`Component: Core`,defaultValue:{summary:`default`}}},label:{name:`label`,description:`Explicit text string. When passed, it overrides slotted light DOM and auto-detected telemetry.`,control:`text`,table:{category:`Component: Core`}},showPulse:{name:`showPulse`,description:`Controls visibility of the animated status dot indicator.`,control:`boolean`,table:{category:`Component: Core`,defaultValue:{summary:`false`}}},telemetryType:{name:`telemetry-type`,description:`Selects the dynamic Web API browser metric when no explicit label is supplied in telemetry mode.`,control:{type:`select`},options:[`rtt`,`network-type`,`downlink`,`online-status`,`fps`,`viewport`,`memory`,`battery`],if:{arg:`variant`,eq:`telemetry`},table:{category:`Component: Core`,defaultValue:{summary:`rtt`}}},ariaLabel:{name:`ariaLabel`,description:`Accessibility label applied directly to the component for screen readers.`,control:`text`,table:{category:`Component: Core`}},pulseColor:{name:`pulseColor`,description:`Overrides the status indicator dot color.`,control:`color`,if:{arg:`showPulse`},table:{category:`Component: Core`,defaultValue:{summary:`var(--color-success)`}}},radius:{name:`radius`,description:"Sub-atomic modifier overriding corner bounding geometry variables (`--custom-radius`).",control:`text`,table:{category:`Sub-Atomic Overrides`,defaultValue:{summary:`var(--radius-pill)`}}},backgroundColor:{name:`backgroundColor`,description:"Sub-atomic modifier overriding default backdrop shading (`--custom-bg`).",control:`color`,table:{category:`Sub-Atomic Overrides`}},textColor:{name:`textColor`,description:"Sub-atomic modifier overriding default text color (`--custom-color`).",control:`color`,table:{category:`Sub-Atomic Overrides`}}},render:e=>{let n=[e.radius?`--custom-radius: ${e.radius};`:``,e.backgroundColor?`--custom-bg: ${e.backgroundColor};`:``,e.textColor?`--custom-color: ${e.textColor};`:``].join(` `).trim();return t`
      <ds-pill
        variant=${e.variant||`default`}
        label=${r(e.label&&e.label.trim()!==``?e.label:void 0)}
        ?show-pulse=${e.showPulse}
        telemetry-type=${r(e.telemetryType)}
        pulse-color=${r(e.pulseColor)}
        aria-label=${r(e.ariaLabel)}
        style=${r(n||void 0)}>
      </ds-pill>
    `}},c={parameters:{docs:{description:{story:`Renders the standard tag badge variant using a static label, hidden pulse dot, and proper ARIA accessibility roles.`}}},args:{variant:`default`,label:`Case Study`,showPulse:!1,ariaLabel:`Case Study Category Tag`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-pill`);await t(`Verify role="status" and aria-label are present on host element`,async()=>{o(n.getAttribute(`role`)).toBe(`status`),o(n.getAttribute(`aria-label`)).toBe(`Case Study Category Tag`)}),await t(`Verify label text renders properly inside shadow root`,async()=>{let e=n.shadowRoot.querySelector(`.pill-label`);o(e.textContent).toBe(`Case Study`)}),await t(`Verify pulse dot is hidden in default mode`,async()=>{let e=n.shadowRoot.querySelector(`.pulse-dot`);o(window.getComputedStyle(e).display).toBe(`none`)})}},l={parameters:{docs:{description:{story:`Displays the primary interactive telemetry variant with dynamic Web API auto-detection and an animated pulse indicator enabled.`}}},args:{variant:`telemetry`,telemetryType:`rtt`,showPulse:!0},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-pill`);await t(`Verify host element reflects telemetry variant and role`,async()=>{o(n.getAttribute(`variant`)).toBe(`telemetry`),o(n.getAttribute(`role`)).toBe(`status`)}),await t(`Verify live telemetry text updates dynamically`,async()=>{let e=n.shadowRoot.querySelector(`.pill-label`);o(e.textContent.length).toBeGreaterThan(0)}),await t(`Verify pulse dot element is displayed`,async()=>{let e=n.shadowRoot.querySelector(`.pulse-dot`);o(window.getComputedStyle(e).display).not.toBe(`none`)})}},u={parameters:{docs:{description:{story:`Demonstrates telemetry styling with a custom static string override, custom pulse dot color, and specific screen reader accessibility labels.`}}},args:{variant:`telemetry`,label:`Latency: 28ms`,showPulse:!0,ariaLabel:`System Latency Metric: 28 milliseconds`,pulseColor:`#34c759`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-pill`);await t(`Verify pulse dot element is visible`,async()=>{let e=n.shadowRoot.querySelector(`.pulse-dot`);o(window.getComputedStyle(e).display).not.toBe(`none`)}),await t(`Verify static label text renders in telemetry mode`,async()=>{let e=n.shadowRoot.querySelector(`.pill-label`);o(e.textContent).toBe(`Latency: 28ms`)})}},d={parameters:{docs:{description:{story:`Auto-detects and displays estimated round-trip network latency (RTT) using the browser Network Information API stream.`}}},args:{variant:`telemetry`,telemetryType:`rtt`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-pill`);await t(`Verify RTT latency metric formats and displays correctly`,async()=>{let e=n.shadowRoot.querySelector(`.pill-label`);o(e.textContent).toMatch(/Latency|Status/)})}},f={parameters:{docs:{description:{story:`Auto-detects active effective connection speed type (e.g., 4G, 3G, slow-2G) from the client environment.`}}},args:{variant:`telemetry`,telemetryType:`network-type`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-pill`);await t(`Verify network effective type displays`,async()=>{let e=n.shadowRoot.querySelector(`.pill-label`);o(e.textContent).toMatch(/Network:/)})}},p={parameters:{docs:{description:{story:`Auto-detects downstream network connection bandwidth metrics formatted in megabits per second (Mbps).`}}},args:{variant:`telemetry`,telemetryType:`downlink`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-pill`);await t(`Verify download speed metric displays Mbps value`,async()=>{let e=n.shadowRoot.querySelector(`.pill-label`);o(e.textContent).toMatch(/Speed:/)})}},m={parameters:{docs:{description:{story:`Tracks real-time online/offline network connectivity state directly via browser window event listeners.`}}},args:{variant:`telemetry`,telemetryType:`online-status`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-pill`);await t(`Verify online/offline status displays correctly`,async()=>{let e=n.shadowRoot.querySelector(`.pill-label`);o(e.textContent).toMatch(/Status: (ONLINE|OFFLINE)/)})}},h={parameters:{docs:{description:{story:`Calculates live rendering frame rates (FPS) using requestAnimationFrame loop sampling.`}}},args:{variant:`telemetry`,telemetryType:`fps`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-pill`);await t(`Verify FPS render counter initializes`,async()=>{let e=n.shadowRoot.querySelector(`.pill-label`);o(e.textContent).toMatch(/Render:/)})}},g={parameters:{docs:{description:{story:`Reads current viewport dimension metrics (width × height) alongside Device Pixel Ratio (DPR).`}}},args:{variant:`telemetry`,telemetryType:`viewport`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-pill`);await t(`Verify viewport dimensions and DPR display correctly`,async()=>{let e=n.shadowRoot.querySelector(`.pill-label`);o(e.textContent).toMatch(/\d+ × \d+ @ \d+x/)})}},_={parameters:{docs:{description:{story:`Retrieves current JavaScript performance heap memory allocation using the Performance Memory API.`}}},args:{variant:`telemetry`,telemetryType:`memory`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-pill`);await t(`Verify RAM allocation displays correctly`,async()=>{let e=n.shadowRoot.querySelector(`.pill-label`);o(e.textContent).toMatch(/RAM: \d+ MB/)})}},v={parameters:{docs:{description:{story:`Queries device power state and charge percentage using the standard Navigator Battery Status API.`}}},args:{variant:`telemetry`,telemetryType:`battery`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-pill`);await t(`Verify battery level or status displays correctly`,async()=>{let e=n.shadowRoot.querySelector(`.pill-label`);o(e.textContent).toMatch(/Battery:|Charging/)})}},y={parameters:{docs:{description:{story:`Displays a comprehensive grid layout running all 8 telemetry auto-detection streams concurrently.`}}},render:()=>t`
    <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; max-width: 800px;">
      <ds-pill variant="telemetry" telemetry-type="rtt"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="network-type"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="downlink"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="online-status"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="fps"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="viewport"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="memory"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="battery"></ds-pill>
    </div>
  `,play:async({canvasElement:e,step:t})=>{let n=e.querySelectorAll(`ds-pill`);await t(`Verify all 8 telemetry pills render in the gallery suite`,async()=>{o(n.length).toBe(8)}),await t(`Verify each pill in the suite has updated its text content`,async()=>{n.forEach(e=>{let t=e.shadowRoot.querySelector(`.pill-label`);o(t.textContent.length).toBeGreaterThan(0)})})}},b={parameters:{docs:{description:{story:"Illustrates sub-atomic design token overrides via inline CSS variables (`--custom-bg`, `--custom-color`, `--custom-radius`)."}}},args:{variant:`default`,label:`Custom Theme`,radius:`4px`,backgroundColor:`#5856D6`,textColor:`#FFFFFF`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-pill`);await t(`Verify inline custom CSS tokens exist on host element`,async()=>{let e=n.getAttribute(`style`);o(e).toContain(`--custom-bg: #5856D6`),o(e).toContain(`--custom-color: #FFFFFF`),o(e).toContain(`--custom-radius: 4px`)})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Renders the standard tag badge variant using a static label, hidden pulse dot, and proper ARIA accessibility roles.'
      }
    }
  },
  args: {
    variant: 'default',
    label: 'Case Study',
    showPulse: false,
    ariaLabel: 'Case Study Category Tag'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-pill');
    await step('Verify role="status" and aria-label are present on host element', async () => {
      expect(component.getAttribute('role')).toBe('status');
      expect(component.getAttribute('aria-label')).toBe('Case Study Category Tag');
    });
    await step('Verify label text renders properly inside shadow root', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toBe('Case Study');
    });
    await step('Verify pulse dot is hidden in default mode', async () => {
      const pulseEl = component.shadowRoot.querySelector('.pulse-dot');
      expect(window.getComputedStyle(pulseEl).display).toBe('none');
    });
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Displays the primary interactive telemetry variant with dynamic Web API auto-detection and an animated pulse indicator enabled.'
      }
    }
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'rtt',
    showPulse: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-pill');
    await step('Verify host element reflects telemetry variant and role', async () => {
      expect(component.getAttribute('variant')).toBe('telemetry');
      expect(component.getAttribute('role')).toBe('status');
    });
    await step('Verify live telemetry text updates dynamically', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent.length).toBeGreaterThan(0);
    });
    await step('Verify pulse dot element is displayed', async () => {
      const pulseEl = component.shadowRoot.querySelector('.pulse-dot');
      expect(window.getComputedStyle(pulseEl).display).not.toBe('none');
    });
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates telemetry styling with a custom static string override, custom pulse dot color, and specific screen reader accessibility labels.'
      }
    }
  },
  args: {
    variant: 'telemetry',
    label: 'Latency: 28ms',
    showPulse: true,
    ariaLabel: 'System Latency Metric: 28 milliseconds',
    pulseColor: '#34c759'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-pill');
    await step('Verify pulse dot element is visible', async () => {
      const pulseEl = component.shadowRoot.querySelector('.pulse-dot');
      expect(window.getComputedStyle(pulseEl).display).not.toBe('none');
    });
    await step('Verify static label text renders in telemetry mode', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toBe('Latency: 28ms');
    });
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Auto-detects and displays estimated round-trip network latency (RTT) using the browser Network Information API stream.'
      }
    }
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'rtt'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-pill');
    await step('Verify RTT latency metric formats and displays correctly', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/Latency|Status/);
    });
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Auto-detects active effective connection speed type (e.g., 4G, 3G, slow-2G) from the client environment.'
      }
    }
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'network-type'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-pill');
    await step('Verify network effective type displays', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/Network:/);
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Auto-detects downstream network connection bandwidth metrics formatted in megabits per second (Mbps).'
      }
    }
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'downlink'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-pill');
    await step('Verify download speed metric displays Mbps value', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/Speed:/);
    });
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Tracks real-time online/offline network connectivity state directly via browser window event listeners.'
      }
    }
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'online-status'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-pill');
    await step('Verify online/offline status displays correctly', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/Status: (ONLINE|OFFLINE)/);
    });
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Calculates live rendering frame rates (FPS) using requestAnimationFrame loop sampling.'
      }
    }
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'fps'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-pill');
    await step('Verify FPS render counter initializes', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/Render:/);
    });
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Reads current viewport dimension metrics (width × height) alongside Device Pixel Ratio (DPR).'
      }
    }
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'viewport'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-pill');
    await step('Verify viewport dimensions and DPR display correctly', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/\\d+ × \\d+ @ \\d+x/);
    });
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Retrieves current JavaScript performance heap memory allocation using the Performance Memory API.'
      }
    }
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'memory'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-pill');
    await step('Verify RAM allocation displays correctly', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/RAM: \\d+ MB/);
    });
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Queries device power state and charge percentage using the standard Navigator Battery Status API.'
      }
    }
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'battery'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-pill');
    await step('Verify battery level or status displays correctly', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/Battery:|Charging/);
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Displays a comprehensive grid layout running all 8 telemetry auto-detection streams concurrently.'
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; max-width: 800px;">
      <ds-pill variant="telemetry" telemetry-type="rtt"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="network-type"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="downlink"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="online-status"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="fps"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="viewport"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="memory"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="battery"></ds-pill>
    </div>
  \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const pills = canvasElement.querySelectorAll('ds-pill');
    await step('Verify all 8 telemetry pills render in the gallery suite', async () => {
      expect(pills.length).toBe(8);
    });
    await step('Verify each pill in the suite has updated its text content', async () => {
      pills.forEach(pill => {
        const labelEl = pill.shadowRoot.querySelector('.pill-label');
        expect(labelEl.textContent.length).toBeGreaterThan(0);
      });
    });
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Illustrates sub-atomic design token overrides via inline CSS variables (\`--custom-bg\`, \`--custom-color\`, \`--custom-radius\`).'
      }
    }
  },
  args: {
    variant: 'default',
    label: 'Custom Theme',
    radius: '4px',
    backgroundColor: '#5856D6',
    textColor: '#FFFFFF'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-pill');
    await step('Verify inline custom CSS tokens exist on host element', async () => {
      const style = component.getAttribute('style');
      expect(style).toContain('--custom-bg: #5856D6');
      expect(style).toContain('--custom-color: #FFFFFF');
      expect(style).toContain('--custom-radius: 4px');
    });
  }
}`,...b.parameters?.docs?.source}}},x=[`DefaultBaseline`,`InteractiveTelemetryMain`,`StaticTelemetry`,`AutoDetectedRTT`,`AutoDetectedNetworkType`,`AutoDetectedDownlink`,`AutoDetectedOnlineStatus`,`AutoDetectedFPS`,`AutoDetectedViewport`,`AutoDetectedMemory`,`AutoDetectedBattery`,`FullTelemetrySuite`,`SubAtomicOverrides`]}))();export{v as AutoDetectedBattery,p as AutoDetectedDownlink,h as AutoDetectedFPS,_ as AutoDetectedMemory,f as AutoDetectedNetworkType,m as AutoDetectedOnlineStatus,d as AutoDetectedRTT,g as AutoDetectedViewport,c as DefaultBaseline,y as FullTelemetrySuite,l as InteractiveTelemetryMain,u as StaticTelemetry,b as SubAtomicOverrides,x as __namedExportsOrder,s as default};