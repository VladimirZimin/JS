import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { delay, step, amount },
  } = evt.currentTarget;

  let inputDelay = Number(delay.value);
  let inputAmount = Number(amount.value);
  let inputDelayStep = Number(step.value);

  // очищаем форму
  // refs.form.reset();

  for (let index = 1; index <= inputAmount; index += 1) {
    createPromise(index, inputDelay).then(onSuccess).catch(onError);
    inputDelay += inputDelayStep;
  }
}

// Функция вызываемая методом catch, когда промис возвращает reject
function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

// Функция вызываемая методом then, когда промис возвращает resolve
function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
