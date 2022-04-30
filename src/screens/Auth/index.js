import { MapRoutes } from '../Routes/helpers';
import Login from './Login';
import Logout from './Logout';
import ResetPassword from './ResetPassword';
import Register from './Register';
import { Customer as Layout } from 'shared/components/Layout';
import { ROUTES_ACCESS, PATHS } from 'utils/constants';

const routes = [
  {
    exact: true,
    component: Login,
    path: PATHS.LOGIN,
    access: ROUTES_ACCESS.PUBLIC
  },
  {
    exact: true,
    component: ResetPassword,
    path: PATHS.RESET_PASSWORD,
    access: ROUTES_ACCESS.PUBLIC
  },
  {
    component: Register,
    path: PATHS.UNLOCK_ACCOUNT,
    access: ROUTES_ACCESS.PUBLIC
  },
  {
    component: Logout,
    path: PATHS.LOGOUT,
    access: ROUTES_ACCESS.PUBLIC
  }
];

export default MapRoutes(routes, Layout);
