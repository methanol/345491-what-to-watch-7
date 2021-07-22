import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute} from '../utils/constants';
import App from './app';
import camelize from 'camelize';

import {mockPromo, allFilms} from '../../mocks/films';

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {

  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      movie: {
        currentGenre: 'All genres',
        moviesOnPage: 8,
        changedMovie: {},
        allFilms: camelize(allFilms),
        isDataLoaded: true,
      },
      data: {
        promoFilm: camelize(mockPromo),
        similarFilms: [],
        reviews: [],
        favoriteMovies: [],
        reviewUploading: false,
      },
      auth: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.ROOT);
    render(fakeApp);

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });

  it('should render "SignIn" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/wrong-route');
    render(fakeApp);

    const textElement = screen.getByText('Вернуться на главную');
    const headElement = screen.getByText('Page not found');

    expect(textElement).toBeInTheDocument();
    expect(headElement).toBeInTheDocument();
  });
});

