import t from"@donkeyclip/motorcortex";var e,n,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a=Function.prototype,u=a.bind,c=a.call,l=u&&u.bind(c),f=u?function(t){return t&&l(c,t)}:function(t){return t&&function(){return c.apply(t,arguments)}},s=function(t){return t&&t.Math==Math&&t},p=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof r&&r)||function(){return this}()||Function("return this")(),h=p.TypeError,y=function(t){if(null==t)throw h("Can't call method on "+t);return t},d=y,v=p.Object,g=function(t){return v(d(t))},b=g,m=f({}.hasOwnProperty),x=Object.hasOwn||function(t,e){return m(b(t),e)},w=i,S=x,O=Function.prototype,j=w&&Object.getOwnPropertyDescriptor,E=S(O,"name"),A={EXISTS:E,PROPER:E&&"something"===function(){}.name,CONFIGURABLE:E&&(!w||w&&j(O,"name").configurable)},I={},P=function(t){return"function"==typeof t},T=P,R=function(t){return"object"==typeof t?null!==t:T(t)},C=R,M=p.document,k=C(M)&&C(M.createElement),_=function(t){return k?M.createElement(t):{}},K=_,F=!i&&!o((function(){return 7!=Object.defineProperty(K("div"),"a",{get:function(){return 7}}).a})),L=p,Y=R,N=L.String,X=L.TypeError,D=function(t){if(Y(t))return t;throw X(N(t)+" is not an object")},z=Function.prototype.call,U=z.bind?z.bind(z):function(){return z.apply(z,arguments)},B=p,G=P,V=function(t){return G(t)?t:void 0},W=function(t,e){return arguments.length<2?V(B[t]):B[t]&&B[t][e]},$=f({}.isPrototypeOf),Z=p,q=W("navigator","userAgent")||"",H=Z.process,J=Z.Deno,Q=H&&H.versions||J&&J.version,tt=Q&&Q.v8;tt&&(n=(e=tt.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!n&&q&&(!(e=q.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=q.match(/Chrome\/(\d+)/))&&(n=+e[1]);var et=n,nt=et,rt=o,ot=!!Object.getOwnPropertySymbols&&!rt((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&nt&&nt<41})),it=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,at=W,ut=P,ct=$,lt=it,ft=p.Object,st=lt?function(t){return"symbol"==typeof t}:function(t){var e=at("Symbol");return ut(e)&&ct(e.prototype,ft(t))},pt=p.String,ht=function(t){try{return pt(t)}catch(t){return"Object"}},yt=P,dt=ht,vt=p.TypeError,gt=function(t){if(yt(t))return t;throw vt(dt(t)+" is not a function")},bt=function(t,e){var n=t[e];return null==n?void 0:gt(n)},mt=U,xt=P,wt=R,St=p.TypeError,Ot={exports:{}},jt=p,Et=Object.defineProperty,At=function(t,e){try{Et(jt,t,{value:e,configurable:!0,writable:!0})}catch(n){jt[t]=e}return e},It=At,Pt=p["__core-js_shared__"]||It("__core-js_shared__",{}),Tt=Pt;(Ot.exports=function(t,e){return Tt[t]||(Tt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var Rt=f,Ct=0,Mt=Math.random(),kt=Rt(1..toString),_t=function(t){return"Symbol("+(void 0===t?"":t)+")_"+kt(++Ct+Mt,36)},Kt=p,Ft=Ot.exports,Lt=x,Yt=_t,Nt=ot,Xt=it,Dt=Ft("wks"),zt=Kt.Symbol,Ut=zt&&zt.for,Bt=Xt?zt:zt&&zt.withoutSetter||Yt,Gt=function(t){if(!Lt(Dt,t)||!Nt&&"string"!=typeof Dt[t]){var e="Symbol."+t;Nt&&Lt(zt,t)?Dt[t]=zt[t]:Dt[t]=Xt&&Ut?Ut(e):Bt(e)}return Dt[t]},Vt=U,Wt=R,$t=st,Zt=bt,qt=function(t,e){var n,r;if("string"===e&&xt(n=t.toString)&&!wt(r=mt(n,t)))return r;if(xt(n=t.valueOf)&&!wt(r=mt(n,t)))return r;if("string"!==e&&xt(n=t.toString)&&!wt(r=mt(n,t)))return r;throw St("Can't convert object to primitive value")},Ht=Gt,Jt=p.TypeError,Qt=Ht("toPrimitive"),te=function(t,e){if(!Wt(t)||$t(t))return t;var n,r=Zt(t,Qt);if(r){if(void 0===e&&(e="default"),n=Vt(r,t,e),!Wt(n)||$t(n))return n;throw Jt("Can't convert object to primitive value")}return void 0===e&&(e="number"),qt(t,e)},ee=st,ne=function(t){var e=te(t,"string");return ee(e)?e:e+""},re=i,oe=F,ie=D,ae=ne,ue=p.TypeError,ce=Object.defineProperty;I.f=re?ce:function(t,e,n){if(ie(t),e=ae(e),ie(n),oe)try{return ce(t,e,n)}catch(t){}if("get"in n||"set"in n)throw ue("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var le=i,fe=A.EXISTS,se=f,pe=I.f,he=Function.prototype,ye=se(he.toString),de=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,ve=se(de.exec);function ge(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function be(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function me(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xe(t){return xe=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},xe(t)}function we(t,e){return we=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},we(t,e)}function Se(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function Oe(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=xe(t);if(e){var o=xe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Se(this,n)}}function je(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ee(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return je(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?je(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}le&&!fe&&pe(he,"name",{configurable:!0,get:function(){try{return ve(de,ye(this))[1]}catch(t){return""}}});var Ae={},Ie={},Pe={}.propertyIsEnumerable,Te=Object.getOwnPropertyDescriptor,Re=Te&&!Pe.call({1:2},1);Ie.f=Re?function(t){var e=Te(this,t);return!!e&&e.enumerable}:Pe;var Ce=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},Me=f,ke=Me({}.toString),_e=Me("".slice),Ke=function(t){return _e(ke(t),8,-1)},Fe=f,Le=o,Ye=Ke,Ne=p.Object,Xe=Fe("".split),De=Le((function(){return!Ne("z").propertyIsEnumerable(0)}))?function(t){return"String"==Ye(t)?Xe(t,""):Ne(t)}:Ne,ze=y,Ue=function(t){return De(ze(t))},Be=i,Ge=U,Ve=Ie,We=Ce,$e=Ue,Ze=ne,qe=x,He=F,Je=Object.getOwnPropertyDescriptor;Ae.f=Be?Je:function(t,e){if(t=$e(t),e=Ze(e),He)try{return Je(t,e)}catch(t){}if(qe(t,e))return We(!Ge(Ve.f,t,e),t[e])};var Qe=I,tn=Ce,en=i?function(t,e,n){return Qe.f(t,e,tn(1,n))}:function(t,e,n){return t[e]=n,t},nn={exports:{}},rn=P,on=Pt,an=f(Function.toString);rn(on.inspectSource)||(on.inspectSource=function(t){return an(t)});var un,cn,ln,fn=on.inspectSource,sn=P,pn=fn,hn=p.WeakMap,yn=sn(hn)&&/native code/.test(pn(hn)),dn=Ot.exports,vn=_t,gn=dn("keys"),bn=function(t){return gn[t]||(gn[t]=vn(t))},mn={},xn=yn,wn=p,Sn=f,On=R,jn=en,En=x,An=Pt,In=bn,Pn=mn,Tn=wn.TypeError,Rn=wn.WeakMap;if(xn||An.state){var Cn=An.state||(An.state=new Rn),Mn=Sn(Cn.get),kn=Sn(Cn.has),_n=Sn(Cn.set);un=function(t,e){if(kn(Cn,t))throw new Tn("Object already initialized");return e.facade=t,_n(Cn,t,e),e},cn=function(t){return Mn(Cn,t)||{}},ln=function(t){return kn(Cn,t)}}else{var Kn=In("state");Pn[Kn]=!0,un=function(t,e){if(En(t,Kn))throw new Tn("Object already initialized");return e.facade=t,jn(t,Kn,e),e},cn=function(t){return En(t,Kn)?t[Kn]:{}},ln=function(t){return En(t,Kn)}}var Fn={set:un,get:cn,has:ln,enforce:function(t){return ln(t)?cn(t):un(t,{})},getterFor:function(t){return function(e){var n;if(!On(e)||(n=cn(e)).type!==t)throw Tn("Incompatible receiver, "+t+" required");return n}}},Ln=p,Yn=P,Nn=x,Xn=en,Dn=At,zn=fn,Un=A.CONFIGURABLE,Bn=Fn.get,Gn=Fn.enforce,Vn=String(String).split("String");(nn.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,u=!!r&&!!r.noTargetGet,c=r&&void 0!==r.name?r.name:e;Yn(n)&&("Symbol("===String(c).slice(0,7)&&(c="["+String(c).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Nn(n,"name")||Un&&n.name!==c)&&Xn(n,"name",c),(o=Gn(n)).source||(o.source=Vn.join("string"==typeof c?c:""))),t!==Ln?(i?!u&&t[e]&&(a=!0):delete t[e],a?t[e]=n:Xn(t,e,n)):a?t[e]=n:Dn(e,n)})(Function.prototype,"toString",(function(){return Yn(this)&&Bn(this).source||zn(this)}));var Wn={},$n=Math.ceil,Zn=Math.floor,qn=function(t){var e=+t;return e!=e||0===e?0:(e>0?Zn:$n)(e)},Hn=qn,Jn=Math.max,Qn=Math.min,tr=function(t,e){var n=Hn(t);return n<0?Jn(n+e,0):Qn(n,e)},er=qn,nr=Math.min,rr=function(t){return t>0?nr(er(t),9007199254740991):0},or=rr,ir=function(t){return or(t.length)},ar=Ue,ur=tr,cr=ir,lr=function(t){return function(e,n,r){var o,i=ar(e),a=cr(i),u=ur(r,a);if(t&&n!=n){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},fr={includes:lr(!0),indexOf:lr(!1)},sr=x,pr=Ue,hr=fr.indexOf,yr=mn,dr=f([].push),vr=function(t,e){var n,r=pr(t),o=0,i=[];for(n in r)!sr(yr,n)&&sr(r,n)&&dr(i,n);for(;e.length>o;)sr(r,n=e[o++])&&(~hr(i,n)||dr(i,n));return i},gr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],br=vr,mr=gr.concat("length","prototype");Wn.f=Object.getOwnPropertyNames||function(t){return br(t,mr)};var xr={};xr.f=Object.getOwnPropertySymbols;var wr=W,Sr=Wn,Or=xr,jr=D,Er=f([].concat),Ar=wr("Reflect","ownKeys")||function(t){var e=Sr.f(jr(t)),n=Or.f;return n?Er(e,n(t)):e},Ir=x,Pr=Ar,Tr=Ae,Rr=I,Cr=o,Mr=P,kr=/#|\.prototype\./,_r=function(t,e){var n=Fr[Kr(t)];return n==Yr||n!=Lr&&(Mr(e)?Cr(e):!!e)},Kr=_r.normalize=function(t){return String(t).replace(kr,".").toLowerCase()},Fr=_r.data={},Lr=_r.NATIVE="N",Yr=_r.POLYFILL="P",Nr=_r,Xr=p,Dr=Ae.f,zr=en,Ur=nn.exports,Br=At,Gr=function(t,e){for(var n=Pr(e),r=Rr.f,o=Tr.f,i=0;i<n.length;i++){var a=n[i];Ir(t,a)||r(t,a,o(e,a))}},Vr=Nr,Wr=function(t,e){var n,r,o,i,a,u=t.target,c=t.global,l=t.stat;if(n=c?Xr:l?Xr[u]||Br(u,{}):(Xr[u]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=Dr(n,r))&&a.value:n[r],!Vr(c?r:u+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Gr(i,o)}(t.sham||o&&o.sham)&&zr(i,"sham",!0),Ur(n,r,i,t)}},$r=Ke,Zr=Array.isArray||function(t){return"Array"==$r(t)},qr=ne,Hr=I,Jr=Ce,Qr=function(t,e,n){var r=qr(e);r in t?Hr.f(t,r,Jr(0,n)):t[r]=n},to={};to[Gt("toStringTag")]="z";var eo=p,no="[object z]"===String(to),ro=P,oo=Ke,io=Gt("toStringTag"),ao=eo.Object,uo="Arguments"==oo(function(){return arguments}()),co=no?oo:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=ao(t),io))?n:uo?oo(e):"Object"==(r=oo(e))&&ro(e.callee)?"Arguments":r},lo=f,fo=o,so=P,po=co,ho=fn,yo=function(){},vo=[],go=W("Reflect","construct"),bo=/^\s*(?:class|function)\b/,mo=lo(bo.exec),xo=!bo.exec(yo),wo=function(t){if(!so(t))return!1;try{return go(yo,vo,t),!0}catch(t){return!1}},So=!go||fo((function(){var t;return wo(wo.call)||!wo(Object)||!wo((function(){t=!0}))||t}))?function(t){if(!so(t))return!1;switch(po(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return xo||!!mo(bo,ho(t))}:wo,Oo=p,jo=Zr,Eo=So,Ao=R,Io=Gt("species"),Po=Oo.Array,To=function(t){var e;return jo(t)&&(e=t.constructor,(Eo(e)&&(e===Po||jo(e.prototype))||Ao(e)&&null===(e=e[Io]))&&(e=void 0)),void 0===e?Po:e},Ro=o,Co=et,Mo=Gt("species"),ko=Wr,_o=p,Ko=o,Fo=Zr,Lo=R,Yo=g,No=ir,Xo=Qr,Do=function(t,e){return new(To(t))(0===e?0:e)},zo=function(t){return Co>=51||!Ro((function(){var e=[];return(e.constructor={})[Mo]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Uo=et,Bo=Gt("isConcatSpreadable"),Go=_o.TypeError,Vo=Uo>=51||!Ko((function(){var t=[];return t[Bo]=!1,t.concat()[0]!==t})),Wo=zo("concat"),$o=function(t){if(!Lo(t))return!1;var e=t[Bo];return void 0!==e?!!e:Fo(t)};ko({target:"Array",proto:!0,forced:!Vo||!Wo},{concat:function(t){var e,n,r,o,i,a=Yo(this),u=Do(a,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if($o(i=-1===e?a:arguments[e])){if(c+(o=No(i))>9007199254740991)throw Go("Maximum allowed index exceeded");for(n=0;n<o;n++,c++)n in i&&Xo(u,c,i[n])}else{if(c>=9007199254740991)throw Go("Maximum allowed index exceeded");Xo(u,c++,i)}return u.length=c,u}});var Zo,qo={transform:["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skewX","skewY","perspective"]},Ho=co,Jo=p.String,Qo=function(t){if("Symbol"===Ho(t))throw TypeError("Cannot convert a Symbol value to a string");return Jo(t)},ti=D,ei=o,ni=p.RegExp,ri=ei((function(){var t=ni("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),oi=ri||ei((function(){return!ni("a","y").sticky})),ii={BROKEN_CARET:ri||ei((function(){var t=ni("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:oi,UNSUPPORTED_Y:ri},ai=vr,ui=gr,ci=Object.keys||function(t){return ai(t,ui)},li=I,fi=D,si=Ue,pi=ci,hi=i?Object.defineProperties:function(t,e){fi(t);for(var n,r=si(e),o=pi(e),i=o.length,a=0;i>a;)li.f(t,n=o[a++],r[n]);return t},yi=W("document","documentElement"),di=D,vi=hi,gi=gr,bi=mn,mi=yi,xi=_,wi=bn("IE_PROTO"),Si=function(){},Oi=function(t){return"<script>"+t+"<\/script>"},ji=function(t){t.write(Oi("")),t.close();var e=t.parentWindow.Object;return t=null,e},Ei=function(){try{Zo=new ActiveXObject("htmlfile")}catch(t){}var t,e;Ei="undefined"!=typeof document?document.domain&&Zo?ji(Zo):((e=xi("iframe")).style.display="none",mi.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Oi("document.F=Object")),t.close(),t.F):ji(Zo);for(var n=gi.length;n--;)delete Ei.prototype[gi[n]];return Ei()};bi[wi]=!0;var Ai,Ii,Pi=Object.create||function(t,e){var n;return null!==t?(Si.prototype=di(t),n=new Si,Si.prototype=null,n[wi]=t):n=Ei(),void 0===e?n:vi(n,e)},Ti=o,Ri=p.RegExp,Ci=Ti((function(){var t=Ri(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),Mi=o,ki=p.RegExp,_i=Mi((function(){var t=ki("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),Ki=U,Fi=f,Li=Qo,Yi=function(){var t=ti(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Ni=ii,Xi=Ot.exports,Di=Pi,zi=Fn.get,Ui=Ci,Bi=_i,Gi=Xi("native-string-replace",String.prototype.replace),Vi=RegExp.prototype.exec,Wi=Vi,$i=Fi("".charAt),Zi=Fi("".indexOf),qi=Fi("".replace),Hi=Fi("".slice),Ji=(Ii=/b*/g,Ki(Vi,Ai=/a/,"a"),Ki(Vi,Ii,"a"),0!==Ai.lastIndex||0!==Ii.lastIndex),Qi=Ni.BROKEN_CARET,ta=void 0!==/()??/.exec("")[1];(Ji||ta||Qi||Ui||Bi)&&(Wi=function(t){var e,n,r,o,i,a,u,c=this,l=zi(c),f=Li(t),s=l.raw;if(s)return s.lastIndex=c.lastIndex,e=Ki(Wi,s,f),c.lastIndex=s.lastIndex,e;var p=l.groups,h=Qi&&c.sticky,y=Ki(Yi,c),d=c.source,v=0,g=f;if(h&&(y=qi(y,"y",""),-1===Zi(y,"g")&&(y+="g"),g=Hi(f,c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==$i(f,c.lastIndex-1))&&(d="(?: "+d+")",g=" "+g,v++),n=new RegExp("^(?:"+d+")",y)),ta&&(n=new RegExp("^"+d+"$(?!\\s)",y)),Ji&&(r=c.lastIndex),o=Ki(Vi,h?n:c,g),h?o?(o.input=Hi(o.input,v),o[0]=Hi(o[0],v),o.index=c.lastIndex,c.lastIndex+=o[0].length):c.lastIndex=0:Ji&&o&&(c.lastIndex=c.global?o.index+o[0].length:r),ta&&o&&o.length>1&&Ki(Gi,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=a=Di(null),i=0;i<p.length;i++)a[(u=p[i])[0]]=o[u[1]];return o});var ea=Wi;Wr({target:"RegExp",proto:!0,forced:/./.exec!==ea},{exec:ea});var na=Function.prototype,ra=na.apply,oa=na.bind,ia=na.call,aa="object"==typeof Reflect&&Reflect.apply||(oa?ia.bind(ra):function(){return ia.apply(ra,arguments)}),ua=f,ca=nn.exports,la=ea,fa=o,sa=Gt,pa=en,ha=sa("species"),ya=RegExp.prototype,da=R,va=Ke,ga=Gt("match"),ba=So,ma=ht,xa=p.TypeError,wa=D,Sa=function(t){if(ba(t))return t;throw xa(ma(t)+" is not a constructor")},Oa=Gt("species"),ja=f,Ea=qn,Aa=Qo,Ia=y,Pa=ja("".charAt),Ta=ja("".charCodeAt),Ra=ja("".slice),Ca=function(t){return function(e,n){var r,o,i=Aa(Ia(e)),a=Ea(n),u=i.length;return a<0||a>=u?t?"":void 0:(r=Ta(i,a))<55296||r>56319||a+1===u||(o=Ta(i,a+1))<56320||o>57343?t?Pa(i,a):r:t?Ra(i,a,a+2):o-56320+(r-55296<<10)+65536}},Ma={codeAt:Ca(!1),charAt:Ca(!0)}.charAt,ka=tr,_a=ir,Ka=Qr,Fa=p.Array,La=Math.max,Ya=U,Na=D,Xa=P,Da=Ke,za=ea,Ua=p.TypeError,Ba=aa,Ga=U,Va=f,Wa=function(t,e,n,r){var o=sa(t),i=!fa((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),a=i&&!fa((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[ha]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return e=!0,null},n[o](""),!e}));if(!i||!a||n){var u=ua(/./[o]),c=e(o,""[t],(function(t,e,n,r,o){var a=ua(t),c=e.exec;return c===la||c===ya.exec?i&&!o?{done:!0,value:u(e,n,r)}:{done:!0,value:a(n,e,r)}:{done:!1}}));ca(String.prototype,t,c[0]),ca(ya,o,c[1])}r&&pa(ya[o],"sham",!0)},$a=function(t){var e;return da(t)&&(void 0!==(e=t[ga])?!!e:"RegExp"==va(t))},Za=D,qa=y,Ha=function(t,e){var n,r=wa(t).constructor;return void 0===r||null==(n=wa(r)[Oa])?e:Sa(n)},Ja=function(t,e,n){return e+(n?Ma(t,e).length:1)},Qa=rr,tu=Qo,eu=bt,nu=function(t,e,n){for(var r=_a(t),o=ka(e,r),i=ka(void 0===n?r:n,r),a=Fa(La(i-o,0)),u=0;o<i;o++,u++)Ka(a,u,t[o]);return a.length=u,a},ru=function(t,e){var n=t.exec;if(Xa(n)){var r=Ya(n,t,e);return null!==r&&Na(r),r}if("RegExp"===Da(t))return Ya(za,t,e);throw Ua("RegExp#exec called on incompatible receiver")},ou=ea,iu=o,au=ii.UNSUPPORTED_Y,uu=Math.min,cu=[].push,lu=Va(/./.exec),fu=Va(cu),su=Va("".slice);Wa("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=tu(qa(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!$a(t))return Ga(e,r,t,o);for(var i,a,u,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,s=new RegExp(t.source,l+"g");(i=Ga(ou,s,r))&&!((a=s.lastIndex)>f&&(fu(c,su(r,f,i.index)),i.length>1&&i.index<r.length&&Ba(cu,c,nu(i,1)),u=i[0].length,f=a,c.length>=o));)s.lastIndex===i.index&&s.lastIndex++;return f===r.length?!u&&lu(s,"")||fu(c,""):fu(c,su(r,f)),c.length>o?nu(c,0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:Ga(e,this,t,n)}:e,[function(e,n){var o=qa(this),i=null==e?void 0:eu(e,t);return i?Ga(i,e,o,n):Ga(r,tu(o),e,n)},function(t,o){var i=Za(this),a=tu(t),u=n(r,i,a,o,r!==e);if(u.done)return u.value;var c=Ha(i,RegExp),l=i.unicode,f=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(au?"g":"y"),s=new c(au?"^(?:"+i.source+")":i,f),p=void 0===o?4294967295:o>>>0;if(0===p)return[];if(0===a.length)return null===ru(s,a)?[a]:[];for(var h=0,y=0,d=[];y<a.length;){s.lastIndex=au?0:y;var v,g=ru(s,au?su(a,y):a);if(null===g||(v=uu(Qa(s.lastIndex+(au?y:0)),a.length))===h)y=Ja(a,y,l);else{if(fu(d,su(a,h,y)),d.length===p)return d;for(var b=1;b<=g.length-1;b++)if(fu(d,g[b]),d.length===p)return d;y=h=v}}return fu(d,su(a,h)),d}]}),!!iu((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),au);var pu=Object.prototype.hasOwnProperty,hu=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(t,"prototype",{value:Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),writable:!1}),e&&we(t,e)}(a,t.Effect);var n,r,o,i=Oe(a);function a(){return ge(this,a),i.apply(this,arguments)}return n=a,r=[{key:"getScratchValue",value:function(){if("transform"!==this.attributeKey)return this.context.window.getComputedStyle(this.element)[this.attributeKey];for(var t={},e=qo[this.attributeKey],n=function(t,e){var n=t.getComputedStyle(e).transform;if(""===n||"none"===n)return{};var r,o,i,a,u,c,l,f,s=n.split("(")[1].split(")")[0].split(",");return r=s,o=Math.atan2(r[1],r[0]),i=Math.pow(r[0],2)+Math.pow(r[1],2),a=Math.pow(r[2],2)+Math.pow(r[3],2),u=Math.sqrt(i),c=(r[0]*r[3]-r[2]*r[1])/u,l=Math.atan2(r[0]*r[2]+r[1]*r[3],i),f=Math.atan2(r[1]*r[3]+r[0]*r[2],a),{rotate:o/(Math.PI/180)+"deg",scaleX:u,scaleY:c,skewX:(1===i?l/(Math.PI/180):0)+"deg",skewY:(1===a?f/(Math.PI/180):0)+"deg",translateX:r[4]+"px",translateY:r[5]+"px"}}(this.context.window,this.element),r=0;r<e.length;r++)t[e[r]]=pu.call(n,e[r])?n[e[r]]:this.context.window.getComputedStyle(this.element)[e[r]];return t}},{key:"onGetContext",value:function(){var t,e,n,r,o;if(this.initialized=!1,this.options={},pu.call(qo,this.attributeKey)){var i,a=Ee(qo[this.attributeKey]);try{for(a.s();!(i=a.n()).done;){var u,c,l,f,s,p,h=i.value;pu.call(this.targetValue,h)&&(null!==(c=(u=this.options).transform)&&void 0!==c||(u.transform=[]),null!==(f=(l=this.options.transform)[0])&&void 0!==f||(l[0]=""),null!==(p=(s=this.options.transform)[1])&&void 0!==p||(s[1]=""),this.options.transform[0]+=" ".concat([h],"(").concat(this.initialValue[h]||0,")"),this.options.transform[1]+=" ".concat([h],"(").concat(this.targetValue[h],")"))}}catch(t){a.e(t)}finally{a.f()}}else this.options[this.attributeKey]=[this.initialValue,this.targetValue];null!==(e=(t=this.context).CSSAnimationLayer)&&void 0!==e||(t.CSSAnimationLayer={}),null!==(o=(n=this.context.CSSAnimationLayer)[r=this.element.dataset.motorcortex2Id])&&void 0!==o||(n[r]={})}},{key:"createAnimation",value:function(){this.creating=!0,this.animation&&(this.animation.startTime=this.context.window.document.timeline.currentTime-this.animation.currentTime*this.animation.playbackRate),this.animation=this.element.animate([me({},this.attributeKey,this.options[this.attributeKey][0]),me({},this.attributeKey,this.options[this.attributeKey][1])],{duration:this.props.duration,fill:"forwards",easing:"linear"}),this.animation.pause(),this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][this.attributeKey]={start:this.options[this.attributeKey][0],end:this.options[this.attributeKey][1]},this.creating=!1}},{key:"checkAnimation",value:function(){var t=this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][this.attributeKey]||{},e=t.start,n=t.end;e===this.options[this.attributeKey][0]&&n===this.options[this.attributeKey][1]||this.createAnimation()}},{key:"onProgress",value:function(t){this.creating||(this.checkAnimation(),this.animation.currentTime=this.props.duration*t)}}],r&&be(n.prototype,r),o&&be(n,o),Object.defineProperty(n,"prototype",{writable:!1}),a}(),yu={npm_name:"@donkeyclip/motorcortex-waa",version:"1.0.3",incidents:[{exportable:hu,name:"WAA"}]};export{yu as default};
