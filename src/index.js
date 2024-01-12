import React, { Children } from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";
import Book from "./Book";
// Var sources
import { books } from "./books";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<Booklist />, document.getElementById("root"));
