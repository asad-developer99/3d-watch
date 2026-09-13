function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/sample-project.COb35JvF.js","assets/hotReplace.BfRBVwiW.js","assets/index-Co5JEu5S.css","assets/the-watch.D6O26wKS.js","assets/index-BDKORhKJ.css","assets/index.BXJSulOs.js","assets/gsapAnimation.pTu-v-2i.js","assets/index-BqUllk65.css","assets/page1.BU5gSym-.js","assets/page2.DTew6172.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Q0=Object.defineProperty;var ev=(r,e,t)=>e in r?Q0(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Bi=(r,e,t)=>(ev(r,typeof e!="symbol"?e+"":e,t),t),Qu=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var D=(r,e,t)=>(Qu(r,e,"read from private field"),t?t.call(r):e.get(r)),pe=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Je=(r,e,t,n)=>(Qu(r,e,"write to private field"),n?n.call(r,t):e.set(r,t),t);var Rn=(r,e,t)=>(Qu(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function b_(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$o={duration:.5,overwrite:!1,delay:0},Xf,cn,Dt,li=1e8,Et=1/li,ef=Math.PI*2,tv=ef/4,nv=0,w_=Math.sqrt,iv=Math.cos,rv=Math.sin,sn=function(e){return typeof e=="string"},Ft=function(e){return typeof e=="function"},or=function(e){return typeof e=="number"},qf=function(e){return typeof e>"u"},Ni=function(e){return typeof e=="object"},Dn=function(e){return e!==!1},Yf=function(){return typeof window<"u"},Ll=function(e){return Ft(e)||sn(e)},A_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vn=Array.isArray,sv=/random\([^)]+\)/g,av=/,\s*/g,Fd=/(?:-?\.?\d|\.)+/gi,R_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,va=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,C_=/[+-]=-?[.\d]+/,ov=/[^,'"\[\]\s]+/gi,lv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Nt,Ei,tf,$f,Qn={},Bc={},P_,L_=function(e){return(Bc=Ga(e,Qn))&&Fn},jf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},jo=function(e,t){return!t&&console.warn(e)},D_=function(e,t){return e&&(Qn[e]=t)&&Bc&&(Bc[e]=t)||Qn},Ko=function(){return 0},cv={suppressEvents:!0,isStart:!0,kill:!1},Ac={suppressEvents:!0,kill:!1},uv={suppressEvents:!0},Kf={},Br=[],nf={},I_,Wn={},th={},Bd=30,Rc=[],Zf="",Jf=function(e){var t=e[0],n,i;if(Ni(t)||Ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Rc.length;i--&&!Rc[i].targetTest(t););n=Rc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new tg(e[i],n)))||e.splice(i,1);return e},Ps=function(e){return e._gsap||Jf(ci(e))[0]._gsap},U_=function(e,t,n){return(n=e[t])&&Ft(n)?e[t]():qf(n)&&e.getAttribute&&e.getAttribute(t)||n},In=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},Ea=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},hv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},kc=function(){var e=Br.length,t=Br.slice(0),n,i;for(nf={},Br.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Qf=function(e){return!!(e._initted||e._startAt||e.add)},N_=function(e,t,n,i){Br.length&&!cn&&kc(),e.render(t,n,i||!!(cn&&t<0&&Qf(e))),Br.length&&!cn&&kc()},O_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ov).length<2?t:sn(e)?e.trim():e},F_=function(e){return e},ei=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},fv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ga=function(e,t){for(var n in t)e[n]=t[n];return e},kd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ni(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},zc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Po=function(e){var t=e.parent||Nt,n=e.keyframes?fv(vn(e.keyframes)):ei;if(Dn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},dv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},B_=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ou=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Wr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ls=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},pv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},rf=function(e,t,n,i){return e._startAt&&(cn?e._startAt.revert(Ac):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},mv=function r(e){return!e||e._ts&&r(e.parent)},zd=function(e){return e._repeat?Ha(e._tTime,e=e.duration()+e._rDelay)*e:0},Ha=function(e,t){var n=Math.floor(e=Ut(e/t));return e&&n===e?n-1:n},Vc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fu=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},Bu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fu(e),n._dirty||Ls(n,e)),e},k_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Vc(e.rawTime(),t),(!t._dur||wl(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),Ls(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},Pi=function(e,t,n,i){return t.parent&&Wr(t),t._start=Ut((or(n)?n:n||e!==Nt?ii(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),B_(e,t,"_first","_last",e._sort?"_start":0),sf(t)||(e._recent=t),i||k_(e,t),e._ts<0&&Bu(e,e._tTime),e},z_=function(e,t){return(Qn.ScrollTrigger||jf("scrollTrigger",t))&&Qn.ScrollTrigger.create(t,e)},V_=function(e,t,n,i,s){if(td(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&I_!==Yn.frame)return Br.push(e),e._lazy=[s,i],1},_v=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},sf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},gv=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&_v(e)&&!(!e._initted&&sf(e))||(e._ts<0||e._dp._ts<0)&&!sf(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=wl(0,e._tDur,t),u=Ha(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ha(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||cn||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&V_(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&rf(e,t,n,!0),e._onUpdate&&!n&&Kn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Wr(e,1),!n&&!cn&&(Kn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},vv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Wa=function(e,t,n,i){var s=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ut(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Bu(e,e._tTime=e._tDur*a),e.parent&&Fu(e),n||Ls(e.parent,e),e},Vd=function(e){return e instanceof Ln?Ls(e):Wa(e,e._dur)},xv={_start:0,endTime:Ko,totalDuration:Ko},ii=function r(e,t,n){var i=e.labels,s=e._recent||xv,o=e.duration()>=li?s.endTime(!1):e._dur,a,l,c;return sn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(vn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Lo=function(e,t,n){var i=or(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Dn(l.vars.inherit)&&l.parent;o.immediateRender=Dn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ht(t[0],o,t[s+1])},jr=function(e,t){return e||e===0?t(e):t},wl=function(e,t,n){return n<e?e:n>t?t:n},_n=function(e,t){return!sn(e)||!(t=lv.exec(e))?"":t[1]},yv=function(e,t,n){return jr(n,function(i){return wl(e,t,i)})},af=[].slice,G_=function(e,t){return e&&Ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ni(e[0]))&&!e.nodeType&&e!==Ei},Mv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return sn(i)&&!t||G_(i,1)?(s=n).push.apply(s,ci(i)):n.push(i)})||n},ci=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):sn(e)&&!n&&(tf||!Xa())?af.call((t||$f).querySelectorAll(e),0):vn(e)?Mv(e,n):G_(e)?af.call(e,0):e?[e]:[]},of=function(e){return e=ci(e)[0]||jo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ci(t,n.querySelectorAll?n:n===e?jo("Invalid scope")||$f.createElement("div"):e)}},H_=function(e){return e.sort(function(){return .5-Math.random()})},W_=function(e){if(Ft(e))return e;var t=Ni(e)?e:{each:e},n=Ds(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return sn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,y,v,E,b,w,S,P,I;if(!p){if(I=t.grid==="auto"?0:(t.grid||[1,li])[1],!I){for(S=-li;S<(S=_[I++].getBoundingClientRect().left)&&I<g;);I<g&&I--}for(p=o[g]=[],m=l?Math.min(I,g)*u-.5:i%I,y=I===li?0:l?g*h/I-.5:i/I|0,S=0,P=li,w=0;w<g;w++)v=w%I-m,E=y-(w/I|0),p[w]=b=c?Math.abs(c==="y"?E:v):w_(v*v+E*E),b>S&&(S=b),b<P&&(P=b);i==="random"&&H_(p),p.max=S-P,p.min=P,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(I>g?g-1:c?c==="y"?g/I:I:Math.max(I,g/I))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=_n(t.amount||t.each)||0,n=n&&g<0?Uv(n):n}return g=(p[f]-p.min)/p.max||0,Ut(p.b+(n?n(g):g)*p.v)+p.u}},lf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ut(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(or(n)?0:_n(n))}},X_=function(e,t){var n=vn(e),i,s;return!n&&Ni(e)&&(i=n=e.radius||li,e.values?(e=ci(e.values),(s=!or(e[0]))&&(i*=i)):e=lf(e.increment)),jr(t,n?Ft(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=li,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||or(o)?u:u+_n(o)}:lf(e))},q_=function(e,t,n,i){return jr(vn(e)?!t:n===!0?!!(n=0):!i,function(){return vn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Sv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Ev=function(e,t){return function(n){return e(parseFloat(n))+(t||_n(n))}},Tv=function(e,t,n){return $_(e,t,0,1,n)},Y_=function(e,t,n){return jr(n,function(i){return e[~~t(i)]})},bv=function r(e,t,n){var i=t-e;return vn(e)?Y_(e,r(0,e.length),t):jr(n,function(s){return(i+(s-e)%i)%i+e})},wv=function r(e,t,n){var i=t-e,s=i*2;return vn(e)?Y_(e,r(0,e.length-1),t):jr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Zo=function(e){return e.replace(sv,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(av);return q_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},$_=function(e,t,n,i,s){var o=t-e,a=i-n;return jr(s,function(l){return n+((l-e)/o*a||0)})},Av=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=sn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(vn(e)&&!vn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Ga(vn(e)?[]:{},e));if(!u){for(l in t)ed.call(a,e,l,"get",t[l]);s=function(_){return rd(_,a)||(o?e.p:e)}}}return jr(n,s)},Gd=function(e,t,n){var i=e.labels,s=li,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Kn=function(e,t,n){var i=e.vars,s=i[t],o=Dt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Br.length&&kc(),a&&(Dt=a),u=l?s.apply(c,l):s.call(c),Dt=o,u},yo=function(e){return Wr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!cn),e.progress()<1&&Kn(e,"onInterrupt"),e},xa,j_=[],K_=function(e){if(e)if(e=!e.name&&e.default||e,Yf()||e.headless){var t=e.name,n=Ft(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ko,render:rd,add:ed,kill:Wv,modifier:Hv,rawVars:0},o={targetTest:0,get:0,getSetter:id,aliases:{},register:0};if(Xa(),e!==i){if(Wn[t])return;ei(i,ei(zc(e,s),o)),Ga(i.prototype,Ga(s,zc(e,o))),Wn[i.prop=t]=i,e.targetTest&&(Rc.push(i),Kf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}D_(t,i),e.register&&e.register(Fn,i,Un)}else j_.push(e)},St=255,Mo={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},nh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},Z_=function(e,t,n){var i=e?or(e)?[e>>16,e>>8&St,e&St]:0:Mo.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Mo[e])i=Mo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&St,i&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Fd),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=nh(l+1/3,s,o),i[1]=nh(l,s,o),i[2]=nh(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(R_),n&&i.length<4&&(i[3]=1),i}else i=e.match(Fd)||Mo.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/St,o=i[1]/St,a=i[2]/St,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},J_=function(e){var t=[],n=[],i=-1;return e.split(kr).forEach(function(s){var o=s.match(va)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Hd=function(e,t,n){var i="",s=(e+i).match(kr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Z_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=J_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(kr,"1").split(va),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(kr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},kr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Mo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Rv=/hsl[a]?\(/,Q_=function(e){var t=e.join(" "),n;if(kr.lastIndex=0,kr.test(t))return n=Rv.test(t),e[1]=Hd(e[1],n),e[0]=Hd(e[0],n,J_(e[1])),!0},Jo,Yn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(p){var m=r()-i,y=p===!0,v,E,b,w;if((m>e||m<0)&&(n+=m-t),i+=m,b=i-n,v=b-o,(v>0||y)&&(w=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,o+=v+(v>=s?4:s-v),E=1),y||(l=c(g)),E)for(d=0;d<a.length;d++)a[d](b,f,w,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){P_&&(!tf&&Yf()&&(Ei=tf=window,$f=Ei.document||{},Qn.gsap=Fn,(Ei.gsapVersions||(Ei.gsapVersions=[])).push(Fn.version),L_(Bc||Ei.GreenSockGlobals||!Ei.gsap&&Ei||{}),j_.forEach(K_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Jo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Jo=0,c=Ko},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,y){var v=m?function(E,b,w,S){p(E,b,w,S),h.remove(v)}:p;return h.remove(p),a[y?"unshift":"push"](v),Xa(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),Xa=function(){return!Jo&&Yn.wake()},ut={},Cv=/^[\d.\-M][\d.\-,\s]/,Pv=/["']/g,Lv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Pv,"").trim():+c,i=l.substr(a+1).trim();return t},Dv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Iv=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Lv(t[1])]:Dv(e).split(",").map(O_)):ut._CE&&Cv.test(e)?ut._CE("",e):n},Uv=function(e){return function(t){return 1-e(1-t)}},Ds=function(e,t){return e&&(Ft(e)?e:ut[e]||Iv(e))||t},Hs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return In(e,function(a){ut[a]=Qn[a]=s,ut[o=a.toLowerCase()]=n;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},eg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ih=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/ef*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*rv((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:eg(a);return s=ef/s,l.config=function(c,u){return r(e,c,u)},l},rh=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:eg(n);return i.config=function(s){return r(e,s)},i};In("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Hs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;Hs("Elastic",ih("in"),ih("out"),ih());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Hs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Hs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Hs("Circ",function(r){return-(w_(1-r*r)-1)});Hs("Sine",function(r){return r===1?1:-iv(r*tv)+1});Hs("Back",rh("in"),rh("out"),rh());ut.SteppedEase=ut.steps=Qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Et;return function(a){return((i*wl(0,o,a)|0)+s)*n}}};$o.ease=ut["quad.out"];In("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zf+=r+","+r+"Params,"});var tg=function(e,t){this.id=nv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:U_,this.set=t?t.getSetter:id},Qo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Wa(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Jo||Yn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Wa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Bu(this,n),!s._dp||s.parent||k_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),N_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+zd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+zd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ha(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Vc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts,this.totalTime(wl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Fu(this),pv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ut(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Dn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=uv);var i=cn;return cn=n,Qf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Vd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Vd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ii(this,n),Dn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Dn(i)),this._dur||(this._zTime=-Et),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Et)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ft(n)?n:F_,l=function(){var u=i.then;i.then=null,s&&s(),Ft(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){yo(this)},r}();ei(Qo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var Ln=function(r){b_(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Dn(n.sortChildren),Nt&&Pi(n.parent||Nt,qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&z_(qi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Lo(0,arguments,this),this},t.from=function(i,s,o){return Lo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Lo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Po(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ht(i,s,ii(this,o),1),this},t.call=function(i,s,o){return Pi(this,Ht.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ht(i,o,ii(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Po(o).immediateRender=Dn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Po(a).immediateRender=Dn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ut(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,y,v,E,b,w,S;if(this!==Nt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,E=this._start,v=this._ts,m=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Ut(u%p),u===l?(g=this._repeat,f=c):(b=Ut(u/p),g=~~b,g&&g===b&&(f=c,g--),f>c&&(f=c)),b=Ha(this._tTime,p),!a&&this._tTime&&b!==g&&this._tTime-b*p-this._dur<=0&&(b=g),w&&g&1&&(f=c-f,S=1),g!==b&&!this._lock){var P=w&&b&1,I=P===(w&&g&1);if(g<b&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(S?0:Ut(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1,b=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,I&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=vv(this,Ut(a),Ut(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!b&&(Kn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=-Et);break}}d=_}else{d=this._last;for(var x=i<0?i:f;d;){if(_=d._prev,(d._act||x<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||cn&&Qf(d)),f!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=x?-Et:Et);break}}d=_}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-Et)._zTime=f>=a?1:-1,this._ts))return this._start=E,Fu(this),this.render(i,s,o);this._onUpdate&&!s&&Kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(E===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Wr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Kn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(or(s)||(s=ii(this,s,i)),!(i instanceof Qo)){if(vn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(sn(i))return this.addLabel(i,s);if(Ft(i))i=Ht.delayedCall(0,i);else return this}return this!==i?Pi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-li);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ht?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return sn(i)?this.removeLabel(i):Ft(i)?this.killTweensOf(i):(i.parent===this&&Ou(this,i),i===this._recent&&(this._recent=this._last),Ls(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(Yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ii(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ht.delayedCall(0,s||Ko,o);return a.data="isPause",this._hasPause=1,Pi(this,a,ii(this,i))},t.removePause=function(i){var s=this._first;for(i=ii(this,i);s;)s._start===i&&s.data==="isPause"&&Wr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Cr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ci(i),l=this._first,c=or(s),u;l;)l instanceof Ht?hv(l._targets,a)&&(c?(!Cr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ii(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Ht.to(o,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Et,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Wa(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ei({startAt:{time:ii(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Gd(this,ii(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Gd(this,ii(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ut(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ls(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ls(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=li,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Pi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ut(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Wa(o,o===Nt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Nt._ts&&(N_(Nt,Vc(i,Nt)),I_=Yn.frame),Yn.frame>=Bd){Bd+=Jn.autoSleep||120;var s=Nt._first;if((!s||!s._ts)&&Jn.autoSleep&&Yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Yn.sleep()}}},e}(Qo);ei(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var Nv=function(e,t,n,i,s,o,a){var l=new Un(this._pt,e,t,0,1,og,null,s),c=0,u=0,h,f,d,_,g,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Zo(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(eh)||[];h=eh.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Ea(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=eh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(C_.test(i)||m)&&(l.e=0),this._pt=l,l},ed=function(e,t,n,i,s,o,a,l,c,u){Ft(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Ft(h)?c?e[t.indexOf("set")||!Ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ft(h)?c?zv:sg:nd,_;if(sn(i)&&(~i.indexOf("random(")&&(i=Zo(i)),i.charAt(1)==="="&&(_=Ea(f,i)+(_n(f)||0),(_||_===0)&&(i=_))),!u||f!==i||cf)return!isNaN(f*i)&&i!==""?(_=new Un(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Gv:ag,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&jf(t,i),Nv.call(this,e,t,f,i,d,l||Jn.stringFilter,c))},Ov=function(e,t,n,i,s){if(Ft(e)&&(e=Do(e,s,t,n,i)),!Ni(e)||e.style&&e.nodeType||vn(e)||A_(e))return sn(e)?Do(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Do(e[a],s,t,n,i);return o},ng=function(e,t,n,i,s,o){var a,l,c,u;if(Wn[e]&&(a=new Wn[e]).init(s,a.rawVars?t[e]:Ov(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Un(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==xa))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Cr,cf,td=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!Xf,E=e.timeline,b=i.easeReverse||h,w,S,P,I,x,R,V,Z,L,X,k,G,Y;if(E&&(!f||!s)&&(s="none"),e._ease=Ds(s,$o.ease),e._rEase=b&&(Ds(b)||e._ease),e._from=!E&&!!i.runBackwards,e._from&&(e.ratio=1),!E||f&&!i.stagger){if(Z=p[0]?Ps(p[0]).harness:0,G=Z&&i[Z.prop],w=zc(i,Kf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?Ac:cv),g._lazy=0),o){if(Wr(e._startAt=Ht.set(p,ei({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Dn(l),startAt:null,delay:0,onUpdate:c&&function(){return Kn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn||!a&&!d)&&e._startAt.revert(Ac),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),P=ei({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Dn(l),immediateRender:a,stagger:0,parent:m},w),G&&(P[Z.prop]=G),Wr(e._startAt=Ht.set(p,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn?e._startAt.revert(Ac):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Dn(l)||l&&!_,S=0;S<p.length;S++){if(x=p[S],V=x._gsap||Jf(p)[S]._gsap,e._ptLookup[S]=X={},nf[V.id]&&Br.length&&kc(),k=y===p?S:y.indexOf(x),Z&&(L=new Z).init(x,G||w,e,k,y)!==!1&&(e._pt=I=new Un(e._pt,x,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(j){X[j]=I}),L.priority&&(R=1)),!Z||G)for(P in w)Wn[P]&&(L=ng(P,w,e,k,x,y))?L.priority&&(R=1):X[P]=I=ed.call(e,x,P,"get",w[P],k,y,0,i.stringFilter);e._op&&e._op[S]&&e.kill(x,e._op[S]),v&&e._pt&&(Cr=e,Nt.killTweensOf(x,X,e.globalTime(t)),Y=!e.parent,Cr=0),e._pt&&l&&(nf[V.id]=1)}R&&lg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&E.render(li,!0,!0)},Fv=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return cf=1,e.vars[t]="+=0",td(e,a),cf=0,l?jo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Bt(n)+_n(h.e)),h.b&&(h.b=u.s+_n(h.b))},Bv=function(e,t){var n=e[0]?Ps(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ga({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},kv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(vn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Do=function(e,t,n,i,s){return Ft(e)?e.call(t,n,i,s):sn(e)&&~e.indexOf("random(")?Zo(e):e},ig=Zf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",rg={};In(ig+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return rg[r]=1});var Ht=function(r){b_(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Po(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||Nt,y=(vn(n)||A_(n)?or(n[0]):"length"in i)?[n]:ci(n),v,E,b,w,S,P,I,x;if(a._targets=y.length?Jf(y):jo("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Ll(c)||Ll(u)){i=a.vars;var R=i.easeReverse||i.yoyoEase;if(v=a.timeline=new Ln({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:y}),v.kill(),v.parent=v._dp=qi(a),v._start=0,f||Ll(c)||Ll(u)){if(w=y.length,I=f&&W_(f),Ni(f))for(S in f)~ig.indexOf(S)&&(x||(x={}),x[S]=f[S]);for(E=0;E<w;E++)b=zc(i,rg),b.stagger=0,R&&(b.easeReverse=R),x&&Ga(b,x),P=y[E],b.duration=+Do(c,qi(a),E,P,y),b.delay=(+Do(u,qi(a),E,P,y)||0)-a._delay,!f&&w===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),v.to(P,b,I?I(E,P,y):0),v._ease=ut.none;v.duration()?c=u=0:a.timeline=0}else if(_){Po(ei(v.vars.defaults,{ease:"none"})),v._ease=Ds(_.ease||i.ease||"none");var V=0,Z,L,X;if(vn(_))_.forEach(function(k){return v.to(y,k,">")}),v.duration();else{b={};for(S in _)S==="ease"||S==="easeEach"||kv(S,_[S],b,_.easeEach);for(S in b)for(Z=b[S].sort(function(k,G){return k.t-G.t}),V=0,E=0;E<Z.length;E++)L=Z[E],X={ease:L.e,duration:(L.t-(E?Z[E-1].t:0))/100*c},X[S]=L.v,v.to(y,X,V),V+=X.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Xf&&(Cr=qi(a),Nt.killTweensOf(y),Cr=0),Pi(m,qi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Ut(m._time)&&Dn(h)&&mv(qi(a))&&m.data!=="nested")&&(a._tTime=-Et,a.render(Math.max(0,-u)||0)),p&&z_(qi(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Et&&!u?l:i<Et?0:i,f,d,_,g,p,m,y,v;if(!c)gv(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=Ut(h%g),h===l?(_=this._repeat,f=c):(p=Ut(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(f=c-f),p=Ha(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ut(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(V_(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var E=f<a;if(E!==this._inv){var b=E?a:c-a;this._inv=E,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(E?-1:1)/b:0,this._invScale=E?-this.ratio:1-this.ratio,this._invEase=E?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!p&&(Kn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&rf(this,i,s,o),Kn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Kn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&rf(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Wr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Kn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Jo||Yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||td(this,c),u=this._ease(c/this._dur),Fv(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Bu(this,0),this.parent||B_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?yo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!cn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Cr&&Cr.vars.overwrite!==!0)._first||yo(this),this.parent&&o!==this.timeline.totalDuration()&&Wa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ci(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&dv(a,l))return s==="all"&&(this._pt=0),yo(this);for(h=this._op=this._op||[],s!=="all"&&(sn(s)&&(g={},In(s,function(y){return g[y]=1}),s=g),s=Bv(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Ou(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&yo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Lo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Lo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Nt.killTweensOf(i,s,o)},e}(Qo);ei(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});In("staggerTo,staggerFrom,staggerFromTo",function(r){Ht[r]=function(){var e=new Ln,t=af.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var nd=function(e,t,n){return e[t]=n},sg=function(e,t,n){return e[t](n)},zv=function(e,t,n,i){return e[t](i.fp,n)},Vv=function(e,t,n){return e.setAttribute(t,n)},id=function(e,t){return Ft(e[t])?sg:qf(e[t])&&e.setAttribute?Vv:nd},ag=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Gv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},og=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},rd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Hv=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Wv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ou(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Xv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},lg=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Un=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||ag,this.d=l||this,this.set=c||nd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Xv,this.m=n,this.mt=s,this.tween=i},r}();In(Zf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Kf[r]=1});Qn.TweenMax=Qn.TweenLite=Ht;Qn.TimelineLite=Qn.TimelineMax=Ln;Nt=new Ln({sortChildren:!1,defaults:$o,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=Q_;var Is=[],Cc={},qv=[],Wd=0,Yv=0,sh=function(e){return(Cc[e]||qv).map(function(t){return t()})},uf=function(){var e=Date.now(),t=[];e-Wd>2&&(sh("matchMediaInit"),Is.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ei.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),sh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Wd=e,sh("matchMedia"))},cg=function(){function r(t,n){this.selector=n&&of(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Yv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ft(n)&&(s=i,i=n,n=Ft);var o=this,a=function(){var c=Dt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=of(s)),Dt=o,h=i.apply(o,arguments),Ft(h)&&o._r.push(h),Dt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ft?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ht&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ln?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ht)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Is.length;o--;)Is[o].id===this.id&&Is.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),$v=function(){function r(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ni(n)||(n={matches:n});var o=new cg(0,s||this.scope),a=o.conditions={},l,c,u;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ei.matchMedia(n[c]),l&&(Is.indexOf(o)<0&&Is.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(uf):l.addEventListener("change",uf)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Gc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return K_(i)})},timeline:function(e){return new Ln(e)},getTweensOf:function(e,t){return Nt.getTweensOf(e,t)},getProperty:function(e,t,n,i){sn(e)&&(e=ci(e)[0]);var s=Ps(e||{}).get,o=n?F_:O_;return n==="native"&&(n=""),e&&(t?o((Wn[t]&&Wn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Wn[a]&&Wn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ci(e),e.length>1){var i=e.map(function(u){return Fn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Wn[t],a=Ps(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;xa._pt=0,h.init(e,n?u+n:u,xa,0,[e]),h.render(1,h),xa._pt&&rd(1,xa)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Fn.to(e,ei((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ds(e.ease,$o.ease)),kd($o,e||{})},config:function(e){return kd(Jn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Wn[a]&&!Qn[a]&&jo(t+" effect requires "+a+" plugin.")}),th[t]=function(a,l,c){return n(ci(a),ei(l||{},s),c)},o&&(Ln.prototype[t]=function(a,l,c){return this.add(th[t](a,Ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=Ds(t)},parseEase:function(e,t){return arguments.length?Ds(e,t):ut},getById:function(e){return Nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ln(e),i,s;for(n.smoothChildTiming=Dn(e.smoothChildTiming),Nt.remove(n),n._dp=0,n._time=n._tTime=Nt._time,i=Nt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ht&&i.vars.onComplete===i._targets[0]))&&Pi(n,i,i._start-i._delay),i=s;return Pi(Nt,n,0),n},context:function(e,t){return e?new cg(e,t):Dt},matchMedia:function(e){return new $v(e)},matchMediaRefresh:function(){return Is.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||uf()},addEventListener:function(e,t){var n=Cc[e]||(Cc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Cc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:bv,wrapYoyo:wv,distribute:W_,random:q_,snap:X_,normalize:Tv,getUnit:_n,clamp:yv,splitColor:Z_,toArray:ci,selector:of,mapRange:$_,pipe:Sv,unitize:Ev,interpolate:Av,shuffle:H_},install:L_,effects:th,ticker:Yn,updateRoot:Ln.updateRoot,plugins:Wn,globalTimeline:Nt,core:{PropTween:Un,globals:D_,Tween:Ht,Timeline:Ln,Animation:Qo,getCache:Ps,_removeLinkedListItem:Ou,reverting:function(){return cn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return Xf=e}}};In("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Gc[r]=Ht[r]});Yn.add(Ln.updateRoot);xa=Gc.to({},{duration:0});var jv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Kv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=jv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ah=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(sn(s)&&(l={},In(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Kv(a,s)}}}},Fn=Gc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ah("roundProps",lf),ah("modifiers"),ah("snap",X_))||Gc;Ht.version=Ln.version=Fn.version="3.15.0";P_=1;Yf()&&Xa();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xd,Pr,Ta,sd,vs,qd,ad,Zv=function(){return typeof window<"u"},lr={},cs=180/Math.PI,ba=Math.PI/180,Xs=Math.atan2,Yd=1e8,od=/([A-Z])/g,Jv=/(left|right|width|margin|padding|x)/i,Qv=/[\s,\(]\S/,Di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ex=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ix=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ug=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},hg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},rx=function(e,t,n){return e.style[t]=n},sx=function(e,t,n){return e.style.setProperty(t,n)},ax=function(e,t,n){return e._gsap[t]=n},ox=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},lx=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},cx=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ot="transform",Nn=Ot+"Origin",ux=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in lr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Yi(i,a)}):this.tfm[e]=o.x?o[e]:Yi(i,e),e===Nn&&(this.tfm.zOrigin=o.zOrigin);else return Di.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ot)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Nn,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},fg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(od,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ad(),(!s||!s.isStart)&&!n[Ot]&&(fg(n),i.zOrigin&&n[Nn]&&(n[Nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},dg=function(e,t){var n={target:e,props:[],revert:hx,save:ux};return e._gsap||Fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},pg,ff=function(e,t){var n=Pr.createElementNS?Pr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Pr.createElement(e);return n&&n.style?n:Pr.createElement(e)},Zn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(od,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,qa(t)||t,1)||""},$d="O,Moz,ms,Ms,Webkit".split(","),qa=function(e,t,n){var i=t||vs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!($d[o]+e in s););return o<0?null:(o===3?"ms":o>=0?$d[o]:"")+e},df=function(){Zv()&&window.document&&(Xd=window,Pr=Xd.document,Ta=Pr.documentElement,vs=ff("div")||{style:{}},ff("div"),Ot=qa(Ot),Nn=Ot+"Origin",vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pg=!!qa("perspective"),ad=Fn.core.reverting,sd=1)},jd=function(e){var t=e.ownerSVGElement,n=ff("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ta.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ta.removeChild(n),s},Kd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},mg=function(e){var t,n;try{t=e.getBBox()}catch{t=jd(e),n=1}return t&&(t.width||t.height)||n||(t=jd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Kd(e,["x","cx","x1"])||0,y:+Kd(e,["y","cy","y1"])||0,width:0,height:0}:t},_g=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&mg(e))},Xr=function(e,t){if(t){var n=e.style,i;t in lr&&t!==Nn&&(t=Ot),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(od,"-$1").toLowerCase())):n.removeAttribute(t)}},Lr=function(e,t,n,i,s,o){var a=new Un(e._pt,t,n,0,1,o?hg:ug);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Zd={deg:1,rad:1,turn:1},fx={grid:1,flex:1},qr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=vs.style,l=Jv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===o||!s||Zd[i]||Zd[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&_g(e),(d||o==="%")&&(lr[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Bt(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Pr||!g.appendChild)&&(g=Pr.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Yn.time&&!p.uncache)return Bt(s/p.width*h);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+i,_=e[u],y?e.style[t]=y:Xr(e,t)}else(d||o==="%")&&!fx[Zn(g,"display")]&&(a.position=Zn(e,"position")),g===e&&(a.position="static"),g.appendChild(vs),_=vs[u],g.removeChild(vs),a.position="absolute";return l&&d&&(p=Ps(g),p.time=Yn.time,p.width=g[u]),Bt(f?_*s/h:_&&s?h/_*s:0)},Yi=function(e,t,n,i){var s;return sd||df(),t in Di&&t!=="transform"&&(t=Di[t],~t.indexOf(",")&&(t=t.split(",")[0])),lr[t]&&t!=="transform"?(s=tl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Wc(Zn(e,Nn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Hc[t]&&Hc[t](e,t,n)||Zn(e,t)||U_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?qr(e,t,s,n)+n:s},dx=function(e,t,n,i){if(!n||n==="none"){var s=qa(t,e,1),o=s&&Zn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Zn(e,"borderTopColor"))}var a=new Un(this._pt,e.style,t,0,1,og),l=0,c=0,u,h,f,d,_,g,p,m,y,v,E,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Zn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Zn(e,t)||i,g?e.style[t]=g:Xr(e,t)),u=[n,i],Q_(u),n=u[0],i=u[1],f=n.match(va)||[],b=i.match(va)||[],b.length){for(;h=va.exec(i);)p=h[0],y=i.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,E=g.substr((d+"").length),p.charAt(1)==="="&&(p=Ea(d,p)+E),m=parseFloat(p),v=p.substr((m+"").length),l=va.lastIndex-v.length,v||(v=v||Jn.units[t]||E,l===i.length&&(i+=v,a.e+=v)),E!==v&&(d=qr(e,t,g,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?hg:ug;return C_.test(i)&&(a.e=0),this._pt=a,a},Jd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},px=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Jd[n]||n,t[1]=Jd[i]||i,t.join(" ")},mx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],lr[a]&&(l=1,a=a==="transformOrigin"?Nn:Ot),Xr(n,a);l&&(Xr(n,Ot),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",tl(n,1),o.uncache=1,fg(i)))}},Hc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Un(e._pt,t,n,0,0,mx);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},el=[1,0,0,1,0,0],gg={},vg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qd=function(e){var t=Zn(e,Ot);return vg(t)?el:t.substr(7).match(R_).map(Bt)},ld=function(e,t){var n=e._gsap||Ps(e),i=e.style,s=Qd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?el:s):(s===el&&!e.offsetParent&&e!==Ta&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ta.appendChild(e)),s=Qd(e),l?i.display=l:Xr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ta.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},pf=function(e,t,n,i,s,o){var a=e._gsap,l=s||ld(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],y=l[5],v=t.split(" "),E=parseFloat(v[0])||0,b=parseFloat(v[1])||0,w,S,P,I;n?l!==el&&(S=d*p-_*g)&&(P=E*(p/S)+b*(-g/S)+(g*y-p*m)/S,I=E*(-_/S)+b*(d/S)-(d*y-_*m)/S,E=P,b=I):(w=mg(e),E=w.x+(~v[0].indexOf("%")?E/100*w.width:E),b=w.y+(~(v[1]||v[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&a.smooth?(m=E-c,y=b-u,a.xOffset=h+(m*d+y*g)-m,a.yOffset=f+(m*_+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=E,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Nn]="0px 0px",o&&(Lr(o,a,"xOrigin",c,E),Lr(o,a,"yOrigin",u,b),Lr(o,a,"xOffset",h,a.xOffset),Lr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",E+" "+b)},tl=function(e,t){var n=e._gsap||new tg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Zn(e,Nn)||"0",u,h,f,d,_,g,p,m,y,v,E,b,w,S,P,I,x,R,V,Z,L,X,k,G,Y,j,C,Q,he,be,H,ee;return u=h=f=g=p=m=y=v=E=0,d=_=1,n.svg=!!(e.getCTM&&_g(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),i.scale=i.rotate=i.translate="none"),S=ld(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),pf(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,w=n.yOrigin||0,S!==el&&(R=S[0],V=S[1],Z=S[2],L=S[3],u=X=S[4],h=k=S[5],S.length===6?(d=Math.sqrt(R*R+V*V),_=Math.sqrt(L*L+Z*Z),g=R||V?Xs(V,R)*cs:0,y=Z||L?Xs(Z,L)*cs+g:0,y&&(_*=Math.abs(Math.cos(y*ba))),n.svg&&(u-=b-(b*R+w*Z),h-=w-(b*V+w*L))):(ee=S[6],be=S[7],C=S[8],Q=S[9],he=S[10],H=S[11],u=S[12],h=S[13],f=S[14],P=Xs(ee,he),p=P*cs,P&&(I=Math.cos(-P),x=Math.sin(-P),G=X*I+C*x,Y=k*I+Q*x,j=ee*I+he*x,C=X*-x+C*I,Q=k*-x+Q*I,he=ee*-x+he*I,H=be*-x+H*I,X=G,k=Y,ee=j),P=Xs(-Z,he),m=P*cs,P&&(I=Math.cos(-P),x=Math.sin(-P),G=R*I-C*x,Y=V*I-Q*x,j=Z*I-he*x,H=L*x+H*I,R=G,V=Y,Z=j),P=Xs(V,R),g=P*cs,P&&(I=Math.cos(P),x=Math.sin(P),G=R*I+V*x,Y=X*I+k*x,V=V*I-R*x,k=k*I-X*x,R=G,X=Y),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Bt(Math.sqrt(R*R+V*V+Z*Z)),_=Bt(Math.sqrt(k*k+ee*ee)),P=Xs(X,k),y=Math.abs(P)>2e-4?P*cs:0,E=H?1/(H<0?-H:H):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!vg(Zn(e,Ot)),G&&e.setAttribute("transform",G))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Bt(d),n.scaleY=Bt(_),n.rotation=Bt(g)+a,n.rotationX=Bt(p)+a,n.rotationY=Bt(m)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=E+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Nn]=Wc(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?gx:pg?xg:_x,n.uncache=0,n},Wc=function(e){return(e=e.split(" "))[0]+" "+e[1]},oh=function(e,t,n){var i=_n(t);return Bt(parseFloat(t)+parseFloat(qr(e,"x",n+"px",i)))+i},_x=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xg(e,t)},ts="0deg",ao="0px",ns=") ",xg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,v=n.zOrigin,E="",b=m==="auto"&&e&&e!==1||m===!0;if(v&&(h!==ts||u!==ts)){var w=parseFloat(u)*ba,S=Math.sin(w),P=Math.cos(w),I;w=parseFloat(h)*ba,I=Math.cos(w),o=oh(y,o,S*I*-v),a=oh(y,a,-Math.sin(w)*-v),l=oh(y,l,P*I*-v+v)}p!==ao&&(E+="perspective("+p+ns),(i||s)&&(E+="translate("+i+"%, "+s+"%) "),(b||o!==ao||a!==ao||l!==ao)&&(E+=l!==ao||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ns),c!==ts&&(E+="rotate("+c+ns),u!==ts&&(E+="rotateY("+u+ns),h!==ts&&(E+="rotateX("+h+ns),(f!==ts||d!==ts)&&(E+="skew("+f+", "+d+ns),(_!==1||g!==1)&&(E+="scale("+_+", "+g+ns),y.style[Ot]=E||"translate(0, 0)"},gx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,v=parseFloat(o),E=parseFloat(a),b,w,S,P,I;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ba,c*=ba,b=Math.cos(l)*h,w=Math.sin(l)*h,S=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=ba,I=Math.tan(c-u),I=Math.sqrt(1+I*I),S*=I,P*=I,u&&(I=Math.tan(u),I=Math.sqrt(1+I*I),b*=I,w*=I)),b=Bt(b),w=Bt(w),S=Bt(S),P=Bt(P)):(b=h,P=f,w=S=0),(v&&!~(o+"").indexOf("px")||E&&!~(a+"").indexOf("px"))&&(v=qr(d,"x",o,"px"),E=qr(d,"y",a,"px")),(_||g||p||m)&&(v=Bt(v+_-(_*b+g*S)+p),E=Bt(E+g-(_*w+g*P)+m)),(i||s)&&(I=d.getBBox(),v=Bt(v+i/100*I.width),E=Bt(E+s/100*I.height)),I="matrix("+b+","+w+","+S+","+P+","+v+","+E+")",d.setAttribute("transform",I),y&&(d.style[Ot]=I)},vx=function(e,t,n,i,s){var o=360,a=sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?cs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Yd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Yd)%o-~~(c/o)*o)),e._pt=f=new Un(e._pt,t,n,i,c,ex),f.e=u,f.u="deg",e._props.push(n),f},ep=function(e,t){for(var n in t)e[n]=t[n];return e},xx=function(e,t,n){var i=ep({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ot]=t,a=tl(n,1),Xr(n,Ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ot],o[Ot]=t,a=tl(n,1),o[Ot]=c);for(l in lr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=_n(c),_=_n(u),h=d!==_?qr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Un(e._pt,a,l,h,f-h,hf),e._pt.u=_||0,e._props.push(l));ep(a,i)};In("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Hc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return Yi(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var yg={name:"css",register:df,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,y,v,E,b,w,S,P,I;sd||df(),this.styles=this.styles||dg(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Wn[g]&&ng(g,t,n,i,e,s)))){if(d=typeof u,_=Hc[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Zo(u)),_)_(this,e,g,u,n)&&(S=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",kr.lastIndex=0,kr.test(c)||(p=_n(c),m=_n(u),m?p!==m&&(c=qr(e,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],sn(c)&&~c.indexOf("random(")&&(c=Zo(c)),_n(c+"")||c==="auto"||(c+=Jn.units[g]||_n(Yi(e,g))||""),(c+"").charAt(1)==="="&&(c=Yi(e,g))):c=Yi(e,g),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in Di&&(g==="autoAlpha"&&(f===1&&Yi(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),Lr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Di[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in lr,v){if(this.styles.save(g),I=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Zn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=Zn(e,"perspective"),x?e.style.perspective=x:Xr(e,"perspective")}h=parseFloat(u)}if(E||(b=e._gsap,b.renderTransform&&!t.parseTransform||tl(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,E=this._pt=new Un(this._pt,a,Ot,0,1,b.renderTransform,b,0,-1),E.dep=1),g==="scale")this._pt=new Un(this._pt,b,"scaleY",b.scaleY,(y?Ea(b.scaleY,y+h):h)-b.scaleY||0,hf),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Nn,0,a[Nn]),u=px(u),b.svg?pf(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==b.zOrigin&&Lr(this,b,"zOrigin",b.zOrigin,m),Lr(this,a,g,Wc(c),Wc(u)));continue}else if(g==="svgOrigin"){pf(e,u,1,w,0,this);continue}else if(g in gg){vx(this,b,g,f,y?Ea(f,y+u):u);continue}else if(g==="smoothOrigin"){Lr(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){xx(this,u,e);continue}}else g in a||(g=qa(g)||g);if(v||(h||h===0)&&(f||f===0)&&!Qv.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=_n(u)||(g in Jn.units?Jn.units[g]:p),p!==m&&(f=qr(e,g,c,m)),this._pt=new Un(this._pt,v?b:a,g,f,(y?Ea(f,y+h):h)-f,!v&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?ix:hf),this._pt.u=m||0,v&&I!==u?(this._pt.b=c,this._pt.e=I,this._pt.r=nx):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=tx);else if(g in a)dx.call(this,e,g,c,y?y+u:u);else if(g in e)this.add(e,g,c||e[g],y?y+u:u,i,s);else if(g!=="parseTransform"){jf(g,u);continue}v||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),o.push(g)}}S&&lg(this)},render:function(e,t){if(t.tween._time||!ad())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Yi,aliases:Di,getSetter:function(e,t,n){var i=Di[t];return i&&i.indexOf(",")<0&&(t=i),t in lr&&t!==Nn&&(e._gsap.x||Yi(e,"x"))?n&&qd===n?t==="scale"?ox:ax:(qd=n||{})&&(t==="scale"?lx:cx):e.style&&!qf(e.style[t])?rx:~t.indexOf("-")?sx:id(e,t)},core:{_removeProperty:Xr,_getMatrix:ld}};Fn.utils.checkPrefix=qa;Fn.core.getStyleSaver=dg;(function(r,e,t,n){var i=In(r+","+e+","+t,function(s){lr[s]=1});In(e,function(s){Jn.units[s]="deg",gg[s]=1}),Di[i[13]]=r+","+e,In(n,function(s){var o=s.split(":");Di[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");In("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Jn.units[r]="px"});Fn.registerPlugin(yg);var ku=Fn.registerPlugin(yg)||Fn;ku.core.Tween;/*!
 * paths 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yx=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,Mx=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,Sx=Math.PI/180,Dl=Math.sin,Il=Math.cos,Io=Math.abs,oo=Math.sqrt,Ex=function(e){return typeof e=="number"},tp=1e5,fr=function(e){return Math.round(e*tp)/tp||0},np=function(e){return e.closed=Math.abs(e[0]-e[e.length-2])<.001&&Math.abs(e[1]-e[e.length-1])<.001};function Tx(r,e,t,n,i,s,o){for(var a=r.length,l,c,u,h,f;--a>-1;)for(l=r[a],c=l.length,u=0;u<c;u+=2)h=l[u],f=l[u+1],l[u]=h*e+f*n+s,l[u+1]=h*t+f*i+o;return r._dirty=1,r}function bx(r,e,t,n,i,s,o,a,l){if(!(r===a&&e===l)){t=Io(t),n=Io(n);var c=i%360*Sx,u=Il(c),h=Dl(c),f=Math.PI,d=f*2,_=(r-a)/2,g=(e-l)/2,p=u*_+h*g,m=-h*_+u*g,y=p*p,v=m*m,E=y/(t*t)+v/(n*n);E>1&&(t=oo(E)*t,n=oo(E)*n);var b=t*t,w=n*n,S=(b*w-b*v-w*y)/(b*v+w*y);S<0&&(S=0);var P=(s===o?-1:1)*oo(S),I=P*(t*m/n),x=P*-(n*p/t),R=(r+a)/2,V=(e+l)/2,Z=R+(u*I-h*x),L=V+(h*I+u*x),X=(p-I)/t,k=(m-x)/n,G=(-p-I)/t,Y=(-m-x)/n,j=X*X+k*k,C=(k<0?-1:1)*Math.acos(X/oo(j)),Q=(X*Y-k*G<0?-1:1)*Math.acos((X*G+k*Y)/oo(j*(G*G+Y*Y)));isNaN(Q)&&(Q=f),!o&&Q>0?Q-=d:o&&Q<0&&(Q+=d),C%=d,Q%=d;var he=Math.ceil(Io(Q)/(d/4)),be=[],H=Q/he,ee=4/3*Dl(H/2)/(1+Il(H/2)),ce=u*t,ye=h*t,ve=h*-n,fe=u*n,Ge;for(Ge=0;Ge<he;Ge++)i=C+Ge*H,p=Il(i),m=Dl(i),X=Il(i+=H),k=Dl(i),be.push(p-ee*m,m+ee*p,X+ee*k,k-ee*X,X,k);for(Ge=0;Ge<be.length;Ge+=2)p=be[Ge],m=be[Ge+1],be[Ge]=p*ce+m*ve+Z,be[Ge+1]=p*ye+m*fe+L;return be[Ge-2]=a,be[Ge-1]=l,be}}function wx(r){var e=(r+"").replace(Mx,function(I){var x=+I;return x<1e-4&&x>-1e-4?0:x}).match(yx)||[],t=[],n=0,i=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+r,c,u,h,f,d,_,g,p,m,y,v,E,b,w,S,P=function(x,R,V,Z){y=(V-x)/3,v=(Z-R)/3,g.push(x+y,R+v,V-y,Z-v,V,Z)};if(!r||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(b=d,isNaN(e[c])?(d=e[c].toUpperCase(),_=d!==e[c]):c--,h=+e[c+1],f=+e[c+2],_&&(h+=n,f+=i),c||(p=h,m=f),d==="M")g&&(g.length<8?t.length-=1:a+=g.length,np(g)),n=p=h,i=m=f,g=[h,f],t.push(g),c+=2,d="L";else if(d==="C")g||(g=[0,0]),_||(n=i=0),g.push(h,f,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(d==="S")y=n,v=i,(b==="C"||b==="S")&&(y+=n-g[g.length-4],v+=i-g[g.length-3]),_||(n=i=0),g.push(y,v,h,f,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(d==="Q")y=n+(h-n)*s,v=i+(f-i)*s,_||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,g.push(y,v,n+(h-n)*s,i+(f-i)*s,n,i),c+=4;else if(d==="T")y=n-g[g.length-4],v=i-g[g.length-3],g.push(n+y,i+v,h+(n+y*1.5-h)*s,f+(i+v*1.5-f)*s,n=h,i=f),c+=2;else if(d==="H")P(n,i,n=h,i),c+=1;else if(d==="V")P(n,i,n,i=h+(_?i-n:0)),c+=1;else if(d==="L"||d==="Z")d==="Z"&&(h=p,f=m,g.closed=!0),(d==="L"||Io(n-h)>.5||Io(i-f)>.5)&&(P(n,i,h,f),d==="L"&&(c+=2)),n=h,i=f;else if(d==="A"){if(w=e[c+4],S=e[c+5],y=e[c+6],v=e[c+7],u=7,w.length>1&&(w.length<3?(v=y,y=S,u--):(v=S,y=w.substr(2),u-=2),S=w.charAt(1),w=w.charAt(0)),E=bx(n,i,+e[c+1],+e[c+2],+e[c+3],+w,+S,(_?n:0)+y*1,(_?i:0)+v*1),c+=u,E)for(u=0;u<E.length;u++)g.push(E[u]);n=g[g.length-2],i=g[g.length-1]}else console.log(l);return c=g.length,c<6?(t.pop(),c=0):np(g),t.totalPoints=a+c,t}function Ax(r){Ex(r[0])&&(r=[r]);var e="",t=r.length,n,i,s,o;for(i=0;i<t;i++){for(o=r[i],e+="M"+fr(o[0])+","+fr(o[1])+" C",n=o.length,s=2;s<n;s++)e+=fr(o[s++])+","+fr(o[s++])+" "+fr(o[s++])+","+fr(o[s++])+" "+fr(o[s++])+","+fr(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pn,Mg,Sg=function(){return Pn||typeof window<"u"&&(Pn=window.gsap)&&Pn.registerPlugin&&Pn},ip=function(){Pn=Sg(),Pn?(Pn.registerEase("_CE",di.create),Mg=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Rx=1e20,Ul=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},Cx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,Px=/[cLlsSaAhHvVtTqQ]/g,Lx=function(e){var t=e.length,n=Rx,i;for(i=1;i<t;i+=6)+e[i]<n&&(n=+e[i]);return n},Dx=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var i=+e[0]*-1,s=-n,o=e.length,a=1/(+e[o-2]+i),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?Lx(e)+s:+e[o-1]+s),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+i)*a,e[c+1]=(+e[c+1]+s)*l},Ix=function r(e,t,n,i,s,o,a,l,c,u,h){var f=(e+n)/2,d=(t+i)/2,_=(n+s)/2,g=(i+o)/2,p=(s+a)/2,m=(o+l)/2,y=(f+_)/2,v=(d+g)/2,E=(_+p)/2,b=(g+m)/2,w=(y+E)/2,S=(v+b)/2,P=a-e,I=l-t,x=Math.abs((n-a)*I-(i-l)*P),R=Math.abs((s-a)*I-(o-l)*P),V;return u||(u=[{x:e,y:t},{x:a,y:l}],h=1),u.splice(h||u.length-1,0,{x:w,y:S}),(x+R)*(x+R)>c*(P*P+I*I)&&(V=u.length,r(e,t,f,d,y,v,w,S,c,u,h),r(w,S,E,b,p,m,a,l,c,u,h+1+(u.length-V))),u},di=function(){function r(t,n,i){Mg||ip(),this.id=t,this.setData(n,i)}var e=r.prototype;return e.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var s=n.match(Cx),o=1,a=[],l=[],c=i.precision||1,u=c<=1,h,f,d,_,g,p,m,y,v;if(this.data=n,(Px.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=wx(n)[0]),h=s.length,h===4)s.unshift(0,0),s.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[h-2]!=1)&&Dx(s,i.height,i.originY),this.segment=s,_=2;_<h;_+=6)f={x:+s[_-2],y:+s[_-1]},d={x:+s[_+4],y:+s[_+5]},a.push(f,d),Ix(f.x,f.y,+s[_],+s[_+1],+s[_+2],+s[_+3],d.x,d.y,1/(c*2e5),a,a.length-1);for(h=a.length,_=0;_<h;_++)m=a[_],y=a[_-1]||m,(m.x>y.x||y.y!==m.y&&y.x===m.x||m===y)&&m.x<=1?(y.cx=m.x-y.x,y.cy=m.y-y.y,y.n=m,y.nx=m.x,u&&_>1&&Math.abs(y.cy/y.cx-a[_-2].cy/a[_-2].cx)>2&&(u=0),y.cx<o&&(y.cx?o=y.cx:(y.cx=.001,_===h-1&&(y.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(_--,1),h--);if(h=1/o+1|0,g=1/h,p=0,m=a[0],u){for(_=0;_<h;_++)v=_*g,m.nx<v&&(m=a[++p]),f=m.y+(v-m.x)/m.cx*m.cy,l[_]={x:v,cx:g,y:f,cy:0,nx:9},_&&(l[_-1].cy=f-l[_-1].y);p=a[a.length-1],l[h-1].cy=p.y-f,l[h-1].cx=p.x-l[l.length-1].x}else{for(_=0;_<h;_++)m.nx<_*g&&(m=a[++p]),l[_]=m;p<a.length-1&&(l[_-1]=a[a.length-2])}return this.ease=function(E){var b=l[E*h|0]||l[h-1];return b.nx<E&&(b=b.n),b.y+(E-b.x)/b.cx*b.cy},this.ease.custom=this,this.id&&Pn&&Pn.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return r.getSVGData(this,n)},r.create=function(n,i,s){return new r(n,i,s).ease},r.register=function(n){Pn=n,ip()},r.get=function(n){return Pn.parseEase(n)},r.getSVGData=function(n,i){i=i||{};var s=i.width||100,o=i.height||100,a=i.x||0,l=(i.y||0)+o,c=Pn.utils.toArray(i.path)[0],u,h,f,d,_,g,p,m,y,v;if(i.invert&&(o=-o,l=0),typeof n=="string"&&(n=Pn.parseEase(n)),n.custom&&(n=n.custom),n instanceof r)u=Ax(Tx([n.segment.slice(0)],s,0,0,-o,a,l));else{for(u=[a,l],p=Math.max(5,(i.precision||1)*200),d=1/p,p+=2,m=5/p,y=Ul(a+d*s),v=Ul(l+n(d)*-o),h=(v-l)/(y-a),f=2;f<p;f++)_=Ul(a+f*d*s),g=Ul(l+n(f*d)*-o),(Math.abs((g-v)/(_-y)-h)>m||f===p-1)&&(u.push(y,v),h=(g-v)/(_-y)),y=_,v=g;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},r}();di.version="3.15.0";di.headless=!0;Sg()&&Pn.registerPlugin(di);function rp(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ux(r,e,t){return e&&rp(r.prototype,e),t&&rp(r,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ln,Pc,$n,Dr,Ir,wa,Eg,us,Aa,Tg,ir,gi,bg,wg=function(){return ln||typeof window<"u"&&(ln=window.gsap)&&ln.registerPlugin&&ln},Ag=1,ya=[],at=[],Ui=[],Uo=Date.now,mf=function(e,t){return t},Nx=function(){var e=Aa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,at),i.push.apply(i,Ui),at=n,Ui=i,mf=function(o,a){return t[o](a)}},zr=function(e,t){return~Ui.indexOf(e)&&Ui[Ui.indexOf(e)+1][t]},No=function(e){return!!~Tg.indexOf(e)},Sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},yn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Nl="scrollLeft",Ol="scrollTop",_f=function(){return ir&&ir.isPressed||at.cache++},Xc=function(e,t){var n=function i(s){if(s||s===0){Ag&&($n.history.scrollRestoration="manual");var o=ir&&ir.isPressed;s=i.v=Math.round(s)||(ir&&ir.iOS?1:0),e(s),i.cacheID=at.cache,o&&mf("ss",s)}else(t||at.cache!==i.cacheID||mf("ref"))&&(i.cacheID=at.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},An={s:Nl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Xc(function(r){return arguments.length?$n.scrollTo(r,$t.sc()):$n.pageXOffset||Dr[Nl]||Ir[Nl]||wa[Nl]||0})},$t={s:Ol,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:Xc(function(r){return arguments.length?$n.scrollTo(An.sc(),r):$n.pageYOffset||Dr[Ol]||Ir[Ol]||wa[Ol]||0})},Cn=function(e,t){return(t&&t._ctx&&t._ctx.selector||ln.utils.toArray)(e)[0]||(typeof e=="string"&&ln.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ox=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Yr=function(e,t){var n=t.s,i=t.sc;No(e)&&(e=Dr.scrollingElement||Ir);var s=at.indexOf(e),o=i===$t.sc?1:2;!~s&&(s=at.push(e)-1),at[s+o]||Sn(e,"scroll",_f);var a=at[s+o],l=a||(at[s+o]=Xc(zr(e,n),!0)||(No(e)?i:Xc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=ln.getProperty(e,"scrollBehavior")==="smooth"),l},gf=function(e,t,n){var i=e,s=e,o=Uo(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=Uo();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,p=s,m=Uo();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},lo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},sp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Rg=function(){Aa=ln.core.globals().ScrollTrigger,Aa&&Aa.core&&Nx()},Cg=function(e){return ln=e||wg(),!Pc&&ln&&typeof document<"u"&&document.body&&($n=window,Dr=document,Ir=Dr.documentElement,wa=Dr.body,Tg=[$n,Dr,Ir,wa],ln.utils.clamp,bg=ln.core.context||function(){},us="onpointerenter"in wa?"pointer":"mouse",Eg=kt.isTouch=$n.matchMedia&&$n.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in $n||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,gi=kt.eventTypes=("ontouchstart"in Ir?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ir?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ag=0},500),Pc=1),Aa||Rg(),Pc};An.op=$t;at.cache=0;var kt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Pc||Cg(ln)||console.warn("Please gsap.registerPlugin(Observer)"),Aa||Rg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,v=n.onPress,E=n.onRelease,b=n.onRight,w=n.onLeft,S=n.onUp,P=n.onDown,I=n.onChangeX,x=n.onChangeY,R=n.onChange,V=n.onToggleX,Z=n.onToggleY,L=n.onHover,X=n.onHoverEnd,k=n.onMove,G=n.ignoreCheck,Y=n.isNormalizer,j=n.onGestureStart,C=n.onGestureEnd,Q=n.onWheel,he=n.onEnable,be=n.onDisable,H=n.onClick,ee=n.scrollSpeed,ce=n.capture,ye=n.allowClicks,ve=n.lockAxis,fe=n.onLockAxis;this.target=a=Cn(a)||Ir,this.vars=n,d&&(d=ln.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,ee=ee||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat($n.getComputedStyle(wa).lineHeight)||22);var Ge,Le,O,He,ge,Be,Ce,B=this,ke=0,Xe=0,dt=n.passive||!u&&n.passive!==!1,A=Yr(a,An),M=Yr(a,$t),K=A(),J=M(),te=~o.indexOf("touch")&&!~o.indexOf("pointer")&&gi[0]==="pointerdown",ne=No(a),we=a.ownerDocument||Dr,Ie=[0,0,0],re=[0,0,0],ue=0,Ye=function(){return ue=Uo()},ie=function(Ae,Ne){return(B.event=Ae)&&d&&Ox(Ae.target,d)||Ne&&te&&Ae.pointerType!=="touch"||G&&G(Ae,Ne)},At=function(){B._vx.reset(),B._vy.reset(),Le.pause(),h&&h(B)},qe=function(){var Ae=B.deltaX=sp(Ie),Ne=B.deltaY=sp(re),ae=Math.abs(Ae)>=i,Fe=Math.abs(Ne)>=i;R&&(ae||Fe)&&R(B,Ae,Ne,Ie,re),ae&&(b&&B.deltaX>0&&b(B),w&&B.deltaX<0&&w(B),I&&I(B),V&&B.deltaX<0!=ke<0&&V(B),ke=B.deltaX,Ie[0]=Ie[1]=Ie[2]=0),Fe&&(P&&B.deltaY>0&&P(B),S&&B.deltaY<0&&S(B),x&&x(B),Z&&B.deltaY<0!=Xe<0&&Z(B),Xe=B.deltaY,re[0]=re[1]=re[2]=0),(He||O)&&(k&&k(B),O&&(p&&O===1&&p(B),y&&y(B),O=0),He=!1),Be&&!(Be=!1)&&fe&&fe(B),ge&&(Q(B),ge=!1),Ge=0},Ue=function(Ae,Ne,ae){Ie[ae]+=Ae,re[ae]+=Ne,B._vx.update(Ae),B._vy.update(Ne),c?Ge||(Ge=requestAnimationFrame(qe)):qe()},Ee=function(Ae,Ne){ve&&!Ce&&(B.axis=Ce=Math.abs(Ae)>Math.abs(Ne)?"x":"y",Be=!0),Ce!=="y"&&(Ie[2]+=Ae,B._vx.update(Ae,!0)),Ce!=="x"&&(re[2]+=Ne,B._vy.update(Ne,!0)),c?Ge||(Ge=requestAnimationFrame(qe)):qe()},Se=function(Ae){if(!ie(Ae,1)){Ae=lo(Ae,u);var Ne=Ae.clientX,ae=Ae.clientY,Fe=Ne-B.x,Oe=ae-B.y,je=B.isDragging;B.x=Ne,B.y=ae,(je||(Fe||Oe)&&(Math.abs(B.startX-Ne)>=s||Math.abs(B.startY-ae)>=s))&&(O||(O=je?2:1),je||(B.isDragging=!0),Ee(Fe,Oe))}},Ze=B.onPress=function(Pe){ie(Pe,1)||Pe&&Pe.button||(B.axis=Ce=null,Le.pause(),B.isPressed=!0,Pe=lo(Pe),ke=Xe=0,B.startX=B.x=Pe.clientX,B.startY=B.y=Pe.clientY,B._vx.reset(),B._vy.reset(),Sn(Y?a:we,gi[1],Se,dt,!0),B.deltaX=B.deltaY=0,v&&v(B))},de=B.onRelease=function(Pe){if(!ie(Pe,1)){yn(Y?a:we,gi[1],Se,!0);var Ae=!isNaN(B.y-B.startY),Ne=B.isDragging,ae=Ne&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Fe=lo(Pe);!ae&&Ae&&(B._vx.reset(),B._vy.reset(),u&&ye&&ln.delayedCall(.08,function(){if(Uo()-ue>300&&!Pe.defaultPrevented){if(Pe.target.click)Pe.target.click();else if(we.createEvent){var Oe=we.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,$n,1,Fe.screenX,Fe.screenY,Fe.clientX,Fe.clientY,!1,!1,!1,!1,0,null),Pe.target.dispatchEvent(Oe)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,h&&Ne&&!Y&&Le.restart(!0),O&&qe(),m&&Ne&&m(B),E&&E(B,ae)}},ht=function(Ae){return Ae.touches&&Ae.touches.length>1&&(B.isGesturing=!0)&&j(Ae,B.isDragging)},U=function(){return(B.isGesturing=!1)||C(B)},oe=function(Ae){if(!ie(Ae)){var Ne=A(),ae=M();Ue((Ne-K)*ee,(ae-J)*ee,1),K=Ne,J=ae,h&&Le.restart(!0)}},q=function(Ae){if(!ie(Ae)){Ae=lo(Ae,u),Q&&(ge=!0);var Ne=(Ae.deltaMode===1?l:Ae.deltaMode===2?$n.innerHeight:1)*_;Ue(Ae.deltaX*Ne,Ae.deltaY*Ne,0),h&&!Y&&Le.restart(!0)}},se=function(Ae){if(!ie(Ae)){var Ne=Ae.clientX,ae=Ae.clientY,Fe=Ne-B.x,Oe=ae-B.y;B.x=Ne,B.y=ae,He=!0,h&&Le.restart(!0),(Fe||Oe)&&Ee(Fe,Oe)}},_e=function(Ae){B.event=Ae,L(B)},$e=function(Ae){B.event=Ae,X(B)},ft=function(Ae){return ie(Ae)||lo(Ae,u)&&H(B)};Le=B._dc=ln.delayedCall(f||.25,At).pause(),B.deltaX=B.deltaY=0,B._vx=gf(0,50,!0),B._vy=gf(0,50,!0),B.scrollX=A,B.scrollY=M,B.isDragging=B.isGesturing=B.isPressed=!1,bg(this),B.enable=function(Pe){return B.isEnabled||(Sn(ne?we:a,"scroll",_f),o.indexOf("scroll")>=0&&Sn(ne?we:a,"scroll",oe,dt,ce),o.indexOf("wheel")>=0&&Sn(a,"wheel",q,dt,ce),(o.indexOf("touch")>=0&&Eg||o.indexOf("pointer")>=0)&&(Sn(a,gi[0],Ze,dt,ce),Sn(we,gi[2],de),Sn(we,gi[3],de),ye&&Sn(a,"click",Ye,!0,!0),H&&Sn(a,"click",ft),j&&Sn(we,"gesturestart",ht),C&&Sn(we,"gestureend",U),L&&Sn(a,us+"enter",_e),X&&Sn(a,us+"leave",$e),k&&Sn(a,us+"move",se)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=He=O=!1,B._vx.reset(),B._vy.reset(),K=A(),J=M(),Pe&&Pe.type&&Ze(Pe),he&&he(B)),B},B.disable=function(){B.isEnabled&&(ya.filter(function(Pe){return Pe!==B&&No(Pe.target)}).length||yn(ne?we:a,"scroll",_f),B.isPressed&&(B._vx.reset(),B._vy.reset(),yn(Y?a:we,gi[1],Se,!0)),yn(ne?we:a,"scroll",oe,ce),yn(a,"wheel",q,ce),yn(a,gi[0],Ze,ce),yn(we,gi[2],de),yn(we,gi[3],de),yn(a,"click",Ye,!0),yn(a,"click",ft),yn(we,"gesturestart",ht),yn(we,"gestureend",U),yn(a,us+"enter",_e),yn(a,us+"leave",$e),yn(a,us+"move",se),B.isEnabled=B.isPressed=B.isDragging=!1,be&&be(B))},B.kill=B.revert=function(){B.disable();var Pe=ya.indexOf(B);Pe>=0&&ya.splice(Pe,1),ir===B&&(ir=0)},ya.push(B),Y&&No(a)&&(ir=B),B.enable(g)},Ux(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();kt.version="3.15.0";kt.create=function(r){return new kt(r)};kt.register=Cg;kt.getAll=function(){return ya.slice()};kt.getById=function(r){return ya.filter(function(e){return e.vars.id===r})[0]};wg()&&ln.registerPlugin(kt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Me,pa,st,gt,Xn,pt,cd,qc,nl,Oo,So,Fl,pn,zu,vf,bn,ap,op,ma,Pg,lh,Lg,Tn,xf,Dg,Ig,xr,yf,ud,Ra,hd,Fo,Mf,ch,Bl=1,mn=Date.now,uh=mn(),hi=0,Eo=0,lp=function(e,t,n){var i=Hn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},cp=function(e,t){return t&&(!Hn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Fx=function r(){return Eo&&requestAnimationFrame(r)},up=function(){return zu=1},hp=function(){return zu=0},Ti=function(e){return e},To=function(e){return Math.round(e*1e5)/1e5||0},Ug=function(){return typeof window<"u"},Ng=function(){return Me||Ug()&&(Me=window.gsap)&&Me.registerPlugin&&Me},ks=function(e){return!!~cd.indexOf(e)},Og=function(e){return(e==="Height"?hd:st["inner"+e])||Xn["client"+e]||pt["client"+e]},Fg=function(e){return zr(e,"getBoundingClientRect")||(ks(e)?function(){return Nc.width=st.innerWidth,Nc.height=hd,Nc}:function(){return Ji(e)})},Bx=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=zr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Og(s):e["client"+s])||0}},kx=function(e,t){return!t||~Ui.indexOf(e)?Fg(e):function(){return Nc}},Ii=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=zr(e,n))?o()-Fg(e)()[s]:ks(e)?(Xn[n]||pt[n])-Og(i):e[n]-e["offset"+i])},kl=function(e,t){for(var n=0;n<ma.length;n+=3)(!t||~t.indexOf(ma[n+1]))&&e(ma[n],ma[n+1],ma[n+2])},Hn=function(e){return typeof e=="string"},gn=function(e){return typeof e=="function"},bo=function(e){return typeof e=="number"},hs=function(e){return typeof e=="object"},co=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},qs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Ys=Math.abs,Bg="left",kg="top",fd="right",dd="bottom",Us="width",Ns="height",Bo="Right",ko="Left",zo="Top",Vo="Bottom",Gt="padding",si="margin",Ya="Width",pd="Height",Yt="px",ai=function(e){return st.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},zx=function(e){var t=ai(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},fp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ji=function(e,t){var n=t&&ai(e)[vf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Yc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},zg=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Vx=function(e){return function(t){return Me.utils.snap(zg(e),t)}},md=function(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Gx=function(e){return function(t,n){return md(zg(e))(t,n.direction)}},zl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},nn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Vl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},dp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Gl={toggleActions:"play",anticipatePin:0},$c={top:0,left:0,center:.5,bottom:1,right:1},Lc=function(e,t){if(Hn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in $c?$c[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Hl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=gt.createElement("div"),g=ks(n)||zr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?pt:n.tagName==="IFRAME"?n.contentDocument.body:n,y=e.indexOf("start")!==-1,v=y?c:u,E="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(E+=(i===$t?fd:dd)+":"+(o+parseFloat(f))+"px;"),a&&(E+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=E,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Dc(_,0,i,y),_},Dc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ya]=1,s["border"+a+Ya]=0,s[n.p]=t+"px",Me.set(e,s)},it=[],Sf={},il,pp=function(){return mn()-hi>34&&(il||(il=requestAnimationFrame(sr)))},$s=function(){(!Tn||!Tn.isPressed||Tn.startX>pt.clientWidth)&&(at.cache++,Tn?il||(il=requestAnimationFrame(sr)):sr(),hi||Vs("scrollStart"),hi=mn())},hh=function(){Ig=st.innerWidth,Dg=st.innerHeight},wo=function(e){at.cache++,(e===!0||!pn&&!Lg&&!gt.fullscreenElement&&!gt.webkitFullscreenElement&&(!xf||Ig!==st.innerWidth||Math.abs(st.innerHeight-Dg)>st.innerHeight*.25))&&qc.restart(!0)},zs={},Hx=[],Vg=function r(){return en(lt,"scrollEnd",r)||xs(!0)},Vs=function(e){return zs[e]&&zs[e].map(function(t){return t()})||Hx},Gn=[],Gg=function(e){for(var t=0;t<Gn.length;t+=5)(!e||Gn[t+4]&&Gn[t+4].query===e)&&(Gn[t].style.cssText=Gn[t+1],Gn[t].getBBox&&Gn[t].setAttribute("transform",Gn[t+2]||""),Gn[t+3].uncache=1)},Hg=function(){return at.forEach(function(e){return gn(e)&&++e.cacheID&&(e.rec=e())})},_d=function(e,t){var n;for(bn=0;bn<it.length;bn++)n=it[bn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Fo=!0,t&&Gg(t),t||Vs("revert")},Wg=function(e,t){at.cache++,(t||!wn)&&at.forEach(function(n){return gn(n)&&n.cacheID++&&(n.rec=0)}),Hn(e)&&(st.history.scrollRestoration=ud=e)},wn,Os=0,mp,Wx=function(){if(mp!==Os){var e=mp=Os;requestAnimationFrame(function(){return e===Os&&xs(!0)})}},Xg=function(){pt.appendChild(Ra),hd=!Tn&&Ra.offsetHeight||st.innerHeight,pt.removeChild(Ra)},_p=function(e){return nl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},xs=function(e,t){if(Xn=gt.documentElement,pt=gt.body,cd=[st,gt,Xn,pt],hi&&!e&&!Fo){nn(lt,"scrollEnd",Vg);return}Xg(),wn=lt.isRefreshing=!0,Fo||Hg();var n=Vs("refreshInit");Pg&&lt.sort(),t||_d(),at.forEach(function(i){gn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),Fo=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Mf=1,_p(!0),it.forEach(function(i){var s=Ii(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),_p(!1),Mf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),at.forEach(function(i){gn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Wg(ud,1),qc.pause(),Os++,wn=2,sr(2),it.forEach(function(i){return gn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),wn=lt.isRefreshing=!1,Vs("refresh")},Ef=0,Ic=1,Go,sr=function(e){if(e===2||!wn&&!Fo){lt.isUpdating=!0,Go&&Go.update(0);var t=it.length,n=mn(),i=n-uh>=50,s=t&&it[0].scroll();if(Ic=Ef>s?-1:1,wn||(Ef=s),i&&(hi&&!zu&&n-hi>200&&(hi=0,Vs("scrollEnd")),So=uh,uh=n),Ic<0){for(bn=t;bn-- >0;)it[bn]&&it[bn].update(0,i);Ic=1}else for(bn=0;bn<t;bn++)it[bn]&&it[bn].update(0,i);lt.isUpdating=!1}il=0},Tf=[Bg,kg,dd,fd,si+Vo,si+Bo,si+zo,si+ko,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Uc=Tf.concat([Us,Ns,"boxSizing","max"+Ya,"max"+pd,"position",si,Gt,Gt+zo,Gt+Bo,Gt+Vo,Gt+ko]),Xx=function(e,t,n){Ca(n);var i=e._gsap;if(i.spacerIsNative)Ca(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},fh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Tf.length,o=t.style,a=e.style,l;s--;)l=Tf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[dd]=a[fd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Us]=Yc(e,An)+Yt,o[Ns]=Yc(e,$t)+Yt,o[Gt]=a[si]=a[kg]=a[Bg]="0",Ca(i),a[Us]=a["max"+Ya]=n[Us],a[Ns]=a["max"+pd]=n[Ns],a[Gt]=n[Gt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},qx=/([A-Z])/g,Ca=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(qx,"-$1").toLowerCase())}},Wl=function(e){for(var t=Uc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Uc[s],n[Uc[s]]);return i.t=e,i},Yx=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Nc={left:0,top:0},gp=function(e,t,n,i,s,o,a,l,c,u,h,f,d,_){gn(e)&&(e=e(l)),Hn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Lc("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,y;if(d&&d.seek(0),isNaN(e)||(e=+e),bo(e))d&&(e=Me.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Dc(a,n,i,!0);else{gn(t)&&(t=t(l));var v=(e||"0").split(" "),E,b,w,S;y=Cn(t,l)||pt,E=Ji(y)||{},(!E||!E.left&&!E.top)&&ai(y).display==="none"&&(S=y.style.display,y.style.display="block",E=Ji(y),S?y.style.display=S:y.style.removeProperty("display")),b=Lc(v[0],E[i.d]),w=Lc(v[1]||"0",n),e=E[i.p]-c[i.p]-u+b+s-w,a&&Dc(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+n,I=o._isStart;p="scroll"+i.d2,Dc(o,P,i,I&&P>20||!I&&(h?Math.max(pt[p],Xn[p]):o.parentNode[p])<=P+1),h&&(c=Ji(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Yt))}return d&&y&&(p=Ji(y),d.seek(f),m=Ji(y),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},$x=/(webkit|moz|length|cssText|inset)/i,vp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=ai(e);for(o in a)!+o&&!$x.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},qg=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Xl=function(e,t,n){var i={};i[t.p]="+="+n,Me.set(e,i)},xp=function(e,t){var n=Yr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=qg(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){at.cache++,o.tween&&sr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Me.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},nn(e,"wheel",n.wheelHandler),lt.isTouch&&nn(e,"touchmove",n.wheelHandler),s},lt=function(){function r(t,n){pa||r.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),yf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Eo){this.update=this.refresh=this.kill=Ti;return}n=fp(Hn(n)||bo(n)||n.nodeType?{trigger:n}:n,Gl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,v=s.once,E=s.snap,b=s.pinReparent,w=s.pinSpacer,S=s.containerAnimation,P=s.fastScrollEnd,I=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:$t,R=!h&&h!==0,V=Cn(n.scroller||st),Z=Me.core.getCache(V),L=ks(V),X=("pinType"in n?n.pinType:zr(V,"pinType")||L&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=R&&n.toggleActions.split(" "),Y="markers"in n?n.markers:Gl.markers,j=L?0:parseFloat(ai(V)["border"+x.p2+Ya])||0,C=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(C)},he=Bx(V,L,x),be=kx(V,L),H=0,ee=0,ce=0,ye=Yr(V,x),ve,fe,Ge,Le,O,He,ge,Be,Ce,B,ke,Xe,dt,A,M,K,J,te,ne,we,Ie,re,ue,Ye,ie,At,qe,Ue,Ee,Se,Ze,de,ht,U,oe,q,se,_e,$e;if(C._startClamp=C._endClamp=!1,C._dir=x,p*=45,C.scroller=V,C.scroll=S?S.time.bind(S):ye,Le=ye(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Pg=1,n.refreshPriority===-9999&&(Go=C)),Z.tweenScroll=Z.tweenScroll||{top:xp(V,$t),left:xp(V,An)},C.tweenTo=ve=Z.tweenScroll[x.p],C.scrubDuration=function(ae){ht=bo(ae)&&ae,ht?de?de.duration(ae):de=Me.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ht,paused:!0,onComplete:function(){return m&&m(C)}}):(de&&de.progress(1).kill(),de=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),Se=0,l||(l=i.vars.id)),E&&((!hs(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in pt.style&&Me.set(L?[pt,Xn]:V,{scrollBehavior:"auto"}),at.forEach(function(ae){return gn(ae)&&ae.target===(L?gt.scrollingElement||Xn:V)&&(ae.smooth=!1)}),Ge=gn(E.snapTo)?E.snapTo:E.snapTo==="labels"?Vx(i):E.snapTo==="labelsDirectional"?Gx(i):E.directional!==!1?function(ae,Fe){return md(E.snapTo)(ae,mn()-ee<500?0:Fe.direction)}:Me.utils.snap(E.snapTo),U=E.duration||{min:.1,max:2},U=hs(U)?Oo(U.min,U.max):Oo(U,U),oe=Me.delayedCall(E.delay||ht/2||.1,function(){var ae=ye(),Fe=mn()-ee<500,Oe=ve.tween;if((Fe||Math.abs(C.getVelocity())<10)&&!Oe&&!zu&&H!==ae){var je=(ae-He)/A,It=i&&!R?i.totalProgress():je,rt=Fe?0:(It-Ze)/(mn()-So)*1e3||0,bt=Me.utils.clamp(-je,1-je,Ys(rt/2)*rt/.185),Wt=je+(E.inertia===!1?0:bt),Rt,wt,mt=E,Bn=mt.onStart,T=mt.onInterrupt,N=mt.onComplete;if(Rt=Ge(Wt,C),bo(Rt)||(Rt=Wt),wt=Math.max(0,Math.round(He+Rt*A)),ae<=ge&&ae>=He&&wt!==ae){if(Oe&&!Oe._initted&&Oe.data<=Ys(wt-ae))return;E.inertia===!1&&(bt=Rt-je),ve(wt,{duration:U(Ys(Math.max(Ys(Wt-It),Ys(Rt-It))*.185/rt/.05||0)),ease:E.ease||"power3",data:Ys(wt-ae),onInterrupt:function(){return oe.restart(!0)&&T&&qs(C,T)},onComplete:function(){C.update(),H=ye(),i&&!R&&(de?de.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),Se=Ze=i&&!R?i.totalProgress():C.progress,y&&y(C),N&&qs(C,N)}},ae,bt*A,wt-ae-bt*A),Bn&&qs(C,Bn,ve.tween)}}else C.isActive&&H!==ae&&oe.restart(!0)}).pause()),l&&(Sf[l]=C),f=C.trigger=Cn(f||d!==!0&&d),$e=f&&f._gsap&&f._gsap.stRevert,$e&&($e=$e(C)),d=d===!0?f:Cn(d),Hn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===si||(_=!_&&d.parentNode&&d.parentNode.style&&ai(d.parentNode).display==="flex"?!1:Gt),C.pin=d,fe=Me.core.getCache(d),fe.spacer?M=fe.pinState:(w&&(w=Cn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),fe.spacerIsNative=!!w,w&&(fe.spacerState=Wl(w))),fe.spacer=te=w||gt.createElement("div"),te.classList.add("pin-spacer"),l&&te.classList.add("pin-spacer-"+l),fe.pinState=M=Wl(d)),n.force3D!==!1&&Me.set(d,{force3D:!0}),C.spacer=te=fe.spacer,Ee=ai(d),Ye=Ee[_+x.os2],we=Me.getProperty(d),Ie=Me.quickSetter(d,x.a,Yt),fh(d,te,Ee),J=Wl(d)),Y){Xe=hs(Y)?fp(Y,dp):dp,B=Hl("scroller-start",l,V,x,Xe,0),ke=Hl("scroller-end",l,V,x,Xe,0,B),ne=B["offset"+x.op.d2];var ft=Cn(zr(V,"content")||V);Be=this.markerStart=Hl("start",l,ft,x,Xe,ne,0,S),Ce=this.markerEnd=Hl("end",l,ft,x,Xe,ne,0,S),S&&(_e=Me.quickSetter([Be,Ce],x.a,Yt)),!X&&!(Ui.length&&zr(V,"fixedMarkers")===!0)&&(zx(L?pt:V),Me.set([B,ke],{force3D:!0}),At=Me.quickSetter(B,x.a,Yt),Ue=Me.quickSetter(ke,x.a,Yt))}if(S){var Pe=S.vars.onUpdate,Ae=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){C.update(0,0,1),Pe&&Pe.apply(S,Ae||[])})}if(C.previous=function(){return it[it.indexOf(C)-1]},C.next=function(){return it[it.indexOf(C)+1]},C.revert=function(ae,Fe){if(!Fe)return C.kill(!0);var Oe=ae!==!1||!C.enabled,je=pn;Oe!==C.isReverted&&(Oe&&(q=Math.max(ye(),C.scroll.rec||0),ce=C.progress,se=i&&i.progress()),Be&&[Be,Ce,B,ke].forEach(function(It){return It.style.display=Oe?"none":"block"}),Oe&&(pn=C,C.update(Oe)),d&&(!b||!C.isActive)&&(Oe?Xx(d,te,M):fh(d,te,ai(d),ie)),Oe||C.update(Oe),pn=je,C.isReverted=Oe)},C.refresh=function(ae,Fe,Oe,je){if(!((pn||!C.enabled)&&!Fe)){if(d&&ae&&hi){nn(r,"scrollEnd",Vg);return}!wn&&Q&&Q(C),pn=C,ve.tween&&!Oe&&(ve.tween.kill(),ve.tween=0),de&&de.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(We){return We.vars.immediateRender&&We.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var It=he(),rt=be(),bt=S?S.duration():Ii(V,x),Wt=A<=.01||!A,Rt=0,wt=je||0,mt=hs(Oe)?Oe.end:n.end,Bn=n.endTrigger||f,T=hs(Oe)?Oe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),N=C.pinnedContainer=n.pinnedContainer&&Cn(n.pinnedContainer,C),$=f&&Math.max(0,it.indexOf(C))||0,W=$,z,le,Te,ze,Re,De,Ve,Ke,Pt,Xt,_t,xn,yt;for(Y&&hs(Oe)&&(xn=Me.getProperty(B,x.p),yt=Me.getProperty(ke,x.p));W-- >0;)De=it[W],De.end||De.refresh(0,1)||(pn=C),Ve=De.pin,Ve&&(Ve===f||Ve===d||Ve===N)&&!De.isReverted&&(Xt||(Xt=[]),Xt.unshift(De),De.revert(!0,!0)),De!==it[W]&&($--,W--);for(gn(T)&&(T=T(C)),T=lp(T,"start",C),He=gp(T,f,It,x,ye(),Be,B,C,rt,j,X,bt,S,C._startClamp&&"_startClamp")||(d?-.001:0),gn(mt)&&(mt=mt(C)),Hn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Hn(T)?T.split(" ")[0]:"")+mt:(Rt=Lc(mt.substr(2),It),mt=Hn(T)?T:(S?Me.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,He):He)+Rt,Bn=f)),mt=lp(mt,"end",C),ge=Math.max(He,gp(mt||(Bn?"100% 0":bt),Bn,It,x,ye()+Rt,Ce,ke,C,rt,j,X,bt,S,C._endClamp&&"_endClamp"))||-.001,Rt=0,W=$;W--;)De=it[W]||{},Ve=De.pin,Ve&&De.start-De._pinPush<=He&&!S&&De.end>0&&(z=De.end-(C._startClamp?Math.max(0,De.start):De.start),(Ve===f&&De.start-De._pinPush<He||Ve===N)&&isNaN(T)&&(Rt+=z*(1-De.progress)),Ve===d&&(wt+=z));if(He+=Rt,ge+=Rt,C._startClamp&&(C._startClamp+=Rt),C._endClamp&&!wn&&(C._endClamp=ge||-.001,ge=Math.min(ge,Ii(V,x))),A=ge-He||(He-=.01)&&.001,Wt&&(ce=Me.utils.clamp(0,1,Me.utils.normalize(He,ge,q))),C._pinPush=wt,Be&&Rt&&(z={},z[x.a]="+="+Rt,N&&(z[x.p]="-="+ye()),Me.set([Be,Ce],z)),d&&!(Mf&&C.end>=Ii(V,x)))z=ai(d),ze=x===$t,Te=ye(),re=parseFloat(we(x.a))+wt,!bt&&ge>1&&(_t=(L?gt.scrollingElement||Xn:V).style,_t={style:_t,value:_t["overflow"+x.a.toUpperCase()]},L&&ai(pt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(_t.style["overflow"+x.a.toUpperCase()]="scroll")),fh(d,te,z),J=Wl(d),le=Ji(d,!0),Ke=X&&Yr(V,ze?An:$t)(),_?(ie=[_+x.os2,A+wt+Yt],ie.t=te,W=_===Gt?Yc(d,x)+A+wt:0,W&&(ie.push(x.d,W+Yt),te.style.flexBasis!=="auto"&&(te.style.flexBasis=W+Yt)),Ca(ie),N&&it.forEach(function(We){We.pin===N&&We.vars.pinSpacing!==!1&&(We._subPinOffset=!0)}),X&&ye(q)):(W=Yc(d,x),W&&te.style.flexBasis!=="auto"&&(te.style.flexBasis=W+Yt)),X&&(Re={top:le.top+(ze?Te-He:Ke)+Yt,left:le.left+(ze?Ke:Te-He)+Yt,boxSizing:"border-box",position:"fixed"},Re[Us]=Re["max"+Ya]=Math.ceil(le.width)+Yt,Re[Ns]=Re["max"+pd]=Math.ceil(le.height)+Yt,Re[si]=Re[si+zo]=Re[si+Bo]=Re[si+Vo]=Re[si+ko]="0",Re[Gt]=z[Gt],Re[Gt+zo]=z[Gt+zo],Re[Gt+Bo]=z[Gt+Bo],Re[Gt+Vo]=z[Gt+Vo],Re[Gt+ko]=z[Gt+ko],K=Yx(M,Re,b),wn&&ye(0)),i?(Pt=i._initted,lh(1),i.render(i.duration(),!0,!0),ue=we(x.a)-re+A+wt,qe=Math.abs(A-ue)>1,X&&qe&&K.splice(K.length-2,2),i.render(0,!0,!0),Pt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),lh(0)):ue=A,_t&&(_t.value?_t.style["overflow"+x.a.toUpperCase()]=_t.value:_t.style.removeProperty("overflow-"+x.a));else if(f&&ye()&&!S)for(le=f.parentNode;le&&le!==pt;)le._pinOffset&&(He-=le._pinOffset,ge-=le._pinOffset),le=le.parentNode;Xt&&Xt.forEach(function(We){return We.revert(!1,!0)}),C.start=He,C.end=ge,Le=O=wn?q:ye(),!S&&!wn&&(Le<q&&ye(q),C.scroll.rec=0),C.revert(!1,!0),ee=mn(),oe&&(H=-1,oe.restart(!0)),pn=0,i&&R&&(i._initted||se)&&i.progress()!==se&&i.progress(se||0,!0).render(i.time(),!0,!0),(Wt||ce!==C.progress||S||g||i&&!i._initted)&&(i&&!R&&(i._initted||ce||i.vars.immediateRender!==!1)&&i.totalProgress(S&&He<-.001&&!ce?Me.utils.normalize(He,ge,0):ce,!0),C.progress=Wt||(Le-He)/A===ce?0:ce),d&&_&&(te._pinOffset=Math.round(C.progress*ue)),de&&de.invalidate(),isNaN(xn)||(xn-=Me.getProperty(B,x.p),yt-=Me.getProperty(ke,x.p),Xl(B,x,xn),Xl(Be,x,xn-(je||0)),Xl(ke,x,yt),Xl(Ce,x,yt-(je||0))),Wt&&!wn&&C.update(),u&&!wn&&!dt&&(dt=!0,u(C),dt=!1)}},C.getVelocity=function(){return(ye()-O)/(mn()-So)*1e3||0},C.endAnimation=function(){co(C.callbackAnimation),i&&(de?de.progress(1):i.paused()?R||co(i,C.direction<0,1):co(i,i.reversed()))},C.labelToScroll=function(ae){return i&&i.labels&&(He||C.refresh()||He)+i.labels[ae]/i.duration()*A||0},C.getTrailing=function(ae){var Fe=it.indexOf(C),Oe=C.direction>0?it.slice(0,Fe).reverse():it.slice(Fe+1);return(Hn(ae)?Oe.filter(function(je){return je.vars.preventOverlaps===ae}):Oe).filter(function(je){return C.direction>0?je.end<=He:je.start>=ge})},C.update=function(ae,Fe,Oe){if(!(S&&!Oe&&!ae)){var je=wn===!0?q:C.scroll(),It=ae?0:(je-He)/A,rt=It<0?0:It>1?1:It||0,bt=C.progress,Wt,Rt,wt,mt,Bn,T,N,$;if(Fe&&(O=Le,Le=S?ye():je,E&&(Ze=Se,Se=i&&!R?i.totalProgress():rt)),p&&d&&!pn&&!Bl&&hi&&(!rt&&He<je+(je-O)/(mn()-So)*p?rt=1e-4:rt===1&&ge>je+(je-O)/(mn()-So)*p&&(rt=.9999)),rt!==bt&&C.enabled){if(Wt=C.isActive=!!rt&&rt<1,Rt=!!bt&&bt<1,T=Wt!==Rt,Bn=T||!!rt!=!!bt,C.direction=rt>bt?1:-1,C.progress=rt,Bn&&!pn&&(wt=rt&&!bt?0:rt===1?1:bt===1?2:3,R&&(mt=!T&&G[wt+1]!=="none"&&G[wt+1]||G[wt],$=i&&(mt==="complete"||mt==="reset"||mt in i))),I&&(T||$)&&($||h||!i)&&(gn(I)?I(C):C.getTrailing(I).forEach(function(Te){return Te.endAnimation()})),R||(de&&!pn&&!Bl?(de._dp._time-de._start!==de._time&&de.render(de._dp._time-de._start),de.resetTo?de.resetTo("totalProgress",rt,i._tTime/i._tDur):(de.vars.totalProgress=rt,de.invalidate().restart())):i&&i.totalProgress(rt,!!(pn&&(ee||ae)))),d){if(ae&&_&&(te.style[_+x.os2]=Ye),!X)Ie(To(re+ue*rt));else if(Bn){if(N=!ae&&rt>bt&&ge+1>je&&je+1>=Ii(V,x),b)if(!ae&&(Wt||N)){var W=Ji(d,!0),z=je-He;vp(d,pt,W.top+(x===$t?z:0)+Yt,W.left+(x===$t?0:z)+Yt)}else vp(d,te);Ca(Wt||N?K:J),qe&&rt<1&&Wt||Ie(re+(rt===1&&!N?ue:0))}}E&&!ve.tween&&!pn&&!Bl&&oe.restart(!0),a&&(T||v&&rt&&(rt<1||!ch))&&nl(a.targets).forEach(function(Te){return Te.classList[Wt||v?"add":"remove"](a.className)}),o&&!R&&!ae&&o(C),Bn&&!pn?(R&&($&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),o&&o(C)),(T||!ch)&&(c&&T&&qs(C,c),k[wt]&&qs(C,k[wt]),v&&(rt===1?C.kill(!1,1):k[wt]=0),T||(wt=rt===1?1:3,k[wt]&&qs(C,k[wt]))),P&&!Wt&&Math.abs(C.getVelocity())>(bo(P)?P:2500)&&(co(C.callbackAnimation),de?de.progress(1):co(i,mt==="reverse"?1:!rt,1))):R&&o&&!pn&&o(C)}if(Ue){var le=S?je/S.duration()*(S._caScrollDist||0):je;At(le+(B._isFlipped?1:0)),Ue(le)}_e&&_e(-je/S.duration()*(S._caScrollDist||0))}},C.enable=function(ae,Fe){C.enabled||(C.enabled=!0,nn(V,"resize",wo),L||nn(V,"scroll",$s),Q&&nn(r,"refreshInit",Q),ae!==!1&&(C.progress=ce=0,Le=O=H=ye()),Fe!==!1&&C.refresh())},C.getTween=function(ae){return ae&&ve?ve.tween:de},C.setPositions=function(ae,Fe,Oe,je){if(S){var It=S.scrollTrigger,rt=S.duration(),bt=It.end-It.start;ae=It.start+bt*ae/rt,Fe=It.start+bt*Fe/rt}C.refresh(!1,!1,{start:cp(ae,Oe&&!!C._startClamp),end:cp(Fe,Oe&&!!C._endClamp)},je),C.update()},C.adjustPinSpacing=function(ae){if(ie&&ae){var Fe=ie.indexOf(x.d)+1;ie[Fe]=parseFloat(ie[Fe])+ae+Yt,ie[1]=parseFloat(ie[1])+ae+Yt,Ca(ie)}},C.disable=function(ae,Fe){if(ae!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Fe||de&&de.pause(),q=0,fe&&(fe.uncache=1),Q&&en(r,"refreshInit",Q),oe&&(oe.pause(),ve.tween&&ve.tween.kill()&&(ve.tween=0)),!L)){for(var Oe=it.length;Oe--;)if(it[Oe].scroller===V&&it[Oe]!==C)return;en(V,"resize",wo),L||en(V,"scroll",$s)}},C.kill=function(ae,Fe){C.disable(ae,Fe),de&&!Fe&&de.kill(),l&&delete Sf[l];var Oe=it.indexOf(C);Oe>=0&&it.splice(Oe,1),Oe===bn&&Ic>0&&bn--,Oe=0,it.forEach(function(je){return je.scroller===C.scroller&&(Oe=1)}),Oe||wn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,ae&&i.revert({kill:!1}),Fe||i.kill()),Be&&[Be,Ce,B,ke].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),Go===C&&(Go=0),d&&(fe&&(fe.uncache=1),Oe=0,it.forEach(function(je){return je.pin===d&&Oe++}),Oe||(fe.spacer=0)),n.onKill&&n.onKill(C)},it.push(C),C.enable(!1,!1),$e&&$e(C),i&&i.add&&!A){var Ne=C.update;C.update=function(){C.update=Ne,at.cache++,He||ge||C.refresh()},Me.delayedCall(.01,C.update),A=.01,He=ge=0}else C.refresh();d&&Wx()},r.register=function(n){return pa||(Me=n||Ng(),Ug()&&window.document&&r.enable(),pa=Eo),pa},r.defaults=function(n){if(n)for(var i in n)Gl[i]=n[i];return Gl},r.disable=function(n,i){Eo=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),en(st,"wheel",$s),en(gt,"scroll",$s),clearInterval(Fl),en(gt,"touchcancel",Ti),en(pt,"touchstart",Ti),zl(en,gt,"pointerdown,touchstart,mousedown",up),zl(en,gt,"pointerup,touchend,mouseup",hp),qc.kill(),kl(en);for(var s=0;s<at.length;s+=3)Vl(en,at[s],at[s+1]),Vl(en,at[s],at[s+2])},r.enable=function(){if(st=window,gt=document,Xn=gt.documentElement,pt=gt.body,Me){if(nl=Me.utils.toArray,Oo=Me.utils.clamp,yf=Me.core.context||Ti,lh=Me.core.suppressOverwrites||Ti,ud=st.history.scrollRestoration||"auto",Ef=st.pageYOffset||0,Me.core.globals("ScrollTrigger",r),pt){Eo=1,Ra=document.createElement("div"),Ra.style.height="100vh",Ra.style.position="absolute",Xg(),Fx(),kt.register(Me),r.isTouch=kt.isTouch,xr=kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xf=kt.isTouch===1,nn(st,"wheel",$s),cd=[st,gt,Xn,pt],Me.matchMedia?(r.matchMedia=function(u){var h=Me.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Me.addEventListener("matchMediaInit",function(){Hg(),_d()}),Me.addEventListener("matchMediaRevert",function(){return Gg()}),Me.addEventListener("matchMedia",function(){xs(0,1),Vs("matchMedia")}),Me.matchMedia().add("(orientation: portrait)",function(){return hh(),hh})):console.warn("Requires GSAP 3.11.0 or later"),hh(),nn(gt,"scroll",$s);var n=pt.hasAttribute("style"),i=pt.style,s=i.borderTopStyle,o=Me.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ji(pt),$t.m=Math.round(a.top+$t.sc())||0,An.m=Math.round(a.left+An.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(pt.setAttribute("style",""),pt.removeAttribute("style")),Fl=setInterval(pp,250),Me.delayedCall(.5,function(){return Bl=0}),nn(gt,"touchcancel",Ti),nn(pt,"touchstart",Ti),zl(nn,gt,"pointerdown,touchstart,mousedown",up),zl(nn,gt,"pointerup,touchend,mouseup",hp),vf=Me.utils.checkPrefix("transform"),Uc.push(vf),pa=mn(),qc=Me.delayedCall(.2,xs).pause(),ma=[gt,"visibilitychange",function(){var u=st.innerWidth,h=st.innerHeight;gt.hidden?(ap=u,op=h):(ap!==u||op!==h)&&wo()},gt,"DOMContentLoaded",xs,st,"load",xs,st,"resize",wo],kl(nn),it.forEach(function(u){return u.enable(0,1)}),l=0;l<at.length;l+=3)Vl(en,at[l],at[l+1]),Vl(en,at[l],at[l+2])}else if(gt){var c=function u(){r.enable(),gt.removeEventListener("DOMContentLoaded",u)};gt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(ch=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Fl)||(Fl=i)&&setInterval(pp,i),"ignoreMobileResize"in n&&(xf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(kl(en)||kl(nn,n.autoRefreshEvents||"none"),Lg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Cn(n),o=at.indexOf(s),a=ks(s);~o&&at.splice(o,a?6:2),i&&(a?Ui.unshift(st,i,pt,i,Xn,i):Ui.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Hn(n)?Cn(n):n).getBoundingClientRect(),a=o[s?Us:Ns]*i||0;return s?o.right-a>0&&o.left+a<st.innerWidth:o.bottom-a>0&&o.top+a<st.innerHeight},r.positionInViewport=function(n,i,s){Hn(n)&&(n=Cn(n));var o=n.getBoundingClientRect(),a=o[s?Us:Ns],l=i==null?a/2:i in $c?$c[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/st.innerWidth:(o.top+l)/st.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=zs.killAll||[];zs={},i.forEach(function(s){return s()})}},r}();lt.version="3.15.0";lt.saveStyles=function(r){return r?nl(r).forEach(function(e){if(e&&e.style){var t=Gn.indexOf(e);t>=0&&Gn.splice(t,5),Gn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),yf())}}):Gn};lt.revert=function(r,e){return _d(!r,e)};lt.create=function(r,e){return new lt(r,e)};lt.refresh=function(r){return r?wo(!0):(pa||lt.register())&&xs(!0)};lt.update=function(r){return++at.cache&&sr(r===!0?2:0)};lt.clearScrollMemory=Wg;lt.maxScroll=function(r,e){return Ii(r,e?An:$t)};lt.getScrollFunc=function(r,e){return Yr(Cn(r),e?An:$t)};lt.getById=function(r){return Sf[r]};lt.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})};lt.isScrolling=function(){return!!hi};lt.snapDirectional=md;lt.addEventListener=function(r,e){var t=zs[r]||(zs[r]=[]);~t.indexOf(e)||t.push(e)};lt.removeEventListener=function(r,e){var t=zs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};lt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Me.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&gn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return gn(s)&&(s=s(),nn(lt,"refresh",function(){return s=e.batchMax()})),nl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(lt.create(c))}),t};var yp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},dh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(kt.isTouch?" pinch-zoom":""):"none",e===Xn&&r(pt,t)},ql={auto:1,scroll:1},jx=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Me.core.getCache(s),a=mn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ql[(l=ai(s)).overflowY]||ql[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ks(s)&&(ql[(l=ai(s)).overflowY]||ql[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Yg=function(e,t,n,i){return kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&jx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&nn(gt,kt.eventTypes[0],Sp,!1,!0)},onDisable:function(){return en(gt,kt.eventTypes[0],Sp,!0)}})},Kx=/(input|label|select|textarea)/i,Mp,Sp=function(e){var t=Kx.test(e.target.tagName);(t||Mp)&&(e._gsapAllow=!0,Mp=t)},Zx=function(e){hs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Cn(e.target)||Xn,u=Me.core.globals().ScrollSmoother,h=u&&u.get(),f=xr&&(e.content&&Cn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Yr(c,$t),_=Yr(c,An),g=1,p=(kt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,m=0,y=gn(i)?function(){return i(a)}:function(){return i||2.8},v,E,b=Yg(c,e.type,!0,s),w=function(){return E=!1},S=Ti,P=Ti,I=function(){l=Ii(c,$t),P=Oo(xr?1:0,l),n&&(S=Oo(0,Ii(c,An))),v=Os},x=function(){f._gsap.y=To(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},R=function(){if(E){requestAnimationFrame(w);var Y=To(a.deltaY/2),j=P(d.v-Y);if(f&&j!==d.v+d.offset){d.offset=j-d.v;var C=To((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",d.cacheID=at.cache,sr()}return!0}d.offset&&x(),E=!0},V,Z,L,X,k=function(){I(),V.isActive()&&V.vars.scrollY>l&&(d()>l?V.progress(1)&&d(l):V.resetTo("scrollY",l))};return f&&Me.set(f,{y:"+=0"}),e.ignoreCheck=function(G){return xr&&G.type==="touchmove"&&R()||g>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){E=!1;var G=g;g=To((st.visualViewport&&st.visualViewport.scale||1)/p),V.pause(),G!==g&&dh(c,g>1.01?!0:n?!1:"x"),Z=_(),L=d(),I(),v=Os},e.onRelease=e.onGestureStart=function(G,Y){if(d.offset&&x(),!Y)X.restart(!0);else{at.cache++;var j=y(),C,Q;n&&(C=_(),Q=C+j*.05*-G.velocityX/.227,j*=yp(_,C,Q,Ii(c,An)),V.vars.scrollX=S(Q)),C=d(),Q=C+j*.05*-G.velocityY/.227,j*=yp(d,C,Q,Ii(c,$t)),V.vars.scrollY=P(Q),V.invalidate().duration(j).play(.01),(xr&&V.vars.scrollY>=l||C>=l-1)&&Me.to({},{onUpdate:k,duration:j})}o&&o(G)},e.onWheel=function(){V._ts&&V.pause(),mn()-m>1e3&&(v=0,m=mn())},e.onChange=function(G,Y,j,C,Q){if(Os!==v&&I(),Y&&n&&_(S(C[2]===Y?Z+(G.startX-G.x):_()+Y-C[1])),j){d.offset&&x();var he=Q[2]===j,be=he?L+G.startY-G.y:d()+j-Q[1],H=P(be);he&&be!==H&&(L+=H-be),d(H)}(j||Y)&&sr()},e.onEnable=function(){dh(c,n?!1:"x"),lt.addEventListener("refresh",k),nn(st,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),b.enable()},e.onDisable=function(){dh(c,!0),en(st,"resize",k),lt.removeEventListener("refresh",k),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new kt(e),a.iOS=xr,xr&&!d()&&d(1),xr&&Me.ticker.add(Ti),X=a._dc,V=Me.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:qg(d,d(),function(){return V.pause()})},onUpdate:sr,onComplete:X.vars.onComplete}),a};lt.sort=function(r){if(gn(r))return it.sort(r);var e=st.pageYOffset||0;return lt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),it.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};lt.observe=function(r){return new kt(r)};lt.normalizeScroll=function(r){if(typeof r>"u")return Tn;if(r===!0&&Tn)return Tn.enable();if(r===!1){Tn&&Tn.kill(),Tn=r;return}var e=r instanceof kt?r:Zx(r);return Tn&&Tn.target===e.target&&Tn.kill(),ks(e.target)&&(Tn=e),e};lt.core={_getVelocityProp:gf,_inputObserver:Yg,_scrollers:at,_proxies:Ui,bridge:{ss:function(){hi||Vs("scrollStart"),hi=mn()},ref:function(){return pn}}};Ng()&&Me.registerPlugin(lt);const Jx="modulepreload",Qx=function(r){return"/"+r},Ep={},Qi=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.all(t.map(l=>{if(l=Qx(l),l in Ep)return;Ep[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!n)for(let d=s.length-1;d>=0;d--){const _=s[d];if(_.href===l&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Jx,c||(f.as="script",f.crossOrigin=""),f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((d,_)=>{f.addEventListener("load",d),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},ey="/",ty="/page1/:param1?",ny="/page2",iy={index:ey,page1:ty,page2:ny},ry="/",sy={index:ry};let an=null;const ay="on";var Vn,hu;class $g{constructor(){pe(this,Vn,new Map);pe(this,hu,{fps:1/0})}on(e,t,n={},i=this){D(this,Vn).has(e)||D(this,Vn).set(e,new Set),D(this,Vn).get(e).add({fn:t,options:{...D(this,hu),...n},instance:i,lastUpdateEt:0})}off(e,t,n=this){if(D(this,Vn).has(e))for(an of D(this,Vn).get(e))an.fn===t&&an.instance===n&&D(this,Vn).get(e).delete(an)}emit(e,...t){if(D(this,Vn).has(e))for(an of D(this,Vn).get(e))an.fn.call(an.instance,...t)}emitThrottle(e,t,...n){var i;if(D(this,Vn).has(e))for(an of D(this,Vn).get(e))(i=an.options)!=null&&i.fps&&an.options.fps!==1/0?t.et-an.lastUpdateEt>=1/an.options.fps&&(an.fn.call(an.instance,t,...n),an.lastUpdateEt=t.et):an.fn.call(an.instance,t,...n)}}Vn=new WeakMap,hu=new WeakMap;class oy extends $g{constructor(e={}){super();const t=Object.fromEntries(Object.entries(e).map(([n,i])=>[i,`on${n.toLowerCase().split("_").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join("")}`]));this.eventsMapValues=Object.values(t),this.eventsMapKey=Object.fromEntries(Object.entries(t).map(n=>[n[1],parseInt(n[0])]))}register(e,t={}){Tp(e).forEach(n=>{this.eventsMapValues.includes(n)&&this.on(this.eventsMapKey[n],e[n],t,e)})}unregister(e){Tp(e).forEach(t=>{this.eventsMapValues.includes(t)&&this.off(this.eventsMapKey[t],e[t],e)})}}const ly=(r,e)=>!("get"in Object.getOwnPropertyDescriptor(r,e))&&typeof r[e]=="function",Tp=(r,e=!1)=>{const t=Object.getOwnPropertyNames(r);let n=Object.getPrototypeOf(r);const i=Object.getPrototypeOf({});for(;n&&(e||n!==i);){for(const s of Object.getOwnPropertyNames(n))t.indexOf(s)===-1&&ly(n,s)&&t.push(s);n=Object.getPrototypeOf(n)}return t.filter(s=>s.startsWith(ay))};var E_,T_,fu,Na,ys,Sr,wi,Oa,$i,Ms,Ss,Ai,cl,ji,Fa,ul,du,jg;const pu=class pu{constructor({name:e=void 0,base:t="",mode:n="history"}={}){pe(this,du);pe(this,fu,((T_=(E_=window.crypto).randomUUID)==null?void 0:T_.call(E_))||Math.random());pe(this,Na,"");pe(this,ys,!1);pe(this,Sr,void 0);pe(this,wi,[]);pe(this,Oa,new Map);pe(this,$i,[]);pe(this,Ms,[]);pe(this,Ss,new Map);pe(this,Ai,void 0);pe(this,cl,void 0);pe(this,ji,void 0);pe(this,Fa,void 0);pe(this,ul,({path:e})=>{});this.state=new $g,Je(this,Sr,e),this.base=t,this.mode=n}get id(){return D(this,fu)}get routes(){return D(this,wi)}get routesIndex(){return D(this,Oa)}get middlewares(){return D(this,$i)}get routers(){return D(this,Ms)}get routersIndex(){return D(this,Ss)}get path(){return D(this,ji).path}get name(){var e;return(e=D(this,Ai))!=null&&e.name?`${D(this,Ai).name}.${D(this,Sr)}`:D(this,Sr)}set name(e){D(this,Sr)!==e&&Je(this,Sr,e)}get mode(){var e;return(e=this.parent)!=null&&e.mode?this.parent.mode:D(this,cl)}set mode(e){this.mode!==e&&(this.parent?this.parent.mode=e:(Je(this,cl,e),Rn(this,du,jg).call(this,e)))}get base(){return D(this,Na)}set base(e){D(this,Na)!==e&&(Je(this,Na,e),D(this,$i).forEach(t=>t.update()),D(this,wi).forEach(t=>t.update()))}get parent(){return D(this,Ai)}set parent(e){D(this,Ai)!==e&&Je(this,Ai,e)}get matched(){return D(this,Fa)}set matched(e){D(this,Fa)!==e&&(Je(this,Fa,e),D(this,Ai)&&(D(this,Ai).matched=e),this.state.emit("matched",e))}get enabled(){return D(this,ys)}set enabled(e){D(this,ys)!==e&&(Je(this,ys,e),this.history.enabled=e,this.state.emit("enabled",e))}get history(){return this.parent?this.parent.history:D(this,ji)}add(e,t,n=void 0){const i=new bp({router:this,name:n,pattern:e,callback:t});return D(this,wi).push(i),Je(this,Oa,new Map(D(this,wi).map(s=>[s.name,s]))),i}use(e,t){if(t instanceof pu)return this.useRouter(e,t);const n=new bp({router:this,pattern:e,callback:t});return D(this,$i).push(n),n}useRouter(e,t,n){return t.parent=this,t.base=e,t.name=n,D(this,Ms).push(t),Je(this,Ss,new Map(D(this,Ms).map(i=>[i.name,i]))),t}remove(...e){e.forEach(t=>{t instanceof pu&&(t.parent=void 0,t.base=""),D(this,Oa).delete(t.name),D(this,Ss).delete(t.name);let n=D(this,wi).indexOf(t);if(n>-1){D(this,wi).splice(n,1);return}if(n=D(this,$i).indexOf(t),n>-1){D(this,$i).splice(n,1);return}})}get(e){if(this.routesIndex.has(e))return this.routesIndex.get(e);const t=e.split("."),n=t.shift();return this.routersIndex.has(n)?this.routersIndex.get(n).get(t.join(".")):null}getRouter(e){return D(this,Ss).get(e)}catchAll(e){Je(this,ul,e)}resolve(e){const{middlewares:t,routes:n}=D(this,Ms).reduce((o,a)=>{const{middlewares:l,routes:c}=a.resolve(e);return o.middlewares=[...o.middlewares,...l],o.routes=[...o.routes,...c],o},{middlewares:[],routes:[]}),i=D(this,$i).filter(o=>o.matches(e)),s=D(this,wi).filter(o=>o.matches(e));return{middlewares:[...i,...t],routes:[...s,...n]}}async run(e){const{middlewares:t,routes:n}=this.resolve(e),i=async()=>{const s=t.shift();if(s)return await s.callback({route:s,params:s.parse(e),path:e,next:i}),s};for(;t.length;)await i();if(n.length){for(;n.length;)return await n.shift().run(e),!0;return!0}else D(this,ul).call(this,{router:this,path:e});return!1}go(e,t=null){const n=this.get(e);if(!n){if(!t)return this.history.navigate(e);throw new wf(`Route not found ${e}`)}return this.history.navigate(n.href(t))}href(e,t){const n=this.get(e);if(!n)throw new wf(`Route not found ${e}`);return n.href(t)}};fu=new WeakMap,Na=new WeakMap,ys=new WeakMap,Sr=new WeakMap,wi=new WeakMap,Oa=new WeakMap,$i=new WeakMap,Ms=new WeakMap,Ss=new WeakMap,Ai=new WeakMap,cl=new WeakMap,ji=new WeakMap,Fa=new WeakMap,ul=new WeakMap,du=new WeakSet,jg=function(e){switch(D(this,ji)&&(D(this,ji).enabled=!1),e){case"history":default:Je(this,ji,new uy(this));break}D(this,ji).enabled=D(this,ys)};let jc=pu;var hl,fl,dl;class cy{constructor({route:e,path:t,params:n={}}={}){pe(this,hl,void 0);pe(this,fl,void 0);pe(this,dl,void 0);Je(this,hl,e),Je(this,fl,t),Je(this,dl,n)}get route(){return D(this,hl)}get path(){return D(this,fl)}get params(){return D(this,dl)}}hl=new WeakMap,fl=new WeakMap,dl=new WeakMap;var Ki,Er,Es,Ba,Ts;class bp{constructor({router:e,pattern:t,callback:n,name:i=void 0}={}){pe(this,Ki,void 0);pe(this,Er,void 0);pe(this,Es,void 0);pe(this,Ba,void 0);pe(this,Ts,void 0);Je(this,Ki,e),Je(this,Er,i),this.callback=n,this.pattern=t}get name(){return D(this,Er)}set name(e){D(this,Er)!==e&&Je(this,Er,e)}get fullName(){var e;return(e=D(this,Ki))!=null&&e.name?`${D(this,Ki).name}.${D(this,Er)}`:this.name}get pattern(){return D(this,Es)}set pattern(e){D(this,Es)!==e&&(Je(this,Es,e),this.update())}set(e){this.callback=e}async run(e){D(this,Ki).matched=new cy({route:this,params:this.parse(e),path:e}),this.callback&&await this.callback(D(this,Ki).matched)}update(){Je(this,Ts,[D(this,Ki).base.replace(/\/$/,""),D(this,Es).replace(/^\//,"")].join("/")),Je(this,Ba,bf.getMatcher(D(this,Ts)))}matches(e){return D(this,Ba).test(e)}parse(e){var t;return((t=D(this,Ba).exec(e))==null?void 0:t.groups)||{}}href(e={}){const t=this.parse(D(this,Ts));let n=D(this,Ts);return Object.entries(t).forEach(([i,s])=>{if(e&&!(i in e)&&!s.endsWith("?"))throw new wf(`Missing parameter ${i} !`);n=n.replace(s,e&&e[i]||"")}),n=n.replace(/\/$/,""),n}}Ki=new WeakMap,Er=new WeakMap,Es=new WeakMap,Ba=new WeakMap,Ts=new WeakMap;const Yo=class Yo{static getMatcher(e){const t=new RegExp(`${[...Yo.replacements.keys()].map(i=>i.source).join("|")}`,"g"),n=[...Yo.replacements];return new RegExp(`^${e.replace(t,(i,...s)=>{const o=n.find(([a])=>a.test(i));return s.slice(0,-2).reduce((a,l,c)=>a.replace(`$${c+1}`,l),o[1])})}/?$`)}};Bi(Yo,"replacements",new Map([[/[/]$/,""],[/([/]?):([^/#?*]+)([?]?)/,"(?:$1(?<$2>[^/#]+))$3"],[/\*\*/,"[^#?]*"],[/\*/,"[^/#?]*"]]));let bf=Yo;var vi,ri,ka,mu,Kg,_u,Zg,Tr;class uy{constructor(e){pe(this,mu);pe(this,_u);pe(this,vi,void 0);pe(this,ri,void 0);pe(this,ka,!1);pe(this,Tr,()=>{D(this,vi).parent||(Je(this,ri,location.pathname),D(this,vi).run(location.pathname),D(this,vi).state.emit("path",D(this,ri)))});Je(this,vi,e),Je(this,ri,location.pathname)}get origin(){return document.location.origin}get path(){return D(this,ri)}get enabled(){return D(this,ka)}set enabled(e){D(this,ka)!==e&&(Je(this,ka,e),e?Rn(this,mu,Kg).call(this):Rn(this,_u,Zg).call(this))}navigate(e){D(this,vi).parent||(e=e===""?"/":e,D(this,ri)!==e&&(Je(this,ri,e),window.history.pushState({},"",this.origin+D(this,ri)),D(this,vi).run(D(this,ri)),D(this,vi).state.emit("path",D(this,ri))))}}vi=new WeakMap,ri=new WeakMap,ka=new WeakMap,mu=new WeakSet,Kg=function(){D(this,vi).parent||(window.addEventListener("popstate",D(this,Tr)),document.readyState==="complete"?D(this,Tr).call(this):window.addEventListener("DOMContentLoaded",D(this,Tr)))},_u=new WeakSet,Zg=function(){window.removeEventListener("popstate",D(this,Tr)),window.removeEventListener("DOMContentLoaded",D(this,Tr))},Tr=new WeakMap;class wf extends Error{}let qt=0;const ot={ATTACH:qt++,DETACH:qt++,RESIZE:qt++,TICK:qt++,RENDER:qt++,BEFORE_TICK:qt++,AFTER_RENDER:qt++,POINTER_MOVE:qt++,POINTER_UP:qt++,POINTER_DOWN:qt++,POINTER_LOCK:qt++,KEY_DOWN:qt++,KEY_UP:qt++,LOCALE:qt++,PROJECT_LOADING:qt++,PROJECT_LOADED:qt++,PROJECT_UNLOADED:qt++,SOUND_ENABLED:qt++,FIRST_INTERACTION:qt++};var pl,ml,br,Zi,wr,_l,gu,vu,gl;class hy{constructor(){pe(this,pl,Date.now());pe(this,ml,0);pe(this,br,16);pe(this,Zi,{et:0,dt:0});pe(this,wr,!1);pe(this,_l,void 0);pe(this,gu,()=>{this.play()});pe(this,vu,()=>{this.pause()});Bi(this,"play",()=>{D(this,wr)||(Je(this,wr,!0),D(this,gl).call(this))});Bi(this,"pause",()=>{D(this,wr)&&(cancelAnimationFrame(D(this,_l)),Je(this,wr,!1))});pe(this,gl,()=>{if(!D(this,wr))return;Je(this,_l,window.requestAnimationFrame(D(this,gl)));const e=Date.now();Je(this,br,e-D(this,pl)),Je(this,ml,D(this,ml)+D(this,br)),Je(this,pl,e),D(this,br)>60&&Je(this,br,60),D(this,Zi).et=D(this,ml)*.001,D(this,Zi).dt=D(this,br)*.001,xe.state.emitThrottle(ot.BEFORE_TICK,D(this,Zi)),xe.state.emitThrottle(ot.TICK,D(this,Zi)),xe.state.emitThrottle(ot.RENDER,D(this,Zi)),xe.state.emitThrottle(ot.AFTER_RENDER,D(this,Zi))});xe.state.on(ot.ATTACH,D(this,gu)),xe.state.on(ot.DETACH,D(this,vu))}}pl=new WeakMap,ml=new WeakMap,br=new WeakMap,Zi=new WeakMap,wr=new WeakMap,_l=new WeakMap,gu=new WeakMap,vu=new WeakMap,gl=new WeakMap;function fy(){const r=new jc;return{ticker:new hy,router:r}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gd="162",dy=0,wp=1,py=2,Jg=1,my=2,Xi=3,$r=0,On=1,er=2,Vr=0,Pa=1,Ap=2,Rp=3,Cp=4,_y=5,ps=100,gy=101,vy=102,Pp=103,Lp=104,xy=200,yy=201,My=202,Sy=203,Af=204,Rf=205,Ey=206,Ty=207,by=208,wy=209,Ay=210,Ry=211,Cy=212,Py=213,Ly=214,Dy=0,Iy=1,Uy=2,Kc=3,Ny=4,Oy=5,Fy=6,By=7,Qg=0,ky=1,zy=2,Gr=0,Vy=1,Gy=2,Hy=3,Wy=4,Xy=5,qy=6,Yy=7,Dp="attached",$y="detached",e0=300,$a=301,ja=302,Cf=303,Pf=304,Vu=306,La=1e3,jn=1001,Lf=1002,Kt=1003,Ip=1004,uo=1005,jt=1006,ph=1007,Ur=1008,Hr=1009,jy=1010,Ky=1011,vd=1012,t0=1013,Nr=1014,yi=1015,rl=1016,n0=1017,i0=1018,Fs=1020,Zy=1021,oi=1023,Jy=1024,Qy=1025,Bs=1026,Ka=1027,r0=1028,s0=1029,eM=1030,a0=1031,o0=1033,mh=33776,_h=33777,gh=33778,vh=33779,Up=35840,Np=35841,Op=35842,Fp=35843,l0=36196,Bp=37492,kp=37496,zp=37808,Vp=37809,Gp=37810,Hp=37811,Wp=37812,Xp=37813,qp=37814,Yp=37815,$p=37816,jp=37817,Kp=37818,Zp=37819,Jp=37820,Qp=37821,xh=36492,em=36494,tm=36495,tM=36283,nm=36284,im=36285,rm=36286,Zc=2300,Jc=2301,yh=2302,sm=2400,am=2401,om=2402,nM=2500,pA=0,mA=1,_A=2,iM=3200,rM=3201,xd=0,sM=1,yr="",bi="srgb",Kr="srgb-linear",yd="display-p3",Gu="display-p3-linear",Qc="linear",Ct="srgb",eu="rec709",tu="p3",js=7680,lm=519,aM=512,oM=513,lM=514,c0=515,cM=516,uM=517,hM=518,fM=519,Df=35044,cm="300 es",If=1035,rr=2e3,nu=2001;class Qa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let um=1234567;const Ho=Math.PI/180,Za=180/Math.PI;function Si(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function on(r,e,t){return Math.max(e,Math.min(t,r))}function Md(r,e){return(r%e+e)%e}function dM(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function pM(r,e,t){return r!==e?(t-r)/(e-r):0}function Wo(r,e,t){return(1-t)*r+t*e}function mM(r,e,t,n){return Wo(r,e,1-Math.exp(-t*n))}function _M(r,e=1){return e-Math.abs(Md(r,e*2)-e)}function gM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function vM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function xM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function yM(r,e){return r+Math.random()*(e-r)}function MM(r){return r*(.5-Math.random())}function SM(r){r!==void 0&&(um=r);let e=um+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function EM(r){return r*Ho}function TM(r){return r*Za}function Uf(r){return(r&r-1)===0&&r!==0}function bM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function iu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wM(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const gA={DEG2RAD:Ho,RAD2DEG:Za,generateUUID:Si,clamp:on,euclideanModulo:Md,mapLinear:dM,inverseLerp:pM,lerp:Wo,damp:mM,pingpong:_M,smoothstep:gM,smootherstep:vM,randInt:xM,randFloat:yM,randFloatSpread:MM,seededRandom:SM,degToRad:EM,radToDeg:TM,isPowerOfTwo:Uf,ceilPowerOfTwo:bM,floorPowerOfTwo:iu,setQuaternionFromProperEuler:wM,normalize:vt,denormalize:Mi};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,i,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],y=i[1],v=i[4],E=i[7],b=i[2],w=i[5],S=i[8];return s[0]=o*g+a*y+l*b,s[3]=o*p+a*v+l*w,s[6]=o*m+a*E+l*S,s[1]=c*g+u*y+h*b,s[4]=c*p+u*v+h*w,s[7]=c*m+u*E+h*S,s[2]=f*g+d*y+_*b,s[5]=f*p+d*v+_*w,s[8]=f*m+d*E+_*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Mh.makeScale(e,t)),this}rotate(e){return this.premultiply(Mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mh=new Qe;function u0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function sl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function AM(){const r=sl("canvas");return r.style.display="block",r}const hm={};function h0(r){r in hm||(hm[r]=!0,console.warn(r))}const fm=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dm=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yl={[Kr]:{transfer:Qc,primaries:eu,toReference:r=>r,fromReference:r=>r},[bi]:{transfer:Ct,primaries:eu,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Gu]:{transfer:Qc,primaries:tu,toReference:r=>r.applyMatrix3(dm),fromReference:r=>r.applyMatrix3(fm)},[yd]:{transfer:Ct,primaries:tu,toReference:r=>r.convertSRGBToLinear().applyMatrix3(dm),fromReference:r=>r.applyMatrix3(fm).convertLinearToSRGB()}},RM=new Set([Kr,Gu]),xt={enabled:!0,_workingColorSpace:Kr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!RM.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Yl[e].toReference,i=Yl[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Yl[r].primaries},getTransfer:function(r){return r===yr?Qc:Yl[r].transfer}};function Da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Sh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ks;class f0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ks===void 0&&(Ks=sl("canvas")),Ks.width=e.width,Ks.height=e.height;const n=Ks.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Da(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Da(t[n]/255)*255):t[n]=Da(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CM=0;class d0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Eh(i[o].image)):s.push(Eh(i[o]))}else s=Eh(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Eh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?f0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PM=0;class un extends Qa{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=jn,i=jn,s=jt,o=Ur,a=oi,l=Hr,c=un.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Si(),this.name="",this.source=new d0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==e0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case La:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case La:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=e0;un.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,i=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(d+1)/2,b=(m+1)/2,w=(u+f)/4,S=(h+g)/4,P=(_+p)/4;return v>E&&v>b?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=S/n):E>b?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=w/i,s=P/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=S/s,i=P/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LM extends Qa{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new un(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new d0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gs extends LM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class p0 extends un{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class DM extends un{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-a;const m=l*f+c*d+u*_+h*g,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const b=Math.sqrt(v),w=Math.atan2(b,m*y);p=Math.sin(p*w)/b,a=Math.sin(a*w)/b}const E=a*y;if(l=l*p+f*E,c=c*p+d*E,u=u*p+_*E,h=h*p+g*E,p===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Th.copy(this).projectOnVector(e),this.sub(Th)}reflect(e){return this.sub(Th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Th=new F,pm=new eo;class Zr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(s,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$l.copy(n.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),jl.subVectors(this.max,ho),Zs.subVectors(e.a,ho),Js.subVectors(e.b,ho),Qs.subVectors(e.c,ho),dr.subVectors(Js,Zs),pr.subVectors(Qs,Js),is.subVectors(Zs,Qs);let t=[0,-dr.z,dr.y,0,-pr.z,pr.y,0,-is.z,is.y,dr.z,0,-dr.x,pr.z,0,-pr.x,is.z,0,-is.x,-dr.y,dr.x,0,-pr.y,pr.x,0,-is.y,is.x,0];return!bh(t,Zs,Js,Qs,jl)||(t=[1,0,0,0,1,0,0,0,1],!bh(t,Zs,Js,Qs,jl))?!1:(Kl.crossVectors(dr,pr),t=[Kl.x,Kl.y,Kl.z],bh(t,Zs,Js,Qs,jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new F,new F,new F,new F,new F,new F,new F,new F],pi=new F,$l=new Zr,Zs=new F,Js=new F,Qs=new F,dr=new F,pr=new F,is=new F,ho=new F,jl=new F,Kl=new F,rs=new F;function bh(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){rs.fromArray(r,s);const a=i.x*Math.abs(rs.x)+i.y*Math.abs(rs.y)+i.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),u=n.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const IM=new Zr,fo=new F,wh=new F;class ur{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):IM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const t=fo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(wh)),this.expandByPoint(fo.copy(e.center).sub(wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new F,Ah=new F,Zl=new F,mr=new F,Rh=new F,Jl=new F,Ch=new F;class Al{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ah.copy(e).add(t).multiplyScalar(.5),Zl.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(Ah);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Zl),a=mr.dot(this.direction),l=-mr.dot(Zl),c=mr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ah).addScaledVector(Zl,f),d}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const n=zi.dot(this.direction),i=zi.dot(zi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,i,s){Rh.subVectors(t,e),Jl.subVectors(n,e),Ch.crossVectors(Rh,Jl);let o=this.direction.dot(Ch),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mr.subVectors(this.origin,e);const l=a*this.direction.dot(Jl.crossVectors(mr,Jl));if(l<0)return null;const c=a*this.direction.dot(Rh.cross(mr));if(c<0||l+c>o)return null;const u=-a*mr.dot(Ch);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ea.setFromMatrixColumn(e,0).length(),s=1/ea.setFromMatrixColumn(e,1).length(),o=1/ea.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UM,e,NM)}lookAt(e,t,n){const i=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),_r.crossVectors(n,kn),_r.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),_r.crossVectors(n,kn)),_r.normalize(),Ql.crossVectors(kn,_r),i[0]=_r.x,i[4]=Ql.x,i[8]=kn.x,i[1]=_r.y,i[5]=Ql.y,i[9]=kn.y,i[2]=_r.z,i[6]=Ql.z,i[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],y=n[3],v=n[7],E=n[11],b=n[15],w=i[0],S=i[4],P=i[8],I=i[12],x=i[1],R=i[5],V=i[9],Z=i[13],L=i[2],X=i[6],k=i[10],G=i[14],Y=i[3],j=i[7],C=i[11],Q=i[15];return s[0]=o*w+a*x+l*L+c*Y,s[4]=o*S+a*R+l*X+c*j,s[8]=o*P+a*V+l*k+c*C,s[12]=o*I+a*Z+l*G+c*Q,s[1]=u*w+h*x+f*L+d*Y,s[5]=u*S+h*R+f*X+d*j,s[9]=u*P+h*V+f*k+d*C,s[13]=u*I+h*Z+f*G+d*Q,s[2]=_*w+g*x+p*L+m*Y,s[6]=_*S+g*R+p*X+m*j,s[10]=_*P+g*V+p*k+m*C,s[14]=_*I+g*Z+p*G+m*Q,s[3]=y*w+v*x+E*L+b*Y,s[7]=y*S+v*R+E*X+b*j,s[11]=y*P+v*V+E*k+b*C,s[15]=y*I+v*Z+E*G+b*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],y=h*p*c-g*f*c+g*l*d-a*p*d-h*l*m+a*f*m,v=_*f*c-u*p*c-_*l*d+o*p*d+u*l*m-o*f*m,E=u*g*c-_*h*c+_*a*d-o*g*d-u*a*m+o*h*m,b=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,w=t*y+n*v+i*E+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return e[0]=y*S,e[1]=(g*f*s-h*p*s-g*i*d+n*p*d+h*i*m-n*f*m)*S,e[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*S,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*S,e[4]=v*S,e[5]=(u*p*s-_*f*s+_*i*d-t*p*d-u*i*m+t*f*m)*S,e[6]=(_*l*s-o*p*s-_*i*c+t*p*c+o*i*m-t*l*m)*S,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*S,e[8]=E*S,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*m-t*h*m)*S,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*m+t*a*m)*S,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*S,e[12]=b*S,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*p+t*h*p)*S,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*S,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,p=o*h,m=a*h,y=l*c,v=l*u,E=l*h,b=n.x,w=n.y,S=n.z;return i[0]=(1-(g+m))*b,i[1]=(d+E)*b,i[2]=(_-v)*b,i[3]=0,i[4]=(d-E)*w,i[5]=(1-(f+m))*w,i[6]=(p+y)*w,i[7]=0,i[8]=(_+v)*S,i[9]=(p-y)*S,i[10]=(1-(f+g))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ea.set(i[0],i[1],i[2]).length();const o=ea.set(i[4],i[5],i[6]).length(),a=ea.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],mi.copy(this);const c=1/s,u=1/o,h=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=rr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===rr)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===nu)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=rr){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let _,g;if(a===rr)_=(o+s)*h,g=-2*h;else if(a===nu)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ea=new F,mi=new ct,UM=new F(0,0,0),NM=new F(1,1,1),_r=new F,Ql=new F,kn=new F,mm=new ct,_m=new eo;class Oi{constructor(e=0,t=0,n=0,i=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Sd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OM=0;const gm=new F,ta=new eo,Vi=new ct,ec=new F,po=new F,FM=new F,BM=new eo,vm=new F(1,0,0),xm=new F(0,1,0),ym=new F(0,0,1),kM={type:"added"},zM={type:"removed"},Ph={type:"childadded",child:null},Lh={type:"childremoved",child:null};class zt extends Qa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new F,t=new Oi,n=new eo,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ct},normalMatrix:{value:new Qe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(vm,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(ym,e)}translateOnAxis(e,t){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vm,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ec.copy(e):ec.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(po,ec,this.up):Vi.lookAt(ec,po,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),ta.setFromRotationMatrix(Vi),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kM),Ph.child=e,this.dispatchEvent(Ph),Ph.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zM),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,FM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,BM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zt.DEFAULT_UP=new F(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new F,Gi=new F,Dh=new F,Hi=new F,na=new F,ia=new F,Mm=new F,Ih=new F,Uh=new F,Nh=new F;class Li{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_i.subVectors(e,t),i.cross(_i);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_i.subVectors(i,t),Gi.subVectors(n,t),Dh.subVectors(e,t);const o=_i.dot(_i),a=_i.dot(Gi),l=_i.dot(Dh),c=Gi.dot(Gi),u=Gi.dot(Dh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static isFrontFacing(e,t,n,i){return _i.subVectors(n,t),Gi.subVectors(e,t),_i.cross(Gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),_i.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Li.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;na.subVectors(i,n),ia.subVectors(s,n),Ih.subVectors(e,n);const l=na.dot(Ih),c=ia.dot(Ih);if(l<=0&&c<=0)return t.copy(n);Uh.subVectors(e,i);const u=na.dot(Uh),h=ia.dot(Uh);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(na,o);Nh.subVectors(e,s);const d=na.dot(Nh),_=ia.dot(Nh);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(ia,a);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return Mm.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Mm,a);const m=1/(p+g+f);return o=g*m,a=f*m,t.copy(n).addScaledVector(na,o).addScaledVector(ia,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const m0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},tc={h:0,s:0,l:0};function Oh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=xt.workingColorSpace){if(e=Md(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Oh(o,s,e+1/3),this.g=Oh(o,s,e),this.b=Oh(o,s,e-1/3)}return xt.toWorkingColorSpace(this,i),this}setStyle(e,t=bi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bi){const n=m0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=Sh(e.r),this.g=Sh(e.g),this.b=Sh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bi){return xt.fromWorkingColorSpace(dn.copy(this),e),Math.round(on(dn.r*255,0,255))*65536+Math.round(on(dn.g*255,0,255))*256+Math.round(on(dn.b*255,0,255))}getHexString(e=bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,s=dn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=bi){xt.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==bi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(tc);const n=Wo(gr.h,tc.h,t),i=Wo(gr.s,tc.s,t),s=Wo(gr.l,tc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new tt;tt.NAMES=m0;let VM=0;class Jr extends Qa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Pa,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Af,this.blendDst=Rf,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Kc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pa&&(n.blending=this.blending),this.side!==$r&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Af&&(n.blendSrc=this.blendSrc),this.blendDst!==Rf&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _0 extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Qg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tr=GM();function GM(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function HM(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=on(r,-65504,65504),tr.floatView[0]=r;const e=tr.uint32View[0],t=e>>23&511;return tr.baseTable[t]+((e&8388607)>>tr.shiftTable[t])}function WM(r){const e=r>>10;return tr.uint32View[0]=tr.mantissaTable[tr.offsetTable[e]+(r&1023)]+tr.exponentTable[e],tr.floatView[0]}const vA={toHalfFloat:HM,fromHalfFloat:WM},Vt=new F,nc=new nt;class fi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Df,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return h0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nc.fromBufferAttribute(this,t),nc.applyMatrix3(e),this.setXY(t,nc.x,nc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Df&&(e.usage=this.usage),e}}class g0 extends fi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class v0 extends fi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ar extends fi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let XM=0;const ni=new ct,Fh=new zt,ra=new F,zn=new Zr,mo=new Zr,Qt=new F;class hr extends Qa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u0(e)?v0:g0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return Fh.lookAt(e),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ar(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(zn.min,mo.min),zn.expandByPoint(Qt),Qt.addVectors(zn.max,mo.max),zn.expandByPoint(Qt)):(zn.expandByPoint(mo.min),zn.expandByPoint(mo.max))}zn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Qt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Qt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Qt.fromBufferAttribute(a,c),l&&(ra.fromBufferAttribute(e,c),Qt.add(ra)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new F,l[P]=new F;const c=new F,u=new F,h=new F,f=new nt,d=new nt,_=new nt,g=new F,p=new F;function m(P,I,x){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,I),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,I),_.fromBufferAttribute(s,x),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const R=1/(d.x*_.y-_.x*d.y);isFinite(R)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(R),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(R),a[P].add(g),a[I].add(g),a[x].add(g),l[P].add(p),l[I].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,I=y.length;P<I;++P){const x=y[P],R=x.start,V=x.count;for(let Z=R,L=R+V;Z<L;Z+=3)m(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const v=new F,E=new F,b=new F,w=new F;function S(P){b.fromBufferAttribute(i,P),w.copy(b);const I=a[P];v.copy(I),v.sub(b.multiplyScalar(b.dot(I))).normalize(),E.crossVectors(w,I);const R=E.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,R)}for(let P=0,I=y.length;P<I;++P){const x=y[P],R=x.start,V=x.count;for(let Z=R,L=R+V;Z<L;Z+=3)S(e.getX(Z+0)),S(e.getX(Z+1)),S(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new fi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sm=new ct,ss=new Al,ic=new ur,Em=new F,sa=new F,aa=new F,oa=new F,Bh=new F,rc=new F,sc=new nt,ac=new nt,oc=new nt,Tm=new F,bm=new F,wm=new F,lc=new F,cc=new F;class ui extends zt{constructor(e=new hr,t=new _0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){rc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Bh.fromBufferAttribute(h,e),o?rc.addScaledVector(Bh,u):rc.addScaledVector(Bh.sub(t),u))}t.add(rc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(s),ss.copy(e.ray).recast(e.near),!(ic.containsPoint(ss.origin)===!1&&(ss.intersectSphere(ic,Em)===null||ss.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(Sm.copy(s).invert(),ss.copy(e.ray).applyMatrix4(Sm),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let E=y,b=v;E<b;E+=3){const w=a.getX(E),S=a.getX(E+1),P=a.getX(E+2);i=uc(this,m,e,n,c,u,h,w,S,P),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);i=uc(this,o,e,n,c,u,h,y,v,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let E=y,b=v;E<b;E+=3){const w=E,S=E+1,P=E+2;i=uc(this,m,e,n,c,u,h,w,S,P),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=p,v=p+1,E=p+2;i=uc(this,o,e,n,c,u,h,y,v,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function qM(r,e,t,n,i,s,o,a){let l;if(e.side===On?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===$r,a),l===null)return null;cc.copy(a),cc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(cc);return c<t.near||c>t.far?null:{distance:c,point:cc.clone(),object:r}}function uc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,sa),r.getVertexPosition(l,aa),r.getVertexPosition(c,oa);const u=qM(r,e,t,n,sa,aa,oa,lc);if(u){i&&(sc.fromBufferAttribute(i,a),ac.fromBufferAttribute(i,l),oc.fromBufferAttribute(i,c),u.uv=Li.getInterpolation(lc,sa,aa,oa,sc,ac,oc,new nt)),s&&(sc.fromBufferAttribute(s,a),ac.fromBufferAttribute(s,l),oc.fromBufferAttribute(s,c),u.uv1=Li.getInterpolation(lc,sa,aa,oa,sc,ac,oc,new nt)),o&&(Tm.fromBufferAttribute(o,a),bm.fromBufferAttribute(o,l),wm.fromBufferAttribute(o,c),u.normal=Li.getInterpolation(lc,sa,aa,oa,Tm,bm,wm,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};Li.getNormal(sa,aa,oa,h.normal),u.face=h}return u}class Rl extends hr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ar(c,3)),this.setAttribute("normal",new ar(u,3)),this.setAttribute("uv",new ar(h,2));function _(g,p,m,y,v,E,b,w,S,P,I){const x=E/S,R=b/P,V=E/2,Z=b/2,L=w/2,X=S+1,k=P+1;let G=0,Y=0;const j=new F;for(let C=0;C<k;C++){const Q=C*R-Z;for(let he=0;he<X;he++){const be=he*x-V;j[g]=be*y,j[p]=Q*v,j[m]=L,c.push(j.x,j.y,j.z),j[g]=0,j[p]=0,j[m]=w>0?1:-1,u.push(j.x,j.y,j.z),h.push(he/S),h.push(1-C/P),G+=1}}for(let C=0;C<P;C++)for(let Q=0;Q<S;Q++){const he=f+Q+X*C,be=f+Q+X*(C+1),H=f+(Q+1)+X*(C+1),ee=f+(Q+1)+X*C;l.push(he,be,ee),l.push(be,H,ee),Y+=6}a.addGroup(d,Y,I),d+=Y,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ja(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function En(r){const e={};for(let t=0;t<r.length;t++){const n=Ja(r[t]);for(const i in n)e[i]=n[i]}return e}function YM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function x0(r){return r.getRenderTarget()===null?r.outputColorSpace:xt.workingColorSpace}const $M={clone:Ja,merge:En};var jM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jM,this.fragmentShader=KM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ja(e.uniforms),this.uniformsGroups=YM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class y0 extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=rr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new F,Am=new nt,Rm=new nt;class qn extends y0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,Am,Rm),t.subVectors(Rm,Am)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ho*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const la=-90,ca=1;class ZM extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qn(la,ca,e,t);i.layers=this.layers,this.add(i);const s=new qn(la,ca,e,t);s.layers=this.layers,this.add(s);const o=new qn(la,ca,e,t);o.layers=this.layers,this.add(o);const a=new qn(la,ca,e,t);a.layers=this.layers,this.add(a);const l=new qn(la,ca,e,t);l.layers=this.layers,this.add(l);const c=new qn(la,ca,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===rr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nu)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class M0 extends un{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:$a,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JM extends Gs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new M0(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Rl(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:Ja(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Vr});s.uniforms.tEquirect.value=t;const o=new ui(i,s),a=t.minFilter;return t.minFilter===Ur&&(t.minFilter=jt),new ZM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const kh=new F,QM=new F,eS=new Qe;class fs{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=kh.subVectors(n,t).cross(QM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eS.getNormalMatrix(e),i=this.coplanarPoint(kh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new ur,hc=new F;class Ed{constructor(e=new fs,t=new fs,n=new fs,i=new fs,s=new fs,o=new fs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],y=i[13],v=i[14],E=i[15];if(n[0].setComponents(l-s,f-c,p-d,E-m).normalize(),n[1].setComponents(l+s,f+c,p+d,E+m).normalize(),n[2].setComponents(l+o,f+u,p+_,E+y).normalize(),n[3].setComponents(l-o,f-u,p-_,E-y).normalize(),n[4].setComponents(l-a,f-h,p-g,E-v).normalize(),t===rr)n[5].setComponents(l+a,f+h,p+g,E+v).normalize();else if(t===nu)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(hc.x=i.normal.x>0?e.max.x:e.min.x,hc.y=i.normal.y>0?e.max.y:e.min.y,hc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function S0(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function tS(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=h.byteLength,_=r.createBuffer();r.bindBuffer(u,_),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,h){const f=u.array,d=u._updateRange,_=u.updateRanges;if(r.bindBuffer(h,c),d.count===-1&&_.length===0&&r.bufferSubData(h,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){const m=_[g];t?r.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):r.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Hu extends hr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const y=m*f-o;for(let v=0;v<c;v++){const E=v*h-s;_.push(E,-y,0),g.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const v=y+c*m,E=y+c*(m+1),b=y+1+c*(m+1),w=y+1+c*m;d.push(v,E,w),d.push(E,b,w)}this.setIndex(d),this.setAttribute("position",new ar(_,3)),this.setAttribute("normal",new ar(g,3)),this.setAttribute("uv",new ar(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hu(e.width,e.height,e.widthSegments,e.heightSegments)}}var nS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_S=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ES=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DS="gl_FragColor = linearToOutputTexel( gl_FragColor );",IS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,US=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,NS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,FS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,WS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,XS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$S=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_E=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,xE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ME=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,DE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,GE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,uT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ET=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,UT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:nS,alphahash_pars_fragment:iS,alphamap_fragment:rS,alphamap_pars_fragment:sS,alphatest_fragment:aS,alphatest_pars_fragment:oS,aomap_fragment:lS,aomap_pars_fragment:cS,batching_pars_vertex:uS,batching_vertex:hS,begin_vertex:fS,beginnormal_vertex:dS,bsdfs:pS,iridescence_fragment:mS,bumpmap_pars_fragment:_S,clipping_planes_fragment:gS,clipping_planes_pars_fragment:vS,clipping_planes_pars_vertex:xS,clipping_planes_vertex:yS,color_fragment:MS,color_pars_fragment:SS,color_pars_vertex:ES,color_vertex:TS,common:bS,cube_uv_reflection_fragment:wS,defaultnormal_vertex:AS,displacementmap_pars_vertex:RS,displacementmap_vertex:CS,emissivemap_fragment:PS,emissivemap_pars_fragment:LS,colorspace_fragment:DS,colorspace_pars_fragment:IS,envmap_fragment:US,envmap_common_pars_fragment:NS,envmap_pars_fragment:OS,envmap_pars_vertex:FS,envmap_physical_pars_fragment:jS,envmap_vertex:BS,fog_vertex:kS,fog_pars_vertex:zS,fog_fragment:VS,fog_pars_fragment:GS,gradientmap_pars_fragment:HS,lightmap_fragment:WS,lightmap_pars_fragment:XS,lights_lambert_fragment:qS,lights_lambert_pars_fragment:YS,lights_pars_begin:$S,lights_toon_fragment:KS,lights_toon_pars_fragment:ZS,lights_phong_fragment:JS,lights_phong_pars_fragment:QS,lights_physical_fragment:eE,lights_physical_pars_fragment:tE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:rE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:aE,logdepthbuf_pars_vertex:oE,logdepthbuf_vertex:lE,map_fragment:cE,map_pars_fragment:uE,map_particle_fragment:hE,map_particle_pars_fragment:fE,metalnessmap_fragment:dE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:_E,morphnormal_vertex:gE,morphtarget_pars_vertex:vE,morphtarget_vertex:xE,normal_fragment_begin:yE,normal_fragment_maps:ME,normal_pars_fragment:SE,normal_pars_vertex:EE,normal_vertex:TE,normalmap_pars_fragment:bE,clearcoat_normal_fragment_begin:wE,clearcoat_normal_fragment_maps:AE,clearcoat_pars_fragment:RE,iridescence_pars_fragment:CE,opaque_fragment:PE,packing:LE,premultiplied_alpha_fragment:DE,project_vertex:IE,dithering_fragment:UE,dithering_pars_fragment:NE,roughnessmap_fragment:OE,roughnessmap_pars_fragment:FE,shadowmap_pars_fragment:BE,shadowmap_pars_vertex:kE,shadowmap_vertex:zE,shadowmask_pars_fragment:VE,skinbase_vertex:GE,skinning_pars_vertex:HE,skinning_vertex:WE,skinnormal_vertex:XE,specularmap_fragment:qE,specularmap_pars_fragment:YE,tonemapping_fragment:$E,tonemapping_pars_fragment:jE,transmission_fragment:KE,transmission_pars_fragment:ZE,uv_pars_fragment:JE,uv_pars_vertex:QE,uv_vertex:eT,worldpos_vertex:tT,background_vert:nT,background_frag:iT,backgroundCube_vert:rT,backgroundCube_frag:sT,cube_vert:aT,cube_frag:oT,depth_vert:lT,depth_frag:cT,distanceRGBA_vert:uT,distanceRGBA_frag:hT,equirect_vert:fT,equirect_frag:dT,linedashed_vert:pT,linedashed_frag:mT,meshbasic_vert:_T,meshbasic_frag:gT,meshlambert_vert:vT,meshlambert_frag:xT,meshmatcap_vert:yT,meshmatcap_frag:MT,meshnormal_vert:ST,meshnormal_frag:ET,meshphong_vert:TT,meshphong_frag:bT,meshphysical_vert:wT,meshphysical_frag:AT,meshtoon_vert:RT,meshtoon_frag:CT,points_vert:PT,points_frag:LT,shadow_vert:DT,shadow_frag:IT,sprite_vert:UT,sprite_frag:NT},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Ci={basic:{uniforms:En([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:En([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:En([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:En([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:En([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:En([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:En([me.points,me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:En([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:En([me.common,me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:En([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:En([me.sprite,me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:En([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:En([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Ci.physical={uniforms:En([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const fc={r:0,b:0,g:0},os=new Oi,OT=new ct;function FT(r,e,t,n,i,s,o){const a=new tt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(p,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),y=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Vu)?(u===void 0&&(u=new ui(new Rl(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:Ja(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),os.copy(m.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(os)),u.material.toneMapped=xt.getTransfer(v.colorSpace)!==Ct,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ui(new Hu(2,2),new cr({name:"BackgroundMaterial",uniforms:Ja(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=xt.getTransfer(v.colorSpace)!==Ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(fc,x0(r)),n.buffers.color.setClear(fc.r,fc.g,fc.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function BT(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(L,X,k,G,Y){let j=!1;if(o){const C=g(G,k,X);c!==C&&(c=C,d(c.object)),j=m(L,G,k,Y),j&&y(L,G,k,Y)}else{const C=X.wireframe===!0;(c.geometry!==G.id||c.program!==k.id||c.wireframe!==C)&&(c.geometry=G.id,c.program=k.id,c.wireframe=C,j=!0)}Y!==null&&t.update(Y,r.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,P(L,X,k,G),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,X,k){const G=k.wireframe===!0;let Y=a[L.id];Y===void 0&&(Y={},a[L.id]=Y);let j=Y[X.id];j===void 0&&(j={},Y[X.id]=j);let C=j[G];return C===void 0&&(C=p(f()),j[G]=C),C}function p(L){const X=[],k=[],G=[];for(let Y=0;Y<i;Y++)X[Y]=0,k[Y]=0,G[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:k,attributeDivisors:G,object:L,attributes:{},index:null}}function m(L,X,k,G){const Y=c.attributes,j=X.attributes;let C=0;const Q=k.getAttributes();for(const he in Q)if(Q[he].location>=0){const H=Y[he];let ee=j[he];if(ee===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),H===void 0||H.attribute!==ee||ee&&H.data!==ee.data)return!0;C++}return c.attributesNum!==C||c.index!==G}function y(L,X,k,G){const Y={},j=X.attributes;let C=0;const Q=k.getAttributes();for(const he in Q)if(Q[he].location>=0){let H=j[he];H===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));const ee={};ee.attribute=H,H&&H.data&&(ee.data=H.data),Y[he]=ee,C++}c.attributes=Y,c.attributesNum=C,c.index=G}function v(){const L=c.newAttributes;for(let X=0,k=L.length;X<k;X++)L[X]=0}function E(L){b(L,0)}function b(L,X){const k=c.newAttributes,G=c.enabledAttributes,Y=c.attributeDivisors;k[L]=1,G[L]===0&&(r.enableVertexAttribArray(L),G[L]=1),Y[L]!==X&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,X),Y[L]=X)}function w(){const L=c.newAttributes,X=c.enabledAttributes;for(let k=0,G=X.length;k<G;k++)X[k]!==L[k]&&(r.disableVertexAttribArray(k),X[k]=0)}function S(L,X,k,G,Y,j,C){C===!0?r.vertexAttribIPointer(L,X,k,Y,j):r.vertexAttribPointer(L,X,k,G,Y,j)}function P(L,X,k,G){if(n.isWebGL2===!1&&(L.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Y=G.attributes,j=k.getAttributes(),C=X.defaultAttributeValues;for(const Q in j){const he=j[Q];if(he.location>=0){let be=Y[Q];if(be===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(be=L.instanceColor)),be!==void 0){const H=be.normalized,ee=be.itemSize,ce=t.get(be);if(ce===void 0)continue;const ye=ce.buffer,ve=ce.type,fe=ce.bytesPerElement,Ge=n.isWebGL2===!0&&(ve===r.INT||ve===r.UNSIGNED_INT||be.gpuType===t0);if(be.isInterleavedBufferAttribute){const Le=be.data,O=Le.stride,He=be.offset;if(Le.isInstancedInterleavedBuffer){for(let ge=0;ge<he.locationSize;ge++)b(he.location+ge,Le.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let ge=0;ge<he.locationSize;ge++)E(he.location+ge);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let ge=0;ge<he.locationSize;ge++)S(he.location+ge,ee/he.locationSize,ve,H,O*fe,(He+ee/he.locationSize*ge)*fe,Ge)}else{if(be.isInstancedBufferAttribute){for(let Le=0;Le<he.locationSize;Le++)b(he.location+Le,be.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Le=0;Le<he.locationSize;Le++)E(he.location+Le);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Le=0;Le<he.locationSize;Le++)S(he.location+Le,ee/he.locationSize,ve,H,ee*fe,ee/he.locationSize*Le*fe,Ge)}}else if(C!==void 0){const H=C[Q];if(H!==void 0)switch(H.length){case 2:r.vertexAttrib2fv(he.location,H);break;case 3:r.vertexAttrib3fv(he.location,H);break;case 4:r.vertexAttrib4fv(he.location,H);break;default:r.vertexAttrib1fv(he.location,H)}}}}w()}function I(){V();for(const L in a){const X=a[L];for(const k in X){const G=X[k];for(const Y in G)_(G[Y].object),delete G[Y];delete X[k]}delete a[L]}}function x(L){if(a[L.id]===void 0)return;const X=a[L.id];for(const k in X){const G=X[k];for(const Y in G)_(G[Y].object),delete G[Y];delete X[k]}delete a[L.id]}function R(L){for(const X in a){const k=a[X];if(k[L.id]===void 0)continue;const G=k[L.id];for(const Y in G)_(G[Y].object),delete G[Y];delete k[L.id]}}function V(){Z(),u=!0,c!==l&&(c=l,d(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:Z,dispose:I,releaseStatesOfGeometry:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:E,disableUnusedAttributes:w}}function kT(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let d,_;if(i)d=r,_="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<f;_++)this.render(u[_],h[_]);else{d.multiDrawArraysWEBGL(s,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function zT(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,E=o||e.has("OES_texture_float"),b=v&&E,w=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:b,maxSamples:w}}function VT(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new fs,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,v=y*4;let E=m.clippingState||null;l.value=E,E=u(_,f,v,d);for(let b=0;b!==v;++b)E[b]=t[b];m.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,E=d;v!==g;++v,E+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function GT(r){let e=new WeakMap;function t(o,a){return a===Cf?o.mapping=$a:a===Pf&&(o.mapping=ja),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cf||a===Pf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new JM(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class E0 extends y0{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ma=4,Cm=[.125,.215,.35,.446,.526,.582],ms=20,zh=new E0,Pm=new tt;let Vh=null,Gh=0,Hh=0;const ds=(1+Math.sqrt(5))/2,ua=1/ds,Lm=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ds,ua),new F(0,ds,-ua),new F(ua,0,ds),new F(-ua,0,ds),new F(ds,ua,0),new F(-ds,ua,0)];class Dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Vh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vh,Gh,Hh),e.scissorTest=!1,dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$a||e.mapping===ja?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:rl,format:oi,colorSpace:Kr,depthBuffer:!1},i=Im(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Im(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HT(s)),this._blurMaterial=WT(s,e,t)}return i}_compileMaterial(e){const t=new ui(this._lodPlanes[0],e);this._renderer.compile(t,zh)}_sceneToCubeUV(e,t,n,i){const a=new qn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Pm),u.toneMapping=Gr,u.autoClear=!1;const d=new _0({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),_=new ui(new Rl,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(Pm),g=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;dc(i,y*v,m>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===$a||e.mapping===ja;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Um());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ui(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;dc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,zh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Lm[(i-1)%Lm.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ui(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ms-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):ms;p>ms&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ms}`);const m=[];let y=0;for(let S=0;S<ms;++S){const P=S/g,I=Math.exp(-P*P/2);m.push(I),S===0?y+=I:S<p&&(y+=2*I)}for(let S=0;S<m.length;S++)m[S]=m[S]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const E=this._sizeLods[i],b=3*E*(i>v-Ma?i-v+Ma:0),w=4*(this._cubeSize-E);dc(t,b,w,3*E,2*E),l.setRenderTarget(t),l.render(h,zh)}}function HT(r){const e=[],t=[],n=[];let i=r;const s=r-Ma+1+Cm.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Ma?l=Cm[o-r+Ma-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,y=new Float32Array(g*_*d),v=new Float32Array(p*_*d),E=new Float32Array(m*_*d);for(let w=0;w<d;w++){const S=w%3*2/3-1,P=w>2?0:-1,I=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];y.set(I,g*_*w),v.set(f,p*_*w);const x=[w,w,w,w,w,w];E.set(x,m*_*w)}const b=new hr;b.setAttribute("position",new fi(y,g)),b.setAttribute("uv",new fi(v,p)),b.setAttribute("faceIndex",new fi(E,m)),e.push(b),i>Ma&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Im(r,e,t){const n=new Gs(r,e,t);return n.texture.mapping=Vu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function WT(r,e,t){const n=new Float32Array(ms),i=new F(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Um(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Nm(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XT(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cf||l===Pf,u=l===$a||l===ja;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Dm(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Dm(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function qT(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function YT(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let v=0,E=y.length;v<E;v+=3){const b=y[v+0],w=y[v+1],S=y[v+2];f.push(b,w,w,S,S,b)}}else if(_!==void 0){const y=_.array;g=_.version;for(let v=0,E=y.length/3-1;v<E;v+=3){const b=v+0,w=v+1,S=v+2;f.push(b,w,w,S,S,b)}}else return;const p=new(u0(f)?v0:g0)(f,1);p.version=g;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function $T(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,_){r.drawElements(s,_,a,d*l),t.update(_,s,1)}function h(d,_,g){if(g===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,_,a,d*l,g),t.update(_,s,g)}function f(d,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<g;m++)this.render(d[m]/l,_[m]);else{p.multiDrawElementsWEBGL(s,_,0,a,d,0,g);let m=0;for(let y=0;y<g;y++)m+=_[y];t.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function jT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function KT(r,e){return r[0]-e[0]}function ZT(r,e){return Math.abs(e[1])-Math.abs(r[1])}function JT(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=d!==void 0?d.length:0;let g=s.get(u);if(g===void 0||g.count!==_){let V=function(){x.dispose(),s.delete(u),u.removeEventListener("dispose",V)};g!==void 0&&g.texture.dispose();const p=u.morphAttributes.position!==void 0,m=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let w=0;p===!0&&(w=1),m===!0&&(w=2),y===!0&&(w=3);let S=u.attributes.position.count*w,P=1;S>e.maxTextureSize&&(P=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const I=new Float32Array(S*P*4*_),x=new p0(I,S,P,_);x.type=yi,x.needsUpdate=!0;const R=w*4;for(let Z=0;Z<_;Z++){const L=v[Z],X=E[Z],k=b[Z],G=S*P*4*Z;for(let Y=0;Y<L.count;Y++){const j=Y*R;p===!0&&(o.fromBufferAttribute(L,Y),I[G+j+0]=o.x,I[G+j+1]=o.y,I[G+j+2]=o.z,I[G+j+3]=0),m===!0&&(o.fromBufferAttribute(X,Y),I[G+j+4]=o.x,I[G+j+5]=o.y,I[G+j+6]=o.z,I[G+j+7]=0),y===!0&&(o.fromBufferAttribute(k,Y),I[G+j+8]=o.x,I[G+j+9]=o.y,I[G+j+10]=o.z,I[G+j+11]=k.itemSize===4?o.w:1)}}g={count:_,texture:x,size:new nt(S,P)},s.set(u,g),u.addEventListener("dispose",V)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let p=0;for(let y=0;y<f.length;y++)p+=f[y];const m=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",f)}h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const d=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==d){_=[];for(let v=0;v<d;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<d;v++){const E=_[v];E[0]=v,E[1]=f[v]}_.sort(ZT);for(let v=0;v<8;v++)v<d&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(KT);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const E=a[v],b=E[0],w=E[1];b!==Number.MAX_SAFE_INTEGER&&w?(g&&u.getAttribute("morphTarget"+v)!==g[b]&&u.setAttribute("morphTarget"+v,g[b]),p&&u.getAttribute("morphNormal"+v)!==p[b]&&u.setAttribute("morphNormal"+v,p[b]),i[v]=w,m+=w):(g&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const y=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function QT(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class T0 extends un{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Bs,u!==Bs&&u!==Ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Bs&&(n=Nr),n===void 0&&u===Ka&&(n=Fs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const b0=new un,w0=new T0(1,1);w0.compareFunction=c0;const A0=new p0,R0=new DM,C0=new M0,Om=[],Fm=[],Bm=new Float32Array(16),km=new Float32Array(9),zm=new Float32Array(4);function to(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Om[i];if(s===void 0&&(s=new Float32Array(i),Om[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Wu(r,e){let t=Fm[e];t===void 0&&(t=new Int32Array(e),Fm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function eb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function tb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function nb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function ib(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function rb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;zm.set(n),r.uniformMatrix2fv(this.addr,!1,zm),Jt(t,n)}}function sb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;km.set(n),r.uniformMatrix3fv(this.addr,!1,km),Jt(t,n)}}function ab(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Bm.set(n),r.uniformMatrix4fv(this.addr,!1,Bm),Jt(t,n)}}function ob(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function lb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function cb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function ub(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function hb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function fb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function db(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function pb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function mb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?w0:b0;t.setTexture2D(e||s,i)}function _b(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||R0,i)}function gb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||C0,i)}function vb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||A0,i)}function xb(r){switch(r){case 5126:return eb;case 35664:return tb;case 35665:return nb;case 35666:return ib;case 35674:return rb;case 35675:return sb;case 35676:return ab;case 5124:case 35670:return ob;case 35667:case 35671:return lb;case 35668:case 35672:return cb;case 35669:case 35673:return ub;case 5125:return hb;case 36294:return fb;case 36295:return db;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return vb}}function yb(r,e){r.uniform1fv(this.addr,e)}function Mb(r,e){const t=to(e,this.size,2);r.uniform2fv(this.addr,t)}function Sb(r,e){const t=to(e,this.size,3);r.uniform3fv(this.addr,t)}function Eb(r,e){const t=to(e,this.size,4);r.uniform4fv(this.addr,t)}function Tb(r,e){const t=to(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function bb(r,e){const t=to(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function wb(r,e){const t=to(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ab(r,e){r.uniform1iv(this.addr,e)}function Rb(r,e){r.uniform2iv(this.addr,e)}function Cb(r,e){r.uniform3iv(this.addr,e)}function Pb(r,e){r.uniform4iv(this.addr,e)}function Lb(r,e){r.uniform1uiv(this.addr,e)}function Db(r,e){r.uniform2uiv(this.addr,e)}function Ib(r,e){r.uniform3uiv(this.addr,e)}function Ub(r,e){r.uniform4uiv(this.addr,e)}function Nb(r,e,t){const n=this.cache,i=e.length,s=Wu(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||b0,s[o])}function Ob(r,e,t){const n=this.cache,i=e.length,s=Wu(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||R0,s[o])}function Fb(r,e,t){const n=this.cache,i=e.length,s=Wu(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||C0,s[o])}function Bb(r,e,t){const n=this.cache,i=e.length,s=Wu(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||A0,s[o])}function kb(r){switch(r){case 5126:return yb;case 35664:return Mb;case 35665:return Sb;case 35666:return Eb;case 35674:return Tb;case 35675:return bb;case 35676:return wb;case 5124:case 35670:return Ab;case 35667:case 35671:return Rb;case 35668:case 35672:return Cb;case 35669:case 35673:return Pb;case 5125:return Lb;case 36294:return Db;case 36295:return Ib;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Nb;case 35679:case 36299:case 36307:return Ob;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Bb}}class zb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xb(t.type)}}class Vb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kb(t.type)}}class Gb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function Vm(r,e){r.seq.push(e),r.map[e.id]=e}function Hb(r,e,t){const n=r.name,i=n.length;for(Wh.lastIndex=0;;){const s=Wh.exec(n),o=Wh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Vm(t,c===void 0?new zb(a,r,e):new Vb(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Gb(a),Vm(t,h)),t=h}}}class Oc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Hb(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Gm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Wb=37297;let Xb=0;function qb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Yb(r){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(r);let n;switch(e===t?n="":e===tu&&t===eu?n="LinearDisplayP3ToLinearSRGB":e===eu&&t===tu&&(n="LinearSRGBToLinearDisplayP3"),r){case Kr:case Gu:return[n,"LinearTransferOETF"];case bi:case yd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Hm(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+qb(r.getShaderSource(e),o)}else return i}function $b(r,e){const t=Yb(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jb(r,e){let t;switch(e){case Vy:t="Linear";break;case Gy:t="Reinhard";break;case Hy:t="OptimizedCineon";break;case Wy:t="ACESFilmic";break;case qy:t="AgX";break;case Yy:t="Neutral";break;case Xy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Kb(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sa).join(`
`)}function Zb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function Jb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Sa(r){return r!==""}function Wm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ew=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nf(r){return r.replace(ew,nw)}const tw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nw(r,e){let t=et[e];if(t===void 0){const n=tw.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nf(t)}const iw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(r){return r.replace(iw,rw)}function rw(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ym(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(e+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Jg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===my?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function aw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $a:case ja:e="ENVMAP_TYPE_CUBE";break;case Vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ow(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ja:e="ENVMAP_MODE_REFRACTION";break}return e}function lw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qg:e="ENVMAP_BLENDING_MULTIPLY";break;case ky:e="ENVMAP_BLENDING_MIX";break;case zy:e="ENVMAP_BLENDING_ADD";break}return e}function cw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function uw(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=sw(t),c=aw(t),u=ow(t),h=lw(t),f=cw(t),d=t.isWebGL2?"":Kb(t),_=Zb(t),g=Jb(s),p=i.createProgram();let m,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sa).join(`
`),m.length>0&&(m+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sa).join(`
`),y.length>0&&(y+=`
`)):(m=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),y=[d,Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gr?"#define TONE_MAPPING":"",t.toneMapping!==Gr?et.tonemapping_pars_fragment:"",t.toneMapping!==Gr?jb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,$b("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),o=Nf(o),o=Wm(o,t),o=Xm(o,t),a=Nf(a),a=Wm(a,t),a=Xm(a,t),o=qm(o),a=qm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const E=v+m+o,b=v+y+a,w=Gm(i,i.VERTEX_SHADER,E),S=Gm(i,i.FRAGMENT_SHADER,b);i.attachShader(p,w),i.attachShader(p,S),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function P(V){if(r.debug.checkShaderErrors){const Z=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(w).trim(),X=i.getShaderInfoLog(S).trim();let k=!0,G=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,w,S);else{const Y=Hm(i,w,"vertex"),j=Hm(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Z+`
`+Y+`
`+j)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||X==="")&&(G=!1);G&&(V.diagnostics={runnable:k,programLog:Z,vertexShader:{log:L,prefix:m},fragmentShader:{log:X,prefix:y}})}i.deleteShader(w),i.deleteShader(S),I=new Oc(i,p),x=Qb(i,p)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(p,Wb)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=S,this}let hw=0;class fw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dw(e),t.set(e,n)),n}}class dw{constructor(e){this.id=hw++,this.code=e,this.usedTimes=0}}function pw(r,e,t,n,i,s,o){const a=new Sd,l=new fw,c=new Set,u=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,R,V,Z,L){const X=Z.fog,k=L.geometry,G=x.isMeshStandardMaterial?Z.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),j=Y&&Y.mapping===Vu?Y.image.height:null,C=g[x.type];x.precision!==null&&(_=i.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const Q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,he=Q!==void 0?Q.length:0;let be=0;k.morphAttributes.position!==void 0&&(be=1),k.morphAttributes.normal!==void 0&&(be=2),k.morphAttributes.color!==void 0&&(be=3);let H,ee,ce,ye;if(C){const ft=Ci[C];H=ft.vertexShader,ee=ft.fragmentShader}else H=x.vertexShader,ee=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),ye=l.getFragmentShaderID(x);const ve=r.getRenderTarget(),fe=L.isInstancedMesh===!0,Ge=L.isBatchedMesh===!0,Le=!!x.map,O=!!x.matcap,He=!!Y,ge=!!x.aoMap,Be=!!x.lightMap,Ce=!!x.bumpMap,B=!!x.normalMap,ke=!!x.displacementMap,Xe=!!x.emissiveMap,dt=!!x.metalnessMap,A=!!x.roughnessMap,M=x.anisotropy>0,K=x.clearcoat>0,J=x.iridescence>0,te=x.sheen>0,ne=x.transmission>0,we=M&&!!x.anisotropyMap,Ie=K&&!!x.clearcoatMap,re=K&&!!x.clearcoatNormalMap,ue=K&&!!x.clearcoatRoughnessMap,Ye=J&&!!x.iridescenceMap,ie=J&&!!x.iridescenceThicknessMap,At=te&&!!x.sheenColorMap,qe=te&&!!x.sheenRoughnessMap,Ue=!!x.specularMap,Ee=!!x.specularColorMap,Se=!!x.specularIntensityMap,Ze=ne&&!!x.transmissionMap,de=ne&&!!x.thicknessMap,ht=!!x.gradientMap,U=!!x.alphaMap,oe=x.alphaTest>0,q=!!x.alphaHash,se=!!x.extensions;let _e=Gr;x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(_e=r.toneMapping);const $e={isWebGL2:h,shaderID:C,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:ee,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:ye,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:Ge,instancing:fe,instancingColor:fe&&L.instanceColor!==null,instancingMorph:fe&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Kr,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:O,envMap:He,envMapMode:He&&Y.mapping,envMapCubeUVHeight:j,aoMap:ge,lightMap:Be,bumpMap:Ce,normalMap:B,displacementMap:d&&ke,emissiveMap:Xe,normalMapObjectSpace:B&&x.normalMapType===sM,normalMapTangentSpace:B&&x.normalMapType===xd,metalnessMap:dt,roughnessMap:A,anisotropy:M,anisotropyMap:we,clearcoat:K,clearcoatMap:Ie,clearcoatNormalMap:re,clearcoatRoughnessMap:ue,iridescence:J,iridescenceMap:Ye,iridescenceThicknessMap:ie,sheen:te,sheenColorMap:At,sheenRoughnessMap:qe,specularMap:Ue,specularColorMap:Ee,specularIntensityMap:Se,transmission:ne,transmissionMap:Ze,thicknessMap:de,gradientMap:ht,opaque:x.transparent===!1&&x.blending===Pa&&x.alphaToCoverage===!1,alphaMap:U,alphaTest:oe,alphaHash:q,combine:x.combine,mapUv:Le&&p(x.map.channel),aoMapUv:ge&&p(x.aoMap.channel),lightMapUv:Be&&p(x.lightMap.channel),bumpMapUv:Ce&&p(x.bumpMap.channel),normalMapUv:B&&p(x.normalMap.channel),displacementMapUv:ke&&p(x.displacementMap.channel),emissiveMapUv:Xe&&p(x.emissiveMap.channel),metalnessMapUv:dt&&p(x.metalnessMap.channel),roughnessMapUv:A&&p(x.roughnessMap.channel),anisotropyMapUv:we&&p(x.anisotropyMap.channel),clearcoatMapUv:Ie&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:At&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:qe&&p(x.sheenRoughnessMap.channel),specularMapUv:Ue&&p(x.specularMap.channel),specularColorMapUv:Ee&&p(x.specularColorMap.channel),specularIntensityMapUv:Se&&p(x.specularIntensityMap.channel),transmissionMapUv:Ze&&p(x.transmissionMap.channel),thicknessMapUv:de&&p(x.thicknessMap.channel),alphaMapUv:U&&p(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(B||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Le||U),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:be,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:_e,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&xt.getTransfer(x.map.colorSpace)===Ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===er,flipSided:x.side===On,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:se&&x.extensions.derivatives===!0,extensionFragDepth:se&&x.extensions.fragDepth===!0,extensionDrawBuffers:se&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:se&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function y(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const V in x.defines)R.push(V),R.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(v(R,x),E(R,x),R.push(r.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function v(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function E(x,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.instancingMorph&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.normalMapObjectSpace&&a.enable(7),R.normalMapTangentSpace&&a.enable(8),R.clearcoat&&a.enable(9),R.iridescence&&a.enable(10),R.alphaTest&&a.enable(11),R.vertexColors&&a.enable(12),R.vertexAlphas&&a.enable(13),R.vertexUv1s&&a.enable(14),R.vertexUv2s&&a.enable(15),R.vertexUv3s&&a.enable(16),R.vertexTangents&&a.enable(17),R.anisotropy&&a.enable(18),R.alphaHash&&a.enable(19),R.batching&&a.enable(20),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),x.push(a.mask)}function b(x){const R=g[x.type];let V;if(R){const Z=Ci[R];V=$M.clone(Z.uniforms)}else V=x.uniforms;return V}function w(x,R){let V;for(let Z=0,L=u.length;Z<L;Z++){const X=u[Z];if(X.cacheKey===R){V=X,++V.usedTimes;break}}return V===void 0&&(V=new uw(r,R,x,s),u.push(V)),V}function S(x){if(--x.usedTimes===0){const R=u.indexOf(x);u[R]=u[u.length-1],u.pop(),x.destroy()}}function P(x){l.remove(x)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:b,acquireProgram:w,releaseProgram:S,releaseShaderCache:P,programs:u,dispose:I}}function mw(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function _w(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function $m(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function jm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function a(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||_w),n.length>1&&n.sort(f||$m),i.length>1&&i.sort(f||$m)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function gw(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new jm,r.set(n,[o])):i>=s.length?(o=new jm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function vw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new tt};break;case"SpotLight":t={position:new F,direction:new F,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function xw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let yw=0;function Mw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Sw(r,e){const t=new vw,n=xw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const s=new F,o=new ct,a=new ct;function l(u,h){let f=0,d=0,_=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let g=0,p=0,m=0,y=0,v=0,E=0,b=0,w=0,S=0,P=0,I=0;u.sort(Mw);const x=h===!0?Math.PI:1;for(let V=0,Z=u.length;V<Z;V++){const L=u[V],X=L.color,k=L.intensity,G=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=X.r*k*x,d+=X.g*k*x,_+=X.b*k*x;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],k);I++}else if(L.isDirectionalLight){const j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const C=L.shadow,Q=n.get(L);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=Y,i.directionalShadowMatrix[g]=L.shadow.matrix,E++}i.directional[g]=j,g++}else if(L.isSpotLight){const j=t.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(X).multiplyScalar(k*x),j.distance=G,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[m]=j;const C=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,C.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[m]=C.matrix,L.castShadow){const Q=n.get(L);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,i.spotShadow[m]=Q,i.spotShadowMap[m]=Y,w++}m++}else if(L.isRectAreaLight){const j=t.get(L);j.color.copy(X).multiplyScalar(k),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=j,y++}else if(L.isPointLight){const j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*x),j.distance=L.distance,j.decay=L.decay,L.castShadow){const C=L.shadow,Q=n.get(L);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,Q.shadowCameraNear=C.camera.near,Q.shadowCameraFar=C.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=L.shadow.matrix,b++}i.point[p]=j,p++}else if(L.isHemisphereLight){const j=t.get(L);j.skyColor.copy(L.color).multiplyScalar(k*x),j.groundColor.copy(L.groundColor).multiplyScalar(k*x),i.hemi[v]=j,v++}}y>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=_;const R=i.hash;(R.directionalLength!==g||R.pointLength!==p||R.spotLength!==m||R.rectAreaLength!==y||R.hemiLength!==v||R.numDirectionalShadows!==E||R.numPointShadows!==b||R.numSpotShadows!==w||R.numSpotMaps!==S||R.numLightProbes!==I)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=y,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,R.directionalLength=g,R.pointLength=p,R.spotLength=m,R.rectAreaLength=y,R.hemiLength=v,R.numDirectionalShadows=E,R.numPointShadows=b,R.numSpotShadows=w,R.numSpotMaps=S,R.numLightProbes=I,i.version=yw++)}function c(u,h){let f=0,d=0,_=0,g=0,p=0;const m=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const E=u[y];if(E.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(E.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),_++}else if(E.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),a.identity(),o.copy(E.matrixWorld),o.premultiply(m),a.extractRotation(o),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function Km(r,e){const t=new Sw(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ew(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Km(r,e),t.set(s,[l])):o>=a.length?(l=new Km(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Tw extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bw extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Aw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rw(r,e,t){let n=new Ed;const i=new nt,s=new nt,o=new Tt,a=new Tw({depthPacking:rM}),l=new bw,c={},u=t.maxTextureSize,h={[$r]:On,[On]:$r,[er]:er},f=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:ww,fragmentShader:Aw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new hr;_.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ui(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jg;let m=this.type;this.render=function(w,S,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const I=r.getRenderTarget(),x=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),V=r.state;V.setBlending(Vr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Z=m!==Xi&&this.type===Xi,L=m===Xi&&this.type!==Xi;for(let X=0,k=w.length;X<k;X++){const G=w[X],Y=G.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const j=Y.getFrameExtents();if(i.multiply(j),s.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,Y.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,Y.mapSize.y=s.y)),Y.map===null||Z===!0||L===!0){const Q=this.type!==Xi?{minFilter:Kt,magFilter:Kt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Gs(i.x,i.y,Q),Y.map.texture.name=G.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const C=Y.getViewportCount();for(let Q=0;Q<C;Q++){const he=Y.getViewport(Q);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),V.viewport(o),Y.updateMatrices(G,Q),n=Y.getFrustum(),E(S,P,Y.camera,G,this.type)}Y.isPointLightShadow!==!0&&this.type===Xi&&y(Y,P),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(I,x,R)};function y(w,S){const P=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Gs(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(S,null,P,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(S,null,P,d,g,null)}function v(w,S,P,I){let x=null;const R=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const V=x.uuid,Z=S.uuid;let L=c[V];L===void 0&&(L={},c[V]=L);let X=L[Z];X===void 0&&(X=x.clone(),L[Z]=X,S.addEventListener("dispose",b)),x=X}if(x.visible=S.visible,x.wireframe=S.wireframe,I===Xi?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:h[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=r.properties.get(x);V.light=P}return x}function E(w,S,P,I,x){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Xi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const Z=e.update(w),L=w.material;if(Array.isArray(L)){const X=Z.groups;for(let k=0,G=X.length;k<G;k++){const Y=X[k],j=L[Y.materialIndex];if(j&&j.visible){const C=v(w,j,I,x);w.onBeforeShadow(r,w,S,P,Z,C,Y),r.renderBufferDirect(P,null,Z,C,w,Y),w.onAfterShadow(r,w,S,P,Z,C,Y)}}}else if(L.visible){const X=v(w,L,I,x);w.onBeforeShadow(r,w,S,P,Z,X,null),r.renderBufferDirect(P,null,Z,X,w,null),w.onAfterShadow(r,w,S,P,Z,X,null)}}const V=w.children;for(let Z=0,L=V.length;Z<L;Z++)E(V[Z],S,P,I,x)}function b(w){w.target.removeEventListener("dispose",b);for(const P in c){const I=c[P],x=w.target.uuid;x in I&&(I[x].dispose(),delete I[x])}}}function Cw(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const oe=new Tt;let q=null;const se=new Tt(0,0,0,0);return{setMask:function(_e){q!==_e&&!U&&(r.colorMask(_e,_e,_e,_e),q=_e)},setLocked:function(_e){U=_e},setClear:function(_e,$e,ft,Pe,Ae){Ae===!0&&(_e*=Pe,$e*=Pe,ft*=Pe),oe.set(_e,$e,ft,Pe),se.equals(oe)===!1&&(r.clearColor(_e,$e,ft,Pe),se.copy(oe))},reset:function(){U=!1,q=null,se.set(-1,0,0,0)}}}function s(){let U=!1,oe=null,q=null,se=null;return{setTest:function(_e){_e?fe(r.DEPTH_TEST):Ge(r.DEPTH_TEST)},setMask:function(_e){oe!==_e&&!U&&(r.depthMask(_e),oe=_e)},setFunc:function(_e){if(q!==_e){switch(_e){case Dy:r.depthFunc(r.NEVER);break;case Iy:r.depthFunc(r.ALWAYS);break;case Uy:r.depthFunc(r.LESS);break;case Kc:r.depthFunc(r.LEQUAL);break;case Ny:r.depthFunc(r.EQUAL);break;case Oy:r.depthFunc(r.GEQUAL);break;case Fy:r.depthFunc(r.GREATER);break;case By:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}q=_e}},setLocked:function(_e){U=_e},setClear:function(_e){se!==_e&&(r.clearDepth(_e),se=_e)},reset:function(){U=!1,oe=null,q=null,se=null}}}function o(){let U=!1,oe=null,q=null,se=null,_e=null,$e=null,ft=null,Pe=null,Ae=null;return{setTest:function(Ne){U||(Ne?fe(r.STENCIL_TEST):Ge(r.STENCIL_TEST))},setMask:function(Ne){oe!==Ne&&!U&&(r.stencilMask(Ne),oe=Ne)},setFunc:function(Ne,ae,Fe){(q!==Ne||se!==ae||_e!==Fe)&&(r.stencilFunc(Ne,ae,Fe),q=Ne,se=ae,_e=Fe)},setOp:function(Ne,ae,Fe){($e!==Ne||ft!==ae||Pe!==Fe)&&(r.stencilOp(Ne,ae,Fe),$e=Ne,ft=ae,Pe=Fe)},setLocked:function(Ne){U=Ne},setClear:function(Ne){Ae!==Ne&&(r.clearStencil(Ne),Ae=Ne)},reset:function(){U=!1,oe=null,q=null,se=null,_e=null,$e=null,ft=null,Pe=null,Ae=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},_=new WeakMap,g=[],p=null,m=!1,y=null,v=null,E=null,b=null,w=null,S=null,P=null,I=new tt(0,0,0),x=0,R=!1,V=null,Z=null,L=null,X=null,k=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const C=r.getParameter(r.VERSION);C.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(C)[1]),Y=j>=1):C.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),Y=j>=2);let Q=null,he={};const be=r.getParameter(r.SCISSOR_BOX),H=r.getParameter(r.VIEWPORT),ee=new Tt().fromArray(be),ce=new Tt().fromArray(H);function ye(U,oe,q,se){const _e=new Uint8Array(4),$e=r.createTexture();r.bindTexture(U,$e),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ft=0;ft<q;ft++)n&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(oe,0,r.RGBA,1,1,se,0,r.RGBA,r.UNSIGNED_BYTE,_e):r.texImage2D(oe+ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_e);return $e}const ve={};ve[r.TEXTURE_2D]=ye(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ve[r.TEXTURE_2D_ARRAY]=ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(r.DEPTH_TEST),l.setFunc(Kc),ke(!1),Xe(wp),fe(r.CULL_FACE),Ce(Vr);function fe(U){f[U]!==!0&&(r.enable(U),f[U]=!0)}function Ge(U){f[U]!==!1&&(r.disable(U),f[U]=!1)}function Le(U,oe){return d[U]!==oe?(r.bindFramebuffer(U,oe),d[U]=oe,n&&(U===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=oe),U===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=oe)),!0):!1}function O(U,oe){let q=g,se=!1;if(U){q=_.get(oe),q===void 0&&(q=[],_.set(oe,q));const _e=U.textures;if(q.length!==_e.length||q[0]!==r.COLOR_ATTACHMENT0){for(let $e=0,ft=_e.length;$e<ft;$e++)q[$e]=r.COLOR_ATTACHMENT0+$e;q.length=_e.length,se=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,se=!0);if(se)if(t.isWebGL2)r.drawBuffers(q);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function He(U){return p!==U?(r.useProgram(U),p=U,!0):!1}const ge={[ps]:r.FUNC_ADD,[gy]:r.FUNC_SUBTRACT,[vy]:r.FUNC_REVERSE_SUBTRACT};if(n)ge[Pp]=r.MIN,ge[Lp]=r.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ge[Pp]=U.MIN_EXT,ge[Lp]=U.MAX_EXT)}const Be={[xy]:r.ZERO,[yy]:r.ONE,[My]:r.SRC_COLOR,[Af]:r.SRC_ALPHA,[Ay]:r.SRC_ALPHA_SATURATE,[by]:r.DST_COLOR,[Ey]:r.DST_ALPHA,[Sy]:r.ONE_MINUS_SRC_COLOR,[Rf]:r.ONE_MINUS_SRC_ALPHA,[wy]:r.ONE_MINUS_DST_COLOR,[Ty]:r.ONE_MINUS_DST_ALPHA,[Ry]:r.CONSTANT_COLOR,[Cy]:r.ONE_MINUS_CONSTANT_COLOR,[Py]:r.CONSTANT_ALPHA,[Ly]:r.ONE_MINUS_CONSTANT_ALPHA};function Ce(U,oe,q,se,_e,$e,ft,Pe,Ae,Ne){if(U===Vr){m===!0&&(Ge(r.BLEND),m=!1);return}if(m===!1&&(fe(r.BLEND),m=!0),U!==_y){if(U!==y||Ne!==R){if((v!==ps||w!==ps)&&(r.blendEquation(r.FUNC_ADD),v=ps,w=ps),Ne)switch(U){case Pa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ap:r.blendFunc(r.ONE,r.ONE);break;case Rp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Pa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ap:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Rp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,b=null,S=null,P=null,I.set(0,0,0),x=0,y=U,R=Ne}return}_e=_e||oe,$e=$e||q,ft=ft||se,(oe!==v||_e!==w)&&(r.blendEquationSeparate(ge[oe],ge[_e]),v=oe,w=_e),(q!==E||se!==b||$e!==S||ft!==P)&&(r.blendFuncSeparate(Be[q],Be[se],Be[$e],Be[ft]),E=q,b=se,S=$e,P=ft),(Pe.equals(I)===!1||Ae!==x)&&(r.blendColor(Pe.r,Pe.g,Pe.b,Ae),I.copy(Pe),x=Ae),y=U,R=!1}function B(U,oe){U.side===er?Ge(r.CULL_FACE):fe(r.CULL_FACE);let q=U.side===On;oe&&(q=!q),ke(q),U.blending===Pa&&U.transparent===!1?Ce(Vr):Ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const se=U.stencilWrite;c.setTest(se),se&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),A(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function ke(U){V!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),V=U)}function Xe(U){U!==dy?(fe(r.CULL_FACE),U!==Z&&(U===wp?r.cullFace(r.BACK):U===py?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ge(r.CULL_FACE),Z=U}function dt(U){U!==L&&(Y&&r.lineWidth(U),L=U)}function A(U,oe,q){U?(fe(r.POLYGON_OFFSET_FILL),(X!==oe||k!==q)&&(r.polygonOffset(oe,q),X=oe,k=q)):Ge(r.POLYGON_OFFSET_FILL)}function M(U){U?fe(r.SCISSOR_TEST):Ge(r.SCISSOR_TEST)}function K(U){U===void 0&&(U=r.TEXTURE0+G-1),Q!==U&&(r.activeTexture(U),Q=U)}function J(U,oe,q){q===void 0&&(Q===null?q=r.TEXTURE0+G-1:q=Q);let se=he[q];se===void 0&&(se={type:void 0,texture:void 0},he[q]=se),(se.type!==U||se.texture!==oe)&&(Q!==q&&(r.activeTexture(q),Q=q),r.bindTexture(U,oe||ve[U]),se.type=U,se.texture=oe)}function te(){const U=he[Q];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(U){ee.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ee.copy(U))}function Se(U){ce.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ce.copy(U))}function Ze(U,oe){let q=h.get(oe);q===void 0&&(q=new WeakMap,h.set(oe,q));let se=q.get(U);se===void 0&&(se=r.getUniformBlockIndex(oe,U.name),q.set(U,se))}function de(U,oe){const se=h.get(oe).get(U);u.get(oe)!==se&&(r.uniformBlockBinding(oe,se,U.__bindingPointIndex),u.set(oe,se))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},Q=null,he={},d={},_=new WeakMap,g=[],p=null,m=!1,y=null,v=null,E=null,b=null,w=null,S=null,P=null,I=new tt(0,0,0),x=0,R=!1,V=null,Z=null,L=null,X=null,k=null,ee.set(0,0,r.canvas.width,r.canvas.height),ce.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:fe,disable:Ge,bindFramebuffer:Le,drawBuffers:O,useProgram:He,setBlending:Ce,setMaterial:B,setFlipSided:ke,setCullFace:Xe,setLineWidth:dt,setPolygonOffset:A,setScissorTest:M,activeTexture:K,bindTexture:J,unbindTexture:te,compressedTexImage2D:ne,compressedTexImage3D:we,texImage2D:qe,texImage3D:Ue,updateUBOMapping:Ze,uniformBlockBinding:de,texStorage2D:ie,texStorage3D:At,texSubImage2D:Ie,texSubImage3D:re,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ye,scissor:Ee,viewport:Se,reset:ht}}function Pw(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new nt,h=new WeakMap;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return _?new OffscreenCanvas(A,M):sl("canvas")}function p(A,M,K,J){let te=1;const ne=dt(A);if((ne.width>J||ne.height>J)&&(te=J/Math.max(ne.width,ne.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const we=M?iu:Math.floor,Ie=we(te*ne.width),re=we(te*ne.height);f===void 0&&(f=g(Ie,re));const ue=K?g(Ie,re):f;return ue.width=Ie,ue.height=re,ue.getContext("2d").drawImage(A,0,0,Ie,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Ie+"x"+re+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){const M=dt(A);return Uf(M.width)&&Uf(M.height)}function y(A){return a?!1:A.wrapS!==jn||A.wrapT!==jn||A.minFilter!==Kt&&A.minFilter!==jt}function v(A,M){return A.generateMipmaps&&M&&A.minFilter!==Kt&&A.minFilter!==jt}function E(A){r.generateMipmap(A)}function b(A,M,K,J,te=!1){if(a===!1)return M;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=M;if(M===r.RED&&(K===r.FLOAT&&(ne=r.R32F),K===r.HALF_FLOAT&&(ne=r.R16F),K===r.UNSIGNED_BYTE&&(ne=r.R8)),M===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ne=r.R8UI),K===r.UNSIGNED_SHORT&&(ne=r.R16UI),K===r.UNSIGNED_INT&&(ne=r.R32UI),K===r.BYTE&&(ne=r.R8I),K===r.SHORT&&(ne=r.R16I),K===r.INT&&(ne=r.R32I)),M===r.RG&&(K===r.FLOAT&&(ne=r.RG32F),K===r.HALF_FLOAT&&(ne=r.RG16F),K===r.UNSIGNED_BYTE&&(ne=r.RG8)),M===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ne=r.RG8UI),K===r.UNSIGNED_SHORT&&(ne=r.RG16UI),K===r.UNSIGNED_INT&&(ne=r.RG32UI),K===r.BYTE&&(ne=r.RG8I),K===r.SHORT&&(ne=r.RG16I),K===r.INT&&(ne=r.RG32I)),M===r.RGBA){const we=te?Qc:xt.getTransfer(J);K===r.FLOAT&&(ne=r.RGBA32F),K===r.HALF_FLOAT&&(ne=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ne=we===Ct?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function w(A,M,K){return v(A,K)===!0||A.isFramebufferTexture&&A.minFilter!==Kt&&A.minFilter!==jt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function S(A){return A===Kt||A===Ip||A===uo?r.NEAREST:r.LINEAR}function P(A){const M=A.target;M.removeEventListener("dispose",P),x(M),M.isVideoTexture&&h.delete(M)}function I(A){const M=A.target;M.removeEventListener("dispose",I),V(M)}function x(A){const M=n.get(A);if(M.__webglInit===void 0)return;const K=A.source,J=d.get(K);if(J){const te=J[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(A),Object.keys(J).length===0&&d.delete(K)}n.remove(A)}function R(A){const M=n.get(A);r.deleteTexture(M.__webglTexture);const K=A.source,J=d.get(K);delete J[M.__cacheKey],o.memory.textures--}function V(A){const M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let te=0;te<M.__webglFramebuffer[J].length;te++)r.deleteFramebuffer(M.__webglFramebuffer[J][te]);else r.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)r.deleteFramebuffer(M.__webglFramebuffer[J]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=A.textures;for(let J=0,te=K.length;J<te;J++){const ne=n.get(K[J]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(K[J])}n.remove(A)}let Z=0;function L(){Z=0}function X(){const A=Z;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),Z+=1,A}function k(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function G(A,M){const K=n.get(A);if(A.isVideoTexture&&ke(A),A.isRenderTargetTexture===!1&&A.version>0&&K.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(K,A,M);return}}t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+M)}function Y(A,M){const K=n.get(A);if(A.version>0&&K.__version!==A.version){ce(K,A,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+M)}function j(A,M){const K=n.get(A);if(A.version>0&&K.__version!==A.version){ce(K,A,M);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+M)}function C(A,M){const K=n.get(A);if(A.version>0&&K.__version!==A.version){ye(K,A,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+M)}const Q={[La]:r.REPEAT,[jn]:r.CLAMP_TO_EDGE,[Lf]:r.MIRRORED_REPEAT},he={[Kt]:r.NEAREST,[Ip]:r.NEAREST_MIPMAP_NEAREST,[uo]:r.NEAREST_MIPMAP_LINEAR,[jt]:r.LINEAR,[ph]:r.LINEAR_MIPMAP_NEAREST,[Ur]:r.LINEAR_MIPMAP_LINEAR},be={[aM]:r.NEVER,[fM]:r.ALWAYS,[oM]:r.LESS,[c0]:r.LEQUAL,[lM]:r.EQUAL,[hM]:r.GEQUAL,[cM]:r.GREATER,[uM]:r.NOTEQUAL};function H(A,M,K){if(M.type===yi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jt||M.magFilter===ph||M.magFilter===uo||M.magFilter===Ur||M.minFilter===jt||M.minFilter===ph||M.minFilter===uo||M.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),K?(r.texParameteri(A,r.TEXTURE_WRAP_S,Q[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Q[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Q[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,he[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,he[M.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==jn||M.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,S(M.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,S(M.minFilter)),M.minFilter!==Kt&&M.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,be[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kt||M.minFilter!==uo&&M.minFilter!==Ur||M.type===yi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===rl&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ee(A,M){let K=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",P));const J=M.source;let te=d.get(J);te===void 0&&(te={},d.set(J,te));const ne=k(M);if(ne!==A.__cacheKey){te[ne]===void 0&&(te[ne]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,K=!0),te[ne].usedTimes++;const we=te[A.__cacheKey];we!==void 0&&(te[A.__cacheKey].usedTimes--,we.usedTimes===0&&R(M)),A.__cacheKey=ne,A.__webglTexture=te[ne].texture}return K}function ce(A,M,K){let J=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=r.TEXTURE_3D);const te=ee(A,M),ne=M.source;t.bindTexture(J,A.__webglTexture,r.TEXTURE0+K);const we=n.get(ne);if(ne.version!==we.__version||te===!0){t.activeTexture(r.TEXTURE0+K);const Ie=xt.getPrimaries(xt.workingColorSpace),re=M.colorSpace===yr?null:xt.getPrimaries(M.colorSpace),ue=M.colorSpace===yr||Ie===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ye=y(M)&&m(M.image)===!1;let ie=p(M.image,Ye,!1,i.maxTextureSize);ie=Xe(M,ie);const At=m(ie)||a,qe=s.convert(M.format,M.colorSpace);let Ue=s.convert(M.type),Ee=b(M.internalFormat,qe,Ue,M.colorSpace,M.isVideoTexture);H(J,M,At);let Se;const Ze=M.mipmaps,de=a&&M.isVideoTexture!==!0&&Ee!==l0,ht=we.__version===void 0||te===!0,U=ne.dataReady,oe=w(M,ie,At);if(M.isDepthTexture)Ee=r.DEPTH_COMPONENT,a?M.type===yi?Ee=r.DEPTH_COMPONENT32F:M.type===Nr?Ee=r.DEPTH_COMPONENT24:M.type===Fs?Ee=r.DEPTH24_STENCIL8:Ee=r.DEPTH_COMPONENT16:M.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Bs&&Ee===r.DEPTH_COMPONENT&&M.type!==vd&&M.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Nr,Ue=s.convert(M.type)),M.format===Ka&&Ee===r.DEPTH_COMPONENT&&(Ee=r.DEPTH_STENCIL,M.type!==Fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Fs,Ue=s.convert(M.type))),ht&&(de?t.texStorage2D(r.TEXTURE_2D,1,Ee,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Ee,ie.width,ie.height,0,qe,Ue,null));else if(M.isDataTexture)if(Ze.length>0&&At){de&&ht&&t.texStorage2D(r.TEXTURE_2D,oe,Ee,Ze[0].width,Ze[0].height);for(let q=0,se=Ze.length;q<se;q++)Se=Ze[q],de?U&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Se.width,Se.height,qe,Ue,Se.data):t.texImage2D(r.TEXTURE_2D,q,Ee,Se.width,Se.height,0,qe,Ue,Se.data);M.generateMipmaps=!1}else de?(ht&&t.texStorage2D(r.TEXTURE_2D,oe,Ee,ie.width,ie.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie.width,ie.height,qe,Ue,ie.data)):t.texImage2D(r.TEXTURE_2D,0,Ee,ie.width,ie.height,0,qe,Ue,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){de&&ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Ee,Ze[0].width,Ze[0].height,ie.depth);for(let q=0,se=Ze.length;q<se;q++)Se=Ze[q],M.format!==oi?qe!==null?de?U&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Se.width,Se.height,ie.depth,qe,Se.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Ee,Se.width,Se.height,ie.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Se.width,Se.height,ie.depth,qe,Ue,Se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,Ee,Se.width,Se.height,ie.depth,0,qe,Ue,Se.data)}else{de&&ht&&t.texStorage2D(r.TEXTURE_2D,oe,Ee,Ze[0].width,Ze[0].height);for(let q=0,se=Ze.length;q<se;q++)Se=Ze[q],M.format!==oi?qe!==null?de?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,Se.width,Se.height,qe,Se.data):t.compressedTexImage2D(r.TEXTURE_2D,q,Ee,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?U&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Se.width,Se.height,qe,Ue,Se.data):t.texImage2D(r.TEXTURE_2D,q,Ee,Se.width,Se.height,0,qe,Ue,Se.data)}else if(M.isDataArrayTexture)de?(ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Ee,ie.width,ie.height,ie.depth),U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,qe,Ue,ie.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ee,ie.width,ie.height,ie.depth,0,qe,Ue,ie.data);else if(M.isData3DTexture)de?(ht&&t.texStorage3D(r.TEXTURE_3D,oe,Ee,ie.width,ie.height,ie.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,qe,Ue,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Ee,ie.width,ie.height,ie.depth,0,qe,Ue,ie.data);else if(M.isFramebufferTexture){if(ht)if(de)t.texStorage2D(r.TEXTURE_2D,oe,Ee,ie.width,ie.height);else{let q=ie.width,se=ie.height;for(let _e=0;_e<oe;_e++)t.texImage2D(r.TEXTURE_2D,_e,Ee,q,se,0,qe,Ue,null),q>>=1,se>>=1}}else if(Ze.length>0&&At){if(de&&ht){const q=dt(Ze[0]);t.texStorage2D(r.TEXTURE_2D,oe,Ee,q.width,q.height)}for(let q=0,se=Ze.length;q<se;q++)Se=Ze[q],de?U&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,qe,Ue,Se):t.texImage2D(r.TEXTURE_2D,q,Ee,qe,Ue,Se);M.generateMipmaps=!1}else if(de){if(ht){const q=dt(ie);t.texStorage2D(r.TEXTURE_2D,oe,Ee,q.width,q.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,qe,Ue,ie)}else t.texImage2D(r.TEXTURE_2D,0,Ee,qe,Ue,ie);v(M,At)&&E(J),we.__version=ne.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ye(A,M,K){if(M.image.length!==6)return;const J=ee(A,M),te=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+K);const ne=n.get(te);if(te.version!==ne.__version||J===!0){t.activeTexture(r.TEXTURE0+K);const we=xt.getPrimaries(xt.workingColorSpace),Ie=M.colorSpace===yr?null:xt.getPrimaries(M.colorSpace),re=M.colorSpace===yr||we===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,Ye=M.image[0]&&M.image[0].isDataTexture,ie=[];for(let q=0;q<6;q++)!ue&&!Ye?ie[q]=p(M.image[q],!1,!0,i.maxCubemapSize):ie[q]=Ye?M.image[q].image:M.image[q],ie[q]=Xe(M,ie[q]);const At=ie[0],qe=m(At)||a,Ue=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type),Se=b(M.internalFormat,Ue,Ee,M.colorSpace),Ze=a&&M.isVideoTexture!==!0,de=ne.__version===void 0||J===!0,ht=te.dataReady;let U=w(M,At,qe);H(r.TEXTURE_CUBE_MAP,M,qe);let oe;if(ue){Ze&&de&&t.texStorage2D(r.TEXTURE_CUBE_MAP,U,Se,At.width,At.height);for(let q=0;q<6;q++){oe=ie[q].mipmaps;for(let se=0;se<oe.length;se++){const _e=oe[se];M.format!==oi?Ue!==null?Ze?ht&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,se,0,0,_e.width,_e.height,Ue,_e.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,se,Se,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?ht&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,se,0,0,_e.width,_e.height,Ue,Ee,_e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,se,Se,_e.width,_e.height,0,Ue,Ee,_e.data)}}}else{if(oe=M.mipmaps,Ze&&de){oe.length>0&&U++;const q=dt(ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,U,Se,q.width,q.height)}for(let q=0;q<6;q++)if(Ye){Ze?ht&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ie[q].width,ie[q].height,Ue,Ee,ie[q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Se,ie[q].width,ie[q].height,0,Ue,Ee,ie[q].data);for(let se=0;se<oe.length;se++){const $e=oe[se].image[q].image;Ze?ht&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,se+1,0,0,$e.width,$e.height,Ue,Ee,$e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,se+1,Se,$e.width,$e.height,0,Ue,Ee,$e.data)}}else{Ze?ht&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ue,Ee,ie[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Se,Ue,Ee,ie[q]);for(let se=0;se<oe.length;se++){const _e=oe[se];Ze?ht&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,se+1,0,0,Ue,Ee,_e.image[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,se+1,Se,Ue,Ee,_e.image[q])}}}v(M,qe)&&E(r.TEXTURE_CUBE_MAP),ne.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ve(A,M,K,J,te,ne){const we=s.convert(K.format,K.colorSpace),Ie=s.convert(K.type),re=b(K.internalFormat,we,Ie,K.colorSpace);if(!n.get(M).__hasExternalTextures){const Ye=Math.max(1,M.width>>ne),ie=Math.max(1,M.height>>ne);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,ne,re,Ye,ie,M.depth,0,we,Ie,null):t.texImage2D(te,ne,re,Ye,ie,0,we,Ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),B(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,te,n.get(K).__webglTexture,0,Ce(M)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,te,n.get(K).__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(A,M,K){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let J=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(K||B(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===yi?J=r.DEPTH_COMPONENT32F:te.type===Nr&&(J=r.DEPTH_COMPONENT24));const ne=Ce(M);B(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,J,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,J,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,J,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const J=Ce(M);K&&B(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,M.width,M.height):B(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const J=M.textures;for(let te=0;te<J.length;te++){const ne=J[te],we=s.convert(ne.format,ne.colorSpace),Ie=s.convert(ne.type),re=b(ne.internalFormat,we,Ie,ne.colorSpace),ue=Ce(M);K&&B(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,re,M.width,M.height):B(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,re,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,re,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ge(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture,te=Ce(M);if(M.depthTexture.format===Bs)B(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(M.depthTexture.format===Ka)B(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Le(A){const M=n.get(A),K=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ge(M.__webglFramebuffer,A)}else if(K){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=r.createRenderbuffer(),fe(M.__webglDepthbuffer[J],A,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),fe(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function O(A,M,K){const J=n.get(A);M!==void 0&&ve(J.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Le(A)}function He(A){const M=A.texture,K=n.get(A),J=n.get(M);A.addEventListener("dispose",I);const te=A.textures,ne=A.isWebGLCubeRenderTarget===!0,we=te.length>1,Ie=m(A)||a;if(we||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=M.version,o.memory.textures++),ne){K.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[re]=[];for(let ue=0;ue<M.mipmaps.length;ue++)K.__webglFramebuffer[re][ue]=r.createFramebuffer()}else K.__webglFramebuffer[re]=r.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)K.__webglFramebuffer[re]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(we)if(i.drawBuffers)for(let re=0,ue=te.length;re<ue;re++){const Ye=n.get(te[re]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&B(A)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let re=0;re<te.length;re++){const ue=te[re];K.__webglColorRenderbuffer[re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[re]);const Ye=s.convert(ue.format,ue.colorSpace),ie=s.convert(ue.type),At=b(ue.internalFormat,Ye,ie,ue.colorSpace,A.isXRRenderTarget===!0),qe=Ce(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,At,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,K.__webglColorRenderbuffer[re])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),fe(K.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),H(r.TEXTURE_CUBE_MAP,M,Ie);for(let re=0;re<6;re++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)ve(K.__webglFramebuffer[re][ue],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else ve(K.__webglFramebuffer[re],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);v(M,Ie)&&E(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let re=0,ue=te.length;re<ue;re++){const Ye=te[re],ie=n.get(Ye);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),H(r.TEXTURE_2D,Ye,Ie),ve(K.__webglFramebuffer,A,Ye,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,0),v(Ye,Ie)&&E(r.TEXTURE_2D)}t.unbindTexture()}else{let re=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?re=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,J.__webglTexture),H(re,M,Ie),a&&M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)ve(K.__webglFramebuffer[ue],A,M,r.COLOR_ATTACHMENT0,re,ue);else ve(K.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,re,0);v(M,Ie)&&E(re),t.unbindTexture()}A.depthBuffer&&Le(A)}function ge(A){const M=m(A)||a,K=A.textures;for(let J=0,te=K.length;J<te;J++){const ne=K[J];if(v(ne,M)){const we=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ie=n.get(ne).__webglTexture;t.bindTexture(we,Ie),E(we),t.unbindTexture()}}}function Be(A){if(a&&A.samples>0&&B(A)===!1){const M=A.textures,K=A.width,J=A.height;let te=r.COLOR_BUFFER_BIT;const ne=[],we=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=n.get(A),re=M.length>1;if(re)for(let ue=0;ue<M.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){ne.push(r.COLOR_ATTACHMENT0+ue),A.depthBuffer&&ne.push(we);const Ye=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(Ye===!1&&(A.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),re&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[ue]),Ye===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[we]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[we])),re){const ie=n.get(M[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,K,J,0,0,K,J,te,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),re)for(let ue=0;ue<M.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[ue]);const Ye=n.get(M[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,Ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function Ce(A){return Math.min(i.maxSamples,A.samples)}function B(A){const M=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ke(A){const M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Xe(A,M){const K=A.colorSpace,J=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===If||K!==Kr&&K!==yr&&(xt.getTransfer(K)===Ct?a===!1?e.has("EXT_sRGB")===!0&&J===oi?(A.format=If,A.minFilter=jt,A.generateMipmaps=!1):M=f0.sRGBToLinear(M):(J!==oi||te!==Hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),M}function dt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=C,this.rebindTextures=O,this.setupRenderTarget=He,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=B}function Lw(r,e,t){const n=t.isWebGL2;function i(s,o=yr){let a;const l=xt.getTransfer(o);if(s===Hr)return r.UNSIGNED_BYTE;if(s===n0)return r.UNSIGNED_SHORT_4_4_4_4;if(s===i0)return r.UNSIGNED_SHORT_5_5_5_1;if(s===jy)return r.BYTE;if(s===Ky)return r.SHORT;if(s===vd)return r.UNSIGNED_SHORT;if(s===t0)return r.INT;if(s===Nr)return r.UNSIGNED_INT;if(s===yi)return r.FLOAT;if(s===rl)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Zy)return r.ALPHA;if(s===oi)return r.RGBA;if(s===Jy)return r.LUMINANCE;if(s===Qy)return r.LUMINANCE_ALPHA;if(s===Bs)return r.DEPTH_COMPONENT;if(s===Ka)return r.DEPTH_STENCIL;if(s===If)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===r0)return r.RED;if(s===s0)return r.RED_INTEGER;if(s===eM)return r.RG;if(s===a0)return r.RG_INTEGER;if(s===o0)return r.RGBA_INTEGER;if(s===mh||s===_h||s===gh||s===vh)if(l===Ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===mh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_h)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===mh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_h)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Up||s===Np||s===Op||s===Fp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Up)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Np)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Op)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===l0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Bp||s===kp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Bp)return l===Ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===kp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zp||s===Vp||s===Gp||s===Hp||s===Wp||s===Xp||s===qp||s===Yp||s===$p||s===jp||s===Kp||s===Zp||s===Jp||s===Qp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===zp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$p)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qp)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xh||s===em||s===tm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===xh)return l===Ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===em)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===tm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===tM||s===nm||s===im||s===rm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===xh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===nm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===im)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fs?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Dw extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pc extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iw={type:"move"};class Xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iw)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new un,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new cr({extensions:{fragDepth:!0},vertexShader:Uw,fragmentShader:Nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ui(new Hu(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Fw extends Qa{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new Ow,p=t.getContextAttributes();let m=null,y=null;const v=[],E=[],b=new nt;let w=null;const S=new qn;S.layers.enable(1),S.viewport=new Tt;const P=new qn;P.layers.enable(2),P.viewport=new Tt;const I=[S,P],x=new Dw;x.layers.enable(1),x.layers.enable(2);let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=v[H];return ee===void 0&&(ee=new Xh,v[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=v[H];return ee===void 0&&(ee=new Xh,v[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=v[H];return ee===void 0&&(ee=new Xh,v[H]=ee),ee.getHandSpace()};function Z(H){const ee=E.indexOf(H.inputSource);if(ee===-1)return;const ce=v[ee];ce!==void 0&&(ce.update(H.inputSource,H.frame,c||o),ce.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",X);for(let H=0;H<v.length;H++){const ee=E[H];ee!==null&&(E[H]=null,v[H].disconnect(ee))}R=null,V=null,g.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,y=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",L),i.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Gs(d.framebufferWidth,d.framebufferHeight,{format:oi,type:Hr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,ce=null,ye=null;p.depth&&(ye=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?Ka:Bs,ce=p.stencil?Fs:Nr);const ve={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ve),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Gs(f.textureWidth,f.textureHeight,{format:oi,type:Hr,depthTexture:new T0(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const fe=e.properties.get(y);fe.__ignoreDepthValues=f.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(H){for(let ee=0;ee<H.removed.length;ee++){const ce=H.removed[ee],ye=E.indexOf(ce);ye>=0&&(E[ye]=null,v[ye].disconnect(ce))}for(let ee=0;ee<H.added.length;ee++){const ce=H.added[ee];let ye=E.indexOf(ce);if(ye===-1){for(let fe=0;fe<v.length;fe++)if(fe>=E.length){E.push(ce),ye=fe;break}else if(E[fe]===null){E[fe]=ce,ye=fe;break}if(ye===-1)break}const ve=v[ye];ve&&ve.connect(ce)}}const k=new F,G=new F;function Y(H,ee,ce){k.setFromMatrixPosition(ee.matrixWorld),G.setFromMatrixPosition(ce.matrixWorld);const ye=k.distanceTo(G),ve=ee.projectionMatrix.elements,fe=ce.projectionMatrix.elements,Ge=ve[14]/(ve[10]-1),Le=ve[14]/(ve[10]+1),O=(ve[9]+1)/ve[5],He=(ve[9]-1)/ve[5],ge=(ve[8]-1)/ve[0],Be=(fe[8]+1)/fe[0],Ce=Ge*ge,B=Ge*Be,ke=ye/(-ge+Be),Xe=ke*-ge;ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Xe),H.translateZ(ke),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const dt=Ge+ke,A=Le+ke,M=Ce-Xe,K=B+(ye-Xe),J=O*Le/A*dt,te=He*Le/A*dt;H.projectionMatrix.makePerspective(M,K,J,te,dt,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function j(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;g.texture!==null&&(H.near=g.depthNear,H.far=g.depthFar),x.near=P.near=S.near=H.near,x.far=P.far=S.far=H.far,(R!==x.near||V!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,V=x.far,S.near=R,S.far=V,P.near=R,P.far=V,S.updateProjectionMatrix(),P.updateProjectionMatrix(),H.updateProjectionMatrix());const ee=H.parent,ce=x.cameras;j(x,ee);for(let ye=0;ye<ce.length;ye++)j(ce[ye],ee);ce.length===2?Y(x,S,P):x.projectionMatrix.copy(S.projectionMatrix),C(H,x,ee)};function C(H,ee,ce){ce===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(ce.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Za*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null};let Q=null;function he(H,ee){if(u=ee.getViewerPose(c||o),_=ee,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ye=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,ye=!0);for(let fe=0;fe<ce.length;fe++){const Ge=ce[fe];let Le=null;if(d!==null)Le=d.getViewport(Ge);else{const He=h.getViewSubImage(f,Ge);Le=He.viewport,fe===0&&(e.setRenderTargetTextures(y,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(y))}let O=I[fe];O===void 0&&(O=new qn,O.layers.enable(fe),O.viewport=new Tt,I[fe]=O),O.matrix.fromArray(Ge.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Ge.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Le.x,Le.y,Le.width,Le.height),fe===0&&(x.matrix.copy(O.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ye===!0&&x.cameras.push(O)}const ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const fe=h.getDepthInformation(ce[0]);fe&&fe.isValid&&fe.texture&&g.init(e,fe,i.renderState)}}for(let ce=0;ce<v.length;ce++){const ye=E[ce],ve=v[ce];ye!==null&&ve!==void 0&&ve.update(ye,ee,c||o)}g.render(e,x),Q&&Q(H,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}const be=new S0;be.setAnimationLoop(he),this.setAnimationLoop=function(H){Q=H},this.dispose=function(){}}}const ls=new Oi,Bw=new ct;function kw(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,x0(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,E)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===On&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===On&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),v=y.envMap,E=y.envMapRotation;if(v&&(p.envMap.value=v,ls.copy(E),ls.x*=-1,ls.y*=-1,ls.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),p.envMapRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(ls)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const b=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*b,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===On&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zw(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const E=v.program;n.uniformBlockBinding(y,E)}function c(y,v){let E=i[y.id];E===void 0&&(_(y),E=u(y),i[y.id]=E,y.addEventListener("dispose",p));const b=v.program;n.updateUBOMapping(y,b);const w=e.render.frame;s[y.id]!==w&&(f(y),s[y.id]=w)}function u(y){const v=h();y.__bindingPointIndex=v;const E=r.createBuffer(),b=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,E),E}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=i[y.id],E=y.uniforms,b=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,S=E.length;w<S;w++){const P=Array.isArray(E[w])?E[w]:[E[w]];for(let I=0,x=P.length;I<x;I++){const R=P[I];if(d(R,w,I,b)===!0){const V=R.__offset,Z=Array.isArray(R.value)?R.value:[R.value];let L=0;for(let X=0;X<Z.length;X++){const k=Z[X],G=g(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,V+L,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,v,E,b){const w=y.value,S=v+"_"+E;if(b[S]===void 0)return typeof w=="number"||typeof w=="boolean"?b[S]=w:b[S]=w.clone(),!0;{const P=b[S];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return b[S]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(y){const v=y.uniforms;let E=0;const b=16;for(let S=0,P=v.length;S<P;S++){const I=Array.isArray(v[S])?v[S]:[v[S]];for(let x=0,R=I.length;x<R;x++){const V=I[x],Z=Array.isArray(V.value)?V.value:[V.value];for(let L=0,X=Z.length;L<X;L++){const k=Z[L],G=g(k),Y=E%b;Y!==0&&b-Y<G.boundary&&(E+=b-Y),V.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=G.storage}}}const w=E%b;return w>0&&(E+=b-w),y.__size=E,y.__cache={},this}function g(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class P0{constructor(e={}){const{canvas:t=AM(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bi,this._useLegacyLights=!1,this.toneMapping=Gr,this.toneMappingExposure=1;const v=this;let E=!1,b=0,w=0,S=null,P=-1,I=null;const x=new Tt,R=new Tt;let V=null;const Z=new tt(0);let L=0,X=t.width,k=t.height,G=1,Y=null,j=null;const C=new Tt(0,0,X,k),Q=new Tt(0,0,X,k);let he=!1;const be=new Ed;let H=!1,ee=!1,ce=null;const ye=new ct,ve=new nt,fe=new F,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return S===null?G:1}let O=n;function He(T,N){for(let $=0;$<T.length;$++){const W=T[$],z=t.getContext(W,N);if(z!==null)return z}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gd}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",oe,!1),O===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),O=He(N,T),O===null)throw He(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ge,Be,Ce,B,ke,Xe,dt,A,M,K,J,te,ne,we,Ie,re,ue,Ye,ie,At,qe,Ue,Ee,Se;function Ze(){ge=new qT(O),Be=new zT(O,ge,e),ge.init(Be),Ue=new Lw(O,ge,Be),Ce=new Cw(O,ge,Be),B=new jT(O),ke=new mw,Xe=new Pw(O,ge,Ce,ke,Be,Ue,B),dt=new GT(v),A=new XT(v),M=new tS(O,Be),Ee=new BT(O,ge,M,Be),K=new YT(O,M,B,Ee),J=new QT(O,K,M,B),ie=new JT(O,Be,Xe),re=new VT(ke),te=new pw(v,dt,A,ge,Be,Ee,re),ne=new kw(v,ke),we=new gw,Ie=new Ew(ge,Be),Ye=new FT(v,dt,A,Ce,J,f,l),ue=new Rw(v,J,Be),Se=new zw(O,B,Be,Ce),At=new kT(O,ge,B,Be),qe=new $T(O,ge,B,Be),B.programs=te.programs,v.capabilities=Be,v.extensions=ge,v.properties=ke,v.renderLists=we,v.shadowMap=ue,v.state=Ce,v.info=B}Ze();const de=new Fw(v,O);this.xr=de,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(X,k,!1))},this.getSize=function(T){return T.set(X,k)},this.setSize=function(T,N,$=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,k=N,t.width=Math.floor(T*G),t.height=Math.floor(N*G),$===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(X*G,k*G).floor()},this.setDrawingBufferSize=function(T,N,$){X=T,k=N,G=$,t.width=Math.floor(T*$),t.height=Math.floor(N*$),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(C)},this.setViewport=function(T,N,$,W){T.isVector4?C.set(T.x,T.y,T.z,T.w):C.set(T,N,$,W),Ce.viewport(x.copy(C).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,N,$,W){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,N,$,W),Ce.scissor(R.copy(Q).multiplyScalar(G).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(T){Ce.setScissorTest(he=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(T=!0,N=!0,$=!0){let W=0;if(T){let z=!1;if(S!==null){const le=S.texture.format;z=le===o0||le===a0||le===s0}if(z){const le=S.texture.type,Te=le===Hr||le===Nr||le===vd||le===Fs||le===n0||le===i0,ze=Ye.getClearColor(),Re=Ye.getClearAlpha(),De=ze.r,Ve=ze.g,Ke=ze.b;Te?(d[0]=De,d[1]=Ve,d[2]=Ke,d[3]=Re,O.clearBufferuiv(O.COLOR,0,d)):(_[0]=De,_[1]=Ve,_[2]=Ke,_[3]=Re,O.clearBufferiv(O.COLOR,0,_))}else W|=O.COLOR_BUFFER_BIT}N&&(W|=O.DEPTH_BUFFER_BIT),$&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),we.dispose(),Ie.dispose(),ke.dispose(),dt.dispose(),A.dispose(),J.dispose(),Ee.dispose(),Se.dispose(),te.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ae),de.removeEventListener("sessionend",Ne),ce&&(ce.dispose(),ce=null),ae.stop()};function ht(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=B.autoReset,N=ue.enabled,$=ue.autoUpdate,W=ue.needsUpdate,z=ue.type;Ze(),B.autoReset=T,ue.enabled=N,ue.autoUpdate=$,ue.needsUpdate=W,ue.type=z}function oe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function q(T){const N=T.target;N.removeEventListener("dispose",q),se(N)}function se(T){_e(T),ke.remove(T)}function _e(T){const N=ke.get(T).programs;N!==void 0&&(N.forEach(function($){te.releaseProgram($)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,$,W,z,le){N===null&&(N=Ge);const Te=z.isMesh&&z.matrixWorld.determinant()<0,ze=wt(T,N,$,W,z);Ce.setMaterial(W,Te);let Re=$.index,De=1;if(W.wireframe===!0){if(Re=K.getWireframeAttribute($),Re===void 0)return;De=2}const Ve=$.drawRange,Ke=$.attributes.position;let Pt=Ve.start*De,Xt=(Ve.start+Ve.count)*De;le!==null&&(Pt=Math.max(Pt,le.start*De),Xt=Math.min(Xt,(le.start+le.count)*De)),Re!==null?(Pt=Math.max(Pt,0),Xt=Math.min(Xt,Re.count)):Ke!=null&&(Pt=Math.max(Pt,0),Xt=Math.min(Xt,Ke.count));const _t=Xt-Pt;if(_t<0||_t===1/0)return;Ee.setup(z,W,ze,$,Re);let xn,yt=At;if(Re!==null&&(xn=M.get(Re),yt=qe,yt.setIndex(xn)),z.isMesh)W.wireframe===!0?(Ce.setLineWidth(W.wireframeLinewidth*Le()),yt.setMode(O.LINES)):yt.setMode(O.TRIANGLES);else if(z.isLine){let We=W.linewidth;We===void 0&&(We=1),Ce.setLineWidth(We*Le()),z.isLineSegments?yt.setMode(O.LINES):z.isLineLoop?yt.setMode(O.LINE_LOOP):yt.setMode(O.LINE_STRIP)}else z.isPoints?yt.setMode(O.POINTS):z.isSprite&&yt.setMode(O.TRIANGLES);if(z.isBatchedMesh)yt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)yt.renderInstances(Pt,_t,z.count);else if($.isInstancedBufferGeometry){const We=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ju=Math.min($.instanceCount,We);yt.renderInstances(Pt,_t,ju)}else yt.render(Pt,_t)};function $e(T,N,$){T.transparent===!0&&T.side===er&&T.forceSinglePass===!1?(T.side=On,T.needsUpdate=!0,bt(T,N,$),T.side=$r,T.needsUpdate=!0,bt(T,N,$),T.side=er):bt(T,N,$)}this.compile=function(T,N,$=null){$===null&&($=T),p=Ie.get($),p.init(),y.push(p),$.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==$&&T.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(v._useLegacyLights);const W=new Set;return T.traverse(function(z){const le=z.material;if(le)if(Array.isArray(le))for(let Te=0;Te<le.length;Te++){const ze=le[Te];$e(ze,$,z),W.add(ze)}else $e(le,$,z),W.add(le)}),y.pop(),p=null,W},this.compileAsync=function(T,N,$=null){const W=this.compile(T,N,$);return new Promise(z=>{function le(){if(W.forEach(function(Te){ke.get(Te).currentProgram.isReady()&&W.delete(Te)}),W.size===0){z(T);return}setTimeout(le,10)}ge.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ft=null;function Pe(T){ft&&ft(T)}function Ae(){ae.stop()}function Ne(){ae.start()}const ae=new S0;ae.setAnimationLoop(Pe),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(T){ft=T,de.setAnimationLoop(T),T===null?ae.stop():ae.start()},de.addEventListener("sessionstart",Ae),de.addEventListener("sessionend",Ne),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(N),N=de.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,N,S),p=Ie.get(T,y.length),p.init(),y.push(p),ye.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),be.setFromProjectionMatrix(ye),ee=this.localClippingEnabled,H=re.init(this.clippingPlanes,ee),g=we.get(T,m.length),g.init(),m.push(g),Fe(T,N,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Y,j),this.info.render.frame++,H===!0&&re.beginShadows();const $=p.state.shadowsArray;if(ue.render($,T,N),H===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1)&&Ye.render(g,T),p.setupLights(v._useLegacyLights),N.isArrayCamera){const W=N.cameras;for(let z=0,le=W.length;z<le;z++){const Te=W[z];Oe(g,T,Te,Te.viewport)}}else Oe(g,T,N);S!==null&&(Xe.updateMultisampleRenderTarget(S),Xe.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(v,T,N),Ee.resetDefaultState(),P=-1,I=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Fe(T,N,$,W){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||be.intersectsSprite(T)){W&&fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ye);const Te=J.update(T),ze=T.material;ze.visible&&g.push(T,Te,ze,$,fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||be.intersectsObject(T))){const Te=J.update(T),ze=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),fe.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),fe.copy(Te.boundingSphere.center)),fe.applyMatrix4(T.matrixWorld).applyMatrix4(ye)),Array.isArray(ze)){const Re=Te.groups;for(let De=0,Ve=Re.length;De<Ve;De++){const Ke=Re[De],Pt=ze[Ke.materialIndex];Pt&&Pt.visible&&g.push(T,Te,Pt,$,fe.z,Ke)}}else ze.visible&&g.push(T,Te,ze,$,fe.z,null)}}const le=T.children;for(let Te=0,ze=le.length;Te<ze;Te++)Fe(le[Te],N,$,W)}function Oe(T,N,$,W){const z=T.opaque,le=T.transmissive,Te=T.transparent;p.setupLightsView($),H===!0&&re.setGlobalState(v.clippingPlanes,$),le.length>0&&je(z,le,N,$),W&&Ce.viewport(x.copy(W)),z.length>0&&It(z,N,$),le.length>0&&It(le,N,$),Te.length>0&&It(Te,N,$),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function je(T,N,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const le=Be.isWebGL2;ce===null&&(ce=new Gs(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?rl:Hr,minFilter:Ur,samples:le?4:0})),v.getDrawingBufferSize(ve),le?ce.setSize(ve.x,ve.y):ce.setSize(iu(ve.x),iu(ve.y));const Te=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(Z),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const ze=v.toneMapping;v.toneMapping=Gr,It(T,$,W),Xe.updateMultisampleRenderTarget(ce),Xe.updateRenderTargetMipmap(ce);let Re=!1;for(let De=0,Ve=N.length;De<Ve;De++){const Ke=N[De],Pt=Ke.object,Xt=Ke.geometry,_t=Ke.material,xn=Ke.group;if(_t.side===er&&Pt.layers.test(W.layers)){const yt=_t.side;_t.side=On,_t.needsUpdate=!0,rt(Pt,$,W,Xt,_t,xn),_t.side=yt,_t.needsUpdate=!0,Re=!0}}Re===!0&&(Xe.updateMultisampleRenderTarget(ce),Xe.updateRenderTargetMipmap(ce)),v.setRenderTarget(Te),v.setClearColor(Z,L),v.toneMapping=ze}function It(T,N,$){const W=N.isScene===!0?N.overrideMaterial:null;for(let z=0,le=T.length;z<le;z++){const Te=T[z],ze=Te.object,Re=Te.geometry,De=W===null?Te.material:W,Ve=Te.group;ze.layers.test($.layers)&&rt(ze,N,$,Re,De,Ve)}}function rt(T,N,$,W,z,le){T.onBeforeRender(v,N,$,W,z,le),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,N,$,W,T,le),z.transparent===!0&&z.side===er&&z.forceSinglePass===!1?(z.side=On,z.needsUpdate=!0,v.renderBufferDirect($,N,W,z,T,le),z.side=$r,z.needsUpdate=!0,v.renderBufferDirect($,N,W,z,T,le),z.side=er):v.renderBufferDirect($,N,W,z,T,le),T.onAfterRender(v,N,$,W,z,le)}function bt(T,N,$){N.isScene!==!0&&(N=Ge);const W=ke.get(T),z=p.state.lights,le=p.state.shadowsArray,Te=z.state.version,ze=te.getParameters(T,z.state,le,N,$),Re=te.getProgramCacheKey(ze);let De=W.programs;W.environment=T.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(T.isMeshStandardMaterial?A:dt).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",q),De=new Map,W.programs=De);let Ve=De.get(Re);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===Te)return Rt(T,ze),Ve}else ze.uniforms=te.getUniforms(T),T.onBuild($,ze,v),T.onBeforeCompile(ze,v),Ve=te.acquireProgram(ze,Re),De.set(Re,Ve),W.uniforms=ze.uniforms;const Ke=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ke.clippingPlanes=re.uniform),Rt(T,ze),W.needsLights=Bn(T),W.lightsStateVersion=Te,W.needsLights&&(Ke.ambientLightColor.value=z.state.ambient,Ke.lightProbe.value=z.state.probe,Ke.directionalLights.value=z.state.directional,Ke.directionalLightShadows.value=z.state.directionalShadow,Ke.spotLights.value=z.state.spot,Ke.spotLightShadows.value=z.state.spotShadow,Ke.rectAreaLights.value=z.state.rectArea,Ke.ltc_1.value=z.state.rectAreaLTC1,Ke.ltc_2.value=z.state.rectAreaLTC2,Ke.pointLights.value=z.state.point,Ke.pointLightShadows.value=z.state.pointShadow,Ke.hemisphereLights.value=z.state.hemi,Ke.directionalShadowMap.value=z.state.directionalShadowMap,Ke.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ke.spotShadowMap.value=z.state.spotShadowMap,Ke.spotLightMatrix.value=z.state.spotLightMatrix,Ke.spotLightMap.value=z.state.spotLightMap,Ke.pointShadowMap.value=z.state.pointShadowMap,Ke.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ve,W.uniformsList=null,Ve}function Wt(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Oc.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Rt(T,N){const $=ke.get(T);$.outputColorSpace=N.outputColorSpace,$.batching=N.batching,$.instancing=N.instancing,$.instancingColor=N.instancingColor,$.instancingMorph=N.instancingMorph,$.skinning=N.skinning,$.morphTargets=N.morphTargets,$.morphNormals=N.morphNormals,$.morphColors=N.morphColors,$.morphTargetsCount=N.morphTargetsCount,$.numClippingPlanes=N.numClippingPlanes,$.numIntersection=N.numClipIntersection,$.vertexAlphas=N.vertexAlphas,$.vertexTangents=N.vertexTangents,$.toneMapping=N.toneMapping}function wt(T,N,$,W,z){N.isScene!==!0&&(N=Ge),Xe.resetTextureUnits();const le=N.fog,Te=W.isMeshStandardMaterial?N.environment:null,ze=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Kr,Re=(W.isMeshStandardMaterial?A:dt).get(W.envMap||Te),De=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ve=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ke=!!$.morphAttributes.position,Pt=!!$.morphAttributes.normal,Xt=!!$.morphAttributes.color;let _t=Gr;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(_t=v.toneMapping);const xn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,yt=xn!==void 0?xn.length:0,We=ke.get(W),ju=p.state.lights;if(H===!0&&(ee===!0||T!==I)){const ti=T===I&&W.id===P;re.setState(W,T,ti)}let Lt=!1;W.version===We.__version?(We.needsLights&&We.lightsStateVersion!==ju.state.version||We.outputColorSpace!==ze||z.isBatchedMesh&&We.batching===!1||!z.isBatchedMesh&&We.batching===!0||z.isInstancedMesh&&We.instancing===!1||!z.isInstancedMesh&&We.instancing===!0||z.isSkinnedMesh&&We.skinning===!1||!z.isSkinnedMesh&&We.skinning===!0||z.isInstancedMesh&&We.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&We.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&We.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&We.instancingMorph===!1&&z.morphTexture!==null||We.envMap!==Re||W.fog===!0&&We.fog!==le||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==re.numPlanes||We.numIntersection!==re.numIntersection)||We.vertexAlphas!==De||We.vertexTangents!==Ve||We.morphTargets!==Ke||We.morphNormals!==Pt||We.morphColors!==Xt||We.toneMapping!==_t||Be.isWebGL2===!0&&We.morphTargetsCount!==yt)&&(Lt=!0):(Lt=!0,We.__version=W.version);let Qr=We.currentProgram;Lt===!0&&(Qr=bt(W,N,z));let Nd=!1,so=!1,Ku=!1;const hn=Qr.getUniforms(),es=We.uniforms;if(Ce.useProgram(Qr.program)&&(Nd=!0,so=!0,Ku=!0),W.id!==P&&(P=W.id,so=!0),Nd||I!==T){hn.setValue(O,"projectionMatrix",T.projectionMatrix),hn.setValue(O,"viewMatrix",T.matrixWorldInverse);const ti=hn.map.cameraPosition;ti!==void 0&&ti.setValue(O,fe.setFromMatrixPosition(T.matrixWorld)),Be.logarithmicDepthBuffer&&hn.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&hn.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),I!==T&&(I=T,so=!0,Ku=!0)}if(z.isSkinnedMesh){hn.setOptional(O,z,"bindMatrix"),hn.setOptional(O,z,"bindMatrixInverse");const ti=z.skeleton;ti&&(Be.floatVertexTextures?(ti.boneTexture===null&&ti.computeBoneTexture(),hn.setValue(O,"boneTexture",ti.boneTexture,Xe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(hn.setOptional(O,z,"batchingTexture"),hn.setValue(O,"batchingTexture",z._matricesTexture,Xe));const Zu=$.morphAttributes;if((Zu.position!==void 0||Zu.normal!==void 0||Zu.color!==void 0&&Be.isWebGL2===!0)&&ie.update(z,$,Qr),(so||We.receiveShadow!==z.receiveShadow)&&(We.receiveShadow=z.receiveShadow,hn.setValue(O,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(es.envMap.value=Re,es.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),so&&(hn.setValue(O,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&mt(es,Ku),le&&W.fog===!0&&ne.refreshFogUniforms(es,le),ne.refreshMaterialUniforms(es,W,G,k,ce),Oc.upload(O,Wt(We),es,Xe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Oc.upload(O,Wt(We),es,Xe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&hn.setValue(O,"center",z.center),hn.setValue(O,"modelViewMatrix",z.modelViewMatrix),hn.setValue(O,"normalMatrix",z.normalMatrix),hn.setValue(O,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ti=W.uniformsGroups;for(let Ju=0,J0=ti.length;Ju<J0;Ju++)if(Be.isWebGL2){const Od=ti[Ju];Se.update(Od,Qr),Se.bind(Od,Qr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qr}function mt(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Bn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,N,$){ke.get(T.texture).__webglTexture=N,ke.get(T.depthTexture).__webglTexture=$;const W=ke.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=$===void 0,W.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const $=ke.get(T);$.__webglFramebuffer=N,$.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,$=0){S=T,b=N,w=$;let W=!0,z=null,le=!1,Te=!1;if(T){const Re=ke.get(T);Re.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(O.FRAMEBUFFER,null),W=!1):Re.__webglFramebuffer===void 0?Xe.setupRenderTarget(T):Re.__hasExternalTextures&&Xe.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);const De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Te=!0);const Ve=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[N])?z=Ve[N][$]:z=Ve[N],le=!0):Be.isWebGL2&&T.samples>0&&Xe.useMultisampledRTT(T)===!1?z=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?z=Ve[$]:z=Ve,x.copy(T.viewport),R.copy(T.scissor),V=T.scissorTest}else x.copy(C).multiplyScalar(G).floor(),R.copy(Q).multiplyScalar(G).floor(),V=he;if(Ce.bindFramebuffer(O.FRAMEBUFFER,z)&&Be.drawBuffers&&W&&Ce.drawBuffers(T,z),Ce.viewport(x),Ce.scissor(R),Ce.setScissorTest(V),le){const Re=ke.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,$)}else if(Te){const Re=ke.get(T.texture),De=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,$||0,De)}P=-1},this.readRenderTargetPixels=function(T,N,$,W,z,le,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(ze=ze[Te]),ze){Ce.bindFramebuffer(O.FRAMEBUFFER,ze);try{const Re=T.texture,De=Re.format,Ve=Re.type;if(De!==oi&&Ue.convert(De)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ve===rl&&(ge.has("EXT_color_buffer_half_float")||Be.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Ve!==Hr&&Ue.convert(Ve)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===yi&&(Be.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-W&&$>=0&&$<=T.height-z&&O.readPixels(N,$,W,z,Ue.convert(De),Ue.convert(Ve),le)}finally{const Re=S!==null?ke.get(S).__webglFramebuffer:null;Ce.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(T,N,$=0){const W=Math.pow(2,-$),z=Math.floor(N.image.width*W),le=Math.floor(N.image.height*W);Xe.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,T.x,T.y,z,le),Ce.unbindTexture()},this.copyTextureToTexture=function(T,N,$,W=0){const z=N.image.width,le=N.image.height,Te=Ue.convert($.format),ze=Ue.convert($.type);Xe.setTexture2D($,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,W,T.x,T.y,z,le,Te,ze,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,W,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,Te,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,W,T.x,T.y,Te,ze,N.image),W===0&&$.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(T,N,$,W,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=Math.round(T.max.x-T.min.x),Te=Math.round(T.max.y-T.min.y),ze=T.max.z-T.min.z+1,Re=Ue.convert(W.format),De=Ue.convert(W.type);let Ve;if(W.isData3DTexture)Xe.setTexture3D(W,0),Ve=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Xe.setTexture2DArray(W,0),Ve=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Ke=O.getParameter(O.UNPACK_ROW_LENGTH),Pt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Xt=O.getParameter(O.UNPACK_SKIP_PIXELS),_t=O.getParameter(O.UNPACK_SKIP_ROWS),xn=O.getParameter(O.UNPACK_SKIP_IMAGES),yt=$.isCompressedTexture?$.mipmaps[z]:$.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,yt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,T.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,T.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,T.min.z),$.isDataTexture||$.isData3DTexture?O.texSubImage3D(Ve,z,N.x,N.y,N.z,le,Te,ze,Re,De,yt.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Ve,z,N.x,N.y,N.z,le,Te,ze,Re,yt.data):O.texSubImage3D(Ve,z,N.x,N.y,N.z,le,Te,ze,Re,De,yt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ke),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Xt),O.pixelStorei(O.UNPACK_SKIP_ROWS,_t),O.pixelStorei(O.UNPACK_SKIP_IMAGES,xn),z===0&&W.generateMipmaps&&O.generateMipmap(Ve),Ce.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Xe.setTextureCube(T,0):T.isData3DTexture?Xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Xe.setTexture2DArray(T,0):Xe.setTexture2D(T,0),Ce.unbindTexture()},this.resetState=function(){b=0,w=0,S=null,Ce.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===yd?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===Gu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vw extends P0{}Vw.prototype.isWebGL1Renderer=!0;class xA extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Df,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return h0("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new F;class L0{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new fi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new L0(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Zm=new F,Jm=new Tt,Qm=new Tt,Gw=new F,e_=new ct,mc=new F,qh=new ur,t_=new ct,Yh=new Al;class MA extends ui{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dp,this.bindMatrix=new ct,this.bindMatrixInverse=new ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mc),this.boundingBox.expandByPoint(mc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ur),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mc),this.boundingSphere.expandByPoint(mc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qh.copy(this.boundingSphere),qh.applyMatrix4(i),e.ray.intersectsSphere(qh)!==!1&&(t_.copy(i).invert(),Yh.copy(e.ray).applyMatrix4(t_),!(this.boundingBox!==null&&Yh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$y?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Jm.fromBufferAttribute(i.attributes.skinIndex,e),Qm.fromBufferAttribute(i.attributes.skinWeight,e),Zm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Qm.getComponent(s);if(o!==0){const a=Jm.getComponent(s);e_.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Gw.copy(Zm).applyMatrix4(e_),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Hw extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bd extends un{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Kt,u=Kt,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const n_=new ct,Ww=new ct;class D0{constructor(e=[],t=[]){this.uuid=Si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ct;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Ww;n_.multiplyMatrices(a,t[s]),n_.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new D0(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new bd(t,e,e,oi,yi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Hw),this.bones.push(o),this.boneInverses.push(new ct().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class i_ extends fi{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ha=new ct,r_=new ct,_c=[],s_=new Zr,Xw=new ct,_o=new ui,go=new ur;class SA extends ui{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new i_(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ha),s_.copy(e.boundingBox).applyMatrix4(ha),this.boundingBox.union(s_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ur),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ha),go.copy(e.boundingSphere).applyMatrix4(ha),this.boundingSphere.union(go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(n),e.ray.intersectsSphere(go)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ha),r_.multiplyMatrices(n,ha),_o.matrixWorld=r_,_o.raycast(e,_c);for(let o=0,a=_c.length;o<a;o++){const l=_c[o];l.instanceId=s,l.object=this,t.push(l)}_c.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new i_(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bd(new Float32Array(i*this.count),i,this.count,r0,yi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class qw extends Jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const a_=new F,o_=new F,l_=new ct,$h=new Al,gc=new ur;class I0 extends zt{constructor(e=new hr,t=new qw){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)a_.fromBufferAttribute(t,i-1),o_.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=a_.distanceTo(o_);e.setAttribute("lineDistance",new ar(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(i),gc.radius+=s,e.ray.intersectsSphere(gc)===!1)return;l_.copy(i).invert(),$h.copy(e.ray).applyMatrix4(l_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,h=new F,f=new F,d=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const m=Math.max(0,o.start),y=Math.min(_.count,o.start+o.count);for(let v=m,E=y-1;v<E;v+=d){const b=_.getX(v),w=_.getX(v+1);if(c.fromBufferAttribute(p,b),u.fromBufferAttribute(p,w),$h.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=m,E=y-1;v<E;v+=d){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),$h.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const c_=new F,u_=new F;class EA extends I0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)c_.fromBufferAttribute(t,i),u_.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+c_.distanceTo(u_);e.setAttribute("lineDistance",new ar(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class TA extends I0{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Yw extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const h_=new ct,Of=new Al,vc=new ur,xc=new F;class bA extends zt{constructor(e=new hr,t=new Yw){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(i),vc.radius+=s,e.ray.intersectsSphere(vc)===!1)return;h_.copy(i).invert(),Of.copy(e.ray).applyMatrix4(h_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);xc.fromBufferAttribute(h,p),f_(xc,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)xc.fromBufferAttribute(h,_),f_(xc,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function f_(r,e,t,n,i,s,o){const a=Of.distanceSqToPoint(r);if(a<t){const l=new F;Of.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ff extends un{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wA extends cr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $w extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class AA extends $w{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class RA extends Jr{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new tt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}function yc(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function jw(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Kw(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function d_(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function U0(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Xu{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zw extends Xu{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sm,endingEnd:sm}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case am:s=e,a=2*t-n;break;case om:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case am:o=e,l=2*n-t;break;case om:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,y=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-d)*p+(1.5+d)*g+.5*_,E=d*p-d*g;for(let b=0;b!==a;++b)s[b]=m*o[u+b]+y*o[c+b]+v*o[l+b]+E*o[h+b];return s}}class Jw extends Xu{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class Qw extends Xu{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yc(t,this.TimeBufferType),this.values=yc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yc(e.times,Array),values:yc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zc:t=this.InterpolantFactoryMethodDiscrete;break;case Jc:t=this.InterpolantFactoryMethodLinear;break;case yh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zc;case this.InterpolantFactoryMethodLinear:return Jc;case this.InterpolantFactoryMethodSmooth:return yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&jw(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===yh,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=Jc;class no extends Fi{}no.prototype.ValueTypeName="bool";no.prototype.ValueBufferType=Array;no.prototype.DefaultInterpolation=Zc;no.prototype.InterpolantFactoryMethodLinear=void 0;no.prototype.InterpolantFactoryMethodSmooth=void 0;class N0 extends Fi{}N0.prototype.ValueTypeName="color";class ru extends Fi{}ru.prototype.ValueTypeName="number";class e1 extends Xu{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)eo.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Cl extends Fi{InterpolantFactoryMethodLinear(e){return new e1(this.times,this.values,this.getValueSize(),e)}}Cl.prototype.ValueTypeName="quaternion";Cl.prototype.DefaultInterpolation=Jc;Cl.prototype.InterpolantFactoryMethodSmooth=void 0;class io extends Fi{}io.prototype.ValueTypeName="string";io.prototype.ValueBufferType=Array;io.prototype.DefaultInterpolation=Zc;io.prototype.InterpolantFactoryMethodLinear=void 0;io.prototype.InterpolantFactoryMethodSmooth=void 0;class su extends Fi{}su.prototype.ValueTypeName="vector";class CA{constructor(e,t=-1,n,i=nM){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(n1(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Fi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Kw(l);l=d_(l,1,u),c=d_(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ru(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const p=[],m=[];U0(d,p,m,_),p.length!==0&&g.push(new h(f,p,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let y=0;y!==f[_].morphTargets.length;++y){const v=f[_];p.push(v.time),m.push(v.morphTarget===g?1:0)}i.push(new ru(".morphTargetInfluence["+g+"]",p,m))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(su,d+".position",f,"pos",i),n(Cl,d+".quaternion",f,"rot",i),n(su,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function t1(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ru;case"vector":case"vector2":case"vector3":case"vector4":return su;case"color":return N0;case"quaternion":return Cl;case"bool":case"boolean":return no;case"string":return io}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function n1(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=t1(r.type);if(r.times===void 0){const t=[],n=[];U0(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Or={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class i1{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const r1=new i1;class ro{constructor(e){this.manager=e!==void 0?e:r1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ro.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wi={};class s1 extends Error{constructor(e,t){super(e),this.response=t}}class a1 extends ro{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Or.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:n,onError:i});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){y();function y(){h.read().then(({done:v,value:E})=>{if(v)m.close();else{g+=E.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let w=0,S=u.length;w<S;w++){const P=u[w];P.onProgress&&P.onProgress(b)}m.enqueue(E),y()}})}}});return new Response(p)}else throw new s1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Or.add(e,c);const u=Wi[e];delete Wi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Wi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class o1 extends ro{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Or.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=sl("img");function l(){u(),Or.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class PA extends ro{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new bd,a=new a1(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:jn,o.wrapT=c.wrapT!==void 0?c.wrapT:jn,o.magFilter=c.magFilter!==void 0?c.magFilter:jt,o.minFilter=c.minFilter!==void 0?c.minFilter:jt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ur),c.mipmapCount===1&&(o.minFilter=jt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class LA extends ro{constructor(e){super(e)}load(e,t,n,i){const s=new un,o=new o1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class wd extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const jh=new ct,p_=new F,m_=new F;class Ad{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ed,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;p_.setFromMatrixPosition(e.matrixWorld),t.position.copy(p_),m_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(m_),t.updateMatrixWorld(),jh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class l1 extends Ad{constructor(){super(new qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Za*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class DA extends wd{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new l1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const __=new ct,vo=new F,Kh=new F;class c1 extends Ad{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),vo.setFromMatrixPosition(e.matrixWorld),n.position.copy(vo),Kh.copy(n.position),Kh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kh),n.updateMatrixWorld(),i.makeTranslation(-vo.x,-vo.y,-vo.z),__.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(__)}}class IA extends wd{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new c1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class u1 extends Ad{constructor(){super(new E0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class UA extends wd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new u1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class NA{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class OA extends ro{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Or.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Or.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Or.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Or.add(e,l),s.manager.itemStart(e)}}const Rd="\\[\\]\\.:\\/",h1=new RegExp("["+Rd+"]","g"),Cd="[^"+Rd+"]",f1="[^"+Rd.replace("\\.","")+"]",d1=/((?:WC+[\/:])*)/.source.replace("WC",Cd),p1=/(WCOD+)?/.source.replace("WCOD",f1),m1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cd),_1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cd),g1=new RegExp("^"+d1+p1+m1+_1+"$"),v1=["material","materials","bones","map"];class x1{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(h1,"")}static parseTrackName(e){const t=g1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);v1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=x1;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const g_=new ct;class FA{constructor(e,t,n=0,i=1/0){this.ray=new Al(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Sd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return g_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(g_),this}intersectObject(e,t=!0,n=[]){return Bf(e,this,n,t),n.sort(v_),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Bf(e[i],this,n,t);return n.sort(v_),n}}function v_(r,e){return r.distance-e.distance}function Bf(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Bf(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gd);const y1={uTime:{value:0},uGoldMetalColor:{value:new tt(16640446)},uBlueMetalColor:{value:new tt(8036556)},uGlobalEnvmapRotation:{value:new Qe}},Zh={uRatio:{value:1},uDPR:{value:1},uResolution:{value:new nt}},M1=!1;new URLSearchParams(window.location.search);const S1=M1,Mc={tablet:768,desktop:1025,large:1441};var xu,yu,vl;class E1 extends P0{constructor(){super({antialias:!1,powerPreference:"high-performance"});pe(this,xu,()=>{var t;xe.state.on(ot.RESIZE,D(this,vl)),(t=xe.debug)==null||t.mapping.add(this,"Renderer",2)});pe(this,yu,()=>{xe.state.off(ot.RESIZE,D(this,vl))});pe(this,vl,({width:t,height:n,dpr:i})=>{this.setSize(t,n),this.setPixelRatio(i)});xt.enabled=!0,this.autoClear=!1,this.debug.checkShaderErrors=S1,this.setClearColor(new tt(16777215),0),xe.state.on(ot.ATTACH,D(this,xu)),xe.state.on(ot.DETACH,D(this,yu))}}xu=new WeakMap,yu=new WeakMap,vl=new WeakMap;var Mu,Su,xl,yl;class T1{constructor(){pe(this,Mu,()=>{xe.$wrapper.prepend(this.renderer.domElement),xe.state.on(ot.RESIZE,D(this,xl)),xe.state.on(ot.TICK,D(this,yl))});pe(this,Su,()=>{xe.$wrapper.removeChild(this.renderer.domElement),xe.state.off(ot.RESIZE,D(this,xl)),xe.state.off(ot.TICK,D(this,yl))});pe(this,xl,()=>{});pe(this,yl,({et:e})=>{y1.uTime.value=e});this.renderer=new E1,xe.state.on(ot.ATTACH,D(this,Mu)),xe.state.on(ot.DETACH,D(this,Su))}}Mu=new WeakMap,Su=new WeakMap,xl=new WeakMap,yl=new WeakMap;var Eu,Tu,bu;class b1{constructor(){pe(this,Eu,()=>{document.addEventListener("keydown",D(this,Tu)),document.addEventListener("keyup",D(this,bu))});pe(this,Tu,e=>{xe.state.emit(ot.KEY_DOWN,e.key,e)});pe(this,bu,e=>{xe.state.emit(ot.KEY_UP,e.key,e)});xe.state.on(ot.ATTACH,D(this,Eu))}}Eu=new WeakMap,Tu=new WeakMap,bu=new WeakMap;var Ar,Ml,wu,Au,Sl,bs,ws,El,Tl,Rr,_a;class w1{constructor(){pe(this,Rr);pe(this,Ar,!1);pe(this,Ml,void 0);Bi(this,"lock",async()=>{!this.isTouch&&!D(this,Ar)&&await xe.$app.requestPointerLock({unadjustedMovement:!0})});Bi(this,"unlock",()=>{D(this,Ar)&&document.exitPointerLock()});pe(this,wu,()=>{this.coordinates.dom.set(xe.tools.viewport.width*.5,xe.tools.viewport.height*.5),xe.$app.addEventListener("mousemove",D(this,bs)),xe.$app.addEventListener("touchmove",D(this,bs),{passive:!0}),xe.$app.addEventListener("pointerdown",D(this,El)),xe.$app.addEventListener("mouseup",D(this,ws)),xe.$app.addEventListener("touchend",D(this,ws)),xe.$app.addEventListener("pointerleave",D(this,Tl)),document.addEventListener("pointerlockchange",D(this,Sl))});pe(this,Au,()=>{xe.$app.removeEventListener("mousemove",D(this,bs)),xe.$app.removeEventListener("touchmove",D(this,bs)),xe.$app.removeEventListener("pointerdown",D(this,El)),xe.$app.removeEventListener("mouseup",D(this,ws)),xe.$app.removeEventListener("touchend",D(this,ws)),xe.$app.removeEventListener("pointerleave",D(this,Tl)),document.removeEventListener("pointerlockchange",D(this,Sl))});pe(this,Sl,e=>{Je(this,Ar,document.pointerLockElement===xe.$app),xe.state.emit(ot.POINTER_LOCK,D(this,Ar),e)});pe(this,bs,e=>{this.isTouch?e.touches&&e.touches.length>0&&Rn(this,Rr,_a).call(this,e.touches[0].clientX,e.touches[0].clientY):this.locked?(clearTimeout(D(this,Ml)),Rn(this,Rr,_a).call(this,e.movementX,e.movementY),Je(this,Ml,setTimeout(()=>{Rn(this,Rr,_a).call(this,0,0),xe.state.emit(ot.POINTER_MOVE,this.coordinates)},100))):Rn(this,Rr,_a).call(this,e.clientX,e.clientY),xe.state.emit(ot.POINTER_MOVE,this.coordinates)});pe(this,ws,e=>{this.isDown&&(this.previousCoordinates.webgl.copy(this.coordinates.webgl),this.previousCoordinates.dom.copy(this.coordinates.dom),this.isDown=!1,xe.state.emit(ot.POINTER_UP,this.coordinates,e))});pe(this,El,e=>{if(!this.isDown){switch(e.pointerType){case"mouse":this.isTouch=!1;break;case"touch":this.isTouch=!0;break;case"pen":this.isTouch=!0;break}Rn(this,Rr,_a).call(this,e.clientX,e.clientY),this.isDown=!0,xe.state.emit(ot.POINTER_DOWN,this.coordinates)}});pe(this,Tl,e=>{this.isTouch||(this.isDown=!1,xe.state.emit(ot.POINTER_UP,this.coordinates,e))});this.isTouch=!!(window.matchMedia("(pointer: coarse)").matches||typeof window.ontouchstart=="function"||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),this.isDown=!1,this.coordinates={webgl:new nt,dom:new nt},this.previousCoordinates={webgl:this.coordinates.webgl.clone(),dom:this.coordinates.dom.clone()},xe.state.on(ot.ATTACH,D(this,wu)),xe.state.on(ot.DETACH,D(this,Au))}get locked(){return D(this,Ar)}}Ar=new WeakMap,Ml=new WeakMap,wu=new WeakMap,Au=new WeakMap,Sl=new WeakMap,bs=new WeakMap,ws=new WeakMap,El=new WeakMap,Tl=new WeakMap,Rr=new WeakSet,_a=function(e,t){this.previousCoordinates.dom.copy(this.coordinates.dom),this.previousCoordinates.webgl.copy(this.coordinates.webgl),this.locked?(this.coordinates.webgl.set(e/xe.tools.viewport.width,-(t/xe.tools.viewport.height)),this.coordinates.dom.set(xe.tools.viewport.width*.5+e,xe.tools.viewport.height*.5+t)):(this.coordinates.webgl.set(e/xe.tools.viewport.width*2-1,-(t/xe.tools.viewport.height)*2+1),this.coordinates.dom.set(e,t))};const x_=(r,e,t)=>(r<0&&(r=e-t+r),r>=e&&(r=r%e),r),A1=(r,e=2,t=!1,n=!1,i=!1)=>{if(typeof r>"u")return null;const s=Date.now(),o=Math.min(512,r.width),a=Math.min(512,r.height),l=document.createElement("canvas");l.width=o,l.height=a;const c=l.getContext("2d",{willReadFrequently:!0});if(c===null)return;c.drawImage(r,0,0,o,a);const u=c.getImageData(0,0,o,a),h=c.getImageData(0,0,o,a),f=t?1:-1,d=n?1:-1,_=h.data.length;for(let p=0;p<_;p+=4)u.data[p]=(u.data[p]+u.data[p+1]+u.data[p+2])/3;for(let p=0;p<_;p+=4)h.data[p]=128+(u.data[Math.max(0,p-4*f)]-u.data[Math.min(_,p+4*f)])*e,h.data[p+1]=128+(u.data[x_(p-o*4*d,_,o)]-u.data[x_(p+o*4*d,_,o)])*e,h.data[p+2]=256-u.data[p]*.5,h.data[p+3]=256;c.putImageData(h,0,0);const g=new Ff(l);return i&&(l.style.cssText="position:fixed;top:0;left:0;z-index:100;width:400px;height:400px;",document.body.appendChild(l),console.log(`normal generation took : ${Date.now()-s}ms`)),g};var Ri,za;class R1{constructor(){pe(this,Ri,void 0);pe(this,za,void 0);Je(this,Ri,document.createElement("canvas")),D(this,Ri).width=D(this,Ri).height=256,Je(this,za,D(this,Ri).getContext("2d"));const t=D(this,za).getImageData(0,0,256,256);t.data.forEach((n,i)=>{t.data[i]=Math.round(Math.random()*255)}),D(this,za).putImageData(t,0,0),this.texture=new Ff(D(this,Ri)),this.texture.wrapS=this.texture.wrapT=La,this.texture.minFilter=jt,this.texture.magFilter=jt,this.nearestTexture=new Ff(D(this,Ri)),this.nearestTexture.wrapS=this.nearestTexture.wrapT=La,this.nearestTexture.minFilter=Kt,this.nearestTexture.magFilter=Kt,this.normalTexture=A1(D(this,Ri),2),this.normalTexture.wrapS=this.normalTexture.wrapT=La}}Ri=new WeakMap,za=new WeakMap;class C1{constructor(e,t,n){this.ctx=e,this.url=n,this.name=t,this.gain=this.ctx.createGain(),this.buffer=null,this.preloaded=!1,this.loop=!1,this.muted=!1,this._volume=1,this.source=null,this.isPlaying=!1,this.currentTime=0}async preload(){try{const t=await(await fetch(this.url)).arrayBuffer(),n=await this.ctx.decodeAudioData(t);this.preloaded=!0,this.buffer=n}catch(e){console.error(`Erreur lors de chargement du son ${this.name}:`,e)}}async play(){this.isPlaying||(this.preloaded||await this.preload(),this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.loop=this.loop,this.source.connect(this.gain),this.source.start(0,this.currentTime),this.isPlaying=!0)}pause(){this.isPlaying&&(this.source.stop(),this.currentTime=this.ctx.currentTime,this.isPlaying=!1)}stop(){this.isPlaying&&(this.source.stop(),this.currentTime=0,this.isPlaying=!1)}mute(e=1){this.muted=!0,this.gain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+e)}unMute(e=1){this.muted=!1,this.gain.gain.linearRampToValueAtTime(this._volume,this.ctx.currentTime+e)}get volume(){return this._volume}set volume(e){this._volume=e,this.muted||(this.gain.gain.value=this._volume)}}var As;class P1{constructor(){pe(this,As,async()=>{this.firstPlay&&(this.firstPlay=!1,this.context=new(window.AudioContext||window.webkitAudioContext),this.globalGain=this.context.createGain(),this.globalGain.connect(this.context.destination),await this.createSounds(),xe.state.emit(ot.FIRST_INTERACTION,!0))});xe.state.register(this),this.sounds=new Map,this.globalGain,this.firstPlay=!0,this.manifestSounds={}}onAttach(){document.addEventListener("click",D(this,As),{once:!0})}register(e){this.manifestSounds=e}async createSounds(){const e=[];if(this.manifestSounds.length>0)if(Array.isArray(this.manifestSounds))for(const{name:t,url:n,preload:i=!1,loop:s=!1}of this.manifestSounds){const o=new C1(this.context,t,n);o.loop=s,o.gain.connect(this.globalGain),this.sounds.set(t,o),i&&e.push(o)}else console.warn("L'argument doit être un tableau d'objets contenant 'name' et 'url'.");if(e.length>0){const t=[];for(const n of e)t.push(n.preload().catch(i=>{console.error(`Erreur lors du chargement de l'audio "${n.name}":`,i)}));await Promise.all(t)}console.log(this.sounds)}get(...e){return e=e.length==1&&Array.isArray(e[0])?e[0]:e,e.length>1?e.map(t=>this.sounds.get(t)):this.sounds.get(e[0])}async play(e){this.firstPlay&&await D(this,As).call(this);const t=this.sounds.get(e);if(!t){console.warn(`Le son "${e}" n'existe pas.`);return}t.play()}pause(e){const t=this.sounds.get(e);if(!t){console.warn(`Le son "${e}" n'existe pas.`);return}t.pause()}mute(e,t=1){const n=this.sounds.get(e);if(!n){console.warn(`Le son "${e}" n'existe pas.`);return}n.mute(t)}unMute(e,t=1){const n=this.sounds.get(e);if(!n){console.warn(`Le son "${e}" n'existe pas.`);return}n.unMute(t)}async muteAll(e=1){this.firstPlay&&await D(this,As).call(this),this.globalGain.gain.linearRampToValueAtTime(0,this.context.currentTime+e)}async unMuteAll(e=1){this.firstPlay&&await D(this,As).call(this),this.globalGain.gain.linearRampToValueAtTime(1,this.context.currentTime+e)}}As=new WeakMap;var Va,tn,Ru,Cu,Pu,bl,kf,Lu,O0;class L1{constructor(){pe(this,bl);pe(this,Lu);pe(this,Va,void 0);pe(this,tn,{width:window.innerWidth,height:window.innerHeight,dpr:window.devicePixelRatio,ratio:1,breakpoint:"mobile"});pe(this,Ru,()=>{D(this,Va).observe(xe.$wrapper)});pe(this,Cu,()=>{D(this,Va).unobserve(xe.$wrapper)});pe(this,Pu,e=>{let t,n;if(e[0].contentBoxSize){const i=Array.isArray(e[0].contentBoxSize)?e[0].contentBoxSize[0]:e[0].contentBoxSize;t=i.inlineSize,n=i.blockSize}else t=e[0].contentRect.width,n=e[0].contentRect.height;(t!==this.infos.width||n>this.infos.height||t>=Mc.desktop||!this.hasResizedAtLaunch)&&(this.hasResizedAtLaunch||(this.hasResizedAtLaunch=!0),document.body.style.setProperty("--vh",`${n*.01}px`),Rn(this,bl,kf).call(this,t,n),xe.state.emit(ot.RESIZE,this.infos))});const e=xe.$wrapper.getBoundingClientRect(),t=Math.min(window.innerWidth,e.width),n=e.height;Rn(this,bl,kf).call(this,t,n),Je(this,Va,new ResizeObserver(D(this,Pu))),xe.state.on(ot.ATTACH,D(this,Ru)),xe.state.on(ot.DETACH,D(this,Cu)),this.isMobileAtLaunch=this.breakpoint==="mobile",this.hasResizedAtLaunch=!1}get infos(){return D(this,tn)}get width(){return D(this,tn).width}get height(){return D(this,tn).height}get dpr(){return D(this,tn).dpr}get ratio(){return D(this,tn).ratio}get breakpoint(){return D(this,tn).breakpoint}}Va=new WeakMap,tn=new WeakMap,Ru=new WeakMap,Cu=new WeakMap,Pu=new WeakMap,bl=new WeakSet,kf=function(e,t){D(this,tn).width=e,D(this,tn).height=t,D(this,tn).dpr=Math.min((window.innerWidth<Mc.tablet,2),window.devicePixelRatio),D(this,tn).ratio=e/t,D(this,tn).breakpoint=window.innerWidth<Mc.tablet?"mobile":window.innerWidth<Mc.desktop?"tablet":"desktop",Rn(this,Lu,O0).call(this)},Lu=new WeakSet,O0=function(){Zh.uRatio.value=D(this,tn).ratio,Zh.uDPR.value=D(this,tn).dpr,Zh.uResolution.value.set(D(this,tn).width,D(this,tn).height)};function D1(){const r=new w1,e=new L1,t=new b1,n=new R1,i=new P1;return{mouse:r,viewport:e,keyboard:t,noise:n,sounds:i}}const I1=r=>new Promise(e=>{r.add(()=>e(r))});function rn(){}const F0=r=>r;function BA(r,e){for(const t in e)r[t]=e[t];return r}function kA(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}function B0(r){return r()}function y_(){return Object.create(null)}function Ws(r){r.forEach(B0)}function Pl(r){return typeof r=="function"}function qu(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let Sc;function zA(r,e){return r===e?!0:(Sc||(Sc=document.createElement("a")),Sc.href=e,r===Sc.href)}function U1(r){return Object.keys(r).length===0}function Pd(r,...e){if(r==null){for(const n of e)n(void 0);return rn}const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Mr(r){let e;return Pd(r,t=>e=t)(),e}function N1(r,e,t){r.$$.on_destroy.push(Pd(e,t))}function VA(r){return r??""}const k0=typeof window<"u";let z0=k0?()=>window.performance.now():()=>Date.now(),Ld=k0?r=>requestAnimationFrame(r):rn;const Ia=new Set;function V0(r){Ia.forEach(e=>{e.c(r)||(Ia.delete(e),e.f())}),Ia.size!==0&&Ld(V0)}function G0(r){let e;return Ia.size===0&&Ld(V0),{promise:new Promise(t=>{Ia.add(e={c:r,f:t})}),abort(){Ia.delete(e)}}}function O1(r,e){r.appendChild(e)}function H0(r){if(!r)return document;const e=r.getRootNode?r.getRootNode():r.ownerDocument;return e&&e.host?e:r.ownerDocument}function F1(r){const e=Yu("style");return e.textContent="/* empty */",B1(H0(r),e),e.sheet}function B1(r,e){return O1(r.head||r,e),e.sheet}function _s(r,e,t){r.insertBefore(e,t||null)}function nr(r){r.parentNode&&r.parentNode.removeChild(r)}function GA(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function Yu(r){return document.createElement(r)}function HA(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function W0(r){return document.createTextNode(r)}function Ec(){return W0(" ")}function WA(){return W0("")}function al(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function k1(r){return Array.from(r.childNodes)}function XA(r,e){e=""+e,r.data!==e&&(r.data=e)}function qA(r,e,t,n){t==null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function z1(r,e,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(r,{detail:e,bubbles:t,cancelable:n})}function M_(r,e){return new r(e)}const au=new Map;let ou=0;function V1(r){let e=5381,t=r.length;for(;t--;)e=(e<<5)-e^r.charCodeAt(t);return e>>>0}function G1(r,e){const t={stylesheet:F1(e),rules:{}};return au.set(r,t),t}function X0(r,e,t,n,i,s,o,a=0){const l=16.666/n;let c=`{
`;for(let p=0;p<=1;p+=l){const m=e+(t-e)*s(p);c+=p*100+`%{${o(m,1-m)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,h=`__svelte_${V1(u)}_${a}`,f=H0(r),{stylesheet:d,rules:_}=au.get(f)||G1(f,r);_[h]||(_[h]=!0,d.insertRule(`@keyframes ${h} ${u}`,d.cssRules.length));const g=r.style.animation||"";return r.style.animation=`${g?`${g}, `:""}${h} ${n}ms linear ${i}ms 1 both`,ou+=1,h}function zf(r,e){const t=(r.style.animation||"").split(", "),n=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-n.length;i&&(r.style.animation=n.join(", "),ou-=i,ou||H1())}function H1(){Ld(()=>{ou||(au.forEach(r=>{const{ownerNode:e}=r.stylesheet;e&&nr(e)}),au.clear())})}let ol;function Xo(r){ol=r}function W1(){if(!ol)throw new Error("Function called outside component initialization");return ol}function YA(r){W1().$$.on_mount.push(r)}const ga=[],Vf=[];let Ua=[];const S_=[],X1=Promise.resolve();let Gf=!1;function q1(){Gf||(Gf=!0,X1.then(lu))}function ll(r){Ua.push(r)}const Jh=new Set;let fa=0;function lu(){if(fa!==0)return;const r=ol;do{try{for(;fa<ga.length;){const e=ga[fa];fa++,Xo(e),Y1(e.$$)}}catch(e){throw ga.length=0,fa=0,e}for(Xo(null),ga.length=0,fa=0;Vf.length;)Vf.pop()();for(let e=0;e<Ua.length;e+=1){const t=Ua[e];Jh.has(t)||(Jh.add(t),t())}Ua.length=0}while(ga.length);for(;S_.length;)S_.pop()();Gf=!1,Jh.clear(),Xo(r)}function Y1(r){if(r.fragment!==null){r.update(),Ws(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(ll)}}function $1(r){const e=[],t=[];Ua.forEach(n=>r.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Ua=e}let xo;function q0(){return xo||(xo=Promise.resolve(),xo.then(()=>{xo=null})),xo}function cu(r,e,t){r.dispatchEvent(z1(`${e?"intro":"outro"}${t}`))}const Fc=new Set;let Fr;function j1(){Fr={r:0,c:[],p:Fr}}function K1(){Fr.r||Ws(Fr.c),Fr=Fr.p}function Ao(r,e){r&&r.i&&(Fc.delete(r),r.i(e))}function Tc(r,e,t,n){if(r&&r.o){if(Fc.has(r))return;Fc.add(r),Fr.c.push(()=>{Fc.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}const Y0={duration:0};function $A(r,e,t){const n={direction:"in"};let i=e(r,t,n),s=!1,o,a,l=0;function c(){o&&zf(r,o)}function u(){const{delay:f=0,duration:d=300,easing:_=F0,tick:g=rn,css:p}=i||Y0;p&&(o=X0(r,0,1,d,f,_,p,l++)),g(0,1);const m=z0()+f,y=m+d;a&&a.abort(),s=!0,ll(()=>cu(r,!0,"start")),a=G0(v=>{if(s){if(v>=y)return g(1,0),cu(r,!0,"end"),c(),s=!1;if(v>=m){const E=_((v-m)/d);g(E,1-E)}}return s})}let h=!1;return{start(){h||(h=!0,zf(r),Pl(i)?(i=i(n),q0().then(u)):u())},invalidate(){h=!1},end(){s&&(c(),s=!1)}}}function jA(r,e,t){const n={direction:"out"};let i=e(r,t,n),s=!0,o;const a=Fr;a.r+=1;let l;function c(){const{delay:u=0,duration:h=300,easing:f=F0,tick:d=rn,css:_}=i||Y0;_&&(o=X0(r,1,0,h,u,f,_));const g=z0()+u,p=g+h;ll(()=>cu(r,!1,"start")),"inert"in r&&(l=r.inert,r.inert=!0),G0(m=>{if(s){if(m>=p)return d(0,1),cu(r,!1,"end"),--a.r||Ws(a.c),!1;if(m>=g){const y=f((m-g)/h);d(1-y,y)}}return s})}return Pl(i)?q0().then(()=>{i=i(n),c()}):c(),{end(u){u&&"inert"in r&&(r.inert=l),u&&i.tick&&i.tick(1,0),s&&(o&&zf(r,o),s=!1)}}}function bc(r){r&&r.c()}function Ro(r,e,t){const{fragment:n,after_update:i}=r.$$;n&&n.m(e,t),ll(()=>{const s=r.$$.on_mount.map(B0).filter(Pl);r.$$.on_destroy?r.$$.on_destroy.push(...s):Ws(s),r.$$.on_mount=[]}),i.forEach(ll)}function Co(r,e){const t=r.$$;t.fragment!==null&&($1(t.after_update),Ws(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Z1(r,e){r.$$.dirty[0]===-1&&(ga.push(r),q1(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function Dd(r,e,t,n,i,s,o=null,a=[-1]){const l=ol;Xo(r);const c=r.$$={fragment:null,ctx:[],props:s,update:rn,not_equal:i,bound:y_(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:y_(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(h,f,...d)=>{const _=d.length?d[0]:f;return c.ctx&&i(c.ctx[h],c.ctx[h]=_)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](_),u&&Z1(r,h)),f}):[],c.update(),u=!0,Ws(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const h=k1(e.target);c.fragment&&c.fragment.l(h),h.forEach(nr)}else c.fragment&&c.fragment.c();e.intro&&Ao(r.$$.fragment),Ro(r,e.target,e.anchor),lu()}Xo(l)}class Id{constructor(){Bi(this,"$$");Bi(this,"$$set")}$destroy(){Co(this,1),this.$destroy=rn}$on(e,t){if(!Pl(t))return rn;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!U1(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const J1="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(J1);const Q1=(r,e)=>{const t=r[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((n,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})},da=[];function eA(r,e){return{subscribe:$u(r,e).subscribe}}function $u(r,e=rn){let t;const n=new Set;function i(a){if(qu(r,a)&&(r=a,t)){const l=!da.length;for(const c of n)c[1](),da.push(c,r);if(l){for(let c=0;c<da.length;c+=2)da[c][0](da[c+1]);da.length=0}}}function s(a){i(a(r))}function o(a,l=rn){const c=[a,l];return n.add(c),n.size===1&&(t=e(i,s)||rn),a(r),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function tA(r,e,t){const n=!Array.isArray(r),i=n?[r]:r;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return eA(t,(o,a)=>{let l=!1;const c=[];let u=0,h=rn;const f=()=>{if(u)return;h();const _=e(n?c[0]:c,o,a);s?o(_):h=Pl(_)?_:rn},d=i.map((_,g)=>Pd(_,p=>{c[g]=p,u&=~(1<<g),l&&f()},()=>{u|=1<<g}));return l=!0,f(),function(){Ws(d),h(),l=!1}})}let $0=null,wc,Qh=!1;const nA=()=>new Promise(r=>$0=r),Ud=$u({}),qo=$u({}),uu=$u({}),j0=(r,e,t={})=>Object.entries(t).reduce((n,[i,s])=>n.replace(`{${i}}`,s),e.split(".").reduce((n,i)=>n&&typeof n=="object"&&i in n?n[i]:null,r)||e),KA=async(r,e)=>{Mr(uu)!==r&&uu.set(r),Mr(qo)!==e&&qo.set(e),await iA()},iA=()=>(wc||(wc=nA()),Mr(qo)&&Mr(uu)&&(Qh||(Qh=!0,Q1(Object.assign({"../../../locales/sample-project/en_GB.json":()=>Qi(()=>import("./en_GB.CxTS4l6h.js"),__vite__mapDeps([])),"../../../locales/sample-project/fr_FR.json":()=>Qi(()=>import("./fr_FR.BkRH7uLw.js"),__vite__mapDeps([])),"../../../locales/the-watch/en_GB.json":()=>Qi(()=>import("./en_GB.CAgLt01W.js"),__vite__mapDeps([])),"../../../locales/the-watch/fr_FR.json":()=>Qi(()=>import("./fr_FR.DKItQTa6.js"),__vite__mapDeps([]))}),`../../../locales/${Mr(uu)}/${Mr(qo)}.json`).then(r=>{Ud.set(r.default),wc=null,Qh=!1,$0(),xe.state.emit(ot.LOCALE,Mr(qo))}))),wc),rA=tA([Ud],([r])=>(e,t={})=>j0(r,e,t)),ZA=(r,e={})=>j0(Mr(Ud),r,e);function sA(r){let e;return{c(){e=Yu("footer"),al(e,"id","footer"),al(e,"class","svelte-sljvfy")},m(t,n){_s(t,e,n)},p:rn,i:rn,o:rn,d(t){t&&nr(e)}}}class aA extends Id{constructor(e){super(),Dd(this,e,null,sA,qu,{})}}function oA(r){let e;return{c(){e=Yu("header"),al(e,"id","header"),al(e,"class","svelte-sljvfy")},m(t,n){_s(t,e,n)},p:rn,i:rn,o:rn,d(t){t&&nr(e)}}}class lA extends Id{constructor(e){super(),Dd(this,e,null,oA,qu,{})}}function cA(r){let e,t,n,i,s,o,a,l,c,u;e=new lA({}),document.title=n=r[2]("meta.title");var h=r[1];function f(d,_){return{props:{}}}return h&&(a=M_(h,f()),r[3](a)),c=new aA({}),{c(){bc(e.$$.fragment),t=Ec(),i=Ec(),s=Yu("main"),s.textContent="Main",o=Ec(),a&&bc(a.$$.fragment),l=Ec(),bc(c.$$.fragment),al(s,"class","svelte-sljvfy")},m(d,_){Ro(e,d,_),_s(d,t,_),_s(d,i,_),_s(d,s,_),_s(d,o,_),a&&Ro(a,d,_),_s(d,l,_),Ro(c,d,_),u=!0},p(d,[_]){if((!u||_&4)&&n!==(n=d[2]("meta.title"))&&(document.title=n),_&2&&h!==(h=d[1])){if(a){j1();const g=a;Tc(g.$$.fragment,1,0,()=>{Co(g,1)}),K1()}h?(a=M_(h,f()),d[3](a),bc(a.$$.fragment),Ao(a.$$.fragment,1),Ro(a,l.parentNode,l)):a=null}else if(h){const g={};a.$set(g)}},i(d){u||(Ao(e.$$.fragment,d),a&&Ao(a.$$.fragment,d),Ao(c.$$.fragment,d),u=!0)},o(d){Tc(e.$$.fragment,d),a&&Tc(a.$$.fragment,d),Tc(c.$$.fragment,d),u=!1},d(d){d&&(nr(t),nr(i),nr(s),nr(o),nr(l)),Co(e,d),r[3](null),a&&Co(a,d),Co(c,d)}}}function uA(r,e,t){let n;N1(r,rA,a=>t(2,n=a));let{component:i=null}=e,{instance:s=null}=e;function o(a){Vf[a?"unshift":"push"](()=>{s=a,t(0,s)})}return r.$$set=a=>{"component"in a&&t(1,i=a.component),"instance"in a&&t(0,s=a.instance)},[s,i,n,o]}let hA=class extends Id{constructor(e){super(),Dd(this,e,uA,cA,qu,{component:1,instance:0})}get component(){return this.$$.ctx[1]}set component(e){this.$$set({component:e}),lu()}get instance(){return this.$$.ctx[0]}set instance(e){this.$$set({instance:e}),lu()}};var Rs,xi;class fA{constructor(){pe(this,Rs,void 0);pe(this,xi,void 0);Je(this,Rs,new Map),Je(this,xi,new Map)}get(e){return D(this,Rs).get(e)}set(e,t){var n;return t!==D(this,Rs).get(e)&&(D(this,Rs).set(e,t),(n=D(this,xi).get(e))==null||n.forEach(i=>i.call(this,t))),this.get(e)}watch(e,t){D(this,xi).has(e)?D(this,xi).get(e).add(t):D(this,xi).set(e,new Set().add(t))}stopWatch(e,t){if(!D(this,xi).has(e))return;D(this,xi).get(e).delete(t)}watching(e){return D(this,xi).has(e)}}Rs=new WeakMap,xi=new WeakMap;var Cs,Wf,Du,K0,Iu,Uu,Nu,Z0;const gs=class gs{constructor(){pe(this,Du);pe(this,Nu);pe(this,Cs,void 0);pe(this,Wf,void 0);pe(this,Iu,async e=>{var n,i;((n=D(this,Cs))==null?void 0:n.key)!==e&&((i=this.svelte.instance)!=null&&i.outAnim&&await I1(this.svelte.instance.outAnim()),Rn(this,Nu,Z0).call(this,D(this,Cs)),await D(this,Uu).call(this,e))});pe(this,Uu,async e=>{var o;const t=await this.packages.get(e)(),{project:n,View:i}=t;xe.state.emit(ot.PROJECT_LOADING,n);const s=this.core.router.getRouter(e);return s&&(n.router=s),n.create(),await n.init(),Je(this,Cs,n),n.attach(),this.svelte.component=i,xe.state.emit(ot.PROJECT_LOADED,n),xe.state.emit(ot.RESIZE,xe.tools.viewport.infos),(o=this.svelte.instance)!=null&&o.inAnim&&this.svelte.instance.inAnim(),t});this.state=new oy(ot),this.store=new fA}async init(){var e;this.packages=new Map(Object.entries(Object.assign({"../../packages/sample-project/index.js":()=>Qi(()=>import("./sample-project.COb35JvF.js"),__vite__mapDeps([0,1,2])),"../../packages/the-watch/index.js":()=>Qi(()=>import("./the-watch.D6O26wKS.js"),__vite__mapDeps([3,1,4]))})).map(([t,n])=>{const i=t.split("/");return[i[i.length-2],n]})),this.routes=new Map(Object.entries(Object.assign({"../../packages/sample-project/routes.json":iy,"../../packages/the-watch/routes.json":sy})).map(([t,n])=>{const[,i]=t.match(/\.\.\/\.\.\/packages\/([^/]+)\/routes\.json/);return[i,n]})),this.pages=new Map(Object.entries(Object.assign({"../../packages/sample-project/views/pages/index.svelte":()=>Qi(()=>import("./index.BXJSulOs.js"),__vite__mapDeps([5,6,7])).then(t=>t.default),"../../packages/sample-project/views/pages/page1.svelte":()=>Qi(()=>import("./page1.BU5gSym-.js"),__vite__mapDeps([8,6,7])).then(t=>t.default),"../../packages/sample-project/views/pages/page2.svelte":()=>Qi(()=>import("./page2.DTew6172.js"),__vite__mapDeps([9,6,7])).then(t=>t.default)})).map(([t,n])=>{const[,i,s]=t.match(/\.\.\/\.\.\/packages\/([^/]+)\/views\/pages\/(.*).svelte/);return[`${i}.${s.replace(/\//g,".")}`,n]})),this.$app=document.getElementById("app"),this.$root=document.getElementById("root"),this.$wrapper=document.getElementById("canvas-wrapper"),this.tools=D1(),this.core=fy(),this.webgl=new T1,this.svelte=new hA({target:this.$root}),Rn(this,Du,K0).call(this),xe.state.emit(ot.ATTACH),(e=xe.debug)==null||e.mapping.add(this,"Router",0),this.core.router.enabled=!0}get currentProject(){return D(this,Cs)}static getInstance(){return gs.instance||(gs.instance=new gs),gs.instance}};Cs=new WeakMap,Wf=new WeakMap,Du=new WeakSet,K0=function(){this.routes.forEach((e,t)=>{const n=new jc;Object.entries(e).forEach(([s,o])=>{n.use(o,()=>D(this,Iu).call(this,t)),n.add(o,null,s)});const i=t==="the-watch"?"/":`/${t}`;this.core.router.useRouter(i,n,t)})},Iu=new WeakMap,Uu=new WeakMap,Nu=new WeakSet,Z0=function(e){e&&(this.svelte.component=null,e.detach(),e.destroy(),delete e.router,xe.state.emit(ot.PROJECT_UNLOADED,e))},Bi(gs,"instance");let Hf=gs;const xe=Hf.getInstance();ku.config({force3D:!0});ku.defaults({ease:"none",duration:.5});ku.registerPlugin(di,lt);di.create("immg.zoomIn","0.9, 0.0, 0.4, 1.0");di.create("immg.zoomOut","0.4, 0.0, 0.1, 1.0");di.create("immg.posIn","0.4, 0.0, 0.1, 1.0");di.create("immg.posOut","0.9, 0.0, 0.4, 1.0");di.create("immg.expoOut","0.14, 1.0, 0.34, 1.0");di.create("immg.expoIn","0.66, 0.0, 0.86, 0.0");di.create("sixty.expoInOut","0.225, 0.415, 0.3, 1");console.info("VERSION :","0.0.13");xe.init();export{pc as $,Vf as A,lt as B,tt as C,S1 as D,Oi as E,ZA as F,ot as G,nt as H,Qe as I,ct as J,cr as K,$r as L,RA as M,y1 as N,er as O,qn as P,_y as Q,jc as R,xA as S,Rf as T,Ap as U,F as V,Zh as W,wA as X,Cp as Y,xy as Z,Qi as _,j1 as a,EA as a$,fs as a0,FA as a1,Zr as a2,ui as a3,Rl as a4,_0 as a5,zt as a6,Hu as a7,hr as a8,fi as a9,yi as aA,oi as aB,r0 as aC,yr as aD,jt as aE,vA as aF,pA as aG,_A as aH,mA as aI,ro as aJ,NA as aK,a1 as aL,DA as aM,IA as aN,UA as aO,AA as aP,i_ as aQ,LA as aR,OA as aS,yA as aT,Ur as aU,Yw as aV,Jr as aW,qw as aX,$w as aY,Mt as aZ,MA as a_,bA as aa,La as ab,Gs as ac,bi as ad,ar as ae,E0 as af,SA as ag,HA as ah,Ec as ai,W0 as aj,O1 as ak,XA as al,rA as am,VA as an,BA as ao,GA as ap,zA as aq,qA as ar,YA as as,Pf as at,Cf as au,Dm as av,Vu as aw,PA as ax,rl as ay,Kr as az,Ao as b,I0 as b0,TA as b1,gA as b2,D0 as b3,CA as b4,Hw as b5,Jc as b6,xt as b7,eo as b8,Kt as b9,Ip as ba,ph as bb,uo as bc,jn as bd,Lf as be,Zc as bf,L0 as bg,un as bh,su as bi,ru as bj,Cl as bk,ur as bl,Xu as bm,o1 as bn,Or as bo,oy as bp,fA as bq,KA as br,ll as bs,jA as bt,$A as bu,K1 as c,xe as d,Id as e,lu as f,W1 as g,Dd as h,kA as i,qu as j,WA as k,_s as l,nr as m,N1 as n,rn as o,Pd as p,M_ as q,bc as r,Xo as s,Tc as t,Ro as u,Co as v,$u as w,Yu as x,al as y,ku as z};
