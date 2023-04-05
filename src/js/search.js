import { calculateCocktails } from './calculate';
import { fetchCocktailsByName } from './fetch-cocktails';
import { getDrinksMarkup, getErrorMarkup } from './get-drinks-markup';
import { createPagination } from './pagination';

const searchForms = document.querySelectorAll('.search-form');
const contentResults = document.querySelector('#content-results');
const contentTitle = document.querySelector('#content-title');


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

function getCocktails(event) {
  event.preventDefault();
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
  mainSearch.reset()
  mobSearch.reset()
}


