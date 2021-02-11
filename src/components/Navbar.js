import React from "react";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <p className="nav__logo">LOGO</p>
      <ul className="nav__links">
        <li className="nav__item">
          <a className="nav__link" href="#section-1">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            Testimonials
          </a>
        </li>
        {/* <li className="nav__item">
          <a className="nav__link" href="/">
            Te
          </a>
        </li> */}
        <li className="nav__item">
          <a className="nav__link nav__link--btn" href="/">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
