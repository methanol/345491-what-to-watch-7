import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {mockFilms, mockPromo} from './mocks/films.js';

ReactDOM.render(
  <React.StrictMode>
    <App promoInfo = {mockPromo} mockFilms = {mockFilms}/>
  </React.StrictMode>,
  document.getElementById('root'));
