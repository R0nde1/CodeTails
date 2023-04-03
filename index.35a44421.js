function t(t,n,e,r){Object.defineProperty(t,n,{get:e,set:r,enumerable:!0,configurable:!0})}function n(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in i){var n=i[t];delete i[t];var e={id:t,exports:{}};return r[t]=e,n.call(e.exports,e,e.exports),e.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,n){i[t]=n},e.parcelRequired7c6=o),o.register("kyEFX",(function(n,e){var r,i;t(n.exports,"register",(function(){return r}),(function(t){return r=t})),t(n.exports,"resolve",(function(){return i}),(function(t){return i=t}));var o={};r=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)o[n[e]]=t[n[e]]},i=function(t){var n=o[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n}})),o.register("dFiq8",(function(n,e){function r(){const t=document.body.clientWidth;let n=3;return t>=768&&(n=6),t>=1280&&(n=9),n}t(n.exports,"calculateCocktails",(function(){return r}))})),o.register("cDqy2",(function(n,e){function r(t){const n=[];for(let e=0;e<t;e++)n.push(fetch("https://thecocktaildb.com/api/json/v1/1/random.php").then((t=>t.json())));return Promise.all(n).then((t=>t.map((t=>t.drinks[0]))))}function i(t){return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${t}`).then((t=>t.json())).then((({drinks:t})=>{if(!t)throw"Sorry, we didn't find<br>any cocktail for you";return t}))}function o(t){return fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${t}`).then((t=>t.json())).then((({drinks:t})=>t[0]))}t(n.exports,"fetchRandomCocktails",(function(){return r})),t(n.exports,"fetchCocktailsByName",(function(){return i})),t(n.exports,"fetchCocktailById",(function(){return o}))})),o.register("7od7n",(function(e,r){t(e.exports,"getDrinksMarkup",(function(){return d})),t(e.exports,"getErrorMarkup",(function(){return u})),t(e.exports,"handleCardClick",(function(){return f}));var i=o("lJXXB"),s=o("7QV8w"),c=o("62ejj"),a=o("O7LYl"),l=o("Hye3R");function d(t){return t.map((({strDrink:t,strDrinkThumb:n,idDrink:e})=>{return`\n<li id="${i=e}" class="cocktails__item">\n    <img class="cocktails__img" src="${n}" alt="cocktail"/>\n    <div class="cocktails__descr">\n        <h3 title="${r=t}" class="cocktails__name">${r}</h3>\n        <div class="cocktails__btns">\n            <button class="btn__learn" type="button" name="learn-more" data-id="${i}" >Learn more</button>\n            <button class="btn__delete" type="button">Remove</button>\n        </div>\n    </div>\n</li>\n`;var r,i})).join("")}function u(){return`<li><picture>\n        <source\n        media="(min-width: 768px)"\n        srcset="${n(s)}, ${n(c)} 2x"\n        type="image/png"/>\n        <source\n        media="(max-width: 767px)"\n        srcset="${n(a)}, ${n(l)} 2x"\n        type="image/png"/>\n        <img src="${n(s)}" alt="People in the cafe" width="345" height="380"/>\n        </picture>\n        </li>\n      `}function f(t){if("learn-more"===t.target.name){const n=t.target.dataset.id;(0,i.showDrinkModal)(n)}"addRemove"===t.target.name&&t.target.classList.toggle("btn__delete")}})),o.register("lJXXB",(function(e,r){t(e.exports,"showDrinkModal",(function(){return a}));var i=o("kfdtu"),s=o("cDqy2");const c=document.querySelector("#modal-drink-detail");function a(t){(0,s.fetchCocktailById)(t).then((t=>{var e;c.innerHTML=(e=t,`\n    <button class="modal__button" data-modal-close>\n    ${n(i)}\n    </button>\n        <div class="modal__cocktail">\n            <h3 class="modal__title">${e.strDrink}</h3>\n            <div class="modal__instructions-hold">\n                <h4 class="modal__instructions">INSTRUCTION:</h4>\n                <p class="instruction">${e.strInstructions}</p>\n            </div>\n            <div class="modal__ingredients-hold">\n                <img class="modal__picture" src="${e.strDrinkThumb}" alt="" width="280" height="280" />\n                <h4 class="modal__ingredients">INGREDIENTS</h4>\n                <p class="modal__description">Per cocktail</p>\n                <ul class="ingredients__list"></ul>\n            </div>\n            <button class="modal__button-add" data-id='${e.idDrink}' type="button" data-modal-add> Add to favorite </button>\n        </div>\n    `);const r=c.querySelector(".modal__button");c.querySelector(".ingredients__list").innerHTML=function(t){let n="";for(let e=1;e<=15;e++){let r=t["strIngredient"+e];if(!r)break;n+=`<li class= "ingredient__item"> <span class="ingredientsBlack">✶ </span>${r}</li>`}return n}(t),r.addEventListener("click",l),c.classList.toggle("show-modal")}))}function l(){c.innerHTML="",c.classList.toggle("show-modal")}})),o.register("kfdtu",(function(t,n){t.exports='<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m10.253 9 7.37-7.369A.888.888 0 0 0 16.368.378l-7.37 7.369L1.632.369A.893.893 0 1 0 .369 1.63L7.747 9 .369 16.369a.89.89 0 1 0 1.253 1.253L9 10.253l7.369 7.37a.889.889 0 0 0 1.253-1.254L10.253 9Z"/></svg>'})),o.register("7QV8w",(function(t,n){t.exports=new URL(o("kyEFX").resolve("2MPDQ"),import.meta.url).toString()})),o.register("62ejj",(function(t,n){t.exports=new URL(o("kyEFX").resolve("4zLgd"),import.meta.url).toString()})),o.register("O7LYl",(function(t,n){t.exports=new URL(o("kyEFX").resolve("aVWWu"),import.meta.url).toString()})),o.register("Hye3R",(function(t,n){t.exports=new URL(o("kyEFX").resolve("3KIbu"),import.meta.url).toString()})),o("kyEFX").register(JSON.parse('{"44K16":"index.35a44421.js","2MPDQ":"serving_desk.12e16403.png","4zLgd":"serving_desk@2x.81b62eeb.png","aVWWu":"serving_mob.348bdfb7.png","3KIbu":"serving_mob@2x.f621808a.png"}'));var s=o("dFiq8"),c=o("cDqy2"),a=o("7od7n");const l=document.querySelector("#content-results"),d=document.querySelector("#content-title");let u=(0,s.calculateCocktails)();(0,c.fetchRandomCocktails)(u).then((t=>{d.innerHTML="Cocktails",l.innerHTML=(0,a.getDrinksMarkup)(t),l.addEventListener("click",a.handleCardClick)}));
//# sourceMappingURL=index.35a44421.js.map