import { fetchRandomCocktails } from './fetch-cocktails';

const favIngredients = document.querySelector('#fav-cocktails');
const noFoundCocktail = `<p class="favorite__none">
You haven't added any <br>favorite cocktails yet</p>`;

const width = document.body.clientWidth;
let numberOfCocktails = 0;

fetchRandomCocktails(numberOfCocktails).then(data => {
  if (data.length === 0) {
    favIngredients.innerHTML = noFoundCocktail;
    return;
  }
});
