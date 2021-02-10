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
            Digital Currency
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
            // src="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
            alt="bitcoin"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
