import React, {useRef, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import ButtonImage from '../../utils/button-image/button-image.jsx';
import NotFoundScreen from '../not-found-page/not-found-page.jsx';

export default function Player(props) {
  const params = useParams();
  const {allFilms} = props;
  const currentMovie = allFilms.find((it) => Number(it.id) === Number(params.id));

  const videoRef = useRef(null);
  const progressBarRef = useRef(null);

  const [playerState, setPlayerState] = useState({
    playing: false,
    elapsedTime: 0,
  });

  const handlePlayingClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlayerState((prevState) => ({
        ...prevState,
        playing: true,
      }));
    } else {
      videoRef.current.pause();
      setPlayerState((prevState) => ({
        ...prevState,
        playing: false,
      }));
    }
  };

  const updateProgressBar = () => {
    progressBarRef.current.value = videoRef.current ? ((videoRef.current.currentTime / videoRef.current.duration) * 100) : 0;
    setPlayerState((prevState) => ({
      ...prevState,
      elapsedTime:  `-${Math.floor(videoRef.current.duration - videoRef.current.currentTime)}`,
    }));
  };

  const handleFullScreenMode = () => {
    if (videoRef.current) {
      videoRef.current.fullscreen ? videoRef.current.exitFullscreen() : videoRef.current.requestFullscreen();
    }
  };

  return currentMovie ? (
    <>
      <div className="visually-hidden">
        <ButtonImage/>
      </div>

      <div className="player">
        <video ref = {videoRef} src = {currentMovie.videoLink} className="player__video" poster={currentMovie.backgroundImage} onTimeUpdate = {updateProgressBar}></video>
        <Link to='/'>
          <button type="button" className="player__exit" onClick = {() => videoRef.current.pause()}>Exit</button>
        </Link>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress ref = {progressBarRef} className="player__progress" value={videoRef.current ? Math.floor((videoRef.current.currentTime / videoRef.current.duration) * 100) : 0} max="100"></progress>
              <div className="player__toggler">Toggler</div>
            </div>
            <div className="player__time-value">{videoRef.current ? playerState.elapsedTime : ''}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick = {handlePlayingClick}>
              {!playerState.playing ?
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg> :
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#pause"></use>
                </svg>}
              <span>{!playerState.playing ? 'Play' : 'Pause'}</span>
            </button>
            <div className="player__name">{currentMovie.name}</div>

            <button type="button" className="player__full-screen" onClick = {handleFullScreenMode}>
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
