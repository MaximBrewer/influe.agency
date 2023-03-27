import{R as m,r as u,b as Ge,c as ne,a as g,j as k,_ as qe}from"./app-74ec525c.js";import{I as Xe}from"./InputError-1144c174.js";import{I as ze}from"./InputLabel-93492485.js";import{l as X,s as _,a as I,u as M,b as ue,V as x,X as S,o as $,y as P,p as Ke,t as se,f as Se,T as Qe,m as Je,j as we,C as Ze,d as Y,Y as Z}from"./transition-5c9a2cf3.js";import{S as et}from"./SecondaryButton-88359fa6.js";import{T as tt}from"./TextInput-22f3afcb.js";var Ee;let H=(Ee=m.useId)!=null?Ee:function(){let e=X(),[t,n]=m.useState(e?()=>_.nextId():null);return I(()=>{t===null&&n(_.nextId())},[t]),t!=null?""+t:void 0};function ce(e){return _.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let re=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(F||{}),Pe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Pe||{}),nt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(nt||{});function rt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(re)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Te=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Te||{});function ot(e,t=0){var n;return e===((n=ce(e))==null?void 0:n.body)?!1:M(t,{[0](){return e.matches(re)},[1](){let r=e;for(;r!==null;){if(r.matches(re))return!0;r=r.parentElement}return!1}})}function A(e){e==null||e.focus({preventScroll:!0})}let lt=["textarea","input"].join(",");function at(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,lt))!=null?n:!1}function it(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),a=t(r);if(o===null||a===null)return 0;let l=o.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function V(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?it(e):e:rt(e);o.length>0&&l.length>1&&(l=l.filter(p=>!o.includes(p))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},s=0,f=l.length,h;do{if(s>=f||s+f<=0)return 0;let p=c+s;if(t&16)p=(p+f)%f;else{if(p<0)return 3;if(p>=f)return 1}h=l[p],h==null||h.focus(d),s+=i}while(h!==a.activeElement);return t&6&&at(h)&&h.select(),h.hasAttribute("tabindex")||h.setAttribute("tabindex","0"),2}function ee(e,t,n){let r=ue(t);u.useEffect(()=>{function o(a){r.current(a)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function ut(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(l,i){if(!r.current||l.defaultPrevented)return;let c=function s(f){return typeof f=="function"?s(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e),d=i(l);if(d!==null&&d.getRootNode().contains(d)){for(let s of c){if(s===null)continue;let f=s instanceof HTMLElement?s:s.current;if(f!=null&&f.contains(d)||l.composed&&l.composedPath().includes(f))return}return!ot(d,Te.Loose)&&d.tabIndex!==-1&&l.preventDefault(),t(l,d)}}let a=u.useRef(null);ee("mousedown",l=>{var i,c;r.current&&(a.current=((c=(i=l.composedPath)==null?void 0:i.call(l))==null?void 0:c[0])||l.target)},!0),ee("click",l=>{!a.current||(o(l,()=>a.current),a.current=null)},!0),ee("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function st(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&ct(n)?!1:r}function ct(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let dt="div";var G=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(G||{});let oe=x(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return S({ourProps:o,theirProps:r,slot:{},defaultTag:dt,name:"Hidden"})});var De=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(De||{});function Fe(e,t){let n=u.useRef([]),r=$(e);u.useEffect(()=>{let o=[...n.current];for(let[a,l]of t.entries())if(n.current[a]!==l){let i=r(t,o);return n.current=t,i}},[r,...t])}function ft(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function pt(e,t,n){let r=ue(t);u.useEffect(()=>{function o(a){r.current(a)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}var U=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(U||{});function mt(){let e=u.useRef(0);return pt("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function z(...e){return u.useMemo(()=>ce(...e),[...e])}function de(e,t,n,r){let o=ue(n);u.useEffect(()=>{e=e??window;function a(l){o.current(l)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}let ht="div";var Le=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Le||{});let B=Object.assign(x(function(e,t){let n=u.useRef(null),r=P(n,t),{initialFocus:o,containers:a,features:l=30,...i}=e;X()||(l=1);let c=z(n);gt({ownerDocument:c},Boolean(l&16));let d=vt({ownerDocument:c,container:n,initialFocus:o},Boolean(l&2));wt({ownerDocument:c,container:n,containers:a,previousActiveElement:d},Boolean(l&8));let s=mt(),f=$(E=>{let y=n.current;y&&(T=>T())(()=>{M(s.current,{[U.Forwards]:()=>{V(y,F.First,{skipElements:[E.relatedTarget]})},[U.Backwards]:()=>{V(y,F.Last,{skipElements:[E.relatedTarget]})}})})}),h=Ke(),p=u.useRef(!1),K={ref:r,onKeyDown(E){E.key=="Tab"&&(p.current=!0,h.requestAnimationFrame(()=>{p.current=!1}))},onBlur(E){let y=new Set(a==null?void 0:a.current);y.add(n);let T=E.relatedTarget;T instanceof HTMLElement&&T.dataset.headlessuiFocusGuard!=="true"&&(Ae(y,T)||(p.current?V(n.current,M(s.current,{[U.Forwards]:()=>F.Next,[U.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:E.target}):E.target instanceof HTMLElement&&A(E.target)))}};return m.createElement(m.Fragment,null,Boolean(l&4)&&m.createElement(oe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:G.Focusable}),S({ourProps:K,theirProps:i,defaultTag:ht,name:"FocusTrap"}),Boolean(l&4)&&m.createElement(oe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:G.Focusable}))}),{features:Le});function gt({ownerDocument:e},t){let n=u.useRef(null);de(e==null?void 0:e.defaultView,"focusout",o=>{!t||n.current||(n.current=o.target)},!0),Fe(()=>{t||((e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&A(n.current),n.current=null)},[t]);let r=u.useRef(!1);u.useEffect(()=>(r.current=!1,()=>{r.current=!0,se(()=>{!r.current||(A(n.current),n.current=null)})}),[])}function vt({ownerDocument:e,container:t,initialFocus:n},r){let o=u.useRef(null),a=Se();return Fe(()=>{if(!r)return;let l=t.current;!l||se(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){o.current=i;return}}else if(l.contains(i)){o.current=i;return}n!=null&&n.current?A(n.current):V(l,F.First)===Pe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function wt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let a=Se();de(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!a.current)return;let i=new Set(n==null?void 0:n.current);i.add(t);let c=r.current;if(!c)return;let d=l.target;d&&d instanceof HTMLElement?Ae(i,d)?(r.current=d,A(d)):(l.preventDefault(),l.stopPropagation(),A(c)):A(r.current)},!0)}function Ae(e,t){var n;for(let r of e)if((n=r.current)!=null&&n.contains(t))return!0;return!1}let O=new Set,D=new Map;function ye(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function be(e){let t=D.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function Et(e,t=!0){I(()=>{if(!t||!e.current)return;let n=e.current,r=ce(n);if(r){O.add(n);for(let o of D.keys())o.contains(n)&&(be(o),D.delete(o));return r.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement){for(let a of O)if(o.contains(a))return;O.size===1&&(D.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),ye(o))}}),()=>{if(O.delete(n),O.size>0)r.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement&&!D.has(o)){for(let a of O)if(o.contains(a))return;D.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),ye(o)}});else for(let o of D.keys())be(o),D.delete(o)}}},[t])}let Re=u.createContext(!1);function yt(){return u.useContext(Re)}function le(e){return m.createElement(Re.Provider,{value:e.force},e.children)}function bt(e){let t=yt(),n=u.useContext(Ne),r=z(e),[o,a]=u.useState(()=>{if(!t&&n!==null||_.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),u.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),o}let $t=u.Fragment,xt=x(function(e,t){let n=e,r=u.useRef(null),o=P(Qe(s=>{r.current=s}),t),a=z(r),l=bt(r),[i]=u.useState(()=>{var s;return _.isServer?null:(s=a==null?void 0:a.createElement("div"))!=null?s:null}),c=X(),d=u.useRef(!1);return I(()=>{if(d.current=!1,!(!l||!i))return l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i)),()=>{d.current=!0,se(()=>{var s;!d.current||!l||!i||(i instanceof Node&&l.contains(i)&&l.removeChild(i),l.childNodes.length<=0&&((s=l.parentElement)==null||s.removeChild(l)))})}},[l,i]),c?!l||!i?null:Ge.createPortal(S({ourProps:{ref:o},theirProps:n,defaultTag:$t,name:"Portal"}),i):null}),St=u.Fragment,Ne=u.createContext(null),Pt=x(function(e,t){let{target:n,...r}=e,o={ref:P(t)};return m.createElement(Ne.Provider,{value:n},S({ourProps:o,theirProps:r,defaultTag:St,name:"Popover.Group"}))}),ae=Object.assign(xt,{Group:Pt}),Ce=u.createContext(null);function Oe(){let e=u.useContext(Ce);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Oe),t}return e}function Tt(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=$(a=>(t(l=>[...l,a]),()=>t(l=>{let i=l.slice(),c=i.indexOf(a);return c!==-1&&i.splice(c,1),i}))),o=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return m.createElement(Ce.Provider,{value:o},n.children)},[t])]}let Dt="p",Ft=x(function(e,t){let n=H(),{id:r=`headlessui-description-${n}`,...o}=e,a=Oe(),l=P(t);I(()=>a.register(r),[r,a.register]);let i={ref:l,...a.props,id:r};return S({ourProps:i,theirProps:o,slot:a.slot||{},defaultTag:Dt,name:a.name||"Description"})}),fe=u.createContext(()=>{});fe.displayName="StackContext";var ie=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ie||{});function Lt(){return u.useContext(fe)}function At({children:e,onUpdate:t,type:n,element:r,enabled:o}){let a=Lt(),l=$((...i)=>{t==null||t(...i),a(...i)});return I(()=>{let i=o===void 0||o===!0;return i&&l(0,n,r),()=>{i&&l(1,n,r)}},[l,n,r,o]),m.createElement(fe.Provider,{value:l},e)}function Rt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Nt=typeof Object.is=="function"?Object.is:Rt,{useState:Ct,useEffect:Ot,useLayoutEffect:kt,useDebugValue:Mt}=ne;function It(e,t,n){const r=t(),[{inst:o},a]=Ct({inst:{value:r,getSnapshot:t}});return kt(()=>{o.value=r,o.getSnapshot=t,te(o)&&a({inst:o})},[e,r,t]),Ot(()=>(te(o)&&a({inst:o}),e(()=>{te(o)&&a({inst:o})})),[e]),Mt(r),r}function te(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Nt(n,r)}catch{return!0}}function Ht(e,t,n){return t()}const Bt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ut=!Bt,_t=Ut?Ht:It,jt="useSyncExternalStore"in ne?(e=>e.useSyncExternalStore)(ne):_t;function Wt(e){return jt(e.subscribe,e.getSnapshot,e.getSnapshot)}function Yt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...a){let l=t[o].call(n,...a);l&&(n=l,r.forEach(i=>i()))}}}function Vt(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,a=e-o;n.style(r,"paddingRight",`${a}px`)}}}function Gt(){if(!ft())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function o(l){return r.containers.flatMap(i=>i()).some(i=>i.contains(l))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",l=>{if(l.target instanceof HTMLElement)try{let i=l.target.closest("a");if(!i)return;let{hash:c}=new URL(i.href),d=t.querySelector(c);d&&!o(d)&&(a=d)}catch{}},!0),n.addEventListener(t,"touchmove",l=>{l.target instanceof HTMLElement&&!o(l.target)&&l.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function qt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Xt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let L=Yt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Je(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Xt(n)},o=[Gt(),Vt(),qt()];o.forEach(({before:a})=>a==null?void 0:a(r)),o.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});L.subscribe(()=>{let e=L.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&L.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&L.dispatch("TEARDOWN",n)}});function zt(e,t,n){let r=Wt(L),o=e?r.get(e):void 0,a=o?o.count>0:!1;return I(()=>{if(!(!e||!t))return L.dispatch("PUSH",e,n),()=>L.dispatch("POP",e,n)},[t,e]),a}var Kt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Kt||{}),Qt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Qt||{});let Jt={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},q=u.createContext(null);q.displayName="DialogContext";function j(e){let t=u.useContext(q);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,j),n}return t}function Zt(e,t,n=()=>[document.body]){zt(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function en(e,t){return M(t.type,Jt,e,t)}let tn="div",nn=we.RenderStrategy|we.Static,rn=x(function(e,t){let n=H(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:a,initialFocus:l,__demoMode:i=!1,...c}=e,[d,s]=u.useState(0),f=Ze();o===void 0&&f!==null&&(o=(f&Y.Open)===Y.Open);let h=u.useRef(new Set),p=u.useRef(null),K=P(p,t),E=u.useRef(null),y=z(p),T=e.hasOwnProperty("open")||f!==null,pe=e.hasOwnProperty("onClose");if(!T&&!pe)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!T)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!pe)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let b=o?0:1,[R,ke]=u.useReducer(en,{titleId:null,descriptionId:null,panelRef:u.createRef()}),N=$(()=>a(!1)),me=$(v=>ke({type:0,id:v})),Q=X()?i?!1:b===0:!1,W=d>1,Me=u.useContext(q)!==null,Ie=W?"parent":"leaf",he=f!==null?(f&Y.Closing)===Y.Closing:!1,He=(()=>!W||he?!1:Q)();Et(p,He);let ge=$(()=>{var v,C;return[...Array.from((v=y==null?void 0:y.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?v:[]).filter(w=>!(w===document.body||w===document.head||!(w instanceof HTMLElement)||w.contains(E.current)||R.panelRef.current&&w.contains(R.panelRef.current))),(C=R.panelRef.current)!=null?C:p.current]}),Be=(()=>!(!Q||W))();ut(()=>ge(),N,Be);let Ue=(()=>!(W||b!==0))();de(y==null?void 0:y.defaultView,"keydown",v=>{!Ue||v.defaultPrevented||v.key===De.Escape&&(v.preventDefault(),v.stopPropagation(),N())});let _e=(()=>!(he||b!==0||Me))();Zt(y,_e,ge),u.useEffect(()=>{if(b!==0||!p.current)return;let v=new IntersectionObserver(C=>{for(let w of C)w.boundingClientRect.x===0&&w.boundingClientRect.y===0&&w.boundingClientRect.width===0&&w.boundingClientRect.height===0&&N()});return v.observe(p.current),()=>v.disconnect()},[b,p,N]);let[je,We]=Tt(),Ye=u.useMemo(()=>[{dialogState:b,close:N,setTitleId:me},R],[b,R,N,me]),ve=u.useMemo(()=>({open:b===0}),[b]),Ve={ref:K,id:r,role:"dialog","aria-modal":b===0?!0:void 0,"aria-labelledby":R.titleId,"aria-describedby":je};return m.createElement(At,{type:"Dialog",enabled:b===0,element:p,onUpdate:$((v,C,w)=>{C==="Dialog"&&M(v,{[ie.Add](){h.current.add(w),s(J=>J+1)},[ie.Remove](){h.current.add(w),s(J=>J-1)}})})},m.createElement(le,{force:!0},m.createElement(ae,null,m.createElement(q.Provider,{value:Ye},m.createElement(ae.Group,{target:p},m.createElement(le,{force:!1},m.createElement(We,{slot:ve,name:"Dialog.Description"},m.createElement(B,{initialFocus:l,containers:h,features:Q?M(Ie,{parent:B.features.RestoreFocus,leaf:B.features.All&~B.features.FocusLock}):B.features.None},S({ourProps:Ve,theirProps:c,slot:ve,defaultTag:tn,features:nn,visible:b===0,name:"Dialog"})))))))),m.createElement(oe,{features:G.Hidden,ref:E}))}),on="div",ln=x(function(e,t){let n=H(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:a,close:l}]=j("Dialog.Overlay"),i=P(t),c=$(s=>{if(s.target===s.currentTarget){if(st(s.currentTarget))return s.preventDefault();s.preventDefault(),s.stopPropagation(),l()}}),d=u.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:c},theirProps:o,slot:d,defaultTag:on,name:"Dialog.Overlay"})}),an="div",un=x(function(e,t){let n=H(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:a},l]=j("Dialog.Backdrop"),i=P(t);u.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let c=u.useMemo(()=>({open:a===0}),[a]);return m.createElement(le,{force:!0},m.createElement(ae,null,S({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:c,defaultTag:an,name:"Dialog.Backdrop"})))}),sn="div",cn=x(function(e,t){let n=H(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:a},l]=j("Dialog.Panel"),i=P(t,l.panelRef),c=u.useMemo(()=>({open:a===0}),[a]),d=$(s=>{s.stopPropagation()});return S({ourProps:{ref:i,id:r,onClick:d},theirProps:o,slot:c,defaultTag:sn,name:"Dialog.Panel"})}),dn="h2",fn=x(function(e,t){let n=H(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:a,setTitleId:l}]=j("Dialog.Title"),i=P(t);u.useEffect(()=>(l(r),()=>l(null)),[r,l]);let c=u.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:r},theirProps:o,slot:c,defaultTag:dn,name:"Dialog.Title"})}),$e=Object.assign(rn,{Backdrop:un,Panel:cn,Overlay:ln,Title:fn,Description:Ft});function xe({className:e="",disabled:t,children:n,...r}){return g("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function pn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const a=()=>{r&&o()},l={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return g(Z,{show:t,as:u.Fragment,leave:"duration-200",children:k($e,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[g(Z.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:g("div",{className:"absolute inset-0 bg-gray-500/75"})}),g(Z.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:g($e.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${l}`,children:e})})]})})}function yn({className:e}){const[t,n]=u.useState(!1),r=u.useRef(),{data:o,setData:a,delete:l,processing:i,reset:c,errors:d}=qe({password:""}),s=()=>{n(!0)},f=p=>{p.preventDefault(),l(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>h(),onError:()=>r.current.focus(),onFinish:()=>c()})},h=()=>{n(!1),c()};return k("section",{className:`space-y-6 ${e}`,children:[k("header",{children:[g("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),g("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),g(xe,{onClick:s,children:"Delete Account"}),g(pn,{show:t,onClose:h,children:k("form",{onSubmit:f,className:"p-6",children:[g("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),g("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),k("div",{className:"mt-6",children:[g(ze,{htmlFor:"password",value:"Password",className:"sr-only"}),g(tt,{id:"password",type:"password",name:"password",ref:r,value:o.password,onChange:p=>a("password",p.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),g(Xe,{message:d.password,className:"mt-2"})]}),k("div",{className:"mt-6 flex justify-end",children:[g(et,{onClick:h,children:"Cancel"}),g(xe,{className:"ml-3",disabled:i,children:"Delete Account"})]})]})})]})}export{yn as default};
