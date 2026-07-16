import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,r as n}from"./chunk-Y2CYZVJY-B0s4_0xd.js";import{Bt as r,H as i,L as a,t as o,xt as s,zt as c}from"./src-BXQWNmW3.js";import{U as l,W as u,a as d,c as f,f as p,j as m,q as h,v as g,w as _,x as v,y}from"./chunk-WYO6CB5R-Cuhxwjpp.js";import{d as b,i as x,m as S}from"./chunk-ICXQ74PX-BgdvH7iT.js";import{g as C,h as w}from"./iframe-zK6jYJ-S.js";import{n as T,r as E}from"./mermaid-parser.core-BkkNek5i.js";import{n as D,t as O}from"./chunk-JWPE2WC7-BQM6_7kq.js";var k,A,j,M,N,P,F,I,L,R,z;e((()=>{O(),w(),b(),m(),c(),n(),T(),o(),k=p.pie,A={sections:new Map,showData:!1,config:k},j=A.sections,M=A.showData,N=structuredClone(k),P={getConfig:t(()=>structuredClone(N),`getConfig`),clear:t(()=>{j=new Map,M=A.showData,d()},`clear`),setDiagramTitle:h,getDiagramTitle:_,setAccTitle:u,getAccTitle:y,setAccDescription:l,getAccDescription:g,addSection:t(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);j.has(e)||(j.set(e,t),r.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:t(()=>j,`getSections`),setShowData:t(e=>{M=e},`setShowData`),getShowData:t(()=>M,`getShowData`)},F=t((e,t)=>{D(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),I={parse:t(async e=>{let t=await E(`pie`,e);r.debug(t),F(t,P)},`parse`)},L=t(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),R=t(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return a().value(e=>e.value).sort(null)(n)},`createPieArcs`),z={parser:I,db:P,renderer:{draw:t((e,t,n,a)=>{r.debug(`rendering pie chart
`+e);let o=a.db,c=v(),l=x(o.getConfig(),c.pie),u=C(t),d=u.append(`g`);d.attr(`transform`,`translate(225,225)`);let{themeVariables:p}=c,[m]=S(p.pieOuterStrokeWidth);m??=2;let h=l.legendPosition,g=l.textPosition,_=l.donutHole>0&&l.donutHole<=.9?l.donutHole:0,y=i().innerRadius(_*185).outerRadius(185),b=i().innerRadius(185*g).outerRadius(185*g),w=d.append(`g`);w.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+m/2).attr(`class`,`pieOuterCircle`);let T=o.getSections(),E=R(T),D=[p.pie1,p.pie2,p.pie3,p.pie4,p.pie5,p.pie6,p.pie7,p.pie8,p.pie9,p.pie10,p.pie11,p.pie12],O=0;T.forEach(e=>{O+=e});let k=E.filter(e=>(e.data.value/O*100).toFixed(0)!==`0`),A=s(D).domain([...T.keys()]);w.selectAll(`mySlices`).data(k).enter().append(`path`).attr(`d`,y).attr(`fill`,e=>A(e.data.label)).attr(`class`,e=>{let t=`pieCircle`;return l.highlightSlice===`hover`?t+=` highlightedOnHover`:l.highlightSlice===e.data.label&&(t+=` highlighted`),t}),w.selectAll(`mySlices`).data(k).enter().append(`text`).text(e=>(e.data.value/O*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+b.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let j=d.append(`text`).text(o.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`),M=[...T.entries()].map(([e,t])=>({label:e,value:t})),N=d.selectAll(`.legend`).data(M).enter().append(`g`).attr(`class`,`legend`);N.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>A(e.label)).style(`stroke`,e=>A(e.label)),N.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>o.getShowData()?`${e.label} [${e.value}]`:e.label);let P=Math.max(...N.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),F=450,I=490,L=M.length*22;switch(h){case`center`:N.attr(`transform`,(e,t)=>{let n=22*M.length/2,r=-P/2-22,i=t*22-n;return`translate(`+r+`,`+i+`)`});break;case`top`:F+=L,N.attr(`transform`,(e,t)=>`translate(${-P/2-22}, ${t*22-185})`),w.attr(`transform`,()=>`translate(0, ${L+22})`);break;case`bottom`:F+=L,N.attr(`transform`,(e,t)=>{let n=-P/2-22,r=t*22- -207;return`translate(`+n+`,`+r+`)`});break;case`left`:I+=22+P,N.attr(`transform`,(e,t)=>{let n=22*M.length/2;return`translate(-207,`+(t*22-n)+`)`}),w.attr(`transform`,()=>`translate(${P+18+4}, 0)`);break;default:I+=22+P,N.attr(`transform`,(e,t)=>{let n=22*M.length/2;return`translate(216,`+(t*22-n)+`)`});break}let z=j.node()?.getBoundingClientRect().width??0,B=450/2-z/2,V=450/2+z/2,H=Math.min(0,B),U=Math.max(I,V)-H;u.attr(`viewBox`,`${H} 0 ${U} ${F}`),f(u,F,U,l.useMaxWidth)},`draw`)},styles:L}}))();export{z as diagram};