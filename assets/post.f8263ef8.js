import{j as e}from"./index.a4d8b40b.js";const p=s=>e.get("/posts",{params:s}),a=(s,t)=>e.get(`/posts/${s}/user`,{params:t}),n=()=>e.get("/posts/like"),c=s=>e.post("/post",s),g=s=>e.post(`/post/${s}/like`),l=s=>e.delete(`/post/${s}/like`),d=(s,t)=>e.post(`/post/${s}/message`,t),i=s=>e.delete(`/post/${s}`),k=s=>e.delete(`/post/${s}/message`);export{k as a,l as b,d as c,i as d,c as e,n as f,p as g,a as h,g as p};
