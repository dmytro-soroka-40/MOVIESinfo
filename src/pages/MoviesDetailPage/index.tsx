import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMoviesAll } from "../../store/movies/selectors";
import routeDetail from "./routes";
import { Iid } from "../../types/Iid";
import { IMovieItem } from "../../types/IMovie";
import Loader from "../../components/Loader";
import ImgStart from "../../assets/image/star-icon.svg";
import NoImg from "../../assets/image/no-photo.svg";
import "./styles.scss";

const MoviesDetailPage = () => {
  const { id } = useParams<Iid>();
  const history = useHistory();
  const movies = useSelector(selectMoviesAll);
  const [movie, setMovie] = useState<IMovieItem | null>(null);

  useEffect(() => {
    const newItem = movies.find((item) => item.show.id.toString() === id);
    newItem ? setMovie(newItem.show) : history.goBack();
  }, [id]);

  return (
    <section className="movies-detail">
      {movie ? (
        <div className="movies-detail__wrapper">
          <img
            src={movie.image ? movie.image.original : NoImg}
            alt={movie.name && movie.name}
            className="movies-detail__img"
          />
          <div className="movies-detail__info">
            <div className="movies-detail__top">
              <p className="movies-detail__name">{movie.name && movie.name}</p>
              {movie.rating.average && (
                <div className="movies-detail__rating">
                  <img src={ImgStart} alt="star" />
                  <span>{movie.rating.average}/10</span>
                </div>
              )}
            </div>
            <div className="movies-detail__block">
              {movie.premiered && (
                <div className="movies-detail__wrap">
                  <p className="movies-detail__subtitle">Year</p>
                  <p className="movies-detail__def">
                    {movie.premiered.slice(0, 4)}
                  </p>
                </div>
              )}
              {movie.network && (
                <div className="movies-detail__wrap">
                  <p className="movies-detail__subtitle">Country</p>
                  <p className="movies-detail__def">
                    {movie.network.country.name}
                  </p>
                </div>
              )}
              {movie.genres.length > 0 && (
                <div className="movies-detail__wrap">
                  <p className="movies-detail__subtitle">Genres</p>
                  <p className="movies-detail__def">
                    {movie.genres.join(", ")}
                  </p>
                </div>
              )}
              {movie.summary && (
                <div className="movies-detail__wrap">
                  <p className="movies-detail__subtitle">Summary</p>
                  <p className="movies-detail__text">
                    {movie.summary.replace(/((\/?[^>]+)>)/g, "")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export { routeDetail };
export default MoviesDetailPage;
