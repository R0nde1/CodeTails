'use strict';
const LS_KEY = 'Cocktail';
const searchForm = document.querySelector('.search-form__wrapper');
// console.log(Object.keys(cardBtnFavorite));
searchForm.addEventListener('input', handleSearchCocktail);
const favIngredients = document.querySelector('.fav-ingredients');
const cardBtnFavorite = document.querySelectorAll('.btn__delete');
cardBtnFavorite.addEventListener('click', handleSearchCocktail);

function handleSearchCocktail() {
  console.log(333);
}

function addCocktailFavorite() {
  const favCocktail = JSON.parse(localStorage.getItem(LS_KEY));
  console.log(favCocktail);
}
// "idDrink": "11007",

const saveCocktail = (idDrink, value) => {
  try {
    const cocktail = JSON.stringify(value);
    localStorage.setItem(idDrink, cocktail);
  } catch (error) {
    console.log('1122', error.message);
  }
};

const removeCocktail = idDrink => {
  try {
    localStorage.removeItem(idDrink);
  } catch (error) {
    console.log('111', error.message);
  }
};

function toggleFavorite(id) {
  // Получаем текущий массив избранных элементов из localStorage
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // Проверяем, есть ли элемент с таким id в избранных
  let index = favorites.indexOf(id);

  if (index === -1) {
    // Если элемента нет в избранных, то добавляем его в массив
    favorites.push(id);
  } else {
    // Если элемент уже есть в избранных, то удаляем его из массива
    favorites.splice(index, 1);
  }

  // Сохраняем массив избранных элементов обратно в localStorage
  localStorage.setItem('favorites', JSON.stringify(favorites));
}
