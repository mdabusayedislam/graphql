import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BookList from './components/BookList.js'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <BookList/>
  </ApolloProvider>,
  document.getElementById('root')
);

