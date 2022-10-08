// to delete once local storage is working
const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];
const galleryItems2 = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
  ];

const saveToLocalStorage = function(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

saveToLocalStorage("watched",galleryItems);
saveToLocalStorage("qued",galleryItems2);
//



const moviesList = document.querySelector(".pagination__movies");
const paginationWrapper = document.querySelector(".pagination__pages");
const nextButton = document.querySelector("#next-button");
const prevButton = document.querySelector("#prev-button");
console.log(paginationWrapper);
console.log(moviesList);

let currentPage;
let pageCount;
const paginationLimit = 1;

//get from  Local Storage
function getFromLocalStorage(key){
    const savedMovies = localStorage.getItem(key);
    return JSON.parse(savedMovies);
};

const movies = getFromLocalStorage("watched");

pageCount = Math.ceil(movies.length / paginationLimit);


//Pagination markups
function paginationMarkup(currentPage, pageCount) {
    if (pageCount <= 1) return [1];
    const center = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2],
        filteredCenter = center.filter((p) => p > 1 && p < pageCount),
        includeThreeLeft = currentPage === 5,
        includeThreeRight = currentPage === pageCount - 4,
        includeLeftDots = currentPage > 5,
        includeRightDots = currentPage < pageCount - 4;

    if (includeThreeLeft) filteredCenter.unshift(2)
    if (includeThreeRight) filteredCenter.push(pageCount - 1)

    if (includeLeftDots) filteredCenter.unshift('...');
    if (includeRightDots) filteredCenter.push('...');

    return [1, ...filteredCenter, pageCount]
}

function paginationMarkupMobile(currentPage, pageCount) {
    if (pageCount <= 1) return [1];
    const center = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
        filteredCenter = center.filter((p) => p >= 1 && p <= pageCount);
        console.log(filteredCenter);
        includeTwoRight = currentPage === 1;
        includeOneRight = currentPage === 2;

    console.log(includeTwoRight);
    if (includeTwoRight) filteredCenter.push(currentPage + 3, currentPage + 4);
    if (includeOneRight) filteredCenter.push(currentPage + 3);

    return [...filteredCenter]
}

//render pages
const getPaginationNumbers = (items) => {
    clearContainer(paginationWrapper);

    const pages = items.map(item => {
        if(typeof item === "number"){
            const pageNumber = document.createElement("button");
            pageNumber.className = "pagination__number";
            pageNumber.innerHTML = item;
            pageNumber.setAttribute("page-index", item);
            pageNumber.setAttribute("aria-label", "Page " + item);  
            return pageNumber;
        }

        if(typeof item === "string"){
            const dots = document.createElement("span");
            dots.innerHTML = item;
            return dots;
        }    
    });
    paginationWrapper.append(...pages);
};

const setCurrentPage = (pageNum) => {
    currentPage = pageNum;
    
    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    const currentMovies = movies.slice(prevRange,currRange);
    clearContainer(moviesList);
    insertListItems(createListItemMarkup(currentMovies)); 
    window.innerWidth >= 768 ? getPaginationNumbers(paginationMarkup(currentPage,pageCount)) : getPaginationNumbers(paginationMarkupMobile(currentPage,pageCount));
    handleActivePageNumber();
    handlePageButtonsStatus();    
  };

  window.addEventListener("load", () => {
    setCurrentPage(1);

    prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
      });
     
    nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
      });

    paginationWrapper.addEventListener("click", (e) => {
        if(e.target.hasAttribute("page-index")){
            setCurrentPage(Number(e.target.getAttribute("page-index")));
        };
    });
  });




  const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination__number").forEach((button) => {
      button.classList.remove("active");
       
      const pageIndex = Number(button.getAttribute("page-index"));
     
      if (pageIndex === currentPage) {
        button.classList.add("active");
      }
    });
  };

  const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
  };
   
  const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
  };

  const handlePageButtonsStatus = () => {
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
  };





// Create gallery to delete
function createListItemMarkup(array) {
  return array
    .map(elem => {
      const { preview, original, description } = elem;
      return `<a
    class="gallery__item"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>`;
    })
    .join('');
}

function insertListItems(items) {
    moviesList.insertAdjacentHTML('beforeend', items);
}

function clearContainer(container) {
    container.innerHTML = '';
  };

