(self.webpackChunkdx_website=self.webpackChunkdx_website||[]).push([[816],{7757:function(e,r,t){e.exports=t(5666)},6085:function(e,r,t){"use strict";function n(e,r,t,n,a,u,i){try{var c=e[u](i),s=c.value}catch(o){return void t(o)}c.done?r(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var r=this,t=arguments;return new Promise((function(a,u){var i=e.apply(r,t);function c(e){n(i,a,u,c,s,"next",e)}function s(e){n(i,a,u,c,s,"throw",e)}c(void 0)}))}}t.r(r),t.d(r,{default:function(){return Ge}});var u=t(7757),i=t.n(u),c=t(7294);function s(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}var f=t(6156);var d=t(2961);function v(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,u=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(u.push(n.value),!r||u.length!==r);i=!0);}catch(s){c=!0,a=s}finally{try{i||null==t.return||t.return()}finally{if(c)throw a}}return u}}(e,r)||(0,d.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=t(7329);function y(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return p(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,u=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw u}}}}function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var b=function(e){return"checkbox"===e.type},m=function(e){return e instanceof Date},g=function(e){return null==e},x=function(e){return"object"==typeof e},k=function(e){return!g(e)&&!Array.isArray(e)&&x(e)&&!m(e)},w=function(e){return e.substring(0,e.search(/.\d/))||e},O=function(e,r){return(0,h.Z)(e).some((function(e){return w(r)===e}))},j=function(e){return e.filter(Boolean)},_=function(e){return void 0===e},A=function(e,r,t){if(k(e)&&r){var n=j(r.split(/[,[\].]+?/)).reduce((function(e,r){return g(e)?e:e[r]}),e);return _(n)||n===e?_(e[r])?t:e[r]:n}},E="blur",S="onBlur",V="onChange",F="onSubmit",C="onTouched",L="all",D="max",N="min",R="maxLength",T="minLength",I="pattern",P="required",B="validate",Z=function(e,r){var t=Object.assign({},e);return delete t[r],t},M=c.createContext(null);M.displayName="RHFContext";var G=function(e,r,t,n){var a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return e?new Proxy(r,{get:function(e,r){if(r in e)return t.current[r]!==L&&(t.current[r]=!a||L),n&&(n.current[r]=!0),e[r]}}):r},U=function(e){return k(e)&&!Object.keys(e).length},q=function(e,r,t){var n=Z(e,"name");return U(n)||Object.keys(n).length>=Object.keys(r).length||Object.keys(n).find((function(e){return r[e]===(!t||L)}))},$=function(e){return Array.isArray(e)?e:[e]},z="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document,H=z?"Proxy"in window:"undefined"!=typeof Proxy;var Y=function(e,r,t,n,a){return r?Object.assign(Object.assign({},t[e]),{types:Object.assign(Object.assign({},t[e]&&t[e].types?t[e].types:{}),(0,f.Z)({},n,a||!0))}):{}},J=function(e){return/^\w*$/.test(e)},X=function(e){return j(e.replace(/["|']|\]/g,"").split(/\.|\[/))};function K(e,r,t){for(var n=-1,a=J(r)?[r]:X(r),u=a.length,i=u-1;++n<u;){var c=a[n],s=t;if(n!==i){var o=e[c];s=k(o)||Array.isArray(o)?o:isNaN(+a[n+1])?{}:[]}e[c]=s,e=e[c]}return e}var Q=function e(r,t,n){var a,u=y(n||Object.keys(r));try{for(u.s();!(a=u.n()).done;){var i=a.value,c=A(r,i);if(c){var s=c._f,o=Z(c,"_f");if(s&&t(s.name)){if(s.ref.focus&&_(s.ref.focus()))break;if(s.refs){s.refs[0].focus();break}}else k(o)&&e(o,t)}}}catch(l){u.e(l)}finally{u.f()}},W=function e(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in r.current){var a=r.current[n];if(a&&!g(t)){var u=a._f,i=Z(a,"_f");K(t,n,u&&u.ref?u.ref.disabled||u.refs&&u.refs.every((function(e){return e.disabled}))?void 0:u.value:Array.isArray(a)?[]:{}),i&&e({current:i},t[n])}}return t},ee=function(e){return g(e)||!x(e)};function re(e,r){if(ee(e)||ee(r)||m(e)||m(r))return e===r;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(var a=0,u=t;a<u.length;a++){var i=u[a],c=e[i];if(!n.includes(i))return!1;if("ref"!==i){var s=r[i];if((k(c)||Array.isArray(c))&&(k(s)||Array.isArray(s))?!re(c,s):c!==s)return!1}}return!0}function te(e,r){if(ee(e)||ee(r))return r;for(var t in r){var n=e[t],a=r[t];try{e[t]=k(n)&&k(a)||Array.isArray(n)&&Array.isArray(a)?te(n,a):a}catch(u){}}return e}function ne(e,r,t,n,a){for(var u=-1;++u<e.length;){for(var i in e[u])Array.isArray(e[u][i])?(!t[u]&&(t[u]={}),t[u][i]=[],ne(e[u][i],A(r[u]||{},i,[]),t[u][i],t[u],i)):!g(r)&&re(A(r[u]||{},i),e[u][i])?K(t[u]||{},i):t[u]=Object.assign(Object.assign({},t[u]),(0,f.Z)({},i,!0));n&&!t.length&&delete n[a]}return t}var ae=function(e,r,t){return te(ne(e,r,t.slice(0,e.length)),ne(r,e,t.slice(0,e.length)))};var ue=function(e){return"boolean"==typeof e};function ie(e,r){var t,n=J(r)?[r]:X(r),a=1==n.length?e:function(e,r){for(var t=r.slice(0,-1).length,n=0;n<t;)e=_(e)?n++:e[r[n++]];return e}(e,n),u=n[n.length-1];a&&delete a[u];for(var i=0;i<n.slice(0,-1).length;i++){var c=-1,s=void 0,o=n.slice(0,-(i+1)),l=o.length-1;for(i>0&&(t=e);++c<o.length;){var f=o[c];s=s?s[f]:e[f],l===c&&(k(s)&&U(s)||Array.isArray(s)&&!s.filter((function(e){return k(e)&&!U(e)||ue(e)})).length)&&(t?delete t[f]:delete e[f]),t=s}}return e}var ce=function(e){return"file"===e.type},se=function(e){return"select-multiple"===e.type},oe=function(e){return"radio"===e.type},le={value:!1,isValid:!1},fe={value:!0,isValid:!0},de=function(e){if(Array.isArray(e)){if(e.length>1){var r=e.filter((function(e){return e&&e.checked&&!e.disabled})).map((function(e){return e.value}));return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!_(e[0].attributes.value)?_(e[0].value)||""===e[0].value?fe:{value:e[0].value,isValid:!0}:fe:le}return le},ve=function(e,r){var t=r.valueAsNumber,n=r.valueAsDate,a=r.setValueAs;return _(e)?e:t?""===e?NaN:+e:n?new Date(e):a?a(e):e},he={isValid:!1,value:null},ye=function(e){return Array.isArray(e)?e.reduce((function(e,r){return r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:e}),he):he};function pe(e){if(e&&e._f){var r=e._f.ref;if(r.disabled)return;return ce(r)?r.files:oe(r)?ye(e._f.refs).value:se(r)?(t=r.options,(0,h.Z)(t).filter((function(e){return e.selected})).map((function(e){return e.value}))):b(r)?de(e._f.refs).value:ve(_(r.value)?e._f.ref.value:r.value,e._f)}var t}var be=function(e,r,t,n){var a,u={},i=y(e);try{for(i.s();!(a=i.n()).done;){var c=a.value,s=A(r,c);s&&K(u,c,s._f)}}catch(o){i.e(o)}finally{i.f()}return{criteriaMode:t,names:(0,h.Z)(e),fields:u,shouldUseNativeValidation:n}},me=function(e,r){return r&&e&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate)},ge=function(e){var r=e.isOnBlur,t=e.isOnChange,n=e.isOnTouch,a=e.isTouched,u=e.isReValidateOnBlur,i=e.isReValidateOnChange,c=e.isBlurEvent,s=e.isSubmitted;return!e.isOnAll&&(!s&&n?!(a||c):(s?u:r)?!c:!(s?i:t)||c)},xe=function(e){return"function"==typeof e},ke=function(e){return"string"==typeof e},we=function(e){return ke(e)||c.isValidElement(e)},Oe=function(e){return e instanceof RegExp};function je(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"validate";if(we(e)||Array.isArray(e)&&e.every(we)||ue(e)&&!e)return{type:t,message:we(e)?e:"",ref:r}}var _e=function(e){return k(e)&&!Oe(e)?e:{value:e,message:""}},Ae=function(){var e=a(i().mark((function e(r,t,n){var a,u,c,s,o,l,f,d,v,h,y,p,m,x,w,O,j,_,A,E,S,V,F,C,L,Z,M,G,q,$,z,H,J,X,K,Q,W,ee,re,te,ne,ae,ie;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r._f,u=a.ref,c=a.refs,s=a.required,o=a.maxLength,l=a.minLength,f=a.min,d=a.max,v=a.pattern,h=a.validate,y=a.name,p=a.value,m=a.valueAsNumber,a.mount){e.next=3;break}return e.abrupt("return",{});case 3:if(x=c?c[0]:u,w=function(e){n&&x.reportValidity&&(x.setCustomValidity(ue(e)?"":e||" "),x.reportValidity())},O={},j=oe(u),_=b(u),A=j||_,E=(m||ce(u))&&!u.value||""===p||Array.isArray(p)&&!p.length,S=Y.bind(null,y,t,O),V=function(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:R,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:T,i=e?r:t;O[y]=Object.assign({type:e?n:a,message:i,ref:u},S(e?n:a,i))},!s||!(!A&&(E||g(p))||ue(p)&&!p||_&&!de(c).isValid||j&&!ye(c).isValid)){e.next=19;break}if(F=we(s)?{value:!!s,message:s}:_e(s),C=F.value,L=F.message,!C){e.next=19;break}if(O[y]=Object.assign({type:P,message:L,ref:x},S(P,L)),t){e.next=19;break}return w(L),e.abrupt("return",O);case 19:if(E||g(f)&&g(d)){e.next=28;break}if(G=_e(d),q=_e(f),isNaN(p)?(z=u.valueAsDate||new Date(p),ke(G.value)&&(Z=z>new Date(G.value)),ke(q.value)&&(M=z<new Date(q.value))):($=u.valueAsNumber||parseFloat(p),g(G.value)||(Z=$>G.value),g(q.value)||(M=$<q.value)),!Z&&!M){e.next=28;break}if(V(!!Z,G.message,q.message,D,N),t){e.next=28;break}return w(O[y].message),e.abrupt("return",O);case 28:if(!o&&!l||E||!ke(p)){e.next=38;break}if(H=_e(o),J=_e(l),X=!g(H.value)&&p.length>H.value,K=!g(J.value)&&p.length<J.value,!X&&!K){e.next=38;break}if(V(X,H.message,J.message),t){e.next=38;break}return w(O[y].message),e.abrupt("return",O);case 38:if(!v||E||!ke(p)){e.next=45;break}if(Q=_e(v),W=Q.value,ee=Q.message,!Oe(W)||p.match(W)){e.next=45;break}if(O[y]=Object.assign({type:I,message:ee,ref:u},S(I,ee)),t){e.next=45;break}return w(ee),e.abrupt("return",O);case 45:if(!h){e.next=79;break}if(!xe(h)){e.next=58;break}return e.next=49,h(p);case 49:if(re=e.sent,!(te=je(re,x))){e.next=56;break}if(O[y]=Object.assign(Object.assign({},te),S(B,te.message)),t){e.next=56;break}return w(te.message),e.abrupt("return",O);case 56:e.next=79;break;case 58:if(!k(h)){e.next=79;break}ne={},e.t0=i().keys(h);case 61:if((e.t1=e.t0()).done){e.next=75;break}if(ae=e.t1.value,U(ne)||t){e.next=65;break}return e.abrupt("break",75);case 65:return e.t2=je,e.next=68,h[ae](p);case 68:e.t3=e.sent,e.t4=x,e.t5=ae,(ie=(0,e.t2)(e.t3,e.t4,e.t5))&&(ne=Object.assign(Object.assign({},ie),S(ae,ie.message)),w(ie.message),t&&(O[y]=ne)),e.next=61;break;case 75:if(U(ne)){e.next=79;break}if(O[y]=Object.assign({ref:x},ne),t){e.next=79;break}return e.abrupt("return",O);case 79:return w(!0),e.abrupt("return",O);case 81:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),Ee=function(e,r){var t=0;return function(){for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];clearTimeout(t),t=setTimeout((function(){return e.apply(void 0,a)}),r)}},Se=function(e){return{isOnSubmit:!e||e===F,isOnBlur:e===S,isOnChange:e===V,isOnAll:e===L,isOnTouch:e===C}},Ve=function(e){return e instanceof HTMLElement},Fe=function(e){return oe(e)||b(e)},Ce=function(){function e(){s(this,e),this.tearDowns=[]}return l(e,[{key:"add",value:function(e){this.tearDowns.push(e)}},{key:"unsubscribe",value:function(){var e,r=y(this.tearDowns);try{for(r.s();!(e=r.n()).done;){(0,e.value)()}}catch(t){r.e(t)}finally{r.f()}this.tearDowns=[]}}]),e}(),Le=function(){function e(r,t){var n=this;s(this,e),this.observer=r,this.closed=!1,t.add((function(){return n.closed=!0}))}return l(e,[{key:"next",value:function(e){this.closed||this.observer.next(e)}}]),e}(),De=function(){function e(){s(this,e),this.observers=[]}return l(e,[{key:"next",value:function(e){var r,t=y(this.observers);try{for(t.s();!(r=t.n()).done;){r.value.next(e)}}catch(n){t.e(n)}finally{t.f()}}},{key:"subscribe",value:function(e){var r=new Ce,t=new Le(e,r);return this.observers.push(t),r}},{key:"unsubscribe",value:function(){this.observers=[]}}]),e}(),Ne="undefined"==typeof window;var Re=t(5444),Te=t(9374),Ie=function(e){var r=e.children,t=e.to;return c.createElement(Re.Link,{to:t,className:"linkButton-module--link-button--2h6ZT"},c.createElement("button",{type:"button",className:"button"},r))},Pe={addEmail:function(){var e=a(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dx-backend.herokuapp.com/emails/",{method:"POST",mode:"cors",body:JSON.stringify(r),headers:{"Content-Type":"application/json;charset=UTF-8"}});case 2:if(200===(t=e.sent).status){e.next=5;break}throw t;case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},Be="signInPage-module--sign-in-page--1BgF1",Ze=function(e){var r=e.handleSubmit,t=e.register,n=e.error;return c.createElement("div",{className:Be},c.createElement("h1",null,"Interested in DevX Lab?"),c.createElement("p",null,"Join our mailing list to stay updated"),c.createElement("form",{onSubmit:r()},c.createElement("input",Object.assign({type:"email",className:n?"field-error":"",placeholder:"Enter your email address"},t("email",{required:"This field is required",validate:function(e){return function(e){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)}(e)||"Not valid email"}}))),n&&c.createElement("p",{className:"error-text"},n.message),c.createElement("button",{type:"submit",className:"button"},"Submit")))},Me=function(e){var r=e.email;return c.createElement("div",{className:Be},c.createElement("h1",null,"Thanks for your interest!"),c.createElement("p",null,"You will receive updates on ",r),c.createElement(Ie,{to:"/",type:"secondary"},"Back home"))},Ge=function(){var e=(0,c.useState)(""),r=e[0],t=e[1],n=(0,c.useState)(null),u=n[0],s=n[1],o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.mode,t=void 0===r?F:r,n=e.reValidateMode,u=void 0===n?V:n,s=e.resolver,o=e.context,l=e.defaultValues,d=void 0===l?{}:l,p=e.shouldFocusError,x=void 0===p||p,S=e.delayError,C=e.shouldUseNativeValidation,D=e.shouldUnregister,N=e.criteriaMode,R=v(c.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}}),2),T=R[0],I=R[1],P=c.useRef({isDirty:!H,dirtyFields:!H,touchedFields:!H,isValidating:!H,isValid:!H,errors:!H}),B=c.useRef(s),M=c.useRef(T),Y=c.useRef({}),J=c.useRef(d),X=c.useRef({}),te=c.useRef(o),ne=c.useRef(!1),ue=c.useRef(!1),le=c.useRef(),fe=c.useRef({watch:new De,control:new De,array:new De,state:new De}),de=c.useRef({mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1}),he=Se(t),ye=N===L;B.current=s,te.current=o;var we=function(e){return de.current.watchAll||de.current.watch.has(e)||de.current.watch.has((e.match(/\w+/)||[])[0])},Oe=function(e,r){K(M.current.errors,e,r),fe.current.state.next({errors:M.current.errors})},je=function(){var e=a(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe(Y.current,!0);case 2:(r=e.sent)!==M.current.isValid&&(M.current.isValid=r,fe.current.state.next({isValid:r}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_e=c.useCallback(function(){var e=a(i().mark((function e(r,t,n,a,u,c){var o,l,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=A(M.current.errors,t),l=!!P.current.isValid&&(s?u:je()),S&&n?(le.current=le.current||Ee(Oe,S),le.current(t,n)):n?K(M.current.errors,t,n):ie(M.current.errors,t),!c&&(n?re(o,n):!o)&&U(a)&&M.current.isValid===l||r||(f=Object.assign(Object.assign(Object.assign({},a),s?{isValid:!!l}:{}),{errors:M.current.errors,name:t}),M.current=Object.assign(Object.assign({},M.current),f),fe.current.state.next(c?{name:t}:f)),fe.current.state.next({isValidating:!1});case 5:case"end":return e.stop()}}),e)})));return function(r,t,n,a,u,i){return e.apply(this,arguments)}}(),[]),Ce=c.useCallback((function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;(arguments.length>4?arguments[4]:void 0)&&We(e);var a=A(Y.current,e);if(a){var u=a._f;if(u){var i=z&&Ve(u.ref)&&g(r)?"":r;if(u.value=ve(r,u),oe(u.ref)?(u.refs||[]).forEach((function(e){return e.checked=e.value===i})):ce(u.ref)&&!ke(i)?u.ref.files=i:se(u.ref)?(0,h.Z)(u.ref.options).forEach((function(e){return e.selected=i.includes(e.value)})):b(u.ref)&&u.refs?u.refs.length>1?u.refs.forEach((function(e){return e.checked=Array.isArray(i)?!!i.find((function(r){return r===e.value})):i===e.value})):u.refs[0].checked=!!i:u.ref.value=i,n){var c=W(Y);K(c,e,r),fe.current.control.next({values:Object.assign(Object.assign({},J.current),c),name:e})}(t.shouldDirty||t.shouldTouch)&&Re(e,i,t.shouldTouch),t.shouldValidate&&Be(e)}else a._f={ref:{name:e,value:r},value:r}}}),[]),Le=c.useCallback((function(e,r){var t=W(Y);return e&&r&&K(t,e,r),!re(t,J.current)}),[]),Re=c.useCallback((function(e,r,t){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a={name:e},u=!1;if(P.current.isDirty){var i=M.current.isDirty;M.current.isDirty=Le(),a.isDirty=M.current.isDirty,u=i!==a.isDirty}if(P.current.dirtyFields&&!t){var c=A(M.current.dirtyFields,e);!re(A(J.current,e),r)?K(M.current.dirtyFields,e,!0):ie(M.current.dirtyFields,e),a.dirtyFields=M.current.dirtyFields,u=u||c!==A(M.current.dirtyFields,e)}var s=A(M.current.touchedFields,e);return t&&!s&&(K(M.current.touchedFields,e,t),a.touchedFields=M.current.touchedFields,u=u||P.current.touchedFields&&s!==t),u&&n&&fe.current.state.next(a),u?a:{}}),[]),Te=c.useCallback(function(){var e=a(i().mark((function e(r,t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae(A(Y.current,r),ye,C);case 2:return e.t0=r,n=e.sent[e.t0],e.next=6,_e(t,r,n);case 6:return e.abrupt("return",_(n));case 7:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),[ye]),Ie=c.useCallback(function(){var e=a(i().mark((function e(r){var t,n,a,u,c,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.current(W(Y),te.current,be(de.current.mount,Y.current,N,C));case 2:if(t=e.sent,n=t.errors,r){a=y(r);try{for(a.s();!(u=a.n()).done;)c=u.value,(s=A(n,c))?K(M.current.errors,c,s):ie(M.current.errors,c)}catch(i){a.e(i)}finally{a.f()}}else M.current.errors=n;return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[N,C]),Pe=function(){var e=a(i().mark((function e(r,t){var n,a,u,c,s,o,l=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=l.length>2&&void 0!==l[2]?l[2]:{valid:!0},e.t0=i().keys(r);case 2:if((e.t1=e.t0()).done){e.next=25;break}if(a=e.t1.value,!(u=r[a])){e.next=23;break}if(c=u._f,s=Z(u,"_f"),!c){e.next=19;break}return e.next=11,Ae(u,ye,C);case 11:if(o=e.sent,!t){e.next=18;break}if(!o[c.name]){e.next=16;break}return n.valid=!1,e.abrupt("break",25);case 16:e.next=19;break;case 18:o[c.name]?K(M.current.errors,c.name,o[c.name]):ie(M.current.errors,c.name);case 19:if(e.t2=s,!e.t2){e.next=23;break}return e.next=23,Pe(s,t,n);case 23:e.next=2;break;case 25:return e.abrupt("return",n.valid);case 26:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),Be=c.useCallback(function(){var e=a(i().mark((function e(r){var t,n,u,c,o=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>1&&void 0!==o[1]?o[1]:{},n=$(r),fe.current.state.next({isValidating:!0}),!s){e.next=10;break}return e.next=6,Ie(_(r)?r:n);case 6:c=e.sent,u=r?n.every((function(e){return!A(c,e)})):U(c),e.next=19;break;case 10:if(!r){e.next=16;break}return e.next=13,Promise.all(n.filter((function(e){return A(Y.current,e,{})._f})).map(function(){var e=a(i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te(r,!0);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 13:u=e.sent.every(Boolean),e.next=19;break;case 16:return e.next=18,Pe(Y.current);case 18:u=U(M.current.errors);case 19:return fe.current.state.next(Object.assign(Object.assign({},ke(r)?{name:r}:{}),{errors:M.current.errors,isValidating:!1})),t.shouldFocus&&!u&&Q(Y.current,(function(e){return A(M.current.errors,e)}),r?n:de.current.mount),P.current.isValid&&Me(),e.abrupt("return",u);case 23:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[Ie,Te]),Ze=function(e,r,t){var n=A(Y.current,e);if(n){var a=_(n._f.value),u=a?_(A(X.current,e))?A(J.current,e):A(X.current,e):n._f.value;_(u)?a&&(n._f.value=pe(n)):r&&r.defaultChecked?n._f.value=pe(n):t?n._f.value=u:Ce(e,u)}ue.current&&P.current.isValid&&Me()},Me=c.useCallback(a(i().mark((function e(){var r,t,n=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.length>0&&void 0!==n[0]?n[0]:{},!s){e.next=9;break}return e.t1=U,e.next=5,B.current(Object.assign(Object.assign({},W(Y)),r),te.current,be(de.current.mount,Y.current,N,C));case 5:e.t2=e.sent.errors,e.t0=(0,e.t1)(e.t2),e.next=12;break;case 9:return e.next=11,Pe(Y.current,!0);case 11:e.t0=e.sent;case 12:(t=e.t0)!==M.current.isValid&&(M.current.isValid=t,fe.current.state.next({isValid:t}));case 14:case"end":return e.stop()}}),e)}))),[N,C]),Ge=c.useCallback((function(e,r,t){return Object.entries(r).forEach((function(r){var n=v(r,2),a=n[0],u=n[1],i="".concat(e,".").concat(a),c=A(Y.current,i);!de.current.array.has(e)&&ee(u)&&(!c||c._f)||m(u)?Ce(i,u,t,!0,!c):Ge(i,u,t)}))}),[Be]),Ue=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=A(Y.current,e),a=de.current.array.has(e);a&&(fe.current.array.next({values:r,name:e,isReset:!0}),(P.current.isDirty||P.current.dirtyFields)&&t.shouldDirty&&(K(M.current.dirtyFields,e,ae(r,A(J.current,e,[]),A(M.current.dirtyFields,e,[]))),fe.current.state.next({name:e,dirtyFields:M.current.dirtyFields,isDirty:Le(e,r)})),!r.length&&K(Y.current,e,[])&&K(X.current,e,[])),(n&&!n._f||a)&&!g(r)?Ge(e,r,a?{}:t):Ce(e,r,t,!0,!n),we(e)&&fe.current.state.next({}),fe.current.watch.next({name:e,values:ze()})},qe=function(){var e=a(i().mark((function e(r,t,n,a){var u,c,o,l,f,d,v,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.name,l=A(Y.current,o),!s){e.next=12;break}return e.next=5,B.current(W(Y),te.current,be([o],Y.current,N,C));case 5:f=e.sent,d=f.errors,u=A(d,o),b(r)&&!u&&(v=w(o),(h=A(d,v,{})).type&&h.message&&(u=h),(h||A(M.current.errors,v))&&(o=v)),c=U(d),e.next=16;break;case 12:return e.next=14,Ae(l,ye,C);case 14:e.t0=o,u=e.sent[e.t0];case 16:!a&&fe.current.watch.next({name:o,type:r.type,values:ze()}),_e(!1,o,u,t,c,n);case 18:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),$e=c.useCallback(function(){var e=a(i().mark((function e(r){var t,n,a,c,o,l,f,d,v,h,y,p,b,m,g,x;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.type,n=r.target,a=r.target,c=a.value,o=a.name,l=a.type,!(f=A(Y.current,o))){e.next=17;break}if(d=l?pe(f):void 0,d=_(d)?c:d,v=t===E,h=Se(u),y=h.isOnBlur,p=h.isOnChange,b=!me(f._f,f._f.mount)&&!s&&!A(M.current.errors,o)||ge(Object.assign({isBlurEvent:v,isTouched:!!A(M.current.touchedFields,o),isSubmitted:M.current.isSubmitted,isReValidateOnBlur:y,isReValidateOnChange:p},he)),m=!v&&we(o),_(d)||(f._f.value=d),g=Re(o,f._f.value,v,!1),x=!U(g)||m,!b){e.next=15;break}return!v&&fe.current.watch.next({name:o,type:t,values:ze()}),e.abrupt("return",x&&fe.current.state.next(m?{name:o}:Object.assign(Object.assign({},g),{name:o})));case 15:fe.current.state.next({isValidating:!0}),qe(n,g,m,v);case 17:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[]),ze=function(e){var r=Object.assign(Object.assign({},J.current),W(Y));return _(e)?r:ke(e)?A(r,e):e.map((function(e){return A(r,e)}))},He=function(e){e?$(e).forEach((function(e){return ie(M.current.errors,e)})):M.current.errors={},fe.current.state.next({errors:M.current.errors})},Ye=function(e,r,t){var n=((A(Y.current,e)||{_f:{}})._f||{}).ref;K(M.current.errors,e,Object.assign(Object.assign({},r),{ref:n})),fe.current.state.next({name:e,errors:M.current.errors,isValid:!1}),t&&t.shouldFocus&&n&&n.focus&&n.focus()},Je=c.useCallback((function(e,r,t,n){var a=Array.isArray(e),u=n||ue.current?Object.assign(Object.assign({},J.current),n||W(Y)):_(r)?J.current:a?r:(0,f.Z)({},e,r);if(_(e))return t&&(de.current.watchAll=!0),u;var i,c=[],s=y($(e));try{for(s.s();!(i=s.n()).done;){var o=i.value;t&&de.current.watch.add(o),c.push(A(u,o))}}catch(l){s.e(l)}finally{s.f()}return a?c:c[0]}),[]),Xe=function(e,r){return xe(e)?fe.current.watch.subscribe({next:function(t){return e(Je(void 0,r),t)}}):Je(e,r,!0)},Ke=function(e){var r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=y(e?$(e):de.current.mount);try{for(n.s();!(r=n.n()).done;){var a=r.value;de.current.mount.delete(a),de.current.array.delete(a),A(Y.current,a)&&(!t.keepError&&ie(M.current.errors,a),!t.keepValue&&ie(Y.current,a),!t.keepDirty&&ie(M.current.dirtyFields,a),!t.keepTouched&&ie(M.current.touchedFields,a),!D&&!t.keepDefaultValue&&ie(J.current,a))}}catch(u){n.e(u)}finally{n.f()}fe.current.watch.next({values:ze()}),fe.current.state.next(Object.assign(Object.assign({},M.current),t.keepDirty?{isDirty:Le()}:{})),!t.keepIsValid&&Me()},Qe=function(e,r,t){We(e,t);var n=A(Y.current,e),a=Fe(r);r===n._f.ref||a&&j(n._f.refs||[]).find((function(e){return e===r}))||(n={_f:a?Object.assign(Object.assign({},n._f),{refs:[].concat((0,h.Z)(j(n._f.refs||[]).filter((function(e){return Ve(e)&&document.contains(e)}))),[r]),ref:{type:r.type,name:e}}):Object.assign(Object.assign({},n._f),{ref:r})},K(Y.current,e,n),Ze(e,r))},We=c.useCallback((function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=A(Y.current,e);return K(Y.current,e,{_f:Object.assign(Object.assign(Object.assign({},t&&t._f?t._f:{ref:{name:e}}),{name:e,mount:!0}),r)}),de.current.mount.add(e),!t&&Ze(e,void 0,!0),Ne?{name:e}:{name:e,onChange:$e,onBlur:$e,ref:function(e){function r(r){return e.apply(this,arguments)}return r.toString=function(){return e.toString()},r}((function(t){if(t)Qe(e,t,r);else{var n=A(Y.current,e,{}),a=D||r.shouldUnregister;n._f&&(n._f.mount=!1,_(n._f.value)&&(n._f.value=n._f.ref.value)),a&&(!O(de.current.array,e)||!ne.current)&&de.current.unMount.add(e)}}))}}),[]),er=c.useCallback((function(e,r){return function(){var t=a(i().mark((function t(n){var a,u,c,o,l;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist()),a=!0,u=W(Y),fe.current.state.next({isSubmitting:!0}),t.prev=4,!s){t.next=15;break}return t.next=8,B.current(u,te.current,be(de.current.mount,Y.current,N,C));case 8:c=t.sent,o=c.errors,l=c.values,M.current.errors=o,u=l,t.next=17;break;case 15:return t.next=17,Pe(Y.current);case 17:if(!U(M.current.errors)||!Object.keys(M.current.errors).every((function(e){return A(u,e)}))){t.next=23;break}return fe.current.state.next({errors:{},isSubmitting:!0}),t.next=21,e(u,n);case 21:t.next=28;break;case 23:if(t.t0=r,!t.t0){t.next=27;break}return t.next=27,r(M.current.errors,n);case 27:x&&Q(Y.current,(function(e){return A(M.current.errors,e)}),de.current.mount);case 28:t.next=34;break;case 30:throw t.prev=30,t.t1=t.catch(4),a=!1,t.t1;case 34:return t.prev=34,M.current.isSubmitted=!0,fe.current.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(M.current.errors)&&a,submitCount:M.current.submitCount+1,errors:M.current.errors}),t.finish(34);case 38:case"end":return t.stop()}}),t,null,[[4,30,34,38]])})));return function(e){return t.apply(this,arguments)}}()}),[x,ye,N,C]),rr=function e(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";for(var n in r){var a=r[n],u=t+(t?".":"")+n,i=A(Y.current,u);i&&i._f||(k(a)||Array.isArray(a)?e(a,u):i||We(u,{value:a}))}},tr=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e||J.current;if(z&&!r.keepValues){var n,a=y(de.current.mount);try{for(a.s();!(n=a.n()).done;){var u=n.value,i=A(Y.current,u);if(i&&i._f){var c=Array.isArray(i._f.refs)?i._f.refs[0]:i._f.ref;try{Ve(c)&&c.closest("form").reset();break}catch(s){}}}}catch(o){a.e(o)}finally{a.f()}}r.keepDefaultValues||(J.current=Object.assign({},t),X.current=Object.assign({},t)),r.keepValues||(Y.current={},fe.current.control.next({values:r.keepDefaultValues?J.current:Object.assign({},t)}),fe.current.watch.next({values:Object.assign({},t)}),fe.current.array.next({values:Object.assign({},t),isReset:!0})),de.current={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1},fe.current.state.next({submitCount:r.keepSubmitCount?M.current.submitCount:0,isDirty:r.keepDirty?M.current.isDirty:!!r.keepDefaultValues&&re(e,J.current),isSubmitted:!!r.keepIsSubmitted&&M.current.isSubmitted,dirtyFields:r.keepDirty?M.current.dirtyFields:{},touchedFields:r.keepTouched?M.current.touchedFields:{},errors:r.keepErrors?M.current.errors:{},isSubmitting:!1,isSubmitSuccessful:!1}),ue.current=!!r.keepIsValid},nr=function(e){return A(Y.current,e)._f.ref.focus()};return c.useEffect((function(){var e=fe.current.state.subscribe({next:function(e){q(e,P.current,!0)&&(M.current=Object.assign(Object.assign({},M.current),e),I(M.current))}}),r=fe.current.array.subscribe({next:function(e){if(e.values&&e.name&&P.current.isValid){var r=W(Y);K(r,e.name,e.values),Me(r)}}});return function(){e.unsubscribe(),r.unsubscribe()}}),[]),c.useEffect((function(){var e=[],r=function(e){return!Ve(e)||!document.contains(e)};ue.current||(ue.current=!0,P.current.isValid&&Me(),!D&&rr(J.current));var t,n=y(de.current.unMount);try{for(n.s();!(t=n.n()).done;){var a=t.value,u=A(Y.current,a);u&&(u._f.refs?u._f.refs.every(r):r(u._f.ref))&&e.push(a)}}catch(i){n.e(i)}finally{n.f()}e.length&&Ke(e),de.current.unMount=new Set})),{control:c.useMemo((function(){return{register:We,inFieldArrayActionRef:ne,getIsDirty:Le,subjectsRef:fe,watchInternal:Je,fieldsRef:Y,updateIsValid:Me,namesRef:de,readFormStateRef:P,formStateRef:M,defaultValuesRef:J,fieldArrayDefaultValuesRef:X,setValues:Ge,unregister:Ke,shouldUnmount:D}}),[]),formState:G(H,T,P),trigger:Be,register:We,handleSubmit:er,watch:c.useCallback(Xe,[]),setValue:c.useCallback(Ue,[Ge]),getValues:c.useCallback(ze,[]),reset:c.useCallback(tr,[]),clearErrors:c.useCallback(He,[]),unregister:c.useCallback(Ke,[]),setError:c.useCallback(Ye,[]),setFocus:c.useCallback(nr,[])}}({mode:"onChange"}),l=o.register,d=o.handleSubmit,p=o.reset,x=o.formState,S=x.errors,C=x.touchedFields,D=x.isSubmitted,N=function(){var e=a(i().mark((function e(r){var n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Pe.addEmail(r);case 3:n=e.sent,t(n.email),p("email"),e.next=18;break;case 8:if(e.prev=8,e.t0=e.catch(0),400!==e.t0.status){e.next=17;break}return e.next=13,e.t0.json();case 13:a=e.sent,s({message:a.detail}),e.next=18;break;case 17:s({message:"Server error"});case 18:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),R=u||(C.email||D)&&S.email;return c.createElement(Te.Z,null,c.createElement("div",{className:Be},r?c.createElement(Me,{email:r}):c.createElement(Ze,{register:l,handleSubmit:function(){return d(N)},error:R}),c.createElement("span",{className:"signInPage-module--info-section--2gkqO"},"DevX Lab has been created by the Mind and Software research group at Aalto University. ",c.createElement(Re.Link,{to:"/about"},"Learn more"))))}},5666:function(e){var r=function(e){"use strict";var r,t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{s({},"")}catch(C){s=function(e,r,t){return e[r]=t}}function o(e,r,t,n){var a=r&&r.prototype instanceof p?r:p,u=Object.create(a.prototype),i=new S(n||[]);return u._invoke=function(e,r,t){var n=f;return function(a,u){if(n===v)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw u;return F()}for(t.method=a,t.arg=u;;){var i=t.delegate;if(i){var c=_(i,t);if(c){if(c===y)continue;return c}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(n===f)throw n=h,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n=v;var s=l(e,r,t);if("normal"===s.type){if(n=t.done?h:d,s.arg===y)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(n=h,t.method="throw",t.arg=s.arg)}}}(e,t,i),u}function l(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(C){return{type:"throw",arg:C}}}e.wrap=o;var f="suspendedStart",d="suspendedYield",v="executing",h="completed",y={};function p(){}function b(){}function m(){}var g={};g[u]=function(){return this};var x=Object.getPrototypeOf,k=x&&x(x(V([])));k&&k!==t&&n.call(k,u)&&(g=k);var w=m.prototype=p.prototype=Object.create(g);function O(e){["next","throw","return"].forEach((function(r){s(e,r,(function(e){return this._invoke(r,e)}))}))}function j(e,r){function t(a,u,i,c){var s=l(e[a],e,u);if("throw"!==s.type){var o=s.arg,f=o.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(e){t("next",e,i,c)}),(function(e){t("throw",e,i,c)})):r.resolve(f).then((function(e){o.value=e,i(o)}),(function(e){return t("throw",e,i,c)}))}c(s.arg)}var a;this._invoke=function(e,n){function u(){return new r((function(r,a){t(e,n,r,a)}))}return a=a?a.then(u,u):u()}}function _(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,_(e,t),"throw"===t.method))return y;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var a=l(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,y;var u=a.arg;return u?u.done?(t[e.resultName]=u.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,y):u:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function A(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function E(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function V(e){if(e){var t=e[u];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}return{next:F}}function F(){return{value:r,done:!0}}return b.prototype=w.constructor=m,m.constructor=b,b.displayName=s(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},O(j.prototype),j.prototype[i]=function(){return this},e.AsyncIterator=j,e.async=function(r,t,n,a,u){void 0===u&&(u=Promise);var i=new j(o(r,t,n,a),u);return e.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(w),s(w,c,"Generator"),w[u]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var r=[];for(var t in e)r.push(t);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=V,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return c.type="throw",c.arg=e,t.next=n,a&&(t.method="next",t.arg=r),!!a}for(var u=this.tryEntries.length-1;u>=0;--u){var i=this.tryEntries[u],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),o=n.call(i,"finallyLoc");if(s&&o){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,r){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var u=a;break}}u&&("break"===e||"continue"===e)&&u.tryLoc<=r&&r<=u.finallyLoc&&(u=null);var i=u?u.completion:{};return i.type=e,i.arg=r,u?(this.method="next",this.next=u.finallyLoc,y):this.complete(i)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),y},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),E(t),y}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var a=n.arg;E(t)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:V(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),y}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}}]);
//# sourceMappingURL=component---src-pages-sign-in-jsx-a0c80e6dcd1b075b3116.js.map