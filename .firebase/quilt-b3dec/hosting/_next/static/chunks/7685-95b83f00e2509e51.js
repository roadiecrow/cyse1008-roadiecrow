"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7685],{37685:function(e,t,n){var o,r,a=n(74610),l=n(1119),i=n(2265),c=n(61994),p=n(20801),s=n(98142),u=n(64910),d=n(48467),g=n(22425),f=n(19902),h=n(95576),m=n(89902),b=n(86507),v=n(60971),Z=n(58108),x=n(2386),y=n(14625),I=n(36674),O=n(16210),C=n(37053),k=n(67547),P=n(85657),S=n(60118),w=n(57437);let A=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionKey","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],R=["ref"],L=["key"],T=["key"],D=e=>{let{classes:t,disablePortal:n,expanded:o,focused:r,fullWidth:a,hasClearIcon:l,hasPopupIcon:i,inputFocused:c,popupOpen:s,size:u}=e,d={root:["root",o&&"expanded",r&&"focused",a&&"fullWidth",l&&"hasClearIcon",i&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",c&&"inputFocused"],tag:["tag","tagSize".concat((0,P.Z)(u))],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",s&&"popupIndicatorOpen"],popper:["popper",n&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return(0,p.Z)(d,k.q,t)},N=(0,O.ZP)("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e,{fullWidth:o,hasClearIcon:r,hasPopupIcon:a,inputFocused:l,size:i}=n;return[{["& .".concat(k.Z.tag)]:t.tag},{["& .".concat(k.Z.tag)]:t["tagSize".concat((0,P.Z)(i))]},{["& .".concat(k.Z.inputRoot)]:t.inputRoot},{["& .".concat(k.Z.input)]:t.input},{["& .".concat(k.Z.input)]:l&&t.inputFocused},t.root,o&&t.fullWidth,a&&t.hasPopupIcon,r&&t.hasClearIcon]}})({["&.".concat(k.Z.focused," .").concat(k.Z.clearIndicator)]:{visibility:"visible"},"@media (pointer: fine)":{["&:hover .".concat(k.Z.clearIndicator)]:{visibility:"visible"}},["& .".concat(k.Z.tag)]:{margin:3,maxWidth:"calc(100% - 6px)"},["& .".concat(k.Z.inputRoot)]:{[".".concat(k.Z.hasPopupIcon,"&, .").concat(k.Z.hasClearIcon,"&")]:{paddingRight:30},[".".concat(k.Z.hasPopupIcon,".").concat(k.Z.hasClearIcon,"&")]:{paddingRight:56},["& .".concat(k.Z.input)]:{width:0,minWidth:30}},["& .".concat(b.Z.root)]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},["& .".concat(b.Z.root,".").concat(v.Z.sizeSmall)]:{["& .".concat(b.Z.input)]:{padding:"2px 4px 3px 0"}},["& .".concat(Z.Z.root)]:{padding:9,[".".concat(k.Z.hasPopupIcon,"&, .").concat(k.Z.hasClearIcon,"&")]:{paddingRight:39},[".".concat(k.Z.hasPopupIcon,".").concat(k.Z.hasClearIcon,"&")]:{paddingRight:65},["& .".concat(k.Z.input)]:{padding:"7.5px 4px 7.5px 5px"},["& .".concat(k.Z.endAdornment)]:{right:9}},["& .".concat(Z.Z.root,".").concat(v.Z.sizeSmall)]:{paddingTop:6,paddingBottom:6,paddingLeft:6,["& .".concat(k.Z.input)]:{padding:"2.5px 4px 2.5px 8px"}},["& .".concat(x.Z.root)]:{paddingTop:19,paddingLeft:8,[".".concat(k.Z.hasPopupIcon,"&, .").concat(k.Z.hasClearIcon,"&")]:{paddingRight:39},[".".concat(k.Z.hasPopupIcon,".").concat(k.Z.hasClearIcon,"&")]:{paddingRight:65},["& .".concat(x.Z.input)]:{padding:"7px 4px"},["& .".concat(k.Z.endAdornment)]:{right:9}},["& .".concat(x.Z.root,".").concat(v.Z.sizeSmall)]:{paddingBottom:1,["& .".concat(x.Z.input)]:{padding:"2.5px 4px"}},["& .".concat(v.Z.hiddenLabel)]:{paddingTop:8},["& .".concat(x.Z.root,".").concat(v.Z.hiddenLabel)]:{paddingTop:0,paddingBottom:0,["& .".concat(k.Z.input)]:{paddingTop:16,paddingBottom:17}},["& .".concat(x.Z.root,".").concat(v.Z.hiddenLabel,".").concat(v.Z.sizeSmall)]:{["& .".concat(k.Z.input)]:{paddingTop:8,paddingBottom:9}},["& .".concat(k.Z.input)]:{flexGrow:1,textOverflow:"ellipsis",opacity:0},variants:[{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{["& .".concat(k.Z.tag)]:{margin:2,maxWidth:"calc(100% - 4px)"}}},{props:{inputFocused:!0},style:{["& .".concat(k.Z.input)]:{opacity:1}}},{props:{multiple:!0},style:{["& .".concat(k.Z.inputRoot)]:{flexWrap:"wrap"}}}]}),M=(0,O.ZP)("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(e,t)=>t.endAdornment})({position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)"}),j=(0,O.ZP)(h.Z,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(e,t)=>t.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),E=(0,O.ZP)(h.Z,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:(e,t)=>{let{ownerState:n}=e;return(0,l.Z)({},t.popupIndicator,n.popupOpen&&t.popupIndicatorOpen)}})({padding:2,marginRight:-2,variants:[{props:{popupOpen:!0},style:{transform:"rotate(180deg)"}}]}),z=(0,O.ZP)(d.Z,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[{["& .".concat(k.Z.option)]:t.option},t.popper,n.disablePortal&&t.popperDisablePortal]}})(e=>{let{theme:t}=e;return{zIndex:(t.vars||t).zIndex.modal,variants:[{props:{disablePortal:!0},style:{position:"absolute"}}]}}),H=(0,O.ZP)(f.Z,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(e,t)=>t.paper})(e=>{let{theme:t}=e;return(0,l.Z)({},t.typography.body1,{overflow:"auto"})}),F=(0,O.ZP)("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(e,t)=>t.loading})(e=>{let{theme:t}=e;return{color:(t.vars||t).palette.text.secondary,padding:"14px 16px"}}),W=(0,O.ZP)("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(e,t)=>t.noOptions})(e=>{let{theme:t}=e;return{color:(t.vars||t).palette.text.secondary,padding:"14px 16px"}}),q=(0,O.ZP)("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(e,t)=>t.listbox})(e=>{let{theme:t}=e;return{listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",["& .".concat(k.Z.option)]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[t.breakpoints.up("sm")]:{minHeight:"auto"},["&.".concat(k.Z.focused)]:{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(t.vars||t).palette.action.disabledOpacity,pointerEvents:"none"},["&.".concat(k.Z.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(k.Z.focused)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},["&.".concat(k.Z.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}}}}}),B=(0,O.ZP)(g.Z,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(e,t)=>t.groupLabel})(e=>{let{theme:t}=e;return{backgroundColor:(t.vars||t).palette.background.paper,top:-8}}),V=(0,O.ZP)("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(e,t)=>t.groupUl})({padding:0,["& .".concat(k.Z.option)]:{paddingLeft:24}}),K=i.forwardRef(function(e,t){var n,p,s,g;let h;let b=(0,C.i)({props:e,name:"MuiAutocomplete"}),{autoComplete:v=!1,autoHighlight:Z=!1,autoSelect:x=!1,blurOnSelect:O=!1,ChipProps:k,className:P,clearIcon:K=o||(o=(0,w.jsx)(y.Z,{fontSize:"small"})),clearOnBlur:U=!b.freeSolo,clearOnEscape:G=!1,clearText:_="Clear",closeText:J="Close",componentsProps:Q={},defaultValue:X=b.multiple?[]:null,disableClearable:Y=!1,disableCloseOnSelect:$=!1,disabled:ee=!1,disabledItemsFocusable:et=!1,disableListWrap:en=!1,disablePortal:eo=!1,filterSelectedOptions:er=!1,forcePopupIcon:ea="auto",freeSolo:el=!1,fullWidth:ei=!1,getLimitTagsText:ec=e=>"+".concat(e),getOptionLabel:ep,groupBy:es,handleHomeEndKeys:eu=!b.freeSolo,includeInputInList:ed=!1,limitTags:eg=-1,ListboxComponent:ef="ul",ListboxProps:eh,loading:em=!1,loadingText:eb="Loading…",multiple:ev=!1,noOptionsText:eZ="No options",openOnFocus:ex=!1,openText:ey="Open",PaperComponent:eI=f.Z,PopperComponent:eO=d.Z,popupIcon:eC=r||(r=(0,w.jsx)(I.Z,{})),readOnly:ek=!1,renderGroup:eP,renderInput:eS,renderOption:ew,renderTags:eA,selectOnFocus:eR=!b.freeSolo,size:eL="medium",slotProps:eT={}}=b,eD=(0,a.Z)(b,A),{getRootProps:eN,getInputProps:eM,getInputLabelProps:ej,getPopupIndicatorProps:eE,getClearProps:ez,getTagProps:eH,getListboxProps:eF,getOptionProps:eW,value:eq,dirty:eB,expanded:eV,id:eK,popupOpen:eU,focused:eG,focusedTag:e_,anchorEl:eJ,setAnchorEl:eQ,inputValue:eX,groupedOptions:eY}=(0,u.Z)((0,l.Z)({},b,{componentName:"Autocomplete"})),e$=!Y&&!ee&&eB&&!ek,e0=(!el||!0===ea)&&!1!==ea,{onMouseDown:e1}=eM(),{ref:e6}=null!=eh?eh:{},e5=eF(),{ref:e2}=e5,e4=(0,a.Z)(e5,R),e9=(0,S.Z)(e2,e6),e8=ep||(e=>{var t;return null!=(t=e.label)?t:e}),e3=(0,l.Z)({},b,{disablePortal:eo,expanded:eV,focused:eG,fullWidth:ei,getOptionLabel:e8,hasClearIcon:e$,hasPopupIcon:e0,inputFocused:-1===e_,popupOpen:eU,size:eL}),e7=D(e3);if(ev&&eq.length>0){let e=e=>(0,l.Z)({className:e7.tag,disabled:ee},eH(e));h=eA?eA(eq,e,e3):eq.map((t,n)=>{let o=e({index:n}),{key:r}=o,i=(0,a.Z)(o,L);return(0,w.jsx)(m.Z,(0,l.Z)({label:e8(t),size:eL},i,k),r)})}if(eg>-1&&Array.isArray(h)){let e=h.length-eg;!eG&&e>0&&(h=h.splice(0,eg)).push((0,w.jsx)("span",{className:e7.tag,children:ec(e)},h.length))}let te=eP||(e=>(0,w.jsxs)("li",{children:[(0,w.jsx)(B,{className:e7.groupLabel,ownerState:e3,component:"div",children:e.group}),(0,w.jsx)(V,{className:e7.groupUl,ownerState:e3,children:e.children})]},e.key)),tt=ew||((e,t)=>{let{key:n}=e,o=(0,a.Z)(e,T);return(0,w.jsx)("li",(0,l.Z)({},o,{children:e8(t)}),n)}),tn=(e,t)=>{let n=eW({option:e,index:t});return tt((0,l.Z)({},n,{className:e7.option}),e,{selected:n["aria-selected"],index:t,inputValue:eX},e3)},to=null!=(n=eT.clearIndicator)?n:Q.clearIndicator,tr=null!=(p=eT.paper)?p:Q.paper,ta=null!=(s=eT.popper)?s:Q.popper,tl=null!=(g=eT.popupIndicator)?g:Q.popupIndicator;return(0,w.jsxs)(i.Fragment,{children:[(0,w.jsx)(N,(0,l.Z)({ref:t,className:(0,c.Z)(e7.root,P),ownerState:e3},eN(eD),{children:eS({id:eK,disabled:ee,fullWidth:!0,size:"small"===eL?"small":void 0,InputLabelProps:ej(),InputProps:(0,l.Z)({ref:eQ,className:e7.inputRoot,startAdornment:h,onClick:e=>{e.target===e.currentTarget&&e1(e)}},(e$||e0)&&{endAdornment:(0,w.jsxs)(M,{className:e7.endAdornment,ownerState:e3,children:[e$?(0,w.jsx)(j,(0,l.Z)({},ez(),{"aria-label":_,title:_,ownerState:e3},to,{className:(0,c.Z)(e7.clearIndicator,null==to?void 0:to.className),children:K})):null,e0?(0,w.jsx)(E,(0,l.Z)({},eE(),{disabled:ee,"aria-label":eU?J:ey,title:eU?J:ey,ownerState:e3},tl,{className:(0,c.Z)(e7.popupIndicator,null==tl?void 0:tl.className),children:eC})):null]})}),inputProps:(0,l.Z)({className:e7.input,disabled:ee,readOnly:ek},eM())})})),eJ?(0,w.jsx)(z,(0,l.Z)({as:eO,disablePortal:eo,style:{width:eJ?eJ.clientWidth:null},ownerState:e3,role:"presentation",anchorEl:eJ,open:eU},ta,{className:(0,c.Z)(e7.popper,null==ta?void 0:ta.className),children:(0,w.jsxs)(H,(0,l.Z)({ownerState:e3,as:eI},tr,{className:(0,c.Z)(e7.paper,null==tr?void 0:tr.className),children:[em&&0===eY.length?(0,w.jsx)(F,{className:e7.loading,ownerState:e3,children:eb}):null,0!==eY.length||el||em?null:(0,w.jsx)(W,{className:e7.noOptions,ownerState:e3,role:"presentation",onMouseDown:e=>{e.preventDefault()},children:eZ}),eY.length>0?(0,w.jsx)(q,(0,l.Z)({as:ef,className:e7.listbox,ownerState:e3},e4,eh,{ref:e9,children:eY.map((e,t)=>es?te({key:e.key,group:e.group,children:e.options.map((t,n)=>tn(t,e.index+n))}):tn(e,t))})):null]}))})):null]})});t.Z=K},64910:function(e,t,n){n.d(t,{D:function(){return u}});var o=n(1119),r=n(2265),a=n(53025),l=n(38462),i=n(57893),c=n(8659),p=n(29419);function s(e){return void 0!==e.normalize?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{ignoreAccents:t=!0,ignoreCase:n=!0,limit:o,matchFrom:r="any",stringify:a,trim:l=!1}=e;return(e,i)=>{let{inputValue:c,getOptionLabel:p}=i,u=l?c.trim():c;n&&(u=u.toLowerCase()),t&&(u=s(u));let d=u?e.filter(e=>{let o=(a||p)(e);return n&&(o=o.toLowerCase()),t&&(o=s(o)),"start"===r?0===o.indexOf(u):o.indexOf(u)>-1}):e;return"number"==typeof o?d.slice(0,o):d}}function d(e,t){for(let n=0;n<e.length;n+=1)if(t(e[n]))return n;return -1}let g=u(),f=e=>{var t;return null!==e.current&&(null==(t=e.current.parentElement)?void 0:t.contains(document.activeElement))},h=[];t.Z=function(e){let{unstable_isActiveElementInListbox:t=f,unstable_classNamePrefix:n="Mui",autoComplete:s=!1,autoHighlight:u=!1,autoSelect:m=!1,blurOnSelect:b=!1,clearOnBlur:v=!e.freeSolo,clearOnEscape:Z=!1,componentName:x="useAutocomplete",defaultValue:y=e.multiple?h:null,disableClearable:I=!1,disableCloseOnSelect:O=!1,disabled:C,disabledItemsFocusable:k=!1,disableListWrap:P=!1,filterOptions:S=g,filterSelectedOptions:w=!1,freeSolo:A=!1,getOptionDisabled:R,getOptionKey:L,getOptionLabel:T=e=>{var t;return null!=(t=e.label)?t:e},groupBy:D,handleHomeEndKeys:N=!e.freeSolo,id:M,includeInputInList:j=!1,inputValue:E,isOptionEqualToValue:z=(e,t)=>e===t,multiple:H=!1,onChange:F,onClose:W,onHighlightChange:q,onInputChange:B,onOpen:V,open:K,openOnFocus:U=!1,options:G,readOnly:_=!1,selectOnFocus:J=!e.freeSolo,value:Q}=e,X=(0,a.Z)(M),Y=T;Y=e=>{let t=T(e);return"string"!=typeof t?String(t):t};let $=r.useRef(!1),ee=r.useRef(!0),et=r.useRef(null),en=r.useRef(null),[eo,er]=r.useState(null),[ea,el]=r.useState(-1),ei=u?0:-1,ec=r.useRef(ei),[ep,es]=(0,l.Z)({controlled:Q,default:y,name:x}),[eu,ed]=(0,l.Z)({controlled:E,default:"",name:x,state:"inputValue"}),[eg,ef]=r.useState(!1),eh=r.useCallback((e,t)=>{let n;if((H?ep.length<t.length:null!==t)||v){if(H)n="";else if(null==t)n="";else{let e=Y(t);n="string"==typeof e?e:""}eu!==n&&(ed(n),B&&B(e,n,"reset"))}},[Y,eu,H,B,ed,v,ep]),[em,eb]=(0,l.Z)({controlled:K,default:!1,name:x,state:"open"}),[ev,eZ]=r.useState(!0),ex=!H&&null!=ep&&eu===Y(ep),ey=em&&!_,eI=ey?S(G.filter(e=>!(w&&(H?ep:[ep]).some(t=>null!==t&&z(e,t)))),{inputValue:ex&&ev?"":eu,getOptionLabel:Y}):[],eO=(0,i.Z)({filteredOptions:eI,value:ep,inputValue:eu});r.useEffect(()=>{let e=ep!==eO.value;(!eg||e)&&(!A||e)&&eh(null,ep)},[ep,eh,eg,eO.value,A]);let eC=em&&eI.length>0&&!_,ek=(0,c.Z)(e=>{-1===e?et.current.focus():eo.querySelector('[data-tag-index="'.concat(e,'"]')).focus()});r.useEffect(()=>{H&&ea>ep.length-1&&(el(-1),ek(-1))},[ep,H,ea,ek]);let eP=(0,c.Z)(e=>{let{event:t,index:o,reason:r="auto"}=e;if(ec.current=o,-1===o?et.current.removeAttribute("aria-activedescendant"):et.current.setAttribute("aria-activedescendant","".concat(X,"-option-").concat(o)),q&&q(t,-1===o?null:eI[o],r),!en.current)return;let a=en.current.querySelector('[role="option"].'.concat(n,"-focused"));a&&(a.classList.remove("".concat(n,"-focused")),a.classList.remove("".concat(n,"-focusVisible")));let l=en.current;if("listbox"!==en.current.getAttribute("role")&&(l=en.current.parentElement.querySelector('[role="listbox"]')),!l)return;if(-1===o){l.scrollTop=0;return}let i=en.current.querySelector('[data-option-index="'.concat(o,'"]'));if(i&&(i.classList.add("".concat(n,"-focused")),"keyboard"===r&&i.classList.add("".concat(n,"-focusVisible")),l.scrollHeight>l.clientHeight&&"mouse"!==r&&"touch"!==r)){let e=l.clientHeight+l.scrollTop,t=i.offsetTop+i.offsetHeight;t>e?l.scrollTop=t-l.clientHeight:i.offsetTop-i.offsetHeight*(D?1.3:0)<l.scrollTop&&(l.scrollTop=i.offsetTop-i.offsetHeight*(D?1.3:0))}}),eS=(0,c.Z)(e=>{let{event:t,diff:n,direction:o="next",reason:r="auto"}=e;if(!ey)return;let a=function(e,t){if(!en.current||e<0||e>=eI.length)return -1;let n=e;for(;;){let o=en.current.querySelector('[data-option-index="'.concat(n,'"]')),r=!k&&(!o||o.disabled||"true"===o.getAttribute("aria-disabled"));if(o&&o.hasAttribute("tabindex")&&!r)return n;if((n="next"===t?(n+1)%eI.length:(n-1+eI.length)%eI.length)===e)return -1}}((()=>{let e=eI.length-1;if("reset"===n)return ei;if("start"===n)return 0;if("end"===n)return e;let t=ec.current+n;return t<0?-1===t&&j?-1:P&&-1!==ec.current||Math.abs(n)>1?0:e:t>e?t===e+1&&j?-1:P||Math.abs(n)>1?e:0:t})(),o);if(eP({index:a,reason:r,event:t}),s&&"reset"!==n){if(-1===a)et.current.value=eu;else{let e=Y(eI[a]);et.current.value=e,0===e.toLowerCase().indexOf(eu.toLowerCase())&&eu.length>0&&et.current.setSelectionRange(eu.length,e.length)}}}),ew=()=>{var e;if(-1!==ec.current&&eO.filteredOptions&&eO.filteredOptions.length!==eI.length&&eO.inputValue===eu&&(H?ep.length===eO.value.length&&eO.value.every((e,t)=>Y(ep[t])===Y(e)):((e=eO.value)?Y(e):"")===(ep?Y(ep):""))){let e=eO.filteredOptions[ec.current];if(e)return d(eI,t=>Y(t)===Y(e))}return -1},eA=r.useCallback(()=>{if(!ey)return;let e=ew();if(-1!==e){ec.current=e;return}let t=H?ep[0]:ep;if(0===eI.length||null==t){eS({diff:"reset"});return}if(en.current){if(null!=t){let e=eI[ec.current];if(H&&e&&-1!==d(ep,t=>z(e,t)))return;let n=d(eI,e=>z(e,t));-1===n?eS({diff:"reset"}):eP({index:n});return}if(ec.current>=eI.length-1){eP({index:eI.length-1});return}eP({index:ec.current})}},[eI.length,!H&&ep,w,eS,eP,ey,eu,H]),eR=(0,c.Z)(e=>{(0,p.Z)(en,e),e&&eA()});r.useEffect(()=>{eA()},[eA]);let eL=e=>{!em&&(eb(!0),eZ(!0),V&&V(e))},eT=(e,t)=>{em&&(eb(!1),W&&W(e,t))},eD=(e,t,n,o)=>{if(H){if(ep.length===t.length&&ep.every((e,n)=>e===t[n]))return}else if(ep===t)return;F&&F(e,t,n,o),es(t)},eN=r.useRef(!1),eM=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"selectOption",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"options",r=n,a=t;if(H){let e=d(a=Array.isArray(ep)?ep.slice():[],e=>z(t,e));-1===e?a.push(t):"freeSolo"!==o&&(a.splice(e,1),r="removeOption")}eh(e,a),eD(e,a,r,{option:t}),O||e&&(e.ctrlKey||e.metaKey)||eT(e,r),(!0===b||"touch"===b&&eN.current||"mouse"===b&&!eN.current)&&et.current.blur()},ej=(e,t)=>{if(!H)return;""===eu&&eT(e,"toggleInput");let n=ea;-1===ea?""===eu&&"previous"===t&&(n=ep.length-1):((n+="next"===t?1:-1)<0&&(n=0),n===ep.length&&(n=-1)),el(n=function(e,t){if(-1===e)return -1;let n=e;for(;;){if("next"===t&&n===ep.length||"previous"===t&&-1===n)return -1;let e=eo.querySelector('[data-tag-index="'.concat(n,'"]'));if(e&&e.hasAttribute("tabindex")&&!e.disabled&&"true"!==e.getAttribute("aria-disabled"))return n;n+="next"===t?1:-1}}(n,t)),ek(n)},eE=e=>{$.current=!0,ed(""),B&&B(e,"","clear"),eD(e,H?[]:null,"clear")},ez=e=>t=>{if(e.onKeyDown&&e.onKeyDown(t),!t.defaultMuiPrevented&&(-1!==ea&&-1===["ArrowLeft","ArrowRight"].indexOf(t.key)&&(el(-1),ek(-1)),229!==t.which))switch(t.key){case"Home":ey&&N&&(t.preventDefault(),eS({diff:"start",direction:"next",reason:"keyboard",event:t}));break;case"End":ey&&N&&(t.preventDefault(),eS({diff:"end",direction:"previous",reason:"keyboard",event:t}));break;case"PageUp":t.preventDefault(),eS({diff:-5,direction:"previous",reason:"keyboard",event:t}),eL(t);break;case"PageDown":t.preventDefault(),eS({diff:5,direction:"next",reason:"keyboard",event:t}),eL(t);break;case"ArrowDown":t.preventDefault(),eS({diff:1,direction:"next",reason:"keyboard",event:t}),eL(t);break;case"ArrowUp":t.preventDefault(),eS({diff:-1,direction:"previous",reason:"keyboard",event:t}),eL(t);break;case"ArrowLeft":ej(t,"previous");break;case"ArrowRight":ej(t,"next");break;case"Enter":if(-1!==ec.current&&ey){let e=eI[ec.current],n=!!R&&R(e);if(t.preventDefault(),n)return;eM(t,e,"selectOption"),s&&et.current.setSelectionRange(et.current.value.length,et.current.value.length)}else A&&""!==eu&&!1===ex&&(H&&t.preventDefault(),eM(t,eu,"createOption","freeSolo"));break;case"Escape":ey?(t.preventDefault(),t.stopPropagation(),eT(t,"escape")):Z&&(""!==eu||H&&ep.length>0)&&(t.preventDefault(),t.stopPropagation(),eE(t));break;case"Backspace":if(H&&!_&&""===eu&&ep.length>0){let e=-1===ea?ep.length-1:ea,n=ep.slice();n.splice(e,1),eD(t,n,"removeOption",{option:ep[e]})}break;case"Delete":if(H&&!_&&""===eu&&ep.length>0&&-1!==ea){let e=ep.slice();e.splice(ea,1),eD(t,e,"removeOption",{option:ep[ea]})}}},eH=e=>{ef(!0),U&&!$.current&&eL(e)},eF=e=>{if(t(en)){et.current.focus();return}ef(!1),ee.current=!0,$.current=!1,m&&-1!==ec.current&&ey?eM(e,eI[ec.current],"blur"):m&&A&&""!==eu?eM(e,eu,"blur","freeSolo"):v&&eh(e,ep),eT(e,"blur")},eW=e=>{let t=e.target.value;eu!==t&&(ed(t),eZ(!1),B&&B(e,t,"input")),""===t?I||H||eD(e,null,"clear"):eL(e)},eq=e=>{let t=Number(e.currentTarget.getAttribute("data-option-index"));ec.current!==t&&eP({event:e,index:t,reason:"mouse"})},eB=e=>{eP({event:e,index:Number(e.currentTarget.getAttribute("data-option-index")),reason:"touch"}),eN.current=!0},eV=e=>{let t=Number(e.currentTarget.getAttribute("data-option-index"));eM(e,eI[t],"selectOption"),eN.current=!1},eK=e=>t=>{let n=ep.slice();n.splice(e,1),eD(t,n,"removeOption",{option:ep[e]})},eU=e=>{em?eT(e,"toggleInput"):eL(e)},eG=e=>{e.currentTarget.contains(e.target)&&e.target.getAttribute("id")!==X&&e.preventDefault()},e_=e=>{e.currentTarget.contains(e.target)&&(et.current.focus(),J&&ee.current&&et.current.selectionEnd-et.current.selectionStart==0&&et.current.select(),ee.current=!1)},eJ=e=>{C||""!==eu&&em||eU(e)},eQ=A&&eu.length>0;eQ=eQ||(H?ep.length>0:null!==ep);let eX=eI;return D&&(eX=eI.reduce((e,t,n)=>{let o=D(t);return e.length>0&&e[e.length-1].group===o?e[e.length-1].options.push(t):e.push({key:n,index:n,group:o,options:[t]}),e},[])),C&&eg&&eF(),{getRootProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.Z)({"aria-owns":eC?"".concat(X,"-listbox"):null},e,{onKeyDown:ez(e),onMouseDown:eG,onClick:e_})},getInputLabelProps:()=>({id:"".concat(X,"-label"),htmlFor:X}),getInputProps:()=>({id:X,value:eu,onBlur:eF,onFocus:eH,onChange:eW,onMouseDown:eJ,"aria-activedescendant":ey?"":null,"aria-autocomplete":s?"both":"list","aria-controls":eC?"".concat(X,"-listbox"):void 0,"aria-expanded":eC,autoComplete:"off",ref:et,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:C}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:eE}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:eU}),getTagProps:e=>{let{index:t}=e;return(0,o.Z)({key:t,"data-tag-index":t,tabIndex:-1},!_&&{onDelete:eK(t)})},getListboxProps:()=>({role:"listbox",id:"".concat(X,"-listbox"),"aria-labelledby":"".concat(X,"-label"),ref:eR,onMouseDown:e=>{e.preventDefault()}}),getOptionProps:e=>{var t;let{index:n,option:o}=e,r=(H?ep:[ep]).some(e=>null!=e&&z(o,e)),a=!!R&&R(o);return{key:null!=(t=null==L?void 0:L(o))?t:Y(o),tabIndex:-1,role:"option",id:"".concat(X,"-option-").concat(n),onMouseMove:eq,onClick:eV,onTouchStart:eB,"data-option-index":n,"aria-disabled":a,"aria-selected":r}},id:X,inputValue:eu,value:ep,dirty:eQ,expanded:ey&&eo,popupOpen:ey,focused:eg||-1!==ea,anchorEl:eo,setAnchorEl:er,focusedTag:ea,groupedOptions:eX}}}}]);