'use strict';

const formRateOne = document.getElementById('form-rate-star-first');
const formRateTwo = document.getElementById('form-rate-star-second');
const formRateThree = document.getElementById('form-rate-star-third');
const formRateFour = document.getElementById('form-rate-star-fourth');
const formRateFive = document.getElementById('form-rate-star-fifth');

const feedbackReset = document.getElementById('feedback-reset');

if (formRateOne) {
    formRateOne.addEventListener("click", function () {
        formRateOne.classList.add('active');
        formRateTwo.classList.remove('active');
        formRateThree.classList.remove('active');
        formRateFour.classList.remove('active');
        formRateFive.classList.remove('active');
    });
};

if (formRateTwo) {
    formRateTwo.addEventListener("click", function () {
        formRateOne.classList.add('active');
        formRateTwo.classList.add('active');
        formRateThree.classList.remove('active');
        formRateFour.classList.remove('active');
        formRateFive.classList.remove('active');
    });
};

if (formRateThree) {
    formRateThree.addEventListener("click", function () {
        formRateOne.classList.add('active');
        formRateTwo.classList.add('active');
        formRateThree.classList.add('active');
        formRateFour.classList.remove('active');
        formRateFive.classList.remove('active');
    });
};

if (formRateFour) {
    formRateFour.addEventListener("click", function () {
        formRateOne.classList.add('active');
        formRateTwo.classList.add('active');
        formRateThree.classList.add('active');
        formRateFour.classList.add('active');
        formRateFive.classList.remove('active');
    });
};

if (formRateFive) {
    formRateFive.addEventListener("click", function () {
        formRateOne.classList.add('active');
        formRateTwo.classList.add('active');
        formRateThree.classList.add('active');
        formRateFour.classList.add('active');
        formRateFive.classList.add('active');
    });
};

if (feedbackReset) {
    feedbackReset.addEventListener("click", function () {
        formRateOne.classList.remove('active');
        formRateTwo.classList.remove('active');
        formRateThree.classList.remove('active');
        formRateFour.classList.remove('active');
        formRateFive.classList.remove('active');
    });
};