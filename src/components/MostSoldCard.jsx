import React from "react";
import '../styles/MostSold.scss';

import Huawei from '../assets/assets-store/Watch3-Huawei.jpg';
import Meta from '../assets/assets-store/MatePad-10.4.jpg';
import GT from '../assets/assets-products/monitors/MateView-GT.jpg';

const MostSoldCard = () => {
  return (
    <div className="the-most-sold__container">
      <div className="the-most-sold__card">
        <img className="the-most-sold__card-img" src={Huawei} />
        <h4 className="the-most-sold__card-title">Huawei Watch 3</h4>
        <p className="the-most-sold__card-desc">Superior Intelligence Experience</p>
      </div>

      <div className="the-most-sold__card">
        <img className="the-most-sold__card-img" src={Meta} />
        <h4 className="the-most-sold__card-title">MetaPad 10.4 Wi-Fi 6</h4>
        <p className="the-most-sold__card-desc">Wi-Fi 6 | 4 Speakers, 4-channel output</p>
      </div>

      <div className="the-most-sold__card">
        <img className="the-most-sold__card-img" src={GT} />
        <h4 className="the-most-sold__card-title">MateView GT</h4>
        <p className="the-most-sold__card-desc">34" screen with WQHD resolution</p>
      </div>
    </div>

  );
};

export { MostSoldCard };
