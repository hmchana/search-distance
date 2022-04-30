import Auth from "../Auth";
import Admin from "../Admin";
import Client from "screens/Client";
import { checkAuthorization } from "./helpers";

const routes = [...Auth, ...Client, ...Admin];

const routesIndex = ({ authorization }) => checkAuthorization({ routes, authorization });

export default routesIndex;
