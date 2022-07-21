import React, { useState, useContext } from "react";
import "../static/Header.css";
import { AppContext } from "../context/appContext";
import { Link } from "react-router-dom";
export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const nav = () => {
    setIsActive(!isActive);
  };

  const { loged, logout } = useContext(AppContext);

  return (
    <div className="header">
      <h1>WikiBook</h1>
      <ul
        className="links ulheader"
        style={{
          height: isActive ? "calc(100vh - 500px)" : 0,
          overflowY: isActive ? "overflowY: auto" : "",
        }}
      >
        <li className="liheader">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        {loged && (
          <>
            <li className="liheader">
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
            <li className="liheader">
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
          </>
        )}
        {!loged && (
          <>
            <li className="liheader">
              <Link to="/books" className="link">
                Books
              </Link>
            </li>
            <li className="liheader">
              <button type="button" className="btn btn-dark" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
      <div className="icon" onClick={nav}>
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
  );
};
