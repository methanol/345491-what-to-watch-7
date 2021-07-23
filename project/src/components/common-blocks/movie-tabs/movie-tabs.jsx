import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import OverviewTab from './overview-tab';
import DetailTab from './detail-tab';
import ReviewTab from './review-tab';
import './style.css';

const availableOptions = ['Overview', 'Details', 'Reviews'];

function MoviesTabs(props) {
  const {currentMovie} = props;
  const [activeOptionIndex, setActiveOption] = useState(0);

  function renderMovieOptions() {

    return availableOptions.map((it, ind) => (
      <li className= {classNames('film-nav__item', { 'film-nav__item--active': ind === activeOptionIndex })} key = {it} onClick = {() => setActiveOption(ind)} id = {it}>
        <span className="film-nav__link">{it}</span>
      </li>
    ));
  }

  function getActualTab (tabIndex) {
    switch (tabIndex) {
      case 0:
        return <OverviewTab currentMovie = {currentMovie}/>;
      case 1:
        return <DetailTab currentMovie = {currentMovie}/>;
      case 2:
        return <ReviewTab currentMovie = {currentMovie}/>;
      default:
        return 'Error occured';
    }
  }

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {renderMovieOptions()}
        </ul>
      </nav>
      {getActualTab(activeOptionIndex)}
    </div>
  );
}

MoviesTabs.propTypes = {
  currentMovie: PropTypes.shape({
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(
      PropTypes.string,
    ),
  }),
};

export default MoviesTabs;

