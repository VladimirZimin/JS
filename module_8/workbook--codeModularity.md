# Терминал

- [Шпаргалка 1](https://tproger.ru/translations/bash-cheatsheet/)
- [Шпаргалка 2](https://habr.com/ru/company/ruvds/blog/445270/)
- Открыть
  - `control + ~`
  - `view > teminal`
  - через палитру `command + shift + p`
- Основные полезные команды
  - путь (pwd)
  - лист (ls)
  - навигация (cd)
  - очистка `clear` или `control + l`
  - создание файлов (touch)
  - создание папок (mkdir)
  - переименование/перемещение (mv)
  - удаление (rm)
  - удаление папки и ее содержимого (rm -rf)
  - удаление пустой папки (rm -dir)

# Node.js и npm

- установка
- инициализация и package.json
- [npmjs.com](https://www.npmjs.com/)
- работа с пакетами
  - установка
  - удаление
- CommonJS модули
- npm-скрипты
  - pre и post

# Транспиляция кода

- [Babel](https://babeljs.io/)
- CLI и npm-скрипты
- Пресеты
- [Browserslist](https://github.com/browserslist/browserslist)
- [Сборщик Parcel](https://parceljs.org/)
- [ECMAScript модули](https://exploringjs.com/es6/ch_modules.html)
  - Дефолтный (default) експорт и импорт
  - Именованный (named) експорт и импорт
  - Импорт пространства имён (namespace)

=============================================================================

### Node.js

node --version - проверьте версию

// JavaScript вне браузера выполните команду node -> запустится REPL
(read-eval-print loop) - интерактивная среда выполнения JS-кода

<!--  Для того чтобы выйти из REPL, нажмите комбинацию Ctrl + C  -->

с помощью команды node index.js - можно запустить файл index.js

### Пакетный менеджер npm

NPM состоит из трех основных компонентов:

1. Сайт npmjs.com - используется для поиска и ознакомления с документацией
   пакетов.
2. Интерфейс командной строки (CLI) - запускается из терминала и предоставляет
   набор команд для работы с реестром и пакетами. Позволяет создавать скрипты
   для запуска в терминале.
3. Реестр пакетов (registry) - большая общедоступная база данных инструментов
   разработки (пакетов).

Пакет (package) - небольшая JavaScript библиотека, решающая специфическую
задачу.

### Команды NPM

основные команды

- npm init - инициализирует npm в проекте и создает файл package.json
- npm install - устанавливает все зависимости перечисленные в package.json
- npm list --depth=0 - выведет в терминале список локально установленных пакетов
  с номерами их версий, без зависимостей
- npm install [package-name] - установит пакет локально в папку node_modules
- npm uninstall [package-name] - удалит пакет, установленный локально и обновит
  package.json
- npm start и npm test - запустит скрипт start или test,расположенный в
  package.json
- npm run [custom-script] - запустит кастомный скрипт, расположенный в
  package.json
- npm outdated - используется для поиска обновлений, обнаружит совместимые
  версии программно и выведет список доступных обновлений
- npm update - обновит все пакеты до максимально разрешенной версии

### Инициализация проекта

Каждый проект начинается с создания файла package.json - он отслеживает
зависимости, содержит служебную информацию, позволяет писать npm-скрипты и
служит инструкцией при создании нового проекта на основе уже готовых настроек.
Создать файл package.json можно npm-командой init, тем самым инициализировав
проект в текущей папке.

npm init

что бы пропустить дополнительные настройки файла package.json <br/>

npm init --yes или npm init -y

<!-- У каждого флага есть псевдоним - его сокращённая запись. Псевдоним флага --yes это -y, поэтому комманды npm init --yes и npm init -y делают одно и тоже. -->

package.json со значениями по умолчанию <br/>

npm config set init.author.name "YOUR_NAME" <br/>

npm config setinit.author.email "YOUR_EMAIL"

Можно редактировать файл package.json вручную

```{
  "name": "node-tut",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Alexander Repeta <mycoolemail@mail.com>",
  "license": "ISC",
  "keywords": [],
  "description": ""
}
```

### npm-скрипты

Скрипты позволяют запускать на исполнение установленные пакеты. Используя
npm-скрипты, можно создавать целые системы сборки проекта. Автоматизируем запуск
index.js. Для этого в файле package.json в поле scripts добавим скрипт запуска
start.

```
{
  "scripts": {
    "start": "node index.js"
  }
}
```

Теперь мы можем запустить его в терминале командой npm start

<!-- Если создать скрипт с любым другим именем, кроме start или test, он будет запускаться как npm run имя-скрипта - не забудьте run -->

### Установка пакетов

Что бы установить все зависимости проекта, которые есть в package.json
прописываем

npm install или npm i

если нужно для разработки и не нужно для продакшена

npm install --dev или -D

---

Одна из возможностей npm - установка пакетов, которые извлекаются из реестра и
распаковываются в папку node_modules в корне проекта.

После того как файл package.json создан, можно добавить зависимости в проект.

Зависимостью называют npm-пакет, который используется при разработке. Это
всевозможные утилиты и библиотеки. Установим библиотеку validator.js
https://www.npmjs.com/package/validator для валидации строк, например ввода
пользователя в поля формы.

npm install validator или npm i ...

NPM загрузил validator и поместил его в node_modules

созданный файл package-lock.json - это журнал снимков дерева зависимостей
проекта. Он гарантирует, что команда разработчиков использует одни и те же
версии зависимостей.

В package.json появилась новая зависимость в поле dependencies. Это означает,
что validator версии 11.1.0 был установлен как зависимость и готов к работе

```
{
  "dependencies": {
    "validator": "^11.1.0"
  }
}
```

Для того чтобы получить интерфейс пакета в Node.js-коде, необходимо вызвать
функцию require("имя-модуля"), аргументом передав ей имя модуля без определения
пути - это называется абсолютный импорт. Путь не нужен, так как по умолчанию
поиск модуля будет происходить в папке node_modules. Результатом своего
выполнения функция вернет интерфейс модуля - объект с методами или просто
функцию, зависит от пакета.

```
index.js
___________________________________

const validator = require("validator");

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log(
  "Is mango@mail.com a valid email?: ",
  validateEmail("mango@mail.com")
);

console.log(
  "Is Mangozedog.com a valid email?: ",
  validateEmail("Mangozedog.com")
);
```

Выполнив в терминале npm start получим.

```
Is mango@mail.com a valid email?: true
Is Mangozedog.com a valid email?: false
```

### Удаление пакетов

npm uninstall validator

npm remove validator или npm remove validator

### Установка определенной версии пакета

В команде установки номер версии указывается после символа @.

npm install validator@1.0.0

### Типы зависимостей

у команд npm install и npm uninstall есть три флага.

1. --save - указывает, что добавляется зависимость, которая войдет в финальный
   продукт. Пакет будет установлен локально, в папку node_modules и будет
   добавлена запись в поле dependencies в package.json.
2. --save-dev - указывает, что добавляется зависимость разработки. Пакет будет
   установлен локально, в папку node_modules, и будет добавлена запись в поле
   devDependencies в package.json.
3. --global - указывает, что добавляется глобальная зависимость, то есть
   инструмент, который доступен для любого проекта. Пакет будет установлен
   глобально (в систему).

> Если не указывать флаг, по умолчанию будет использован --save. При удалении
> пакета необходимо указывать правильный флаг, такой же как при установке. Не
> устанавливайте пакеты глобально если вы работаете на проекте с другими
> разработчиками.

### Управление версиями пакетов

1. npm outdated - используется для поиска обновлений, обнаружит совместимые
   версии программно.
2. npm update - обновит все пакеты до максимально разрешенной версии.
3. npm update [имя-пакета] - обновит указанный пакет.

> можно открыть package.json и вручную поменять версии пакетов, после чего
> выполнить npm install

### Управление кэшем

npm cache clean

### Импорт библиотеки в код

Пишем функцию, присваеваем всю библиотеку в переменную, в ('имя библиотеки')
взятое с dependencies

const joi = require('joi');

### pre и post scripts

можно обьявить запуск скрипта перед другим скриптом

```
"scripts": {
    "test": "echo \"test specified\" && exit 1",
    "pretest": "echo \"это prestart\"",
    "posttest": "echo \"это posttest\""
  },
```

### Паралельный запуск скриптов

```
"scripts": {
    "test-1": "echo \"script 1\"",
    "test-2": "echo \"script 2\"",
    "all": "npm run test-1 && npm run test-2"
  },
```

### Транспиляция кода

Преобразование кода для поддержки старых браузеров => Babel

CLI - для терминала

npm install --save-dev @babel/core @babel/cli

в scripts добавляем "build": "babel src -d dist" // значит все что в папке src
выкинь в dist

запуск - npm run build

---

Пишим файл конфигурации для каких браузеров это нужно делать - ПРЕССЕТЫ -, по
умолчанию для последних версий

ПРЕССЕТЫ - это набор привил по которым бабел будет код транспилировать

Для этого ставим пакет:

npm install @babel/preset-env --save-dev

В корне проекта делаем файл настроек .babelrc или babel.config.json

и пишем в него:

```
{
  "presets": ["@babel/preset-env"]
}
```

### [Browserslist](https://github.com/browserslist/browserslist)

можно указать для каких браузеров использовать babel

также:

```
Autoprefixer
Babel
postcss-preset-env
eslint-plugin-compat
stylelint-no-unsupported-browser-features
postcss-normalize
obsolete-webpack-plugin
```

### [Сборщик Parcel](https://parceljs.org/)

https://github.com/goitacademy/parcel-project-template

### [ECMAScript модули](https://exploringjs.com/es6/ch_modules.html)

```
greeter.js

const helloMessage = "hello!";
const goodbyeMessage = "goodbye!";

export const hello = () => helloMessage;
export const goodbye = () => goodbyeMessage;
____________________________________________

index.js

import { hello, goodbye } from "./greeter";

console.log(hello()); // "hello!"
console.log(goodbye()); // "goodbye!"
```

### Named export

!!! Первый способ - ключевое слово export. При импорте мы деструктуризируем
свойства из импортируемого объекта

```
my-module.js
const sqrt = Math.sqrt;
export const square = x => x * x;
export const diag = (x, y) => sqrt(square(x) + square(y));
_____________________________________________________

main.js
import { square, diag } from "./path/to/my-module";

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```

!!! Второй способ - это явно указать объект со свойствами для экспорта.

```
my-module.js
const sqrt = Math.sqrt;
const square = x => x * x;
const diag = (x, y) => sqrt(square(x) + square(y));

export { square, diag };
__________________________________________________

main.js
import { square, diag } from "./path/to/myModule";

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```

!!! Следующий синтаксис импортирует все экспорты модуля как объект с указанным
именем. Это называется namespace import.

```
main.js
import * as myModule from "./path/to/my-module";

console.log(myModule.square(11)); // 121
console.log(myModule.diag(4, 3)); // 5
```

### Default export

Экспорт по умолчанию - самое главное экспортируемое значение, которое может быть
чем угодно: переменной, функцией, классом и т. д.

```
my-func.js
export default function myFunc() {
  // ...
}
________________________________________
my-class.js
export default class MyClass {
  // ...
}

________________________________________


main.js
import myFunc from "./path/to/my-func";
import MyClass from "./path/to/my-class";

myFunc();

const inst = new MyClass();
```
