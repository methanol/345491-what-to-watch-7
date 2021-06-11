import React from 'react';
import PropTypes from 'prop-types';

export default function MyListItem(props) {
  const {movieTitle, posterSource} = props.movieInfo;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={posterSource} alt={movieTitle} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{movieTitle}</a>
      </h3>
    </article>
  );
}

MyListItem.propTypes = {
  movieInfo: PropTypes.shape({
    movieTitle: PropTypes.string.isRequired,
    posterSource: PropTypes.string.isRequired,
  }).isRequired,
};
