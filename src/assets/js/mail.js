import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

document.addEventListener('DOMContentLoaded', () => {
   const forms =  document.querySelectorAll('[data-form]');
   const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
   const modalClose = document.querySelectorAll('[data-modal-close]');
   const modals = document.querySelectorAll('.modal');
   let id;

    const showModal = (modal) => {
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
        modalTriggers[i].addEventListener('click', () => {
            id = modalTriggers[i].dataset.modalTrigger;
            const modal = document.getElementById(id);
            showModal(modal);
        });
    }

   forms.forEach((form) => {
        form.addEventListener('submit', formSend);
        const formParent = form.parentNode;

        async function formSend(e) {
            e.preventDefault();
            formParent.classList.add('sending');

            let formData = new FormData(form);
            let response = await fetch('mail.php', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                formParent.classList.remove('sending');
                showModal(document.getElementById('modal_01'));
                form.reset();
            } else {
                alert('Error');
                formParent.classList.remove('sending');
                form.reset();
            }
        }
    });
});
