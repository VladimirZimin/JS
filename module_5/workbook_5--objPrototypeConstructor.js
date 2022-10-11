'use strict';

/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

/**
 * Прототип объекта
 * Метод Object.create(obj) создаёт и возвращает новый объект,
 * связывая его с объектом obj.
 *
 * Метод isPrototypeOf() проверяет является ли объект прототипом
 * возвращает true или false
 */

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Манго';

console.log(dog); // { name: 'Манго', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true

console.log(dog.hasOwnProperty('name')); // true
console.log(dog.name); // 'Манго'

console.log(dog.hasOwnProperty('legs')); // false
console.log(dog.legs); // 4

// =======================================================
const objC = {
  z: 5,
};

const objB = Object.create(objC);
objB.y = 2;

const objA = Object.create(objB);
objA.x = 1;

console.log(objA.z);
console.log('objA', objA);
console.log(objA.hasOwnProperty('x'));

// =======================================================
const dummyObj = Object.create({ message: 'Это свойство объекта протортипа' });
dummyObj.message = 'Это собственное свойство объекта';
console.log('dummyObj', dummyObj);

console.log(dummyObj.message);

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

const objA = Object.create({ z: 5 });
objA.y = 100;
console.log('objA', objA);

console.log(objA.x);

/*
 * Основы ООП:
 * класс - чертеж машины
 * экземпляр (объект) - одна машина по чертежу
 * интерфейс - набор свойств и методов
 */

/*
 * Функции-конструкторы
 * - Именование с большой буквы в единственном числе
 * - Оператор new
 * - Свойство Function.prototype
 */

// оператор new приводит к созданию нового объекта и вызову конструктора

const Car1 = function ({ brand, model, price } = {}) {
  // const { brand, model, price } = config; - деструк

  // 2. Функция вызывается в контексте созданного объекта,
  //    то есть в this записывается ссылка на него
  this.brand = brand;
  this.model = model;
  this.price = price;

  // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
  //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

  // 4. Ссылка на обьект возвращается в место вызова new Car
};

Car1.prototype.sayHi = function () {
  console.log('Car.prototype.sayHi -> this', this);
  console.log('Hello :) ');
};

Car1.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

console.log(Car1.prototype);

// 1. Если функция вызывается через new, создаётся пустой объект
const myCar = new Car1({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});
console.log(myCar);

myCar.sayHi();
myCar.changePrice(10000);

const myCar2 = new Car1({ brand: 'BMW', model: 'X6', price: 50000 });
console.log(myCar2);

myCar2.sayHi();

const myCar3 = new Car1({ brand: 'Audi', model: 'A6', price: 65000 });
console.log(myCar3);

myCar3.sayHi();

// ===================================================
const User1 = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

console.log(User1.prototype);

User1.prototype.changeEmail = function (newMail) {
  this.email = newMail;
};

const mango1 = new User1({ email: 'mango@mail.com', password: 1111111 });

mango1.changeEmail('my-new-mail@mail.com');
console.log(mango1);

// ===================================================

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()

// ===================================================

/*
 * Статические свойства и методы
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен this
 */

User.message =
  'Я статическое свойство, меня нет на экземплярах или в прототипе.';

User.logInfo = function (obj) {
  console.log('User.logInfo -> obj', obj);
  console.log('Почта: ', obj.email);
  console.log('Пароль: ', obj.password);
};

User.logInfo(mango);

Object.value();

/**********************************************************
 *
 * Классы
 *
 */

/**
 * Объявление класса
 *
 * - ключевого слова class
 * - принято называть с большой буквы
 * - в названии отражать тип создаваемого объекта
 */

class User {
  // Тело класса
}

const ivan = new User();
console.log(ivan); // {} - экземпляр класса

const sveta = new User();
console.log(sveta); // {} - экземпляр класса

// ==========================================

/**
 * Конструктор класса
 */

class User {
  // Синтаксис объявления метода класса
  constructor(name, email) {
    // Инициализация свойств экземпляра
    this.name = name;
    this.email = email;
  }
}

const vlad = new User('vlad', 'mango@mail.com');
console.log(vlad); // { name: 'Манго', email: 'mango@mail.com' }

const elena = new User('elena', 'poly@mail.com');
console.log(elena); // { name: 'Поли', email: 'poly@mail.com' }

// ===============================================

/**
 * Объект параметров
 */

class User {
  // Деструктуризируем объект
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({
  name: 'Манго',
  email: 'mango@mail.com',
});
console.log(mango); // { name: "Манго", email: "mango@mail.com" }

const poly3 = new User({
  name: 'Поли',
  email: 'poly@mail.com',
});
console.log(poly3); // { name: "Поли", email: "poly@mail.com" }

// ===============================================

/**
 * Методы класса
 */

class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // Метод getEmail
  getEmail() {
    return this.email;
  }

  // Метод changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

// ===============================================

/**
 * Приватные свойства
 *
 * Добавляя к имени свойства символ # мы делаем его приватным
 * Объявление приватного свойства до инициализации в конструкторе - обязательно
 * Методы класса также могут быть приватными
 */

class User {
  // Необязательное объявление публичных свойств
  name;
  // Обязательное объявление приватных свойств
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const irina = new User({
  name: 'irina',
  email: 'irina@mail.com',
});
mango.changeEmail('irina@supermail.com');
console.log(irina.getEmail()); // irina@supermail.com
console.log(irina.#email); // Будет ошибка, это приватное свойство

// ===============================================

/**
 * Геттеры и сеттеры
 * - краткий синтаксис объявления методов
 * - имитируют обычное публичное свойство класса
 * - свойством которое хранит массив или объект они не подойдут
 *
 * Геттер выполняется при попытке получить значение свойства
 * Сеттер - при попытке его изменить
 */

class User {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}

const rita = new User({ name: 'rita', email: 'mango@mail.com' });
console.log(mango.email); // mango@mail.com
mango.email = 'mango@supermail.com';
console.log(mango.email); // mango@supermail.com

/**
 При обращении к mango.email вызызвается геттер get email() {...} и выполняется его код. При попытке записи mango.email = "mango@supermail.com" вызывается сеттер set email(newEmail) {...} и строка "mango@supermail.com" будет значением параметра newEmail.
 */

// ===============================================

/**
 * Статические свойства
 *
 * свойства, доступные только классу, но не его экземплярам
 * ключевое слово static
 */

class User {
  // Объявление и инициализация статического свойства
  static Roles = {
    ADMIN: 'admin',
    EDITOR: 'editor',
  };

  #email;
  #role;

  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({
  email: 'mango@mail.com',
  role: User.Roles.ADMIN,
});

console.log(mango.Roles); // undefined
console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

console.log(mango.role); // "admin"
mango.role = User.Roles.EDITOR;
console.log(mango.role); // "editor"

// ===============================================

/**
 * Статические методы
 *
 * методы доступные только классу
 * ключевое слово this ссылается на сам класс
 */

class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: 'mango@mail.com' });

console.log(User.isEmailTaken('poly@mail.com'));
console.log(User.isEmailTaken('mango@mail.com'));

// ===============================================
/**
 * Наследование классов
 *
 * Ключевое слово extends
 */

// дочерний класс Child наследует (расширяет) от родительского класса Parent.
class Child extends Parent {
  // ...
}

// ===============================================

/**
 Класс ContentEditor наследует от класса User его конструктор, геттер и сеттер email, а также одноимённое публичное свойство. Важно помнить что приватные свойства и методы класса-родителя не наследуются классом-ребёнком.
 */

class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  // Тело класса ContentEditor
}

const editor2 = new ContentEditor('mango@mail.com');
console.log(editor2); // { email: "mango@mail.com" }
console.log(editor2.email); // "mango@mail.com"

// ===============================================

/**
 * Конструктор дочернего класса
 */

class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor({ email, posts }) {
    // Вызов конструктора родительского класса User
    super(email);
    this.posts = posts;
  }
}

const editor1 = new ContentEditor({ email: 'mango@mail.com', posts: [] });
console.log(editor1); // { email: 'mango@mail.com', posts: [] }
console.log(editor1.email); // 'mango@mail.com'

// ===============================================

/**
 * Методы дочернего класса
 */

// Представим что выше есть объявление класса User

class ContentEditor extends User {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'
editor.addPost('post-1');
console.log(editor.posts); // ['post-1']

// =====================================================
// =====================================================

// Объявление класса
class Car {
  static description = 'Класс описывающий автомобиль'; // Статические свойства

  static logInfo(carObj) {
    console.log('Car.logInfo -> carObj', carObj); // Статические методы
  }

  #test = 'test'; // приватное свойство
  #test2; // приватное свойство
  price = 'price'; // публичные свойства
  model; // публичные свойства

  // Конструктор класса
  // Деструктуризируем объект
  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    this._price = price;
  }

  // метод класса
  changePrice(newPrice) {
    this._price = newPrice;
  }

  // Геттер - получаем значение свойства
  get price() {
    return this._price;
  }

  // Сеттер изменяем значение свойства
  set price(newPrice) {
    this._price = newPrice;
  }

  // Геттер - получаем значение свойства
  get model() {
    return this._model;
  }

  // Сеттер изменяем значение свойства
  set model(newModel) {
    this._model = newModel;
  }
}

// экземпляр класса
const carInstance = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

console.log(carInstance.model); // Геттер - получаем значение свойства
carInstance.model = 'Q4'; // вызывается сеттер, изменяем значение свойства
console.log(carInstance.model);

console.log(carInstance.price); // Геттер - получаем значение свойства
carInstance.price = 50000; // вызывается сеттер, изменяем значение свойства
console.log(carInstance.price);

console.log(carInstance);

// =====================================================
// =====================================================

/*
 * Наследование
 *  - extends
 *  - super()
 */

// базовый класс
class Hero {
  // базовый класс
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}

// наследуемый класс
class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);

    this.warcry = warcry;
  }

  babyRage() {
    console.log(this.warcry);
  }
}

const ajax = new Berserk({
  name: 'ajax',
  xp: 500,
  weapon: 'axe',
  warcry: 'waaaaaaaah',
});

console.log(ajax);

ajax.babyRage();
ajax.attack();
ajax.gainXp();

class Mage extends Hero {
  constructor({ spells, ...restProps } = {}) {
    super(restProps);

    this.spells = spells;
  }

  cast() {
    console.log(`${this.name} что-то там кастует 🧙‍♂️`);
  }
}

const mango = new Warrior({
  name: 'mango',
  xp: 1000,
  weapon: 'алебарда',
});
console.log(mango);
mango.attack();
mango.gainXp(1000);

const poly = new Mage({
  name: 'poly',
  xp: 500,
  spells: ['фаербол'],
});
console.log(poly);
poly.cast();
poly.gainXp(200);

console.log(
  'mango.__proto__ === Warrior.prototype ',
  mango.__proto__ === Warrior.prototype,
);
console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

console.log(
  'Warrior.prototype.__proto__ === Hero.prototype ',
  Warrior.prototype.__proto__ === Hero.prototype,
);

console.log(
  'Hero.prototype.__proto__ === Object.prototype ',
  Hero.prototype.__proto__ === Object.prototype,
);
