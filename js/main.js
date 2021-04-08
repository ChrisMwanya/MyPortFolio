// menu humburger

const humburger = document.getElementById('humburger');
const menuNav = document.getElementById('menu-line');
const home = document.getElementById('home');
const about = document.getElementById('about')
const work = document.getElementById('works')
const contact = document.getElementById('contacts')
const cv = document.getElementById('cv')

humburger.addEventListener('click', () => {
    menuNav.classList.toggle('show');
    menuNav.classList.toggle('header--column-centered');
})




home.addEventListener('click', function () {
    menuNav.classList.remove('show');

})

about.addEventListener('click', function () {
    menuNav.classList.remove('show');
})

work.addEventListener('click', function () {
    menuNav.classList.remove('show');
})

contact.addEventListener('click', function () {
    menuNav.classList.remove('show');
})

cv.addEventListener('click', function () {
    menuNav.classList.remove('show');
})
