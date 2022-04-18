import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain } from "../../pages/MainPage";
import "./styles.scss";

const Logo = () => (
  <NavLink to={routeMain()} className="logo">
    MOVIESinfo
  </NavLink>
);

export default Logo;
