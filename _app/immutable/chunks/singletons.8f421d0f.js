import{J as d,s as E}from"./index.4b5e17c1.js";const c=[];function p(e,t=d){let s;const o=new Set;function r(n){if(E(e,n)&&(e=n,s)){const u=!c.length;for(const a of o)a[1](),c.push(a,e);if(u){for(let a=0;a<c.length;a+=2)c[a][0](c[a+1]);c.length=0}}}function i(n){r(n(e))}function l(n,u=d){const a=[n,u];return o.add(a),o.size===1&&(s=t(r)||d),n(e),()=>{o.delete(a),o.size===0&&s&&(s(),s=null)}}return{set:r,update:i,subscribe:l}}var g;const m=((g=globalThis.__sveltekit_1kgxsk4)==null?void 0:g.base)??"";var k;const w=((k=globalThis.__sveltekit_1kgxsk4)==null?void 0:k.assets)??m,A="1681558696529",x="sveltekit:snapshot",I="sveltekit:scroll",y="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const s=e.getElementsByTagName("base");t=s.length?s[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function N(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!s||!!o||S(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:s,external:r,target:o}}function V(e){let t=null,s=null,o=null,r=null,i=null,l=null,n=e;for(;n&&n!==document.documentElement;)o===null&&(o=f(n,"preload-code")),r===null&&(r=f(n,"preload-data")),t===null&&(t=f(n,"keepfocus")),s===null&&(s=f(n,"noscroll")),i===null&&(i=f(n,"reload")),l===null&&(l=f(n,"replacestate")),n=v(n);return{preload_code:b[o??"off"],preload_data:b[r??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:s==="off"?!1:s===""?!0:null,reload:i==="off"?!1:i===""?!0:null,replace_state:l==="off"?!1:l===""?!0:null}}function h(e){const t=p(e);let s=!0;function o(){s=!0,t.update(l=>l)}function r(l){s=!1,t.set(l)}function i(l){let n;return t.subscribe(u=>{(n===void 0||s&&u!==n)&&l(n=u)})}return{notify:o,set:r,subscribe:i}}function R(){const{set:e,subscribe:t}=p(!1);let s;async function o(){clearTimeout(s);const r=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(r.ok){const l=(await r.json()).version!==A;return l&&(e(!0),clearTimeout(s)),l}else throw new Error(`Version check failed: ${r.status}`)}return{subscribe:t,check:o}}function S(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function P(e){e.client}const Y={url:h({}),page:h({}),navigating:p(null),updated:R()};export{y as I,_ as P,I as S,x as a,N as b,V as c,U as d,m as e,L as f,O as g,P as h,S as i,Y as s};
