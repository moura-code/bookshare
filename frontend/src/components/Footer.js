import React from "react";
import "../static/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <h4 className="copyright">&#169;This page was made by Joao Calado</h4>
      <a
        href="https://github.com/moura-code"
        target={"_blank"}
        rel="noreferrer"
      >
        <i className="fa fa-github"></i>
      </a>
    </div>
  );
};
