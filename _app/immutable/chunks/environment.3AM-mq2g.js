import{n as c,s as h}from"./scheduler.DroEbEG6.js";const e=[];function d(n,l=c){let o;const i=new Set;function r(t){if(h(n,t)&&(n=t,o)){const b=!e.length;for(const s of i)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function a(t){r(t(n))}function _(t,b=c){const s=[t,b];return i.add(s),i.size===1&&(o=l(r,a)||c),t(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:r,update:a,subscribe:_}}var f;const g=((f=globalThis.__sveltekit_1wnehg)==null?void 0:f.base)??"/at4re-md-table-formatter";var u;const m=((u=globalThis.__sveltekit_1wnehg)==null?void 0:u.assets)??g,w="0.0.1";export{m as a,g as b,w as v,d as w};
