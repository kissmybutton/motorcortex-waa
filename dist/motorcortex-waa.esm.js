import{Effect as t}from"@donkeyclip/motorcortex";function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,f(r.key),r)}}function n(t,e,n){return(e=f(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function i(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var a=r(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return i(this,n)}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function f(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l=function(t){return t&&t.Math===Math&&t},p=l("object"==typeof globalThis&&globalThis)||l("object"==typeof window&&window)||l("object"==typeof self&&self)||l("object"==typeof s&&s)||function(){return this}()||s||Function("return this")(),y={},h=function(t){try{return!!t()}catch(t){return!0}},b=!h((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})),v=!h((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),m=v,d=Function.prototype.call,g=m?d.bind(d):function(){return d.apply(d,arguments)},w={},S={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor,j=O&&!S.call({1:2},1);w.f=j?function(t){var e=O(this,t);return!!e&&e.enumerable}:S;var P,x,A=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},T=v,E=Function.prototype,M=E.call,k=T&&E.bind.bind(M,M),C=T?k:function(t){return function(){return M.apply(t,arguments)}},I=C,_=I({}.toString),K=I("".slice),L=function(t){return K(_(t),8,-1)},D=h,F=L,R=Object,z=C("".split),N=D((function(){return!R("z").propertyIsEnumerable(0)}))?function(t){return"String"===F(t)?z(t,""):R(t)}:R,X=function(t){return null==t},Y=X,V=TypeError,G=function(t){if(Y(t))throw V("Can't call method on "+t);return t},B=N,U=G,W=function(t){return B(U(t))},H="object"==typeof document&&document.all,Z={all:H,IS_HTMLDDA:void 0===H&&void 0!==H},q=Z.all,$=Z.IS_HTMLDDA?function(t){return"function"==typeof t||t===q}:function(t){return"function"==typeof t},J=$,Q=Z.all,tt=Z.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:J(t)||t===Q}:function(t){return"object"==typeof t?null!==t:J(t)},et=p,nt=$,rt=function(t,e){return arguments.length<2?(n=et[t],nt(n)?n:void 0):et[t]&&et[t][e];var n},ot=C({}.isPrototypeOf),it=p,at="undefined"!=typeof navigator&&String(navigator.userAgent)||"",ut=it.process,ct=it.Deno,ft=ut&&ut.versions||ct&&ct.version,st=ft&&ft.v8;st&&(x=(P=st.split("."))[0]>0&&P[0]<4?1:+(P[0]+P[1])),!x&&at&&(!(P=at.match(/Edge\/(\d+)/))||P[1]>=74)&&(P=at.match(/Chrome\/(\d+)/))&&(x=+P[1]);var lt=x,pt=lt,yt=h,ht=p.String,bt=!!Object.getOwnPropertySymbols&&!yt((function(){var t=Symbol("symbol detection");return!ht(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&pt&&pt<41})),vt=bt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,mt=rt,dt=$,gt=ot,wt=Object,St=vt?function(t){return"symbol"==typeof t}:function(t){var e=mt("Symbol");return dt(e)&&gt(e.prototype,wt(t))},Ot=String,jt=$,Pt=function(t){try{return Ot(t)}catch(t){return"Object"}},xt=TypeError,At=function(t){if(jt(t))return t;throw xt(Pt(t)+" is not a function")},Tt=X,Et=g,Mt=$,kt=tt,Ct=TypeError,It={exports:{}},_t=p,Kt=Object.defineProperty,Lt=function(t,e){try{Kt(_t,t,{value:e,configurable:!0,writable:!0})}catch(n){_t[t]=e}return e},Dt=Lt,Ft="__core-js_shared__",Rt=p[Ft]||Dt(Ft,{}),zt=Rt;(It.exports=function(t,e){return zt[t]||(zt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.1",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Nt=G,Xt=Object,Yt=function(t){return Xt(Nt(t))},Vt=Yt,Gt=C({}.hasOwnProperty),Bt=Object.hasOwn||function(t,e){return Gt(Vt(t),e)},Ut=C,Wt=0,Ht=Math.random(),Zt=Ut(1..toString),qt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Zt(++Wt+Ht,36)},$t=p,Jt=It.exports,Qt=Bt,te=qt,ee=bt,ne=vt,re=$t.Symbol,oe=Jt("wks"),ie=ne?re.for||re:re&&re.withoutSetter||te,ae=function(t){return Qt(oe,t)||(oe[t]=ee&&Qt(re,t)?re[t]:ie("Symbol."+t)),oe[t]},ue=g,ce=tt,fe=St,se=function(t,e){var n=t[e];return Tt(n)?void 0:At(n)},le=function(t,e){var n,r;if("string"===e&&Mt(n=t.toString)&&!kt(r=Et(n,t)))return r;if(Mt(n=t.valueOf)&&!kt(r=Et(n,t)))return r;if("string"!==e&&Mt(n=t.toString)&&!kt(r=Et(n,t)))return r;throw Ct("Can't convert object to primitive value")},pe=TypeError,ye=ae("toPrimitive"),he=function(t,e){if(!ce(t)||fe(t))return t;var n,r=se(t,ye);if(r){if(void 0===e&&(e="default"),n=ue(r,t,e),!ce(n)||fe(n))return n;throw pe("Can't convert object to primitive value")}return void 0===e&&(e="number"),le(t,e)},be=St,ve=function(t){var e=he(t,"string");return be(e)?e:e+""},me=tt,de=p.document,ge=me(de)&&me(de.createElement),we=function(t){return ge?de.createElement(t):{}},Se=!b&&!h((function(){return 7!==Object.defineProperty(we("div"),"a",{get:function(){return 7}}).a})),Oe=b,je=g,Pe=w,xe=A,Ae=W,Te=ve,Ee=Bt,Me=Se,ke=Object.getOwnPropertyDescriptor;y.f=Oe?ke:function(t,e){if(t=Ae(t),e=Te(e),Me)try{return ke(t,e)}catch(t){}if(Ee(t,e))return xe(!je(Pe.f,t,e),t[e])};var Ce={},Ie=b&&h((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),_e=tt,Ke=String,Le=TypeError,De=function(t){if(_e(t))return t;throw Le(Ke(t)+" is not an object")},Fe=b,Re=Se,ze=Ie,Ne=De,Xe=ve,Ye=TypeError,Ve=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,Be="enumerable",Ue="configurable",We="writable";Ce.f=Fe?ze?function(t,e,n){if(Ne(t),e=Xe(e),Ne(n),"function"==typeof t&&"prototype"===e&&"value"in n&&We in n&&!n[We]){var r=Ge(t,e);r&&r[We]&&(t[e]=n.value,n={configurable:Ue in n?n[Ue]:r[Ue],enumerable:Be in n?n[Be]:r[Be],writable:!1})}return Ve(t,e,n)}:Ve:function(t,e,n){if(Ne(t),e=Xe(e),Ne(n),Re)try{return Ve(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ye("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var He=Ce,Ze=A,qe=b?function(t,e,n){return He.f(t,e,Ze(1,n))}:function(t,e,n){return t[e]=n,t},$e={exports:{}},Je=b,Qe=Bt,tn=Function.prototype,en=Je&&Object.getOwnPropertyDescriptor,nn=Qe(tn,"name"),rn={EXISTS:nn,PROPER:nn&&"something"===function(){}.name,CONFIGURABLE:nn&&(!Je||Je&&en(tn,"name").configurable)},on=$,an=Rt,un=C(Function.toString);on(an.inspectSource)||(an.inspectSource=function(t){return un(t)});var cn,fn,sn,ln=an.inspectSource,pn=$,yn=p.WeakMap,hn=pn(yn)&&/native code/.test(String(yn)),bn=It.exports,vn=qt,mn=bn("keys"),dn={},gn=hn,wn=p,Sn=tt,On=qe,jn=Bt,Pn=Rt,xn=function(t){return mn[t]||(mn[t]=vn(t))},An=dn,Tn="Object already initialized",En=wn.TypeError,Mn=wn.WeakMap;if(gn||Pn.state){var kn=Pn.state||(Pn.state=new Mn);kn.get=kn.get,kn.has=kn.has,kn.set=kn.set,cn=function(t,e){if(kn.has(t))throw En(Tn);return e.facade=t,kn.set(t,e),e},fn=function(t){return kn.get(t)||{}},sn=function(t){return kn.has(t)}}else{var Cn=xn("state");An[Cn]=!0,cn=function(t,e){if(jn(t,Cn))throw En(Tn);return e.facade=t,On(t,Cn,e),e},fn=function(t){return jn(t,Cn)?t[Cn]:{}},sn=function(t){return jn(t,Cn)}}var In={set:cn,get:fn,has:sn,enforce:function(t){return sn(t)?fn(t):cn(t,{})},getterFor:function(t){return function(e){var n;if(!Sn(e)||(n=fn(e)).type!==t)throw En("Incompatible receiver, "+t+" required");return n}}},_n=C,Kn=h,Ln=$,Dn=Bt,Fn=b,Rn=rn.CONFIGURABLE,zn=ln,Nn=In.enforce,Xn=In.get,Yn=String,Vn=Object.defineProperty,Gn=_n("".slice),Bn=_n("".replace),Un=_n([].join),Wn=Fn&&!Kn((function(){return 8!==Vn((function(){}),"length",{value:8}).length})),Hn=String(String).split("String"),Zn=$e.exports=function(t,e,n){"Symbol("===Gn(Yn(e),0,7)&&(e="["+Bn(Yn(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!Dn(t,"name")||Rn&&t.name!==e)&&(Fn?Vn(t,"name",{value:e,configurable:!0}):t.name=e),Wn&&n&&Dn(n,"arity")&&t.length!==n.arity&&Vn(t,"length",{value:n.arity});try{n&&Dn(n,"constructor")&&n.constructor?Fn&&Vn(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=Nn(t);return Dn(r,"source")||(r.source=Un(Hn,"string"==typeof e?e:"")),t};Function.prototype.toString=Zn((function(){return Ln(this)&&Xn(this).source||zn(this)}),"toString");var qn=$,$n=Ce,Jn=$e.exports,Qn=Lt,tr={},er=Math.ceil,nr=Math.floor,rr=Math.trunc||function(t){var e=+t;return(e>0?nr:er)(e)},or=function(t){var e=+t;return e!=e||0===e?0:rr(e)},ir=or,ar=Math.max,ur=Math.min,cr=or,fr=Math.min,sr=function(t){return t>0?fr(cr(t),9007199254740991):0},lr=function(t){return sr(t.length)},pr=W,yr=function(t,e){var n=ir(t);return n<0?ar(n+e,0):ur(n,e)},hr=lr,br=function(t){return function(e,n,r){var o,i=pr(e),a=hr(i),u=yr(r,a);if(t&&n!=n){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},vr={includes:br(!0),indexOf:br(!1)},mr=Bt,dr=W,gr=vr.indexOf,wr=dn,Sr=C([].push),Or=function(t,e){var n,r=dr(t),o=0,i=[];for(n in r)!mr(wr,n)&&mr(r,n)&&Sr(i,n);for(;e.length>o;)mr(r,n=e[o++])&&(~gr(i,n)||Sr(i,n));return i},jr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");tr.f=Object.getOwnPropertyNames||function(t){return Or(t,jr)};var Pr={};Pr.f=Object.getOwnPropertySymbols;var xr=rt,Ar=tr,Tr=Pr,Er=De,Mr=C([].concat),kr=xr("Reflect","ownKeys")||function(t){var e=Ar.f(Er(t)),n=Tr.f;return n?Mr(e,n(t)):e},Cr=Bt,Ir=kr,_r=y,Kr=Ce,Lr=h,Dr=$,Fr=/#|\.prototype\./,Rr=function(t,e){var n=Nr[zr(t)];return n===Yr||n!==Xr&&(Dr(e)?Lr(e):!!e)},zr=Rr.normalize=function(t){return String(t).replace(Fr,".").toLowerCase()},Nr=Rr.data={},Xr=Rr.NATIVE="N",Yr=Rr.POLYFILL="P",Vr=Rr,Gr=p,Br=y.f,Ur=qe,Wr=function(t,e,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:e;if(qn(n)&&Jn(n,i,r),r.global)o?t[e]=n:Qn(e,n);else{try{r.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=n:$n.f(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t},Hr=Lt,Zr=function(t,e,n){for(var r=Ir(e),o=Kr.f,i=_r.f,a=0;a<r.length;a++){var u=r[a];Cr(t,u)||n&&Cr(n,u)||o(t,u,i(e,u))}},qr=Vr,$r=L,Jr=Array.isArray||function(t){return"Array"===$r(t)},Qr=TypeError,to=ve,eo=Ce,no=A,ro={};ro[ae("toStringTag")]="z";var oo="[object z]"===String(ro),io=$,ao=L,uo=ae("toStringTag"),co=Object,fo="Arguments"===ao(function(){return arguments}()),so=C,lo=h,po=$,yo=oo?ao:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=co(t),uo))?n:fo?ao(e):"Object"===(r=ao(e))&&io(e.callee)?"Arguments":r},ho=ln,bo=function(){},vo=[],mo=rt("Reflect","construct"),go=/^\s*(?:class|function)\b/,wo=so(go.exec),So=!go.exec(bo),Oo=function(t){if(!po(t))return!1;try{return mo(bo,vo,t),!0}catch(t){return!1}},jo=function(t){if(!po(t))return!1;switch(yo(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return So||!!wo(go,ho(t))}catch(t){return!0}};jo.sham=!0;var Po=!mo||lo((function(){var t;return Oo(Oo.call)||!Oo(Object)||!Oo((function(){t=!0}))||t}))?jo:Oo,xo=Jr,Ao=Po,To=tt,Eo=ae("species"),Mo=Array,ko=function(t){var e;return xo(t)&&(e=t.constructor,(Ao(e)&&(e===Mo||xo(e.prototype))||To(e)&&null===(e=e[Eo]))&&(e=void 0)),void 0===e?Mo:e},Co=h,Io=lt,_o=ae("species"),Ko=function(t,e){var n,r,o,i,a,u=t.target,c=t.global,f=t.stat;if(n=c?Gr:f?Gr[u]||Hr(u,{}):(Gr[u]||{}).prototype)for(r in e){if(i=e[r],o=t.dontCallGetSet?(a=Br(n,r))&&a.value:n[r],!qr(c?r:u+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Zr(i,o)}(t.sham||o&&o.sham)&&Ur(i,"sham",!0),Wr(n,r,i,t)}},Lo=h,Do=Jr,Fo=tt,Ro=Yt,zo=lr,No=function(t){if(t>9007199254740991)throw Qr("Maximum allowed index exceeded");return t},Xo=function(t,e,n){var r=to(e);r in t?eo.f(t,r,no(0,n)):t[r]=n},Yo=function(t,e){return new(ko(t))(0===e?0:e)},Vo=function(t){return Io>=51||!Co((function(){var e=[];return(e.constructor={})[_o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Go=lt,Bo=ae("isConcatSpreadable"),Uo=Go>=51||!Lo((function(){var t=[];return t[Bo]=!1,t.concat()[0]!==t})),Wo=function(t){if(!Fo(t))return!1;var e=t[Bo];return void 0!==e?!!e:Do(t)};Ko({target:"Array",proto:!0,arity:1,forced:!Uo||!Vo("concat")},{concat:function(t){var e,n,r,o,i,a=Ro(this),u=Yo(a,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(Wo(i=-1===e?a:arguments[e]))for(o=zo(i),No(c+o),n=0;n<o;n++,c++)n in i&&Xo(u,c,i[n]);else No(c+1),Xo(u,c++,i);return u.length=c,u}});var Ho={transform:["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skewX","skewY","perspective"]};var Zo=Object.prototype.hasOwnProperty,qo=function(r){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}(l,t);var i,u,f,s=a(l);function l(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),s.apply(this,arguments)}return i=l,u=[{key:"getScratchValue",value:function(){if("transform"!==this.attributeKey)return this.context.window.getComputedStyle(this.element)[this.attributeKey];for(var t={},e=Ho[this.attributeKey],n=function(t,e){var n=t.getComputedStyle(e).transform;if(""===n||"none"===n)return{};var r,o,i,a,u,c,f,s,l=n.split("(")[1].split(")")[0].split(",");return r=l,o=Math.atan2(r[1],r[0]),i=Math.pow(r[0],2)+Math.pow(r[1],2),a=Math.pow(r[2],2)+Math.pow(r[3],2),u=Math.sqrt(i),c=(r[0]*r[3]-r[2]*r[1])/u,f=Math.atan2(r[0]*r[2]+r[1]*r[3],i),s=Math.atan2(r[1]*r[3]+r[0]*r[2],a),{rotate:o/(Math.PI/180)+"deg",scaleX:u,scaleY:c,skewX:(1===i?f/(Math.PI/180):0)+"deg",skewY:(1===a?s/(Math.PI/180):0)+"deg",translateX:r[4]+"px",translateY:r[5]+"px"}}(this.context.window,this.element),r=0;r<e.length;r++)t[e[r]]=Zo.call(n,e[r])?n[e[r]]:this.context.window.getComputedStyle(this.element)[e[r]];return t}},{key:"onGetContext",value:function(){var t,e,n,r,o;if(this.initialized=!1,this.options={},Zo.call(Ho,this.attributeKey)){var i,a=c(Ho[this.attributeKey]);try{for(a.s();!(i=a.n()).done;){var u,f,s,l,p,y,h=i.value;Zo.call(this.targetValue,h)&&(null!==(f=(u=this.options).transform)&&void 0!==f||(u.transform=[]),null!==(l=(s=this.options.transform)[0])&&void 0!==l||(s[0]=""),null!==(y=(p=this.options.transform)[1])&&void 0!==y||(p[1]=""),this.options.transform[0]+=" ".concat([h],"(").concat(this.initialValue[h]||0,")"),this.options.transform[1]+=" ".concat([h],"(").concat(this.targetValue[h],")"))}}catch(t){a.e(t)}finally{a.f()}}else this.options[this.attributeKey]=[this.initialValue,this.targetValue];null!==(e=(t=this.context).CSSAnimationLayer)&&void 0!==e||(t.CSSAnimationLayer={}),null!==(o=(n=this.context.CSSAnimationLayer)[r=this.element.dataset.motorcortex2Id])&&void 0!==o||(n[r]={})}},{key:"createAnimation",value:function(){this.creating=!0,this.animation&&(this.animation.startTime=this.context.window.document.timeline.currentTime-this.animation.currentTime*this.animation.playbackRate),this.animation=this.element.animate([n({},this.attributeKey,this.options[this.attributeKey][0]),n({},this.attributeKey,this.options[this.attributeKey][1])],{duration:this.props.duration,fill:"forwards",easing:"linear"}),this.animation.pause(),this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][this.attributeKey]={start:this.options[this.attributeKey][0],end:this.options[this.attributeKey][1]},this.creating=!1}},{key:"checkAnimation",value:function(){var t=this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][this.attributeKey]||{},e=t.start,n=t.end;e===this.options[this.attributeKey][0]&&n===this.options[this.attributeKey][1]||this.createAnimation()}},{key:"onProgress",value:function(t){this.creating||(this.checkAnimation(),this.animation.currentTime=this.props.duration*t)}}],u&&e(i.prototype,u),f&&e(i,f),Object.defineProperty(i,"prototype",{writable:!1}),l}(),$o={npm_name:"@donkeyclip/motorcortex-waa",version:"1.0.4",incidents:[{exportable:qo,name:"WAA"}]};export{$o as default};
