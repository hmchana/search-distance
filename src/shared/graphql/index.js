import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat
} from "@apollo/client";

const httpLink = new HttpLink({ uri: "http://192.168.1.3:9803/graphql" });

const authMiddleware = new ApolloLink(async (operation, forward) => {
  // add the authorization to the headers
  const token = await localStorage.getItem("state");
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,

      authorization: token ? `Bearer ${token}` : ""
    }
  }));

  return forward(operation);
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink)
});
