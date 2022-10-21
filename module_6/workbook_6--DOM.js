/**
 * Подключение скриптов
 */

/**
 * Загрузка и выполнение скрипта указанного в теге <script>
 * без каких-либо атрибутов, блокируют обработку
 * HTML-документа и построение DOM. Это проблема.
 */
'<script src="path-to-script.js"></script>';
/**
 * Атрибут defer
 *
 * указывает браузеру загружать файл скрипта в фоновом режиме,
 * паралельно обработке HTML-документа и построению DOM
 */
'<script defer src="path-to-script.js"></script>';

/**
 * Атрибут async
 *
 * не блокирует построение DOM,
 * выполняется сразу после загрузки.
 * Это значит, что такие скрипты могут заблокировать построение DOM,
 * и выполняются в произвольном порядке.
 */
'<script async src="path-to-script.js"></script>';

// Навигация по DOM

// Для описания отношений используются термины предок (ancestor), потомок (descendant), родитель (parent), ребенок (child) и сосед (sibling).

/**
 * - elem.parentNode - выберет родителя elem.
 * - elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
 * - elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
 * - elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
 * - elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
 * - elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
 * - elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
 * - elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
 * - elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
 * - elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
 * - elem.nextElementSibling - выберет узел-элемент «справа» от elem (его следующего соседа).
 */

// Поиск элементов
// Группа методов elem.querySelector* это современный стандарт для поиска элементов

/**
 * Используется если необходимо найти только один, чаще всего уникальный элемент
 *
 * - Возвращает первый найденный элемент внутри element, соответствующий CSS-селектору selector.
 * - Если ничего не найдено, вернет null.
 */
element.querySelector(selector);

/**
 * Используется если необходимо найти коллекцию элементов,
 * то есть получить массив ссылок на элементы с одинаковым селектором
 *
 * - Возвращает псевдомассив всех элементов внутри element, удовлетворяющих CSS-селектору selector
 * - Если ничего не найдено, вернет пустой массив.
 */
element.querySelectorAll(selector);

// Свойства и атрибуты

/**
 * value - содержит текущий текстовый контент элементов форм.
 * checked - хранит состояние чекбокса или радиокнопки.
 * name - хранит значение, указанное в HTML-атрибуте name.
 * src - путь к изображению тега <img>.
 * alt - описание картинки
 */
const message = document.querySelector('#message');
console.log(message.value);

const activeLink = document.querySelector('.btn.active');
console.log(activeLink.href);

const img = document.querySelector('.image');
console.log(img.src);

/**
 * Свойство textContent
 *
 * - возвращает текстовый контент внутри элемента
 * - Доступно для чтения и записи
 */
const text = document.querySelector('.article-text');
console.log(text.textContent);

/**
 * Свойство classList
 * В свойстве classList хранится объект с методами для работы с классами элемента.
 *
 * - elem.classList.contains(cls) - возвращает true или false в зависимости от того, есть ли у элемента класс cls.
 * - elem.classList.add(cls) - добавляет класс cls в список классов элемента.
 * - elem.classList.remove(cls) - удаляет класс cls из списка классов элемента.
 * - elem.classList.toggle(cls) - если класса cls нет, то добавляет его, если есть, наоборот удаляет.
 * - elem.classList.replace(oldClass, newClass) - заменяет существующий класс oldClass на указанный newClass
 */
console.log(text.classList.contains('red')); // true

text.classList.remove('big');
console.log(text.classList); // ["text", "red", value: "text red"]

text.classList.add('new-class');
console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// Can add multiple classes
text.classList.add('a', 'b', 'c');
console.log(text.classList);

text.classList.toggle('is-hidden'); // will add is-hidden class
text.classList.toggle('is-hidden'); // will remove is-hidden class

// classList has a forEach method
text.classList.forEach(cls => {
  console.log(cls); // text, red, new-class
});

/**
 * Свойство style
 * Используется для чтения и изменения инлайновых стилей
 *
 * - Возвращает объект CSSStyleDeclaration
 * - Cодержит список всех встроенных свойств
 * - При записи свойства записываются в camelCase
 *
 * На практике стилизация элементов выполняется добавленим CSS-классов
 * Свойство style используется для добавления каких-то динамических стилей,
 * например во время анимации
 */
const button = document.querySelector('.btn');

button.style.backgroundColor = 'teal';
button.style.fontSize = '24px';
button.style.textAlign = 'center';

console.log(button.style); // inline styles object

/**
 * Атрибуты
 * (если прочитать или записать значение используем свойство)
 * (если удалить или узнать если такой используем атрибуты has, remove)
 *
 * - elem.hasAttribute(name) - проверяет наличие аттрибута, возвращает true или false.
 * - elem.getAttribute(name) - получает значение атрибута и возвращает его.
 * - elem.setAttribute(name, value) - устанавливает атрибут.
 * - elem.removeAttribute(name) - удаляет атрибут.
 * - elem.attributes - свойство, возвращает объект всех атрибутов элемента.
 */
const image = document.querySelector('.image');

console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}
console.log(image.hasAttribute('src')); // true
console.log(image.getAttribute('alt')); // "Lake and clouds"
image.setAttribute('alt', 'Amazing nature');
console.log(image.getAttribute('alt')); // Amazing nature

/**
 * data-атрибуты
 * Для получения значения data-атрибута используется свойство << dataset >>
 * после которого идет имя атрибута. То есть data- отбрасывается
 *
 * Позволяют добавить тегу произвольный атрибут и получить его значение
 * например связать данные и разметку по уникальному идентификатору
 * указать тип действия кнопки
 */

<button type="button" data-action="save">
  Save
</button>;

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

// Создание и удаление элементов

/**
 * Создание
 *
 * Создает элемент с именем tagName
 * возвращает ссылку на него как результат своего выполнения
 */
document.createElement(tagName);

// ================================================

const heading = document.createElement('h1');
console.log(heading); // <h1></h1>

heading.textContent = 'This is a heading';
console.log(heading); // <h1>This is a heading</h1>

const image1 = document.createElement('img');
image1.src = 'https://placeimg.com/640/480/nature';
image1.alt = 'Nature';
console.log(image1); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

/**
 * Добавление
 *
 * element.append(el1, el2, ...) - добавляет один или несколько элементов после всех детей элемента element.
 * element.prepend(el1, el2, ...) - добавляет один или несколько элементов перед всеми детьми элемента element
 * element.after(el1, el2, ...) - добавляет один или несколько элементов после элемента element
 * element.before(el1, el2, ...) - добавляет один или несколько элементов перед элементом element
 *
 * insertBefore (какой эл., куда вставить)
 * appendChild(elem)
 */

const list = document.querySelector('.usernames');

// Adds an item to the end of the list
const lastItem = document.createElement('li');
lastItem.textContent = 'Poly';
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement('li');
firstItem.textContent = 'Ajax';
list.prepend(firstItem);

// Adds a title before the list
const title = document.createElement('h2');
title.textContent = 'USERNAMES';
list.before(title);

// Adds a paragraph after the list
const text1 = document.createElement('p');
text1.textContent =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!';
list.after(text1);

/**
 * Удаление
 */
elem.remove();

// вызывается на самом элементе elem, который необходимо удалить
const text2 = document.querySelector('.text');
text2.remove();

/**
 * Свойство innerHTML
 */

/**
 * Чтение
 *
 * Возвращаемое значение это всегда валидный HTML-код
 */

const article = document.querySelector('.article');
console.log(article.innerHTML); // <h2 class="title">Article title</h2>

const title = document.querySelector('.article .title');
console.log(title.innerHTML);

const link = document.querySelector('.article .link');
console.log(link.innerHTML); // Read more

/**
 * Изменение
 */
const title = document.querySelector('.article .title');
title.innerHTML = 'New and <span class="accent">improved</span> title';

/**
 * Удаление
 *
 * простой и быстрый способ удаления всего содержимого
 */
const title = document.querySelector('.article .title');
title.innerHTML = '';

// ==========================================================+
const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const list1 = document.querySelector('.list');

const markup = technologies
  .map(technology => `<li class="list-item">${technology}</li>`)
  .join('');

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
list1.innerHTML = markup;

/**
 * Добавление
 *
 * не использовать
 *
 * Используйте свойство elem.innerHTML для добавления только в случае
 * когда элемент elem пустой или если надо полностью заменить его содержимое
 */

const article1 = document.querySelector('.article');
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
    <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference?
// Article title is lost because we overwrite element content.
article.innerHTML += htmlString;

/**
 * Метод insertAdjacentHTML()
 *
 * Современный метод для добавления строки с HTML-тегами до, после или внутрь элемента
 * Решает проблему innerHTML
 */

// Аргумент position - это строка, позиция относительно элемента elem
elem.insertAdjacentHTML(position, string);

// beforebegin работают только в том случае, если elem уже находится в DOM-дереве.
('beforebegin'); // перед elem
('afterbegin'); // внутри elem, перед всеми детьми
('beforeend'); // внутри elem, после всех детей
// afterend работают только в том случае, если elem уже находится в DOM-дереве.
('afterend'); // после elem

// \javascript-yk5evp\v2\img\lesson-11\insert-adjacent.png
