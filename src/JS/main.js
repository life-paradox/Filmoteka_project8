import { API_KEY } from './api-key';
import a from './modal-film';
const galleryRef = document.querySelector('.gallery');

// фетч жанров

// https://api.themoviedb.org/3/genre/movie/list?api_key=861782ee1fc6aacf939bc06e51306075&language=uk-UA
function genres() {
  if (localStorage.getItem('genres')) {
    return;
  } else {
    const fetchGenres = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=uk-UA`
      );
      const genres = await response.json();
      localStorage.setItem('genres', JSON.stringify(genres));
    };
    fetchGenres();
  }
}
export { genres };

// Фетч популярных фильмов
const fetchPopFilms = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=uk-UA&page=1`
  );
  const films = await response.json();

  return films;
};
export { fetchPopFilms };

// фетч по ключевому слову
const fetchQueryFilm = async query => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=uk-UA&query=${query}&page=1&include_adult=false`
  );
  const films = await response.json();
  return films;
};
export { fetchQueryFilm };

// Рендер карточек
function renderFilms(films) {
  const markup = films.results.map(
    ({
      title,
      poster_path,
      genre_ids,
      release_date,
      first_air_date,
      year = release_date || first_air_date || ' - ',
    }) => {
      const genreName = genre_ids
        .map(element => parseGenres.genres.find(genre => genre.id === element))
        .map(element => element.name)
        .join(',');

      return `<li class="gallery__item">
                <img class="gallery__image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" loading="lazy">
            <div class="gallery__info">
                <p class="gallery__title">${title}</p>
                <p class="gallery__genre">${genreName}</p>     
                <p class="gallery__year">${year.slice(0, 4)}</p>

            </div>
        </li>`;
    }
  );
  galleryRef.innerHTML = markup;
  return films;
}
galleryRef.addEventListener('click', onModalEvent);

function onModalEvent(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
  a();
  // console.log(evt.path[1].children[1].firstElementChild.textContent);
  console.log(evt.target.title);
}
export { renderFilms };

//Парсінг жанрів
const savedGenres = localStorage.getItem('genres');
const parseGenres = JSON.parse(savedGenres);
