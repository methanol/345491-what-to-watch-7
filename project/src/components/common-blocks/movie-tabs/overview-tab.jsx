import React from 'react';
import PropTypes from 'prop-types';

import {getScoreEvaluation} from '../../utils/functions';

export default function OverviewTab(props) {
  const {currentMovie} = props;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentMovie.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getScoreEvaluation(currentMovie.rating)}</span>
          <span className="film-rating__count">{currentMovie.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{currentMovie.description}</p>

        <p className="film-card__director"><strong>Director: {currentMovie.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {currentMovie.starring.join(', ')}</strong></p>
      </div>
    </>
  );
}

OverviewTab.propTypes = {
  currentMovie: PropTypes.shape({
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};
