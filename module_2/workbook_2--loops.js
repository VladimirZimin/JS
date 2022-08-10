'use strict';

// Цикл while
// Инструкция while создает цикл, 
// который выполняет блок кода, пока условие проверки оценивается как true

while (expression) {
    // код, тело цикла (statement)
}
  
// Оператор while вычисляет expression перед каждой итерацией цикла
// Если expression оценивается как true, оператор while выполняет statement
// Если expression оценивается как false, выполнение цикла прерывается 
// и скрипт продолжает выполнять инструкции после цикла while.

// Сделаем счетчик.
let counter = 0;

while (counter < 10) {
  console.log('counter: ', counter);
  counter += 1;
}


let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

//======================================================

let i = 0;
const car = ['audi', 'bmw', 'vw'];

while (i < car.length) {
    console.log(car[i]);

    i += 1;
}

//======================================================

// Цикл do...while
// условие проверяется после выполнения тела цикла
// выполняет блок кода до тех пор, пока expression не станет равным false

do {
    // statement
} while (expression);

//======================================================

let password = '';

do {
  password = prompt('Введите пароль длиннее 4-х символов', '');
} while (password.length < 5);

console.log('Ввели пароль: ', password);

//======================================================

let userInput;

do {
    userInput = prompt ('введи число');
    console.log(userInput);
} while (userInput !== null  && Number(userInput) !== 10);

// пишем условие выполнения

// userInput = null
// null !== null || Number(null) !== 10
// false || true -> true

// userInput = 10
// 10 !== null || Number(10) !== 10
// true || false -> true

// userInput = null
// null !== null && Number(null) !== 10
// false && true -> false

// userInput = 10
// 10 !== null || Number(10) !== 10
// true || false -> false


//======================================================

// Цикл for для перебора массива
// Цикл со счётчиком

for (initialization; condition; post-expression) {
    // statements
}
  
/*
    Инициализация (initialization) — выражение инициализации выполняется один 
    раз, когда начинается цикл. Используется для инициализации 
    переменной-счетчика. Если используется ключевое слово let, 
    переменная счетчика является локальной для цикла.

    Условие (condition, test) Тело цикла выполняется только тогда, когда 
    выражение условия принимает значение true. 
    Цикл завершается, если значение будет false

    Тело (statements) — выполняется в случае удовлетворения условия

    Пост-выражение (post-expression) — выполняется после тела на каждой итерации 
    цикла, но перед проверкой условия. Используется для обновления 
    переменной-счетчика.
 */    

// Переменные-счетчики, по традиции, называются буквами i/j/k.

const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(i);
}

// Посчитаем сумму чисел до определенного значения.
const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);


// выведем остаток от деления используя цикл.
const max1 = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}


//======================================================
// Обязательно 3 условия, разделенные ;

// Итерация по массиву
const products = ['apple', 'orange', 'kiwi', 'cherry'];

for (let k = 0; k < products.length; k += 1) {
    console.log('k: ', k);
    console.log(`products[${k}]: `, products[k]);
}

// С помощью цикла массив можно заполнить данными
const numbers = [];

for (let i = 0; i < 3; i += 1) {
  numbers.push(`label-${i}`);
}

console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']


//======================================================

// Цикл for...of