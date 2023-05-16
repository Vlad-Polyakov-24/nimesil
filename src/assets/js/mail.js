import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


document.addEventListener('DOMContentLoaded', () => {
   const forms =  document.querySelectorAll('[data-form]');
   const modal = document.querySelector('[data-modal]');
   const modalClose = modal.querySelector('[data-modal-close]');

   const showModal = () => {
       modal.classList.add('show');
       disableBodyScroll(modal);
   }

   const hideModal = () => {
       modal.classList.remove('show');
       enableBodyScroll(modal);
   }

   modal.addEventListener('click', (e) => {
        const target = e.target.closest('.modal__inner');

        if (!target) {
            hideModal();
        }
    });

   modalClose.addEventListener('click', hideModal);

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
                showModal();
                form.reset();
            } else {
                alert('Error');
                formParent.classList.remove('sending');
                form.reset();
            }
        }
    });
});
