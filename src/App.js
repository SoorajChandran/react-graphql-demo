import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Books from "./Books";

const client = new ApolloClient({
  uri: "https://r95kv5p84n.lp.gql.zone/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        GraphQL in React - Demo application
      </a>
    </nav>
    <div className="container">
      <Books />
    </div>
  </ApolloProvider>
);

export default App;
