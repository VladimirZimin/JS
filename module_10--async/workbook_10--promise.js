/**
 * Promise (обещание, промис) - объект представляющий текущее состояние асинхронной операции
 *
 * Промис может находиться в трёх состояниях:.
 * - Ожидание (pending) - начальное состояние при создании промиса.
 * - Исполнено (fulfilled) - операция исполнена успешно, с каким-то результатом.
 * - Отклонено (rejected) - операция отклонена с ошибкой.
 */

/**
 * Создание
 *
 * Промис создается как экземпляр класса Promise, который принимает функцию (executor) в качестве аргумента и сразу вызывает её, ещё до создания и возврата промиса.
 */

const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
});

/**
 * resolve(value) - функция для вызова при успешной операции. Переданный ей аргумент будет значением выполненного промиса.
 * reject(error) - функция для вызвова в случае ошибки. Переданный ей аргумент будет значением отклоненного промиса.
 */

// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

/**
 * Метод then()
 */
promise.then(onResolve, onReject);

// onResolve(value) - будет вызвана при успешном выполнении промиса и получит его результат как аргумент.
// onReject(error) - будет вызвана при выполнении промиса с ошибкой и получит её как аргумент.

// В примере, callback-функция onResolve будет вызвана через две секунды если обещание выполнится успешно, а onReject вызовется через две секунды в том случае, если обещание выполнится с ошибкой.
// Change value of isSuccess variable to call resolve or reject
const isSuccess1 = true;

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

// Will run first
console.log('Before promise.then()');

// Registering promise callbacks
promise.then(
  // onResolve will run third or not at all
  value => {
    console.log('onResolve call inside promise.then()');
    console.log(value); // "Success! Value passed to resolve function"
  },
  // onReject will run third or not at all
  error => {
    console.log('onReject call inside promise.then()');
    console.log(error); // "Error! Error passed to reject function"
  },
);

// Will run second
console.log('After promise.then()');

/**
 * Метод catch()
 *
 * для «отлова» ошибок
 */
promise.catch(error => {
  // Promise rejected
});

// Коллбек-функция будет вызвана при выполнении промиса с ошибкой, и получит её как аргумент.
// Change value of isSuccess variable to call resolve or reject
const isSuccess3 = true;

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });

/**
 * Метод finally()
 *
 * метод может быть полезен если необходимо выполнить код после того, как обещание будет разрешено (fulfilled или rejected), независимо от результата. Позволяет избежать дублирования кода в обработчиках then() и catch()
 */
promise.finally(() => {
  // Promise fulfilled or rejected
});

// Коллбэк-функция не получит никаких аргументов, поскольку нельзя определить выполнено ли обещание или отклонено. Тут будет выполняться код, который необходимо запустить в любом случае.
// Change value of isSuccess variable to call resolve or reject
const isSuccess4 = true;

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

promise
  .then(value => console.log(value)) // "Success! Value passed to resolve function"
  .catch(error => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log('Promise settled')); // "Promise settled"

/**
 * Цепочки промисов
 */
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('Final task');
  });

/**
 *
 * Промисификация функций
 *
 */
const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve('success value');
      } else {
        reject('error');
      }
    }, 2000);
  });
};

fetchUserFromServer('Mango')
  .then(user => console.log(user))
  .catch(error => console.error(error));

/**
 *
 * Методы класса Promise
 *
 */

/**
 * Promise.all()
 *
 * Принимает массив промисов, ждет их исполнения и возвращает промис
 */
Promise.all([promise1, promise2, promise3]);

// Напишем функцию которая принимает текст для resolve() и задержку в миллисекундах, а результатом своего выполнения возвращает промис. Затем создадим два промиса с разным временем задержки.
const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise('promiseA value', 1000);
const promiseB = makePromise('promiseB value', 3000);

Promise.all([promiseA, promiseB])
  .then(value => console.log(value)) //["promiseA value", "promiseB value"]
  .catch(error => console.log(error));

/**
 * Promise.race()
 *
 * Возвращает выполненный или отклонённый промис, в зависимости от того, с каким результатом завершится самый «быстрый» из переданных промисов, со значением или причиной его отклонения.
 */
Promise.race([promise1, promise2, promise3]);

const makePromise1 = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA1 = makePromise('promiseA value', 1000);
const promiseB1 = makePromise('promiseB value', 3000);

Promise.race([promiseA1, promiseB1])
  .then(value => console.log(value)) // "promiseA value"
  .catch(error => console.log(error));

/**
 * Promise.resolve() и Promise.reject()
 *
 * Статические методы для создания мгновенно выполняющихся успешно или отклонённых промисов. Работают аналогично new Promise() за исключением возможности указать задержку, но имеют более краткий синтаксис.
 */
// Fulfilled promise
new Promise(resolve => resolve('success value')).then(value =>
  console.log(value),
);

Promise.resolve('success value').then(value => console.log(value));

// Rejected promise
new Promise((resolve, reject) => reject('error')).catch(error =>
  console.error(error),
);

Promise.reject('error').catch(error => console.error(error));

//Эти методы используются при промисификации функций, когда необходимо построить цепочку промисов и начальное значение уже есть. Выполним рефакторинг следующего кода.

const makeGreeting = guestName => {
  if (guestName === '' || guestName === undefined) {
    return {
      success: false,
      message: 'Guest name must not be empty',
    };
  }

  return {
    success: true,
    message: `Welcome ${guestName}`,
  };
};

const result = makeGreeting('Mango');

if (result.success) {
  console.log(result.message);
} else {
  console.error(result.message);
}

// При использовании колбеков отпадает необходимость возвращать сложные объекты со статусом операции и проверять его во внешнем коде.
const makeGreeting2 = (guestName, onSuccess, onError) => {
  if (guestName === '' || guestName === undefined) {
    return onError('Guest name must not be empty');
  }
  onSuccess(`Welcome ${guestName}`);
};

makeGreeting(
  'Mango',
  greeting => console.log(greeting),
  error => console.error(error),
);

// Последним шагом будет промисификация функции makeGreeting(), для того чтобы полностью убрать её зависимость от внешнего кода.
const makeGreeting3 = guestName => {
  if (guestName === '' || guestName === undefined) {
    return Promise.reject('Guest name must not be empty');
  }

  Promise.resolve(`Welcome ${guestName}`);
};

makeGreeting('Mango')
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));
