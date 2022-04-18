import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
  moviesMain: [],
  moviesComedy: [],
  moviesSearch: [],
  moviesAll: [],
  moviesSearchGenre: "",
};

const moviesReducer = (state: IStore = initialState, action: AnyAction) => {
  switch (action.type) {
    case "movies/setMoviesMain":
      return {
        ...state,
        moviesMain: [...action.payload],
        moviesAll: [
          ...state.moviesComedy,
          ...state.moviesSearch,
          ...action.payload,
        ],
      };
    case "movies/setMoviesComedy":
      return {
        ...state,
        moviesComedy: [...action.payload],
        moviesAll: [
          ...state.moviesMain,
          ...state.moviesSearch,
          ...action.payload,
        ],
      };
    case "movies/setMoviesSearch":
      return {
        ...state,
        moviesSearch: [...action.payload],
        moviesAll: [
          ...state.moviesMain,
          ...state.moviesComedy,
          ...action.payload,
        ],
      };
    case "movies/setMoviesSearchGenre":
      return {
        ...state,
        moviesSearchGenre: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
