import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo/logo.jsx';

export default function PageFooter() {
  return (
    <footer className="page-footer">
      <div className="logo">
        <Link to='/' className="logo__link logo__link--light">
          <Logo/>
        </Link>
      </div>

      <div className="copyright">
        <p>© 2021 What to watch Ltd.</p>
      </div>
    </footer>
  );
}
