import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MoviesList from '../../common-blocks/movies-list/movies-list';
import ButtonImage from '../../utils/button-image/button-image.jsx';
import Logo from '../../common-blocks/logo/logo.jsx';
import PageFooter from '../../common-blocks/page-footer/page-footer.jsx';

const movieGenres = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];

export default function MainPage({promoInfo, mockFilms}) {

  return (
    <>
      <div className="visually-hidden">
        <ButtonImage/>
      </div>

      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoInfo.backgroundImage} alt={promoInfo.name} />
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
                <Link to='/mylist'>
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </Link>
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
            <div className="film-card__poster">
              <img src={promoInfo.posterImage} alt={`${promoInfo.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoInfo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoInfo.genre}</span>
                <span className="film-card__year">{promoInfo.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link className="film-card__button" to={`/player/${promoInfo.id}`}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>

                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
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
            {renderGenresList()}
          </ul>

          <MoviesList mockFilms = {mockFilms}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <PageFooter/>
      </div>
    </>
  );
}

function renderGenresList() {
  const activeGenreIndex = 0;

  return movieGenres.map((it, ind) => (
    <li className= {ind === activeGenreIndex ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} key = {it}>
      <a href="#" className="catalog__genres-link">{it}</a>
    </li>
  ));
}

MainPage.propTypes = {
  promoInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  mockFilms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};