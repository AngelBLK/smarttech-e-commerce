import React from "react";
import { MostSoldCard } from "../components/MostSoldCard";

import '../styles/MostSold.scss';

const MostSold = () => {
  return (
    <section className="the-most-sold">
      <p className="subtitle the-most-sold__title">The most sold</p>
      <div >
        <MostSoldCard />
      </div>
    </section>
  );
};

export { MostSold };
