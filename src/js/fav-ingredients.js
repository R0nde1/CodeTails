import { fetchRandomCocktails } from './fetch-cocktails';
import { getDrinksMarkup, handleCardClick } from './get-drinks-markup';

const favIngredients = document.querySelector('#fav-ingredients');
const contentTitle = document.querySelector('#fav-title');
const noFoundCocktail = `<p class="favorite__none">
You haven't added any <br>favorite ingredients yet</p>`;

const width = document.body.clientWidth;
let numberOfCocktails = 3;

if (width >= 768) {
  numberOfCocktails = 6;
}
if (width >= 1280) {
  numberOfCocktails = 0;
}

fetchRandomCocktails(numberOfCocktails).then(data => {
  if (data.length === 0) {
    favIngredients.innerHTML = noFoundCocktail;
    return;
  }

  favIngredients.innerHTML = getDrinksMarkup(data);
  favIngredients.addEventListener('click', handleCardClick);
});
