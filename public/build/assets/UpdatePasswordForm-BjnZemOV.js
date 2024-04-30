import{d as i,T as f,o as w,c as g,w as e,g as n,a as l,b as r,u as a,n as v}from"./app-Ds5NJXc9.js";import{_ as V}from"./ActionMessage-BwiSI9i9.js";import{_ as S}from"./FormSection-CurG2F6y.js";import{_ as d,a as p}from"./TextInput-DpX8XTrN.js";import{_ as u}from"./InputLabel-C_KzkzL2.js";import{_ as b}from"./PrimaryButton-bvVI1_NE.js";import"./SectionTitle-C1ufwYST.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={class:"col-span-6 sm:col-span-4"},y={class:"col-span-6 sm:col-span-4"},$={class:"col-span-6 sm:col-span-4"},A={__name:"UpdatePasswordForm",setup(P){const c=i(null),m=i(null),s=f({current_password:"",password:"",password_confirmation:""}),_=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),c.value.focus()),s.errors.current_password&&(s.reset("current_password"),m.value.focus())}})};return(h,o)=>(w(),g(S,{onSubmitted:_},{title:e(()=>[n(" Atualizar Senha ")]),description:e(()=>[n(" Certifique-se de que sua conta esteja usando uma senha longa e aleatória para permanecer segura. ")]),form:e(()=>[l("div",k,[r(u,{for:"current_password",value:"Senha Atual"}),r(d,{id:"current_password",ref_key:"currentPasswordInput",ref:m,modelValue:a(s).current_password,"onUpdate:modelValue":o[0]||(o[0]=t=>a(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),r(p,{message:a(s).errors.current_password,class:"mt-2"},null,8,["message"])]),l("div",y,[r(u,{for:"password",value:"Nova Senha"}),r(d,{id:"password",ref_key:"passwordInput",ref:c,modelValue:a(s).password,"onUpdate:modelValue":o[1]||(o[1]=t=>a(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(p,{message:a(s).errors.password,class:"mt-2"},null,8,["message"])]),l("div",$,[r(u,{for:"password_confirmation",value:"Confirmar Senha"}),r(d,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=t=>a(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(p,{message:a(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[r(V,{on:a(s).recentlySuccessful,class:"me-3"},{default:e(()=>[n(" Salvo. ")]),_:1},8,["on"]),r(b,{class:v({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:e(()=>[n(" Salvar ")]),_:1},8,["class","disabled"])]),_:1}))}};export{A as default};
