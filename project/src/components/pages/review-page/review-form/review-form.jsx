import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import {postReview} from '../../../../store/api-actions';
import {uploadReview} from '../../../../store/actions';
import {getUserReviewUploading} from '../../../../store/selector';

const dumbRatingIDs = Array.from(Array(10).keys()).reverse();

export default function ReviewForm(props) {
  const {id} = props;
  const MIN_SYMBOLS_COUNT = 50;
  const MAX_SYMBOLS_COUNT = 400;
  const MIN_RATING = 0;
  const MAX_RATING = 10;

  const [userReview, setUserReview] = useState({
    rating: 5,
    comment: '',
  });

  const dispatch = useDispatch();
  const postReviewAction = (rev) => {
    dispatch(postReview(rev));
  };
  const uploadReviewAction = (isUploadInProgress) => {
    dispatch(uploadReview(isUploadInProgress));
  };

  const isReviewUploading = useSelector(getUserReviewUploading);

  const reviewState = {
    filmId: id,
    comment: userReview.comment,
    rating: userReview.rating,
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    postReviewAction(reviewState);
    uploadReviewAction(true);
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
    <React.Fragment key={it}>
      <input className="rating__input" id={`star-${it}`} type="radio" name="rating" value={it} onChange = {setUserRating} disabled = {isReviewUploading}/>
      <label className="rating__label" htmlFor={`star-${it}`}>Rating {it}</label>
    </React.Fragment>
  );

  const checkValidForm = () => {
    const isMessageValid = (userReview.comment.length >= MIN_SYMBOLS_COUNT && userReview.comment.length <= MAX_SYMBOLS_COUNT);
    const isRatingValid = userReview.rating > MIN_RATING && userReview.rating <= MAX_RATING;

    return isMessageValid && isRatingValid && !isReviewUploading;
  };

  return (
    <form action="#" className="add-review__form" onSubmit = {handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {dumbRatingIDs.map((it) => renderRatingList(it + 1))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={userReview.comment} onChange = {setUserMessage} minLength = {MIN_SYMBOLS_COUNT} maxLength = {MAX_SYMBOLS_COUNT} disabled = {isReviewUploading}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled = {!checkValidForm()}>Post</button>
        </div>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
};

