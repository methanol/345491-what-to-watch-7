import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import camelize from 'camelize';

import OverviewTab from './overview-tab';
import {allFilms} from '../../../mocks/films';

describe('Component: OverviewTab', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <OverviewTab currentMovie = {camelize(allFilms[0])}/>
      </Router>,
    );

    expect(getByText('Director:', {exact: false})).toBeInTheDocument();
    expect(getByText('Starring:', {exact: false})).toBeInTheDocument();
  });
});
