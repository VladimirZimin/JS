'use strict';

/**
 * Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
 * Функция возвращает число - количество свойств.
 */

const countProps = function (obj) {
  return `Количектво свойств в обьекте = ${Object.keys(obj).length}`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(
  countProps({
    name: 'Mango',
    age: 2,
  }),
); // 2

console.log(
  countProps({
    mail: 'poly@mail.com',
    isOnline: true,
    score: 500,
  }),
); // 3
