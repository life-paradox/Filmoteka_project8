import { fetchPopFilms } from "./JS/main"
import { renderFilms } from "./JS/main"


fetchPopFilms().then(renderFilms);
