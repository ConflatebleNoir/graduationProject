'use strict';

// swticher formats

const formatSwitcher = document.getElementById('format-switcher');

const formatsButtonFlex = document.getElementById('formats-button-flex');
const formatsButtonMeeting = document.getElementById('formats-button-meeting');

const formatsWrapperFlex = document.getElementById('formats-wrapper-flex');
const formatsWrapperMeeting = document.getElementById('formats-wrapper-meeting');

if (formatsButtonMeeting) {
    formatsButtonMeeting.addEventListener("click", function () {
        formatsButtonFlex.classList.remove('active');
        formatsButtonMeeting.classList.add('active');
        formatsWrapperFlex.classList.add('active');
        formatsWrapperMeeting.classList.add('active');
    });
};

if (formatsButtonFlex) {
    formatsButtonFlex.addEventListener("click", function () {
        formatsButtonMeeting.classList.remove('active');
        formatsButtonFlex.classList.add('active');
        formatsWrapperMeeting.classList.remove('active');
        formatsWrapperFlex.classList.remove('active');
    });
};

// deployer format list

const deployerList = document.getElementById('deployer');
const deployerPlus = document.getElementById('deployer-plus');
const deployerText = document.getElementById('deployer-text');

const deployedItem = document.getElementById('deployed__list');
const backDeployer = document.getElementById('deployer__back');

if (deployerList) {
    deployerList.addEventListener("click", function () {
        deployerList.classList.toggle('active');
        deployerPlus.classList.toggle('active');
        deployerText.classList.toggle('active');
        deployedItem.classList.toggle('active');
        backDeployer.classList.toggle('active');
    });
};

if (backDeployer) {
    backDeployer.addEventListener("click", function () {
        deployedItem.classList.toggle('active');
        deployerPlus.classList.toggle('active');
        deployerText.classList.toggle('active');
    });
};

// switcher mobile ver

const mobileMenuFormats = document.getElementById('mobile-menu-formats');
const mobileMenuFormatsChevron = document.getElementById('chevron-formats');

const mobileList = document.getElementById('formats-list-mobile');
const mobileListButtonFlex = document.getElementById('button-flex-mobile');
const mobileListButtonMeeting = document.getElementById('button-meeting-mobile');

if (mobileMenuFormats) {
    mobileMenuFormats.addEventListener("click", function () {
        mobileMenuFormatsChevron.classList.toggle('active');
        mobileList.classList.toggle('active');
        mobileListButtonFlex.classList.toggle('listed-button');
        mobileListButtonMeeting.classList.toggle('listed-button');
    });
}

if (mobileListButtonFlex) {
    mobileListButtonFlex.addEventListener("click", function () {
        mobileListButtonFlex.classList.add('active');
        mobileListButtonMeeting.classList.remove('active');
        mobileMenuFormats.classList.toggle('active');
        formatsWrapperFlex.classList.remove('active');
        formatsWrapperMeeting.classList.remove('active');
    });
};

if (mobileListButtonMeeting) {
    mobileListButtonMeeting.addEventListener("click", function () {
        mobileListButtonMeeting.classList.add('active');
        mobileListButtonFlex.classList.remove('active');
        formatsWrapperFlex.classList.add('active');
        formatsWrapperMeeting.classList.add('active');
    });
}