import React from 'react';
import classNames from 'classnames';
import PropTypes, { string } from 'prop-types';
import {connect} from 'react-redux';
import {switchGenre} from '../../../store/actions';

import {getCurrentGenre, createGenreSelector} from '../../../store/selector/selector';
import './style.css';

export function GenresList(props) {
  const {currentGenreProp, switchGenreAction, genresProp} = props;

  return (
    <ul className="catalog__genres-list">
      {genresProp.map((it, ind) => (
        <li className= {classNames('catalog__genres-item', { 'catalog__genres-item--active': it === currentGenreProp })} key = {it} id = {it}>
          <a href = {`/345491-what-to-watch-7/#${it}`} className="catalog__genres-link"  onClick = {() => switchGenreAction(it)}>{it}</a>
        </li>
      ))}
    </ul>
  );
}

GenresList.propTypes = {
  currentGenreProp: PropTypes.string.isRequired,
  switchGenreAction: PropTypes.func.isRequired,
  genresProp: PropTypes.arrayOf(string).isRequired,
};

const mapStateToProps = (state) => ({
  currentGenreProp: getCurrentGenre(state),
  genresProp: createGenreSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  switchGenreAction(genre) {
    dispatch(switchGenre(genre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
