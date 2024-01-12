import React from "react";

function Book(props) {
  const { img, title, author } = props;
  const clickHandler = () => alert(title);
  return (
    <article className="book" onMouseOver={() => console.log(title)}>
      <img src={img} alt="" />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        {/* The reference button alerts the title of the book */}
        Reference Button
      </button>
    </article>
  );
}

export default Book;
