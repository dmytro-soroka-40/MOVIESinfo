import React from "react";
import { useParams } from "react-router-dom";
import useMovieByParamId from "hooks/useMovieByParamId";
import { Iid } from "../../types/Iid";
import { IMovieItem } from "../../types/IMovie";
import Loader from "../../components/Loader";
import ImgStart from "../../assets/image/star-icon.svg";
import NoImg from "../../assets/image/no-photo.svg";
import "./styles.scss";

const MoviesDetailPage = () => {
  const { id } = useParams<Iid>();
  const movie = useMovieByParamId(id);

  const getImageLink = (image: IMovieItem["image"]) =>
    image ? image.original : NoImg;

  const getRating = (rating: IMovieItem["rating"]) =>
    rating ? rating.average : null;

  const getDate = (date: IMovieItem["premiered"]) =>
    date ? date.slice(0, 4) : null;

  const getCountry = (country: IMovieItem["network"]["country"]) =>
    country ? country.name : null;

  const getGenres = (genres: IMovieItem["genres"]) =>
    genres ? genres.join(", ") : null;

  const prepareSummary = (text: IMovieItem["summary"]) =>
    text.replace(/(<([^>]+)>)/gi, "");

  const getSummary = (summary: IMovieItem["summary"]) =>
    prepareSummary(summary);

  return (
    <section className="movies-detail">
      {movie ? (
        <div className="movies-detail__wrapper">
          <img
            src={getImageLink(movie.image)}
            alt={movie.name}
            className="movies-detail__img"
          />
          <div className="movies-detail__info">
            <div className="movies-detail__top">
              <p className="movies-detail__name">{movie.name}</p>
              {movie.rating.average && (
                <div className="movies-detail__rating">
                  <img src={ImgStart} alt="star" />
                  <span>{getRating(movie.rating)}/10</span>
                </div>
              )}
            </div>
            <div className="movies-detail__block">
              {movie.premiered && (
                <div className="movies-detail__wrap">
                  <p className="movies-detail__subtitle">Year</p>
                  <p className="movies-detail__def">
                    {getDate(movie.premiered)}
                  </p>
                </div>
              )}
              {movie.network && (
                <div className="movies-detail__wrap">
                  <p className="movies-detail__subtitle">Country</p>
                  <p className="movies-detail__def">
                    {getCountry(movie.network.country)}
                  </p>
                </div>
              )}
              {movie.genres.length > 0 && (
                <div className="movies-detail__wrap">
                  <p className="movies-detail__subtitle">Genres</p>
                  <p className="movies-detail__def">
                    {getGenres(movie.genres)}
                  </p>
                </div>
              )}
              {movie.summary && (
                <div className="movies-detail__wrap">
                  <p className="movies-detail__subtitle">Summary</p>
                  <p className="movies-detail__text">
                    {getSummary(movie.summary)}
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

export default MoviesDetailPage;
