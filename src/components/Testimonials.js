import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../styles/Testimonials.scss";

const Testimonials = () => {
  const renderArrowBtn = (direction) => {
    return (onClickHandler, hasPrev, label) =>
      hasPrev && (
        <button
          className={`carousel__btn carousel__btn--${direction}`}
          type="button"
          onClick={onClickHandler}
          title={label}
        >
          <i className={`fas fa-long-arrow-alt-${direction}`}></i>
        </button>
      );
  };

  return (
    <section className="section" id="section--2">
      <div className="section__title">
        <h2 className="section__description">Testimonials</h2>
        <h3 className="section__header">Lorem ipsum dolor sit amet.</h3>
      </div>

      <Carousel
        useKeyboardArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        renderArrowPrev={renderArrowBtn("left")}
        renderArrowNext={renderArrowBtn("right")}
      >
        <div className="slide slide--1">
          <div className="testimonial">
            <i className="fas fa-quote-left"></i>
            <h5 className="testimonial__header">Best financial decision ever!</h5>
            <div className="testimonial__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas
              quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt,
              numquam corporis et asperiores laboriosam sunt, praesentium suscipit
              blanditiis.
            </div>
            <div className="testimonial__author">
              <img src="../img/user-1.jpg" alt="User" className="testimonial__photo" />
              <h6 className="testimonial__name">Justin Peake</h6>
              <p className="testimonial__location">London, UK</p>
            </div>
          </div>
        </div>

        <div className="slide slide--2">
          <div className="testimonial">
            <i className="fas fa-quote-left"></i>

            <h5 className="testimonial__header">Best financial decision ever!</h5>
            <div className="testimonial__text">
              Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque
              ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam
              perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet.
            </div>
            <div className="testimonial__author">
              <img src="../img/user-2.jpg" alt="User" className="testimonial__photo" />
              <h6 className="testimonial__name">Andrea Sharp</h6>
              <p className="testimonial__location">San Francisco, USA</p>
            </div>
          </div>
        </div>

        <div className="slide slide--3">
          <div className="testimonial">
            <i className="fas fa-quote-left"></i>

            <h5 className="testimonial__header">Best financial decision ever!</h5>
            <div className="testimonial__text">
              Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque
              ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam
              perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet.
            </div>
            <div className="testimonial__author">
              <img src="../img/user-3.jpg" alt="User" className="testimonial__photo" />
              <h6 className="testimonial__name">Mateo Alvarez</h6>
              <p className="testimonial__location">Barcelona, Spain</p>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;
