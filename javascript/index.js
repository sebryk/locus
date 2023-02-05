const burger = document.querySelector('.icon');
const navMenu = document.querySelector('.header__menu');
const menu = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');
const menuBtn = document.querySelector('.menu__btn');
const authWindow = document.querySelector('.modal-signin');
const signInMenu = document.querySelector('.modal-signin__wrap');
const signUpMenu = document.querySelector('.modal-signup__wrap');
const signInClose = document.querySelector('.modal-signin__close');
const signUpClose = document.querySelector('.modal-signup__close');
const signinBtn = document.querySelector('.signin__btn');
const signUpLink = document.querySelector('.modal-signin__link-text');
const signInLink = document.querySelector('.modal-signup__link-text');
const body = document.body;

/* ------------------------------- Burger Menu ------------------------------ */

burger.addEventListener('click', () => {
  menu.classList.toggle('menu__active');
  burger.classList.toggle('icon--active');
  body.classList.toggle('body__lock');
  navMenu.classList.toggle('nav__menu--shown');
});

/* ---------------- Close Burger Menu When Click On Menu Link --------------- */

menuLink.forEach(function (button) {
  button.addEventListener('click', () => {
    body.classList.remove('body__lock');
    menu.classList.remove('menu__active');
    burger.classList.remove('icon--active');
  });
});

/* ------------------------ Open Sign In / Sign Up Modal Window ----------------------- */

menuBtn.addEventListener('click', () => {
  authWindow.classList.add('modal-signin--active');
  menu.classList.remove('menu__active');
  burger.classList.remove('icon--active');
  body.classList.add('body__lock');
  window.scrollTo(0, 0);
});

/* ------------------------ Close Sign In Modal Window  ----------------------- */

signInClose.addEventListener('click', () => {
  authWindow.classList.remove('modal-signin--active');
  body.classList.remove('body__lock');
});

/* ------------------------ Close Sign Up Modal Window  ----------------------- */

signUpClose.addEventListener('click', () => {
  authWindow.classList.remove('modal-signin--active');
  body.classList.remove('body__lock');
  signInMenu.style.display = 'block';
  signUpMenu.style.display = 'none';
});

/* -------------- Switch Between Sign Up / Sign In Modal Window ------------- */

document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-signin')) {
    authWindow.classList.remove('modal-signin--active');
    body.classList.remove('body__lock');
    signInMenu.style.display = 'block';
    signUpMenu.style.display = 'none';
  }
});

/* --------- Switch Between Sign Up / Sign In Links On Modal Window --------- */

signUpLink.addEventListener('click', () => {
  signInMenu.style.display = 'none';
  signUpMenu.style.display = 'block';
});

signInLink.addEventListener('click', () => {
  signInMenu.style.display = 'block';
  signUpMenu.style.display = 'none';
});

/* ---------------------------- Scroll Animation ---------------------------- */

AOS.init({
  duration: 600,
  once: true,
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => console.log(entry.target));
  },
  {
    threshold: 0.5,
  }
);

const header = document.querySelectorAll('[data-id="section"]');

header.forEach(el => observer.observe(el));
