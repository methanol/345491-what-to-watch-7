import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SWITCH_GENRE: 'switchGenre',
  MORE_MOVIES: 'moreMovies',
  RESET_MOVIES_LIST: 'resetMoviesList',
  LOAD_MOVIES_LIST: 'data/loadMoviesList',
  UPDATE_MOVIES_LIST: 'data/updateMoviesList',
  LOAD_PROMO_MOVIE: 'data/loadMoviesPromo',
  LOAD_SIMILAR_MOVIES: 'data/loadSimilarMovies',
  LOAD_MOVIE_REVIEWS: 'data/loadReviews',
  POST_REVIEW: 'data/postReview',
  GET_FAVORITES: 'data/loadFavoriteMovies',
  UPDATE_FAVORITE: 'data/updateFavoriteMovie',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  NETWORK_ERROR: 'data/networkError',
  REDIRECT_TO_ROUTE: 'history/redirectToRoute',
  REPLACE_ROUTE: 'history/replaceRoute',
};

export const switchGenre = createAction(ActionType.SWITCH_GENRE, (genre) => ({
  payload: {genre},
}));

export const showMoreMovies = createAction(ActionType.MORE_MOVIES);

export const resetMoviesList = createAction(ActionType.RESET_MOVIES_LIST);

export const loadMoviesList = createAction(ActionType.LOAD_MOVIES_LIST, (movies) => ({
  payload: movies,
}));

export const updateMoviesList = createAction(ActionType.UPDATE_MOVIES_LIST, (movie) => ({
  payload: movie,
}));

export const loadPromoMovie = createAction(ActionType.LOAD_PROMO_MOVIE, (movie) => ({
  payload: movie,
}));

export const loadSimilarMovie = createAction(ActionType.LOAD_SIMILAR_MOVIES, (movies) => ({
  payload: movies,
}));

export const loadMovieReview = createAction(ActionType.LOAD_MOVIE_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const loadFavoriteMovies = createAction(ActionType.GET_FAVORITES, (movies) => ({
  payload: movies,
}));

export const updateFavoriteMovies = createAction(ActionType.UPDATE_FAVORITE, (movie) => ({
  payload: movie,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const sendReview = createAction(ActionType.POST_REVIEW, (review) => ({
  payload: review,
}));

export const userLogout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const replaceRoute = createAction(ActionType.REPLACE_ROUTE, (url) => ({
  payload: url,
}));

