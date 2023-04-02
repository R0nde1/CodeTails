import { fetchIngredientByName } from './fetch-cocktails';
import ingredientClose from '../img/Vector.png';
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
    const ingredientsList = ingredientModal.querySelector('.ingredients__list');
    ingredientsList.innerHTML = getModalIngredientsList(data);
    closeIngredientBtn.addEventListener('click', closeIngredientModal);
    ingredientModal.classList.toggle('show-modal');
  });
}

function getIngredientModalMarkup(details) {
  return `
    <div class="ingredients__btn">
    <button type="button" class="ingredients__button-close">
    <img src="${ingredientClose}" width="18" height="18"/>

    </button>
  </div>
  <h2 class="ingredients__title">Campari</h2>
  <h3 class="ingredients__topic">Liqueur</h3>
  <div class="ingredients__line-container">
    <div class="ingredients__line"></div>
  </div>
  <p class="ingredients__text">
    <span class="ingredients__bold">Campari</span> is an Italian alcoholic
    liqueur, considered an apéritif (20.5%, 21%, 24%, 25%, or 28.5% ABV,
    depending on the country in which it is sold), obtained from the infusion of
    herbs and fruit (including chinotto and cascarilla) in alcohol and water. It
    is a bitters, characterised by its dark red colour.
  </p>
  <ul class="ingredients__list">
  </ul>
  <button type="button" class="ingredients__button">Add to favorite</button>`;
}
function getModalIngredientsList(details) {
  let ingredients = '';
  for (let i = 1; i <= 15; i++) {
    let ingredient = details['strIngredient' + i];

    if (ingredient) {
      ingredients += `<li class= "ingredients__item"> <span class="ingredients__black">✶ </span>${ingredient}</li>`;
    } else {
      break;
    }
  }
  return ingredients;
}

function closeIngredientModal() {
  ingredientModal.innerHTML = '';
  ingredientModal.classList.toggle('show-modal');
}

//   <svg class="ingredients__svg-close" width="24" height="24">
//     <use href="${ingredientClose}"></use>
//   </svg>;
