import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import ShowMore from './show-more';

describe('Component: ShowMore', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <ShowMore>
          <button className="catalog__button" type="button" >Show more</button>
        </ShowMore>
      </Router>,
    );

    expect(getByText('Show more')).toBeInTheDocument();
  });
});
