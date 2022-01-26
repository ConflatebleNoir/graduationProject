'use strict'

const registrationPopupOpener = document.getElementById('registration-login');
const registrationPopup = document.getElementById('registration-popup');

const bodyPopup = document.getElementById('registration_background');

if (registrationPopupOpener) {
    registrationPopupOpener.addEventListener("click", function () {
        registrationPopup.classList.add('active');
        bodyPopup.classList.add('active');
    });
};

bodyPopup.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(registrationPopup);

    if (!withinBoundaries) {
        registrationPopup.classList.toggle('active'); // скрываем элемент т к клик был за его пределами
        bodyPopup.classList.remove('active');
    };
});