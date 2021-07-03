import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {postReview} from '../../../../store/api-actions';

const dumbRatingIDs = Array.from(Array(10).keys()).reverse();

export function ReviewForm(props) {
  const {postReviewAction, id} = props;

  const [userReview, setUserReview] = useState({
    rating: 5,
    comment: '',
  });

  const state = {
    filmId: id,
    comment: userReview.comment,
    rating: userReview.rating,
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    postReviewAction(state);
  };

  const setUserMessage = (evt) => {
    setUserReview((prevState) => ({
      ...prevState,
      comment: evt.target.value,
    }));
  };

  const setUserRating = (evt) => {
    setUserReview((prevState) => ({
      ...prevState,
      rating: evt.target.value,
    }));
  };

  const renderRatingList = (it) => (
    <React.Fragment key={it.id}>
      <input className="rating__input" id={`star-${it}`} type="radio" name="rating" value={it} onChange = {setUserRating} />
      <label className="rating__label" htmlFor={`star-${it}`}>Rating {it}</label>
    </React.Fragment>
  );

  const checkValidForm = () => {
    const isMessageValid = (userReview.comment.length >= 50 && userReview.comment.length <= 400);
    const isRatingValid = userReview.rating > 0 && userReview.rating <= 10;

    return isMessageValid && isRatingValid;
  };

  return (
    <form action="#" className="add-review__form" onSubmit = {handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {dumbRatingIDs.map((it) => renderRatingList(it + 1))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={userReview.comment} onChange = {setUserMessage} minLength = {50} maxLength = {400}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled = {!checkValidForm()}>Post</button>
        </div>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  postReviewAction: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  postReviewAction(rev) {
    dispatch(postReview(rev));
  },
});

export default connect(null, mapDispatchToProps)(ReviewForm);
