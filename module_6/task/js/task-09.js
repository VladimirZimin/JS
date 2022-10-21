/**
 Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

 Для генерации случайного цвета используй функцию getRandomHexColor.
 */

const buttonEl = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

buttonEl.addEventListener('click', handleChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handleChangeColor(e) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
  console.log(e.currentTarget.textContent);
  // console.log(document.body.style.backgroundColor);
  // console.log(getRandomHexColor());
}
