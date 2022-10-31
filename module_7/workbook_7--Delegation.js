/**
 * Распространение событий
 *
 * - Capturing phase (погружение)
 * - Target phase (таргетинг)
 * - Bubbling phase (всплытие)
 */

/**
 * Всплытие событий (event bubbling)+
 *
 * Всплытие гарантирует, что клик по #descendant вызовет обработчик клика, если он есть, сначала на самом #descendant, затем на элементе #child, далее на элементе #parent и так далее вверх по цепочке предков до window
 */

<div id="parent">
  Parent
  <div id="child">
    Child
    <div id="descendant">Descendant</div>
  </div>
</div>;

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const descendant = document.querySelector('#descendant');

parent.addEventListener('click', () => {
  alert('Parent click handler');
});

child.addEventListener('click', () => {
  alert('Child click handler');
});

descendant.addEventListener('click', () => {
  alert('Descendant click handler');
});

// Всплывают почти все события, например события focus и blur не всплывают, поэтому сущестуют их всплывающие аналоги - focusin и focusout.

/**
 * Свойство event.target
 *
 * - event.target - это ссылка на исходный элемент на котором произошло событие, в процессе всплытия он неизменен.Самый вложеный эллемент. Элемент на которой нажали
 *
 * - event.currentTarget - это ссылка текущий элемент до которого дошло всплытие, на нём сейчас выполняется обработчик события.Элемент на котором висит обработчик событий
 */

const parent2 = document.querySelector('#parent');

parent.addEventListener('click', event => {
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
});

/**
 * Прекращение всплытия stopPropagation()
 *
 * Обычно событие будет всплывать наверх до элемента window, вызывая все обработчики на своем пути. Но любой промежуточный обработчик может решить, что событие полностью обработано и остановить всплытие вызвав метод stopPropagation()
 */

const parent1 = document.querySelector('#parent');
const child1 = document.querySelector('#child');
const descendant1 = document.querySelector('#descendant');

parent.addEventListener('click', () => {
  alert(
    'Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!',
  );
});

child.addEventListener('click', () => {
  alert(
    'Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!',
  );
});

descendant.addEventListener('click', event => {
  event.stopPropagation();
  alert('Descendant click handler');
});

// метод stopPropagation() только препятствует продвижению события дальше. Если необходимо полностью остановить обработку события, используется метод stopImmediatePropagation(). Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе.

/**
 * Делегирование событий (event delegation)
 *
 * Когда нужно обработать для всех одинаковое событие
 * добавляется один обработчик на их общего предка,
 *
 * Используя свойство event.target можно получить ссылку на целевой элемент, понять на каком именно потомке произошло событие и обработать его.
 */

/**
 * делегирование сводится к трём простым шагам.
 *
 * 1. Определить общего предка группы элементов для отслеживания событий.
 *
 * 2. Зарегистрировать на элементе-предке обработчик события которое мы хотим отлавливать от группы элементов.
 *
 * 3. В обработчике использовать event.target для выбора целевого элемента.
 */

// ПРИМЕР Палитра цветов

// повесим один слушатель на общего предка div.color-palette. В обработчике события клика используем event.target, чтобы получить элемент на котором произошло событие и связанный с ним цвет, который будем хранить в атрибуте data-color.

<div>
  <p class="output">Selected color: -</p>
  <div class="color-palette"></div>
</div>;

const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

colorPalette.addEventListener('click', selectColor);

// This is where delegation «magic» happens
// Обязательно проверяем цель клика, чтобы это точно была кнопка, мы не хотим обрабатывать клики в элемент-контейнер. Для проверки типа элемента используем свойство nodeName
function selectColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRangomColor();
    const item = document.createElement('button');
    item.type = 'button';
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add('item');
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
