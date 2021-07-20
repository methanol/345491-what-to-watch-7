import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import camelize from 'camelize';
import {createMemoryHistory} from 'history';

import VideoCard from './video-card';
import {allFilms} from '../../../mocks/films';

describe('Component: VideoCard', () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });

  it('should render correctly', () => {
    const history = createMemoryHistory();
    const videoClickHandle = jest.fn();

    const {container} = render(
      <Router history={history}>
        <VideoCard allFilms = {camelize(allFilms)} previewImage = {'/source'} id = {1} videoSourse = '/src' onCardHover = {() => {}} onCardLeave = {() => {}} handleClick = {videoClickHandle}/>
      </Router>,
    );

    expect(container.querySelector('video')).toBeInTheDocument();
    userEvent.click(container.querySelector('video'));
    expect(videoClickHandle).toBeCalled();
  });
});
