(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2026],{80871:function(e,n,r){Promise.resolve().then(r.bind(r,32805))},8974:function(e,n,r){"use strict";r.d(n,{Y:function(){return d}});var i=r(57437),l=r(63832),s=r(18856),o=r(46387),t=r(80868),a=r(90096);function c(e){let{link:n,activeLast:r,disabled:o}=e,t={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...o&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},c=(0,i.jsxs)(i.Fragment,{children:[n.icon&&(0,i.jsx)(l.Z,{component:"span",sx:{mr:1,display:"inherit","& svg, & img":{width:20,height:20}},children:n.icon}),n.name]});return n.href?(0,i.jsx)(s.Z,{component:a.r,href:n.href,sx:t,children:c}):(0,i.jsxs)(l.Z,{sx:t,children:[" ",c," "]})}function d(e){let{links:n,action:r,heading:a,moreLink:d,activeLast:x,slotProps:h,sx:p,...j}=e,m=n[n.length-1].name,f=(0,i.jsx)(o.Z,{variant:"h4",sx:{mb:2,...null==h?void 0:h.heading},children:a}),g=(0,i.jsx)(t.Z,{separator:(0,i.jsx)(u,{}),sx:null==h?void 0:h.breadcrumbs,...j,children:n.map((e,n)=>{var r;return(0,i.jsx)(c,{link:e,activeLast:x,disabled:e.name===m},null!==(r=e.name)&&void 0!==r?r:n)})}),Z=(0,i.jsxs)(l.Z,{sx:{flexShrink:0,...null==h?void 0:h.action},children:[" ",r," "]}),v=(0,i.jsx)(l.Z,{component:"ul",children:null==d?void 0:d.map(e=>(0,i.jsx)(l.Z,{component:"li",sx:{display:"flex"},children:(0,i.jsx)(s.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:null==h?void 0:h.moreLink,children:e})},e))});return(0,i.jsxs)(l.Z,{gap:2,display:"flex",flexDirection:"column",sx:p,...j,children:[(0,i.jsxs)(l.Z,{display:"flex",alignItems:"center",children:[(0,i.jsxs)(l.Z,{sx:{flexGrow:1},children:[a&&f,!!n.length&&g]}),r&&Z]}),!!d&&v]})}function u(){return(0,i.jsx)(l.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},15577:function(e,n,r){"use strict";r.d(n,{G:function(){return i}});let i={root:"mnl__icon__root",flag:"mnl__icon__flag"}},95271:function(e,n,r){"use strict";r.r(n),r.d(n,{Iconify:function(){return c}});var i=r(57437),l=r(2265),s=r(59646),o=r(63832),t=r(53610),a=r(15577);let c=(0,l.forwardRef)((e,n)=>{let{className:r,width:l=20,sx:c,...d}=e,u={width:l,height:l,flexShrink:0,display:"inline-flex"},x=(0,i.jsx)(o.Z,{component:"span",className:a.G.root.concat(r?" ".concat(r):""),sx:{...u,...c}});return(0,i.jsx)(t.Z,{fallback:x,children:(0,i.jsx)(o.Z,{ssr:!0,ref:n,component:s.JO,className:a.G.root.concat(r?" ".concat(r):""),sx:{...u,...c},...d})})});(0,s.Qb)("local")},27250:function(e,n,r){"use strict";r.d(n,{U6:function(){return a},Ir:function(){return l.Iconify},GW:function(){return i.G}});var i=r(15577),l=r(95271),s=r(57437),o=r(2265),t=r(63832);let a=(0,o.forwardRef)((e,n)=>{let{code:r,className:l,sx:o,...a}=e;return r?(0,s.jsx)(t.Z,{ref:n,component:"span",className:i.G.flag.concat(l?" ".concat(l):""),sx:{width:26,height:20,flexShrink:0,overflow:"hidden",borderRadius:"5px",alignItems:"center",display:"inline-flex",justifyContent:"center",bgcolor:"background.neutral",...o},...a,children:(0,s.jsx)(t.Z,{component:"img",loading:"lazy",alt:r,src:"https://purecatamphetamine.github.io/country-flag-icons/3x2/".concat(null==r?void 0:r.toUpperCase(),".svg"),sx:{width:1,height:1,maxWidth:"unset",objectFit:"cover"}})}):null})},23857:function(e,n,r){"use strict";r.d(n,{k:function(){return l}});var i=r(2265);function l(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],[n,r]=(0,i.useState)(e),l=(0,i.useCallback)(()=>{r(!0)},[]),s=(0,i.useCallback)(()=>{r(!1)},[]),o=(0,i.useCallback)(()=>{r(e=>!e)},[]);return(0,i.useMemo)(()=>({value:n,onTrue:l,onFalse:s,onToggle:o,setValue:r}),[n,l,s,o,r])}},90096:function(e,n,r){"use strict";r.d(n,{r:function(){return i.default}});var i=r(27648)},69230:function(e,n,r){"use strict";r.d(n,{G:function(){return a},H:function(){return c}});var i=r(57437),l=r(63832),s=r(63582),o=r(98489),t=r(86281);function a(e){let{title:n,sx:r,children:o,...a}=e;return(0,i.jsxs)(s.Z,{sx:{px:3,py:6,gap:2,width:1,flexWrap:"wrap",borderRadius:1.5,position:"relative",flexDirection:"row",alignItems:"center",justifyContent:"center",bgcolor:e=>(0,t.jr)(e.vars.palette.grey["500Channel"],.04),boxShadow:e=>"0 0 0 1px ".concat((0,t.jr)(e.vars.palette.grey["500Channel"],.16)),...r},...a,children:[n&&(0,i.jsx)(l.Z,{component:"span",sx:{px:1,top:0,ml:2.5,left:0,py:.25,borderRadius:2,position:"absolute",color:"text.primary",bgcolor:"common.white",transform:"translateY(-50%)",fontSize:e=>e.typography.caption.fontSize,fontWeight:e=>e.typography.fontWeightSemiBold,border:e=>"solid 1px ".concat((0,t.jr)(e.vars.palette.grey["500Channel"],.24)),[t.s4.dark]:{bgcolor:"background.neutral"}},children:n}),o]})}function c(e){let{children:n,sx:r,...l}=e;return(0,i.jsx)(o.Z,{sx:{mt:10,mb:15,gap:5,display:"flex",flexDirection:"column",...r},...l,children:n})}},46235:function(e,n,r){"use strict";r.d(n,{P:function(){return c}});var i=r(57437),l=r(63832),s=r(98489),o=r(31691),t=r(37183),a=r(86281);function c(e){let{children:n,sx:r,...c}=e,d=(0,o.Z)();return(0,i.jsxs)(l.Z,{sx:{py:5,minHeight:240,display:"flex",position:"relative",alignItems:"center",...r},...c,children:[(0,i.jsx)(s.Z,{children:n}),(0,i.jsx)(l.Z,{sx:{...(0,a.v3)({color:"0deg, ".concat((0,a.jr)(d.vars.palette.background.defaultChannel,.9),", ").concat((0,a.jr)(d.vars.palette.background.defaultChannel,.9)),imgUrl:"".concat(t.CONFIG.assetsDir,"/assets/background/background-3-blur.webp")}),top:0,left:0,width:1,height:1,zIndex:-1,position:"absolute",transform:"scaleX(-1)"}})]})}},32805:function(e,n,r){"use strict";r.r(n),r.d(n,{DialogView:function(){return H}});var i=r(57437),l=r(96997),s=r(8974),o=r(39155),t=r(35791),a=r(77584),c=r(46387),d=r(79507),u=r(22643),x=r(77468),h=r(23857);function p(){let e=(0,h.k)();return(0,i.jsxs)("div",{children:[(0,i.jsx)(o.Z,{variant:"outlined",color:"warning",onClick:e.onTrue,children:"Form Dialogs"}),(0,i.jsxs)(t.Z,{open:e.value,onClose:e.onFalse,children:[(0,i.jsx)(d.Z,{children:"Subscribe"}),(0,i.jsxs)(x.Z,{children:[(0,i.jsx)(c.Z,{sx:{mb:3},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),(0,i.jsx)(a.Z,{autoFocus:!0,fullWidth:!0,type:"email",margin:"dense",variant:"outlined",label:"Email address"})]}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(o.Z,{onClick:e.onFalse,variant:"outlined",color:"inherit",children:"Cancel"}),(0,i.jsx)(o.Z,{onClick:e.onFalse,variant:"contained",children:"Subscribe"})]})]})]})}function j(){let e=(0,h.k)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{color:"info",variant:"outlined",onClick:e.onTrue,children:"Open alert dialog"}),(0,i.jsxs)(t.Z,{open:e.value,onClose:e.onFalse,children:[(0,i.jsx)(d.Z,{children:"Use Google's location service?"}),(0,i.jsx)(x.Z,{sx:{color:"text.secondary"},children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(o.Z,{variant:"outlined",onClick:e.onFalse,children:"Disagree"}),(0,i.jsx)(o.Z,{variant:"contained",onClick:e.onFalse,autoFocus:!0,children:"Agree"})]})]})]})}var m=r(2265),f=r(12258);function g(){let e=(0,h.k)(),[n,r]=(0,m.useState)("paper"),l=(0,m.useCallback)(n=>()=>{e.onTrue(),r(n)},[e]),s=(0,m.useRef)(null);return(0,m.useEffect)(()=>{if(e.value){let{current:e}=s;e&&e.focus()}},[e.value]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{variant:"outlined",onClick:l("paper"),sx:{mr:2},children:"scroll=paper"}),(0,i.jsx)(o.Z,{variant:"outlined",onClick:l("body"),children:"scroll=body"}),(0,i.jsxs)(t.Z,{open:e.value,onClose:e.onFalse,scroll:n,children:[(0,i.jsx)(d.Z,{sx:{pb:2},children:"Subscribe"}),(0,i.jsx)(x.Z,{dividers:"paper"===n,children:(0,i.jsx)(f.Z,{ref:s,tabIndex:-1,children:[...Array(50)].map(()=>"Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et.").join("\n")})}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(o.Z,{onClick:e.onFalse,children:"Cancel"}),(0,i.jsx)(o.Z,{variant:"contained",onClick:e.onFalse,children:"Subscribe"})]})]})]})}var Z=r(63832),v=r(42409),b=r(67051),k=r(11741),y=r(27250);let C=["username@gmail.com","user02@gmail.com"];function F(){let e=(0,h.k)(),[n,r]=(0,m.useState)(C[1]),l=(0,m.useCallback)(n=>{e.onFalse(),r(n)},[e]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{variant:"outlined",onClick:e.onTrue,children:"Open simple dialog"}),(0,i.jsxs)(c.Z,{variant:"subtitle1",children:["Selected: ",n]}),(0,i.jsxs)(t.Z,{open:e.value,onClose:()=>l(n),children:[(0,i.jsx)(d.Z,{children:"Set backup account"}),(0,i.jsxs)(Z.Z,{component:"ul",children:[C.map(e=>(0,i.jsx)(Z.Z,{component:"li",sx:{display:"flex"},children:(0,i.jsxs)(k.Z,{onClick:()=>l(e),children:[(0,i.jsx)(v.Z,{sx:{mr:2,color:"info.lighter",bgcolor:"info.darker"},children:(0,i.jsx)(y.Ir,{icon:"solar:user-rounded-bold"})}),(0,i.jsx)(b.Z,{primary:e})]})},e)),(0,i.jsx)(Z.Z,{component:"li",sx:{display:"flex"},children:(0,i.jsxs)(k.Z,{autoFocus:!0,onClick:()=>l("addAccount"),children:[(0,i.jsx)(v.Z,{sx:{mr:2},children:(0,i.jsx)(y.Ir,{icon:"mingcute:add-line"})}),(0,i.jsx)(b.Z,{primary:"Add account"})]})})]})]})]})}var w=r(85147),G=r(33833),S=r(50290),T=r(84851),_=r(41327),I=r(72608);function D(){let e=(0,h.k)(),[n,r]=(0,m.useState)(!0),[l,s]=(0,m.useState)("sm"),a=(0,m.useCallback)(e=>{s(e.target.value)},[]),p=(0,m.useCallback)(e=>{r(e.target.checked)},[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{variant:"outlined",onClick:e.onTrue,children:"Max width dialog"}),(0,i.jsxs)(t.Z,{open:e.value,maxWidth:l,onClose:e.onFalse,fullWidth:n,children:[(0,i.jsx)(d.Z,{children:"Optional sizes"}),(0,i.jsxs)(x.Z,{children:[(0,i.jsx)(c.Z,{sx:{color:"text.secondary"},children:"You can set my maximum width and whether to adapt or not."}),(0,i.jsxs)(Z.Z,{component:"form",noValidate:!0,sx:{margin:"auto",display:"flex",width:"fit-content",flexDirection:"column"},children:[(0,i.jsxs)(_.Z,{sx:{my:3,minWidth:160},children:[(0,i.jsx)(T.Z,{htmlFor:"max-width-label",children:"maxWidth"}),(0,i.jsxs)(G.Z,{autoFocus:!0,value:l,onChange:a,label:"maxWidth",inputProps:{id:"max-width-label"},children:[(0,i.jsx)(S.Z,{value:!1,children:"false"}),(0,i.jsx)(S.Z,{value:"xs",children:"xs"}),(0,i.jsx)(S.Z,{value:"sm",children:"sm"}),(0,i.jsx)(S.Z,{value:"md",children:"md"}),(0,i.jsx)(S.Z,{value:"lg",children:"lg"}),(0,i.jsx)(S.Z,{value:"xl",children:"xl"})]})]}),(0,i.jsx)(I.Z,{control:(0,i.jsx)(w.Z,{checked:n,onChange:p}),label:"Full width",sx:{mt:1}})]})]}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(o.Z,{onClick:e.onFalse,variant:"contained",children:"Close"})})]})]})}var W=r(46235),R=r(58414),N=r(71495),O=r(8350),A=r(71004),E=r(95576);let P=(0,m.forwardRef)((e,n)=>(0,i.jsx)(R.Z,{direction:"up",ref:n,...e}));function z(){let e=(0,h.k)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{variant:"outlined",color:"error",onClick:e.onTrue,children:"Full screen dialogs"}),(0,i.jsxs)(t.Z,{fullScreen:!0,open:e.value,onClose:e.onFalse,TransitionComponent:P,children:[(0,i.jsx)(N.Z,{position:"relative",color:"default",children:(0,i.jsxs)(A.Z,{children:[(0,i.jsx)(E.Z,{color:"inherit",edge:"start",onClick:e.onFalse,children:(0,i.jsx)(y.Ir,{icon:"mingcute:close-line"})}),(0,i.jsx)(c.Z,{variant:"h6",sx:{flex:1,ml:2},children:"Sound"}),(0,i.jsx)(o.Z,{autoFocus:!0,color:"inherit",variant:"contained",onClick:e.onFalse,children:"Save"})]})}),(0,i.jsxs)(Z.Z,{component:"ul",children:[(0,i.jsx)(Z.Z,{component:"li",sx:{display:"flex"},children:(0,i.jsx)(k.Z,{children:(0,i.jsx)(b.Z,{primary:"Phone ringtone",secondary:"Titania"})})}),(0,i.jsx)(O.Z,{}),(0,i.jsx)(Z.Z,{component:"li",sx:{display:"flex"},children:(0,i.jsx)(k.Z,{children:(0,i.jsx)(b.Z,{primary:"Default notification ringtone",secondary:"Tethys"})})})]})]})]})}let L=(0,m.forwardRef)((e,n)=>(0,i.jsx)(R.Z,{direction:"up",ref:n,...e}));function M(){let e=(0,h.k)();return(0,i.jsxs)("div",{children:[(0,i.jsx)(o.Z,{variant:"outlined",color:"success",onClick:e.onTrue,children:"Transitions dialogs"}),(0,i.jsxs)(t.Z,{keepMounted:!0,open:e.value,TransitionComponent:L,onClose:e.onFalse,children:[(0,i.jsx)(d.Z,{children:"Use Google's location service?"}),(0,i.jsx)(x.Z,{sx:{color:"text.secondary"},children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(o.Z,{variant:"outlined",onClick:e.onFalse,children:"Disagree"}),(0,i.jsx)(o.Z,{variant:"contained",onClick:e.onFalse,autoFocus:!0,children:"Agree"})]})]})]})}var U=r(69230);function H(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(W.P,{children:(0,i.jsx)(s.Y,{heading:"Dialog",links:[{name:"Components",href:l.H.components},{name:"Dialog"}],moreLink:["https://mui.com/components/dialogs"]})}),(0,i.jsxs)(U.H,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}},children:[(0,i.jsx)(U.G,{title:"Simple",children:(0,i.jsx)(F,{})}),(0,i.jsx)(U.G,{title:"Alerts",children:(0,i.jsx)(j,{})}),(0,i.jsx)(U.G,{title:"Transitions",children:(0,i.jsx)(M,{})}),(0,i.jsx)(U.G,{title:"Form",children:(0,i.jsx)(p,{})}),(0,i.jsx)(U.G,{title:"Full Screen",children:(0,i.jsx)(z,{})}),(0,i.jsx)(U.G,{title:"Max width dialog",children:(0,i.jsx)(D,{})}),(0,i.jsx)(U.G,{title:"Scrolling content dialogs",children:(0,i.jsx)(g,{})})]})]})}}},function(e){e.O(0,[8331,9271,7648,1021,8489,4591,334,6112,8398,3588,5147,3155,3833,1739,8446,6281,2971,2117,1744],function(){return e(e.s=80871)}),_N_E=e.O()}]);