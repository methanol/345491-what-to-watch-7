import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import ButtonImage from '../../utils/button-image/button-image.jsx';
import NotFoundScreen from '../not-found-page/not-found-page.jsx';

export default function Player(props) {
  const params = useParams();
  const {allFilms} = props;
  const currentMovie = allFilms.find((it) => Number(it.id) === Number(params.id));

  return currentMovie ? (
    <>
      <div className="visually-hidden">
        <ButtonImage/>
      </div>

      <div className="player">
        <video src="#" className="player__video" poster={currentMovie.background_image}></video>
        <Link to='/'>
          <button type="button" className="player__exit">Exit</button>
        </Link>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler">Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{currentMovie.name}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  ) : <NotFoundScreen/>;
}

Player.propTypes = {
  allFilms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
