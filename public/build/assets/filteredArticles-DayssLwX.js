import{S as F}from"./SiteLayout-CIv0SOZ6.js";import{Q as U,d as v,l as g,o as s,c as J,w as y,b,u as n,Z as j,a as e,e as l,f as c,F as _,h as x,t as i,g as Z,k as w,q,I as G}from"./app-Nlc2DKFf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Q={class:"font-principal space-x-6 lg:space-x-0"},Y={class:"text-azul items-center"},K={key:0,class:"lg:mx-[108px]"},W={class:"flex items-center space-x-4 m-6 lg:mt-6 cursor-pointer w-[180px]"},X=e("i",{class:"fa-solid fa-layer-group text-[28px]"},null,-1),ee=e("h2",{class:"text-[20px]"},"Categorias",-1),te={key:0,class:"fa-solid fa-angle-down"},se={key:1,class:"fa-solid fa-angle-up"},le={key:0,class:"mt-4 mb-6 md:flex flex-wrap md:space-x-4 px-6"},oe={class:"text-[18px] max-md:pb-3 hover:text-azul/80"},ae=["onClick"],ne={key:1},ie={class:"md:hidden"},ce=e("i",{class:"fa-solid fa-layer-group text-[28px]"},null,-1),de=e("h2",{class:"text-[20px]"},"Categorias",-1),re={key:0,class:"fa-solid fa-angle-down"},ue={key:1,class:"fa-solid fa-angle-up"},_e={key:0,class:"mt-4 mb-6 md:flex flex-wrap md:space-x-4 px-6"},xe={class:"text-[18px] max-md:pb-3"},he=["onClick"],me={class:"flex items-center space-x-6 text-white p-4 max-lg:mb-6 bg-azul-min max-md:hidden"},pe=e("h2",{class:"text-[24px] lg:mt-1 border-b-2 border-verde md:border-none md:pl-[20px] lg:pl-[120px]"}," Categorias | ",-1),fe={class:"flex flex-wrap space-x-8 mt-1"},ve={class:"text-[18px] hover:text-gray-300"},ge=["onClick"],ye={class:"text-azul items-center lg:mx-[108px] max-lg:hidden"},be={key:0},ke={class:"flex items-center space-x-4 lg:m-6 cursor-pointer w-[120px]"},we=e("i",{class:"fa-solid fa-tags text-[30px] mt-1"},null,-1),Ce=e("h2",{class:"text-[20px]"},"Tags",-1),De={key:0,class:"fa-solid fa-angle-down"},Te={key:1,class:"fa-solid fa-angle-up"},Oe={key:0,class:"mt-4 mb-6 flex flex-wrap space-x-4 px-6"},ze={class:"text-[18px] hover:text-azul/80"},Me=["onClick"],Be={key:1,class:"max-md:hidden"},Ee={class:"flex items-center space-x-8 p-4 w-full mb-6 text-azul"},Ae=e("h2",{class:"text-[24px] mt-1 ml-3"},"Tags |",-1),$e={class:"flex space-x-4 mt-1"},Ne={class:"bg-verde-min py-1 px-2 rounded-full hover:bg-verde-min/70"},Re=["onClick"],Ie={key:0,class:"md:flex flex-wrap md:gap-4 justify-center"},Le={class:"bg-azul px-2 py-1 text-[12px] lg:text-[14px] text-white rounded-md"},He={class:"text-[20px] lg:text-[24px] text-azul mx-4 mt-2"},Pe={class:"text-[12px] lg:text-[14px] text-[#7D7D7D] my-3"},Se=["innerHTML"],Ve={class:"lg:border-l-2 border-verde lg:px-6 hidden"},Fe={class:"text-azul max-lg:hidden"},Ue={class:"my-10 w-[250px]"},Je=e("h3",{class:"text-[24px]"},"Categorias",-1),je={class:"text-azul-min mt-2 mx-1"},Ze={class:"w-[250px]"},qe=e("h3",{class:"text-[24px]"},"Tags",-1),Ge={class:"flex flex-wrap"},Qe={class:"text-azul-min bg-white border border-azul rounded-full px-2 mt-2 mr-1"},Ye={class:"flex justify-center mt-10"},Ke=["disabled"],We=e("i",{class:"fa-solid fa-angle-left"},null,-1),Xe=[We],et={class:"mx-2 py-2 flex items-center"},tt={class:"text-blue-600 pr-2"},st=["disabled"],lt=e("i",{class:"fa-solid fa-chevron-right"},null,-1),ot=[lt],C=6,rt={__name:"filteredArticles",setup(at){const{articles:D,categories:r,tags:p}=U().props,f=v(D),d=v(!1),m=v(!1),h=v(1),T=g(()=>Math.ceil(f.value.length/C)),B=g(()=>(h.value-1)*C),E=g(()=>h.value*C),O=g(()=>f.value.slice(B.value,E.value));function A(){h.value--}function $(){h.value++}function k(a){f.value=D.filter(o=>o.category_id===a),d.value=!1}async function z(a){try{const o=await G.get(`/articles/by-tag/${a}`);f.value=o.data}catch(o){console.error(o)}}function N(a){if(r&&r.length>0){const o=r.find(t=>t.id===a);return o?o.name:"Categoria Desconhecida"}else return"Categoria Desconhecida"}function R(a){const o=new Date(a),t=["JANEIRO","FEVEREIRO","MARÇO","ABRIL","MAIO","JUNHO","JULHO","AGOSTO","SETEMBRO","OUTUBRO","NOVEMBRO","DEZEMBRO"],u=o.getDate(),P=o.getMonth(),S=u<10?`0${u}`:u,V=t[P];return`${S} de ${V} de ${o.getFullYear()}`}function M(){d.value=!d.value}function I(){m.value=!m.value}function L(a){let o=document.createElement("div");return o.innerHTML=a,o.textContent||o.innerText||""}function H(a){let o=L(a);return o.length>95?o.slice(0,95)+"...":o}return(a,o)=>(s(),J(F,null,{default:y(()=>[b(n(j),{title:"Blog"}),e("div",Q,[e("div",null,[e("div",null,[e("div",Y,[n(r).length>=6?(s(),l("div",K,[e("div",{onClick:M},[e("div",W,[X,ee,d.value?c("",!0):(s(),l("i",te)),d.value?(s(),l("i",se)):c("",!0)])]),d.value?(s(),l("div",le,[(s(!0),l(_,null,x(n(r),t=>(s(),l("ul",{key:t.id},[e("li",oe,[e("button",{onClick:u=>k(t.id)},i(t.name),9,ae)])]))),128))])):c("",!0)])):(s(),l("div",ne,[e("div",ie,[e("div",{onClick:M,class:"flex items-center space-x-4 m-6 lg:mt-6 cursor-pointer"},[ce,de,d.value?c("",!0):(s(),l("i",re)),d.value?(s(),l("i",ue)):c("",!0)]),d.value?(s(),l("div",_e,[(s(!0),l(_,null,x(n(r),t=>(s(),l("ul",{key:t.id},[e("li",xe,[e("button",{onClick:u=>k(t.id)},i(t.name),9,he)])]))),128))])):c("",!0)]),e("div",me,[pe,e("div",fe,[(s(!0),l(_,null,x(n(r),t=>(s(),l("ul",{key:t.id},[e("li",ve,[e("button",{onClick:u=>k(t.id)},i(t.name),9,ge)])]))),128))])])]))]),e("div",ye,[n(p).length>=6?(s(),l("div",be,[e("div",{onClick:I},[e("div",ke,[we,Ce,m.value?c("",!0):(s(),l("i",De)),m.value?(s(),l("i",Te)):c("",!0)])]),m.value?(s(),l("div",Oe,[(s(!0),l(_,null,x(n(p),t=>(s(),l("ul",{key:t.id},[e("li",ze,[e("button",{onClick:u=>z(t.id)},i(t.name),9,Me)])]))),128))])):c("",!0)])):(s(),l("div",Be,[e("div",Ee,[Ae,e("div",$e,[(s(!0),l(_,null,x(n(p),t=>(s(),l("ul",{key:t.id},[e("li",Ne,[e("button",{onClick:u=>z(t.id)},i(t.name),9,Re)])]))),128))])])]))])]),e("div",null,[O.value.length>0?(s(),l("div",Ie,[(s(!0),l(_,null,x(O.value,t=>(s(),l("div",{class:"bg-white mx-6 md:mx-0 mb-10 md:mb-0 shadow-md hover:shadow-lg transition duration-300 md:w-[360px] xl:w-[390px]",key:t.id},[b(n(w),{class:"text-center",href:a.route("articles.view",{article:t.id})},{default:y(()=>[e("div",{class:"h-[250px] bg-cover bg-center mb-4",style:q({backgroundImage:"url(/images/"+t.image+")"})},null,4),e("div",null,[e("span",Le,i(N(t.category_id)),1)]),e("h3",He,i(t.title),1),e("div",Pe,i(R(t.created_at)),1),e("p",{class:"prose text-[#7D7D7D] pb-10 px-4 text-[14px] lg:text-[16px] lg:px-8",innerHTML:H(t.content)},null,8,Se)]),_:2},1032,["href"])]))),128))])):c("",!0)])]),e("div",Ve,[e("div",Fe,[e("div",Ue,[Je,(s(!0),l(_,null,x(n(r),t=>(s(),l("ul",{key:t.id},[b(n(w),{href:a.route("artigos",{category:t.id})},{default:y(()=>[e("li",je,i(t.name),1)]),_:2},1032,["href"])]))),128))]),e("div",Ze,[qe,e("div",Ge,[(s(!0),l(_,null,x(n(p),t=>(s(),l("ul",{key:t.id},[b(n(w),{href:a.route("artigos",{tag:t.id})},{default:y(()=>[e("li",Qe,i(t.name),1)]),_:2},1032,["href"])]))),128))])])])])]),e("div",Ye,[e("button",{class:"mx-2 px-4 py-2",disabled:h.value===1,onClick:A},Xe,8,Ke),e("span",et,[e("div",tt,i(h.value),1),Z(" / "+i(T.value),1)]),e("button",{class:"mx-2 px-4 py-2",disabled:h.value===T.value,onClick:$},ot,8,st)])]),_:1}))}};export{rt as default};