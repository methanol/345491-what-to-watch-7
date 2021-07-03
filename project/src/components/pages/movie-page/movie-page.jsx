import React, {useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ButtonImage from '../../utils/button-image/button-image.jsx';
import Logo from '../../common-blocks/logo/logo.jsx';
import PageFooter from '../../common-blocks/page-footer/page-footer.jsx';
import NotFoundScreen from '../not-found-page/not-found-page.jsx';
import SingleMovieCard from '../../common-blocks/single-movie-card/single-movie-card';
import MoviesTabs from '../../common-blocks/movie-tabs/movie-tabs';
import singleMovieProp from '../../common-blocks/single-movie-card/single-movie.prop';
import AuthBlock from '../../common-blocks/auth-block/auth-block';
import {fetchSimilarMovies, fetchMovieReviews} from '../../../store/api-actions';
import {AuthorizationStatus} from '../../utils/constants';

export function MoviePage(props) {
  const params = useParams();
  const {allFilms, similarFilmsStateProp, showSimilarAction, showReviewsAction, authorizationStatusStateProp} = props;
  const currentMovie = allFilms.find((it) => Number(it.id) === Number(params.id));

  useEffect(() => {
    showSimilarAction(params.id);
    showReviewsAction(params.id);
  }, [params.id]);

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
                {authorizationStatusStateProp === AuthorizationStatus.AUTH ?
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
            {similarFilmsStateProp.map((it) => <SingleMovieCard name = {it.name} id = {it.id} previewImage = {it.previewImage} key = {it.id}/>)}
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
  similarFilmsStateProp: PropTypes.arrayOf(
    singleMovieProp.movieProps,
  ).isRequired,
  showSimilarAction: PropTypes.func.isRequired,
  showReviewsAction: PropTypes.func.isRequired,
  authorizationStatusStateProp: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  similarFilmsStateProp: state.similarFilms,
  authorizationStatusStateProp: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  showSimilarAction(id) {
    dispatch(fetchSimilarMovies(id));
  },
  showReviewsAction(id) {
    dispatch(fetchMovieReviews(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

