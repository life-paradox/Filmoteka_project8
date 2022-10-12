export default function onModalEvent(evt) {
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
      <img src = ''/>
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
      return document.body.insertAdjacentHTML('afterbegin', mk);
    }
  });
}
