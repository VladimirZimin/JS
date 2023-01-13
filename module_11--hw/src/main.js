import './css/styles.css';
import API from './js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getRefs from './js/get-refs';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(evt) {
  evt.preventDefault();

  const searchQuery = evt.target.value.trim();

  if (!searchQuery) {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    return;
  }

  API.fetchCountries(searchQuery)
    .then(renderCountryCard)
    .catch(error => {
      refs.countryInfo.innerHTML = '';
      refs.countryList.innerHTML = '';
      Notify.failure('Oops, there is no country with that name');
    });
}

function renderCountryCard(data) {
  const markupList = createListMarkup(data);
  const markupInfo = createInfoMarkup(data);

  if (data.length <= 1) {
    refs.countryInfo.innerHTML = markupInfo;
    refs.countryList.innerHTML = '';
  } else if (data.length > 10) {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else {
    refs.countryList.innerHTML = markupList;
    refs.countryInfo.innerHTML = '';
  }
}

const createListMarkup = data => {
  return data
    .map(
      ({ name, capital, currencies, population, flags, languages }) => `
    <h1><img src="${flags.png}" alt="${name.official}" height="70px" width="110px" >${name.official}</h1>
    `
    )
    .join('');
};

const createInfoMarkup = data => {
  return data.map(
    ({ name, capital, population, flags, languages, region, callingCodes }) => `
    <h1><img src="${flags.png}" alt="${
      name.official
    }" height="100px" width="150px" >
    <span>${name.official}</span>
    </h1>
    <ul>
    <li>Capital: <span>${capital}</span></li>
    <li>Population: <span>${population}</span></li>
    <li>Region: <span>${region}</span></li>
    <li>Languages: <span>${Object.values(languages)}</span></li>
    </ul>
    `
  );
};
