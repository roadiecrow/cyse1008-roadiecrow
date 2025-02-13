"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1725],{78826:function(e,t,n){var r=n(1119),o=n(74610),i=n(2265),a=n(73207),s=n(30628),f=n(52836),l=n(31691),c=n(31090),u=n(60118),p=n(57437);let d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function m(e){return"scale(".concat(e,", ").concat(e**2,")")}let h={entering:{opacity:1,transform:m(1)},entered:{opacity:1,transform:"none"}},v="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),y=i.forwardRef(function(e,t){let{addEndListener:n,appear:y=!0,children:g,easing:b,in:x,onEnter:w,onEntered:O,onEntering:E,onExit:j,onExited:Z,onExiting:P,style:D,timeout:R="auto",TransitionComponent:A=f.ZP}=e,k=(0,o.Z)(e,d),M=(0,a.Z)(),W=i.useRef(),L=(0,l.Z)(),S=i.useRef(null),H=(0,u.Z)(S,(0,s.Z)(g),t),T=e=>t=>{if(e){let n=S.current;void 0===t?e(n):e(n,t)}},C=T(E),B=T((e,t)=>{let n;(0,c.n)(e);let{duration:r,delay:o,easing:i}=(0,c.C)({style:D,timeout:R,easing:b},{mode:"enter"});"auto"===R?(n=L.transitions.getAutoHeightDuration(e.clientHeight),W.current=n):n=r,e.style.transition=[L.transitions.create("opacity",{duration:n,delay:o}),L.transitions.create("transform",{duration:v?n:.666*n,delay:o,easing:i})].join(","),w&&w(e,t)}),V=T(O),_=T(P),q=T(e=>{let t;let{duration:n,delay:r,easing:o}=(0,c.C)({style:D,timeout:R,easing:b},{mode:"exit"});"auto"===R?(t=L.transitions.getAutoHeightDuration(e.clientHeight),W.current=t):t=n,e.style.transition=[L.transitions.create("opacity",{duration:t,delay:r}),L.transitions.create("transform",{duration:v?t:.666*t,delay:v?r:r||.333*t,easing:o})].join(","),e.style.opacity=0,e.style.transform=m(.75),j&&j(e)}),N=T(Z);return(0,p.jsx)(A,(0,r.Z)({appear:y,in:x,nodeRef:S,onEnter:B,onEntered:V,onEntering:C,onExit:q,onExited:N,onExiting:_,addEndListener:e=>{"auto"===R&&M.start(W.current||0,e),n&&n(S.current,e)},timeout:"auto"===R?null:R},k,{children:(e,t)=>i.cloneElement(g,(0,r.Z)({style:(0,r.Z)({opacity:0,transform:m(.75),visibility:"exited"!==e||x?void 0:"hidden"},h[e],D,g.props.style),ref:H},t))}))});y.muiSupportAuto=!0,t.Z=y},48467:function(e,t,n){n.d(t,{Z:function(){return eH}});var r,o,i,a,s,f=n(1119),l=n(74610),c=n(63552),u=n(2265),p=n(23947),d=n(3450),m=n(72786);function h(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function v(e){var t=h(e).Element;return e instanceof t||e instanceof Element}function y(e){var t=h(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function g(e){if("undefined"==typeof ShadowRoot)return!1;var t=h(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var b=Math.max,x=Math.min,w=Math.round;function O(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function E(){return!/^((?!chrome|android).)*safari/i.test(O())}function j(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&y(e)&&(o=e.offsetWidth>0&&w(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&w(r.height)/e.offsetHeight||1);var a=(v(e)?h(e):window).visualViewport,s=!E()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,l=(r.top+(s&&a?a.offsetTop:0))/i,c=r.width/o,u=r.height/i;return{width:c,height:u,top:l,right:f+c,bottom:l+u,left:f,x:f,y:l}}function Z(e){var t=h(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function P(e){return e?(e.nodeName||"").toLowerCase():null}function D(e){return((v(e)?e.ownerDocument:e.document)||window.document).documentElement}function R(e){return j(D(e)).left+Z(e).scrollLeft}function A(e){return h(e).getComputedStyle(e)}function k(e){var t=A(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function M(e){var t=j(e),n=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function W(e){return"html"===P(e)?e:e.assignedSlot||e.parentNode||(g(e)?e.host:null)||D(e)}function L(e,t){void 0===t&&(t=[]);var n,r=function e(t){return["html","body","#document"].indexOf(P(t))>=0?t.ownerDocument.body:y(t)&&k(t)?t:e(W(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=h(r),a=o?[i].concat(i.visualViewport||[],k(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(L(W(a)))}function S(e){return y(e)&&"fixed"!==A(e).position?e.offsetParent:null}function H(e){for(var t=h(e),n=S(e);n&&["table","td","th"].indexOf(P(n))>=0&&"static"===A(n).position;)n=S(n);return n&&("html"===P(n)||"body"===P(n)&&"static"===A(n).position)?t:n||function(e){var t=/firefox/i.test(O());if(/Trident/i.test(O())&&y(e)&&"fixed"===A(e).position)return null;var n=W(e);for(g(n)&&(n=n.host);y(n)&&0>["html","body"].indexOf(P(n));){var r=A(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var T="bottom",C="right",B="left",V="auto",_=["top",T,C,B],q="start",N="viewport",I="popper",F=_.reduce(function(e,t){return e.concat([t+"-"+q,t+"-end"])},[]),U=[].concat(_,[V]).reduce(function(e,t){return e.concat([t,t+"-"+q,t+"-end"])},[]),z=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],X={placement:"bottom",modifiers:[],strategy:"absolute"};function Y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var G={passive:!0};function J(e){return e.split("-")[0]}function K(e){return e.split("-")[1]}function Q(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function $(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?J(o):null,a=o?K(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case"top":t={x:s,y:n.y-r.height};break;case T:t={x:s,y:n.y+n.height};break;case C:t={x:n.x+n.width,y:f};break;case B:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var l=i?Q(i):null;if(null!=l){var c="y"===l?"height":"width";switch(a){case q:t[l]=t[l]-(n[c]/2-r[c]/2);break;case"end":t[l]=t[l]+(n[c]/2-r[c]/2)}}return t}var ee={top:"auto",right:"auto",bottom:"auto",left:"auto"};function et(e){var t,n,r,o,i,a,s,f=e.popper,l=e.popperRect,c=e.placement,u=e.variation,p=e.offsets,d=e.position,m=e.gpuAcceleration,v=e.adaptive,y=e.roundOffsets,g=e.isFixed,b=p.x,x=void 0===b?0:b,O=p.y,E=void 0===O?0:O,j="function"==typeof y?y({x:x,y:E}):{x:x,y:E};x=j.x,E=j.y;var Z=p.hasOwnProperty("x"),P=p.hasOwnProperty("y"),R=B,k="top",M=window;if(v){var W=H(f),L="clientHeight",S="clientWidth";W===h(f)&&"static"!==A(W=D(f)).position&&"absolute"===d&&(L="scrollHeight",S="scrollWidth"),("top"===c||(c===B||c===C)&&"end"===u)&&(k=T,E-=(g&&W===M&&M.visualViewport?M.visualViewport.height:W[L])-l.height,E*=m?1:-1),(c===B||("top"===c||c===T)&&"end"===u)&&(R=C,x-=(g&&W===M&&M.visualViewport?M.visualViewport.width:W[S])-l.width,x*=m?1:-1)}var V=Object.assign({position:d},v&&ee),_=!0===y?(t={x:x,y:E},n=h(f),r=t.x,o=t.y,{x:w(r*(i=n.devicePixelRatio||1))/i||0,y:w(o*i)/i||0}):{x:x,y:E};return(x=_.x,E=_.y,m)?Object.assign({},V,((s={})[k]=P?"0":"",s[R]=Z?"0":"",s.transform=1>=(M.devicePixelRatio||1)?"translate("+x+"px, "+E+"px)":"translate3d("+x+"px, "+E+"px, 0)",s)):Object.assign({},V,((a={})[k]=P?E+"px":"",a[R]=Z?x+"px":"",a.transform="",a))}var en={left:"right",right:"left",bottom:"top",top:"bottom"};function er(e){return e.replace(/left|right|bottom|top/g,function(e){return en[e]})}var eo={start:"end",end:"start"};function ei(e){return e.replace(/start|end/g,function(e){return eo[e]})}function ea(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&g(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function es(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ef(e,t,n){var r,o,i,a,s,f,l,c,u,p;return t===N?es(function(e,t){var n=h(e),r=D(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var l=E();(l||!l&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+R(e),y:f}}(e,n)):v(t)?((r=j(t,!1,"fixed"===n)).top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r):es((o=D(e),a=D(o),s=Z(o),f=null==(i=o.ownerDocument)?void 0:i.body,l=b(a.scrollWidth,a.clientWidth,f?f.scrollWidth:0,f?f.clientWidth:0),c=b(a.scrollHeight,a.clientHeight,f?f.scrollHeight:0,f?f.clientHeight:0),u=-s.scrollLeft+R(o),p=-s.scrollTop,"rtl"===A(f||a).direction&&(u+=b(a.clientWidth,f?f.clientWidth:0)-l),{width:l,height:c,x:u,y:p}))}function el(){return{top:0,right:0,bottom:0,left:0}}function ec(e){return Object.assign({},el(),e)}function eu(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function ep(e,t){void 0===t&&(t={});var n,r,o,i,a,s,f,l,c=t,u=c.placement,p=void 0===u?e.placement:u,d=c.strategy,m=void 0===d?e.strategy:d,h=c.boundary,g=c.rootBoundary,w=c.elementContext,O=void 0===w?I:w,E=c.altBoundary,Z=c.padding,R=void 0===Z?0:Z,k=ec("number"!=typeof R?R:eu(R,_)),M=e.rects.popper,S=e.elements[void 0!==E&&E?O===I?"reference":I:O],B=(n=v(S)?S:S.contextElement||D(e.elements.popper),r=void 0===h?"clippingParents":h,o=void 0===g?N:g,f=(s=[].concat("clippingParents"===r?(i=L(W(n)),v(a=["absolute","fixed"].indexOf(A(n).position)>=0&&y(n)?H(n):n)?i.filter(function(e){return v(e)&&ea(e,a)&&"body"!==P(e)}):[]):[].concat(r),[o]))[0],(l=s.reduce(function(e,t){var r=ef(n,t,m);return e.top=b(r.top,e.top),e.right=x(r.right,e.right),e.bottom=x(r.bottom,e.bottom),e.left=b(r.left,e.left),e},ef(n,f,m))).width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l),V=j(e.elements.reference),q=$({reference:V,element:M,strategy:"absolute",placement:p}),F=es(Object.assign({},M,q)),U=O===I?F:V,z={top:B.top-U.top+k.top,bottom:U.bottom-B.bottom+k.bottom,left:B.left-U.left+k.left,right:U.right-B.right+k.right},X=e.modifiersData.offset;if(O===I&&X){var Y=X[p];Object.keys(z).forEach(function(e){var t=[C,T].indexOf(e)>=0?1:-1,n=["top",T].indexOf(e)>=0?"y":"x";z[e]+=Y[n]*t})}return z}function ed(e,t,n){return b(e,x(t,n))}function em(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function eh(e){return["top",C,T,B].some(function(t){return e[t]>=0})}var ev=(i=void 0===(o=(r={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=h(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach(function(e){e.addEventListener("scroll",n.update,G)}),s&&f.addEventListener("resize",n.update,G),function(){i&&l.forEach(function(e){e.removeEventListener("scroll",n.update,G)}),s&&f.removeEventListener("resize",n.update,G)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=$({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:J(t.placement),variation:K(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,et(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,et(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];y(o)&&P(o)&&(Object.assign(o.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});y(r)&&P(r)&&(Object.assign(r.style,i),Object.keys(o).forEach(function(e){r.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=U.reduce(function(e,n){var r,o,a,s,f,l;return e[n]=(r=t.rects,a=[B,"top"].indexOf(o=J(n))>=0?-1:1,f=(s="function"==typeof i?i(Object.assign({},r,{placement:n})):i)[0],l=s[1],f=f||0,l=(l||0)*a,[B,C].indexOf(o)>=0?{x:l,y:f}:{x:f,y:l}),e},{}),s=a[t.placement],f=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,l=n.padding,c=n.boundary,u=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=J(v)===v,g=f||(y||!m?[er(v)]:function(e){if(J(e)===V)return[];var t=er(e);return[ei(e),t,ei(t)]}(v)),b=[v].concat(g).reduce(function(e,n){var r,o,i,a,s,f,p,d,v,y,g,b;return e.concat(J(n)===V?(o=(r={placement:n,boundary:c,rootBoundary:u,padding:l,flipVariations:m,allowedAutoPlacements:h}).placement,i=r.boundary,a=r.rootBoundary,s=r.padding,f=r.flipVariations,d=void 0===(p=r.allowedAutoPlacements)?U:p,0===(g=(y=(v=K(o))?f?F:F.filter(function(e){return K(e)===v}):_).filter(function(e){return d.indexOf(e)>=0})).length&&(g=y),Object.keys(b=g.reduce(function(e,n){return e[n]=ep(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[J(n)],e},{})).sort(function(e,t){return b[e]-b[t]})):n)},[]),x=t.rects.reference,w=t.rects.popper,O=new Map,E=!0,j=b[0],Z=0;Z<b.length;Z++){var P=b[Z],D=J(P),R=K(P)===q,A=["top",T].indexOf(D)>=0,k=A?"width":"height",M=ep(t,{placement:P,boundary:c,rootBoundary:u,altBoundary:p,padding:l}),W=A?R?C:B:R?T:"top";x[k]>w[k]&&(W=er(W));var L=er(W),S=[];if(i&&S.push(M[D]<=0),s&&S.push(M[W]<=0,M[L]<=0),S.every(function(e){return e})){j=P,E=!1;break}O.set(P,S)}if(E)for(var H=m?3:1,N=function(e){var t=b.find(function(t){var n=O.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return j=t,"break"},I=H;I>0&&"break"!==N(I);I--);t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,f=n.altBoundary,l=n.padding,c=n.tether,u=void 0===c||c,p=n.tetherOffset,d=void 0===p?0:p,m=ep(t,{boundary:a,rootBoundary:s,padding:l,altBoundary:f}),h=J(t.placement),v=K(t.placement),y=!v,g=Q(h),w="x"===g?"y":"x",O=t.modifiersData.popperOffsets,E=t.rects.reference,j=t.rects.popper,Z="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,P="number"==typeof Z?{mainAxis:Z,altAxis:Z}:Object.assign({mainAxis:0,altAxis:0},Z),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(O){if(void 0===o||o){var A,k="y"===g?"top":B,W="y"===g?T:C,L="y"===g?"height":"width",S=O[g],V=S+m[k],_=S-m[W],N=u?-j[L]/2:0,I=v===q?E[L]:j[L],F=v===q?-j[L]:-E[L],U=t.elements.arrow,z=u&&U?M(U):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:el(),Y=X[k],G=X[W],$=ed(0,E[L],z[L]),ee=y?E[L]/2-N-$-Y-P.mainAxis:I-$-Y-P.mainAxis,et=y?-E[L]/2+N+$+G+P.mainAxis:F+$+G+P.mainAxis,en=t.elements.arrow&&H(t.elements.arrow),er=en?"y"===g?en.clientTop||0:en.clientLeft||0:0,eo=null!=(A=null==D?void 0:D[g])?A:0,ei=ed(u?x(V,S+ee-eo-er):V,S,u?b(_,S+et-eo):_);O[g]=ei,R[g]=ei-S}if(void 0!==i&&i){var ea,es,ef="x"===g?"top":B,ec="x"===g?T:C,eu=O[w],em="y"===w?"height":"width",eh=eu+m[ef],ev=eu-m[ec],ey=-1!==["top",B].indexOf(h),eg=null!=(es=null==D?void 0:D[w])?es:0,eb=ey?eh:eu-E[em]-j[em]-eg+P.altAxis,ex=ey?eu+E[em]+j[em]-eg-P.altAxis:ev,ew=u&&ey?(ea=ed(eb,eu,ex))>ex?ex:ea:ed(u?eb:eh,eu,u?ex:ev);O[w]=ew,R[w]=ew-eu}t.modifiersData[r]=R}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,r=e.state,o=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,f=J(r.placement),l=Q(f),c=[B,C].indexOf(f)>=0?"height":"width";if(a&&s){var u=ec("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:eu(t,_)),p=M(a),d="y"===l?"top":B,m="y"===l?T:C,h=r.rects.reference[c]+r.rects.reference[l]-s[l]-r.rects.popper[c],v=s[l]-r.rects.reference[l],y=H(a),g=y?"y"===l?y.clientHeight||0:y.clientWidth||0:0,b=u[d],x=g-p[c]-u[m],w=g/2-p[c]/2+(h/2-v/2),O=ed(b,w,x);r.modifiersData[o]=((n={})[l]=O,n.centerOffset=O-w,n)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&ea(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ep(t,{elementContext:"reference"}),s=ep(t,{altBoundary:!0}),f=em(a,r),l=em(s,o,i),c=eh(f),u=eh(l);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":u})}}]}).defaultModifiers)?[]:o,s=void 0===(a=r.defaultOptions)?X:a,function(e,t,n){void 0===n&&(n=s);var r,o,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},X,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],l=!1,c={state:a,setOptions:function(n){var r,o,l,p,d,m="function"==typeof n?n(a.options):n;u(),a.options=Object.assign({},s,a.options,m),a.scrollParents={reference:v(e)?L(e):e.contextElement?L(e.contextElement):[],popper:L(t)};var h=(o=Object.keys(r=[].concat(i,a.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),l=new Map,p=new Set,d=[],o.forEach(function(e){l.set(e.name,e)}),o.forEach(function(e){p.has(e.name)||function e(t){p.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!p.has(t)){var n=l.get(t);n&&e(n)}}),d.push(t)}(e)}),z.reduce(function(e,t){return e.concat(d.filter(function(e){return e.phase===t}))},[]));return a.orderedModifiers=h.filter(function(e){return e.enabled}),a.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=e.effect;if("function"==typeof r){var o=r({state:a,name:t,instance:c,options:void 0===n?{}:n});f.push(o||function(){})}}),c.update()},forceUpdate:function(){if(!l){var e,t,n,r,o,i,s,f,u,p,d,m,v=a.elements,g=v.reference,b=v.popper;if(Y(g,b)){a.rects={reference:(t=H(b),n="fixed"===a.options.strategy,r=y(t),f=y(t)&&(i=w((o=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=w(o.height)/t.offsetHeight||1,1!==i||1!==s),u=D(t),p=j(g,f,n),d={scrollLeft:0,scrollTop:0},m={x:0,y:0},(r||!r&&!n)&&(("body"!==P(t)||k(u))&&(d=(e=t)!==h(e)&&y(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:Z(e)),y(t)?(m=j(t,!0),m.x+=t.clientLeft,m.y+=t.clientTop):u&&(m.x=R(u))),{x:p.left+d.scrollLeft-m.x,y:p.top+d.scrollTop-m.y,width:p.width,height:p.height}),popper:M(b)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data)});for(var x=0;x<a.orderedModifiers.length;x++){if(!0===a.reset){a.reset=!1,x=-1;continue}var O=a.orderedModifiers[x],E=O.fn,A=O.options,W=void 0===A?{}:A,L=O.name;"function"==typeof E&&(a=E({state:a,options:W,name:L,instance:c})||a)}}}},update:(r=function(){return new Promise(function(e){c.forceUpdate(),e(a)})},function(){return o||(o=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(r())})})),o}),destroy:function(){u(),l=!0}};if(!Y(e,t))return c;function u(){f.forEach(function(e){return e()}),f=[]}return c.setOptions(n).then(function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)}),c}),ey=n(20801),eg=n(15988),eb=n(1866),ex=n(94143),ew=n(50738);function eO(e){return(0,ew.ZP)("MuiPopper",e)}(0,ex.Z)("MuiPopper",["root"]);var eE=n(57437);let ej=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],eZ=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function eP(e){return"function"==typeof e?e():e}let eD=e=>{let{classes:t}=e;return(0,ey.Z)({root:["root"]},eO,t)},eR={},eA=u.forwardRef(function(e,t){var n;let{anchorEl:r,children:o,direction:i,disablePortal:a,modifiers:s,open:c,placement:m,popperOptions:h,popperRef:v,slotProps:y={},slots:g={},TransitionProps:b}=e,x=(0,l.Z)(e,ej),w=u.useRef(null),O=(0,p.Z)(w,t),E=u.useRef(null),j=(0,p.Z)(E,v),Z=u.useRef(j);(0,d.Z)(()=>{Z.current=j},[j]),u.useImperativeHandle(v,()=>E.current,[]);let P=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(m,i),[D,R]=u.useState(P),[A,k]=u.useState(eP(r));u.useEffect(()=>{E.current&&E.current.forceUpdate()}),u.useEffect(()=>{r&&k(eP(r))},[r]),(0,d.Z)(()=>{if(!A||!c)return;let e=e=>{R(e.placement)},t=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:t=>{let{state:n}=t;e(n)}}];null!=s&&(t=t.concat(s)),h&&null!=h.modifiers&&(t=t.concat(h.modifiers));let n=ev(A,w.current,(0,f.Z)({placement:P},h,{modifiers:t}));return Z.current(n),()=>{n.destroy(),Z.current(null)}},[A,a,s,c,h,P]);let M={placement:D};null!==b&&(M.TransitionProps=b);let W=eD(e),L=null!=(n=g.root)?n:"div",S=(0,eg.Z)({elementType:L,externalSlotProps:y.root,externalForwardedProps:x,additionalProps:{role:"tooltip",ref:O},ownerState:e,className:W.root});return(0,eE.jsx)(L,(0,f.Z)({},S,{children:"function"==typeof o?o(M):o}))}),ek=u.forwardRef(function(e,t){let n;let{anchorEl:r,children:o,container:i,direction:a="ltr",disablePortal:s=!1,keepMounted:c=!1,modifiers:p,open:d,placement:h="bottom",popperOptions:v=eR,popperRef:y,style:g,transition:b=!1,slotProps:x={},slots:w={}}=e,O=(0,l.Z)(e,eZ),[E,j]=u.useState(!0);if(!c&&!d&&(!b||E))return null;if(i)n=i;else if(r){let e=eP(r);n=e&&void 0!==e.nodeType?(0,m.Z)(e).body:(0,m.Z)(null).body}let Z=!d&&c&&(!b||E)?"none":void 0,P=b?{in:d,onEnter:()=>{j(!1)},onExited:()=>{j(!0)}}:void 0;return(0,eE.jsx)(eb.Z,{disablePortal:s,container:n,children:(0,eE.jsx)(eA,(0,f.Z)({anchorEl:r,direction:a,disablePortal:s,modifiers:p,ref:t,open:b?!E:d,placement:h,popperOptions:v,popperRef:y,slotProps:x,slots:w},O,{style:(0,f.Z)({position:"fixed",top:0,left:0,display:Z},g),TransitionProps:P,children:o}))})});var eM=n(16210),eW=n(37053);let eL=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],eS=(0,eM.ZP)(ek,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({});var eH=u.forwardRef(function(e,t){var n;let r=(0,c.Z)(),o=(0,eW.i)({props:e,name:"MuiPopper"}),{anchorEl:i,component:a,components:s,componentsProps:u,container:p,disablePortal:d,keepMounted:m,modifiers:h,open:v,placement:y,popperOptions:g,popperRef:b,transition:x,slots:w,slotProps:O}=o,E=(0,l.Z)(o,eL),j=null!=(n=null==w?void 0:w.root)?n:null==s?void 0:s.Root,Z=(0,f.Z)({anchorEl:i,container:p,disablePortal:d,keepMounted:m,modifiers:h,open:v,placement:y,popperOptions:g,popperRef:b,transition:x},E);return(0,eE.jsx)(eS,(0,f.Z)({as:a,direction:null==r?void 0:r.direction,slots:{root:j},slotProps:null!=O?O:u},Z,{ref:t}))})},1866:function(e,t,n){var r=n(2265),o=n(54887),i=n(23947),a=n(30628),s=n(3450),f=n(29419),l=n(57437);let c=r.forwardRef(function(e,t){let{children:n,container:c,disablePortal:u=!1}=e,[p,d]=r.useState(null),m=(0,i.Z)(r.isValidElement(n)?(0,a.Z)(n):null,t);return((0,s.Z)(()=>{!u&&d(("function"==typeof c?c():c)||document.body)},[c,u]),(0,s.Z)(()=>{if(p&&!u)return(0,f.Z)(t,p),()=>{(0,f.Z)(t,null)}},[t,p,u]),u)?r.isValidElement(n)?r.cloneElement(n,{ref:m}):(0,l.jsx)(r.Fragment,{children:n}):(0,l.jsx)(r.Fragment,{children:p?o.createPortal(n,p):p})});t.Z=c},39963:function(e,t,n){n.d(t,{V:function(){return l}});var r=n(1119),o=n(74610),i=n(2265),a=n(57437);let s=["value"],f=i.createContext(),l=()=>{let e=i.useContext(f);return null!=e&&e};t.Z=function(e){let{value:t}=e,n=(0,o.Z)(e,s);return(0,a.jsx)(f.Provider,(0,r.Z)({value:null==t||t},n))}},63552:function(e,t,n){t.Z=void 0;var r=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=i(void 0);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n(2265)),o=n(55825);function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=r.useContext(o.ThemeContext);return t&&0!==Object.keys(t).length?t:e}},67184:function(e,t,n){var r=n(38462);t.Z=r.Z},30628:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(2265);function o(e){if(parseInt(r.version,10)>=19){var t;return(null==e||null==(t=e.props)?void 0:t.ref)||null}return(null==e?void 0:e.ref)||null}},72786:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){return e&&e.ownerDocument||document}},38462:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(2265);function o(e){let{controlled:t,default:n,name:o,state:i="value"}=e,{current:a}=r.useRef(void 0!==t),[s,f]=r.useState(n),l=r.useCallback(e=>{a||f(e)},[]);return[a?t:s,l]}},53025:function(e,t,n){n.d(t,{Z:function(){return s}});var r,o=n(2265);let i=0,a=(r||(r=n.t(o,2)))["useId".toString()];function s(e){if(void 0!==a){let t=a();return null!=e?e:t}return function(e){let[t,n]=o.useState(e),r=e||t;return o.useEffect(()=>{null==t&&(i+=1,n("mui-".concat(i)))},[t]),r}(e)}}}]);