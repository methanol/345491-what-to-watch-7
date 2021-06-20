import {mockFilms} from '../mocks/films';
import camelize from 'camelize';
import {ActionType} from './actions';

const camelizedMockFilms = camelize(mockFilms);

const initState = {
  currentGenre: 'All genres',
  currentFilms: camelizedMockFilms,
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.SWITCH_GENRE:
      return {
        ...state,
        currentGenre: action.payload.genre,
        currentFilms: action.payload.genre === 'All genres' ? camelizedMockFilms : camelizedMockFilms.filter((it) => it.genre === action.payload.genre),
      };
    default:
      return state;
  }
};

export {movieReducer};
