import React from "react";
import { TeamMember } from "../components/TeamMember";

import '@styles/OurTeam.scss';

const OurTeam = () => {
  return (
    <section className="team">
      <div className="team__info">
        <h2 className="subtitle team__title">Our Team</h2>
        <p className="team__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          laboriosam ad deleniti. Adipisci velit, sed quia non numquam eius modi
          et.
        </p>
      </div>
      <div className="team__container">
        <TeamMember />
      </div>
    </section>
  );
};

export { OurTeam };
