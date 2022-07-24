import React from "react";
import "../static/Books.css";
import { useParams } from "react-router-dom";
export const EditBook = () => {
  const a = useParams();
  console.log(a.id);

  return <div>{}</div>;
};
