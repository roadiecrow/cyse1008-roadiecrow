(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9958],{45554:function(e,n,t){Promise.resolve().then(t.bind(t,39560))},8974:function(e,n,t){"use strict";t.d(n,{Y:function(){return u}});var r=t(57437),i=t(63832),o=t(18856),l=t(46387),s=t(80868),a=t(90096);function c(e){let{link:n,activeLast:t,disabled:l}=e,s={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...l&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},c=(0,r.jsxs)(r.Fragment,{children:[n.icon&&(0,r.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg, & img":{width:20,height:20}},children:n.icon}),n.name]});return n.href?(0,r.jsx)(o.Z,{component:a.r,href:n.href,sx:s,children:c}):(0,r.jsxs)(i.Z,{sx:s,children:[" ",c," "]})}function u(e){let{links:n,action:t,heading:a,moreLink:u,activeLast:x,slotProps:f,sx:m,...p}=e,h=n[n.length-1].name,j=(0,r.jsx)(l.Z,{variant:"h4",sx:{mb:2,...null==f?void 0:f.heading},children:a}),v=(0,r.jsx)(s.Z,{separator:(0,r.jsx)(d,{}),sx:null==f?void 0:f.breadcrumbs,...p,children:n.map((e,n)=>{var t;return(0,r.jsx)(c,{link:e,activeLast:x,disabled:e.name===h},null!==(t=e.name)&&void 0!==t?t:n)})}),g=(0,r.jsxs)(i.Z,{sx:{flexShrink:0,...null==f?void 0:f.action},children:[" ",t," "]}),Z=(0,r.jsx)(i.Z,{component:"ul",children:null==u?void 0:u.map(e=>(0,r.jsx)(i.Z,{component:"li",sx:{display:"flex"},children:(0,r.jsx)(o.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:null==f?void 0:f.moreLink,children:e})},e))});return(0,r.jsxs)(i.Z,{gap:2,display:"flex",flexDirection:"column",sx:m,...p,children:[(0,r.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[(0,r.jsxs)(i.Z,{sx:{flexGrow:1},children:[a&&j,!!n.length&&v]}),t&&g]}),!!u&&Z]})}function d(){return(0,r.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},64296:function(e,n,t){"use strict";t.d(n,{O:function(){return o}});var r=t(2265);let i=r.useLayoutEffect;function o(e,n,t,o){let l=(0,r.useRef)(n);i(()=>{l.current=n},[n]),(0,r.useEffect)(()=>{let n=(null==t?void 0:t.current)||window;if(!(n&&n.addEventListener))return;let r=e=>l.current(e);return n.addEventListener(e,r,o),()=>{n.removeEventListener(e,r)}},[e,t,o])}},90096:function(e,n,t){"use strict";t.d(n,{r:function(){return r.default}});var r=t(27648)},69230:function(e,n,t){"use strict";t.d(n,{G:function(){return a},H:function(){return c}});var r=t(57437),i=t(63832),o=t(63582),l=t(98489),s=t(86281);function a(e){let{title:n,sx:t,children:l,...a}=e;return(0,r.jsxs)(o.Z,{sx:{px:3,py:6,gap:2,width:1,flexWrap:"wrap",borderRadius:1.5,position:"relative",flexDirection:"row",alignItems:"center",justifyContent:"center",bgcolor:e=>(0,s.jr)(e.vars.palette.grey["500Channel"],.04),boxShadow:e=>"0 0 0 1px ".concat((0,s.jr)(e.vars.palette.grey["500Channel"],.16)),...t},...a,children:[n&&(0,r.jsx)(i.Z,{component:"span",sx:{px:1,top:0,ml:2.5,left:0,py:.25,borderRadius:2,position:"absolute",color:"text.primary",bgcolor:"common.white",transform:"translateY(-50%)",fontSize:e=>e.typography.caption.fontSize,fontWeight:e=>e.typography.fontWeightSemiBold,border:e=>"solid 1px ".concat((0,s.jr)(e.vars.palette.grey["500Channel"],.24)),[s.s4.dark]:{bgcolor:"background.neutral"}},children:n}),l]})}function c(e){let{children:n,sx:t,...i}=e;return(0,r.jsx)(l.Z,{sx:{mt:10,mb:15,gap:5,display:"flex",flexDirection:"column",...t},...i,children:n})}},46235:function(e,n,t){"use strict";t.d(n,{P:function(){return c}});var r=t(57437),i=t(63832),o=t(98489),l=t(31691),s=t(37183),a=t(86281);function c(e){let{children:n,sx:t,...c}=e,u=(0,l.Z)();return(0,r.jsxs)(i.Z,{sx:{py:5,minHeight:240,display:"flex",position:"relative",alignItems:"center",...t},...c,children:[(0,r.jsx)(o.Z,{children:n}),(0,r.jsx)(i.Z,{sx:{...(0,a.v3)({color:"0deg, ".concat((0,a.jr)(u.vars.palette.background.defaultChannel,.9),", ").concat((0,a.jr)(u.vars.palette.background.defaultChannel,.9)),imgUrl:"".concat(s.CONFIG.assetsDir,"/assets/background/background-3-blur.webp")}),top:0,left:0,width:1,height:1,zIndex:-1,position:"absolute",transform:"scaleX(-1)"}})]})}},68696:function(e,n,t){"use strict";t.d(n,{$:function(){return f}});var r=t(57437),i=t(2265),o=t(63832),l=t(18856),s=t(31762),a=t(63582),c=t(98489),u=t(97260),d=t(36137),x=t(64296);function f(e){let{sx:n,data:t,slotProps:f,offsetValue:m=.3,queryClassName:p="scroll__to__view",...h}=e,[j,v]=(0,i.useState)(0),g=(0,i.useCallback)(()=>{let e=window.innerHeight*m,n=window.scrollY+e,t=document.querySelectorAll(".".concat(p)),r=null;t.forEach((e,t)=>{let i=e.offsetTop,o=i+e.clientHeight;n>=i&&n<o&&(r=t)}),v(r)},[m,p]);(0,x.O)("scroll",g);let Z=(0,i.useCallback)(e=>{let n=document.querySelectorAll(".".concat(p));if(n&&n.length>e){let t=n[e].offsetTop-160;window.scrollTo({top:t,behavior:"smooth"})}},[p]),b=(0,r.jsx)(a.Z,{component:"nav",sx:{top:80,width:240,flexShrink:0,position:"sticky",display:{xs:"none",md:"flex"},...null==f?void 0:f.nav},children:(0,r.jsx)(o.Z,{component:"ul",sx:{gap:1.5,display:"flex",flexDirection:"column"},children:t.map((e,n)=>(0,r.jsx)(o.Z,{component:"li",sx:{display:"flex"},children:(0,r.jsxs)(l.Z,{underline:"none",onClick:()=>Z(n),sx:{cursor:"pointer",typography:"body2",color:"text.disabled",...j===n&&{color:"text.primary",fontWeight:"fontWeightSemiBold"}},children:[n+1," - ",e.name]})},e.name))})}),y=(0,r.jsx)(a.Z,{component:"section",spacing:5,flex:"1 1 auto",sx:{minWidth:0,borderRadius:2,p:{xs:3,md:5},bgcolor:"background.neutral",...null==f?void 0:f.section},children:t.map(e=>(0,r.jsxs)(s.Z,{className:p,children:[(0,r.jsx)(u.Z,{title:e.name}),(0,r.jsx)(d.Z,{children:e.component})]},e.name))});return(0,r.jsx)(c.Z,{...null==f?void 0:f.container,children:(0,r.jsxs)(a.Z,{spacing:5,direction:"row",alignItems:"flex-start",sx:{pt:10,pb:15,...n},...h,children:[b,y]})})}},39560:function(e,n,t){"use strict";t.r(n),t.d(n,{ProgressView:function(){return j}});var r=t(57437),i=t(2265),o=t(96997),l=t(8974),s=t(63582),a=t(5186),c=t(69230);let u=["inherit","primary","secondary","info","success","warning","error"];function d(e){let{progress:n,buffer:t}=e;return(0,r.jsxs)(s.Z,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[(0,r.jsx)(c.G,{title:"Indeterminate",sx:{flexDirection:"column"},children:u.map(e=>(0,r.jsx)(a.Z,{color:e,sx:{mb:2,width:1}},e))}),(0,r.jsx)(c.G,{title:"Determinate",sx:{flexDirection:"column"},children:u.map(e=>(0,r.jsx)(a.Z,{color:e,value:n,variant:"determinate",sx:{mb:2,width:1}},e))}),(0,r.jsx)(c.G,{title:"Buffer",sx:{flexDirection:"column"},children:u.map(e=>(0,r.jsx)(a.Z,{color:e,variant:"buffer",value:n,valueBuffer:t,sx:{mb:2,width:1}},e))}),(0,r.jsx)(c.G,{title:"Query",sx:{flexDirection:"column"},children:u.map(e=>(0,r.jsx)(a.Z,{color:e,variant:"query",value:n,valueBuffer:t,sx:{mb:2,width:1}},e))})]})}var x=t(46235),f=t(73053);let m=["inherit","primary","secondary","info","success","warning","error"];function p(e){let{progress:n}=e;return(0,r.jsxs)(s.Z,{spacing:5,children:[(0,r.jsx)(c.G,{title:"Indeterminate",children:m.map(e=>(0,r.jsx)(f.Z,{color:e},e))}),(0,r.jsxs)(c.G,{title:"Determinate",children:[(0,r.jsx)(f.Z,{color:"info"}),(0,r.jsx)(f.Z,{color:"info",variant:"determinate",value:25}),(0,r.jsx)(f.Z,{color:"info",variant:"determinate",value:50}),(0,r.jsx)(f.Z,{color:"info",variant:"determinate",value:75}),(0,r.jsx)(f.Z,{color:"info",variant:"determinate",value:100}),(0,r.jsx)(f.Z,{color:"info",variant:"determinate",value:n})]}),(0,r.jsxs)(c.G,{title:"Sizes",children:[(0,r.jsx)(f.Z,{size:48,color:"info"}),(0,r.jsx)(f.Z,{color:"info"}),(0,r.jsx)(f.Z,{size:32,color:"info"}),(0,r.jsx)(f.Z,{size:24,color:"info"})]})]})}var h=t(68696);function j(){let[e,n]=(0,i.useState)(0),[t,s]=(0,i.useState)(10);(0,i.useEffect)(()=>{let e=setInterval(()=>{n(e=>100===e?0:Math.min(e+10*Math.random(),100))},500);return()=>{clearInterval(e)}},[]);let a=(0,i.useRef)(()=>{});(0,i.useEffect)(()=>{a.current=()=>{if(e>100)n(0),s(10);else{let t=10*Math.random();n(e+t),s(e+t+10*Math.random())}}}),(0,i.useEffect)(()=>{let e=setInterval(()=>{a.current()},500);return()=>{clearInterval(e)}},[]);let c=[{name:"Circular",component:(0,r.jsx)(p,{progress:e})},{name:"Linear",component:(0,r.jsx)(d,{progress:e,buffer:t})}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.P,{children:(0,r.jsx)(l.Y,{heading:"Progress",links:[{name:"Components",href:o.H.components},{name:"Progress"}],moreLink:["https://mui.com/components/progress"]})}),(0,r.jsx)(h.$,{data:c})]})}}},function(e){e.O(0,[8331,9271,7648,1021,8489,1739,5104,6281,2971,2117,1744],function(){return e(e.s=45554)}),_N_E=e.O()}]);