!function(){function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequireb466;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},r.parcelRequireb466=i),i.register("iE7OH",(function(e,r){var n,o;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};n=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)i[e[r]]=t[e[r]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,r){var n;t(e.exports,"getBundleURL",(function(){return n}),(function(t){return n=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.8176f9ed.js","35GBU":"index-main-mobile.7ce6b2f7.jpg","5UbS1":"index.87b19b28.css","7nwxg":"library.ac2c989b.js"}'));var a,c=i("8nrFW"),u=i("aNvF6");a=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("35GBU");var s=i("fM7Nq"),l={};function f(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,c,"next",t)}function c(t){f(i,n,o,a,c,"throw",t)}a(void 0)}))}};var h={},d=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",g={};function v(){}function m(){}function y(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(N([])));_&&_!==r&&n.call(_,i)&&(w=_);var L=y.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=y,u(L,"constructor",y),u(y,"constructor",m),m.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,c,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(h);try{regeneratorRuntime=d}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=d:Function("r","regeneratorRuntime = r")(d)}var p="861782ee1fc6aacf939bc06e51306075",g=i("aB0kH"),v=document.querySelector(".gallery");var m,y=(m=e(l)(e(h).mark((function t(r){var n,o,i;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(p,"&language=en-US&page=").concat(r));case 2:return n=t.sent,t.next=5,n.json();case 5:return o=t.sent,i=JSON.stringify(o.results),localStorage.setItem("films",i),t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)}))),function(t){return m.apply(this,arguments)}),w=function(){var t=e(l)(e(h).mark((function t(r){var n,o;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(p,"&language=en-US&query=").concat(P,"&page=").concat(r,"&include_adult=false"));case 2:return n=t.sent,t.next=5,n.json();case 5:return o=t.sent,console.log("result of fetch",o),t.abrupt("return",o);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();v.addEventListener("click",g.default);var b=document.querySelector("#preloader");b.classList.add("show-preloader"),window.addEventListener("load",(function(){setTimeout((function(){b.classList.remove("show-preloader")}),1e3)})),{el:document.querySelector(".btn-up"),show:function(){this.el.classList.remove("btn-up_hide")},hide:function(){this.el.classList.add("btn-up_hide")},addEventListener:function(){var t=this;window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>400?t.show():t.hide()})),document.querySelector(".btn-up").onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}}.addEventListener();var _,L,E,x=document.querySelector(".gallery"),S=document.querySelector(".pagination__wrapper"),k=document.querySelector(".pagination__pages"),O=document.querySelector("#next-button"),j=document.querySelector("#prev-button");function N(t){(E=t).results.length?(L=Math.ceil(E.total_results/20),T(t),j.addEventListener("click",(function(){y(_-1).then(T)})),O.addEventListener("click",(function(){y(_+1).then(T)})),k.addEventListener("click",(function(t){t.target.hasAttribute("page-index")&&y(Number(t.target.getAttribute("page-index"))).then(T)}))):S.classList.add("hidden")}function T(t){_=t.page;var r;t.results;H(x),r=function(t){var r=(0,u.getFromLocalStorage)("genres");return t.results.map((function(t){var n,o=t.title,i=t.id,c=t.poster_path,u=t.genre_ids,s=t.release_date,l=t.first_air_date,f=t.year,h=void 0===f?s||l||" - ":f,d=u.map((function(t){return r.genres.find((function(e){return e.id===t}))}));u.length>3?(n=d.map((function(t){return t.name})).slice(0,2)).push("Other"):n=d.map((function(t){return t.name}));var p=c?"https://image.tmdb.org/t/p/w500".concat(c):e(a);return'<li class="gallery__item">\n            <a class="gallery__link"  href="">\n                <img class="gallery__image" data-id='.concat(i,' src="').concat(p,'" alt="').concat(o,'" loading="lazy">\n            </a>\n            <div class="gallery__info">\n                <p class="gallery__title cut-text">').concat(o,'</p>\n\n                <p class="gallery__genre">').concat(n.join(", "),'</p>     \n                <p class="gallery__year">').concat(h.slice(0,4),"</p>\n\n            </div>\n        </li>")})).join("")}(t),x.insertAdjacentHTML("beforeend",r),window.scrollTo({top:0,left:0,behavior:"smooth"}),q(document.documentElement.clientWidth>=768?(0,s.paginationMarkup)(_,L):(0,s.paginationMarkupMobile)(_,L)),document.querySelectorAll(".pagination__number").forEach((function(t){t.classList.remove("activePage"),Number(t.getAttribute("page-index"))===_&&t.classList.add("activePage")})),function(){1===_?A(j):F(j);L===_?A(O):F(O)}()}function q(t){var r;H(k);var n=t.map((function(t){if("number"==typeof t){var e=document.createElement("button");return e.className="pagination__number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),e}if("string"==typeof t){var r=document.createElement("span");return r.innerHTML=t,r}}));(r=k).append.apply(r,e(c)(n))}function H(t){t.innerHTML=""}function A(t){t.classList.add("hidden")}function F(t){t.classList.remove("hidden")}function M(t){(E=t).results.length?(L=Math.ceil(E.total_results/20),T(t),j.addEventListener("click",(function(){w(_-1).then(T)})),O.addEventListener("click",(function(){w(_+1).then(T)})),k.addEventListener("click",(function(t){t.target.hasAttribute("page-index")&&w(Number(t.target.getAttribute("page-index"))).then(T)}))):S.classList.add("hidden")}i("lRMGX");var P,R=i("acQVI");localStorage.getItem("genres")?y(1).then(N):Promise.resolve(fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(p,"&language=en-US")).then((function(t){return t.json()})).then((function(t){return localStorage.setItem("genres",JSON.stringify(t)),t}))).then((function(t){y(1).then((function(t){return N(t)}))}));var G=document.querySelector(".header-search-form"),U=document.querySelector(".header-info");G.addEventListener("submit",(function(t){t.preventDefault(),P=G.elements.searchQuery.value.trim(),console.log("search",P),""!==P&&w(1,P).then((function(t){return t.total_results<=0&&(U.classList.remove("is"),U.innerHTML="Search result not successful. Enter the correct movie name and try again."),t})).then(M)}));var I=document.querySelector(".progress-bar");window.addEventListener("scroll",(function(){var t=document.body.scrollTop||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-document.documentElement.clientHeight,r=t/e*100;I.style.width=r+"%"})),(0,R.modalFooter)()}();
//# sourceMappingURL=index.8176f9ed.js.map
