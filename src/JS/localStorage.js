function getFromLocalStorage(key) {
  const savedMovies = localStorage.getItem(key);
  return JSON.parse(savedMovies);
}

export { getFromLocalStorage };
