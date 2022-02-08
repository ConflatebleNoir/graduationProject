'use strict';

const unFavoriteHeartFirst = document.getElementById('heart-unfavorite-first');
const favoriteHeartFirst = document.getElementById('heart-favorite-first');

if (unFavoriteHeartFirst) {
    unFavoriteHeartFirst.addEventListener("click", function () {
        unFavoriteHeartFirst.classList.toggle('active');
        favoriteHeartFirst.classList.toggle('active');
    });
};

if (favoriteHeartFirst) {
    favoriteHeartFirst.addEventListener("click", function () {
        unFavoriteHeartFirst.classList.remove('active');
        favoriteHeartFirst.classList.remove('active');
    });
};

const unFavoriteHeartSecond = document.getElementById('heart-unfavorite-second');
const favoriteHeartSecond = document.getElementById('heart-favorite-second');

if (unFavoriteHeartSecond) {
    unFavoriteHeartSecond.addEventListener("click", function () {
        unFavoriteHeartSecond.classList.toggle('active');
        favoriteHeartSecond.classList.toggle('active');
    });
};

if (favoriteHeartSecond) {
    favoriteHeartSecond.addEventListener("click", function () {
        unFavoriteHeartSecond.classList.remove('active');
        favoriteHeartSecond.classList.remove('active');
    });
};

const unFavoriteHeartThird = document.getElementById('heart-unfavorite-third');
const favoriteHeartThird = document.getElementById('heart-favorite-third');

if (unFavoriteHeartThird) {
    unFavoriteHeartThird.addEventListener("click", function () {
        unFavoriteHeartThird.classList.toggle('active');
        favoriteHeartThird.classList.toggle('active');
    });
};

if (favoriteHeartThird) {
    favoriteHeartThird.addEventListener("click", function () {
        unFavoriteHeartThird.classList.remove('active');
        favoriteHeartThird.classList.remove('active');
    });
};

const unFavoriteHeartFourth = document.getElementById('heart-unfavorite-fourth');
const favoriteHeartFourth = document.getElementById('heart-favorite-fourth');

if (unFavoriteHeartFourth) {
    unFavoriteHeartFourth.addEventListener("click", function () {
        unFavoriteHeartFourth.classList.toggle('active');
        favoriteHeartFourth.classList.toggle('active');
    });
};

if (favoriteHeartFourth) {
    favoriteHeartFourth.addEventListener("click", function () {
        unFavoriteHeartFourth.classList.remove('active');
        favoriteHeartFourth.classList.remove('active');
    });
};

// main fav/unfav

const mainFav = document.getElementById('tools-heart-fav');
const mainUnfav = document.getElementById('tools-heart-unfav');
const mainHeartSwitcher = document.getElementById('tools-heart-switcher');

if (mainHeartSwitcher) {
    mainHeartSwitcher.addEventListener("click", function () {
        mainFav.classList.toggle('active');
        mainUnfav.classList.toggle('active');
    });
};