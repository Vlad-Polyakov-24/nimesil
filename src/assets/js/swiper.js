import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const swipers = {
    'doctors' : document.querySelector('.swiper.swiper--doctors'),
    'feedback' : document.querySelector('.swiper.swiper--feedback'),
};

const swiper_01 = new Swiper('.swiper.swiper--doctors', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next.swiper-button-next--doctors',
        prevEl: '.swiper-button-prev.swiper-button-prev--doctors',
    },
});

const swiper_02 = new Swiper('.swiper.swiper--feedback', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next.swiper-button-next--feedback',
        prevEl: '.swiper-button-prev.swiper-button-prev--feedback',
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
        },
        1023: {
            slidesPerView: 3,
        },
    }
});

