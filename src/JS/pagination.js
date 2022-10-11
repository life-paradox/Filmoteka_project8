import {
  paginationMarkup,
  paginationMarkupMobile,
  markupMovies,
} from './index-markups';

export { pagination };


const moviesList = document.querySelector('.gallery');
const paginationNav = document.querySelector('.pagination__wrapper');
const paginationWrapper = document.querySelector('.pagination__pages');
const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#prev-button');

let currentPage;
let pageCount;
const paginationLimit = 20;
let movies;

//Render and pagination
function pagination(films) {
  movies = films;

  if (movies.results.length === 0) {
    paginationNav.classList.add('hidden');
    return;
  }

  // paginationNav.classList.remove('hidden');
  pageCount = Math.ceil(movies.total_results / paginationLimit);
  renderPage(1);

  prevButton.addEventListener('click', () => {
    renderPage(currentPage - 1);
  });

  nextButton.addEventListener('click', () => {
    renderPage(currentPage + 1);
  });

  paginationWrapper.addEventListener('click', e => {
    if (e.target.hasAttribute('page-index')) {
      renderPage(Number(e.target.getAttribute('page-index')));
    }
  });
}


function renderPage(pageNum) {
  currentPage = pageNum;

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
  const currentMovies = movies;
  clearContainer(moviesList);
  insertListItems(markupMovies(currentMovies));
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });

  window.innerWidth >= 768
    ? getPaginationNumbers(paginationMarkup(currentPage, pageCount))
    : getPaginationNumbers(paginationMarkupMobile(currentPage, pageCount));
  handleActivePageNumber();
  handlePageButtonsStatus();
}

function getPaginationNumbers(items) {
  clearContainer(paginationWrapper);

  const pages = items.map(item => {
    if (typeof item === 'number') {
      const pageNumber = document.createElement('button');
      pageNumber.className = 'pagination__number';
      pageNumber.innerHTML = item;
      pageNumber.setAttribute('page-index', item);
      pageNumber.setAttribute('aria-label', 'Page ' + item);
      return pageNumber;
    }

    if (typeof item === 'string') {
      const dots = document.createElement('span');
      dots.innerHTML = item;
      return dots;
    }
  });
  paginationWrapper.append(...pages);
}

function insertListItems(items) {
  moviesList.insertAdjacentHTML('beforeend', items);
}

function clearContainer(container) {
  container.innerHTML = '';
}

// Handle pagination buttons

function handleActivePageNumber() {
  document.querySelectorAll('.pagination__number').forEach(button => {
    button.classList.remove('active');

    const pageIndex = Number(button.getAttribute('page-index'));

    if (pageIndex === currentPage) {
      button.classList.add('active');
    }
  });
}

function disableButton(button) {
  button.classList.add('hidden');
}

function enableButton(button) {
  button.classList.remove('hidden');
}

function handlePageButtonsStatus() {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
}
