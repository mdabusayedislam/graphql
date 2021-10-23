import React,{Component} from 'react'
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
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
      <AddBook/>
    </div>
    </ApolloProvider>
  );
}
}
export default App;
