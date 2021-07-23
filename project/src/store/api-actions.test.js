import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../api';
import {ActionType} from './actions';
import {fetchMoviesList, fetchPromoMovie, fetchSimilarMovies, fetchMovieReviews, checkAuth, postReview, login, fetchFavoriteMovies, postFavoriteMovie, logout} from './api-actions';
import {APIRoute, AppRoute, AuthorizationStatus} from '../components/utils/constants';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });
  it('should make a correct API call to GET /films', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkMoviesLoader = fetchMoviesList();

    apiMock
      .onGet(APIRoute.GET_ALL_FILMS)
      .reply(200, [{title: 'film1'}]);

    return checkMoviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES_LIST,
          payload: [{title: 'film1'}],
        });
      });
  });
  it('should make a correct API call to GET /promo', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkPromoLoader = fetchPromoMovie();

    apiMock
      .onGet(APIRoute.GET_PROMO)
      .reply(200, {title: 'promo'});

    return checkPromoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_MOVIE,
          payload: {title: 'promo'},
        });
      });
  });
  it('should make a correct API call to GET /similar', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieID = 1;
    const checkSimilarLoader = fetchSimilarMovies(movieID);

    apiMock
      .onGet(`${APIRoute.GET_ALL_FILMS}/${movieID}/similar`)
      .reply(200, [{title: 'similar'}]);

    return checkSimilarLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_SIMILAR_MOVIES,
          payload: [{title: 'similar'}],
        });
      });
  });
  it('should make a correct API call to GET /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieID = 1;
    const checkCommentsLoader = fetchMovieReviews(movieID);

    apiMock
      .onGet(`${APIRoute.GET_COMMENTS}/${movieID}`)
      .reply(200, ['comment1', 'comment2', 'comment3']);

    return checkCommentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE_REVIEWS,
          payload: ['comment1', 'comment2', 'comment3'],
        });
      });
  });
  it('should make a correct API call to POST /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmId = 1;
    const review = {
      comment: 'very good',
      rating: 9,
      filmId,
    };

    const checkCommentsPost = postReview(review);

    apiMock
      .onPost(`${APIRoute.POST_COMMENTS}/${filmId}`)
      .reply(200, ['comment1', 'comment2', 'comment3']);

    return checkCommentsPost(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `${APIRoute.GET_FILM}/${filmId}`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPLOAD_REVIEW,
          payload: false,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REPLACE_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });

  it('should make a correct API call to POST /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmId = 1;
    const state = {
      id: filmId,
      status: 1,
      isPromo: false,
    };

    const checkFavoritePost = postFavoriteMovie(state.id, state.status, state.isPromo);

    apiMock
      .onPost(`${APIRoute.POST_FAVORITE}/${filmId}/${state.status}`)
      .reply(200, {data: {film: 'favorite'}});

    return checkFavoritePost(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_MOVIES_LIST,
          payload: {data: {film: 'favorite'}},
        });
      });
  });

  it('should make a correct API call to POST promo /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmId = 1;
    const state = {
      id: filmId,
      status: 1,
      isPromo: true,
    };

    const checkFavoritePost = postFavoriteMovie(state.id, state.status, state.isPromo);

    apiMock
      .onPost(`${APIRoute.POST_FAVORITE}/${filmId}/${state.status}`)
      .reply(200, {data: {film: 'favorite'}});

    return checkFavoritePost(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_MOVIE,
          payload: {data: {film: 'favorite'}},
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkFavLoader = fetchFavoriteMovies();

    apiMock
      .onGet(APIRoute.GET_FAVORITE)
      .reply(200, [{title: 'favorite'}]);

    return checkFavLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_FAVORITES,
          payload: [{title: 'favorite'}],
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204, [{fake: true}]);

    return logoutLoader(dispatch, jest.fn(() => {}), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).nthCalledWith(1, {
          type: ActionType.LOGOUT,
        });

        expect(Storage.prototype.removeItem).toBeCalledTimes(2);
        expect(Storage.prototype.removeItem).nthCalledWith(1, 'token');
        expect(Storage.prototype.removeItem).nthCalledWith(2, 'avatar');
      });
  });

});

