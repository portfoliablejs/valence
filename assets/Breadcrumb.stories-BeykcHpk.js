import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{t as r}from"./Breadcrumb-CSqM7-VQ.js";var i,a,o,s,c,l,u,d,f=e((()=>{n(),r(),{expect:i,fn:a}=__STORYBOOK_MODULE_TEST__,{useArgs:o}=__STORYBOOK_MODULE_PREVIEW_API__,s={title:`Molecules/Breadcrumb [v1.0.0]`,component:`ds-breadcrumb`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Stateless, controlled top navigation breadcrumb molecule. Emits custom DOM events for SPA navigation and supports item-level contextual menus.`}}},argTypes:{items:{name:`items`,control:!1,description:`Array of breadcrumb items defining the active stack.`,table:{category:`Core`}},menuItems:{name:`menuItems`,control:!1,description:`Global fallback array of contextual menu items.`,table:{category:`Core`}},itemCount:{name:`itemCount`,control:!1,description:`Fallback item count indicator when items is omitted.`,table:{category:`Core`}},currentLabel:{name:`currentLabel`,control:!1,description:`Fallback label for the final crumb when items is omitted.`,table:{category:`Core`}},visible:{name:`visible`,control:`boolean`,description:`Toggles breadcrumb visibility state.`,table:{category:`Core`,defaultValue:{summary:`true`}}},onHomeClick:{action:`ds-breadcrumb-home`,description:`Event emitted when the root home button is clicked.`,table:{category:`Events`}},onReturnClick:{action:`ds-breadcrumb-return`,description:`Event emitted when the arrow-left return button is clicked.`,table:{category:`Events`}},onSelect:{action:`ds-breadcrumb-select`,description:`Event emitted when a crumb or contextual menu item is selected.`,table:{category:`Events`}},"--ds-breadcrumb-gap":{name:`--ds-breadcrumb-gap`,control:`text`,description:`Overrides horizontal spacing gap between crumb items.`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-breadcrumb-separator-color":{name:`--ds-breadcrumb-separator-color`,control:`color`,description:`Overrides separator icon color.`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-breadcrumb-item-opacity":{name:`--ds-breadcrumb-item-opacity`,control:`text`,description:`Overrides non-hovered crumb item opacity.`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-breadcrumb-menu-width":{name:`--ds-breadcrumb-menu-width`,control:`text`,description:`Overrides width of contextual menu popover.`,table:{category:`SUB-ATOMIC PROPS`}}},args:{visible:!0,onHomeClick:a(),onReturnClick:a(),onSelect:a()},render:e=>{let[{items:n},r]=o();return t`
      <div style="padding: 150px 50px; background: var(--color-bg, #ffffff); display: flex; justify-content: center;">
        <ds-breadcrumb 
          style=${[e[`--ds-breadcrumb-gap`]?`--ds-breadcrumb-gap: ${e[`--ds-breadcrumb-gap`]};`:``,e[`--ds-breadcrumb-separator-color`]?`--ds-breadcrumb-separator-color: ${e[`--ds-breadcrumb-separator-color`]};`:``,e[`--ds-breadcrumb-item-opacity`]?`--ds-breadcrumb-item-opacity: ${e[`--ds-breadcrumb-item-opacity`]};`:``,e[`--ds-breadcrumb-menu-width`]?`--ds-breadcrumb-menu-width: ${e[`--ds-breadcrumb-menu-width`]};`:``].filter(Boolean).join(` `)}
          .items=${n||e.items}
          .menuItems=${e.menuItems}
          visible=${e.visible?`true`:`false`}
          @ds-breadcrumb-home=${t=>{e.onHomeClick(t.detail);let i=n||e.items;Array.isArray(i)&&i.length>0&&r({items:[i[0]]})}}
          @ds-breadcrumb-return=${t=>{e.onReturnClick(t.detail);let i=n||e.items;Array.isArray(i)&&i.length>1&&r({items:i.slice(0,-1)})}}
          @ds-breadcrumb-select=${t=>{e.onSelect(t.detail);let i=n||e.items;if(Array.isArray(i)&&t.detail.index!==void 0){let{index:n,id:a,label:o}=t.detail,s=i.slice(0,n+1).map((t,r)=>r===n?{...t,id:a,label:o,menuItems:t.menuItems||e.menuItems}:t);r({items:s})}}}>
        </ds-breadcrumb>
      </div>
    `}},c={args:{items:[{id:`home`,label:`Home`,hasMenu:!1},{id:`category`,label:`Category`,hasMenu:!0},{id:`current`,label:`Item Title`,hasMenu:!0}],menuItems:[{id:`opt-1`,label:`Option 1`},{id:`opt-2`,label:`Option 2`},{id:`opt-3`,label:`Option 3`}]}},l={args:{items:[{id:`home`,label:`Home`},{id:`about`,label:`About`,hasMenu:!1}]}},u={args:{items:[{id:`home`,label:`Home`},{id:`case-a`,label:`Case Study A`,hasMenu:!0,menuItems:[{id:`case-a`,label:`Case Study A`},{id:`case-b`,label:`Case Study B`},{id:`case-c`,label:`Case Study C`}]}]}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Home',
      hasMenu: false
    }, {
      id: 'category',
      label: 'Category',
      hasMenu: true
    }, {
      id: 'current',
      label: 'Item Title',
      hasMenu: true
    }],
    menuItems: [{
      id: 'opt-1',
      label: 'Option 1'
    }, {
      id: 'opt-2',
      label: 'Option 2'
    }, {
      id: 'opt-3',
      label: 'Option 3'
    }]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Home'
    }, {
      id: 'about',
      label: 'About',
      hasMenu: false
    }]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Home'
    }, {
      id: 'case-a',
      label: 'Case Study A',
      hasMenu: true,
      menuItems: [{
        id: 'case-a',
        label: 'Case Study A'
      }, {
        id: 'case-b',
        label: 'Case Study B'
      }, {
        id: 'case-c',
        label: 'Case Study C'
      }]
    }]
  }
}`,...u.parameters?.docs?.source}}},d=[`Default3Items`,`TwoItemsWithoutMenu`,`TwoItemsWithMenu`]}));f();export{c as Default3Items,u as TwoItemsWithMenu,l as TwoItemsWithoutMenu,d as __namedExportsOrder,s as default,f as t};