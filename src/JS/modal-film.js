const film = localStorage.getItem('films');
const parsedFilms = JSON.parse(film);
const savedGenres = localStorage.getItem('genres');
const parseGenres = JSON.parse(savedGenres);
let arrayOfFilms = [];
let filteredArrayOfFilms = [];

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

export default function onModalEvents(evt) {
  evt.preventDefault();

  const films = parsedFilms.find(element => {
    const genreName = element.genre_ids
      .map(element => parseGenres.genres.find(genre => genre.id === element))
      .map(element => element.name)
      .join(', ');

    if (Number(evt.target.dataset.id) === element.id) {
      votes.textContent = `${element.vote_average.toFixed(2)}/${
        element.vote_count
      }`;
      filmImage.setAttribute(
        'src',
        `https://image.tmdb.org/t/p/w500${element.poster_path}`
      );

      title.textContent = `${element.title}`;
      popularity.textContent = `${element.popularity.toFixed(2)}`;
      originalTitle.textContent = `${element.original_title}`;
      about.textContent = `${element.overview}`;
      genre.textContent = `${genreName}`;
      const closeModalBtn = document.querySelector('[data-modal="close"]');
      const backdrop = document.querySelector('.backdrop');
      backdrop.classList.add('active');

      closeModalBtn.addEventListener('click', e =>
        backdrop.classList.remove('active')
      );
    }

    const addToWatch = document.querySelector('.watched-films-btn');

    addToWatch.addEventListener('click', e => {
      if (Number(evt.target.dataset.id) === element.id) {
        arrayOfFilms.push(element),
          (filteredArrayOfFilms = new Set(arrayOfFilms)),
          localStorage.setItem(
            'watchedFilms',
            JSON.stringify([...filteredArrayOfFilms])
          );
      }
    });
    const addToQueue = document.querySelector('.queued-films-btn');
    console.log(addToQueue);
  });
}
