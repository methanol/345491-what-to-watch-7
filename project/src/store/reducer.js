import {ActionType} from './actions';
import {AuthorizationStatus} from '../components/utils/constants.js';
import camelize from 'camelize';

const INITIAL_MOVIES_COUNT = 8;

const initState = {
  currentGenre: 'All genres',
  moviesOnPage: INITIAL_MOVIES_COUNT,
  allFilms: [],
  currentFilms: [],
  shownFilms: [],
  promoFilm: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  similarFilms: [],
  reviews: [],
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.SWITCH_GENRE:
      return {
        ...state,
        currentGenre: action.payload.genre,
        currentFilms: action.payload.genre === 'All genres' ? state.allFilms : state.allFilms.filter((it) => it.genre === action.payload.genre),
        shownFilms: action.payload.genre === 'All genres' ? state.allFilms.slice(0, state.moviesOnPage) : state.allFilms.filter((it) => it.genre === action.payload.genre).slice(0, state.moviesOnPage),
      };
    case ActionType.MORE_MOVIES:
      return {
        ...state,
        moviesOnPage: state.moviesOnPage + INITIAL_MOVIES_COUNT,
        currentFilms: state.currentGenre === 'All genres' ? state.allFilms : state.allFilms.filter((it) => it.genre === state.currentGenre),
        shownFilms: state.currentGenre === 'All genres' ? state.allFilms.slice(0, state.moviesOnPage + INITIAL_MOVIES_COUNT) : state.allFilms.filter((it) => it.genre === state.currentGenre).slice(0, state.moviesOnPage + INITIAL_MOVIES_COUNT),
      };
    case ActionType.RESET_MOVIES_LIST:
      return {
        ...state,
        currentGenre: 'All genres',
        moviesOnPage: INITIAL_MOVIES_COUNT,
        currentFilms: state.allFilms,
        shownFilms: state.allFilms.slice(0, INITIAL_MOVIES_COUNT),
      };
    case ActionType.LOAD_MOVIES_LIST:
      return {
        ...state,
        allFilms: camelize(action.payload),
        currentFilms: state.allFilms,
        isDataLoaded: true,
      };
    case ActionType.LOAD_PROMO_MOVIE:
      return {
        ...state,
        promoFilm: camelize(action.payload),
      };
    case ActionType.LOAD_SIMILAR_MOVIES:
      return {
        ...state,
        similarFilms: camelize(action.payload),
      };
    case ActionType.LOAD_MOVIE_REVIEWS:
      return {
        ...state,
        reviews: camelize(action.payload),
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {movieReducer};
