import { getDrinksMarkup } from './get-drinks-markup';
import { fetchCocktailById } from './fetch-cocktails';
import { FavoriteStorage } from './favorite-storage';

const favContent = document.querySelector('.content-results');
const noFoundCocktail = `<p class="favorite__none">
You haven't added any <br>favorite cocktails yet</p>`;

getCocktailsData();

function makePromises() {
  const favCocktails = FavoriteStorage.getCocktails();
  const promises = favCocktails.reduce((acc, id) => {
    acc.push(fetchCocktailById(id));
    return acc;
  }, []);
  return promises;
}

async function getCocktailsData() {
  const promises = makePromises();
  const data = await Promise.all(promises).catch(error => favContent.innerHTML = 'Something went wrong...');

  if (data.length === 0) {
    favContent.innerHTML = noFoundCocktail;
      return;
  }

  favContent.innerHTML = '';
  favContent.append(...getDrinksMarkup(data));
}
