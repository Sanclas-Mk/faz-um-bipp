import{T as b,o as i,e as d,b as a,u as s,w as l,F as k,Z as w,t as x,f as u,a as t,c as h,g as c,k as y,n as v,j as V}from"./app-Ds5NJXc9.js";import{A as $,_ as B}from"./AuthenticationCardLogo-PiD5aZYL.js";import{_ as q}from"./Checkbox-CiGeNu_c.js";import{_ as f,a as p}from"./TextInput-DpX8XTrN.js";import{_ as g}from"./InputLabel-C_KzkzL2.js";import{_ as C}from"./PrimaryButton-bvVI1_NE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},N={class:"mt-4"},S={class:"block mt-4"},E={class:"flex items-center"},F=t("span",{class:"ms-2 text-sm text-gray-600 dark:text-gray-400"},"Lembrar-se",-1),U={class:"flex items-center justify-end mt-4"},M={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(m){const e=b({email:"",password:"",remember:!1}),_=()=>{e.transform(n=>({...n,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(n,o)=>(i(),d(k,null,[a(s(w),{title:"Log in"}),a($,null,{logo:l(()=>[a(B)]),default:l(()=>[m.status?(i(),d("div",L,x(m.status),1)):u("",!0),t("form",{onSubmit:V(_,["prevent"])},[t("div",null,[a(g,{for:"email",value:"Email"}),a(f,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",N,[a(g,{for:"password",value:"Senha"}),a(f,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",S,[t("label",E,[a(q,{checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),F])]),t("div",U,[m.canResetPassword?(i(),h(s(y),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:l(()=>[c(" Esqueceu a senha? ")]),_:1},8,["href"])):u("",!0),a(C,{class:v(["ms-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:l(()=>[c(" Log in ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{M as default};
