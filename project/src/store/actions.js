// import { toast } from 'react-toastify';

export const ActionType = {
  SWITCH_GENRE: 'switchGenre',
  MORE_MOVIES: 'moreMovies',
  RESET_MOVIES_LIST: 'resetMoviesList',
  LOAD_MOVIES_LIST: 'data/loadMoviesList',
  LOAD_PROMO_MOVIE: 'data/loadMoviesPromo',
  LOAD_SIMILAR_MOVIES: 'data/loadSimilarMovies',
  LOAD_MOVIE_REVIEWS: 'data/loadReviews',
  POST_REVIEW: 'data/postReview',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  NETWORK_ERROR: 'data/networkError',
  REDIRECT_TO_ROUTE: 'history/redirectToRoute',
  REPLACE_ROUTE: 'history/replaceRoute',
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

export function sendReview (review) {
  return {
    type: ActionType.POST_REVIEW,
    payload: review,
  };
}

export function userLogout () {
  return {
    type: ActionType.LOGOUT,
  };
}

export function redirectToRoute (url) {
  return {
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  };
}

export function replaceRoute (url) {
  return {
    type: ActionType.REPLACE_ROUTE,
    payload: url,
  };
}

// export function handleNetworkError() {
//   return function(dispatch) {
//     dispatch({
//       type: ActionType.NETWORK_ERROR,
//     });

//     toast.error('error', {
//       position: 'top-right',
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   };
// }
