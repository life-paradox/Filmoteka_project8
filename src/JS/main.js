
const fetchPopFilms = async () => {
  const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=861782ee1fc6aacf939bc06e51306075');
  const users = await response.json();
  console.log(users);
  return users;
};
export { fetchPopFilms };

function renderFilms(users) {
  const markup = users.results.map(({ }) => {
          return `<div>
            <img  src="${flags.svg}" alt="${name.official}" width="70" height="50">
            <h2>${name.official}</h2>
            <p>Capital: ${capital}</p>
            <p>Population: ${population}</p>
            <p>Languages: ${Object.values(languages)}</p>
            </div>`
      }).join('');
      refs.countryInfo.innerHTML = markup;  
}