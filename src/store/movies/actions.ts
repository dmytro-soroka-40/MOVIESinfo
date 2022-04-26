import { Dispatch } from "redux";
import getMovies from "../../services/getMovies";
import { IStore } from "./types";

export const setMoviesMainAction = (movies: IStore["moviesMain"]) => {
  return {
    type: "movies/setMoviesMain",
    payload: movies,
  };
};

export const loadMoviesMain = () => async (dispatch: Dispatch) => {
  try {
    const response = await getMovies("home");
    dispatch(setMoviesMainAction(response.data));
  } catch (e) {
    console.log("Error", e);
  }
};

export const setMoviesComedyAction = (movies: IStore["moviesComedy"]) => {
  return {
    type: "movies/setMoviesComedy",
    payload: movies,
  };
};

export const loadMoviesComedy = () => async (dispatch: Dispatch) => {
  try {
    const response = await getMovies("comedy");
    dispatch(setMoviesComedyAction(response.data));
  } catch (e) {
    console.log("Error", e);
  }
};

export const setMoviesSearchAction = (movies: IStore["moviesComedy"]) => {
  return {
    type: "movies/setMoviesSearch",
    payload: movies,
  };
};

export const loadMoviesSearch =
  (genre: string) => async (dispatch: Dispatch) => {
    try {
      const response = await getMovies(genre);
      dispatch(setMoviesSearchAction(response.data));
    } catch (e) {
      console.log("Error", e);
    }
  };

export const setMoviesSearchGenre = (genre: IStore["moviesSearchGenre"]) => {
  return {
    type: "movies/setMoviesSearchGenre",
    payload: genre,
  };
};
