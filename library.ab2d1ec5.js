!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},s=r.parcelRequireb466;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},r.parcelRequireb466=s),s.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||n.default(e)||i.default(e)||o.default()};var r=a(s("kMC0W")),n=a(s("7AJDX")),o=a(s("8CtQK")),i=a(s("auk6i"));function a(e){return e&&e.__esModule?e:{default:e}}})),s.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=s("8NIkP"))&&r.__esModule?r:{default:r}})),s.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),s.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),s.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),s.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=s("8NIkP"))&&r.__esModule?r:{default:r}})),s.register("aNvF6",(function(t,r){function n(e){var t=localStorage.getItem(e);return JSON.parse(t)}e(t.exports,"default",(function(){return n})),e(t.exports,"getFromLocalStorage",(function(){return n}))})),s.register("fM7Nq",(function(r,n){e(r.exports,"paginationMarkup",(function(){return i})),e(r.exports,"paginationMarkupMobile",(function(){return a}));var o=s("8nrFW");function i(e,r){if(r<=1)return[1];var n=[e-2,e-1,e,e+1,e+2].filter((function(e){return e>1&&e<r})),s=e===r-4,i=e>5,a=e<r-4;return 5===e&&n.unshift(2),s&&n.push(r-1),i&&n.unshift("..."),a&&n.push("..."),[1].concat(t(o)(n),[r])}function a(e,r){if(r<=1)return[1];var n=[e-2,e-1,e,e+1,e+2].filter((function(e){return e>=1&&e<=r})),s=2===e;return 1===e&&n.push(e+3,e+4),s&&n.push(e+3),t(o)(n)}})),s.register("lRMGX",(function(e,r){var n=s("8MBJY"),o=s("a2hTj"),i=document.querySelector(".footer"),a=document.querySelector("body"),d=(document.querySelector(".theme-day"),document.querySelector(".gallery__title"));console.log(d);var l=document.getElementById("myCheck");function u(){try{"dark"===localStorage.getItem("theme")?(a.classList.add("darkTheme"),i.classList.add("darkTheme"),d.classList.add("darkTheme")):(a.classList.remove("darkTheme"),i.classList.remove("darkTheme"),d.classList.remove("darkTheme"))}catch(e){}}l.addEventListener("change",(function(e){e.preventDefault(),l.checked?localStorage.setItem("theme","dark"):localStorage.removeItem("theme"),u()})),u();var c=new(function(){"use strict";function e(r){t(n)(this,e),this.name=r,this.hash={};var o=localStorage.getItem(this.name);o&&(this.hash=JSON.parse(o)),this.save()}return t(o)(e,[{key:"get",value:function(e){return this.item.find((function(t){return t.id===e}))}},{key:"add",value:function(e,t){this.hash[e]=t,this.save()}},{key:"del",value:function(e){delete this.hash[e],this.save()}},{key:"save",value:function(){this.list=Object.values(this.hash);var e=JSON.stringify(this.hash);localStorage.setItem(this.name,e)}}]),e}())("checkbox_store");function f(e){var t=e.currentTarget.id,r=e.currentTarget.checked?"on":void 0;c.add(t,{id:t,state:r})}c.list.forEach((function(e){if("on"===e.state)return document.querySelector("#"+e.id).checked=e.state;c.del(e.id)})),document.querySelectorAll(".check").forEach((function(e){e.addEventListener("change",f)}))})),s.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),s.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),s.register("6b9QC",(function(t,r){e(t.exports,"slider",(function(){return n}));var n=function(e){var t=e.querySelector("#slides-container"),r=e.querySelector(".slide"),n=e.querySelector("#slide-arrow-prev");e.querySelector("#slide-arrow-next").addEventListener("click",(function(){var e=r.clientWidth;t.scrollLeft+=e})),n.addEventListener("click",(function(){var e=r.clientWidth;t.scrollLeft-=e}))}})),s.register("bVASI",(function(r,n){e(r.exports,"default",(function(){return a}));var o=s("8MBJY"),i=s("a2hTj"),a=function(){"use strict";function e(r,n){var s=this;t(o)(this,e),this.classHidden="is-modal-hidden",this.onOpen=n,this.backdrop=document.querySelector("[data-modal-backdrop]")||this.createModal(),this.modal=this.backdrop.querySelector("[data-modal]"),this.modalBody=this.modal.querySelector("[data-modal-body]"),this.modalClose=this.modal.querySelector("[data-modal-close]"),this.close(),this.show=this.show.bind(this),this.close=this.close.bind(this),this.processOpenedModalEvents=this.processOpenedModalEvents.bind(this),this.processClosedModalEvents=this.processClosedModalEvents.bind(this),this.handleDocumentKeyPressed=this.handleDocumentKeyPressed.bind(this),this.handleOutsideModalClick=this.handleOutsideModalClick.bind(this),setTimeout((function(){s.modalBody.innerHTML=r.outerHTML,s.show()}),250)}return t(i)(e,[{key:"createModal",value:function(){var e=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),n=document.createElement("button");return e.setAttribute("data-modal-backdrop",""),t.setAttribute("data-modal",""),r.setAttribute("data-modal-body",""),n.setAttribute("data-modal-close",""),e.appendChild(t),t.appendChild(n),t.appendChild(r),document.body.appendChild(e),e}},{key:"processOpenedModalEvents",value:function(){document.addEventListener("keydown",this.handleDocumentKeyPressed),document.addEventListener("click",this.handleOutsideModalClick),this.modalClose.addEventListener("click",this.close)}},{key:"processClosedModalEvents",value:function(){document.removeEventListener("keydown",this.handleDocumentKeyPressed),document.removeEventListener("click",this.handleOutsideModalClick)}},{key:"show",value:function(){this.backdrop.classList.remove(this.classHidden),this.processOpenedModalEvents(),this.onOpen&&this.onOpen(this.modal)}},{key:"close",value:function(){var e=this.backdrop.classList;e.contains(this.classHidden)||e.add(this.classHidden),this.processClosedModalEvents()}},{key:"handleDocumentKeyPressed",value:function(e){"Escape"===e.key&&this.close()}},{key:"handleOutsideModalClick",value:function(e){this.modal.contains(e.target)||this.close()}}]),e}()}))}();
//# sourceMappingURL=library.ab2d1ec5.js.map
