import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage, { routeMain } from "../../pages/MainPage";
import AboutPage, { routeAbout } from "../../pages/AboutPage";
import SearchPage, { routeSearch } from "../../pages/SearchPage";
import MoviesListPage, { routeList } from "../../pages/MoviesListPage";
import MoviesDetailPage, { routeDetail } from "../../pages/MoviesDetailPage";
import Header from "../Header";
import Footer from "../Footer";
import "./styles.scss";

const AppContent = () => (
  <div className="app-wrapper">
    <Header />
    <main className="main">
      <div className="container">
        <Switch>
          <Route exact path={routeMain()} component={MainPage} />
          <Route exact path={routeAbout()} component={AboutPage} />
          <Route exact path={routeSearch()} component={SearchPage} />
          <Route exact path={routeList()} component={MoviesListPage} />
          <Route exact path={routeDetail()} component={MoviesDetailPage} />
          <Redirect to={{ pathname: routeMain() }} />
        </Switch>
      </div>
    </main>
    <Footer />
  </div>
);

export default AppContent;
