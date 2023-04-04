import { calculateCocktails } from './calculate';
import { fetchCocktailsByName } from './fetch-cocktails';
import { getDrinksMarkup, getErrorMarkup } from './get-drinks-markup';
import { createPagination } from './pagination';

const searchForms = document.querySelectorAll('.search-form');
const contentResults = document.querySelector('#content-results');
const contentTitle = document.querySelector('#content-title');
const pagination = document.querySelector('#pagination');

const mainSearch = searchForms[0];
const mobSearch = searchForms[1];

mainSearch.addEventListener('submit', getCocktails);
mobSearch.addEventListener('submit', getCocktails);

mainSearch.addEventListener('input', () => {
  mobSearch.elements.search.value = mainSearch.elements.search.value;
});

mobSearch.addEventListener('input', () => {
  mainSearch.elements.search.value = mobSearch.elements.search.value;
});
let searchResults;

function getCocktails(event) {
  event.preventDefault();
  const cocktailName = event.target.elements.search.value;

  contentTitle.innerHTML = 'Searching results..';
  contentResults.innerHTML = '';
  const numberOfCocktails = calculateCocktails();

  fetchCocktailsByName(cocktailName)
    .then(data => {
      searchResults = data;
      contentTitle.innerHTML = 'Cocktails';
      contentResults.innerHTML = "";
      contentResults.append ( ...getDrinksMarkup(
        data.slice(0, numberOfCocktails)
      ));
      pagination.innerHTML = createPagination(
        data.length,
        numberOfCocktails,
        1
      );
      addPaginationListeners();
    })
    .catch((error) => {
      contentTitle.innerHTML = error
      contentResults.innerHTML = getErrorMarkup()
    });
}

function changePage(e) {
  const page = Number(e.target.dataset.page);
  const numberOfCocktails = calculateCocktails();
  const data = searchResults;
  const end = page * numberOfCocktails;
  const start = end - numberOfCocktails;
  contentResults.innerHTML = '';
  contentResults.append (...getDrinksMarkup(data.slice(start, end)));
  pagination.innerHTML = createPagination(data.length, numberOfCocktails, page);
  addPaginationListeners();
}

function addPaginationListeners() {
  const pageElements = document.querySelectorAll('.pagination__number');
  for (const el of pageElements) {
    if (el.className.includes('inactive')) continue;
    el.addEventListener('click', changePage);
  }

}
