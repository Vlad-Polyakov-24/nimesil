import { showModal } from './modal';

document.addEventListener('DOMContentLoaded', () => {
   const forms =  document.querySelectorAll('[data-form]');

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
