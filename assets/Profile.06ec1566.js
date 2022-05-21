import{r as d,q as A,s as M,b as p,c as v,k as a,F as w,f as y,l as i,v as F,z as h,x,g as C,d as P,w as V,y as z,h as g,i as R,H as I,I as L,n as T,J as q}from"./index.c751b27c.js";import{p as J}from"./file.92bfe9ba.js";import{s as D,g as j}from"./swal.db038e00.js";const $=a("h2",{class:"relative isolate after:absolute after:right-1 after:top-1 after:z-[-1] after:h-full after:w-full after:border-2 after:border-black-100 after:content-['']"},[a("div",{class:"mb-8 border-2 border-black-100 bg-white py-[18px] text-center font-azeret text-xl font-bold text-black-100"}," \u4FEE\u6539\u500B\u4EBA\u8CC7\u6599 ")],-1),G={class:"flex px-4"},K=["onClick"],O=["src"],Q={class:"mb-11px relative cursor-pointer bg-black-100 py-1 px-6 text-white"},W=g(" \u4E0A\u50B3\u5927\u982D\u7167 "),X={class:"w-[60.6%]"},Y=a("label",{for:"nickname",class:"mb-1 inline-block text-black-100"},"\u66B1\u7A31",-1),Z=a("label",{for:"male",class:"mb-[6px] inline-block text-black-100"},"\u6027\u5225",-1),ee={class:"mb-8 flex space-x-6"},ae={class:"relative flex cursor-pointer items-center text-black-100"},te=["id","value","checked"],le=a("span",{class:"relative mr-3 inline-block h-5 w-5 rounded-full border-2 border-black-100 before:absolute before:top-1/2 before:left-1/2 before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:content-[''] peer-checked:before:bg-black-100"},null,-1),oe={key:0,class:"mb-4 text-center text-sm text-red-100"},re=g(" \u9001\u51FA\u66F4\u65B0 "),se={class:"mx-auto max-w-[60.6%]"},ne=a("label",{for:"new-password",class:"mb-1 inline-block text-black-100"},"\u8F38\u5165\u65B0\u5BC6\u78BC",-1),de=a("label",{for:"confirm",class:"mb-1 inline-block text-black-100"},"\u8F38\u5165\u65B0\u5BC6\u78BC",-1),ie={key:0,class:"mb-4 text-center text-sm text-red-100"},ce=g(" \u91CD\u8A2D\u5BC6\u78BC "),me={setup(ue){const{user:c}=R(),u=d(!1),m=d("nickname"),s=d(""),b=d(""),B=[{id:"nickname",title:"\u66B1\u7A31\u4FEE\u6539"},{id:"password",title:"\u91CD\u8A2D\u5BC6\u78BC"}],U=[{id:"male",title:"\u7537\u6027"},{id:"female",title:"\u5973\u6027"}],o=d({avatar:"",name:"",gender:"male",avatarFile:null}),n=d({password:"",confirmPassword:""}),k=d(null);o.value.avatar=c.value.avatar,o.value.name=c.value.name,o.value.gender=c.value.gender;const E=t=>{const e=t.target.files.item(0);if(s.value="",!["image/jpeg","image/png"].includes(e.type)){s.value="\u6A94\u6848\u683C\u5F0F\u932F\u8AA4\uFF0C\u50C5\u9650\u4E0A\u50B3 jpg\u3001jpeg \u8207 png \u683C\u5F0F",k.value.value="";return}const r=new FileReader;r.readAsDataURL(e),r.onload=()=>{o.value.avatar=r.result,o.value.avatarFile=e}},H=async()=>{try{const t=new FormData;t.append("image",o.value.avatarFile);const{data:e}=await J({params:{type:"avatar"},payload:t});return e}catch(t){return Promise.reject(t)}},N=async()=>{u.value=!0,s.value="";try{let t="";o.value.avatarFile&&(t=await H());const{name:e,gender:r}=o.value,f={name:e,gender:r};t&&(f.avatar=t),await I(f),D({title:"\u66F4\u65B0\u6210\u529F"}),t&&(c.value.avatar=t),c.value.name=e,c.value.gender=r,s.value="",k.value.value="",o.value.avatarFile=null}catch(t){const e=j(t.message);s.value=e}finally{u.value=!1}},S=async()=>{u.value=!0,b.value="";try{const{password:t,confirmPassword:e}=n.value;await L({password:t,confirm_password:e}),D({title:"\u66F4\u65B0\u6210\u529F"}),b.value="",n.value.password="",n.value.confirmPassword=""}catch(t){const e=j(t.message);b.value=e}finally{u.value=!1}};return(t,e)=>{const r=A("Button"),f=M("img-avatar-fallback");return p(),v(w,null,[$,a("div",G,[(p(),v(w,null,y(B,l=>a("button",{key:l.id,class:T(["rounded-t-lg border-x-2 border-t-2 border-black-100 py-2 px-6",l.id===m.value?"bg-black-100 text-white":"text-black-100"]),onClick:_=>m.value=l.id},x(l.title),11,K)),64))]),i(a("form",{method:"post",class:"flex flex-col items-center rounded-lg border-2 border-black-100 py-8 shadow-100",onSubmit:e[2]||(e[2]=z(()=>{},["prevent"]))},[i(a("img",{src:o.value.avatar,alt:"avatar",class:"mb-4 h-[107px] w-[107px] rounded-full object-cover"},null,8,O),[[f]]),a("label",Q,[a("input",{ref_key:"inputFile",ref:k,type:"file",class:"sr-only",accept:"image/*",onChange:E},null,544),W]),a("div",X,[Y,i(a("input",{id:"nickname",type:"text",class:"mb-4 w-full border-2 border-black-100 py-[14px] px-6 font-azeret leading-[22px] text-black-100","onUpdate:modelValue":e[0]||(e[0]=l=>o.value.name=l)},null,512),[[h,o.value.name,void 0,{trim:!0}]]),Z,a("ul",ee,[(p(),v(w,null,y(U,l=>a("li",{key:l.id},[a("label",ae,[i(a("input",{"onUpdate:modelValue":e[1]||(e[1]=_=>o.value.gender=_),type:"radio",name:"gender",class:"peer sr-only",id:l.id,value:l.id,checked:o.value.gender===l.id},null,8,te),[[q,o.value.gender]]),le,g(" "+x(l.title),1)])])),64))]),s.value?(p(),v("p",oe,x(s.value),1)):C("",!0),P(r,{class:"w-full rounded-lg border-2 border-black-100 bg-yellow-100 font-azeret font-bold leading-[50px] text-black-100 shadow-200 hover:bg-primary hover:text-white",loading:u.value,onClick:N},{default:V(()=>[re]),_:1},8,["loading"])])],544),[[F,m.value==="nickname"]]),i(a("form",{method:"post",class:"rounded-lg border-2 border-black-100 py-8 shadow-100",onSubmit:e[5]||(e[5]=z(()=>{},["prevent"]))},[a("div",se,[ne,i(a("input",{id:"new-password",type:"password",class:"mb-4 w-full border-2 border-black-100 py-[14px] px-6 text-black-100",placeholder:"\u8ACB\u8F38\u5165\u65B0\u5BC6\u78BC","onUpdate:modelValue":e[3]||(e[3]=l=>n.value.password=l)},null,512),[[h,n.value.password]]),de,i(a("input",{id:"confirm",type:"password",class:"mb-8 w-full border-2 border-black-100 py-[14px] px-6 text-black-100",placeholder:"\u518D\u6B21\u8F38\u5165\u65B0\u5BC6\u78BC","onUpdate:modelValue":e[4]||(e[4]=l=>n.value.confirmPassword=l)},null,512),[[h,n.value.confirmPassword]]),b.value?(p(),v("p",ie,x(b.value),1)):C("",!0),P(r,{class:"block w-full rounded-lg border-2 border-gray-100 bg-gray-200 font-azeret font-bold leading-[50px] text-white",loading:u.value,onClick:S},{default:V(()=>[ce]),_:1},8,["loading"])])],544),[[F,m.value==="password"]])],64)}}};export{me as default};
