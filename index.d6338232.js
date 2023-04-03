!function(){function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},s=n.parcelRequired7c6;null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},n.parcelRequired7c6=s),s.register("iE7OH",(function(e,n){var i,r;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var s={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)s[e[n]]=t[e[n]]},r=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s.register("g0jhG",(function(e,n){function i(t){const e=[];for(let n=0;n<t;n++)e.push(fetch("https://thecocktaildb.com/api/json/v1/1/random.php").then((t=>t.json())));return Promise.all(e).then((t=>t.map((t=>t.drinks[0]))))}function r(t){return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${t}`).then((t=>t.json())).then((({drinks:t})=>{if(!t)throw"Sorry, we didn't find<br>any cocktail for you";return t}))}function s(t){return fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${t}`).then((t=>t.json())).then((({drinks:t})=>t[0]))}function a(t){return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?i=${t}`).then((t=>t.json())).then((({ingredients:t})=>t[0]))}function o(t){return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?f=${t}`).then((t=>t.json())).then((({drinks:t})=>{if(!t)throw"Sorry, we didn't find<br>any cocktail for you";return t}))}t(e.exports,"fetchRandomCocktails",(function(){return i})),t(e.exports,"fetchCocktailsByName",(function(){return r})),t(e.exports,"fetchCocktailById",(function(){return s})),t(e.exports,"fetchIngredientByName",(function(){return a})),t(e.exports,"fetchCocktailsByLetter",(function(){return o}))})),s.register("80k9Z",(function(e,n){function i(){const t=document.body.clientWidth;let e=3;return t>=768&&(e=6),t>=1280&&(e=9),e}t(e.exports,"calculateCocktails",(function(){return i}))})),s.register("kE9Qy",(function(n,i){t(n.exports,"getDrinksMarkup",(function(){return u})),t(n.exports,"getErrorMarkup",(function(){return g}));var r=s("keUzR"),a=s("28nwg"),o=s("kzyUt"),c=s("lBlVv"),l=s("hDYcb"),d=s("k8VIc");function u(t){return t.map((({strDrink:t,strDrinkThumb:n,idDrink:i})=>function(t,n,i){const r=document.createElement("li");return r.id=i,r.className="cocktails__item",r.innerHTML=`\n        <img class="cocktails__img" src="${n}" alt="cocktail"/>\n        <div class="cocktails__descr">\n            <h3 title="${t}" class="cocktails__name">${t}</h3>\n            <div class="cocktails__btns">\n                <button class="btn__learn" type="button" data-name="learn-more" data-id="${i}" >Learn more</button>\n                <button class="btn__add" type="button" data-name="add-remove" data-id="${i}"><span data-name="add-remove" class="btn-text">Add to</span> <span data-name="add-remove" class="heart-icon">${e(d)}</span></button>\n            </div>\n        </div>\n        `,r.addEventListener("click",p),r}(t,n,i)))}function g(){return`<li><picture>\n        <source\n        media="(min-width: 768px)"\n        srcset="${e(a)}, ${e(o)} 2x"\n        type="image/png"/>\n        <source\n        media="(max-width: 767px)"\n        srcset="${e(c)}, ${e(l)} 2x"\n        type="image/png"/>\n        <img src="${e(a)}" alt="People in the cafe" width="345" height="380"/>\n        </picture>\n        </li>\n    `}function p(t){const e=t.target.dataset.name;if("learn-more"===e){const e=t.target.dataset.id;(0,r.showDrinkModal)(e)}if("add-remove"===e||"heart-icon"===e){const e=t.currentTarget.querySelector(".btn__add"),n=e.querySelector(".btn-text"),i=e.querySelector(".heart-icon"),r=e.dataset.id,s=JSON.parse(localStorage.getItem("favCocktails"))||[];if(s){if(s.includes(r)){const t=s.indexOf(r);s.splice(t,1),n.textContent="Add to"}else s.push(r),n.textContent="Remove";i.classList.toggle("icon-active"),localStorage.setItem("favCocktails",JSON.stringify(s))}else localStorage.setItem("favCocktails",JSON.stringify([r]))}}})),s.register("keUzR",(function(n,i){t(n.exports,"showDrinkModal",(function(){return l}));var r=s("g0jhG"),a=s("6alNL"),o=s("6ptbX");r=s("g0jhG");const c=document.querySelector("#modal-drink-detail");function l(t){(0,r.fetchCocktailById)(t).then((t=>{var n;c.innerHTML=(n=t,`\n    <button class="modal__button" data-modal-close>\n    ${e(o)}\n    </button>\n        <div class="modal__cocktail">\n            <h3 class="modal__title">${n.strDrink}</h3>\n            <div class="modal__instructions-hold">\n                <h4 class="modal__instructions">INSTRUCTION:</h4>\n                <p class="instruction">${n.strInstructions}</p>\n            </div>\n            <div class="modal__ingredients-hold">\n                <img class="modal__picture" src="${n.strDrinkThumb}" alt="" width="280" height="280" />\n                <h4 class="modal__ingredients">INGREDIENTS</h4>\n                <p class="modal__description">Per cocktail</p>\n                <ul class="ingredients__list"></ul>\n            </div>\n            <button class="modal__button-add" data-id='${n.idDrink}' type="button" data-modal-add> Add to favorite </button>\n        </div>\n    `);const i=c.querySelector(".modal__button"),r=c.querySelector(".ingredients__list");r.innerHTML=function(t){let e="";for(let n=1;n<=15;n++){let i=t["strIngredient"+n],r=t["strMeasure"+n];if(!i)break;e+=`<li class= "ingredient__item" data-ingredient="${i}" data-name="ingredient"> <span class="ingredientsBlack">✶ </span>${r} ${i}</li>`}return e}(t),r.addEventListener("click",a.showIngredientModal),i.addEventListener("click",d),c.classList.toggle("show-modal")}))}function d(){c.innerHTML="",c.classList.toggle("show-modal")}})),s.register("6alNL",(function(n,i){t(n.exports,"showIngredientModal",(function(){return c}));var r=s("g0jhG"),a=s("2twQK");const o=document.querySelector("#modal-ingredients-details");function c(t){"ingredient"===t.target.dataset.name&&(0,r.fetchIngredientByName)(t.target.dataset.ingredient).then((t=>{var n;o.innerHTML=(n=t,`\n    <div class="ingredients__btn">\n    <button type="button" class="ingredients__button-close">\n    ${e(a)}\n    </button>\n  </div>\n  <h2 class="ingredients__title">${n.strIngredient}</h2>\n  <h3 class="ingredients__topic">${n.strType||"-"}</h3>\n  <div class="ingredients__line-container">\n    <div class="ingredients__line"></div>\n  </div>\n  <p class="ingredients__text">\n    ${n.strDescription||"Sorry, there is no description for this ingredient"}\n  </p>\n  <ul class="ingredients__list">\n  <li class= "ingredients__item"> <span class="ingredients__black">✶ </span> Type: ${n.strType||"-"}</li>\n  <li class= "ingredients__item"> <span class="ingredients__black">✶ </span> Alcoholic: ${n.strAlcohol||"-"}</li>\n  <li class= "ingredients__item"> <span class="ingredients__black">✶ </span> Alcohol by volume: ${n.strABV||"-"}</li>\n  </ul>\n  <button type="button" class="ingredients__button">Add to favorite</button>`);o.querySelector(".ingredients__button-close").addEventListener("click",l),o.classList.toggle("show-modal")}))}function l(){o.innerHTML="",o.classList.toggle("show-modal")}})),s.register("2twQK",(function(t,e){t.exports='<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m10.253 9 7.37-7.369A.888.888 0 0 0 16.368.378l-7.37 7.369L1.632.369A.893.893 0 1 0 .369 1.63L7.747 9 .369 16.369a.89.89 0 1 0 1.253 1.253L9 10.253l7.369 7.37a.889.889 0 0 0 1.253-1.254L10.253 9Z"/></svg>'})),s.register("6ptbX",(function(t,e){t.exports='<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m10.253 9 7.37-7.369A.888.888 0 0 0 16.368.378l-7.37 7.369L1.632.369A.893.893 0 1 0 .369 1.63L7.747 9 .369 16.369a.89.89 0 1 0 1.253 1.253L9 10.253l7.369 7.37a.889.889 0 0 0 1.253-1.254L10.253 9Z"/></svg>'})),s.register("28nwg",(function(t,e){t.exports=s("aNJCr").getBundleURL("h6pVB")+s("iE7OH").resolve("6Xd3p")})),s.register("aNJCr",(function(e,n){var i;t(e.exports,"getBundleURL",(function(){return i}),(function(t){return i=t}));var r={};function s(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(t){var e=r[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return s(t[2])}return"/"}(),r[t]=e),e}})),s.register("kzyUt",(function(t,e){t.exports=s("aNJCr").getBundleURL("h6pVB")+s("iE7OH").resolve("FYTdx")})),s.register("lBlVv",(function(t,e){t.exports=s("aNJCr").getBundleURL("h6pVB")+s("iE7OH").resolve("9W9sV")})),s.register("hDYcb",(function(t,e){t.exports=s("aNJCr").getBundleURL("h6pVB")+s("iE7OH").resolve("hFGtO")})),s.register("k8VIc",(function(t,e){t.exports='<svg data-name="heart-icon" width="21" height="19" xmlns="http://www.w3.org/2000/svg"><path data-name="heart-icon" class="icon-outline" d="m10.5 19-1.523-1.367C3.57 12.798 0 9.61 0 5.695 0 2.505 2.541 0 5.775 0c1.827 0 3.58.839 4.725 2.164A6.324 6.324 0 0 1 15.225 0C18.459 0 21 2.506 21 5.695c0 3.914-3.57 7.103-8.977 11.949L10.5 19Z"/><path data-name="heart-icon" class="icon-background" d="m10.5 17-1.232-1.079C4.89 12.104 2 9.586 2 6.496 2 3.978 4.057 2 6.675 2c1.479 0 2.898.662 3.825 1.708A5.175 5.175 0 0 1 14.325 2C16.943 2 19 3.978 19 6.496c0 3.09-2.89 5.607-7.268 9.433L10.5 17Z"/></svg>'})),s.register("jcFG7",(function(e,n){function i(t,e,n){const i=Math.ceil(t/e);if(1===i)return"";let r=1===n?" inactive":"",s=`<li class="pagination__number left-arrow${r}" data-page="${n-1}">&lt;</li>`;for(let t=1;t<=i;t++){s+=`<li class="pagination__number${t===n?" inactive":""}" data-page="${t}">${t}</li>`}return r=n===i?" inactive":"",s+=`<li class="pagination__number right-arrow${r}" data-page="${n+1}">&gt;</li>`,s}t(e.exports,"createPagination",(function(){return i}))})),s("iE7OH").register(JSON.parse('{"h6pVB":"index.d6338232.js","6Xd3p":"serving_desk.12e16403.png","FYTdx":"serving_desk@2x.81b62eeb.png","9W9sV":"serving_mob.348bdfb7.png","hFGtO":"serving_mob@2x.f621808a.png"}'));var a=s("g0jhG"),o=s("80k9Z"),c=s("kE9Qy"),l=s("jcFG7");const d=document.querySelector("#content-results"),u=document.querySelector("#content-title"),g=document.querySelector("#pagination"),p=document.querySelector(".symbol__panel"),h=document.querySelector(".select");function f(t){if(!t.target.dataset.value)return;let e=t.target.dataset.value;u.innerHTML="Searching results..",d.innerHTML="";const n=(0,o.calculateCocktails)();(0,a.fetchCocktailsByLetter)(e).then((t=>{searchResults=t,u.innerHTML="Cocktails",d.append(...(0,c.getDrinksMarkup)(t.slice(0,n))),g.innerHTML=(0,l.createPagination)(t.length,n,1),_()})).catch((t=>{u.innerHTML=t,d.innerHTML=(0,c.getErrorMarkup)()}))}function m(t){const e=Number(t.target.dataset.page),n=(0,o.calculateCocktails)(),i=searchResults,r=e*n,s=r-n;d.innerHTML="",d.append(...(0,c.getDrinksMarkup)(i.slice(s,r))),g.innerHTML=(0,l.createPagination)(i.length,n,e),_()}function _(){const t=document.querySelectorAll(".pagination__number");for(const e of t)e.className.includes("inactive")||e.addEventListener("click",m)}p.addEventListener("click",f),h.addEventListener("click",f)}();
//# sourceMappingURL=index.d6338232.js.map
