import { showDrinkModal } from "./modal-cocktails";
export function getDrinksMarkup(array) {
    const markup = array.map(({ strDrink, strDrinkThumb, idDrink }) => {
        return getCardMarkup(strDrink, strDrinkThumb, idDrink)
    }).join('');

    return markup;
}


function getCardMarkup(name, imageSrc, id) {
    return (`
<li class="cocktails__item">
    <img class="cocktails__img" src="${imageSrc}" alt="cocktail"/>
    <div class="cocktails__descr">
        <h3 class="cocktails__name">${name}</h3>
        <div class="cocktails__btns">
            <button class="btn__learn" type="button" name="learn-more" data-id="${id}" >Learn more</button>
            <button class="btn__delete" type="button">Remove</button>
        </div>
    </div>
</li>
`)
}
export function handleCardClick(event) {
    
    if (event.target.name === 'learn-more') {
        const id = event.target.dataset.id;
        showDrinkModal(id);
    }
    if (event.target.name === 'addRemove') {
        event.target.classList.toggle('btn__delete');
    }
}