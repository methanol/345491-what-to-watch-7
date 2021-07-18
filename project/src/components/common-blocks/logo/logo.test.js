import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getAllByText} = render(
      <Router history={history}>
        <Logo />
      </Router>,
    );
    const logoElements = getAllByText('W');

    for (const item of logoElements)
    {
      expect(item).toBeInTheDocument();
    }
  });
});
