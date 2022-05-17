import{_ as R}from"./plugin-vue_export-helper.21dcd24c.js";import{o as X,c as tt,k as W,s as et,f as nt}from"./index.628a84e5.js";var rt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},z={exports:{}};(function($,y){(function(b,M){$.exports=M()})(rt,function(){var b=1e3,M=6e4,k=36e5,x="millisecond",w="second",O="minute",Y="hour",g="day",N="week",m="month",V="quarter",v="year",T="date",J="Invalid Date",q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,G=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},B=function(o,n,t){var r=String(o);return!r||r.length>=n?o:""+Array(n+1-r.length).join(t)+o},K={s:B,z:function(o){var n=-o.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+B(r,2,"0")+":"+B(e,2,"0")},m:function o(n,t){if(n.date()<t.date())return-o(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,m),s=t-e<0,i=n.clone().add(r+(s?-1:1),m);return+(-(r+(t-e)/(s?e-i:i-e))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:m,y:v,w:N,d:g,D:T,h:Y,m:O,s:w,ms:x,Q:V}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},C="en",S={};S[C]=Q;var E=function(o){return o instanceof F},j=function o(n,t,r){var e;if(!n)return C;if(typeof n=="string"){var s=n.toLowerCase();S[s]&&(e=s),t&&(S[s]=t,e=s);var i=n.split("-");if(!e&&i.length>1)return o(i[0])}else{var a=n.name;S[a]=n,e=a}return!r&&e&&(C=e),e||!r&&C},c=function(o,n){if(E(o))return o.clone();var t=typeof n=="object"?n:{};return t.date=o,t.args=arguments,new F(t)},u=K;u.l=j,u.i=E,u.w=function(o,n){return c(o,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var F=function(){function o(t){this.$L=j(t.locale,null,!0),this.parse(t)}var n=o.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,s=r.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var i=e.match(q);if(i){var a=i[2]-1||0,d=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,d)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,d)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==J},n.isSame=function(t,r){var e=c(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return c(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<c(t)},n.$g=function(t,r,e){return u.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,s=!!u.u(r)||r,i=u.p(t),a=function(H,l){var _=u.w(e.$u?Date.UTC(e.$y,l,H):new Date(e.$y,l,H),e);return s?_:_.endOf(g)},d=function(H,l){return u.w(e.toDate()[H].apply(e.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(l)),e)},f=this.$W,h=this.$M,D=this.$D,p="set"+(this.$u?"UTC":"");switch(i){case v:return s?a(1,0):a(31,11);case m:return s?a(1,h):a(0,h+1);case N:var A=this.$locale().weekStart||0,L=(f<A?f+7:f)-A;return a(s?D-L:D+(6-L),h);case g:case T:return d(p+"Hours",0);case Y:return d(p+"Minutes",1);case O:return d(p+"Seconds",2);case w:return d(p+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,s=u.p(t),i="set"+(this.$u?"UTC":""),a=(e={},e[g]=i+"Date",e[T]=i+"Date",e[m]=i+"Month",e[v]=i+"FullYear",e[Y]=i+"Hours",e[O]=i+"Minutes",e[w]=i+"Seconds",e[x]=i+"Milliseconds",e)[s],d=s===g?this.$D+(r-this.$W):r;if(s===m||s===v){var f=this.clone().set(T,1);f.$d[a](d),f.init(),this.$d=f.set(T,Math.min(this.$D,f.daysInMonth())).$d}else a&&this.$d[a](d);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,r){var e,s=this;t=Number(t);var i=u.p(r),a=function(h){var D=c(s);return u.w(D.date(D.date()+Math.round(h*t)),s)};if(i===m)return this.set(m,this.$M+t);if(i===v)return this.set(v,this.$y+t);if(i===g)return a(1);if(i===N)return a(7);var d=(e={},e[O]=M,e[Y]=k,e[w]=b,e)[i]||1,f=this.$d.getTime()+t*d;return u.w(f,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||J;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=u.z(this),a=this.$H,d=this.$m,f=this.$M,h=e.weekdays,D=e.months,p=function(l,_,U,I){return l&&(l[_]||l(r,s))||U[_].slice(0,I)},A=function(l){return u.s(a%12||12,l,"0")},L=e.meridiem||function(l,_,U){var I=l<12?"AM":"PM";return U?I.toLowerCase():I},H={YY:String(this.$y).slice(-2),YYYY:this.$y,M:f+1,MM:u.s(f+1,2,"0"),MMM:p(e.monthsShort,f,D,3),MMMM:p(D,f),D:this.$D,DD:u.s(this.$D,2,"0"),d:String(this.$W),dd:p(e.weekdaysMin,this.$W,h,2),ddd:p(e.weekdaysShort,this.$W,h,3),dddd:h[this.$W],H:String(a),HH:u.s(a,2,"0"),h:A(1),hh:A(2),a:L(a,d,!0),A:L(a,d,!1),m:String(d),mm:u.s(d,2,"0"),s:String(this.$s),ss:u.s(this.$s,2,"0"),SSS:u.s(this.$ms,3,"0"),Z:i};return s.replace(G,function(l,_){return _||H[l]||i.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var s,i=u.p(r),a=c(t),d=(a.utcOffset()-this.utcOffset())*M,f=this-a,h=u.m(this,a);return h=(s={},s[v]=h/12,s[m]=h,s[V]=h/3,s[N]=(f-d)/6048e5,s[g]=(f-d)/864e5,s[Y]=f/k,s[O]=f/M,s[w]=f/b,s)[i]||f,e?h:u.a(h)},n.daysInMonth=function(){return this.endOf(m).$D},n.$locale=function(){return S[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),s=j(t,r,!0);return s&&(e.$L=s),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},o}(),Z=F.prototype;return c.prototype=Z,[["$ms",x],["$s",w],["$m",O],["$H",Y],["$W",g],["$M",m],["$y",v],["$D",T]].forEach(function(o){Z[o[1]]=function(n){return this.$g(n,o[0],o[1])}}),c.extend=function(o,n){return o.$i||(o(n,F,c),o.$i=!0),c},c.locale=j,c.isDayjs=E,c.unix=function(o){return c(1e3*o)},c.en=S[C],c.Ls=S,c.p={},c})})(z);var P=z.exports;const ht=($,y="YYYY/MM/DD HH:mm")=>P($).format(y),lt=$=>{const y=P(),b=y.diff($,"year");if(b)return`${b} \u5E74`;const M=y.diff($,"month");if(M)return`${M} \u6708`;const k=y.diff($,"day");if(k)return`${k} \u5929`;const x=y.diff($,"hour");return x?`${x} \u5C0F\u6642`:`${y.diff($,"minute")} \u5206\u9418`},it={},st={class:"rounded-lg border-2 border-black-100 shadow-card"},ot=W("header",{class:"flex space-x-[6px] border-b-2 border-black-100 py-[19px] px-4"},[W("div",{class:"h-[9px] w-[9px] rounded-full border border-gray-400 bg-[#DE4B63]"}),W("div",{class:"h-[9px] w-[9px] rounded-full border border-gray-400 bg-[#FAA722]"}),W("div",{class:"h-[9px] w-[9px] rounded-full border border-gray-400 bg-[#83C51D]"})],-1),at={class:"py-8 text-center text-gray-300"},ut=nt("\u76EE\u524D\u5C1A\u7121\u52D5\u614B\uFF0C\u65B0\u589E\u4E00\u5247\u8CBC\u6587\u5427\uFF01");function ft($,y){return X(),tt("div",st,[ot,W("p",at,[et($.$slots,"default",{},()=>[ut])])])}var $t=R(it,[["render",ft]]);export{$t as E,lt as a,ht as d};
