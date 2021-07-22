import dataReducer from './data-reducer';
import {ActionType} from '../actions';

const initState = {
  promoFilm: {},
  similarFilms: [],
  reviews: [],
  favoriteMovies: [],
  reviewUploading: false,
};

const changedState = Object.assign({}, initState);

describe('Data reducer testing', () => {
  it('without additional parameters should return initial state', () => {
    expect(dataReducer(undefined, {}))
      .toEqual(initState);
  });
  it('should load promo movie', () => {
    const loadPromoAction = {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: {title: 'Promo'},
    };

    expect(dataReducer(changedState, loadPromoAction))
      .toEqual(Object.assign(changedState, {promoFilm: {title: 'Promo'}}));
  });
  it('should load similar movies', () => {
    const loadSimilarAction = {
      type: ActionType.LOAD_SIMILAR_MOVIES,
      payload: ['film1, film2'],
    };

    expect(dataReducer(changedState, loadSimilarAction))
      .toEqual(Object.assign(changedState, {similarFilms: ['film1, film2']}));
  });
  it('should load reviews', () => {
    const loadReviewsAction = {
      type: ActionType.LOAD_MOVIE_REVIEWS,
      payload: ['review1, review2'],
    };

    expect(dataReducer(changedState, loadReviewsAction))
      .toEqual(Object.assign(changedState, {reviews: ['review1, review2']}));
  });
  it('should load favotite movies', () => {
    const loadFavoriteAction = {
      type: ActionType.GET_FAVORITES,
      payload: ['favorite1, favorite2'],
    };

    expect(dataReducer(changedState, loadFavoriteAction))
      .toEqual(Object.assign(changedState, {favoriteMovies: ['favorite1, favorite2']}));
  });
  it('should set review uploading', () => {
    const reviewUploadingAction = {
      type: ActionType.UPLOAD_REVIEW,
      payload: true,
    };

    expect(dataReducer(changedState, reviewUploadingAction))
      .toEqual(Object.assign(changedState, {reviewUploading: true}));
  });
});
