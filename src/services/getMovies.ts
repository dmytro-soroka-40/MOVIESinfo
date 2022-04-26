import axios, { AxiosResponse } from "axios";

const getMovies = (value: string): Promise<AxiosResponse> =>
  axios.get(`https://api.tvmaze.com/search/shows?q=${value}`);

export default getMovies;
