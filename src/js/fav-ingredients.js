import { getDrinksMarkupIngredients } from './get-ingredients-markup';
import { fetchIngredientByName } from './fetch-cocktails';
import { FavoriteStorage } from './favorite-storage';

const favContent = document.querySelector('.favorite-results');
const noFoundIngredients = `<p class="favorite__none">
You haven't added any <br>favorite ingredients yet</p>`;

getIngredientsData();

function makePromises() {
  const favIngredients = FavoriteStorage.getIngredients();
  const promises = favIngredients.reduce((acc, name) => {
    acc.push(fetchIngredientByName(name));
    return acc;
  }, []);
  return promises;
}

async function getIngredientsData() {
  const promises = makePromises();
  const data = await Promise.all(promises).catch(error => console.log(error));

  if (data.length === 0) {
    favContent.innerHTML = noFoundIngredients;
      return;
  }

  favContent.innerHTML = '';
  favContent.append(...getDrinksMarkupIngredients(data));
}
