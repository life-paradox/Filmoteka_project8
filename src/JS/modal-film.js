import Modal from './modal';
import getFromLocalStorage from './localStorage';

let arrayOfWatchedFilms = [];
let filteredArrayOfWatchedFilms = [];
let arrayOfQueuedFilms = [];
let filteredArrayOfQueuedFilms = [];

const root = document.querySelector('.film-card');

const modalElementsRefs = {
  filmImage: document.querySelector('.film-image'),
  votes: document.querySelector('.film-votes'),
  title: document.querySelector('.film-title'),
  popularity: document.querySelector('.film-popularity'),
  genre: document.querySelector('.genre'),
  about: document.querySelector('.film-about'),
  originalTitle: document.querySelector('.film-original-title'),
};
const { filmImage, votes, title, popularity, originalTitle, genre, about } =
  modalElementsRefs;
const getMarkup = ({
  image,
  title,
  votes,
  originalTitle,
  averageVotes,
  popularity,
  genre,
  about,
}) => {
  return `<div class="film-card">
  <img class="film-image" width="290" height="370" src = "${image}" />
  <p class="film-title">${title}</p>
  <p class="film-votes">${votes}/ ${averageVotes}</p>
  <p class="film-original-title">${originalTitle}</p>
  <p class="film-popularity">${popularity}</p>
  <p class="genre">${genre}</p>

  <p class="film-about"><br />${about}</p>
  <button class="watched-films-btn">ADD TO WATCHED</button>
  <button class="queued-films-btn">ADD TO QUEUEs</button>
</div>
`;
};
export default function onModalEvents(evt) {
  evt.preventDefault();
  const film = localStorage.getItem('films');
  const parsedFilms = JSON.parse(film);
  const savedGenres = localStorage.getItem('genres');
  const parseGenres = JSON.parse(savedGenres);
  const films = parsedFilms.find(element => {
    const genreName = element.genre_ids
      .map(element => parseGenres.genres.find(genre => genre.id === element))
      .map(element => element.name)
      .join(', ');
    if (Number(evt.target.dataset.id) === element.id) {
      const elementsOfFilms = {
        image: `https://image.tmdb.org/t/p/w500${element.poster_path}`,
        title: element.title,
        votes: element.vote_count,
        originalTitle: element.original_title,
        averageVotes: element.vote_average.toFixed(2),
        popularity: element.popularity.toFixed(2),
        genre: genreName,
        about: element.overview,
      };
      const markup = getMarkup(elementsOfFilms);

      const filmCard = document.createElement('div');
      filmCard.innerHTML = markup;
      const modalFilm = new Modal(filmCard, modal => {
        const addToWatch = modal.querySelector('.watched-films-btn');

        addToWatch.addEventListener('click', e => {
          if (Number(evt.target.dataset.id) === element.id) {
            arrayOfWatchedFilms.push(element),
              (filteredArrayOfWatchedFilms = new Set(arrayOfWatchedFilms)),
              localStorage.setItem(
                'watchedFilms',
                JSON.stringify([...filteredArrayOfWatchedFilms])
              );
          }
        });
        if (getFromLocalStorage('watchedFilms')) {
          arrayOfWatchedFilms = getFromLocalStorage('watchedFilms');
        }

        const addToQueue = modal.querySelector('.queued-films-btn');

        addToQueue.addEventListener('click', e => {
          if (Number(evt.target.dataset.id) === element.id) {
            arrayOfQueuedFilms.push(element),
              (filteredArrayOfQueuedFilms = new Set(arrayOfQueuedFilms)),
              localStorage.setItem(
                'queuedFilms',
                JSON.stringify([...filteredArrayOfQueuedFilms])
              );
          }
        });
      });
    }
  });
}
if (getFromLocalStorage('queuedFilms')) {
  arrayOfQueuedFilms = getFromLocalStorage('queuedFilms');
}
console.log(localStorage.getItem('queuedFilms'));
