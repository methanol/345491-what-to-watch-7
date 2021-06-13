import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import ButtonImage from '../../utils/button-image/button-image.jsx';
import Logo from '../../common-blocks/logo/logo.jsx';
import PageFooter from '../../common-blocks/page-footer/page-footer.jsx';
import NotFoundScreen from '../not-found-page/not-found-page.jsx';
import SingleMovieCard from '../../common-blocks/single-movie-card/single-movie-card';

const availableOptions = ['Overview', 'Details', 'Reviews'];

function renderMovieOptions() {
  const activeOptionIndex = 0;

  return availableOptions.map((it, ind) => (
    <li className= {ind === activeOptionIndex ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} key = {it}>
      <a href="#" className="film-nav__link">{it}</a>
    </li>
  ));
}

function getScoreEvaluation(score) {
  let verdict = '';

  if (score < 3) {
    verdict = 'Bad';
  }
  else if (score >= 3 && score < 5) {
    verdict = 'Normal';
  }
  else if (score >= 5 && score < 8) {
    verdict = 'Good';
  }
  else if (score >= 8 && score < 10) {
    verdict = 'Very good';
  } else {
    verdict = 'Awesome';
  }

  return verdict;
}

export default function MoviePage(props) {
  const params = useParams();
  const {mockFilms} = props;
  const similarMovies = mockFilms.slice(4, 8);
  const currentMovie = mockFilms.find((it) => Number(it.id) === Number(params.id));

  return (currentMovie) ? (
    <>
      <div className="visually-hidden">
        <ButtonImage/>
      </div>

      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentMovie.background_image} alt={currentMovie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to='/' className="logo__link">
                <Logo/>
              </Link>
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
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentMovie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentMovie.genre}</span>
                <span className="film-card__year">{currentMovie.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link className="film-card__button" to={`/player/${params.id}`}>
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
                  <span>My list</span>
                </button>
                <Link to={`/films/${params.id}/review`} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentMovie.poster_image} alt={currentMovie.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  {renderMovieOptions()}
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{currentMovie.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{getScoreEvaluation(currentMovie.rating)}</span>
                  <span className="film-rating__count">{currentMovie.scores_count} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{currentMovie.description}</p>

                <p className="film-card__director"><strong>Director: {currentMovie.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {currentMovie.starring.join(',')}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {similarMovies.map((it) => <SingleMovieCard name = {it.name} id = {it.id} previewImg = {it.preview_image} key = {it.id}/>)}
          </div>
        </section>
        <PageFooter/>
      </div>
    </>
  ) : <NotFoundScreen/>;
}

MoviePage.propTypes = {
  mockFilms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
