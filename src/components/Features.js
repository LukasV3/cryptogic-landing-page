import React from "react";
import "../styles/Features.scss";

const Features = () => {
  return (
    <section className="section" id="section-1">
      <div className="section__title">
        <h2 className="section__description">Features</h2>
        <h3 className="section__header">Lorem ipsum dolor sit amet.</h3>
      </div>

      <div className="features">
        <img
          // src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          // src="https://cdn.pixabay.com/photo/2017/12/11/11/54/bitcoin-3012035_960_720.png"
          src="https://cdn.pixabay.com/photo/2017/10/24/09/01/bitcoin-2883885_960_720.jpg"
          alt="features img"
          className="features__img"
        ></img>
        <div className="features__feature">
          <div className="features__icon">
            <i className="fas fa-exchange-alt"></i>
          </div>
          <h5 className="features__header">Fast Exchange</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias sint quos?
          </p>
        </div>

        <div className="features__feature">
          <div className="features__icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h5 className="features__header">Highly Secure</h5>
          <p>
            Nesciunt quos autem dolorum voluptates cum dolores dicta fuga inventore ab.
          </p>
        </div>
        <img
          // src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          src="https://cdn.pixabay.com/photo/2017/09/04/14/07/bitcoin-2714191_960_720.jpg"
          alt="Plant"
          className="features__img"
        />

        <img
          // src="https://images.pexels.com/photos/5833780/pexels-photo-5833780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          src="https://cdn.pixabay.com/photo/2020/03/20/13/10/white-males-4950613_960_720.jpg"
          alt="/"
          className="features__img"
        />
        <div className="features__feature">
          <div className="features__icon">
            <i className="fas fa-comments"></i>
          </div>
          <h5 className="features__header">24/7 Support</h5>
          <p>Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
