import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import camelize from 'camelize';

import DetailTab from './detail-tab';
import {allFilms} from '../../../mocks/films';

describe('Component: DetailTab', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText, queryByText} = render(
      <Router history={history}>
        <DetailTab currentMovie = {camelize(allFilms[0])}/>
      </Router>,
    );

    expect(getByText('Director')).toBeInTheDocument();
    expect(getByText('Starring')).toBeInTheDocument();
    expect(getByText('Run Time')).toBeInTheDocument();
    expect(getByText('Genre')).toBeInTheDocument();
    expect(getByText('Released')).toBeInTheDocument();
    expect(queryByText('Budget')).not.toBeInTheDocument();
  });
});
