"use strict";var t=require("@donkeyclip/motorcortex");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function a(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},s=function(t){return t&&t.Math==Math&&t},p=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof f&&f)||function(){return this}()||Function("return this")(),h={},y=function(t){try{return!!t()}catch(t){return!0}},d=!y((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),v=!y((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),b=v,g=Function.prototype.call,m=b?g.bind(g):function(){return g.apply(g,arguments)},w={},x={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor,S=O&&!x.call({1:2},1);w.f=S?function(t){var e=O(this,t);return!!e&&e.enumerable}:x;var j,E,P=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},I=v,A=Function.prototype,R=A.bind,T=A.call,C=I&&R.bind(T,T),k=I?function(t){return t&&C(t)}:function(t){return t&&function(){return T.apply(t,arguments)}},M=k,_=M({}.toString),K=M("".slice),F=function(t){return K(_(t),8,-1)},L=y,N=F,Y=Object,z=k("".split),D=L((function(){return!Y("z").propertyIsEnumerable(0)}))?function(t){return"String"==N(t)?z(t,""):Y(t)}:Y,X=TypeError,U=function(t){if(null==t)throw X("Can't call method on "+t);return t},B=D,V=U,G=function(t){return B(V(t))},W=function(t){return"function"==typeof t},$=W,q=function(t){return"object"==typeof t?null!==t:$(t)},Z=p,H=W,J=function(t){return H(t)?t:void 0},Q=function(t,e){return arguments.length<2?J(Z[t]):Z[t]&&Z[t][e]},tt=k({}.isPrototypeOf),et=p,nt=Q("navigator","userAgent")||"",rt=et.process,ot=et.Deno,it=rt&&rt.versions||ot&&ot.version,at=it&&it.v8;at&&(E=(j=at.split("."))[0]>0&&j[0]<4?1:+(j[0]+j[1])),!E&&nt&&(!(j=nt.match(/Edge\/(\d+)/))||j[1]>=74)&&(j=nt.match(/Chrome\/(\d+)/))&&(E=+j[1]);var ut=E,ct=ut,lt=y,ft=!!Object.getOwnPropertySymbols&&!lt((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&ct&&ct<41})),st=ft&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,pt=Q,ht=W,yt=tt,dt=Object,vt=st?function(t){return"symbol"==typeof t}:function(t){var e=pt("Symbol");return ht(e)&&yt(e.prototype,dt(t))},bt=String,gt=function(t){try{return bt(t)}catch(t){return"Object"}},mt=W,wt=gt,xt=TypeError,Ot=function(t){if(mt(t))return t;throw xt(wt(t)+" is not a function")},St=function(t,e){var n=t[e];return null==n?void 0:Ot(n)},jt=m,Et=W,Pt=q,It=TypeError,At={exports:{}},Rt=p,Tt=Object.defineProperty,Ct=function(t,e){try{Tt(Rt,t,{value:e,configurable:!0,writable:!0})}catch(n){Rt[t]=e}return e},kt=Ct,Mt=p["__core-js_shared__"]||kt("__core-js_shared__",{}),_t=Mt;(At.exports=function(t,e){return _t[t]||(_t[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.24.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Kt=U,Ft=Object,Lt=function(t){return Ft(Kt(t))},Nt=Lt,Yt=k({}.hasOwnProperty),zt=Object.hasOwn||function(t,e){return Yt(Nt(t),e)},Dt=k,Xt=0,Ut=Math.random(),Bt=Dt(1..toString),Vt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Bt(++Xt+Ut,36)},Gt=p,Wt=At.exports,$t=zt,qt=Vt,Zt=ft,Ht=st,Jt=Wt("wks"),Qt=Gt.Symbol,te=Qt&&Qt.for,ee=Ht?Qt:Qt&&Qt.withoutSetter||qt,ne=function(t){if(!$t(Jt,t)||!Zt&&"string"!=typeof Jt[t]){var e="Symbol."+t;Zt&&$t(Qt,t)?Jt[t]=Qt[t]:Jt[t]=Ht&&te?te(e):ee(e)}return Jt[t]},re=m,oe=q,ie=vt,ae=St,ue=function(t,e){var n,r;if("string"===e&&Et(n=t.toString)&&!Pt(r=jt(n,t)))return r;if(Et(n=t.valueOf)&&!Pt(r=jt(n,t)))return r;if("string"!==e&&Et(n=t.toString)&&!Pt(r=jt(n,t)))return r;throw It("Can't convert object to primitive value")},ce=TypeError,le=ne("toPrimitive"),fe=function(t,e){if(!oe(t)||ie(t))return t;var n,r=ae(t,le);if(r){if(void 0===e&&(e="default"),n=re(r,t,e),!oe(n)||ie(n))return n;throw ce("Can't convert object to primitive value")}return void 0===e&&(e="number"),ue(t,e)},se=vt,pe=function(t){var e=fe(t,"string");return se(e)?e:e+""},he=q,ye=p.document,de=he(ye)&&he(ye.createElement),ve=function(t){return de?ye.createElement(t):{}},be=ve,ge=!d&&!y((function(){return 7!=Object.defineProperty(be("div"),"a",{get:function(){return 7}}).a})),me=d,we=m,xe=w,Oe=P,Se=G,je=pe,Ee=zt,Pe=ge,Ie=Object.getOwnPropertyDescriptor;h.f=me?Ie:function(t,e){if(t=Se(t),e=je(e),Pe)try{return Ie(t,e)}catch(t){}if(Ee(t,e))return Oe(!we(xe.f,t,e),t[e])};var Ae={},Re=d&&y((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Te=q,Ce=String,ke=TypeError,Me=function(t){if(Te(t))return t;throw ke(Ce(t)+" is not an object")},_e=d,Ke=ge,Fe=Re,Le=Me,Ne=pe,Ye=TypeError,ze=Object.defineProperty,De=Object.getOwnPropertyDescriptor;Ae.f=_e?Fe?function(t,e,n){if(Le(t),e=Ne(e),Le(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=De(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return ze(t,e,n)}:ze:function(t,e,n){if(Le(t),e=Ne(e),Le(n),Ke)try{return ze(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ye("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Xe=Ae,Ue=P,Be=d?function(t,e,n){return Xe.f(t,e,Ue(1,n))}:function(t,e,n){return t[e]=n,t},Ve={exports:{}},Ge=d,We=zt,$e=Function.prototype,qe=Ge&&Object.getOwnPropertyDescriptor,Ze=We($e,"name"),He={EXISTS:Ze,PROPER:Ze&&"something"===function(){}.name,CONFIGURABLE:Ze&&(!Ge||Ge&&qe($e,"name").configurable)},Je=W,Qe=Mt,tn=k(Function.toString);Je(Qe.inspectSource)||(Qe.inspectSource=function(t){return tn(t)});var en,nn,rn,on=Qe.inspectSource,an=W,un=on,cn=p.WeakMap,ln=an(cn)&&/native code/.test(un(cn)),fn=At.exports,sn=Vt,pn=fn("keys"),hn=function(t){return pn[t]||(pn[t]=sn(t))},yn={},dn=ln,vn=p,bn=k,gn=q,mn=Be,wn=zt,xn=Mt,On=hn,Sn=yn,jn=vn.TypeError,En=vn.WeakMap;if(dn||xn.state){var Pn=xn.state||(xn.state=new En),In=bn(Pn.get),An=bn(Pn.has),Rn=bn(Pn.set);en=function(t,e){if(An(Pn,t))throw new jn("Object already initialized");return e.facade=t,Rn(Pn,t,e),e},nn=function(t){return In(Pn,t)||{}},rn=function(t){return An(Pn,t)}}else{var Tn=On("state");Sn[Tn]=!0,en=function(t,e){if(wn(t,Tn))throw new jn("Object already initialized");return e.facade=t,mn(t,Tn,e),e},nn=function(t){return wn(t,Tn)?t[Tn]:{}},rn=function(t){return wn(t,Tn)}}var Cn={set:en,get:nn,has:rn,enforce:function(t){return rn(t)?nn(t):en(t,{})},getterFor:function(t){return function(e){var n;if(!gn(e)||(n=nn(e)).type!==t)throw jn("Incompatible receiver, "+t+" required");return n}}},kn=y,Mn=W,_n=zt,Kn=d,Fn=He.CONFIGURABLE,Ln=on,Nn=Cn.enforce,Yn=Cn.get,zn=Object.defineProperty,Dn=Kn&&!kn((function(){return 8!==zn((function(){}),"length",{value:8}).length})),Xn=String(String).split("String"),Un=Ve.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!_n(t,"name")||Fn&&t.name!==e)&&(Kn?zn(t,"name",{value:e,configurable:!0}):t.name=e),Dn&&n&&_n(n,"arity")&&t.length!==n.arity&&zn(t,"length",{value:n.arity});try{n&&_n(n,"constructor")&&n.constructor?Kn&&zn(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=Nn(t);return _n(r,"source")||(r.source=Xn.join("string"==typeof e?e:"")),t};Function.prototype.toString=Un((function(){return Mn(this)&&Yn(this).source||Ln(this)}),"toString");var Bn=W,Vn=Ae,Gn=Ve.exports,Wn=Ct,$n=function(t,e,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:e;if(Bn(n)&&Gn(n,i,r),r.global)o?t[e]=n:Wn(e,n);else{try{r.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=n:Vn.f(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t},qn={},Zn=Math.ceil,Hn=Math.floor,Jn=Math.trunc||function(t){var e=+t;return(e>0?Hn:Zn)(e)},Qn=function(t){var e=+t;return e!=e||0===e?0:Jn(e)},tr=Qn,er=Math.max,nr=Math.min,rr=function(t,e){var n=tr(t);return n<0?er(n+e,0):nr(n,e)},or=Qn,ir=Math.min,ar=function(t){return t>0?ir(or(t),9007199254740991):0},ur=ar,cr=function(t){return ur(t.length)},lr=G,fr=rr,sr=cr,pr=function(t){return function(e,n,r){var o,i=lr(e),a=sr(i),u=fr(r,a);if(t&&n!=n){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},hr={includes:pr(!0),indexOf:pr(!1)},yr=zt,dr=G,vr=hr.indexOf,br=yn,gr=k([].push),mr=function(t,e){var n,r=dr(t),o=0,i=[];for(n in r)!yr(br,n)&&yr(r,n)&&gr(i,n);for(;e.length>o;)yr(r,n=e[o++])&&(~vr(i,n)||gr(i,n));return i},wr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],xr=mr,Or=wr.concat("length","prototype");qn.f=Object.getOwnPropertyNames||function(t){return xr(t,Or)};var Sr={};Sr.f=Object.getOwnPropertySymbols;var jr=Q,Er=qn,Pr=Sr,Ir=Me,Ar=k([].concat),Rr=jr("Reflect","ownKeys")||function(t){var e=Er.f(Ir(t)),n=Pr.f;return n?Ar(e,n(t)):e},Tr=zt,Cr=Rr,kr=h,Mr=Ae,_r=y,Kr=W,Fr=/#|\.prototype\./,Lr=function(t,e){var n=Yr[Nr(t)];return n==Dr||n!=zr&&(Kr(e)?_r(e):!!e)},Nr=Lr.normalize=function(t){return String(t).replace(Fr,".").toLowerCase()},Yr=Lr.data={},zr=Lr.NATIVE="N",Dr=Lr.POLYFILL="P",Xr=Lr,Ur=p,Br=h.f,Vr=Be,Gr=$n,Wr=Ct,$r=function(t,e,n){for(var r=Cr(e),o=Mr.f,i=kr.f,a=0;a<r.length;a++){var u=r[a];Tr(t,u)||n&&Tr(n,u)||o(t,u,i(e,u))}},qr=Xr,Zr=function(t,e){var n,r,o,i,a,u=t.target,c=t.global,l=t.stat;if(n=c?Ur:l?Ur[u]||Wr(u,{}):(Ur[u]||{}).prototype)for(r in e){if(i=e[r],o=t.dontCallGetSet?(a=Br(n,r))&&a.value:n[r],!qr(c?r:u+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;$r(i,o)}(t.sham||o&&o.sham)&&Vr(i,"sham",!0),Gr(n,r,i,t)}},Hr=F,Jr=Array.isArray||function(t){return"Array"==Hr(t)},Qr=TypeError,to=pe,eo=Ae,no=P,ro=function(t,e,n){var r=to(e);r in t?eo.f(t,r,no(0,n)):t[r]=n},oo={};oo[ne("toStringTag")]="z";var io="[object z]"===String(oo),ao=W,uo=F,co=ne("toStringTag"),lo=Object,fo="Arguments"==uo(function(){return arguments}()),so=io?uo:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=lo(t),co))?n:fo?uo(e):"Object"==(r=uo(e))&&ao(e.callee)?"Arguments":r},po=k,ho=y,yo=W,vo=so,bo=on,go=function(){},mo=[],wo=Q("Reflect","construct"),xo=/^\s*(?:class|function)\b/,Oo=po(xo.exec),So=!xo.exec(go),jo=function(t){if(!yo(t))return!1;try{return wo(go,mo,t),!0}catch(t){return!1}},Eo=function(t){if(!yo(t))return!1;switch(vo(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return So||!!Oo(xo,bo(t))}catch(t){return!0}};Eo.sham=!0;var Po=!wo||ho((function(){var t;return jo(jo.call)||!jo(Object)||!jo((function(){t=!0}))||t}))?Eo:jo,Io=Jr,Ao=Po,Ro=q,To=ne("species"),Co=Array,ko=function(t){var e;return Io(t)&&(e=t.constructor,(Ao(e)&&(e===Co||Io(e.prototype))||Ro(e)&&null===(e=e[To]))&&(e=void 0)),void 0===e?Co:e},Mo=y,_o=ut,Ko=ne("species"),Fo=Zr,Lo=y,No=Jr,Yo=q,zo=Lt,Do=cr,Xo=function(t){if(t>9007199254740991)throw Qr("Maximum allowed index exceeded");return t},Uo=ro,Bo=function(t,e){return new(ko(t))(0===e?0:e)},Vo=function(t){return _o>=51||!Mo((function(){var e=[];return(e.constructor={})[Ko]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Go=ut,Wo=ne("isConcatSpreadable"),$o=Go>=51||!Lo((function(){var t=[];return t[Wo]=!1,t.concat()[0]!==t})),qo=Vo("concat"),Zo=function(t){if(!Yo(t))return!1;var e=t[Wo];return void 0!==e?!!e:No(t)};Fo({target:"Array",proto:!0,arity:1,forced:!$o||!qo},{concat:function(t){var e,n,r,o,i,a=zo(this),u=Bo(a,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(Zo(i=-1===e?a:arguments[e]))for(o=Do(i),Xo(c+o),n=0;n<o;n++,c++)n in i&&Uo(u,c,i[n]);else Xo(c+1),Uo(u,c++,i);return u.length=c,u}});var Ho={transform:["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skewX","skewY","perspective"]},Jo=so,Qo=String,ti=function(t){if("Symbol"===Jo(t))throw TypeError("Cannot convert a Symbol value to a string");return Qo(t)},ei=Me,ni=y,ri=p.RegExp,oi=ni((function(){var t=ri("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),ii=oi||ni((function(){return!ri("a","y").sticky})),ai={BROKEN_CARET:oi||ni((function(){var t=ri("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:ii,UNSUPPORTED_Y:oi},ui={},ci=mr,li=wr,fi=Object.keys||function(t){return ci(t,li)},si=d,pi=Re,hi=Ae,yi=Me,di=G,vi=fi;ui.f=si&&!pi?Object.defineProperties:function(t,e){yi(t);for(var n,r=di(e),o=vi(e),i=o.length,a=0;i>a;)hi.f(t,n=o[a++],r[n]);return t};var bi,gi=Q("document","documentElement"),mi=Me,wi=ui,xi=wr,Oi=yn,Si=gi,ji=ve,Ei=hn("IE_PROTO"),Pi=function(){},Ii=function(t){return"<script>"+t+"<\/script>"},Ai=function(t){t.write(Ii("")),t.close();var e=t.parentWindow.Object;return t=null,e},Ri=function(){try{bi=new ActiveXObject("htmlfile")}catch(t){}var t,e;Ri="undefined"!=typeof document?document.domain&&bi?Ai(bi):((e=ji("iframe")).style.display="none",Si.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Ii("document.F=Object")),t.close(),t.F):Ai(bi);for(var n=xi.length;n--;)delete Ri.prototype[xi[n]];return Ri()};Oi[Ei]=!0;var Ti,Ci,ki=Object.create||function(t,e){var n;return null!==t?(Pi.prototype=mi(t),n=new Pi,Pi.prototype=null,n[Ei]=t):n=Ri(),void 0===e?n:wi.f(n,e)},Mi=y,_i=p.RegExp,Ki=Mi((function(){var t=_i(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),Fi=y,Li=p.RegExp,Ni=Fi((function(){var t=Li("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),Yi=m,zi=k,Di=ti,Xi=function(){var t=ei(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},Ui=ai,Bi=At.exports,Vi=ki,Gi=Cn.get,Wi=Ki,$i=Ni,qi=Bi("native-string-replace",String.prototype.replace),Zi=RegExp.prototype.exec,Hi=Zi,Ji=zi("".charAt),Qi=zi("".indexOf),ta=zi("".replace),ea=zi("".slice),na=(Ci=/b*/g,Yi(Zi,Ti=/a/,"a"),Yi(Zi,Ci,"a"),0!==Ti.lastIndex||0!==Ci.lastIndex),ra=Ui.BROKEN_CARET,oa=void 0!==/()??/.exec("")[1];(na||oa||ra||Wi||$i)&&(Hi=function(t){var e,n,r,o,i,a,u,c=this,l=Gi(c),f=Di(t),s=l.raw;if(s)return s.lastIndex=c.lastIndex,e=Yi(Hi,s,f),c.lastIndex=s.lastIndex,e;var p=l.groups,h=ra&&c.sticky,y=Yi(Xi,c),d=c.source,v=0,b=f;if(h&&(y=ta(y,"y",""),-1===Qi(y,"g")&&(y+="g"),b=ea(f,c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==Ji(f,c.lastIndex-1))&&(d="(?: "+d+")",b=" "+b,v++),n=new RegExp("^(?:"+d+")",y)),oa&&(n=new RegExp("^"+d+"$(?!\\s)",y)),na&&(r=c.lastIndex),o=Yi(Zi,h?n:c,b),h?o?(o.input=ea(o.input,v),o[0]=ea(o[0],v),o.index=c.lastIndex,c.lastIndex+=o[0].length):c.lastIndex=0:na&&o&&(c.lastIndex=c.global?o.index+o[0].length:r),oa&&o&&o.length>1&&Yi(qi,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=a=Vi(null),i=0;i<p.length;i++)a[(u=p[i])[0]]=o[u[1]];return o});var ia=Hi;Zr({target:"RegExp",proto:!0,forced:/./.exec!==ia},{exec:ia});var aa=v,ua=Function.prototype,ca=ua.apply,la=ua.call,fa="object"==typeof Reflect&&Reflect.apply||(aa?la.bind(ca):function(){return la.apply(ca,arguments)}),sa=k,pa=$n,ha=ia,ya=y,da=ne,va=Be,ba=da("species"),ga=RegExp.prototype,ma=q,wa=F,xa=ne("match"),Oa=Po,Sa=gt,ja=TypeError,Ea=Me,Pa=function(t){if(Oa(t))return t;throw ja(Sa(t)+" is not a constructor")},Ia=ne("species"),Aa=k,Ra=Qn,Ta=ti,Ca=U,ka=Aa("".charAt),Ma=Aa("".charCodeAt),_a=Aa("".slice),Ka=function(t){return function(e,n){var r,o,i=Ta(Ca(e)),a=Ra(n),u=i.length;return a<0||a>=u?t?"":void 0:(r=Ma(i,a))<55296||r>56319||a+1===u||(o=Ma(i,a+1))<56320||o>57343?t?ka(i,a):r:t?_a(i,a,a+2):o-56320+(r-55296<<10)+65536}},Fa={codeAt:Ka(!1),charAt:Ka(!0)}.charAt,La=rr,Na=cr,Ya=ro,za=Array,Da=Math.max,Xa=m,Ua=Me,Ba=W,Va=F,Ga=ia,Wa=TypeError,$a=fa,qa=m,Za=k,Ha=function(t,e,n,r){var o=da(t),i=!ya((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),a=i&&!ya((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[ba]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return e=!0,null},n[o](""),!e}));if(!i||!a||n){var u=sa(/./[o]),c=e(o,""[t],(function(t,e,n,r,o){var a=sa(t),c=e.exec;return c===ha||c===ga.exec?i&&!o?{done:!0,value:u(e,n,r)}:{done:!0,value:a(n,e,r)}:{done:!1}}));pa(String.prototype,t,c[0]),pa(ga,o,c[1])}r&&va(ga[o],"sham",!0)},Ja=function(t){var e;return ma(t)&&(void 0!==(e=t[xa])?!!e:"RegExp"==wa(t))},Qa=Me,tu=U,eu=function(t,e){var n,r=Ea(t).constructor;return void 0===r||null==(n=Ea(r)[Ia])?e:Pa(n)},nu=function(t,e,n){return e+(n?Fa(t,e).length:1)},ru=ar,ou=ti,iu=St,au=function(t,e,n){for(var r=Na(t),o=La(e,r),i=La(void 0===n?r:n,r),a=za(Da(i-o,0)),u=0;o<i;o++,u++)Ya(a,u,t[o]);return a.length=u,a},uu=function(t,e){var n=t.exec;if(Ba(n)){var r=Xa(n,t,e);return null!==r&&Ua(r),r}if("RegExp"===Va(t))return Xa(Ga,t,e);throw Wa("RegExp#exec called on incompatible receiver")},cu=ia,lu=y,fu=ai.UNSUPPORTED_Y,su=Math.min,pu=[].push,hu=Za(/./.exec),yu=Za(pu),du=Za("".slice);Ha("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=ou(tu(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!Ja(t))return qa(e,r,t,o);for(var i,a,u,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,s=new RegExp(t.source,l+"g");(i=qa(cu,s,r))&&!((a=s.lastIndex)>f&&(yu(c,du(r,f,i.index)),i.length>1&&i.index<r.length&&$a(pu,c,au(i,1)),u=i[0].length,f=a,c.length>=o));)s.lastIndex===i.index&&s.lastIndex++;return f===r.length?!u&&hu(s,"")||yu(c,""):yu(c,du(r,f)),c.length>o?au(c,0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:qa(e,this,t,n)}:e,[function(e,n){var o=tu(this),i=null==e?void 0:iu(e,t);return i?qa(i,e,o,n):qa(r,ou(o),e,n)},function(t,o){var i=Qa(this),a=ou(t),u=n(r,i,a,o,r!==e);if(u.done)return u.value;var c=eu(i,RegExp),l=i.unicode,f=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(fu?"g":"y"),s=new c(fu?"^(?:"+i.source+")":i,f),p=void 0===o?4294967295:o>>>0;if(0===p)return[];if(0===a.length)return null===uu(s,a)?[a]:[];for(var h=0,y=0,d=[];y<a.length;){s.lastIndex=fu?0:y;var v,b=uu(s,fu?du(a,y):a);if(null===b||(v=su(ru(s.lastIndex+(fu?y:0)),a.length))===h)y=nu(a,y,l);else{if(yu(d,du(a,h,y)),d.length===p)return d;for(var g=1;g<=b.length-1;g++)if(yu(d,b[g]),d.length===p)return d;y=h=v}}return yu(d,du(a,h)),d}]}),!!lu((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),fu);var vu=Object.prototype.hasOwnProperty,bu=function(o){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(p,t.Effect);var a,c,f,s=u(p);function p(){return e(this,p),s.apply(this,arguments)}return a=p,c=[{key:"getScratchValue",value:function(){if("transform"!==this.attributeKey)return this.context.window.getComputedStyle(this.element)[this.attributeKey];for(var t={},e=Ho[this.attributeKey],n=function(t,e){var n=t.getComputedStyle(e).transform;if(""===n||"none"===n)return{};var r,o,i,a,u,c,l,f,s=n.split("(")[1].split(")")[0].split(",");return r=s,o=Math.atan2(r[1],r[0]),i=Math.pow(r[0],2)+Math.pow(r[1],2),a=Math.pow(r[2],2)+Math.pow(r[3],2),u=Math.sqrt(i),c=(r[0]*r[3]-r[2]*r[1])/u,l=Math.atan2(r[0]*r[2]+r[1]*r[3],i),f=Math.atan2(r[1]*r[3]+r[0]*r[2],a),{rotate:o/(Math.PI/180)+"deg",scaleX:u,scaleY:c,skewX:(1===i?l/(Math.PI/180):0)+"deg",skewY:(1===a?f/(Math.PI/180):0)+"deg",translateX:r[4]+"px",translateY:r[5]+"px"}}(this.context.window,this.element),r=0;r<e.length;r++)t[e[r]]=vu.call(n,e[r])?n[e[r]]:this.context.window.getComputedStyle(this.element)[e[r]];return t}},{key:"onGetContext",value:function(){var t,e,n,r,o;if(this.initialized=!1,this.options={},vu.call(Ho,this.attributeKey)){var i,a=l(Ho[this.attributeKey]);try{for(a.s();!(i=a.n()).done;){var u,c,f,s,p,h,y=i.value;vu.call(this.targetValue,y)&&(null!==(c=(u=this.options).transform)&&void 0!==c||(u.transform=[]),null!==(s=(f=this.options.transform)[0])&&void 0!==s||(f[0]=""),null!==(h=(p=this.options.transform)[1])&&void 0!==h||(p[1]=""),this.options.transform[0]+=" ".concat([y],"(").concat(this.initialValue[y]||0,")"),this.options.transform[1]+=" ".concat([y],"(").concat(this.targetValue[y],")"))}}catch(t){a.e(t)}finally{a.f()}}else this.options[this.attributeKey]=[this.initialValue,this.targetValue];null!==(e=(t=this.context).CSSAnimationLayer)&&void 0!==e||(t.CSSAnimationLayer={}),null!==(o=(n=this.context.CSSAnimationLayer)[r=this.element.dataset.motorcortex2Id])&&void 0!==o||(n[r]={})}},{key:"createAnimation",value:function(){this.creating=!0,this.animation&&(this.animation.startTime=this.context.window.document.timeline.currentTime-this.animation.currentTime*this.animation.playbackRate),this.animation=this.element.animate([r({},this.attributeKey,this.options[this.attributeKey][0]),r({},this.attributeKey,this.options[this.attributeKey][1])],{duration:this.props.duration,fill:"forwards",easing:"linear"}),this.animation.pause(),this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][this.attributeKey]={start:this.options[this.attributeKey][0],end:this.options[this.attributeKey][1]},this.creating=!1}},{key:"checkAnimation",value:function(){var t=this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][this.attributeKey]||{},e=t.start,n=t.end;e===this.options[this.attributeKey][0]&&n===this.options[this.attributeKey][1]||this.createAnimation()}},{key:"onProgress",value:function(t){this.creating||(this.checkAnimation(),this.animation.currentTime=this.props.duration*t)}}],c&&n(a.prototype,c),f&&n(a,f),Object.defineProperty(a,"prototype",{writable:!1}),p}(),gu={npm_name:"@donkeyclip/motorcortex-waa",version:"1.0.4",incidents:[{exportable:bu,name:"WAA"}]};module.exports=gu;
