(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9559],{23382:function(e,n,t){Promise.resolve().then(t.bind(t,23958))},8974:function(e,n,t){"use strict";t.d(n,{Y:function(){return d}});var r=t(57437),i=t(63832),o=t(18856),a=t(46387),l=t(80868),c=t(90096);function s(e){let{link:n,activeLast:t,disabled:a}=e,l={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},s=(0,r.jsxs)(r.Fragment,{children:[n.icon&&(0,r.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg, & img":{width:20,height:20}},children:n.icon}),n.name]});return n.href?(0,r.jsx)(o.Z,{component:c.r,href:n.href,sx:l,children:s}):(0,r.jsxs)(i.Z,{sx:l,children:[" ",s," "]})}function d(e){let{links:n,action:t,heading:c,moreLink:d,activeLast:x,slotProps:h,sx:m,...p}=e,f=n[n.length-1].name,g=(0,r.jsx)(a.Z,{variant:"h4",sx:{mb:2,...null==h?void 0:h.heading},children:c}),j=(0,r.jsx)(l.Z,{separator:(0,r.jsx)(u,{}),sx:null==h?void 0:h.breadcrumbs,...p,children:n.map((e,n)=>{var t;return(0,r.jsx)(s,{link:e,activeLast:x,disabled:e.name===f},null!==(t=e.name)&&void 0!==t?t:n)})}),v=(0,r.jsxs)(i.Z,{sx:{flexShrink:0,...null==h?void 0:h.action},children:[" ",t," "]}),b=(0,r.jsx)(i.Z,{component:"ul",children:null==d?void 0:d.map(e=>(0,r.jsx)(i.Z,{component:"li",sx:{display:"flex"},children:(0,r.jsx)(o.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:null==h?void 0:h.moreLink,children:e})},e))});return(0,r.jsxs)(i.Z,{gap:2,display:"flex",flexDirection:"column",sx:m,...p,children:[(0,r.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[(0,r.jsxs)(i.Z,{sx:{flexGrow:1},children:[c&&g,!!n.length&&j]}),t&&v]}),!!d&&b]})}function u(){return(0,r.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},15577:function(e,n,t){"use strict";t.d(n,{G:function(){return r}});let r={root:"mnl__icon__root",flag:"mnl__icon__flag"}},95271:function(e,n,t){"use strict";t.r(n),t.d(n,{Iconify:function(){return s}});var r=t(57437),i=t(2265),o=t(59646),a=t(63832),l=t(53610),c=t(15577);let s=(0,i.forwardRef)((e,n)=>{let{className:t,width:i=20,sx:s,...d}=e,u={width:i,height:i,flexShrink:0,display:"inline-flex"},x=(0,r.jsx)(a.Z,{component:"span",className:c.G.root.concat(t?" ".concat(t):""),sx:{...u,...s}});return(0,r.jsx)(l.Z,{fallback:x,children:(0,r.jsx)(a.Z,{ssr:!0,ref:n,component:o.JO,className:c.G.root.concat(t?" ".concat(t):""),sx:{...u,...s},...d})})});(0,o.Qb)("local")},27250:function(e,n,t){"use strict";t.d(n,{U6:function(){return c},Ir:function(){return i.Iconify},GW:function(){return r.G}});var r=t(15577),i=t(95271),o=t(57437),a=t(2265),l=t(63832);let c=(0,a.forwardRef)((e,n)=>{let{code:t,className:i,sx:a,...c}=e;return t?(0,o.jsx)(l.Z,{ref:n,component:"span",className:r.G.flag.concat(i?" ".concat(i):""),sx:{width:26,height:20,flexShrink:0,overflow:"hidden",borderRadius:"5px",alignItems:"center",display:"inline-flex",justifyContent:"center",bgcolor:"background.neutral",...a},...c,children:(0,o.jsx)(l.Z,{component:"img",loading:"lazy",alt:t,src:"https://purecatamphetamine.github.io/country-flag-icons/3x2/".concat(null==t?void 0:t.toUpperCase(),".svg"),sx:{width:1,height:1,maxWidth:"unset",objectFit:"cover"}})}):null})},64296:function(e,n,t){"use strict";t.d(n,{O:function(){return o}});var r=t(2265);let i=r.useLayoutEffect;function o(e,n,t,o){let a=(0,r.useRef)(n);i(()=>{a.current=n},[n]),(0,r.useEffect)(()=>{let n=(null==t?void 0:t.current)||window;if(!(n&&n.addEventListener))return;let r=e=>a.current(e);return n.addEventListener(e,r,o),()=>{n.removeEventListener(e,r)}},[e,t,o])}},90096:function(e,n,t){"use strict";t.d(n,{r:function(){return r.default}});var r=t(27648)},69230:function(e,n,t){"use strict";t.d(n,{G:function(){return c},H:function(){return s}});var r=t(57437),i=t(63832),o=t(63582),a=t(98489),l=t(86281);function c(e){let{title:n,sx:t,children:a,...c}=e;return(0,r.jsxs)(o.Z,{sx:{px:3,py:6,gap:2,width:1,flexWrap:"wrap",borderRadius:1.5,position:"relative",flexDirection:"row",alignItems:"center",justifyContent:"center",bgcolor:e=>(0,l.jr)(e.vars.palette.grey["500Channel"],.04),boxShadow:e=>"0 0 0 1px ".concat((0,l.jr)(e.vars.palette.grey["500Channel"],.16)),...t},...c,children:[n&&(0,r.jsx)(i.Z,{component:"span",sx:{px:1,top:0,ml:2.5,left:0,py:.25,borderRadius:2,position:"absolute",color:"text.primary",bgcolor:"common.white",transform:"translateY(-50%)",fontSize:e=>e.typography.caption.fontSize,fontWeight:e=>e.typography.fontWeightSemiBold,border:e=>"solid 1px ".concat((0,l.jr)(e.vars.palette.grey["500Channel"],.24)),[l.s4.dark]:{bgcolor:"background.neutral"}},children:n}),a]})}function s(e){let{children:n,sx:t,...i}=e;return(0,r.jsx)(a.Z,{sx:{mt:10,mb:15,gap:5,display:"flex",flexDirection:"column",...t},...i,children:n})}},46235:function(e,n,t){"use strict";t.d(n,{P:function(){return s}});var r=t(57437),i=t(63832),o=t(98489),a=t(31691),l=t(37183),c=t(86281);function s(e){let{children:n,sx:t,...s}=e,d=(0,a.Z)();return(0,r.jsxs)(i.Z,{sx:{py:5,minHeight:240,display:"flex",position:"relative",alignItems:"center",...t},...s,children:[(0,r.jsx)(o.Z,{children:n}),(0,r.jsx)(i.Z,{sx:{...(0,c.v3)({color:"0deg, ".concat((0,c.jr)(d.vars.palette.background.defaultChannel,.9),", ").concat((0,c.jr)(d.vars.palette.background.defaultChannel,.9)),imgUrl:"".concat(l.CONFIG.assetsDir,"/assets/background/background-3-blur.webp")}),top:0,left:0,width:1,height:1,zIndex:-1,position:"absolute",transform:"scaleX(-1)"}})]})}},68696:function(e,n,t){"use strict";t.d(n,{$:function(){return h}});var r=t(57437),i=t(2265),o=t(63832),a=t(18856),l=t(31762),c=t(63582),s=t(98489),d=t(97260),u=t(36137),x=t(64296);function h(e){let{sx:n,data:t,slotProps:h,offsetValue:m=.3,queryClassName:p="scroll__to__view",...f}=e,[g,j]=(0,i.useState)(0),v=(0,i.useCallback)(()=>{let e=window.innerHeight*m,n=window.scrollY+e,t=document.querySelectorAll(".".concat(p)),r=null;t.forEach((e,t)=>{let i=e.offsetTop,o=i+e.clientHeight;n>=i&&n<o&&(r=t)}),j(r)},[m,p]);(0,x.O)("scroll",v);let b=(0,i.useCallback)(e=>{let n=document.querySelectorAll(".".concat(p));if(n&&n.length>e){let t=n[e].offsetTop-160;window.scrollTo({top:t,behavior:"smooth"})}},[p]),Z=(0,r.jsx)(c.Z,{component:"nav",sx:{top:80,width:240,flexShrink:0,position:"sticky",display:{xs:"none",md:"flex"},...null==h?void 0:h.nav},children:(0,r.jsx)(o.Z,{component:"ul",sx:{gap:1.5,display:"flex",flexDirection:"column"},children:t.map((e,n)=>(0,r.jsx)(o.Z,{component:"li",sx:{display:"flex"},children:(0,r.jsxs)(a.Z,{underline:"none",onClick:()=>b(n),sx:{cursor:"pointer",typography:"body2",color:"text.disabled",...g===n&&{color:"text.primary",fontWeight:"fontWeightSemiBold"}},children:[n+1," - ",e.name]})},e.name))})}),y=(0,r.jsx)(c.Z,{component:"section",spacing:5,flex:"1 1 auto",sx:{minWidth:0,borderRadius:2,p:{xs:3,md:5},bgcolor:"background.neutral",...null==h?void 0:h.section},children:t.map(e=>(0,r.jsxs)(l.Z,{className:p,children:[(0,r.jsx)(d.Z,{title:e.name}),(0,r.jsx)(u.Z,{children:e.component})]},e.name))});return(0,r.jsx)(s.Z,{...null==h?void 0:h.container,children:(0,r.jsxs)(c.Z,{spacing:5,direction:"row",alignItems:"flex-start",sx:{pt:10,pb:15,...n},...f,children:[Z,y]})})}},23958:function(e,n,t){"use strict";t.r(n),t.d(n,{AvatarView:function(){return Z}});var r=t(57437),i=t(59708),o=t(42409),a=t(71969),l=t(31691),c=t(93114),s=t(56490),d=t(96997),u=t(72407),x=t(27250),h=t(8974),m=t(46235),p=t(69230),f=t(68696);let g=["default","primary","secondary","info","success","warning","error"],j=[24,32,40,56],v=["circular","rounded","square"],b=["online","alway","busy","offline"];function Z(){let e=(0,l.Z)(),n=[{name:"Image",component:(0,r.jsx)(p.G,{children:[1,2,3,4,5].map((e,n)=>(0,r.jsx)(o.Z,{alt:u.QJ.fullName(n+1),src:u.QJ.image.avatar(n+1)},n))})},{name:"Letter",component:(0,r.jsx)(p.G,{children:g.map((e,n)=>(0,r.jsx)(a.Z,{title:e,children:(0,r.jsx)(o.Z,{alt:u.QJ.fullName(n+3),children:u.QJ.fullName(n+3).charAt(0).toUpperCase()})},e))})},{name:"Icon",component:(0,r.jsx)(p.G,{children:g.map(e=>(0,r.jsx)(o.Z,{color:e,children:(0,r.jsx)(x.Ir,{icon:"eva:folder-add-outline",width:24})},e))})},{name:"Variant",component:(0,r.jsx)(p.G,{children:v.map(e=>(0,r.jsx)(o.Z,{variant:e,sx:{bgcolor:"primary.main",color:"primary.contrastText"},children:(0,r.jsx)(x.Ir,{icon:"eva:folder-add-outline",width:24})},e))})},{name:"Grouped",component:(0,r.jsxs)(p.G,{flexDirection:"column",alignItems:"center",children:[j.map(e=>(0,r.jsx)(a.Z,{title:e,children:(0,r.jsx)(c.Z,{sx:{["& .".concat(s.Z.avatar)]:{width:e,height:e}},children:g.map((e,n)=>(0,r.jsx)(o.Z,{alt:u.QJ.fullAddress(n+1),src:u.QJ.image.avatar(n+1)},e))},e)},e)),(0,r.jsx)(a.Z,{title:"compact",children:(0,r.jsx)(i.Z,{variant:"online",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,r.jsx)(c.Z,{variant:"compact",sx:{width:48,height:48},children:g.slice(0,2).map((e,n)=>(0,r.jsx)(o.Z,{alt:u.QJ.fullName(n+1),src:u.QJ.image.avatar(n+1)},e))})})})]})},{name:"With badge",component:(0,r.jsxs)(p.G,{children:[(0,r.jsx)(i.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:(0,r.jsx)(o.Z,{alt:u.QJ.fullName(7),src:u.QJ.image.avatar(7),sx:{p:0,width:24,height:24,border:"solid 2px ".concat(e.vars.palette.background.paper)}}),children:(0,r.jsx)(o.Z,{alt:u.QJ.fullName(8),src:u.QJ.image.avatar(8)})}),b.map((e,n)=>(0,r.jsx)(i.Z,{variant:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,r.jsx)(o.Z,{alt:u.QJ.fullName(n+1),src:u.QJ.image.avatar(n+1)})},e))]})},{name:"Sizes",component:(0,r.jsx)(p.G,{children:[24,32,48,56,64,80,128].map((e,n)=>(0,r.jsx)(o.Z,{alt:u.QJ.fullName(n+4),src:u.QJ.image.avatar(n+4),sx:{width:e,height:e}},e))})}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.P,{children:(0,r.jsx)(h.Y,{heading:"Avatar",links:[{name:"Components",href:d.H.components},{name:"Avatar"}],moreLink:["https://mui.com/components/avatars"]})}),(0,r.jsx)(f.$,{data:n})]})}}},function(e){e.O(0,[8331,9271,7648,1021,8489,4591,334,1725,1969,9708,1739,3212,6281,2407,2971,2117,1744],function(){return e(e.s=23382)}),_N_E=e.O()}]);