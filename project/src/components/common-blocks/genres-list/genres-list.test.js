import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import camelize from 'camelize';

import {GenresList} from './genres-list';
import {allFilms} from '../../../mocks/films';

describe('Component: GenresList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText, queryByText} = render(
      <Router history={history}>
        <GenresList moviesProp = {camelize(allFilms)} currentGenreProp = {'All genres'} switchGenreAction = {()=>{}}/>
      </Router>,
    );

    expect(getByText('Drama')).toBeInTheDocument();
    expect(getByText('Adventure')).toBeInTheDocument();
    expect(getByText('Action')).toBeInTheDocument();
    expect(getByText('Fantasy')).toBeInTheDocument();
    expect(getByText('Crime')).toBeInTheDocument();
    expect(getByText('Thriller')).toBeInTheDocument();
    expect(getByText('Comedy')).toBeInTheDocument();
    expect(queryByText('Horror')).not.toBeInTheDocument();
  });
});
