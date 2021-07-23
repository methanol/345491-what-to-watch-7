import React from 'react';
import PropTypes from 'prop-types';

function ShowMore(props) {

  return (
    <div className="catalog__more">
      {props.children}
    </div>
  );
}

ShowMore.propTypes = {
  children: PropTypes.node,
};

export default ShowMore;
