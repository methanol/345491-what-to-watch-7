import {ActionType, switchGenre, showMoreMovies, resetMoviesList, loadMoviesList, updateMoviesList, loadPromoMovie, loadSimilarMovie, loadMovieReview, loadFavoriteMovies, requireAuthorization, userLogout, redirectToRoute, replaceRoute, uploadReview} from './actions';

describe('Actions', () => {
  it('action creator for genre switching', () => {
    const expectedAction = {
      type: ActionType.SWITCH_GENRE,
      payload: {genre: 'Drama'},
    };

    expect(switchGenre('Drama')).toEqual(expectedAction);
  });

  it('action creator for more movies', () => {
    const expectedAction = {
      type: ActionType.MORE_MOVIES,
    };

    expect(showMoreMovies()).toEqual(expectedAction);
  });

  it('action creator for movie reseting', () => {
    const expectedAction = {
      type: ActionType.RESET_MOVIES_LIST,
    };

    expect(resetMoviesList()).toEqual(expectedAction);
  });

  it('action creator for movie loading', () => {
    const expectedAction = {
      type: ActionType.LOAD_MOVIES_LIST,
      payload: ['film1', 'film2', 'film3'],
    };

    expect(loadMoviesList(['film1', 'film2', 'film3'])).toEqual(expectedAction);
  });

  it('action creator for movie update', () => {
    const expectedAction = {
      type: ActionType.UPDATE_MOVIES_LIST,
      payload: {caption: 'film'},
    };

    expect(updateMoviesList({caption: 'film'})).toEqual(expectedAction);
  });

  it('action creator for promo movie', () => {
    const expectedAction = {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: {caption: 'film'},
    };

    expect(loadPromoMovie({caption: 'film'})).toEqual(expectedAction);
  });

  it('action creator for similar movies', () => {
    const expectedAction = {
      type: ActionType.LOAD_SIMILAR_MOVIES,
      payload: ['film1', 'film2', 'film3'],
    };

    expect(loadSimilarMovie(['film1', 'film2', 'film3'])).toEqual(expectedAction);
  });

  it('action creator for review loading', () => {
    const expectedAction = {
      type: ActionType.LOAD_MOVIE_REVIEWS,
      payload: ['review1', 'review2', 'review3'],
    };

    expect(loadMovieReview(['review1', 'review2', 'review3'])).toEqual(expectedAction);
  });

  it('action creator for favorite loading', () => {
    const expectedAction = {
      type: ActionType.GET_FAVORITES,
      payload: ['favorite1', 'favorite2', 'favorite3'],
    };

    expect(loadFavoriteMovies(['favorite1', 'favorite2', 'favorite3'])).toEqual(expectedAction);
  });

  it('action creator for authorization', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'AUTH',
    };

    expect(requireAuthorization('AUTH')).toEqual(expectedAction);
  });

  it('action creator for logout', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(userLogout()).toEqual(expectedAction);
  });

  it('action creator for route redirect', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: './route',
    };

    expect(redirectToRoute('./route')).toEqual(expectedAction);
  });

  it('action creator for route replace', () => {
    const expectedAction = {
      type: ActionType.REPLACE_ROUTE,
      payload: './route',
    };

    expect(replaceRoute('./route')).toEqual(expectedAction);
  });
  it('action creator for review uploading', () => {
    const expectedAction = {
      type: ActionType.UPLOAD_REVIEW,
      payload: true,
    };

    expect(uploadReview(true)).toEqual(expectedAction);
  });
});

