function e(e){const t=localStorage.getItem(e);return JSON.parse(t)}function t(e,t){if(t<=1)return[1];const n=[e-2,e-1,e,e+1,e+2].filter((e=>e>1&&e<t)),a=e===t-4,s=e>5,i=e<t-4;return 5===e&&n.unshift(2),a&&n.push(t-1),s&&n.unshift("..."),i&&n.push("..."),[1,...n,t]}function n(e,t){if(t<=1)return[1];const n=[e-2,e-1,e,e+1,e+2].filter((e=>e>=1&&e<=t)),a=2===e;return 1===e&&n.push(e+3,e+4),a&&n.push(e+3),[...n]}const a=document.querySelector(".gallery"),s=document.querySelector(".pagination__wrapper"),i=document.querySelector(".pagination__pages"),r=document.querySelector("#next-button"),c=document.querySelector("#prev-button");let o,l;let u=[];function d(t){!function(t){if(u=e(t),null===u)u=[],_(a),p("Oops...Nothing added.")}(t),0!==u.length?(s.classList.remove("hidden"),l=Math.ceil(u.length/2),m(1),c.addEventListener("click",(()=>{m(o-1)})),r.addEventListener("click",(()=>{m(o+1)})),i.addEventListener("click",(e=>{e.target.hasAttribute("page-index")&&m(Number(e.target.getAttribute("page-index")))}))):s.classList.add("hidden")}function m(s){o=s;const i=2*(s-1),d=2*s,m=u.slice(i,d);_(a),p(m.map((({title:t,name:n,poster_path:a,genre_ids:s,release_date:i,first_air_date:r,vote_average:c,vote:o=c.toFixed(1)||" - ",year:l=i||r||" - "})=>{const u=e("genres"),d=s.map((e=>u.genres.find((t=>t.id===e))));let m;return s.length>3?(m=d.map((e=>e.name)).slice(0,2),m.push("Other")):m=d.map((e=>e.name)),`<li class="gallery__item">\n                <a class="gallery__link" href="">\n                    <img class="gallery__image" src="https://image.tmdb.org/t/p/w500${a}" alt="" loading="lazy">\n                </a>\n                <div class="gallery__info">\n                    <p class="gallery__title">${t||n}</p>\n                    <p class="gallery__genre">${m.join(", ")}</p>\n                    <p class="gallery__year">${l.slice(0,4)}</p>\n                    <p class="gallery__vote">${o}</p>\n                </div>\n            </li>`})).join("")),window.scrollTo({top:0,left:0,behavior:"smooth"});g(document.documentElement.clientWidth>=768?t(o,l):n(o,l)),document.querySelectorAll(".pagination__number").forEach((e=>{e.classList.remove("activePage"),Number(e.getAttribute("page-index"))===o&&e.classList.add("activePage")})),function(){1===o?h(c):f(c);l===o?h(r):f(r)}()}function g(e){_(i);const t=e.map((e=>{if("number"==typeof e){const t=document.createElement("button");return t.className="pagination__number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),t}if("string"==typeof e){const t=document.createElement("span");return t.innerHTML=e,t}}));i.append(...t)}function p(e){a.insertAdjacentHTML("beforeend",e)}function _(e){e.innerHTML=""}function h(e){e.classList.add("hidden")}function f(e){e.classList.remove("hidden")}const y=document.querySelector("#theme-day"),L=document.querySelector(".footer"),b=document.querySelector(".main"),v=document.querySelector(".theme-day");y.addEventListener("click",(function(){L.classList.toggle("darkTheme"),b.classList.toggle("darkTheme"),v.classList.toggle("dark")}));const q=document.querySelector(".button_watched"),S=document.querySelector(".button_queue"),w=()=>{d("watchedFilms"),S.classList.remove("button_queue"),q.classList.add("button_queue"),q.classList.remove("button_watched"),S.classList.add("button_watched"),localStorage.setItem("page","watchedFilms")},E=()=>{d("queuedFilms"),q.classList.remove("button_queue"),S.classList.add("button_queue"),S.classList.remove("button_watched"),q.classList.add("button_watched"),localStorage.setItem("page","queuedFilms")};window.addEventListener("load",(()=>{"watchedFilms"===localStorage.getItem("page")?w():E()})),q.addEventListener("click",w),S.addEventListener("click",E);
//# sourceMappingURL=library.514b521d.js.map
