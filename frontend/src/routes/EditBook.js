import React, { useContext, useEffect, useState } from "react";
import "../static/Books.css";
import axios from "axios";
import { BookContext } from "../context/BooksContext";
import { useParams } from "react-router-dom";
export const EditBook = () => {
  const { content, setcontent, title, settitle, token, seterr, navigate } =
    useContext(BookContext);
  const para = useParams();

  const putBook = async () => {
    await axios
      .put(
        "http://localhost:5000/api/books/allbooks/" + para.id,
        {
          id: para.id,
          content: content,
          title: title,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((user) => {
        console.log(user);
        seterr("");
        navigate("/");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
        seterr(err.response.data.msg);
      });
  };
  const getbook = async (id) => {
    const name = await axios.get(
      "http://localhost:5000/api/books/allbooks/" + id,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    settitle(name.data.id.title);
    setcontent(name.data.id.content);
  };
  useEffect(() => {
    getbook(para.id);
  }, [para]);

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
          <textarea
            placeholder="Enter your text"
            value={content}
            onChange={(event) => setcontent(event.target.value)}
            rows="8"
            className="create"
          ></textarea>
          <button
            type="button"
            className="btn btn-primary"
            onClick={putBook}
            disabled={!(content && title)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
