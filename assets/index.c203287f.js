const Tt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Tt();const Et="modulepreload",Ze={},Pt="/bookmarklet-generator/",Ke=function(e,n){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=`${Pt}${i}`,i in Ze)return;Ze[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Et,r||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),r)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function T(){}const Ht=t=>t;function Mt(t,e){for(const n in e)t[n]=e[n];return t}function ft(t){return t()}function Qe(){return Object.create(null)}function Y(t){t.forEach(ft)}function dt(t){return typeof t=="function"}function j(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Xt(t,e){return t!=t?e==e:t!==e}function Nt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return T;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Oe(t){let e;return pt(t,n=>e=n)(),e}function V(t,e,n){t.$$.on_destroy.push(pt(e,n))}function Jt(t,e,n,i){if(t){const r=mt(t,e,n,i);return t[0](r)}}function mt(t,e,n,i){return t[1]&&i?Mt(n.ctx.slice(),t[1](i(e))):n.ctx}function At(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function Dt(t,e,n,i,r,s){if(r){const o=mt(e,n,i,s);t.p(o,r)}}function Ot(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function gt(t,e,n){return t.set(n),e}const ht=typeof window<"u";let Vt=ht?()=>window.performance.now():()=>Date.now(),ze=ht?t=>requestAnimationFrame(t):T;const Q=new Set;function _t(t){Q.forEach(e=>{e.c(t)||(Q.delete(e),e.f())}),Q.size!==0&&ze(_t)}function Bt(t){let e;return Q.size===0&&ze(_t),{promise:new Promise(n=>{Q.add(e={c:t,f:n})}),abort(){Q.delete(e)}}}function _(t,e){t.appendChild(e)}function bt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Rt(t){const e=k("style");return jt(bt(t),e),e.sheet}function jt(t,e){_(t.head||t,e)}function L(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function F(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function U(t){return document.createTextNode(t)}function E(){return U(" ")}function vt(){return U("")}function B(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function zt(t){return Array.from(t.childNodes)}function We(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ge(t,e){t.value=e??""}let he;function Wt(){if(he===void 0){he=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{he=!0}}return he}function Ft(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=k("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=Wt();let s;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=B(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{s=B(i.contentWindow,"resize",e)}),_(t,i),()=>{(r||s&&i.contentWindow)&&s(),C(i)}}function X(t,e,n){t.classList[n?"add":"remove"](e)}function yt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const Ne=new Map;let Je=0;function Ut(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Yt(t,e){const n={stylesheet:Rt(e),rules:{}};return Ne.set(t,n),n}function et(t,e,n,i,r,s,o,a=0){const l=16.666/i;let c=`{
`;for(let b=0;b<=1;b+=l){const w=e+(n-e)*s(b);c+=b*100+`%{${o(w,1-w)}}
`}const f=c+`100% {${o(n,1-n)}}
}`,u=`__svelte_${Ut(f)}_${a}`,d=bt(t),{stylesheet:m,rules:v}=Ne.get(d)||Yt(d,t);v[u]||(v[u]=!0,m.insertRule(`@keyframes ${u} ${f}`,m.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${u} ${i}ms linear ${r}ms 1 both`,Je+=1,u}function Zt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),Je-=r,Je||Kt())}function Kt(){ze(()=>{Je||(Ne.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),Ne.clear())})}let ue;function le(t){ue=t}function wt(){if(!ue)throw new Error("Function called outside component initialization");return ue}function Un(t){wt().$$.on_mount.push(t)}function Qt(){const t=wt();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=yt(e,n,{cancelable:i});return r.slice().forEach(o=>{o.call(t,s)}),!s.defaultPrevented}return!0}}function Gt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const re=[],R=[],be=[],Re=[],en=Promise.resolve();let je=!1;function tn(){je||(je=!0,en.then(kt))}function G(t){be.push(t)}function Ae(t){Re.push(t)}const Ve=new Set;let _e=0;function kt(){const t=ue;do{for(;_e<re.length;){const e=re[_e];_e++,le(e),nn(e.$$)}for(le(null),re.length=0,_e=0;R.length;)R.pop()();for(let e=0;e<be.length;e+=1){const n=be[e];Ve.has(n)||(Ve.add(n),n())}be.length=0}while(re.length);for(;Re.length;)Re.pop()();je=!1,Ve.clear(),le(t)}function nn(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}let ie;function rn(){return ie||(ie=Promise.resolve(),ie.then(()=>{ie=null})),ie}function Be(t,e,n){t.dispatchEvent(yt(`${e?"intro":"outro"}${n}`))}const ve=new Set;let O;function te(){O={r:0,c:[],p:O}}function ne(){O.r||Y(O.c),O=O.p}function x(t,e){t&&t.i&&(ve.delete(t),t.i(e))}function S(t,e,n,i){if(t&&t.o){if(ve.has(t))return;ve.add(t),O.c.push(()=>{ve.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const sn={duration:0};function tt(t,e,n,i){let r=e(t,n),s=i?0:1,o=null,a=null,l=null;function c(){l&&Zt(t,l)}function f(d,m){const v=d.b-s;return m*=Math.abs(v),{a:s,b:d.b,d:v,duration:m,start:d.start,end:d.start+m,group:d.group}}function u(d){const{delay:m=0,duration:v=300,easing:h=Ht,tick:b=T,css:w}=r||sn,g={start:Vt()+m,b:d};d||(g.group=O,O.r+=1),o||a?a=g:(w&&(c(),l=et(t,s,d,v,m,h,w)),d&&b(0,1),o=f(g,v),G(()=>Be(t,d,"start")),Bt($=>{if(a&&$>a.start&&(o=f(a,v),a=null,Be(t,o.b,"start"),w&&(c(),l=et(t,s,o.b,o.duration,0,h,r.css))),o){if($>=o.end)b(s=o.b,1-s),Be(t,o.b,"end"),a||(o.b?c():--o.group.r||Y(o.group.c)),o=null;else if($>=o.start){const N=$-o.start;s=o.a+o.d*h(N/o.duration),b(s,1-s)}}return!!(o||a)}))}return{run(d){dt(r)?rn().then(()=>{r=r(),u(d)}):u(d)},end(){c(),o=a=null}}}function ee(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function M(t){t&&t.c()}function P(t,e,n,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),i||G(()=>{const l=s.map(ft).filter(dt);o?o.push(...l):Y(l),t.$$.on_mount=[]}),a.forEach(G)}function H(t,e){const n=t.$$;n.fragment!==null&&(Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function on(t,e){t.$$.dirty[0]===-1&&(re.push(t),tn(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(t,e,n,i,r,s,o,a=[-1]){const l=ue;le(t);const c=t.$$={fragment:null,ctx:null,props:s,update:T,not_equal:r,bound:Qe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Qe(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(u,d,...m)=>{const v=m.length?m[0]:d;return c.ctx&&r(c.ctx[u],c.ctx[u]=v)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](v),f&&on(t,u)),d}):[],c.update(),f=!0,Y(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const u=zt(e.target);c.fragment&&c.fragment.l(u),u.forEach(C)}else c.fragment&&c.fragment.c();e.intro&&x(t.$$.fragment),P(t,e.target,e.anchor,e.customElement),kt()}le(l)}class z{$destroy(){H(this,1),this.$destroy=T}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var ln="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",an="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",Yn="M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M11,17H21V15H11M3,8V16L7,12M3,21H21V19H3V21Z",cn="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",un="M13 24C9.74 24 6.81 22 5.6 19L2.57 11.37C2.26 10.58 3 9.79 3.81 10.05L4.6 10.31C5.16 10.5 5.62 10.92 5.84 11.47L7.25 15H8V3.25C8 2.56 8.56 2 9.25 2S10.5 2.56 10.5 3.25V12H11.5V1.25C11.5 .56 12.06 0 12.75 0S14 .56 14 1.25V12H15V2.75C15 2.06 15.56 1.5 16.25 1.5C16.94 1.5 17.5 2.06 17.5 2.75V12H18.5V5.75C18.5 5.06 19.06 4.5 19.75 4.5S21 5.06 21 5.75V16C21 20.42 17.42 24 13 24Z",fn="M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z";function dn(t){let e,n;return{c(){e=F("svg"),n=F("path"),p(n,"d",t[0]),p(e,"viewBox","0 0 "+nt+" "+nt),p(e,"fill","currentColor"),p(e,"width","100%"),p(e,"height","100%"),p(e,"stroke","none")},m(i,r){L(i,e,r),_(e,n)},p(i,[r]){r&1&&p(n,"d",i[0])},i:T,o:T,d(i){i&&C(e)}}}const nt=24;function pn(t,e,n){let{d:i}=e;return t.$$set=r=>{"d"in r&&n(0,i=r.d)},[i]}class $t extends z{constructor(e){super(),q(this,e,pn,dn,Xt,{d:0})}}function mn(t){let e,n,i,r,s,o,a,l,c,f,u;return s=new $t({props:{d:un}}),{c(){e=k("div"),n=k("a"),i=k("div"),r=k("span"),M(s.$$.fragment),o=E(),a=k("div"),l=U(t[0]),p(r,"class","h-4 mr-2 w-4 inline-block  svelte-xk48ki"),p(i,"class","px-5 pt-3 grabber svelte-xk48ki"),p(a,"class","bg-white font-normal h-full mt-2 text-black text-sm text-center w-full min-h-8 max-w-56 px-5 pt-2 pb-3 whitespace-nowrap overflow-hidden overflow-ellipsis svelte-xk48ki"),p(n,"draggable","true"),p(n,"class","rounded-xl flex flex-col font-semibold h-min bg-blue-700 text-white text-lg tracking-wider min-w-5 min-h-7 transition-all duration-200 items-center inline-block overflow-y-hidden hover:bg-blue-600 svelte-xk48ki"),p(n,"href",t[1]),X(n,"hidden",t[2]),p(e,"class","relative block svelte-xk48ki")},m(d,m){L(d,e,m),_(e,n),_(n,i),_(i,r),P(s,r,null),_(n,o),_(n,a),_(a,l),c=!0,f||(u=[B(n,"dragstart",t[3]),B(n,"dragend",t[4]),B(n,"drag",t[5])],f=!0)},p(d,[m]){(!c||m&1)&&We(l,d[0]),(!c||m&2)&&p(n,"href",d[1]),m&4&&X(n,"hidden",d[2])},i(d){c||(x(s.$$.fragment,d),c=!0)},o(d){S(s.$$.fragment,d),c=!1},d(d){d&&C(e),H(s),f=!1,Y(u)}}}function gn(t,e,n){let{title:i}=e,{href:r}=e,s=!1,o=0;function a(u){const d=u.target.getBoundingClientRect();o=u.clientY-d.y,u.dataTransfer.setDragImage(u.target,(u.clientX-d.x)*window.devicePixelRatio,(u.clientY-d.y)*window.devicePixelRatio),setTimeout(()=>{n(2,s=!0)},1),u.dataTransfer.setData("text/plain",u.target.href)}function l(u){n(2,s=!1),c("dragEnd",{e:u}),u.dataTransfer.dropEffect==="copy"&&u.clientY<5&&c("bookmarked",{e:u}),console.log(u)}const c=Qt();function f(u){c("drag",{e:u,yOffset:o})}return t.$$set=u=>{"title"in u&&n(0,i=u.title),"href"in u&&n(1,r=u.href)},[i,r,s,a,l,f]}class hn extends z{constructor(e){super(),q(this,e,gn,mn,j,{title:0,href:1})}}function xt(t,e,n){var i=n||{},r=i.noTrailing,s=r===void 0?!1:r,o=i.noLeading,a=o===void 0?!1:o,l=i.debounceMode,c=l===void 0?void 0:l,f,u=!1,d=0;function m(){f&&clearTimeout(f)}function v(b){var w=b||{},g=w.upcomingOnly,$=g===void 0?!1:g;m(),u=!$}function h(){for(var b=arguments.length,w=new Array(b),g=0;g<b;g++)w[g]=arguments[g];var $=this,N=Date.now()-d;if(u)return;function J(){d=Date.now(),e.apply($,w)}function A(){f=void 0}!a&&c&&!f&&J(),m(),c===void 0&&N>t?a?(d=Date.now(),s||(f=setTimeout(c?A:J,t))):J():s!==!0&&(f=setTimeout(c?A:J,c===void 0?t-N:t))}return h.cancel=v,h}function St(t,e,n){var i=n||{},r=i.atBegin,s=r===void 0?!1:r;return xt(t,e,{debounceMode:s!==!1})}function _n(t){let e,n,i,r,s,o,a,l,c;return{c(){e=k("div"),n=F("svg"),i=F("defs"),r=F("marker"),s=F("path"),o=F("path"),p(s,"d","M 2 2 Q 6 5 12 7 M 2 12 Q 6 9 12 7"),p(r,"id","pointer"),p(r,"markerWidth","14"),p(r,"markerHeight","14"),p(r,"refX","2"),p(r,"refY","7"),p(r,"orient","auto"),p(r,"stroke-width",1*window.devicePixelRatio),p(r,"markerUnits","userSpaceOnUse"),p(o,"d",a=`m${t[3]} ${t[4]}Q ${t[1].x} ${t[4]*.7}, ${t[1].x} ${t[1].y}`),p(o,"marker-end","url(#pointer)"),p(n,"class","pointer-events-none svelte-km5v26"),p(n,"fill","none"),p(n,"stroke","#777"),p(n,"stroke-width",1.5*window.devicePixelRatio),p(n,"stroke-linecap","round"),p(n,"stroke-linejoin","round"),p(n,"viewBox",l=`0 0 ${t[2]} ${t[5]}`),p(n,"xmlns","http://www.w3.org/2000/svg"),p(e,"class","inset-0 transition-opacity duration-300 fixed svelte-km5v26"),G(()=>t[7].call(e)),X(e,"opacity-0",!t[0].dragging),X(e,"duration-0",!t[0].dragging)},m(f,u){L(f,e,u),_(e,n),_(n,i),_(i,r),_(r,s),_(n,o),c=Ft(e,t[7].bind(e))},p(f,[u]){u&26&&a!==(a=`m${f[3]} ${f[4]}Q ${f[1].x} ${f[4]*.7}, ${f[1].x} ${f[1].y}`)&&p(o,"d",a),u&36&&l!==(l=`0 0 ${f[2]} ${f[5]}`)&&p(n,"viewBox",l),u&1&&X(e,"opacity-0",!f[0].dragging),u&1&&X(e,"duration-0",!f[0].dragging)},i:T,o:T,d(f){f&&C(e),c()}}}function bn(t,e,n){let{dragState:i}=e,r={x:50,y:50},s={x:100,y:10},o=1,a=1,l=1,c=1;function f(){l=this.clientWidth,c=this.clientHeight,n(2,l),n(5,c)}return t.$$set=u=>{"dragState"in u&&n(0,i=u.dragState)},t.$$.update=()=>{t.$$.dirty&4&&n(1,s={x:l/2-200,y:15}),t.$$.dirty&3&&(i.clientX>0&&i.clientY>50?(n(6,r={x:i.clientX+s.x,y:Math.max(i.clientY+s.y-i.yOffset,50)}),n(0,i.dragging=!0,i)):n(0,i.dragging=!1,i)),t.$$.dirty&66&&(n(3,o=r.x-s.x),n(4,a=r.y-s.y))},[i,s,l,o,a,c,r,f]}class vn extends z{constructor(e){super(),q(this,e,bn,_n,j,{dragState:0})}}var ye,we,ke,$e,xe,se,qe,ae,Se,It,Ie,oe,Ce,Le,Te,W,Ct,Ee,Pe;Ce=/\/(?![*\/])(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;oe=/--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;ye=/(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;Te=/(['"])(?:(?!\1)[^\\\n\r]|\\(?:\r\n|[^]))*(\1)?/y;Ie=/(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;W=/[`}](?:[^`\\$]|\\[^]|\$(?!\{))*(`|\$\{)?/y;Pe=/[\t\v\f\ufeff\p{Zs}]+/yu;ae=/\r?\n|[\r\u2028\u2029]/y;Se=/\/\*(?:[^*]|\*(?!\/))*(\*\/)?/y;Le=/\/\/.*/y;ke=/[<>.:={}]|\/(?![\/*])/y;we=/[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;$e=/(['"])(?:(?!\1)[^])*(\1)?/y;xe=/[^<>{}]+/y;Ee=/^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;Ct=/^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;se=/^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;qe=/^(?:return|throw|yield)$/;It=RegExp(ae.source);var yn=function*(t,{jsx:e=!1}={}){var n,i,r,s,o,a,l,c,f,u,d,m,v,h;for({length:a}=t,s=0,o="",h=[{tag:"JS"}],n=[],d=0,m=!1;s<a;){switch(c=h[h.length-1],c.tag){case"JS":case"JSNonExpressionParen":case"InterpolationInTemplate":case"InterpolationInJSX":if(t[s]==="/"&&(Ee.test(o)||se.test(o))&&(Ce.lastIndex=s,l=Ce.exec(t))){s=Ce.lastIndex,o=l[0],m=!0,yield{type:"RegularExpressionLiteral",value:l[0],closed:l[1]!==void 0&&l[1]!=="\\"};continue}if(oe.lastIndex=s,l=oe.exec(t)){switch(v=l[0],f=oe.lastIndex,u=v,v){case"(":o==="?NonExpressionParenKeyword"&&h.push({tag:"JSNonExpressionParen",nesting:d}),d++,m=!1;break;case")":d--,m=!0,c.tag==="JSNonExpressionParen"&&d===c.nesting&&(h.pop(),u="?NonExpressionParenEnd",m=!1);break;case"{":oe.lastIndex=0,r=!Ct.test(o)&&(Ee.test(o)||se.test(o)),n.push(r),m=!1;break;case"}":switch(c.tag){case"InterpolationInTemplate":if(n.length===c.nesting){W.lastIndex=s,l=W.exec(t),s=W.lastIndex,o=l[0],l[1]==="${"?(o="?InterpolationInTemplate",m=!1,yield{type:"TemplateMiddle",value:l[0]}):(h.pop(),m=!0,yield{type:"TemplateTail",value:l[0],closed:l[1]==="`"});continue}break;case"InterpolationInJSX":if(n.length===c.nesting){h.pop(),s+=1,o="}",yield{type:"JSXPunctuator",value:"}"};continue}}m=n.pop(),u=m?"?ExpressionBraceEnd":"}";break;case"]":m=!0;break;case"++":case"--":u=m?"?PostfixIncDec":"?UnaryIncDec";break;case"<":if(e&&(Ee.test(o)||se.test(o))){h.push({tag:"JSXTag"}),s+=1,o="<",yield{type:"JSXPunctuator",value:v};continue}m=!1;break;default:m=!1}s=f,o=u,yield{type:"Punctuator",value:v};continue}if(ye.lastIndex=s,l=ye.exec(t)){switch(s=ye.lastIndex,u=l[0],l[0]){case"for":case"if":case"while":case"with":o!=="."&&o!=="?."&&(u="?NonExpressionParenKeyword")}o=u,m=!se.test(l[0]),yield{type:"IdentifierName",value:l[0]};continue}if(Te.lastIndex=s,l=Te.exec(t)){s=Te.lastIndex,o=l[0],m=!0,yield{type:"StringLiteral",value:l[0],closed:l[2]!==void 0};continue}if(Ie.lastIndex=s,l=Ie.exec(t)){s=Ie.lastIndex,o=l[0],m=!0,yield{type:"NumericLiteral",value:l[0]};continue}if(W.lastIndex=s,l=W.exec(t)){s=W.lastIndex,o=l[0],l[1]==="${"?(o="?InterpolationInTemplate",h.push({tag:"InterpolationInTemplate",nesting:n.length}),m=!1,yield{type:"TemplateHead",value:l[0]}):(m=!0,yield{type:"NoSubstitutionTemplate",value:l[0],closed:l[1]==="`"});continue}break;case"JSXTag":case"JSXTagEnd":if(ke.lastIndex=s,l=ke.exec(t)){switch(s=ke.lastIndex,u=l[0],l[0]){case"<":h.push({tag:"JSXTag"});break;case">":h.pop(),o==="/"||c.tag==="JSXTagEnd"?(u="?JSX",m=!0):h.push({tag:"JSXChildren"});break;case"{":h.push({tag:"InterpolationInJSX",nesting:n.length}),u="?InterpolationInJSX",m=!1;break;case"/":o==="<"&&(h.pop(),h[h.length-1].tag==="JSXChildren"&&h.pop(),h.push({tag:"JSXTagEnd"}))}o=u,yield{type:"JSXPunctuator",value:l[0]};continue}if(we.lastIndex=s,l=we.exec(t)){s=we.lastIndex,o=l[0],yield{type:"JSXIdentifier",value:l[0]};continue}if($e.lastIndex=s,l=$e.exec(t)){s=$e.lastIndex,o=l[0],yield{type:"JSXString",value:l[0],closed:l[2]!==void 0};continue}break;case"JSXChildren":if(xe.lastIndex=s,l=xe.exec(t)){s=xe.lastIndex,o=l[0],yield{type:"JSXText",value:l[0]};continue}switch(t[s]){case"<":h.push({tag:"JSXTag"}),s++,o="<",yield{type:"JSXPunctuator",value:"<"};continue;case"{":h.push({tag:"InterpolationInJSX",nesting:n.length}),s++,o="?InterpolationInJSX",m=!1,yield{type:"JSXPunctuator",value:"{"};continue}}if(Pe.lastIndex=s,l=Pe.exec(t)){s=Pe.lastIndex,yield{type:"WhiteSpace",value:l[0]};continue}if(ae.lastIndex=s,l=ae.exec(t)){s=ae.lastIndex,m=!1,qe.test(o)&&(o="?NoLineTerminatorHere"),yield{type:"LineTerminatorSequence",value:l[0]};continue}if(Se.lastIndex=s,l=Se.exec(t)){s=Se.lastIndex,It.test(l[0])&&(m=!1,qe.test(o)&&(o="?NoLineTerminatorHere")),yield{type:"MultiLineComment",value:l[0],closed:l[1]!==void 0};continue}if(Le.lastIndex=s,l=Le.exec(t)){s=Le.lastIndex,m=!1,yield{type:"SingleLineComment",value:l[0]};continue}i=String.fromCodePoint(t.codePointAt(s)),s+=i.length,o=i,m=!1,yield{type:c.tag.startsWith("JSX")?"JSXInvalid":"Invalid",value:i}}};function wn(t){return t.replace(/\n/g,"").replace(/\s\s+/g," ")}const kn=["SingleLineComment","MultiLineComment","WhiteSpace"],$n=/[\)\]\}]/;function xn(t){return Array.from(yn(t)).filter(i=>!kn.includes(i.type)).map((i,r,s)=>(i.type==="IdentifierName"&&s[r+1]?.type==="IdentifierName"&&(i.value+=" "),i.type==="IdentifierName"&&s[r+1]?.type==="LineTerminatorSequence"&&s[r+2]?.type!=="Punctuator"&&(i.value+=";"),i.type==="LineTerminatorSequence"&&(i.value=""),(i.type.includes("Literal")||i.type.includes("Template")||i.type==="Punctuator"&&$n.test(i.value))&&s[r+1]?.type==="LineTerminatorSequence"&&s[r+2]?.type!=="Punctuator"&&(i.value+=";"),i.value)).join("")}const K=[];function Z(t,e=T){let n;const i=new Set;function r(a){if(j(t,a)&&(t=a,n)){const l=!K.length;for(const c of i)c[1](),K.push(c,t);if(l){for(let c=0;c<K.length;c+=2)K[c][0](K[c+1]);K.length=0}}}function s(a){r(a(t))}function o(a,l=T){const c=[a,l];return i.add(c),i.size===1&&(n=e(r)||T),a(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:o}}function Sn(){const t=new URLSearchParams(window.location.search),e=Object.fromEntries(t.entries());return Object.assign({script:"",css:"",name:""},e)}function In(t){const e=new URLSearchParams(window.location.search);Object.entries(t).filter(([i,r])=>r.length>0).forEach(([i,r])=>{e.set(i,r)});const n=new URL(window.location.href);n.search=e.toString(),n.toString()!==window.location.toString()&&window.history.pushState(null,"",n.toString())}function Cn(t,e,n){let i=n.trim().length>0?`var style=document.createElement('style');style.textContent=\`${n}\`;document.head.append(style);`:"",r=e.trim().length>0?`${e}`:"";return`javascript:(async()=>{${i+r}})()`}const fe=Z(""),de=Z(""),pe=Z(""),Lt=Z(""),He=Z(""),Me=Z(""),ce=Z(!1),Fe=St(500,In),Ue=St(300,Ln);function Ln(){Lt.set(Cn(Oe(fe),Oe(de),Oe(pe)))}fe.subscribe(async t=>{Fe({name:t}),Ue()});de.subscribe(async t=>{Fe({script:t}),Ue()});pe.subscribe(async t=>{Fe({css:t}),Ue()});He.subscribe(async t=>{de.set(xn(t))});Me.subscribe(async t=>{pe.set(wn(t))});const Ye=Sn();fe.set(Ye.name);de.set(Ye.script);pe.set(Ye.css);function it(t){let e,n,i,r;return n=new $t({props:{d:t[1]}}),{c(){e=k("span"),M(n.$$.fragment),i=E(),p(e,"class","w-4 h-4 inline-block  svelte-1qpwqnw")},m(s,o){L(s,e,o),P(n,e,null),L(s,i,o),r=!0},p(s,o){const a={};o&2&&(a.d=s[1]),n.$set(a)},i(s){r||(x(n.$$.fragment,s),r=!0)},o(s){S(n.$$.fragment,s),r=!1},d(s){s&&C(e),H(n),s&&C(i)}}}function Tn(t){let e,n,i,r,s,o,a=t[1]&&it(t);return{c(){e=k("button"),a&&a.c(),n=k("span"),i=U(t[2]),p(n,"class","svelte-1qpwqnw"),p(e,"class","text-gray-900 py-1 flex rounded-lg items-center px-2 space-x-1 focus:outline-none relative svelte-1qpwqnw"),X(e,"text-blue-600",t[0]),X(e,"font-semibold",t[0])},m(l,c){L(l,e,c),a&&a.m(e,null),_(e,n),_(n,i),r=!0,s||(o=B(e,"click",t[3]),s=!0)},p(l,[c]){l[1]?a?(a.p(l,c),c&2&&x(a,1)):(a=it(l),a.c(),x(a,1),a.m(e,n)):a&&(te(),S(a,1,1,()=>{a=null}),ne()),(!r||c&4)&&We(i,l[2]),c&1&&X(e,"text-blue-600",l[0]),c&1&&X(e,"font-semibold",l[0])},i(l){r||(x(a),r=!0)},o(l){S(a),r=!1},d(l){l&&C(e),a&&a.d(),s=!1,o()}}}function En(t,e,n){let{primary:i=!1}=e,{icon:r=""}=e,{text:s=""}=e;function o(a){Gt.call(this,t,a)}return t.$$set=a=>{"primary"in a&&n(0,i=a.primary),"icon"in a&&n(1,r=a.icon),"text"in a&&n(2,s=a.text)},[i,r,s,o]}class Xe extends z{constructor(e){super(),q(this,e,En,Tn,j,{primary:0,icon:1,text:2})}}function Pn(t){let e,n,i,r,s,o,a;return n=new Xe({props:{primary:!0,text:"Edit",icon:fn}}),n.$on("click",t[1]),r=new Xe({props:{text:"Copy Link",icon:an}}),r.$on("click",t[2]),o=new Xe({props:{text:"GitHub",icon:cn}}),o.$on("click",t[3]),{c(){e=k("div"),M(n.$$.fragment),i=E(),M(r.$$.fragment),s=E(),M(o.$$.fragment),p(e,"class","fixed z-20 bottom-0 py-2 justify-center flex items-center w-full left-0 right-0 gap-3 bg-white shadow svelte-13qk0ap")},m(l,c){L(l,e,c),P(n,e,null),_(e,i),P(r,e,null),_(e,s),P(o,e,null),a=!0},p:T,i(l){a||(x(n.$$.fragment,l),x(r.$$.fragment,l),x(o.$$.fragment,l),a=!0)},o(l){S(n.$$.fragment,l),S(r.$$.fragment,l),S(o.$$.fragment,l),a=!1},d(l){l&&C(e),H(n),H(r),H(o)}}}function Hn(t,e,n){let i;return V(t,ce,a=>n(0,i=a)),[i,()=>gt(ce,i=!i,i),()=>navigator.clipboard.writeText(window.location.href),()=>window.open("https://github.com/AlexRuppert/bookmarklet-generator","_blank","noopener")]}class Mn extends z{constructor(e){super(),q(this,e,Hn,Pn,j,{})}}function rt(t,e,n){const i=t.slice();return i[3]=e[n],i}function st(t){let e,n=t[3]+"",i,r,s,o;function a(){return t[2](t[3])}return{c(){e=k("li"),i=U(n),r=E(),p(e,"class","px-3 py-1 border-b-3 transition-colors tracking-wide cursor-pointer select-none svelte-1okxl4x"),X(e,"active",t[0]===t[3])},m(l,c){L(l,e,c),_(e,i),_(e,r),s||(o=B(e,"click",a),s=!0)},p(l,c){t=l,c&2&&n!==(n=t[3]+"")&&We(i,n),c&3&&X(e,"active",t[0]===t[3])},d(l){l&&C(e),s=!1,o()}}}function Xn(t){let e,n=t[1],i=[];for(let r=0;r<n.length;r+=1)i[r]=st(rt(t,n,r));return{c(){e=k("ul");for(let r=0;r<i.length;r+=1)i[r].c();p(e,"class","flex svelte-1okxl4x")},m(r,s){L(r,e,s);for(let o=0;o<i.length;o+=1)i[o].m(e,null)},p(r,[s]){if(s&3){n=r[1];let o;for(o=0;o<n.length;o+=1){const a=rt(r,n,o);i[o]?i[o].p(a,s):(i[o]=st(a),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},i:T,o:T,d(r){r&&C(e),qt(i,r)}}}function Nn(t,e,n){let{tabs:i=[]}=e,{activeTab:r=""}=e;const s=o=>n(0,r=o);return t.$$set=o=>{"tabs"in o&&n(1,i=o.tabs),"activeTab"in o&&n(0,r=o.activeTab)},t.$$.update=()=>{t.$$.dirty&3&&i.length>0&&(!r||!i.find(o=>o===r))&&n(0,r=i[0])},[r,i,s]}class Jn extends z{constructor(e){super(),q(this,e,Nn,Xn,j,{tabs:1,activeTab:0})}}/iPad|iPhone|iPod/.test(navigator.userAgent);const An=navigator?.userAgentData?.platform||navigator?.platform||"unknown",ot=An.indexOf("Mac")===0;function Dn(t){const e=t-1;return e*e*e+1}function lt(t,{delay:e=0,duration:n=400,easing:i=Dn,x:r=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,f=l*(1-o);return{delay:e,duration:n,easing:i,css:(u,d)=>`
			transform: ${c} translate(${(1-u)*r}px, ${(1-u)*s}px);
			opacity: ${l-f*d}`}}function at(t){let e,n,i;const r=t[4].default,s=Jt(r,t,t[3],null);return{c(){e=k("div"),s&&s.c(),p(e,"class","rounded bg-green-600 shadow-md text-white py-2 px-5 shadow-green-800 svelte-8czty6")},m(o,a){L(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&8)&&Dt(s,r,o,o[3],i?At(r,o[3],a,null):Ot(o[3]),null)},i(o){i||(x(s,o),G(()=>{n||(n=tt(e,lt,{y:-100},!0)),n.run(1)}),i=!0)},o(o){S(s,o),n||(n=tt(e,lt,{y:-100},!1)),n.run(0),i=!1},d(o){o&&C(e),s&&s.d(o),o&&n&&n.end()}}}function On(t){let e,n,i=t[0]&&at(t);return{c(){e=k("div"),i&&i.c(),p(e,"class","flex top-5 right-0 left-0 fixed justify-center pointer-events-none svelte-8czty6")},m(r,s){L(r,e,s),i&&i.m(e,null),n=!0},p(r,[s]){r[0]?i?(i.p(r,s),s&1&&x(i,1)):(i=at(r),i.c(),x(i,1),i.m(e,null)):i&&(te(),S(i,1,1,()=>{i=null}),ne())},i(r){n||(x(i),n=!0)},o(r){S(i),n=!1},d(r){r&&C(e),i&&i.d()}}}function Vn(t,e,n){let{$$slots:i={},$$scope:r}=e,s=!1,{timeout:o=2e3}=e;function a(){n(0,s=!0),setTimeout(()=>{n(0,s=!1)},o)}return t.$$set=l=>{"timeout"in l&&n(1,o=l.timeout),"$$scope"in l&&n(3,r=l.$$scope)},[s,o,a,r,i]}class Bn extends z{constructor(e){super(),q(this,e,Vn,On,j,{timeout:1,show:2})}get show(){return this.$$.ctx[2]}}function Rn(t){let e;return{c(){e=k("span"),e.textContent="Bookmarklet added!",p(e,"class","font-semibold svelte-idxb3w")},m(n,i){L(n,e,i)},p:T,d(n){n&&C(e)}}}function ct(t){let e,n,i,r,s,o,a,l,c,f,u,d;return{c(){e=k("div"),n=k("div"),n.innerHTML='<div>to your Bookmarks bar to create a <abbr title="Bookmarklets are bookmarks with commands that can be run by clicking on them."><a href="https://en.wikipedia.org/wiki/Bookmarklet">Bookmarklet</a></abbr></div>',i=E(),r=k("div"),s=k("div"),s.innerHTML=`<div><abbr title="A bookmarks bar, sometimes called favorites bar, allows quick access to your bookmarks and supports drag &amp; drop."><a href="https://duckduckgo.com/?q=what+is+a+bookmarks+bar&amp;t=h_&amp;ia=web" target="_blank" rel="noopener noreferrer">Bookmarks bar</a></abbr> not visible?</div> 
          <div>Try</div>`,o=E(),a=k("div"),l=k("kbd"),l.textContent=`${ot?"\u21E7":"shift"}`,c=U(" + "),f=k("kbd"),f.textContent=`${ot?"\u2318":"ctrl"}`,u=U(`\r
          +\r
          `),d=k("kbd"),d.textContent="B",p(n,"class","font-semibold text-xl mb-16 svelte-idxb3w"),p(s,"class"," svelte-idxb3w"),p(a,"class","svelte-idxb3w"),p(r,"class","space-y-2 svelte-idxb3w"),p(e,"class","flex flex-col -mt-24 text-center gap-3 justify-center cursive svelte-idxb3w")},m(m,v){L(m,e,v),_(e,n),_(e,i),_(e,r),_(r,s),_(r,o),_(r,a),_(a,l),_(a,c),_(a,f),_(a,u),_(a,d)},p:T,d(m){m&&C(e)}}}function ut(t){let e,n,i,r,s,o,a,l,c,f,u,d,m,v,h,b,w,g,$;i=new Xe({props:{icon:ln}}),i.$on("click",t[14]);function N(I){t[16](I)}let J={tabs:["Script","Style"]};t[0]!==void 0&&(J.activeTab=t[0]),u=new Jn({props:J}),R.push(()=>ee(u,"activeTab",N));const A=[qn,jn],D=[];function me(I,y){return I[0]==="Script"?0:1}return h=me(t),b=D[h]=A[h](t),{c(){e=k("div"),n=k("div"),M(i.$$.fragment),r=E(),s=k("div"),o=k("label"),o.textContent="Name",a=E(),l=k("input"),c=E(),f=k("div"),M(u.$$.fragment),m=E(),v=k("div"),b.c(),p(n,"class","top-0 right-10 absolute svelte-idxb3w"),p(o,"class","font-normal text-center mb-1 block select-none svelte-idxb3w"),p(o,"for","name"),p(l,"type","text"),p(l,"class","border rounded-md max-w-96 py-2 px-3 svelte-idxb3w"),p(l,"spellcheck","false"),p(l,"autocomplete","none"),p(s,"class","flex flex-col self-center justify-center svelte-idxb3w"),p(v,"class","rounded-b-md bg-light-150 shadow-md svelte-idxb3w"),p(f,"class","svelte-idxb3w"),p(e,"class","flex flex-col space-y-5 -mt-32 px-10 z-10 relative justify-center svelte-idxb3w")},m(I,y){L(I,e,y),_(e,n),P(i,n,null),_(e,r),_(e,s),_(s,o),_(s,a),_(s,l),Ge(l,t[5]),_(e,c),_(e,f),P(u,f,null),_(f,m),_(f,v),D[h].m(v,null),w=!0,g||($=B(l,"input",t[15]),g=!0)},p(I,y){y&32&&l.value!==I[5]&&Ge(l,I[5]);const ge={};!d&&y&1&&(d=!0,ge.activeTab=I[0],Ae(()=>d=!1)),u.$set(ge);let De=h;h=me(I),h===De?D[h].p(I,y):(te(),S(D[De],1,1,()=>{D[De]=null}),ne(),b=D[h],b?b.p(I,y):(b=D[h]=A[h](I),b.c()),x(b,1),b.m(v,null))},i(I){w||(x(i.$$.fragment,I),x(u.$$.fragment,I),x(b),w=!0)},o(I){S(i.$$.fragment,I),S(u.$$.fragment,I),S(b),w=!1},d(I){I&&C(e),H(i),H(u),D[h].d(),g=!1,$()}}}function jn(t){let e,n,i,r;function s(l){t[18](l)}var o=t[1];function a(l){let c={lang:"css"};return l[9]!==void 0&&(c.code=l[9]),{props:c}}return o&&(e=new o(a(t)),R.push(()=>ee(e,"code",s))),{c(){e&&M(e.$$.fragment),i=vt()},m(l,c){e&&P(e,l,c),L(l,i,c),r=!0},p(l,c){const f={};if(!n&&c&512&&(n=!0,f.code=l[9],Ae(()=>n=!1)),o!==(o=l[1])){if(e){te();const u=e;S(u.$$.fragment,1,0,()=>{H(u,1)}),ne()}o?(e=new o(a(l)),R.push(()=>ee(e,"code",s)),M(e.$$.fragment),x(e.$$.fragment,1),P(e,i.parentNode,i)):e=null}else o&&e.$set(f)},i(l){r||(e&&x(e.$$.fragment,l),r=!0)},o(l){e&&S(e.$$.fragment,l),r=!1},d(l){l&&C(i),e&&H(e,l)}}}function qn(t){let e,n,i,r;function s(l){t[17](l)}var o=t[1];function a(l){let c={lang:"javascript"};return l[8]!==void 0&&(c.code=l[8]),{props:c}}return o&&(e=new o(a(t)),R.push(()=>ee(e,"code",s))),{c(){e&&M(e.$$.fragment),i=vt()},m(l,c){e&&P(e,l,c),L(l,i,c),r=!0},p(l,c){const f={};if(!n&&c&256&&(n=!0,f.code=l[8],Ae(()=>n=!1)),o!==(o=l[1])){if(e){te();const u=e;S(u.$$.fragment,1,0,()=>{H(u,1)}),ne()}o?(e=new o(a(l)),R.push(()=>ee(e,"code",s)),M(e.$$.fragment),x(e.$$.fragment,1),P(e,i.parentNode,i)):e=null}else o&&e.$set(f)},i(l){r||(e&&x(e.$$.fragment,l),r=!0)},o(l){e&&S(e.$$.fragment,l),r=!1},d(l){l&&C(i),e&&H(e,l)}}}function zn(t){let e,n,i,r,s,o,a,l,c,f,u,d,m;function v(g){t[13](g)}let h={$$slots:{default:[Rn]},$$scope:{ctx:t}};t[2]!==void 0&&(h.show=t[2]),n=new Bn({props:h}),R.push(()=>ee(n,"show",v)),s=new vn({props:{dragState:t[4]}}),l=new hn({props:{title:t[5],href:t[6]}}),l.$on("drag",t[12]),l.$on("dragEnd",t[10]),l.$on("bookmarked",t[11]);let b=!t[7]&&ct(),w=t[7]&&t[1]&&ut(t);return d=new Mn({}),{c(){e=k("div"),M(n.$$.fragment),r=E(),M(s.$$.fragment),o=E(),a=k("div"),M(l.$$.fragment),c=E(),b&&b.c(),f=E(),w&&w.c(),u=E(),M(d.$$.fragment),p(a,"class","flex h-80 justify-center items-center svelte-idxb3w"),X(a,"opacity-30",t[3]),p(e,"class","mr-auto ml-auto max-w-sm py-4 svelte-idxb3w")},m(g,$){L(g,e,$),P(n,e,null),_(e,r),P(s,e,null),_(e,o),_(e,a),P(l,a,null),_(e,c),b&&b.m(e,null),L(g,f,$),w&&w.m(g,$),L(g,u,$),P(d,g,$),m=!0},p(g,[$]){const N={};$&8388608&&(N.$$scope={dirty:$,ctx:g}),!i&&$&4&&(i=!0,N.show=g[2],Ae(()=>i=!1)),n.$set(N);const J={};$&16&&(J.dragState=g[4]),s.$set(J);const A={};$&32&&(A.title=g[5]),$&64&&(A.href=g[6]),l.$set(A),$&8&&X(a,"opacity-30",g[3]),g[7]?b&&(b.d(1),b=null):b?b.p(g,$):(b=ct(),b.c(),b.m(e,null)),g[7]&&g[1]?w?(w.p(g,$),$&130&&x(w,1)):(w=ut(g),w.c(),x(w,1),w.m(u.parentNode,u)):w&&(te(),S(w,1,1,()=>{w=null}),ne())},i(g){m||(x(n.$$.fragment,g),x(s.$$.fragment,g),x(l.$$.fragment,g),x(w),x(d.$$.fragment,g),m=!0)},o(g){S(n.$$.fragment,g),S(s.$$.fragment,g),S(l.$$.fragment,g),S(w),S(d.$$.fragment,g),m=!1},d(g){g&&C(e),H(n),H(s),H(l),b&&b.d(),g&&C(f),w&&w.d(g),g&&C(u),H(d,g)}}}function Wn(t,e,n){let i,r,s,o,a,l,c;V(t,pe,y=>n(19,i=y)),V(t,de,y=>n(20,r=y)),V(t,fe,y=>n(5,s=y)),V(t,Lt,y=>n(6,o=y)),V(t,ce,y=>n(7,a=y)),V(t,He,y=>n(8,l=y)),V(t,Me,y=>n(9,c=y));let f,u,d,m=!1,v={dragging:!1,clientX:0,clientY:0,yOffset:0};function h(y){n(4,v.clientX=y.detail.e.clientX,v),n(4,v.clientY=y.detail.e.clientY,v),n(4,v.yOffset=y.detail.yOffset,v)}function b(y){n(4,v.dragging=!1,v)}function w(y){d(),n(3,m=!0)}const g=xt(3,h);async function $(){const{formatScript:y,formatCss:ge}=await Ke(()=>import("./formatting.64735cff.js"),[]);He.set(y(r)),Me.set(ge(i)),n(1,u=u||(await Ke(()=>import("./CodeEditor.abb7cdd8.js"),["assets/CodeEditor.abb7cdd8.js","assets/CodeEditor.8ecbdbf3.css","assets/formatting.64735cff.js"])).default)}ce.subscribe(y=>{y&&$()});function N(y){d=y,n(2,d)}const J=()=>gt(ce,a=!1,a);function A(){s=this.value,fe.set(s)}function D(y){f=y,n(0,f)}function me(y){l=y,He.set(l)}function I(y){c=y,Me.set(c)}return[f,u,d,m,v,s,o,a,l,c,b,w,g,N,J,A,D,me,I]}class Fn extends z{constructor(e){super(),q(this,e,Wn,zn,j,{})}}new Fn({target:document.getElementById("app")});export{Xe as B,z as S,E as a,p as b,M as c,L as d,k as e,P as f,_ as g,We as h,q as i,x as j,S as k,C as l,Yn as m,H as n,Un as o,R as p,j as s,U as t};