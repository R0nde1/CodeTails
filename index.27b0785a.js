function t(t,n,e,r){Object.defineProperty(t,n,{get:e,set:r,enumerable:!0,configurable:!0})}function n(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in o){var n=o[t];delete o[t];var e={id:t,exports:{}};return r[t]=e,n.call(e.exports,e,e.exports),e.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,n){o[t]=n},e.parcelRequired7c6=i),i.register("kyEFX",(function(n,e){var r,o;t(n.exports,"register",(function(){return r}),(function(t){return r=t})),t(n.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};r=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)i[n[e]]=t[n[e]]},o=function(t){var n=i[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n}})),i.register("cDqy2",(function(n,e){function r(t){const n=[];for(let e=0;e<t;e++)n.push(fetch("https://thecocktaildb.com/api/json/v1/1/random.php").then((t=>t.json())));return Promise.all(n).then((t=>t.map((t=>t.drinks[0]))))}function o(t){return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${t}`).then((t=>t.json())).then((({drinks:t})=>{if(!t)throw"Sorry, we didn't find<br>any cocktail for you";return t}))}function i(t){return fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${t}`).then((t=>t.json())).then((({drinks:t})=>t[0]))}t(n.exports,"fetchRandomCocktails",(function(){return r})),t(n.exports,"fetchCocktailsByName",(function(){return o})),t(n.exports,"fetchCocktailById",(function(){return i}))})),i.register("7od7n",(function(e,r){t(e.exports,"getDrinksMarkup",(function(){return u})),t(e.exports,"getErrorMarkup",(function(){return d})),t(e.exports,"handleCardClick",(function(){return f}));var o=i("lJXXB"),s=i("7QV8w"),c=i("62ejj"),a=i("O7LYl"),l=i("Hye3R");function u(t){return t.map((({strDrink:t,strDrinkThumb:n,idDrink:e})=>{return`\n<li id="${r=e}" class="cocktails__item">\n    <img class="cocktails__img" src="${n}" alt="cocktail"/>\n    <div class="cocktails__descr">\n        <h3 class="cocktails__name">${t}</h3>\n        <div class="cocktails__btns">\n            <button class="btn__learn" type="button" name="learn-more" data-id="${r}" >Learn more</button>\n            <button class="btn__delete" type="button">Remove</button>\n        </div>\n    </div>\n</li>\n`;var r})).join("")}function d(){return`<li><picture>\n        <source\n        media="(min-width: 768px)"\n        srcset="${n(s)}, ${n(c)} 2x"\n        type="image/png"/>\n        <source\n        media="(max-width: 767px)"\n        srcset="${n(a)}, ${n(l)} 2x"\n        type="image/png"/>\n        <img src="${n(s)}" alt="People in the cafe" width="345" height="380"/>\n        </picture>\n        </li>\n      `}function f(t){if("learn-more"===t.target.name){const n=t.target.dataset.id;(0,o.showDrinkModal)(n)}"addRemove"===t.target.name&&t.target.classList.toggle("btn__delete")}})),i.register("lJXXB",(function(n,e){t(n.exports,"showDrinkModal",(function(){return s}));var r=i("cDqy2");const o=document.querySelector("#modal-drink-detail");function s(t){(0,r.fetchCocktailById)(t).then((t=>{var n;o.innerHTML=`\n    <button class="modal__button" data-modal-close>\n                <svg class="modal-icon-close" width="18" height="18">\n                <use href="./img/sprite.svg#icon-close-line"></use>\n                </svg>\n            </button>\n            <div class="modal__cocktail">\n                <h3 class="modal__title">${(n=t).strDrink}</h3>\n                <h4 class="modal__instructions">INSTRUCTION:</h4>\n                <p class="instruction">${n.strInstructions}</p>\n                <img class="modal1__picture" src="${n.strDrinkThumb}" alt="" width="280" height="280" />\n                <h4> INGREDIENTS</h4>\n                <p> Per cocktail</p>\n                <ul class="ingredients__list" ></ul>\n            <button class="modal__button-add" data-id='${n.idDrink}' type="button" data-modal-add> Add to favorite </button>\n        </div>\n    `;const e=o.querySelector(".modal__button");o.querySelector(".ingredients__list").innerHTML=function(t){let n="";for(let e=1;e<=15;e++){let r=t["strIngredient"+e];if(!r)break;n+=`<li class= "ingredient__item"> <span class="ingredientsBlack">✶ </span>${r}</li>`}return n}(t),e.addEventListener("click",c),o.classList.toggle("show-modal")}))}function c(){o.innerHTML="",o.classList.toggle("show-modal")}})),i.register("7QV8w",(function(t,n){t.exports=new URL(i("kyEFX").resolve("2MPDQ"),import.meta.url).toString()})),i.register("62ejj",(function(t,n){t.exports=new URL(i("kyEFX").resolve("4zLgd"),import.meta.url).toString()})),i.register("O7LYl",(function(t,n){t.exports=new URL(i("kyEFX").resolve("aVWWu"),import.meta.url).toString()})),i.register("Hye3R",(function(t,n){t.exports=new URL(i("kyEFX").resolve("3KIbu"),import.meta.url).toString()})),i("kyEFX").register(JSON.parse('{"44K16":"index.27b0785a.js","2MPDQ":"serving_desk.12e16403.png","4zLgd":"serving_desk@2x.81b62eeb.png","aVWWu":"serving_mob.348bdfb7.png","3KIbu":"serving_mob@2x.f621808a.png"}'));var s=i("cDqy2"),c=i("7od7n");const a=document.querySelector("#content-results"),l=document.querySelector("#content-title"),u=document.body.clientWidth;let d=3;u>=768&&(d=6),u>=1280&&(d=9),(0,s.fetchRandomCocktails)(d).then((t=>{l.innerHTML="Cocktails",a.innerHTML=(0,c.getDrinksMarkup)(t),a.addEventListener("click",c.handleCardClick)}));
//# sourceMappingURL=index.27b0785a.js.map
