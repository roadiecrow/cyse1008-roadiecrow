(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6828],{62171:function(e,t,n){Promise.resolve().then(n.bind(n,25113))},8974:function(e,t,n){"use strict";n.d(t,{Y:function(){return d}});var l=n(57437),r=n(63832),i=n(18856),a=n(46387),s=n(80868),o=n(90096);function c(e){let{link:t,activeLast:n,disabled:a}=e,s={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...a&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},c=(0,l.jsxs)(l.Fragment,{children:[t.icon&&(0,l.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg, & img":{width:20,height:20}},children:t.icon}),t.name]});return t.href?(0,l.jsx)(i.Z,{component:o.r,href:t.href,sx:s,children:c}):(0,l.jsxs)(r.Z,{sx:s,children:[" ",c," "]})}function d(e){let{links:t,action:n,heading:o,moreLink:d,activeLast:x,slotProps:h,sx:p,...f}=e,m=t[t.length-1].name,b=(0,l.jsx)(a.Z,{variant:"h4",sx:{mb:2,...null==h?void 0:h.heading},children:o}),j=(0,l.jsx)(s.Z,{separator:(0,l.jsx)(u,{}),sx:null==h?void 0:h.breadcrumbs,...f,children:t.map((e,t)=>{var n;return(0,l.jsx)(c,{link:e,activeLast:x,disabled:e.name===m},null!==(n=e.name)&&void 0!==n?n:t)})}),v=(0,l.jsxs)(r.Z,{sx:{flexShrink:0,...null==h?void 0:h.action},children:[" ",n," "]}),g=(0,l.jsx)(r.Z,{component:"ul",children:null==d?void 0:d.map(e=>(0,l.jsx)(r.Z,{component:"li",sx:{display:"flex"},children:(0,l.jsx)(i.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:null==h?void 0:h.moreLink,children:e})},e))});return(0,l.jsxs)(r.Z,{gap:2,display:"flex",flexDirection:"column",sx:p,...f,children:[(0,l.jsxs)(r.Z,{display:"flex",alignItems:"center",children:[(0,l.jsxs)(r.Z,{sx:{flexGrow:1},children:[o&&b,!!t.length&&j]}),n&&v]}),!!d&&g]})}function u(){return(0,l.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},15577:function(e,t,n){"use strict";n.d(t,{G:function(){return l}});let l={root:"mnl__icon__root",flag:"mnl__icon__flag"}},95271:function(e,t,n){"use strict";n.r(t),n.d(t,{Iconify:function(){return c}});var l=n(57437),r=n(2265),i=n(59646),a=n(63832),s=n(53610),o=n(15577);let c=(0,r.forwardRef)((e,t)=>{let{className:n,width:r=20,sx:c,...d}=e,u={width:r,height:r,flexShrink:0,display:"inline-flex"},x=(0,l.jsx)(a.Z,{component:"span",className:o.G.root.concat(n?" ".concat(n):""),sx:{...u,...c}});return(0,l.jsx)(s.Z,{fallback:x,children:(0,l.jsx)(a.Z,{ssr:!0,ref:t,component:i.JO,className:o.G.root.concat(n?" ".concat(n):""),sx:{...u,...c},...d})})});(0,i.Qb)("local")},27250:function(e,t,n){"use strict";n.d(t,{U6:function(){return o},Ir:function(){return r.Iconify},GW:function(){return l.G}});var l=n(15577),r=n(95271),i=n(57437),a=n(2265),s=n(63832);let o=(0,a.forwardRef)((e,t)=>{let{code:n,className:r,sx:a,...o}=e;return n?(0,i.jsx)(s.Z,{ref:t,component:"span",className:l.G.flag.concat(r?" ".concat(r):""),sx:{width:26,height:20,flexShrink:0,overflow:"hidden",borderRadius:"5px",alignItems:"center",display:"inline-flex",justifyContent:"center",bgcolor:"background.neutral",...a},...o,children:(0,i.jsx)(s.Z,{component:"img",loading:"lazy",alt:n,src:"https://purecatamphetamine.github.io/country-flag-icons/3x2/".concat(null==n?void 0:n.toUpperCase(),".svg"),sx:{width:1,height:1,maxWidth:"unset",objectFit:"cover"}})}):null})},64296:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var l=n(2265);let r=l.useLayoutEffect;function i(e,t,n,i){let a=(0,l.useRef)(t);r(()=>{a.current=t},[t]),(0,l.useEffect)(()=>{let t=(null==n?void 0:n.current)||window;if(!(t&&t.addEventListener))return;let l=e=>a.current(e);return t.addEventListener(e,l,i),()=>{t.removeEventListener(e,l)}},[e,n,i])}},90096:function(e,t,n){"use strict";n.d(t,{r:function(){return l.default}});var l=n(27648)},69230:function(e,t,n){"use strict";n.d(t,{G:function(){return o},H:function(){return c}});var l=n(57437),r=n(63832),i=n(63582),a=n(98489),s=n(86281);function o(e){let{title:t,sx:n,children:a,...o}=e;return(0,l.jsxs)(i.Z,{sx:{px:3,py:6,gap:2,width:1,flexWrap:"wrap",borderRadius:1.5,position:"relative",flexDirection:"row",alignItems:"center",justifyContent:"center",bgcolor:e=>(0,s.jr)(e.vars.palette.grey["500Channel"],.04),boxShadow:e=>"0 0 0 1px ".concat((0,s.jr)(e.vars.palette.grey["500Channel"],.16)),...n},...o,children:[t&&(0,l.jsx)(r.Z,{component:"span",sx:{px:1,top:0,ml:2.5,left:0,py:.25,borderRadius:2,position:"absolute",color:"text.primary",bgcolor:"common.white",transform:"translateY(-50%)",fontSize:e=>e.typography.caption.fontSize,fontWeight:e=>e.typography.fontWeightSemiBold,border:e=>"solid 1px ".concat((0,s.jr)(e.vars.palette.grey["500Channel"],.24)),[s.s4.dark]:{bgcolor:"background.neutral"}},children:t}),a]})}function c(e){let{children:t,sx:n,...r}=e;return(0,l.jsx)(a.Z,{sx:{mt:10,mb:15,gap:5,display:"flex",flexDirection:"column",...n},...r,children:t})}},46235:function(e,t,n){"use strict";n.d(t,{P:function(){return c}});var l=n(57437),r=n(63832),i=n(98489),a=n(31691),s=n(37183),o=n(86281);function c(e){let{children:t,sx:n,...c}=e,d=(0,a.Z)();return(0,l.jsxs)(r.Z,{sx:{py:5,minHeight:240,display:"flex",position:"relative",alignItems:"center",...n},...c,children:[(0,l.jsx)(i.Z,{children:t}),(0,l.jsx)(r.Z,{sx:{...(0,o.v3)({color:"0deg, ".concat((0,o.jr)(d.vars.palette.background.defaultChannel,.9),", ").concat((0,o.jr)(d.vars.palette.background.defaultChannel,.9)),imgUrl:"".concat(s.CONFIG.assetsDir,"/assets/background/background-3-blur.webp")}),top:0,left:0,width:1,height:1,zIndex:-1,position:"absolute",transform:"scaleX(-1)"}})]})}},68696:function(e,t,n){"use strict";n.d(t,{$:function(){return h}});var l=n(57437),r=n(2265),i=n(63832),a=n(18856),s=n(31762),o=n(63582),c=n(98489),d=n(97260),u=n(36137),x=n(64296);function h(e){let{sx:t,data:n,slotProps:h,offsetValue:p=.3,queryClassName:f="scroll__to__view",...m}=e,[b,j]=(0,r.useState)(0),v=(0,r.useCallback)(()=>{let e=window.innerHeight*p,t=window.scrollY+e,n=document.querySelectorAll(".".concat(f)),l=null;n.forEach((e,n)=>{let r=e.offsetTop,i=r+e.clientHeight;t>=r&&t<i&&(l=n)}),j(l)},[p,f]);(0,x.O)("scroll",v);let g=(0,r.useCallback)(e=>{let t=document.querySelectorAll(".".concat(f));if(t&&t.length>e){let n=t[e].offsetTop-160;window.scrollTo({top:n,behavior:"smooth"})}},[f]),Z=(0,l.jsx)(o.Z,{component:"nav",sx:{top:80,width:240,flexShrink:0,position:"sticky",display:{xs:"none",md:"flex"},...null==h?void 0:h.nav},children:(0,l.jsx)(i.Z,{component:"ul",sx:{gap:1.5,display:"flex",flexDirection:"column"},children:n.map((e,t)=>(0,l.jsx)(i.Z,{component:"li",sx:{display:"flex"},children:(0,l.jsxs)(a.Z,{underline:"none",onClick:()=>g(t),sx:{cursor:"pointer",typography:"body2",color:"text.disabled",...b===t&&{color:"text.primary",fontWeight:"fontWeightSemiBold"}},children:[t+1," - ",e.name]})},e.name))})}),w=(0,l.jsx)(o.Z,{component:"section",spacing:5,flex:"1 1 auto",sx:{minWidth:0,borderRadius:2,p:{xs:3,md:5},bgcolor:"background.neutral",...null==h?void 0:h.section},children:n.map(e=>(0,l.jsxs)(s.Z,{className:f,children:[(0,l.jsx)(d.Z,{title:e.name}),(0,l.jsx)(u.Z,{children:e.component})]},e.name))});return(0,l.jsx)(c.Z,{...null==h?void 0:h.container,children:(0,l.jsxs)(o.Z,{spacing:5,direction:"row",alignItems:"flex-start",sx:{pt:10,pb:15,...t},...m,children:[Z,w]})})}},25113:function(e,t,n){"use strict";n.r(t),n.d(t,{TextfieldView:function(){return j}});var l=n(57437),r=n(96997),i=n(8974),a=n(2265),s=n(63582),o=n(50290),c=n(77584),d=n(95576),u=n(23996),x=n(27250),h=n(69230);let p=[{value:"USD",label:"$"},{value:"EUR",label:"€"},{value:"BTC",label:"฿"},{value:"JPY",label:"\xa5"}];function f(e){let{variant:t}=e,[n,r]=(0,a.useState)("EUR"),[i,f]=(0,a.useState)({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),m=(0,a.useCallback)(e=>{r(e.target.value)},[]),b=e=>t=>{f({...i,[e]:t.target.value})},j=(0,a.useCallback)(()=>{f({...i,showPassword:!i.showPassword})},[i]),v=(0,a.useCallback)(e=>{e.preventDefault()},[]),g={gap:3,flexDirection:"column"};return(0,l.jsxs)(s.Z,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[(0,l.jsxs)(h.G,{title:"General",sx:g,children:[(0,l.jsx)(c.Z,{variant:t,fullWidth:!0,label:"Inactive"}),(0,l.jsx)(c.Z,{variant:t,required:!0,fullWidth:!0,label:"Activated",defaultValue:"Hello Minimal"}),(0,l.jsx)(c.Z,{variant:t,fullWidth:!0,type:"password",label:"Password",autoComplete:"current-password"}),(0,l.jsx)(c.Z,{variant:t,disabled:!0,fullWidth:!0,label:"Disabled",defaultValue:"Hello Minimal"})]}),(0,l.jsxs)(h.G,{title:"With icon & adornments",sx:g,children:[(0,l.jsx)(c.Z,{variant:t,fullWidth:!0,label:"Filled",InputProps:{startAdornment:(0,l.jsx)(u.Z,{position:"start",children:(0,l.jsx)(x.Ir,{icon:"solar:user-rounded-bold",width:24})})}}),(0,l.jsx)(c.Z,{variant:t,disabled:!0,fullWidth:!0,label:"Disabled",defaultValue:"Hello Minimal",InputProps:{startAdornment:(0,l.jsx)(u.Z,{position:"start",children:(0,l.jsx)(x.Ir,{icon:"solar:user-rounded-bold",width:24})})}}),(0,l.jsx)(c.Z,{variant:t,fullWidth:!0,label:"With normal TextField",InputProps:{startAdornment:(0,l.jsx)(u.Z,{position:"start",children:"Kg"})}}),(0,l.jsx)(c.Z,{variant:t,fullWidth:!0,value:i.weight,onChange:b("weight"),helperText:"Weight",InputProps:{endAdornment:(0,l.jsx)(u.Z,{position:"end",children:"Kg"})}}),(0,l.jsx)(c.Z,{variant:t,fullWidth:!0,type:i.showPassword?"text":"password",value:i.password,onChange:b("password"),label:"Password",InputProps:{startAdornment:(0,l.jsx)(u.Z,{position:"start",children:(0,l.jsx)(x.Ir,{icon:"solar:user-rounded-bold",width:24})}),endAdornment:(0,l.jsx)(u.Z,{position:"end",children:(0,l.jsx)(d.Z,{onClick:j,onMouseDown:v,edge:"end",children:i.showPassword?(0,l.jsx)(x.Ir,{icon:"solar:eye-bold",width:24}):(0,l.jsx)(x.Ir,{icon:"solar:eye-closed-bold",width:24})})})}})]}),(0,l.jsxs)(h.G,{title:"With caption",sx:g,children:[(0,l.jsx)(c.Z,{variant:t,fullWidth:!0,label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."}),(0,l.jsx)(c.Z,{variant:t,error:!0,fullWidth:!0,label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."})]}),(0,l.jsxs)(h.G,{title:"Type",sx:g,children:[(0,l.jsx)(c.Z,{variant:t,fullWidth:!0,type:"password",label:"Password",autoComplete:"current-password"}),(0,l.jsx)(c.Z,{variant:t,fullWidth:!0,type:"number",label:"Number",defaultValue:0,InputLabelProps:{shrink:!0}}),(0,l.jsx)(c.Z,{variant:t,fullWidth:!0,label:"Search",type:"search"})]}),(0,l.jsxs)(h.G,{title:"Sizes",sx:g,children:[(0,l.jsx)(c.Z,{variant:t,fullWidth:!0,label:"Size",size:"small",defaultValue:"Small"}),(0,l.jsx)(c.Z,{variant:t,fullWidth:!0,label:"Size",defaultValue:"Normal"})]}),(0,l.jsxs)(h.G,{title:"Select",sx:g,children:[(0,l.jsx)(c.Z,{id:"select-currency-label-x",variant:t,select:!0,fullWidth:!0,label:"Select",value:n,onChange:m,helperText:"Please select your currency",InputLabelProps:{htmlFor:"".concat(t,"-select-currency-label")},inputProps:{id:"".concat(t,"-select-currency-label")},children:p.map(e=>(0,l.jsx)(o.Z,{value:e.value,children:e.label},e.value))}),(0,l.jsx)(c.Z,{variant:t,select:!0,fullWidth:!0,size:"small",value:n,label:"Native select",SelectProps:{native:!0},onChange:m,helperText:"Please select your currency",InputLabelProps:{htmlFor:"".concat(t,"-native-select-currency-label")},inputProps:{id:"".concat(t,"-native-select-currency-label")},children:p.map(e=>(0,l.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,l.jsxs)(h.G,{title:"Multiline",sx:g,children:[(0,l.jsx)(c.Z,{variant:t,fullWidth:!0,multiline:!0,maxRows:4,label:"Multiline",value:"Controlled"}),(0,l.jsx)(c.Z,{variant:t,fullWidth:!0,multiline:!0,placeholder:"Placeholder",label:"Multiline Placeholder"}),(0,l.jsx)(c.Z,{variant:t,rows:4,fullWidth:!0,multiline:!0,label:"Multiline",defaultValue:"Default Value"})]})]})}var m=n(46235),b=n(68696);function j(){let e=[{name:"Outlined",component:(0,l.jsx)(f,{variant:"outlined"})},{name:"Filled",component:(0,l.jsx)(f,{variant:"filled"})},{name:"Standard",component:(0,l.jsx)(f,{variant:"standard"})}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.P,{children:(0,l.jsx)(i.Y,{heading:"Textfield",links:[{name:"Components",href:r.H.components},{name:"Textfield"}],moreLink:["https://mui.com/components/text-fields"]})}),(0,l.jsx)(b.$,{data:e})]})}}},function(e){e.O(0,[8331,9271,7648,1021,8489,4591,334,6112,8398,3588,3155,3833,1739,5100,6281,2971,2117,1744],function(){return e(e.s=62171)}),_N_E=e.O()}]);