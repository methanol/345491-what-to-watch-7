import {loadMoviesList, loadPromoMovie, loadSimilarMovie, loadMovieReview, requireAuthorization, userLogout, redirectToRoute, loadFavoriteMovies, replaceRoute, updateMoviesList} from './actions';
import {APIRoute, AuthorizationStatus, AppRoute} from '../components/utils/constants';
import { toast } from 'react-toastify';

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.GET_ALL_FILMS)
    .then(({data}) => dispatch(loadMoviesList(data)))
    .catch((err) => toast.error(err.message))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.GET_PROMO)
    .then(({data}) => dispatch(loadPromoMovie(data)))
    .catch((err) => toast.error(err.message))
);

export const fetchSimilarMovies = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.GET_ALL_FILMS}/${id}/similar`)
    .then(({data}) => dispatch(loadSimilarMovie(data)))
);

export const fetchMovieReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.GET_COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadMovieReview(data)))
);

export const fetchFavoriteMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.GET_FAVORITE)
    .then(({data}) => dispatch(loadFavoriteMovies(data)))
);

export const postFavoriteMovie = (id, status, isPromo) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.POST_FAVORITE}/${id}/${status}`)
    .then((favData) => {
      isPromo ? dispatch(loadPromoMovie(favData.data)) : dispatch(updateMoviesList(favData.data));
    })
    .catch((err) => toast.error(err.message))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.GET_LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => toast.error(err.message))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.POST_LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(replaceRoute(AppRoute.ROOT)))
    .catch((err) => toast.error(err.message))
);

export const postReview = ({filmId, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.POST_COMMENTS}/${filmId}`, {comment, rating})
    .then(() => dispatch(redirectToRoute(`${APIRoute.GET_FILM}/${filmId}`)))
    .catch((err) => toast.error(err.message))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.DELETE_LOGIN)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(userLogout()))
    .then(() => dispatch(replaceRoute(AppRoute.ROOT)))
);
