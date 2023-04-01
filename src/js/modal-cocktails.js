const addToModal = document.querySelectorAll('.addToModal');

if(addToModal.length > 0) {
    addToModal.forEach(function(btnLearnMore){
        btnLearnMore.addEventListener('click', viewCocktailDetail);
    })
}


// Виводимо інфомрацію про коктейль
function viewCocktailDetail() {

    // Отримуємо id коктейлю по якому був клік
    const cocktailId = this.getAttribute('data-product-id');

    // Отримуємо об'єкт з даними
    const cocktailDetail = getCocktailDetail(cocktailId);
    
    // Проходимося по промісу, який прийшов з функції
    cocktailDetail.then(details => {
        
        let cocktail = `<button class="modal__button" data-modal-close>
                <svg class="modal-icon-close" width="18" height="18">
                <use href=""></use>
                </svg>
            </button>
            <div class="modal__cocktail">
                <strong class="modal__title">${details.strDrink}</strong>
                <h2 class="modal__instractions">INSTRACTION:</h2>
                <p class="paragraf">${details.strInstructions}</p>
                <img class="modal1__picture" src="${details.strDrinkThumb}" alt="" width="280" height="280" />
                <h2> INGREDIENTS</h2>
                <h3> Per cocktail</h3>
                <ul>`;
        
        for (let i = 1; i <= 15; i++) {
            let ingridient = details['strIngredient'+i];
            
            if (ingridient) {
                cocktail += `<li>${ingridient}</li>`;
            } else {
                break;
            }
        }

        cocktail += `</ul>
            <button class="modal__button-add" data-id='${details.idDrink}' type="button" data-modal-add> Add to favorite </button>
            <button class="modal__button-remove" data-id='${details.idDrink}' type="button" data-modal-remove> Remove from favorite </button>
        </div>`;

        document.querySelector('#modal-drink-detail').innerHTML = cocktail;
    });


}


function getCocktailDetail(cocktailId) {

    // Формуємо посилання до API
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
    
    // Звертаємо до api і отримуємо відповідь
    return  fetch(url).then(response => response.json()).then(({ drinks } ) => { return drinks[0]; });
}