import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BooksContext";
import { Mybooks } from "../components/Mybooks";
import Spinner from "react-bootstrap/Spinner";
import "../static/Books.css";
import { Link } from "react-router-dom";
export const Books = () => {
  const { loding, bok } = useContext(BookContext);
  const [allbooks, setallboks] = useState([]);
  const [n, setn] = useState(5);

  useEffect(() => {
    setallboks(bok.slice(0, n));
  }, [n, bok]);

  useEffect(
    () => {
      const changeN = () => {
        setn(n + 3);
      };
      const nextCard = (e) => {
        if (
          e.target.clientHeight + e.target.scrollTop >=
          e.target.scrollHeight - 2
        ) {
          changeN();
        }
      };

      const scrollcard = document.getElementById("scrollcard");
      scrollcard.addEventListener("scroll", (e) => {
        nextCard(e);
      });
    }, // eslint-disable-next-line
    []
  );

  return (
    <div>
      {loding ? (
        <div className="absolute">
          <Spinner animation="border" variant="primary" size="xxl" />
        </div>
      ) : (
        <>
          <Mybooks />
          <div className="books container" id="scrollcard">
            <ul className="allbooks">
              {allbooks.map((item, index) => (
                <li key={index}>
                  <h3>{item.title}</h3>
                  <p>
                    Book by user{" "}
                    {item.username.charAt(0).toUpperCase() +
                      item.username.slice(1)}
                  </p>
                  <hr className="line"></hr>
                  <Link to={`/books/${item._id}`} className="link2">
                    See
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
