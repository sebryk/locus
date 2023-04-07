import { animateScroll } from './scroll-animation.js';
import { toggleBurger, removeBurger } from './burger-menu.js';
import { openAuthModal, closeSignInModal, closeSignUpModal, closeAuthModal, switchSignInLink, switchSignUpLink } from './auth-window.js';

const burger = document.querySelector('.icon');
const menuLink = document.querySelectorAll('.menu__link');
const menuBtn = document.querySelector('.menu__btn');
const signInClose = document.querySelector('.modal-signin__close');
const signUpClose = document.querySelector('.modal-signup__close');
const signUpLink = document.querySelector('.modal-signin__link-text');
const signInLink = document.querySelector('.modal-signup__link-text');
/* ------------------------------- Toggle Burger Menu ------------------------------ */

burger.addEventListener('click', toggleBurger);

/* ---------------- Close Burger Menu When Click On Menu Link --------------- */

menuLink.forEach(btn => btn.addEventListener('click', removeBurger));

/* ------------------------ Open Sign In / Sign Up Modal Window ----------------------- */

menuBtn.addEventListener('click', openAuthModal);

/* ------------------------ Close Sign In Modal Window  ----------------------- */

signInClose.addEventListener('click', closeSignInModal);

/* ------------------------ Close Sign Up Modal Window  ----------------------- */

signUpClose.addEventListener('click', closeSignUpModal);

/* -------------- Switch Between Sign Up / Sign In Modal Window ------------- */

document.addEventListener('click', closeAuthModal);

/* --------- Switch Between Sign Up / Sign In Links On Modal Window --------- */

signUpLink.addEventListener('click', switchSignUpLink);

signInLink.addEventListener('click', switchSignInLink);

/* ---------------------------- Scroll Animation ---------------------------- */

animateScroll();
