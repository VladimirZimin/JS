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
