import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SingleMovieCard(props) {
  const {name, previewImage, id, onMouseHover} = props;

  const setActiveMovie = () => onMouseHover ? onMouseHover(id) : null;

  return (
    <article className="small-film-card catalog__films-card" onMouseOver = {setActiveMovie}>
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

SingleMovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onMouseHover: PropTypes.func,
};

