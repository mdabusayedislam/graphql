//import { graphql  } from "react-apollo";
import {gql  } from "@apollo/client";
const getBooksQuery=gql`
{
  books{
    name
    id
  }
}
`
function BookList() {
    return (      
      <div id="main">
        <ul id="book-list">
            <li>Book Name</li> 
        </ul>
      </div>
    );
  }

  export default BookList;
  //export default graphql(getBooksQuery)(BookList);