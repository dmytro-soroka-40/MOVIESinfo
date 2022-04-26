import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import AboutPage from "../../pages/AboutPage";
import SearchPage from "../../pages/SearchPage";
import MoviesListPage from "../../pages/MoviesListPage";
import MoviesDetailPage from "../../pages/MoviesDetailPage";
import {
  routeMain,
  routeAbout,
  routeSearch,
  routeList,
  routeDetail,
} from "routers/routes";
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
