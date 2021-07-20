import React from 'react';
import {render, screen} from '@testing-library/react';
import {Switch, Route, MemoryRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import camelize from 'camelize';
import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';

import {MoviePage} from './movie-page';
import {allFilms, mockPromo} from '../../../mocks/films';
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
    promoFilm: camelize(mockPromo),
    similarFilms: [],
  },
  auth: {
    authorizationStatus: AuthorizationStatus.AUTH,
  },
});

describe('Component: MoviePage', () => {
  it('should render correctly', () => {

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch').mockReturnValue(dispatch);

    const {container} = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/films/1']}>
          <Switch>
            <Route path='/films/:id'>
              <MoviePage allFilms = {camelize(allFilms)}/>
            </Route>
            <Route path="/" exact>
              <h1>This is main page</h1>
            </Route>
          </Switch>
        </MemoryRouter>
      </Provider>,
    );

    expect(useDispatch).toBeCalledTimes(1);
    expect(screen.getByText('More like this')).toBeInTheDocument();
    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(container.querySelector('.logo__link'));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });
});
