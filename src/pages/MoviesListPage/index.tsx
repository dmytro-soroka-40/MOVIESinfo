import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMoviesComedy } from "../../store/movies/selectors";
import { loadMoviesComedy } from "../../store/movies/actions";
import routeList from "./routes";
import MoviesList from "../../components/MoviesList";
import Loader from "../../components/Loader";
import "./styles.scss";

const MoviesListPage = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector(selectMoviesComedy);

  useEffect(() => {
    dispatch(loadMoviesComedy());
  }, [dispatch]);

  return (
    <section className="movies-list-page">
      <h2 className="movies-list-page__title">
        Selected category: <span>Comedy</span>
      </h2>
      {moviesList.length > 0 ? (
        <MoviesList list={moviesList.slice(0, 50)} type="genres" />
      ) : (
        <Loader />
      )}
    </section>
  );
};

export { routeList };
export default MoviesListPage;
