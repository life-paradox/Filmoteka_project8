export * from "./JS/library-pagination";
import { fetchPopFilms } from "./JS/main"
import { renderFilms } from "./JS/main"


fetchPopFilms().then(renderFilms);
