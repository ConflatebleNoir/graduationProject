'use strict';

const menuBurger = document.getElementById('burger');
const headerMenu = document.getElementById('menu');
const headerMenuBack = document.getElementById('menu-back');

const body = document.getElementById('body');
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

if (menuBurger) {
    menuBurger.addEventListener("click", function () {
        menuBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        headerMenuBack.classList.toggle('active');
        body.classList.toggle('lock');
        header.classList.toggle('active');
        main.classList.toggle('active');
        footer.classList.toggle('active');
    });
};

if (headerMenuBack) {
    headerMenuBack.addEventListener("click", function () {
        menuBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        headerMenuBack.classList.toggle('active');
        body.classList.toggle('lock');
        header.classList.toggle('active');
        main.classList.toggle('active');
        footer.classList.toggle('active');
    });
}