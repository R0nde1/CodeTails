import { calculateCocktails } from './calculate';
import { fetchRandomCocktails } from './fetch-cocktails';
import { getDrinksMarkup } from './get-drinks-markup';

const contentResults = document.querySelector('#content-results');
const contentTitle = document.querySelector('#content-title');

let numberOfCocktails = calculateCocktails();

fetchRandomCocktails(numberOfCocktails).then(data => {
  contentTitle.innerHTML = 'Cocktails';
  contentResults.innerHTML = '';
  contentResults.append(...getDrinksMarkup(data));
});
