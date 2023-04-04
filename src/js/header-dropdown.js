const favSelectInput = document.querySelector('.fav__select-input');
const favList = document.querySelector('.fav__list');
const page = document.querySelector('html');

favSelectInput.addEventListener('click', function (event) {
 event.stopPropagation();
 favList.classList.toggle('visually-hidden');
});

page.addEventListener('click', function () {
 favList.classList.add('visually-hidden');
});