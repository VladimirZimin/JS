'use strict';

// Функциональное выражение
// Имя функции - это действие, глагол начинающийся с маленькой буквы,
// отвечающий на вопрос 'Что сделать?'.
// Например: findSmallesNumber, fetchUserInfo, validateInput

const add = function (a, b, c) {
  // параметры
  return a + b + c; // без return функция не вернется
};

add(2, 3, 4); // вызов функции аргументы

// ===============================================

const add1 = function (a, b, c) {
  // параметры
  console.log(a);
  console.log(b);
  console.log(c);

  const sum = a + b + c;

  console.log(sum);
};

add1(2, 3, 4); // вызов функции аргументы
add1(2, 10, 6);
add1(5, 8, 4);

// ===============================================
// Обьявление функции, можно вызывать выше

function add2(x, y) {
  const summ = x + y;

  console.log('Вызов функции');

  return summ;
}

const t = add2(5, 7);

// ===============================================
// Находим самое длинное слово

const string = 'Оператор return определяет возвращаемое значение';
const words = string.split(' ');
let longestWord = words[0]; // предполагаем что это значение длинное

for (const word of words) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}

console.log(longestWord);

// Используем функцию
const findlongestWord = function (string) {
  const words = string.split(' ');
  let longestWord = words[0]; // предполагаем что это значение длинное

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findlongestWord('Если при выполнении кода'));
console.log(findlongestWord('После того как весь код функции будет выполнен'));
console.log(findlongestWord('Пошагово разберем выполнение кода примера'));

// ===============================================
// array.includes своими руками

const includes = function (array, value) {
  for (const item of array) {
    if (item === value) {
      return true;
    }
  }

  return false;
};

console.log(includes([1, 2, 3], 4)); // false
console.log(includes([1, 2, 3, 4, 5], 2)); // true
console.log(includes(['audi', 'bmw', 'vw'], 'bmw')); // true

// ==============================================
/*
Учитывая неотрицательное целое число, например 3, 
верните строку с бормотанием: «1 овца... 2 овцы... 3 овцы...». 
Ввод всегда будет действительным, 
т. е. без отрицательных целых чисел.
*/

let countSheep = function (num) {
  let str = '';
  for (let i = 1; i <= num; i += 1) {
    str += `${i} sheep...`;
  }
  return str;
};

let res = countSheep(3);
console.log(res);

// ==============================================
// скрипт подсчета стоимости гравировки украшений
// 1 слово стоит 10 гривен

const calcPrice = function (string, costPerWord = 10) {
  let total = 0;
  const words = string.split(' ');

  for (const word of words) {
    total += costPerWord;
  }

  return total;
};

const message = 'Напиши скрипт подсчета стоимости гравировки украшений';
const price = calcPrice(message, 10);

console.log(price);

// ============================================
// Предикатная функция = возвращает true или false

const isEqual = function (a, b) {
  return a === b;
};

console.log(isEqual(5, 4));
console.log(isEqual(5, 5));

// ============================================
// Псевдомассив arguments

// функция которая складывает произвольное количество символов

const add3 = function () {
  // не пишем параметры
  console.log(arguments); // псевдомассив - нет методов массива
  let total = 0;

  for (let i = 0; i < arguments.length; i += 1) {
    total += arguments[i];
  }

  return total;
};

console.log(add3(1, 2, 3, 4));
console.log(add3(1, 2, 3, 4, 8, 9, 7, 10, 11));
console.log(add3(1, 2, 3, 4, 5, 6, 7));

// ========================================
// Способы преобразования псевдомассив
// Используя метод Array.from(), который создаст массив из итерируемого объекта.

const fn1 = function () {
  // В переменной args будет полноценный массив
  const args = Array.from(arguments);
};

/*
Используя операцию ... (rest), 
она позволяет собрать произвольное количество элементов
*/

const fn = function (...args) {
  // В переменной args будет полноценный массив
};

// ========================================

const add4 = function () {
  let args = Array.from(arguments); // первый метод преобразования
  const mult = args[0];
  args.shift(); // убиреем первый элемент -- способ1
  //args = args.slice(1);         // убиреем первый элемент -- способ2
  let total = 0;

  for (let i = 0; i < args.length; i += 1) {
    total += args[i];
  }

  return total * mult;
};

console.log(add4(5, 1, 2, 3, 4));
console.log(add4(10, 1, 2, 3, 4, 8, 9, 7, 10, 11));
console.log(add4(15, 1, 2, 3, 4, 5, 6, 7));

// ========================================
// операцию ... (rest)
const add5 = function (mult, ...args) {
  // собирает список аргументов
  // если 2 значения первые элм идет в переменную mult, остальное в args
  let total = 0;

  for (let i = 0; i < args.length; i += 1) {
    total += args[i];
  }

  return total * mult;
};

console.log(add5(5, 1, 2, 3, 4));
console.log(add5(10, 1, 2, 3, 4, 8, 9, 7, 10, 11));
console.log(add5(15, 1, 2, 3, 4, 5, 6, 7));
