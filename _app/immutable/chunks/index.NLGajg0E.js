var U=Object.defineProperty;var V=(t,e,n)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var j=(t,e,n)=>(V(t,typeof e!="symbol"?e+"":e,n),n);import{n as w,A as q,i as B,B as T,C as v,D as R,E as S,F as W,G as D,H as N,f as X,I as Y,J as Z,K as tt,L as et,M as z,N as nt,O as st,P as it,Q as rt,R as at}from"./scheduler.DroEbEG6.js";const F=typeof window<"u";let L=F?()=>window.performance.now():()=>Date.now(),I=F?t=>requestAnimationFrame(t):w;const p=new Set;function G(t){p.forEach(e=>{e.c(t)||(p.delete(e),e.f())}),p.size!==0&&I(G)}function H(t){let e;return p.size===0&&I(G),{promise:new Promise(n=>{p.add(e={c:t,f:n})}),abort(){p.delete(e)}}}const O=new Map;let C=0;function ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ft(t,e){const n={stylesheet:T(e),rules:{}};return O.set(t,n),n}function J(t,e,n,s,r,a,u,l=0){const d=16.666/s;let i=`{
`;for(let g=0;g<=1;g+=d){const m=e+(n-e)*a(g);i+=g*100+`%{${u(m,1-m)}}
`}const f=i+`100% {${u(n,1-n)}}
}`,o=`__svelte_${ot(f)}_${l}`,_=q(t),{stylesheet:c,rules:$}=O.get(_)||ft(_,t);$[o]||($[o]=!0,c.insertRule(`@keyframes ${o} ${f}`,c.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${o} ${s}ms linear ${r}ms 1 both`,C+=1,o}function A(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),r=n.length-s.length;r&&(t.style.animation=s.join(", "),C-=r,C||ut())}function ut(){I(()=>{C||(O.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&B(e)}),O.clear())})}let x;function K(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function P(t,e,n){t.dispatchEvent(W(`${e?"intro":"outro"}${n}`))}const k=new Set;let y;function gt(){y={r:0,c:[],p:y}}function yt(){y.r||v(y.c),y=y.p}function ct(t,e){t&&t.i&&(k.delete(t),t.i(e))}function pt(t,e,n,s){if(t&&t.o){if(k.has(t))return;k.add(t),y.c.push(()=>{k.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Q={duration:0};function wt(t,e,n){const s={direction:"in"};let r=e(t,n,s),a=!1,u,l,d=0;function i(){u&&A(t,u)}function f(){const{delay:_=0,duration:c=300,easing:$=D,tick:h=w,css:g}=r||Q;g&&(u=J(t,0,1,c,_,$,g,d++)),h(0,1);const m=L()+_,E=m+c;l&&l.abort(),a=!0,S(()=>P(t,!0,"start")),l=H(b=>{if(a){if(b>=E)return h(1,0),P(t,!0,"end"),i(),a=!1;if(b>=m){const M=$((b-m)/c);h(M,1-M)}}return a})}let o=!1;return{start(){o||(o=!0,A(t),R(r)?(r=r(s),K().then(f)):f())},invalidate(){o=!1},end(){a&&(i(),a=!1)}}}function xt(t,e,n){const s={direction:"out"};let r=e(t,n,s),a=!0,u;const l=y;l.r+=1;let d;function i(){const{delay:f=0,duration:o=300,easing:_=D,tick:c=w,css:$}=r||Q;$&&(u=J(t,1,0,o,f,_,$));const h=L()+f,g=h+o;S(()=>P(t,!1,"start")),"inert"in t&&(d=t.inert,t.inert=!0),H(m=>{if(a){if(m>=g)return c(0,1),P(t,!1,"end"),--l.r||v(l.c),!1;if(m>=h){const E=_((m-h)/o);c(1-E,E)}}return a})}return R(r)?K().then(()=>{r=r(s),i()}):i(),{end(f){f&&"inert"in t&&(t.inert=d),f&&r.tick&&r.tick(1,0),a&&(u&&A(t,u),a=!1)}}}function vt(t){t&&t.c()}function Et(t,e){t&&t.l(e)}function lt(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),S(()=>{const a=t.$$.on_mount.map(nt).filter(R);t.$$.on_destroy?t.$$.on_destroy.push(...a):v(a),t.$$.on_mount=[]}),r.forEach(S)}function dt(t,e){const n=t.$$;n.fragment!==null&&(tt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(st.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function kt(t,e,n,s,r,a,u=null,l=[-1]){const d=et;z(t);const i=t.$$={fragment:null,ctx:[],props:a,update:w,not_equal:r,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:N(),dirty:l,skip_bound:!1,root:e.target||d.$$.root};u&&u(i.root);let f=!1;if(i.ctx=n?n(t,e.props||{},(o,_,...c)=>{const $=c.length?c[0]:_;return i.ctx&&r(i.ctx[o],i.ctx[o]=$)&&(!i.skip_bound&&i.bound[o]&&i.bound[o]($),f&&_t(t,o)),_}):[],i.update(),f=!0,v(i.before_update),i.fragment=s?s(i.ctx):!1,e.target){if(e.hydrate){rt();const o=X(e.target);i.fragment&&i.fragment.l(o),o.forEach(B)}else i.fragment&&i.fragment.c();e.intro&&ct(t.$$.fragment),lt(t,e.target,e.anchor),at(),Y()}z(d)}class St{constructor(){j(this,"$$");j(this,"$$set")}$destroy(){dt(this,1),this.$destroy=w}$on(e,n){if(!R(n))return w;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $t="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($t);export{St as S,pt as a,vt as b,yt as c,Et as d,dt as e,J as f,gt as g,A as h,kt as i,wt as j,xt as k,H as l,lt as m,L as n,ct as t};
