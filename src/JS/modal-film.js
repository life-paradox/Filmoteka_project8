export default function сreateModal(title) {
  const film = localStorage.getItem('films');
  const parsedFilms = JSON.parse(film);
  const films = parsedFilms.find(element => {
    if (element.id === 894205) {
      const mk = `<div class = 'backdrop'>
    <div class = 'modal'>
    <img src = ''/>
    <p class = 'film-title'>${element.title}</p>
    <p class = 'film-votes'></p>
    <p class = 'film-popularity' ></p>
    <p class = 'genre'></p>
    <p class = 'film-about'></p>
    <button> ADD TO WATCHED </button>
    <button> ADD TO QUEUE </button>
    </div>
  </div>`;
      document.body.insertAdjacentHTML('afterbegin', mk);
    }
  });
}
