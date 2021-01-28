import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);
import htmlLogo from '../../images/web_logotypes/html.png';
import cssLogo from '../../images/web_logotypes/css.png';
import jsLogo from '../../images/web_logotypes/js.png';
import feLogo from '../../images/web_logotypes/fe.png';

export function sliders() {
    const packages = new Swiper(`.packages`, {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: false,
        navigation: {
            nextEl: '.packages__next',
            prevEl: '.packages__prev',
        },
        pagination: {
            el: '.packages__pagination',
            clickable: true
        },
        autoplay: {
            delay: 2000
        },
        on: {
            slideChange: () => {
                switch (packages.realIndex + 2) {
                    case packages.slides.length:
                        document.querySelector(".packages__next").classList.add("hide")
                        break;

                    case 2:
                        document.querySelector(".packages__prev").classList.add("hide")
                        document.querySelector(".packages__next").classList.remove("hide")
                        break;

                    default:
                        const arrows = document.querySelectorAll(".packages__arrow");
                        arrows.forEach(arrow => {
                            arrow.classList.remove("hide")
                        })
                }
            }
        }

    });

    const technoSlider = new Swiper('.techno__slider .swiper-container', {
        slidesPerView: 1,
        autoplay: {
            delay: 10000
        },
        pagination: {
            el: '.techno__loader-list',
            bulletClass: 'techno__mark',
            bulletActiveClass: 'techno__mark_active',
            clickable: true,
            renderBullet: function (index, className) {
                switch (index) {
                    case 0:
                        return `<div class="${className}"><img src="${htmlLogo}", alt="${htmlLogo}"></div>`;
                    case 1:
                        return `<div class="${className}"><img src="${cssLogo}", alt="${htmlLogo}"></div>`;
                    case 2:
                        return `<div class="${className}"><img src="${jsLogo}", alt="${htmlLogo}"></div>`;
                    case 3:
                        return `<div class="${className}"><img src="${feLogo}", alt="${htmlLogo}"></div>`;
                    default:
                        break;
                }
            }
        },
        on: {
            slideChange: () => {
                const filler = document.querySelector('.techno__filler');
                let bonus = 0;
                const idx = technoSlider.realIndex;

                if (idx === 1 || idx === 2) {
                    bonus = 20
                } else if (idx === 3) {
                    bonus = 40
                }

                filler.style.height = `${idx * 100 + idx * 40 + bonus}px`
            }
        }
    })
}
