import{r as m,j as a,a as e,n as u,d as b}from"./app-74ec525c.js";import{P as f}from"./PrimaryButton-8c357e09.js";import{A as p}from"./AuthenticatedLayout-a693da68.js";import"./ApplicationLogo-2ca0d42f.js";import"./SecondaryButton-88359fa6.js";const y=i=>{const{pagetitle:d,specialists:o,week:v,directions:n}=i,[s,c]=m.useState("specialists");return a(p,{auth:i.auth,errors:i.errors,heading:!1,children:[e(u,{title:d}),a("div",{className:"pb-12 overflow-hidden flex flex-col",children:[a("ul",{className:"flex z-1 relative",children:[a("li",{className:"relative",children:[e("a",{href:"#",className:`block rounded-t-lg p-2.5 shadow-bb font-medium text-3xl ${s==="directions"?"bg-white":"bg-blue-50 text-blue-20"}`,onClick:l=>{l.preventDefault(),c("directions")},children:"Направления"}),e("div",{className:"absolute top-full h-2 left-0 w-full bg-white"})]}),a("li",{className:"relative",children:[e("a",{href:"#",className:`block rounded-t-lg p-2.5 shadow-bb font-medium text-3xl ${s==="specialists"?"bg-white":"bg-blue-50 text-blue-20"}`,onClick:l=>{l.preventDefault(),c("specialists")},children:"Специалисты"}),e("div",{className:"absolute top-full h-2 left-0 w-full bg-white"})]})]}),s==="directions"?e("div",{className:"shadow-bb rounded-lg bg-white py-5 px-6 overflow-y-auto",children:n.map((l,r)=>a("div",{className:"flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block",children:[e("div",{className:"grow",children:e("div",{className:"font-medium text-violet-500",children:l.title})}),a("div",{className:"flex items-center space-x-4",children:[e("a",{href:"#",className:"text-violet-500",onClick:t=>{t.preventDefault(),setModal(e(DirectionModal,{direction:l}))},children:e(Pencil,{className:"w-6 h-auto"})}),e("a",{href:"#",className:"text-red-500",onClick:t=>{t.preventDefault(),destroy(l)},children:e(Trash,{className:"w-6 h-auto"})})]})]},r))}):"",s==="specialists"?e("div",{className:"shadow-bb rounded-lg bg-white py-5 px-6 overflow-y-auto",children:o.map((l,r)=>a("div",{className:"flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block",children:[e("div",{className:"shrink-0 w-10 h-10 bg-cover rounded bg-center",style:{backgroundImage:"url(/storage/avatar.jpeg)"}}),a("div",{className:"grow",children:[a("div",{className:"font-medium text-violet-500",children:[l.lastname," ",l.name," ",l.surname]}),e("ul",{className:"text-sm flex space-x-3",children:l.directions.map((t,h)=>e("li",{children:t.title},h))})]}),e("div",{children:e(b,{href:route("recieption.specialist.schedule",{specialist:l.id}),className:"text-violet-500",children:e(f,{className:"min-w-[150px] justify-center",size:"sm",children:e("span",{children:"Расписание"})})})})]},r))}):""]})]})};export{y as default};
