import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ButtonImage from '../../utils/button-image/button-image.jsx';
import Logo from '../../common-blocks/logo/logo.jsx';
import PageFooter from '../../common-blocks/page-footer/page-footer.jsx';
import SingleMovieCard from '../../common-blocks/single-movie-card/single-movie-card';
import singleMovieProp from '../../common-blocks/single-movie-card/single-movie.prop';
import AuthBlock from '../../common-blocks/auth-block/auth-block';

export default function MyList(props) {
  const {allFilms} = props;

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

MyList.propTypes = {
  allFilms: PropTypes.arrayOf(
    singleMovieProp.movieProps,
  ).isRequired,
};
