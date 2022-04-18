import { IMovieShow } from "../../types/IMovie";

export interface IStore {
  moviesMain: IMovieShow[];
  moviesComedy: IMovieShow[];
  moviesSearch: IMovieShow[];
  moviesAll: IMovieShow[];
  moviesSearchGenre: string;
}
