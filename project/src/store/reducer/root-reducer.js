import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import movieReducer from './movie-reducer';
import dataReducer from './data-reducer';

export default combineReducers({
  auth: authReducer,
  data: dataReducer,
  movie: movieReducer,
});

