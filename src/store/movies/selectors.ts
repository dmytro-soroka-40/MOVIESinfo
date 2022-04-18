import { IStore } from "./types";

export const selectMoviesMain = (state: {
  moviesReducer: IStore;
}): IStore["moviesMain"] => state.moviesReducer.moviesMain;

export const selectMoviesComedy = (state: {
  moviesReducer: IStore;
}): IStore["moviesComedy"] => state.moviesReducer.moviesComedy;

export const selectMoviesSearch = (state: {
  moviesReducer: IStore;
}): IStore["moviesSearch"] => state.moviesReducer.moviesSearch;

export const selectMoviesAll = (state: {
  moviesReducer: IStore;
}): IStore["moviesAll"] => state.moviesReducer.moviesAll;

export const selectMoviesSearchGenre = (state: {
  moviesReducer: IStore;
}): IStore["moviesSearchGenre"] => state.moviesReducer.moviesSearchGenre;
