/**
 * HTTP-методы
 *
 * POST	Создать новый ресурс
 * GET	Получить набор ресурсов или один ресурс
 * PUT	Обновить существующий или создать новый ресурс
 * PATCH	Обновить существующий ресурс
 * DELETE	Удалить ресурс
 */

/**
 * Коды ответов
 *
 * 1XX	Несут информационное назначение
 * 2XX	Коды успешного проведения операции
 * 3XX	Описывают все, что связано с перенаправлением (redirect)
 * 4XX	Указывают на ошибки клиента
 * 5XX	Указывают на ошибки со стороны сервера
 */

/**
 * 200 (OK)	Стандартный ответ для успешных HTTP-запросов.
 * 201 (Created)	Стандартный ответ для HTTP-запроса, который привел к успешному созданию ресурса.
 * 400 (Bad Request)	Запрос не может быть обработан из-за неверного синтаксиса запроса или другой ошибки клиента.
 * 401 (Unauthorized)	Для доступа к ресурсу требуется авторизация.
 * 403 (Forbidden)	У клиента нет разрешения на доступ к этому ресурсу.
 * 404 (Not Found)	В настоящее время ресурс не найден. Возможно, он был удален или еще не существует.
 * 500 (Internal Server Error)	Общий ответ на непредвиденный сбой сервера, если нет более конкретной информации.
 */

/**
 * HTTP-заголовки
 *
 * Accept: text/html  - заголовок, тип ресурса
 * Content-Type: application/json
 *
 * MIME-типы варианты типов контента. Используются для указания содержимого запроса и ответа, состоят из типа и подтипа, которые разделены косой чертой /
 *
 * текстовый файл, содержащий HTML, будет описан типом text/html.
 * Если файл содержит CSS, он будет описан как text/css
 * в формате JSON будут описаны как application/json
 */

/**
 * Пути
 * Запросы должны содержать путь к ресурсу
 *
 * GET https://bookstore.com/api/orders
 * Accept: application/json
 *
 * один элемент коллекции
 * GET https://bookstore.com/api/orders/289
 * Accept: application/json
 */

/**
 * AJAX (Asynchronous JavaScript and XML)
 *
 * подразумевают любое общение с сервером без перезагрузки страницы
 */

/**
 * Fetch API
 *
 * Метод fetch() предоставляет современный интерфейс для составления запросов к серверу и построен на промисах.
 */

fetch(url, options);
// url - путь к данным на бэкенде которые необходимо получить, создать или изменить. Обязательный аргумент.
// options - объект настроек запроса: метод (по умолчанию GET), заголовки, тело и т. д. Необязательный аргумент.
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Response handling
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });

// ===================================================

fetch('url') // возвращает проммис
  .then(response => {
    return response.json();
  }) // response - ответ (возвращает проммис)
  .then(pokemon => {
    console.log('pokemon', pokemon);
  }) // здесь возвращаем покемона
  .catch(error => {
    console.log('error', error);
  });

// распарси ответ и если успешно дай покемона

/**
 * Проверка ответа
 *
 * Значение промиса, который возвращает метод fetch(), это объект со служебной информацией о состоянии ответа сервера. Экземпляр класса Response, снабжен различными методами и свойствами
 */

/**
 * методы которые есть на прототипе
 *
 * text() - парсит данные в простом текстовом формате, например .csv (табличные данные).
 * json() - парсит данные в JSON-формате.
 * blob() - парсит данные описывающие файл, например изображение, аудио или видео.
 */

// В певом методе then() выполняется проверка статуса ответа и преобразование данных в правильный формат, или явное создание ошибки чтобы обработать неудачный HTTP-запрос в блоке catch()

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });

/**
 * Работа с публичным REST API
 *
 * https://jsonplaceholder.typicode.com/
 */

// https://jsonplaceholder.typicode.com/users
// - https://jsonplaceholder.typicode.com - это эндпоинт, базовый URL, точка входа в API.
// - /users - ресурс, к которому мы обращаемся.

const fetchUsersBtn = document.querySelector('.btn');
const userList = document.querySelector('.user-list');

fetchUsersBtn.addEventListener('click', () => {
  fetchUsers()
    .then(users => renderUserList(users))
    .catch(error => console.log(error));
});

function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUserList(users) {
  const markup = users
    .map(user => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join('');
  userList.innerHTML = markup;
}

/**
 * Параметры строки запроса
 *
 * Символ ? указывает на старт параметров запроса. Каждый параметр это пара имя=значение. Символ & используется для указания смыслового «И», разделяя параметры в строке запроса.
 */
const url = 'https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name';

// Такой GET-запрос вернет массив из семи пользователей (всего их 10) отсортированных по имени (поле name) в алфавитном порядке. Подчеркивания в именах параметров специфичны для этого бэкенда, это не какой-то стандарт.

/**
 * Класс URLSearchParams
 *
 * Параметров может быть много, и составлять из них одну длинную строку не удобно, как для читабельности, так и для её последующего редактирования
 */
const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: 'name',
});

console.log(searchParams.toString()); // "_limit=5&_sort=name"

const url1 = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"

/**
 * HTTP-заголовки
 *
 * Класс Headers позволяет выполнять различные действия в заголовках HTTP-запроса и ответа. Эти действия включают в себя извлечение, настройку, добавление и удаление заголовков.
 */
const headers = new Headers({
  'Content-Type': 'application/json',
  'X-Custom-Header': 'custom value',
});

headers.append('Content-Type', 'text/bash');
headers.append('X-Custom-Header', 'custom value');
headers.has('Content-Type'); // true
headers.get('Content-Type'); // "text/bash"
headers.set('Content-Type', 'application/json');
headers.delete('X-Custom-Header');

// На практике для составления заголовков запроса обычно использут просто литерал объекта со свойствами. В таком случае методов не будет, что зачастую и не требуется.
const headers1 = {
  'Content-Type': 'application/json',
  'X-Custom-Header': 'custom value',
};

// Запрос с использованием заголовков будет выглядеть так.
fetch('https://jsonplaceholder.typicode.com/users', {
  headers: {
    Accept: 'application/json',
  },
}).then(response => {
  // ...
});
