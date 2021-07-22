import React from 'react';
import {Link} from 'react-router-dom';

import './not-found-page.css';

export default function NotFoundScreen() {
  return (
    <section className = "not-found__main-overlay">
      <h1 className = 'not-found_header'>Page not found</h1>
      <h2 className = 'not-found_header'>Запрашиваемая вами страница не найдена</h2>
      <Link className = 'not-found__link' to="/">Вернуться на главную</Link>
    </section>
  );
}
