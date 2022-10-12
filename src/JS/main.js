
import { API_KEY } from './api-key';
import { currentPage } from "./pagination";
import onModalEvent from './modal-film';
import createModal from './modal-film';
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
  const parsedFilms = JSON.stringify(films.results);
  localStorage.setItem('films', parsedFilms);

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
  const savedGenres = localStorage.getItem("genres");
  const parseGenres = JSON.parse(savedGenres);
  const markup = films.results.map(({title, id, poster_path, genre_ids, release_date, first_air_date,
    year = release_date || first_air_date || ' - ',
  }) => { 
    
    const genreName = genre_ids.map(element =>
      parseGenres.genres.find(genre => genre.id === element));
      let genreOutput;
       if (genre_ids.length > 3) {
        genreOutput = genreName.map(element=> element.name).slice(0,2);
        genreOutput.push('інщі');
       } else {
        genreOutput = genreName.map(element=> element.name);
       }

      console.log(genreOutput);
          return `<li class="gallery__item">
            <a class="gallery__link" href="">
                <img class="gallery__image" src="https://image.tmdb.org/t/p/w500${poster_path}" data-id="${id}" alt="" loading="lazy">
            </a>
            <div class="gallery__info">
                <p class="gallery__title cut-text">${title}</p>

                <p class="gallery__genre">${genreOutput.join(', ')}</p>     

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

export { renderFilms };



// const savedGenres = localStorage.getItem("genres");
// const parseGenres = JSON.parse(savedGenres);
// console.log(parseGenres.genres);


//Спіннер
const preloader = document.querySelector('#preloader');

preloader.classList.add('show-preloader');

window.addEventListener('load', function () {
	setTimeout(function(){
    	preloader.classList.remove('show-preloader');
	}, 1000);
});

//Скролл

window.onscroll = function() {
    let scrollElem = document.getElementById("scrollToTop");
    if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
        scrollElem.style.opacity = "1";
    } else {
        scrollElem.style.opacity = "0";
    }
}

let timeOut;
function goUp() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-100);
        timeOut = setTimeout('goUp()',20);
    } else clearTimeout(timeOut);
}


