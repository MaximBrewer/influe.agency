import{_ as h,j as t,a as e,n as u,d as i}from"./app-9faee9e2.js";import{P as f}from"./Pencil-14716d5a.js";import{P as p}from"./Plus-8b92a04d.js";import{P as x}from"./PrimaryButton-beedc756.js";import{T as g}from"./Trash-3efb0b47.js";import{A as v}from"./AuthenticatedLayout-19a23a4d.js";import"./ApplicationLogo-b1988c4a.js";import"./SecondaryButton-04c8b9c5.js";const _=s=>{const{pagetitle:l,specialists:o}=s,{data:N,post:d}=h({_method:"delete"}),c=a=>{d(route("admin.specialists.destroy",{specialist:a.id}))};return t(v,{auth:s.auth,errors:s.errors,heading:e("h1",{className:"font-semibold text-3xl text-gray-800 leading-tight",children:l}),children:[e(u,{title:l}),t("div",{className:"pb-12 overflow-hidden flex flex-col",children:[e(i,{href:route("admin.specialists.create"),children:t(x,{className:"mb-4",children:[e("span",{children:"Добавить"}),e(p,{className:"w-6 h-auto ml-3"})]})}),e("div",{className:"shadow-bb rounded-lg bg-white px-6 overflow-y-auto",children:o.map((a,m)=>t("div",{className:"flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block",children:[e("div",{className:"shrink-0 w-10 h-10 bg-cover rounded bg-center",style:{backgroundImage:"url(/storage/avatar.jpeg)"}}),t("div",{className:"grow",children:[t("div",{className:"font-medium text-violet-500",children:[a.lastname," ",a.name," ",a.surname]}),e("ul",{className:"text-sm flex space-x-3",children:a.directions.map((r,n)=>e("li",{children:r.title},n))})]}),t("div",{className:"flex items-center space-x-4",children:[e(i,{href:route("admin.specialists.edit",{specialist:a.id}),className:"text-violet-500",children:e(f,{className:"w-6 h-auto"})}),e("a",{href:"#",className:"text-red-500",onClick:r=>{r.preventDefault(),c(a)},children:e(g,{className:"w-6 h-auto"})})]})]},m))})]})]})};export{_ as default};