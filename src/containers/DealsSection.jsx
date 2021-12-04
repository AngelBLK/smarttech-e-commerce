import React from "react";

import { Deals } from "../components/Deals";
import { Button, ButtonPrimary } from "../components/ButtonPrimary";
const DealsSection = () => {
  return (
    <section className="deals">
      <Deals />
      <ButtonPrimary />
    </section>
  );
};

export { DealsSection };
