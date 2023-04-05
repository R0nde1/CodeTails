const drinkModal = document.querySelector('#modal-footer');
const btnFooter = document.getElementById('open-modal-footer');
const closeCocktailBtn = drinkModal.querySelector('.modal__button');

btnFooter.addEventListener('click', openFooterModal);
closeCocktailBtn.addEventListener('click', closeCocktailModal);

function openFooterModal() {
  drinkModal.style.display = 'block';
}
function closeCocktailModal() {
  drinkModal.style.display = 'none';
}
window.onclick = function (event) {
  if (event.target == drinkModal) {
    drinkModal.style.display = 'none';
  }
};
