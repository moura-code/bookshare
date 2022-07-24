import React, { useContext } from "react";
import { BookContext } from "../context/BooksContext";
import "../static/Books.css";
export const Create = () => {
    const { content,setcontent,title,settitle } = useContext(BookContext);
  return (
    <div>
      <div className="container form2">
        <form className="inputs">
            <h3>Title:</h3>
        <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(event) => settitle(event.target.value)}
          />
            <textarea placeholder="Enter your text"
            value={content}
            onChange={(event) => setcontent(event.target.value)} rows="8" className="create"></textarea>
        </form>
      </div>
    </div>
  );
};
