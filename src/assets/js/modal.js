import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
const modalClose = document.querySelectorAll('[data-modal-close]');
const modals = document.querySelectorAll('.modal');
let id;

export const showModal = (modal) => {
    modal.classList.add('show');
    disableBodyScroll(modal);
}

const closeModal = () => {
    modals.forEach(modal => {
        modal.classList.remove('show');
        enableBodyScroll(modal);
    });
}

modalClose.forEach(btn => btn.addEventListener('click', closeModal));

document.addEventListener('click', (e) => {
    let innerTarget = e.target.closest('.modal__wrap');
    if (!innerTarget) {
        closeModal();
    }
}, true);

for (let i = 0; i < modalTriggers.length; i++) {
    modalTriggers[i].addEventListener('click', (e) => {
        e.preventDefault();
        id = modalTriggers[i].dataset.modalTrigger;
        const modal = document.getElementById(id);
        showModal(modal);
    });
}
