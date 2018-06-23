import React from "react";

const Book = props => (
  <div className="card col-sm-3">
    <div className="card-body">
      <h5 className="card-title">{props.book.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.book.author}</h6>
    </div>
  </div>
);

export default Book;
