function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=n.parcelRequired7c6;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},n.parcelRequired7c6=r),r.register("cDqy2",(function(e,n){function i(t){const e=[];for(let n=0;n<t;n++)e.push(fetch("https://thecocktaildb.com/api/json/v1/1/random.php").then((t=>t.json())));return Promise.all(e).then((t=>t.map((t=>t.drinks[0]))))}function o(t){return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${t}`).then((t=>t.json())).then((({drinks:t})=>{if(!t)throw"Sorry, we didn't find<br>any cocktail for you";return t}))}function r(t){return fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${t}`).then((t=>t.json())).then((({drinks:t})=>t[0]))}function a(t){return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?i=${t}`).then((t=>t.json())).then((({ingredients:t})=>t[0]))}function s(t){return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?f=${t}`).then((t=>t.json())).then((({drinks:t})=>{if(!t)throw"Sorry, we didn't find<br>any cocktail for you";return t}))}t(e.exports,"fetchRandomCocktails",(function(){return i})),t(e.exports,"fetchCocktailsByName",(function(){return o})),t(e.exports,"fetchCocktailById",(function(){return r})),t(e.exports,"fetchIngredientByName",(function(){return a})),t(e.exports,"fetchCocktailsByLetter",(function(){return s}))})),r.register("aJrzc",(function(n,i){t(n.exports,"showIngredientModal",(function(){return d}));var o=r("cDqy2"),a=r("8F5Dv"),s=r("1Qcw2");const c=document.querySelector("#modal-ingredients-details");function d(t){"ingredient"===t.target.dataset.name&&(0,o.fetchIngredientByName)(t.target.dataset.ingredient).then((t=>{c.innerHTML=function(t){const n=s.FavoriteStorage.isIngredientInFavorite(t.strIngredient)?"Remove from favorite":"Add to favorite";return`\n    <div class="ingredients__btn">\n    <button type="button" class="ingredients__button-close">\n    ${e(a)}\n    </button>\n  </div>\n  <h2 class="ingredients__title">${t.strIngredient}</h2>\n  <h3 class="ingredients__topic">${t.strType||"-"}</h3>\n  <div class="ingredients__line-container">\n    <div class="ingredients__line"></div>\n  </div>\n  <p class="ingredients__text">\n    ${t.strDescription||"Sorry, there is no description for this ingredient"}\n  </p>\n  <ul class="ingredients__list">\n  <li class="ingredients__item"> <span class="ingredients__black">✶ </span> Type: ${t.strType||"-"}</li>\n  <li class="ingredients__item"> <span class="ingredients__black">✶ </span> Alcoholic: ${t.strAlcohol||"-"}</li>\n  <li class="ingredients__item"> <span class="ingredients__black">✶ </span> Alcohol by volume: ${t.strABV||"-"}</li>\n  </ul>\n  <button type="button" class="ingredients__button" data-name="add-remove" data-id="${t.strIngredient}">${n}</button>`}(t);const n=c.querySelector(".ingredients__button-close");c.querySelector(".ingredients__button").addEventListener("click",u),n.addEventListener("click",l),c.classList.toggle("show-modal")}))}function l(){c.innerHTML="",c.classList.toggle("show-modal")}function u(t){const e=t.target.dataset.id,n=!!document.querySelector('[data-page="fav-ingredients"]');let i=null;n&&(i=document.querySelector(`.btn__add[data-id="${e}"]`),i.classList.toggle("icon-active")),s.FavoriteStorage.isIngredientInFavorite(e)?(s.FavoriteStorage.removeIngredient(e),t.target.textContent="Add to favorite",n&&(i.querySelector(".btn-text").innerHTML="Add to")):(s.FavoriteStorage.addIngredient(e),t.target.textContent="Remove from favorite",n&&(i.querySelector(".btn-text").innerHTML="Remove"))}})),r.register("8F5Dv",(function(t,e){t.exports='<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m10.253 9 7.37-7.369A.888.888 0 0 0 16.368.378l-7.37 7.369L1.632.369A.893.893 0 1 0 .369 1.63L7.747 9 .369 16.369a.89.89 0 1 0 1.253 1.253L9 10.253l7.369 7.37a.889.889 0 0 0 1.253-1.254L10.253 9Z"/></svg>'})),r.register("1Qcw2",(function(e,n){t(e.exports,"FavoriteStorage",(function(){return i}));const i={cocktailsKey:"fav-cocktails",ingredientsKey:"fav-ingredients",getCocktails(){return JSON.parse(localStorage.getItem(this.cocktailsKey))||[]},getIngredients(){return JSON.parse(localStorage.getItem(this.ingredientsKey))||[]},isCocktailInFavorite(t){return this.getCocktails().includes(t)},isIngredientInFavorite(t){return this.getIngredients().includes(t)},addCocktail(t){const e=this.getCocktails();e.push(t),localStorage.setItem(this.cocktailsKey,JSON.stringify(e))},removeCocktail(t){const e=this.getCocktails(),n=e.indexOf(t);e.splice(n,1),localStorage.setItem(this.cocktailsKey,JSON.stringify(e))},addIngredient(t){const e=this.getIngredients();e.push(t),localStorage.setItem(this.ingredientsKey,JSON.stringify(e))},removeIngredient(t){const e=this.getIngredients(),n=e.indexOf(t);e.splice(n,1),localStorage.setItem(this.ingredientsKey,JSON.stringify(e))}}}));var a=r("cDqy2"),s=r("aJrzc"),c={};c='<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m10.253 9 7.37-7.369A.888.888 0 0 0 16.368.378l-7.37 7.369L1.632.369A.893.893 0 1 0 .369 1.63L7.747 9 .369 16.369a.89.89 0 1 0 1.253 1.253L9 10.253l7.369 7.37a.889.889 0 0 0 1.253-1.254L10.253 9Z"/></svg>';a=r("cDqy2");var d=r("1Qcw2");const l=document.querySelector("#modal-drink-detail");function u(t){(0,a.fetchCocktailById)(t).then((t=>{l.innerHTML=function(t){const n=d.FavoriteStorage.isCocktailInFavorite(t.idDrink)?"Remove from favorite":"Add to favorite";return`\n    <button class="modal__button" data-modal-close>\n    ${e(c)}\n    </button>\n        <div class="modal__cocktail">\n            <h3 class="modal__title">${t.strDrink}</h3>\n            <div class="modal__instructions-hold">\n                <h4 class="modal__instructions">INSTRUCTION:</h4>\n                <p class="instruction">${t.strInstructions}</p>\n            </div>\n            <div class="modal__ingredients-hold">\n                <img class="modal__picture" src="${t.strDrinkThumb}" alt="" width="280" height="280" />\n                <h4 class="modal__ingredients">INGREDIENTS</h4>\n                <p class="modal__description">Per cocktail</p>\n                <ul class="ingredients__list"></ul>\n            </div>\n            <button class="modal__button-add" data-id="${t.idDrink}" name="add-remove" type="button"> ${n} </button>\n        </div>\n    `}(t);const n=l.querySelector(".modal__button"),i=l.querySelector(".ingredients__list"),o=l.querySelector(".modal__button-add");i.innerHTML=function(t){let e="";for(let n=1;n<=15;n++){let i=t["strIngredient"+n],o=t["strMeasure"+n];if(!i)break;e+=`<li class="ingredient__item" data-ingredient="${i}" > <span class="ingredients-black" >✶ </span>${o||""}<span data-name="ingredient" data-ingredient="${i}" class="ingredient__focus"> ${i}<span/></li>`}return e}(t),i.addEventListener("click",s.showIngredientModal),n.addEventListener("click",g),o.addEventListener("click",h),l.classList.toggle("show-modal")}))}function g(){l.innerHTML="",l.classList.toggle("show-modal")}function h(t){const e=t.target.dataset.id,n=document.querySelector(`.btn__add[data-id="${e}"]`);n.classList.toggle("icon-active"),d.FavoriteStorage.isCocktailInFavorite(e)?(d.FavoriteStorage.removeCocktail(e),t.target.textContent="Add to favorite",n.querySelector(".btn-text").innerHTML="Add to"):(d.FavoriteStorage.addCocktail(e),t.target.textContent="Remove from favorite",n.querySelector(".btn-text").innerHTML="Remove")}var m={};m='<svg data-name="heart-icon" width="21" height="19" xmlns="http://www.w3.org/2000/svg"><path data-name="heart-icon" class="icon-outline" d="m10.5 19-1.523-1.367C3.57 12.798 0 9.61 0 5.695 0 2.505 2.541 0 5.775 0c1.827 0 3.58.839 4.725 2.164A6.324 6.324 0 0 1 15.225 0C18.459 0 21 2.506 21 5.695c0 3.914-3.57 7.103-8.977 11.949L10.5 19Z"/><path data-name="heart-icon" class="icon-background" d="m10.5 17-1.232-1.079C4.89 12.104 2 9.586 2 6.496 2 3.978 4.057 2 6.675 2c1.479 0 2.898.662 3.825 1.708A5.175 5.175 0 0 1 14.325 2C16.943 2 19 3.978 19 6.496c0 3.09-2.89 5.607-7.268 9.433L10.5 17Z"/></svg>';d=r("1Qcw2");function v(t){return t.map((({strDrink:t,strDrinkThumb:n,idDrink:i})=>function(t,n,i){const o=document.createElement("li"),r=d.FavoriteStorage.isCocktailInFavorite(i),a=r?"btn__add icon-active":"btn__add",s=r?"Remove":"Add to";return o.className="cocktails__item",o.innerHTML=`\n        <img class="cocktails__img" src="${n}" alt="cocktail"/>\n        <div class="cocktails__descr">\n            <h3 title="${t}" class="cocktails__name">${t}</h3>\n            <div class="cocktails__btns">\n                <button class="btn__learn" type="button" data-name="learn-more" data-id="${i}" >Learn more</button>\n                <button class="${a}" type="button" data-name="add-remove" data-id="${i}"><span data-name="add-remove" class="btn-text">${s}</span> <span data-name="add-remove" class="heart-icon">${e(m)}</span></button>\n            </div>\n        </div>\n        `,o.addEventListener("click",f),o}(t,n,i)))}function f(t){const e=t.target.dataset.name;if("learn-more"===e){u(t.target.dataset.id)}if("add-remove"===e||"heart-icon"===e){const e=t.currentTarget.querySelector(".btn__add"),n=e.querySelector(".btn-text"),i=e.dataset.id;e.classList.toggle("icon-active"),d.FavoriteStorage.isCocktailInFavorite(i)?(d.FavoriteStorage.removeCocktail(i),n.textContent="Add to"):(d.FavoriteStorage.addCocktail(i),n.textContent="Remove")}}a=r("cDqy2"),d=r("1Qcw2");const p=document.querySelector(".favorite-results");!async function(){const t=function(){const t=d.FavoriteStorage.getCocktails().reduce(((t,e)=>(t.push((0,a.fetchCocktailById)(e)),t)),[]);return t}(),e=await Promise.all(t).catch((t=>p.innerHTML="Something went wrong..."));if(0===e.length)return void(p.innerHTML='<p class="favorite__none">\nYou haven\'t added any <br>favorite cocktails yet</p>');p.innerHTML="",p.append(...v(e))}();
//# sourceMappingURL=fav-cocktails.5ba7df62.js.map