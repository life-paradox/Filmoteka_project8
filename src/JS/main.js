
const galleryRef = document.querySelector(".gallery");

const fetchPopFilms = async () => {
  const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=861782ee1fc6aacf939bc06e51306075');
  const films = await response.json();
  console.log(films);
  return films;
};
export { fetchPopFilms };

function renderFilms(films) {
  const markup = films.results.map(({title, poster_path, genre_ids, release_date
  }) => {
          return `<li class="gallery__item">
            <a class="gallery__link" href="">
                <img class="gallery__image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" loading="lazy">
            </a>
            <div class="gallery__info">
                <p class="gallery__title">${title}</p>
                <p class="gallery__genre">${genre_ids}</p>
                <p class="gallery__year">${release_date.slice(0, 4)}</p>
            </div>
        </li>`
      }).join('');
      galleryRef.innerHTML = markup;  
}
export { renderFilms };