import { calculateCocktails } from "./calculate";
import { getDrinksMarkup } from "./get-drinks-markup";

let searchResults;
let contentResults;
let getMarkup;
const pagination = document.querySelector('#pagination');
export function createPagination(results, pageSize, pageNumber, markupFn) {
  getMarkup = markupFn ?? getMarkup ?? getDrinksMarkup;
  contentResults = document.querySelector('.content-results')
  searchResults=results;
  const totalResults=results.length;
  const pagesCount = Math.ceil(totalResults / pageSize);
  if (pagesCount === 1) {
    return '';
  }
  let inactive = pageNumber === 1 ? ' inactive' : '';
  let result = `<div class = "pagination-line"><li class="pagination__number left-arrow${inactive}" data-page="${
    pageNumber - 1
  }">&lt;</li>`;
  const pagesToShow = [
    1,
    pageNumber - 1,
    pageNumber,
    pageNumber + 1,
    pagesCount,
  ];
  let dotsAdded = false;
  for (let i = 1; i <= pagesCount; i++) {
    const active = i === pageNumber ? ' inactive' : '';
    
    if (pagesToShow.includes(i)) {
      result += `<li class="pagination__number${active}" data-page="${i}">${i}</li>`;
      dotsAdded = false;
    }
    else if(!dotsAdded) {
      result += `<li class="pagination__number inactive dots">...</li>`;
      dotsAdded = true;
    }
  }
  inactive = pageNumber === pagesCount ? ' inactive' : '';
  result += `<li class="pagination__number right-arrow${inactive}" data-page="${
    pageNumber + 1
  }">&gt;</li></div>`;
  pagination.innerHTML = result;
  addPaginationListeners();
}


function changePage(e) {
  const page = Number(e.target.dataset.page);
  const numberOfCocktails = calculateCocktails();
  const data = searchResults;
  const end = page * numberOfCocktails;
  const start = end - numberOfCocktails;
  contentResults.innerHTML = '';
  contentResults.append (...getMarkup(data.slice(start, end)));
  createPagination(data, numberOfCocktails, page);
  
}

function addPaginationListeners() {
  const pageElements = document.querySelectorAll('.pagination__number');
  for (const el of pageElements) {
    if (el.className.includes('inactive')) continue;
    el.addEventListener('click', changePage);
  }

}