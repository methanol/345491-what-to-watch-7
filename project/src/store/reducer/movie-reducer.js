import {ActionType} from '../actions';
import camelize from 'camelize';

const INITIAL_MOVIES_COUNT = 8;

const initState = {
  currentGenre: 'All genres',
  moviesOnPage: INITIAL_MOVIES_COUNT,
  allFilms: [],
  isDataLoaded: false,
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.SWITCH_GENRE:
      return {
        ...state,
        currentGenre: action.payload.genre,
      };
    case ActionType.MORE_MOVIES:
      return {
        ...state,
        moviesOnPage: state.moviesOnPage + INITIAL_MOVIES_COUNT,
      };
    case ActionType.RESET_MOVIES_LIST:
      return {
        ...state,
        currentGenre: 'All genres',
        moviesOnPage: INITIAL_MOVIES_COUNT,
      };
    case ActionType.LOAD_MOVIES_LIST:
      return {
        ...state,
        allFilms: camelize(action.payload),
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export default movieReducer;
