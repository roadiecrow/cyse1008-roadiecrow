(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6514],{96626:function(e,n,t){Promise.resolve().then(t.bind(t,89961))},8974:function(e,n,t){"use strict";t.d(n,{Y:function(){return d}});var r=t(57437),s=t(63832),o=t(18856),a=t(46387),i=t(80868),l=t(90096);function c(e){let{link:n,activeLast:t,disabled:a}=e,i={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},c=(0,r.jsxs)(r.Fragment,{children:[n.icon&&(0,r.jsx)(s.Z,{component:"span",sx:{mr:1,display:"inherit","& svg, & img":{width:20,height:20}},children:n.icon}),n.name]});return n.href?(0,r.jsx)(o.Z,{component:l.r,href:n.href,sx:i,children:c}):(0,r.jsxs)(s.Z,{sx:i,children:[" ",c," "]})}function d(e){let{links:n,action:t,heading:l,moreLink:d,activeLast:x,slotProps:p,sx:h,...m}=e,f=n[n.length-1].name,g=(0,r.jsx)(a.Z,{variant:"h4",sx:{mb:2,...null==p?void 0:p.heading},children:l}),j=(0,r.jsx)(i.Z,{separator:(0,r.jsx)(u,{}),sx:null==p?void 0:p.breadcrumbs,...m,children:n.map((e,n)=>{var t;return(0,r.jsx)(c,{link:e,activeLast:x,disabled:e.name===f},null!==(t=e.name)&&void 0!==t?t:n)})}),v=(0,r.jsxs)(s.Z,{sx:{flexShrink:0,...null==p?void 0:p.action},children:[" ",t," "]}),Z=(0,r.jsx)(s.Z,{component:"ul",children:null==d?void 0:d.map(e=>(0,r.jsx)(s.Z,{component:"li",sx:{display:"flex"},children:(0,r.jsx)(o.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:null==p?void 0:p.moreLink,children:e})},e))});return(0,r.jsxs)(s.Z,{gap:2,display:"flex",flexDirection:"column",sx:h,...m,children:[(0,r.jsxs)(s.Z,{display:"flex",alignItems:"center",children:[(0,r.jsxs)(s.Z,{sx:{flexGrow:1},children:[l&&g,!!n.length&&j]}),t&&v]}),!!d&&Z]})}function u(){return(0,r.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},64296:function(e,n,t){"use strict";t.d(n,{O:function(){return o}});var r=t(2265);let s=r.useLayoutEffect;function o(e,n,t,o){let a=(0,r.useRef)(n);s(()=>{a.current=n},[n]),(0,r.useEffect)(()=>{let n=(null==t?void 0:t.current)||window;if(!(n&&n.addEventListener))return;let r=e=>a.current(e);return n.addEventListener(e,r,o),()=>{n.removeEventListener(e,r)}},[e,t,o])}},90096:function(e,n,t){"use strict";t.d(n,{r:function(){return r.default}});var r=t(27648)},69230:function(e,n,t){"use strict";t.d(n,{G:function(){return l},H:function(){return c}});var r=t(57437),s=t(63832),o=t(63582),a=t(98489),i=t(86281);function l(e){let{title:n,sx:t,children:a,...l}=e;return(0,r.jsxs)(o.Z,{sx:{px:3,py:6,gap:2,width:1,flexWrap:"wrap",borderRadius:1.5,position:"relative",flexDirection:"row",alignItems:"center",justifyContent:"center",bgcolor:e=>(0,i.jr)(e.vars.palette.grey["500Channel"],.04),boxShadow:e=>"0 0 0 1px ".concat((0,i.jr)(e.vars.palette.grey["500Channel"],.16)),...t},...l,children:[n&&(0,r.jsx)(s.Z,{component:"span",sx:{px:1,top:0,ml:2.5,left:0,py:.25,borderRadius:2,position:"absolute",color:"text.primary",bgcolor:"common.white",transform:"translateY(-50%)",fontSize:e=>e.typography.caption.fontSize,fontWeight:e=>e.typography.fontWeightSemiBold,border:e=>"solid 1px ".concat((0,i.jr)(e.vars.palette.grey["500Channel"],.24)),[i.s4.dark]:{bgcolor:"background.neutral"}},children:n}),a]})}function c(e){let{children:n,sx:t,...s}=e;return(0,r.jsx)(a.Z,{sx:{mt:10,mb:15,gap:5,display:"flex",flexDirection:"column",...t},...s,children:n})}},46235:function(e,n,t){"use strict";t.d(n,{P:function(){return c}});var r=t(57437),s=t(63832),o=t(98489),a=t(31691),i=t(37183),l=t(86281);function c(e){let{children:n,sx:t,...c}=e,d=(0,a.Z)();return(0,r.jsxs)(s.Z,{sx:{py:5,minHeight:240,display:"flex",position:"relative",alignItems:"center",...t},...c,children:[(0,r.jsx)(o.Z,{children:n}),(0,r.jsx)(s.Z,{sx:{...(0,l.v3)({color:"0deg, ".concat((0,l.jr)(d.vars.palette.background.defaultChannel,.9),", ").concat((0,l.jr)(d.vars.palette.background.defaultChannel,.9)),imgUrl:"".concat(i.CONFIG.assetsDir,"/assets/background/background-3-blur.webp")}),top:0,left:0,width:1,height:1,zIndex:-1,position:"absolute",transform:"scaleX(-1)"}})]})}},68696:function(e,n,t){"use strict";t.d(n,{$:function(){return p}});var r=t(57437),s=t(2265),o=t(63832),a=t(18856),i=t(31762),l=t(63582),c=t(98489),d=t(97260),u=t(36137),x=t(64296);function p(e){let{sx:n,data:t,slotProps:p,offsetValue:h=.3,queryClassName:m="scroll__to__view",...f}=e,[g,j]=(0,s.useState)(0),v=(0,s.useCallback)(()=>{let e=window.innerHeight*h,n=window.scrollY+e,t=document.querySelectorAll(".".concat(m)),r=null;t.forEach((e,t)=>{let s=e.offsetTop,o=s+e.clientHeight;n>=s&&n<o&&(r=t)}),j(r)},[h,m]);(0,x.O)("scroll",v);let Z=(0,s.useCallback)(e=>{let n=document.querySelectorAll(".".concat(m));if(n&&n.length>e){let t=n[e].offsetTop-160;window.scrollTo({top:t,behavior:"smooth"})}},[m]),b=(0,r.jsx)(l.Z,{component:"nav",sx:{top:80,width:240,flexShrink:0,position:"sticky",display:{xs:"none",md:"flex"},...null==p?void 0:p.nav},children:(0,r.jsx)(o.Z,{component:"ul",sx:{gap:1.5,display:"flex",flexDirection:"column"},children:t.map((e,n)=>(0,r.jsx)(o.Z,{component:"li",sx:{display:"flex"},children:(0,r.jsxs)(a.Z,{underline:"none",onClick:()=>Z(n),sx:{cursor:"pointer",typography:"body2",color:"text.disabled",...g===n&&{color:"text.primary",fontWeight:"fontWeightSemiBold"}},children:[n+1," - ",e.name]})},e.name))})}),y=(0,r.jsx)(l.Z,{component:"section",spacing:5,flex:"1 1 auto",sx:{minWidth:0,borderRadius:2,p:{xs:3,md:5},bgcolor:"background.neutral",...null==p?void 0:p.section},children:t.map(e=>(0,r.jsxs)(i.Z,{className:m,children:[(0,r.jsx)(d.Z,{title:e.name}),(0,r.jsx)(u.Z,{children:e.component})]},e.name))});return(0,r.jsx)(c.Z,{...null==p?void 0:p.container,children:(0,r.jsxs)(l.Z,{spacing:5,direction:"row",alignItems:"flex-start",sx:{pt:10,pb:15,...n},...f,children:[b,y]})})}},89961:function(e,n,t){"use strict";t.r(n),t.d(n,{PaginationView:function(){return k}});var r=t(57437),s=t(2265),o=t(62709),a=t(34771),i=t(96997),l=t(8974),c=t(63832),d=t(31762),u=t(63582),x=t(33833),p=t(50290),h=t(84851),m=t(41327),f=t(86281);let g=[...Array(100)].map((e,n)=>n+1);function j(){let[e,n]=(0,s.useState)(1),[t,a]=(0,s.useState)(12),i=(0,s.useCallback)((e,t)=>{n(t)},[]),l=(0,s.useCallback)(e=>{a(parseInt(e.target.value,10)),n(1)},[]);return(0,r.jsxs)(u.Z,{alignItems:"center",spacing:8,sx:{width:1},children:[(0,r.jsx)(c.Z,{gap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(4, 1fr)"},sx:{width:1},children:g.slice((e-1)*t,(e-1)*t+t).map(e=>(0,r.jsx)(d.Z,{sx:{py:3,typography:"h3",borderRadius:1.5,textAlign:"center",color:e=>(0,f.jr)(e.vars.palette.text.disabledChannel,.48)},children:e},e))}),(0,r.jsxs)(u.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{width:1},children:[(0,r.jsx)(o.Z,{page:e,shape:"circular",count:Math.ceil(g.length/t),onChange:i}),(0,r.jsxs)(m.Z,{size:"small",sx:{width:120},children:[(0,r.jsx)(h.Z,{htmlFor:"demo-pagination-select-label",children:"Items per page"}),(0,r.jsxs)(x.Z,{value:String(t),label:"Item per page",onChange:l,inputProps:{id:"demo-pagination-select-label"},children:[(0,r.jsx)(p.Z,{value:8,children:"8"}),(0,r.jsx)(p.Z,{value:12,children:"12"}),(0,r.jsx)(p.Z,{value:24,children:"24"})]})]})]})]})}var v=t(46235),Z=t(69230),b=t(68696);let y=["standard","primary","secondary","info","success","warning","error"],w=["small","medium","large"],C={gap:3,flexDirection:"column"};function k(){let[e,n]=(0,s.useState)(2),[t,c]=(0,s.useState)(10),d=(0,s.useCallback)((e,t)=>{n(t)},[]),u=(0,s.useCallback)(e=>{c(parseInt(e.target.value,10)),n(0)},[]),x=[{name:"Circular",component:(0,r.jsxs)(Z.G,{sx:C,children:[(0,r.jsx)(o.Z,{shape:"circular",count:10,variant:"text"}),(0,r.jsx)(o.Z,{shape:"circular",count:10,variant:"text",disabled:!0}),(0,r.jsx)(o.Z,{shape:"circular",count:10,variant:"outlined"}),(0,r.jsx)(o.Z,{shape:"circular",count:10,variant:"outlined",disabled:!0}),(0,r.jsx)(o.Z,{shape:"circular",count:10,variant:"soft"}),(0,r.jsx)(o.Z,{shape:"circular",count:10,variant:"soft",disabled:!0})]})},{name:"Rounded",component:(0,r.jsxs)(Z.G,{sx:C,children:[(0,r.jsx)(o.Z,{shape:"rounded",count:10,variant:"text"}),(0,r.jsx)(o.Z,{shape:"rounded",count:10,variant:"text",disabled:!0}),(0,r.jsx)(o.Z,{shape:"rounded",count:10,variant:"outlined"}),(0,r.jsx)(o.Z,{shape:"rounded",count:10,variant:"outlined",disabled:!0}),(0,r.jsx)(o.Z,{shape:"rounded",count:10,variant:"soft"}),(0,r.jsx)(o.Z,{shape:"rounded",count:10,variant:"soft",disabled:!0})]})},{name:"Colors",component:(0,r.jsxs)(Z.G,{sx:C,children:[y.map(e=>(0,r.jsx)(o.Z,{color:e,count:10,variant:"text"},e)),y.map(e=>(0,r.jsx)(o.Z,{color:e,count:10,variant:"outlined"},e)),y.map(e=>(0,r.jsx)(o.Z,{color:e,count:10,variant:"soft"},e))]})},{name:"Sizes",component:(0,r.jsx)(Z.G,{sx:C,children:w.map(e=>(0,r.jsx)(o.Z,{count:10,size:e},e))})},{name:"Buttons",component:(0,r.jsxs)(Z.G,{sx:C,children:[(0,r.jsx)(o.Z,{count:10,showFirstButton:!0,showLastButton:!0}),(0,r.jsx)(o.Z,{count:10,hidePrevButton:!0,hideNextButton:!0})]})},{name:"Ranges",component:(0,r.jsxs)(Z.G,{sx:C,children:[(0,r.jsx)(o.Z,{count:11,defaultPage:6,siblingCount:0}),(0,r.jsx)(o.Z,{count:11,defaultPage:6}),(0,r.jsx)(o.Z,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),(0,r.jsx)(o.Z,{count:11,defaultPage:6,boundaryCount:2})]})},{name:"Table",component:(0,r.jsx)(Z.G,{sx:C,children:(0,r.jsx)(a.Z,{component:"div",count:100,page:e,onPageChange:d,rowsPerPage:t,onRowsPerPageChange:u})})},{name:"Items",component:(0,r.jsx)(Z.G,{sx:C,children:(0,r.jsx)(j,{})})}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.P,{children:(0,r.jsx)(l.Y,{heading:"Pagination",links:[{name:"Components",href:i.H.components},{name:"Pagination"}],moreLink:["https://mui.com/components/pagination"]})}),(0,r.jsx)(b.$,{data:x})]})}}},function(e){e.O(0,[8331,9271,7648,1021,8489,4591,6112,8398,3588,3155,3833,1739,5780,6281,2971,2117,1744],function(){return e(e.s=96626)}),_N_E=e.O()}]);