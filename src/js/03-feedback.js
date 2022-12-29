const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener(
  'input',
  throttle(() => {
    let storedInput = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(storedInput));
  }, 500)
);

const storedOutput = JSON.parse(localStorage.getItem('feedback-form-state'));

if (localStorage.getItem('feedback-form-state') === null) {
  email.value = '';
  message.value = '';
} else {
  email.value = storedOutput.email;
  message.value = storedOutput.message;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  email.value = '';
  message.value = '';
  localStorage.removeItem('feedback-form-state');
});
