'use strict';

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.footer__scrollup').fadeIn();
        }
        else {
            $('.footer__scrollup').fadeOut();
        }
    });
    $('.footer__scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});