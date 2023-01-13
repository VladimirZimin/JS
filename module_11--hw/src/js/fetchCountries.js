const BASE_URL = 'https://restcountries.com/v3.1';

function fetchCountries(name) {
  return fetch(
    `${BASE_URL}/name/${name}?fields=name,capital,currencies,population,flags,languages,region`
  ).then(response => {
    if (response.status === 404) {
      return Promise.reject(new Error());
    }
    return response.json();
  });
}

export default { fetchCountries };
