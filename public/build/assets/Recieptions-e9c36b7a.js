import{_ as h,j as t,a as e,n as u,d as l}from"./app-88f2ab78.js";import{P as f}from"./Pencil-aa3041e5.js";import{P as p}from"./Plus-07593f4b.js";import{P as x}from"./PrimaryButton-96e3a8eb.js";import{T as g}from"./Trash-5b7b5128.js";import{A as v}from"./AuthenticatedLayout-df1c8c30.js";import"./ApplicationLogo-51fb2702.js";import"./SecondaryButton-03223c57.js";const _=s=>{const{pagetitle:i,recieptions:o}=s,{data:N,post:d}=h({_method:"delete"}),c=a=>{d(route("admin.recieptions.destroy",{recieption:a.id}))};return t(v,{auth:s.auth,errors:s.errors,heading:e("h1",{className:"font-semibold text-3xl text-gray-800 leading-tight",children:i}),children:[e(u,{title:i}),t("div",{className:"pb-12 overflow-hidden flex flex-col",children:[e(l,{href:route("admin.recieptions.create"),children:t(x,{className:"mb-4",children:[e("span",{children:"Добавить"}),e(p,{className:"w-6 h-auto ml-3"})]})}),e("div",{className:"shadow-bb rounded-lg bg-white px-6 overflow-y-auto",children:o.map((a,n)=>t("div",{className:"flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block",children:[e("div",{className:"shrink-0 w-10 h-10 bg-cover rounded bg-center",style:{backgroundImage:"url(/storage/avatar.jpeg)"}}),t("div",{className:"grow",children:[t("div",{className:"font-medium text-violet-500",children:[a.lastname," ",a.name," ",a.surname]}),e("ul",{className:"text-sm flex space-x-3",children:a.directions.map((r,m)=>e("li",{children:r.title},m))})]}),t("div",{className:"flex items-center space-x-4",children:[e(l,{href:route("admin.recieptions.edit",{recieption:a.id}),className:"text-violet-500",children:e(f,{className:"w-6 h-auto"})}),e("a",{href:"#",className:"text-red-500",onClick:r=>{r.preventDefault(),c(a)},children:e(g,{className:"w-6 h-auto"})})]})]},n))})]})]})};export{_ as default};