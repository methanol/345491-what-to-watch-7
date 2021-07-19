import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import ReviewForm from './review-form';
const mockStore = configureStore({});

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <ReviewForm id={0}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Post')).toBeInTheDocument();
    expect(screen.getAllByLabelText(/Rating/i)[0]).toBeInTheDocument();
  });
});
