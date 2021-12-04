import React from "react";

import Miguel from '../assets/assets-about/miguel-team.jpg';
import Ketzali from '../assets/assets-about/ketzali-team.jpg';
import Jesus from '../assets/assets-about/jesus-team.jpeg';

import Twitter from '../assets/icons/icons-about/twitter.png';
import Instagram from '../assets/icons/icons-about/instagram.png';
import Linkedin from '../assets/icons/icons-about/linkedin.png';
import GitHub from '../assets/icons/icons-about/github.png';

import '@styles/OurTeam.scss';
const TeamMember = () => {
  return (
    <div className="team__container">
      <div className="team__container-card">
        <div className="team__container-bg"></div>
        <img
          className="team__container-img"
          src={Miguel}
          alt="Picture Miguel"
        />
        <div className="team__container-info">
          <p className="name-team">Miguel Bohorquez</p>
          <div className="job-team">Web Developer</div>
          <p className="desc-team">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti. <br /> Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div className="team__container-social">
          <a href="https://www.instagram.com/danteblk2099/" target="_blank">
            <img
              className="icon-social-media"
              src={Instagram}
              alt="instagram icon"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/miguel-angel-bohorquez-820b40202/"
            target="_blank"
          >
            <img
              className="icon-social-media"
              src={Linkedin}
              alt="linkedin icon"
            />
          </a>

          <a href="https://github.com/AngelBLK" target="_blank">
            <img
              className="icon-social-media"
              src={GitHub}
              alt="github icon"
            />
          </a>

          <a href="https://twitter.com/DanteBLK" target="_blank">
            <img
              className="icon-social-media"
              src={Twitter}
              alt="twitter icon"
            />
          </a>
        </div>

      </div>

      <div class="team__container-card">
        <div class="team__container-bg"></div>
        <img class="team__container-img" src={Ketzali} alt="Picture Ketzali" />
        <div class="team__container-info">
          <p class="name-team">Ketzali Flores</p>
          <div class="job-team">Frontend Developer & Web Designer</div>
          <p class="desc-team">Hi, I'm Ketzali Flores, a Frontend Developer Junior and Designer with skills in HTML, CSS, JS and Adobe XD. <br />
            With adaptability in teamwork and self-taught.</p>
        </div>
        <div class="team__container-social">
          <a href="https://www.instagram.com/ketzali_hoffman/" target="_blank">
            <img class="icon-social-media" src={Instagram} alt="instagram icon" />
          </a>

          <a href="https://www.linkedin.com/in/ketzali-flores-710989224" target="_blank">
            <img class="icon-social-media" src={Linkedin} alt="linkedin icon" />
          </a>

          <a href="https://github.com/KetzaliF" target="_blank">
            <img class="icon-social-media" src={GitHub} alt="github icon" />
          </a>

          <a href="https://twitter.com/ketzalihoffman" target="_blank">
            <img class="icon-social-media" src={Twitter} alt="twitter icon" />
          </a>
        </div>
      </div>

      <div class="team__container-card">
        <div class="team__container-bg"></div>
        <img class="team__container-img" src={Jesus} alt="Picture Jesus" />
        <div class="team__container-info">
          <p class="name-team">Jesús Rodriguez</p>
          <div class="job-team">Frontend Developer & Web Designer</div>
          <p class="desc-team">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="team__container-social">
          <a href="http://instagram.com" target="_blank">
            <img class="icon-social-media" src={Instagram} alt="instagram icon" />
          </a>

          <a href="https://www.linkedin.com/in/jes%C3%BAs-garc%C3%ADa-5ba345226/" target="_blank">
            <img class="icon-social-media" src={Linkedin} alt="linkedin icon" />
          </a>

          <a href="https://github.com/jessgarcia10117" target="_blank">
            <img class="icon-social-media" src={GitHub} alt="github icon" />
          </a>

          <a href="www.twitter.com/" target="_blank">
            <img class="icon-social-media" src={Twitter} alt="twitter icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export { TeamMember };
