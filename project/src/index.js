import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import camelize from 'camelize';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {movieReducer} from './store/reducer';
import {mockFilms, mockPromo} from './mocks/films.js';

const store = createStore(
  movieReducer,
  composeWithDevTools(),
);

const camelizedMockFilms = camelize(mockFilms);

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App promoInfo = {mockPromo} mockFilms = {camelizedMockFilms}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
