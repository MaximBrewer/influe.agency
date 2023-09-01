import{a as e,W as u,r as x,j as s,b as f,d as b}from"./app-b5f0953c.js";import{A as g}from"./ApplicationLogo-bd1fb96b.js";import{I as i}from"./InputError-9e9d39e2.js";import{P as w}from"./PrimaryButton-f7e35d8d.js";import{T as n}from"./TextInput-37530aa4.js";import"./input-f9f53e04.js";function N({className:t="",...m}){return e("input",{...m,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+t})}function L({status:t,canResetPassword:m}){const{data:r,setData:c,post:d,processing:p,errors:o,reset:h}=u({email:"",phone:"",password:"",remember:""});x.useEffect(()=>()=>{h("password")},[]);const l=a=>{c(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return s("div",{className:"min-h-screen flex flex-col items-center justify-center",children:[e(f,{title:"Log in"}),e("div",{className:"mb-4",children:e(b,{href:"/",children:e(g,{className:"w-32 h-auto"})})}),e("h1",{className:"text-2xl font-bold text-center",children:"Добро пожаловать!"}),e("p",{className:"mb-4",children:"Для продолжения введите номер телефона и пароль!"}),s("div",{className:"w-full max-w-md px-6 pb-6 pt-12 bg-white overflow-hidden shadow-[0px_1px_8px_rgba(0,0,0,.1)] rounded-xl",children:[t&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),s("form",{onSubmit:a=>{a.preventDefault(),d(route("login"))},children:[s("div",{className:" px-6",children:[e(n,{id:"email",type:"email",name:"email",value:r.email,placeholder:"E-mail",className:"mt-1 block w-full text-xl",autoComplete:"email",onChange:l}),e(i,{message:o.email,className:"mt-2"})]}),s("div",{className:"mt-6 px-6",children:[e(n,{id:"password",type:"password",name:"password",value:r.password,placeholder:"Пароль",className:"mt-1 block w-full text-xl",autoComplete:"current-password",onChange:l}),e(i,{message:o.password,className:"mt-2"})]}),e("div",{className:"hidden mt-6",children:s("label",{className:"flex items-center",children:[e(N,{name:"remember",value:r.remember,onChange:l,defaultChecked:!0}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),e("div",{className:"mt-6",children:e(w,{className:"w-full justify-center",disabled:p,children:"Войти"})})]})]})]})}export{L as default};