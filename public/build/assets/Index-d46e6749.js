import{u as g,r as v,j as a,a as e,n as x,d as c}from"./app-74ec525c.js";import{P as w}from"./PrimaryButton-8c357e09.js";import{A as N}from"./AuthenticatedLayout-a693da68.js";import"./ApplicationLogo-2ca0d42f.js";import"./SecondaryButton-88359fa6.js";const z=i=>{const{pagetitle:n,branch:r,specialists:h,patient:d,week:m,directions:u}=i,{moment:b}=g(),[l,o]=v.useState("specialists");return a(N,{auth:i.auth,errors:i.errors,heading:!1,children:[e(x,{title:n}),a("div",{className:"pb-12 overflow-hidden flex flex-col",children:[a("ul",{className:"flex z-1 relative",children:[a("li",{className:"relative",children:[e("a",{href:"#",className:`block rounded-t-lg p-2.5 shadow-bb font-medium text-3xl ${l==="directions"?"bg-white":"bg-blue-50 text-blue-20"}`,onClick:t=>{t.preventDefault(),o("directions")},children:"Направления"}),e("div",{className:"absolute top-full h-2 left-0 w-full bg-white"})]}),a("li",{className:"relative",children:[e("a",{href:"#",className:`block rounded-t-lg p-2.5 shadow-bb font-medium text-3xl ${l==="specialists"?"bg-white":"bg-blue-50 text-blue-20"}`,onClick:t=>{t.preventDefault(),o("specialists")},children:"Специалисты"}),e("div",{className:"absolute top-full h-2 left-0 w-full bg-white"})]})]}),l==="directions"?e("div",{className:"shadow-bb rounded-lg bg-white py-5 px-6 overflow-y-auto",children:u.data.map((t,s)=>e(c,{href:route("recieption.book.direction",{patient:d.id,branch:r.id,direction:t.id,date:b().format("DD.MM.YYYY")}),className:"flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block",children:e("div",{className:"grow",children:e("div",{className:"font-medium text-violet-500",children:t.title})})},s))}):"",l==="specialists"?e("div",{className:"shadow-bb rounded-lg bg-white py-5 px-6 overflow-y-auto",children:h.map((t,s)=>a("div",{className:"flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block",children:[e("div",{className:"shrink-0 w-10 h-10 bg-cover rounded bg-center",style:{backgroundImage:"url(/storage/avatar.jpeg)"}}),a("div",{className:"grow",children:[a("div",{className:"font-medium text-violet-500",children:[t.lastname," ",t.name," ",t.surname]}),e("ul",{className:"text-sm flex space-x-3",children:t.directions.map((p,f)=>e("li",{children:p.title},f))})]}),e("div",{children:e(c,{href:route("recieption.book.specialist",{patient:d.id,branch:r.id,specialist:t.id,week:m,year:new Date().getFullYear()}),children:e(w,{className:"min-w-[150px] justify-center",size:"sm",children:e("span",{children:"Расписание"})})})})]},s))}):""]})]})};export{z as default};
