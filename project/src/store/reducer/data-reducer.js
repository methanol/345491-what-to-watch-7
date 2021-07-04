import {loadPromoMovie, loadSimilarMovie, loadMovieReview} from '../actions';
import camelize from 'camelize';
import {createReducer} from '@reduxjs/toolkit';

const initState = {
  promoFilm: {},
  similarFilms: [],
  reviews: [],
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
    });
});

export default dataReducer;
