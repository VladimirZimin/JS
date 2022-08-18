'use strict';

/*
Напиши скрипт подсчета стоимости гравировки украшений. 
Для этого создай функцию calculateEngravingPrice(message, pricePerWord) 
принимающую строку (в строке будут только слова и пробелы) 
и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.
*/


const calculateEngravingPrice = function (message, pricePerWord) {
    let words = message.split(' ');
    let total = 0;

    for (let i = 0; i < words.length; i += 1) {
        total += pricePerWord;
    }

    return total;
}


console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); // 80
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  ); // 160
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  ); // 240
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  ); // 120