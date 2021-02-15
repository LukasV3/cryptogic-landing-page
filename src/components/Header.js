import React from "react";
import "../styles/Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header__container">
        <div className="header__title">
          <h1>
            Buy & Sell
            <br></br>
            Crypto<span>currency</span>
          </h1>
          <h3>
            Voluptate est in nulla Lorem ullamco mollit velit <br></br> fugiat dolor aute.
            Excepteur incididunt tempor tempor.
          </h3>

          <form className="header__input">
            <input placeholder="Enter email address" />
            <button type="button">Keep me Updated!</button>
          </form>

          <button className="header__title--btn">
            Learn more <i className="fas fa-long-arrow-alt-down"></i>
          </button>

          <img
            className="header__img"
            src="../img/header-graph.jpg"
            alt="Ethereum graph by Bram van Oosterhout from Pexels"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
