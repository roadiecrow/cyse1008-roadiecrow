(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5105],{32291:function(e,t,n){Promise.resolve().then(n.bind(n,27599))},8974:function(e,t,n){"use strict";n.d(t,{Y:function(){return d}});var r=n(57437),o=n(63832),i=n(18856),a=n(46387),l=n(80868),s=n(90096);function c(e){let{link:t,activeLast:n,disabled:a}=e,l={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...a&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},c=(0,r.jsxs)(r.Fragment,{children:[t.icon&&(0,r.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg, & img":{width:20,height:20}},children:t.icon}),t.name]});return t.href?(0,r.jsx)(i.Z,{component:s.r,href:t.href,sx:l,children:c}):(0,r.jsxs)(o.Z,{sx:l,children:[" ",c," "]})}function d(e){let{links:t,action:n,heading:s,moreLink:d,activeLast:u,slotProps:m,sx:h,...g}=e,f=t[t.length-1].name,x=(0,r.jsx)(a.Z,{variant:"h4",sx:{mb:2,...null==m?void 0:m.heading},children:s}),b=(0,r.jsx)(l.Z,{separator:(0,r.jsx)(p,{}),sx:null==m?void 0:m.breadcrumbs,...g,children:t.map((e,t)=>{var n;return(0,r.jsx)(c,{link:e,activeLast:u,disabled:e.name===f},null!==(n=e.name)&&void 0!==n?n:t)})}),y=(0,r.jsxs)(o.Z,{sx:{flexShrink:0,...null==m?void 0:m.action},children:[" ",n," "]}),v=(0,r.jsx)(o.Z,{component:"ul",children:null==d?void 0:d.map(e=>(0,r.jsx)(o.Z,{component:"li",sx:{display:"flex"},children:(0,r.jsx)(i.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:null==m?void 0:m.moreLink,children:e})},e))});return(0,r.jsxs)(o.Z,{gap:2,display:"flex",flexDirection:"column",sx:h,...g,children:[(0,r.jsxs)(o.Z,{display:"flex",alignItems:"center",children:[(0,r.jsxs)(o.Z,{sx:{flexGrow:1},children:[s&&x,!!t.length&&b]}),n&&y]}),!!d&&v]})}function p(){return(0,r.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},15577:function(e,t,n){"use strict";n.d(t,{G:function(){return r}});let r={root:"mnl__icon__root",flag:"mnl__icon__flag"}},95271:function(e,t,n){"use strict";n.r(t),n.d(t,{Iconify:function(){return c}});var r=n(57437),o=n(2265),i=n(59646),a=n(63832),l=n(53610),s=n(15577);let c=(0,o.forwardRef)((e,t)=>{let{className:n,width:o=20,sx:c,...d}=e,p={width:o,height:o,flexShrink:0,display:"inline-flex"},u=(0,r.jsx)(a.Z,{component:"span",className:s.G.root.concat(n?" ".concat(n):""),sx:{...p,...c}});return(0,r.jsx)(l.Z,{fallback:u,children:(0,r.jsx)(a.Z,{ssr:!0,ref:t,component:i.JO,className:s.G.root.concat(n?" ".concat(n):""),sx:{...p,...c},...d})})});(0,i.Qb)("local")},27250:function(e,t,n){"use strict";n.d(t,{U6:function(){return s},Ir:function(){return o.Iconify},GW:function(){return r.G}});var r=n(15577),o=n(95271),i=n(57437),a=n(2265),l=n(63832);let s=(0,a.forwardRef)((e,t)=>{let{code:n,className:o,sx:a,...s}=e;return n?(0,i.jsx)(l.Z,{ref:t,component:"span",className:r.G.flag.concat(o?" ".concat(o):""),sx:{width:26,height:20,flexShrink:0,overflow:"hidden",borderRadius:"5px",alignItems:"center",display:"inline-flex",justifyContent:"center",bgcolor:"background.neutral",...a},...s,children:(0,i.jsx)(l.Z,{component:"img",loading:"lazy",alt:n,src:"https://purecatamphetamine.github.io/country-flag-icons/3x2/".concat(null==n?void 0:n.toUpperCase(),".svg"),sx:{width:1,height:1,maxWidth:"unset",objectFit:"cover"}})}):null})},75911:function(e,t,n){"use strict";n.d(t,{U:function(){return k}});var r=n(57437);n(58533);var o=n(2265),i=n(91305),a=n(50051),l=n(9527),s=n(18856),c=n(26755),d=n(90096),p=n(2916),u=n(26727),m=n(16210),h=n(86281);let g={root:"nml__markdown__root",content:{pre:"nml__editor__content__pre",codeInline:"nml__editor__content__codeInline",codeBlock:"nml__editor__content__codeBlock",image:"nml__editor__content__image",link:"nml__editor__content__link"}},f=(0,m.ZP)(u.U)(e=>{let{theme:t}=e;return{"> * + *":{marginTop:0,marginBottom:"0.75em"},h1:{...t.typography.h1,marginTop:40,marginBottom:8},h2:{...t.typography.h2,marginTop:40,marginBottom:8},h3:{...t.typography.h3,marginTop:24,marginBottom:8},h4:{...t.typography.h4,marginTop:24,marginBottom:8},h5:{...t.typography.h5,marginTop:24,marginBottom:8},h6:{...t.typography.h6,marginTop:24,marginBottom:8},p:{...t.typography.body1,marginBottom:"1.25rem"},hr:{flexShrink:0,borderWidth:0,margin:"2em 0",msFlexNegative:0,WebkitFlexShrink:0,borderStyle:"solid",borderBottomWidth:"thin",borderColor:t.vars.palette.divider},["& .".concat(g.content.image)]:{width:"100%",height:"auto",maxWidth:"100%",margin:"auto auto 1.25em"},"& ul":{listStyleType:"disc"},"& ul, & ol":{paddingLeft:16,"& > li":{lineHeight:2,"& > p":{margin:0,display:"inline-block"}}},"& blockquote":{lineHeight:1.5,fontSize:"1.5em",margin:"24px auto",position:"relative",fontFamily:"Georgia, serif",padding:t.spacing(3,3,3,8),color:t.vars.palette.text.secondary,borderLeft:"solid 8px ".concat((0,h.jr)(t.vars.palette.grey["500Channel"],.08)),[t.breakpoints.up("md")]:{width:"100%",maxWidth:640},"& p":{margin:0,fontSize:"inherit",fontFamily:"inherit"},"&::before":{left:16,top:-8,display:"block",fontSize:"3em",content:'"\\201C"',position:"absolute",color:t.vars.palette.text.disabled}},["& .".concat(g.content.codeInline)]:{padding:t.spacing(.25,.5),color:t.vars.palette.text.secondary,fontSize:t.typography.body2.fontSize,borderRadius:t.shape.borderRadius/2,backgroundColor:(0,h.jr)(t.vars.palette.grey["500Channel"],.2)},["& .".concat(g.content.codeBlock)]:{position:"relative","& pre":{overflowX:"auto",padding:t.spacing(3),color:t.vars.palette.common.white,borderRadius:t.shape.borderRadius,fontFamily:"'JetBrainsMono', monospace",backgroundColor:t.vars.palette.grey[900],"& code":{fontSize:t.typography.body2.fontSize},[h.s4.dark]:{backgroundColor:t.vars.palette.grey[800]}}},table:{width:"100%",borderCollapse:"collapse",border:"1px solid ".concat(t.vars.palette.divider),"th, td":{padding:t.spacing(1),border:"1px solid ".concat(t.vars.palette.divider)},"tbody tr:nth-of-type(odd)":{backgroundColor:t.vars.palette.background.neutral}},input:{"&[type=checkbox]":{position:"relative",cursor:"pointer","&:before":{content:'""',top:-2,left:-2,width:17,height:17,borderRadius:3,position:"absolute",backgroundColor:t.vars.palette.grey[300],[h.s4.dark]:{backgroundColor:t.vars.palette.grey[700]}},"&:checked":{"&:before":{backgroundColor:t.vars.palette.primary.main},"&:after":{content:'""',top:1,left:5,width:4,height:9,position:"absolute",transform:"rotate(45deg)",msTransform:"rotate(45deg)",WebkitTransform:"rotate(45deg)",border:"solid ".concat(t.vars.palette.common.white),borderWidth:"0 2px 2px 0"}}}}}});var x=n(45464);let b=["pre","code"],y=new x.Z({codeBlockStyle:"fenced",fence:"```"}),v=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","circle","cite","clipPath","code","col","colgroup","command","content","data","datalist","dd","defs","del","details","dfn","dialog","dir","div","dl","dt","element","ellipse","em","embed","fieldset","figcaption","figure","font","footer","foreignObject","form","frame","frameset","g","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","line","linearGradient","link","listing","main","map","mark","marquee","mask","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","path","pattern","picture","plaintext","polygon","polyline","pre","progress","q","radialGradient","rb","rbc","rect","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","stop","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","text","textarea","tfoot","th","thead","time","title","tr","track","tspan","tt","u","ul","var","video","wbr","xmp"].filter(e=>!b.includes(e));function k(e){let{children:t,sx:n,...i}=e,a=(0,o.useMemo)(()=>{var e,n;return(e="".concat(t),[/^#+\s/,/^(\*|-|\d+\.)\s/,/^```/,/^\|/,/^(\s*)[*+-] [^\r\n]+/,/^(\s*)\d+\. [^\r\n]+/,/!\[.*?\]\(.*?\)/,/\[.*?\]\(.*?\)/].some(t=>t.test(e)))?t:(n="".concat(t).trim(),y.turndown(n))},[t]);return(0,r.jsx)(f,{children:a,components:_,rehypePlugins:j,className:g.root,sx:n,...i})}y.addRule("keep",{filter:v,replacement(e,t){let{isBlock:n,outerHTML:r}=t;return t&&n?"\n\n".concat(r,"\n\n"):r}});let j=[a.Z,l.Z,[i.Z,{singleTilde:!1}]],_={img:e=>{let{...t}=e;return(0,r.jsx)(p.E,{ratio:"16/9",className:g.content.image,sx:{borderRadius:2},...t})},a:e=>{let{href:t,children:n,...o}=e,i=(0,c.Bm)(t)?{target:"_blank",rel:"noopener"}:{component:d.r};return(0,r.jsx)(s.Z,{...i,href:t,className:g.content.link,...o,children:n})},pre:e=>{let{children:t}=e;return(0,r.jsx)("div",{className:g.content.codeBlock,children:(0,r.jsx)("pre",{children:t})})},code(e){let{className:t,children:n,...o}=e;return/language-(\w+)/.exec(t||"")?(0,r.jsx)("code",{...o,className:t,children:n}):(0,r.jsx)("code",{...o,className:g.content.codeInline,children:n})}}},90096:function(e,t,n){"use strict";n.d(t,{r:function(){return r.default}});var r=n(27648)},26755:function(e,t,n){"use strict";n.d(t,{Bm:function(){return a},Gm:function(){return r},mn:function(){return i},vZ:function(){return o}});let r=e=>{let t=e.split("?")[1];return!!t&&new URLSearchParams(t).toString().length>0};function o(e){return"/"!==e&&e.endsWith("/")?e.slice(0,-1):e}function i(e){try{let t=new URL(e,window.location.origin);return o(t.pathname)}catch(t){return e}}function a(e){return e.startsWith("http")}},69230:function(e,t,n){"use strict";n.d(t,{G:function(){return s},H:function(){return c}});var r=n(57437),o=n(63832),i=n(63582),a=n(98489),l=n(86281);function s(e){let{title:t,sx:n,children:a,...s}=e;return(0,r.jsxs)(i.Z,{sx:{px:3,py:6,gap:2,width:1,flexWrap:"wrap",borderRadius:1.5,position:"relative",flexDirection:"row",alignItems:"center",justifyContent:"center",bgcolor:e=>(0,l.jr)(e.vars.palette.grey["500Channel"],.04),boxShadow:e=>"0 0 0 1px ".concat((0,l.jr)(e.vars.palette.grey["500Channel"],.16)),...n},...s,children:[t&&(0,r.jsx)(o.Z,{component:"span",sx:{px:1,top:0,ml:2.5,left:0,py:.25,borderRadius:2,position:"absolute",color:"text.primary",bgcolor:"common.white",transform:"translateY(-50%)",fontSize:e=>e.typography.caption.fontSize,fontWeight:e=>e.typography.fontWeightSemiBold,border:e=>"solid 1px ".concat((0,l.jr)(e.vars.palette.grey["500Channel"],.24)),[l.s4.dark]:{bgcolor:"background.neutral"}},children:t}),a]})}function c(e){let{children:t,sx:n,...o}=e;return(0,r.jsx)(a.Z,{sx:{mt:10,mb:15,gap:5,display:"flex",flexDirection:"column",...n},...o,children:t})}},46235:function(e,t,n){"use strict";n.d(t,{P:function(){return c}});var r=n(57437),o=n(63832),i=n(98489),a=n(31691),l=n(37183),s=n(86281);function c(e){let{children:t,sx:n,...c}=e,d=(0,a.Z)();return(0,r.jsxs)(o.Z,{sx:{py:5,minHeight:240,display:"flex",position:"relative",alignItems:"center",...n},...c,children:[(0,r.jsx)(i.Z,{children:t}),(0,r.jsx)(o.Z,{sx:{...(0,s.v3)({color:"0deg, ".concat((0,s.jr)(d.vars.palette.background.defaultChannel,.9),", ").concat((0,s.jr)(d.vars.palette.background.defaultChannel,.9)),imgUrl:"".concat(l.CONFIG.assetsDir,"/assets/background/background-3-blur.webp")}),top:0,left:0,width:1,height:1,zIndex:-1,position:"absolute",transform:"scaleX(-1)"}})]})}},27599:function(e,t,n){"use strict";n.r(t),n.d(t,{EditorView:function(){return f}});var r=n(57437),o=n(2265),i=n(31762),a=n(63582),l=n(85147),s=n(46387),c=n(72608),d=n(96997),p=n(55546),u=n(75911),m=n(8974),h=n(46235),g=n(69230);function f(){let[e,t]=(0,o.useState)(!0),[n,f]=(0,o.useState)('\n\n<h4>This is Heading 4</h4>\n<code>This is code</code>\n\n<pre><code class="language-javascript">for (var i=1; i &#x3C;= 20; i++) {\n  if (i % 15 == 0)\n    return "FizzBuzz"\n  else if (i % 3 == 0)\n    return "Fizz"\n  else if (i % 5 == 0)\n    return "Buzz"\n  else\n    return i\n  }</code></pre>\n');return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.P,{children:(0,r.jsx)(m.Y,{heading:"Editor",links:[{name:"Components",href:d.H.components},{name:"Editor"}],moreLink:["https://tiptap.dev/docs/editor/introduction"]})}),(0,r.jsxs)(g.H,{maxWidth:!1,sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[(0,r.jsxs)(i.Z,{sx:{p:3,gap:2,flexShrink:0,display:"flex",flexDirection:"column"},children:[(0,r.jsx)(c.Z,{control:(0,r.jsx)(l.Z,{name:"fullItem",checked:e,onChange:e=>{t(e.target.checked)}}),label:"Full item",labelPlacement:"start",sx:{ml:"auto"}}),(0,r.jsx)(p.M,{fullItem:e,value:n,onChange:e=>f(e),sx:{maxHeight:720}})]}),(0,r.jsxs)(a.Z,{spacing:1,sx:{p:3,borderRadius:2,overflowX:"auto",bgcolor:"background.neutral"},children:[(0,r.jsx)(s.Z,{variant:"h6",children:"Preview"}),(0,r.jsx)(u.U,{children:n})]})]})]})}},58533:function(){}},function(e){e.O(0,[1771,313,3572,7902,8331,9271,7648,1021,8489,4591,334,6112,8398,3588,5147,3833,9976,4828,1739,5545,3596,6281,1551,2971,2117,1744],function(){return e(e.s=32291)}),_N_E=e.O()}]);