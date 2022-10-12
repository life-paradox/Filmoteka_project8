import { getFromLocalStorage } from './localStorage';
export { paginationMarkup, paginationMarkupMobile, markupMovies };

function paginationMarkup(currentPage, pageCount) {
  if (pageCount <= 1) return [1];
  const center = [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];

    filteredCenter = center.filter(p => p > 1 && p < pageCount);
    includeThreeLeft = currentPage === 5;
    includeThreeRight = currentPage === pageCount - 4;
    includeLeftDots = currentPage > 5;
    includeRightDots = currentPage < pageCount - 4;

  if (includeThreeLeft) filteredCenter.unshift(2);
  if (includeThreeRight) filteredCenter.push(pageCount - 1);

  if (includeLeftDots) filteredCenter.unshift('...');
  if (includeRightDots) filteredCenter.push('...');

  return [1, ...filteredCenter, pageCount];
}

function paginationMarkupMobile(currentPage, pageCount) {
  if (pageCount <= 1) return [1];

  const center = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];
  
  const filteredCenter = center.filter(p => p >= 1 && p <= pageCount);
  const includeTwoRight = currentPage === 1;
  const includeOneRight = currentPage === 2;

  if (includeTwoRight) filteredCenter.push(currentPage + 3, currentPage + 4);
  if (includeOneRight) filteredCenter.push(currentPage + 3);

  return [...filteredCenter];
}

function markupMovies(films) {
  return films
    .map(
      ({
        title,
        name,
        poster_path,
        genre_ids,
        release_date,
        first_air_date,
        vote_average,
        vote = vote_average.toFixed(1) || ' - ',
        year = release_date || first_air_date || ' - ',
      }) => {
        const parseGenres = getFromLocalStorage('genres');
        const genreName = genre_ids.map(element =>
          parseGenres.genres.find(genre => genre.id === element)
        );
        let genreOutput;
        if (genre_ids.length > 3) {
          genreOutput = genreName.map(element => element.name).slice(0, 2);
          genreOutput.push('інші');
        } else {
          genreOutput = genreName.map(element => element.name);
        }

        return `<li class="gallery__item">
                <a class="gallery__link" href="">
                    <img class="gallery__image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" loading="lazy">
                </a>
                <div class="gallery__info">
                    <p class="gallery__title">${title || name}</p>
                    <p class="gallery__genre">${genreOutput.join(', ')}</p>
                    <p class="gallery__year">${year.slice(0, 4)}</p>
                    <p class="gallery__vote">${vote}</p>
                </div>
            </li>`;
      }
    )
    .join('');
}
