(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4960],{65582:function(e,n,t){Promise.resolve().then(t.bind(t,9661))},8974:function(e,n,t){"use strict";t.d(n,{Y:function(){return u}});var o=t(57437),i=t(63832),l=t(18856),a=t(46387),r=t(80868),s=t(90096);function c(e){let{link:n,activeLast:t,disabled:a}=e,r={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},c=(0,o.jsxs)(o.Fragment,{children:[n.icon&&(0,o.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg, & img":{width:20,height:20}},children:n.icon}),n.name]});return n.href?(0,o.jsx)(l.Z,{component:s.r,href:n.href,sx:r,children:c}):(0,o.jsxs)(i.Z,{sx:r,children:[" ",c," "]})}function u(e){let{links:n,action:t,heading:s,moreLink:u,activeLast:p,slotProps:h,sx:x,...f}=e,m=n[n.length-1].name,g=(0,o.jsx)(a.Z,{variant:"h4",sx:{mb:2,...null==h?void 0:h.heading},children:s}),v=(0,o.jsx)(r.Z,{separator:(0,o.jsx)(d,{}),sx:null==h?void 0:h.breadcrumbs,...f,children:n.map((e,n)=>{var t;return(0,o.jsx)(c,{link:e,activeLast:p,disabled:e.name===m},null!==(t=e.name)&&void 0!==t?t:n)})}),j=(0,o.jsxs)(i.Z,{sx:{flexShrink:0,...null==h?void 0:h.action},children:[" ",t," "]}),b=(0,o.jsx)(i.Z,{component:"ul",children:null==u?void 0:u.map(e=>(0,o.jsx)(i.Z,{component:"li",sx:{display:"flex"},children:(0,o.jsx)(l.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:null==h?void 0:h.moreLink,children:e})},e))});return(0,o.jsxs)(i.Z,{gap:2,display:"flex",flexDirection:"column",sx:x,...f,children:[(0,o.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[(0,o.jsxs)(i.Z,{sx:{flexGrow:1},children:[s&&g,!!n.length&&v]}),t&&j]}),!!u&&b]})}function d(){return(0,o.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},15577:function(e,n,t){"use strict";t.d(n,{G:function(){return o}});let o={root:"mnl__icon__root",flag:"mnl__icon__flag"}},95271:function(e,n,t){"use strict";t.r(n),t.d(n,{Iconify:function(){return c}});var o=t(57437),i=t(2265),l=t(59646),a=t(63832),r=t(53610),s=t(15577);let c=(0,i.forwardRef)((e,n)=>{let{className:t,width:i=20,sx:c,...u}=e,d={width:i,height:i,flexShrink:0,display:"inline-flex"},p=(0,o.jsx)(a.Z,{component:"span",className:s.G.root.concat(t?" ".concat(t):""),sx:{...d,...c}});return(0,o.jsx)(r.Z,{fallback:p,children:(0,o.jsx)(a.Z,{ssr:!0,ref:n,component:l.JO,className:s.G.root.concat(t?" ".concat(t):""),sx:{...d,...c},...u})})});(0,l.Qb)("local")},27250:function(e,n,t){"use strict";t.d(n,{U6:function(){return s},Ir:function(){return i.Iconify},GW:function(){return o.G}});var o=t(15577),i=t(95271),l=t(57437),a=t(2265),r=t(63832);let s=(0,a.forwardRef)((e,n)=>{let{code:t,className:i,sx:a,...s}=e;return t?(0,l.jsx)(r.Z,{ref:n,component:"span",className:o.G.flag.concat(i?" ".concat(i):""),sx:{width:26,height:20,flexShrink:0,overflow:"hidden",borderRadius:"5px",alignItems:"center",display:"inline-flex",justifyContent:"center",bgcolor:"background.neutral",...a},...s,children:(0,l.jsx)(r.Z,{component:"img",loading:"lazy",alt:t,src:"https://purecatamphetamine.github.io/country-flag-icons/3x2/".concat(null==t?void 0:t.toUpperCase(),".svg"),sx:{width:1,height:1,maxWidth:"unset",objectFit:"cover"}})}):null})},23857:function(e,n,t){"use strict";t.d(n,{k:function(){return i}});var o=t(2265);function i(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],[n,t]=(0,o.useState)(e),i=(0,o.useCallback)(()=>{t(!0)},[]),l=(0,o.useCallback)(()=>{t(!1)},[]),a=(0,o.useCallback)(()=>{t(e=>!e)},[]);return(0,o.useMemo)(()=>({value:n,onTrue:i,onFalse:l,onToggle:a,setValue:t}),[n,i,l,a,t])}},41473:function(e,n,t){"use strict";t.d(n,{Y:function(){return i}});var o=t(2265);function i(e){let[n,t]=(0,o.useState)(e),i=(0,o.useCallback)((e,n)=>{t(n)},[]);return(0,o.useMemo)(()=>({value:n,setValue:t,onChange:i}),[i,n])}},69230:function(e,n,t){"use strict";t.d(n,{G:function(){return s},H:function(){return c}});var o=t(57437),i=t(63832),l=t(63582),a=t(98489),r=t(86281);function s(e){let{title:n,sx:t,children:a,...s}=e;return(0,o.jsxs)(l.Z,{sx:{px:3,py:6,gap:2,width:1,flexWrap:"wrap",borderRadius:1.5,position:"relative",flexDirection:"row",alignItems:"center",justifyContent:"center",bgcolor:e=>(0,r.jr)(e.vars.palette.grey["500Channel"],.04),boxShadow:e=>"0 0 0 1px ".concat((0,r.jr)(e.vars.palette.grey["500Channel"],.16)),...t},...s,children:[n&&(0,o.jsx)(i.Z,{component:"span",sx:{px:1,top:0,ml:2.5,left:0,py:.25,borderRadius:2,position:"absolute",color:"text.primary",bgcolor:"common.white",transform:"translateY(-50%)",fontSize:e=>e.typography.caption.fontSize,fontWeight:e=>e.typography.fontWeightSemiBold,border:e=>"solid 1px ".concat((0,r.jr)(e.vars.palette.grey["500Channel"],.24)),[r.s4.dark]:{bgcolor:"background.neutral"}},children:n}),a]})}function c(e){let{children:n,sx:t,...i}=e;return(0,o.jsx)(a.Z,{sx:{mt:10,mb:15,gap:5,display:"flex",flexDirection:"column",...t},...i,children:n})}},46235:function(e,n,t){"use strict";t.d(n,{P:function(){return c}});var o=t(57437),i=t(63832),l=t(98489),a=t(31691),r=t(37183),s=t(86281);function c(e){let{children:n,sx:t,...c}=e,u=(0,a.Z)();return(0,o.jsxs)(i.Z,{sx:{py:5,minHeight:240,display:"flex",position:"relative",alignItems:"center",...t},...c,children:[(0,o.jsx)(l.Z,{children:n}),(0,o.jsx)(i.Z,{sx:{...(0,s.v3)({color:"0deg, ".concat((0,s.jr)(u.vars.palette.background.defaultChannel,.9),", ").concat((0,s.jr)(u.vars.palette.background.defaultChannel,.9)),imgUrl:"".concat(r.CONFIG.assetsDir,"/assets/background/background-3-blur.webp")}),top:0,left:0,width:1,height:1,zIndex:-1,position:"absolute",transform:"scaleX(-1)"}})]})}},9661:function(e,n,t){"use strict";t.r(n),t.d(n,{AnimateView:function(){return ee}});var o=t(57437),i=t(10207),l=t(63832),a=t(35286),r=t(96997),s=t(41473),c=t(8974),u=t(2265),d=t(31691),p=t(95576),h=t(72407),x=t(86281),f=t(27250),m=t(68295),g=t(20799);function v(){let e=(0,d.Z)(),n=e.vars.palette.primary.light,t=e.vars.palette.primary.main,i=e.vars.palette.primary.dark;return(0,o.jsxs)(l.Z,{component:g.m.svg,viewBox:"0 0 512 512",sx:{width:240,height:240,strokeWidth:4,stroke:t},children:[(0,o.jsxs)("defs",{children:[(0,o.jsxs)("linearGradient",{x1:"100%",y1:"9.946%",x2:"50%",y2:"50%",id:"a",children:[(0,o.jsx)("stop",{stopColor:i,offset:"0%"}),(0,o.jsx)("stop",{stopColor:t,offset:"100%"})]}),(0,o.jsxs)("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"b",children:[(0,o.jsx)("stop",{stopColor:n,offset:"0%"}),(0,o.jsx)("stop",{stopColor:t,offset:"100%"})]}),(0,o.jsxs)("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"c",children:[(0,o.jsx)("stop",{stopColor:n,offset:"0%"}),(0,o.jsx)("stop",{stopColor:t,offset:"100%"})]})]}),(0,o.jsxs)("g",{fill:"none",fillRule:"nonzero",children:[(0,o.jsx)(g.m.path,{...m.lj,d:"M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z",fill:"url(#a)"}),(0,o.jsx)(g.m.path,{...m.lj,d:"M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994",fill:"url(#b)"}),(0,o.jsx)(g.m.path,{...m.lj,d:"M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48",fill:"url(#c)"})]})]})}var j=t(86291);function b(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j.Z,{component:g.m.button,whileTap:"tap",whileHover:"hover",variants:(0,m.U6)(1.1,.95),color:"primary",size:"small",children:(0,o.jsx)(f.Ir,{icon:"mingcute:add-line",width:24})}),(0,o.jsx)(j.Z,{component:g.m.button,whileTap:"tap",whileHover:"hover",variants:(0,m.U6)(),color:"primary",size:"medium",children:(0,o.jsx)(f.Ir,{icon:"mingcute:add-line",width:24})}),(0,o.jsx)(j.Z,{component:g.m.button,whileTap:"tap",whileHover:"hover",variants:(0,m.U6)(1.08,.99),color:"primary",children:(0,o.jsx)(f.Ir,{icon:"mingcute:add-line",width:24})}),(0,o.jsx)(p.Z,{component:g.m.button,whileTap:"tap",whileHover:"hover",variants:(0,m.U6)(1.1,.95),color:"primary",size:"small",children:(0,o.jsx)(f.Ir,{icon:"mingcute:add-line",width:24})}),(0,o.jsx)(p.Z,{component:g.m.button,whileTap:"tap",whileHover:"hover",variants:(0,m.U6)(),color:"primary",children:(0,o.jsx)(f.Ir,{icon:"mingcute:add-line",width:24})}),(0,o.jsx)(p.Z,{component:g.m.button,whileTap:"tap",whileHover:"hover",variants:(0,m.U6)(1.08,.99),color:"primary",size:"large",children:(0,o.jsx)(f.Ir,{icon:"mingcute:add-line",width:24})})]})}function I(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.Wo,{component:"h6",variant:"h1",to:500,unit:"+"}),(0,o.jsx)(m.Wo,{component:"h6",variant:"h1",from:200,to:500.14,toFixed:2,unit:"k"})]})}var y=t(69230),w=t(31762),Z=t(63582);function k(e){let{onRefresh:n,...t}=e;return(0,o.jsx)(Z.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",...t,children:(0,o.jsx)(p.Z,{onClick:n,children:(0,o.jsx)(f.Ir,{icon:"eva:refresh-fill"})})})}var U=t(46387);function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"slideInUp",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;return({slideInUp:(0,m.pH)({distance:n}).inUp,slideInDown:(0,m.pH)({distance:n}).inDown,slideInLeft:(0,m.pH)({distance:n}).inLeft,slideInRight:(0,m.pH)({distance:n}).inRight,slideOutUp:(0,m.pH)({distance:n}).outUp,slideOutDown:(0,m.pH)({distance:n}).outDown,slideOutLeft:(0,m.pH)({distance:n}).outLeft,slideOutRight:(0,m.pH)({distance:n}).outRight,fadeIn:(0,m.EU)().in,fadeInUp:(0,m.EU)({distance:n}).inUp,fadeInDown:(0,m.EU)({distance:n}).inDown,fadeInLeft:(0,m.EU)({distance:n}).inLeft,fadeInRight:(0,m.EU)({distance:n}).inRight,fadeOut:(0,m.EU)({distance:n}).out,fadeOutUp:(0,m.EU)({distance:n}).outUp,fadeOutDown:(0,m.EU)({distance:n}).outDown,fadeOutLeft:(0,m.EU)({distance:n}).outLeft,fadeOutRight:(0,m.EU)({distance:n}).outRight,zoomIn:(0,m.BL)({distance:80}).in,zoomInUp:(0,m.BL)({distance:80}).inUp,zoomInDown:(0,m.BL)({distance:80}).inDown,zoomInLeft:(0,m.BL)({distance:240}).inLeft,zoomInRight:(0,m.BL)({distance:240}).inRight,zoomOut:(0,m.BL)().out,zoomOutLeft:(0,m.BL)().outLeft,zoomOutRight:(0,m.BL)().outRight,zoomOutUp:(0,m.BL)().outUp,zoomOutDown:(0,m.BL)().outDown,bounceIn:(0,m.Wp)().in,bounceInUp:(0,m.Wp)().inUp,bounceInDown:(0,m.Wp)().inDown,bounceInLeft:(0,m.Wp)().inLeft,bounceInRight:(0,m.Wp)().inRight,bounceOut:(0,m.Wp)().out,bounceOutUp:(0,m.Wp)().outUp,bounceOutDown:(0,m.Wp)().outDown,bounceOutLeft:(0,m.Wp)().outLeft,bounceOutRight:(0,m.Wp)().outRight,flipInX:(0,m.HN)().inX,flipInY:(0,m.HN)().inY,flipOutX:(0,m.HN)().outX,flipOutY:(0,m.HN)().outY,scaleInX:(0,m.Jt)().inX,scaleInY:(0,m.Jt)().inY,scaleOutX:(0,m.Jt)().outX,scaleOutY:(0,m.Jt)().outY,rotateIn:(0,m.j$)().in,rotateOut:(0,m.j$)().out,kenburnsTop:(0,m.Q4)().top,kenburnsBottom:(0,m.Q4)().bottom,kenburnsLeft:(0,m.Q4)().left,kenburnsRight:(0,m.Q4)().right,panTop:(0,m.UZ)().top,panBottom:(0,m.UZ)().bottom,panLeft:(0,m.UZ)().left,panRight:(0,m.UZ)().right,color2x:(0,m.R0)(),color3x:(0,m.R0)({colors:["#19dcea","#b22cff","#ea2222"]}),color4x:(0,m.R0)({colors:["#19dcea","#b22cff","#ea2222","#f5be10"]}),color5x:(0,m.R0)({colors:["#19dcea","#b22cff","#ea2222","#f5be10","#3bd80d"]})})[e]}function R(e){let{selectVariant:n,sx:t,...i}=e,a=(0,u.useRef)(null);return(0,o.jsx)(Z.Z,{ref:a,component:g.m.div,variants:(0,m.Ew)(),sx:{py:5,gap:3,borderRadius:2,flex:"1 1 auto",overflowX:"auto",bgcolor:"background.neutral",...t},...i,children:(0,o.jsx)(o.Fragment,{children:[...Array(40)].map((e,t)=>(0,o.jsx)(l.Z,{component:m.DG,variants:C(n),viewport:{root:a,once:!0,amount:.1},sx:{py:4,width:1,mx:"auto",maxWidth:480,flexShrink:0,borderRadius:1,textAlign:"center",bgcolor:"background.paper",boxShadow:e=>e.customShadows.z8},children:(0,o.jsxs)(U.Z,{variant:"body2",children:["Item ",t+1]})},t))})})}var O=t(74303),L=t(26225),z=t(72608);function D(e){let{variantKey:n,selectVariant:t,onChangeVariant:i,sx:a,...r}=e;return(0,o.jsx)(Z.Z,{sx:{p:2.5,width:320,overflowX:"auto",borderLeft:e=>"solid 1px ".concat(e.vars.palette.divider),...a},...r,children:(0,o.jsx)(L.Z,{value:t,onChange:i,children:n.map(e=>(0,o.jsxs)(l.Z,{sx:{my:1.5},children:[(0,o.jsx)(U.Z,{variant:"overline",sx:{px:1,mb:1,display:"block"},children:e.type}),e.values.map(e=>(0,o.jsx)(z.Z,{value:e,label:e,control:(0,o.jsx)(O.Z,{sx:{display:"none"}}),sx:{px:1,py:.5,mx:0,my:.25,width:"100%",borderRadius:.75,color:"text.secondary",...t===e&&{color:"warning.contrastText"},...t===e&&{bgcolor:"warning.main"}}},e))]},e.type))})})}let G=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}];var S=t(23857),H=t(48614),T=t(19902),W=t(39155),Y=t(35791),X=t(79507),B=t(77468),V=t(22643);function E(e){let{open:n,onOpen:t,onClose:i,selectVariant:l,sx:a,...r}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Z.Z,{sx:{borderRadius:2,flex:"1 1 auto",overflow:"hidden",alignItems:"center",justifyContent:"center",bgcolor:"background.neutral",...a},...r,children:(0,o.jsx)(W.Z,{size:"large",variant:"contained",onClick:t,children:"Click me!"})}),(0,o.jsx)(H.M,{children:n&&(0,o.jsxs)(Y.Z,{fullWidth:!0,maxWidth:"xs",open:n,onClose:i,PaperComponent:e=>(0,o.jsx)(g.m.div,{...C(l,320),children:(0,o.jsx)(T.Z,{...e,children:e.children})}),children:[(0,o.jsx)(X.Z,{id:"alert-dialog-title",children:"Use Google's location service?"}),(0,o.jsx)(B.Z,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),(0,o.jsxs)(V.Z,{children:[(0,o.jsx)(W.Z,{onClick:i,children:"Disagree"}),(0,o.jsx)(W.Z,{variant:"contained",onClick:i,autoFocus:!0,children:"Agree"})]})]})})]})}let _=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}];var F=t(85147);function M(e){let{isText:n,isMulti:t,onChangeText:i,onChangeMulti:a,onRefresh:r,...s}=e;return(0,o.jsxs)(Z.Z,{direction:"row",alignItems:"center",...s,children:[(0,o.jsx)(z.Z,{control:(0,o.jsx)(F.Z,{checked:n,onChange:i}),label:"Text object"}),(0,o.jsx)(l.Z,{sx:{flexGrow:1}}),!n&&(0,o.jsx)(z.Z,{control:(0,o.jsx)(F.Z,{checked:t,onChange:a}),label:"Multiitem"}),(0,o.jsx)(p.Z,{onClick:r,children:(0,o.jsx)(f.Ir,{icon:"eva:refresh-fill"})})]})}let N=[h.QJ.image.cover(2),h.QJ.image.cover(3),h.QJ.image.cover(4),h.QJ.image.cover(5)];function J(e){let{isText:n,isMulti:t,selectVariant:i,sx:a,...r}=e,s=t?N:N.slice(0,1),c=(0,o.jsx)(m.cF,{component:"h1",variant:"h1",text:"Minimals",variants:C(i,400),sx:{overflow:"hidden"}}),u=(0,o.jsx)(m.NM,{sx:{gap:3,width:1,display:"flex",alignItems:"center",flexDirection:"column"},children:s.map((e,n)=>(0,o.jsx)(l.Z,{component:g.m.img,src:e,variants:C(i,800),sx:{width:480,borderRadius:1,objectFit:"cover",height:t?80:320,boxShadow:e=>e.customShadows.z8}},n))});return(0,o.jsx)(Z.Z,{sx:{borderRadius:2,flex:"1 1 auto",overflow:"hidden",alignItems:"center",justifyContent:"center",bgcolor:"background.neutral",...a},...r,children:n?c:u})}let Q=[{type:"slide in",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"slide out",values:["slideOutUp","slideOutDown","slideOutLeft","slideOutRight"]},{type:"fade in",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"fade out",values:["fadeOut","fadeOutUp","fadeOutDown","fadeOutLeft","fadeOutRight"]},{type:"zoom in",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"zoom out",values:["zoomOut","zoomOutUp","zoomOutDown","zoomOutLeft","zoomOutRight"]},{type:"bounce in",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"bounce out",values:["bounceOut","bounceOutUp","bounceOutDown","bounceOutLeft","bounceOutRight"]},{type:"flip in",values:["flipInX","flipInY"]},{type:"flip out",values:["flipOutX","flipOutY"]},{type:"scale in",values:["scaleInX","scaleInY"]},{type:"scale out",values:["scaleOutX","scaleOutY"]},{type:"rotate in",values:["rotateIn"]},{type:"rotate out",values:["rotateOut"]}];function A(e){let{onRefresh:n,...t}=e;return(0,o.jsx)(Z.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",...t,children:(0,o.jsx)(p.Z,{onClick:n,children:(0,o.jsx)(f.Ir,{icon:"eva:refresh-fill"})})})}function P(e){let{selectVariant:n,sx:t,...i}=e,a=n.includes("kenburns");return(0,o.jsx)(Z.Z,{sx:{flex:"1 1 auto",overflow:"hidden",borderRadius:2,...t},...i,children:a?(0,o.jsx)(l.Z,{component:g.m.img,src:h.QJ.image.cover(7),...C(n),sx:{width:1,height:1,objectFit:"cover"}}):(0,o.jsx)(l.Z,{component:g.m.div,...C(n),sx:{height:1,width:1}})})}let $=[{type:"kenburns",values:["kenburnsTop","kenburnsBottom","kenburnsLeft","kenburnsRight"]},{type:"pan",values:["panTop","panBottom","panLeft","panRight"]},{type:"color change",values:["color2x","color3x","color4x","color5x"]}];var K=t(46235);let q=[{value:"inview",label:"In View",component:(0,o.jsx)(function(){let e=(0,S.k)(),n=(0,S.k)(),[t,i]=(0,u.useState)(0),[l,a]=(0,u.useState)("slideInUp"),r=(0,u.useCallback)(()=>{i(t+1)},[t]),s=(0,u.useCallback)(e=>{i(t+1),a(e.target.value)},[t]);return(0,o.jsxs)(w.Z,{sx:{height:640,display:"flex"},children:[(0,o.jsxs)(Z.Z,{spacing:2.5,sx:{p:2.5,display:"flex",flex:"1 1 auto"},children:[(0,o.jsx)(M,{isText:e.value,isMulti:n.value,onChangeText:e.onToggle,onChangeMulti:n.onToggle,onRefresh:r}),(0,o.jsx)(J,{isText:e.value,isMulti:n.value,selectVariant:l},t)]}),(0,o.jsx)(D,{variantKey:Q,selectVariant:l,onChangeVariant:s})]})},{})},{value:"scroll",label:"Scroll",component:(0,o.jsx)(function(){let[e,n]=(0,u.useState)(0),[t,i]=(0,u.useState)("slideInUp"),l=(0,u.useCallback)(t=>{n(e+1),i(t.target.value)},[e]);return(0,o.jsxs)(w.Z,{sx:{height:640,display:"flex"},children:[(0,o.jsxs)(Z.Z,{spacing:2.5,sx:{p:2.5,display:"flex",flex:"1 1 auto"},children:[(0,o.jsx)(k,{onRefresh:()=>n(e+1)}),(0,o.jsx)(R,{selectVariant:t},e)]}),(0,o.jsx)(D,{variantKey:G,selectVariant:t,onChangeVariant:l})]})},{})},{value:"dialog",label:"Dialog",component:(0,o.jsx)(function(){let e=(0,S.k)(),[n,t]=(0,u.useState)("slideInUp"),i=(0,u.useCallback)(e=>{t(e.target.value)},[]);return(0,o.jsxs)(w.Z,{sx:{height:640,display:"flex"},children:[(0,o.jsx)(Z.Z,{spacing:2.5,sx:{p:2.5,display:"flex",flex:"1 1 auto"},children:(0,o.jsx)(E,{open:e.value,onOpen:e.onTrue,onClose:e.onFalse,selectVariant:n})}),(0,o.jsx)(D,{variantKey:_,selectVariant:n,onChangeVariant:i})]})},{})},{value:"background",label:"Background",component:(0,o.jsx)(function(){let[e,n]=(0,u.useState)(0),[t,i]=(0,u.useState)("kenburnsTop");return(0,o.jsxs)(w.Z,{sx:{height:640,display:"flex"},children:[(0,o.jsxs)(Z.Z,{spacing:2.5,sx:{p:2.5,display:"flex",flex:"1 1 auto"},children:[(0,o.jsx)(A,{onRefresh:()=>n(e+1)}),(0,o.jsx)(P,{selectVariant:t},e)]}),(0,o.jsx)(D,{variantKey:$,selectVariant:t,onChangeVariant:t=>{n(e+1),i(t.target.value)}})]})},{})},{value:"other",label:"Other",component:(0,o.jsx)(function(){let e=(0,d.Z)(),[n,t]=(0,u.useState)(0);return(0,o.jsxs)(l.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[(0,o.jsx)(y.G,{title:"Button Click",sx:{gap:3},children:(0,o.jsx)(b,{})}),(0,o.jsxs)(y.G,{title:"Path",children:[(0,o.jsx)(p.Z,{onClick:()=>t(n+1),sx:{position:"absolute",right:16,top:16},children:(0,o.jsx)(f.Ir,{icon:"eva:refresh-fill"})}),(0,o.jsx)(v,{},n)]}),(0,o.jsxs)(y.G,{title:"Path",sx:{flexDirection:"column"},children:[(0,o.jsx)(p.Z,{onClick:()=>t(n+1),sx:{position:"absolute",right:16,top:16},children:(0,o.jsx)(f.Ir,{icon:"eva:refresh-fill"})}),(0,o.jsx)(I,{},n)]}),(0,o.jsxs)(y.G,{title:"Logo",sx:{gap:5},children:[(0,o.jsx)(m.eA,{}),(0,o.jsx)(m.Xf,{})]}),(0,o.jsx)(y.G,{title:"Avatar",sx:{gap:5},children:(0,o.jsx)(m.b$,{width:120,slotProps:{avatar:{alt:"My avatar",src:h.QJ.image.avatar(24)},overlay:{border:2,spacing:2}}})}),(0,o.jsxs)(y.G,{title:"Border",sx:{gap:5},children:[(0,o.jsx)(m.$V,{animate:{disableDoubleline:!0},sx:{width:160,height:160}}),(0,o.jsx)(m.$V,{animate:{width:"4px",color:e.vars.palette.primary.dark,outline:"135deg, ".concat((0,x.jr)(e.vars.palette.warning.mainChannel,.24),", ").concat((0,x.jr)(e.vars.palette.primary.mainChannel,.24))},sx:{width:160,height:160}})]})]})},{})}];function ee(){let e=(0,s.Y)("inview");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(K.P,{children:(0,o.jsx)(c.Y,{heading:"Animate",links:[{name:"Components",href:r.H.components},{name:"Animate"}],moreLink:["https://www.framer.com/api/motion"]})}),(0,o.jsxs)(y.H,{children:[(0,o.jsx)(a.Z,{value:e.value,onChange:e.onChange,children:q.map(e=>(0,o.jsx)(i.Z,{value:e.value,label:e.label},e.value))}),q.map(n=>n.value===e.value&&(0,o.jsx)(l.Z,{children:n.component},n.value))]})]})}}},function(e){e.O(0,[8331,9271,7648,1021,8489,4591,334,7e3,6112,5147,2800,5318,8770,1739,272,6281,2407,8295,2971,2117,1744],function(){return e(e.s=65582)}),_N_E=e.O()}]);