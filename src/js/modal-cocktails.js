import { fetchCocktailById } from './fetch-cocktails';
import { showIngredientModal } from './modal-ingredients';
import cocktailModalClose from 'bundle-text:../img/modal-close.svg';
import { fetchCocktailById } from './fetch-cocktails';
import { FavoriteStorage } from './favorite-storage';

const drinkModal = document.querySelector('#modal-drink-detail');

export function showDrinkModal(id) {
  fetchCocktailById(id).then(data => {
    drinkModal.innerHTML = getDrinkModalMarkup(data);
    const closeCocktailBtn = drinkModal.querySelector('.modal__button');
    const ingredientList = drinkModal.querySelector('.ingredients__list');
    const addRemoveBtn = drinkModal.querySelector('.modal__button-add');

    ingredientList.innerHTML = getIngredientsList(data);
    ingredientList.addEventListener('click', showIngredientModal);
    closeCocktailBtn.addEventListener('click', closeCocktailModal);
    addRemoveBtn.addEventListener('click', handleAddRemoveCocktail);
    drinkModal.classList.toggle('show-modal');
  });
}

function getDrinkModalMarkup(details) {
  const isInFavorite = FavoriteStorage.isCocktailInFavorite(details.idDrink);
  const btnText = isInFavorite ? 'Remove from favorite' : 'Add to favorite';
  return `
    <button class="modal__button" data-modal-close>
    ${cocktailModalClose}
    </button>
        <div class="modal__cocktail">
            <h3 class="modal__title">${details.strDrink}</h3>
            <div class="modal__instructions-hold">
                <h4 class="modal__instructions">INSTRUCTION:</h4>
                <p class="instruction">${details.strInstructions}</p>
            </div>
            <div class="modal__ingredients-hold">
                <img class="modal__picture" src="${details.strDrinkThumb}" alt="" width="280" height="280" />
                <h4 class="modal__ingredients">INGREDIENTS</h4>
                <p class="modal__description">Per cocktail</p>
                <ul class="ingredients__list"></ul>
            </div>
            <button class="modal__button-add" data-id="${details.idDrink}" name="add-remove" type="button"> ${btnText} </button>
        </div>
    `;
}
function getIngredientsList(details) {
  let ingredients = '';
  for (let i = 1; i <= 15; i++) {
    let ingredient = details['strIngredient' + i];
    let ingredientAmount = details['strMeasure' + i];
    if (ingredient) {
      ingredients += `<li class= "ingredient__item" data-ingredient="${ingredient}" data-name="ingredient"> <span class="ingredientsBlack">✶ </span>${ingredientAmount || ''}<span class="ingredient__focus"> ${ingredient}<span/></li>`;
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

export function handleAddRemoveCocktail(event) {
  const id = event.target.dataset.id;
  const buttonFromCard = document.querySelector(`.btn__add[data-id="${id}"]`);

  buttonFromCard.classList.toggle('icon-active');

  if (FavoriteStorage.isCocktailInFavorite(id)) {
    FavoriteStorage.removeCocktail(id);
    event.target.textContent = "Add to favorite";
    buttonFromCard.querySelector('.btn-text').innerHTML = 'Add to';
  } else {
    FavoriteStorage.addCocktail(id);
    event.target.textContent = "Remove from favorite";
    buttonFromCard.querySelector('.btn-text').innerHTML = 'Remove';
  }
}
