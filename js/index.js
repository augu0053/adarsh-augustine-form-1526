let btn = document.getElementById('click-button');
let fname = document.getElementById('fname');
let em = document.getElementById('email');
let message = document.getElementById('message');
let patternEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let patternFullName = /^[a-zA-Z\s]+$/;

function validateForm() {
    let ui = {};
    let err = [];

    em.value = em.value.trim();
    fname.value = fname.value.trim();
    message.value = message.value.trim();

    if (fname.value) {
        if (patternFullName.test(fname.value)) {
            ui.user_full_name = fname.value;
        } else {
            err.push(' Please enter a valid full name! ');
        }
    } else {
        err.push(' Please enter your full name! ');
    }

    if (em.value) {
        if (patternEmail.test(em.value)) {
            ui.user_email = em.value;
        } else {
            err.push('Please enter a valid email!');
        }
    } else {
        err.push(' Please enter your email!');
    }

    if (message.value) {
        ui.message = message.value;
    } else {
        err.push('Please enter your message.');
    }

    console.log(ui);
    console.log(err);

}

btn.addEventListener('click', validateForm);