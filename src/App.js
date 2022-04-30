import { Switch } from "react-router-dom";
import { useContext, useMemo } from "react";
import { AuthContext } from "shared/authorization";
import { renderRoutes } from "react-router-config";
import screens from "./screens";

const App = () => {
  const { user, accessToken } = useContext(AuthContext);

  return useMemo(() => {
    return (
      <Switch>
        {renderRoutes(
          screens({
            authorization: { user, accessToken }
          })
        )}
      </Switch>
    );
  }, [user, accessToken]);
};

export default App;
