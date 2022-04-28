import React from "react";
import { NavLink } from "react-router-dom";
import { routeDetail } from "routes/routes";
import { IMovieItem } from "../../types/IMovie";
import NoImg from "../../assets/image/no-photo.svg";
import "./styles.scss";

interface IMoviesItemParams {
  movie: IMovieItem;
  type: string;
}

const MoviesItem: React.FC<IMoviesItemParams> = ({ movie, type }) => {
  const getClasses = () => (type === "main" ? "movie" : "movie genres");

  const getImageLink = (image: IMovieItem["image"]) =>
    image ? image.original : NoImg;

  const getDate = (date: IMovieItem["premiered"]) =>
    date ? date.slice(0, 4) : null;

  const getCountry = (network: IMovieItem["network"]) =>
    network ? ` (${network.country.name})` : null;

  const getGenres = (genres: IMovieItem["genres"]) =>
    genres ? genres.join(", ") : null;

  return (
    <NavLink to={routeDetail(movie.id)} className={getClasses()}>
      <div className="movie__wrapper">
        <img
          src={getImageLink(movie.image)}
          alt={movie.name}
          className="movie__img"
        />
        <div className="movie__block">
          <p className="movie__name">{movie.name}</p>
          {type === "main" ? (
            <p className="movie__info">
              {getDate(movie.premiered)}
              {getCountry(movie.network)}
            </p>
          ) : null}
          <p className="movie__genres">{getGenres(movie.genres)}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default MoviesItem;
