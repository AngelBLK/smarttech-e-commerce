import React from "react";

import Banda from '../assets/assets-about/teacher-banda.jpg';
import Valiz from '../assets/assets-about/teacher-veliz.jpg';



const TestimonialCard = () => {
  return (
    <div className="testimonials__grid">
      <div class="testimonials__card">
        <div class="card__user">
          <img
            class="user__img"
            src={Banda}
            alt="teacher Jesús Banda"
          />
          <div class="user__info">
            <h4 class="info__name">Jesús Banda</h4>
            <p class="info__subjects">Network Fundamentals Teacher</p>
          </div>
        </div>

        <p class="testimonials__testimony">
          Ketzali - An honest and very calm girl, she likes to participate in
          class as well as her works and projects are delivered with quality, the
          leader of the group of boys of the markers, her charisma is noticed and
          she looks good feelings.
        </p>
      </div>

      <div class="testimonials__card">
        <div class="card__user">
          <img class="user__img" src={Banda} t="teacher Jesús Banda" />
          <div class="user__info">
            <h4 class="info__name">Jesús Banda</h4>
            <p class="info__subjects">Network Fundamentals Teacher</p>
          </div>
        </div>

        <p class="testimonials__testimony">Bohorquez - Friendly, hard-working and with a spark that is noticed, an intelligent guy who seeks to conclude with his objectives, another student of the markers.</p>
      </div>

      <div class="testimonials__card">
        <div class="card__user">
          <img class="user__img" src={Banda} alt="teacher Jesús Banda" />
          <div class="user__info">
            <h4 class="info__name">Jesús Banda</h4>
            <p class="info__subjects">Network Fundamentals Teacher</p>
          </div>
        </div>

        <p class="testimonials__testimony">Jesús - The student of the markers, an applied and intelligent boy in his work, if he couldn't do something he would seek to solve his problem, friendly and "calm".</p>
      </div>

      <div class="testimonials__card">
        <div class="card__user">
          <img class="user__img" src={Valiz} alt="teacher Jesús Banda" />
          <div class="user__info">
            <h4 class="info__name">Juan Carlos Veliz</h4>
            <p class="info__subjects">Data Bases</p>
          </div>
        </div>

        <p class="testimonials__testimony">Jesús - He's organized, knows how to work in a team, has many leadership qualities, is always kind to any of his colleagues to support them, he was always good in his evaluations, he's highly appreciated by his colleagues and by many teachers, he has always been active, always he has proposed as a volunteer for different activities, so I'm convinced that he's an excellent student and that he always exceeds expectations, has high motivation and his abilities allow him to achieve many goals.</p>
      </div>

      <div class="testimonials__card">
        <div class="card__user">
          <img class="user__img" src={Valiz} alt="teacher Jesús Banda" />
          <div class="user__info">
            <h4 class="info__name">Juan Carlos Veliz</h4>
            <p class="info__subjects">Data Bases</p>
          </div>
        </div>

        <p class="testimonials__testimony">Ketzali -  She's very good, very competitive, she's always expected in the preparation and presentation of her work, normally she always justifies what she does well, all her investigations always have good foundations, I can also summarize her as a very analytical person, also reserved, and always she's willing to work both individually and as a team, she's very respectful and knows how to listen to the recommendations that one gives her, she always stands out for her willingness to work in any activity that is entrusted to her and above all for the respect she has for her other colleagues.</p>
      </div>

      <div class="testimonials__card">
        <div class="card__user">
          <img class="user__img" src={Valiz} alt="teacher Jesús Banda" />
          <div class="user__info">
            <h4 class="info__name">Juan Carlos Veliz</h4>
            <p class="info__subjects">Data Bases</p>
          </div>
        </div>

        <p class="testimonials__testimony">Bohorquez -  I have known him not many years ago, I met him at school giving him classes, but I can consider him as a student who is quite entrepreneurial, is very disciplined, is quite responsible and is always very proactive in his tasks, he's one of those who always seeks to deepen his knowledge, he always goes beyond what's explained to him in the classroom, he has many skills to interact with other people, he always has a great leadership capacity, he works very well in a team, however he likes to work alone more, I can highly recommend it and I know that any activity entrusted to you will be fully accomplished.</p>
      </div>

    </div>
  );
};

export { TestimonialCard };
