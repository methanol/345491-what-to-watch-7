import React, {useState} from 'react';

const dumbRatingIDs = Array.from(Array(10).keys()).reverse();

export default function ReviewForm() {
  const [userReview, setUserReview] = useState({
    rating: 0,
    message: '',
  });

  const setUserMessage = (evt) => {
    setUserReview((prevState) => ({
      ...prevState,
      message: evt.target.value,
    }));
  };

  const setUserRating = (evt) => {
    setUserReview((prevState) => ({
      ...prevState,
      rating: evt.target.value,
    }));
  };

  const renderRatingList = (it) => (
    <>
      <input className="rating__input" id={`star-${it}`} type="radio" name="rating" value={it} onChange = {setUserRating} key={it.id}/>
      <label className="rating__label" htmlFor={`star-${it}`}>Rating {it}</label>
    </>
  );

  const handleSubmit = (evt) =>  (
    evt.preventDefault()
  );

  return (
    <form action="#" className="add-review__form" onSubmit = {handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {dumbRatingIDs.map((it) => renderRatingList(it + 1))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={userReview.message} onChange = {setUserMessage}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}
