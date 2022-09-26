'use strict';

// Массивы

// Пустой массив
const arr = [];

// Массив clients с тремя элементами
// Название в множественном числе, любой тип данных, разделяются запятой
const clients = ['Mango', 'Poly', 'Ajax'];

console.log(clients); // ["Mango", "Poly", "Ajax"]

// Доступ к элементам

// const clients = ['Mango', 'Poly', 'Ajax'];

// Указывая в скобках индекс элемента мы получаем его значение
console.log(clients[0]); // Mango
console.log(clients[1]); // Poly
console.log(clients[2]); // Ajax

// Переопределение

// const clients = ['Mango', 'Poly', 'Ajax'];

// Значение элемента можно заменить
clients[0] = 'Kiwi';
console.log(clients[0]); // Kiwi

// Или добавить
clients[3] = 'Alex';
console.log(clients[3]); // Alex

console.log(clients); // ["Kiwi", "Poly", "Ajax", "Alex"]

// Длина массива Свойство length

const clients = ['Mango', 'Poly', 'Ajax'];

// length вернет текущую длину массива
console.log(clients.length); // 3

clients.length = 5;
console.log(clients.length); // 5
console.log(clients); // ["Mango", "Poly", "Ajax", empty × 2]
console.log(clients[4]); // undefined

clients.length = 2;
console.log(clients); // ["Mango", "Poly"]

// Многомерные массивы
// Массивы могут содержать другие массивы как элементы.
// Это можно использовать для создания матриц

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][2]); // 9

// Для того, чтобы перебрать такой массив, используются вложенные циклы.

let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
  console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

  for (let j = 0; j < matrix[i].length; j += 1) {
    console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
    total += matrix[i][j];
  }
}

console.log(total); // 45

// Присвоение по ссылке и по значению

// Примитивы: строки, числа, були,null и undefined по значению (by value).
// Сложными типами передаются они по ссылке (by reference).

let a = 5;
// Присвоение по значению, в памяти будет создана еще
// одна ячейка в которую будет скопировано значение 5
let b = a;
console.log(a); // 5
console.log(b); // 5

// Изменим значение a
a = 10;
console.log(a); // 10
// Значение b не изменилось так как это отдельная копия
console.log(b); // 5

const a1 = ['Mango'];
// Присвоение по ссылке.
// Так как a это массив, в b записывается ссылка на уже существующий
// массив в памяти. Теперь a и b указывают на один и тот же массив.
const b1 = a1;
console.log(a1); // ['Mango']
console.log(b1); // ['Mango']

// Изменим массив, добавив еще один элемент, используя указатель из a
a1.push('Poly');
console.log(a1); // ['Mango', 'Poly']

// b изменилось тоже, потому что b, как и a,
// просто содержат ссылку на одно и то же место в памяти
console.log(b1); // ['Mango', 'Poly']

// Результат повторяется
b1.push('Ajax');
console.log(a1); // ['Mango', 'Poly', 'Ajax']
console.log(b1); // ['Mango', 'Poly', 'Ajax']

// Присвоение по ссылке и по значению

const x = [1, 2, 3];
const y = [1, 2, 3];

// не равны потому что сложные типы
// сравниваються по адрессам памяти, а не по значению

console.log(x === y); // false
console.log([1, 2, 3] === [1, 2, 3]); // false

// примитивы
// сравниваються по значению

console.log(5 === 5); // true

// =================

let q = 5;
let w = q;

console.log(q); // 5
console.log(w); // 5

const c = [1, 2, 3];
const v = c;

console.log(c); // [1, 2, 3]
console.log(v); // [1, 2, 3]

c[3] = 4;

console.log(c); // [1, 2, 3, 4]
console.log(v); // [1, 2, 3, 4]

//================================================================

// Методы split() и join()

// split(s) — позволяет превратить строку в массив, разбив ее по разделителю s
// join(s) — делает в точности противоположное split.
// Он берет массив и склеивает его в строку, используя s как разделитель

// split
const message = 'Welcome to Bahamas!';

// Разбивает строку по разделителю, в данном случае это пробел
console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// Вызов split с пустой строкой разобьёт по буквам
console.log(message.split('')); // [много букв :)]

// Ищем самое длинное слово
const sameMessage = 'Voluptates ducimus culpa repellendus';
console.log(sameMessage);

const words = sameMessage.split(' ');
console.log(words);

const c = 'hello word!!';
console.log(c.split('!')); // ['hello word', '', '']
console.log(c.split('!').join('')); // hello word

//================================================================

// join
const clients = ['Mango', 'Poly', 'Ajax'];

// Сошьет все элементы массива в строку,
// между каждой парой элементов будет указанный разделитель
console.log(clients.join(' ')); // "Mango Poly Ajax"
console.log(clients.join(',')); // "Mango,Poly,Ajax"
console.log(clients.join('-')); // "Mango-Poly-Ajax"

//================================================================

// Методы indexOf() 'редко используется' и includes()
// indexOf для получения индекса элемента, -1, если такого элемента нет
const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

console.log(clients.indexOf('Poly')); // 2
console.log(clients.indexOf('Monkong')); // -1

// array.includes(x) — есть ли элемент в массиве, возвращая true или false
// РАБОТАЕТ ТОЛЬКО С ПРИМИТИВАМИ
const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

console.log(clients.includes('Poly')); // true
console.log(clients.includes('Monkong')); // false

// Выносим варианты в массив
const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
const fruit = 'cherry';

if (redFruits.includes(fruit)) {
  console.log('It is a red fruit!');
}

//================================================================

// Методы push(), pop(), shift(), unshift()
// Добавляют или удаляют крайние элементы массива

// push() — позволяет добавить один или несколько элементов в конец массива
// pop() — удаляет элемент из конца массива и возвращает удаленный элемент.

// Создаем пустой массив
const stack = [];

// Добавляем элементы в конец массива
stack.push(1);
console.log(stack); // [1]

stack.push(2);
console.log(stack); // [1, 2]

stack.push(3);
console.log(stack); // [1, 2, 3]

// Удаляем элементы из конца массива
stack.pop(); // 3
console.log(stack); // [1, 2]

stack.pop(); //  2
console.log(stack); // [1]

stack.pop(); //  1
console.log(stack); // []

stack.pop(); //  undefined

// shift() — удаляет элемент из начала массива
// unshift() — добавляет элемент в начало массива.

const clients = ['Mango', 'Ajax', 'Poly'];

clients.shift(); // Mango
console.log(clients); // ["Ajax", "Poly"]

clients.unshift('Kiwi');
console.log(clients); // ["Kiwi", "Ajax", "Poly"]

//================================================================

// Метод slice()
// Делает копия части массива и целиком

// Копирует элементы от begin, до, но не включая, end

slice(begin, end);

const array = [1, 2, 3, 4, 5];
array.slice(1, 4); // [2, 3, 4]

array.slice(); // [1, 2, 3, 4, 5] делает копию

array.slice(1); // [2, 3, 4, 5] копирует с первого и до конца

const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// Вернет новый массив в котором будут элементы с индексами от 1 до 2
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// Вернет новый массив в котором будут
// элементы с индексами от 1 до (clients.length - 1)
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]

// Вернет копию исходного массива
console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// Вернет новый массив состоящих из последних двух элементом исходного
console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

//================================================================

// Метод splice()
// изменяет оригинал

const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];

// Удаление элементов массива
// передаем позицию и количество элементов для удаления
// splice(position, num)

// position — указывает позицию (индекс) первого элемента для удаления
// num — определяет количество удаляемых элементов

cards.splice(1, 2); // ['card-2', 'card-3']
console.log(cards); // ['card-1', 'card-4', 'card-5']

// Предположим, у нас есть массив оценок, который содержит пять чисел от 1 до 5.
const scores = [1, 2, 3, 4, 5];

// Следующая операция удаляет три элемента массива,
// начиная с первого элемента (индекс 0).
const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента.
console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента.
console.log(deletedScores); // [1, 2, 3]

//================================================================

// Вставка элементов в массив

// splice(position, 0, new_element_1, new_element_2, ...)
// указываем индекс, позицию, 0 и элементы на добавление

// Предположим, что у вас есть массив с названиями цветов в виде строк.
const colors = ['red', 'green', 'blue'];

// Следующая операция помещает один новый элемент перед вторым элементом.
colors.splice(2, 0, 'purple');

// Теперь массив цветов содержит четыре элемента
// с новым элементом, вставленным во вторую позицию.
console.log(colors); // ["red", "green", "purple", "blue"]

// Вы можете вставить более одного элемента, передав четвертый, пятый аргумент и т. д.
colors.splice(1, 0, 'yellow', 'pink');
console.log(colors); // ["red", 'yellow', 'pink', "green", "purple", "blue"]

//================================================================

// Замена элементов массива

// Предположим, у вас есть массив языков программирования из четырех элементов.
const languages = ['C', 'C++', 'Java', 'JavaScript'];

// Следующая операция заменяет второй элемент на новый.
languages.splice(1, 1, 'Python');

// В массиве языков теперь все еще четыре элемента,
// но второй элемент теперь «Python» вместо «C++».
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Вы можете заменить один элемент на несколько элементов,
// передав больше аргументов
languages.splice(2, 1, 'C#', 'Swift', 'Go');

console.log(languages);
// ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// ===========================================

// Галерея картинок. Слайдеры

const images = ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg'];
let currentImgidx = 0;

console.log(images[currentImgidx]);
currentImgidx += 1;
console.log(images[currentImgidx]);
currentImgidx += 1;
console.log(images[currentImgidx]);
currentImgidx -= 1;
console.log(images[currentImgidx]);

// ==========================================

// Метод concat()
// для объединения двух или более массивов

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Monkong', 'Singu'];

const allClients = oldClients.concat(newClients);

console.log(allClients);
// ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

console.log(oldClients);
// ["Mango", "Ajax", "Poly", "Kiwi"]

console.log(newClients);
// ["Monkong", "Singu"]
