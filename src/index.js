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

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}