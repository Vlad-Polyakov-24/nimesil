function setCountdown() {
    let deadline;

    if (localStorage['timer']) {
        deadline = new Date(localStorage['timer']);
        initializeClock(deadline);
    } else {
        deadline = new Date(Date.parse(new Date()) + (60 - 15) * 60 * 1000);
        initializeClock(deadline);
        localStorage['timer'] = new Date(deadline).toISOString();
    }

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date());
        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(endTime) {
        const clock = document.querySelectorAll('[data-countdown]');


        for (let i = 0; i < clock.length; i++) {
            const hoursSpan = clock[i].querySelector('[data-timer-hours]');
            const minutesSpan = clock[i].querySelector('[data-timer-minutes]');
            const secondsSpan = clock[i].querySelector('[data-timer-seconds]');

            function updateClock() {
                const t = getTimeRemaining(endTime);

                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    const deadline = new Date(Date.parse(new Date()) + (60 - 15) * 60 * 1000);
                    initializeClock(deadline);
                    localStorage.removeItem('timer');
                }
            }

            updateClock();

            const timeInterval = setInterval(updateClock, 1000);
        }
    }
}

setCountdown();
