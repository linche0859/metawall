import{r as n,o as D,a as N,b as o,c as d,d as k,e as v,w as P,F as m,T as S,_ as T,f as V,g as $,h as F,i as I}from"./index.54eab09b.js";import{g as K,d as j,a as q}from"./post.e4a17ccd.js";import{_ as G,a as U,p as W,d as Y,b as z}from"./PostFilter.ebb3ea78.js";import{E as x}from"./EmptyPostCard.c66de847.js";import"./swal.5a8fdb95.js";import"./plugin-vue_export-helper.21dcd24c.js";const A=F("\u8F09\u5165\u4E2D..."),J={key:2,class:"mt-5 flex justify-center"},se={setup(O){const r=n(!0),l=n(!1),f=n("desc"),_=n(""),p=n(1),a=n([]),i=n({}),{user:y}=I(),w=async()=>{const{data:e}=await K({sort:f.value,q:_.value,page:p.value});return e},c=async({isScrolling:e=!1,reset:t=!1}={})=>{try{e?l.value=!0:r.value=!0,t&&(p.value=1,a.value=[]);const{data:s,meta:u}=await w();a.value.push(...s),i.value=u}finally{r.value=!1,l.value=!1}},L=e=>{f.value=e,c({reset:!0})},H=e=>{_.value=e,c({reset:!0})},M=e=>{W({postId:e,userId:y.value._id,posts:a.value})},b=e=>{Y({postId:e,userId:y.value._id,posts:a.value})},C=({postId:e,message:t})=>{z({postId:e,message:t,posts:a.value})},E=async e=>{const t=a.value.findIndex(s=>s._id===e);if(~t&&a.value.splice(t,1),await j(e),!r.value&&!l.value&&a.value.length<i.value.total-1)try{l.value=!0;const{data:s,meta:u}=await w();a.value.push(s.pop()),i.value=u}finally{l.value=!1}},B=async(e,t)=>{const s=a.value.find(g=>g._id===t),u=s.messages.findIndex(g=>g._id===e);~u&&s.messages.splice(u,1),await q(e)},h=()=>{r.value||l.value||i.value.currentPage>=i.value.lastPage||window.scrollY+window.innerHeight>=document.body.scrollHeight-100&&(p.value++,c({isScrolling:!0}))};return D(()=>{window.addEventListener("scroll",h)}),N(()=>{window.removeEventListener("scroll",h)}),c(),(e,t)=>(o(),d(m,null,[k(G,{class:"mb-4",loading:r.value,sort:f.value,onChangeSort:L,onChangeKeyword:H},null,8,["loading","sort"]),r.value?(o(),v(x,{key:0},{default:P(()=>[A]),_:1})):(o(),d(m,{key:1},[a.value.length?(o(),v(S,{key:0,tag:"ul",name:"fade",class:"space-y-4"},{default:P(()=>[(o(!0),d(m,null,$(a.value,s=>(o(),v(U,{key:s._id,post:s,onPostLike:M,onPostMessage:C,onDeleteLike:b,onDeletePost:E,onDeleteMessage:B},null,8,["post"]))),128))]),_:1})):(o(),v(x,{key:1}))],64)),l.value?(o(),d("div",J,[k(T,{color:"text-primary"})])):V("",!0)],64))}};export{se as default};
