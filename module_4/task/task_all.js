'use strict';

/**
 * callback function
 */

// ******* ФУНКЦИЯ КАК ЗНАЧЕНИЕ
function makePizza() {
  return 'Your pizza is being prepared, please wait.';
}

const result = makePizza(); // вызов function
const pointer = makePizza; // ссылка на функцию makePizza

// ******* КОЛБЭК-ФУНКЦИИ
// Функция обратного вызова (callback, колбэк)
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}
// Функция обратного вызова (callback, колбэк)
function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Функция высшего порядка(higher order function)
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

makeMessage('Royal Grand', makePizza);
makeMessage('Ultracheese', deliverPizza);

// ******* ИНЛАЙН-КОЛБЭКИ
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza('Royal Grand', function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});

makePizza('Ultracheese', function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

// ******* НЕСКОЛЬКО КОЛБЭКОВ
const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    for (let pizza of pizzaPalace.pizzas) {
      if (pizza === pizzaName) {
        return onSuccess(pizzaName);
      }
    }
    return onError(pizzaName);
  },
};

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! There is no pizza with a name ${error} in the assortment.`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

/**
 * array methods
 */

// ******* МЕТОД FOREACH(CALLBACK)
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(element => {
    totalPrice += element;
  });

  return totalPrice;
}

calculateTotalPrice([12, 85, 37, 4]); // 138
calculateTotalPrice([164, 48, 291]); // 503

// ******* ЗАДАЧА. ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ ******* МЕТОД FOREACH(CALLBACK)
function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(element => {
    if (element > value) {
      filteredNumbers.push(element);
    }
  });

  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
filterArray([1, 2, 3, 4, 5], 4); // [5]
filterArray([1, 2, 3, 4, 5], 5); // []
filterArray([12, 24, 8, 41, 76], 38); // [41, 76]

// ******* ОБЩИЕ ЭЛЕМЕНТЫ ******* МЕТОД FOREACH(CALLBACK)
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
}

console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

/**
 * СТРЕЛОЧНЫЕ ФУНКЦИИ.
 */

// ******* НЕЯВНЫЙ ВОЗВРАТ ******* СТРЕЛОЧНЫЕ ФУНКЦИИ.
// function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// ******* СТРЕЛОЧНЫЕ ФУНКЦИИ КАК КОЛЛБЕКИ
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => {
    totalPrice += item;
  });

  return totalPrice;
};

/**
 * ЧИСТЫЕ ФУНКЦИИ
 */

// ******* ЧИСТЫЕ ФУНКЦИИ ******* возвращают новый массив
function changeEven(numbers, value) {
  const newArray = [];

  numbers.forEach(element => {
    if (element % 2 === 0) {
      element = element + value;
      newArray.push(element);
    } else {
      newArray.push(element);
    }
  });

  return newArray;
}

console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]

// ******* МЕТОД MAP()
const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

const planetsLengths = planets.map(item => item.length);
console.log(planetsLengths); // [5, 4, 5, 7]

// ******* МЕТОД MAP() И МАССИВ ОБЪЕКТОВ
const books = [
  { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.38 },
  { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 8.51 },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const titles = books.map(item => item.title);
console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]

// ******* МЕТОД FLATMAP()
const books1 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    genres: ['fiction'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    genres: ['horror', 'mysticism'],
  },
];

const genres = books1.flatMap(item => item.genres);

console.log(genres); // [ "adventure", "history", "fiction", "horror", "mysticism" ]

// ******* МЕТОДЫ FILTER
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(item => !(item % 2));
const oddNumbers = numbers.filter(item => item % 2);

console.log(evenNumbers); // [24, 82, 36, 18, 52]
console.log(oddNumbers); // [17, 61, 47, 73]

// ******* ФИЛЬТРАЦИЯ УНИКАЛЬНЫХ ЭЛЕМЕНТОВ
const books2 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    genres: ['fiction', 'mysticism'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    genres: ['horror', 'mysticism', 'adventure'],
  },
];

const allGenres = books2.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter(
  (element, index, array) => array.indexOf(element) === index,
);

console.log(allGenres); // ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
console.log(uniqueGenres); // ["adventure", "history", "fiction", "mysticism", "horror"]

// ******* МЕТОД FILTER() И МАССИВ ОБЪЕКТОВ
const books3 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';

const topRatedBooks = books3.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books3.filter(book => book.author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor);

// ===============================
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];
// ===============================

// ******* ПОЛЬЗОВАТЕЛИ В ВОЗРАСТНОЙ КАТЕГОРИИ
const getUsersWithAge = (users, minAge, maxAge) =>
  users.filter(user => user.age >= minAge && user.age <= maxAge);

// ******* ПОЛЬЗОВАТЕЛИ С ЦВЕТОМ ГЛАЗ
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

// ******* ПОЛЬЗОВАТЕЛИ С ДРУГОМ
const getUsersWithFriend = (users, friendName) =>
  users.filter(user => user.friends.includes(friendName));

// ******* СПИСОК ДРУЗЕЙ, НЕПОВТОРЯЮЩИХСЯ
const getFriends = users =>
  users
    .flatMap(user => user.friends)
    .filter((user, index, array) => array.indexOf(user) === index);

console.log(getFriends(users));

// ******* АКТИВНЫЕ ПОЛЬЗОВАТЕЛИ
const getActiveUsers = users => users.filter(user => user.isActive);

// ******* НЕАКТИВНЫЕ ПОЛЬЗОВАТЕЛИ
const getInactiveUsers = users => users.filter(user => !user.isActive);

// ******* МЕТОД FIND() ******* return first true
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR1 = 'Robert Sheckley';

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

// *******  ПОЛЬЗОВАТЕЛЬ С ПОЧТОЙ
const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

// ******* МЕТОД EVERY() ******* все элементы массива, true или false
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every(item => !(item % 2));
const eachElementInFirstIsOdd = firstArray.every(item => item % 2);

const eachElementInSecondIsEven = secondArray.every(item => !(item % 2));
const eachElementInSecondIsOdd = secondArray.every(item => item % 2);

const eachElementInThirdIsEven = thirdArray.every(item => !(item % 2));
const eachElementInThirdIsOdd = thirdArray.every(item => item % 2);

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);
console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);
console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd);

// ******* ВСЕ ЛИ ПОЛЬЗОВАТЕЛИ АКТИВНЫ ******* МЕТОД EVERY()
const isEveryUserActive = users => users.every(user => user.isActive);

// ******* МЕТОД SOME() ******* хотя бы один элемент, true или false
const anyElementInFirstIsEven = firstArray.some(item => !(item % 2));
const anyElementInFirstIsOdd = firstArray.some(item => item % 2);

const anyElementInSecondIsEven = secondArray.some(item => !(item % 2));
const anyElementInSecondIsOdd = secondArray.some(item => item % 2);

const anyElementInThirdIsEven = thirdArray.some(item => !(item % 2));
const anyElementInThirdIsOdd = thirdArray.some(item => item % 2);

console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);
console.log(anyElementInSecondIsEven);
console.log(anyElementInSecondIsOdd);
console.log(anyElementInThirdIsEven);
console.log(anyElementInThirdIsOdd);

// ******* ЕСТЬ ЛИ АКТИВНЫЕ ПОЛЬЗОВАТЕЛИ ******* МЕТОД SOME()
const isAnyUserActive = users => users.some(user => user.isActive);

// ******* МЕТОД REDUCE()
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
const totalPlayTime = playtimes.reduce(
  (previous, current) => (previous += current),
  0,
);
const averagePlayTime = totalPlayTime / playtimes.length;

console.log(playtimes);
console.log(totalPlayTime);
console.log(averagePlayTime);

// ******* МЕТОД REDUCE() И МАССИВ ОБЪЕКТОВ
const players1 = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players1.reduce(
  (total, player) => (total += player.playtime / player.gamesPlayed),
  0,
);

console.log(totalAveragePlaytimePerGame);

// ******* ОБЩИЙ БАЛАНС ПОЛЬЗОВАТЕЛЕЙ ******* МЕТОД REDUCE()
const calculateTotalBalance = users =>
  users.reduce((total, user) => (total += user.balance), 0);

// ******* ОБЩЕЕ КОЛИЧЕСТВО ДРУЗЕЙ ******* МЕТОД REDUCE()
const getTotalFriendCount = users =>
  users.reduce((total, user) => (total += user.friends.length), 0);

// ******* МЕТОД SORT() ******* сортирует исходный массив.
const releaseDates1 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
];

const ascendingReleaseDates1 = [...releaseDates1].sort();
const alphabeticalAuthors1 = [...authors].sort();

console.log(ascendingReleaseDates1);
console.log(alphabeticalAuthors1);

// ******* СВОЙ ПОРЯДОК СОРТИРОВКИ ЧИСЕЛ ******* МЕТОД SORT()
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

console.log(ascendingReleaseDates);
console.log(descendingReleaseDates);

// ******* СВОЙ ПОРЯДОК СОРТИРОВКИ СТРОК ******* МЕТОД SORT() + метод строк localeCompare()
const authors1 = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
  'Howard Lovecraft',
];

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);

// ******* СОРТИРОВКА ОБЪЕКТОВ ******* МЕТОД SORT()
const sortedByAuthorName = [...books].sort((fistBook, secondBook) =>
  fistBook.author.localeCompare(secondBook.author),
);
const sortedByReversedAuthorName = [...books].sort((fistBook, secondBook) =>
  secondBook.author.localeCompare(fistBook.author),
);
const sortedByAscendingRating = [...books].sort(
  (fistBook, secondBook) => fistBook.rating - secondBook.rating,
);
const sortedByDescentingRating = [...books].sort(
  (fistBook, secondBook) => secondBook.rating - fistBook.rating,
);

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);

// ******* СОРТИРОВКА ПО БАЛАНСУ ******* МЕТОД SORT()
const sortByAscendingBalance = users =>
  [...users].sort(
    (fistUser, secondUser) => fistUser.balance - secondUser.balance,
  );

// ******* СОРТИРОВКА ПО КОЛИЧЕСТВУ ДРУЗЕЙ ******* МЕТОД SORT()
const sortByDescendingFriendCount = users =>
  [...users].sort((a, b) => b.friends.length - a.friends.length);

console.log(sortByDescendingFriendCount(users));

// ******* СОРТИРОВКА ПО ИМЕНИ ******* МЕТОД SORT()
const sortByName = users =>
  [...users].sort((fistUser, secondUser) =>
    fistUser.name.localeCompare(secondUser.name),
  );

// ******* ЦЕПОЧКИ МЕТОДОВ (ЧЕЙНИНГ, CHAINING)
const books4 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
];

const MIN_BOOK_RATING = 8;

const names = books4
  .filter(book => book.rating > MIN_BOOK_RATING)

  .map(book => book.author)
  .sort();

// ******* ПОЛЬЗОВАТЕЛИ И ДРУЗЬЯ ******* по возврастанию кол.друзей
const getNamesSortedByFriendCount = users =>
  [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);

// ******* ИМЕНА ДРУЗЕЙ
// уникальных имён друзей (свойство friends) отсортированный по алфавиту
const getSortedFriends = users =>
  users
    .flatMap(user => user.friends)
    .filter((user, index, array) => array.indexOf(user) === index)
    .sort();

console.log(getSortedFriends(users));

// ******* ОБЩИЙ БАЛАНС
// возвращала общий баланс по полу пользователя
const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .reduce((total, user) => (total += user.balance), 0);

console.log(getTotalBalanceByGender(users, 'male'));
