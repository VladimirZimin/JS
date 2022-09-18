'use strict';

/**
 * Написать скрипт который определит и выведит сотрудника
 * который выполнил больше всех задач
 */

// const taskCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };

const findPersonWithMaxTasks = function (stats) {
  let max = 0;
  let workerName;

  const keys4 = Object.keys(stats);

  for (const key of keys4) {
    if (max < stats[key]) {
      max = stats[key];
      workerName = key;
    }
  }

  return {
    workerName,
    max,
  };
};

console.log(
  findPersonWithMaxTasks({
    ann: 209,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);

console.log(
  findPersonWithMaxTasks({
    ann: 29,
    david: 35,
    helen: 112,
    lorence: 99,
  }),
);

/**
 * Напиши функцию
 * считаети выводит общую сумму ЗП
 */

const countTotalSalary = function (samary) {
  const values = Object.values(samary);
  console.log(values);

  let total = 0;
  for (const value of values) {
    total += value;
  }

  return total;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    ivan: 80,
    fedor: 150,
    petro: 90,
    vova: 210,
  }),
);

/**
 * Напиши функцию getAllPropValues(arr, prop),
 * которая получает массив объектов и имя ключа.
 * Возвращает массив значений определенного поля prop
 * з каждого объекта в массиве
 */

const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful' },
  { name: 'Ajax', age: 3, mood: 'tired' },
];

const getAllPropValues = function (users, key) {
  const values = [];

  for (const user of users) {
    if (key in user) {
      values.push(user[key]);
    }
  }
  return values;
};

// Вызовы функции для проверки
console.log(getAllPropValues(users, 'name')); // ['Poly', 'Mango', 'Ajax']

console.log(getAllPropValues(users, 'mood')); // ['happy', 'blissful', 'tired']

console.log(getAllPropValues(users, 'active')); // []

/**
 * filter -> пришла статистика загрузок и надо выбрать те что больше процента
 */

const uploads = [
  { name: 'pdf', percentage: 14 },
  { name: 'psd', percentage: 21 },
  { name: 'mp3', percentage: 3 },
  { name: 'flac', percentage: 7 },
];

const filterUploadsWithThreshold = function (uploads, threshold) {
  const values = [];
  for (let i = 0; i < uploads.length; i += 1) {
    if (threshold < uploads[i].percentage) {
      values.push(uploads[i].percentage);
    }
  }
  return values;
};

filterUploadsWithThreshold(uploads, 10);

/*
 * Есть два массива names и prices с именами и ценами товаров.
 * Напишите функцию combine(names, prices), которая получает
 * эти два массива и возвращает массив объектов со свойствами name и price.
 */

const names = [
  'Радар',
  'Сканер',
  'Дроид',
  'Захват',
  'Двигатель',
  'Топливный бак',
];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// {
//   'Радар':  1000,
//   'Сканер': 2000
// }

const combine = function (names, prices) {
  const combined = [];

  for (let i = 0; i < names.length; i += 1) {
    const obj = {
      name: names[i],
      price: prices[i],
    };

    combined.push(obj);
  }
  return combined;
};

const products = combine(names, prices);
console.table(products); // массив объектов со свойствами name и price

/**
 * паттерн enumerable
 */

const DeliveryOption = {
  TAKEOUT: 1,
  COURIER: 2,
  POST: 3,
};

while (true) {
  userChoice = prompt(
    `Выберите вариант доставки: ${DeliveryOption.TAKEOUT} - самовывоз, ${DeliveryOption.COURIER} - курьер, ${DeliveryOption.POST} - почта`,
  );

  if (userChoice === null) {
    break;
  }

  userChoice = Number(userChoice);

  const deliveryOptions = Object.values(DeliveryOption);

  if (deliveryOptions.includes(userChoice)) {
    break;
  }
}

switch (userChoice) {
  case DeliveryOption.TAKEOUT:
    alert('Самовывоз!');
    break;

  case DeliveryOption.COURIER:
    alert('Курьер!');
    break;

  case DeliveryOption.POST:
    alert('Почта!');
    break;

  default:
    alert('Вам перезвонит менеджер!');
}

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

/*
 * Ищем друга по имени
 */

const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    // console.log(friend);
    // console.log(friend.name);

    if (friend.name === friendName) {
      return 'НАШЛИ!!!';
    }
  }

  return 'НЕ НАШЛИ :(';
};

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Получаем имена всех друзей
 */

const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    console.log(friend.name);

    names.push(friend.name);
  }

  return names;
};

/*
 * Получаем имена только друзей которые онлайн
 */
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};

console.log(getOnlineFriends(friends));

/*
 * Получаем имена только друзей которые офлайн
 */
const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

console.log(getOfflineFriends(friends));

// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй

const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);

    // const key = friend.online ? 'online' : 'offline';
    // friendsByStatus[key].push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByStatus(friends));

/**
 * Узнаем количество значений в обьекте
 */

const x = {
  a: 1,
  b: 2,
  c: 12,
  d: 23,
};

console.log(Object.keys(x).length);

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      if (productName === items[i].name) {
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity -= 1;
      }
    }
  },
};

console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('🍎');
console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.clear();
console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

cart.increaseQuantity('🍎');
console.table(cart.getItems());

cart.decreaseQuantity('🍋');
cart.decreaseQuantity('🍋');
console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

// значение в массиве

const products2 = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(productName) {
  const values = [];

  for (let product of products2) {
    if (productName in product) {
      values.push(product[productName]);
    }
  }

  return values;
}

getAllPropValues('name');
getAllPropValues('quantity');
getAllPropValues('price');
getAllPropValues('category');

// общая стоимость

const products1 = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let totalPrice = 0;

  for (const product of products1) {
    const { name, price, quantity } = product;
    if (productName === name) {
      totalPrice = price * quantity;
    }
  }

  return totalPrice;
}

calculateTotalPrice('Radar');

/**
 *
 * деструктуризация в функции
 *
 */

function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

/**
 *
 * ОПЕРАЦИЯ SPREAD ПРИ ПЕРЕДАЧЕ АРГУМЕНТОВ
 *
 */

const scores = [89, 64, 42, 17, 93, 51, 26];
const bestScore1 = Math.max(...scores);
const worstScore1 = Math.min(...scores);

console.log(bestScore);
console.log(worstScore);

// ===================================
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
]; // склеили
const bestScore = Math.max(...allScores); // самое большое число
const worstScore = Math.min(...allScores); // // самое маденькое число

console.log(allScores);
console.log(bestScore);
console.log(worstScore);

// ====================================

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
  return { completed, category, priority, ...data };
  // Change code above this line
}

makeTask({});
// возвращает { category: "General", priority: "Normal", completed: false }

makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' });
// возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

makeTask({ category: 'Finance', text: 'Take interest' });
// возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

/**
 *
 * ОПЕРАЦИЯ REST ДЛЯ СБОРА ВСЕХ АРГУМЕНТОВ ФУНКЦИИ
 *
 */

// сумма чисел, которые больше первого числа
function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (firstNumber < arg) {
      total += arg;
    }
  }
  return total;
}

addOverNum(1, 2);
addOverNum(10, 12, 4, 11, 48, 10, 8);
addOverNum(20, 74, 11, 62, 46, 12, 36);

// =====================================

function findMatches(firstNumbers, ...args) {
  const matches = [];

  for (const firstNumber of firstNumbers) {
    for (const arg of args) {
      if (firstNumber === arg) {
        matches.push(firstNumber);
      }
    }
  }

  return matches;
}

findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);

/**
 *
 * МЕТОДЫ ОБЪЕКТА
 *
 */

const bookShelf = {
  books: ['The last kingdom', 'The guardian of dreams'],

  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    this.books.splice(this.books.indexOf(bookName), 1);
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    this.books.splice(this.books.indexOf(oldName), 1, newName);

    return `Updating book ${oldName} to ${newName}`;
  },
};

bookShelf.updateBook('The last kingdom', 'Dune');

// ==============================================
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);

    return this.potions;
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        return this.potions.splice(i, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
        console.log(this.potions);

        return this.potions;
      }
    }

    return `Potion ${oldName} is not in inventory!`;
  },
};

atTheOldToad.getPotions();
atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
atTheOldToad.removePotion('Dragon breath');
atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
