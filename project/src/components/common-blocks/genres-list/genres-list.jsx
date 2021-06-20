import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {switchGenre} from '../../../store/actions';

import singleMovieProp from '../single-movie-card/single-movie.prop';
import './style.css';

export function GenresList(props) {
  const {movies, currentGenreProp, switchGenreAction} = props;

  const initGenres = ['All genres'];
  const actualGenres = initGenres.concat(movies.map((it) => it.genre).filter((it, ind, arr) => arr.indexOf(it) === ind));
  const activeGenreIndex = actualGenres.indexOf(currentGenreProp);

  function renderGenresList() {

    return actualGenres.map((it, ind) => (
      <li className= {classNames('catalog__genres-item', { 'catalog__genres-item--active': ind === activeGenreIndex })} key = {it}>
        <a className="catalog__genres-link"  onClick = {() => switchGenreAction(it)}>{it}</a>
      </li>
    ));
  }

  return (
    <ul className="catalog__genres-list">
      {renderGenresList()}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  currentGenreProp: state.currentGenre,
});

const mapDispatchToProps = (dispatch) => ({
  switchGenreAction(genre) {
    dispatch(switchGenre(genre));
  },
});

GenresList.propTypes = {
  movies: PropTypes.arrayOf(
    singleMovieProp.movieProps,
  ).isRequired,
  currentGenreProp: PropTypes.string.isRequired,
  switchGenreAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
