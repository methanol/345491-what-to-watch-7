import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PageFooter from './page-footer';

describe('Component: PageFooter', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <PageFooter />
      </Router>,
    );
    const textElement = getByText('© 2021 What to watch Ltd.');

    expect(textElement).toBeInTheDocument();
  });
});
