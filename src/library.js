import { pagination } from './JS/library-main';

const watchedButton = document.querySelector('.button_watched');
const queueButton = document.querySelector('.button_queue');

window.addEventListener('load', pagination('QUEUE'));

watchedButton.addEventListener('click', e => {
  pagination(e.target.textContent);
  queueButton.classList.remove('button_queue');
  watchedButton.classList.add('button_queue');
  watchedButton.classList.remove('button_watched');
  queueButton.classList.add('button_watched');
});

queueButton.addEventListener('click', e => {
  pagination(e.target.textContent);
  watchedButton.classList.remove('button_queue');
  queueButton.classList.add('button_queue');
  queueButton.classList.remove('button_watched');
  watchedButton.classList.add('button_watched');
});
