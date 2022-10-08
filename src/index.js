import { fetchPopFilms } from './JS/main';
import { renderFilms } from './JS/main';
import { slider } from './JS/slider';

fetchPopFilms().then(renderFilms);
slider();
