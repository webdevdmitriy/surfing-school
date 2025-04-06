const btnMenu = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu')

btnMenu?.addEventListener('click', () => {
  menu?.classList.toggle('menu--open')
})
