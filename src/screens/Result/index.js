import Container from './Container';
import { PATHS } from 'utils/constants';

const routes = [
  {
    exact: true,
    component: Container,
    path: PATHS.CLIENT.RESULT
  }
];

export default routes;
