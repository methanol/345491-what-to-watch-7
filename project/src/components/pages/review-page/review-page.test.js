import React from 'react';
import {render, screen} from '@testing-library/react';
import {Route, MemoryRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import camelize from 'camelize';

import ReviewPage from './review-page';
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
    similarFilms: [],
  },
  auth: {
    authorizationStatus: AuthorizationStatus.AUTH,
  },
});

describe('Component: ReviewPage', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/films/1/review']}>
          <Route path='/films/:id/review'>
            <ReviewPage allFilms = {camelize(allFilms)}/>
          </Route>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Add review')).toBeInTheDocument();
  });
});
