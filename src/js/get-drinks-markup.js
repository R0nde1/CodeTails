import { showDrinkModal } from "./modal-cocktails";
import servingDesk from "../img/serving_desk.png";
import servingDesk2 from "../img/serving_desk@2x.png";
import servingMob from "../img/serving_mob.png";
import servingMob2 from "../img/serving_mob@2x.png";

import heartIcon from 'bundle-text:../img/heart-icon.svg';

export function getDrinksMarkup(array) {
    const markup = array.map(({ strDrink, strDrinkThumb, idDrink }) => {
        return getCardMarkup(strDrink, strDrinkThumb, idDrink)
    });

    return markup;
}


function getCardMarkup(name, imageSrc, id) {
    const li = document.createElement('li');
    li.id = id;
    li.className = 'cocktails__item';
    li.innerHTML = `
        <img class="cocktails__img" src="${imageSrc}" alt="cocktail"/>
        <div class="cocktails__descr">
            <h3 title="${name}" class="cocktails__name">${name}</h3>
            <div class="cocktails__btns">
                <button class="btn__learn" type="button" data-name="learn-more" data-id="${id}" >Learn more</button>
                <button class="btn__add" type="button" data-name="add-remove" data-id="${id}"><span data-name="add-remove" class="btn-text">Add to</span> <span data-name="add-remove" class="heart-icon">${heartIcon}</span></button>
            </div>
        </div>
        `    
    li.addEventListener('click', handleCardClick);

    return li;
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
    const buttonName = event.target.dataset.name; 
    
    if (buttonName === 'learn-more') {
        const id = event.target.dataset.id;
        showDrinkModal(id);
    }

    if (buttonName === 'add-remove' || buttonName === 'heart-icon') {
        const addRemoveBtn = event.currentTarget.querySelector('.btn__add');
        const btnText = addRemoveBtn.querySelector('.btn-text');
        const btnIcon = addRemoveBtn.querySelector('.heart-icon');
        const id = addRemoveBtn.dataset.id;
        
        const cocktailsFromLS = JSON.parse(localStorage.getItem("favCocktails")) || [];

        if (cocktailsFromLS) {
            if (cocktailsFromLS.includes(id)) {
                const idIndex = cocktailsFromLS.indexOf(id);
                
                cocktailsFromLS.splice(idIndex, 1);
                btnText.textContent = "Add to";
            } else {
                cocktailsFromLS.push(id);
                btnText.textContent = "Remove";
            }
            btnIcon.classList.toggle('icon-active');
            localStorage.setItem("favCocktails", JSON.stringify(cocktailsFromLS));
        } else {
            localStorage.setItem("favCocktails", JSON.stringify([id]));
        }
    }
}