import{r as a,y as z,z as B,k as g,b as V,c as C,m as t,A as S,n as o,v as f,B as u,p,d as _,q as U,w,E as D,D as M,h}from"./index.a1fbdecc.js";import{_ as N}from"./social-circle.cd4c2f67.js";const T={class:"flex min-h-screen"},j={class:"m-auto w-full max-w-[600px] border-2 border-black-100 bg-[#EFECE7] p-10 shadow-300 lg:flex lg:max-w-[869px] lg:items-center lg:py-[70px] lg:px-[48px]"},I=t("img",{src:N,alt:"social circle",class:"mx-auto lg:mr-[50px] lg:ml-0 lg:flex-shrink-0"},null,-1),q={class:"text-center md:min-w-[373px] lg:flex-grow"},A=t("h1",{class:"font-paytone text-[60px] leading-[84px] text-primary"}," MetaWall ",-1),F=t("p",{class:"mb-[36px] font-helvetica text-2xl font-bold leading-[33px] text-black-100"}," \u8A3B\u518A ",-1),L=["onSubmit"],O=h(" \u8A3B\u518A "),P=h(" \u767B\u5165 "),H={setup(R){const m=a(!1),x=a(""),b=a(""),v=a(""),s=a(""),n=a(""),d=a(""),c=a(""),k=z(),y=async()=>{try{m.value=!0,s.value="",n.value="",d.value="",c.value="";const{data:i}=await D({name:x.value,email:b.value,password:v.value});M(i.token),k.push({name:"Index"})}catch(i){const{message:e}=i;typeof e=="object"?(console.log(e),Object.keys(e).forEach(l=>{switch(console.log("key",l),l){case"name":n.value=e[l];break;case"email":d.value=e[l];break;case"password":c.value=e[l];break}})):s.value=e}finally{m.value=!1}};return B(),(i,e)=>{const l=g("Button"),E=g("router-link");return V(),C("main",T,[t("div",j,[I,t("div",q,[A,F,t("form",{method:"post",onSubmit:S(y,["prevent"])},[o(t("input",{type:"text",class:"block w-full rounded-none border-2 border-black-100 bg-white py-4 px-6 leading-[19px] text-black-100",placeholder:"\u66B1\u7A31","onUpdate:modelValue":e[0]||(e[0]=r=>x.value=r)},null,512),[[f,x.value]]),o(t("p",{class:"mt-1 text-left text-sm text-red-100","data-id":"error"},p(n.value),513),[[u,n.value]]),o(t("input",{type:"email",class:"mt-4 block w-full rounded-none border-2 border-black-100 bg-white py-4 px-6 font-azeret leading-[19px] text-black-100",placeholder:"Email","onUpdate:modelValue":e[1]||(e[1]=r=>b.value=r)},null,512),[[f,b.value]]),o(t("p",{class:"mt-1 text-left text-sm text-red-100","data-id":"error"},p(d.value),513),[[u,d.value]]),o(t("input",{type:"password",class:"mt-4 block w-full rounded-none border-2 border-black-100 bg-white py-4 px-6 font-azeret leading-[19px] text-black-100",placeholder:"Password","onUpdate:modelValue":e[2]||(e[2]=r=>v.value=r)},null,512),[[f,v.value]]),o(t("p",{class:"mt-1 text-left text-sm text-red-100","data-id":"error"},p(c.value),513),[[u,c.value]]),o(t("p",{class:"mt-8 text-sm text-red-100","data-id":"error"},p(s.value),513),[[u,s.value]]),_(l,{loading:m.value,class:U(["block w-full rounded-lg border-2 border-gray-100 bg-gray-200 font-azeret font-bold leading-[50px] text-white",s.value?"mt-4":"mt-8"])},{default:w(()=>[O]),_:1},8,["loading","class"]),_(E,{to:{name:"Login"},class:"mt-4 inline-block font-azeret leading-[22px] text-black-100"},{default:w(()=>[P]),_:1})],40,L)])])])}}};export{H as default};
