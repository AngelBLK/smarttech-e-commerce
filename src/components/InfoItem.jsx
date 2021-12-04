import React from "react";
import '../styles/SectionInfo.scss';

import Car from '../assets/icons/icons-general/transport-icon.png';
import Devolution from '../assets/icons/icons-general/devolution-icon.png';
import Comunication from '../assets/icons/icons-general/support-icon.png';
import Bag from '../assets/icons/icons-general/bag-icon.png';

const InfoItem = () => {
  return (
    <div className="container-section">
      <div className="section__card">
        <div className="icons">
          <img
            src={Car}
            alt="Transport icon"
            className="section__icon"
          />
        </div>

        <div className="section__card-info">
          <p className="section__card-info-title">Quis nostrud</p>
          <p className="section__card-info-desc">
            Voluptatem quia voluptas aspernatur aut odit aut fugit.
          </p>
        </div>
      </div>

      <div className="section__card">
        <div className="icons">
          <img
            src={Devolution}
            alt="Devolution icon"
            className="section__icon"
          />
        </div>

        <div className="section__card-info">
          <p className="section__card-info-title">Quis nostrud</p>
          <p className="section__card-info-desc">
            Voluptatem quia voluptas aspernatur aut odit aut fugit.
          </p>
        </div>
      </div>

      <div className="section__card">
        <div className="icons">
          <img
            src={Comunication}
            alt="support icon"
            className="section__icon"
          />
        </div>

        <div className="section__card-info">
          <p className="section__card-info-title">Quis nostrud</p>
          <p className="section__card-info-desc">
            Voluptatem quia voluptas aspernatur aut odit aut fugit.
          </p>
        </div>
      </div>

      <div className="section__card">
        <div className="icons">
          <img
            src={Bag}
            alt="bag icon"
            className="section__icon"
          />
        </div>

        <div className="section__card-info">
          <p className="section__card-info-title">Quis nostrud</p>
          <p className="section__card-info-desc">
            Voluptatem quia voluptas aspernatur aut odit aut fugit.
          </p>
        </div>
      </div>
    </div>
  );
}

export { InfoItem };
