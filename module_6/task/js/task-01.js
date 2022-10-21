/**
 * Напиши скрипт который:
 *
 * 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
 * 2. Для каждого элемента li.item в списке ul#categories,
 * найдет и выведет в консоль текст заголовка элемента (тега <h2>)
 * и количество элементов в категории (всех вложенных в него <li>).
 */

/** результат в консоли
 *
 * Number of categories: 3
 *
 * Category: Animals
 * Elements: 4
 *
 * Category: Products
 * Elements: 3
 *
 * Category: Technologies
 * Elements: 5
 */

const foo = () => {
  const categoriesList = document.querySelector('#categories');
  const numberOfCategoriesList = categoriesList.children.length;
  const categoriesItem = document.querySelectorAll('.item');
  const args = Array.from(categoriesItem);

  console.log(`Number of categories: ${numberOfCategoriesList}`);

  args.map(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });
};

foo();
