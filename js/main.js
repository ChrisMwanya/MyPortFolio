// menu humburger

const humburger = document.getElementById('humburger');
const menuNav = document.getElementById('menu-line');

humburger.addEventListener('click', () => {
    menuNav.classList.toggle('header--column-centered');
})
