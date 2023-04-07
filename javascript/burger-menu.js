const menu = document.querySelector('.menu__list');
const burger = document.querySelector('.icon');
const navMenu = document.querySelector('.header__menu');

function toggleBurger() {
  menu.classList.toggle('menu__active');
  burger.classList.toggle('icon--active');
  document.body.classList.toggle('body__lock');
  navMenu.classList.toggle('nav__menu--shown');
}

function removeBurger() {
  document.body.classList.remove('body__lock');
  menu.classList.remove('menu__active');
  burger.classList.remove('icon--active');
}

export { toggleBurger, removeBurger };
