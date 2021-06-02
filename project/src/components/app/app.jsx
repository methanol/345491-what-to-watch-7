import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import PropTypes from 'prop-types';

function App({promoInfo}) {
  return (
    <MainPage promoInfo = {promoInfo}/>
  );
}

App.propTypes = {
  promoInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }),
};

export default App;
