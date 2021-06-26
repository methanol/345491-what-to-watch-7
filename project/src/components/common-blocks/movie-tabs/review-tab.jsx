import React from 'react';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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

  const {reviewsProp} = props;

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {renderReviews(reviewsProp)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  reviewsProp: state.reviews,
});

export default connect(mapStateToProps, null)(ReviewTab);

ReviewTab.propTypes = {
  reviewsProp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};


