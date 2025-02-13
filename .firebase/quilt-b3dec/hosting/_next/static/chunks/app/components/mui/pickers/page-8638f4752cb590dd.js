(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9878],{6533:function(e,n,t){Promise.resolve().then(t.bind(t,58631))},8974:function(e,n,t){"use strict";t.d(n,{Y:function(){return d}});var r=t(57437),l=t(63832),i=t(18856),a=t(46387),o=t(80868),s=t(90096);function c(e){let{link:n,activeLast:t,disabled:a}=e,o={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},c=(0,r.jsxs)(r.Fragment,{children:[n.icon&&(0,r.jsx)(l.Z,{component:"span",sx:{mr:1,display:"inherit","& svg, & img":{width:20,height:20}},children:n.icon}),n.name]});return n.href?(0,r.jsx)(i.Z,{component:s.r,href:n.href,sx:o,children:c}):(0,r.jsxs)(l.Z,{sx:o,children:[" ",c," "]})}function d(e){let{links:n,action:t,heading:s,moreLink:d,activeLast:x,slotProps:h,sx:p,...m}=e,f=n[n.length-1].name,j=(0,r.jsx)(a.Z,{variant:"h4",sx:{mb:2,...null==h?void 0:h.heading},children:s}),v=(0,r.jsx)(o.Z,{separator:(0,r.jsx)(u,{}),sx:null==h?void 0:h.breadcrumbs,...m,children:n.map((e,n)=>{var t;return(0,r.jsx)(c,{link:e,activeLast:x,disabled:e.name===f},null!==(t=e.name)&&void 0!==t?t:n)})}),g=(0,r.jsxs)(l.Z,{sx:{flexShrink:0,...null==h?void 0:h.action},children:[" ",t," "]}),b=(0,r.jsx)(l.Z,{component:"ul",children:null==d?void 0:d.map(e=>(0,r.jsx)(l.Z,{component:"li",sx:{display:"flex"},children:(0,r.jsx)(i.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:null==h?void 0:h.moreLink,children:e})},e))});return(0,r.jsxs)(l.Z,{gap:2,display:"flex",flexDirection:"column",sx:p,...m,children:[(0,r.jsxs)(l.Z,{display:"flex",alignItems:"center",children:[(0,r.jsxs)(l.Z,{sx:{flexGrow:1},children:[s&&j,!!n.length&&v]}),t&&g]}),!!d&&b]})}function u(){return(0,r.jsx)(l.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},51277:function(e,n,t){"use strict";t.d(n,{n:function(){return v},w:function(){return i}});var r=t(2265),l=t(36469);function i(e,n){let[t,i]=(0,r.useState)(!1),[a,o]=(0,r.useState)(n),[s,c]=(0,r.useState)(e),d=(0,l.mP)(s,a),u=(0,r.useCallback)(()=>{i(!0)},[]),x=(0,r.useCallback)(()=>{i(!1)},[]);return{startDate:s,endDate:a,onChangeStartDate:(0,r.useCallback)(e=>{c(e)},[]),onChangeEndDate:(0,r.useCallback)(e=>{d&&o(null),o(e)},[d]),open:t,onOpen:u,onClose:x,onReset:(0,r.useCallback)(()=>{c(null),o(null)},[]),selected:!!s&&!!a,error:d,label:(0,l.RF)(s,a,!0),shortLabel:(0,l.RF)(s,a),setStartDate:c,setEndDate:o}}var a=t(57437),o=t(19902),s=t(63582),c=t(39155),d=t(35791),u=t(79507),x=t(22643),h=t(77468),p=t(56326),m=t(26038),f=t(44286),j=t(97605);function v(e){let{open:n,error:t,endDate:r,onClose:l,startDate:i,PaperProps:v,onChangeEndDate:g,variant:b="input",onChangeStartDate:C,title:y="Select date range",...D}=e,Z=(0,j.F)("up","md"),k="calendar"===b;return(0,a.jsxs)(d.Z,{fullWidth:!0,open:n,onClose:l,maxWidth:!k&&"xs",PaperProps:{...v,sx:{...k&&{maxWidth:720},...null==v?void 0:v.sx}},...D,children:[(0,a.jsx)(u.Z,{sx:{pb:2},children:y}),(0,a.jsxs)(h.Z,{sx:{...k&&Z&&{overflow:"unset"}},children:[(0,a.jsx)(s.Z,{justifyContent:"center",spacing:k?3:2,direction:k&&Z?"row":"column",sx:{pt:1},children:k?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:(0,a.jsx)(f.W,{value:i,onChange:C})}),(0,a.jsx)(o.Z,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:(0,a.jsx)(f.W,{value:r,onChange:g})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.M,{label:"Start date",value:i,onChange:C}),(0,a.jsx)(m.M,{label:"End date",value:r,onChange:g})]})}),t&&(0,a.jsx)(p.Z,{error:!0,sx:{px:2},children:"End date must be later than start date"})]}),(0,a.jsxs)(x.Z,{children:[(0,a.jsx)(c.Z,{variant:"outlined",color:"inherit",onClick:l,children:"Cancel"}),(0,a.jsx)(c.Z,{disabled:t,variant:"contained",onClick:l,children:"Apply"})]})]})}},64296:function(e,n,t){"use strict";t.d(n,{O:function(){return i}});var r=t(2265);let l=r.useLayoutEffect;function i(e,n,t,i){let a=(0,r.useRef)(n);l(()=>{a.current=n},[n]),(0,r.useEffect)(()=>{let n=(null==t?void 0:t.current)||window;if(!(n&&n.addEventListener))return;let r=e=>a.current(e);return n.addEventListener(e,r,i),()=>{n.removeEventListener(e,r)}},[e,t,i])}},97605:function(e,n,t){"use strict";t.d(n,{F:function(){return a}});var r=t(2265),l=t(31691),i=t(17150);function a(e,n,t){let a=(0,l.Z)(),o=(0,r.useMemo)(()=>{switch(e){case"up":return a.breakpoints.up(n);case"down":return a.breakpoints.down(n);case"between":return a.breakpoints.between(n,t);case"only":return a.breakpoints.only(n);default:return a.breakpoints.up("xs")}},[a,e,n,t]);return(0,i.default)(o)}},90096:function(e,n,t){"use strict";t.d(n,{r:function(){return r.default}});var r=t(27648)},69230:function(e,n,t){"use strict";t.d(n,{G:function(){return s},H:function(){return c}});var r=t(57437),l=t(63832),i=t(63582),a=t(98489),o=t(86281);function s(e){let{title:n,sx:t,children:a,...s}=e;return(0,r.jsxs)(i.Z,{sx:{px:3,py:6,gap:2,width:1,flexWrap:"wrap",borderRadius:1.5,position:"relative",flexDirection:"row",alignItems:"center",justifyContent:"center",bgcolor:e=>(0,o.jr)(e.vars.palette.grey["500Channel"],.04),boxShadow:e=>"0 0 0 1px ".concat((0,o.jr)(e.vars.palette.grey["500Channel"],.16)),...t},...s,children:[n&&(0,r.jsx)(l.Z,{component:"span",sx:{px:1,top:0,ml:2.5,left:0,py:.25,borderRadius:2,position:"absolute",color:"text.primary",bgcolor:"common.white",transform:"translateY(-50%)",fontSize:e=>e.typography.caption.fontSize,fontWeight:e=>e.typography.fontWeightSemiBold,border:e=>"solid 1px ".concat((0,o.jr)(e.vars.palette.grey["500Channel"],.24)),[o.s4.dark]:{bgcolor:"background.neutral"}},children:n}),a]})}function c(e){let{children:n,sx:t,...l}=e;return(0,r.jsx)(a.Z,{sx:{mt:10,mb:15,gap:5,display:"flex",flexDirection:"column",...t},...l,children:n})}},46235:function(e,n,t){"use strict";t.d(n,{P:function(){return c}});var r=t(57437),l=t(63832),i=t(98489),a=t(31691),o=t(37183),s=t(86281);function c(e){let{children:n,sx:t,...c}=e,d=(0,a.Z)();return(0,r.jsxs)(l.Z,{sx:{py:5,minHeight:240,display:"flex",position:"relative",alignItems:"center",...t},...c,children:[(0,r.jsx)(i.Z,{children:n}),(0,r.jsx)(l.Z,{sx:{...(0,s.v3)({color:"0deg, ".concat((0,s.jr)(d.vars.palette.background.defaultChannel,.9),", ").concat((0,s.jr)(d.vars.palette.background.defaultChannel,.9)),imgUrl:"".concat(o.CONFIG.assetsDir,"/assets/background/background-3-blur.webp")}),top:0,left:0,width:1,height:1,zIndex:-1,position:"absolute",transform:"scaleX(-1)"}})]})}},68696:function(e,n,t){"use strict";t.d(n,{$:function(){return h}});var r=t(57437),l=t(2265),i=t(63832),a=t(18856),o=t(31762),s=t(63582),c=t(98489),d=t(97260),u=t(36137),x=t(64296);function h(e){let{sx:n,data:t,slotProps:h,offsetValue:p=.3,queryClassName:m="scroll__to__view",...f}=e,[j,v]=(0,l.useState)(0),g=(0,l.useCallback)(()=>{let e=window.innerHeight*p,n=window.scrollY+e,t=document.querySelectorAll(".".concat(m)),r=null;t.forEach((e,t)=>{let l=e.offsetTop,i=l+e.clientHeight;n>=l&&n<i&&(r=t)}),v(r)},[p,m]);(0,x.O)("scroll",g);let b=(0,l.useCallback)(e=>{let n=document.querySelectorAll(".".concat(m));if(n&&n.length>e){let t=n[e].offsetTop-160;window.scrollTo({top:t,behavior:"smooth"})}},[m]),C=(0,r.jsx)(s.Z,{component:"nav",sx:{top:80,width:240,flexShrink:0,position:"sticky",display:{xs:"none",md:"flex"},...null==h?void 0:h.nav},children:(0,r.jsx)(i.Z,{component:"ul",sx:{gap:1.5,display:"flex",flexDirection:"column"},children:t.map((e,n)=>(0,r.jsx)(i.Z,{component:"li",sx:{display:"flex"},children:(0,r.jsxs)(a.Z,{underline:"none",onClick:()=>b(n),sx:{cursor:"pointer",typography:"body2",color:"text.disabled",...j===n&&{color:"text.primary",fontWeight:"fontWeightSemiBold"}},children:[n+1," - ",e.name]})},e.name))})}),y=(0,r.jsx)(s.Z,{component:"section",spacing:5,flex:"1 1 auto",sx:{minWidth:0,borderRadius:2,p:{xs:3,md:5},bgcolor:"background.neutral",...null==h?void 0:h.section},children:t.map(e=>(0,r.jsxs)(o.Z,{className:m,children:[(0,r.jsx)(d.Z,{title:e.name}),(0,r.jsx)(u.Z,{children:e.component})]},e.name))});return(0,r.jsx)(c.Z,{...null==h?void 0:h.container,children:(0,r.jsxs)(s.Z,{spacing:5,direction:"row",alignItems:"flex-start",sx:{pt:10,pb:15,...n},...f,children:[C,y]})})}},58631:function(e,n,t){"use strict";t.r(n),t.d(n,{PickerView:function(){return E}});var r=t(57437),l=t(96997),i=t(8974),a=t(71096),o=t.n(a),s=t(2265),c=t(63582),d=t(53610),u=t(26038),x=t(91294),h=t(8927),p=t(86138),m=t(69230);function f(){let[e,n]=(0,s.useState)(o()(new Date));return(0,r.jsxs)(c.Z,{spacing:5,children:[(0,r.jsxs)(m.G,{title:"Basic",children:[(0,r.jsx)(p.$,{label:"For desktop",value:e,minDate:o()("2017-01-01"),onChange:e=>{n(e)},slotProps:{textField:{fullWidth:!0}}}),(0,r.jsx)(h.O,{orientation:"portrait",label:"For mobile",value:e,onChange:e=>{n(e)},slotProps:{textField:{fullWidth:!0}}})]}),(0,r.jsxs)(m.G,{title:"Views playground",children:[(0,r.jsx)(u.M,{views:["year"],label:"Year only",value:e,onChange:e=>{n(e)},slotProps:{textField:{fullWidth:!0}}}),(0,r.jsx)(u.M,{views:["year","month"],label:"Year and Month",minDate:o()("2012-03-01"),maxDate:o()("2023-06-01"),value:e,onChange:e=>{n(e)},slotProps:{textField:{fullWidth:!0}}}),(0,r.jsx)(u.M,{openTo:"year",views:["year","month","day"],label:"Year, month and date",value:e,onChange:e=>{n(e)},slotProps:{textField:{fullWidth:!0}}}),(0,r.jsx)(u.M,{views:["day","month","year"],label:"Invert the order of views",value:e,onChange:e=>{n(e)},slotProps:{textField:{fullWidth:!0}}}),(0,r.jsx)(u.M,{views:["day"],label:"Just date",value:e,onChange:e=>{n(e)},slotProps:{textField:{fullWidth:!0}}})]}),(0,r.jsx)(m.G,{title:"Static mode",children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(x.w,{orientation:"landscape",value:e,onChange:e=>{n(e)}})})})]})}var j=t(58876),v=t(21656),g=t(8358),b=t(47712);function C(){let[e,n]=(0,s.useState)(o()(new Date));return(0,r.jsxs)(c.Z,{spacing:3,children:[(0,r.jsxs)(m.G,{title:"Basic",children:[(0,r.jsx)(j.j,{label:"12 hours",value:e,onChange:e=>{n(e)},slotProps:{textField:{fullWidth:!0}}}),(0,r.jsx)(j.j,{ampm:!1,label:"24 hours",value:e,onChange:e=>{n(e)},slotProps:{textField:{fullWidth:!0}}})]}),(0,r.jsxs)(m.G,{title:"Responsiveness",children:[(0,r.jsx)(v.d,{orientation:"portrait",label:"For mobile",value:e,onChange:e=>{n(e)},slotProps:{textField:{fullWidth:!0}}}),(0,r.jsx)(b.k,{label:"For desktop",value:e,onChange:e=>{n(e)},slotProps:{textField:{fullWidth:!0}}}),(0,r.jsx)(j.j,{value:e,onChange:n,slotProps:{textField:{fullWidth:!0}}})]}),(0,r.jsxs)(m.G,{title:"Static mode",children:[(0,r.jsx)(g.K,{orientation:"portrait",value:e,onChange:e=>{n(e)}}),(0,r.jsx)(g.K,{ampm:!0,orientation:"landscape",openTo:"minutes",value:e,onChange:e=>{n(e)}})]})]})}var y=t(37767),D=t(87804),Z=t(45631);function k(){let[e,n]=(0,s.useState)(o()(new Date)),[t,l]=(0,s.useState)(o()("2018-01-01T00:00:00.000Z"));return(0,r.jsxs)(c.Z,{spacing:5,children:[(0,r.jsx)(m.G,{title:"Basic",children:(0,r.jsx)(y.x,{label:"DateTimePicker",value:e,onChange:n,slotProps:{textField:{fullWidth:!0}}})}),(0,r.jsxs)(m.G,{title:"Responsiveness",children:[(0,r.jsx)(D.W,{value:t,onChange:e=>{l(e)},slotProps:{textField:{fullWidth:!0}}}),(0,r.jsx)(Z.h,{value:t,onChange:e=>{l(e)},slotProps:{textField:{fullWidth:!0}}}),(0,r.jsx)(y.x,{value:t,onChange:e=>{l(e)},slotProps:{textField:{fullWidth:!0}}})]})]})}var w=t(46235),Y=t(18856),M=t(39155),F=t(36469),S=t(51277);function W(){let e=(0,S.w)(o()(),o()()),n=(0,S.w)(o()(new Date("2024/08/08")),null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.Z,{sx:{typography:"body2",mb:3,color:"text.secondary"},children:[(0,r.jsx)("div",{children:"This is the custom component from minimal."}),(0,r.jsx)("div",{children:"You can use more advanced components by MUI."}),(0,r.jsx)(Y.Z,{href:"https://mui.com/x/react-date-pickers/date-range-picker/",children:"https://mui.com/x/react-date-pickers/date-range-picker/"})]}),(0,r.jsxs)(c.Z,{spacing:3,direction:{xs:"column",md:"row"},children:[(0,r.jsxs)(m.G,{title:"Input",sx:{flexDirection:"column"},children:[(0,r.jsx)(M.Z,{variant:"contained",onClick:e.onOpen,children:"Click me!"}),(0,r.jsxs)(c.Z,{sx:{typography:"body2",mt:3},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Start:"})," ",(0,F.Mu)(e.startDate)]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"End:"})," ",(0,F.Mu)(e.endDate)]})]}),(0,r.jsx)(S.n,{open:e.open,startDate:e.startDate,endDate:e.endDate,onChangeStartDate:e.onChangeStartDate,onChangeEndDate:e.onChangeEndDate,onClose:e.onClose,error:e.error})]}),(0,r.jsxs)(m.G,{title:"Calendar",sx:{flexDirection:"column"},children:[(0,r.jsx)(M.Z,{variant:"contained",onClick:n.onOpen,children:"Click me!"}),(0,r.jsxs)(c.Z,{sx:{typography:"body2",mt:3},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Start:"})," ",(0,F.Mu)(n.startDate)]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"End:"})," ",(0,F.Mu)(n.endDate)]})]}),(0,r.jsx)(S.n,{variant:"calendar",open:n.open,startDate:n.startDate,endDate:n.endDate,onChangeStartDate:n.onChangeStartDate,onChangeEndDate:n.onChangeEndDate,onClose:n.onClose,error:n.error})]})]})]})}var P=t(68696);function E(){let e=[{name:"Date",component:(0,r.jsx)(f,{})},{name:"DateTime",component:(0,r.jsx)(k,{})},{name:"Time",component:(0,r.jsx)(C,{})},{name:"Range",component:(0,r.jsx)(W,{})}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w.P,{children:(0,r.jsx)(i.Y,{heading:"Date Time Pickers",links:[{name:"Components",href:l.H.components},{name:"Date Time Pickers"}],moreLink:["https://mui.com/components/pickers","https://mui.com/x/react-date-pickers/getting-started/"]})}),(0,r.jsx)(P.$,{data:e})]})}},36469:function(e,n,t){"use strict";t.d(n,{DY:function(){return m},FY:function(){return b},Je:function(){return h},Lg:function(){return d},Mu:function(){return x},Q:function(){return c},RF:function(){return g},WN:function(){return f},mP:function(){return j},qo:function(){return C},zM:function(){return u}});var r=t(71096),l=t.n(r),i=t(13257),a=t.n(i),o=t(45721),s=t.n(o);l().extend(a()),l().extend(s());let c={dateTime:"DD MMM YYYY h:mm a",date:"DD MMM YYYY",time:"h:mm a",split:{dateTime:"DD/MM/YYYY h:mm a",date:"DD/MM/YYYY"},paramCase:{dateTime:"DD-MM-YYYY h:mm a",date:"DD-MM-YYYY"}};function d(e){return l()(new Date).startOf("day").format(e)}function u(e,n){return e?l()(e).isValid()?l()(e).format(null!=n?n:c.dateTime):"Invalid time value":null}function x(e,n){return e?l()(e).isValid()?l()(e).format(null!=n?n:c.date):"Invalid time value":null}function h(e,n){return e?l()(e).isValid()?l()(e).format(null!=n?n:c.time):"Invalid time value":null}function p(e){return e?l()(e).isValid()?l()(e).valueOf():"Invalid time value":null}function m(e){return e?l()(e).isValid()?l()(e).toNow(!0):"Invalid time value":null}function f(e,n,t){if(!e||!n||!t)return!1;let r=p(e),l=p(n),i=p(t);return!!r&&!!l&&!!i&&r>=l&&r<=i}function j(e,n){return l()(e).isAfter(n)}function v(e,n,t){return!!e&&!!n&&(l()(e).isValid()&&l()(n).isValid()?l()(e).isSame(n,null!=t?t:"year"):"Invalid time value")}function g(e,n,t){let r=l()(e).isValid()&&l()(n).isValid(),i=j(e,n);if(!r||i)return"Invalid time value";let a="".concat(x(e)," - ").concat(x(n));if(t)return a;let o=v(e,n,"year"),s=v(e,n,"month"),c=v(e,n,"day");return o&&!s?a="".concat(x(e,"DD MMM")," - ").concat(x(n)):o&&s&&!c?a="".concat(x(e,"DD")," - ").concat(x(n)):o&&s&&c&&(a="".concat(x(n))),a}function b(e){let{years:n=0,months:t=0,days:r=0,hours:i=0,minutes:a=0,seconds:o=0,milliseconds:s=0}=e;return l()().add(l().duration({years:n,months:t,days:r,hours:i,minutes:a,seconds:o,milliseconds:s})).format()}function C(e){let{years:n=0,months:t=0,days:r=0,hours:i=0,minutes:a=0,seconds:o=0,milliseconds:s=0}=e;return l()().subtract(l().duration({years:n,months:t,days:r,hours:i,minutes:a,seconds:o,milliseconds:s})).format()}}},function(e){e.O(0,[8331,9271,7648,1021,8489,4591,1725,6112,8398,3588,3155,3833,2800,7320,6038,7804,1739,5265,6281,2971,2117,1744],function(){return e(e.s=6533)}),_N_E=e.O()}]);