import {mockFilms} from '../mocks/films';
import camelize from 'camelize';
import {ActionType} from './actions';

const camelizedMockFilms = camelize(mockFilms);
const INITIAL_MOVIES_COUNT = 8;

const initState = {
  currentGenre: 'All genres',
  moviesOnPage: INITIAL_MOVIES_COUNT,
  currentFilms: camelizedMockFilms,
  shownFilms: camelizedMockFilms.slice(0, INITIAL_MOVIES_COUNT),
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.SWITCH_GENRE:
      return {
        ...state,
        currentGenre: action.payload.genre,
        currentFilms: action.payload.genre === 'All genres' ? camelizedMockFilms : camelizedMockFilms.filter((it) => it.genre === action.payload.genre),
        shownFilms: action.payload.genre === 'All genres' ? camelizedMockFilms.slice(0, state.moviesOnPage) : camelizedMockFilms.filter((it) => it.genre === action.payload.genre).slice(0, state.moviesOnPage),
      };
    case ActionType.MORE_MOVIES:
      return {
        ...state,
        moviesOnPage: state.moviesOnPage + INITIAL_MOVIES_COUNT,
        currentFilms: state.currentGenre === 'All genres' ? camelizedMockFilms : camelizedMockFilms.filter((it) => it.genre === state.currentGenre),
        shownFilms: state.currentGenre === 'All genres' ? camelizedMockFilms.slice(0, state.moviesOnPage + INITIAL_MOVIES_COUNT) : camelizedMockFilms.filter((it) => it.genre === state.currentGenre).slice(0, state.moviesOnPage + INITIAL_MOVIES_COUNT),
      };
    case ActionType.RESET_MOVIES_LIST:
      return {
        ...state,
        currentGenre: 'All genres',
        moviesOnPage: INITIAL_MOVIES_COUNT,
        currentFilms: camelizedMockFilms,
        shownFilms: camelizedMockFilms.slice(0, INITIAL_MOVIES_COUNT),
      };
    default:
      return state;
  }
};

export {movieReducer};
