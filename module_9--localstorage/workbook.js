/**
 * Формат JSON
 * Для пересылки данных между клиентом и сервером
 *
 * Синтаксис похож на объект, за исключением того, что ключи это всегда строки в двойных кавычках. Строчные значения также обязательно должны быть заключены в двойные кавычки. Значениями свойств могут быть типы string, number, object, array, boolean и null
 */

/*
 {
  "name": "Josh",
  "weight": 175,
  "age": 30,
  "eyecolor": "brown",
  "isHappy": true,
  "cars": ["Chevy", "Honda"],
  "favoriteBook": {
    "title": "The Last Kingdom",
    "author": "Bernard Cornwell",
    "rating": 8.38
  }
}
*/

/**
 * Метод JSON.stringify()
 *
 * берет обьект и приводит к строке
 *
 * Принимает значение и преобразовывает его в JSON. Значением может быть число, буль, null, массив или обьект. Строки это уже валидный JSON поэтому их преобразование не имеет смысла.
 */

const dog = {
  name: 'Mango',
  age: 3,
  isHappy: true,
};

const dogJSON = JSON.stringify(dog);
console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"
// Результат вызова JSON.stringify(dog) это валидный JSON (строка), который может быть сохранен в файл или передан по сети

// если у объекта есть методы, то при преобразовании они будут проигнорированы.
const doog = {
  name: 'Mango',
  age: 3,
  isHappy: true,
  bark() {
    console.log('Woof!');
  },
};

const doogJSON = JSON.stringify(doog);
console.log(doogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

// Также при попытке преобразовать функцию в JSON, результатом будет undefined.
JSON.stringify(() => console.log('Well, this is awkward')); // undefined

/**
 * Метод JSON.parse()
 *
 * из JSON валидное JavaScript значение
 */

const json = '{"name":"Mango","age":3,"isHappy":true}';

const dog1 = JSON.parse(json);
console.log(dog1); // {name: "Mango", age: 3, isHappy: true}
console.log(dog1.name); // "Mango"

/**
 * Веб-хранилище Web Storage API
 *
 * локального хранилища (localStorage)
 * хранилища сеансов (sessionStorage)
 *
 * Предоставляет способ хранения данных ключ:значение
 *
 * В веб-хранилище не записывают методы объектов или функции, только данные.
 */

// Локальное хранилище (localStorage) уникально для каждого веб-приложения и будет одинаковым между несколькими вкладками в которых оно (веб-приложение) запущено

// Хранилище сеансов (sessionStorage) похоже на локальное, оно также уникально для кажого веб-приложения, но время жизни сохраненных данных огрничено сессией вкладки браузера

/**
 * Локальное хранилище localStorage
 *
 * Локальное и хранилище сессии это часть браузера, поэтому они доступны как свойства объекта window, имеют одинаковый набор свойств и методов и различаются только поведением.
 */

/**
 * - setItem(key, value) - делает новую, или обновляет уже существующую запись в хранилище.
 * - getItem(key) - возвращает из хранилища значение с ключом key.
 * - removeItem(key) - удаляет из хранилища запись с ключом key.
 * - clear() - полностью очищает все записи в хранилище.
 * - length - хранит количество записей в хранилище.
 */

/**
 * Сохранение setItem(key, value)
 */
localStorage.setItem('ui-theme', 'light');
localStorage.setItem('sidebar', 'expanded');
localStorage.setItem('notification-level', 'mute');

// Если необходимо сохранить что-то кроме строки, например массив или объект, необходимо преобразовать их в строку методом JSON.stringify().

const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem('settings', JSON.stringify(settings));

/**
 * Чтение getItem(key)
 * Если в хранилище нет записи с таким ключом, метод возвращает null
 * Когда значение это обычная строка - нет необходимости её парсить.
 */

localStorage.setItem('ui-theme', 'dark');

const theme = localStorage.getItem('ui-theme');
console.log(theme); // "dark"

// В противном случае, необходимо распарсить значение методом JSON.parse(), чтобы получить валидные данные.

const settings1 = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem('settings', JSON.stringify(settings));

const savedSettings = localStorage.getItem('settings');
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // settings object

/*
Не забывайте использовать конструкцию try...catch с методом JSON.parse(), чтобы избежать «падения» скрипта если вдруг прочитали не валидный JSON.
*/

/**
 * Удаление removeItem(key)
 */

localStorage.setItem('ui-theme', 'dark');
console.log(localStorage.getItem('ui-theme')); // "dark"

localStorage.removeItem('ui-theme');
console.log(localStorage.getItem('ui-theme')); // null

/**
 * Очистка хранилища clear()
 */
localStorage.setItem('ui-theme', 'light');
localStorage.setItem('sidebar', 'expanded');
localStorage.setItem('notification-level', 'mute');
console.log(localStorage.getItem('ui-theme')); // "light"
console.log(localStorage.getItem('sidebar')); // "expanded"
console.log(localStorage.getItem('notification-level')); // "mute"

localStorage.clear();
console.log(localStorage.getItem('ui-theme')); // null
console.log(localStorage.getItem('sidebar')); // null
console.log(localStorage.getItem('notification-level')); // null

/**
 * Сохраняем сообщение
 *
 * Создадим форму для ввода сообщения и будем сохранять его в localStorage при сабмите. Изменяйте значение текстового поля и нажимате кнопку «Save». Текст в поле вывода изменится на введенный.
 *
 * При загрузке страницы мы берем из localStorage последнее сохраненное значение.
 */

const form = document.querySelector('#message-form');
const output = document.querySelector('#output');
const LOCALSTORAGE_KEY = 'goit-example-message';

updateOutput();
form.addEventListener('submit', saveMessage);

function saveMessage(evt) {
  evt.preventDefault();
  localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
  updateOutput();
  form.reset();
}

function updateOutput() {
  output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
}

// Посмотреть содержимое веб-хранилища можно в инструментах разработчика на вкладке Application. Там же можно вручную удалять и добавлять записи. На практике это используется во время разработки и отладки работы приложения.

/**
 * Сервис для localStorage
 *
 * Для того чтобы сократить количество повторяющегося кода при работе с веб-хранилищем, можно написать сервис с стандартными методами, например save и load. Они будут абстрагировать повторяющийся код проверки ошибок парса и тому подобную рутину.
 */

// storage.js
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export default {
  save,
  load,
};

/**
 * Шаблонизатор
 *
 * передаем строку => переобразовывает в функцию
 *
 * handlebars
 * parcel-plugin-handlebars-precompile
 *
 * pug
 * nunjacks
 */

`<div>{{ name }}</div>`;
const template = templateEngine.compile('<div>{{ name }}</div>');
template({ name: 'Sveta' }); // <div>Sveta</div>

/**
 * билд в продакшн
 */

// src/*.html - все html в папке src

// public url - брать файлы не с корня, а с папки которая лежит в корне
// dist - имя репо на гите
// --public-url /dist/
// parcel entry.js --public-url ./dist/

/**
 * плагин для создания папок в dist
 * parcel-plugin-custom-dist-structure
 */
