import {ActionType} from '../actions';
import camelize from 'camelize';

const INITIAL_MOVIES_COUNT = 8;

const initState = {
  currentGenre: 'All genres',
  moviesOnPage: INITIAL_MOVIES_COUNT,
  changedMovie: {},
  allFilms: [],
  isDataLoaded: false,
};

function updateMovies(movies, newMovie) {
  const changedIndex = movies.findIndex((it) => it.id === newMovie.id);
  const newList = movies.slice();
  newList.splice(changedIndex, 1, newMovie);

  return newList;
}

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
    case ActionType.UPDATE_MOVIES_LIST:
      return {
        ...state,
        changedMovie: camelize(action.payload),
        allFilms: updateMovies(state.allFilms, camelize(action.payload)),
      };
    default:
      return state;
  }
};

export default movieReducer;
