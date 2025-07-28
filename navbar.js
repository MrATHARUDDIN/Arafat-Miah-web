
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav__link');
const navClose = document.getElementById('nav-close');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

if (navClose && navMenu) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
}