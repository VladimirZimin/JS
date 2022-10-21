/**
 Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

 Cоздай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

1. Размеры самого первого <div> - 30px на 30px.
2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
3. Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
 */

const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const inputNumberEl = document.querySelector('input');

buttonCreate.addEventListener('click', handleCreateBoxes);
buttonDestroy.addEventListener('click', handleRemoveBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handleCreateBoxes() {
  createBoxes(inputNumberEl.value);
}

function handleRemoveBoxes() {
  boxesEl.innerHTML = '';
}

function createBoxes(amount) {
  let divEl;
  let width = 20;
  let height = 20;

  for (let i = 0; i < amount; i++) {
    divEl = document.createElement('div');
    divEl.classList.add('box-item');
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    divEl.style.width = `${(width += 10)}px`;
    divEl.style.height = `${(height += 10)}px`;
    divEl.style.borderRadius = 50 + '%';

    boxesEl.append(divEl);
  }
}
