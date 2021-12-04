import React from "react";
import { ButtonPrimary } from '../components/ButtonPrimary';

import '@styles/PromoStore.scss';

import Muck from '../assets/assets-store/mockup-header.png';



const PromoStore = () => {
  return (
    <section className="header">
      <div className="header-container">
        <div className="header__img">
          <img
            src={Muck}
            alt="mockup computer with phone"
            className="header__img-mockup"
          />
        </div>

        <div className="header__info">
          <h1 className="header__info-title">Experience without borders</h1>
          <p className="header__info-description">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system.
          </p>
          <ButtonPrimary />
        </div>
      </div>
    </section>
  );
};

export { PromoStore };
