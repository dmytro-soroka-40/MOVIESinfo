import React from "react";
import { NavLink } from "react-router-dom";
import { routeDetail } from "routes/routes";
import { IMovieItem } from "../../types/IMovie";
import NoImg from "../../assets/image/no-photo.svg";
import "./styles.scss";

interface IMoviesItemParams {
  item: IMovieItem;
  type: string;
}

const MoviesItem: React.FC<IMoviesItemParams> = ({ item, type }) => (
  <>
    {type === "main" ? (
      <NavLink to={routeDetail(item.id)} className="movie">
        <div className="movie__wrapper">
          <img
            src={item.image ? item.image.original : NoImg}
            alt={item.name}
            className="movie__img"
          />
          <p className="movie__name">{item.name && item.name}</p>
          <p className="movie__info">
            {item.premiered && item.premiered.slice(0, 4)}{" "}
            {item.network && `(${item.network.country.name})`}
          </p>
          <p className="movie__genres">
            {item.genres && item.genres.join(", ")}
          </p>
        </div>
      </NavLink>
    ) : (
      <NavLink to={routeDetail(item.id)} className="movie movie_genres">
        <div className="movie__wrapper movie__wrapper_genres">
          <img
            src={item.image ? item.image.original : NoImg}
            alt={item.name}
            className="movie__img movie__img_genres"
          />
          <div className="movie__block">
            <p className="movie__name movie__name_genres">
              {item.name && item.name}
            </p>
            <p className="movie__genres movie__genres_genres">
              {item.genres && item.genres.join(", ")}
            </p>
          </div>
        </div>
      </NavLink>
    )}
  </>
);

export default MoviesItem;
