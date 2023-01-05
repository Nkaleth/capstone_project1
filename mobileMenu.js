/* Creating Mobile Menu JS only*/

document.addEventListener('DOMContentLoaded', () => {

/*let navMobile = document.createElement('nav');
navMobile.className = "navMobile";
navMobile.innerHTML = '<p>CreateElement example</p>';

let body = document.querySelector('body');

body.appendChild(navMobile);*/

});

function closeMobile(){
    var Mobile = document.querySelector('.mobileMenu');

    Mobile.style.display = 'none';
}

function openMobile(){
    var Mobile = document.querySelector('.mobileMenu');
    Mobile.style.display = 'flex';
}
