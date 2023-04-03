import { fetchIngredientByName } from './fetch-cocktails';
import ingredientClose from 'bundle-text:../img/modal-close.svg';
const ingredientModal = document.querySelector('#modal-ingredients-details');
export function showIngredientModal(event) {
  console.log(event.target.dataset.ingredient);
  if (event.target.dataset.name !== 'ingredient') {
    return;
  }
  fetchIngredientByName(event.target.dataset.ingredient).then(data => {
    ingredientModal.innerHTML = getIngredientModalMarkup(data);
    const closeIngredientBtn = ingredientModal.querySelector(
      '.ingredients__button-close'
    );
    closeIngredientBtn.addEventListener('click', closeIngredientModal);
    ingredientModal.classList.toggle('show-modal');
  });
}

function getIngredientModalMarkup(details) {
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
    ${
      details.strDescription ||
      'Sorry, there is no description for this ingredient'
    }
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
  <button type="button" class="ingredients__button">Add to favorite</button>`;
}

function closeIngredientModal() {
  ingredientModal.innerHTML = '';
  ingredientModal.classList.toggle('show-modal');
}
