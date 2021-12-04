import React from "react";
import {Cards} from '../components/Cards';
import '../styles/PopularProducts.scss';
const PopularContainer = () => {
  return (
    <section className="popular-products">
      <h2 className="subtitle popular-products__title">Popular Products</h2>
      <div >
        <Cards />
      </div>
    </section>
  );
};

export { PopularContainer };
