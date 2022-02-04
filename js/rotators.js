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

//feedback coworkings form rotator

const rotatorFeedbackCoworkingForm = document.getElementById('coworking-feedback-container');
const rotatorFeedbackCoworking = document.getElementById('rotator-item-holder-coworking');

if (rotatorFeedbackCoworkingForm) {
    rotatorFeedbackCoworkingForm.addEventListener("click", function () {
        rotatorFeedbackCoworking.classList.toggle('active');
    });
};

// feedback format form rotator

const rotatorFeedbackFormatForm = document.getElementById('format-feedback-container');
const rotatorFeedbackFormat = document.getElementById('rotator-item-holder-format');

if (rotatorFeedbackFormatForm) {
    rotatorFeedbackFormatForm.addEventListener("click", function () {
        rotatorFeedbackFormat.classList.toggle('active');
    });
};

// reserve format form rotator

const rotatorReserveFormatForm = document.getElementById('reserve-select-container');
const rotatorReserveFormat = document.getElementById('rotator-item-holder-reserve');

if (rotatorReserveFormatForm) {
    rotatorReserveFormatForm.addEventListener("click", function () {
        rotatorReserveFormat.classList.toggle('active');
    });
};