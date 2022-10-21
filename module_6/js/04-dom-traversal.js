/*
 * Свойства «навигации» по DOM-узлам (взять список)
 */

const navEl = document.querySelector('.site-nav');

// const firstNavItemEl = navEl.querySelector('.site-nav__item');
const firstNavItemEl = navEl.firstElementChild;
console.log(firstNavItemEl);
console.log(navEl.children);
console.log(navEl.children[1]);
console.log(navEl.lastElementChild);
