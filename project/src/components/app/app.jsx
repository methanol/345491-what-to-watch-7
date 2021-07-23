import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MainPage from '../pages/main-page/main-page.jsx';
import SignIn from '../pages/sign-in/sign-in.jsx';
import MyList from '../pages/my-list/my-list.jsx';
import MoviePage from '../pages/movie-page/movie-page.jsx';
import ReviewPage from '../pages/review-page/review-page.jsx';
import Player from '../pages/player/player.jsx';
import NotFoundScreen from '../pages/not-found-page/not-found-page.jsx';
import {AppRoute, isCheckedAuth} from '../utils/constants';
import LoadingScreen from '../common-blocks/loading-screen/loading-screen';
import PrivateRoute from '../common-blocks/private-route/private-route';
import {getAllFilms, getDataLoaded, getAuthorizationStatus} from '../../store/selector/selector';

function App() {

  const allFilms = useSelector(getAllFilms);
  const isDataLoaded = useSelector(getDataLoaded);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (!isDataLoaded || !isCheckedAuth(authorizationStatus)) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <Switch>
        <Route path = {AppRoute.ROOT} exact render={() => <MainPage/>}/>
        <Route path = {AppRoute.LOGIN} exact render={() => <SignIn/>}/>
        <PrivateRoute exact path={AppRoute.MY_LIST} render={() => (<MyList/>)}/>
        <Route path = {AppRoute.FILM} exact>
          <MoviePage allFilms = {allFilms}/>
        </Route>
        <PrivateRoute exact path={AppRoute.FILM_REVIEW} render={() => (<ReviewPage allFilms = {allFilms}/>)}/>
        <Route path = {AppRoute.FILM_PLAYER} exact>
          <Player allFilms = {allFilms}/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
