import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Route, MemoryRouter} from 'react-router-dom';
import camelize from 'camelize';

import Player from './player';
import {allFilms} from '../../../mocks/films';

describe('Component: Player', () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });

  it('should render correctly', () => {
    const {container} = render(
      <MemoryRouter initialEntries={['/player/1']}>
        <Route path='/player/:id'>
          <Player allFilms = {camelize(allFilms)}/>
        </Route>
      </MemoryRouter>,
    );

    expect(screen.getByText('Exit')).toBeInTheDocument();
    expect(container.querySelector('video')).toBeInTheDocument();
    expect(screen.getByText('Exit')).toHaveClass('player__exit');
  });

  it('should play video when data is loaded', () => {

    const {container} = render(
      <MemoryRouter initialEntries={['/player/1']}>
        <Route path='/player/:id'>
          <Player allFilms = {camelize(allFilms)}/>
        </Route>
      </MemoryRouter>,
    );

    fireEvent(container.querySelector('video'), new Event('loadeddata'));

    expect(screen.getByText('Play')).toBeInTheDocument();
    userEvent.click(screen.getByText('Play'));
    expect(screen.queryByText('Play')).not.toBeInTheDocument();
    expect(screen.queryByText('Pause')).toBeInTheDocument();
  });
});
