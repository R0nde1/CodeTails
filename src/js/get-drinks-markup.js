import { showDrinkModal } from "./modal-cocktails";
import servingDesk from "../img/serving_desk.png";
import servingDesk2 from "../img/serving_desk@2x.png";
import servingMob from "../img/serving_mob.png";
import servingMob2 from "../img/serving_mob@2x.png";

import heartIcon from 'bundle-text:../img/heart-icon.svg';

export function getDrinksMarkup(array) {
    const markup = array.map(({ strDrink, strDrinkThumb, idDrink }) => {
        return getCardMarkup(strDrink, strDrinkThumb, idDrink)
    }).join('');

    return markup;
}


function getCardMarkup(name, imageSrc, id) {
    return (`
<li id="${id}" class="cocktails__item">
    <img class="cocktails__img" src="${imageSrc}" alt="cocktail"/>
    <div class="cocktails__descr">
        <h3 title="${name}" class="cocktails__name">${name}</h3>
        <div class="cocktails__btns">
            <button class="btn__learn" type="button" name="learn-more" data-id="${id}" >Learn more</button>
            <button class="btn__add" type="button">Add to <span class="heart-icon">${heartIcon}</span></button>
        </div>
    </div>
</li>
`)
}

export function getErrorMarkup() {
    return (`<li><picture>
        <source
        media="(min-width: 768px)"
        srcset="${servingDesk}, ${servingDesk2} 2x"
        type="image/png"/>
        <source
        media="(max-width: 767px)"
        srcset="${servingMob}, ${servingMob2} 2x"
        type="image/png"/>
        <img src="${servingDesk}" alt="People in the cafe" width="345" height="380"/>
        </picture>
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