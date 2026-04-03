const menu = document.querySelector('.menu')
const mobile = document.querySelector('.menu-mobile')

mobile.addEventListener('click', () => {
    menu.classList.toggle('active')
})