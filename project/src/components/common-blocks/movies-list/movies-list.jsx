import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';

import SingleMovieCard from '../single-movie-card/single-movie-card';
import singleMovieProp from '../single-movie-card/single-movie.prop';
import VideoCard from  '../video-card/video-card';

function getMovieCard(it, activeMovieID, mouseOverHandler, mouseLeaveHandler) {
  return (it.id !== activeMovieID) ? <SingleMovieCard name = {it.name} id = {it.id} previewImage = {it.previewImage} key = {it.id} onMouseHover = {mouseOverHandler}/> : <VideoCard name = {it.name} id = {it.id} previewImage = {it.previewImage} key = {it.id} videoSourse = {it.previewVideoLink} onCardHover = {mouseOverHandler} onCardLeave = {mouseLeaveHandler}/>;
}

export default function MoviesList(props) {
  const {mockFilms} = props;

  const [activeMovieID, setActiveMovieID] = useState(0);

  const memoizedHandleMouseHover = useCallback(
    (id) => {
      setActiveMovieID(id);
    },
    [activeMovieID],
  );

  const handleMouseLeave = () => setActiveMovieID(0);

  return (
    <div className="catalog__films-list">
      {mockFilms.map((it) => getMovieCard(it, activeMovieID, memoizedHandleMouseHover, handleMouseLeave))}
    </div>
  );
}

MoviesList.propTypes = {
  mockFilms: PropTypes.arrayOf(
    singleMovieProp.movieProps,
  ).isRequired,
};
