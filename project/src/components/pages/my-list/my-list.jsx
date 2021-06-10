import React from 'react';
import { Link } from 'react-router-dom';

import ButtonImage from '../../utils/button-image/button-image.jsx';
import Logo from '../../common-blocks/logo/logo.jsx';
import PageFooter from '../../common-blocks/page-footer/page-footer.jsx';
import {myListMovies} from './my-list-data';
import MyListItem from './my-list-item/my-list-item.jsx';

export default function MyList() {

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

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">
            {myListMovies.map((it) => (<MyListItem movieInfo = {it} key={it}/>))}
          </div>
        </section>

        <PageFooter/>
      </div>
    </>
  );
}
