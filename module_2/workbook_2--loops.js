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
// для перебора массива
// создает цикл, перебирающий итерируемые объекты, такие как массивы и строки
 // использовать если счетчик не нужен

for (const variable of iterable) {
  // statement
}

// variable — для каждой итерации значение свойства присваивается переменной
// iterable — коллекция, которая имеет перечислимые свойства

// Итерация по массиву
const clients = ['Mango', 'Ajax', 'Poly'];

for (const client of clients) {
  console.log(client);
}

// Итерация по строке
const string = 'javascript';

for (const character of string) {
  console.log(character);
}


//======================================================
const colors = ['red', 'blue', 'green', 'purple']

for (const color of colors) {
  console.log(color);
}

//======================================================
// вложеные циклы

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let j = 0; j < matrix.length; j += 1) {
  console.log('j: ', j);
  console.log('matrix: ', matrix[j]);

  for (let c = 0; c < matrix[j].length; c += 1) {
    console.log('matrix: ', matrix[j][c]);
  }
}


//======================================================
/*
  написать скрипт который проверяет строку в переменной и 
  находит в ней самое длинное слово
*/

// 1. Переводим строку в массив
// 2. Перебираем массив в цикле 
// 3. Переменная для хранения длинного слова, предпологая что первое самое длинное
// 4. На каждой итерации сравниваем тнкущее и новое

const message = 'suscipit dignissimos neque corrupti';
const words = message.split(' ');
let longestWord = words[0];

for (let y = 1; y < words.length; y += 1) {
  if(words[y].length > longestWord.length) {
    longestWord = words[y];
  }
}

console.log(longestWord);


// Второй вариант, через цикл for...of
for (const word of words) {
  if(word.length > longestWord.length) {
    longestWord = word;
  }
}

//======================================================

// написать скрипт который проверяет масив в переменной и 
//  находит в ней самое маленькое число

const numbers1 = [11, 22, 33, 102, 12, 5];
let littleNum = numbers1[0];

for (let m = 1; m < numbers1.length; m += 1) {
  if (littleNum > numbers1[m]) {
    littleNum = numbers1[m];
  }
}

console.log(littleNum);

// // Второй вариант, через цикл for...of
for (const num of numbers1) {
  if (littleNum > num) {
    littleNum = num;
  }
}

console.log(littleNum);


//======================================================
// Найти слово у которого слева 4 буквы, а справа 5

const massege = 'qq www ee rrrr tt fffff ooo';
const words1 = massege.split(' ');
const max2 = words1.length - 1;
let target1;

for (let t = 1; t < max2; t += 1) {
  const prevElementLenght = words1[t - 1].length;
  const nextElementLenght = words1[t + 1].length;

  if (prevElementLenght === 4 && nextElementLenght === 5) {
    target1 = words1[t];
  }
} 

console.log(words1);
console.log(target1);

//======================================================
// Инструкции break и continue

// break
for (let i = 0; i < 10; i += 1) {
  if (i === 5) {
    console.log('Дошли до 5-й итерации, прерываем цикл!');
    break;
  }
}

//======================================================
const clients1 = ['ivan', 'roman', 'fedor', 'sergei'];
const clientNameToFind = 'fedor'; 
let message1;

for (l = 0; l < clients1.length; l += 1) {
  if (clients1[l] === clientNameToFind) {
    message1 = `Найден клиент: ${clientNameToFind}`;
    break;
  }
  message1 = 'Клиент не найден';
}

console.log(message1);

// continue
/*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
}

//===============================================
/*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
const numbers2 = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numbers2.length; i += 1) {
  if (numbers2[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold}: ${numbers2[i]}`); // 18, 29, 34
}
