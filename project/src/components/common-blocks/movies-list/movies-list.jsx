import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';

import SingleMovieCard from '../single-movie-card/single-movie-card';

export default function MoviesList(props) {
  const {mockFilms} = props;

  const [activeMovieID, setActiveMovieID] = useState(0);

  const memoizedHandleMouseHover = useCallback(
    (id) => {
      setActiveMovieID(id);
    },
    [activeMovieID],
  );

  return (
    <div className="catalog__films-list">
      {mockFilms.map((it) => <SingleMovieCard name = {it.name} id = {it.id} previewImg = {it.preview_image} key = {it.id} onMouseHover = {memoizedHandleMouseHover}/>)}
    </div>
  );
}

MoviesList.propTypes = {
  mockFilms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
