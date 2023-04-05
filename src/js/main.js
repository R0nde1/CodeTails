import { calculateCocktails } from './calculate';
import { fetchRandomCocktails, fetchCocktailsByName } from './fetch-cocktails';
import { getDrinksMarkup } from './get-drinks-markup';
import { SearchStorage } from './search-storage';
import { calculateCocktails } from './calculate';
import { createPagination } from './pagination';
import { getErrorMarkup } from './get-error-markup';

const contentResults = document.querySelector('#content-results');
const contentTitle = document.querySelector('#content-title');
const searchFields = document.querySelectorAll('.search-form__input');

let numberOfCocktails = calculateCocktails();

const searchValue = SearchStorage.getSearch();

if(searchValue) {
  searchFields[0].value = searchValue;
  searchFields[1].value = searchValue;
  contentTitle.innerHTML = 'Searching results..';
  contentResults.innerHTML = '';

  fetchCocktailsByName(searchValue)
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
    SearchStorage.cleanStorage();
  })
  .catch((error) => {
    contentTitle.innerHTML = error
    contentResults.innerHTML = getErrorMarkup()
  });
} else {
  fetchRandomCocktails(numberOfCocktails).then(data => {
    contentTitle.innerHTML = 'Cocktails';
    contentResults.innerHTML = '';
    contentResults.append(...getDrinksMarkup(data));
  });
}
