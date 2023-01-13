/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  Notify.failure('Упс, что-то пошло не так и мы не нашли вашего покемона!');
}

// =========================================

// const url = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//   headers: {
//     Authorization: '4330ebfabc654a6992c2aa792f3173a3',
//   },
// };

// fetch(url, options)
//   .then(r => r.json())
//   .then(console.log);
