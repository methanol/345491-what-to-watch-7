export const UserVerdicts = {
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very good',
  AWESOME: 'Awesome',
};

export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  FILM_REVIEW: '/films/:id/review',
  FILM_PLAYER: '/player/:id',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  GET_ALL_FILMS: '/films',
  GET_FILM: '/films',
  GET_PROMO: '/promo',
  GET_FAVORITE: '/favorite',
  POST_FAVORITE: '/favorite',
  GET_COMMENTS: '/comments',
  POST_COMMENTS: '/comments',
  POST_LOGIN: '/login',
  GET_LOGIN: '/login',
  DELETE_LOGIN: '/logout',
};

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus !== AuthorizationStatus.UNKNOWN;
