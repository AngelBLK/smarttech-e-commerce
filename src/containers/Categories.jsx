import React from 'react';
import '../styles/Categories.scss';
import {CategorieItem} from '../components/CategorieItem';
const Categories = () => {
  return (
    <section className="categories">
      <h2 className="subtitle categories__title">Categories</h2>
      <div className="categories__container">
        <CategorieItem />
      </div>
    </section>
  );
}

export {Categories};