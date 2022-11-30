const burger = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.menu__list');
const menuBtn = document.querySelector('.menu__btn');
const menuLink = document.querySelectorAll('.menu__link');
const body = document.body;

burger.addEventListener('click', () => {
  menu.classList.toggle('menu__active');
  burger.classList.toggle('icon--active');
  menuBtn.classList.toggle('menu__btn--active');
  body.classList.toggle('body__lock');
});

menuLink.forEach(function (button) {
  button.addEventListener('click', () => {
    body.classList.toggle('body__lock');
    menu.classList.toggle('menu__active');
    burger.classList.toggle('icon--active');
    menuBtn.classList.toggle('menu__btn--active');
  });
});
