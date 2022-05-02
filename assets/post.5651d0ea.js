var K={exports:{}},me=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},Be=me,Q=Object.prototype.toString,Y=function(r){return function(e){var t=Q.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(r){return r=r.toLowerCase(),function(t){return Y(t)===r}}function G(r){return Array.isArray(r)}function g(r){return typeof r=="undefined"}function ge(r){return r!==null&&!g(r)&&r.constructor!==null&&!g(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var Ee=A("ArrayBuffer");function Le(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Ee(r.buffer),e}function Fe(r){return typeof r=="string"}function je(r){return typeof r=="number"}function ye(r){return r!==null&&typeof r=="object"}function U(r){if(Y(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var Ie=A("Date"),qe=A("File"),Me=A("Blob"),ke=A("FileList");function Z(r){return Q.call(r)==="[object Function]"}function He(r){return ye(r)&&Z(r.pipe)}function Je(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||Q.call(r)===e||Z(r.toString)&&r.toString()===e)}var Ve=A("URLSearchParams");function We(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function ze(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function ee(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),G(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function z(){var r={};function e(n,a){U(r[a])&&U(n)?r[a]=z(r[a],n):U(n)?r[a]=z({},n):G(n)?r[a]=n.slice():r[a]=n}for(var t=0,i=arguments.length;t<i;t++)ee(arguments[t],e);return r}function Xe(r,e,t){return ee(e,function(n,a){t&&typeof n=="function"?r[a]=Be(n,t):r[a]=n}),r}function Ke(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function Qe(r,e,t,i){r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function Ye(r,e,t){var i,n,a,s={};e=e||{};do{for(i=Object.getOwnPropertyNames(r),n=i.length;n-- >0;)a=i[n],s[a]||(e[a]=r[a],s[a]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function Ge(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var i=r.indexOf(e,t);return i!==-1&&i===t}function Ze(r){if(!r)return null;var e=r.length;if(g(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var er=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),h={isArray:G,isArrayBuffer:Ee,isBuffer:ge,isFormData:Je,isArrayBufferView:Le,isString:Fe,isNumber:je,isObject:ye,isPlainObject:U,isUndefined:g,isDate:Ie,isFile:qe,isBlob:Me,isFunction:Z,isStream:He,isURLSearchParams:Ve,isStandardBrowserEnv:ze,forEach:ee,merge:z,extend:Xe,trim:We,stripBOM:Ke,inherits:Qe,toFlatObject:Ye,kindOf:Y,kindOfTest:A,endsWith:Ge,toArray:Ze,isTypedArray:er,isFileList:ke},C=h;function ae(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Re=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(C.isURLSearchParams(t))n=t.toString();else{var a=[];C.forEach(t,function(f,d){f===null||typeof f=="undefined"||(C.isArray(f)?d=d+"[]":f=[f],C.forEach(f,function(l){C.isDate(l)?l=l.toISOString():C.isObject(l)&&(l=JSON.stringify(l)),a.push(ae(d)+"="+ae(l))}))}),n=a.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},rr=h;function L(){this.handlers=[]}L.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};L.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};L.prototype.forEach=function(e){rr.forEach(this.handlers,function(i){i!==null&&e(i)})};var tr=L,nr=h,ir=function(e,t){nr.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},be=h;function T(r,e,t,i,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}be.inherits(T,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var we=T.prototype,Oe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){Oe[r]={value:r}});Object.defineProperties(T,Oe);Object.defineProperty(we,"isAxiosError",{value:!0});T.from=function(r,e,t,i,n,a){var s=Object.create(we);return be.toFlatObject(r,s,function(f){return f!==Error.prototype}),T.call(s,r.message,e,t,i,n),s.name=r.name,a&&Object.assign(s,a),s};var _=T,Ae={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},R=h;function ar(r,e){e=e||new FormData;var t=[];function i(a){return a===null?"":R.isDate(a)?a.toISOString():R.isArrayBuffer(a)||R.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,s){if(R.isPlainObject(a)||R.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+s);t.push(a),R.forEach(a,function(f,d){if(!R.isUndefined(f)){var o=s?s+"."+d:d,l;if(f&&!s&&typeof f=="object"){if(R.endsWith(d,"{}"))f=JSON.stringify(f);else if(R.endsWith(d,"[]")&&(l=R.toArray(f))){l.forEach(function(m){!R.isUndefined(m)&&e.append(o,i(m))});return}}n(f,o)}}),t.pop()}else e.append(s,i(a))}return n(r),e}var Se=ar,H=_,sr=function(e,t,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(new H("Request failed with status code "+i.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},$=h,or=$.isStandardBrowserEnv()?function(){return{write:function(t,i,n,a,s,u){var f=[];f.push(t+"="+encodeURIComponent(i)),$.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),$.isString(a)&&f.push("path="+a),$.isString(s)&&f.push("domain="+s),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),ur=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},fr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},lr=ur,cr=fr,Ce=function(e,t){return e&&!lr(t)?cr(e,t):t},J=h,dr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],hr=function(e){var t={},i,n,a;return e&&J.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),i=J.trim(u.substr(0,a)).toLowerCase(),n=J.trim(u.substr(a+1)),i){if(t[i]&&dr.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([n]):t[i]=t[i]?t[i]+", "+n:n}}),t},se=h,pr=se.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),i;function n(a){var s=a;return e&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=n(window.location.href),function(s){var u=se.isString(s)?n(s):s;return u.protocol===i.protocol&&u.host===i.host}}():function(){return function(){return!0}}(),X=_,vr=h;function xe(r){X.call(this,r==null?"canceled":r,X.ERR_CANCELED),this.name="CanceledError"}vr.inherits(xe,X,{__CANCEL__:!0});var F=xe,mr=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},D=h,Er=sr,yr=or,Rr=Re,br=Ce,wr=hr,Or=pr,Ar=Ae,b=_,Sr=F,Cr=mr,oe=function(e){return new Promise(function(i,n){var a=e.data,s=e.headers,u=e.responseType,f;function d(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}D.isFormData(a)&&D.isStandardBrowserEnv()&&delete s["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(l+":"+m)}var p=br(e.baseURL,e.url);o.open(e.method.toUpperCase(),Rr(p,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function ne(){if(!!o){var y="getAllResponseHeaders"in o?wr(o.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?o.responseText:o.response,O={data:S,status:o.status,statusText:o.statusText,headers:y,config:e,request:o};Er(function(k){i(k),d()},function(k){n(k),d()},O),o=null}}if("onloadend"in o?o.onloadend=ne:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(ne)},o.onabort=function(){!o||(n(new b("Request aborted",b.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new b("Network Error",b.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",O=e.transitional||Ar;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(new b(S,O.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,o)),o=null},D.isStandardBrowserEnv()){var ie=(e.withCredentials||Or(p))&&e.xsrfCookieName?yr.read(e.xsrfCookieName):void 0;ie&&(s[e.xsrfHeaderName]=ie)}"setRequestHeader"in o&&D.forEach(s,function(S,O){typeof a=="undefined"&&O.toLowerCase()==="content-type"?delete s[O]:o.setRequestHeader(O,S)}),D.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(y){!o||(n(!y||y&&y.type?new Sr:y),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),a||(a=null);var M=Cr(p);if(M&&["http","https","file"].indexOf(M)===-1){n(new b("Unsupported protocol "+M+":",b.ERR_BAD_REQUEST,e));return}o.send(a)})},xr=null,c=h,ue=ir,fe=_,Tr=Ae,Pr=Se,Nr={"Content-Type":"application/x-www-form-urlencoded"};function le(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function _r(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=oe),r}function Dr(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var j={transitional:Tr,adapter:_r(),transformRequest:[function(e,t){if(ue(t,"Accept"),ue(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e))return e;if(c.isArrayBufferView(e))return e.buffer;if(c.isURLSearchParams(e))return le(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=c.isObject(e),n=t&&t["Content-Type"],a;if((a=c.isFileList(e))||i&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return Pr(a?{"files[]":e}:e,s&&new s)}else if(i||n==="application/json")return le(t,"application/json"),Dr(e);return e}],transformResponse:[function(e){var t=this.transitional||j.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(a)throw s.name==="SyntaxError"?fe.from(s,fe.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:xr},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){j.headers[e]={}});c.forEach(["post","put","patch"],function(e){j.headers[e]=c.merge(Nr)});var re=j,$r=h,Ur=re,Br=function(e,t,i){var n=this||Ur;return $r.forEach(i,function(s){e=s.call(n,e,t)}),e},Te=function(e){return!!(e&&e.__CANCEL__)},ce=h,V=Br,gr=Te,Lr=re,Fr=F;function W(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Fr}var jr=function(e){W(e),e.headers=e.headers||{},e.data=V.call(e,e.data,e.headers,e.transformRequest),e.headers=ce.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ce.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Lr.adapter;return t(e).then(function(n){return W(e),n.data=V.call(e,n.data,n.headers,e.transformResponse),n},function(n){return gr(n)||(W(e),n&&n.response&&(n.response.data=V.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=h,Pe=function(e,t){t=t||{};var i={};function n(o,l){return E.isPlainObject(o)&&E.isPlainObject(l)?E.merge(o,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function a(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],t[o])}function s(o){if(!E.isUndefined(t[o]))return n(void 0,t[o])}function u(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,t[o])}function f(o){if(o in t)return n(e[o],t[o]);if(o in e)return n(void 0,e[o])}var d={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var m=d[l]||a,p=m(l);E.isUndefined(p)&&m!==f||(i[l]=p)}),i},Ne={version:"0.27.2"},Ir=Ne.version,w=_,te={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){te[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var de={};te.transitional=function(e,t,i){function n(a,s){return"[Axios v"+Ir+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return function(a,s,u){if(e===!1)throw new w(n(s," has been removed"+(t?" in "+t:"")),w.ERR_DEPRECATED);return t&&!de[s]&&(de[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,s,u):!0}};function qr(r,e,t){if(typeof r!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),n=i.length;n-- >0;){var a=i[n],s=e[a];if(s){var u=r[a],f=u===void 0||s(u,a,r);if(f!==!0)throw new w("option "+a+" must be "+f,w.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new w("Unknown option "+a,w.ERR_BAD_OPTION)}}var Mr={assertOptions:qr,validators:te},_e=h,kr=Re,he=tr,pe=jr,I=Pe,Hr=Ce,De=Mr,x=De.validators;function P(r){this.defaults=r,this.interceptors={request:new he,response:new he}}P.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=I(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&De.assertOptions(i,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(t)===!1||(a=a&&p.synchronous,n.unshift(p.fulfilled,p.rejected))});var s=[];this.interceptors.response.forEach(function(p){s.push(p.fulfilled,p.rejected)});var u;if(!a){var f=[pe,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(s),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var d=t;n.length;){var o=n.shift(),l=n.shift();try{d=o(d)}catch(m){l(m);break}}try{u=pe(d)}catch(m){return Promise.reject(m)}for(;s.length;)u=u.then(s.shift(),s.shift());return u};P.prototype.getUri=function(e){e=I(this.defaults,e);var t=Hr(e.baseURL,e.url);return kr(t,e.params,e.paramsSerializer)};_e.forEach(["delete","get","head","options"],function(e){P.prototype[e]=function(t,i){return this.request(I(i||{},{method:e,url:t,data:(i||{}).data}))}});_e.forEach(["post","put","patch"],function(e){function t(i){return function(a,s,u){return this.request(I(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}P.prototype[e]=t(),P.prototype[e+"Form"]=t(!0)});var Jr=P,Vr=F;function N(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(i){if(!!t._listeners){var n,a=t._listeners.length;for(n=0;n<a;n++)t._listeners[n](i);t._listeners=null}}),this.promise.then=function(i){var n,a=new Promise(function(s){t.subscribe(s),n=s}).then(i);return a.cancel=function(){t.unsubscribe(n)},a},r(function(n){t.reason||(t.reason=new Vr(n),e(t.reason))})}N.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};N.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};N.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};N.source=function(){var e,t=new N(function(n){e=n});return{token:t,cancel:e}};var Wr=N,zr=function(e){return function(i){return e.apply(null,i)}},Xr=h,Kr=function(e){return Xr.isObject(e)&&e.isAxiosError===!0},ve=h,Qr=me,B=Jr,Yr=Pe,Gr=re;function $e(r){var e=new B(r),t=Qr(B.prototype.request,e);return ve.extend(t,B.prototype,e),ve.extend(t,e),t.create=function(n){return $e(Yr(r,n))},t}var v=$e(Gr);v.Axios=B;v.CanceledError=F;v.CancelToken=Wr;v.isCancel=Te;v.VERSION=Ne.version;v.toFormData=Se;v.AxiosError=_;v.Cancel=v.CanceledError;v.all=function(e){return Promise.all(e)};v.spread=zr;v.isAxiosError=Kr;K.exports=v;K.exports.default=v;var Zr=K.exports;const q=Zr.create({baseURL:{}.VITE_API_URL});q.interceptors.request.use(r=>r,r=>Promise.reject(r));q.interceptors.response.use(r=>r.data,r=>Promise.reject(r.response.data));const et=r=>q.get("/posts",{params:r}),rt=r=>q.post("/posts",r);export{et as g,rt as p};