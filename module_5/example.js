'use strict';

/******************************************************************************
 *
 * CAR
 *
 ******************************************************************************/

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

// =============================================================
// =============================================================
// =============================================================

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

  // Публичное свойство класса this.a
  a = 5;

  // Публичное свойство класса this.gainXp
  gainXp = amount => {
    this.xp += amount;
    console.log(this.xp);
  };

  // метод класса идет на prototype
  changePrice(newPrice) {
    this._price = newPrice;
  }

  // метод класса идет на prototype
  sayHi() {
    console.log('Car.prototype.sayHi -> this', this);
    console.log('Hello :) ');
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

// callback function
const fn = function (callback) {
  callback(1000);
};

// Обращение к Публичное свойство класса через callback function
fn(mango.gainXp);

/******************************************************************************
 *
 * HERO
 *
 ******************************************************************************/

// Объявление класса
class Hero {
  // Конструктор класса
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  // метод класса идет на prototype
  gainXp(amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
  }
}

// наследование класса Hero ( конструктор, геттер и сеттер, публичное свойство)
// Warrior.prototype = Object.create(Hero.prototype);
class Warrior extends Hero {
  // Конструктор класса
  constructor(name, xp, weapon) {
    // super(аргументы) псевдоним конструктора родительского класса (вызов Hero)
    super(name, xp);
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);
    // вызов родительского метода Hero.prototype.gainXp.call(this)
    super.gainXp(10);
  }
}

const mango2 = new Warrior('Mango', 1000, 'axe');
console.log(mango2);
mango2.attack();

// console.log(poly2.__proto__ === Berserk.prototype);
// console.log(Berserk.prototype.__proto__ === Warrior.prototype);
// console.log(Warrior.prototype.__proto__ === Hero.prototype);
// console.log(Hero.prototype.__proto__ === Object.prototype);
class Berserk extends Warrior {
  constructor(name, xp, weapon, roar) {
    super(name, xp, weapon);

    this.roar = roar;
  }

  battlecry() {
    console.log(this.roar);
  }
}

const poly2 = new Berserk('Poly', 1000, 'halberd', 'Waaaaaaaaah!');

console.log(poly2);

poly2.battlecry();

// =============================================================
// =============================================================
// =============================================================

const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const Warrior = function (name, xp, weapon) {
  // this = Object.create(Warrior.prototype);
  Hero.call(this, name, xp);

  // this: {name: 'Mango', xp: 1000}

  this.weapon = weapon;
};

Warrior.prototype = Object.create(Hero.prototype);
// {__proto__: Hero.prototype}

Warrior.prototype.constructor = Warrior;
// {__proto__: Hero.prototype, constructor: Warrior}

Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const mango1 = new Warrior('Mango', 1000, 'halberd');

console.log(mango1);

mango1.gainXp(2000);

// =============================================================
// =============================================================
// =============================================================

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
