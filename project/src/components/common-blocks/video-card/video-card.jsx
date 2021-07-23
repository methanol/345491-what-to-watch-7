import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function VideoCard(props) {

  const {previewImage, id, videoSourse, onCardHover = () => {}, onCardLeave = () => {}, handleClick = () => {}} = props;
  const videoRef = useRef(null);
  let playingTimeout;
  const VIDEO_TIMEOUT = 1000;

  const setActiveMovie = () => {
    onCardHover(id);
    playingTimeout = setTimeout(() => {
      videoRef.current.play();
    }, VIDEO_TIMEOUT);
  };

  const stopActiveMovie = () => {
    handleClick();
    clearTimeout(playingTimeout);
    onCardLeave();
    videoRef.current.pause();
  };

  return (
    <Link to={`/films/${id}`} className="small-film-card catalog__films-card" >
      <video ref = {videoRef} src = {videoSourse} poster = {previewImage} width="280" height="175" onMouseOver = {setActiveMovie} onMouseLeave = {stopActiveMovie} onClick = {stopActiveMovie} muted className="small-film-card__image">
      </video>
    </Link>
  );
}

VideoCard.propTypes = {
  previewImage: PropTypes.string.isRequired,
  videoSourse: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onCardHover: PropTypes.func,
  onCardLeave: PropTypes.func,
  handleClick: PropTypes.func,
};

export default VideoCard;
