// main_slider script start

$(document).ready(function () {
    $('.slider_main').slick({
        arrows: true,
        dots: true,
        adavtiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        swipeTheshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
    });


    $('.slider_main__navigation_first').click(function (event) {
        $('.slider_main').slick('goTo', 0);
    });
    $('.slider_main__navigation_second').click(function (event) {
        $('.slider_main').slick('goTo', 1);
    });
    $('.slider_main__navigation_third').click(function (event) {
        $('.slider_main').slick('goTo', 2);
    });
    $('.slider_main__navigation_fourth').click(function (event) {
        $('.slider_main').slick('goTo', 3);
    });
});

// main_slider script end

// formats_slider_top script start

$(document).ready(function () {
    $('.formats__slider_bigtop').slick({
        arrows: true,
        dots: true,
        adavtiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        swipeTheshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
    });


    $('.slider__navigation_firsttop').click(function (event) {
        $('.formats__slider_bigtop').slick('goTo', 0);
    });
    $('.slider__navigation_secondtop').click(function (event) {
        $('.formats__slider_bigtop').slick('goTo', 1);
    });
    $('.slider__navigation_thirdtop').click(function (event) {
        $('.formats__slider_bigtop').slick('goTo', 2);
    });
});

// formats-slider_top script end

// formats-slider_bottom script start

$(document).ready(function () {
    $('.formats__slider_bigbottom').slick({
        arrows: true,
        dots: true,
        adavtiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        swipeTheshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
    });


    $('.slider__navigation_firstbottom').click(function (event) {
        $('.formats__slider_bigbottom').slick('goTo', 0);
    });
    $('.slider__navigation_secondbottom').click(function (event) {
        $('.formats__slider_bigbottom').slick('goTo', 1);
    });
    $('.slider__navigation_thirdbottom').click(function (event) {
        $('.formats__slider_bigbottom').slick('goTo', 2);
    });
});

// formats-slider_bottom script end

// feedbacks-slider script start

$(document).ready(function () {
    $('.feedbacks__slider').slick({
        arrows: true,
        dots: false,
        adavtiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: false,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        swipeTheshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1202,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 322,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        appendArrows: $('.wrapper__arrows'),
    });
});

// feedbacks-slider script end

// coworkings-slider script start

$(document).ready(function () {
    $('.coworkings__slider').slick({
        arrows: true,
        dots: false,
        adavtiveHeight: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: false,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        swipeTheshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        appendArrows: $('.wrapper__arrows-coworkings'),
        appendDots: $('.wrapper__arrows-coworkings'),
    });
});

// gallery slider

$(document).ready(function () {
    $('.item__gallery-slider').slick({
        arrows: false,
        dots: true,
        adavtiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        swipeTheshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
    });
});

// coworkings-slider script end