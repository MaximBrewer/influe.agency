import{r as o,j as t,a as e,b as n,d as m}from"./app-b5f0953c.js";import{P as h}from"./PrimaryButton-f7e35d8d.js";import{A as u}from"./AuthenticatedLayout-5fee61e6.js";import"./ApplicationLogo-bd1fb96b.js";import"./SecondaryButton-20d7191a.js";const N=s=>{const{pagetitle:r,specialists:i,week:x,directions:g}=s;return o.useState("specialists"),t(u,{auth:s.auth,errors:s.errors,heading:e("h1",{className:"font-semibold text-3xl text-gray-800 leading-tight",children:r}),children:[e(n,{title:r}),e("div",{className:"pb-12 overflow-hidden flex flex-col",children:e("div",{className:"shadow-bb rounded-lg bg-white py-5 px-6 overflow-y-auto",children:i.map((a,l)=>t("div",{className:"flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block",children:[e("div",{className:"shrink-0 w-10 h-10 bg-cover rounded bg-center",style:{backgroundImage:"url(/storage/avatar.jpeg)"}}),t("div",{className:"grow",children:[t("div",{className:"font-medium text-violet-500",children:[a.lastname," ",a.name," ",a.surname]}),e("ul",{className:"text-sm flex space-x-3",children:a.directions.map((d,c)=>e("li",{children:d.title},c))})]}),e("div",{children:e(m,{href:route("recieption.specialist.schedule",{specialist:a.id}),className:"text-violet-500",children:e(h,{className:"min-w-[150px] justify-center",size:"sm",children:e("span",{children:"Расписание"})})})})]},l))})})]})};export{N as default};