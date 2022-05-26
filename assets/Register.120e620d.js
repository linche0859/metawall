import{r as a,B,C as V,D as g,E as S,p as h,b as j,c as G,j as e,y as T,k as l,z as v,v as u,x as p,d as k,n as D,w,J as I,I as M,G as N,h as _}from"./index.c0c28979.js";import{_ as R,r as W,a as J}from"./auth.e2a464f6.js";const L={class:"flex min-h-screen"},O={class:"m-auto w-full max-w-[600px] border-2 border-black-100 bg-secondary p-10 shadow-300 lg:flex lg:max-w-[869px] lg:items-center lg:py-[70px] lg:px-[48px]"},P=e("img",{src:R,alt:"social circle",class:"mx-auto lg:mr-[50px] lg:ml-0 lg:flex-shrink-0"},null,-1),q={class:"text-center md:min-w-[373px] lg:flex-grow"},A=e("h1",{class:"font-paytone text-[60px] leading-[84px] text-primary"}," MetaWall ",-1),F=e("p",{class:"mb-[36px] font-helvetica text-2xl font-bold leading-[33px] text-black-100"}," \u8A3B\u518A ",-1),H=e("img",{src:J,alt:"google",class:"mr-2"},null,-1),K=_(" Google \u5E33\u865F\u8A3B\u518A "),Q=[H,K],X=e("div",{class:"mb-4 flex items-center text-black-100"},[e("hr",{class:"flex-grow border border-black-100"}),e("p",{class:"flex-shrink-0 px-4"},"\u6216"),e("hr",{class:"flex-grow border border-black-100"})],-1),Y=["onSubmit"],Z=_(" \u8A3B\u518A "),$=_(" \u767B\u5165 "),le={setup(ee){const m=a(!1),x=a(""),b=a(""),f=a(""),o=a(""),n=a(""),c=a(""),d=a(""),y=B(),E=V(),z=async()=>{try{m.value=!0,o.value="",n.value="",c.value="",d.value="";const{data:i}=await I({name:x.value,email:b.value,password:f.value});M(i.token),E.push({name:"Index"})}catch(i){const{message:t}=i;typeof t=="object"?Object.keys(t).forEach(s=>{switch(s){case"name":n.value=t[s];break;case"email":c.value=t[s];break;case"password":d.value=t[s];break}}):o.value=t}finally{m.value=!1}},C=()=>{N(y.name),W()};return g.value&&(o.value=g.value,g.value=""),S(),(i,t)=>{const s=h("Button"),U=h("router-link");return j(),G("main",L,[e("div",O,[P,e("div",q,[A,F,e("button",{class:"mb-4 flex w-full items-center justify-center rounded-lg border-2 border-black-100 bg-white font-azeret font-bold leading-[50px] text-black-100 shadow-200",onClick:C},Q),X,e("form",{method:"post",onSubmit:T(z,["prevent"])},[l(e("input",{type:"text",class:"block w-full rounded-none border-2 border-black-100 bg-white py-4 px-6 leading-[19px] text-black-100",placeholder:"\u66B1\u7A31","onUpdate:modelValue":t[0]||(t[0]=r=>x.value=r)},null,512),[[v,x.value]]),l(e("p",{class:"mt-1 text-left text-sm text-red-100","data-id":"error"},p(n.value),513),[[u,n.value]]),l(e("input",{type:"email",class:"mt-4 block w-full rounded-none border-2 border-black-100 bg-white py-4 px-6 font-azeret leading-[19px] text-black-100",placeholder:"Email","onUpdate:modelValue":t[1]||(t[1]=r=>b.value=r)},null,512),[[v,b.value]]),l(e("p",{class:"mt-1 text-left text-sm text-red-100","data-id":"error"},p(c.value),513),[[u,c.value]]),l(e("input",{type:"password",class:"mt-4 block w-full rounded-none border-2 border-black-100 bg-white py-4 px-6 font-azeret leading-[19px] text-black-100",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=r=>f.value=r)},null,512),[[v,f.value]]),l(e("p",{class:"mt-1 text-left text-sm text-red-100","data-id":"error"},p(d.value),513),[[u,d.value]]),l(e("p",{class:"mt-8 text-sm text-red-100","data-id":"error"},p(o.value),513),[[u,o.value]]),k(s,{loading:m.value,class:D(["block w-full rounded-lg border-2 border-gray-100 bg-gray-200 font-azeret font-bold leading-[50px] text-white",o.value?"mt-4":"mt-8"])},{default:w(()=>[Z]),_:1},8,["loading","class"]),k(U,{to:{name:"Login"},class:"mt-4 inline-block font-azeret leading-[22px] text-black-100"},{default:w(()=>[$]),_:1})],40,Y)])])])}}};export{le as default};
