import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{t as r}from"./if-defined-2H52cT6K.js";import{t as i}from"./Breadcrumb-BBuerVUF.js";var a,o,s,c,l,u,d,f,p,m=e((()=>{n(),r(),i(),{expect:a,fn:o,userEvent:s}=__STORYBOOK_MODULE_TEST__,{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,l={title:`Molecules/Breadcrumb`,component:`ds-breadcrumb`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Stateless, controlled top navigation breadcrumb molecule. Emits custom DOM events for SPA navigation and supports item-level contextual menus.`}}},argTypes:{visible:{name:`visible`,control:`boolean`,description:`Toggles breadcrumb visibility state.`,table:{category:`Core Controls`,defaultValue:{summary:`true`}}},onHomeClick:{action:`ds-breadcrumb-home`,description:`Event emitted when the root home button is clicked.`,table:{category:`Events`}},onReturnClick:{action:`ds-breadcrumb-return`,description:`Event emitted when the arrow-left return button is clicked.`,table:{category:`Events`}},onSelect:{action:`ds-breadcrumb-select`,description:`Event emitted when a crumb or contextual menu item is selected.`,table:{category:`Events`}}},args:{visible:!0,onHomeClick:o(),onReturnClick:o(),onSelect:o()},render:e=>{let[{items:n},r]=c();return t`
      <div style="padding: 150px 50px; background: var(--color-bg, #ffffff); display: flex; justify-content: center;">
        <ds-breadcrumb 
          .items=${n||e.items}
          .menuItems=${e.menuItems}
          visible=${e.visible?`true`:`false`}
          @ds-breadcrumb-home=${t=>{e.onHomeClick(t.detail);let i=n||e.items;Array.isArray(i)&&i.length>0&&r({items:[i[0]]})}}
          @ds-breadcrumb-return=${t=>{e.onReturnClick(t.detail);let i=n||e.items;Array.isArray(i)&&i.length>1&&r({items:i.slice(0,-1)})}}
          @ds-breadcrumb-select=${t=>{e.onSelect(t.detail);let i=n||e.items;if(Array.isArray(i)&&t.detail.index!==void 0){let e=i.slice(0,t.detail.index+1);r({items:e})}}}>
        </ds-breadcrumb>
      </div>
    `}},u={args:{items:[{id:`home`,label:`Home`,hasMenu:!1},{id:`category`,label:`Category`,hasMenu:!0},{id:`current`,label:`Item Title`,hasMenu:!1}],menuItems:[{id:`opt-1`,label:`Option 1`},{id:`opt-2`,label:`Option 2`},{id:`opt-3`,label:`Option 3`}]}},d={args:{items:[{id:`home`,label:`Home`},{id:`about`,label:`About`,hasMenu:!1}]}},f={args:{items:[{id:`home`,label:`Home`},{id:`case-a`,label:`Case Study A`,hasMenu:!0,menuItems:[{id:`case-a`,label:`Case Study A`},{id:`case-b`,label:`Case Study B`},{id:`case-c`,label:`Case Study C`}]}]}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      hasMenu: false
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
}`,...u.parameters?.docs?.source},description:{story:`Default story showing a 3-item breadcrumb stack with a middle contextual menu`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`2-Item Breadcrumb with NO contextual menu (e.g. Home - About)`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`2-Item Breadcrumb WITH contextual menu (e.g. Home - Case Study A)`,...f.parameters?.docs?.description}}},p=[`Default3Items`,`TwoItemsWithoutMenu`,`TwoItemsWithMenu`]}));m();export{u as Default3Items,f as TwoItemsWithMenu,d as TwoItemsWithoutMenu,p as __namedExportsOrder,l as default,m as t};