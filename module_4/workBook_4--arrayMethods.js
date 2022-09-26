'use strict';

/************************************************************************************
 *
 * Метод forEach
 *
 * Перебирающий метод массива который используется как замена циклов for и for...of при работе с коллекцией данных.
 *
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

массив.forEach(function callback(element, index, array) {
  // Тело коллбек-функции
});

// ==========================================

const numbers = [5, 10, 15, 20, 25];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}

// Перебирающий forEach
numbers.forEach((number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
});

// Индекс 0, значение 5
// Индекс 1, значение 10
// Индекс 2, значение 15
// Индекс 3, значение 20
// Индекс 4, значение 25

// ==========================================

/***********************************************************************************
 * Метод map()
 *
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 * - Его можно использовать для того, чтобы изменить каждый элемент массива.
 *
 * - может изменить обьект в массиве или один эллемент в обьекте массива
 */

массив.map((element, index, array) => {
  // Тело коллбек-функции
});

// ==========================================

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// Оригинальный массив не изменился
console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']

// ==========================================

const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 },
];

const names = students.map(student => student.name);
console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

// ==========================================

const numbers1 = [5, 10, 15, 20, 25];

const doubledNums = numbers1.map(number => {
  return number * 3;
});
console.log('numbers', numbers1); // [5, 10, 15, 20, 25]
console.log('doubledNums', doubledNums); // [15, 30, 45, 60, 75]

// ==========================================
/***********************************************************************************
 * Array.prototype.flat(depth)
 * - Разглаживает массив до указанной глубины
 * - По умолчанию глубина 1 (вложеность массива)
 */

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
console.log(array.flat(3));

/***********************************************************************************
 * Метод flatMap()
 *
 * аналогичен методу map()
 * рименяется в случаях когда результат это многомерный массив который необходимо «разгладить»
 *
 * - Комбинация map + flat
 */

массив.flatMap((element, index, array) => {
  // Тело коллбек-функции
});

/**
 * Несколько студентов могут посещать один и тот же предмет.
 * Необходимо составить список всех предметов которые
 * посещает эта группа студентов, пока даже повторяющихся.
 */
const students2 = [
  { name: 'Манго', courses: ['математика', 'физика'] },
  { name: 'Поли', courses: ['информатика', 'математика'] },
  { name: 'Киви', courses: ['физика', 'биология'] },
];

students2.map(student => student.courses);
// [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

students2.flatMap(student => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

/***********************************************************************************
 * Метод filter()
 * используется для единственной операции - фильтрации массива,
 * то есть когда необходимо выбрать более одного элемента из коллекции по какому-то критерию.
 *
 * Array.prototype.filter()
 * - Не изменяет оригинальный массив.
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 *    - если коллбек вернул true элемент добавляется в возвращаемый массив
 *    - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
 *    - если ни один элемент не удовлетворил условию, возвращает пустой массив.
 */

массив.filter((element, index, array) => {
  // Тело коллбек-функции
});

// ==========================================
const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []

// Оригинальный массив не изменился
console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// ==========================================

const students3 = [
  { name: 'Манго', courses: ['математика', 'физика'] },
  { name: 'Поли', courses: ['информатика', 'математика'] },
  { name: 'Киви', courses: ['физика', 'биология'] },
];

const allCourses = students3.flatMap(student => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index,
);

// Для элемента 'математика' под индексом 0:
//    - indexOf() вернёт 0, потому что ищет первое совпадение.
//    - Значение параметра index будет 0.
//    - Они равны, значит это уникальный элемент.

// Для элемента 'математика' под индексом 3:
//    - indexOf() вернёт 0, потому что ищет первое совпадение.
//    - Значение параметра index будет 3.
//    - Они не равны, значит это повторяющийся - не уникальный элемент.

// ==========================================
// Массив объектов

// Необходимо отфильтровать лучших (балл выше 80), худших (балл ниже 50) и средних студентов (балл от 50 до 80).

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students4 = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 },
];

const best = students4.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Массив объектов с именами Манго и Киви

const worst = students4.filter(student => student.score < LOW_SCORE);
console.log(worst); // Массив с одним объектом Аякс

// В коллбек-функции удобно деструктуризировать свойства объекта
const average = students4.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE,
);
console.log(average); // Массив объектов с именами Поли и Хьюстон

// ==========================================
const numbers3 = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter(number => number < 10 || number > 20);
console.log(filteredNumbers); // 15

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/*
 * Получаем массив всех онлайн игроков
 */

const onlinePlayers = players.filter(({ online }) => online);
console.table(onlinePlayers);

/*
 * Получаем массив всех оффлайн игроков
 */

const offlinePlayers = players.filter(player => !player.online);
console.table(offlinePlayers);

/*
 * Получаем список хардкорных игроков с временем больше 250
 */

const hardcorePlayers = players.filter(player => player.timePlayed > 250);
console.table(hardcorePlayers);

/**
 * function
 */
const updateAllProductsPrice = (products, value) =>
  products.map(product => ({
    ...product,
    price: product.price * value,
  }));
const updatedProducts = updateAllProductsPrice(products, 1.5);
log(updatedProducts);

/***********************************************************************************
 * Метод find()
 *
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию true или undefined
 * - Не изменяет оригинальный массив.
 */

массив.find((element, index, array) => {
  // Тело коллбек-функции
});

// ==========================================

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

colorPickerOptions.find(option => option.label === 'blue'); // { label: 'blue', color: '#2196F3' }
colorPickerOptions.find(option => option.label === 'pink'); // { label: 'pink', color: '#E91E63' }
colorPickerOptions.find(option => option.label === 'white'); // undefined

// ==========================================

const numbers4 = [5, 10, 15, 20, 25];

const number = numbers4.find(number => number === 10);
console.log(number); // 10

// ==========================================

const players4 = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/*
 * Ищем игрока по id
 */
const playerIdToFind = 'player-3';
const playerWithId = players4.find(({ id }) => id === playerIdToFind);
console.log(playerWithId);

const finPlayerById = (allPlayer, playerId) => {
  return allPlayer.find(({ id }) => id === playerId);
};

console.log(finPlayerById(players, 'player-1'));
console.log(finPlayerById(players, 'player-4'));

/*
 * Ищем игрока по имени
 */
const playerNameToFind = 'Poly';
const playerWithName = players4.find(
  player => player.name === playerNameToFind,
);
console.log(playerWithName);

/**
 * function
 */
const findUserById = (users, id) => {
  return users.find(user => {
    return user.id === id;
  });
};
const user = findUserById(users, 'id-2');
console.log(user);

/***********************************************************************************
 * Метод findIndex()
 *
 * Array.prototype.findIndex()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает индекс первого элемента удовлетворяющего условию, то есть когда коллбек возвращает true
 * - Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает -1
 * - Не изменяет оригинальный массив.
 */

массив.findIndex((element, index, array) => {
  // Тело коллбек-функции
});

// ==========================================
const colorPickerOptions1 = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

colorPickerOptions1.findIndex(option => option.label === 'blue'); // 2
colorPickerOptions1.findIndex(option => option.label === 'pink'); // 3
colorPickerOptions1.findIndex(option => option.label === 'white'); // -1

/***********************************************************************************
 * Методы every() и some()
 */
/*
 * Метод every()
 *
 * Array.prototype.every()
 * - Не изменяет оригинальный массив.
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 * - Возвращает false если хотябы один элемент массив не удовлетворяет условию.
 * - Перебор массива прекращается если коллбек возвращает false
 */

массив.every((element, index, array) => {
  // Тело коллбек-функции
});

// Все элементы больше либо равны нулю? - да
[1, 2, 3, 4, 5].every(value => value >= 0); // true

// Все элементы больше либо равны нулю? - нет
[1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

/*
 * Метод some()
 *
 * Array.prototype.some()
 * - Не изменяет оригинальный массив.
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 * - Возвращает false если ни один элемент массив не удовлетворяет условию.
 * - Перебор массива прекращается если коллбек возвращает true
 */

массив.some((element, index, array) => {
  // Тело коллбек-функции
});

// Есть хотя бы один элемент больше либо равный нулю? - да
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Есть хотя бы один элемент больше либо равный нулю? - да
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Есть хотя бы один элемент меньше нуля? - нет
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Есть хотя бы один элемент меньше нуля? - да
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// ===============================================
// Массив объектов
// необходимо узнать все ли фрукты есть в наличии и есть ли в наличии хоть какие-то фрукты более 0 штук

const fruits = [
  { name: 'apples', amount: 100 },
  { name: 'bananas', amount: 0 },
  { name: 'grapes', amount: 50 },
];

// every вернет true только если всех фруктов будет больше чем 0 штук
const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// some вернет true если хотябы одного фрукта будет больше чем 0 штук
const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

// ===============================================

const players5 = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

const isAllOnline = players.every(player => player.online);
console.log('isAllOnline: ', isAllOnline); // every()

const isAnyOnline = players.some(player => player.online);
console.log('isAnyOnline: ', isAnyOnline); // some()

const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
console.log('anyHardcorePlayers: ', anyHardcorePlayers); // some()

/***********************************************************************************
 * Метод reduce()
 *
 * Array.prototype.reduce()
 * - Не изменяет оригинальный массив.
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

массив.reduce((previousValue, element, index, array) => {
  // Тело коллбек-функции
}, initialValue);

// ===============================================
const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32

// # Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
// # присваивает ей значение параметра initialValue или первого элемента
// # перебираемого массива, если initialValue не задан.
// previousValue = 0

// # Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
// # параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
// Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
// Результат - 32

// ===============================================
const numbers7 = [5, 10, 15, 20, 25];

const total1 = numbers7.reduce((acc, number) => {
  console.log(acc); // 5
  console.log(number); // 5, 10, 15, 25
});
// ===============================================
const total2 = numbers7.reduce((acc, number) => {
  console.log(acc); // 0
  console.log(number); // 5, 10, 15, 25
}, 0);
// ===============================================

// ===============================================
// Массив объектов
// Необходимо получить средний бал.
const students7 = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 },
];

// Название аккумулятора может быть произвольным, это просто параметр функции
const totalScore = students7.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

// ===============================================

/***********************************************************************************
 * Метод sort()
 *
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - Возвращает изменённый массив, то есть ссылку на отсортированный исходный.
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */

// Такой массив чисел будет отсортирован по возврастанию.
const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores); // [19, 35, 56, 61, 74, 92]

// по умолчанию значения приводятся к строке, стандартная сортировка чисел работает необычно
const scores1 = [27, 2, 41, 4, 7, 3, 75];
scores.sort();
console.log(scores1); // [2, 27, 3, 4, 41, 7, 75]

// Массив строк сортируется по алфавиту.
const studentss = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];
studentss.sort();
console.log(studentss); // [ 'Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля' ]

// При этом порядковый номер заглавных букв меньше чем у прописных.
const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
letters.sort();
console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// Из-за того, что сортируется исходный массив
// нельзя удобно сделать несколько производных коллекций
// сделать коллекцию отсортированную по возрастанию, а другую по убыванию
// Поэтому перед сортировкой делают полную копию исходного массива и сортируют уже её.
const scores2 = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores2].sort();

console.log(scores2); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

/**
 * Свой порядок сортировки чисел
 *
 * нужно передать коллбек-функцию с двумя параметрами
 * compareFunction - функция сравнения (callback)
 *
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

const descSortedNumbers = [...numbers].sort((a, b) => b - a); // Это сортировка по убыванию.
const ascSortedNumbers = [...numbers].sort((a, b) => a - b); // Это сортировка по возрастанию.
console.log('descSortedNumbers', descSortedNumbers);
console.log('ascSortedNumbers', ascSortedNumbers);

// Это сортировка по возрастанию.
const scores3 = [61, 19, 74, 35, 92, 56];
const ascendingScores1 = [...scores3].sort((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Это сортировка по убыванию.
const scores4 = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores4].sort((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

/**
 * Свой порядок сортировки строк
 *
 * Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк localeCompare()
 */

firstString.localeCompare(secondString);

/**
 * "a".localeCompare("b"); // -1
 * "b".localeCompare("a"); // 1
 * "a".localeCompare("a"); // 0
 * "b".localeCompare("b"); // 0
 *
 * Возвращает отрицательное значение если firstString должна быть перед secondString
 * Возвращает положительное значение больше нуля если firstString должна быть после secondString
 * Если строки одинаковы, возвращается ноль.
 */

const students8 = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];

const inAlphabetOrder = [...students8].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

const inReversedOrder = [...students8].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']

/**
 *
 * Сортировка объектов
 *
 */

const students9 = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
];

const inAscendingScoreOrder = [...students9].sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score,
);
console.log(inAscendingScoreOrder); // по возрастанию score

const inDescendingScoreOrder = [...students9].sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score,
);
console.log(inDescendingScoreOrder); // по убыванию score

const inAlphabeticalOrder = [...students9].sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name),
);
console.log(inAlphabeticalOrder); // в алф.порядке по name

/*
 * Кастомная сортировка сложных типов
 */
const players12 = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// По игровому времени
const sortedByBestPlayers = [...players12].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
);
console.table(sortedByBestPlayers);

const sortedByWorstPlayers = [...players12].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
);
console.table(sortedByWorstPlayers);

const byName = [...players12].sort((a, b) => {
  const result = a.name[0] > b.name[0];

  if (result) {
    return 1;
  }

  if (!result) {
    return -1;
  }
});

console.table(byName);

/*
 * В методах объекта
 */

{
  const storage = {
    currentId: 1,
    _items: [
      { id: 0, label: 'item-1' },
      { id: 1, label: 'item-2' },
    ],
    get items() {
      return this._items;
    },
    add(item) {
      this._items = [...this._items, { id: ++this.currentId, ...item }];
    },
    update(id, label) {
      const item = this._items.find(item => item.id === id);
      if (item) {
        item.label = label;
      }
      // или так, иммутабельно
      // this._items = this._items.map(item => {
      //   return item.id === id ? { ...item, label } : item;
      // });
    },
    delete(id) {
      this._items = this._items.filter(item => item.id !== id);
    },
  };
  storage.add({ label: 'item-3' });
  storage.update(1, 'updated label');
  storage.delete(0);
  log(storage.items);
}
