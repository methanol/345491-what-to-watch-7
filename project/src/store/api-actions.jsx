import {loadMoviesList, loadPromoMovie, loadSimilarMovie, loadMovieReview, requireAuthorization, userLogout, replaceRoute, sendReview, redirectToRoute} from './actions';
import {APIRoute, AuthorizationStatus, AppRoute} from '../components/utils/constants';
import { toast } from 'react-toastify';

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.GET_ALL_FILMS)
    .then(({data}) => dispatch(loadMoviesList(data)))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.GET_PROMO)
    .then(({data}) => dispatch(loadPromoMovie(data)))
);

export const fetchSimilarMovies = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.GET_ALL_FILMS}/${id}/similar`)
    .then(({data}) => dispatch(loadSimilarMovie(data)))
);

export const fetchMovieReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.GET_COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadMovieReview(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.GET_LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => toast('error'))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.POST_LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(replaceRoute(AppRoute.ROOT)))
);

export const postReview = ({filmId, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.POST_COMMENTS}/${filmId}`, {comment, rating})
    .then(() => dispatch(redirectToRoute(`${APIRoute.GET_FILM}/${filmId}`)))
    .catch((err) => dispatch(sendReview(err)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.DELETE_LOGIN)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(userLogout()))
    .then(() => dispatch(replaceRoute(AppRoute.ROOT)))
);
