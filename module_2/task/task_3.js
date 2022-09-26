'use strict';

/**
 * Напиши фукцнию findLongestWord(string),
 * которая принимает параметром произвольную строку
 * (в строке будут только слова и пробелы)
 * и возвращает самое длинное слово в этой строке.
 */

const findLongestWord = function (string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (let i = 1; i < words.length; i += 1) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }

  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
