'use strict';

const menuBurger = document.getElementById('burger');
const headerMenu = document.getElementById('menu');
const headerMenuBack = document.getElementById('menu-back');

if (menuBurger) {
    menuBurger.addEventListener("click", function () {
        menuBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        headerMenuBack.classList.toggle('active');
    });
};

if (headerMenuBack) {
    headerMenuBack.addEventListener("click", function () {
        menuBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        headerMenuBack.classList.toggle('active');
    });
}