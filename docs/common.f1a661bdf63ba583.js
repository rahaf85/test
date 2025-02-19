"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(y,_,r)=>{r.d(_,{c:()=>i});var h=r(4261),l=r(1086),c=r(8607);const i=(n,o)=>{let t,e;const u=(a,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(a,p);E&&o(E)&&!E.disabled?E!==t&&(s(),d(E,w)):s()},d=(a,p)=>{t=a,e||(e=t);const w=t;(0,h.w)(()=>w.classList.add("ion-activated")),p()},s=(a=!1)=>{if(!t)return;const p=t;(0,h.w)(()=>p.classList.remove("ion-activated")),a&&e!==t&&t.click(),t=void 0};return(0,c.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>u(a.currentX,a.currentY,l.a),onMove:a=>u(a.currentX,a.currentY,l.b),onEnd:()=>{s(!0),(0,l.h)(),e=void 0}})}},8438:(y,_,r)=>{r.d(_,{g:()=>l});var h=r(8476);const l=()=>{if(void 0!==h.w)return h.w.Capacitor}},5572:(y,_,r)=>{r.d(_,{c:()=>h,i:()=>l});const h=(c,i,n)=>"function"==typeof n?n(c,i):"string"==typeof n?c[n]===i[n]:Array.isArray(i)?i.includes(c):c===i,l=(c,i,n)=>void 0!==c&&(Array.isArray(c)?c.some(o=>h(o,i,n)):h(c,i,n))},3351:(y,_,r)=>{r.d(_,{g:()=>h});const h=(o,t,e,u,d)=>c(o[1],t[1],e[1],u[1],d).map(s=>l(o[0],t[0],e[0],u[0],s)),l=(o,t,e,u,d)=>d*(3*t*Math.pow(d-1,2)+d*(-3*e*d+3*e+u*d))-o*Math.pow(d-1,3),c=(o,t,e,u,d)=>n((u-=d)-3*(e-=d)+3*(t-=d)-(o-=d),3*e-6*t+3*o,3*t-3*o,o).filter(a=>a>=0&&a<=1),n=(o,t,e,u)=>{if(0===o)return((o,t,e)=>{const u=t*t-4*o*e;return u<0?[]:[(-t+Math.sqrt(u))/(2*o),(-t-Math.sqrt(u))/(2*o)]})(t,e,u);const d=(3*(e/=o)-(t/=o)*t)/3,s=(2*t*t*t-9*t*e+27*(u/=o))/27;if(0===d)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-d),-Math.sqrt(-d)];const a=Math.pow(s/2,2)+Math.pow(d/3,3);if(0===a)return[Math.pow(s/2,.5)-t/3];if(a>0)return[Math.pow(-s/2+Math.sqrt(a),1/3)-Math.pow(s/2+Math.sqrt(a),1/3)-t/3];const p=Math.sqrt(Math.pow(-d/3,3)),w=Math.acos(-s/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-t/3,E*Math.cos((w+2*Math.PI)/3)-t/3,E*Math.cos((w+4*Math.PI)/3)-t/3]}},5083:(y,_,r)=>{r.d(_,{i:()=>h});const h=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(y,_,r)=>{r.r(_),r.d(_,{startFocusVisible:()=>i});const h="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=n=>{let o=[],t=!0;const e=n?n.shadowRoot:document,u=n||document.body,d=M=>{o.forEach(g=>g.classList.remove(h)),M.forEach(g=>g.classList.add(h)),o=M},s=()=>{t=!1,d([])},a=M=>{t=c.includes(M.key),t||d([])},p=M=>{if(t&&void 0!==M.composedPath){const g=M.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));d(g)}},w=()=>{e.activeElement===u&&d([])};return e.addEventListener("keydown",a),e.addEventListener("focusin",p),e.addEventListener("focusout",w),e.addEventListener("touchstart",s,{passive:!0}),e.addEventListener("mousedown",s),{destroy:()=>{e.removeEventListener("keydown",a),e.removeEventListener("focusin",p),e.removeEventListener("focusout",w),e.removeEventListener("touchstart",s),e.removeEventListener("mousedown",s)},setFocus:d}}},1086:(y,_,r)=>{r.d(_,{I:()=>l,a:()=>t,b:()=>e,c:()=>o,d:()=>d,h:()=>u});var h=r(8438),l=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(l||{});const i={getEngine(){const s=(0,h.g)();if(null!=s&&s.isPluginAvailable("Haptics"))return s.Plugins.Haptics},available(){if(!this.getEngine())return!1;const a=(0,h.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(s){const a=this.getEngine();a&&a.impact({style:s.style})},notification(s){const a=this.getEngine();a&&a.notification({type:s.type})},selection(){this.impact({style:l.Light})},selectionStart(){const s=this.getEngine();s&&s.selectionStart()},selectionChanged(){const s=this.getEngine();s&&s.selectionChanged()},selectionEnd(){const s=this.getEngine();s&&s.selectionEnd()}},n=()=>i.available(),o=()=>{n()&&i.selection()},t=()=>{n()&&i.selectionStart()},e=()=>{n()&&i.selectionChanged()},u=()=>{n()&&i.selectionEnd()},d=s=>{n()&&i.impact(s)}},909:(y,_,r)=>{r.d(_,{I:()=>o,a:()=>d,b:()=>n,c:()=>p,d:()=>E,f:()=>s,g:()=>u,i:()=>e,p:()=>w,r:()=>M,s:()=>a});var h=r(467),l=r(4920),c=r(4929);const n="ion-content",o=".ion-content-scroll-host",t=`${n}, ${o}`,e=g=>"ION-CONTENT"===g.tagName,u=function(){var g=(0,h.A)(function*(f){return e(f)?(yield new Promise(m=>(0,l.c)(f,m)),f.getScrollElement()):f});return function(m){return g.apply(this,arguments)}}(),d=g=>g.querySelector(o)||g.querySelector(t),s=g=>g.closest(t),a=(g,f)=>e(g)?g.scrollToTop(f):Promise.resolve(g.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),p=(g,f,m,O)=>e(g)?g.scrollByPoint(f,m,O):Promise.resolve(g.scrollBy({top:m,left:f,behavior:O>0?"smooth":"auto"})),w=g=>(0,c.b)(g,n),E=g=>{if(e(g)){const m=g.scrollY;return g.scrollY=!1,m}return g.style.setProperty("overflow","hidden"),!0},M=(g,f)=>{e(g)?g.scrollY=f:g.style.removeProperty("overflow")}},3992:(y,_,r)=>{r.d(_,{a:()=>h,b:()=>p,c:()=>t,d:()=>w,e:()=>L,f:()=>o,g:()=>E,h:()=>c,i:()=>l,j:()=>v,k:()=>C,l:()=>e,m:()=>s,n:()=>M,o:()=>d,p:()=>n,q:()=>i,r:()=>D,s:()=>P,t:()=>a,u:()=>m,v:()=>O,w:()=>u,x:()=>g,y:()=>f});const h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(y,_,r)=>{r.d(_,{c:()=>i,g:()=>n});var h=r(8476),l=r(4920),c=r(4929);const i=(t,e,u)=>{let d,s;if(void 0!==h.w&&"MutationObserver"in h.w){const E=Array.isArray(e)?e:[e];d=new MutationObserver(M=>{for(const g of M)for(const f of g.addedNodes)if(f.nodeType===Node.ELEMENT_NODE&&E.includes(f.slot))return u(),void(0,l.r)(()=>a(f))}),d.observe(t,{childList:!0,subtree:!0})}const a=E=>{var M;s&&(s.disconnect(),s=void 0),s=new MutationObserver(g=>{u();for(const f of g)for(const m of f.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===e&&w()}),s.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},w=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),w()}}},n=(t,e,u)=>{const d=null==t?0:t.toString().length,s=o(d,e);if(void 0===u)return s;try{return u(d,e)}catch(a){return(0,c.a)("Exception in provided `counterFormatter`.",a),s}},o=(t,e)=>`${t} / ${e}`},1622:(y,_,r)=>{r.r(_),r.d(_,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>D,keyboardDidClose:()=>g,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var h=r(4379);r(8438),r(8476);const i="ionKeyboardDidShow",n="ionKeyboardDidHide";let t={},e={},u=!1;const d=()=>{t={},e={},u=!1},s=v=>{if(h.K.getEngine())a(v);else{if(!v.visualViewport)return;e=D(v.visualViewport),v.visualViewport.onresize=()=>{O(v),E()||M(v)?p(v):g(v)&&w(v)}}},a=v=>{v.addEventListener("keyboardDidShow",C=>p(v,C)),v.addEventListener("keyboardDidHide",()=>w(v))},p=(v,C)=>{f(v,C),u=!0},w=v=>{m(v),u=!1},E=()=>!u&&t.width===e.width&&(t.height-e.height)*e.scale>150,M=v=>u&&!g(v),g=v=>u&&e.height===v.innerHeight,f=(v,C)=>{const L=new CustomEvent(i,{detail:{keyboardHeight:C?C.keyboardHeight:v.innerHeight-e.height}});v.dispatchEvent(L)},m=v=>{const C=new CustomEvent(n);v.dispatchEvent(C)},O=v=>{t=Object.assign({},e),e=D(v.visualViewport)},D=v=>({width:Math.round(v.width),height:Math.round(v.height),offsetTop:v.offsetTop,offsetLeft:v.offsetLeft,pageTop:v.pageTop,pageLeft:v.pageLeft,scale:v.scale})},4379:(y,_,r)=>{r.d(_,{K:()=>i,a:()=>c});var h=r(8438),l=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(l||{}),c=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(c||{});const i={getEngine(){const n=(0,h.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(o=>{if(o.code!==l.Unimplemented)throw o}):Promise.resolve(void 0)}}},4731:(y,_,r)=>{r.d(_,{c:()=>o});var h=r(467),l=r(8476),c=r(4379);const i=t=>{if(void 0===l.d||t===c.a.None||void 0===t)return null;const e=l.d.querySelector("ion-app");return null!=e?e:l.d.body},n=t=>{const e=i(t);return null===e?0:e.clientHeight},o=function(){var t=(0,h.A)(function*(e){let u,d,s,a;const p=function(){var f=(0,h.A)(function*(){const m=yield c.K.getResizeMode(),O=void 0===m?void 0:m.mode;u=()=>{void 0===a&&(a=n(O)),s=!0,w(s,O)},d=()=>{s=!1,w(s,O)},null==l.w||l.w.addEventListener("keyboardWillShow",u),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return f.apply(this,arguments)}}(),w=(f,m)=>{e&&e(f,E(m))},E=f=>{if(0===a||a===n(f))return;const m=i(f);return null!==m?new Promise(O=>{const v=new ResizeObserver(()=>{m.clientHeight===a&&(v.disconnect(),O())});v.observe(m)}):void 0};return yield p(),{init:p,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",u),null==l.w||l.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>s}});return function(u){return t.apply(this,arguments)}}()},7838:(y,_,r)=>{r.d(_,{c:()=>l});var h=r(467);const l=()=>{let c;return{lock:function(){var n=(0,h.A)(function*(){const o=c;let t;return c=new Promise(e=>t=e),void 0!==o&&(yield o),t});return function(){return n.apply(this,arguments)}}()}}},9001:(y,_,r)=>{r.d(_,{c:()=>c});var h=r(8476),l=r(4920);const c=(i,n,o)=>{let t;const e=()=>!(void 0===n()||void 0!==i.label||null===o()),d=()=>{const a=n();if(void 0===a)return;if(!e())return void a.style.removeProperty("width");const p=o().scrollWidth;if(0===p&&null===a.offsetParent&&void 0!==h.w&&"IntersectionObserver"in h.w){if(void 0!==t)return;const w=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(d(),w.disconnect(),t=void 0)},{threshold:.01,root:i});w.observe(a)}else a.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{e()&&(0,l.r)(()=>{d()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(y,_,r)=>{r.d(_,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,i,n)=>{const o=c*i/n-c+"ms",t=2*Math.PI*i/n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(c,i,n)=>{const o=i/n,t=c*o-c+"ms",e=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,i,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,i,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})}}},7166:(y,_,r)=>{r.r(_),r.d(_,{createSwipeBackGesture:()=>n});var h=r(4920),l=r(5083),c=r(8607);r(1970);const n=(o,t,e,u,d)=>{const s=o.ownerDocument.defaultView;let a=(0,l.i)(o);const w=m=>a?-m.deltaX:m.deltaX;return(0,c.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(a=(0,l.i)(o),(m=>{const{startX:D}=m;return a?D>=s.innerWidth-50:D<=50})(m)&&t()),onStart:e,onMove:m=>{const D=w(m)/s.innerWidth;u(D)},onEnd:m=>{const O=w(m),D=s.innerWidth,v=O/D,C=(m=>a?-m.velocityX:m.velocityX)(m),L=C>=0&&(C>.2||O>D/2),b=(L?1-v:v)*D;let A=0;if(b>5){const k=b/Math.abs(C);A=Math.min(k,540)}d(L,v<=0?.01:(0,h.j)(0,v,.9999),A)}})}},2935:(y,_,r)=>{r.d(_,{w:()=>h});const h=(i,n,o)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{o(l(e,n))});return t.observe(i,{childList:!0,subtree:!0}),t},l=(i,n)=>{let o;return i.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)o=c(t.addedNodes[e],n)||o}),o},c=(i,n)=>{if(1!==i.nodeType)return;const o=i;return(o.tagName===n.toUpperCase()?[o]:Array.from(o.querySelectorAll(n))).find(e=>e.value===o.value)}},8831:(y,_,r)=>{r.d(_,{s:()=>c});var h=r(4438),l=r(1626);let c=(()=>{var i;class n{constructor(t){this.http=t}getAllPainting(){return this.http.get("https://collectionapi.metmuseum.org/public/collection/v1/search?q=painting&hasImages=true")}getAllPaintingDetails(t){return this.http.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+t)}getNumLikes(){return this.http.get("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pKSoTbGzFhj5RtoeFQif/likes/")}getCommentsForPainting(t){return this.http.get("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pKSoTbGzFhj5RtoeFQif/comments?item_id="+t)}addComment(t,e){return this.http.post("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pKSoTbGzFhj5RtoeFQif/comments",{item_id:t,username:e.username,comment:e.comment})}addLike(t){return this.http.post("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pKSoTbGzFhj5RtoeFQif/likes/",t)}}return(i=n).\u0275fac=function(t){return new(t||i)(h.KVO(l.Qq))},i.\u0275prov=h.jDH({token:i,factory:i.\u0275fac,providedIn:"root"}),n})()}}]);