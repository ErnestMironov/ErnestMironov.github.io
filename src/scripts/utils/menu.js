import $ from 'jquery';
import 'vanilla-hamburger/twirl-burger.js';

export function menu() {

    $('twirl-burger').on('click', () => {
        if ($(".header__nav").hasClass("show")) {
            $(".header__nav").removeClass("show");
            document.querySelector("body").removeEventListener("click", closeOnclickPass)
        } else {
            $(".header__nav").addClass("show");
            setTimeout(() => {
                document.querySelector("body").addEventListener("click", closeOnclickPass)
            }, 10);
        }
    });

    function closeOnclickPass(e) {
        const nav = document.querySelector(".header__nav");

        if (!nav.contains(e.target)) {
            $('twirl-burger').click()
        }

    }

    function fixHeader() {

        if (window.pageYOffset > $('header').outerHeight()) {
            $('header').addClass("fixed")
        } else {
            $('header').removeClass("fixed")
        }
    }

    window.addEventListener("scroll", fixHeader)
}
