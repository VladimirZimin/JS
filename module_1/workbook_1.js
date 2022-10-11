/**
 * Строгий режим
 * - 'use strict' в начале файла .js
 * - type="module" при подключении в HTML
 */
'use strict';

let car;
const year = 2015;
const type = typeof year;

car = 'audi';
console.log(car, year);
console.log(car.toUpperCase(), year);

car = 'BMW';
console.log(car, year);
console.log(car.length, year);
console.log(typeof year);
console.log(type);
console.log('My car is', car, year, 'year');
//alert(car);
console.log(window);

/*
 * Просим клиента подтвердить бронь на отель
 * и сохраняем в переменную результат работы confirm
 */
const isComing = confirm('Please confirm hotel reservation');
console.log(isComing);

confirm('Сделай выбор');

/*
 * Спрашиваем имя отеля в котором хотел бы остановится клиент
 * и сохраняем в переменную результат вызова prompt
 */
const hotelName = prompt('Please enter desired hotel name:');
console.log(hotelName);

/*
 * Важная особенность prompt в том, что не зависимо что ввел пользователь,
 * всегда вернется строка. Тоесть если пользователь ввел 5, то вернется
 * не число 5, а строка "5". Об этом необходимо всегда помнить.
 */
const value2 = prompt('Please enter a number!');
console.log(typeof value2); // 'string'
console.log(value2); // '5'

// Операции с числами
const x = 10;
const y = 5;

// Сложение
console.log(x + y); // 15

// Вычитание
console.log(x - y); // 5

// Умножение
console.log(x * y); // 50

// Деление
console.log(x / y); // 2

// Остаток от деления
console.log(x % y); // 0

// Сложение с заменой (есть и для других операторов)
let value = 5;

// Аналогично записи value = value + 10;
value += 10;
console.log(value); // 15

/*
 * a > b и a < b - больше/меньше
 * a >= b и a <= b - больше/меньше или равно
 * a == b - равенство
 * a != b - неравенство
 * a === b - строгое равенство
 * a !== b - строгое неравенство
 * Всегда используйте строгое равенство === и строгое неравенство !==
 */

const a = 5;
const b = 10;
const z = 5;

console.log('a > b:', a > b); // false
console.log('a < b:', a < b); // true
console.log('a < z:', a < z); // false
console.log('a <= z:', a <= z); // true
console.log('a === b:', a === b); // false
console.log('a === z:', a === z); // true
console.log('a !== b:', a !== b); // true
console.log('a !== z:', a !== z); // false

let input = prompt('угадай число от 1 до 10'); //ответ будет строка

input = Number(input); //функция переобразовывает строку в число

console.log(typeof input);

// Парсит из строки целое число
console.log(Number.parseInt('5px')); // 5
console.log(Number.parseInt('12qwe74')); // 12
console.log(Number.parseInt('12.46qwe79')); // 12
console.log(Number.parseInt('qweqwe')); // NaN

// Парсит из строки дробное число
console.log(Number.parseFloat('5px')); // 5
console.log(Number.parseFloat('12qwe74')); // 12
console.log(Number.parseFloat('12.46qwe79')); // 12.46
console.log(Number.parseFloat('qweqwe')); // NaN

// Проверка на число
const validNumber = Number('51'); // 51
console.log(Number.isNaN(validNumber)); // false (это число)

const invalidNumber = Number('qweqwe'); // NaN
console.log(Number.isNaN(invalidNumber)); // true (это не число)

//  Math.floor(num) - округляет к меньшему числу
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - округляет к большему числу
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа, округлённое до ближайшего целого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.random() * (10 - 1) + 1); // случайное число от 1 до 10

// Конкатенация строк
const message = 'Mango ' + 'is' + ' happy';
console.log(message); // Mango is happy

// Теперь посмотрим на порядок операндов
let result;

result = 5 + '5';
console.log(result); // '55'
console.log(typeof result); // string

result = 5 + '5' + 5;
console.log(result); // '555'
console.log(typeof result); // string

/*
 * Обратите внимание, произошла математическая операция
 * сложения для первых двух пятерок, после чего 10 было
 * преобразовано в строку '10' и сшито с '5'
 */
result = 5 + 5 + '5';
console.log(result); // '105'
console.log(typeof result); // string

// Свойства и методы строк
/*
 * length - свойство, хранит длину строки
 * toLowerCase() и toUpperCase() - вернут новую строку в соответствующем регистре, не изменяют оригинальную строку
 * indexOf() - вернет позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не найдено
 * includes() - один из наиболее часто используемых методов, в большинстве случаев заменяет indexOf, проверяет входит ли подстрока в строку, возвращает true или false
 */

const message1 = 'Welcome to Bahamas!';

console.log(message1.length); // 19
console.log('There is nothing impossible to him who will try'.length); // 47

console.log(message1.toLowerCase()); // welcome to bahamas!
console.log(message1.toUpperCase()); // WELCOME TO BAHAMAS!
console.log(message1.toString()); // Welcome to Bahamas!

// При этом исходная строка не изменяется
console.log(message1); // Welcome to Bahamas!

console.log(message1.indexOf('to')); // 8
console.log(message1.indexOf('hello')); // -1

// Все методы строк чувствительны к регистру, проверяем если слово в строке
console.log(message1.includes('welcome')); // false
console.log(message1.includes('Welcome')); // true

// Шаблонные строки и интерполяция
// Используя переменные необходимо составить строку с подставленными значениями
const name1 = 'Mango';
const age = 2;
const mood = 'happy';

const message2 =
  'My name is ' + name1 + ", I'm " + age + ' years old and ' + mood + '.';

console.log(message2); // My name is Mango, I'm 2 years old and happy.

/*
 * Составлять строки с подставляемыми значениями
 * используя конкатенацию очень неудобно.
 * На помощь приходят шаблонные строки и интерполяция.
 * Делается с посощью ОБРАТНЫХ кавычек ` `
 */
const sameMessage = `My name is ${name1}, I'm ${age} years old and ${mood}.`;

console.log(sameMessage); // My name is Mango, I'm 2 years old and happy.

// В интерполяции можно использовать любое валидное выражение
console.log(`Результат сложения равен ${2 + 2}.`); // Результат сложения равен 4.

// Логические операторы
// false в логическом преобразовании:
// 0, NaN, null, undefined, пустая строка: "" или '', false

// && - and; || - or; ! - not;

const min = 10;
const max = 50;
const value3 = 40;
const isInRange = value3 >= 10 && value3 <= 50; // and
const isInRange3 = value3 >= 10 || value3 <= 50; // or

console.log(isInRange); // true
console.log(isInRange); // true

const isInRange2 = 1 && 2; // true && true
console.log(1 && 2 && 3 && 5); //так как все значения true вывидится последнее 6
console.log(1 && 0 && 5); // так как 0 это false вывидится первое значение false 0

const isInRange4 = 1 || 2; // true && true
console.log(1 || 2 || 3 || 5); //так как все значения true вывидится первое 1
console.log(1 || 0 || 5); // первое true 1 выведит 1

// Логическое «НЕ»
// Оператор ! приводит операнд к булю, если необходимо,
// а затем заменяет его на противоположный (инверсия)

console.log(!true); // false
console.log(!false); // true
console.log(!1); // false
console.log(!0); // true

// При выполнении логических операций, правый операнд может не вычисляться.
// false && (этот операнд не вычисляется)
// true || (этот операнд не вычисляется)

//Операторы ветвеления

// Инструкция if
// Условие помещают за оператором if в круглых скобках.
// Если условие приводится к true, то выполняется код в фигурных скобках (ветка).
let cost1 = 0;
const subscription1 = 'pro';

if (subscription1 === 'pro') {
  cost1 = 100;
}

console.log(cost1); // 100

// Если условие приводится к false, код в фигурных скобках будет пропущен.
let cost2 = 0;
const subscription2 = 'free';

if (subscription2 === 'pro') {
  cost2 = 100;
}

console.log(cost2); // 0

// Инструкция if...else
// в случае если условие приводится к false,
// выполнится код в фигурных скобках после оператора else
let cost3;
const subscription3 = 'free';

if (subscription3 === 'pro') {
  cost3 = 100;
} else {
  cost3 = 0;
}

console.log(cost3); // 0

// При true, оператор else и связанный с ним программный блок, игнорируются.
let cost;
const subscription = 'pro';

if (subscription === 'pro') {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100

// Инструкция else...if
// При первом же true проверки прекратятся и
// выполнится только один сценарий, соответствующий этому true
const min2 = 18;
const max2 = 35;
const value1 = 90;
let messag3;

if (value1 < 18) {
  // false
  messag3 = 'Вы не подходите по возрасту, вам нет 18';
} else if (value1 > 10 && value1 < 50) {
  // false
  messag3 = 'Вы проходите по возврасту';
} else if (value1 > 35) {
  // true
  messag3 = 'Вы не подходите по возрасту, вы старше';
} else {
  messag3 = 'Ваш возраст не известен';
}

console.log(messag3);

// Тернарный оператор
// Есть конструкция, похожая на if...else,
// с упрощенным синтаксисом, называемая тернарный оператор
// {условие} ? {выражение если условие правдиво} : {выражение если условие не правдиво}
let type2;
const age1 = 20;

if (age1 >= 18) {
  type2 = 'adult';
} else {
  type2 = 'child';
}

// Перепишем пример используя тернарный оператор.
const age2 = 20;
const type1 = ag2 >= 18 ? 'adult' : 'child';

// Инструкция switch для сравнения
const takeout = 0; // сам заберу
const courier = 1; // доставка курером
const post = 2; // передать по почте
const promptLabel = `Выбери способ доставки: ${takeout} - самовывоз, ${courier} - курером, ${post} - по почте`;

let userChoise = prompt(promptLabel);
let message4;

// if (userChoise === takeout) {
//   message4 = 'Способ доставки: самовывоз';
// } else if (userChoise === courier) {
//   message4 = 'Способ доставки: курером';
// } else if (userChoise === post) {
//   message4 = 'Способ доставки: по почте';
// } else {
//   message4 = 'Ничего не выбрано'
// }

// console.log(message4);

// switch(userChoise) {
//   case takeout:
//     message4 = 'Способ доставки: самовывоз';
//     break; // прерывает исполнение кода дальше

//   case courier:
//     message4 = 'Способ доставки: курером';
//     break;

//   case post:
//     message4 = 'Способ доставки: по почте';
//     break;

//   default:
//     message4 = 'Ничего не выбрано'
// }

// console.log(message4);

if (userChoise === null) {
  message4 = 'Заказ отменен';
} else {
  userChoise = Number(userChoise);
  switch (userChoise) {
    case takeout:
      message4 = 'Способ доставки: самовывоз';
      break; // прерывает исполнение кода дальше

    case courier:
      message4 = 'Способ доставки: курером';
      break;

    case post:
      message4 = 'Способ доставки: по почте';
      break;

    default:
      message4 = 'Ничего не выбрано';
  }
}

console.log(message4);
