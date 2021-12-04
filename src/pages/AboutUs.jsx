import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PromoAbout } from "../components/PromoAbout";
import { Categories } from "../containers/Categories";
import { OurTeam } from "../containers/OurTeam";
import { TestimonialContainer } from "../containers/TestimonialContainer";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <PromoAbout />
      <Categories />
      <OurTeam />
      <TestimonialContainer />
      <Footer />
    </div>
  );
};

export { AboutUs };
