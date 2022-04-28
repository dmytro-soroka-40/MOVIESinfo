import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectMoviesAll } from "store/movies/selectors";
import { IMovieItem } from "types/IMovie";
import getOneMovie from "services/getOneMovie";

export default function useMovieByParamId(id: string) {
  const moviesList = useSelector(selectMoviesAll);
  const [movie, setMovie] = useState<IMovieItem | undefined>(undefined);

  useEffect(() => {
    if (moviesList.length > 0) {
      const movieItem = moviesList.find(
        (item) => item.show.id.toString() === id
      );
      if (movieItem) setMovie(movieItem.show);
    } else {
      getOneMovie(id).then((response) => {
        const movieItem = response.data;
        setMovie(movieItem);
      });
    }
  }, [id, moviesList]);

  return movie;
}
