import { MapRoutes } from "../Routes/helpers";
import Home from "./Home";
import About from "./About";
import { Customer as Layout } from "shared/components/Layout";
import { ROUTES_ACCESS, PATHS } from "utils/constants";

const routes = [
  {
    exact: true,
    component: Home,
    path: PATHS.LOGIN,
    access: ROUTES_ACCESS.PUBLIC
  },
  {
    component: About,
    path: PATHS.LOGOUT,
    access: ROUTES_ACCESS.PUBLIC
  }
];

export default MapRoutes(routes, Layout);
