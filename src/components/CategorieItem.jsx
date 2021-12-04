import React from 'react';
import '../styles/Categories.scss';

import Computers from '../assets/icons/icons-store/computer-icon.png';
import HeadPhones from '../assets/icons/icons-store/headphone-icon.png';
import Monitors from '../assets/icons/icons-store/monitor-icon.png';
import Phones from '../assets/icons/icons-store/phone-icon.png';
import SmartWatches from '../assets/icons/icons-store/smart-watch-icon.png';
import Tablet from '../assets/icons/icons-store/tablet-icon.png';

const CategorieItem = () => {
  return (
    <div className="categories__container">
      <div className="categorie">
        <div className="categorie__container">
          <img className="categorie__img" src={Computers} alt="computer icon" />
        </div>
        <p className="categorie__title">Computers</p>
      </div>

      <div className="categorie">
        <div className="categorie__container">
          <img className="categorie__img" src={HeadPhones} alt="computer icon" />
        </div>
        <p className="categorie__title">HeadPhones</p>
      </div>

      <div className="categorie">
        <div className="categorie__container">
          <img className="categorie__img" src={Monitors} alt="computer icon" />
        </div>
        <p className="categorie__title">Monitors</p>
      </div>

      <div className="categorie">
        <div className="categorie__container">
          <img className="categorie__img" src={Phones} alt="computer icon" />
        </div>
        <p className="categorie__title">Phones</p>
      </div>

      <div className="categorie">
        <div className="categorie__container">
          <img className="categorie__img" src={SmartWatches} alt="computer icon" />
        </div>
        <p className="categorie__title">Smart Watches</p>
      </div>

      <div className="categorie">
        <div className="categorie__container">
          <img className="categorie__img" src={Tablet} alt="computer icon" />
        </div>
        <p className="categorie__title">Tablets</p>
      </div>
    </div>
  );
}
export { CategorieItem };