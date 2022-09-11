'use strict';

// Создание объекта

const hotel = {};

/**
 * При создании объект может быть инициализирован свойствами,
 * каждое из которых описывается парами ключ:значение (key:value).
 * Свойства разделяются запятой.
 *
 * Если ключ заключен в кавычки, то это может быть произвольная строка.
 * Если кавычек нет, то вступают ограничения - имя без пробелов,
 * начинается на букву или символы _ и $.
 */

const book2 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

// Вложенные свойства
const user1 = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

// Доступ к свойствам

/**
 * object.key — через точку. используется в большинстве случаев
 *
 * На место обращения будет возвращено значение свойства с таким именем.
 * Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
 */
const book1 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

const book1Title = book1.title;
console.log(bookTitle); // 'The Last Kingdom'

const book1Genres = book1.genres;
console.log(bookGenres); // ['historical prose', 'adventurs']

const book1Price = book1.price;
console.log(bookPrice); // undefined

// Обращение к вложенным свойствам
// используется цепочка обращейний «через точку»
const user4 = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
  hobbies: ['swiming', 'music', 'sci-fi'],
};

const location = user4.location;
console.log(location); // Объект location

const country = user4.location.country;
console.log(country); // 'Jamaica'

/*
 * object["key"] — через квадратные скобки с именем ключа в кавычках, как строка.
 * используется значительно реже
 *
 * Hа место обращения будет возвращено значение свойства с таким именем.
 * Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
 */

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book['title'];
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = book['genres'];
console.log(bookGenres); // ['historical prose', 'adventurs']

const propKey = 'author';
const bookAuthor = book[propKey];
console.log(bookAuthor); // 'Bernard Cornwell'

// Изменение значения свойства
// Для этого необходимо обратиться к ним по имени, например «через точку»,
// и присвоить новое значение.

const book3 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

book3.rating = 9;
book3.isPublic = false;
book3.genres.push('драма');

console.log(book3.rating); // 9
console.log(book3.isPublic); // false
console.log(book3.genres); // ['historical prose', 'adventures', 'драма']

// Добавление свойств
// Если при записи значения по имени, такого свойства в объекте нет, оно будет создано.

const book4 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

book4.pageCount = 836;
book4.originalLanguage = 'en';
book4.translations = ['ua', 'ru'];

console.log(book4.pageCount); // 836
console.log(book4.originalLanguage); // 'en'
console.log(book4.translations); // ['ua', 'ru']

// Удаление свойств - не используется
// Удалить свойство объекта можно с помощью оператора delete

const hotel1 = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

delete hotel1.name;
console.log(hotel); // {stars: 5, capacity: 100}

delete hotel1['stars'];
console.log(hotel); // {capacity: 100}

// Короткие свойства
// Можно так, но много кода
const name1 = 'Генри Сибола';
const age1 = 25;

const user2 = {
  name: name1,
  age: age1,
};

console.log(user2.name); // "Генри Сибола"
console.log(user2.age); // 25

// пишем так если совпадает
const name2 = 'Генри Сибола';
const age = 25;

const user3 = {
  name2,
  age,
};

console.log(user3.name2); // "Генри Сибола"
console.log(user3.age); // 25

// Вычисляемые свойства
const propName = 'name';
const user = {
  age: 25,
  // Имя этого свойства будет взято из значения переменной propName
  [propName]: 'Генри Сибола',
};

console.log(user.name); // 'Генри Сибола'

// Методы объекта
// методы - это обычные свойства, значение которых - это функция

const hotel2 = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
  // Так метод объявлялся в ES5
  greetInES5: function () {
    console.log('Welcome!');
  },
  // Так метод объявляется в ES6
  greetInES6() {
    console.log('Welcome!');
  },
};

// добавляем метод
hotel.greet = function () {
  console.log('Welcome!');
};

hotel.greet(); // Welcome!
hotel.greetInEs5(); // Welcome!
hotel.greetInEs6(); // Welcome!

// Доступ к свойствам объекта в методах через this

const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
  showName() {
    console.log(this.name);
  },
  changeCapacity(value) {
    this.capacity = value;
  },
};

hotel.showName(); // Resort Hotel

hotel.changeCapacity(200);
console.log(hotel.capacity); // 200

// =====================================
// Работа с коллекцией

const storage = {
  items: [
    {
      id: 'id-1',
      name: 'apple',
      price: 30,
    },
    {
      id: 'id-2',
      name: 'cherry',
      price: 40,
    },
  ],
  getItems() {
    return this.items;
  },
  addProduct(product) {
    this.items.push(product);
  },
  removeProduct(id) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].id === id) {
        this.items.splice(i, 1);
      }
    }
  },
};

console.table(storage.getItems());
storage.addProduct({ id: 'id-3', name: 'carrots', price: 70 });
console.table(storage.getItems());
storage.removeProduct('id-2');
console.table(storage.getItems());

//Перебор объекта

/**
 * Цикл for...in
 * Для перебора объектов используется специальный цикл for...in,
 * который перебирает ключи объекта object
 *
 * классмческий метод, не используется
 */

for (key in object) {
  // инструкции
}

const book3 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

for (const key in book3) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book3[key]);
}

// Метод Object.keys()
// возвращает массив ключей его собственных свойств

const book4 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};
const keys1 = Object.keys(book4);
console.log(keys); // ['title', 'author', 'genres', 'rating']

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значение свойства
  console.log(book4[key]);
}

// Метод Object.values()
// возвращает массив значений его собственных свойств

const book5 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  rating: 8.38,
};
const keys = Object.keys(book5);
console.log(keys); // ['title', 'author', 'rating']

const values1 = Object.values(book5);
console.log(values1); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// Метод Object.values() + for...of
const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};

const values = Object.values(goods); // [6, 3, 4, 7]

let total = 0;

for (const value of values) {
  total += value;
}

console.log(total); // 20

// Метод Object.entries() используется редко
// возвращает массив записей, каждым элементом которого
// будет еще один массив из 2-х элементов

const book6 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  rating: 8.38,
};
const keys2 = Object.keys(book6);
console.log(keys2); // ['title', 'author', 'rating']

const values2 = Object.values(book6);
console.log(values2); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const entries = Object.entries(book6);
console.log(entries);
// [["title", "The Last Kingdom"],
// ["author", "Bernard Cornwell"], ["rating", 8.38]]
