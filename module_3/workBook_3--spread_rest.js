'use strict';

/**
 * spread: передача аргументов (распыление)
 */

/*
 * Операция spread (распыление) добавление в новый массив
 * - Array.prototype.concat() и аналог через spread
 */

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

const numbers = [
  1000,
  ...[1, 2, 3],
  5000,
  ...[4, 5, 6],
  7000,
  ...[7, 8, 9],
  9000,
];

// console.log(numbers);

/*
 * Поиск самой маленькой или большой температуры (числа)
 */

const temperatures = [18, 14, 12, 21, 17, 29];

const min = Math.min(temperatures); // NaN Math.min() не умеет работать с массивом.

/**
 * нам поможет операция распыления,
 * чтобы передать элементы массива отдельными аргументами при вызове функции.
 *
 * То есть запись Math.min(...[18, 14, 12, 21, 17, 29])
 * аналогична Math.min(18, 14, 12, 21, 17, 29),
 * операция spread распылила массив элементов в аргументы функции
 */

const temps = [18, 14, 12, 21, 17, 29];

const min1 = Math.min(...temps); // 12

/**
 * копирование массива
 */

const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
const copyOfHouses = [...houses];

console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
console.log(copyOfHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
console.log(houses === copyOfHouses); // false - разные ссылки

/**
 * добавлять и удалять элементы при создании нового массива.
 */

const houses1 = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
const completeHouses1 = [...houses, 'Targaryen'];

console.log(houses1); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
console.log(completeHouses1); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell','Targaryen']

/**
 * соединять несколько массивов в один новый
 */

const firstBatch = ['Arryn', 'Frey', 'Greyjoy'];
const secondBatch = ['Stark', 'Lannister', 'Tyrell'];

const houses2 = [...firstBatch, ...secondBatch];

console.log(houses2); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']

/**
 * классические методы массива вроде slice() в комбинации с операцией spread
 */

const houses3 = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
const housesInDebt = [...houses3.slice(0, 4), ...houses3.slice(5)];

console.log(housesInDebt); // ['Arryn','Frey','Greyjoy','Stark','Tyrell']

/**
 *
 *
 * Распыление объектов
 *
 *
 */

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

const c = Object.assign({}, a, b);
console.log(c); // {x: 0, y: 2, z: 3}

// То же самое используя операцию spread
const d = { ...a, ...b };

console.log(d); // {x: 0, y: 2, z: 3}

/**
 * можно добавлять свойства в произвольное место
 * свойства распыляемого объекта могут перезаписать значение
 * существующего свойства если имена ключей совпадают
 */
const a1 = { x: 1, y: 2 };
const b1 = { x: 0, z: 3 };

const c1 = { x: 5, j: 10, ...a, z: 15, ...b };

console.log(c); // {x: 0, j: 10, y: 2, z: 3}

//============================================
const lion = { hasTail: true, legs: 4 };
const eagle = { canFly: true };

const chimera = { ...lion, ...eagle };

console.log(chimera); // {hasTail: true, legs: 4, canFly: true}

/**
 * Порядок распыления имеет значение
 */
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

/**
 *
 *
 * Деструктуризация объектов
 * распаковать
 *
 *
 */

// Если для переменной не нашлось подходящего ключа, то будет присвоен undefined
const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

// Объявим переменные и присвоим им значения из объекта
const { name, stars, status } = hotel;

console.log(name, stars, status); // "Resort Hotel", 5, undefined

/**
 * Присвоения undefined можно избежать, задав переменным значения по умолчанию
 */

const hotel1 = {
  name1: 'Resort Hotel',
  stars1: 5,
  capacity: 100,
};

const { name1 = 'hotel', stars1 = 3, status1 = 'empty' } = hotel1;

console.log(name, stars, status); // "Resort Hotel", 5, "empty"

/**
 * можно переопределить имена в процессе присвоения
 */

const hotel2 = {
  name2: 'Resort Hotel',
  stars2: 5,
  capacity: 100,
};

const { name2: hotelName, stars2, status2: hotelStatus = 'empty' } = hotel2;

console.log(hotelName, stars2, hotelStatus);
// "Resort Hotel", 5, "empty"

// Деструктуризация

const user4 = {
  name: 'Oleg',
  age: 23,
  adress: 'Kiev',
};

const foo = ({ name, age, adress, national = 'Ukraine' } = {}) => {
  return `Меня зовут ${name}, мне ${age} лет, я живу в городе ${adress}, национальность ${national}`;
};

console.log(foo(user4));

/**
 * Деструктуризация в циклах
 */

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}

// или

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}

/**
 *
 * Глубокая деструктуризация
 *
 */
const user = {
  name2: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name2,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name2); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308

/******************************************
 *
 *
 * Деструктуризация массивов
 *
 *
 ******************************************/

const rgb = [200, 255, 100];
const [red, green, blue] = rgb;

console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// ==========================
const rgb1 = [200, 255, 100];
let red1, green1, blue1;

[red1, green1, blue1] = rgb1;

console.log(`R:${red1},G:${green1},B:${blue1}`); // "R:200,G:255,B:100"

// ==========================
const rgb2 = [200, 100, 255];

const [red2, green2, blue2, alfa2 = 0.3] = rgb2;

console.log(`R:${red2},G:${green2},B:${blue2},Alfa:${alfa2}`); // "R:200,G:100,B:255,Alfa:0.3"

// ==========================
const auto = ['bmw', 'kia', 'reno'];

const [germany, , france] = auto;
console.log(germany, france); // bmw reno

// =========================
const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors);

// console.log(entries);

// for (const [name, rating] of entries) {
//   // ур2
//   // const [name, rating] = entry;

//   // ур1
//   // const name = entry[0];
//   // const rating = entry[1];

//   console.log(name, rating);
// }

/**
 *
 *
 * rest: сбор всех аргументов функции
 *
 *
 */

const profile5 = {
  name5: 'Jacques Gluke',
  tag5: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name5, tag5, location, ...restProps } = profile;

console.log(name5, tag5, location);
console.log(restProps);
console.log(profile5);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

const showProfileInfo = function (userProfile) {
  const { name, tag, location, ...restProps } = userProfile;

  // console.log(name, tag, location, avatar, followers, views, likes);
  console.log(restProps);
};

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

showProfileInfo(profile);
