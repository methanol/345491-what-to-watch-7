import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SWITCH_GENRE: 'data/switchGenre',
  MORE_MOVIES: 'data/moreMovies',
  RESET_MOVIES_LIST: 'data/resetMoviesList',
  LOAD_MOVIES_LIST: 'data/loadMoviesList',
  UPDATE_MOVIES_LIST: 'data/updateMoviesList',
  LOAD_PROMO_MOVIE: 'data/loadMoviesPromo',
  LOAD_SIMILAR_MOVIES: 'data/loadSimilarMovies',
  LOAD_MOVIE_REVIEWS: 'data/loadReviews',
  GET_FAVORITES: 'data/loadFavoriteMovies',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  SET_USER_AVATAR: 'user/avatar',
  REDIRECT_TO_ROUTE: 'history/redirectToRoute',
  REPLACE_ROUTE: 'history/replaceRoute',
  UPLOAD_REVIEW: 'data/uploadReview',
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

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const setUserAvatar = createAction(ActionType.SET_USER_AVATAR, (url) => ({
  payload: url,
}));

export const userLogout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const replaceRoute = createAction(ActionType.REPLACE_ROUTE, (url) => ({
  payload: url,
}));

export const uploadReview = createAction(ActionType.UPLOAD_REVIEW, (inProgress) => ({
  payload: inProgress,
}));

