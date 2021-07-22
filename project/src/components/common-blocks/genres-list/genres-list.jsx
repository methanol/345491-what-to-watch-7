import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {switchGenre} from '../../../store/actions';
import {INITIAL_GENRE} from '../../utils/constants';

import singleMovieProp from '../single-movie-card/single-movie.prop';
import {getAllFilms, getCurrentGenre} from '../../../store/selector';
import './style.css';

export function GenresList(props) {
  const {moviesProp, currentGenreProp, switchGenreAction} = props;

  const initGenres = [INITIAL_GENRE];
  const actualGenres = initGenres.concat(moviesProp.map((it) => it.genre).filter((it, ind, arr) => arr.indexOf(it) === ind));
  const activeGenreIndex = actualGenres.indexOf(currentGenreProp);

  return (
    <ul className="catalog__genres-list">
      {actualGenres.map((it, ind) => (
        <li className= {classNames('catalog__genres-item', { 'catalog__genres-item--active': ind === activeGenreIndex })} key = {it}>
          <a className="catalog__genres-link"  onClick = {() => switchGenreAction(it)}>{it}</a>
        </li>
      ))}
    </ul>
  );
}

GenresList.propTypes = {
  moviesProp: PropTypes.arrayOf(
    singleMovieProp.movieProps,
  ).isRequired,
  currentGenreProp: PropTypes.string.isRequired,
  switchGenreAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentGenreProp: getCurrentGenre(state),
  moviesProp: getAllFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  switchGenreAction(genre) {
    dispatch(switchGenre(genre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
