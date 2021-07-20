import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import camelize from 'camelize';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import * as Redux from 'react-redux';

import {ReviewTab} from './review-tab';
import {allFilms, mockReviews} from '../../../mocks/films';

const mockStore = configureStore({});
const store = mockStore({
  data: {
    reviews: camelize(mockReviews),
  },
});

describe('Component: ReviewTab', () => {
  it('should render correctly', () => {

    const history = createMemoryHistory();

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch').mockReturnValue(dispatch);

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewTab currentMovie = {camelize(allFilms[0])}/>
        </Router>
      </Provider>,
    );

    expect(useDispatch).toBeCalledTimes(1);
    expect(container.querySelectorAll('.review').length).toBe(mockReviews.length);
  });
});
