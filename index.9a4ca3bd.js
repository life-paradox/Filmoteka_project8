const e=document.querySelector(".gallery");(async()=>{const e=await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=861782ee1fc6aacf939bc06e51306075"),t=await e.json();return console.log(t),t})().then((function(t){const l=t.results.map((({title:e,poster_path:t,genre_ids:l,release_date:n})=>`<li class="gallery__item">\n            <a class="gallery__link" href="">\n                <img class="gallery__image" src="https://image.tmdb.org/t/p/w500${t}" alt="" loading="lazy">\n            </a>\n            <div class="gallery__info">\n                <p class="gallery__title">${e}</p>\n                <p class="gallery__genre">${l}</p>\n                <p class="gallery__year">${n.slice(0,4)}</p>\n            </div>\n        </li>`)).join("");e.innerHTML=l})),(()=>{const e=document.getElementById("slides-container"),t=document.querySelector(".slide"),l=document.getElementById("slide-arrow-prev");document.getElementById("slide-arrow-next").addEventListener("click",(()=>{const l=t.clientWidth;e.scrollLeft+=l})),l.addEventListener("click",(()=>{const l=t.clientWidth;e.scrollLeft-=l}))})();
//# sourceMappingURL=index.9a4ca3bd.js.map
