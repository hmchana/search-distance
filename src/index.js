import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import './index.less';

const Component = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const render = () => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render();
