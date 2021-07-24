import { createSelector } from 'reselect';

import {INITIAL_GENRE} from '../../components/utils/constants';

export const getAuthorizationStatus = (state) => state.auth.authorizationStatus;
export const getUserImage = (state) => state.auth.userImage;

export const getPromoFilm = (state) => state.data.promoFilm;
export const getSimilarFilms = (state) => state.data.similarFilms;
export const getReviews = (state) => state.data.reviews;
export const getFavorites = (state) => state.data.favoriteMovies;
export const getUserReviewUploading = (state) => state.data.reviewUploading;

export const getAllFilms = (state) => state.movie.allFilms;
export const getDataLoaded = (state) => state.movie.isDataLoaded;
export const getCurrentGenre = (state) => state.movie.currentGenre;
export const getMoviesOnPage = (state) => state.movie.moviesOnPage;

export const createGenreMovieSelector = createSelector(
  getAllFilms,
  getCurrentGenre,
  (films, genre) => (genre === INITIAL_GENRE) ? films : films.filter((it) => it.genre === genre),
);

const LIMIT = 11;

export const createGenreSelector = createSelector(
  getAllFilms,
  (films) => {
    const actualGenresAll = Array.of(INITIAL_GENRE).concat(films.map((it) => it.genre).filter((it, ind, arr) => arr.indexOf(it) === ind));
    const actualGenres = actualGenresAll.slice(0, LIMIT);
    return actualGenres;
  },
);

export const createShownMoviesSelector = createSelector(
  getAllFilms,
  getCurrentGenre,
  getMoviesOnPage,
  (films, genre, onPage) => genre === INITIAL_GENRE ? films.slice(0, onPage) : films.filter((it) => it.genre === genre).slice(0, onPage),
);

