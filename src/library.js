import { pagination } from './JS/library-main';

import './JS/themeRender';

const watchedButton = document.querySelector('.button_watched');
const queueButton = document.querySelector('.button_queue');

window.addEventListener('load', pagination('queuedFilms'));

watchedButton.addEventListener('click', e => {
  pagination('watchedFilms');
  queueButton.classList.remove('button_queue');
  watchedButton.classList.add('button_queue');
  watchedButton.classList.remove('button_watched');
  queueButton.classList.add('button_watched');
});

queueButton.addEventListener('click', e => {
  pagination('queuedFilms');
  watchedButton.classList.remove('button_queue');
  queueButton.classList.add('button_queue');
  queueButton.classList.remove('button_watched');
  watchedButton.classList.add('button_watched');
});
