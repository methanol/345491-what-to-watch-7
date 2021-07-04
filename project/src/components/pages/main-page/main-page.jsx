import React, {useEffect}  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import MoviesList from '../../common-blocks/movies-list/movies-list';
import ButtonImage from '../../utils/button-image/button-image.jsx';
import Logo from '../../common-blocks/logo/logo.jsx';
import PageFooter from '../../common-blocks/page-footer/page-footer.jsx';
import GenresList from '../../common-blocks/genres-list/genres-list';
import ShowMore from '../../common-blocks/show-more/show-more';
import AuthBlock from '../../common-blocks/auth-block/auth-block';
import {showMoreMovies, resetMoviesList} from '../../../store/actions';
import {createGenreSelector, createShownMoviesSelector} from '../../../store/selector';

export function MainPage(props) {

  const {promoInfo, currentFilmsProp, showMoreAction, resetMoviesListAction, moviesOnPageProp, shownFilmsProp } = props;
  const handleShowMoreClick = () => {
    showMoreAction();
  };

  useEffect(() => {
    resetMoviesListAction();
  },
  []);

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
          <AuthBlock/>
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
          <GenresList/>
          <MoviesList allFilms = {shownFilmsProp}/>
          <ShowMore>
            {(moviesOnPageProp < currentFilmsProp.length) ? <button className="catalog__button" type="button" onClick = {handleShowMoreClick}>Show more</button> : null}
          </ShowMore>
        </section>
        <PageFooter/>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentFilmsProp: createGenreSelector(state),
  shownFilmsProp: createShownMoviesSelector(state),
  moviesOnPageProp: state.movie.moviesOnPage,
});

const mapDispatchToProps = (dispatch) => ({
  showMoreAction() {
    dispatch(showMoreMovies());
  },
  resetMoviesListAction() {
    dispatch(resetMoviesList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

MainPage.propTypes = {
  promoInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  currentFilmsProp: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  shownFilmsProp: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  showMoreAction: PropTypes.func.isRequired,
  resetMoviesListAction: PropTypes.func.isRequired,
  moviesOnPageProp: PropTypes.number.isRequired,
};
