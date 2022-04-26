import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMoviesSearch,
  setMoviesSearchGenre,
} from "../../store/movies/actions";
import {
  selectMoviesSearch,
  selectMoviesSearchGenre,
} from "../../store/movies/selectors";
import MoviesList from "../../components/MoviesList";
import Loader from "../../components/Loader";
import "./styles.scss";

const SearchPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMoviesSearch);
  const genre = useSelector(selectMoviesSearchGenre);
  const [inpValue, setInpValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInpValue(e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(setMoviesSearchGenre(inpValue));
    await dispatch(loadMoviesSearch(inpValue));
    setIsLoading(false);
  };

  return (
    <section className="search-page">
      <h1 className="search-page__title">Search for category</h1>
      <form
        action="#"
        className="search-page__form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          className="search-page__input"
          placeholder="Example: drama"
          value={inpValue}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="search-page__button">
          Search
        </button>
      </form>
      <p className="search-page__results">Results: {genre}</p>
      {isLoading ? (
        <Loader />
      ) : movies.length > 0 ? (
        <MoviesList list={movies} type="genres" />
      ) : (
        <p className="search-page__empty">
          Enter a search term to display results
        </p>
      )}
    </section>
  );
};

export default SearchPage;
