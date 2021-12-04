import React from "react";
import '../styles/SocialMedia.scss';

const SocialMedia = () => {
  return (
    <div className="icons">
      <div className="icon icon-menu">
        <i className="bi bi-list icons__menu" id="menu"></i>
      </div>

      <div className="icon">
        <i className="bi bi-search icons__search" id="search"></i>
      </div>

      <div className="icon">
        <a href="#" className="bi bi-person-fill icons__profile"></a>
      </div>

      <div className="icon">
        <a href="#" className="bi bi-cart3 icons__cart"></a>
      </div>
    </div>
  );
};

export { SocialMedia };
