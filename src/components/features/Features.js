import React from "react";
import "./styles.scss";

const Features = () => {
  return (
    <section className="section" id="section--1">
      <div className="section__title">
        <h2 className="section__description">Features</h2>
        <h3 className="section__header">Lorem ipsum dolor sit amet.</h3>
      </div>

      <div className="features">
        <img
          src="../img/bitcoin-miner-1.jpg"
          alt="Bitcoin miner by Peggy und Marco Lachmann-Anke from Pixabay"
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
          src="../img/bitcoin-miner-2.jpg"
          alt="Bitcoin miner by Peggy und Marco Lachmann-Anke from Pixabay"
          className="features__img"
        />

        <img
          src="../img/bitcoin-miner-3.jpg"
          alt="Bitcoin miner by Peggy und Marco Lachmann-Anke from Pixabay"
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
