import { Switch } from 'react-router-dom';
import { useMemo } from 'react';

import { renderRoutes } from 'react-router-config';
import screens from './screens';

const App = () => {
  return useMemo(() => {
    return <Switch>{renderRoutes(screens)}</Switch>;
  }, []);
};

export default App;
