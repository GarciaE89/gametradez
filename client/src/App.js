import "./App.css";
import React from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

////////

///////
//Route, Switch
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Main></Main>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
