import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import {Home} from '../pages/Home.jsx';
import {NotFound} from '../pages/NotFound.jsx';
import {AboutUs} from '../pages/AboutUs';

import '../styles/global.scss';
import { ContactUs } from '../pages/ContactUs';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
          <Route 
            exact
            path="/"
            element={<Home />}
          />
          <Route 
            exact
            path="/about-us"
            element={<AboutUs />}
          />
          <Route 
            exact
            path="/contact-us"
            element={<ContactUs />}
          />
          <Route 
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export {App};
