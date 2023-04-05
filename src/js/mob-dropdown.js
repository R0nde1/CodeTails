const favSelect = document.querySelector('.fav__select-btn');
const favList = document.querySelector('.fav__list__mm');
const page = document.querySelector('html');
const arrowIcon = document.querySelector('.fav__select-img')

favSelect.addEventListener('click', function (event) {
 event.stopPropagation();
    favList.classList.toggle('visually-hidden');
    arrowIcon.classList.toggle('is-active')
});

page.addEventListener('click', function () {
    favList.classList.add('visually-hidden');
    arrowIcon.classList.remove('is-active')
});