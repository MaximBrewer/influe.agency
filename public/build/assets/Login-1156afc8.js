import{W as h,r as u,j as s,a as e,b as x,d as f}from"./app-03ff14d1.js";import{C as b}from"./Checkbox-22298cbf.js";import{A as g}from"./ApplicationLogo-7ec9b671.js";import{I as o}from"./InputError-50e635a9.js";import{P as w}from"./PrimaryButton-cd388a01.js";import{T as i}from"./TextInput-f9b845bb.js";import"./input-2365ac19.js";function P({status:l,canResetPassword:N}){const{data:t,setData:c,post:n,processing:d,errors:m,reset:p}=h({email:"",phone:"",password:"",remember:""});u.useEffect(()=>()=>{p("password")},[]);const r=a=>{c(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return s("div",{className:"min-h-screen flex flex-col items-center justify-center",children:[e(x,{title:"Log in"}),e("div",{className:"mb-4",children:e(f,{href:"/",children:e(g,{className:"w-32 h-auto"})})}),e("h1",{className:"text-2xl font-bold text-center",children:"Добро пожаловать!"}),e("p",{className:"mb-4",children:"Для продолжения введите номер телефона и пароль!"}),s("div",{className:"w-full max-w-md px-6 pb-6 pt-12 bg-white overflow-hidden shadow-[0px_1px_8px_rgba(0,0,0,.1)] rounded-xl",children:[l&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:l}),s("form",{onSubmit:a=>{a.preventDefault(),n(route("login"))},children:[s("div",{className:" px-6",children:[e(i,{id:"email",type:"email",name:"email",value:t.email,placeholder:"E-mail",className:"mt-1 block w-full text-xl",autoComplete:"email",onChange:r}),e(o,{message:m.email,className:"mt-2"})]}),s("div",{className:"mt-6 px-6",children:[e(i,{id:"password",type:"password",name:"password",value:t.password,placeholder:"Пароль",className:"mt-1 block w-full text-xl",autoComplete:"current-password",onChange:r}),e(o,{message:m.password,className:"mt-2"})]}),e("div",{className:"hidden mt-6",children:s("label",{className:"flex items-center",children:[e(b,{name:"remember",value:t.remember,onChange:r,defaultChecked:!0}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),e("div",{className:"mt-6",children:e(w,{className:"w-full justify-center",disabled:d,children:"Войти"})})]})]})]})}export{P as default};