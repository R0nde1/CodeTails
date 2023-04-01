const refs = {
    searchForm: document.querySelector('.search-form'),
    searchInput: document.querySelector('.search-form__input')
}

refs.searchForm.addEventListener('submit', getCocktails)

function getCocktails(event) {
    event.preventDefault();
    const cocktailName = refs.searchInput.value;

    fetchCocktail(cocktailName)
}

function fetchCocktail(cocktailName) {
    console.log(cocktailName);
    return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
    .then(result => {
    if (!result.ok) {
      throw new Error("Sorry, we didn't find any cocktail for you");
    }
      return result.json();ч
    }
  );
}