import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {GenresList} from './genres-list';

describe('Component: GenresList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText, queryByText} = render(
      <Router history={history}>
        <GenresList currentGenreProp = {'All genres'} switchGenreAction = {()=>{}} genresProp ={['All genres', 'Drama', 'Adventure', 'Action', 'Fantasy', 'Crime', 'Thriller', 'Comedy']}/>
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
