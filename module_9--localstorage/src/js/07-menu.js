import '../css/menu.css';
import dishCardsTpl from '../templates/menu.hbs';
import dish from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuContainer = document.querySelector('.js-menu');
const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const dishMarkup = createMenuCardsMarkup(dish);

themeSwitchToggle.addEventListener('change', onChangeTheme);
themeSwitchToggle.addEventListener('change', inLocaLeStorage);
menuContainer.insertAdjacentHTML('beforeend', dishMarkup);

function createMenuCardsMarkup(dish) {
  return dishCardsTpl(dish);
}

function onChangeTheme(evt) {
  const check = themeSwitchToggle.checked;

  if (check) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
  }
}

function inLocaLeStorage() {
  const check = themeSwitchToggle.checked;

  if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const changeLocalTheme = localStorage.getItem('theme');
if (changeLocalTheme === Theme.DARK) {
  body.classList.add(Theme.DARK);
  themeSwitchToggle.checked = true;
}
