import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@containers/Layout';
import { Home } from '@pages/Home.jsx';
import { NotFound } from '@pages/NotFound.jsx';
import { AboutUs } from '@pages/AboutUs';

import '@styles/global.scss';
import { ContactUs } from '@pages/ContactUs';
import { AppContext } from '@context/AppContext';
import { useInitialState } from '@hooks/useInitialState';
import { AllProducts } from '../pages/AllProducts';
import { Login } from '../pages/Login';
import { RecoveryPassword } from '../pages/RecoveryPassword';
import { CreateAccount } from '../pages/CreateAccount';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
          <Route
              exact
              path="/all-products"
              element={<AllProducts />}
            />
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
              path="/login"
              element={<Login />}
            />
            <Route
              exact
              path="/create-account"
              element={<CreateAccount />}
            />
            <Route
              exact
              path="/recovery-password"
              element={<RecoveryPassword />}
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
    </AppContext.Provider>
  );
}

export { App };
