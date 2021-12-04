import React from "react";
import { SectionInfo } from "../containers/SectionInfo";

import { Layout } from "../containers/Layout";
import { Categories } from "../containers/Categories";
import { PopularContainer } from "../containers/PopularContainer";
import { Deals } from "../components/Deals";
import { MostSold } from "../containers/MostSold";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PromoStore } from "../components/PromoStore";

const Home = () => {
  return (
    <div>
      <Header />
      <PromoStore />
      <SectionInfo />
      <Categories />
      <PopularContainer />
      <Deals />
      <MostSold />
      <Footer />
    </div>
  );
};

export { Home };
