import{W as f,r as h,j as s,a,b as v}from"./app-37294207.js";import{G as g}from"./GuestLayout-e271db83.js";import{I as m}from"./InputError-668fb783.js";import{I as l}from"./InputLabel-c6911704.js";import{P as N}from"./PrimaryButton-113bb876.js";import{T as i}from"./TextInput-99c0a043.js";import"./ApplicationLogo-a9db38cb.js";function F({token:n,email:d}){const{data:o,setData:p,post:c,processing:u,errors:r,reset:w}=f({token:n,email:d,password:"",password_confirmation:""});h.useEffect(()=>()=>{w("password","password_confirmation")},[]);const t=e=>{p(e.target.name,e.target.value)};return s(g,{children:[a(v,{title:"Сброс пароля"}),s("form",{onSubmit:e=>{e.preventDefault(),c(route("password.store"))},children:[s("div",{children:[a(l,{htmlFor:"email",value:"E-mail"}),a(i,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",onChange:t}),a(m,{message:r.email,className:"mt-2"})]}),s("div",{className:"mt-4",children:[a(l,{htmlFor:"password",value:"Пароль"}),a(i,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:t}),a(m,{message:r.password,className:"mt-2"})]}),s("div",{className:"mt-4",children:[a(l,{htmlFor:"password_confirmation",value:"Подтвердите пароль"}),a(i,{type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:t}),a(m,{message:r.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center justify-end mt-4",children:a(N,{className:"ml-4",disabled:u,children:"Сбросить пароль"})})]})]})}export{F as default};