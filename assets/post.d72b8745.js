import{y as t}from"./index.6cf1da6d.js";const p=s=>t.get("/posts",{params:s}),a=s=>t.post("/post",s),n=s=>t.post(`/post/${s}/like`),c=s=>t.delete(`/post/${s}/like`),i=(s,o)=>t.post(`/post/${s}/message`,o);export{i as a,a as b,c as d,p as g,n as p};
