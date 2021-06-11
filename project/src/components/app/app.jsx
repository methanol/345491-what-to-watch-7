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

function App({promoInfo}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact render={() => <MainPage promoInfo = {promoInfo}/>}/>
        <Route path = '/login' exact component={SignIn}/>
        <Route path = '/mylist' exact component={MyList}/>
        <Route path = '/films/:id' exact component={MoviePage}/>
        <Route path = '/films/:id/review' exact component={ReviewPage}/>
        <Route path = '/player/:id' exact component={Player}/>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  promoInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
};

export default App;
