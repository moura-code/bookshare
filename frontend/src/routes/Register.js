import React, { useContext } from "react";
import "../static/Form.css";
import { AppContext } from "../context/appContext";
export const Register = () => {
  const { password, setPassword, username, setUsername, register } =
    useContext(AppContext);
  return (
    <form>
      <div className="form container">
        <h1 className="center">Register</h1>
        <hr className="line"></hr>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            autoComplete="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            autoComplete="current-password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={register}
          disabled={!(username && password)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
