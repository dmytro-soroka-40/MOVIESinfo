import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMoviesMain } from "../../store/movies/selectors";
import { loadMoviesMain } from "../../store/movies/actions";
import MoviesList from "../../components/MoviesList";
import Loader from "../../components/Loader";
import "./styles.scss";

const MainPage = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector(selectMoviesMain);

  useEffect(() => {
    dispatch(loadMoviesMain());
  }, [dispatch]);

  return (
    <>
      <h1 className="title">MOVIESinfo</h1>
      <p className="subtitle">The most popular resource for finding movies</p>
      <section className="main-page">
        {moviesList.length > 0 ? (
          <MoviesList list={moviesList.slice(0, 8)} type="main" />
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};

export default MainPage;
