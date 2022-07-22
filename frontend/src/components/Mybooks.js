import React, { useContext, useState } from "react";
import { BookContext } from "../context/BooksContext";
import { Link } from "react-router-dom";

import "../static/Books.css";
export const Mybooks = () => {
  const { mybooks } = useContext(BookContext);
  const [isActive, setIsActive] = useState(false);
  const nav = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      {mybooks.length ? (
        <div
          className="mybooks"
          style={{
            backgroundColor: !isActive ? "whitesmoke" : "#F7DAD9",
          }}
        >
          <div className="icon2" onClick={nav}>
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div
            style={{
              display: isActive ? "none" : "block",
            }}
          >
            <h4>My books</h4>

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
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
