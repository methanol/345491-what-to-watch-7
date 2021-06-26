import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import MainPage from '../pages/main-page/main-page.jsx';
import SignIn from '../pages/sign-in/sign-in.jsx';
import MyList from '../pages/my-list/my-list.jsx';
import MoviePage from '../pages/movie-page/movie-page.jsx';
import ReviewPage from '../pages/review-page/review-page.jsx';
import Player from '../pages/player/player.jsx';
import NotFoundScreen from '../pages/not-found-page/not-found-page.jsx';
import {AppRoute} from '../utils/constants';
import LoadingScreen from '../common-blocks/loading-screen/loading-screen';

function App(props) {

  const {promoFilm, allFilms, isDataLoaded} = props;

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact render={() => <MainPage promoInfo = {promoFilm}/>}/>
        <Route path = {AppRoute.LOGIN} exact component={SignIn}/>
        <Route path = {AppRoute.MY_LIST} exact render={() => <MyList allFilms = {allFilms}/>}/>
        <Route path = {AppRoute.FILM} exact>
          <MoviePage allFilms = {allFilms}/>
        </Route>
        <Route path = {AppRoute.FILM_REVIEW} exact render={() => <ReviewPage allFilms = {allFilms}/>}/>
        <Route path = {AppRoute.FILM_PLAYER} exact>
          <Player allFilms = {allFilms}/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  promoFilm: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  allFilms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      runTime: PropTypes.number.isRequired,
      starring: PropTypes.arrayOf(
        PropTypes.string.isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  allFilms: state.currentFilms,
  promoFilm: state.promoFilm,
  isDataLoaded: state.isDataLoaded,
});

export default connect(mapStateToProps, null)(App);
