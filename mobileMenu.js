/* Creating Mobile Menu JS only */

document.addEventListener('DOMContentLoaded', () => {

  /* let navMobile = document.createElement('nav');
navMobile.className = "navMobile";
navMobile.innerHTML = '<p>CreateElement example</p>';

let body = document.querySelector('body');

body.appendChild(navMobile); */

});

function closeMobile() {
  const Mobile = document.querySelector('.mobileMenu');

  Mobile.style.display = 'none';
}

function openMobile() {
  const Mobile = document.querySelector('.mobileMenu');
  Mobile.style.display = 'flex';
}

closeMobile();
openMobile();
