import { fetchIngredientByName } from './fetch-cocktails';
import ingredientClose from 'bundle-text:../img/modal-close.svg';
import { FavoriteStorage } from './favorite-storage';

const ingredientModal = document.querySelector('#modal-ingredients-details');
export function showIngredientModal(event) {
  if (event.target.dataset.name !== 'ingredient') {
    return;
  }
  fetchIngredientByName(event.target.dataset.ingredient).then(data => {
    ingredientModal.innerHTML = getIngredientModalMarkup(data);
    const closeIngredientBtn = ingredientModal.querySelector(
      '.ingredients__button-close'
    );
    const addRemoveBtn = ingredientModal.querySelector('.ingredients__button');
    addRemoveBtn.addEventListener('click', handleAddRemoveIngredient);
    closeIngredientBtn.addEventListener('click', closeIngredientModal);
    ingredientModal.classList.toggle('show-modal');
  });
}

function getIngredientModalMarkup(details) {
  const isInFavorite = FavoriteStorage.isIngredientInFavorite(details.strIngredient);
  const btnText = isInFavorite ? 'Remove from favorite' : 'Add to favorite';

  return `
    <div class="ingredients__btn">
    <button type="button" class="ingredients__button-close">
    ${ingredientClose}
    </button>
  </div>
  <h2 class="ingredients__title">${details.strIngredient}</h2>
  <h3 class="ingredients__topic">${details.strType || '-'}</h3>
  <div class="ingredients__line-container">
    <div class="ingredients__line"></div>
  </div>
  <p class="ingredients__text">
    ${details.strDescription || 'Sorry, there is no description for this ingredient'}
  </p>
  <ul class="ingredients__list">
  <li class= "ingredients__item"> <span class="ingredients__black">✶ </span> Type: ${
    details.strType || '-'
  }</li>
  <li class= "ingredients__item"> <span class="ingredients__black">✶ </span> Alcoholic: ${
    details.strAlcohol || '-'
  }</li>
  <li class= "ingredients__item"> <span class="ingredients__black">✶ </span> Alcohol by volume: ${
    details.strABV || '-'
  }</li>
  </ul>
  <button type="button" class="ingredients__button" data-name="add-remove" data-id="${details.strIngredient}">${btnText}</button>`;
}

function closeIngredientModal() {
  ingredientModal.innerHTML = '';
  ingredientModal.classList.toggle('show-modal');
}
export function handleAddRemoveIngredient(event) {
  const name = event.target.dataset.id;
  const buttonFromCard = document.querySelector(`.btn__add[data-id="${name}"]`);

  buttonFromCard.classList.toggle('icon-active');

  if (FavoriteStorage.isIngredientInFavorite(name)) {
    FavoriteStorage.removeIngredient(name);
    event.target.textContent = "Add to favorite";
    buttonFromCard.querySelector('.btn-text').innerHTML = 'Add to';
  } else {
    FavoriteStorage.addIngredient(name);
    event.target.textContent = "Remove from favorite";
    buttonFromCard.querySelector('.btn-text').innerHTML = 'Remove';
  }
}