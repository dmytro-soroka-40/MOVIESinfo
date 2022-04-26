import axios, { AxiosResponse } from "axios";

const getOneMovie = (id: string): Promise<AxiosResponse> =>
  axios.get(`https://api.tvmaze.com/shows/${id}`);

export default getOneMovie;
