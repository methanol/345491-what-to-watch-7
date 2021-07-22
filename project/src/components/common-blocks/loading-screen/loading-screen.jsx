import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

import './loading-screen.css';

function LoadingScreen() {
  return (
    <div className = 'loading__main-overlay'>
      <h3 className = 'loading__text'>Loading...</h3>
      <MoonLoader className = 'loading__spinner' loading size={150} color={'green'} />
    </div>
  );
}

export default LoadingScreen;
