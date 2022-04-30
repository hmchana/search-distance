import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "@apollo/react-hooks";

import { client } from "shared/graphql";

const Component = () => (
  <ApolloProvider client={client}>
    <ApolloProviderHooks client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloProviderHooks>
  </ApolloProvider>
);

const render = () => {
  ReactDOM.render(<Component />, document.getElementById("root"));
};

render();
