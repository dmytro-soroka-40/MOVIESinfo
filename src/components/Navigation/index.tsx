import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain } from "../../pages/MainPage";
import { routeList } from "../../pages/MoviesListPage";
import { routeAbout } from "../../pages/AboutPage";
import { routeSearch } from "../../pages/SearchPage";
import "./styles.scss";

const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink
          to={routeMain()}
          className="nav__link"
          activeClassName="nav__link_active"
        >
          Main
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          to={routeList()}
          className="nav__link"
          activeClassName="nav__link_active"
        >
          Movies by category
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          to={routeAbout()}
          className="nav__link"
          activeClassName="nav__link_active"
        >
          About us
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          to={routeSearch()}
          className="nav__link"
          activeClassName="nav__link_active"
        >
          Search
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
