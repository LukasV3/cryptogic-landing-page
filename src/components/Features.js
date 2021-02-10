import React from "react";
import "../styles/Features.scss";

const Features = () => {
  return (
    <section className="section">
      <div className="section__title">
        <h2 className="section__description">Features</h2>
        <h3 className="section__header">Evrwogn rwgper rog wef eldse ef.</h3>
      </div>

      <div className="features">
        <img src="/" alt="features img" className="features__img"></img>
        <div className="features__feature">
          <div className="features__icon">icon</div>
          <h5 className="features__header">100% digital bank</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias sint quos?
            Accusantium a fugiat porro reiciendis saepe quibusdam debitis ducimus.
          </p>
        </div>

        <div className="features__feature">
          <div className="features__icon"></div>
          <h5 className="features__header">Watch your money grow</h5>
          <p>
            Nesciunt quos autem dolorum voluptates cum dolores dicta fuga inventore ab?
            Nulla incidunt eius numquam sequi iste pariatur quibusdam!
          </p>
        </div>
        <img src="/" alt="Plant" className="features__img" />

        <img src="/" alt="/" className="features__img" />
        <div className="features__feature">
          <div className="features__icon"></div>
          <h5 className="features__header">Free debit card included</h5>
          <p>
            Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim eveniet
            consequatur odit quam quos possimus assumenda dicta fuga inventore ab.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
