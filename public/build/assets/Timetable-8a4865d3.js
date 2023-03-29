import{u as C,r as w,_ as E,j as t,a as e,n as T,d as g,F as $}from"./app-55866548.js";import{C as A,a as B}from"./ChevronRight-1614e7ed.js";import{A as S}from"./ArrowDown-d90e07df.js";import{I as k}from"./InputError-300c0d5d.js";import{I as L}from"./InputLabel-75490d91.js";import{P as F}from"./PrimaryButton-d5b65fd4.js";import{T as O}from"./TextInput-e3d8ea98.js";import{s as P}from"./statuses-52d2cf53.js";import{P as I}from"./Pencil-084aaf1b.js";import{t as R}from"./times-9f85acc5.js";import{A as z}from"./AuthenticatedLayout-beae715f.js";import"./ApplicationLogo-a576ae58.js";import"./SecondaryButton-0b89484a.js";const q={data:[{code:"cash",title:"Наличными"},{code:"card",title:"Картой"},{code:"qr",title:"Kaspi QR"},{code:"balance",title:"C баланса"}]},K=d=>{const{book:i,actionRoute:u="recieption.book.payment"}=d,{setModal:m,priceFormat:n}=C(),[p,h]=w.useState(!1),{data:c,setData:f,post:y,patch:b,processing:s,errors:o,reset:r,transform:v}=E({method:null,sum:"",prepay:!1});v(l=>({...l,method:l.method?l.method.code:null}));const j=l=>{l&&l.preventDefault(),y(route(u,{book:i.id}),{onSuccess:()=>{m(null)}})},x=()=>h(!1);w.useEffect(()=>(document.addEventListener("clickinmodal",x),()=>{document.removeEventListener("clickinmodal",x)}),[]);const a=l=>{f(l.target.name,l.target.type==="checkbox"?l.target.checked:l.target.value)};return t("div",{children:[e("h2",{className:"font-bold text-xl text-center mb-4",children:"Оплата"}),t("form",{onSubmit:j,className:"min-w-[18rem]",children:[t("div",{className:"mb-4 select-none",children:[e(L,{htmlFor:"method",value:"Выберите метод оплаты",color:"text-gray-200",weight:"normal"}),t("div",{className:"relative my-1",onClick:l=>l.stopPropagation(),children:[t("a",{href:"#",onClick:l=>h(N=>!N),className:`flex itenms-center justify-between rounded-lg bg-gray-50 shadow-bb px-2.5 py-2 ${c.method?"text-violet-500":"text-gray-70"}`,children:[e("span",{children:c.method?c.method.title:"Не выбрано"}),e(S,{className:"w-4 h-auto text-gray-700"})]}),p?e("ul",{className:"absolute top-full left-0 w-full rounded-lg bg-gray-50 shadow-bb",children:q.data.map((l,N)=>e("li",{children:e("a",{href:"#",className:"block px-2.5 py-2 text-violet-500 border-t",onClick:D=>{D.preventDefault(),f(M=>({...M,method:l})),h(!1)},children:l.title})},N))}):""]}),e(k,{message:o.method,className:"mt-2"})]}),t("div",{className:"mb-4",children:[e(L,{htmlFor:"sum",value:"Сумма оплаты",color:"text-gray-200",weight:"normal"}),e(O,{id:"sum",type:"number",name:"sum",bg:"bg-gray-50",value:c.sum,className:"mt-1 block w-full text-xl",onChange:a}),e(k,{message:o.sum,className:"mt-2"})]}),t("div",{className:"mb-4",children:["Баланс: ",e("span",{className:"text-blue-400",children:n(i.patient.balance)})]}),t("div",{className:"mb-4",children:[t("label",{htmlFor:"prepay",className:"flex items-center select-none cursor-pointer",children:[e("input",{type:"checkbox",name:"prepay",id:"prepay",onChange:a,defaultChecked:c.prepay,className:"hidden opacity-0 peer"}),e("div",{className:"mr-2 w-5 h-5 peer-checked:hidden border-violet-500 border rounded-[6px]"}),e("div",{className:"mr-2 w-5 h-5 hidden peer-checked:flex items-center justify-center border-violet-500 text-violet-500 border rounded-[6px]",children:e("svg",{className:"w-3 h-3",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M2.5 6L5 8.5L10 3.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e("div",{children:"Предоплата"})]}),e(k,{message:o.prepay,className:"mt-2"})]}),e(F,{className:"w-full mb-4 justify-center text-lg font-semibold",children:"Отправить"}),e("div",{className:"text-center",children:e("a",{href:"#",className:"text-red-500 underline hover:no-underline",onClick:l=>{l.preventDefault(),m(null)},children:"Отменить"})})]})]})},Q=d=>{const{book:i,actionRoute:u="recieption.book.status"}=d,m=P.data.find(a=>a.code==i.status),{setModal:n}=C(),[p,h]=w.useState(!1),{data:c,setData:f,post:y,patch:b,processing:s,errors:o,reset:r,transform:v}=E({status:m});v(a=>({...a,status:a.status.code}));const j=a=>{a&&a.preventDefault(),b(route(u,{book:i.id}),{onSuccess:()=>{n(null)}})},x=()=>h(!1);return w.useEffect(()=>(document.addEventListener("clickinmodal",x),()=>{document.removeEventListener("clickinmodal",x)}),[]),t("div",{children:[e("h2",{className:"font-bold text-xl text-center mb-4",children:"Статус"}),t("form",{onSubmit:j,className:"min-w-[18rem]",children:[t("div",{className:"mb-4",children:[e(L,{htmlFor:"status",value:"Выберите статус",color:"text-gray-200",weight:"font-normal"}),t("div",{className:"relative my-1 select-none",onClick:a=>a.stopPropagation(),children:[t("a",{href:"#",onClick:a=>h(l=>!l),className:`flex itenms-center justify-between rounded-lg bg-gray-50 shadow-bb px-2.5 py-2 ${c.status.color}`,children:[e("span",{children:c.status.title}),e(S,{className:"w-5 h-auto text-gray-700"})]}),p?e("ul",{className:"absolute top-full left-0 w-full rounded-lg bg-gray-50 shadow-bb",children:P.data.map((a,l)=>e("li",{children:e("a",{href:"#",className:`block px-2.5 py-2 ${a.color}`,onClick:N=>{N.preventDefault(),f(D=>({...D,status:a})),h(!1)},children:a.title})},l))}):""]}),e(k,{message:o.status,className:"mt-2"})]}),e(F,{className:"w-full my-4 justify-center text-lg font-semibold",children:"Изменить"}),e("div",{className:"text-center",children:e("a",{href:"#",className:"text-red-500 underline hover:no-underline",onClick:a=>{a.preventDefault(),n(null)},children:"Отменить"})})]})]})},W=d=>{const{book:i}=d,{setModal:u}=C(),m=P.data.find(n=>n.code==i.status);return t("div",{className:"h-10 flex items-center justify-end",children:[e("div",{className:`${m.color} mr-4`,children:m.title}),e("a",{href:"#",onClick:n=>{n.preventDefault(),u(e(Q,{book:i}))},children:e(I,{className:"w-4 h-auto"})})]})},_=d=>{const{book:i}=d,{setModal:u,priceFormat:m}=C();let n=0;for(let p of i.payments)n=+p.sum;return t("div",{className:"h-10 flex items-center justify-end",children:[e("div",{className:"text-gray-300 mr-4",children:n?m(n):"Оплата"}),e("a",{href:"#",onClick:p=>{p.preventDefault(),u(e(K,{book:i}))},children:e(I,{className:"w-4 h-auto"})})]})},re=d=>{const{pagetitle:i,dateText:u,weekdays:m,prevweek:n,nextweek:p,books:h,branch:c,branches:f}=d,[y,b]=w.useState(!1);return t(z,{auth:d.auth,errors:d.errors,heading:!1,children:[e(T,{title:i}),t("div",{className:"pb-12 overflow-hidden flex flex-col",children:[t("div",{className:"flex items-center justify-between",children:[t("ul",{className:"flex z-1 relative",children:[t("li",{className:"relative",children:[e("a",{href:"#",className:"block rounded-t-lg py-2.5 px-6 shadow-bb font-medium text-3xl bg-white",onClick:s=>{s.preventDefault()},children:"Записи"}),e("div",{className:"absolute top-full h-2 left-0 w-full bg-white"})]}),t("li",{className:"relative",children:[e(g,{href:route("recieption.notifications",{branch:c}),className:"block rounded-t-lg py-2.5 px-6 shadow-bb font-medium text-3xl bg-blue-50 text-blue-20",children:"Напоминания"}),e("div",{className:"absolute top-full h-2 left-0 w-full bg-white"})]})]}),t("div",{className:"relative my-1",onClick:s=>s.stopPropagation(),children:[t("a",{href:"#",onClick:s=>b(o=>!o),className:"flex itens-center justify-between rounded-lg bg-blue-50 px-4 py-2 min-w-[22.125rem]",children:[e("span",{children:c.title}),e(S,{className:"w-3 h-auto text-blue-200"})]}),y?e("ul",{className:"absolute top-full left-0 w-full rounded-lg bg-blue-50",children:f.data.map((s,o)=>e("li",{children:e(g,{href:route("recieption.timetable",{branch:s.id}),className:"block px-4 py-2 hover:text-violet-500",onClick:r=>b(!1),children:s.title})},o))}):""]})]}),t("div",{className:"shadow-bb rounded-lg bg-white py-5 px-4 overflow-hidden flex flex-col",children:[e("div",{className:"text-lg font-medium mb-5 capitalize",children:u}),t("div",{className:"flex items-center bg-blue-100 rounded-lg -mx-3",children:[e(g,{href:route("recieption.timetable",{branch:c,date:n}),className:"flex items-center shrink-0 py-4 px-4 hover:scale-110",children:e(A,{className:"h-4 w-auto"})}),e("ul",{className:"grow grid grid-cols-7 text-center py-1.5",children:m.map((s,o)=>e("li",{className:"flex justify-center",children:t(g,{href:route("recieption.timetable",{branch:c,date:s.date}),className:`py-3 px-3 rounded-lg ${s.selected?"bg-white shadow-block":"hover:bg-white hover:shadow-block"} cursor-pointer`,children:[e("div",{className:"text-violet-500",children:s.dateText}),e("div",{className:"text-[.625rem] uppercase text-gray-600",children:s.weekday})]})},o))}),e(g,{href:route("recieption.timetable",{branch:c,date:p}),className:"flex items-center shrink-0 py-4 px-4 hover:scale-110",children:e(B,{className:"h-4 w-auto"})})]}),e("div",{className:"overflow-y-auto -mr-3 pr-3",children:h.data.length?R.data.map((s,o)=>e("div",{className:"overflow-hidden",children:h.data.filter(r=>r.start==s.value).length?t($,{children:[t("div",{className:"relative my-4",children:[e("div",{className:"absolute -left-4 -right-4 top-1/2 border border-dashed border-blue-200"}),e("div",{className:"flex",children:e("div",{className:"bg-white px-2 relative z-1 text-xs uppercase font-medium",children:s.label})})]}),h.data.filter(r=>r.start==s.value).map((r,v)=>t("div",{className:"flex space-x-5 items-center mb-5 rounded-lg overflow-hidden py-3 bg-blue-50 hover:bg-white hover:shadow-block",children:[e("div",{className:"w-[40%] flex space-x-5 items-center pl-5",children:t("div",{className:"grow",children:[e("div",{className:"font-medium",children:r.patient.fullName}),e("div",{className:"",children:r.patient.phone?r.patient.phone:r.patient.email})]})}),e("div",{className:"text-sm w-[40%]",children:e("span",{className:"text-violet-500 font-medium",children:r.service?r.service.title:""})}),e("div",{className:"text-sm w-[20%] flex justify-end -my-3",children:t("div",{className:"pr-5",children:[e(W,{book:r}),e(_,{book:r})]})})]},v))]}):""},o)):e("div",{className:"relative my-4 text-center",children:e("div",{className:"text-2xl font-semibold py-8",children:"Нет записей"})})})]})]})]})};export{re as default};
