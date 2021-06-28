import {loadMoviesList, loadPromoMovie, loadSimilarMovie, loadMovieReview, requireAuthorization, userLogout} from './actions';
import {APIRoute, AuthorizationStatus} from '../components/utils/constants';

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
    .catch(() => {

    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.POST_LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.DELETE_LOGIN)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(userLogout()))
);
