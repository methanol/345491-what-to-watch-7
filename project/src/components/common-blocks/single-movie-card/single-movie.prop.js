import PropTypes from 'prop-types';

const singleMovieProp = {
  movieProps: PropTypes.shape({
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default singleMovieProp;
