import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchSimilarMovies, fetchMovieReviews} from '../../../store/api-actions';

export function SingleMovieCard(props) {
  const {name, previewImage, id, onMouseHover, showSimilarAction, showReviewsAction} = props;

  const setActiveMovie = () => onMouseHover ? onMouseHover(id) : null;

  const handleMovieClick = () => {
    showSimilarAction(id);
    showReviewsAction(id);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseOver = {setActiveMovie} onClick = {handleMovieClick}>
      <Link to={`/films/${id}`}>
        <div className="small-film-card__image">
          <img src={previewImage} alt={name} width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

const mapDispatchToProps = (dispatch) => ({
  showSimilarAction(id) {
    dispatch(fetchSimilarMovies(id));
  },
  showReviewsAction(id) {
    dispatch(fetchMovieReviews(id));
  },
});

export default connect(null, mapDispatchToProps)(SingleMovieCard);

SingleMovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onMouseHover: PropTypes.func,
  showSimilarAction: PropTypes.func.isRequired,
  showReviewsAction: PropTypes.func.isRequired,
};

