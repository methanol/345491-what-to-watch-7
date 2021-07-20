import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import camelize from 'camelize';
import userEvent from '@testing-library/user-event';

import {MainPage} from './main-page';
import {allFilms, mockPromo} from '../../../mocks/films';
import {AuthorizationStatus} from '../../utils/constants';

const mockStore = configureStore({});
const store = mockStore({
  movie: {
    currentGenre: 'All genres',
    moviesOnPage: 8,
    changedMovie: {},
    allFilms: camelize(allFilms),
    isDataLoaded: true,
  },
  data: {
    promoFilm: camelize(mockPromo),
  },
  auth: {
    authorizationStatus: AuthorizationStatus.AUTH,
  },
});

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const showMoreButtonClickHandle = jest.fn();

    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage promoInfo = {camelize(mockPromo)} currentFilmsProp = {camelize(allFilms)} showMoreAction = {showMoreButtonClickHandle} resetMoviesListAction = {() => {}} moviesOnPageProp = {8} shownFilmsProp = {camelize(allFilms)} postFavoriteAction = {() => {}}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.getByText('Show more')).toBeInTheDocument();
    userEvent.click(screen.getByText('Show more'));
    expect(showMoreButtonClickHandle).toBeCalled();
  });
});
