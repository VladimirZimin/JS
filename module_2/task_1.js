'use strict';

/*
Напиши функцию logItems(array), которая получает массив и использует цикл for, 
который для каждого элемента массива будет выводить в консоль 
сообщение в формате [номер элемента] - [значение элемента].

Нумерация должна начинаться с 1. К примеру для первого элемента массива 
['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', 
а для индекса 2 выведет '3 - Ajax'.

const logItems = function(array) {
  // твой код
};

Вызовы функции для проверки работоспособности твоей реализации.
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

*/

const logItems = function(array) {

    for (let i = 1; i < array.length; i += 1) {  // лучше писать  i ++ вместо  i += 1
        console.log(`Номер: ${i} - ${array[i]}`);
    }
}


logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
console.log('===================');
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);



const logItems2 = function(array) {
    let counter = 0;

    for (const word of array) {
        counter += 1 // то же самое
        console.log(`Номер: ${counter} - ${word}`);
    }
}


logItems2(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
console.log('===================');
logItems2([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);