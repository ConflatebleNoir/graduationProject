'use strict';

const rotator = document.getElementById('rotator');
const rotatorItem = document.getElementById('rotator-item');

if (rotator) {
    rotator.addEventListener("click", function () {
        rotatorItem.classList.toggle('active');
    });
}