'use strict';

/**
 * Напиши функцию checkForSpam(message),
 * принимающую 1 параметр message - строку.
 *
 * Функция проверяет ее на содержание слов spam и sale.
 * Если нашли зарещенное слово то функция возвращает true,
 * если запрещенных слов нет функция возвращает false.
 *
 * Слова в строке могут быть в произвольном регистре.
 */

const checkForSpam = function (message) {
  const wordSpam = 'spam';
  const wordSale = 'sale';
  let string = message.toLowerCase();
  let resault;

  if (string.includes(wordSpam) || string.includes(wordSale)) {
    resault = true;
  } else {
    resault = false;
  }

  return resault;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
