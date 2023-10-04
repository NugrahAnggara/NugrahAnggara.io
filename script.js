const menuToogle = document.querySelector('.menu-toogle input');
const nav = document.querySelector("#menu");

menuToogle.addEventListener('click',function() {
    nav.classList.toggle('slide');
});