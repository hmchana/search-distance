import { Route, Redirect } from "react-router-dom";
import { PATHS, ROUTES_ACCESS } from "utils/constants";
import { isAuthenticated } from "utils/helpers";

export const MapRoutes = (routes, Layout) =>
  routes.map(({ component: Component, ...rest }) => ({
    component: Layout(Component),
    ...rest
  }));

const protect = ({ component, authorization, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated(authorization) ? (
        {
          component,
          props
        }
      ) : (
        <Redirect to={PATHS.LOGOUT} />
      )
    }
  />
);

export const checkAuthorization = ({ routes = [], authorization = {} }) =>
  routes.map(route => {
    const { component, access, ...rest } = route;
    if (access === ROUTES_ACCESS.PRIVATE) {
      return {
        component: props =>
          protect({
            component,
            authorization,
            ...props
          }),
        ...rest
      };
    }
    return route;
  });
