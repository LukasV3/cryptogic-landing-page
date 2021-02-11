import React from "react";
import "../styles/Testimonials.scss";

const Testimonials = () => {
  return (
    <section className="section" id="section--2">
      <div className="section__title">
        <h2 className="section__description">Testimonials</h2>
        <h3 className="section__header">Lorem ipsum dolor sit amet.</h3>
      </div>

      <div className="slider">
        <div className="slide slide--1">
          <div className="testimonial">
            <h5 className="testimonial__header">Best financial decision ever!</h5>
            <div className="testimonial__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas
              quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt,
              numquam corporis et asperiores laboriosam sunt, praesentium suscipit
              blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur
              dolore veniam autem esse non voluptatem saepe provident nihil molestiae.
            </div>
            <div className="testimonial__author">
              <img src="img/user-1.jpg" alt="" className="testimonial__photo" />
              <h6 className="testimonial__name">Aarav Lynn</h6>
              <p className="testimonial__location">San Francisco, USA</p>
            </div>
          </div>
        </div>

        <div className="slide slide--2">
          <div className="testimonial">
            <h5 className="testimonial__header">
              The last step to becoming a complete minimalist
            </h5>
            <div className="testimonial__text">
              Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque
              ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam
              perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Illo deserunt exercitationem deleniti.
            </div>
            <div className="testimonial__author">
              <img src="img/user-2.jpg" alt="" className="testimonial__photo" />
              <h6 className="testimonial__name">Miyah Miles</h6>
              <p className="testimonial__location">London, UK</p>
            </div>
          </div>
        </div>

        <button className="slider__btn slider__btn--left">&larr;</button>
        <button className="slider__btn slider__btn--right">&rarr;</button>
      </div>
    </section>
  );
};

export default Testimonials;
