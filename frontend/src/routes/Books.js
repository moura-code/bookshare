import React, { useContext } from "react";
import { BookContext } from "../context/BooksContext";
import { Mybooks } from "../components/Mybooks";
import Spinner from "react-bootstrap/Spinner";
import "../static/Books.css";
export const Books = () => {
  const { loding } = useContext(BookContext);

  return (
    <div>
      {loding ? (
        <div className="absolute">
          <Spinner animation="border" variant="primary" size="xxl" />
        </div>
      ) : (
        <>
          <Mybooks />
        </>
      )}
    </div>
  );
};
