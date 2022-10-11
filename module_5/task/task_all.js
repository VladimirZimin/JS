'use strict';

/**
 * КОНТЕКСТ ВЫЗОВА ФУНКЦИИ
 */
const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],

  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

console.log(pizzaPalace.order('Smoked'));
console.log(pizzaPalace.order('Four meats'));
console.log(pizzaPalace.order('Big Mike'));
console.log(pizzaPalace.order('Viennese'));

/**
 * АККАУНТ ПОЛЬЗОВАТЕЛЯ
 */
const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],

  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

/**
 * ИСТОРИЯ ЗАКАЗОВ
 */
const historyService = {
  orders: [
    { email: 'jacob@hotmail.com', dish: 'Burrito' },
    { email: 'solomon@topmail.net', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'solomon@topmail.net', dish: 'Apple pie' },
    { email: 'jacob@hotmail.com', dish: 'Taco' },
  ],

  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(' - ');
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
};

console.log(historyService.getOrdersLog());
console.log(historyService.getEmails());
console.log(historyService.getOrdersByEmail('solomon@topmail.net'));
console.log(historyService.getOrdersByEmail('artemis@coldmail.net'));

/**
 * ПРОТОТИП ОБЪЕКТА
 */
const parent1 = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};

const child1 = Object.create(parent1);

console.log((child1.name = 'Jason'));
console.log((child1.age = 27));

/**
 * ЦЕПОЧКА ПРОТОТИПОВ
 */
const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

console.log(ancestor.isPrototypeOf(parent));
console.log(parent.isPrototypeOf(child));
console.log(ancestor.hasOwnProperty('surname'));
console.log(parent.hasOwnProperty('surname'));
console.log(child.hasOwnProperty('surname'));

/**
 * ОБЪЯВЛЕНИЕ КЛАССА
 */
class Car1 {
  constructor(params) {}
}

/**
 * КОНСТРУКТОР КЛАССА
 */
class Car {
  // НЕ Деструктуризируем объект
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

console.log(new Car('Audi', 'Q3', 36000));
console.log(new Car('BMW', 'X5', 58900));
console.log(new Car('Nissan', 'Murano', 31700));

/**
 * ОБЪЕКТ ПАРАМЕТРОВ
 */
class Car2 {
  // Деструктуризируем объект
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

console.log(new Car2({ brand: 'Audi', model: 'Q3', price: 36000 }));
console.log(new Car2({ brand: 'BMW', model: 'X5', price: 58900 }));
console.log(new Car2({ brand: 'Nissan', model: 'Murano', price: 31700 }));

/**
 * МЕТОДЫ КЛАССА
 */
class Car3 {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

/**
 * ЗАДАЧА: СКЛАД
 */
class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    return this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    return this.items.splice(index, 1);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

/**
 * ЗАДАЧА: КОНСТРУКТОР СТРОК
 */
class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value += str;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padBoth(str) {
    this.value = str + this.value + str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

/**
 * ПРИВАТНЫЕ СВОЙСТВА
 */
class Car4 {
  model;
  price;
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}

console.log(new Car4({ brand: 'Audi', model: 'Q3', price: 36000 }));

/**
 * ЗАДАЧА: СКЛАД 2.0
 * ПРИВАТНЫЕ СВОЙСТВА
 */
class Storage1 {
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

const storage1 = new Storage1(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage1.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage1.addItem('Droid');
console.log(storage1.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage1.removeItem('Prolonger');
console.log(storage1.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

/**
 * ГЕТТЕРЫ И СЕТТЕРЫ
 */
class Car5 {
  #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

/**
 * СТАТИЧЕСКИЕ СВОЙСТВА
 */
class Car6 {
  #price;
  static MAX_PRICE = 50000;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    newPrice <= Car6.MAX_PRICE ? (this.#price = newPrice) : this.#price;
  }
}

const audi = new Car6({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

/**
 * СТАТИЧЕСКИЕ МЕТОДЫ
 */
class Car7 {
  static #MAX_PRICE = 50000;
  static checkPrice(price) {
    if (this.#MAX_PRICE > price) {
      return 'Success! Price is within acceptable limits';
    }
    return 'Error! Price exceeds the maximum';
  }
  constructor({ price }) {
    this.price = price;
  }
}

const audi1 = new Car7({ price: 36000 });
const bmw1 = new Car7({ price: 64000 });

console.log(Car7.checkPrice(audi1.price)); // "Success! Price is within acceptable limits"
console.log(Car7.checkPrice(bmw1.price)); // "Error! Price exceeds the maximum"

/**
 * НАСЛЕДОВАНИЕ КЛАССОВ
 */
class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
}

console.log(Admin.AccessLevel.BASIC);
console.log(Admin.AccessLevel.SUPERUSER);

/**
 * КОНСТРУКТОР ДОЧЕРНЕГО КЛАССА
 */
class User1 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin1 extends User1 {
  accessLevel;
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
}

const mango = new Admin1({
  email: 'mango@mail.com',
  accessLevel: Admin1.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

/**
 * МЕТОДЫ ДОЧЕРНЕГО КЛАССА
 */
class User2 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin2 extends User2 {
  // Change code below this line

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor({ email, accessLevel, blacklistedEmails }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }

  blacklist(email) {
    return this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.some(mail => mail === email);
  }
  // Change code above this line
}

const mango2 = new Admin2({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango2.email); // "mango@mail.com"
console.log(mango2.accessLevel); // "superuser"

mango2.blacklist('poly@mail.com');
console.log(mango2.blacklistedEmails); // ["poly@mail.com"]
console.log(mango2.isBlacklisted('mango@mail.com')); // false
console.log(mango2.isBlacklisted('poly@mail.com')); // true
