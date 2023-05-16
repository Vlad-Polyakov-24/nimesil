function accordion() {
    const accordions = document.querySelectorAll('[data-accordion]');

    const open = (content, item) => {
        item.classList.add('active');
        content.addEventListener('transitionend', () => (content.style.cssText = 'height: auto; overflow:initial'), {
            once: true,
        });
        content.style.setProperty('height', `${content.scrollHeight}px`);
        content.dataset.accordionContent = 'true';
    };

    const close = (content, item) => {
        item.classList.remove('active');
        content.style.setProperty('height', `${content.scrollHeight}px`);
        requestAnimationFrame(() => content.style.setProperty('height', '0px'));
        requestAnimationFrame(() => content.style.setProperty('overflow', 'hidden'));
        content.dataset.accordionContent = 'false';
    };

    accordions.forEach((accordion) => {
        const triggers = accordion.querySelectorAll('[data-accordion-trigger]');
        const accordionContent = accordion.querySelectorAll('[data-accordion-content]');

        triggers.forEach((trigger, index) =>

            trigger.addEventListener('click', () => {
                const item = trigger.parentNode;
                const contentClientHeight = accordionContent[index].clientHeight;
                accordionContent[index].style.transition = '.4s';

                contentClientHeight === 0
                    ? open(accordionContent[index], item)
                    : close(accordionContent[index], item);
            })
        );
    });
}

accordion();
