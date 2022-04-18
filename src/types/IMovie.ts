export interface IMovieItem {
  id: number;
  name: string;
  genres: string[];
  body: string;
  premiered: string;
  network: { country: { name: string } };
  image: { original: string };
  rating: { average: number };
  summary: string;
}

export interface IMovieShow {
  show: IMovieItem;
}
