import{_ as h,j as s,a as e,n as u,d as i}from"./app-74ec525c.js";import{P as f}from"./Pencil-9e3bd7f1.js";import{P as x}from"./Plus-79476551.js";import{P as p}from"./PrimaryButton-8c357e09.js";import{T as g}from"./Trash-c30ced1d.js";import{A as v}from"./AuthenticatedLayout-a693da68.js";import"./ApplicationLogo-2ca0d42f.js";import"./SecondaryButton-88359fa6.js";const _=t=>{const{pagetitle:l,masseurs:o}=t,{data:N,post:d}=h({_method:"delete"}),m=a=>{d(route("admin.masseurs.destroy",{masseur:a.id}))};return s(v,{auth:t.auth,errors:t.errors,heading:e("h1",{className:"font-semibold text-3xl text-gray-800 leading-tight",children:l}),children:[e(u,{title:l}),s("div",{className:"pb-12 overflow-hidden flex flex-col",children:[e(i,{href:route("admin.masseurs.create"),children:s(p,{className:"mb-4",children:[e("span",{children:"Добавить"}),e(x,{className:"w-6 h-auto ml-3"})]})}),e("div",{className:"shadow-bb rounded-lg bg-white px-6 overflow-y-auto",children:o.map((a,c)=>s("div",{className:"flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block",children:[e("div",{className:"shrink-0 w-10 h-10 bg-cover rounded bg-center",style:{backgroundImage:"url(/storage/avatar.jpeg)"}}),s("div",{className:"grow",children:[s("div",{className:"font-medium text-violet-500",children:[a.lastname," ",a.name," ",a.surname]}),e("ul",{className:"text-sm flex space-x-3",children:a.directions.map((r,n)=>e("li",{children:r.title},n))})]}),s("div",{className:"flex items-center space-x-4",children:[e(i,{href:route("admin.masseurs.edit",{masseur:a.id}),className:"text-violet-500",children:e(f,{className:"w-6 h-auto"})}),e("a",{href:"#",className:"text-red-500",onClick:r=>{r.preventDefault(),m(a)},children:e(g,{className:"w-6 h-auto"})})]})]},c))})]})]})};export{_ as default};
