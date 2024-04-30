import{_ as y}from"./AppLayout-Dkfi0-Bi.js";import{Q as k,o as s,c as j,w as i,a as t,b as r,u as n,k as d,e as o,F as x,h as _,q as C,t as p}from"./app-Ds5NJXc9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const D={class:"mt-6 mx-auto"},T={class:"gap-6 flex flex-wrap justify-center"},$={class:""},M={class:"flex justify-between pb-6 items-center w-[350px] md:w-[700px] rounded-t-lg p-8 pt-7 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] md:row-span-3 lg:pb-10 bg-gray-100"},N=t("h2",{class:"max-md:text-[18px] text-[20px] font-semibold text-black/80"}," Últimas Publicações ",-1),B={class:"flex space-x-1"},H=t("i",{class:"fa-solid fa-pager"},null,-1),L=t("p",{class:"max-md:hidden"},"Gerenciar Artigos",-1),z=t("i",{class:"fa-solid fa-plus"},null,-1),F=t("p",{class:"max-md:hidden"},"Criar publicação",-1),G={key:0},E={class:"pb-6 items-center w-[350px] md:w-[700px] rounded-b-lg p-8 pt-2 shadow-[0px_20px_24px_0px_rgba(0,0,0,0.08)] md:row-span-3 lg:pb-10 bg-gray-100"},P={class:"flex justify-between pb-1"},S={class:"font-semibold mb-1 text-[16px]"},V={class:"text-gray-400 text-[14px]"},q=["innerHTML"],A={key:1,class:"text-center pt-10 pb-4 transition duration-300 text-black/70 pb-6 items-center rounded-b-lg p-8 pt-7 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] md:row-span-3 lg:pb-10 bg-gray-100"},I=t("i",{class:"fa-solid fa-newspaper text-[50px] pb-6"},null,-1),Q=t("p",null,"Nenhum artigo encontrado.",-1),Y=[I,Q],J={class:"w-[350px] md:w-[700px] xl:w-[450px] shadow-[0px_14px_44px_0px_rgba(0,0,0,0.08)] hover:shadow-[0px_4px_14px_0px_rgba(0,0,0,0.08)] lg:pb-0 dark:bg-gray-100 mb-3 rounded transition duration-300 text-black/70 hover:text-black"},K=t("div",{class:"flex justify-between pb-6 p-4"},[t("h2",{class:"text-[20px] font-semibold pt-2 pl-2"},"Categorias")],-1),O={key:0},R={class:"flex flex-wrap px-4"},U={class:"text-[16px] rounded-full py-1 px-2 text-gray-800 bg-lime-300"},W=t("div",{class:"flex gap-4 items-center justify-end px-5 pt-2 pb-5"},[t("p",null,"Gerenciar Categorias"),t("i",{class:"fa-solid fa-arrow-right-long text-lg"})],-1),X={key:1,class:"text-center pt-2 pb-4"},Z=t("i",{class:"fa-solid fa-list text-[50px] pb-6"},null,-1),tt=t("p",null,"Nenhuma Categoria encontrada.",-1),et=t("div",{class:"flex gap-4 items-center justify-end px-5 pt-6 pb-2 text-blue-700 hover:text-blue-700/70"},[t("p",null,"Criar Categorias"),t("i",{class:"fa-solid fa-arrow-right-long text-lg"})],-1),st=[Z,tt,et],at={class:"w-[350px] md:w-[700px] xl:w-[450px] shadow-[0px_14px_44px_0px_rgba(0,0,0,0.08)] hover:shadow-[0px_4px_14px_0px_rgba(0,0,0,0.08)] lg:pb-0 dark:bg-gray-100 mb-3 rounded transition duration-300 text-black/70 hover:text-black"},ot=t("div",{class:"flex justify-between pb-6 p-4"},[t("h2",{class:"text-[20px] font-semibold pt-2 pl-2"},"Tags")],-1),nt={key:0},lt={class:"flex flex-wrap px-4"},it={class:"text-[16px] rounded-full py-1 px-2 text-gray-800 bg-lime-300"},rt=t("div",{class:"flex gap-4 items-center justify-end px-5 pt-2 pb-5"},[t("p",null,"Gerenciar tags"),t("i",{class:"fa-solid fa-arrow-right-long text-lg"})],-1),dt={key:1,class:"text-center pt-2 pb-4"},pt=t("i",{class:"fa-solid fa-tags text-[50px] pb-6"},null,-1),ct=t("p",null,"Nenhuma Tag encontrada.",-1),xt=t("div",{class:"flex gap-4 items-center justify-end px-5 pt-6 pb-2 text-blue-700 hover:text-blue-700/70"},[t("p",null,"Criar Tags"),t("i",{class:"fa-solid fa-arrow-right-long text-lg"})],-1),_t=[pt,ct,xt],mt={__name:"Dashboard",setup(ht){const{articles:h,tags:u,categories:g}=k().props;function b(l){const a=new Date(l),e=a.getDate(),c=a.getMonth()+1,v=e<10?`0${e}`:e,w=c<10?`0${c}`:c;return`${v}/${w}/${a.getFullYear()}`}function f(l){let a=document.createElement("div");return a.innerHTML=l,a.textContent||a.innerText||""}function m(l){let a=f(l);return a.length>95?a.slice(0,95)+"...":a}return(l,a)=>(s(),j(y,{title:"Dashboard",class:"bg-gray-100 h-screen"},{default:i(()=>[t("div",D,[t("div",T,[t("div",$,[t("div",M,[N,t("div",B,[r(n(d),{href:l.route("articles"),class:"bg-zinc-800 hover:bg-zinc-800/80 transition duration-300 py-2 px-4 max-md:px3 rounded-full flex items-center space-x-2 text-white md:text-black md:bg-transparent md:hover:bg-transparent md:hover:text-black/70"},{default:i(()=>[H,L]),_:1},8,["href"]),r(n(d),{href:l.route("articles.create"),class:"bg-blue-500 hover:bg-blue-500/80 transition duration-300 py-2 px-4 max-md:px3 rounded-full flex items-center space-x-2 text-white"},{default:i(()=>[z,F]),_:1},8,["href"])])]),n(h).length>0?(s(),o("div",G,[t("ul",E,[(s(!0),o(x,null,_(n(h).slice(0,4),e=>(s(),o("li",{key:e.id},[r(n(d),{href:l.route("articles.show",{article:e.id}),class:"mb-3 pr-4 space-x-4 items-center rounded-lg transition duration-300 hover:shadow-[0px_3px_3px_0px_rgba(0,0,0,0.08)] cursor-pointer grid-cols-[100px,1fr] grid text-black hover:text-black/70 border bg-gray-50"},{default:i(()=>[t("div",{class:"h-[100px] bg-cover bg-center",style:C({backgroundImage:"url("+e.image+")"})},null,4),t("div",null,[t("div",P,[t("h3",S,p(e.title),1),t("div",V,p(b(e.created_at)),1)]),t("p",{class:"text-gray-600 text-[16px] max-md:hidden",innerHTML:m(e.content)},null,8,q)])]),_:2},1032,["href"])]))),128))])])):(s(),o("div",A,Y))]),t("div",null,[t("div",J,[r(n(d),{href:l.route("categories")},{default:i(()=>[K,n(g).length>0?(s(),o("div",O,[t("div",R,[(s(!0),o(x,null,_(n(g).slice(0,8),e=>(s(),o("div",{class:"mb-3 p-1",key:e.id},[t("div",null,[t("span",U,p(e.name),1)])]))),128))]),W])):(s(),o("div",X,st))]),_:1},8,["href"])]),t("div",at,[r(n(d),{href:"tags"},{default:i(()=>[ot,n(u).length>0?(s(),o("div",nt,[t("div",lt,[(s(!0),o(x,null,_(n(u).slice(0,8),e=>(s(),o("div",{class:"mb-3 p-1",key:e.id},[t("div",null,[t("span",it,p(e.name),1)])]))),128))]),rt])):(s(),o("div",dt,_t))]),_:1})])])])])]),_:1}))}};export{mt as default};
