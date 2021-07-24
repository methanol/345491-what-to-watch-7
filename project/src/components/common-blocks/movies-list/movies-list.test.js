import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import camelize from 'camelize';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import {MoviesList} from './movies-list';
import {allFilms} from '../../../mocks/films';

const mockStore = configureStore({});
describe('Component: MoviesList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <MoviesList allFilms = {camelize(allFilms)}/>
        </Router>
      </Provider>,
    );

    for (const film of allFilms)
    {
      expect(getByText(film.name)).toBeInTheDocument();
    }
  });
});
