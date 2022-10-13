import { fetchPopFilms, renderFilms } from './JS/main';
import { renderFilms } from './JS/main';
import { slider } from './JS/slider';
import { pagination, paginationforQuery } from './JS/pagination';
import { fetchQueryFilm } from './JS/main';
import { genres } from './JS/main';

genres();

fetchPopFilms(1).then(pagination);


// поиск по ключевому слову
let searchData;
export { searchData };
const formRef = document.querySelector('.header-search-form');
formRef.addEventListener('submit', onSearch);
function onSearch(e) {
  e.preventDefault();
  searchData = formRef.elements.searchQuery.value.trim();
  console.log(searchData);
  if (searchData !== '') {
    fetchQueryFilm(1,searchData).then(paginationforQuery);
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

