import { TRouteDetail } from "../../types/TRouteDetail";

const routeDetail: TRouteDetail = (id = ":id") => `/movie/${id}`;

export default routeDetail;
