export const ActionType = {
  SWITCH_GENRE: 'switchGenre',
  MORE_MOVIES: 'moreMovies',
  RESET_MOVIES_LIST: 'resetMoviesList',
  LOAD_MOVIES_LIST: 'data/loadMoviesList',
  LOAD_PROMO_MOVIE: 'data/loadMoviesPromo',
  LOAD_SIMILAR_MOVIES: 'data/loadSimilarMovies',
  LOAD_MOVIE_REVIEWS: 'data/loadReviews',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export function switchGenre (genre) {
  return {
    type: ActionType.SWITCH_GENRE,
    payload: {genre},
  };
}

export function showMoreMovies () {
  return {
    type: ActionType.MORE_MOVIES,
  };
}

export function resetMoviesList () {
  return {
    type: ActionType.RESET_MOVIES_LIST,
  };
}

export function loadMoviesList (movies) {
  return {
    type: ActionType.LOAD_MOVIES_LIST,
    payload: movies,
  };
}

export function loadPromoMovie (movie) {
  return {
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie,
  };
}

export function loadSimilarMovie (movies) {
  return {
    type: ActionType.LOAD_SIMILAR_MOVIES,
    payload: movies,
  };
}

export function loadMovieReview (reviews) {
  return {
    type: ActionType.LOAD_MOVIE_REVIEWS,
    payload: reviews,
  };
}

export function requireAuthorization (status) {
  return {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  };
}

export function logout () {
  return {
    type: ActionType.LOGOUT,
  };
}
