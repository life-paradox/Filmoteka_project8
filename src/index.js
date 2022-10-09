import { fetchPopFilms, renderFilms } from './JS/main';
import { renderFilms } from './JS/main';
import { slider } from './JS/slider';
import { pagination } from "./JS/pagination";
import { fetchQueryFilm } from "./JS/main";
import { genres } from "./JS/main";


genres();

fetchPopFilms().then(renderFilms).then(pagination);

slider();

