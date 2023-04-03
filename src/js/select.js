const select = document.querySelector('.select')
const selectHeader = document.querySelector('.select__header')
const selectCurrent = document.querySelector('.select__current')
const selectIcon = document.querySelector('.select__icon')
const selectBody = document.querySelector('.select__body')

selectHeader.addEventListener('click', selectToggle)
selectBody.addEventListener('click', selectChoose)

function selectToggle() {
    select.classList.toggle('is-active')
    selectIcon.classList.toggle('is-active')
}

function selectChoose(event) {
    select.classList.remove('is-active')
    selectIcon.classList.remove('is-active')
    
    selectCurrent.textContent = event.target.innerHTML
    let letter = selectCurrent.textContent
    selectCurrent.classList.add('is-select')
    selectIcon.classList.add('is-select')
    selectHeader.classList.add('is-select')
}
