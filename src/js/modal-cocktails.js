import { fetchCocktailById } from "./fetch-cocktails";
const drinkModal = document.querySelector( '#modal-drink-detail')
export function showDrinkModal(id) {
    fetchCocktailById(id)
    .then(data => {
        drinkModal.innerHTML = getDrinkModalMarkup(data);
        const closeCocktailBtn = drinkModal.querySelector( '.modal__button');
        const ingredientList = drinkModal.querySelector('.ingredients__list');
        ingredientList.innerHTML= getIngredientsList(data);
        closeCocktailBtn.addEventListener('click', closeCocktailModal);
drinkModal.classList.toggle('show-modal')
    })
}

function getDrinkModalMarkup(details){
    return (`
    <button class="modal__button" data-modal-close>
                <svg class="modal-icon-close" width="18" height="18">
                <use href=""></use>
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
            <button class="modal__button-remove" data-id='${details.idDrink}' type="button" data-modal-remove> Remove from favorite </button>
        </div>
    `)
}
function getIngredientsList(details){
    let ingredients =''
    for (let i = 1; i <= 15; i++) {
        let ingredient = details['strIngredient'+i];
        
        if (ingredient) {
            ingredients += `<li class= "ingredient__item">${ingredient}</li>`;
        } else {
            break;
        }
    }
    return ingredients
}

function closeCocktailModal(){
    drinkModal.innerHTML = '';
    drinkModal.classList.toggle('show-modal');
}

