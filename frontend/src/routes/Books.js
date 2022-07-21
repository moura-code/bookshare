import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BooksContext";
import { useNavigate } from "react-router-dom";

import "../static/Books.css";
export const Books = () => {
  const navigate = useNavigate();
  const { infomation, loding } = useContext(BookContext);

  try {
    return (
      <div>
        {loding ? (
          <h2>loading</h2>
        ) : (
          <div className="mybooks">
            <ul className="ulbooks">
              {infomation.data.id.listofBooks.map((item) => (
                // Presently we only fetch
                // title from the API
                <h4>hrt</h4>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  } catch {
    navigate("/");
  }
};
