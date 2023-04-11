export function burgerMenu() {
  const menu = document.querySelector('.menu__list');
  const burger = document.querySelector('.icon');
  const menuLink = document.querySelectorAll('.menu__link');
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

  burger.addEventListener('click', toggleBurger);

  menuLink.forEach(btn => btn.addEventListener('click', removeBurger));
}
