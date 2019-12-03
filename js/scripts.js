
// Hamburger menu toggle

let navToggle = document.querySelector('.nav-toggle');
let mainNav = document.querySelector('.main-nav');
let hamburgerMenu = document.querySelector('.hamburger');

navToggle.addEventListener("click", () => {
    mainNav.classList.toggle('is-open');
    hamburgerMenu.classList.toggle('is-open');
});