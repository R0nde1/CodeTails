!function(){const e=document.querySelectorAll(".dark-mode-toggle"),t=document.body,o="dark-theme";const s=new class{setTheme(){localStorage.setItem(o,o)}removeTheme(){localStorage.removeItem(o)}getTheme(){return localStorage.getItem(o)}isDarkThemeOn(){return t.classList.contains(o)}toggleTheme(){const s=this.isDarkThemeOn();t.classList.toggle(o,!s),e.forEach((e=>{e.checked=!s})),this.getTheme()?this.removeTheme():this.setTheme(),document.querySelectorAll(".header-nav__item").forEach((e=>{e.classList.toggle(o,!s)}))}setThemeOn(s){t.classList.toggle(o,Boolean(s)),e.forEach((e=>{e.checked=Boolean(s)}))}constructor(){e.forEach((e=>{e.addEventListener("click",(()=>this.toggleTheme()))}))}};window.addEventListener("DOMContentLoaded",(()=>{s.getTheme()&&s.setThemeOn(o)}));const c=document.querySelector(".fav__select-input"),n=document.querySelector(".fav__list"),l=document.querySelector("html");c.addEventListener("click",(function(e){e.stopPropagation(),n.classList.toggle("visually-hidden")})),l.addEventListener("click",(function(){n.classList.add("visually-hidden")}))}();
//# sourceMappingURL=fav-cocktails.07544e87.js.map
