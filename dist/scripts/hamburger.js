// From https://codepen.io/alexnewman/pen/ByePod
let isActive = false;
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', () => {
  if (isActive) {
    hamburgerMenu.classList.remove('active');
    body.classList.remove('hamburger-open');
  } else {
    hamburgerMenu.classList.add('active');
    body.classList.add('hamburger-open');
  }

  isActive = !isActive;
});
