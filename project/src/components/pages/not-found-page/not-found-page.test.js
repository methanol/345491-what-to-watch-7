import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NotFoundScreen from './not-found-page';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <NotFoundScreen />
      </Router>,
    );
    const textElement = getByText('Вернуться на главную');
    const headElement = getByText('Page not found');

    expect(textElement).toBeInTheDocument();
    expect(headElement).toBeInTheDocument();
  });
});
