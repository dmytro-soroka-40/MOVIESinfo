import React from "react";
import { IMovieShow } from "../../types/IMovie";
import MoviesItem from "../MoviesItem";
import "./styles.scss";

interface IMoviesListParams {
  list: IMovieShow[];
  type: string;
}

const MoviesList: React.FC<IMoviesListParams> = ({ list, type }) => (
  <div className="movies">
    {list.length > 0 ? (
      list.map((item) => (
        <MoviesItem movie={item.show} key={item.show.id} type={type} />
      ))
    ) : (
      <p className="movies__empty">No movies!</p>
    )}
  </div>
);

export default MoviesList;
