import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import camelize from 'camelize';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import {SingleMovieCard} from './single-movie-card';
import {allFilms} from '../../../mocks/films';

const mockStore = configureStore({});
describe('Component: SingleMovieCard', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <SingleMovieCard name = {camelize(allFilms[0]).name} previewImage = {camelize(allFilms[0]).previewImage} id = {camelize(allFilms[0]).id} onMouseHover = {()=>{}}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(allFilms[0].name)).toBeInTheDocument();
  });
});
