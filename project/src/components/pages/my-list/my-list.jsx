import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import ButtonImage from '../../common-blocks/button-image/button-image.jsx';
import Logo from '../../common-blocks/logo/logo.jsx';
import PageFooter from '../../common-blocks/page-footer/page-footer.jsx';
import SingleMovieCard from '../../common-blocks/single-movie-card/single-movie-card';
import AuthBlock from '../../common-blocks/auth-block/auth-block';
import {getFavorites, getAuthorizationStatus} from '../../../store/selector/selector';
import {fetchFavoriteMovies} from '../../../store//api-actions';
import {AuthorizationStatus} from '../../utils/constants';

function MyList() {

  const allFilms = useSelector(getFavorites);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();
  const loadFavoriteMoviesAction = () => {
    dispatch(fetchFavoriteMovies());
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      loadFavoriteMoviesAction();
    }
  }, []);

  return (
    <>
      <div className="visually-hidden">
        <ButtonImage/>
      </div>

      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to='/' className="logo__link">
              <Logo/>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>
          <AuthBlock/>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">
            {allFilms.map((it) => (<SingleMovieCard id = {it.id} previewImage = {it.previewImage} name = {it.name} key={it.id}/>))}
          </div>
        </section>

        <PageFooter/>
      </div>
    </>
  );
}

export default MyList;
