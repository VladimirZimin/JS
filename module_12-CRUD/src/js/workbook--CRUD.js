/**
 * POST	Операция create - создать новый ресурс.
 * GET	Операция read - получить набор ресурсов или один ресурс по идентификатору.
 * PUT и PATCH	Операция update - обновить ресурс по идентификатору.
 * DELETE	Операция delete - удалить ресурс по идентификатору
 */

// https://jsonplaceholder.typicode.com/

/**
 *
 * Чтение метод GET
 * для получения существующих данных
 *
 */

//Получим массив всех постов. Для этого обращаемся к ресурсу /posts описанному в документации бэкенда. Метод fetch() по умолчанию делает GET-запрос, поэтому переопределять опции запроса не обязательно.
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.log(error));

//Получим один пост по идентификатору (свойство id) добавив его к ресурсу /posts/:postId
// Change this number to fetch different post
const postId = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log(error));

/**
 *
 * Создание Метод POST
 * для добавления нового ресурса
 *
 */

// Метод fetch() должен отправить на сервер POST-запрос, в теле которого будет объект с полями author и body, идентификатор будет автоматически создан базой данных.
const postToAdd = {
  author: 'Mango',
  body: 'CRUD is awesome',
};

const options1 = {
  method: 'POST',
  body: JSON.stringify(postToAdd),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

fetch('https://jsonplaceholder.typicode.com/posts', options1)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log(error));

//При передаче сложных типов данных, их обязательно необходимо привести к строке методом JSON.stringify(). Не забываем указать заголовок Content-Type, который уточняет для бэкенда тип передаваемых данных.

/**
 *
 * Обновление Методы PUT и PATCH
 * для обновления существующих данных.
 *
 */

// Change value of id property to update different post
const postToUpdate = {
  id: 1,
  body: 'CRUD is really awesome',
};

const options = {
  method: 'PATCH',
  body: JSON.stringify(postToUpdate),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log('ERROR' + error));

// В ответ, если все хорошо, получим обновленный объект.

// {
//   id: 1,
//   author: 'Mango',
//   content: 'CRUD is really awesome',
// }

/**
 *
 * Удаление Метод DELETE
 * для удаления существующих данных
 *
 */
const postIdToDelete = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
  method: 'DELETE',
})
  .then(() => console.log('Post deleted'))
  .catch(error => console.log('Error:', error));
