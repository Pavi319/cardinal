const e={allRenderFn:!1,cmpDidLoad:!0,cmpShouldUpdate:!1,cmpDidUnload:!0,cmpDidUpdate:!0,cmpDidRender:!1,cmpWillLoad:!0,cmpWillUpdate:!1,cmpWillRender:!1,connectedCallback:!0,disconnectedCallback:!0,element:!1,event:!0,hasRenderFn:!0,lifecycle:!0,asyncLoading:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!1,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!1,mode:!1,noVdomRender:!1,observeAttribute:!0,prop:!0,propBoolean:!0,propNumber:!0,propString:!0,propMutable:!0,reflect:!0,scoped:!1,shadowDom:!0,slot:!0,slotRelocation:!0,state:!0,style:!0,svg:!1,updatable:!0,vdomAttribute:!0,vdomXlink:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,lazyLoad:!0,hydrateServerSide:!1,cssVarShim:!0,initializeNextTick:!0,hydrateClientSide:!1,isDebug:!1,isDev:!1,devTools:!1,lifecycleDOMEvents:!1,profile:!1,hotModuleReplacement:!1,constructableCSS:!0,cssAnnotations:!0};let t,n,l,o=0,s=!1,r=!1,i=!1,c=!1;const a=window,d=document,u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},f=(()=>!!d.documentElement.attachShadow)(),m=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),p={},h=new WeakMap,b=e=>h.get(e),y=(e,t)=>h.set(t.o=e,t),w=(e,t)=>t in e,$=e=>console.error(e),v=new Map,g=new Map,k=[],_=[],S=[],L=(e,t)=>n=>{e.push(n),s||(s=!0,t&&4&u.t?U(j):u.raf(j))},R=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){$(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},j=()=>{o++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){$(t)}e.length=0})(k);const e=2==(6&u.t)?performance.now()+10*Math.ceil(o*(1/22)):1/0;R(_,e),R(S,e),_.length>0&&(S.push(..._),_.length=0),(s=k.length+_.length+S.length>0)?u.raf(j):o=0},U=e=>Promise.resolve().then(e),C=L(k,!1),M=L(_,!0),D={},T=e=>"object"==(e=typeof e)||"function"===e,x=()=>a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_cardinal("./p-d8631f0b.js").then(()=>{u.s=a.__stencil_cssshim}),O=async()=>{u.s=a.__stencil_cssshim;const e=new RegExp("/cardinal(\\.esm)?\\.js($|\\?|#)"),t=Array.from(d.querySelectorAll("script")).find(t=>e.test(t.src)||"cardinal"===t.getAttribute("data-stencil-namespace")),n=t["data-opts"];{const e=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,a.location.href));return P(e.href),window.customElements||await __sc_import_cardinal("./p-d0882b30.js"),Object.assign(Object.assign({},n),{resourcesUrl:e.href})}},P=e=>{const t=(()=>`__sc_import_${"cardinal".replace(/\s|-/g,"_")}`)();try{a[t]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;a[t]=n=>{const o=new URL(n,e).href;let s=l.get(o);if(!s){const e=d.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${t}.m = m;`],{type:"application/javascript"})),s=new Promise(n=>{e.onload=()=>{n(a[t].m),e.remove()}}),l.set(o,s),d.head.appendChild(e)}return s}}},W="http://www.w3.org/1999/xlink",A=new WeakMap,E=e=>"sc-"+e,F=(e,t,...n)=>{let l=null,o=null,s=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!T(l))&&(l=String(l)),r&&i?c[c.length-1].i+=l:c.push(r?B(null,l):l),i=r)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,V);const d=B(e,null);return d.u=t,c.length>0&&(d.p=c),d.h=o,d.$=s,d},B=(e,t)=>({t:0,v:e,i:t,g:null,p:null,u:null,h:null,$:null}),N={},V={forEach:(e,t)=>e.map(q).forEach(t),map:(e,t)=>e.map(q).map(t).map(z)},q=e=>({vattrs:e.u,vchildren:e.p,vkey:e.h,vname:e.$,vtag:e.v,vtext:e.i}),z=e=>{const t=B(e.vtag,e.vtext);return t.u=e.vattrs,t.p=e.vchildren,t.h=e.vkey,t.$=e.vname,t},H=(e,t,n,l,o,s)=>{if(n===l)return;let r=w(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,o=Q(n),s=Q(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const a=T(l);if((r||a&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(c){}let d=!1;i!==(i=i.replace(/^xlink\:?/,""))&&(t=i,d=!0),null==l||!1===l?d?e.removeAttributeNS(W,t):e.removeAttribute(t):(!r||4&s||o)&&!a&&(l=!0===l?"":l,d?e.setAttributeNS(W,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):w(a,i)?i.slice(2):i[2]+t.slice(3),n&&u.rel(e,t,n,!1),l&&u.ael(e,t,l,!1)},K=/\s/,Q=e=>e?e.split(K):[],X=(e,t,n,l)=>{const o=11===t.g.nodeType&&t.g.host?t.g.host:t.g,s=e&&e.u||D,r=t.u||D;for(l in s)l in r||H(o,l,s[l],void 0,n,t.t);for(l in r)H(o,l,s[l],r[l],n,t.t)},G=(e,o,s,i)=>{let a,u,f,m=o.p[s],p=0;if(r||(c=!0,"slot"===m.v&&(t&&i.classList.add(t+"-s"),m.t|=m.p?2:1)),null!==m.i)a=m.g=d.createTextNode(m.i);else if(1&m.t)a=m.g=d.createTextNode("");else if(a=m.g=d.createElement(2&m.t?"slot-fb":m.v),X(null,m,!1),(e=>null!=e)(t)&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),m.p)for(p=0;p<m.p.length;++p)(u=G(e,m,p,a))&&a.appendChild(u);return a["s-hn"]=l,3&m.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=m.$||"",(f=e&&e.p&&e.p[s])&&f.v===m.v&&e.g&&I(e.g,!1)),a},I=(e,t)=>{u.t|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==l&&e["s-ol"]&&(te(e).insertBefore(e,ee(e)),e["s-ol"].remove(),e["s-ol"]=void 0,c=!0),t&&I(e,t)}u.t&=-2},J=(e,t,n,o,s,r)=>{let i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);s<=r;++s)o[s]&&(i=G(null,n,s,e))&&(o[s].g=i,c.insertBefore(i,ee(t)))},Y=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.g,re(l),i=!0,o["s-ol"]?o["s-ol"].remove():I(o,!0),o.remove())},Z=(e,t)=>e.v===t.v&&("slot"===e.v?e.$===t.$:e.h===t.h),ee=e=>e&&e["s-ol"]||e,te=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,ne=(e,t)=>{const n=t.g=e.g,l=e.p,o=t.p;let s;null===t.i?("slot"===t.v||X(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s,r=0,i=0,c=0,a=0,d=t.length-1,u=t[0],f=t[d],m=l.length-1,p=l[0],h=l[m];for(;r<=d&&i<=m;)if(null==u)u=t[++r];else if(null==f)f=t[--d];else if(null==p)p=l[++i];else if(null==h)h=l[--m];else if(Z(u,p))ne(u,p),u=t[++r],p=l[++i];else if(Z(f,h))ne(f,h),f=t[--d],h=l[--m];else if(Z(u,h))"slot"!==u.v&&"slot"!==h.v||I(u.g.parentNode,!1),ne(u,h),e.insertBefore(u.g,f.g.nextSibling),u=t[++r],h=l[--m];else if(Z(f,p))"slot"!==u.v&&"slot"!==h.v||I(f.g.parentNode,!1),ne(f,p),e.insertBefore(f.g,u.g),f=t[--d],p=l[++i];else{for(c=-1,a=r;a<=d;++a)if(t[a]&&null!==t[a].h&&t[a].h===p.h){c=a;break}c>=0?((s=t[c]).v!==p.v?o=G(t&&t[i],n,c,e):(ne(s,p),t[c]=void 0,o=s.g),p=l[++i]):(o=G(t&&t[i],n,i,e),p=l[++i]),o&&te(u.g).insertBefore(o,ee(u.g))}r>d?J(e,null==l[m+1]?null:l[m+1].g,n,l,i,m):i>m&&Y(t,r,d)})(n,l,t,o):null!==o?(null!==e.i&&(n.textContent=""),J(n,null,t,o,0,o.length-1)):null!==l&&Y(l,0,l.length-1)):(s=n["s-cr"])?s.parentNode.textContent=t.i:e.i!==t.i&&(n.data=t.i)},le=e=>{let t,n,l,o,s,r,i=e.childNodes;for(n=0,l=i.length;n<l;n++)if(1===(t=i[n]).nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(i[o]["s-hn"]!==t["s-hn"])if(r=i[o].nodeType,""!==s){if(1===r&&s===i[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==i[o].textContent.trim()){t.hidden=!0;break}le(t)}},oe=[],se=e=>{let t,n,l,o,s=e.childNodes,r=s.length,c=0,a=0,d=0;for(r=s.length;c<r;c++){if((t=s[c])["s-sr"]&&(n=t["s-cr"]))for(o=t["s-sn"],a=(l=n.parentNode.childNodes).length-1;a>=0;a--)(n=l[a])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(d=n.nodeType)||8===d)&&""===o||1===d&&null===n.getAttribute("slot")&&""===o||1===d&&n.getAttribute("slot")===o)&&(oe.some(e=>e.k===n)||(i=!0,n["s-sn"]=o,oe.push({_:t,k:n})));1===t.nodeType&&se(t)}},re=e=>{e.u&&e.u.ref&&e.u.ref(null),e.p&&e.p.forEach(re)},ie=(e,t)=>{t&&!e.S&&t["s-p"].push(new Promise(t=>e.S=t))},ce=(e,t,n,l)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const o=t.o,s=()=>ae(e,t,n,o,l);let r;return ie(t,t.L),l&&(t.t|=256,t.R&&(t.R.forEach(([e,t])=>fe(o,e,t)),t.R=null),r=fe(o,"componentWillLoad")),me(r,()=>M(s))},ae=(e,o,s,a,m)=>{const p=e["s-rc"];m&&((e,t)=>{const n=((e,t)=>{let n=E(t.j),l=g.get(n);if(e=11===e.nodeType?e:d,l)if("string"==typeof l){let t,o=A.get(e=e.head||e);o||A.set(e,o=new Set),o.has(n)||((t=d.createElement("style")).innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(f&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t);10&t.t&&(e["s-sc"]=n,e.classList.add(n+"-h"))})(e,s);try{((e,o,s,a)=>{l=e.tagName;const m=o.U||B(null,null),p=(e=>e&&e.v===N)(a)?a:F(null,null,a);if(s.C&&(p.u=p.u||{},s.C.forEach(([t,n])=>p.u[n]=e[t])),p.v=null,p.t|=4,o.U=p,p.g=m.g=e.shadowRoot||e,t=e["s-sc"],n=e["s-cr"],r=f&&0!=(1&s.t),c=i=!1,ne(m,p),c){se(p.g);for(let e=0;e<oe.length;e++){const t=oe[e];if(!t.k["s-ol"]){const e=d.createTextNode("");e["s-nr"]=t.k,t.k.parentNode.insertBefore(t.k["s-ol"]=e,t.k)}}u.t|=1;for(let e=0;e<oe.length;e++){const t=oe[e],n=t._.parentNode;let l=t._.nextSibling,o=t.k["s-ol"];for(;o=o.previousSibling;){let e=o["s-nr"];if(e&&e["s-sn"]===t.k["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){l=e;break}}(!l&&n!==t.k.parentNode||t.k.nextSibling!==l)&&t.k!==l&&n.insertBefore(t.k,l)}u.t&=-2}i&&le(p.g),oe.length=0})(e,o,s,a.render&&a.render())}catch(h){$(h)}o.t&=-17,o.t|=2,p&&(p.forEach(e=>e()),e["s-rc"]=void 0);{const t=e["s-p"],n=()=>de(e,o,s);0===t.length?n():(Promise.all(t).then(n),o.t|=4,t.length=0)}},de=(t,n,l)=>{const o=n.o,s=n.L;64&n.t?fe(o,"componentDidUpdate"):(n.t|=64,t.classList.add("hydrated"),e.cmpDidLoad&&fe(o,"componentDidLoad"),n.M(t),s||ue()),n.S&&(n.S(),n.S=void 0),512&n.t&&U(()=>ce(t,n,l,!1)),n.t&=-517},ue=()=>{d.documentElement.classList.add("hydrated"),u.t|=2},fe=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){$(l)}},me=(e,t)=>e&&e.then?e.then(t):t(),pe=(e,t,n)=>{if(t.D){e.watchers&&(t.T=e.watchers);const l=Object.entries(t.D),o=e.prototype;if(l.forEach(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>b(e).O.get(t))(this,e)},set(n){((e,t,n,l)=>{const o=b(this),s=o.P,r=o.O.get(t),i=o.t,c=o.o;if(!((n=((e,t)=>null==e||T(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,l.D[t][0]))===r||8&i&&void 0!==r)&&(o.O.set(t,n),c)){if(l.T&&128&i){const e=l.T[t];e&&e.forEach(e=>{try{c[e](n,r,t)}catch(l){$(l)}})}2==(18&i)&&ce(s,o,l,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){u.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.C.push([e,o]),o})}}return e},he=e=>{fe(e,"connectedCallback")},be=e=>{const t=e["s-cr"]=d.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ye=(t,n={})=>{const l=[],o=n.exclude||[],s=d.head,r=a.customElements,i=s.querySelector("meta[charset]"),c=d.createElement("style"),p=[];let y,w=!0;Object.assign(u,n),u.l=new URL(n.resourcesUrl||"./",d.baseURI).href,n.syncQueue&&(u.t|=4),t.forEach(t=>t[1].forEach(n=>{const s={t:n[0],j:n[1],D:n[2],W:n[3]};s.D=n[2],s.W=n[3],s.C=[],s.T={},!f&&1&s.t&&(s.t|=8);const i=s.j,c=class extends HTMLElement{constructor(e){super(e),(e=>{const t={t:0,P:e,O:new Map};t.A=new Promise(e=>t.M=e),e["s-p"]=[],e["s-rc"]=[],h.set(e,t)})(e=this),1&s.t&&(f?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){y&&(clearTimeout(y),y=null),w?p.push(this):u.jmp(()=>((e,t)=>{if(0==(1&u.t)){const n=()=>{},l=b(e);if(t.W&&(l.F=((e,t,n)=>{t.R=t.R||[];const l=n.map(([n,l,o])=>{const s=((e,t)=>4&t?d:8&t?a:e)(e,n),r=((e,t)=>n=>{256&e.t?e.o[t](n):e.R.push([t,n])})(t,o),i=(e=>({passive:0!=(1&e),capture:0!=(2&e)}))(n);return u.ael(s,l,r,i),()=>u.rel(s,l,r,i)});return()=>l.forEach(e=>e())})(e,l,t.W)),!(1&l.t)){let n;l.t|=1,n||(4&t.t||8&t.t)&&be(e);{let t=e;for(;t=t.parentNode||t.host;)if(t["s-p"]){ie(l,l.L=t);break}}t.D&&Object.entries(t.D).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),U(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=(e=>{const t=e.j.replace(/-/g,"_"),n=e.B,l=v.get(n);return l?l[t]:__sc_import_cardinal(`./${n}.entry.js`).then(e=>(v.set(n,e),e[t]),$)})(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.T=o.watchers,pe(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(i){$(i)}t.t&=-9,t.t|=128,e(),he(t.o)}const e=E(n.j);if(!g.has(e)&&o.style){const t=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_cardinal("./p-affe7c09.js").then(t=>t.scopeCss(l,e,!1))),((e,t,n)=>{let l=g.get(e);m&&n?(l=l||new CSSStyleSheet).replace(t):l=t,g.set(e,l)})(e,l,!!(1&n.t)),t()}}const s=t.L,r=()=>ce(e,t,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(e,l,t))}he(l.o),n()}})(this,s))}disconnectedCallback(){u.jmp(()=>(()=>{if(0==(1&u.t)){const t=b(this),n=t.o;t.F&&(t.F(),t.F=void 0),fe(n,"disconnectedCallback"),e.cmpDidUnload&&fe(n,"componentDidUnload")}})())}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=b(e);2==(18&n.t)&&ce(e,n,t,!1)}})(this,s)}componentOnReady(){return b(this).A}};s.B=t[0],o.includes(i)||r.get(i)||(l.push(i),r.define(i,pe(c,s,1)))})),c.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,i?i.nextSibling:s.firstChild),w=!1,p.length>0?p.forEach(e=>e.connectedCallback()):u.jmp(()=>y=setTimeout(ue,30,"timeout"))},we=(e,t,n)=>{const l=ve(e);return{emit:e=>l.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},$e=(e,t)=>t in p?p[t]:"window"===t?a:"document"===t?d:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?(()=>{const e=new URL(".",u.l);return e.origin!==a.location.origin?e.href:e.pathname})():"queue"===t?{write:M,read:C,tick:{then:e=>U(e)}}:void 0)),ve=e=>b(e).P;export{e as B,x as a,ye as b,we as c,$e as d,ve as g,F as h,O as p,y as r};