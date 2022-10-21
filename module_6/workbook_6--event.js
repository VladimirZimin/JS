/**
 * Метод addEventListener()
 *
 * Добавляет слушателя события на элемент.
 *
 * функцию, которая будет вызвана, как только событие произошло.
 */
element.addEventListener(event, handler, options);

/**
 * event - имя события, строка, например "click".
 * handler - коллбэк-функция которая будет вызвана при наступлении события.
 * options - необязательный объект параметров с расширенными настройками.
 */

const button1 = document.querySelector('.my-button');

button.addEventListener('click', () => {
  console.log('Button was clicked');
});

// Для коллбэка можно (и желательно) использовать отдельную функцию и передавать на неё ссылку
const button = document.querySelector('.my-button');

const handleClick1 = () => {
  console.log('Button was clicked');
};

button.addEventListener('click', handleClick1);

// На одном элементе может быть сколько угодно обработчиков событий, даже событий одного типа. Коллбэк-функции будут вызываться в порядке регистрации их в коде.
const singleBtn = document.querySelector('#single');

const handleClick = () => {
  console.log('click event listener callback');
};

singleBtn.addEventListener('click', handleClick);

// ===============================================
const multiBtn = document.querySelector('#multiple');

const firstCallback = () => {
  console.log('First callback!');
};
const secondCallback = () => {
  console.log('Second callback!');
};
const thirdCallback = () => {
  console.log('Third callback!');
};

multiBtn.addEventListener('click', firstCallback);
multiBtn.addEventListener('click', secondCallback);
multiBtn.addEventListener('click', thirdCallback);

/**
 * Метод removeEventListener()
 *
 * Удаляет слушателя события с элемента. Аргументы аналогичны методу addEventListener()
 */
element.removeEventListener(event, handler, options);

// Для удаления нужно передать ссылку именно на ту коллбэк-функцию, которая была назначена в addEventListener(). В таком случае для коллбэков используют отдельную функцию и передают её по имени (ссылку)
const addListenerBtn = document.querySelector('[data-action="add"]');
const removeListenerBtn = document.querySelector('[data-action="remove"]');
const btn = document.querySelector('#btn');

const handleClick2 = () => {
  console.log('click event listener callback');
};

addListenerBtn.addEventListener('click', () => {
  btn.addEventListener('click', handleClick2);
  console.log('click event listener was added to btn');
});

removeListenerBtn.addEventListener('click', () => {
  btn.removeEventListener('click', handleClick2);
  console.log('click event listener was removed from btn');
});

/**
 * Ключевое слово this
 */

const mango = {
  username: 'Mango',
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

const btn1 = document.querySelector('.js-btn');

// ✅ Работает
mango.showUsername();

// ❌ this будет ссылаться на button если использовать showUsername как callback
btn1.addEventListener('click', mango.showUsername); // не работает

// ✅ Не забывайте привязывать контекст методов объекта
btn1.addEventListener('click', mango.showUsername.bind(mango));

/**
 * Объект события
 */

const handleClick3 = event => {
  console.log(event);
};

button.addEventListener('click', handleClick3);

// Параметр event это и есть обьект события, который автоматически передается первым аргументом при вызове коллбэк функции. Мы можем называть его как угодно, но обычно его объявляют как e, evt или event.

// event.type - тип события.
// event.currentTarget - элемент, на котором выполняется обработчик события.

const button2 = document.querySelector('.btn');

const handleClick4 = event => {
  console.log('event: ', event);
  console.log('event type: ', event.type);
  console.log('currentTarget: ', event.currentTarget);
};

button.addEventListener('click', handleClick4);

/**
 * Действия браузера по умолчанию
 *
 * Для отмены действия браузера по умолчанию на объекте события есть стандартный метод preventDefault()
 */
const form = document.querySelector('.register-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { username, password },
  } = event.currentTarget;
  console.log(username.value, password.value);
});

/**
 * События клавиатуры
 */

// Есть два основных события клавиатуры: keydown и keyup
document.addEventListener('keydown', event => {
  console.log('Keydown: ', event);
});

document.addEventListener('keyup', event => {
  console.log('Keyup: ', event);
});

// Свойства key и code

// Свойство key возвращает символ сгенерированный нажатием клавиши
// Свойство code возвращает код физической клавиши на клавиатуре и не изменяется между языками
document.addEventListener('keydown', event => {
  console.log('key: ', event.key);
  console.log('code: ', event.code);
});

/**
 * Клавиши-модифкаторы
 *
 * Для обработки комбинации клавиш, например Ctrl + s или любую другую,
 * на объекте события есть свойства ctrlKey, altKey, shiftkey и metaKey
 */
document.addEventListener('keydown', event => {
  event.preventDefault();

  if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
    console.log('«Ctrl + s» or «Command + s» combo');
  }
});

/**
 * События элементов форм
 */

/**
 * Событие submit
 * Отправка формы происходит при клике по кнопке с атрибутом type="submit"
 *
 * Сабмит формы перезагружает страницу
 * отменять действие по умолчанию методом preventDefault()
 */
const form1 = document.querySelector('.form');

form1.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password },
  } = event.currentTarget;

  if (login.value === '' || password.value === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

/**
 * Событие change
 * ДЛЯ РАДИО И ЧЕКБОКСОВ
 * Происходит после изменения элемента формы
 */
const select = document.querySelector('.pizza-select');
const textOutput = document.querySelector('.text-output');
const valueOutput = document.querySelector('.value-output');

setOutput();

select.addEventListener('change', setOutput);

function setOutput() {
  const selectedOptionValue = select.value;
  const selectedOptionIndex = select.selectedIndex;
  const selectedOptionText = select.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}

/**
 * Событие input
 * ДЛЯ ТЕКСТОВЫХ ПОЛЕЙ
 *
 * Происходит только на текстовых полях и textarea
 * создаётся каждый раз при изменении значения элемента
 */
const textInput = document.querySelector('.text-input');
const output = document.querySelector('.output');

textInput.addEventListener('input', event => {
  output.textContent = event.currentTarget.value;
});

/**
 * События focus и blur
 *
 * Элемент получает фокус при клике мыши или переходе клавишей Tab
 * При получении фокуса мы можем подгрузить данные для автозаполнения, начать отслеживать изменения
 * При потере фокуса - проверить введённые данные
 */
const textInput1 = document.querySelector('.text-input');
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener('click', () => {
  textInput1.focus();
});

removeFocusBtn.addEventListener('click', () => {
  textInput1.blur();
});

textInput.addEventListener('focus', () => {
  textInput1.value = 'This input has focus';
});

textInput.addEventListener('blur', () => {
  textInput1.value = '';
});
