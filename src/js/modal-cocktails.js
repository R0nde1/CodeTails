import { fetchCocktailById } from './fetch-cocktails';
import { showIngredientModal } from './modal-ingredients';
const drinkModal = document.querySelector('#modal-drink-detail');
export function showDrinkModal(id) {
  fetchCocktailById(id).then(data => {
    drinkModal.innerHTML = getDrinkModalMarkup(data);
    const closeCocktailBtn = drinkModal.querySelector('.modal__button');
    const ingredientList = drinkModal.querySelector('.ingredients__list');
    ingredientList.innerHTML = getIngredientsList(data);
    ingredientList.addEventListener('click', showIngredientModal);
    closeCocktailBtn.addEventListener('click', closeCocktailModal);
    drinkModal.classList.toggle('show-modal');
  });
}

function getDrinkModalMarkup(details) {
  return `
    <button class="modal__button" data-modal-close>
                <svg class="modal-icon-close" width="18" height="18">
                <use href="./img/sprite.svg#icon-close-line"></use>
                </svg>
            </button>
            <div class="modal__cocktail">
                <h3 class="modal__title">${details.strDrink}</h3>
                <h4 class="modal__instructions">INSTRUCTION:</h4>
                <p class="instruction">${details.strInstructions}</p>
                <img class="modal1__picture" src="${details.strDrinkThumb}" alt="" width="280" height="280" />
                <h4> INGREDIENTS</h4>
                <p> Per cocktail</p>
                <ul class="ingredients__list" ></ul>
            <button class="modal__button-add" data-id='${details.idDrink}' type="button" data-modal-add> Add to favorite </button>
        </div>
    `;
}
function getIngredientsList(details) {
  let ingredients = '';
  for (let i = 1; i <= 15; i++) {
    let ingredient = details['strIngredient' + i];

    if (ingredient) {
      ingredients += `<li class= "ingredient__item" data-ingredient="${ingredient}" data-name="ingredient"> <span class="ingredientsBlack">✶ </span>${ingredient}</li>`;
    } else {
      break;
    }
  }
  return ingredients;
}

function closeCocktailModal() {
  drinkModal.innerHTML = '';
  drinkModal.classList.toggle('show-modal');
}
