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
            src="https://images.pexels.com/photos/6478886/pexels-photo-6478886.png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="bitcoin"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
