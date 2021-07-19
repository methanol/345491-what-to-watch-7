import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import camelize from 'camelize';

import MoviesTabs from './movie-tabs';
import {allFilms} from '../../../mocks/films';

describe('Component: MoviesTabs', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <MoviesTabs currentMovie = {camelize(allFilms[0])}/>
      </Router>,
    );

    expect(getByText('Overview')).toBeInTheDocument();
    expect(getByText('Details')).toBeInTheDocument();
    expect(getByText('Reviews')).toBeInTheDocument();
  });
});
