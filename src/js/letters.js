import { fetchCocktailsByLetter } from './fetch-cocktails';
import { calculateCocktails } from './calculate';
import { getDrinksMarkup, getErrorMarkup } from './get-drinks-markup';
import { createPagination } from './pagination';

const contentResults = document.querySelector('#content-results');
const contentTitle = document.querySelector('#content-title');
const pagination = document.querySelector('#pagination');
const symbolPanel = document.querySelector('.symbol__panel');
const letterOnSelect = document.querySelector('.select');

symbolPanel.addEventListener('click',  getCocktails1);
letterOnSelect.addEventListener('click',  getCocktails1);

let letterSearchResults;

function getCocktails1(ev) {
        if (!ev.target.dataset.value) {
       return; 
    }
    let cocktailFirstLetter = ev.target.dataset.value;
  
    contentTitle.innerHTML = 'Searching results..';
    contentResults.innerHTML = '';
    const numberOfCocktails = calculateCocktails();
  
    fetchCocktailsByLetter(cocktailFirstLetter)
      .then(data => {
        letterSearchResults = data;
        contentTitle.innerHTML = 'Cocktails';
        contentResults.append ( ...getDrinksMarkup(
        data.slice(0, numberOfCocktails)
      ));
        pagination.innerHTML = createPagination(
          data.length,
          numberOfCocktails,
          1
        );
        addPaginationListeners1();
      })
      .catch((error) => {
        contentTitle.innerHTML = error
        contentResults.innerHTML = getErrorMarkup()
      });
  }
  
function changePage1(e) {
    const page = Number(e.target.dataset.page);
    const numberOfCocktails = calculateCocktails();
    const data = letterSearchResults;
    const end = page * numberOfCocktails;
    const start = end - numberOfCocktails;
    contentResults.innerHTML = '';
    contentResults.append (...getDrinksMarkup(data.slice(start, end)));
    pagination.innerHTML = createPagination(data.length, numberOfCocktails, page);
    addPaginationListeners1();
  }
  
  function addPaginationListeners1() {
    const pageElements = document.querySelectorAll('.pagination__number');
    for (const el of pageElements) {
      if (el.className.includes('inactive')) continue;
      el.addEventListener('click', changePage1);
    }
  
  }
