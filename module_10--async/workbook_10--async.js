/**
 * Асинхронный код
 */

// В синхронном коде следующая инструкция не может начать свое выполнение пока не выполнится предыдущая.
console.log('First log');
console.log('Second log');
console.log('Third log');

// Следующий код - асинхронный
// Will run first
console.log('First log');

setTimeout(() => {
  // Will run last, after 2000 milliseconds
  console.log('Second log');
}, 2000);

// Will run second
console.log('Third log');

// Функция setTimeout() отрабатывает синхронно и регистрирует отложенный вызов переданной callback-функции, которая будет вызвана асинхронно, через указанный промежуток времени.

/**
 * Таймеры
 *
 * реализованы в браузере, а не встроенны в язык, и доступны на глобальном объекте window
 */

/**
 * Таймаут
 *
 * Метод setTimeout() позволяет запланировать запуск функции через определённое время.
 *
 * - callback - функция, выполнение которое необходимо запланировать.
 * - delay - время в миллисекундах, через которое callback-функция будет вызвана один раз.
 * - Дополнительные аргументы (arg1, arg2 и т. д.) будут переданы callback-функции во время вызова. Возвращает цифровой идентификатор созданного таймера, который используется для его удаления.
 */

const timerId = setTimeout(callback, delay, arg1, arg2, '...');

// ============================================
const button = document.querySelector('button');

const onClick = () => {
  setTimeout(() => {
    alert('I love async JS!');
  }, 2000);
};

// Two seconds after clicking the button,
// alert specified inside the setTimeout callback will appear.
button.addEventListener('click', onClick);

/**
 * отменить вызов функции внутри таймаута, используется метод clearTimeout(id), которая принимает идентификатор таймера и очищает (удаляет) его.
 */

const greet = () => {
  console.log('Hello!');
};

const timerId1 = setTimeout(greet, 3000);

clearTimeout(timerId1);

/**
 * Интервал
 *
 * простой способ повторения кода снова и снова с установленным промежутком времени повторений.
 *
 * Остановить исполнение можно вызовом метода clearInterval(id)
 */
const timerId2 = setInterval(callback, delay, arg1, arg2, '...');

//==========================================
const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
let timerId3 = null;

startBtn.addEventListener('click', () => {
  timerId3 = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId3);
  console.log(`Interval with id ${timerId3} has stopped!`);
});

/**
 * Дата и время
 *
 * Работает плохо используем библиотеку https://date-fns.org/
 */

// Создание даты
// Создание даты без аргументов, возвращает объект хранящий дату и время на момент его инициализации, то есть текущие

const date = new Date();

console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

console.log(date.toString());
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

/**
 * Unix время
 *
 * Внутренне даты представлены в миллисекундах прошедших с полночи 1 января 1970 года в часовом поясе UTC.
 */

console.log(new Date(0));
// "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

console.log(new Date(15000));
// "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// Метод getTime() возвращает числовое представление даты (timestamp) - количество миллисекунд прошедших с полночи 1 января 1970 года
const date1 = new Date();
console.log(date1.getTime()); // 1624021654154

/**
 * Установка даты
 *
 * можно установить дату строкой или числами
 * Строка может описывать только дату или дату и время
 */

const teamMeetingDate = new Date('March 16, 2030');
console.log(teamMeetingDate);
// "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

const preciseTeamMeetingDate = new Date('March 16, 2030 14:25:00');
console.log(preciseTeamMeetingDate);
// "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

/**
 * Установка времени в виде строк внутренне вызывает метод Date.parse(), который преобразует строку в число - количество миллисекунд. Именно поэтому формат передаваемой строки очень гибкий. Например, можно не указывать ноль для дней и месяца. Рассмотрим несколько примеров, которые приведут к одинаковому результату.
 */

new Date('2030-03-16');
new Date('2030-03');
new Date('2030');
new Date('03/16/2030');
new Date('2030/03/16');
new Date('2030/3/16');
new Date('March 16, 2030');
new Date('March 16, 2030 14:25:00');
new Date('2030-03-16 14:25:00');
new Date('2030-03-16T14:25:00');
new Date('16 March 2030');

/**
 * Другой способ создания новых объектов - это передать семь чисел, которые описывают год, месяц (начинается с 0), день, часы, минуты, секунды и миллисекунды. Обязательны только первые три.
 */
const date2 = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log(date2);
// Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)

/**
 * Методы
 */

/**
 * Геттеры используются для чтения всей даты или отдельной составляющей. Возвращаемое значение зависит от текущего часового пояса установленного на вашем компьютере.
 */

const date3 = new Date();
console.log('Date: ', date);

// Возвращает день месяца от 1 до 31
console.log('getDate(): ', date.getDate());

// Возвращает день недели от 0 до 6
console.log('getDay(): ', date.getDay());

// Возвращает месяц от 0 до 11
console.log('getMonth(): ', date.getMonth());

// Возвращает год из 4 цифр
console.log('getFullYear(): ', date.getFullYear());

// Возвращает час
console.log('getHours(): ', date.getHours());

// Возвращает минуты
console.log('getMinutes(): ', date.getMinutes());

// Возвращает секунды
console.log('getSeconds(): ', date.getSeconds());

// Возвращает миллисекунды
console.log('getMilliseconds(): ', date.getMilliseconds());

/**
 * Существуют эквивалентные версии этих методов, которые возвращают значения в формате UTC
 */

const date4 = new Date();
console.log('Date: ', date);

// Возвращает день месяца от 1 до 31
console.log('getUTCDate(): ', date.getUTCDate());

// Возвращает день недели от 0 до 6
console.log('getUTCDay(): ', date.getUTCDay());

// Возвращает месяц от 0 до 11
console.log('getUTCMonth(): ', date.getUTCMonth());

// Возвращает год из 4 цифр
console.log('getUTCFullYear(): ', date.getUTCFullYear());

// Возвращает час
console.log('getUTCHours(): ', date.getUTCHours());

// Возвращает минуты
console.log('getUTCMinutes(): ', date.getUTCMinutes());

// Возвращает секунды
console.log('getUTCSeconds(): ', date.getUTCSeconds());

// Возвращает миллисекунды
console.log('getUTCMilliseconds(): ', date.getUTCMilliseconds());

/**
 *
 * Сеттеры
 *
 * Все, что можно прочитать можно записать, методы для записи называются также как геттеры, но начинаются с приставки set. Также для всех методов есть их UTC эквивалент.
 */
const date5 = new Date('March 16, 2030 14:25:00');

date.setMinutes(50);
// "Sat Mar 16 2030 14:50:00 GMT+0200"

date.setFullYear(2040, 4, 8);
// "Tue May 08 2040 14:50:00 GMT+0300"

/***
 *
 *
 * Форматирование даты
 *
 * Метод toString() возвращает дату целиком, а toDateString() и toTimeString() - только дату и время соответственно.
 */

const date6 = new Date('March 16, 2030 14:25:00');

date.toString();
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toTimeString();
// "14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toLocaleTimeString();
// "2:25:00 PM"

date.toUTCString();
// "Sat, 16 Mar 2030 12:25:00 GMT"

date.toDateString();
// "Sat Mar 16 2030"

date.toISOString();
// "2030-03-16T12:25:00.000Z"

date.toLocaleString();
// "3/16/2030, 2:25:00 PM"

date.getTime();
// 1899894300000
