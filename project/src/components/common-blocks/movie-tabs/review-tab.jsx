import React from 'react';
import Moment from 'react-moment';

import {mockReviews} from '../../../mocks/films';

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

export default function ReviewTab() {

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {renderReviews(mockReviews)}
      </div>
    </div>
  );
}
