'use strict';

/**
 * Есть массив loginsArray с логинами пользователей.
 * Напиши скрипт добавления логина в массив loginsArray. Добавляемый логин должен:
 *
 * проходить проверку на длину от 4 до 16-ти символов включительно
 * быть уникален, то есть отсутствовать в массиве loginsArray
 *
 *
 * Разбей задачу на подзадачи с помощью функций.
 *
 * Напиши функцию isLoginValid(login),
 * в которой проверь количество символов параметра login и
 * верни true или false в зависимости от того,
 * попадает ли длина параметра в заданный диапазон от 4-х до 16-ти
 * символов включительно.
 *
 * Напиши функцию isLoginUnique(allLogins, login),
 * которая принимает список всех логинов и добавляемый логин как
 * параметры и проверяет наличие login в массиве allLogins,
 * возвращая true если такого логина еще нет и false если логин уже используется.
 *
 *
 * Напиши функцию addLogin(allLogins, login) которая:
 *
 * Принимает новый логин и массив всех логинов как параметры
 * + Проверяет валидность логина используя вспомогательную функцию isLoginValid
 * + Если логин не валиден, прекратить исполнение функции addLogin
 * и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
 * + Если логин валиден, функция addLogin проверяеть уникальность
 * логина с помощью функции isLoginUnique
 * + Если isLoginUnique вернет false, тогда addLogin не добавляет
 * логин в массив и возвращает строку 'Такой логин уже используется!'
 * + Если isLoginUnique вернет true, addLogin добавляет новый логин
 * в loginsArray и возвращает строку 'Логин успешно добавлен!'
 *
 * 🔔 Принцип единственной ответственности функции - каждая функция делает
 * что-то одно. Это позволяет переиспользовать код и изменять логику
 * работы функции только в одном месте, не затрагивая работу программы в целом.
 *
 * Предикатные функции возвращают только true или false.
 * Такие функции принято называть начиная с is: isLoginUnique и isLoginValid
 * в нашем случае.
 *
 * isLoginUnique только проверяет есть ли такой логин в массиве и
 * возвращает true или false.
 * isLoginValid только проверяет валидный ли логин и возвращает true или false.
 * addLogin добавляет или не добавляет логин в массив.
 * При этом для проверок условия добавления использует результаты
 * вызовов других функций - isLoginUnique и isLoginValid.
 *
 */

// const loginsArray = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   if (login.length < 17 && login.length > 3) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const isLoginUnique = function (allLogins, login) {
//   let loginUnique = allLogins.includes(login);

//   if (loginUnique === false) {
//     allLogins.push(login);
//   }
//   return loginUnique;
// };

const loginsArray = [
  'Mango',
  'robotGoogles',
  'Poly',
  'Aj4x1sBozz',
  'qwerty123',
];

const isLoginValid = login =>
  login.length <= 16 && login.length >= 4 ? true : false;

const isLoginUnique = (loginsArray, login) =>
  loginsArray.includes(login) ? false : true;

const addLogin = function (loginsArray, login) {
  if (!isLoginValid(login)) {
    return `${login}: Ошибка! Логин должен быть от 4 до 16 символов`;
  }

  if (!isLoginUnique(loginsArray, login)) {
    return `${login}: Такой логин уже используется!`;
  }

  loginsArray.push(login);

  return `${login}: Логин успешно добавлен! `;
};

console.log(addLogin(loginsArray, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(loginsArray, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(loginsArray, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(loginsArray, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(loginsArray);
