import React from "react";
import { TestimonialCard } from "@components/TestimonialCard";

import '@styles/Testimonials.scss';

const TestimonialContainer = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__top">
        <h3 className="subtitle testimonials__title">Testimonials</h3>
        <p className="testimonials__copy">
          Adipisci velit, sed quia non numquam.
        </p>
      </div>
      <TestimonialCard />
    </section>
  );
};

export { TestimonialContainer };
