import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import "./styles/index.css";
import CompanyList from "./components/CompanyList";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: "http://localhost:4000/graphql"
  })
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CompanyList />
    </ApolloProvider>
  );
};

export default App;
