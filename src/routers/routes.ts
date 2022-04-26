import { TRouteDetail } from "../types/TRouteDetail";

export const routeMain = () => "/main";
export const routeList = () => "/movies";
export const routeAbout = () => "/about";
export const routeSearch = () => "/search";
export const routeDetail: TRouteDetail = (id = ":id") => `/movie/${id}`;
