import{W as n,j as t,a as e,b as h,d as i}from"./app-f2495a03.js";import{P as u}from"./Pencil-177017f5.js";import{P as p}from"./Plus-b7a8900e.js";import{P as f}from"./PrimaryButton-7da02434.js";import{T as g}from"./Trash-a86a888a.js";import{A as v}from"./AuthenticatedLayout-886f74e7.js";import"./ApplicationLogo-e659b781.js";import"./SecondaryButton-72ba450e.js";const T=r=>{const{pagetitle:s,recieptions:o}=r,{data:x,post:l}=n({_method:"delete"}),d=a=>{l(route("admin.recieptions.destroy",{recieption:a.id}))};return t(v,{auth:r.auth,errors:r.errors,heading:e("h1",{className:"font-semibold text-3xl text-gray-800 leading-tight",children:s}),children:[e(h,{title:s}),t("div",{className:"pb-12 overflow-hidden flex flex-col",children:[e(i,{href:route("admin.recieptions.create"),children:t(f,{className:"mb-4",children:[e("span",{children:"Добавить"}),e(p,{className:"w-6 h-auto ml-3"})]})}),e("div",{className:"shadow-bb rounded-lg bg-white px-6 overflow-y-auto pt-5",children:o.map((a,c)=>t("div",{className:"flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block",children:[e("div",{className:"shrink-0 w-10 h-10 bg-cover rounded bg-center",style:{backgroundImage:"url(/storage/avatar.jpeg)"}}),e("div",{className:"grow",children:t("div",{className:"font-medium text-violet-500",children:[a.lastname," ",a.name," ",a.surname]})}),t("div",{className:"flex items-center space-x-4",children:[e(i,{href:route("admin.recieptions.edit",{recieption:a.id}),className:"text-violet-500",children:e(u,{className:"w-6 h-auto"})}),e("a",{href:"#",className:"text-red-500",onClick:m=>{m.preventDefault(),d(a)},children:e(g,{className:"w-6 h-auto"})})]})]},c))})]})]})};export{T as default};