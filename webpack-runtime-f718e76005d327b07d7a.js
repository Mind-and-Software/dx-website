!function(){"use strict";var e,t,n,r,o,i,c,u={},a={};function f(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return u[e].call(n.exports,n,n.exports,f),n.exports}f.m=u,e=[],f.O=function(t,n,r,o){if(!n){var i=1/0;for(a=0;a<e.length;a++){n=e[a][0],r=e[a][1],o=e[a][2];for(var c=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(f.O).every((function(e){return f.O[e](n[u])}))?n.splice(u--,1):(c=!1,o<i&&(i=o));c&&(e.splice(a--,1),t=r())}return t}o=o||0;for(var a=e.length;a>0&&e[a-1][2]>o;a--)e[a]=e[a-1];e[a]=[n,r,o]},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},f.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var i={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){i[t]=function(){return e[t]}}));return i.default=function(){return e},f.d(o,i),o},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce((function(t,n){return f.f[n](e,t),t}),[]))},f.u=function(e){return({81:"component---src-pages-tags-jsx",89:"component---src-templates-single-tag-jsx",230:"component---src-pages-index-jsx",256:"component---src-pages-404-jsx",351:"commons",366:"component---src-templates-blog-jsx",457:"5459106c",532:"styles",620:"component---src-pages-articles-jsx"}[e]||e)+"-"+{81:"15cf7f6d6e4ea42ec39d",89:"faf7755e4e62bdddabf7",175:"2d4272636eae71f59298",230:"f0db405db16feff0225a",256:"c17cc9084afd43825614",351:"7930cd476436422cc6cc",366:"59fc8d4142ca2f13939f",457:"3797c4281ebb333fc5be",532:"243f5979534b3af669b8",620:"189dd27356e3d3060e62",876:"30240073e26022ddbec8",932:"596070895b172fe92de9"}[e]+".js"},f.miniCssF=function(e){return"styles.622a2af3d978798f3b54.css"},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="dx-website:",f.l=function(e,t,n,i){if(r[e])r[e].push(t);else{var c,u;if(void 0!==n)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var l=a[s];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+n){c=l;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",o+n),c.src=e),r[e]=[t];var d=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/dx-website/",i=function(e){return new Promise((function(t,n){var r=f.miniCssF(e),o=f.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(c=n[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===t))return c}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var c;if((o=(c=i[r]).getAttribute("data-href"))===e||o===t)return c}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var c=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=c,a.request=u,o.parentNode.removeChild(o),r(a)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},c={658:0},f.f.miniCss=function(e,t){c[e]?t.push(c[e]):0!==c[e]&&{532:1}[e]&&t.push(c[e]=i(e).then((function(){c[e]=0}),(function(t){throw delete c[e],t})))},function(){var e={658:0};f.f.j=function(t,n){var r=f.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=f.p+f.u(t),c=new Error;f.l(i,(function(n){if(f.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}}),"chunk-"+t,t)}},f.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],c=n[1],u=n[2],a=0;for(r in c)f.o(c,r)&&(f.m[r]=c[r]);if(u)var s=u(f);for(t&&t(n);a<i.length;a++)o=i[a],f.o(e,o)&&e[o]&&e[o][0](),e[i[a]]=0;return f.O(s)},n=self.webpackChunkdx_website=self.webpackChunkdx_website||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-f718e76005d327b07d7a.js.map