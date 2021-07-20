import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import ButtonImage from '../../utils/button-image/button-image.jsx';
import Logo from '../../common-blocks/logo/logo.jsx';
import NotFoundScreen from '../not-found-page/not-found-page.jsx';
import ReviewForm from './review-form/review-form';
import AuthBlock from '../../common-blocks/auth-block/auth-block';

export default function ReviewPage(props) {
  const params = useParams();
  const {allFilms} = props;
  const currentMovie = allFilms.find((it) => Number(it.id) === Number(params.id));

  return currentMovie ? (
    <>
      <div className="visually-hidden">
        <ButtonImage/>
      </div>

      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={currentMovie.backgroundImage} alt={currentMovie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to='/' className="logo__link">
                <Logo/>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="film-page.html" className="breadcrumbs__link">{currentMovie.name}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
            <AuthBlock/>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={currentMovie.posterImage} alt={`${currentMovie.name} poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <ReviewForm id = {Number(params.id)}/>
        </div>

      </section>
    </>
  ): <NotFoundScreen/>;
}

ReviewPage.propTypes = {
  allFilms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
