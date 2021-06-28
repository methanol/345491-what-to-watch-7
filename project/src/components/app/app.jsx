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
import {AppRoute, isCheckedAuth} from '../utils/constants';
import LoadingScreen from '../common-blocks/loading-screen/loading-screen';
import PrivateRoute from '../utils/private-route/private-route';

function App(props) {

  const {promoFilm, allFilms, isDataLoaded, authorizationStatus} = props;

  if (!isDataLoaded || !isCheckedAuth(authorizationStatus)) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact render={() => <MainPage promoInfo = {promoFilm}/>}/>
        <Route path = {AppRoute.LOGIN} exact component={SignIn}/>
        <PrivateRoute path = {AppRoute.MY_LIST} allFilms = {allFilms} exact component={MyList} />
        <Route path = {AppRoute.FILM} exact>
          <MoviePage allFilms = {allFilms}/>
        </Route>
        <PrivateRoute path = {AppRoute.FILM_REVIEW} allFilms = {allFilms} exact component={ReviewPage} />
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
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  allFilms: state.currentFilms,
  promoFilm: state.promoFilm,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapStateToProps, null)(App);
