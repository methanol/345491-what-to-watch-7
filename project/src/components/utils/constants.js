export const UserVerdicts = {
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very good',
  AWESOME: 'Awesome',
};

export const NetworkErrors = {
  ERROR_1: 'Ошибка при загрузке данных о фильмах, пожалуйста, обновите страницу!',
  ERROR_2: 'Ошибка при добавлении фильма в избранное',
  ERROR_3: 'Сетевая ошибки при авторизации',
  ERROR_4: 'Ошибка при авторизации пользователя',
  ERROR_5: 'Ошибка при отправке обзора фильма',
  ERROR_6: 'Пароль не может состоять из одних пробелов',
  ERROR_7: 'Ошибка соединения с сетью, пожалуйста, обновите страницу!',
  ERROR_8: 'Ошибка при загрузке промо-фильма, пожалуйста, обновите страницу!',
  ERROR_9: 'Для добавления фильма в избранное необходимо зарегистрироваться на сайте!',
};

export const FavoriteIndexes = {
  ACTIVE: 1,
  NON_ACTIVE: 0,
};

export const INITIAL_GENRE = 'All genres';

export const AppRoute = {
  ROOT: '/345491-what-to-watch-7/',
  LOGIN: '/345491-what-to-watch-7/login',
  MY_LIST: '/345491-what-to-watch-7/mylist',
  FILM: '/345491-what-to-watch-7/films/:id',
  FILM_REVIEW: '/345491-what-to-watch-7/films/:id/review',
  FILM_PLAYER: '/345491-what-to-watch-7/player/:id',
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
