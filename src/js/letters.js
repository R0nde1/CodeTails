import { fetchCocktailsByLetter } from './fetch-cocktails';
import { calculateCocktails } from './calculate';
import { getDrinksMarkup } from './get-drinks-markup';
import { createPagination } from './pagination';
import { getErrorMarkup } from './get-error-markup';

const contentResults = document.querySelector('#content-results');
const contentTitle = document.querySelector('#content-title');
const symbolPanel = document.querySelector('.symbol__panel');
const letterOnSelect = document.querySelector('.select');

symbolPanel.addEventListener('click', getCocktailsL);
letterOnSelect.addEventListener('click', getCocktailsL);


function getCocktailsL(ev) {
  if (!ev.target.dataset.value) {
    return;
  }
  const cocktailFirstLetter = ev.target.dataset.value;

  contentTitle.innerHTML = 'Searching results..';
  contentResults.innerHTML = '';
  const numberOfCocktails = calculateCocktails();

  fetchCocktailsByLetter(cocktailFirstLetter)
    .then(data => {
      contentTitle.innerHTML = 'Cocktails';
      contentResults.append(
        ...getDrinksMarkup(data.slice(0, numberOfCocktails))
      );
      createPagination(data, numberOfCocktails, 1);
    })
    .catch(error => {
      contentTitle.innerHTML = error;
      contentResults.innerHTML = getErrorMarkup();
    });
}
