import{u as c,j as t,a as e,d as l,b as m}from"./app-c4d89a96.js";import{C as h}from"./ChooseBranche-3b88b15a.js";import{P as u}from"./PrimaryButton-b7c58e67.js";import{A as p}from"./AuthenticatedLayout-f17d989c.js";import"./InputError-a1bf4a23.js";import"./InputLabel-14d5ed6f.js";import"./react-select.esm-28e92659.js";import"./floating-ui.dom-1f2e0c5a.js";import"./TextInput-a37a3e61.js";import"./ApplicationLogo-d0cc3455.js";import"./SecondaryButton-410a6a41.js";const C=a=>{const{pagetitle:s,patients:n}=a,{setModal:o}=c();return t(p,{auth:a.auth,errors:a.errors,heading:t("div",{className:"flex space-x-4 items-center",children:[e("h1",{className:"font-semibold text-3xl text-gray-800 leading-tight",children:s}),e(l,{href:route("nurse.patient.create"),className:"text-blue-400 underline text-xl hover:no-underline",children:"Новый пациент"})]}),children:[e(m,{title:s}),e("div",{className:"shadow-bb rounded-lg bg-white py-5 px-6 overflow-y-auto",children:n.map((r,d)=>t(l,{href:route("nurse.patient.card",{patient:r.id}),className:"flex space-x-5 items-center mb-5 p-5 rounded-lg bg-blue-50 hover:bg-white hover:shadow-block",preserveState:!0,children:[t("div",{className:"w-[20%]",children:[t("div",{className:"font-medium",children:[r.name," ",r.lastname]}),e("div",{className:"text-sm",children:"30 лет"})]}),e("div",{className:"grow",children:e("div",{className:"",children:r.email})}),e("div",{className:"shrink-0",children:e("div",{onClick:i=>{i.preventDefault(),i.stopPropagation(),o(e(h,{...a,user:r}))},children:e(u,{className:"min-w-[150px] justify-center",size:"sm",children:e("span",{children:"Записать"})})})})]},d))})]})};export{C as default};