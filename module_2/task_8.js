"use strict";

/*
Угадай число

есть массив чисел numbers содержащий верные числа.
числа в массиве всегда идут по возрастанию 1-5, 20-40, 2-100, и т.д

просим пользователя ввести число от самого маленьнького, 
до самого большого элемента массива, 
эти значение сохраняем в переменные min и max
учьтите что массив произвольные а элементы всегда идут попорядку

пусть prompt говорит "Введите цифру между x и y"
где x и y самое маленькое и самое большое число массива

проверить содержит ли массив в себе число

если содержит alert "Поздравляю, Вы угадали!"
если не содержит alert "Сожелеем, Вы не угадали"

*/

const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
<<<<<<< HEAD
const message = prompt(`Введите цифру между ${min} и ${max}`);
let result = Number(message);
=======
const userInput = prompt(`Введите цифру между ${min} и ${max}`); // не работает. найди причину - (поток данных и объявление переменных)
>>>>>>> 02a9235a70f2bc6f1d4b14bc796a2fb4d324582c
let min = numbers[0];
let max = numbers[numbers.length - 1]; 

<<<<<<< HEAD
if (numbers.includes(result)) {
    alert('Поздравляю, Вы угадали!');
} else if (message === null) {
    alert('Пока');
=======
const isIncludes = numbers.includes(userInput);

// if (numbers.includes(userInput)) {
if (isIncludes) {
  // так более лаконично
  alert("Поздравляю, Вы угадали!"); //не работает потому-что prompt всегда возвращает строку
} else if (userInput === null) {
  alert("Пока");
>>>>>>> 02a9235a70f2bc6f1d4b14bc796a2fb4d324582c
} else {
  alert("Сожелеем, Вы не угадали");
}

//   усложним задачу и решение:
// const numbers2 = [312, 115, 25, 9, 37, 41, 62, 74, 83, 145];
//   задача та же, только теперь нельзя использовать includes или indexOf
// доп: оберни в фунцию
