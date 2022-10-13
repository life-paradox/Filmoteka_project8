import { parseGenres } from './main';

export default function onModalEvents(evt) {
  evt.preventDefault();

  const film = localStorage.getItem('films');
  const parsedFilms = JSON.parse(film);
  const films = parsedFilms.find(element => {
    const genreName = element.genre_ids
      .map(element => parseGenres.genres.find(genre => genre.id === element))
      .map(element => element.name)
      .join('');

    if (Number(evt.target.dataset.id) === element.id) {
      const mk = `<div class = 'backdrop'>
      <div class = 'modal'>
      <button data-modal = "close">
      <svg id = close-modal class = "close-modal-btn" width = 30 height = 30>
      <use href = "/sprite.15147c25.svg#close-btn"></use>
      </svg>
      </button>
      <img width = 290 height = 370 src = 'https://image.tmdb.org/t/p/w500${
        element.poster_path
      }'/>
      <p class = 'film-votes'>Vote/votes ${element.vote_average.toFixed(1)}/${
        element.vote_count
      }</p>
      <p class = 'film-title'>Original Title ${element.original_title}</p>
      <p class = 'film-popularity'> </p>
      <p class = 'genre'>${genreName}</p>
      <p class = 'film-about'>About <br>${element.overview}</p>
<button> ADD TO WATCHED </button>
<button> ADD TO QUEUE </button>
</div>
</div>`;
      document.body.insertAdjacentHTML('afterbegin', mk);
      const closeModalBtn = document.querySelector('.close-modal-btn');
      const backdrop = document.querySelector('.backdrop');
      closeModalBtn.addEventListener('click', e => backdrop.remove());
    }
  });
}
