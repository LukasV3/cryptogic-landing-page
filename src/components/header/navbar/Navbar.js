import React, { useEffect } from "react";
import "./styles.scss";

const Navbar = () => {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    const header = document.querySelector(".header");
    const navHeight = nav.getBoundingClientRect().height;

    const stickyNav = function (entries) {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      rootMargin: `-${navHeight}px`,
      threshold: 0,
    });

    headerObserver.observe(header);
  });

  const scrollIntoView = (e) => {
    e.preventDefault();
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <img className="nav__logo" src="../img/logo.png" alt="Cryptogic logo" />
      <img
        className="nav__logo nav__logo--mobile"
        src="../img/icon.png"
        alt="Cryptogic icon"
      />
      <ul className="nav__links">
        <li className="nav__item">
          <a className="nav__link" onClick={scrollIntoView} href="#section--1">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" onClick={scrollIntoView} href="#section--2">
            Testimonials
          </a>
        </li>
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
