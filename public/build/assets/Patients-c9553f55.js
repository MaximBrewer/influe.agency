import{u as n,j as t,a as e,d as i,b as o}from"./app-37294207.js";import"./TextInput-99c0a043.js";import{A as c}from"./AuthenticatedLayout-a8d8a624.js";import"./ApplicationLogo-a9db38cb.js";import"./SecondaryButton-dd1d5b2b.js";const g=r=>{const{pagetitle:s,patients:l}=r;return n(),t(c,{auth:r.auth,errors:r.errors,heading:t("div",{className:"flex space-x-4 items-center",children:[e("h1",{className:"font-semibold text-3xl text-gray-800 leading-tight",children:s}),e(i,{href:route("senior.patient.create"),className:"text-blue-400 underline text-xl hover:no-underline",children:"Новый пациент"})]}),children:[e(o,{title:s}),e("div",{className:"shadow-bb rounded-lg bg-white py-5 px-6 overflow-y-auto",children:l.map((a,d)=>t(i,{href:route("senior.patient.card",{patient:a.id}),className:"flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block",preserveState:!0,children:[e("div",{className:"w-[20%]",children:t("div",{className:"font-medium",children:[a.name," ",a.lastname]})}),e("div",{className:"grow",children:e("div",{className:"",children:a.email})})]},d))})]})};export{g as default};