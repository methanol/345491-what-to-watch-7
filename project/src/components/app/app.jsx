import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from '../pages/main-page/main-page.jsx';
import SignIn from '../pages/sign-in/sign-in.jsx';
import MyList from '../pages/my-list/my-list.jsx';
import MoviePage from '../pages/movie-page/movie-page.jsx';
import ReviewPage from '../pages/review-page/review-page.jsx';
import Player from '../pages/player/player.jsx';
import NotFoundScreen from '../pages/not-found-page/not-found-page.jsx';

function App({promoInfo, mockFilms}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact render={() => <MainPage promoInfo = {promoInfo} mockFilms = {mockFilms}/>}/>
        <Route path = '/login' exact component={SignIn}/>
        <Route path = '/mylist' exact render={() => <MyList mockFilms = {mockFilms}/>}/>
        <Route path = '/films/:id' exact>
          <MoviePage mockFilms = {mockFilms}/>
        </Route>
        <Route path = '/films/:id/review' exact render={() => <ReviewPage mockFilms = {mockFilms}/>}/>
        <Route path = '/player/:id' exact>
          <Player mockFilms = {mockFilms}/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  promoInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  mockFilms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default App;
