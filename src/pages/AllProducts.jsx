import React from 'react';
import { Header } from '../components/Header';
import { ProductList } from '../containers/ProductList';
import {Footer} from '../components/Footer';
const AllProducts = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export {AllProducts};