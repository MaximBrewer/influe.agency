import{_ as f,r as h,j as a,a as s,n as v}from"./app-9e408a72.js";import{G as g}from"./GuestLayout-b1d9de0f.js";import{T as m,I as l}from"./TextInput-af1f102b.js";import{I as n}from"./InputLabel-a5880e34.js";import{P as N}from"./PrimaryButton-7787741b.js";import"./ApplicationLogo-60bf6bdf.js";function j({token:i,email:d}){const{data:o,setData:p,post:c,processing:u,errors:r,reset:w}=f({token:i,email:d,password:"",password_confirmation:""});h.useEffect(()=>()=>{w("password","password_confirmation")},[]);const t=e=>{p(e.target.name,e.target.value)};return a(g,{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),c(route("password.store"))},children:[a("div",{children:[s(n,{htmlFor:"email",value:"Email"}),s(m,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",onChange:t}),s(l,{message:r.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(n,{htmlFor:"password",value:"Password"}),s(m,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:t}),s(l,{message:r.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(n,{htmlFor:"password_confirmation",value:"Confirm Password"}),s(m,{type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:t}),s(l,{message:r.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(N,{className:"ml-4",disabled:u,children:"Reset Password"})})]})]})}export{j as default};
