import { fetchPopFilms, renderFilms } from './JS/main';
import { renderFilms } from './JS/main';
import { slider } from './JS/slider';
import { pagination } from './JS/pagination';
import { fetchQueryFilm } from './JS/main';
import { genres } from './JS/main';
import './JS/themeRender';
genres();

fetchPopFilms(1).then(pagination);

// поиск по ключевому слову

const formRef = document.querySelector('.header-search-form');
formRef.addEventListener('submit', onSearch);
function onSearch(e) {
  e.preventDefault();
  const searchData = formRef.elements.searchQuery.value.trim();
  console.log(searchData);
  if (searchData !== '') {
    fetchQueryFilm(searchData).then(renderFilms);
  }
}

slider();

// SCROLL
const progressBar = document.querySelector('.progress-bar');
window.addEventListener('scroll', moveProgressBar);

function moveProgressBar() {
  const windowScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width_progress_line = (windowScroll / windowHeight) * 100;
  progressBar.style.width = width_progress_line + '%';
}
