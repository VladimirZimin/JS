// import axios from 'axios';
// import getRefs from './js/get-refs';
import './sass/main.scss';

const BASE_URL = 'https://test-5e295-default-rtdb.firebaseio.com/';
const refs = getRefs();

// refs.form.addEventListener('submit', onSubmit);

// ======================= POST =========================

/******* FETCH *******
function onSubmit(evt) {
  evt.preventDefault();

  const value = evt.target.elements.text.value;
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  };

  fetch(`${BASE_URL}/test.json`, options);
  refs.form.reset();
}
 */

/******* AXIOS *******
function onSubmit(evt) {
  evt.preventDefault();

  const value = evt.target.elements.text.value;

  axios.post(`${BASE_URL}/test.json`, { value });
  refs.form.reset();
}
 */

/******* AXIOS + ASYNC / AWAIT *******
async function onSubmit(evt) {
  evt.preventDefault();

  const value = evt.target.elements.text.value;

  try {
    const result = await axios.post(`${BASE_URL}/test.json`, { value });
  } catch (error) {
    throw error;
  } finally {
    console.log('All Ok');
  }

  refs.form.reset();
}
 */

/******* ASYNC / AWAIT *******
async function onSubmit(evt) {
  evt.preventDefault();

  const value = evt.target.elements.text.value;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  };

  const response = await fetch(`${BASE_URL}/test.json`, options);
  const newText = await response.json();

  refs.form.reset();

  return newText;
}
 */

// ======================= GET ==========================
/**
async function getText() {
  const response = await axios.get(`${BASE_URL}/test.json`);
 */

// ======================= PATH =========================
// axios.patch(`${BASE_URL}/test/${id}.json`, text);

// ======================= PUT ==========================
// ======================= DELETE =======================
/**
async function deleteText(id) {
  await axios.delete(`${BASE_URL}/${id}.json`);
}
 */

//=====================================================================
