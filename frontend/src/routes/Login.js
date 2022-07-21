import React, { useContext } from "react";
import "../static/Form.css";
import { AppContext } from "../context/appContext";
export const Login = () => {
  const { password, setPassword, username, setUsername, login } =
    useContext(AppContext);
  return (
    <form>
      <div className="form container">
        <h1 className="center">Login</h1>
        <hr className="line"></hr>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={login}
          disabled={!(username && password)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
