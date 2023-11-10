const form = document.getElementById('form');
const email = document.getElementById('emailField');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const successDisplay = inputControl.querySelector('.success');

    errorDisplay.innerText = message;
    successDisplay.innerText = '';
    
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const successDisplay = inputControl.querySelector('.success');

    errorDisplay.innerText = '';
    successDisplay.innerText = message;

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();

    if(emailValue === '') {
        setError(email, 'Oops! Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Oops! Please provide a valid email address');
    } else {
        setSuccess(email, "Success!");
    }
}
