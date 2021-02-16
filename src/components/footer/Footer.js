import React from "react";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="footer__item">About</li>
        <li className="footer__item">Pricing</li>
        <li className="footer__item">Terms of Use</li>
        <li className="footer__item">Privacy Policy</li>
        <li className="footer__item">Careers</li>
        <li className="footer__item">Blog</li>
        <li className="footer__item">Contact Us</li>
      </ul>
      <img src="../img/icon.png" alt="Cryptogic icon" className="footer__logo" />
    </footer>
  );
};

export default Footer;
