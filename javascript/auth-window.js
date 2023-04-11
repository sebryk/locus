export function authWindow() {
  const authWindow = document.querySelector('.modal-signin');
  const menuBtn = document.querySelector('.menu__btn');
  const menu = document.querySelector('.menu__list');
  const burger = document.querySelector('.icon');
  const signInMenu = document.querySelector('.modal-signin__wrap');
  const signUpMenu = document.querySelector('.modal-signup__wrap');
  const signInClose = document.querySelector('.modal-signin__close');
  const signUpClose = document.querySelector('.modal-signup__close');
  const signUpLink = document.querySelector('.modal-signin__link-text');
  const signInLink = document.querySelector('.modal-signup__link-text');

  function openAuthModal() {
    authWindow.style.display = 'flex';
    menu.classList.remove('menu__active');
    burger.classList.remove('icon--active');
    document.body.classList.add('body__lock');
    window.scrollTo(0, 0);
    setTimeout(() => {
      authWindow.classList.add('modal-signin--active');
    }, 100);
  }

  /* ------------------------ Close Sign In Modal Window  ----------------------- */

  function closeSignInModal() {
    setTimeout(() => {
      authWindow.style.display = 'none';
    }, 200);
    document.body.classList.remove('body__lock');
    authWindow.classList.remove('modal-signin--active');
  }

  /* ------------------------ Close Sign Up Modal Window  ----------------------- */

  function closeSignUpModal() {
    setTimeout(() => {
      authWindow.style.display = 'none';
      signInMenu.style.display = 'block';
      signUpMenu.style.display = 'none';
    }, 200);
    authWindow.classList.remove('modal-signin--active');
    document.body.classList.remove('body__lock');
  }

  /* -------------- Switch Between Sign Up / Sign In Modal Window ------------- */

  function closeAuthModal(e) {
    if (e.target.classList.contains('modal-signin')) {
      setTimeout(() => {
        authWindow.style.display = 'none';
      }, 200);
      authWindow.classList.remove('modal-signin--active');
      document.body.classList.remove('body__lock');
      signInMenu.style.display = 'block';
      signUpMenu.style.display = 'none';
    }
  }

  /* --------- Switch Between Sign Up / Sign In Links On Modal Window --------- */

  function switchSignUpLink() {
    signInMenu.style.display = 'none';
    signUpMenu.style.display = 'block';
  }

  function switchSignInLink() {
    signInMenu.style.display = 'block';
    signUpMenu.style.display = 'none';
  }

  menuBtn.addEventListener('click', openAuthModal);

  signInClose.addEventListener('click', closeSignInModal);

  signUpClose.addEventListener('click', closeSignUpModal);

  document.addEventListener('click', closeAuthModal);

  signUpLink.addEventListener('click', switchSignUpLink);

  signInLink.addEventListener('click', switchSignInLink);
}
