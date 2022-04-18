import React from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import "./styles.scss";

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <Logo />
        <Navigation />
      </div>
    </div>
  </header>
);

export default Header;
