import { fetchPopFilms, renderFilms } from './JS/main';
import { renderFilms } from './JS/main';
import { slider } from './JS/slider';
import { pagination } from "./JS/pagination";
import { fetchQueryFilm } from "./JS/main";
import { genres } from "./JS/main";


genres();

fetchPopFilms(1).then(pagination);




// поиск по ключевому слову

const formRef = document.querySelector(".header-search-form");
formRef.addEventListener("submit", onSearch);
function onSearch(e) {
  e.preventDefault();
  const searchData = formRef.elements.searchQuery.value.trim();
  console.log(searchData);
  if (searchData !== '') {
    fetchQueryFilm(searchData).then(renderFilms);
  }
}

slider();