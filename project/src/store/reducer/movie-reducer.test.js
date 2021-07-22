import movieReducer from './movie-reducer';
import {ActionType} from '../actions';
import {INITIAL_GENRE} from '../../components/utils/constants';

const INITIAL_MOVIES_COUNT = 8;

const initState = {
  currentGenre: INITIAL_GENRE,
  moviesOnPage: INITIAL_MOVIES_COUNT,
  changedMovie: {},
  allFilms: [],
  isDataLoaded: false,
};

const changedState = Object.assign({}, initState);

describe('Movie reducer testing', () => {

  it('without additional parameters should return initial state', () => {
    expect(movieReducer(undefined, {}))
      .toEqual(initState);
  });
  it('should switch genre', () => {
    const switchGenreAction = {
      type: ActionType.SWITCH_GENRE,
      payload: {genre: 'Action'},
    };

    expect(movieReducer(changedState, switchGenreAction))
      .toEqual(Object.assign(changedState, {currentGenre: 'Action'}));
  });
  it('should show more movies', () => {
    const showMoreAction = {
      type: ActionType.MORE_MOVIES,
    };

    expect(movieReducer(changedState, showMoreAction))
      .toEqual(Object.assign(changedState, {moviesOnPage: INITIAL_MOVIES_COUNT + INITIAL_MOVIES_COUNT}));
  });
  it('should reset movies', () => {
    const resetAction = {
      type: ActionType.RESET_MOVIES_LIST,
    };

    expect(movieReducer(changedState, resetAction))
      .toEqual(initState);
  });
  it('should load movies', () => {
    const loadAction = {
      type: ActionType.LOAD_MOVIES_LIST,
      payload: [{id: 1, title: 'film1'}, {id: 2, title: 'film2'}, {id: 3, title: 'film3'}],
    };

    expect(movieReducer(changedState, loadAction))
      .toEqual(Object.assign(changedState, {allFilms: [{id: 1, title: 'film1'}, {id: 2, title: 'film2'}, {id: 3, title: 'film3'}], isDataLoaded: true}));
  });
  it('should update movie', () => {
    const updateAction = {
      type: ActionType.UPDATE_MOVIES_LIST,
      payload: {id: 2, title: 'newFilm2'},
    };

    expect(movieReducer(changedState, updateAction))
      .toEqual(Object.assign(changedState, {allFilms: [{id: 1, title: 'film1'}, {id: 2, title: 'newFilm2'}, {id: 3, title: 'film3'}], changedMovie: {id: 2, title: 'newFilm2'}}));
  });
});
