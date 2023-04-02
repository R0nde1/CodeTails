import { fetchRandomCocktails } from './fetch-cocktails';

const favIndigriends = document.querySelector('#fav-cocktails');
const noFoundCoctail = `<p class="favorite__nococtails">
You haven't added any <br>favorite cocktails yet</p>`;

const width = document.body.clientWidth;
let numberOfCocktails = 0;

fetchRandomCocktails(numberOfCocktails).then(data => {
  if (data.length === 0) {
    favIndigriends.innerHTML = noFoundCoctail;
    return;
  }
});
