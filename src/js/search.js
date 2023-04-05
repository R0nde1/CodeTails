import { calculateCocktails } from './calculate';
import { fetchCocktailsByName } from './fetch-cocktails';
import { getDrinksMarkup } from './get-drinks-markup';
import { getErrorMarkup } from './get-error-markup';
import { createPagination } from './pagination';
import { SearchStorage } from './search-storage';

const searchForms = document.querySelectorAll('.search-form');
const contentResults = document.querySelector('#content-results');
const contentTitle = document.querySelector('#content-title');

const mainSearch = searchForms[0];
const mobSearch = searchForms[1];

mainSearch.addEventListener('submit', getCocktails);
mobSearch.addEventListener('submit', getCocktails);

mainSearch.addEventListener('input', () => {
  mobSearch.elements.search.value = mainSearch.elements.search.value;
  SearchStorage.setSearch(mainSearch.elements.search.value);
});

mobSearch.addEventListener('input', () => {
  mainSearch.elements.search.value = mobSearch.elements.search.value;
  SearchStorage.setSearch(mobSearch.elements.search.value);
});

function getCocktails(event) {
  event.preventDefault();
  
  const isHomePage = document.querySelector('[data-page="main"]');
  const isMobileMenuOpen = document.querySelector('.js-menu-container.is-open');

  if (!isHomePage || isMobileMenuOpen) {
    window.location = './index.html';
    return;
  }

  const cocktailName = event.target.elements.search.value;

  contentTitle.innerHTML = 'Searching results..';
  contentResults.innerHTML = '';
  const numberOfCocktails = calculateCocktails();

  fetchCocktailsByName(cocktailName)
    .then(data => {
      contentTitle.innerHTML = 'Cocktails';
      contentResults.innerHTML = "";
      contentResults.append ( ...getDrinksMarkup(
        data.slice(0, numberOfCocktails)
      ));
      createPagination(
        data,
        numberOfCocktails,
        1
      );
    })
    .catch((error) => {
      contentTitle.innerHTML = error
      contentResults.innerHTML = getErrorMarkup()
    });
}
