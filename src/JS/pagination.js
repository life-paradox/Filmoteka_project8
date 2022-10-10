export function pagination(films) {

  const paginationRef = document.querySelector(".pagination");


  const totalPages = films.total_pages;
  const currentPage = films.page;
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  if (currentPage === 1) {
    const markup = `<button type="button" class="prevPage">&#10229;</button>
    <button type="button" class="curPage">1</button>
    <button type="button" class="nextPage">2</button>
    <button type="button" class="nextPage+2">3</button>
    <button type="button" class="nextPage+3">4</button>
    <button type="button" class="nextPage+4">5</button>
    <button type="button" class="nextPage+5">6</button>
    <button type="button" class="nextPage+6">7</button>
    <span>&#8728;&#8728;&#8728;</span>
    <button type="button" class="maxPage">${totalPages}</button>
    <button type="button" class="nextPage">&#10230;</button>`;
    paginationRef.innerHTML = markup;
  }
  
  if (currentPage === 2) {
    const markup = `<button type="button" class="prevPage">&#10229;</button>
    <button type="button" class="prevPage">1</button>
    <button type="button" class="curPage">2</button>
    <button type="button" class="nextPage">3</button>
    <button type="button" class="nextPage+2">4</button>
    <button type="button" class="nextPage+3">5</button>
    <button type="button" class="nextPage+4">6</button>
    <button type="button" class="nextPage+5">7</button>
    <span>&#8728;&#8728;&#8728;</span>
    <button type="button" class="maxPage">${totalPages}</button>
    <button type="button" class="nextPage">&#10230;</button>`;
    paginationRef.innerHTML = markup;
  };





}