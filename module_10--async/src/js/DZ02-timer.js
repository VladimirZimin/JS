import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  calendarsInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysValue: document.querySelector('[data-days]'),
  hoursValue: document.querySelector('[data-hours]'),
  minutesValue: document.querySelector('[data-minutes]'),
  secondsValue: document.querySelector('[data-seconds]'),
  alert: document.querySelector('.ny-js'),
};

refs.startBtn.addEventListener('click', startTimer);
refs.startBtn.setAttribute('disabled', 'disabled');

const DELAY = 1000;
let msSelected = null;
let idInterval = null;

refs.alert.classList.remove('ny-js');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    refs.alert.classList.remove('ny-js');
    msSelected = selectedDates[0];

    refs.startBtn.setAttribute('disabled', 'disabled');

    if (selectedDates[0] <= fp.config.now) {
      refs.startBtn.setAttribute('disabled', 'disabled');
      return Notify.failure('Please choose a date in the future');
    }

    refs.startBtn.removeAttribute('disabled', 'disabled');
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const fp = flatpickr(refs.calendarsInput, options);

function updateClockface({ days, hours, minutes, seconds }) {
  refs.daysValue.textContent = days;
  refs.hoursValue.textContent = addLeadingZero(hours);
  refs.minutesValue.textContent = addLeadingZero(minutes);
  refs.secondsValue.textContent = addLeadingZero(seconds);
}

function startTimer() {
  refs.calendarsInput.setAttribute('disabled', 'disabled');
  idInterval = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = msSelected.getTime() - currentTime;

    if (deltaTime <= 0) {
      clearTimeout(idInterval);
      refs.alert.classList.add('ny-js');
      refs.calendarsInput.removeAttribute('disabled', 'disabled');
      return;
    }

    const time = convertMs(deltaTime);

    updateClockface(time);
  }, DELAY);
}
