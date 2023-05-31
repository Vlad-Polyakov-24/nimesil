import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const header = document.querySelector('#header');

function setBg() {
    if (!header) return;
    const headerHeight = header.clientHeight;

    const changeBg = () => {
        if (window.scrollY > headerHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.onload = () => changeBg();
    window.addEventListener('scroll', changeBg);
}

function menu() {
    const hamburger = header.querySelector('[data-hamburger]');
    if (!hamburger) return;
    const nav = header.querySelector('[data-nav]');
    const navLinks = nav.querySelectorAll('.nav__link');
    let state = false;

    const showMenu = () => {
        hamburger.classList.add('active');
        nav.classList.add('show');
        state = true;
        disableBodyScroll(nav);
    }

    const hideMenu = () => {
        hamburger.classList.remove('active');
        nav.classList.remove('show');
        state = false;
        enableBodyScroll(nav);
    }

    hamburger.addEventListener('click', () => {
        state === true ? hideMenu() : showMenu();
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', hideMenu);
    });
}

setBg();
menu();



