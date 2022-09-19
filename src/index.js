import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://syn-api-prod.herokuapp.com/graphql",
});
const authLink = setContext((_, { headers }) => {
  //In this case I use the Personal Token provided
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiMDk3YTI3Zjk5YWE4IiwicHJvamVjdElkIjoiYTNiMjNiM2YtZGEwYS00ZDJjLTk0OTItMDUxZDMzYWUzM2Y4IiwiZnVsbE5hbWUiOiJCcnlhbiBGcmFuY2lzY28gQ2Vyw6luIiwiZW1haWwiOiJicnlhbmNlcmVuMDFAZ21haWwuY29tIiwiaWF0IjoxNjYzMDA5NjE2fQ.Sgu_6ZpWfdtTJFmjj8LMML8Z-5pW3ucDgmsikGx5Nns";
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
