import React, {useEffect}  from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import MoviesList from '../../common-blocks/movies-list/movies-list';
import ButtonImage from '../../common-blocks/button-image/button-image.jsx';
import Logo from '../../common-blocks/logo/logo.jsx';
import PageFooter from '../../common-blocks/page-footer/page-footer.jsx';
import GenresList from '../../common-blocks/genres-list/genres-list';
import ShowMore from '../../common-blocks/show-more/show-more';
import AuthBlock from '../../common-blocks/auth-block/auth-block';
import {showMoreMovies, resetMoviesList} from '../../../store/actions';
import {postFavoriteMovie} from '../../../store/api-actions';
import {createGenreMovieSelector, createShownMoviesSelector, getMoviesOnPage, getPromoFilm, getAuthorizationStatus} from '../../../store/selector/selector';
import {AppRoute, FavoriteIndexes, AuthorizationStatus} from '../../utils/constants';
import './main-page.css';

export function MainPage(props) {

  const dispatch = useDispatch();
  const postFavoriteAction = (id, status) => {
    dispatch(postFavoriteMovie(id, status, true));
  };
  const showMoreAction = () => {
    dispatch(showMoreMovies());
  };
  const resetMoviesListAction = () => {
    dispatch(resetMoviesList());
  };

  const currentFilmsProp = useSelector(createGenreMovieSelector);
  const shownFilmsProp = useSelector(createShownMoviesSelector);
  const moviesOnPageProp = useSelector(getMoviesOnPage);
  const promoInfo = useSelector(getPromoFilm);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const handleShowMoreClick = () => {
    showMoreAction();
  };

  useEffect(() => {
    resetMoviesListAction();
  },
  []);

  const handleFavoriteClick = () => {
    const isFavorite = promoInfo.isFavorite ? FavoriteIndexes.NON_ACTIVE : FavoriteIndexes.ACTIVE;
    postFavoriteAction(promoInfo.id, isFavorite);
  };

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
            <a href = {AppRoute.ROOT} className="logo__link">
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
                <Link className="film-card__button button-caption" to={`/345491-what-to-watch-7/player/${promoInfo.id}`}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>

                <button className="btn btn--list film-card__button" type="button" onClick = {handleFavoriteClick}>
                  {(!promoInfo.isFavorite|| authorizationStatus !== AuthorizationStatus.AUTH) ?
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg> :
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#in-list"></use>
                    </svg>}
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

export default MainPage;

