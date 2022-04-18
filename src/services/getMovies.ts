import axios, { AxiosResponse } from "axios";

const getMovies = (genre: string): Promise<AxiosResponse> =>
  axios.get(`https://api.tvmaze.com/search/shows?q=${genre}`);

export default getMovies;
