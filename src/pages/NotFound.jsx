import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/NotFound.scss';

import ImageNotFound from '@assets/assets-not-found/page-not-found.png';
const NotFound = () => {
  return (
    <div class="container">
      <div class="img_error">
        <img src={ImageNotFound} alt="" />
      </div>
      <div class="error_txt">
        <h1>Ooops...</h1>
        <h2>Page not found</h2>
        <p>The page you are looking for doesn't exist or an other error occurred, go back to home page.</p>
        <div class="button_back">
          <Link to="/" class="btn_back">GO BACK</Link>
        </div>
      </div>
    </div>
  );
}

export { NotFound };