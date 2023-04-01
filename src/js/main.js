import { fetchRandomCocktails } from './fetch-cocktails';
import { getDrinksMarkup } from './get-drinks-markup';

const contentResults = document.querySelector('#content-results');
const contentTitle = document.querySelector('#content-title');

const width = document.body.clientWidth;
let numberOfCocktails = 3;

if (width >= 768) {
  numberOfCocktails = 6;
}
if (width >= 1280) {
  numberOfCocktails = 9;
}

fetchRandomCocktails(numberOfCocktails).then(data => {
  contentTitle.innerHTML = 'Cocktails';
  contentResults.innerHTML = getDrinksMarkup(data);
});
