import '../css/common.css';
import '../css/feedback-form.css';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const refs = {
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
  form: document.querySelector('form'),
};

// refs.input.addEventListener('input', handleInputValue);
refs.form.addEventListener('input', handleInputValue);
refs.form.addEventListener('submit', handleFormSubmit);

populateTextarea();

const formData = {};

function handleInputValue(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));

  console.log(formData);
}

function populateTextarea(evt) {
  const parsedSettings = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  console.log(parsedSettings);

  if (parsedSettings) {
    refs.input.value = parsedSettings.email;
    refs.textarea.value = parsedSettings.message;
  }
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  console.log(refs.textarea.value);
  console.log(refs.input.value);

  if (
    refs.form.elements.email.value == '' ||
    refs.form.elements.message.value == ''
  ) {
    return;
  }

  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });
