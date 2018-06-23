import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Book from "./Book";

const Books = () => (
  <Query
    query={gql`
      {
        allBooks {
          id
          title
          author
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading ...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div className="row">
          {data.allBooks.map(book => <Book book={book} />)}
        </div>
      );
    }}
  </Query>
);

export default Books;
