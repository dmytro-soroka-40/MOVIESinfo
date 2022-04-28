import React from "react";
import Logo from "../Logo";
import "./styles.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__wrapper">
        <Logo />
        <p className="footer__text">Pet project</p>
        <div className="footer__info">
          <p className="footer__text footer__text_small">Made by</p>
          <p className="footer__text">Dmytro Soroka</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
