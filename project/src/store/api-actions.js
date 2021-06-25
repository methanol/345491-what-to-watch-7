import {loadMoviesList, loadPromoMovie, loadSimilarMovie, loadMovieReview} from './actions';
import {APIRoute} from '../components/utils/constants';

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
