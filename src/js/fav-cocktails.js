import { getDrinksMarkup } from './get-drinks-markup';
import { fetchCocktailById } from './fetch-cocktails';

const KEY_FAV_ING = 'favCocktails';
const favContent = document.querySelector('.content-results');
const noFoundCocktail = `<p class="favorite__none">
You haven't added any <br>favorite cocktails yet</p>`;

getCocktailsData();

function makePromises() {
  const favCocktails = JSON.parse(localStorage.getItem(KEY_FAV_ING));
  const promises = favCocktails.reduce((acc, id) => {
    acc.push(fetchCocktailById(id));
    return acc;
  }, []);
  return promises;
}

async function getCocktailsData() {
  const promises = makePromises();
  const data = await Promise.all(promises).catch(error => console.log(error));

  if (data.length === 0) {
    favContent.innerHTML = noFoundCocktail;
    console.log(9938373737);
    return;
  }

  favContent.innerHTML = '';
  favContent.append(...getDrinksMarkup(data));
}
