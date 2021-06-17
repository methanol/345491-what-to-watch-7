import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {mockFilms, mockPromo} from './mocks/films.js';

const camelize = require('camelize');
const camelizedMockFilms = camelize(mockFilms);

ReactDOM.render(
  <React.StrictMode>
    <App promoInfo = {mockPromo} mockFilms = {camelizedMockFilms}/>
  </React.StrictMode>,
  document.getElementById('root'));
