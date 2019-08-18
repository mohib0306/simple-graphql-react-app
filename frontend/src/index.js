import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import App from "./App";

const history = createBrowserHistory();

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: "http://localhost:4000/graphql"
  })
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <App />
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
