/**
 * An example ES6 module:
 */
import $ from 'jquery'
import WOW from 'wow.js'
import pasteSVG from './utils/pasteSvg'
import { theme } from './utils/theme';
import { menu } from './utils/menu';
import { sliders } from './utils/sliders';

menu();
theme();

$(document).ready(function () {
    pasteSVG()
    sliders()
    // window.onscroll = () => { scrollProgress() };

    // function scrollProgress() {
    //     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //     var scrolled = (winScroll / height) * 100;
    //     document.querySelector(".loader").style.width = scrolled + "%";
    // }

    new WOW().init();

})