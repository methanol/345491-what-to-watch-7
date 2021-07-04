import { createSelector } from 'reselect';

export const getAuthorizationStatus = (state) => state.auth.authorizationStatus;

export const getPromoFilm = (state) => state.data.promoFilm;
export const getSimilarFilms = (state) => state.data.similarFilms;
export const getReviews = (state) => state.data.reviews;

export const getAllFilms = (state) => state.movie.allFilms;
export const getDataLoaded = (state) => state.movie.isDataLoaded;
export const getCurrentGenre = (state) => state.movie.currentGenre;
export const getMoviesOnPage = (state) => state.movie.moviesOnPage;

export const createGenreSelector = createSelector(
  getAllFilms,
  getCurrentGenre,
  (films, genre) => (genre === 'All genres') ? films : films.filter((it) => it.genre === genre),
);

export const createShownMoviesSelector = createSelector(
  getAllFilms,
  getCurrentGenre,
  getMoviesOnPage,
  (films, genre, onPage) => genre === 'All genres' ? films.slice(0, onPage) : films.filter((it) => it.genre === genre).slice(0, onPage),
);

