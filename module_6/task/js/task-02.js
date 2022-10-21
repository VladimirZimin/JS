/**
 * В HTML есть пустой список ul#ingredients.
 *
 * Напиши скрипт, который для каждого элемента массива ingredients:
 * - Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
 * - Добавит название ингредиента как его текстовое содержимое.
 * - Добавит элементу класс item.
 * - После чего вставит все <li> за одну операцию в список ul#ingredients
 */

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  'Cherry',
];

const ingredientsListEl = document.querySelector('#ingredients');

const makeIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;

    console.log(itemEl);

    return itemEl;
  });
};

const elements = makeIngredientsList(ingredients);

ingredientsListEl.append(...elements);
