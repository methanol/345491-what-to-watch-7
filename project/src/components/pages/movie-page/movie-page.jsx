import React, {useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import ButtonImage from '../../common-blocks/button-image/button-image.jsx';
import Logo from '../../common-blocks/logo/logo.jsx';
import PageFooter from '../../common-blocks/page-footer/page-footer.jsx';
import NotFoundScreen from '../not-found-page/not-found-page.jsx';
import MoviesList from '../../common-blocks/movies-list/movies-list';
import MoviesTabs from '../../common-blocks/movie-tabs/movie-tabs';
import singleMovieProp from '../../common-blocks/single-movie-card/single-movie.prop';
import AuthBlock from '../../common-blocks/auth-block/auth-block';
import {fetchSimilarMovies, fetchMovieReviews, postFavoriteMovie, fetchFavoriteMovies} from '../../../store/api-actions';
import {setUserAvatar} from '../../../store/actions';
import {AuthorizationStatus, FavoriteIndexes} from '../../utils/constants';
import {getSimilarFilms, getAuthorizationStatus} from '../../../store/selector/selector';
import './movie-page.css';

export function MoviePage(props) {
  const params = useParams();
  const {allFilms} = props;
  const currentMovie = allFilms.find((it) => Number(it.id) === Number(params.id));

  const similarFilms = useSelector(getSimilarFilms);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();
  const showSimilarAction = (id) => {
    dispatch(fetchSimilarMovies(id));
  };
  const showReviewsAction = (id) => {
    dispatch(fetchMovieReviews(id));
  };
  const postFavoriteAction = (id, status) => {
    dispatch(postFavoriteMovie(id, status, false));
  };
  const loadFavoriteMoviesAction = () => {
    dispatch(fetchFavoriteMovies());
  };
  const setUserAvatarAction = () => {
    dispatch(setUserAvatar());
  };

  useEffect(() => {
    showSimilarAction(params.id);
    showReviewsAction(params.id);
    setUserAvatarAction();
  }, [params.id]);

  const handleFavoriteClick = () => {
    const isFavorite = currentMovie.isFavorite ? FavoriteIndexes.NON_ACTIVE : FavoriteIndexes.ACTIVE;
    postFavoriteAction(currentMovie.id, isFavorite);
    loadFavoriteMoviesAction();
  };

  return (currentMovie) ? (
    <>
      <div className="visually-hidden">
        <ButtonImage currentMovie = {currentMovie}/>
      </div>

      <section className="film-card film-card--full" style = {{background: currentMovie.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentMovie.backgroundImage} alt={currentMovie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to='/' className="logo__link">
                <Logo/>
              </Link>
            </div>
            <AuthBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentMovie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentMovie.genre}</span>
                <span className="film-card__year">{currentMovie.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link className="film-card__button button-caption" to={`/player/${params.id}`}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span className = 'button-caption'>Play</span>
                  </button>
                </Link>
                <button className="btn btn--list film-card__button" type="button" onClick = {handleFavoriteClick}>
                  {!currentMovie.isFavorite ?
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg> :
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#in-list"></use>
                    </svg>}
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <Link to={`/films/${params.id}/review`} className="btn film-card__button">
                    Add review
                  </Link> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentMovie.posterImage} alt={currentMovie.name} width="218" height="327" />
            </div>
            {currentMovie ? <MoviesTabs currentMovie={currentMovie}/> : null}
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <MoviesList allFilms = {similarFilms}/>
          </div>
        </section>
        <PageFooter/>
      </div>
    </>
  ) : <NotFoundScreen/>;
}

MoviePage.propTypes = {
  allFilms: PropTypes.arrayOf(
    singleMovieProp.movieProps,
  ).isRequired,
};

export default MoviePage;

