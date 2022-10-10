export default function a() {
  const mk = `<div class = 'backdrop'>
  <div class = 'modal'>
  <img src = ''/>
  <title class = 'film-title'></title>
  <p class = 'film-votes'></p>
  <p class = 'film-popularity' >gdsafds</p>
  <p class = 'genre'>gdsafds</p>
  <p class = 'film-about'>fdsafsafdsafdsafsdfdsass</p>
  <button> ADD TO WATCHED </button>
  <button> ADD TO QUEUE </button>
  </div>
</div>`;
  document.body.insertAdjacentHTML('afterbegin', mk);
}
