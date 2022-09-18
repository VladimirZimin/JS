'use strict';

/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией *   высшего порядка»
 */

const fnA = function (message, callback) {
  console.log(message);
  callback('word');
};

const fnB = function (message) {
  console.log('Лог при вызове fnB', message);
};

fnA('Hello', fnB);

// ==============================================

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);

  //return result;
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

doMath(2, 3, add);
doMath(10, 4, sub);

// ==============================================
// Отложенный вызов: регистрация событий

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
  console.log('Клик по кнопке ' + Date.now());
};

buttonRef.addEventListener('click', handleBtnClick);

// ==============================================
// Отложенный вызов: геолокация
// Метод geolocation ничего не возвращает, он просит дать функцию которую он вернет от результата

const onGetPositionSuccess = function (position) {
  console.log('Это вызов onGetPositionSuccess');
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log('Это вызов onGetPositionError');
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError,
);

// ==============================================
// Отложенный вызов: выполнение с интервалом

const callback = function () {
  console.log('Через 2 секунды внутри колбека в таймауте');
};

console.log('В коде перед таймаутом');
setTimeout(callback, 2000); // запускает callback через 2000 милесекунд
console.log('В коде после таймаута');

// ==============================================
// Работа в backend
// Отложенный вызов: http-запрос
// - API URL: https://pokeapi.co/api/v2/pokemon

const onRequestSuccess = function (response) {
  console.log('Вызов функции onRequestSuccess после успешного ответа бекенда');
  console.log(response);
};

fetch('https://pokeapi.co/api/v2/pokemon')
  .then(res => res.json())
  .then(onRequestSuccess);

/**
 *
 * Инлайн колбэки
 * объявить прямо при вызове функции
 *
 */

function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

// Передаём инлайн функцию greet как колбэк
registerGuest('Манго', function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
});

// Передаём инлайн функцию notify как колбэк
registerGuest('Поли', function notify(name) {
  console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
});

/**
 *
 * Несколько колбэков
 *
 */

function processCall(recipient, onAvailable, onNotAvailable) {
  // Имитируем доступность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Соединяем с ${name}, ожидайте...`);
  // Логика принятия звонка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
  // Логика активации автоответчика
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступен, записываем голограмму.`);
  // Логика записи голограммы
}

processCall('Манго', takeCall, activateAnsweringMachine);
processCall('Поли', takeCall, leaveHoloMessage);

/**
 *
 * Абстрагирование повторения
 *
 */

function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log('Logging value: ', value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Передаем printValue как callback-функцию
repeat(3, printValue);
// 0
// 1
// 2

// Передаем prettyPrint как callback-функцию
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2

/*******************************************************************************
 *
 *
 * Замыкание (closure)
 *
 *
 */
/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 *********************************************************************************/
const fnC = function (parameter) {
  const innerVariable = 'значение внутренней переменной функции fnA';

  const innerFunction = function () {
    console.log(parameter);
    console.log(innerVariable);
    console.log('Это вызов innerFunction');
  };

  return innerFunction;
};

const fnV = fnC(555);

fnV();

console.log(fnV);

// =================================================
const createCounter = function () {
  /*
   * Локальная переменная privateValue доступна только в замыкании.
   * Получить к ней доступ во внешнем коде невозможно.
   */
  let privateValue = 0;

  const increment = function () {
    privateValue += 1;
    console.log(privateValue);
  };

  return {
    increment,
  };
};

const counterA = createCounter();
counterA.increment(); // 1
counterA.increment(); // 2

const counterB = createCounter();
counterB.increment(); // 1
counterB.increment(); // 2
counterB.increment(); // 3

// ===========================================================
// Напишем функцию приготовления поваром некого блюда.

// const makeDish = function (shefName, dish) {
// console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish('Mango', 'apple pie'); // Mango is cooking apple pie
// makeDish('Mango', 'fish'); // Mango is cooking fish
// makeDish('Mango', 'beef stew'); // Mango is cooking beef stew

// makeDish('Poly', 'muffins'); // Poly is cooking muffins
// makeDish('Poly', 'pork chops'); // Poly is cooking pork chops
// makeDish('Poly', 'roast beef'); // Poly is cooking roast beef

/**
 * делаем замыкание
 */

const makeShef = function (name) {
  /*
   * Параметр name это локальная переменная для функции makeShef.
   * Это значит что она будет доступна функции makeDish через замыкание.
   */
  return function makeDish(dish) {
    console.log(`${name} is cooking ${dish}`);
  };
};

const mango = makeShef('Mango');
mango('apple pie'); // Mango is cooking apple pie
mango('beef stew'); // Mango is cooking beef stew

const poly = makeShef('Poly');
poly('pancakes'); // Poly is cooking pancakes
poly('eggs and bacon'); // Poly is cooking eggs and bacon

/*
 *
 * arrow function
 * Стрелочные функции
 *
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 *
 */

// Обычное объявление функции
function classicAdd(a, b, c) {
  return a + b + c;
}

// Тоже самое как стрелочная функция
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

// Если параметр один, его объявление может быть без круглых скобок.
const add3 = a => {
  return a + 5;
};

// Если параметров нет, то обязательно должны быть пустые круглые скобки.
const greet = () => {
  console.log('Привет!');
};

// Неявный и явный возврат
// До (явный)
function classicAdd1(a, b, c) {
  return a + b + c;
}

// После (Неявный)
const arrowAdd1 = (a, b, c) => a + b + c;

// Неявный возврат обьекта
const foo = () => ({ a: 1, b: 2 });

// Псевдомассив arguments
// стрелочных функций нет локальной переменной arguments
// используется операция rest
const add1 = (...args) => {
  console.log(args);
};

add1(1, 2, 3); // [1, 2, 3]

// Стрелочные функции как коллбеки
// function
const callback1 = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

// arrow function
const r01 = filter([1, 2, 3, 4, 5], value => value >= 3);
console.log(r01);
