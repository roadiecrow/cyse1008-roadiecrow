(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5963],{75963:function(e,t,n){Promise.resolve().then(n.bind(n,61694)),Promise.resolve().then(n.bind(n,12488)),Promise.resolve().then(n.bind(n,25460)),Promise.resolve().then(n.bind(n,21621))},8974:function(e,t,n){"use strict";n.d(t,{Y:function(){return d}});var l=n(57437),r=n(63832),o=n(18856),s=n(46387),i=n(80868),a=n(90096);function c(e){let{link:t,activeLast:n,disabled:s}=e,i={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...s&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},c=(0,l.jsxs)(l.Fragment,{children:[t.icon&&(0,l.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg, & img":{width:20,height:20}},children:t.icon}),t.name]});return t.href?(0,l.jsx)(o.Z,{component:a.r,href:t.href,sx:i,children:c}):(0,l.jsxs)(r.Z,{sx:i,children:[" ",c," "]})}function d(e){let{links:t,action:n,heading:a,moreLink:d,activeLast:x,slotProps:h,sx:m,...u}=e,b=t[t.length-1].name,g=(0,l.jsx)(s.Z,{variant:"h4",sx:{mb:2,...null==h?void 0:h.heading},children:a}),j=(0,l.jsx)(i.Z,{separator:(0,l.jsx)(p,{}),sx:null==h?void 0:h.breadcrumbs,...u,children:t.map((e,t)=>{var n;return(0,l.jsx)(c,{link:e,activeLast:x,disabled:e.name===b},null!==(n=e.name)&&void 0!==n?n:t)})}),y=(0,l.jsxs)(r.Z,{sx:{flexShrink:0,...null==h?void 0:h.action},children:[" ",n," "]}),f=(0,l.jsx)(r.Z,{component:"ul",children:null==d?void 0:d.map(e=>(0,l.jsx)(r.Z,{component:"li",sx:{display:"flex"},children:(0,l.jsx)(o.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:null==h?void 0:h.moreLink,children:e})},e))});return(0,l.jsxs)(r.Z,{gap:2,display:"flex",flexDirection:"column",sx:m,...u,children:[(0,l.jsxs)(r.Z,{display:"flex",alignItems:"center",children:[(0,l.jsxs)(r.Z,{sx:{flexGrow:1},children:[a&&g,!!t.length&&j]}),n&&y]}),!!d&&f]})}function p(){return(0,l.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},16370:function(e,t,n){"use strict";n.d(t,{z:function(){return c}});var l=n(57437),r=n(63832),o=n(63582),s=n(46387),i=n(37183),a=n(86281);function c(e){let{sx:t,imgUrl:n,action:c,filled:d,slotProps:p,description:x,title:h="No data",...m}=e;return(0,l.jsxs)(o.Z,{flexGrow:1,alignItems:"center",justifyContent:"center",sx:{px:3,height:1,...d&&{borderRadius:2,bgcolor:e=>(0,a.jr)(e.vars.palette.grey["500Channel"],.04),border:e=>"dashed 1px ".concat((0,a.jr)(e.vars.palette.grey["500Channel"],.08))},...t},...m,children:[(0,l.jsx)(r.Z,{component:"img",alt:"empty content",src:null!=n?n:"".concat(i.CONFIG.assetsDir,"/assets/icons/empty/ic-content.svg"),sx:{width:1,maxWidth:160,...null==p?void 0:p.img}}),h&&(0,l.jsx)(s.Z,{variant:"h6",component:"span",sx:{mt:1,textAlign:"center",...null==p?void 0:p.title,color:"text.disabled"},children:h}),x&&(0,l.jsx)(s.Z,{variant:"caption",sx:{mt:1,textAlign:"center",color:"text.disabled",...null==p?void 0:p.description},children:x}),c&&c]})}},71180:function(e,t,n){"use strict";n.d(t,{eE:function(){return o},Ai:function(){return c},sB:function(){return a}});var l=n(57437),r=n(63832);function o(e){let{label:t,children:n,isShow:o,sx:s}=e;return o?(0,l.jsxs)(r.Z,{gap:1,display:"flex",sx:{p:1,borderRadius:1,overflow:"hidden",border:e=>"dashed 1px ".concat(e.vars.palette.divider),...s},children:[(0,l.jsx)(r.Z,{component:"span",sx:{height:24,lineHeight:"24px",fontSize:e=>e.typography.subtitle2.fontSize,fontWeight:e=>e.typography.subtitle2.fontWeight},children:t}),(0,l.jsx)(r.Z,{gap:1,display:"flex",flexWrap:"wrap",children:n})]}):null}var s=n(39155),i=n(27250);let a={size:"small",variant:"soft"};function c(e){let{totalResults:t,onReset:n,sx:o,children:a}=e;return(0,l.jsxs)(r.Z,{sx:o,children:[(0,l.jsxs)(r.Z,{sx:{mb:1.5,typography:"body2"},children:[(0,l.jsx)("strong",{children:t}),(0,l.jsx)(r.Z,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),(0,l.jsxs)(r.Z,{flexGrow:1,gap:1,display:"flex",flexWrap:"wrap",alignItems:"center",children:[a,(0,l.jsx)(s.Z,{color:"error",onClick:n,startIcon:(0,l.jsx)(i.Ir,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}},75911:function(e,t,n){"use strict";n.d(t,{U:function(){return v}});var l=n(57437);n(58533);var r=n(2265),o=n(91305),s=n(50051),i=n(9527),a=n(18856),c=n(26755),d=n(90096),p=n(2916),x=n(26727),h=n(16210),m=n(86281);let u={root:"nml__markdown__root",content:{pre:"nml__editor__content__pre",codeInline:"nml__editor__content__codeInline",codeBlock:"nml__editor__content__codeBlock",image:"nml__editor__content__image",link:"nml__editor__content__link"}},b=(0,h.ZP)(x.U)(e=>{let{theme:t}=e;return{"> * + *":{marginTop:0,marginBottom:"0.75em"},h1:{...t.typography.h1,marginTop:40,marginBottom:8},h2:{...t.typography.h2,marginTop:40,marginBottom:8},h3:{...t.typography.h3,marginTop:24,marginBottom:8},h4:{...t.typography.h4,marginTop:24,marginBottom:8},h5:{...t.typography.h5,marginTop:24,marginBottom:8},h6:{...t.typography.h6,marginTop:24,marginBottom:8},p:{...t.typography.body1,marginBottom:"1.25rem"},hr:{flexShrink:0,borderWidth:0,margin:"2em 0",msFlexNegative:0,WebkitFlexShrink:0,borderStyle:"solid",borderBottomWidth:"thin",borderColor:t.vars.palette.divider},["& .".concat(u.content.image)]:{width:"100%",height:"auto",maxWidth:"100%",margin:"auto auto 1.25em"},"& ul":{listStyleType:"disc"},"& ul, & ol":{paddingLeft:16,"& > li":{lineHeight:2,"& > p":{margin:0,display:"inline-block"}}},"& blockquote":{lineHeight:1.5,fontSize:"1.5em",margin:"24px auto",position:"relative",fontFamily:"Georgia, serif",padding:t.spacing(3,3,3,8),color:t.vars.palette.text.secondary,borderLeft:"solid 8px ".concat((0,m.jr)(t.vars.palette.grey["500Channel"],.08)),[t.breakpoints.up("md")]:{width:"100%",maxWidth:640},"& p":{margin:0,fontSize:"inherit",fontFamily:"inherit"},"&::before":{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:t.vars.palette.text.disabled}},["& .".concat(u.content.codeInline)]:{padding:t.spacing(.25,.5),color:t.vars.palette.text.secondary,fontSize:t.typography.body2.fontSize,borderRadius:t.shape.borderRadius/2,backgroundColor:(0,m.jr)(t.vars.palette.grey["500Channel"],.2)},["& .".concat(u.content.codeBlock)]:{position:"relative","& pre":{overflowX:"auto",padding:t.spacing(3),color:t.vars.palette.common.white,borderRadius:t.shape.borderRadius,fontFamily:"'JetBrainsMono', monospace",backgroundColor:t.vars.palette.grey[900],"& code":{fontSize:t.typography.body2.fontSize},[m.s4.dark]:{backgroundColor:t.vars.palette.grey[800]}}},table:{width:"100%",borderCollapse:"collapse",border:"1px solid ".concat(t.vars.palette.divider),"th, td":{padding:t.spacing(1),border:"1px solid ".concat(t.vars.palette.divider)},"tbody tr:nth-of-type(odd)":{backgroundColor:t.vars.palette.background.neutral}},input:{"&[type=checkbox]":{position:"relative",cursor:"pointer","&:before":{content:'""',top:-2,left:-2,width:17,height:17,borderRadius:3,position:"absolute",backgroundColor:t.vars.palette.grey[300],[m.s4.dark]:{backgroundColor:t.vars.palette.grey[700]}},"&:checked":{"&:before":{backgroundColor:t.vars.palette.primary.main},"&:after":{content:'""',top:1,left:5,width:4,height:9,position:"absolute",transform:"rotate(45deg)",msTransform:"rotate(45deg)",WebkitTransform:"rotate(45deg)",border:"solid ".concat(t.vars.palette.common.white),borderWidth:"0 2px 2px 0"}}}}}});var g=n(45464);let j=["pre","code"],y=new g.Z({codeBlockStyle:"fenced",fence:"```"}),f=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","circle","cite","clipPath","code","col","colgroup","command","content","data","datalist","dd","defs","del","details","dfn","dialog","dir","div","dl","dt","element","ellipse","em","embed","fieldset","figcaption","figure","font","footer","foreignObject","form","frame","frameset","g","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","line","linearGradient","link","listing","main","map","mark","marquee","mask","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","path","pattern","picture","plaintext","polygon","polyline","pre","progress","q","radialGradient","rb","rbc","rect","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","stop","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","text","textarea","tfoot","th","thead","time","title","tr","track","tspan","tt","u","ul","var","video","wbr","xmp"].filter(e=>!j.includes(e));function v(e){let{children:t,sx:n,...o}=e,s=(0,r.useMemo)(()=>{var e,n;return(e="".concat(t),[/^#+\s/,/^(\*|-|\d+\.)\s/,/^```/,/^\|/,/^(\s*)[*+-] [^\r\n]+/,/^(\s*)\d+\. [^\r\n]+/,/!\[.*?\]\(.*?\)/,/\[.*?\]\(.*?\)/].some(t=>t.test(e)))?t:(n="".concat(t).trim(),y.turndown(n))},[t]);return(0,l.jsx)(b,{children:s,components:k,rehypePlugins:Z,className:u.root,sx:n,...o})}y.addRule("keep",{filter:f,replacement(e,t){let{isBlock:n,outerHTML:l}=t;return t&&n?"\n\n".concat(l,"\n\n"):l}});let Z=[s.Z,i.Z,[o.Z,{singleTilde:!1}]],k={img:e=>{let{...t}=e;return(0,l.jsx)(p.E,{ratio:"16/9",className:u.content.image,sx:{borderRadius:2},...t})},a:e=>{let{href:t,children:n,...r}=e,o=(0,c.Bm)(t)?{target:"_blank",rel:"noopener"}:{component:d.r};return(0,l.jsx)(a.Z,{...o,href:t,className:u.content.link,...r,children:n})},pre:e=>{let{children:t}=e;return(0,l.jsx)("div",{className:u.content.codeBlock,children:(0,l.jsx)("pre",{children:t})})},code(e){let{className:t,children:n,...r}=e;return/language-(\w+)/.exec(t||"")?(0,l.jsx)("code",{...r,className:t,children:n}):(0,l.jsx)("code",{...r,className:u.content.codeInline,children:n})}}},90434:function(e,t,n){"use strict";n.d(t,{v:function(){return o}});var l=n(2265),r=n(65570);function o(e){let[t,n]=(0,l.useState)(e),o=!(0,r.Xy)(t,e),s=(0,l.useCallback)(e=>{n(t=>({...t,...e}))},[]),i=(0,l.useCallback)((e,t)=>{s({[e]:t})},[s]),a=(0,l.useCallback)(()=>{n(e)},[e]);return(0,l.useMemo)(()=>({state:t,setState:s,setField:i,onResetState:a,canReset:o}),[o,a,i,s,t])}},41473:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var l=n(2265);function r(e){let[t,n]=(0,l.useState)(e),r=(0,l.useCallback)((e,t)=>{n(t)},[]);return(0,l.useMemo)(()=>({value:t,setValue:n,onChange:r}),[r,t])}},47352:function(e,t,n){"use strict";n.d(t,{cv:function(){return l.DashboardContent}});var l=n(40355);n(11211)},9704:function(e,t,n){"use strict";n.d(t,{j:function(){return T}});var l=n(57437),r=n(2265),o=n(31229),s=n(13590),i=n(29501),a=n(63832),c=n(89902),d=n(31762),p=n(63582),x=n(19902),h=n(85147),m=n(8350),u=n(85422),b=n(97260),g=n(46387),j=n(6809),y=n(23996),f=n(72608),v=n(96997),Z=n(43351),k=n(72407),C=n(43030),w=n(27250),S=n(13611);let I=o.z.object({title:o.z.string().min(1,{message:"Title is required!"}),content:o.z.string().min(1,{message:"Content is required!"}),employmentTypes:o.z.string().array().nonempty({message:"Choose at least one option!"}),role:S.YT.objectOrNull({message:{required_error:"Role is required!"}}),skills:o.z.string().array().nonempty({message:"Choose at least one option!"}),workingSchedule:o.z.string().array().nonempty({message:"Choose at least one option!"}),locations:o.z.string().array().nonempty({message:"Choose at least one option!"}),expiredDate:S.YT.date({message:{required_error:"Expired date is required!"}}),salary:o.z.object({price:o.z.number().min(1,{message:"Price is required!"}),type:o.z.string(),negotiable:o.z.boolean()}),benefits:o.z.string().array().nonempty({message:"Choose at least one option!"}),experience:o.z.string()});function T(e){let{currentJob:t}=e,n=(0,Z.tv)(),o=(0,r.useMemo)(()=>({title:(null==t?void 0:t.title)||"",content:(null==t?void 0:t.content)||"",employmentTypes:(null==t?void 0:t.employmentTypes)||[],experience:(null==t?void 0:t.experience)||"1 year exp",role:(null==t?void 0:t.role)||k.YX[1],skills:(null==t?void 0:t.skills)||[],workingSchedule:(null==t?void 0:t.workingSchedule)||[],locations:(null==t?void 0:t.locations)||[],expiredDate:(null==t?void 0:t.expiredDate)||null,salary:(null==t?void 0:t.salary)||{type:"Hourly",price:0,negotiable:!1},benefits:(null==t?void 0:t.benefits)||[]}),[t]),T=(0,i.cI)({mode:"all",resolver:(0,s.F)(I),defaultValues:o}),{reset:E,control:_,handleSubmit:z,formState:{isSubmitting:D}}=T;(0,r.useEffect)(()=>{t&&E(o)},[t,o,E]);let P=z(async e=>{try{await new Promise(e=>setTimeout(e,500)),E(),C.Am.success(t?"Update success!":"Create success!"),n.push(v.H.dashboard.job.root),console.info("DATA",e)}catch(e){console.error(e)}}),R=(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(b.Z,{title:"Details",subheader:"Title, short description, image...",sx:{mb:3}}),(0,l.jsx)(m.Z,{}),(0,l.jsxs)(p.Z,{spacing:3,sx:{p:3},children:[(0,l.jsxs)(p.Z,{spacing:1.5,children:[(0,l.jsx)(g.Z,{variant:"subtitle2",children:"Title"}),(0,l.jsx)(S.gN.Text,{name:"title",placeholder:"Ex: Software Engineer..."})]}),(0,l.jsxs)(p.Z,{spacing:1.5,children:[(0,l.jsx)(g.Z,{variant:"subtitle2",children:"Content"}),(0,l.jsx)(S.gN.Editor,{name:"content",sx:{maxHeight:480}})]})]})]}),B=(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(b.Z,{title:"Properties",subheader:"Additional functions and attributes...",sx:{mb:3}}),(0,l.jsx)(m.Z,{}),(0,l.jsxs)(p.Z,{spacing:3,sx:{p:3},children:[(0,l.jsxs)(p.Z,{spacing:1,children:[(0,l.jsx)(g.Z,{variant:"subtitle2",children:"Employment type"}),(0,l.jsx)(S.gN.MultiCheckbox,{row:!0,name:"employmentTypes",options:k.yC,sx:{gap:4}})]}),(0,l.jsxs)(p.Z,{spacing:1,children:[(0,l.jsx)(g.Z,{variant:"subtitle2",children:"Experience"}),(0,l.jsx)(S.gN.RadioGroup,{row:!0,name:"experience",options:k.J$,sx:{gap:4}})]}),(0,l.jsxs)(p.Z,{spacing:1.5,children:[(0,l.jsx)(g.Z,{variant:"subtitle2",children:"Role"}),(0,l.jsx)(S.gN.Autocomplete,{name:"role",autoHighlight:!0,options:k.YX.map(e=>e),getOptionLabel:e=>e,renderOption:(e,t)=>(0,r.createElement)("li",{...e,key:t},t)})]}),(0,l.jsxs)(p.Z,{spacing:1.5,children:[(0,l.jsx)(g.Z,{variant:"subtitle2",children:"Skills"}),(0,l.jsx)(S.gN.Autocomplete,{name:"skills",placeholder:"+ Skills",multiple:!0,disableCloseOnSelect:!0,options:k.w_.map(e=>e),getOptionLabel:e=>e,renderOption:(e,t)=>(0,r.createElement)("li",{...e,key:t},t),renderTags:(e,t)=>e.map((e,n)=>(0,r.createElement)(c.Z,{...t({index:n}),key:e,label:e,size:"small",color:"info",variant:"soft"}))})]}),(0,l.jsxs)(p.Z,{spacing:1.5,children:[(0,l.jsx)(g.Z,{variant:"subtitle2",children:"Working schedule"}),(0,l.jsx)(S.gN.Autocomplete,{name:"workingSchedule",placeholder:"+ Schedule",multiple:!0,disableCloseOnSelect:!0,options:k.Gn.map(e=>e),getOptionLabel:e=>e,renderOption:(e,t)=>(0,r.createElement)("li",{...e,key:t},t),renderTags:(e,t)=>e.map((e,n)=>(0,r.createElement)(c.Z,{...t({index:n}),key:e,label:e,size:"small",color:"info",variant:"soft"}))})]}),(0,l.jsxs)(p.Z,{spacing:1.5,children:[(0,l.jsx)(g.Z,{variant:"subtitle2",children:"Locations"}),(0,l.jsx)(S.gN.CountrySelect,{multiple:!0,name:"locations",placeholder:"+ Locations"})]}),(0,l.jsxs)(p.Z,{spacing:1.5,children:[(0,l.jsx)(g.Z,{variant:"subtitle2",children:"Expired"}),(0,l.jsx)(S.gN.DatePicker,{name:"expiredDate"})]}),(0,l.jsxs)(p.Z,{spacing:2,children:[(0,l.jsx)(g.Z,{variant:"subtitle2",children:"Salary"}),(0,l.jsx)(i.Qr,{name:"salary.type",control:_,render:e=>{let{field:t}=e;return(0,l.jsx)(a.Z,{gap:2,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",children:[{label:"Hourly",icon:(0,l.jsx)(w.Ir,{icon:"solar:clock-circle-bold",width:32,sx:{mb:2}})},{label:"Custom",icon:(0,l.jsx)(w.Ir,{icon:"solar:wad-of-money-bold",width:32,sx:{mb:2}})}].map(e=>(0,l.jsxs)(x.Z,{component:u.Z,variant:"outlined",onClick:()=>t.onChange(e.label),sx:{p:2.5,borderRadius:1,typography:"subtitle2",flexDirection:"column",...e.label===t.value&&{borderWidth:2,borderColor:"text.primary"}},children:[e.icon,e.label]},e.label))})}}),(0,l.jsx)(S.gN.Text,{name:"salary.price",placeholder:"0.00",type:"number",InputProps:{startAdornment:(0,l.jsx)(y.Z,{position:"start",children:(0,l.jsx)(a.Z,{sx:{typography:"subtitle2",color:"text.disabled"},children:"$"})})}}),(0,l.jsx)(S.gN.Switch,{name:"salary.negotiable",label:"Salary is negotiable"})]}),(0,l.jsxs)(p.Z,{spacing:1,children:[(0,l.jsx)(g.Z,{variant:"subtitle2",children:"Benefits"}),(0,l.jsx)(S.gN.MultiCheckbox,{name:"benefits",options:k.jK,sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}})]})]})]}),N=(0,l.jsxs)(a.Z,{display:"flex",alignItems:"center",flexWrap:"wrap",children:[(0,l.jsx)(f.Z,{control:(0,l.jsx)(h.Z,{defaultChecked:!0,inputProps:{id:"publish-switch"}}),label:"Publish",sx:{flexGrow:1,pl:3}}),(0,l.jsx)(j.Z,{type:"submit",variant:"contained",size:"large",loading:D,sx:{ml:2},children:t?"Save changes":"Create job"})]});return(0,l.jsx)(S.l0,{methods:T,onSubmit:P,children:(0,l.jsxs)(p.Z,{spacing:{xs:3,md:5},sx:{mx:"auto",maxWidth:{xs:720,xl:880}},children:[R,B,N]})})}},61694:function(e,t,n){"use strict";n.r(t),n.d(t,{JobCreateView:function(){return a}});var l=n(57437),r=n(96997),o=n(47352),s=n(8974),i=n(9704);function a(){return(0,l.jsxs)(o.cv,{children:[(0,l.jsx)(s.Y,{heading:"Create a new job",links:[{name:"Dashboard",href:r.H.dashboard.root},{name:"Job",href:r.H.dashboard.job.root},{name:"New job"}],sx:{mb:{xs:3,md:5}}}),(0,l.jsx)(i.j,{})]})}},12488:function(e,t,n){"use strict";n.r(t),n.d(t,{JobDetailsView:function(){return O}});var l=n(57437),r=n(2265),o=n(10207),s=n(35286),i=n(96997),a=n(41473),c=n(47352),d=n(72407),p=n(9818),x=n(63832),h=n(63582),m=n(39155),u=n(71969),b=n(35108),g=n(50290),j=n(95576),y=n(6809),f=n(90096),v=n(27250),Z=n(92548);function k(e){let{publish:t,backLink:n,editLink:r,liveLink:o,publishOptions:s,onChangePublish:i,sx:a,...c}=e,d=(0,Z.S)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(h.Z,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...a},...c,children:[(0,l.jsx)(m.Z,{component:f.r,href:n,startIcon:(0,l.jsx)(v.Ir,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),(0,l.jsx)(x.Z,{sx:{flexGrow:1}}),"published"===t&&(0,l.jsx)(u.Z,{title:"Go Live",children:(0,l.jsx)(j.Z,{component:f.r,href:o,children:(0,l.jsx)(v.Ir,{icon:"eva:external-link-fill"})})}),(0,l.jsx)(u.Z,{title:"Edit",children:(0,l.jsx)(j.Z,{component:f.r,href:r,children:(0,l.jsx)(v.Ir,{icon:"solar:pen-bold"})})}),(0,l.jsx)(y.Z,{color:"inherit",variant:"contained",loading:!t,loadingIndicator:"Loading…",endIcon:(0,l.jsx)(v.Ir,{icon:"eva:arrow-ios-downward-fill"}),onClick:d.onOpen,sx:{textTransform:"capitalize"},children:t})]}),(0,l.jsx)(Z.m,{open:d.open,anchorEl:d.anchorEl,onClose:d.onClose,children:(0,l.jsx)(b.Z,{children:s.map(e=>(0,l.jsxs)(g.Z,{selected:e.value===t,onClick:()=>{d.onClose(),i(e.value)},children:["published"===e.value&&(0,l.jsx)(v.Ir,{icon:"eva:cloud-upload-fill"}),"draft"===e.value&&(0,l.jsx)(v.Ir,{icon:"solar:file-text-bold"}),e.label]},e.value))})})]})}var C=n(89902),w=n(31762),S=n(19902),I=n(42409),T=n(93193),E=n(46387),_=n(67051),z=n(36469),D=n(90395),P=n(75911);function R(e){let{job:t}=e,n=(0,l.jsxs)(w.Z,{sx:{p:3,gap:3,display:"flex",flexDirection:"column"},children:[(0,l.jsx)(E.Z,{variant:"h4",children:null==t?void 0:t.title}),(0,l.jsx)(P.U,{children:null==t?void 0:t.content}),(0,l.jsxs)(h.Z,{spacing:2,children:[(0,l.jsx)(E.Z,{variant:"h6",children:"Skills"}),(0,l.jsx)(h.Z,{direction:"row",alignItems:"center",spacing:1,children:null==t?void 0:t.skills.map(e=>(0,l.jsx)(C.Z,{label:e,variant:"soft"},e))})]}),(0,l.jsxs)(h.Z,{spacing:2,children:[(0,l.jsx)(E.Z,{variant:"h6",children:"Benefits"}),(0,l.jsx)(h.Z,{direction:"row",alignItems:"center",spacing:1,children:null==t?void 0:t.benefits.map(e=>(0,l.jsx)(C.Z,{label:e,variant:"soft"},e))})]})]}),r=(0,l.jsx)(w.Z,{sx:{p:3,gap:2,display:"flex",flexDirection:"column"},children:[{label:"Date posted",value:(0,z.Mu)(null==t?void 0:t.createdAt),icon:(0,l.jsx)(v.Ir,{icon:"solar:calendar-date-bold"})},{label:"Expiration date",value:(0,z.Mu)(null==t?void 0:t.expiredDate),icon:(0,l.jsx)(v.Ir,{icon:"solar:calendar-date-bold"})},{label:"Employment type",value:null==t?void 0:t.employmentTypes,icon:(0,l.jsx)(v.Ir,{icon:"solar:clock-circle-bold"})},{label:"Offered salary",value:(null==t?void 0:t.salary.negotiable)?"Negotiable":(0,D.e_)(null==t?void 0:t.salary.price),icon:(0,l.jsx)(v.Ir,{icon:"solar:wad-of-money-bold"})},{label:"Experience",value:null==t?void 0:t.experience,icon:(0,l.jsx)(v.Ir,{icon:"carbon:skill-level-basic"})}].map(e=>(0,l.jsxs)(h.Z,{spacing:1.5,direction:"row",children:[e.icon,(0,l.jsx)(_.Z,{primary:e.label,secondary:e.value,primaryTypographyProps:{typography:"body2",color:"text.secondary",mb:.5},secondaryTypographyProps:{component:"span",color:"text.primary",typography:"subtitle2"}})]},e.label))}),o=(0,l.jsxs)(S.Z,{variant:"outlined",sx:{p:3,mt:3,gap:2,borderRadius:2,display:"flex"},children:[(0,l.jsx)(I.Z,{alt:null==t?void 0:t.company.name,src:null==t?void 0:t.company.logo,variant:"rounded",sx:{width:64,height:64}}),(0,l.jsxs)(h.Z,{spacing:1,children:[(0,l.jsx)(E.Z,{variant:"subtitle1",children:null==t?void 0:t.company.name}),(0,l.jsx)(E.Z,{variant:"body2",children:null==t?void 0:t.company.fullAddress}),(0,l.jsx)(E.Z,{variant:"body2",children:null==t?void 0:t.company.phoneNumber})]})]});return(0,l.jsxs)(T.Z,{container:!0,spacing:3,children:[(0,l.jsx)(T.Z,{xs:12,md:8,children:n}),(0,l.jsxs)(T.Z,{xs:12,md:4,children:[r,o]})]})}var B=n(62709),N=n(86281);function L(e){let{candidates:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:t.map(e=>(0,l.jsxs)(w.Z,{sx:{p:3,gap:2,display:"flex"},children:[(0,l.jsx)(j.Z,{sx:{position:"absolute",top:8,right:8},children:(0,l.jsx)(v.Ir,{icon:"eva:more-vertical-fill"})}),(0,l.jsx)(I.Z,{alt:e.name,src:e.avatarUrl,sx:{width:48,height:48}}),(0,l.jsxs)(h.Z,{spacing:2,children:[(0,l.jsx)(_.Z,{primary:e.name,secondary:e.role,secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),(0,l.jsxs)(h.Z,{spacing:1,direction:"row",children:[(0,l.jsx)(j.Z,{size:"small",color:"error",sx:{borderRadius:1,bgcolor:e=>(0,N.jr)(e.vars.palette.error.mainChannel,.08),"&:hover":{bgcolor:e=>(0,N.jr)(e.vars.palette.error.mainChannel,.16)}},children:(0,l.jsx)(v.Ir,{width:18,icon:"solar:phone-bold"})}),(0,l.jsx)(j.Z,{size:"small",color:"info",sx:{borderRadius:1,bgcolor:e=>(0,N.jr)(e.vars.palette.info.mainChannel,.08),"&:hover":{bgcolor:e=>(0,N.jr)(e.vars.palette.info.mainChannel,.16)}},children:(0,l.jsx)(v.Ir,{width:18,icon:"solar:chat-round-dots-bold"})}),(0,l.jsx)(j.Z,{size:"small",color:"primary",sx:{borderRadius:1,bgcolor:e=>(0,N.jr)(e.vars.palette.primary.mainChannel,.08),"&:hover":{bgcolor:e=>(0,N.jr)(e.vars.palette.primary.mainChannel,.16)}},children:(0,l.jsx)(v.Ir,{width:18,icon:"fluent:mail-24-filled"})}),(0,l.jsx)(u.Z,{title:"Download CV",children:(0,l.jsx)(j.Z,{size:"small",color:"secondary",sx:{borderRadius:1,bgcolor:e=>(0,N.jr)(e.vars.palette.secondary.mainChannel,.08),"&:hover":{bgcolor:e=>(0,N.jr)(e.vars.palette.secondary.mainChannel,.16)}},children:(0,l.jsx)(v.Ir,{width:18,icon:"eva:cloud-download-fill"})})})]})]})]},e.id))}),(0,l.jsx)(B.Z,{count:10,sx:{mt:{xs:5,md:8},mx:"auto"}})]})}function O(e){var t;let{job:n}=e,x=(0,a.Y)("content"),[h,m]=(0,r.useState)(null==n?void 0:n.publish),u=(0,r.useCallback)(e=>{m(e)},[]),b=(0,l.jsx)(s.Z,{value:x.value,onChange:x.onChange,sx:{mb:{xs:3,md:5}},children:d.Ux.map(e=>(0,l.jsx)(o.Z,{iconPosition:"end",value:e.value,label:e.label,icon:"candidates"===e.value?(0,l.jsx)(p.__,{variant:"filled",children:null==n?void 0:n.candidates.length}):""},e.value))});return(0,l.jsxs)(c.cv,{children:[(0,l.jsx)(k,{backLink:i.H.dashboard.job.root,editLink:i.H.dashboard.job.edit("".concat(null==n?void 0:n.id)),liveLink:"#",publish:h||"",onChangePublish:u,publishOptions:d.D5}),b,"content"===x.value&&(0,l.jsx)(R,{job:n}),"candidates"===x.value&&(0,l.jsx)(L,{candidates:null!==(t=null==n?void 0:n.candidates)&&void 0!==t?t:[]})]})}},25460:function(e,t,n){"use strict";n.r(t),n.d(t,{JobEditView:function(){return a}});var l=n(57437),r=n(96997),o=n(47352),s=n(8974),i=n(9704);function a(e){let{job:t}=e;return(0,l.jsxs)(o.cv,{children:[(0,l.jsx)(s.Y,{heading:"Edit",links:[{name:"Dashboard",href:r.H.dashboard.root},{name:"Job",href:r.H.dashboard.job.root},{name:null==t?void 0:t.title}],sx:{mb:{xs:3,md:5}}}),(0,l.jsx)(i.j,{currentJob:t})]})}},21621:function(e,t,n){"use strict";n.r(t),n.d(t,{JobListView:function(){return el}});var l=n(57437),r=n(2265),o=n(63582),s=n(39155),i=n(96997),a=n(90096),c=n(23857),d=n(90434),p=n(65570),x=n(47352),h=n(72407),m=n(27250),u=n(16370),b=n(8974),g=n(63832),j=n(62709),y=n(60202),f=n(43351),v=n(18856),Z=n(31762),k=n(42409),C=n(8350),w=n(35108),S=n(50290),I=n(95576),T=n(46387),E=n(67051),_=n(36469),z=n(90395),D=n(92548);function P(e){let{job:t,onView:n,onEdit:r,onDelete:s}=e,c=(0,D.S)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(Z.Z,{children:[(0,l.jsx)(I.Z,{onClick:c.onOpen,sx:{position:"absolute",top:8,right:8},children:(0,l.jsx)(m.Ir,{icon:"eva:more-vertical-fill"})}),(0,l.jsxs)(o.Z,{sx:{p:3,pb:2},children:[(0,l.jsx)(k.Z,{alt:t.company.name,src:t.company.logo,variant:"rounded",sx:{width:48,height:48,mb:2}}),(0,l.jsx)(E.Z,{sx:{mb:1},primary:(0,l.jsx)(v.Z,{component:a.r,href:i.H.dashboard.job.details(t.id),color:"inherit",children:t.title}),secondary:"Posted date: ".concat((0,_.Mu)(t.createdAt)),primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{mt:1,component:"span",typography:"caption",color:"text.disabled"}}),(0,l.jsxs)(o.Z,{spacing:.5,direction:"row",alignItems:"center",sx:{color:"primary.main",typography:"caption"},children:[(0,l.jsx)(m.Ir,{width:16,icon:"solar:users-group-rounded-bold"}),t.candidates.length," candidates"]})]}),(0,l.jsx)(C.Z,{sx:{borderStyle:"dashed"}}),(0,l.jsx)(g.Z,{rowGap:1.5,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{p:3},children:[{label:t.experience,icon:(0,l.jsx)(m.Ir,{width:16,icon:"carbon:skill-level-basic",sx:{flexShrink:0}})},{label:t.employmentTypes.join(", "),icon:(0,l.jsx)(m.Ir,{width:16,icon:"solar:clock-circle-bold",sx:{flexShrink:0}})},{label:t.salary.negotiable?"Negotiable":(0,z.e_)(t.salary.price),icon:(0,l.jsx)(m.Ir,{width:16,icon:"solar:wad-of-money-bold",sx:{flexShrink:0}})},{label:t.role,icon:(0,l.jsx)(m.Ir,{width:16,icon:"solar:user-rounded-bold",sx:{flexShrink:0}})}].map(e=>(0,l.jsxs)(o.Z,{spacing:.5,flexShrink:0,direction:"row",alignItems:"center",sx:{color:"text.disabled",minWidth:0},children:[e.icon,(0,l.jsx)(T.Z,{variant:"caption",noWrap:!0,children:e.label})]},e.label))})]}),(0,l.jsx)(D.m,{open:c.open,anchorEl:c.anchorEl,onClose:c.onClose,slotProps:{arrow:{placement:"right-top"}},children:(0,l.jsxs)(w.Z,{children:[(0,l.jsxs)(S.Z,{onClick:()=>{c.onClose(),n()},children:[(0,l.jsx)(m.Ir,{icon:"solar:eye-bold"}),"View"]}),(0,l.jsxs)(S.Z,{onClick:()=>{c.onClose(),r()},children:[(0,l.jsx)(m.Ir,{icon:"solar:pen-bold"}),"Edit"]}),(0,l.jsxs)(S.Z,{onClick:()=>{c.onClose(),s()},sx:{color:"error.main"},children:[(0,l.jsx)(m.Ir,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})})]})}function R(e){let{jobs:t}=e,n=(0,f.tv)(),o=(0,r.useCallback)(e=>{n.push(i.H.dashboard.job.details(e))},[n]),s=(0,r.useCallback)(e=>{n.push(i.H.dashboard.job.edit(e))},[n]),a=(0,r.useCallback)(e=>{console.info("DELETE",e)},[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:t.map(e=>(0,l.jsx)(P,{job:e,onView:()=>o(e.id),onEdit:()=>s(e.id),onDelete:()=>a(e.id)},e.id))}),t.length>8&&(0,l.jsx)(j.Z,{count:8,sx:{mt:{xs:8,md:8},["& .".concat(y.Z.ul)]:{justifyContent:"center"}}})]})}function B(e){let{sort:t,onSort:n,sortOptions:r}=e,o=(0,D.S)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.Z,{disableRipple:!0,color:"inherit",onClick:o.onOpen,endIcon:(0,l.jsx)(m.Ir,{icon:o.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold"},children:["Sort by:",(0,l.jsx)(g.Z,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold",textTransform:"capitalize"},children:t})]}),(0,l.jsx)(D.m,{open:o.open,anchorEl:o.anchorEl,onClose:o.onClose,children:(0,l.jsx)(w.Z,{children:r.map(e=>(0,l.jsx)(S.Z,{selected:e.value===t,onClick:()=>{o.onClose(),n(e.value)},children:e.label},e.value))})})]})}var N=n(19357),L=n.n(N),O=n(95706),W=n.n(O),H=n(77584),q=n(37685),A=n(23996),F=n(77057);function G(e){let{search:t,onSearch:n}=e,o=(0,f.tv)(),s=e=>{o.push(i.H.dashboard.job.details(e))},a=e=>{t.state.query&&"Enter"===e.key&&s(t.state.results.filter(e=>e.title===t.state.query)[0].id)};return(0,l.jsx)(q.Z,{sx:{width:{xs:1,sm:260}},autoHighlight:!0,popupIcon:null,options:t.state.results,onInputChange:(e,t)=>n(t),getOptionLabel:e=>e.title,noOptionsText:(0,l.jsx)(F.N,{query:t.state.query}),isOptionEqualToValue:(e,t)=>e.id===t.id,renderInput:e=>(0,l.jsx)(H.Z,{...e,placeholder:"Search...",onKeyUp:a,InputProps:{...e.InputProps,startAdornment:(0,l.jsx)(A.Z,{position:"start",children:(0,l.jsx)(m.Ir,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})})}}),renderOption:(e,t,n)=>{let{inputValue:o}=n,i=W()(t.title,o),a=L()(t.title,i);return(0,r.createElement)(g.Z,{component:"li",...e,onClick:()=>s(t.id),key:t.id},(0,l.jsx)("div",{children:a.map((e,t)=>(0,l.jsx)(T.Z,{component:"span",color:e.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:e.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:e.text},t))}))}})}var J=n(89902),M=n(74303),Y=n(59708),V=n(3254),X=n(71969),U=n(92566),K=n(72608),$=n(28607),Q=n(2174);function ee(e){let{open:t,canReset:n,onOpen:i,onClose:a,filters:c,options:d}=e,p=(0,r.useCallback)(e=>{let t=c.state.employmentTypes.includes(e)?c.state.employmentTypes.filter(t=>t!==e):[...c.state.employmentTypes,e];c.setState({employmentTypes:t})},[c]),x=(0,r.useCallback)(e=>{c.setState({experience:e})},[c]),h=(0,r.useCallback)(e=>{c.setState({roles:e})},[c]),u=(0,r.useCallback)(e=>{c.setState({locations:e})},[c]),b=(0,r.useCallback)(e=>{let t=c.state.benefits.includes(e)?c.state.benefits.filter(t=>t!==e):[...c.state.benefits,e];c.setState({benefits:t})},[c]),j=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(g.Z,{display:"flex",alignItems:"center",sx:{py:2,pr:1,pl:2.5},children:[(0,l.jsx)(T.Z,{variant:"h6",sx:{flexGrow:1},children:"Filters"}),(0,l.jsx)(X.Z,{title:"Reset",children:(0,l.jsx)(I.Z,{onClick:c.onResetState,children:(0,l.jsx)(Y.Z,{color:"error",variant:"dot",invisible:!n,children:(0,l.jsx)(m.Ir,{icon:"solar:restart-bold"})})})}),(0,l.jsx)(I.Z,{onClick:a,children:(0,l.jsx)(m.Ir,{icon:"mingcute:close-line"})})]}),(0,l.jsx)(C.Z,{sx:{borderStyle:"dashed"}})]}),y=(0,l.jsxs)(g.Z,{display:"flex",flexDirection:"column",children:[(0,l.jsx)(T.Z,{variant:"subtitle2",sx:{mb:1},children:"Employment types"}),d.employmentTypes.map(e=>(0,l.jsx)(K.Z,{control:(0,l.jsx)(U.Z,{checked:c.state.employmentTypes.includes(e),onClick:()=>p(e)}),label:e},e))]}),f=(0,l.jsxs)(g.Z,{display:"flex",flexDirection:"column",children:[(0,l.jsx)(T.Z,{variant:"subtitle2",sx:{mb:1},children:"Experience"}),d.experiences.map(e=>(0,l.jsx)(K.Z,{control:(0,l.jsx)(M.Z,{checked:e===c.state.experience,onClick:()=>x(e)}),label:e,sx:{..."all"===e&&{textTransform:"capitalize"}}},e))]}),v=(0,l.jsxs)(g.Z,{display:"flex",flexDirection:"column",children:[(0,l.jsx)(T.Z,{variant:"subtitle2",sx:{mb:1.5},children:"Roles"}),(0,l.jsx)(q.Z,{multiple:!0,disableCloseOnSelect:!0,options:d.roles.map(e=>e),getOptionLabel:e=>e,value:c.state.roles,onChange:(e,t)=>h(t),renderInput:e=>(0,l.jsx)(H.Z,{placeholder:"Select Roles",...e}),renderOption:(e,t)=>(0,r.createElement)("li",{...e,key:t},t),renderTags:(e,t)=>e.map((e,n)=>(0,r.createElement)(J.Z,{...t({index:n}),key:e,label:e,size:"small",variant:"soft"}))})]}),Z=(0,l.jsxs)(g.Z,{display:"flex",flexDirection:"column",children:[(0,l.jsx)(T.Z,{variant:"subtitle2",sx:{mb:1.5},children:"Locations"}),(0,l.jsx)(Q.OP,{id:"multiple-locations",multiple:!0,fullWidth:!0,placeholder:c.state.locations.length?"+ Locations":"Select Locations",value:c.state.locations,onChange:(e,t)=>u(t)})]}),k=(0,l.jsxs)(g.Z,{display:"flex",flexDirection:"column",children:[(0,l.jsx)(T.Z,{variant:"subtitle2",sx:{mb:1},children:"Benefits"}),d.benefits.map(e=>(0,l.jsx)(K.Z,{control:(0,l.jsx)(U.Z,{checked:c.state.benefits.includes(e),onClick:()=>b(e)}),label:e},e))]});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{disableRipple:!0,color:"inherit",endIcon:(0,l.jsx)(Y.Z,{color:"error",variant:"dot",invisible:!n,children:(0,l.jsx)(m.Ir,{icon:"ic:round-filter-list"})}),onClick:i,children:"Filters"}),(0,l.jsxs)(V.ZP,{anchor:"right",open:t,onClose:a,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:320}},children:[j,(0,l.jsx)($.L,{sx:{px:2.5,py:3},children:(0,l.jsxs)(o.Z,{spacing:3,children:[y,f,v,Z,k]})})]})]})}var et=n(71180);function en(e){let{filters:t,totalResults:n,sx:o}=e,s=e=>{let n=t.state.employmentTypes.filter(t=>t!==e);t.setState({employmentTypes:n})},i=e=>{let n=t.state.roles.filter(t=>t!==e);t.setState({roles:n})},a=e=>{let n=t.state.locations.filter(t=>t!==e);t.setState({locations:n})},c=e=>{let n=t.state.benefits.filter(t=>t!==e);t.setState({benefits:n})};return(0,l.jsxs)(et.Ai,{totalResults:n,onReset:t.onResetState,sx:o,children:[(0,l.jsx)(et.eE,{label:"Employment types:",isShow:!!t.state.employmentTypes.length,children:t.state.employmentTypes.map(e=>(0,r.createElement)(J.Z,{...et.sB,key:e,label:e,onDelete:()=>s(e)}))}),(0,l.jsx)(et.eE,{label:"Experience:",isShow:"all"!==t.state.experience,children:(0,l.jsx)(J.Z,{...et.sB,label:t.state.experience,onDelete:()=>{t.setState({experience:"all"})}})}),(0,l.jsx)(et.eE,{label:"Roles:",isShow:!!t.state.roles.length,children:t.state.roles.map(e=>(0,r.createElement)(J.Z,{...et.sB,key:e,label:e,onDelete:()=>i(e)}))}),(0,l.jsx)(et.eE,{label:"Locations:",isShow:!!t.state.locations.length,children:t.state.locations.map(e=>(0,r.createElement)(J.Z,{...et.sB,key:e,label:e,onDelete:()=>a(e)}))}),(0,l.jsx)(et.eE,{label:"Benefits:",isShow:!!t.state.benefits.length,children:t.state.benefits.map(e=>(0,r.createElement)(J.Z,{...et.sB,key:e,label:e,onDelete:()=>c(e)}))})]})}function el(){let e=(0,c.k)(),[t,n]=(0,r.useState)("latest"),p=(0,d.v)({query:"",results:[]}),g=(0,d.v)({roles:[],locations:[],benefits:[],experience:"all",employmentTypes:[]}),j=er({inputData:h.nb,filters:g.state,sortBy:t}),y=g.state.roles.length>0||g.state.locations.length>0||g.state.benefits.length>0||g.state.employmentTypes.length>0||"all"!==g.state.experience,f=!j.length&&y,v=(0,r.useCallback)(e=>{n(e)},[]),Z=(0,r.useCallback)(e=>{if(p.setState({query:e}),e){let e=h.nb.filter(e=>-1!==e.title.toLowerCase().indexOf(p.state.query.toLowerCase()));p.setState({results:e})}},[p]),k=(0,l.jsxs)(o.Z,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[(0,l.jsx)(G,{search:p,onSearch:Z}),(0,l.jsxs)(o.Z,{direction:"row",spacing:1,flexShrink:0,children:[(0,l.jsx)(ee,{filters:g,canReset:y,open:e.value,onOpen:e.onTrue,onClose:e.onFalse,options:{roles:h.YX,benefits:h.jK.map(e=>e.label),employmentTypes:h.yC.map(e=>e.label),experiences:["all",...h.J$.map(e=>e.label)]}}),(0,l.jsx)(B,{sort:t,onSort:v,sortOptions:h.vf})]})]}),C=(0,l.jsx)(en,{filters:g,totalResults:j.length});return(0,l.jsxs)(x.cv,{children:[(0,l.jsx)(b.Y,{heading:"List",links:[{name:"Dashboard",href:i.H.dashboard.root},{name:"Job",href:i.H.dashboard.job.root},{name:"List"}],action:(0,l.jsx)(s.Z,{component:a.r,href:i.H.dashboard.job.new,variant:"contained",startIcon:(0,l.jsx)(m.Ir,{icon:"mingcute:add-line"}),children:"New job"}),sx:{mb:{xs:3,md:5}}}),(0,l.jsxs)(o.Z,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[k,y&&C]}),f&&(0,l.jsx)(u.z,{filled:!0,sx:{py:10}}),(0,l.jsx)(R,{jobs:j})]})}let er=e=>{let{inputData:t,filters:n,sortBy:l}=e,{employmentTypes:r,experience:o,roles:s,locations:i,benefits:a}=n;return"latest"===l&&(t=(0,p.Xo)(t,["createdAt"],["desc"])),"oldest"===l&&(t=(0,p.Xo)(t,["createdAt"],["asc"])),"popular"===l&&(t=(0,p.Xo)(t,["totalViews"],["desc"])),r.length&&(t=t.filter(e=>e.employmentTypes.some(e=>r.includes(e)))),"all"!==o&&(t=t.filter(e=>e.experience===o)),s.length&&(t=t.filter(e=>s.includes(e.role))),i.length&&(t=t.filter(e=>e.locations.some(e=>i.includes(e)))),a.length&&(t=t.filter(e=>e.benefits.some(e=>a.includes(e)))),t}},58533:function(){}}]);