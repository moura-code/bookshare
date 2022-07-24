import React, { useContext, useState } from "react";
import { BookContext } from "../context/BooksContext";
import { Link } from "react-router-dom";

import "../static/Books.css";
export const Mybooks = () => {
  const { mybooks } = useContext(BookContext);
  const [isActive, setIsActive] = useState(true);
  const nav = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="icon2" onClick={nav} style={{}}>
        <label
          htmlFor="nav-check"
          style={{
            width: "20px",
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div
        className="mybooks"
        style={{
          width: !isActive ? "calc(100vh - 500px)" : "5pc",
          display: isActive ? "none" : "block",
        }}
      >
        <h5>
          <Link to={`/books/create`} className="link">
            Make your book
          </Link>
        </h5>
        {mybooks.length ? (
          <>
            <div
              style={{
                display: isActive ? "none" : "block",
              }}
            >
              <h4>My books</h4>
              <hr className="line"></hr>
              <ul className="ulbooks">
                {mybooks.map((item, index) => (
                  <li key={index}>
                    <h6>
                      <Link to={`/books/${item._id}`} className="link">
                        {item.title}
                      </Link>
                    </h6>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
