import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from './api';

import {movieReducer} from './store/reducer';
import {fetchMoviesList, fetchPromoMovie, checkAuth} from './store/api-actions';
import {requireAuthorization} from './store/actions';
import {AuthorizationStatus} from './components/utils/constants';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  movieReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

store.dispatch(checkAuth());
store.dispatch(fetchPromoMovie());
store.dispatch(fetchMoviesList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
