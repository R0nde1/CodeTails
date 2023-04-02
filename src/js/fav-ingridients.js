import { fetchRandomCocktails } from './fetch-cocktails';
import { getDrinksMarkup, handleCardClick } from './get-drinks-markup';

const favIndigriends = document.querySelector('#fav-indigriends');
const contentTitle = document.querySelector('#fav-title');
const noFoundCoctail = `<p class="favorite__nococtails">
You haven't added any <br>favorite ingridients yet</p>`;

const width = document.body.clientWidth;
let numberOfCocktails = 3;

if (width >= 768) {
  numberOfCocktails = 6;
}
if (width >= 1280) {
  numberOfCocktails = 0;
  // Исправить 0 на 9 когда будет рендер избраных кртинок
}

fetchRandomCocktails(numberOfCocktails).then(data => {
  if (data.length === 0) {
    favIndigriends.innerHTML = noFoundCoctail;
    return;
  }

  favIndigriends.innerHTML = getDrinksMarkup(data);
  favIndigriends.addEventListener('click', handleCardClick);
});
