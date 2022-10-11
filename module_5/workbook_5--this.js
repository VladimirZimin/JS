'use strict';

// https://miro.com/welcomeonboard/YWRpblZBMTlnQ015Ukd1TGtmTVR2cDFVMUF3cTNnbE5oUlJhTnVkS1JNMjliUW0wdllWd1ZDU2RHcG9DZlVOZXwzNDU4NzY0NTM0NTU3NDU5MTA2fDI=?share_link_id=486424860840

/*
 * Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
 */

console.log('[] === []: ', [] === []); // false
console.log('{} === {}: ', {} === {}); // false
console.log(
  'function() {} === function() {}: ',
  function () {} === function () {},
); // false

// =====================================
const fnA = function () {
  console.log('hello');
};

const fnB = fnA;
console.log('fnB === fnA: ', fnB === fnA); // true

/*
 * Контекст (this)
 *    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *    - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 */

/*
 * Как метод объекта. В контексте объекта.
 */

const user1 = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this);
  },
};
// user вызывает, по этому this это контекст user
user1.showTag(); // showTag -> this {tag: 'Mango', showTag: ƒ}

/**
 * this в глобальной области видимости
 * Вызов без контекста
 * - В строгом режиме = undefined
 * - Не в строгом режиме = window
 */

function foo() {
  console.log(this);
}

foo(); // window без "use strict" и undefined с "use strict"

/*
 * this в методе объекта
 * Как метод объекта, но объявлена как внешняя функция.
 * В контексте объекта.
 */

const showTag = function () {
  console.log('showTag -> this', this); // windows || undefined // tag: 'Mango', showUserTag: ƒ
  console.log('showTag -> this.tag', this.tag); // undefined // Mango
};

showTag(); // не в контексте обьекта = undefined

const user = {
  tag: 'Mango',
};

user.showUserTag = showTag; // ссылка на функцию выше
console.log('user', user); // tag: 'Mango', showUserTag: ƒ

user.showUserTag(); // в контексте user

/*
 * Вызов без контекста, но объявлена как метод объекта.
 */

const user = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
  },
};

user.showTag(); // в контексте user

const outerShowTag = user.showTag;

outerShowTag(); // вызов без обьекта = undefined

/*
 * Контекст в callback-функциях
 */

const user = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this); // undefined
    console.log('showTag -> this.tag', this.tag); // ошибка
  },
};

const invokeAction = function (action) {
  console.log(action);

  action(); // вызов без контекста
};

invokeAction(user.showTag); // ссылка на функцию

/**
 * this в стрелочных функциях
 * Стрелочные функции не имеют своего this
 * this ссылаеться на место обьявления
 */

const showThis = () => {
  console.log('this in showThis: ', this);
};

showThis(); // this in showThis: window

const user = {
  username: 'Mango',
};
user.showContext = showThis;

user.showContext(); // this in showThis: window

// ================================================
const hotel = {
  username: 'Resort hotel',
  showThis() {
    const foo = () => {
      // Стрелки запоминают контекст во время объявления,
      // из родительской области видимости
      console.log('this in foo: ', this);
    };

    foo();
    console.log('this in showThis: ', this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

/************************************************************
 *
 * Методы функций
 *
 * когда функцию нужно вызвать в контексте какого-то объекта
 * функция не является его методом.
 *
 * у функций есть методы call, apply и bind
 * (вызов, подать заявку, связывать,)
 *
 ************************************************************/

/*
 *
 * call и apply
 *
 */

/*
foo.call(obj, arg1, arg2, ...)
foo.apply(obj, [arg1, arg2, ...])
*/

// Метод call вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст аргументы arg1, arg2

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango1 = {
  username: 'Манго',
};
const poly1 = {
  username: 'Поли',
};

greetGuest.call(mango1, 'Добро пожаловать'); // Добро пожаловать, Манго.
greetGuest.call(poly1, 'С приездом'); // С приездом, Поли.

// =========================================================
// Метод apply вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст элементы массива как отдельные аргументы arg1, arg2

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: 'Манго',
};
const poly = {
  username: 'Поли',
};

greetGuest.apply(mango, ['Добро пожаловать']); // Добро пожаловать, Манго.
greetGuest.apply(poly, ['С приездом']); // С приездом, Поли.

// =========================================================

const showThis1 = function (a, b, arr) {
  console.log(a, b, arr);
  console.log('showThis -> this', this);
};

showThis1();

const objA = {
  a: 5,
  b: 10,
};

showThis1.call(objA, 5, 1, [100, 200, 300]);
showThis1.apply(objA, [5, 1, [100, 200, 300]]);

const objB = {
  x: 788,
  y: 25,
};

showThis1.call(objB, 1, 1, 2);
showThis1.apply(objB, [1, 1, 2]);

showThis1();

// ===================================================

const changeColor = function (color) {
  console.log('changeColor -> this', this);
  this.color = color;
};

const hat = {
  color: 'black',
};

changeColor.call(hat, 'orange');
console.log(hat);

const sweater = {
  color: 'green',
};

changeColor.call(sweater, 'blue');
console.log(sweater);

/*
 *
 * bind
 * делает копию функции с привязаным контекстом
 * Получается копия функции которую можно передать куда угодно
 * и вызвать когда угодно
 */

const changeHatColor = changeColor.bind(hat); // навсегда привязан контекст hat
const changeSweaterColor = changeColor.bind(sweater);

changeHatColor('yellow');
console.log(hat);

changeSweaterColor('red');
console.log(sweater);

// ===================================================

function greet(clientName) {
  return `${clientName}, добро пожаловать в «${this.service}».`;
}

const steam = {
  service: 'Steam',
};
const steamGreeter = greet.bind(steam);
steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."

const gmail = {
  service: 'Gmail',
};
const gmailGreeter = greet.bind(gmail);
gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."

/*
 *
 * counter
 *
 */

const counter = {
  value: 0,
  increment(value) {
    console.log('increment -> this', this);
    this.value += value;
  },
  decrement(value) {
    console.log('decrement -> this', this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));

console.log(counter);
