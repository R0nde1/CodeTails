import { showIngredientModal } from './modal-ingredients';
import heartIcon from 'bundle-text:../img/heart-icon.svg';
import { FavoriteStorage } from "./favorite-storage";
export function getDrinksMarkupIngredients(array) {
    const markup = array.map(({ strIngredient, strType }) => {
        return getCardMarkupIngredients(strIngredient, strType);
    });
    return markup;
}
function getCardMarkupIngredients(name, strType) {
    const li = document.createElement('li');
    li.className = 'cocktails__item cocktails__item-ingredients';
    const isInFavorite = FavoriteStorage.isIngredientInFavorite(name);
    const addRemoveClassName = isInFavorite ? 'btn__add icon-active' : 'btn__add';
    const btnText = isInFavorite ? 'Remove' : 'Add to';
    li.innerHTML = `
            <div class="cocktails__descr cocktails__container">
            <h3 title="${name}" class="cocktails__name cocktails__name--ingredients">${name}</h3>
            <p title="${strType}" class="cocktails__category">${strType || 'Common'}</p>
            <div class="cocktails__btns">
                <button class="btn__learn" type="button" data-name="ingredient" data-ingredient="${name}" data-id="${name}" >Learn more</button>
                <button class="${addRemoveClassName}" type="button" data-name="add-remove" data-id="${name}"><span data-name="add-remove" class="btn-text">${btnText}</span> <span data-name="add-remove" class="heart-icon">${heartIcon}</span></button>
            </div>
        </div>
        `;
    li.addEventListener('click', handleIngredientCardClick);
    return li;
}
export function handleIngredientCardClick(event) {
    const buttonName = event.target.dataset.name;
    if (buttonName === 'ingredient') {
        showIngredientModal(event);
    }
    if (buttonName === 'add-remove' || buttonName === 'heart-icon') {
        const addRemoveBtn = event.currentTarget.querySelector('.btn__add');
        const btnText = addRemoveBtn.querySelector('.btn-text');
        const name = addRemoveBtn.dataset.id;
        addRemoveBtn.classList.toggle('icon-active');
        if (FavoriteStorage.isIngredientInFavorite(name)) {
            FavoriteStorage.removeIngredient(name);
            btnText.textContent = "Add to";
        } else {
            FavoriteStorage.addIngredient(name);
            btnText.textContent = "Remove";
        }
    }
}