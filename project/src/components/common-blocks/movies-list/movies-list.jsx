import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SingleMovieCard from '../single-movie-card/single-movie-card';
import singleMovieProp from '../single-movie-card/single-movie.prop';
import VideoCard from  '../video-card/video-card';
import {fetchSimilarMovies, fetchMovieReviews} from '../../../store/api-actions';

export function MoviesList(props) {
  const {allFilms, showSimilarAction, showReviewsAction} = props;

  const [activeMovieID, setActiveMovieID] = useState(0);

  const memoizedHandleMouseHover = useCallback(
    (id) => {
      setActiveMovieID(id);
    },
    [],
  );

  const handleMouseLeave = () => setActiveMovieID(0);

  const handleMovieClick = (id) => {
    showSimilarAction(id);
    showReviewsAction(id);
  };

  function getMovieCard(it, mouseOverHandler, mouseLeaveHandler) {
    return (it.id !== activeMovieID) ? <SingleMovieCard name = {it.name} id = {it.id} previewImage = {it.previewImage} key = {it.id} onMouseHover = {mouseOverHandler}/> : <VideoCard name = {it.name} id = {it.id} previewImage = {it.previewImage} key = {it.id} videoSourse = {it.previewVideoLink} onCardHover = {mouseOverHandler} onCardLeave = {mouseLeaveHandler} handleClick = {() => handleMovieClick(it.id)}/>;
  }

  return (
    <div className="catalog__films-list">
      {allFilms.map((it) => getMovieCard(it, memoizedHandleMouseHover, handleMouseLeave))}
    </div>
  );
}

MoviesList.propTypes = {
  allFilms: PropTypes.arrayOf(
    singleMovieProp.movieProps,
  ).isRequired,
  showSimilarAction: PropTypes.func.isRequired,
  showReviewsAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  showSimilarAction(id) {
    dispatch(fetchSimilarMovies(id));
  },
  showReviewsAction(id) {
    dispatch(fetchMovieReviews(id));
  },
});

export default connect(null, mapDispatchToProps)(MoviesList);
