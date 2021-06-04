import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const promoMovieInfo = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App promoInfo = {promoMovieInfo}/>
  </React.StrictMode>,
  document.getElementById('root'));
