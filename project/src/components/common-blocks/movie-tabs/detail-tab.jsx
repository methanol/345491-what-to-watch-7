import React from 'react';
import PropTypes from 'prop-types';

function DetailTab(props) {
  const {currentMovie} = props;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{currentMovie.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {currentMovie.starring.map((it) => <span key = {it}>{it}<br/></span>)}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{currentMovie.runTime}m</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{currentMovie.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{currentMovie.released}</span>
        </p>
      </div>
    </div>
  );
}

DetailTab.propTypes = {
  currentMovie: PropTypes.shape({
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }).isRequired,
};

export default DetailTab;
