/**
 * Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
 *
 * - Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0
 * - Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
 * - Обновляй интерфейс новым значением переменной counterValue
 */

let counterValue = 0;
const step = 10;

const decrementButton = document.querySelector('button[data-action="decrement');
const incrementButton = document.querySelector('button[data-action="increment');
let value = document.querySelector('#value');

decrementButton.addEventListener('click', handleDecrement);
incrementButton.addEventListener('click', handleIncrement);

function handleDecrement() {
  value.textContent = counterValue -= step;
}

function handleIncrement() {
  value.textContent = counterValue += step;
}
