'use strict';

// footer form rotator

const rotatorFooterForm = document.getElementById('rotator');
const rotatorItemFooterForm = document.getElementById('rotator-item');

if (rotatorFooterForm) {
    rotatorFooterForm.addEventListener("click", function () {
        rotatorItemFooterForm.classList.toggle('active');
    });
};

// registration-popup rotator

const rotatorRegistrationForm = document.getElementById('rotator-registration-form');
const rotatorItemRegistrationForm = document.getElementById('rotator-item-registration');

if (rotatorRegistrationForm) {
    rotatorRegistrationForm.addEventListener("click", function () {
        rotatorItemRegistrationForm.classList.toggle('active');
    });
};