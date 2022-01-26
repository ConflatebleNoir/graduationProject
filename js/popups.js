'use strict'

// registration popup logic

const registrationPopupOpener = document.getElementById('registration-login');
const registrationPopup = document.getElementById('registration-popup');
const registrationBack = document.getElementById('registration-back');

const registrationForm = document.getElementById('registration-container');
const loginForm = document.getElementById('login-container');

const switchToLogin = document.getElementById('popup-switcher-registration');
const switchToRegistration = document.getElementById('popup-switcher-login');

const bodyPopup = document.getElementById('registration_background');

if (registrationPopupOpener) {
    registrationPopupOpener.addEventListener("click", function () {
        registrationPopup.classList.add('active');
        bodyPopup.classList.add('active');
        body.classList.add('lock');
    });
};

if (registrationBack) {
    registrationBack.addEventListener("click", function () {
        registrationPopup.classList.remove('active');
        bodyPopup.classList.remove('active');
        body.classList.remove('lock');
    });
};

bodyPopup.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(registrationPopup);

    if (!withinBoundaries) {
        registrationPopup.classList.toggle('active'); // скрываем элемент т к клик был за его пределами
        bodyPopup.classList.remove('active');
        body.classList.remove('lock');
    };
});

if (switchToLogin) {
    switchToLogin.addEventListener("click", function () {
        registrationForm.classList.add('hide');
        loginForm.classList.add('active');
    });
};

if (switchToRegistration) {
    switchToRegistration.addEventListener("click", function () {
        registrationForm.classList.remove('hide');
        loginForm.classList.remove('active');
    });
};

// feedback popup

const feedbackPopupOpener = document.getElementById('feedback-popup-opener');
const feedbackPopup = document.getElementById('feedback-popup');
const feedbackBack = document.getElementById('feedback-back');

const feedbackBackground = document.getElementById('feedback_background');

if (feedbackPopupOpener) {
    feedbackPopupOpener.addEventListener("click", function () {
        feedbackPopup.classList.add('active');
        feedbackBackground.classList.add('active');
        body.classList.add('lock');
    });
};

if (feedbackBack) {
    feedbackBack.addEventListener("click", function () {
        feedbackPopup.classList.remove('active');
        feedbackBackground.classList.remove('active');
        body.classList.remove('lock');
    });
};

feedbackBackground.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(feedbackPopup);

    if (!withinBoundaries) {
        feedbackPopup.classList.toggle('active'); // скрываем элемент т к клик был за его пределами
        feedbackBackground.classList.remove('active');
        body.classList.remove('lock');
    };
});