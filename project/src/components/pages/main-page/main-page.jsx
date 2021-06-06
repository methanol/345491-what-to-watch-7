import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SingleMovieCard from '../../common-blocks/single-movie-card/single-movie-card.jsx';
import ButtonImage from '../../utils/button-image/button-image.jsx';
import Logo from '../../common-blocks/logo/logo.jsx';
import PageFooter from '../../common-blocks/page-footer/page-footer.jsx';

const staticMoviesIDs = Array.from(Array(20).keys());
const movieGenres = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];

export default function MainPage({promoInfo}) {
  const {title, genre, releaseDate} = promoInfo;

  return (
    <>
      <div className="visually-hidden">
        <ButtonImage/>
      </div>

      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <Logo/>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to='/login' className="user-block__link">
                Sign out
              </Link>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <Link to='/films/123'>
              <div className="film-card__poster">
                <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>
            </Link>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <Link to='/player/:id'>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                  </Link>
                  <span>Play</span>
                </button>

                <button className="btn btn--list film-card__button" type="button">
                  <Link to='/mylist'>
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  </Link>
                  <span className="film-card__caption">My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {getGenresList()}
          </ul>

          <div className="catalog__films-list">
            {staticMoviesIDs.map((it) => <SingleMovieCard key = {it}/>)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <PageFooter/>
      </div>
    </>
  );
}

function getGenresList() {
  const activeGenreIndex = 0;

  return movieGenres.map((it, ind) => (
    <li className= {ind === activeGenreIndex ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} key = {it}>
      <a href="#" className="catalog__genres-link">{it}</a>
    </li>
  ));
}

MainPage.propTypes = {
  promoInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
};
