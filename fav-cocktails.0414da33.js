var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);const r=document.querySelectorAll(".dark-mode-toggle"),s=document.body,c="dark-theme";const l=new class{setTheme(){localStorage.setItem(c,c)}removeTheme(){localStorage.removeItem(c)}getTheme(){return localStorage.getItem(c)}isDarkThemeOn(){return s.classList.contains(c)}toggleTheme(){const e=this.isDarkThemeOn();s.classList.toggle(c,!e),r.forEach((t=>{t.checked=!e})),this.getTheme()?this.removeTheme():this.setTheme(),document.querySelectorAll(".header-nav__item").forEach((t=>{t.classList.toggle(c,!e)}))}setThemeOn(e){s.classList.toggle(c,Boolean(e)),r.forEach((t=>{t.checked=Boolean(e)}))}constructor(){r.forEach((e=>{e.addEventListener("click",(()=>this.toggleTheme()))}))}};window.addEventListener("DOMContentLoaded",(()=>{l.getTheme()&&l.setThemeOn(c)}));const i=document.querySelector(".fav__select-input"),a=document.querySelector(".fav__list"),d=document.querySelector("html");i.addEventListener("click",(function(e){e.stopPropagation(),a.classList.toggle("visually-hidden")})),d.addEventListener("click",(function(){a.classList.add("visually-hidden")})),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open")};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 1280px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),n("4fmmh");
//# sourceMappingURL=fav-cocktails.0414da33.js.map