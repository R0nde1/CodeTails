export function getDrinksMarkup(array) {
    const markup = array.map(({ strDrink, strDrinkThumb }) => {
        return getCardMarkup(strDrink, strDrinkThumb)
    }).join('');

    return markup;
}


function getCardMarkup(name, imageSrc) {
    return (`
<li class="cocktails__item">
    <img class="cocktails__img" src="${imageSrc}" alt="cocktail"/>
    <div class="cocktails__descr">
        <h3 class="cocktails__name">${name}</h3>
        <div class="cocktails__btns">
            <button class="btn__learn" type="button">Learn more</button>
            <button class="btn__delete" type="button">Remove</button>
        </div>
    </div>
</li>
`)
}