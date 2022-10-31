/**
 * Throttle и Debounce (тротол и дебаунс)
 *
 * изменение размера окна, скролл, перемещение мыши или текстовый ввод пользователя.
 *
 * сортировка коллекции и отрисовка результатов, анимация элемента, манипуляции с DOM-деревом и прочее
 */

/**
 * Throttle и Debounce - это два похожих, но разных по поведению приёма, позволяющих контролировать сколько раз мы разрешаем выполнение функции с течением времени. Используем их реализацию из библиотеки Lodash.
 */

// Подключение библиотеки

//<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"></script>

/**
 * Подключим в проект библиотеку Lodash через CDN. Для этого используем сервис cdnjs.com и добавим ссылку на скрипт библиотеки в конец HTML-документа, как показано в примере.
 */

<script
  async
  src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
  integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>;

// Для Lodash это символ нижнего подчёркивания _
const result = _.add(2, 3);
console.log(result); // 5

/**
 * Throttle
 * Вызывай эту функцию не чаще чем через ... милисекунд
 * скрол, перетаскиваниею, изменение окна
 *
 * throttle контролирует количество раз которое функция может быть вызвана в течение промежутка времени
 *
 * позволяет вызывать функцию не чаще чем один раз в N миллисекунд, гарантируя ее регулярное выполнение.
 */
document.addEventListener(
  'scroll',
  _.throttle(() => {
    console.log('Scroll handler call every 300ms');
  }, 300),
);

/**
 * Debounce
 * отложеное действие
 * ввод пользователем
 *
 * debounce гарантирует, что функция будет вызвана только если между событиями будет пауза в N миллисекунд
 */
document.addEventListener(
  'scroll',
  _.debounce(() => {
    console.log('Scroll handler call after 300ms pause');
  }, 300),
);

/**
 * Режимы метода debounce
 *
 * trailing edge (в конце)
 * leading edge (в начале)
 */
document.addEventListener(
  'scroll',
  _.debounce(
    () => {
      console.log('Scroll handler call on every event stream start');
    },
    300,
    {
      leading: true,
      trailing: false,
    },
  ),
);

/**
 * Отложенная загрузка (lazy-loading)
 *
 * «above the fold» (в кадре)
 * «below the fold» (за кадром)
 */

/**
 * Атрибут loading
 *
 * lazy - браузер выполнит отложенную загрузку изображения.
 * eager - изображение будет загружено при первой возможности, то есть без отложенной загрузки.
 * auto - браузер сам определяет, выполнять отложенную загрузку или нет. Значение по умолчанию.
 */
<img src="my-image.jpg" loading="lazy" alt="Image description" />;

/**
 * Библиотека lazysizes
 *
 * подключить библиотеку в проект используя сервис cdnjs.com
 * Тег с ссылкой на скрипт добавляется в конец <body>
 */
{
  <body>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
      integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>

    <script defer src="path/to/script.js"></script>
  </body>;
}

/**
 Всем изображениям которые необходимо загружать отложенно задаём класс lazyload и заменяем атрибут src на data-src. Это необходимо библиотеке lazysizes для правильной работы.
 */
<img class="lazyload" data-src="path/to/my-image.jpg" alt="Generic alt" />;

/**
 * Пока изображение загружается можно показывать заполнитель низкого качества. Эта техника называется LQIP (Low Quality Image Placeholder)
 */
{
  <img
    class="lazyload"
    src="path/to/lqip-placeholder.jpg"
    data-src="path/to/my-image.jpg"
    alt="Generic alt"
  />;
}
