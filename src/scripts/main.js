/**
 * An example ES6 module:
 */
import $ from 'jquery'
import WOW from 'wow.js'
import Swiper, { Autoplay, Navigation, EffectFade } from 'swiper';
Swiper.use([Autoplay, Navigation, EffectFade]);
import pasteSVG from './utils/pasteSvg'
import { theme } from './utils/theme';

import 'vanilla-hamburger/twirl-burger.js';

$('twirl-burger').on('click', () => {
    $(".header__nav").toggleClass("show")
})

theme();

$(document).ready(function () {
    pasteSVG()
    const swiper = new Swiper(`.welcome__slider .swiper-container`, {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.welcome__nav-item_next',
            prevEl: '.welcome__nav-item_prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 2000
        },
    });

    // window.onscroll = () => { scrollProgress() };

    // function scrollProgress() {
    //     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //     var scrolled = (winScroll / height) * 100;
    //     document.querySelector(".loader").style.width = scrolled + "%";
    // }

    new WOW().init();

})