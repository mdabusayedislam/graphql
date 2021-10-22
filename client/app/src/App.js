import React,{Component} from 'react'
import BookList from './components/BookList';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

class App extends Component {
  render(){
  return (
    <ApolloProvider client={client}>
    <div id="main">
      <h1>Sayed Learning List 23</h1>  
      <BookList/>  
    </div>
    </ApolloProvider>
  );
}
}
export default App;
