'use strict';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
let timerId = null;
const DELAY = 1000;

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
  console.log('hello');

  refs.startBtn.setAttribute('disabled', 'disabled');
  refs.stopBtn.removeAttribute('disabled', 'disabled');

  timerId = setInterval(() => {
    refs.body.style.backgroundColor = `${getRandomHexColor()}`;
    console.log(`${getRandomHexColor()}`);
  }, DELAY);
}

function onStopClick() {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled', 'disabled');
  refs.stopBtn.setAttribute('disabled', 'disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
