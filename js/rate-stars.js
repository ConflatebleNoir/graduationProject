'use strict';

const formRateOne = document.getElementById('form-rate-star-first');
const formRateTwo = document.getElementById('form-rate-star-second');
const formRateThree = document.getElementById('form-rate-star-third');
const formRateFour = document.getElementById('form-rate-star-fourth');
const formRateFive = document.getElementById('form-rate-star-fifth');

if (formRateOne) {
    formRateOne.addEventListener("click", function () {
        formRateOne.classList.toggle('active');
    });
};

if (formRateTwo) {
    formRateTwo.addEventListener("click", function () {
        formRateOne.classList.toggle('active');
        formRateTwo.classList.toggle('active');
    });
};

if (formRateThree) {
    formRateThree.addEventListener("click", function () {
        formRateOne.classList.toggle('active');
        formRateTwo.classList.toggle('active');
        formRateThree.classList.toggle('active');
    });
};

if (formRateFour) {
    formRateFour.addEventListener("click", function () {
        formRateOne.classList.toggle('active');
        formRateTwo.classList.toggle('active');
        formRateThree.classList.toggle('active');
        formRateFour.classList.toggle('active');
    });
};

if (formRateFive) {
    formRateFive.addEventListener("click", function () {
        formRateOne.classList.toggle('active');
        formRateTwo.classList.toggle('active');
        formRateThree.classList.toggle('active');
        formRateFour.classList.toggle('active');
        formRateFive.classList.toggle('active');
    });
};