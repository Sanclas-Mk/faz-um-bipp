import{_ as c}from"./AppLayout-Dkfi0-Bi.js";import p from"./DeleteUserForm-KgE8lyW9.js";import l from"./LogoutOtherBrowserSessionsForm-Cuz_zxUQ.js";import{S as o}from"./SectionBorder-DxXWPDVa.js";import f from"./TwoFactorAuthenticationForm-0gCKoLRo.js";import d from"./UpdatePasswordForm-BjnZemOV.js";import _ from"./UpdateProfileInformationForm--qlAVr1_.js";import{o as s,c as u,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-Ds5NJXc9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DialogModal-DrV4O9bj.js";import"./SectionTitle-C1ufwYST.js";import"./DangerButton-BM4watTO.js";import"./TextInput-DpX8XTrN.js";import"./SecondaryButton-twYM0n5a.js";import"./ActionMessage-BwiSI9i9.js";import"./PrimaryButton-bvVI1_NE.js";import"./InputLabel-C_KzkzL2.js";import"./FormSection-CurG2F6y.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Perfil ",-1),$={class:"dark:bg-slate-900"},k={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},y={key:1},x={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,B)=>(s(),u(c,{title:"Perfil"},{header:n(()=>[g]),default:n(()=>[i("div",$,[i("div",k,[e.$page.props.jetstream.canUpdateProfileInformation?(s(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(o)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(s(),r("div",y,[t(d,{class:"mt-10 sm:mt-0"}),t(o)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),r("div",x,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(o)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(s(),r(h,{key:3},[t(o),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};