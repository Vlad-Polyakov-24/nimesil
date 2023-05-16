function validateNumber() {
    const telInput = document.querySelectorAll('input[type="tel"]');

    for (let i = 0; i < telInput.length; i++) {
        telInput[i].addEventListener('input', function () {
            check(this);
        });
    }

    function check(input) {
        let value = input.value;
        const re = /[^0-9\-\(\)\+\ ]/gi;
        if (re.test(value)) {
            value = value.replace(re, '');
            input.value = value;
        }
    }
}

validateNumber();
