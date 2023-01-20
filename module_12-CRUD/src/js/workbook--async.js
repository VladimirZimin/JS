/**
 * Асинхронные функции
 *
 * Асинхронные функции помогают избавиться от коллбэков и вложенных конструкций. При этом они отлично работают в связке с методами then() и catch(), потому что гарантированно возвращают промис.
 */

const fetchFriends = async () => {
  const token = await fetch('my-api.com/me');
  const user = await fetch(`my-api.com/profile?token=${token}`);
  const friends = await fetch(`my-api.com/users/${user.id}/friends`);
  return friends;
};

fetchFriends()
  .then(friends => console.log(friends))
  .catch(error => console.error(error));

/**
 * Синтаксис async/await
 *
 * Для объявления асинхронной стрелочной функции, перед списком параметров добавляем ключевое слово async. Внутри неё можно использовать оператор await и справа от него поставить что-то, что вернёт промис. Метод response.json() также возвращает промис, поэтому ставим await.
 */
const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users;
};

fetchUsers().then(users => console.log(users));

// Оператор await можно использовать только в теле асинхронной (async) функции.
// Оператор await приостанавливает функцию пока промис не выполнится (fulfilled или rejected).
// Если промис выполнился успешно (fulfilled), оператор await вернет его значение.
// Если промис был отклонен с ошибкой (rejected), оператор await выбросит ошибку.
// Асинхронная функция всегда возвращает промис, поэтому любое возвращаемое значение будет его значением.
// Если не указать возвращаемое значение, вернется промис со значением undefined.

// Function declaration
async function foo() {
  // ...
}

// Functional expression
const foo = async function () {
  // ...
};

// Arrow function
const foo = async () => {
  // ...
};

// Object method
const user = {
  async foo() {
    // ...
  },
};

// Class method
class User {
  async foo() {
    // ...
  }
}

/**
 *
 * Обработка ошибок
 *  обрабатываются в теле функции конструкцией try...catch
 *
 */

const fetchUsers1 = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};

fetchUsers();

// Если результат асинхронной функции (промис) используется во внешнем (глобальном) коде, то есть вне других асинхронных функций, ошибки обрабатываются коллбэком методом catch(). Значение параметра error в методе catch() это ошибка которую сгенерирует await если промис будет отклонен.
const fetchUsers2 = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users;
};

fetchUsers()
  .then(users => console.log(users))
  .catch(error => console.log(error));

// Так работать не будет - await можно использовать только в теле асинхронной функции.
const fetchUsers3 = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users;
};

// ❌ SyntaxError: await is only valid in async function
const users = await fetchUsers();

// Если результат асинхронной функции используется в другой асинхронной функции, ошибки обрабатываются конструкцией try...catch. Значение параметра error в блоке catch это ошибка которую сгенерирует await если промис будет отклонен.
const fetchUsers4 = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users;
};

const doStuff = async () => {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};

doStuff();

/**
 * Параллельные запросы
 * Если одновременно необходимо сделать несколько запросов, использовать синтаксис async/await нужно очень аккуратно
 */

const fetchUsers11 = async () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const firstResponse = await fetch(`${baseUrl}/users/1`);
  const secondResponse = await fetch(`${baseUrl}/users/2`);
  const thirdResponse = await fetch(`${baseUrl}/users/3`);

  const firstUser = await firstResponse.json();
  const secondUser = await secondResponse.json();
  const thirdUser = await thirdResponse.json();

  console.log(firstUser, secondUser, thirdUser);
};

fetchUsers();

// нужно запустить их параллельно. Для этого создаётся массив промисов, после чего используется метод Promise.all(), для ожидания их выполнения. Массив промисов создается методами map(), filter() и так далее, зависит от задачи.
const fetchUsers12 = async () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const userIds = [1, 2, 3];

  // 1. Создаём массив промисов
  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  // 2. Запускаем все промисы параллельно и ждем их завершения
  const users = await Promise.all(arrayOfPromises);
  console.log(users);
};

fetchUsers();

// =================================================

const fetchUsersBtn = document.querySelector('.btn');
const userList = document.querySelector('.user-list');

fetchUsersBtn.addEventListener('click', async () => {
  try {
    const users = await fetchUsers();
    renderUserListItems(users);
  } catch (error) {
    console.log(error.message);
  }
});

async function fetchUsers() {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const userIds = [1, 2, 3, 4, 5];

  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  const users = await Promise.all(arrayOfPromises);
  return users;
}

function renderUserListItems(users) {
  const markup = users
    .map(
      user => `<li class="item">
        <p><b>Name</b>: ${user.name}</p>
        <p><b>Email</b>: ${user.email}</p>
        <p><b>Company</b>: ${user.company.name}</p>
      </li>`,
    )
    .join('');
  userList.innerHTML = markup;
}
