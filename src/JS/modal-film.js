import Modal from './modal';
import {
  setWatchedFilms,
  getWatchedFilms,
  setQueuedFilms,
  getQueuedFilms,
} from './localStorage';

const BTN_LABELS = {
  ADD_TO_WATCH: 'ADD TO WATCHED',
  REMOVE_FROM_WATCH: 'REMOVE FROM WATCHED',
  ADD_TO_QUEUE: 'ADD TO QUEUE',
  REMOVE_FROM_QUEUE: 'REMOVE FROM QUEUE',
};

function getMarkup({
  image,
  title,
  votes,
  originalTitle,
  averageVotes,
  popularity,
  genre,
  about,
  isWatched,
  isQueued,
}) {
  return `
    <div class="film-card">
      <img class="film-image" width="290" height="370" src = "${image}" />
      <p class="film-title">${title}</p>
      <p class="film-votes">${votes}/ ${averageVotes}</p>
      <p class="film-original-title">${originalTitle}</p>
      <p class="film-popularity">${popularity}</p>
      <p class="genre">${genre}</p>

      <p class="film-about"><br />${about}</p>
      <button class="watched-films-btn">${
        isWatched ? BTN_LABELS.REMOVE_FROM_WATCH : BTN_LABELS.ADD_TO_WATCH
      }</button>
      <button class="queued-films-btn">${
        isQueued ? BTN_LABELS.REMOVE_FROM_QUEUE : BTN_LABELS.ADD_TO_QUEUE
      }</button>
    </div>
  `;
}

function handleWatchBtnClick(evt, element, onModalChange) {
  const watchedFilms = getWatchedFilms();
  const watchedFilm = watchedFilms.find(x => x.id === element.id);

  if (!watchedFilm) {
    watchedFilms.push(element);
    evt.target.innerText = BTN_LABELS.REMOVE_FROM_WATCH;
  } else {
    const filmIndex = watchedFilms.indexOf(watchedFilm);
    watchedFilms.splice(filmIndex, 1);
    evt.target.innerText = BTN_LABELS.ADD_TO_WATCH;
  }

  setWatchedFilms(watchedFilms);
  onModalChange();
}

function handleQueueBtnClick(evt, element, onModalChange) {
  const queuedFilms = getQueuedFilms();
  const queuedFilm = queuedFilms.find(x => x.id === element.id);

  if (!queuedFilm) {
    queuedFilms.push(element);
    evt.target.innerText = BTN_LABELS.REMOVE_FROM_QUEUE;
  } else {
    const filmIndex = queuedFilms.indexOf(queuedFilm);
    queuedFilms.splice(filmIndex, 1);
    evt.target.innerText = BTN_LABELS.ADD_TO_QUEUE;
  }

  setQueuedFilms(queuedFilms);
  onModalChange();
}

function handleModalOpen(modal, element) {
  const addToWatch = modal.querySelector('.watched-films-btn');
  const addToQueue = modal.querySelector('.queued-films-btn');

  addToWatch.addEventListener('click', evt =>
    handleWatchBtnClick(evt, element)
  );
  addToQueue.addEventListener('click', evt =>
    handleQueueBtnClick(evt, element)
  );
}

export default function onModalEvents(evt) {
  evt.preventDefault();
  const films = JSON.parse(localStorage.getItem('films'));
  const genres = JSON.parse(localStorage.getItem('genres'));
  const id = Number(evt.target.dataset.id);
  const element = films.find(el => id === el.id);

  if (!element) return;

  const watchedFilms = getWatchedFilms();
  const isWatched = watchedFilms.some(el => el.id === id);
  const queuedFilms = getQueuedFilms();
  const isQueued = queuedFilms.some(el => el.id === id);

  const genreName = element.genre_ids
    .map(element => genres.genres.find(genre => genre.id === element))
    .map(element => element.name)
    .join(', ');
  const filmData = {
    image: `https://image.tmdb.org/t/p/w500${element.poster_path}`,
    title: element.title,
    votes: element.vote_count,
    originalTitle: element.original_title,
    averageVotes: element.vote_average.toFixed(2),
    popularity: element.popularity.toFixed(2),
    genre: genreName,
    about: element.overview,
    isWatched: isWatched,
    isQueued: isQueued,
  };
  const markup = getMarkup(filmData);
  const filmCard = document.createElement('div');

  filmCard.innerHTML = markup;
  new Modal(filmCard, modal => handleModalOpen(modal, element, onModalChange));
}
