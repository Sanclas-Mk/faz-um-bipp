import{T as c,o as f,e as _,b as e,u as a,w as l,F as w,Z as g,a as t,n as V,g as b,j as k}from"./app-Ds5NJXc9.js";import{A as v,_ as S}from"./AuthenticationCardLogo-PiD5aZYL.js";import{_ as m,a as i}from"./TextInput-DpX8XTrN.js";import{_ as n}from"./InputLabel-C_KzkzL2.js";import{_ as h}from"./PrimaryButton-bvVI1_NE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={class:"mt-4"},y={class:"mt-4"},$={class:"flex items-center justify-end mt-4"},j={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(C,o)=>(f(),_(w,null,[e(a(g),{title:"Resetar Senha"}),e(v,null,{logo:l(()=>[e(S)]),default:l(()=>[t("form",{onSubmit:k(u,["prevent"])},[t("div",null,[e(n,{for:"email",value:"Email"}),e(m,{id:"email",modelValue:a(s).email,"onUpdate:modelValue":o[0]||(o[0]=r=>a(s).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(i,{class:"mt-2",message:a(s).errors.email},null,8,["message"])]),t("div",x,[e(n,{for:"password",value:"Senha"}),e(m,{id:"password",modelValue:a(s).password,"onUpdate:modelValue":o[1]||(o[1]=r=>a(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),t("div",y,[e(n,{for:"password_confirmation",value:"Confirmar Senha"}),e(m,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=r=>a(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:a(s).errors.password_confirmation},null,8,["message"])]),t("div",$,[e(h,{class:V({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:l(()=>[b(" Resetar Senha ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{j as default};
