import React, {useEffect} from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import {useSelector, useDispatch} from 'react-redux';
import {getReviews} from '../../../store/selector';
import {fetchMovieReviews} from '../../../store/api-actions';

function renderReviews(reviews) {

  return reviews.map((it) => (
    <div className="review" key = {it.id}>
      <blockquote className="review__quote">
        <p className="review__text">{it.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{it.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">
            <Moment format="YYYY/MM/DD">
              {it.date}
            </Moment>
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{it.rating}</div>
    </div>
  ));
}

export function ReviewTab(props) {

  const {currentMovie} = props;

  const dispatch = useDispatch();
  const showReviewsAction = (id) => {
    dispatch(fetchMovieReviews(id));
  };

  const reviews = useSelector(getReviews);

  useEffect(() => {
    showReviewsAction(currentMovie.id);
  },
  [currentMovie]);


  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {renderReviews(reviews)}
      </div>
    </div>
  );
}

ReviewTab.propTypes = {
  currentMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

export default ReviewTab;


