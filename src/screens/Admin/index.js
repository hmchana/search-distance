import { MapRoutes } from '../Routes/helpers';
import Categories from './Categories';
import Products from './Products';
import { Admin as Layout } from 'shared/components/Layout';
import { ROUTES_ACCESS, PATHS } from 'utils/constants';

const routes = [
  {
    exact: true,
    component: Categories,
    path: PATHS.LOGIN,
    access: ROUTES_ACCESS.PRIVATE
  },
  {
    component: Products,
    path: PATHS.LOGOUT,
    access: ROUTES_ACCESS.PRIVATE
  }
];

export default MapRoutes(routes, Layout);
