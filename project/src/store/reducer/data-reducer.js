import {loadPromoMovie, loadSimilarMovie, loadMovieReview, loadFavoriteMovies} from '../actions';
import camelize from 'camelize';
import {createReducer} from '@reduxjs/toolkit';

const initState = {
  promoFilm: {},
  similarFilms: [],
  reviews: [],
  favoriteMovies: [],
};

const dataReducer = createReducer(initState, (builder) => {
  builder
    .addCase(loadPromoMovie, (state, action) => {
      state.promoFilm = camelize(action.payload);
    })
    .addCase(loadSimilarMovie, (state, action) => {
      state.similarFilms = camelize(action.payload);
    })
    .addCase(loadMovieReview, (state, action) => {
      state.reviews = camelize(action.payload);
    })
    .addCase(loadFavoriteMovies, (state, action) => {
      state.favoriteMovies = camelize(action.payload);
    });
});

export default dataReducer;
