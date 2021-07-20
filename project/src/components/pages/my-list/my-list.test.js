import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import camelize from 'camelize';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import * as Redux from 'react-redux';

import MyList from './my-list';
import {allFilms} from '../../../mocks/films';
import {AuthorizationStatus} from '../../utils/constants';

const mockStore = configureStore({});
const store = mockStore({
  movie: {
    currentGenre: 'All genres',
    moviesOnPage: 8,
    changedMovie: {},
    allFilms: camelize(allFilms),
    isDataLoaded: true,
  },
  data: {
    similarFilms: [],
    favoriteMovies: camelize(allFilms),
  },
  auth: {
    authorizationStatus: AuthorizationStatus.AUTH,
  },
});

describe('Component: MyList', () => {
  it('should render correctly', () => {

    const history = createMemoryHistory();

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch').mockReturnValue(dispatch);

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <MyList/>
        </Router>
      </Provider>,
    );

    expect(useDispatch).toBeCalledTimes(allFilms.length + 1);
    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(container.querySelectorAll('article').length).toBe(allFilms.length);
  });
});
