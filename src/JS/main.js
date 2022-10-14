import { API_KEY } from './api-key';
import { currentPage } from './pagination';
import onModalEvent from './modal-film';

const galleryRef = document.querySelector('.gallery');
import createModal from './modal-film';
import { searchData } from '../index';
// фетч жанров

// https://api.themoviedb.org/3/genre/movie/list?api_key=861782ee1fc6aacf939bc06e51306075&language=uk-UA
// function genres() {
//   if (localStorage.getItem('genres')) {
//     return;
//   } else {
//     const fetchGenres = async () => {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=uk-UA`
//       );
//       const genres = await response.json();
//       localStorage.setItem('genres', JSON.stringify(genres));
//     };
//     fetchGenres();

//   }
// }

function fetchGenres() {
  return Promise.resolve(
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=uk-UA`
    )
      .then(res => res.json())
      .then(genres => {
        localStorage.setItem('genres', JSON.stringify(genres));
        return genres;
      })
  );
}

export { fetchGenres };

// Фетч популярных фильмов
const fetchPopFilms = async page => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  const films = await response.json();
  const parsedFilms = JSON.stringify(films.results);
  localStorage.setItem('films', parsedFilms);
  return films;
};
export { fetchPopFilms };

// фетч по ключевому слову
const fetchQueryFilm = async page => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchData}&page=${page}&include_adult=false`
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
      id,
      poster_path,
      genre_ids,
      release_date,
      first_air_date,
      year = release_date || first_air_date || ' - ',
    }) => {
      const savedGenres = localStorage.getItem('genres');
      const parseGenres = JSON.parse(savedGenres);
      const genreName = genre_ids
        .map(element => parseGenres.genres.find(genre => genre.id === element))
        .map(element => element.name)
        .join(',');

      return `<li class="gallery__item">
                <a href = ''>
                <img class="gallery__image" src="https://image.tmdb.org/t/p/w500${poster_path}" data-id="${id}" alt="" loading="lazy">
                 <div class="gallery__info">
                <p class="gallery__title">${title}</p>
                <p class="gallery__genre">${genreName}</p>     
                <p class="gallery__year">${year.slice(0, 4)}</p>
            </div>
            </a>
          </li>`;
    }
  );

  galleryRef.innerHTML = markup;
  return films;
}
galleryRef.addEventListener('click', onModalEvent);

// console.log(evt.target);
// console.log(evt.target.dataset.id);

export { renderFilms };

//Парсінг жанрів
galleryRef.addEventListener('click', onModalEvent);

// export { renderFilms };

// const savedGenres = localStorage.getItem("genres");
// const parseGenres = JSON.parse(savedGenres);
// console.log(parseGenres.genres);

//Спіннер
const preloader = document.querySelector('#preloader');

preloader.classList.add('show-preloader');

window.addEventListener('load', function () {
  setTimeout(function () {
    preloader.classList.remove('show-preloader');
  }, 1000);
});

//Скролл

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();
