import {loadPromoMovie, loadSimilarMovie, loadMovieReview, loadFavoriteMovies, uploadReview} from '../actions';
import camelize from 'camelize';
import {createReducer} from '@reduxjs/toolkit';

const initState = {
  promoFilm: {},
  similarFilms: [],
  reviews: [],
  favoriteMovies: [],
  reviewUploading: false,
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
    })
    .addCase(uploadReview, (state, action) => {
      state.reviewUploading = action.payload;
    });
});

export default dataReducer;
