'use strict';

const amenitiesHiderFirst = document.getElementById('hider_first');

if (amenitiesHiderFirst) {
    const amenitiesListFirst = document.getElementById('hided_list_first')

    amenitiesHiderFirst.addEventListener("click", function () {
        amenitiesHiderFirst.classList.toggle("hider__active");
        amenitiesListFirst.classList.toggle("hider__active");
    });
};

const amenitiesHiderSecond = document.getElementById('hider_second');

if (amenitiesHiderSecond) {
    const amenitiesListSecond = document.getElementById('hided_list_second')

    amenitiesHiderSecond.addEventListener("click", function () {
        amenitiesHiderSecond.classList.toggle("hider__active");
        amenitiesListSecond.classList.toggle("hider__active");
    });
};

const amenitiesHiderThird = document.getElementById('hider_third');

if (amenitiesHiderThird) {
    const amenitiesListThird = document.getElementById('hided_list_third')

    amenitiesHiderThird.addEventListener("click", function () {
        amenitiesHiderThird.classList.toggle("hider__active");
        amenitiesListThird.classList.toggle("hider__active");
    });
};

const amenitiesHiderFourth = document.getElementById('hider_fourth');

if (amenitiesHiderFourth) {
    const amenitiesListFourth = document.getElementById('hided_list_fourth')

    amenitiesHiderFourth.addEventListener("click", function () {
        amenitiesHiderFourth.classList.toggle("hider__active");
        amenitiesListFourth.classList.toggle("hider__active");
    });
};

const amenitiesHiderFifth = document.getElementById('hider_fifth');

if (amenitiesHiderFifth) {
    const amenitiesListFifth = document.getElementById('hided_list_fifth')

    amenitiesHiderFifth.addEventListener("click", function () {
        amenitiesHiderFifth.classList.toggle("hider__active");
        amenitiesListFifth.classList.toggle("hider__active");
    });
};